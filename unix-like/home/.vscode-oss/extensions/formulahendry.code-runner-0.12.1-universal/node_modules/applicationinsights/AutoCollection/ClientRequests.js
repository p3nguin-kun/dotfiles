///<reference path="..\typings\globals\node\index.d.ts" />
"use strict";
var http = require("http");
var https = require("https");
var Logging = require("../Library/Logging");
var Util = require("../Library/Util");
var RequestResponseHeaders = require("../Library/RequestResponseHeaders");
var ClientRequestParser = require("./ClientRequestParser");
var AutoCollectClientRequests = (function () {
    function AutoCollectClientRequests(client) {
        if (!!AutoCollectClientRequests.INSTANCE) {
            throw new Error("Client request tracking should be configured from the applicationInsights object");
        }
        AutoCollectClientRequests.INSTANCE = this;
        this._client = client;
    }
    AutoCollectClientRequests.prototype.enable = function (isEnabled) {
        this._isEnabled = isEnabled;
        if (this._isEnabled && !this._isInitialized) {
            this._initialize();
        }
    };
    AutoCollectClientRequests.prototype.isInitialized = function () {
        return this._isInitialized;
    };
    AutoCollectClientRequests.prototype._initialize = function () {
        var _this = this;
        this._isInitialized = true;
        var originalRequest = http.request;
        http.request = function (options) {
            var requestArgs = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                requestArgs[_i - 1] = arguments[_i];
            }
            var request = originalRequest.call.apply(originalRequest, [http, options].concat(requestArgs));
            if (request && options && !options[AutoCollectClientRequests.disableCollectionRequestOption]) {
                AutoCollectClientRequests.trackRequest(_this._client, options, request);
            }
            return request;
        };
        // On node >= v0.11.12, https.request just calls http.request (with additional options).
        // But on older versions, https.request needs to be patched also.
        // The regex matches versions < 0.11.12 (avoiding a semver package dependency).
        if (/^0\.([0-9]\.)|(10\.)|(11\.([0-9]|10|11)$)/.test(process.versions.node)) {
            var originalHttpsRequest_1 = https.request;
            https.request = function (options) {
                var requestArgs = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    requestArgs[_i - 1] = arguments[_i];
                }
                var request = originalHttpsRequest_1.call.apply(originalHttpsRequest_1, [https, options].concat(requestArgs));
                if (request && options && !options[AutoCollectClientRequests.disableCollectionRequestOption]) {
                    AutoCollectClientRequests.trackRequest(_this._client, options, request);
                }
                return request;
            };
        }
    };
    /**
     * Tracks an outgoing request. Because it may set headers this method must be called before
     * writing content to or ending the request.
     */
    AutoCollectClientRequests.trackRequest = function (client, requestOptions, request, properties) {
        if (!requestOptions || !request || !client) {
            Logging.info("AutoCollectClientRequests.trackRequest was called with invalid parameters: ", !requestOptions, !request, !client);
            return;
        }
        var requestParser = new ClientRequestParser(requestOptions, request);
        // Add the source ikey hash to the request headers, if a value was not already provided.
        // The getHeader/setHeader methods aren't available on very old Node versions, and
        // are not included in the v0.10 type declarations currently used. So check if the
        // methods exist before invoking them.
        if (client.config && client.config.instrumentationKeyHash &&
            Util.canIncludeCorrelationHeader(client, requestParser.getUrl()) &&
            request['getHeader'] && request['setHeader'] &&
            !request['getHeader'](RequestResponseHeaders.sourceInstrumentationKeyHeader)) {
            request['setHeader'](RequestResponseHeaders.sourceInstrumentationKeyHeader, client.config.instrumentationKeyHash);
        }
        // Collect dependency telemetry about the request when it finishes.
        if (request.on) {
            request.on('response', function (response) {
                requestParser.onResponse(response, properties);
                var context = { "http.RequestOptions": requestOptions, "http.ClientRequest": request, "http.ClientResponse": response };
                client.track(requestParser.getDependencyData(), null, context);
            });
            request.on('error', function (e) {
                requestParser.onError(e, properties);
                var context = { "http.RequestOptions": requestOptions, "http.ClientRequest": request, "Error": e };
                client.track(requestParser.getDependencyData(), null, context);
            });
        }
    };
    AutoCollectClientRequests.prototype.dispose = function () {
        AutoCollectClientRequests.INSTANCE = null;
        this._isInitialized = false;
    };
    AutoCollectClientRequests.disableCollectionRequestOption = 'disableAppInsightsAutoCollection';
    return AutoCollectClientRequests;
}());
module.exports = AutoCollectClientRequests;

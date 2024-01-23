///<reference path="..\typings\globals\node\index.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var url = require("url");
var ContractsModule = require("../Library/Contracts");
var Util = require("../Library/Util");
var RequestResponseHeaders = require("../Library/RequestResponseHeaders");
var RequestParser = require("./RequestParser");
/**
 * Helper class to read data from the requst/response objects and convert them into the telemetry contract
 */
var ClientRequestParser = (function (_super) {
    __extends(ClientRequestParser, _super);
    function ClientRequestParser(requestOptions, request) {
        _super.call(this);
        if (request && request.method && requestOptions) {
            // The ClientRequest.method property isn't documented, but is always there.
            this.method = request.method;
            this.url = ClientRequestParser._getUrlFromRequestOptions(requestOptions, request);
            this.startTime = +new Date();
        }
    }
    /**
     * Called when the ClientRequest emits an error event.
     */
    ClientRequestParser.prototype.onError = function (error, properties) {
        this._setStatus(undefined, error, properties);
    };
    /**
     * Called when the ClientRequest emits a response event.
     */
    ClientRequestParser.prototype.onResponse = function (response, properties) {
        this._setStatus(response.statusCode, undefined, properties);
        this.targetIKeyHash =
            response.headers && response.headers[RequestResponseHeaders.targetInstrumentationKeyHeader];
    };
    /**
     * Gets a dependency data contract object for a completed ClientRequest.
     */
    ClientRequestParser.prototype.getDependencyData = function () {
        var urlObject = url.parse(this.url);
        urlObject.search = undefined;
        urlObject.hash = undefined;
        var dependencyName = this.method.toUpperCase() + " " + urlObject.pathname;
        var remoteDependency = new ContractsModule.Contracts.RemoteDependencyData();
        remoteDependency.type = ContractsModule.Contracts.RemoteDependencyDataConstants.TYPE_HTTP;
        if (this.targetIKeyHash) {
            remoteDependency.type = "ApplicationInsights";
            remoteDependency.target = urlObject.hostname + " | " + this.targetIKeyHash;
        }
        else {
            remoteDependency.type = ContractsModule.Contracts.RemoteDependencyDataConstants.TYPE_HTTP;
            remoteDependency.target = urlObject.hostname;
        }
        remoteDependency.name = dependencyName;
        remoteDependency.data = this.url;
        remoteDependency.duration = Util.msToTimeSpan(this.duration);
        remoteDependency.success = this._isSuccess();
        remoteDependency.resultCode = this.statusCode ? this.statusCode.toString() : null;
        remoteDependency.properties = this.properties || {};
        var data = new ContractsModule.Contracts.Data();
        data.baseType = "Microsoft.ApplicationInsights.RemoteDependencyData";
        data.baseData = remoteDependency;
        return data;
    };
    /**
     * Builds a URL from request options, using the same logic as http.request(). This is
     * necessary because a ClientRequest object does not expose a url property.
     */
    ClientRequestParser._getUrlFromRequestOptions = function (options, request) {
        if (typeof options === 'string') {
            options = url.parse(options);
        }
        else {
            // Avoid modifying the original options object.
            var originalOptions_1 = options;
            options = {};
            if (originalOptions_1) {
                Object.keys(originalOptions_1).forEach(function (key) {
                    options[key] = originalOptions_1[key];
                });
            }
        }
        // Oddly, url.format ignores path and only uses pathname and search,
        // so create them from the path, if path was specified
        if (options.path) {
            var parsedQuery = url.parse(options.path);
            options.pathname = parsedQuery.pathname;
            options.search = parsedQuery.search;
        }
        // Simiarly, url.format ignores hostname and port if host is specified,
        // even if host doesn't have the port, but http.request does not work
        // this way. It will use the port if one is not specified in host,
        // effectively treating host as hostname, but will use the port specified
        // in host if it exists.
        if (options.host && options.port) {
            // Force a protocol so it will parse the host as the host, not path.
            // It is discarded and not used, so it doesn't matter if it doesn't match
            var parsedHost = url.parse("http://" + options.host);
            if (!parsedHost.port && options.port) {
                options.hostname = options.host;
                delete options.host;
            }
        }
        // Mix in default values used by http.request and others
        options.protocol = options.protocol || request.agent.protocol;
        options.hostname = options.hostname || 'localhost';
        return url.format(options);
    };
    return ClientRequestParser;
}(RequestParser));
module.exports = ClientRequestParser;

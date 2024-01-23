///<reference path="..\typings\globals\node\index.d.ts" />
"use strict";
var crypto = require('crypto');
var Config = (function () {
    function Config(instrumentationKey) {
        this.instrumentationKey = instrumentationKey || Config._getInstrumentationKey();
        this.instrumentationKeyHash = Config._getStringHashBase64(this.instrumentationKey);
        this.endpointUrl = "https://dc.services.visualstudio.com/v2/track";
        this.sessionRenewalMs = 30 * 60 * 1000;
        this.sessionExpirationMs = 24 * 60 * 60 * 1000;
        this.maxBatchSize = 250;
        this.maxBatchIntervalMs = 15000;
        this.disableAppInsights = false;
        this.correlationHeaderExcludedDomains = [
            "*.blob.core.windows.net",
            "*.blob.core.chinacloudapi.cn",
            "*.blob.core.cloudapi.de",
            "*.blob.core.usgovcloudapi.net"];
    }
    Config._getInstrumentationKey = function () {
        // check for both the documented env variable and the azure-prefixed variable
        var iKey = process.env[Config.ENV_iKey]
            || process.env[Config.ENV_azurePrefix + Config.ENV_iKey]
            || process.env[Config.legacy_ENV_iKey]
            || process.env[Config.ENV_azurePrefix + Config.legacy_ENV_iKey];
        if (!iKey || iKey == "") {
            throw new Error("Instrumentation key not found, pass the key in the config to this method or set the key in the environment variable APPINSIGHTS_INSTRUMENTATIONKEY before starting the server");
        }
        return iKey;
    };
    Config._getStringHashBase64 = function (value) {
        var hash = crypto.createHash('sha256');
        hash.update(value);
        var result = hash.digest('base64');
        return result;
    };
    // Azure adds this prefix to all environment variables
    Config.ENV_azurePrefix = "APPSETTING_";
    // This key is provided in the readme
    Config.ENV_iKey = "APPINSIGHTS_INSTRUMENTATIONKEY";
    Config.legacy_ENV_iKey = "APPINSIGHTS_INSTRUMENTATION_KEY";
    return Config;
}());
module.exports = Config;

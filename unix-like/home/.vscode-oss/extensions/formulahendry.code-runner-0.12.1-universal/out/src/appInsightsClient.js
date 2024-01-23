"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appInsights = require("applicationinsights");
const vscode = require("vscode");
class AppInsightsClient {
    constructor() {
        this._client = appInsights.getClient("a25ddf11-20fc-45c6-96ae-524f47754f28");
        const config = vscode.workspace.getConfiguration("code-runner");
        this._enableAppInsights = config.get("enableAppInsights");
    }
    sendEvent(eventName, properties) {
        if (this._enableAppInsights) {
            this._client.trackEvent(eventName === "" ? "bat" : eventName, properties);
        }
    }
}
exports.AppInsightsClient = AppInsightsClient;
//# sourceMappingURL=appInsightsClient.js.map
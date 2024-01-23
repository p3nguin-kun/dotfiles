"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const codeManager_1 = require("./codeManager");
function activate(context) {
    const codeManager = new codeManager_1.CodeManager();
    vscode.window.onDidCloseTerminal(() => {
        codeManager.onDidCloseTerminal();
    });
    const run = vscode.commands.registerCommand("code-runner.run", (fileUri) => {
        codeManager.run(null, fileUri);
    });
    const runCustomCommand = vscode.commands.registerCommand("code-runner.runCustomCommand", () => {
        codeManager.runCustomCommand();
    });
    const runByLanguage = vscode.commands.registerCommand("code-runner.runByLanguage", () => {
        codeManager.runByLanguage();
    });
    const stop = vscode.commands.registerCommand("code-runner.stop", () => {
        codeManager.stop();
    });
    context.subscriptions.push(run);
    context.subscriptions.push(runCustomCommand);
    context.subscriptions.push(runByLanguage);
    context.subscriptions.push(stop);
    context.subscriptions.push(codeManager);
}
exports.activate = activate;
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map
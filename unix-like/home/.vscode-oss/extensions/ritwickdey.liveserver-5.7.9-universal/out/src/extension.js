'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode_1 = require("vscode");
const appModel_1 = require("./appModel");
const announcement_1 = require("./announcement");
function activate(context) {
    const appModel = new appModel_1.AppModel();
    Promise.resolve().then(() => {
        context.globalState.setKeysForSync([announcement_1.SETUP_STRING]);
        (0, announcement_1.checkNewAnnouncement)(context.globalState);
    });
    context.subscriptions.push(vscode_1.commands
        .registerCommand('extension.liveServer.goOnline', (fileUri) => __awaiter(this, void 0, void 0, function* () {
        yield vscode_1.workspace.saveAll();
        appModel.Golive(fileUri ? fileUri.fsPath : null);
    })));
    context.subscriptions.push(vscode_1.commands
        .registerCommand('extension.liveServer.goOffline', () => {
        appModel.GoOffline();
    }));
    context.subscriptions.push(vscode_1.commands
        .registerCommand('extension.liveServer.changeWorkspace', () => {
        appModel.changeWorkspaceRoot();
    }));
    context.subscriptions.push(appModel);
}
exports.activate = activate;
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map
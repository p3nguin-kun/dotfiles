"use strict";
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
const vscode = require("vscode");
const constants_1 = require("./constants");
class Utility {
    static getPythonPath(document) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const extension = vscode.extensions.getExtension("ms-python.python");
                if (!extension) {
                    return constants_1.Constants.python;
                }
                const usingNewInterpreterStorage = (_b = (_a = extension.packageJSON) === null || _a === void 0 ? void 0 : _a.featureFlags) === null || _b === void 0 ? void 0 : _b.usingNewInterpreterStorage;
                if (usingNewInterpreterStorage) {
                    if (!extension.isActive) {
                        yield extension.activate();
                    }
                    const execCommand = extension.exports.settings.getExecutionDetails ?
                        extension.exports.settings.getExecutionDetails(document === null || document === void 0 ? void 0 : document.uri).execCommand :
                        extension.exports.settings.getExecutionCommand(document === null || document === void 0 ? void 0 : document.uri);
                    return execCommand ? execCommand.join(" ") : constants_1.Constants.python;
                }
                else {
                    return this.getConfiguration("python", document).get("pythonPath");
                }
            }
            catch (error) {
                return constants_1.Constants.python;
            }
        });
    }
    static getConfiguration(section, document) {
        if (document) {
            return vscode.workspace.getConfiguration(section, document.uri);
        }
        else {
            return vscode.workspace.getConfiguration(section);
        }
    }
}
exports.Utility = Utility;
//# sourceMappingURL=utility.js.map
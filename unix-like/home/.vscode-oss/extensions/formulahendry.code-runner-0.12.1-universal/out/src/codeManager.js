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
const fs = require("fs");
const micromatch = require("micromatch");
const os = require("os");
const path_1 = require("path");
const vscode = require("vscode");
const appInsightsClient_1 = require("./appInsightsClient");
const constants_1 = require("./constants");
const utility_1 = require("./utility");
const TmpDir = os.tmpdir();
class CodeManager {
    constructor() {
        this._TERMINAL_DEFAULT_SHELL_WINDOWS = null;
        this._outputChannel = vscode.window.createOutputChannel("Code");
        this._terminal = null;
        this._appInsightsClient = new appInsightsClient_1.AppInsightsClient();
    }
    onDidCloseTerminal() {
        this._terminal = null;
    }
    run(languageId = null, fileUri = null) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._isRunning) {
                vscode.window.showInformationMessage("Code is already running!");
                return;
            }
            this._runFromExplorer = this.checkIsRunFromExplorer(fileUri);
            if (this._runFromExplorer) {
                this._document = yield vscode.workspace.openTextDocument(fileUri);
            }
            else {
                const editor = vscode.window.activeTextEditor;
                if (editor) {
                    this._document = editor.document;
                }
                else {
                    vscode.window.showInformationMessage("No code found or selected.");
                    return;
                }
            }
            this.initialize();
            const fileExtension = path_1.extname(this._document.fileName);
            const executor = this.getExecutor(languageId, fileExtension);
            // undefined or null
            if (executor == null) {
                vscode.window.showInformationMessage("Code language not supported or defined.");
                return;
            }
            this.getCodeFileAndExecute(fileExtension, executor);
        });
    }
    runCustomCommand() {
        if (this._isRunning) {
            vscode.window.showInformationMessage("Code is already running!");
            return;
        }
        this._runFromExplorer = false;
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            this._document = editor.document;
        }
        this.initialize();
        const executor = this._config.get("customCommand");
        if (this._document) {
            const fileExtension = path_1.extname(this._document.fileName);
            this.getCodeFileAndExecute(fileExtension, executor, false);
        }
        else {
            this.executeCommand(executor, false);
        }
    }
    runByLanguage() {
        this._appInsightsClient.sendEvent("runByLanguage");
        const config = this.getConfiguration("code-runner");
        const executorMap = config.get("executorMap");
        vscode.window.showQuickPick(Object.keys(executorMap), { placeHolder: "Type or select language to run" }).then((languageId) => {
            if (languageId !== undefined) {
                this.run(languageId);
            }
        });
    }
    stop() {
        this._appInsightsClient.sendEvent("stop");
        this.stopRunning();
    }
    dispose() {
        this.stopRunning();
    }
    checkIsRunFromExplorer(fileUri) {
        const editor = vscode.window.activeTextEditor;
        if (!fileUri || !fileUri.fsPath) {
            return false;
        }
        if (!editor) {
            return true;
        }
        if (fileUri.fsPath === editor.document.uri.fsPath) {
            return false;
        }
        return true;
    }
    stopRunning() {
        if (this._isRunning) {
            this._isRunning = false;
            vscode.commands.executeCommand("setContext", "code-runner.codeRunning", false);
            const kill = require("tree-kill");
            kill(this._process.pid);
        }
    }
    initialize() {
        this._config = this.getConfiguration("code-runner");
        this._cwd = this._config.get("cwd");
        if (this._cwd) {
            return;
        }
        this._workspaceFolder = this.getWorkspaceFolder();
        if ((this._config.get("fileDirectoryAsCwd") || !this._workspaceFolder)
            && this._document && !this._document.isUntitled) {
            this._cwd = path_1.dirname(this._document.fileName);
        }
        else {
            this._cwd = this._workspaceFolder;
        }
        if (this._cwd) {
            return;
        }
        this._cwd = TmpDir;
    }
    getConfiguration(section) {
        return utility_1.Utility.getConfiguration(section, this._document);
    }
    getWorkspaceFolder() {
        if (vscode.workspace.workspaceFolders) {
            if (this._document) {
                const workspaceFolder = vscode.workspace.getWorkspaceFolder(this._document.uri);
                if (workspaceFolder) {
                    return workspaceFolder.uri.fsPath;
                }
            }
            return vscode.workspace.workspaceFolders[0].uri.fsPath;
        }
        else {
            return undefined;
        }
    }
    getCodeFileAndExecute(fileExtension, executor, appendFile = true) {
        let selection;
        const activeTextEditor = vscode.window.activeTextEditor;
        if (activeTextEditor) {
            selection = activeTextEditor.selection;
        }
        const ignoreSelection = this._config.get("ignoreSelection");
        if ((this._runFromExplorer || !selection || selection.isEmpty || ignoreSelection) && !this._document.isUntitled) {
            this._isTmpFile = false;
            this._codeFile = this._document.fileName;
            if (this._config.get("saveAllFilesBeforeRun")) {
                return vscode.workspace.saveAll().then(() => {
                    this.executeCommand(executor, appendFile);
                });
            }
            if (this._config.get("saveFileBeforeRun")) {
                return this._document.save().then(() => {
                    this.executeCommand(executor, appendFile);
                });
            }
        }
        else {
            let text = (this._runFromExplorer || !selection || selection.isEmpty || ignoreSelection) ?
                this._document.getText() : this._document.getText(selection);
            if (this._languageId === "php") {
                text = text.trim();
                if (!text.startsWith("<?php")) {
                    text = "<?php\r\n" + text;
                }
            }
            this._isTmpFile = true;
            const folder = this._document.isUntitled ? this._cwd : path_1.dirname(this._document.fileName);
            this.createRandomFile(text, folder, fileExtension);
        }
        this.executeCommand(executor, appendFile);
    }
    rndName() {
        return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 10);
    }
    createRandomFile(content, folder, fileExtension) {
        let fileType = "";
        const languageIdToFileExtensionMap = this._config.get("languageIdToFileExtensionMap");
        if (this._languageId && languageIdToFileExtensionMap[this._languageId]) {
            fileType = languageIdToFileExtensionMap[this._languageId];
        }
        else {
            if (fileExtension) {
                fileType = fileExtension;
            }
            else {
                fileType = "." + this._languageId;
            }
        }
        const temporaryFileName = this._config.get("temporaryFileName");
        const tmpFileNameWithoutExt = temporaryFileName ? temporaryFileName : "temp" + this.rndName();
        const tmpFileName = tmpFileNameWithoutExt + fileType;
        this._codeFile = path_1.join(folder, tmpFileName);
        fs.writeFileSync(this._codeFile, content);
    }
    getExecutor(languageId, fileExtension) {
        this._languageId = languageId === null ? this._document.languageId : languageId;
        let executor = null;
        // Check if file contains hash-bang
        if (languageId == null && this._config.get("respectShebang")) {
            const firstLineInFile = this._document.lineAt(0).text;
            if (/^#!(?!\[)/.test(firstLineInFile)) { // #![...] are used in rust https://doc.rust-lang.org/reference/attributes.html
                executor = firstLineInFile.slice(2);
            }
        }
        if (executor == null) {
            const executorMapByGlob = this._config.get("executorMapByGlob");
            if (executorMapByGlob) {
                const fileBasename = path_1.basename(this._document.fileName);
                for (const glob of Object.keys(executorMapByGlob)) {
                    if (micromatch.isMatch(fileBasename, glob)) {
                        executor = executorMapByGlob[glob];
                        break;
                    }
                }
            }
        }
        const executorMap = this._config.get("executorMap");
        if (executor == null) {
            executor = executorMap[this._languageId];
        }
        // executor is undefined or null
        if (executor == null && fileExtension) {
            const executorMapByFileExtension = this._config.get("executorMapByFileExtension");
            executor = executorMapByFileExtension[fileExtension];
            if (executor != null) {
                this._languageId = fileExtension;
            }
        }
        if (executor == null) {
            this._languageId = this._config.get("defaultLanguage");
            executor = executorMap[this._languageId];
        }
        return executor;
    }
    executeCommand(executor, appendFile = true) {
        if (this._config.get("runInTerminal")) {
            this.executeCommandInTerminal(executor, appendFile);
        }
        else {
            this.executeCommandInOutputChannel(executor, appendFile);
        }
    }
    getWorkspaceRoot(codeFileDir) {
        return this._workspaceFolder ? this._workspaceFolder : codeFileDir;
    }
    /**
     * Gets the base name of the code file, that is without its directory.
     */
    getCodeBaseFile() {
        const regexMatch = this._codeFile.match(/.*[\/\\](.*)/);
        return regexMatch ? regexMatch[1] : this._codeFile;
    }
    /**
     * Gets the code file name without its directory and extension.
     */
    getCodeFileWithoutDirAndExt() {
        const regexMatch = this._codeFile.match(/.*[\/\\](.*(?=\..*))/);
        return regexMatch ? regexMatch[1] : this._codeFile;
    }
    /**
     * Gets the directory of the code file.
     */
    getCodeFileDir() {
        const regexMatch = this._codeFile.match(/(.*[\/\\]).*/);
        return regexMatch ? regexMatch[1] : this._codeFile;
    }
    /**
     * Gets the drive letter of the code file.
     */
    getDriveLetter() {
        const regexMatch = this._codeFile.match(/^([A-Za-z]:).*/);
        return regexMatch ? regexMatch[1] : "$driveLetter";
    }
    /**
     * Gets the directory of the code file without a trailing slash.
     */
    getCodeFileDirWithoutTrailingSlash() {
        return this.getCodeFileDir().replace(/[\/\\]$/, "");
    }
    /**
     * Includes double quotes around a given file name.
     */
    quoteFileName(fileName) {
        return '\"' + fileName + '\"';
    }
    /**
     * Gets the executor to run a source code file
     * and generates the complete command that allow that file to be run.
     * This executor command may include a variable $1 to indicate the place where
     * the source code file name have to be included.
     * If no such a variable is present in the executor command,
     * the file name is appended to the end of the executor command.
     *
     * @param executor The command used to run a source code file
     * @return the complete command to run the file, that includes the file name
     */
    getFinalCommandToRunCodeFile(executor, appendFile = true) {
        return __awaiter(this, void 0, void 0, function* () {
            let cmd = executor;
            if (this._codeFile) {
                const codeFileDir = this.getCodeFileDir();
                const pythonPath = cmd.includes("$pythonPath") ? yield utility_1.Utility.getPythonPath(this._document) : constants_1.Constants.python;
                const placeholders = [
                    // A placeholder that has to be replaced by the path of the folder opened in VS Code
                    // If no folder is opened, replace with the directory of the code file
                    { regex: /\$workspaceRoot/g, replaceValue: this.getWorkspaceRoot(codeFileDir) },
                    // A placeholder that has to be replaced by the code file name without its extension
                    { regex: /\$fileNameWithoutExt/g, replaceValue: this.getCodeFileWithoutDirAndExt() },
                    // A placeholder that has to be replaced by the full code file name
                    { regex: /\$fullFileName/g, replaceValue: this.quoteFileName(this._codeFile) },
                    // A placeholder that has to be replaced by the code file name without the directory
                    { regex: /\$fileName/g, replaceValue: this.getCodeBaseFile() },
                    // A placeholder that has to be replaced by the drive letter of the code file (Windows only)
                    { regex: /\$driveLetter/g, replaceValue: this.getDriveLetter() },
                    // A placeholder that has to be replaced by the directory of the code file without a trailing slash
                    { regex: /\$dirWithoutTrailingSlash/g, replaceValue: this.quoteFileName(this.getCodeFileDirWithoutTrailingSlash()) },
                    // A placeholder that has to be replaced by the directory of the code file
                    { regex: /\$dir/g, replaceValue: this.quoteFileName(codeFileDir) },
                    // A placeholder that has to be replaced by the path of Python interpreter
                    { regex: /\$pythonPath/g, replaceValue: pythonPath },
                ];
                placeholders.forEach((placeholder) => {
                    cmd = cmd.replace(placeholder.regex, placeholder.replaceValue);
                });
            }
            return (cmd !== executor ? cmd : executor + (appendFile ? " " + this.quoteFileName(this._codeFile) : ""));
        });
    }
    changeExecutorFromCmdToPs(executor) {
        if (executor.includes(" && ") && this.isPowershellOnWindows()) {
            let replacement = "; if ($?) {";
            executor = executor.replace("&&", replacement);
            replacement = "} " + replacement;
            executor = executor.replace(/&&/g, replacement);
            executor = executor.replace(/\$dir\$fileNameWithoutExt/g, ".\\$fileNameWithoutExt");
            return executor + " }";
        }
        return executor;
    }
    isPowershellOnWindows() {
        if (os.platform() === "win32") {
            const defaultProfile = vscode.workspace.getConfiguration("terminal").get("integrated.defaultProfile.windows");
            if (defaultProfile) {
                if (defaultProfile.toLowerCase().includes("powershell")) {
                    return true;
                }
                else if (defaultProfile === "Command Prompt") {
                    return false;
                }
            }
            const windowsShell = vscode.env.shell;
            return (windowsShell && windowsShell.toLowerCase().includes("powershell"));
        }
        return false;
    }
    changeFilePathForBashOnWindows(command) {
        if (os.platform() === "win32") {
            const windowsShell = vscode.env.shell;
            const terminalRoot = this._config.get("terminalRoot");
            if (windowsShell && terminalRoot) {
                command = command
                    .replace(/([A-Za-z]):\\/g, (match, p1) => `${terminalRoot}${p1.toLowerCase()}/`)
                    .replace(/\\/g, "/");
            }
            else if (windowsShell && windowsShell.toLowerCase().indexOf("bash") > -1 && windowsShell.toLowerCase().indexOf("windows") > -1) {
                command = command.replace(/([A-Za-z]):\\/g, this.replacer).replace(/\\/g, "/");
            }
        }
        return command;
    }
    replacer(match, p1) {
        return `/mnt/${p1.toLowerCase()}/`;
    }
    executeCommandInTerminal(executor, appendFile = true) {
        return __awaiter(this, void 0, void 0, function* () {
            let isNewTerminal = false;
            if (this._terminal === null) {
                this._terminal = vscode.window.createTerminal("Code");
                isNewTerminal = true;
            }
            this._terminal.show(this._config.get("preserveFocus"));
            this.sendRunEvent(executor, true);
            executor = this.changeExecutorFromCmdToPs(executor);
            let command = yield this.getFinalCommandToRunCodeFile(executor, appendFile);
            command = this.changeFilePathForBashOnWindows(command);
            if (this._config.get("clearPreviousOutput") && !isNewTerminal) {
                yield vscode.commands.executeCommand("workbench.action.terminal.clear");
            }
            if (this._config.get("fileDirectoryAsCwd")) {
                const cwd = this.changeFilePathForBashOnWindows(this._cwd);
                this._terminal.sendText(`cd "${cwd}"`);
            }
            this._terminal.sendText(command);
        });
    }
    executeCommandInOutputChannel(executor, appendFile = true) {
        return __awaiter(this, void 0, void 0, function* () {
            this._isRunning = true;
            vscode.commands.executeCommand("setContext", "code-runner.codeRunning", true);
            const clearPreviousOutput = this._config.get("clearPreviousOutput");
            if (clearPreviousOutput) {
                this._outputChannel.clear();
            }
            const showExecutionMessage = this._config.get("showExecutionMessage");
            this._outputChannel.show(this._config.get("preserveFocus"));
            const spawn = require("child_process").spawn;
            const command = yield this.getFinalCommandToRunCodeFile(executor, appendFile);
            if (showExecutionMessage) {
                this._outputChannel.appendLine("[Running] " + command);
            }
            this.sendRunEvent(executor, false);
            const startTime = new Date();
            this._process = spawn(command, [], { cwd: this._cwd, shell: true });
            this._process.stdout.on("data", (data) => {
                this._outputChannel.append(data.toString());
            });
            this._process.stderr.on("data", (data) => {
                this._outputChannel.append(data.toString());
            });
            this._process.on("close", (code) => {
                this._isRunning = false;
                vscode.commands.executeCommand("setContext", "code-runner.codeRunning", false);
                const endTime = new Date();
                const elapsedTime = (endTime.getTime() - startTime.getTime()) / 1000;
                this._outputChannel.appendLine("");
                if (showExecutionMessage) {
                    this._outputChannel.appendLine("[Done] exited with code=" + code + " in " + elapsedTime + " seconds");
                    this._outputChannel.appendLine("");
                }
                if (this._isTmpFile) {
                    fs.unlinkSync(this._codeFile);
                }
            });
        });
    }
    sendRunEvent(executor, runFromTerminal) {
        const properties = {
            runFromTerminal: runFromTerminal.toString(),
            runFromExplorer: this._runFromExplorer.toString(),
            isTmpFile: this._isTmpFile.toString(),
        };
        this._appInsightsClient.sendEvent(executor, properties);
    }
}
exports.CodeManager = CodeManager;
//# sourceMappingURL=codeManager.js.map
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerEventListener = exports.registerCommand = exports.activate = exports.getAndUpdateModeHandler = void 0;
const vscode = __importStar(require("vscode"));
const compositionState_1 = require("./src/state/compositionState");
const globals_1 = require("./src/globals");
const jump_1 = require("./src/jumps/jump");
const modeHandlerMap_1 = require("./src/mode/modeHandlerMap");
const mode_1 = require("./src/mode/mode");
const notation_1 = require("./src/configuration/notation");
const logger_1 = require("./src/util/logger");
const statusBar_1 = require("./src/statusBar");
const vscodeContext_1 = require("./src/util/vscodeContext");
const commandLine_1 = require("./src/cmd_line/commandLine");
const configuration_1 = require("./src/configuration/configuration");
const globalState_1 = require("./src/state/globalState");
const register_1 = require("./src/register/register");
const specialKeys_1 = require("./src/util/specialKeys");
const exCommandParser_1 = require("./src/vimscript/exCommandParser");
const taskQueue_1 = require("./src/taskQueue");
let extensionContext;
let previousActiveEditorUri;
let lastClosedModeHandler = null;
async function getAndUpdateModeHandler(forceSyncAndUpdate = false) {
    const activeTextEditor = vscode.window.activeTextEditor;
    if (activeTextEditor === undefined || activeTextEditor.document.isClosed) {
        return undefined;
    }
    const [curHandler, isNew] = await modeHandlerMap_1.ModeHandlerMap.getOrCreate(activeTextEditor);
    if (isNew) {
        extensionContext.subscriptions.push(curHandler);
    }
    curHandler.vimState.editor = activeTextEditor;
    if (forceSyncAndUpdate ||
        !previousActiveEditorUri ||
        previousActiveEditorUri !== activeTextEditor.document.uri) {
        // We sync the cursors here because ModeHandler is specific to a document, not an editor, so we
        // need to update our representation of the cursors when switching between editors for the same document.
        // This will be unnecessary once #4889 is fixed.
        curHandler.syncCursors();
        await curHandler.updateView({ drawSelection: false, revealRange: false });
    }
    previousActiveEditorUri = activeTextEditor.document.uri;
    if (curHandler.focusChanged) {
        curHandler.focusChanged = false;
        if (previousActiveEditorUri) {
            const prevHandler = modeHandlerMap_1.ModeHandlerMap.get(previousActiveEditorUri);
            prevHandler.focusChanged = true;
        }
    }
    return curHandler;
}
exports.getAndUpdateModeHandler = getAndUpdateModeHandler;
/**
 * Loads and validates the user's configuration
 */
async function loadConfiguration() {
    const validatorResults = await configuration_1.configuration.load();
    logger_1.Logger.debug(`${validatorResults.numErrors} errors found with vim configuration`);
    if (validatorResults.numErrors > 0) {
        for (const validatorResult of validatorResults.get()) {
            switch (validatorResult.level) {
                case 'error':
                    logger_1.Logger.error(validatorResult.message);
                    break;
                case 'warning':
                    logger_1.Logger.warn(validatorResult.message);
                    break;
            }
        }
    }
}
/**
 * The extension's entry point
 */
async function activate(context, handleLocal = true) {
    commandLine_1.ExCommandLine.parser = exCommandParser_1.exCommandParser;
    logger_1.Logger.init();
    // before we do anything else, we need to load the configuration
    await loadConfiguration();
    logger_1.Logger.debug('Start');
    extensionContext = context;
    extensionContext.subscriptions.push(statusBar_1.StatusBar);
    // Load state
    register_1.Register.loadFromDisk(handleLocal);
    await Promise.all([commandLine_1.ExCommandLine.loadHistory(context), commandLine_1.SearchCommandLine.loadHistory(context)]);
    if (vscode.window.activeTextEditor) {
        const filepathComponents = vscode.window.activeTextEditor.document.fileName.split(/\\|\//);
        register_1.Register.setReadonlyRegister('%', filepathComponents[filepathComponents.length - 1]);
    }
    // workspace events
    registerEventListener(context, vscode.workspace.onDidChangeConfiguration, async () => {
        logger_1.Logger.info('Configuration changed');
        await loadConfiguration();
    }, false);
    registerEventListener(context, vscode.workspace.onDidChangeTextDocument, async (event) => {
        if (event.document.uri.scheme === 'output') {
            // Without this, we'll get an infinite logging loop
            return;
        }
        if (event.contentChanges.length === 0) {
            // This happens when the document is saved
            return;
        }
        logger_1.Logger.debug(`${event.contentChanges.length} change(s) to ${event.document.fileName} because ${event.reason}`);
        for (const x of event.contentChanges) {
            logger_1.Logger.trace(`\t-${x.rangeLength}, +'${x.text}'`);
        }
        if (event.contentChanges.length === 1) {
            const change = event.contentChanges[0];
            const anyLinesDeleted = change.range.start.line !== change.range.end.line;
            if (anyLinesDeleted && change.text === '') {
                globalState_1.globalState.jumpTracker.handleTextDeleted(event.document, change.range);
            }
            else if (!anyLinesDeleted && change.text.includes('\n')) {
                globalState_1.globalState.jumpTracker.handleTextAdded(event.document, change.range, change.text);
            }
            else {
                // TODO: What to do here?
            }
        }
        else {
            // TODO: In this case, we should probably loop over the content changes...
        }
        // Change from VSCode editor should set document.isDirty to true but they initially don't!
        // There is a timing issue in VSCode codebase between when the isDirty flag is set and
        // when registered callbacks are fired. https://github.com/Microsoft/vscode/issues/11339
        const contentChangeHandler = (modeHandler) => {
            if (modeHandler.vimState.currentMode === mode_1.Mode.Insert) {
                if (modeHandler.vimState.historyTracker.currentContentChanges === undefined) {
                    modeHandler.vimState.historyTracker.currentContentChanges = [];
                }
                modeHandler.vimState.historyTracker.currentContentChanges =
                    modeHandler.vimState.historyTracker.currentContentChanges.concat(event.contentChanges);
            }
        };
        const mh = modeHandlerMap_1.ModeHandlerMap.get(event.document.uri);
        if (mh) {
            contentChangeHandler(mh);
        }
    });
    registerEventListener(context, vscode.workspace.onDidCloseTextDocument, async (closedDocument) => {
        logger_1.Logger.info(`${closedDocument.fileName} closed`);
        // Delete modehandler once all tabs of this document have been closed
        for (const [uri, modeHandler] of modeHandlerMap_1.ModeHandlerMap.entries()) {
            let shouldDelete = false;
            if (modeHandler == null) {
                shouldDelete = true;
            }
            else {
                const document = modeHandler.vimState.document;
                if (!vscode.workspace.textDocuments.includes(document)) {
                    shouldDelete = true;
                    if (closedDocument === document) {
                        lastClosedModeHandler = modeHandler;
                    }
                }
            }
            if (shouldDelete) {
                modeHandlerMap_1.ModeHandlerMap.delete(uri);
            }
        }
    }, false);
    // window events
    registerEventListener(context, vscode.window.onDidChangeActiveTextEditor, async (activeTextEditor) => {
        if (activeTextEditor) {
            logger_1.Logger.info(`Active editor: ${activeTextEditor.document.uri}`);
        }
        else {
            logger_1.Logger.debug(`No active editor`);
        }
        const mhPrevious = previousActiveEditorUri
            ? modeHandlerMap_1.ModeHandlerMap.get(previousActiveEditorUri)
            : undefined;
        // Track the closed editor so we can use it the next time an open event occurs.
        // When vscode changes away from a temporary file, onDidChangeActiveTextEditor first twice.
        // First it fires when leaving the closed editor. Then onDidCloseTextDocument first, and we delete
        // the old ModeHandler. Then a new editor opens.
        //
        // This also applies to files that are merely closed, which allows you to jump back to that file similarly
        // once a new file is opened.
        lastClosedModeHandler = mhPrevious || lastClosedModeHandler;
        const oldFileRegister = (await register_1.Register.get('%'))?.text;
        const relativePath = activeTextEditor
            ? vscode.workspace.asRelativePath(activeTextEditor.document.uri, false)
            : '';
        if (relativePath !== oldFileRegister) {
            if (oldFileRegister && oldFileRegister !== '') {
                register_1.Register.setReadonlyRegister('#', oldFileRegister);
            }
            register_1.Register.setReadonlyRegister('%', relativePath);
        }
        if (activeTextEditor === undefined) {
            return;
        }
        taskQueue_1.taskQueue.enqueueTask(async () => {
            const mh = await getAndUpdateModeHandler(true);
            if (mh) {
                globalState_1.globalState.jumpTracker.handleFileJump(lastClosedModeHandler ? jump_1.Jump.fromStateNow(lastClosedModeHandler.vimState) : null, jump_1.Jump.fromStateNow(mh.vimState));
            }
        });
    }, true, true);
    registerEventListener(context, vscode.window.onDidChangeTextEditorSelection, async (e) => {
        if (e.textEditor.document.uri.scheme === 'output') {
            // Without this, we can an infinite logging loop
            return;
        }
        if (vscode.window.activeTextEditor === undefined ||
            e.textEditor.document !== vscode.window.activeTextEditor.document) {
            // We don't care if user selection changed in a paneled window (e.g debug console/terminal)
            return;
        }
        const mh = modeHandlerMap_1.ModeHandlerMap.get(vscode.window.activeTextEditor.document.uri);
        if (mh === undefined) {
            // We don't care if there is no active editor
            return;
        }
        if (e.kind !== vscode.TextEditorSelectionChangeKind.Mouse) {
            const selectionsHash = e.selections.reduce((hash, s) => hash +
                `[${s.anchor.line}, ${s.anchor.character}; ${s.active.line}, ${s.active.character}]`, '');
            const idx = mh.selectionsChanged.ourSelections.indexOf(selectionsHash);
            if (idx > -1) {
                mh.selectionsChanged.ourSelections.splice(idx, 1);
                logger_1.Logger.trace(`Ignoring selection: ${selectionsHash}. ${mh.selectionsChanged.ourSelections.length} left`);
                return;
            }
            else if (mh.selectionsChanged.ignoreIntermediateSelections) {
                logger_1.Logger.trace(`Ignoring intermediate selection change: ${selectionsHash}`);
                return;
            }
            else if (mh.selectionsChanged.ourSelections.length > 0) {
                // Some intermediate selection must have slipped in after setting the
                // 'ignoreIntermediateSelections' to false. Which means we didn't count
                // for it yet, but since we have selections to be ignored then we probably
                // wanted this one to be ignored as well.
                logger_1.Logger.warn(`Ignoring slipped selection: ${selectionsHash}`);
                return;
            }
        }
        // We may receive changes from other panels when, having selections in them containing the same file
        // and changing text before the selection in current panel.
        if (e.textEditor !== mh.vimState.editor) {
            return;
        }
        if (mh.focusChanged) {
            mh.focusChanged = false;
            return;
        }
        if (mh.currentMode === mode_1.Mode.EasyMotionMode) {
            return;
        }
        taskQueue_1.taskQueue.enqueueTask(() => mh.handleSelectionChange(e));
    }, true, false);
    registerEventListener(context, vscode.window.onDidChangeTextEditorVisibleRanges, async (e) => {
        if (e.textEditor !== vscode.window.activeTextEditor) {
            return;
        }
        taskQueue_1.taskQueue.enqueueTask(async () => {
            // Scrolling the viewport clears any status bar message, even errors.
            const mh = await getAndUpdateModeHandler();
            if (mh && statusBar_1.StatusBar.lastMessageTime) {
                // TODO: Using the time elapsed works most of the time, but is a bit of a hack
                const timeElapsed = Date.now() - Number(statusBar_1.StatusBar.lastMessageTime);
                if (timeElapsed > 100) {
                    statusBar_1.StatusBar.clear(mh.vimState, true);
                }
            }
        });
    });
    const compositionState = new compositionState_1.CompositionState();
    // Override VSCode commands
    overrideCommand(context, 'type', async (args) => {
        taskQueue_1.taskQueue.enqueueTask(async () => {
            const mh = await getAndUpdateModeHandler();
            if (mh) {
                if (compositionState.isInComposition) {
                    compositionState.composingText += args.text;
                    if (mh.vimState.currentMode === mode_1.Mode.Insert) {
                        compositionState.insertedText = true;
                        vscode.commands.executeCommand('default:type', { text: args.text });
                    }
                }
                else {
                    await mh.handleKeyEvent(args.text);
                }
            }
        });
    });
    overrideCommand(context, 'replacePreviousChar', async (args) => {
        taskQueue_1.taskQueue.enqueueTask(async () => {
            const mh = await getAndUpdateModeHandler();
            if (mh) {
                if (compositionState.isInComposition) {
                    compositionState.composingText =
                        compositionState.composingText.substr(0, compositionState.composingText.length - args.replaceCharCnt) + args.text;
                }
                if (compositionState.insertedText) {
                    await vscode.commands.executeCommand('default:replacePreviousChar', {
                        text: args.text,
                        replaceCharCnt: args.replaceCharCnt,
                    });
                    mh.vimState.cursorStopPosition = mh.vimState.editor.selection.start;
                    mh.vimState.cursorStartPosition = mh.vimState.editor.selection.start;
                }
            }
            else {
                await vscode.commands.executeCommand('default:replacePreviousChar', {
                    text: args.text,
                    replaceCharCnt: args.replaceCharCnt,
                });
            }
        });
    });
    overrideCommand(context, 'compositionStart', async () => {
        taskQueue_1.taskQueue.enqueueTask(async () => {
            compositionState.isInComposition = true;
        });
    });
    overrideCommand(context, 'compositionEnd', async () => {
        taskQueue_1.taskQueue.enqueueTask(async () => {
            const mh = await getAndUpdateModeHandler();
            if (mh) {
                if (compositionState.insertedText) {
                    mh.selectionsChanged.ignoreIntermediateSelections = true;
                    await vscode.commands.executeCommand('default:replacePreviousChar', {
                        text: '',
                        replaceCharCnt: compositionState.composingText.length,
                    });
                    mh.vimState.cursorStopPosition = mh.vimState.editor.selection.active;
                    mh.vimState.cursorStartPosition = mh.vimState.editor.selection.active;
                    mh.selectionsChanged.ignoreIntermediateSelections = false;
                }
                const text = compositionState.composingText;
                await mh.handleMultipleKeyEvents(text.split(''));
            }
            compositionState.reset();
        });
    });
    // Register extension commands
    registerCommand(context, 'vim.showQuickpickCmdLine', async () => {
        const mh = await getAndUpdateModeHandler();
        if (mh) {
            const cmd = await vscode.window.showInputBox({
                prompt: 'Vim command line',
                value: '',
                ignoreFocusOut: false,
                valueSelection: [0, 0],
            });
            if (cmd) {
                await new commandLine_1.ExCommandLine(cmd, mh.vimState.currentMode).run(mh.vimState);
            }
            mh.updateView();
        }
    });
    registerCommand(context, 'vim.remap', async (args) => {
        taskQueue_1.taskQueue.enqueueTask(async () => {
            const mh = await getAndUpdateModeHandler();
            if (mh === undefined) {
                return;
            }
            if (!args) {
                throw new Error("'args' is undefined. For this remap to work it needs to have 'args' with an '\"after\": string[]' and/or a '\"commands\": { command: string; args: any[] }[]'");
            }
            if (args.after) {
                for (const key of args.after) {
                    await mh.handleKeyEvent(notation_1.Notation.NormalizeKey(key, configuration_1.configuration.leader));
                }
            }
            if (args.commands) {
                for (const command of args.commands) {
                    // Check if this is a vim command by looking for :
                    if (command.command.startsWith(':')) {
                        await new commandLine_1.ExCommandLine(command.command.slice(1, command.command.length), mh.vimState.currentMode).run(mh.vimState);
                        mh.updateView();
                    }
                    else {
                        await vscode.commands.executeCommand(command.command, command.args);
                    }
                }
            }
        });
    });
    registerCommand(context, 'toggleVim', async () => {
        configuration_1.configuration.disableExtension = !configuration_1.configuration.disableExtension;
        toggleExtension(configuration_1.configuration.disableExtension, compositionState);
    });
    for (const boundKey of configuration_1.configuration.boundKeyCombinations) {
        const command = ['<Esc>', '<C-c>'].includes(boundKey.key)
            ? async () => {
                const mh = await getAndUpdateModeHandler();
                if (mh && !(await forceStopRecursiveRemap(mh))) {
                    await mh.handleKeyEvent(`${boundKey.key}`);
                }
            }
            : async () => {
                const mh = await getAndUpdateModeHandler();
                if (mh) {
                    await mh.handleKeyEvent(`${boundKey.key}`);
                }
            };
        registerCommand(context, boundKey.command, async () => {
            taskQueue_1.taskQueue.enqueueTask(command);
        });
    }
    {
        // Initialize mode handler for current active Text Editor at startup.
        const modeHandler = await getAndUpdateModeHandler();
        if (modeHandler) {
            if (!configuration_1.configuration.startInInsertMode) {
                const vimState = modeHandler.vimState;
                // Make sure no cursors start on the EOL character (which is invalid in normal mode)
                // This can happen if we quit last session in insert mode at the end of the line
                vimState.cursors = vimState.cursors.map((cursor) => {
                    const eolColumn = vimState.document.lineAt(cursor.stop).text.length;
                    if (cursor.stop.character >= eolColumn) {
                        const character = Math.max(eolColumn - 1, 0);
                        return cursor.withNewStop(cursor.stop.with({ character }));
                    }
                    else {
                        return cursor;
                    }
                });
            }
            // This is called last because getAndUpdateModeHandler() will change cursor
            modeHandler.updateView({ drawSelection: true, revealRange: false });
        }
    }
    // Disable automatic keyboard navigation in lists, so it doesn't interfere
    // with our list navigation keybindings
    await vscodeContext_1.VSCodeContext.set('listAutomaticKeyboardNavigation', false);
    await toggleExtension(configuration_1.configuration.disableExtension, compositionState);
    logger_1.Logger.debug('Finish.');
}
exports.activate = activate;
/**
 * Toggles the VSCodeVim extension between Enabled mode and Disabled mode. This
 * function is activated by calling the 'toggleVim' command from the Command Palette.
 *
 * @param isDisabled if true, sets VSCodeVim to Disabled mode; else sets to enabled mode
 */
async function toggleExtension(isDisabled, compositionState) {
    await vscodeContext_1.VSCodeContext.set('vim.active', !isDisabled);
    const mh = await getAndUpdateModeHandler();
    if (mh) {
        if (isDisabled) {
            await mh.handleKeyEvent(specialKeys_1.SpecialKeys.ExtensionDisable);
            compositionState.reset();
            modeHandlerMap_1.ModeHandlerMap.clear();
        }
        else {
            await mh.handleKeyEvent(specialKeys_1.SpecialKeys.ExtensionEnable);
        }
    }
}
function overrideCommand(context, command, callback) {
    const disposable = vscode.commands.registerCommand(command, async (args) => {
        if (configuration_1.configuration.disableExtension) {
            return vscode.commands.executeCommand('default:' + command, args);
        }
        if (!vscode.window.activeTextEditor) {
            return;
        }
        if (vscode.window.activeTextEditor.document &&
            vscode.window.activeTextEditor.document.uri.toString() === 'debug:input') {
            return vscode.commands.executeCommand('default:' + command, args);
        }
        return callback(args);
    });
    context.subscriptions.push(disposable);
}
function registerCommand(context, command, callback, requiresActiveEditor = true) {
    const disposable = vscode.commands.registerCommand(command, async (args) => {
        if (requiresActiveEditor && !vscode.window.activeTextEditor) {
            return;
        }
        callback(args);
    });
    context.subscriptions.push(disposable);
}
exports.registerCommand = registerCommand;
function registerEventListener(context, event, listener, exitOnExtensionDisable = true, exitOnTests = false) {
    const disposable = event(async (e) => {
        if (exitOnExtensionDisable && configuration_1.configuration.disableExtension) {
            return;
        }
        if (exitOnTests && globals_1.Globals.isTesting) {
            return;
        }
        listener(e);
    });
    context.subscriptions.push(disposable);
}
exports.registerEventListener = registerEventListener;
/**
 * @returns true if there was a remap being executed to stop
 */
async function forceStopRecursiveRemap(mh) {
    if (mh.remapState.isCurrentlyPerformingRecursiveRemapping) {
        mh.remapState.forceStopRecursiveRemapping = true;
        return true;
    }
    return false;
}

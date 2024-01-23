'use strict';
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
exports.LiveShareHelper = void 0;
const vsls = __importStar(require("vsls/vscode"));
/**
 * Manages state of a live server shared via VS Live Share.
 * Caches the live server path and starts/stops sharing in response to Live Share session events.
 */
class LiveShareHelper {
    constructor(appModel) {
        this.appModel = appModel;
        this.appModel.onDidGoLive((e) => __awaiter(this, void 0, void 0, function* () {
            // cache the current live server browse url
            this.livePathUri = e.pathUri;
            yield this.shareLiveServer();
        }));
        this.appModel.onDidGoOffline((e) => {
            // reset the live server cached path
            this.livePathUri = null;
            if (this.activeHostSession && this.sharedServer) {
                // will un-share the server
                this.sharedServer.dispose();
                this.sharedServer = null;
            }
        });
        this.deferredWork = vsls.getApi().then(api => {
            if (api) { // if Live Share is available (installed)
                this.ensureInitialized(api);
            }
        });
    }
    dispose() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deferredWork;
        });
    }
    ensureInitialized(api) {
        this.liveshare = api;
        if (this.liveshare.session && this.liveshare.session.role === vsls.Role.Host) {
            this.activeHostSession = this.liveshare.session;
        }
        this.liveshare.onDidChangeSession((e) => __awaiter(this, void 0, void 0, function* () {
            if (e.session.role === vsls.Role.Host) {
                // active sharing collaboration session
                this.activeHostSession = e.session;
                yield this.shareLiveServer();
            }
            else {
                // any other session state, including joined as a guest
                this.activeHostSession = null;
            }
        }));
    }
    shareLiveServer() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.activeHostSession && this.livePathUri) {
                // only share the server when we're live and VS Live Share session is active
                this.sharedServer = yield this.liveshare.shareServer({
                    port: this.appModel.runningPort,
                    displayName: 'Live Server',
                    browseUrl: `http://localhost:${this.appModel.runningPort}/${this.livePathUri.replace(/\\/gi, '/')}`
                });
            }
        });
    }
}
exports.LiveShareHelper = LiveShareHelper;
//# sourceMappingURL=LiveShareHelper.js.map
var e={d:(t,o)=>{for(var i in o)e.o(o,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:o[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};void 0!==e&&Object.defineProperty(e,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}});var t={};e.d(t,{b:()=>CommitDetailsApp,F:()=>wi});class IpcMessageType{constructor(e,t=!1,o=!1){this.method=e,this.reset=t,this.pack=o}}class IpcCommandType extends IpcMessageType{}class IpcNotificationType extends IpcMessageType{}function o(e,t,o){e.method===t.method&&o(t.params,e)}const i=new IpcCommandType("webview/ready"),r=new IpcCommandType("webview/focus"),a=new IpcCommandType("command/execute");new IpcCommandType("configuration/preview"),new IpcCommandType("configuration/update"),new IpcNotificationType("configuration/didChange"),new IpcNotificationType("configuration/didPreview"),new IpcNotificationType("webview/didOpenAnchor");const c=new IpcCommandType("commit/actions"),l=new IpcCommandType("commit/file/actions"),d=new IpcCommandType("commit/file/open"),h=new IpcCommandType("commit/file/openOnRemote"),u=new IpcCommandType("commit/file/compareWorking"),p=new IpcCommandType("commit/file/comparePrevious"),f=new IpcCommandType("commit/file/stage"),m=new IpcCommandType("commit/file/unstage"),g=new IpcCommandType("commit/pickCommit"),v=new IpcCommandType("commit/searchCommit"),y=new IpcCommandType("commit/switchMode"),w=new IpcCommandType("commit/autolinkSettings"),_=new IpcCommandType("commit/explain"),x=new IpcCommandType("commit/pin"),A=new IpcCommandType("commit/navigate"),C=new IpcCommandType("commit/preferences/update"),S=new IpcCommandType("commit/wip/createPatch"),E=new IpcNotificationType("commit/didChange",!0),P=new IpcNotificationType("commit/didChange/wip"),O=new IpcNotificationType("commit/didExplain");function T(e){const t=.001*performance.now();let o=Math.floor(t),i=Math.floor(t%1*1e9);return void 0!==e&&(o-=e[0],i-=e[1],i<0&&(o--,i+=1e9)),[o,i]}function D(e,t,o){let i,r,a,c,l;function d(e){const o=e-(r??0);return null==r||o>=t||o<0}function h(){const e=Date.now();if(d(e))u();else{l=setTimeout(h,t-(e-(r??0)))}}function u(){return l=void 0,i?function(){const t=i,o=a;return i=a=void 0,c=e.apply(o,t),c}():(i=a=void 0,c)}function p(...e){const u=Date.now(),p=d(u);return i=null!=o&&i?o(i,e):e,a=this,r=u,p&&null==l?(l=setTimeout(h,t),c):(null==l&&(l=setTimeout(h,t)),c)}return p.cancel=function(){null!=l&&clearTimeout(l),i=r=a=l=void 0},p.flush=function(){return null!=l?u():c},p.pending=function(){return null!=l},p}const N=",",U="=",B="{",j="(",z=")",F=/\(([\s\S]*)\)/,q=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,G=/\s?=.*$/;const W=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,o=!1){this.provider=e,this._isDebugging=o,this.logLevel=t}enabled(e){return this.level>=K(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=K(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){if(this.level<4&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!0,t)}`)}error(e,t,...o){if(this.level<1&&!this.isDebugging)return;let i;if(i=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??""}`,null==i){const t=e instanceof Error?e.stack:void 0;if(t){const e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(i=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!1,o)}${null!=e?`\n${String(e)}`:""}`)}log(e,...t){if(this.level<3&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}warn(e,...t){if(this.level<2&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map((e=>this.toLoggable(e,t))).join(", ")}]`;const o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,t)}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";const o=t.map((e=>this.toLoggable(e))).join(", ");return 0!==o.length?` — ${o}`:""}};function K(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}function Y(e){let t;if("function"==typeof e){if(null==e.prototype?.constructor)return e.name;t=e.prototype.constructor.name??""}else t=e.constructor?.name??"";const o=t.indexOf("_");return-1===o?t:t.substr(o+1)}const Z={enabled:e=>W.enabled(e)||W.isDebugging,log:(e,t,o,...i)=>{switch(e){case"error":W.error("",t,o,...i);break;case"warn":W.warn(t,o,...i);break;case"info":W.log(t,o,...i);break;default:W.debug(t,o,...i)}}},J=500,X=2**30,ee=new Map;let te=0;function oe(e){ee.delete(e)}function ne(e,t){if(null!=t)return{scopeId:t.scopeId,prefix:`${t.prefix}${e}`};const o=ie();return{scopeId:o,prefix:`[${String(o).padStart(5)}] ${e}`}}function ie(){return te===X&&(te=0),++te}var re=(e=>(e[e.Hash=35]="Hash",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Backslash=92]="Backslash",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.Z=90]="Z",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.z=122]="z",e))(re||{});const{fromCharCode:se}=String;new TextEncoder;function ae(e){const[t,o]=T(e);return 1e3*t+Math.floor(o/1e6)}function ce(e,t,o){if(null==o)return`${t} ${e}${1===t?"":"s"}`;const i=1===t?e:o.plural??`${e}s`;return o.only?i:`${0===t?o.zero??t:o.format?.(t)??t}${o.infix??" "}${i}`}const le=Symbol("logInstanceNameFn");Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");class Stopwatch{constructor(e,t,...o){let i;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:ne(e??""),i="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??Z,this._time=T(),null!=i){if(!this.logProvider.enabled(this.logLevel))return;o.length?this.logProvider.log(this.logLevel,this.logScope,`${i.message??""}${i.suffix??""}`,...o):this.logProvider.log(this.logLevel,this.logScope,`${i.message??""}${i.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){const[e,t]=T(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=T(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);const[o,i]=T(this._time),r=1e3*o+Math.floor(i/1e6),a=e?.message??"";this.logProvider.log(r>250?"warn":this.logLevel,this.logScope,`${a?`${a} `:""}[${r}ms]${e?.suffix??""}`)}}var de,he;function ue(e,t){const o=e+t,i=t<0?o<0?0:o:o>255?255:o;return Math.round(i)}function pe(e,t){return fe(e,-t)}function fe(e,t){const o=function(e){const t=Ce(e);return null==t?null:[t.rgba.r,t.rgba.g,t.rgba.b,t.rgba.a]}(e);if(null==o)return e;const[i,r,a,c]=o,l=255*t/100;return`rgba(${ue(i,l)}, ${ue(r,l)}, ${ue(a,l)}, ${c})`}function be(e,t){const o=ye.from(e);return null==o?e:o.transparent(t/100).toString()}(he=de||(de={})).on=function(e,t,o,i){let r=!1;if("string"==typeof e){const a=function(t){const i=t?.target?.closest(e);null!=i&&o(t,i)};return document.addEventListener(t,a,i??!0),{dispose:()=>{r||(r=!0,document.removeEventListener(t,a,i??!0))}}}const a=function(e){o(e,this)};return e.addEventListener(t,a,i??!1),{dispose:()=>{r||(r=!0,e.removeEventListener(t,a,i??!1))}}},he.insertTemplate=function(e,t,o){const i=document.getElementById(e);if(t.replaceChildren(i?.content.cloneNode(!0)),t.className=i.className,null!=o?.visible){const e=t.querySelectorAll("[data-visible]");for(const t of e){const e=t.dataset.visible;e&&(o.visible[e]?t.style.display="initial":t.style.display="none")}}if(null!=o?.bindings){const e=t.querySelectorAll("[data-bind]");for(const t of e){const e=t.dataset.bind;if(!e)continue;const i=o.bindings[e];null!=i&&(t.textContent=String(i))}}},he.resetSlot=function(e){e.replaceChildren(),e.className=""};function me(e,t){const o=Math.pow(10,t);return Math.round(e*o)/o}class RGBA{constructor(e,t,o,i=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,o)),this.a=me(Math.max(Math.min(1,i),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}}class HSLA{constructor(e,t,o,i){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=me(Math.max(Math.min(1,t),0),3),this.l=me(Math.max(Math.min(1,o),0),3),this.a=me(Math.max(Math.min(1,i),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,i=e.b/255,r=e.a,a=Math.max(t,o,i),c=Math.min(t,o,i);let l=0,d=0;const h=(c+a)/2,u=a-c;if(u>0){switch(d=Math.min(h<=.5?u/(2*h):u/(2-2*h),1),a){case t:l=(o-i)/u+(o<i?6:0);break;case o:l=(i-t)/u+2;break;case i:l=(t-o)/u+4}l*=60,l=Math.round(l)}return new HSLA(l,d,h,r)}static _hue2rgb(e,t,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+6*(t-e)*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}static toRGBA(e){const t=e.h/360,{s:o,l:i,a:r}=e;let a,c,l;if(0===o)a=c=l=i;else{const e=i<.5?i*(1+o):i+o-i*o,r=2*i-e;a=HSLA._hue2rgb(r,e,t+1/3),c=HSLA._hue2rgb(r,e,t),l=HSLA._hue2rgb(r,e,t-1/3)}return new RGBA(Math.round(255*a),Math.round(255*c),Math.round(255*l),r)}}class HSVA{constructor(e,t,o,i){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=me(Math.max(Math.min(1,t),0),3),this.v=me(Math.max(Math.min(1,o),0),3),this.a=me(Math.max(Math.min(1,i),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,i=e.b/255,r=Math.max(t,o,i),a=r-Math.min(t,o,i),c=0===r?0:a/r;let l;return l=0===a?0:r===t?((o-i)/a%6+6)%6:r===o?(i-t)/a+2:(t-o)/a+4,new HSVA(Math.round(60*l),c,r,e.a)}static toRGBA(e){const{h:t,s:o,v:i,a:r}=e,a=i*o,c=a*(1-Math.abs(t/60%2-1)),l=i-a;let[d,h,u]=[0,0,0];return t<60?(d=a,h=c):t<120?(d=c,h=a):t<180?(h=a,u=c):t<240?(h=c,u=a):t<300?(d=c,u=a):t<=360&&(d=a,u=c),d=Math.round(255*(d+l)),h=Math.round(255*(h+l)),u=Math.round(255*(u+l)),new RGBA(d,h,u,r)}}function ge(e,t){return t.getPropertyValue(e).trim()}const ve=class _Color{static from(e){return e instanceof _Color?e:Ce(e)||_Color.red}static fromCssVariable(e,t){return Ce(ge(e,t))||_Color.red}static fromHex(e){return Ee(e)||_Color.red}static equals(e,t){return!e&&!t||!(!e||!t)&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(!e)throw new Error("Color needs a value");if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else{if(!(e instanceof HSVA))throw new Error("Invalid color ctor argument");this._hsva=e,this.rgba=HSVA.toRGBA(e)}}equals(e){return null!=e&&(Boolean(e)&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva))}getRelativeLuminance(){return me(.2126*_Color._relativeLuminanceForComponent(this.rgba.r)+.7152*_Color._relativeLuminanceForComponent(this.rgba.g)+.0722*_Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new ye(new RGBA(0,0,0,e.rgba.a));if(1===t)return new ye(new RGBA(255,255,255,e.rgba.a));const o=e.getRelativeLuminance();let i=20;const r=(e,o)=>{const a=e.mix(o,.5),c=a.getRelativeLuminance();return Math.abs(t-c)<1e-7||!i--?a:c>t?r(e,a):r(a,o)},a=(o>t?r(ye.black,e):r(e,ye.white)).rgba;return new ye(new RGBA(a.r,a.g,a.b,e.rgba.a))}(this,e)}getContrastRatio(e){const t=this.getRelativeLuminance(),o=e.getRelativeLuminance();return t>o?(t+.05)/(o+.05):(o+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){const{r:t,g:o,b:i,a:r}=this.rgba;return new _Color(new RGBA(t,o,i,r*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new _Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){const t=e.rgba,o=this.rgba.a,i=t.a,r=o+i*(1-o);if(r<1e-6)return _Color.transparent;const a=this.rgba.r*o/r+t.r*i*(1-o)/r,c=this.rgba.g*o/r+t.g*i*(1-o)/r,l=this.rgba.b*o/r+t.b*i*(1-o)/r;return new _Color(new RGBA(a,c,l,r))}mix(e,t){return function(e,t,o){const i=e.rgba,r=t.rgba;return new ye(new RGBA(i.r+o*(r.r-i.r),i.g+o*(r.g-i.g),i.b+o*(r.b-i.b),i.a+o*(r.a-i.a)))}(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;const{r:t,g:o,b:i,a:r}=this.rgba;return new _Color(new RGBA(e.rgba.r-r*(e.rgba.r-t),e.rgba.g-r*(e.rgba.g-o),e.rgba.b-r*(e.rgba.b-i),1))}flatten(...e){const t=e.reduceRight(((e,t)=>_Color._flatten(t,e)));return _Color._flatten(this,t)}static _flatten(e,t){const o=1-e.rgba.a;return new _Color(new RGBA(o*t.rgba.r+e.rgba.a*e.rgba.r,o*t.rgba.g+e.rgba.a*e.rgba.g,o*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){if(e.isOpaque())return ke(e);return we(e)}(this)),this._toString}static getLighterColor(e,t,o){if(e.isLighterThan(t))return e;o=o||.5;const i=e.getRelativeLuminance(),r=t.getRelativeLuminance();return o=o*(r-i)/r,e.lighten(o)}static getDarkerColor(e,t,o){if(e.isDarkerThan(t))return e;o=o||.5;const i=e.getRelativeLuminance();return o=o*(i-t.getRelativeLuminance())/i,e.darken(o)}};ve.white=new ve(new RGBA(255,255,255,1)),ve.black=new ve(new RGBA(0,0,0,1)),ve.red=new ve(new RGBA(255,0,0,1)),ve.blue=new ve(new RGBA(0,0,255,1)),ve.green=new ve(new RGBA(0,255,0,1)),ve.cyan=new ve(new RGBA(0,255,255,1)),ve.lightgrey=new ve(new RGBA(211,211,211,1)),ve.transparent=new ve(new RGBA(0,0,0,0));let ye=ve;function we(e){return`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}function _e(e){const t=e.toString(16);return 2!==t.length?`0${t}`:t}function ke(e){return`#${_e(e.rgba.r)}${_e(e.rgba.g)}${_e(e.rgba.b)}`}const Ae=/^((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function Ce(e){if(0===(e=e.trim()).length)return null;if(e.charCodeAt(0)===re.Hash)return Ee(e);const t=Ae.exec(e);if(null==t)return null;const o=t[1];let i;switch(o){case"rgb":case"hsl":i=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),1];break;case"rgba":case"hsla":i=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),parseFloat(t[5])];break;default:return null}switch(o){case"rgb":case"rgba":return new ye(new RGBA(i[0],i[1],i[2],i[3]));case"hsl":case"hsla":return new ye(new HSLA(i[0],i[1],i[2],i[3]))}return ye.red}function Ee(e){const t=(e=e.trim()).length;if(0===t)return null;if(e.charCodeAt(0)!==re.Hash)return null;switch(t){case 7:{const t=16*Pe(e.charCodeAt(1))+Pe(e.charCodeAt(2)),o=16*Pe(e.charCodeAt(3))+Pe(e.charCodeAt(4)),i=16*Pe(e.charCodeAt(5))+Pe(e.charCodeAt(6));return new ye(new RGBA(t,o,i,1))}case 9:{const t=16*Pe(e.charCodeAt(1))+Pe(e.charCodeAt(2)),o=16*Pe(e.charCodeAt(3))+Pe(e.charCodeAt(4)),i=16*Pe(e.charCodeAt(5))+Pe(e.charCodeAt(6)),r=16*Pe(e.charCodeAt(7))+Pe(e.charCodeAt(8));return new ye(new RGBA(t,o,i,r/255))}case 4:{const t=Pe(e.charCodeAt(1)),o=Pe(e.charCodeAt(2)),i=Pe(e.charCodeAt(3));return new ye(new RGBA(16*t+t,16*o+o,16*i+i))}case 5:{const t=Pe(e.charCodeAt(1)),o=Pe(e.charCodeAt(2)),i=Pe(e.charCodeAt(3)),r=Pe(e.charCodeAt(4));return new ye(new RGBA(16*t+t,16*o+o,16*i+i,(16*r+r)/255))}default:return null}}function Pe(e){switch(e){case re.Digit0:return 0;case re.Digit1:return 1;case re.Digit2:return 2;case re.Digit3:return 3;case re.Digit4:return 4;case re.Digit5:return 5;case re.Digit6:return 6;case re.Digit7:return 7;case re.Digit8:return 8;case re.Digit9:return 9;case re.a:case re.A:return 10;case re.b:case re.B:return 11;case re.c:case re.C:return 12;case re.d:case re.D:return 13;case re.e:case re.E:return 14;case re.f:case re.F:return 15}return 0}const Oe=class _Emitter{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(e,t,o)=>{null==this.listeners&&(this.listeners=new LinkedList);const i=this.listeners.push(null==t?e:[e,t]),r={dispose:()=>{r.dispose=_Emitter._noop,this._disposed||i()}};return Array.isArray(o)&&o.push(r),r}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){const[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};Oe._noop=function(){};let Me=Oe;const Te={done:!0,value:void 0},De=class _Node{constructor(e){this.element=e,this.next=_Node.Undefined,this.prev=_Node.Undefined}};De.Undefined=new De(void 0);let Re=De;class LinkedList{constructor(){this._first=Re.Undefined,this._last=Re.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===Re.Undefined}clear(){this._first=Re.Undefined,this._last=Re.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){const o=new Re(e);if(this._first===Re.Undefined)this._first=o,this._last=o;else if(t){const e=this._last;this._last=o,o.prev=e,e.next=o}else{const e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let i=!1;return()=>{i||(i=!0,this._remove(o))}}shift(){if(this._first===Re.Undefined)return;const e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===Re.Undefined)return;const e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==Re.Undefined&&e.next!==Re.Undefined){const t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===Re.Undefined&&e.next===Re.Undefined?(this._first=Re.Undefined,this._last=Re.Undefined):e.next===Re.Undefined?(this._last=this._last.prev,this._last.next=Re.Undefined):e.prev===Re.Undefined&&(this._first=this._first.next,this._first.prev=Re.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===Re.Undefined?Te:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){const e=[];for(let t=this._first;t!==Re.Undefined;t=t.next)e.push(t.element);return e}}const Ne=new Me,Ue=Ne.event;function Ie(e){const t=document.documentElement,o=window.getComputedStyle(t),i=document.body.classList,r=i.contains("vscode-light")||i.contains("vscode-high-contrast-light"),a=i.contains("vscode-high-contrast")||i.contains("vscode-high-contrast-light"),c=t.style,l=ge("--vscode-editor-background",o);let d=ge("--vscode-editor-foreground",o);d||(d=ge("--vscode-foreground",o));let h=ge("--color-background",o);return c.setProperty("--color-background--lighten-05",fe(h,5)),c.setProperty("--color-background--darken-05",pe(h,5)),c.setProperty("--color-background--lighten-075",fe(h,7.5)),c.setProperty("--color-background--darken-075",pe(h,7.5)),c.setProperty("--color-background--lighten-10",fe(h,10)),c.setProperty("--color-background--darken-10",pe(h,10)),c.setProperty("--color-background--lighten-15",fe(h,15)),c.setProperty("--color-background--darken-15",pe(h,15)),c.setProperty("--color-background--lighten-30",fe(h,30)),c.setProperty("--color-background--darken-30",pe(h,30)),c.setProperty("--color-background--lighten-50",fe(h,50)),c.setProperty("--color-background--darken-50",pe(h,50)),h=ge("--color-button-background",o),c.setProperty("--color-button-background--darken-30",pe(h,30)),h=ge("--color-highlight",o),c.setProperty("--color-highlight--75",be(h,75)),c.setProperty("--color-highlight--50",be(h,50)),c.setProperty("--color-highlight--25",be(h,25)),h=ge("--color-button-secondary-background",o),c.setProperty("--color-button-secondary-background--darken-30",pe(h,30)),h=ge("--color-foreground",o),c.setProperty("--color-foreground--85",be(h,85)),c.setProperty("--color-foreground--75",be(h,75)),c.setProperty("--color-foreground--65",be(h,65)),c.setProperty("--color-foreground--50",be(h,50)),h=ge("--color-link-foreground",o),c.setProperty("--color-link-foreground--darken-20",pe(h,20)),c.setProperty("--color-link-foreground--lighten-20",fe(h,20)),h=ge("--color-alert-infoBackground",o),c.setProperty("--color-alert-infoHoverBackground",r?pe(h,5):fe(h,5)),h=ge("--color-alert-warningBackground",o),c.setProperty("--color-alert-warningHoverBackground",r?pe(h,5):fe(h,5)),h=ge("--color-alert-errorBackground",o),c.setProperty("--color-alert-errorHoverBackground",r?pe(h,5):fe(h,5)),h=r?pe(l,5):fe(l,5),c.setProperty("--color-alert-neutralBackground",h),c.setProperty("--color-alert-neutralHoverBackground",r?pe(h,5):fe(h,5)),{colors:{background:l,foreground:d},computedStyle:o,isLightTheme:r,isHighContrastTheme:a,isInitializing:null==e}}var je=Object.defineProperty,ze=Object.getOwnPropertyDescriptor;let Fe=0;function Ve(){return 1073741824===Fe?Fe=1:Fe++,`webview:${Fe}`}const qe=new TextDecoder;class App{constructor(e){this.appName=e;const t=[],o=Ie();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(o),t.push(Ue(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",W.configure({name:e,createChannel:function(e){return{name:e,appendLine:function(e){}}}},"off"),this.log(`${e}()`),this._api=acquireVsCodeApi(),null!=this.state){const e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){const e=new MutationObserver((e=>{Ne.fire(Ie(e))}));return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame((()=>{this.log(`${e}(): initializing...`);try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(de.on(window,"message",(e=>this.onMessageReceivedCore(e)))),this.sendCommand(i,void 0),this.onInitialized?.()}finally{document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}})),t.push(de.on(window,"pagehide",(()=>{t?.forEach((e=>e.dispose())),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=void 0})))}onMessageReceivedCore(e){const t=ee.get(te),o=e.data;if(o.packed&&o.params instanceof Uint8Array){const i=function(e,t,...o){return(t?.provider??Z).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...o):void 0}(ne(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});o.params=JSON.parse(qe.decode(o.params)),i?.stop()}this.onMessageReceived(o)}bind(){this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);const e=D((e=>{this.sendCommand(r,e)}),150);this.bindDisposables.push(de.on(document,"focusin",(t=>{const o=t.composedPath().some((e=>"INPUT"===e.tagName));!0===this._focused&&this._inputFocused===o||(this._focused=!0,this._inputFocused=o,e({focused:!0,inputFocused:o}))})),de.on(document,"focusout",(()=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))})))}log(e,...t){"string"==typeof e?W.log(e,...t):W.log(e,t.shift(),...t)}getState(){return this._api.getState()}sendCommand(e,t){const o=Ve();this.log(`${this.appName}.sendCommand(${o}): name=${e.method}`),this.postMessage({id:o,method:e.method,params:t})}async sendCommandWithCompletion(e,t,i){const r=Ve();this.log(`${this.appName}.sendCommandWithCompletion(${r}): name=${e.method}`);const a=new Promise(((e,t)=>{let a;const c=[de.on(window,"message",(t=>{o(i,t.data,(o=>{t.data.completionId===r&&(c.forEach((e=>e.dispose())),queueMicrotask((()=>e(o))))}))})),{dispose:function(){null!=a&&(clearTimeout(a),a=void 0)}}];a=setTimeout((()=>{a=void 0,c.forEach((e=>e.dispose())),t(new Error(`Timed out waiting for completion of ${i.method}`))}),6e4)}));return this.postMessage({id:r,method:e.method,params:t,completionId:r}),a}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}}var We;((e,t,o,i)=>{for(var r,a=i>1?void 0:i?ze(t,o):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i?r(t,o,a):r(a))||a);i&&a&&je(t,o,a)})([(We={args:{0:e=>`${e.data.id}, method=${e.data.method}`}},function(e,t=!1){let o,i,r,a,c=0,l=!1,d=!1,h=!0;null!=e&&({args:o,enter:i,exit:r,prefix:a,logThreshold:c=0,scoped:l=!0,singleLine:d=!1,timed:h=!0}=e),c>0&&(d=!0,h=!0),h&&(l=!0);const u=W.isDebugging,p=t?W.debug:W.log,f=u?"debug":"info";return(e,t,m)=>{let g,v;if("function"==typeof m.value?(g=m.value,v="value"):"function"==typeof m.get&&(g=m.get,v="get"),null==g||null==v)throw new Error("Not supported");const y=!1!==o?function(e){if("function"!=typeof e)throw new Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e);t=t.replace(q,"")||t,t=t.slice(0,t.indexOf(B));let o=t.indexOf(j),i=t.indexOf(z);o=o>=0?o+1:0,i=i>0?i:t.indexOf(U),t=t.slice(o,i),t=`(${t})`;const r=F.exec(t);return null!=r?r[1].split(N).map((e=>e.trim().replace(G,""))):[]}(g):[];m[v]=function(...e){if(!u&&!W.enabled(f))return g.apply(this,e);const m=ie(),v=null!=this?this.constructor?.[le]?.(this,Y(this))??Y(this):void 0;let w,_=v?l?`[${m.toString(16).padStart(5)}] ${v}.${t}`:`${v}.${t}`:t;null!=a&&(_=a({id:m,instance:this,instanceName:v??"",name:t,prefix:_},...e)),l&&(w={scopeId:m,prefix:_},function(e,t){ee.set(e,t)}(m,w));const x=null!=i?i(...e):"";let A;if(!1===o||0===e.length)A="",d||p.call(W,`${_}${x}`);else{let t;A="";let i,r,a,c=-1;for(a of e){if(i=y[++c],t=o?.[c],null!=t){if("boolean"==typeof t)continue;if(A.length>0&&(A+=", "),"string"==typeof t){A+=t;continue}r=String(t(a))}else A.length>0&&(A+=", "),r=W.toLoggable(a);A+=i?`${i}=${r}`:r}d||p.call(W,A?`${_}${x}(${A})`:`${_}${x}`)}if(d||h||null!=r){const t=h?T():void 0,o=e=>{const o=void 0!==t?` [${ae(t)}ms]`:"";d?W.error(e,A?`${_}${x}(${A})`:`${_}${x}`,w?.exitDetails?`failed${w.exitDetails}${o}`:`failed${o}`):W.error(e,_,w?.exitDetails?`failed${w.exitDetails}${o}`:`failed${o}`),l&&oe(m)};let i;try{i=g.apply(this,e)}catch(e){throw o(e),e}const a=e=>{let o,i,a,h;if(null!=t?(o=ae(t),o>J?(i=W.warn,a=` [*${o}ms] (slow)`):(i=p,a=` [${o}ms]`)):(a="",i=p),null!=r)if("function"==typeof r)try{h=r(e)}catch(e){h=`@log.exit error: ${e}`}else!0===r&&(h=`returned ${W.toLoggable(e)}`);else w?.exitFailed?(h=w.exitFailed,i=W.error):h="completed";d?(0===c||o>c)&&i.call(W,A?`${_}${x}(${A}) ${h}${w?.exitDetails||""}${a}`:`${_}${x} ${h}${w?.exitDetails||""}${a}`):i.call(W,A?`${_}(${A}) ${h}${w?.exitDetails||""}${a}`:`${_} ${h}${w?.exitDetails||""}${a}`),l&&oe(m)};return null!=i&&null!=(C=i)&&(C instanceof Promise||"function"==typeof C?.then)?i.then(a,o):a(i),i}var C;return g.apply(this,e)}}}(We,!0))],App.prototype,"onMessageReceivedCore",1);const Ke=globalThis,Ye=Ke.ShadowRoot&&(void 0===Ke.ShadyCSS||Ke.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ze=Symbol(),Xe=new WeakMap;class n{constructor(e,t,o){if(this._$cssResult$=!0,o!==Ze)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ye&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=Xe.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Xe.set(t,e))}return e}toString(){return this.cssText}}const Qe=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,o,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1]),e[0]);return new n(o,e,Ze)},tt=(e,t)=>{if(Ye)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const o of t){const t=document.createElement("style"),i=Ke.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=o.cssText,e.appendChild(t)}},lt=Ye?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,Ze))(t)})(e):e,{is:dt,defineProperty:ht,getOwnPropertyDescriptor:ut,getOwnPropertyNames:pt,getOwnPropertySymbols:ft,getPrototypeOf:bt}=Object,mt=globalThis,vt=mt.trustedTypes,yt=vt?vt.emptyScript:"",wt=mt.reactiveElementPolyfillSupport,$t=(e,t)=>e,_t={toAttribute(e,t){switch(t){case Boolean:e=e?yt:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},kt=(e,t)=>!dt(e,t),xt={attribute:!0,type:String,converter:_t,reflect:!1,hasChanged:kt};Symbol.metadata??=Symbol("metadata"),mt.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=xt){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,t);void 0!==i&&ht(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){const{get:i,set:r}=ut(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){const a=i?.call(this);r.call(this,t),this.requestUpdate(e,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??xt}static _$Ei(){if(this.hasOwnProperty($t("elementProperties")))return;const e=bt(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty($t("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($t("properties"))){const e=this.properties,t=[...pt(e),...ft(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(lt(e))}else void 0!==e&&t.push(lt(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$E_??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$E_?.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return tt(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$E_?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t){const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(void 0!==i&&!0===o.reflect){const r=(void 0!==o.converter?.toAttribute?o.converter:_t).toAttribute(t,o.type);this._$Em=e,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){const o=this.constructor,i=o._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=o.getPropertyOptions(i),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:_t;this._$Em=i,this[i]=r.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o,i=!1,r){if(void 0!==e){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??kt)(i?r:this[e],t))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$E_?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$E_?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EO(e,this[e]))),this._$ET()}updated(e){}firstUpdated(e){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[$t("elementProperties")]=new Map,b[$t("finalized")]=new Map,wt?.({ReactiveElement:b}),(mt.reactiveElementVersions??=[]).push("2.0.2");const At=globalThis,Ct=At.trustedTypes,St=Ct?Ct.createPolicy("lit-html",{createHTML:e=>e}):void 0,Et="$lit$",Pt=`lit$${(Math.random()+"").slice(9)}$`,Ot="?"+Pt,Mt=`<${Ot}>`,Tt=document,Dt=()=>Tt.createComment(""),Rt=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Lt=Array.isArray,Nt=e=>Lt(e)||"function"==typeof e?.[Symbol.iterator],Ut="[ \t\n\f\r]",Bt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,It=/-->/g,Ht=/>/g,jt=RegExp(`>|${Ut}(?:([^\\s"'>=/]+)(${Ut}*=${Ut}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),zt=/'/g,Ft=/"/g,Vt=/^(?:script|style|textarea|title)$/i,qt=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),Gt=qt(1),Wt=(qt(2),Symbol.for("lit-noChange")),Kt=Symbol.for("lit-nothing"),Yt=new WeakMap,Zt=Tt.createTreeWalker(Tt,129);function Jt(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==St?St.createHTML(t):t}const Xt=(e,t)=>{const o=e.length-1,i=[];let r,a=2===t?"<svg>":"",c=Bt;for(let t=0;t<o;t++){const o=e[t];let l,d,h=-1,u=0;for(;u<o.length&&(c.lastIndex=u,d=c.exec(o),null!==d);)u=c.lastIndex,c===Bt?"!--"===d[1]?c=It:void 0!==d[1]?c=Ht:void 0!==d[2]?(Vt.test(d[2])&&(r=RegExp("</"+d[2],"g")),c=jt):void 0!==d[3]&&(c=jt):c===jt?">"===d[0]?(c=r??Bt,h=-1):void 0===d[1]?h=-2:(h=c.lastIndex-d[2].length,l=d[1],c=void 0===d[3]?jt:'"'===d[3]?Ft:zt):c===Ft||c===zt?c=jt:c===It||c===Ht?c=Bt:(c=jt,r=void 0);const p=c===jt&&e[t+1].startsWith("/>")?" ":"";a+=c===Bt?o+Mt:h>=0?(i.push(l),o.slice(0,h)+Et+o.slice(h)+Pt+p):o+Pt+(-2===h?t:p)}return[Jt(e,a+(e[o]||"<?>")+(2===t?"</svg>":"")),i]};class V{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let r=0,a=0;const c=e.length-1,l=this.parts,[d,h]=Xt(e,t);if(this.el=V.createElement(d,o),Zt.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=Zt.nextNode())&&l.length<c;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(Et)){const t=h[a++],o=i.getAttribute(e).split(Pt),c=/([.?@])?(.*)/.exec(t);l.push({type:1,index:r,name:c[2],strings:o,ctor:"."===c[1]?k:"?"===c[1]?H:"@"===c[1]?I:R}),i.removeAttribute(e)}else e.startsWith(Pt)&&(l.push({type:6,index:r}),i.removeAttribute(e));if(Vt.test(i.tagName)){const e=i.textContent.split(Pt),t=e.length-1;if(t>0){i.textContent=Ct?Ct.emptyScript:"";for(let o=0;o<t;o++)i.append(e[o],Dt()),Zt.nextNode(),l.push({type:2,index:++r});i.append(e[t],Dt())}}}else if(8===i.nodeType)if(i.data===Ot)l.push({type:2,index:r});else{let e=-1;for(;-1!==(e=i.data.indexOf(Pt,e+1));)l.push({type:7,index:r}),e+=Pt.length-1}r++}}static createElement(e,t){const o=Tt.createElement("template");return o.innerHTML=e,o}}function Qt(e,t,o=e,i){if(t===Wt)return t;let r=void 0!==i?o._$Co?.[i]:o._$Cl;const a=Rt(t)?void 0:t._$litDirective$;return r?.constructor!==a&&(r?._$AO?.(!1),void 0===a?r=void 0:(r=new a(e),r._$AT(e,o,i)),void 0!==i?(o._$Co??=[])[i]=r:o._$Cl=r),void 0!==r&&(t=Qt(e,r._$AS(e,t.values),r,i)),t}class lit_html_S{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,i=(e?.creationScope??Tt).importNode(t,!0);Zt.currentNode=i;let r=Zt.nextNode(),a=0,c=0,l=o[0];for(;void 0!==l;){if(a===l.index){let t;2===l.type?t=new M(r,r.nextSibling,this,e):1===l.type?t=new l.ctor(r,l.name,l.strings,this,e):6===l.type&&(t=new L(r,this,e)),this._$AV.push(t),l=o[++c]}a!==l?.index&&(r=Zt.nextNode(),a++)}return Zt.currentNode=Tt,i}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,i){this.type=2,this._$AH=Kt,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Qt(this,e,t),Rt(e)?e===Kt||null==e||""===e?(this._$AH!==Kt&&this._$AR(),this._$AH=Kt):e!==this._$AH&&e!==Wt&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):Nt(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Kt&&Rt(this._$AH)?this._$AA.nextSibling.data=e:this.$(Tt.createTextNode(e)),this._$AH=e}g(e){const{values:t,_$litType$:o}=e,i="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=V.createElement(Jt(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new lit_html_S(i,this),o=e.u(this.options);e.p(t),this.$(o),this._$AH=e}}_$AC(e){let t=Yt.get(e.strings);return void 0===t&&Yt.set(e.strings,t=new V(e)),t}T(e){Lt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,i=0;for(const r of e)i===t.length?t.push(o=new M(this.k(Dt()),this.k(Dt()),this,this.options)):o=t[i],o._$AI(r),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,i,r){this.type=1,this._$AH=Kt,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Kt}_$AI(e,t=this,o,i){const r=this.strings;let a=!1;if(void 0===r)e=Qt(this,e,t,0),a=!Rt(e)||e!==this._$AH&&e!==Wt,a&&(this._$AH=e);else{const i=e;let c,l;for(e=r[0],c=0;c<r.length-1;c++)l=Qt(this,i[o+c],t,c),l===Wt&&(l=this._$AH[c]),a||=!Rt(l)||l!==this._$AH[c],l===Kt?e=Kt:e!==Kt&&(e+=(l??"")+r[c+1]),this._$AH[c]=l}a&&!i&&this.O(e)}O(e){e===Kt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===Kt?void 0:e}}class H extends R{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==Kt)}}class I extends R{constructor(e,t,o,i,r){super(e,t,o,i,r),this.type=5}_$AI(e,t=this){if((e=Qt(this,e,t,0)??Kt)===Wt)return;const o=this._$AH,i=e===Kt&&o!==Kt||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==Kt&&(o===Kt||i);i&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class L{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Qt(this,e)}}const eo=At.litHtmlPolyfillSupport;eo?.(V,M),(At.litHtmlVersions??=[]).push("3.1.0");class lit_element_s extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const i=o?.renderBefore??t;let r=i._$litPart$;if(void 0===r){const e=o?.renderBefore??null;i._$litPart$=r=new M(t.insertBefore(Dt(),e),e,void 0,o??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Wt}}lit_element_s._$litElement$=!0,lit_element_s.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lit_element_s});const to=globalThis.litElementPolyfillSupport;to?.({LitElement:lit_element_s});(globalThis.litElementVersions??=[]).push("4.0.2");const oo=e=>(t,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},no={attribute:!0,type:String,converter:_t,reflect:!1,hasChanged:kt},io=(e=no,t,o)=>{const{kind:i,metadata:r}=o;let a=globalThis.litPropertyMetadata.get(r);if(void 0===a&&globalThis.litPropertyMetadata.set(r,a=new Map),a.set(o.name,e),"accessor"===i){const{name:i}=o;return{set(o){const r=t.get.call(this);t.set.call(this,o),this.requestUpdate(i,r,e)},init(t){return void 0!==t&&this.C(i,void 0,e),t}}}if("setter"===i){const{name:i}=o;return function(o){const r=this[i];t.call(this,o),this.requestUpdate(i,r,e)}}throw Error("Unsupported decorator location: "+i)};function ro(e){return(t,o)=>"object"==typeof o?io(e,t,o):((e,t,o)=>{const i=t.hasOwnProperty(o);return t.constructor.createProperty(o,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}function so(e){return ro({...e,state:!0,attribute:!1})}const ao=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function co(e){return(t,o)=>{const{slot:i,selector:r}=e??{},a="slot"+(i?`[name=${i}]`:":not([name])");return ao(t,o,{get(){const t=this.renderRoot?.querySelector(a),o=t?.assignedElements(e)??[];return void 0===r?o:o.filter((e=>e.matches(r)))}})}}var lo=Object.defineProperty,ho=Object.getOwnPropertyDescriptor,uo=(e,t,o,i)=>{for(var r,a=i>1?void 0:i?ho(t,o):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i?r(t,o,a):r(a))||a);return i&&a&&lo(t,o,a),a};let fo=class extends lit_element_s{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=16}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};fo.styles=Qe`
		:host {
			font: normal normal normal var(--code-icon-size, 16px) / 1 codicon;
			display: inline-block;
			text-decoration: none;
			text-rendering: auto;
			text-align: center;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			user-select: none;
			-webkit-user-select: none;
			-ms-user-select: none;
			color: inherit;
			vertical-align: text-bottom;
			letter-spacing: normal;
		}

		:host([icon='add']):before {
			content: '\\ea60';
		}
		:host([icon='plus']):before {
			content: '\\ea60';
		}
		:host([icon='gist-new']):before {
			content: '\\ea60';
		}
		:host([icon='repo-create']):before {
			content: '\\ea60';
		}
		:host([icon='lightbulb']):before {
			content: '\\ea61';
		}
		:host([icon='light-bulb']):before {
			content: '\\ea61';
		}
		:host([icon='repo']):before {
			content: '\\ea62';
		}
		:host([icon='repo-delete']):before {
			content: '\\ea62';
		}
		:host([icon='gist-fork']):before {
			content: '\\ea63';
		}
		:host([icon='repo-forked']):before {
			content: '\\ea63';
		}
		:host([icon='git-pull-request']):before {
			content: '\\ea64';
		}
		:host([icon='git-pull-request-abandoned']):before {
			content: '\\ea64';
		}
		:host([icon='record-keys']):before {
			content: '\\ea65';
		}
		:host([icon='keyboard']):before {
			content: '\\ea65';
		}
		:host([icon='tag']):before {
			content: '\\ea66';
		}
		:host([icon='tag-add']):before {
			content: '\\ea66';
		}
		:host([icon='tag-remove']):before {
			content: '\\ea66';
		}
		:host([icon='person']):before {
			content: '\\ea67';
		}
		:host([icon='person-follow']):before {
			content: '\\ea67';
		}
		:host([icon='person-outline']):before {
			content: '\\ea67';
		}
		:host([icon='person-filled']):before {
			content: '\\ea67';
		}
		:host([icon='git-branch']):before {
			content: '\\ea68';
		}
		:host([icon='git-branch-create']):before {
			content: '\\ea68';
		}
		:host([icon='git-branch-delete']):before {
			content: '\\ea68';
		}
		:host([icon='source-control']):before {
			content: '\\ea68';
		}
		:host([icon='mirror']):before {
			content: '\\ea69';
		}
		:host([icon='mirror-public']):before {
			content: '\\ea69';
		}
		:host([icon='star']):before {
			content: '\\ea6a';
		}
		:host([icon='star-add']):before {
			content: '\\ea6a';
		}
		:host([icon='star-delete']):before {
			content: '\\ea6a';
		}
		:host([icon='star-empty']):before {
			content: '\\ea6a';
		}
		:host([icon='comment']):before {
			content: '\\ea6b';
		}
		:host([icon='comment-add']):before {
			content: '\\ea6b';
		}
		:host([icon='alert']):before {
			content: '\\ea6c';
		}
		:host([icon='warning']):before {
			content: '\\ea6c';
		}
		:host([icon='search']):before {
			content: '\\ea6d';
		}
		:host([icon='search-save']):before {
			content: '\\ea6d';
		}
		:host([icon='log-out']):before {
			content: '\\ea6e';
		}
		:host([icon='sign-out']):before {
			content: '\\ea6e';
		}
		:host([icon='log-in']):before {
			content: '\\ea6f';
		}
		:host([icon='sign-in']):before {
			content: '\\ea6f';
		}
		:host([icon='eye']):before {
			content: '\\ea70';
		}
		:host([icon='eye-unwatch']):before {
			content: '\\ea70';
		}
		:host([icon='eye-watch']):before {
			content: '\\ea70';
		}
		:host([icon='circle-filled']):before {
			content: '\\ea71';
		}
		:host([icon='primitive-dot']):before {
			content: '\\ea71';
		}
		:host([icon='close-dirty']):before {
			content: '\\ea71';
		}
		:host([icon='debug-breakpoint']):before {
			content: '\\ea71';
		}
		:host([icon='debug-breakpoint-disabled']):before {
			content: '\\ea71';
		}
		:host([icon='debug-hint']):before {
			content: '\\ea71';
		}
		:host([icon='primitive-square']):before {
			content: '\\ea72';
		}
		:host([icon='edit']):before {
			content: '\\ea73';
		}
		:host([icon='pencil']):before {
			content: '\\ea73';
		}
		:host([icon='info']):before {
			content: '\\ea74';
		}
		:host([icon='issue-opened']):before {
			content: '\\ea74';
		}
		:host([icon='gist-private']):before {
			content: '\\ea75';
		}
		:host([icon='git-fork-private']):before {
			content: '\\ea75';
		}
		:host([icon='lock']):before {
			content: '\\ea75';
		}
		:host([icon='mirror-private']):before {
			content: '\\ea75';
		}
		:host([icon='close']):before {
			content: '\\ea76';
		}
		:host([icon='remove-close']):before {
			content: '\\ea76';
		}
		:host([icon='x']):before {
			content: '\\ea76';
		}
		:host([icon='repo-sync']):before {
			content: '\\ea77';
		}
		:host([icon='sync']):before {
			content: '\\ea77';
		}
		:host([icon='clone']):before {
			content: '\\ea78';
		}
		:host([icon='desktop-download']):before {
			content: '\\ea78';
		}
		:host([icon='beaker']):before {
			content: '\\ea79';
		}
		:host([icon='microscope']):before {
			content: '\\ea79';
		}
		:host([icon='vm']):before {
			content: '\\ea7a';
		}
		:host([icon='device-desktop']):before {
			content: '\\ea7a';
		}
		:host([icon='file']):before {
			content: '\\ea7b';
		}
		:host([icon='file-text']):before {
			content: '\\ea7b';
		}
		:host([icon='more']):before {
			content: '\\ea7c';
		}
		:host([icon='ellipsis']):before {
			content: '\\ea7c';
		}
		:host([icon='kebab-horizontal']):before {
			content: '\\ea7c';
		}
		:host([icon='mail-reply']):before {
			content: '\\ea7d';
		}
		:host([icon='reply']):before {
			content: '\\ea7d';
		}
		:host([icon='organization']):before {
			content: '\\ea7e';
		}
		:host([icon='organization-filled']):before {
			content: '\\ea7e';
		}
		:host([icon='organization-outline']):before {
			content: '\\ea7e';
		}
		:host([icon='new-file']):before {
			content: '\\ea7f';
		}
		:host([icon='file-add']):before {
			content: '\\ea7f';
		}
		:host([icon='new-folder']):before {
			content: '\\ea80';
		}
		:host([icon='file-directory-create']):before {
			content: '\\ea80';
		}
		:host([icon='trash']):before {
			content: '\\ea81';
		}
		:host([icon='trashcan']):before {
			content: '\\ea81';
		}
		:host([icon='history']):before {
			content: '\\ea82';
		}
		:host([icon='clock']):before {
			content: '\\ea82';
		}
		:host([icon='folder']):before {
			content: '\\ea83';
		}
		:host([icon='file-directory']):before {
			content: '\\ea83';
		}
		:host([icon='symbol-folder']):before {
			content: '\\ea83';
		}
		:host([icon='logo-github']):before {
			content: '\\ea84';
		}
		:host([icon='mark-github']):before {
			content: '\\ea84';
		}
		:host([icon='github']):before {
			content: '\\ea84';
		}
		:host([icon='terminal']):before {
			content: '\\ea85';
		}
		:host([icon='console']):before {
			content: '\\ea85';
		}
		:host([icon='repl']):before {
			content: '\\ea85';
		}
		:host([icon='zap']):before {
			content: '\\ea86';
		}
		:host([icon='symbol-event']):before {
			content: '\\ea86';
		}
		:host([icon='error']):before {
			content: '\\ea87';
		}
		:host([icon='stop']):before {
			content: '\\ea87';
		}
		:host([icon='variable']):before {
			content: '\\ea88';
		}
		:host([icon='symbol-variable']):before {
			content: '\\ea88';
		}
		:host([icon='array']):before {
			content: '\\ea8a';
		}
		:host([icon='symbol-array']):before {
			content: '\\ea8a';
		}
		:host([icon='symbol-module']):before {
			content: '\\ea8b';
		}
		:host([icon='symbol-package']):before {
			content: '\\ea8b';
		}
		:host([icon='symbol-namespace']):before {
			content: '\\ea8b';
		}
		:host([icon='symbol-object']):before {
			content: '\\ea8b';
		}
		:host([icon='symbol-method']):before {
			content: '\\ea8c';
		}
		:host([icon='symbol-function']):before {
			content: '\\ea8c';
		}
		:host([icon='symbol-constructor']):before {
			content: '\\ea8c';
		}
		:host([icon='symbol-boolean']):before {
			content: '\\ea8f';
		}
		:host([icon='symbol-null']):before {
			content: '\\ea8f';
		}
		:host([icon='symbol-numeric']):before {
			content: '\\ea90';
		}
		:host([icon='symbol-number']):before {
			content: '\\ea90';
		}
		:host([icon='symbol-structure']):before {
			content: '\\ea91';
		}
		:host([icon='symbol-struct']):before {
			content: '\\ea91';
		}
		:host([icon='symbol-parameter']):before {
			content: '\\ea92';
		}
		:host([icon='symbol-type-parameter']):before {
			content: '\\ea92';
		}
		:host([icon='symbol-key']):before {
			content: '\\ea93';
		}
		:host([icon='symbol-text']):before {
			content: '\\ea93';
		}
		:host([icon='symbol-reference']):before {
			content: '\\ea94';
		}
		:host([icon='go-to-file']):before {
			content: '\\ea94';
		}
		:host([icon='symbol-enum']):before {
			content: '\\ea95';
		}
		:host([icon='symbol-value']):before {
			content: '\\ea95';
		}
		:host([icon='symbol-ruler']):before {
			content: '\\ea96';
		}
		:host([icon='symbol-unit']):before {
			content: '\\ea96';
		}
		:host([icon='activate-breakpoints']):before {
			content: '\\ea97';
		}
		:host([icon='archive']):before {
			content: '\\ea98';
		}
		:host([icon='arrow-both']):before {
			content: '\\ea99';
		}
		:host([icon='arrow-down']):before {
			content: '\\ea9a';
		}
		:host([icon='arrow-left']):before {
			content: '\\ea9b';
		}
		:host([icon='arrow-right']):before {
			content: '\\ea9c';
		}
		:host([icon='arrow-small-down']):before {
			content: '\\ea9d';
		}
		:host([icon='arrow-small-left']):before {
			content: '\\ea9e';
		}
		:host([icon='arrow-small-right']):before {
			content: '\\ea9f';
		}
		:host([icon='arrow-small-up']):before {
			content: '\\eaa0';
		}
		:host([icon='arrow-up']):before {
			content: '\\eaa1';
		}
		:host([icon='bell']):before {
			content: '\\eaa2';
		}
		:host([icon='bold']):before {
			content: '\\eaa3';
		}
		:host([icon='book']):before {
			content: '\\eaa4';
		}
		:host([icon='bookmark']):before {
			content: '\\eaa5';
		}
		:host([icon='debug-breakpoint-conditional-unverified']):before {
			content: '\\eaa6';
		}
		:host([icon='debug-breakpoint-conditional']):before {
			content: '\\eaa7';
		}
		:host([icon='debug-breakpoint-conditional-disabled']):before {
			content: '\\eaa7';
		}
		:host([icon='debug-breakpoint-data-unverified']):before {
			content: '\\eaa8';
		}
		:host([icon='debug-breakpoint-data']):before {
			content: '\\eaa9';
		}
		:host([icon='debug-breakpoint-data-disabled']):before {
			content: '\\eaa9';
		}
		:host([icon='debug-breakpoint-log-unverified']):before {
			content: '\\eaaa';
		}
		:host([icon='debug-breakpoint-log']):before {
			content: '\\eaab';
		}
		:host([icon='debug-breakpoint-log-disabled']):before {
			content: '\\eaab';
		}
		:host([icon='briefcase']):before {
			content: '\\eaac';
		}
		:host([icon='broadcast']):before {
			content: '\\eaad';
		}
		:host([icon='browser']):before {
			content: '\\eaae';
		}
		:host([icon='bug']):before {
			content: '\\eaaf';
		}
		:host([icon='calendar']):before {
			content: '\\eab0';
		}
		:host([icon='case-sensitive']):before {
			content: '\\eab1';
		}
		:host([icon='check']):before {
			content: '\\eab2';
		}
		:host([icon='checklist']):before {
			content: '\\eab3';
		}
		:host([icon='chevron-down']):before {
			content: '\\eab4';
		}
		:host([icon='chevron-left']):before {
			content: '\\eab5';
		}
		:host([icon='chevron-right']):before {
			content: '\\eab6';
		}
		:host([icon='chevron-up']):before {
			content: '\\eab7';
		}
		:host([icon='chrome-close']):before {
			content: '\\eab8';
		}
		:host([icon='chrome-maximize']):before {
			content: '\\eab9';
		}
		:host([icon='chrome-minimize']):before {
			content: '\\eaba';
		}
		:host([icon='chrome-restore']):before {
			content: '\\eabb';
		}
		:host([icon='circle-outline']):before {
			content: '\\eabc';
		}
		:host([icon='debug-breakpoint-unverified']):before {
			content: '\\eabc';
		}
		:host([icon='circle-slash']):before {
			content: '\\eabd';
		}
		:host([icon='circuit-board']):before {
			content: '\\eabe';
		}
		:host([icon='clear-all']):before {
			content: '\\eabf';
		}
		:host([icon='clippy']):before {
			content: '\\eac0';
		}
		:host([icon='close-all']):before {
			content: '\\eac1';
		}
		:host([icon='cloud-download']):before {
			content: '\\eac2';
		}
		:host([icon='cloud-upload']):before {
			content: '\\eac3';
		}
		:host([icon='code']):before {
			content: '\\eac4';
		}
		:host([icon='collapse-all']):before {
			content: '\\eac5';
		}
		:host([icon='color-mode']):before {
			content: '\\eac6';
		}
		:host([icon='comment-discussion']):before {
			content: '\\eac7';
		}
		:host([icon='credit-card']):before {
			content: '\\eac9';
		}
		:host([icon='dash']):before {
			content: '\\eacc';
		}
		:host([icon='dashboard']):before {
			content: '\\eacd';
		}
		:host([icon='database']):before {
			content: '\\eace';
		}
		:host([icon='debug-continue']):before {
			content: '\\eacf';
		}
		:host([icon='debug-disconnect']):before {
			content: '\\ead0';
		}
		:host([icon='debug-pause']):before {
			content: '\\ead1';
		}
		:host([icon='debug-restart']):before {
			content: '\\ead2';
		}
		:host([icon='debug-start']):before {
			content: '\\ead3';
		}
		:host([icon='debug-step-into']):before {
			content: '\\ead4';
		}
		:host([icon='debug-step-out']):before {
			content: '\\ead5';
		}
		:host([icon='debug-step-over']):before {
			content: '\\ead6';
		}
		:host([icon='debug-stop']):before {
			content: '\\ead7';
		}
		:host([icon='debug']):before {
			content: '\\ead8';
		}
		:host([icon='device-camera-video']):before {
			content: '\\ead9';
		}
		:host([icon='device-camera']):before {
			content: '\\eada';
		}
		:host([icon='device-mobile']):before {
			content: '\\eadb';
		}
		:host([icon='diff-added']):before {
			content: '\\eadc';
		}
		:host([icon='diff-ignored']):before {
			content: '\\eadd';
		}
		:host([icon='diff-modified']):before {
			content: '\\eade';
		}
		:host([icon='diff-removed']):before {
			content: '\\eadf';
		}
		:host([icon='diff-renamed']):before {
			content: '\\eae0';
		}
		:host([icon='diff']):before {
			content: '\\eae1';
		}
		:host([icon='discard']):before {
			content: '\\eae2';
		}
		:host([icon='editor-layout']):before {
			content: '\\eae3';
		}
		:host([icon='empty-window']):before {
			content: '\\eae4';
		}
		:host([icon='exclude']):before {
			content: '\\eae5';
		}
		:host([icon='extensions']):before {
			content: '\\eae6';
		}
		:host([icon='eye-closed']):before {
			content: '\\eae7';
		}
		:host([icon='file-binary']):before {
			content: '\\eae8';
		}
		:host([icon='file-code']):before {
			content: '\\eae9';
		}
		:host([icon='file-media']):before {
			content: '\\eaea';
		}
		:host([icon='file-pdf']):before {
			content: '\\eaeb';
		}
		:host([icon='file-submodule']):before {
			content: '\\eaec';
		}
		:host([icon='file-symlink-directory']):before {
			content: '\\eaed';
		}
		:host([icon='file-symlink-file']):before {
			content: '\\eaee';
		}
		:host([icon='file-zip']):before {
			content: '\\eaef';
		}
		:host([icon='files']):before {
			content: '\\eaf0';
		}
		:host([icon='filter']):before {
			content: '\\eaf1';
		}
		:host([icon='flame']):before {
			content: '\\eaf2';
		}
		:host([icon='fold-down']):before {
			content: '\\eaf3';
		}
		:host([icon='fold-up']):before {
			content: '\\eaf4';
		}
		:host([icon='fold']):before {
			content: '\\eaf5';
		}
		:host([icon='folder-active']):before {
			content: '\\eaf6';
		}
		:host([icon='folder-opened']):before {
			content: '\\eaf7';
		}
		:host([icon='gear']):before {
			content: '\\eaf8';
		}
		:host([icon='gift']):before {
			content: '\\eaf9';
		}
		:host([icon='gist-secret']):before {
			content: '\\eafa';
		}
		:host([icon='gist']):before {
			content: '\\eafb';
		}
		:host([icon='git-commit']):before {
			content: '\\eafc';
		}
		:host([icon='git-compare']):before {
			content: '\\eafd';
		}
		:host([icon='compare-changes']):before {
			content: '\\eafd';
		}
		:host([icon='git-merge']):before {
			content: '\\eafe';
		}
		:host([icon='github-action']):before {
			content: '\\eaff';
		}
		:host([icon='github-alt']):before {
			content: '\\eb00';
		}
		:host([icon='globe']):before {
			content: '\\eb01';
		}
		:host([icon='grabber']):before {
			content: '\\eb02';
		}
		:host([icon='graph']):before {
			content: '\\eb03';
		}
		:host([icon='gripper']):before {
			content: '\\eb04';
		}
		:host([icon='heart']):before {
			content: '\\eb05';
		}
		:host([icon='home']):before {
			content: '\\eb06';
		}
		:host([icon='horizontal-rule']):before {
			content: '\\eb07';
		}
		:host([icon='hubot']):before {
			content: '\\eb08';
		}
		:host([icon='inbox']):before {
			content: '\\eb09';
		}
		:host([icon='issue-reopened']):before {
			content: '\\eb0b';
		}
		:host([icon='issues']):before {
			content: '\\eb0c';
		}
		:host([icon='italic']):before {
			content: '\\eb0d';
		}
		:host([icon='jersey']):before {
			content: '\\eb0e';
		}
		:host([icon='json']):before {
			content: '\\eb0f';
		}
		:host([icon='kebab-vertical']):before {
			content: '\\eb10';
		}
		:host([icon='key']):before {
			content: '\\eb11';
		}
		:host([icon='law']):before {
			content: '\\eb12';
		}
		:host([icon='lightbulb-autofix']):before {
			content: '\\eb13';
		}
		:host([icon='link-external']):before {
			content: '\\eb14';
		}
		:host([icon='link']):before {
			content: '\\eb15';
		}
		:host([icon='list-ordered']):before {
			content: '\\eb16';
		}
		:host([icon='list-unordered']):before {
			content: '\\eb17';
		}
		:host([icon='live-share']):before {
			content: '\\eb18';
		}
		:host([icon='loading']):before {
			content: '\\eb19';
		}
		:host([icon='location']):before {
			content: '\\eb1a';
		}
		:host([icon='mail-read']):before {
			content: '\\eb1b';
		}
		:host([icon='mail']):before {
			content: '\\eb1c';
		}
		:host([icon='markdown']):before {
			content: '\\eb1d';
		}
		:host([icon='megaphone']):before {
			content: '\\eb1e';
		}
		:host([icon='mention']):before {
			content: '\\eb1f';
		}
		:host([icon='milestone']):before {
			content: '\\eb20';
		}
		:host([icon='mortar-board']):before {
			content: '\\eb21';
		}
		:host([icon='move']):before {
			content: '\\eb22';
		}
		:host([icon='multiple-windows']):before {
			content: '\\eb23';
		}
		:host([icon='mute']):before {
			content: '\\eb24';
		}
		:host([icon='no-newline']):before {
			content: '\\eb25';
		}
		:host([icon='note']):before {
			content: '\\eb26';
		}
		:host([icon='octoface']):before {
			content: '\\eb27';
		}
		:host([icon='open-preview']):before {
			content: '\\eb28';
		}
		:host([icon='package']):before {
			content: '\\eb29';
		}
		:host([icon='paintcan']):before {
			content: '\\eb2a';
		}
		:host([icon='pin']):before {
			content: '\\eb2b';
		}
		:host([icon='play']):before {
			content: '\\eb2c';
		}
		:host([icon='run']):before {
			content: '\\eb2c';
		}
		:host([icon='plug']):before {
			content: '\\eb2d';
		}
		:host([icon='preserve-case']):before {
			content: '\\eb2e';
		}
		:host([icon='preview']):before {
			content: '\\eb2f';
		}
		:host([icon='project']):before {
			content: '\\eb30';
		}
		:host([icon='pulse']):before {
			content: '\\eb31';
		}
		:host([icon='question']):before {
			content: '\\eb32';
		}
		:host([icon='quote']):before {
			content: '\\eb33';
		}
		:host([icon='radio-tower']):before {
			content: '\\eb34';
		}
		:host([icon='reactions']):before {
			content: '\\eb35';
		}
		:host([icon='references']):before {
			content: '\\eb36';
		}
		:host([icon='refresh']):before {
			content: '\\eb37';
		}
		:host([icon='regex']):before {
			content: '\\eb38';
		}
		:host([icon='remote-explorer']):before {
			content: '\\eb39';
		}
		:host([icon='remote']):before {
			content: '\\eb3a';
		}
		:host([icon='remove']):before {
			content: '\\eb3b';
		}
		:host([icon='replace-all']):before {
			content: '\\eb3c';
		}
		:host([icon='replace']):before {
			content: '\\eb3d';
		}
		:host([icon='repo-clone']):before {
			content: '\\eb3e';
		}
		:host([icon='repo-force-push']):before {
			content: '\\eb3f';
		}
		:host([icon='repo-pull']):before {
			content: '\\eb40';
		}
		:host([icon='repo-push']):before {
			content: '\\eb41';
		}
		:host([icon='report']):before {
			content: '\\eb42';
		}
		:host([icon='request-changes']):before {
			content: '\\eb43';
		}
		:host([icon='rocket']):before {
			content: '\\eb44';
		}
		:host([icon='root-folder-opened']):before {
			content: '\\eb45';
		}
		:host([icon='root-folder']):before {
			content: '\\eb46';
		}
		:host([icon='rss']):before {
			content: '\\eb47';
		}
		:host([icon='ruby']):before {
			content: '\\eb48';
		}
		:host([icon='save-all']):before {
			content: '\\eb49';
		}
		:host([icon='save-as']):before {
			content: '\\eb4a';
		}
		:host([icon='save']):before {
			content: '\\eb4b';
		}
		:host([icon='screen-full']):before {
			content: '\\eb4c';
		}
		:host([icon='screen-normal']):before {
			content: '\\eb4d';
		}
		:host([icon='search-stop']):before {
			content: '\\eb4e';
		}
		:host([icon='server']):before {
			content: '\\eb50';
		}
		:host([icon='settings-gear']):before {
			content: '\\eb51';
		}
		:host([icon='settings']):before {
			content: '\\eb52';
		}
		:host([icon='shield']):before {
			content: '\\eb53';
		}
		:host([icon='smiley']):before {
			content: '\\eb54';
		}
		:host([icon='sort-precedence']):before {
			content: '\\eb55';
		}
		:host([icon='split-horizontal']):before {
			content: '\\eb56';
		}
		:host([icon='split-vertical']):before {
			content: '\\eb57';
		}
		:host([icon='squirrel']):before {
			content: '\\eb58';
		}
		:host([icon='star-full']):before {
			content: '\\eb59';
		}
		:host([icon='star-half']):before {
			content: '\\eb5a';
		}
		:host([icon='symbol-class']):before {
			content: '\\eb5b';
		}
		:host([icon='symbol-color']):before {
			content: '\\eb5c';
		}
		:host([icon='symbol-constant']):before {
			content: '\\eb5d';
		}
		:host([icon='symbol-enum-member']):before {
			content: '\\eb5e';
		}
		:host([icon='symbol-field']):before {
			content: '\\eb5f';
		}
		:host([icon='symbol-file']):before {
			content: '\\eb60';
		}
		:host([icon='symbol-interface']):before {
			content: '\\eb61';
		}
		:host([icon='symbol-keyword']):before {
			content: '\\eb62';
		}
		:host([icon='symbol-misc']):before {
			content: '\\eb63';
		}
		:host([icon='symbol-operator']):before {
			content: '\\eb64';
		}
		:host([icon='symbol-property']):before {
			content: '\\eb65';
		}
		:host([icon='wrench']):before {
			content: '\\eb65';
		}
		:host([icon='wrench-subaction']):before {
			content: '\\eb65';
		}
		:host([icon='symbol-snippet']):before {
			content: '\\eb66';
		}
		:host([icon='tasklist']):before {
			content: '\\eb67';
		}
		:host([icon='telescope']):before {
			content: '\\eb68';
		}
		:host([icon='text-size']):before {
			content: '\\eb69';
		}
		:host([icon='three-bars']):before {
			content: '\\eb6a';
		}
		:host([icon='thumbsdown']):before {
			content: '\\eb6b';
		}
		:host([icon='thumbsup']):before {
			content: '\\eb6c';
		}
		:host([icon='tools']):before {
			content: '\\eb6d';
		}
		:host([icon='triangle-down']):before {
			content: '\\eb6e';
		}
		:host([icon='triangle-left']):before {
			content: '\\eb6f';
		}
		:host([icon='triangle-right']):before {
			content: '\\eb70';
		}
		:host([icon='triangle-up']):before {
			content: '\\eb71';
		}
		:host([icon='twitter']):before {
			content: '\\eb72';
		}
		:host([icon='unfold']):before {
			content: '\\eb73';
		}
		:host([icon='unlock']):before {
			content: '\\eb74';
		}
		:host([icon='unmute']):before {
			content: '\\eb75';
		}
		:host([icon='unverified']):before {
			content: '\\eb76';
		}
		:host([icon='verified']):before {
			content: '\\eb77';
		}
		:host([icon='versions']):before {
			content: '\\eb78';
		}
		:host([icon='vm-active']):before {
			content: '\\eb79';
		}
		:host([icon='vm-outline']):before {
			content: '\\eb7a';
		}
		:host([icon='vm-running']):before {
			content: '\\eb7b';
		}
		:host([icon='watch']):before {
			content: '\\eb7c';
		}
		:host([icon='whitespace']):before {
			content: '\\eb7d';
		}
		:host([icon='whole-word']):before {
			content: '\\eb7e';
		}
		:host([icon='window']):before {
			content: '\\eb7f';
		}
		:host([icon='word-wrap']):before {
			content: '\\eb80';
		}
		:host([icon='zoom-in']):before {
			content: '\\eb81';
		}
		:host([icon='zoom-out']):before {
			content: '\\eb82';
		}
		:host([icon='list-filter']):before {
			content: '\\eb83';
		}
		:host([icon='list-flat']):before {
			content: '\\eb84';
		}
		:host([icon='list-selection']):before {
			content: '\\eb85';
		}
		:host([icon='selection']):before {
			content: '\\eb85';
		}
		:host([icon='list-tree']):before {
			content: '\\eb86';
		}
		:host([icon='debug-breakpoint-function-unverified']):before {
			content: '\\eb87';
		}
		:host([icon='debug-breakpoint-function']):before {
			content: '\\eb88';
		}
		:host([icon='debug-breakpoint-function-disabled']):before {
			content: '\\eb88';
		}
		:host([icon='debug-stackframe-active']):before {
			content: '\\eb89';
		}
		:host([icon='debug-stackframe-dot']):before {
			content: '\\eb8a';
		}
		:host([icon='debug-stackframe']):before {
			content: '\\eb8b';
		}
		:host([icon='debug-stackframe-focused']):before {
			content: '\\eb8b';
		}
		:host([icon='debug-breakpoint-unsupported']):before {
			content: '\\eb8c';
		}
		:host([icon='symbol-string']):before {
			content: '\\eb8d';
		}
		:host([icon='debug-reverse-continue']):before {
			content: '\\eb8e';
		}
		:host([icon='debug-step-back']):before {
			content: '\\eb8f';
		}
		:host([icon='debug-restart-frame']):before {
			content: '\\eb90';
		}
		:host([icon='debug-alt']):before {
			content: '\\eb91';
		}
		:host([icon='call-incoming']):before {
			content: '\\eb92';
		}
		:host([icon='call-outgoing']):before {
			content: '\\eb93';
		}
		:host([icon='menu']):before {
			content: '\\eb94';
		}
		:host([icon='expand-all']):before {
			content: '\\eb95';
		}
		:host([icon='feedback']):before {
			content: '\\eb96';
		}
		:host([icon='group-by-ref-type']):before {
			content: '\\eb97';
		}
		:host([icon='ungroup-by-ref-type']):before {
			content: '\\eb98';
		}
		:host([icon='account']):before {
			content: '\\eb99';
		}
		:host([icon='bell-dot']):before {
			content: '\\eb9a';
		}
		:host([icon='debug-console']):before {
			content: '\\eb9b';
		}
		:host([icon='library']):before {
			content: '\\eb9c';
		}
		:host([icon='output']):before {
			content: '\\eb9d';
		}
		:host([icon='run-all']):before {
			content: '\\eb9e';
		}
		:host([icon='sync-ignored']):before {
			content: '\\eb9f';
		}
		:host([icon='pinned']):before {
			content: '\\eba0';
		}
		:host([icon='github-inverted']):before {
			content: '\\eba1';
		}
		:host([icon='server-process']):before {
			content: '\\eba2';
		}
		:host([icon='server-environment']):before {
			content: '\\eba3';
		}
		:host([icon='pass']):before {
			content: '\\eba4';
		}
		:host([icon='issue-closed']):before {
			content: '\\eba4';
		}
		:host([icon='stop-circle']):before {
			content: '\\eba5';
		}
		:host([icon='play-circle']):before {
			content: '\\eba6';
		}
		:host([icon='record']):before {
			content: '\\eba7';
		}
		:host([icon='debug-alt-small']):before {
			content: '\\eba8';
		}
		:host([icon='vm-connect']):before {
			content: '\\eba9';
		}
		:host([icon='cloud']):before {
			content: '\\ebaa';
		}
		:host([icon='merge']):before {
			content: '\\ebab';
		}
		:host([icon='export']):before {
			content: '\\ebac';
		}
		:host([icon='graph-left']):before {
			content: '\\ebad';
		}
		:host([icon='magnet']):before {
			content: '\\ebae';
		}
		:host([icon='notebook']):before {
			content: '\\ebaf';
		}
		:host([icon='redo']):before {
			content: '\\ebb0';
		}
		:host([icon='check-all']):before {
			content: '\\ebb1';
		}
		:host([icon='pinned-dirty']):before {
			content: '\\ebb2';
		}
		:host([icon='pass-filled']):before {
			content: '\\ebb3';
		}
		:host([icon='circle-large-filled']):before {
			content: '\\ebb4';
		}
		:host([icon='circle-large-outline']):before {
			content: '\\ebb5';
		}
		:host([icon='combine']):before {
			content: '\\ebb6';
		}
		:host([icon='gather']):before {
			content: '\\ebb6';
		}
		:host([icon='table']):before {
			content: '\\ebb7';
		}
		:host([icon='variable-group']):before {
			content: '\\ebb8';
		}
		:host([icon='type-hierarchy']):before {
			content: '\\ebb9';
		}
		:host([icon='type-hierarchy-sub']):before {
			content: '\\ebba';
		}
		:host([icon='type-hierarchy-super']):before {
			content: '\\ebbb';
		}
		:host([icon='git-pull-request-create']):before {
			content: '\\ebbc';
		}
		:host([icon='run-above']):before {
			content: '\\ebbd';
		}
		:host([icon='run-below']):before {
			content: '\\ebbe';
		}
		:host([icon='notebook-template']):before {
			content: '\\ebbf';
		}
		:host([icon='debug-rerun']):before {
			content: '\\ebc0';
		}
		:host([icon='workspace-trusted']):before {
			content: '\\ebc1';
		}
		:host([icon='workspace-untrusted']):before {
			content: '\\ebc2';
		}
		:host([icon='workspace-unknown']):before {
			content: '\\ebc3';
		}
		:host([icon='terminal-cmd']):before {
			content: '\\ebc4';
		}
		:host([icon='terminal-debian']):before {
			content: '\\ebc5';
		}
		:host([icon='terminal-linux']):before {
			content: '\\ebc6';
		}
		:host([icon='terminal-powershell']):before {
			content: '\\ebc7';
		}
		:host([icon='terminal-tmux']):before {
			content: '\\ebc8';
		}
		:host([icon='terminal-ubuntu']):before {
			content: '\\ebc9';
		}
		:host([icon='terminal-bash']):before {
			content: '\\ebca';
		}
		:host([icon='arrow-swap']):before {
			content: '\\ebcb';
		}
		:host([icon='copy']):before {
			content: '\\ebcc';
		}
		:host([icon='person-add']):before {
			content: '\\ebcd';
		}
		:host([icon='filter-filled']):before {
			content: '\\ebce';
		}
		:host([icon='wand']):before {
			content: '\\ebcf';
		}
		:host([icon='debug-line-by-line']):before {
			content: '\\ebd0';
		}
		:host([icon='inspect']):before {
			content: '\\ebd1';
		}
		:host([icon='layers']):before {
			content: '\\ebd2';
		}
		:host([icon='layers-dot']):before {
			content: '\\ebd3';
		}
		:host([icon='layers-active']):before {
			content: '\\ebd4';
		}
		:host([icon='compass']):before {
			content: '\\ebd5';
		}
		:host([icon='compass-dot']):before {
			content: '\\ebd6';
		}
		:host([icon='compass-active']):before {
			content: '\\ebd7';
		}
		:host([icon='azure']):before {
			content: '\\ebd8';
		}
		:host([icon='issue-draft']):before {
			content: '\\ebd9';
		}
		:host([icon='git-pull-request-closed']):before {
			content: '\\ebda';
		}
		:host([icon='git-pull-request-draft']):before {
			content: '\\ebdb';
		}
		:host([icon='debug-all']):before {
			content: '\\ebdc';
		}
		:host([icon='debug-coverage']):before {
			content: '\\ebdd';
		}
		:host([icon='run-errors']):before {
			content: '\\ebde';
		}
		:host([icon='folder-library']):before {
			content: '\\ebdf';
		}
		:host([icon='debug-continue-small']):before {
			content: '\\ebe0';
		}
		:host([icon='beaker-stop']):before {
			content: '\\ebe1';
		}
		:host([icon='graph-line']):before {
			content: '\\ebe2';
		}
		:host([icon='graph-scatter']):before {
			content: '\\ebe3';
		}
		:host([icon='pie-chart']):before {
			content: '\\ebe4';
		}
		:host([icon='bracket']):before {
			content: '\\eb0f';
		}
		:host([icon='bracket-dot']):before {
			content: '\\ebe5';
		}
		:host([icon='bracket-error']):before {
			content: '\\ebe6';
		}
		:host([icon='lock-small']):before {
			content: '\\ebe7';
		}
		:host([icon='azure-devops']):before {
			content: '\\ebe8';
		}
		:host([icon='verified-filled']):before {
			content: '\\ebe9';
		}
		:host([icon='newline']):before {
			content: '\\ebea';
		}
		:host([icon='layout']):before {
			content: '\\ebeb';
		}
		:host([icon='layout-activitybar-left']):before {
			content: '\\ebec';
		}
		:host([icon='layout-activitybar-right']):before {
			content: '\\ebed';
		}
		:host([icon='layout-panel-left']):before {
			content: '\\ebee';
		}
		:host([icon='layout-panel-center']):before {
			content: '\\ebef';
		}
		:host([icon='layout-panel-justify']):before {
			content: '\\ebf0';
		}
		:host([icon='layout-panel-right']):before {
			content: '\\ebf1';
		}
		:host([icon='layout-panel']):before {
			content: '\\ebf2';
		}
		:host([icon='layout-sidebar-left']):before {
			content: '\\ebf3';
		}
		:host([icon='layout-sidebar-right']):before {
			content: '\\ebf4';
		}
		:host([icon='layout-statusbar']):before {
			content: '\\ebf5';
		}
		:host([icon='layout-menubar']):before {
			content: '\\ebf6';
		}
		:host([icon='layout-centered']):before {
			content: '\\ebf7';
		}
		:host([icon='target']):before {
			content: '\\ebf8';
		}

		:host([icon='indent']):before {
			content: '\\ebf9';
		}
		:host([icon='record-small']):before {
			content: '\\ebfa';
		}
		:host([icon='error-small']):before {
			content: '\\ebfb';
		}
		:host([icon='terminal-decoration-error']):before {
			content: '\\ebfb';
		}
		:host([icon='arrow-circle-down']):before {
			content: '\\ebfc';
		}
		:host([icon='arrow-circle-left']):before {
			content: '\\ebfd';
		}
		:host([icon='arrow-circle-right']):before {
			content: '\\ebfe';
		}
		:host([icon='arrow-circle-up']):before {
			content: '\\ebff';
		}
		:host([icon='layout-sidebar-right-off']):before {
			content: '\\ec00';
		}
		:host([icon='layout-panel-off']):before {
			content: '\\ec01';
		}
		:host([icon='layout-sidebar-left-off']):before {
			content: '\\ec02';
		}
		:host([icon='blank']):before {
			content: '\\ec03';
		}
		:host([icon='heart-filled']):before {
			content: '\\ec04';
		}
		:host([icon='map']):before {
			content: '\\ec05';
		}
		:host([icon='map-filled']):before {
			content: '\\ec06';
		}
		:host([icon='circle-small']):before {
			content: '\\ec07';
		}
		:host([icon='bell-slash']):before {
			content: '\\ec08';
		}
		:host([icon='bell-slash-dot']):before {
			content: '\\ec09';
		}
		:host([icon='comment-unresolved']):before {
			content: '\\ec0a';
		}
		:host([icon='git-pull-request-go-to-changes']):before {
			content: '\\ec0b';
		}
		:host([icon='git-pull-request-new-changes']):before {
			content: '\\ec0c';
		}
		:host([icon='search-fuzzy']):before {
			content: '\\ec0d';
		}
		:host([icon='comment-draft']):before {
			content: '\\ec0e';
		}
		:host([icon='send']):before {
			content: '\\ec0f';
		}
		:host([icon='sparkle']):before {
			content: '\\ec10';
		}
		:host([icon='insert']):before {
			content: '\\ec11';
		}

		:host([icon^='gl-']) {
			font-family: 'glicons';
		}
		:host([icon='gl-commit-horizontal']):before {
			content: '\\f101';
		}
		:host([icon='gl-graph']):before {
			content: '\\f102';
		}
		:host([icon='gl-next-commit']):before {
			content: '\\f103';
		}
		:host([icon='gl-prev-commit-menu']):before {
			content: '\\f104';
		}
		:host([icon='gl-prev-commit']):before {
			content: '\\f105';
		}
		:host([icon='gl-compare-ref-working']):before {
			content: '\\f106';
		}
		:host([icon='gl-branches-view']):before {
			content: '\\f107';
		}
		:host([icon='gl-commit-view']):before {
			content: '\\f108';
		}
		:host([icon='gl-commits-view']):before {
			content: '\\f109';
		}
		:host([icon='gl-compare-view']):before {
			content: '\\f10a';
		}
		:host([icon='gl-contributors-view']):before {
			content: '\\f10b';
		}
		:host([icon='gl-history-view']):before {
			content: '\\f10c';
		}
		:host([icon='gl-remotes-view']):before {
			content: '\\f10d';
		}
		:host([icon='gl-repositories-view']):before {
			content: '\\f10e';
		}
		:host([icon='gl-search-view']):before {
			content: '\\f10f';
		}
		:host([icon='gl-stashes-view']):before {
			content: '\\f110';
		}
		:host([icon='gl-tags-view']):before {
			content: '\\f111';
		}
		:host([icon='gl-worktrees-view']):before {
			content: '\\f112';
		}
		:host([icon='gl-gitlens']):before {
			content: '\\f113';
		}
		:host([icon='gl-stash-pop']):before {
			content: '\\f114';
		}
		:host([icon='gl-stash-save']):before {
			content: '\\f115';
		}
		:host([icon='gl-unplug']):before {
			content: '\\f116';
		}
		:host([icon='gl-open-revision']):before {
			content: '\\f117';
		}
		:host([icon='gl-switch']):before {
			content: '\\f118';
		}
		:host([icon='gl-expand']):before {
			content: '\\f119';
		}
		:host([icon='gl-list-auto']):before {
			content: '\\f11a';
		}
		:host([icon='gl-arrow-up-force']):before {
			content: '\\f11b';
		}
		:host([icon='gl-pinned-filled']):before {
			content: '\\f11c';
			/* TODO: see relative positioning needed in every use-case */
			position: relative;
			left: 1px;
		}
		:host([icon='gl-clock']):before {
			content: '\\f11d';
		}
		:host([icon='gl-provider-azdo']):before {
			content: '\\f11e';
		}
		:host([icon='gl-provider-bitbucket']):before {
			content: '\\f11f';
		}
		:host([icon='gl-provider-gerrit']):before {
			content: '\\f120';
		}
		:host([icon='gl-provider-gitea']):before {
			content: '\\f121';
		}
		:host([icon='gl-provider-github']):before {
			content: '\\f122';
		}
		:host([icon='gl-provider-gitlab']):before {
			content: '\\f123';
		}
		:host([icon='gl-gitlens-inspect']):before {
			content: '\\f124';
		}
		:host([icon='gl-workspaces-view']):before {
			content: '\\f125';
		}
		:host([icon='gl-cloud-patch']):before {
			content: '\\f128';
		}
		:host([icon='gl-cloud-patch-share']):before {
			content: '\\f129';
		}

		@keyframes codicon-spin {
			100% {
				transform: rotate(360deg);
			}
		}

		:host([modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;
		}
		:host([icon='loading'][modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;

			/* custom speed & easing for loading icon */
			animation-duration: 1s !important;
			animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67) !important;
		}
	`,uo([ro()],fo.prototype,"icon",2),uo([ro()],fo.prototype,"modifier",2),uo([ro({type:Number})],fo.prototype,"size",2),fo=uo([oo("code-icon")],fo);var mo=Object.defineProperty,go=Object.getOwnPropertyDescriptor,wo=(e,t,o,i)=>{for(var r,a=i>1?void 0:i?go(t,o):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i?r(t,o,a):r(a))||a);return i&&a&&mo(t,o,a),a};let _o=class extends lit_element_s{constructor(){super(...arguments),this.label="",this.icon=""}render(){return Gt`
			<a
				role="${this.href?Kt:"button"}"
				type="${this.href?Kt:"button"}"
				aria-label="${this.label}"
				title="${this.label}"
			>
				<code-icon icon="${this.icon}"></code-icon>
			</a>
		`}};_o.styles=Qe`
		:host {
			box-sizing: border-box;
			display: inline-flex;
			justify-content: center;
			align-items: center;
			width: 2rem;
			height: 2rem;
			border-radius: 0.5rem;
			color: inherit;
			padding: 0.2rem;
			vertical-align: text-bottom;
			text-decoration: none;
			cursor: pointer;
		}

		:host(:focus) {
			outline: 1px solid var(--vscode-focusBorder);
			outline-offset: -1px;
		}

		:host(:hover) {
			background-color: var(--vscode-toolbar-hoverBackground);
		}

		:host(:active) {
			background-color: var(--vscode-toolbar-activeBackground);
		}
	`,wo([ro()],_o.prototype,"href",2),wo([ro()],_o.prototype,"label",2),wo([ro()],_o.prototype,"icon",2),_o=wo([oo("action-item")],_o);var ko=Object.defineProperty,xo=Object.getOwnPropertyDescriptor,Ao=(e,t,o,i)=>{for(var r,a=i>1?void 0:i?xo(t,o):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i?r(t,o,a):r(a))||a);return i&&a&&ko(t,o,a),a};let Co=class extends lit_element_s{firstUpdated(){this.role="navigation"}disconnectedCallback(){this._slotSubscriptionsDisposer?.()}render(){return Gt`<slot @slotchange=${this.handleSlotChange}></slot>`}handleSlotChange(e){if(this._slotSubscriptionsDisposer?.(),this.actionNodes.length<2)return;const t=this.handleKeydown.bind(this),o=`${this.actionNodes.length}`,i=this.actionNodes.map(((e,i)=>(e.setAttribute("aria-posinset",`${i+1}`),e.setAttribute("aria-setsize",o),e.setAttribute("tabindex",0===i?"0":"-1"),e.addEventListener("keydown",t,!1),{dispose:()=>{e?.removeEventListener("keydown",t,!1)}})));this._slotSubscriptionsDisposer=()=>{i?.forEach((({dispose:e})=>e()))}}handleKeydown(e){if(!e.target||null==this.actionNodes||this.actionNodes.length<2)return;const t=e.target,o=parseInt(t.getAttribute("aria-posinset")??"0",10);let i=null;if("ArrowLeft"===e.key){const e=1===o?this.actionNodes.length-1:o-2;i=this.actionNodes[e]}else if("ArrowRight"===e.key){const e=o===this.actionNodes.length?0:o;i=this.actionNodes[e]}null!=i&&i!==t&&(t.setAttribute("tabindex","-1"),i.setAttribute("tabindex","0"),i.focus())}};Co.styles=Qe`
		:host {
			display: flex;
			align-items: center;
			user-select: none;
		}
	`,Ao([co({flatten:!0})],Co.prototype,"actionNodes",2),Co=Ao([oo("action-nav")],Co);const So=()=>({toAttribute:e=>e.getTime(),fromAttribute:(e,t)=>new Date(parseInt(e,10))}),Eo=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,Po=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,Oo=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let To;const Lo=new Map;let No,Uo,Io;function jo(e,t,o,i=!0){const r=`${o??""}:${t=t??void 0}`;let a=Lo.get(r);if(null==a){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=Po.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}const o={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll(Eo))if(null!=t)for(const[e,i]of Object.entries(t))if(null!=i)switch(e){case"year":o.year=4===i.length?"numeric":"2-digit";break;case"month":switch(i.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":o.day="DD"===i?"2-digit":"numeric";break;case"weekday":switch(i.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===i.length?"2-digit":"numeric",o.hour12="hh"===i||"h"===i;break;case"minute":o.minute=2===i.length?"2-digit":"numeric";break;case"second":o.second=2===i.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===i.length?"long":"short"}return o}(t);let c;c=null==o?No:"system"===o?void 0:[o],a=new Intl.DateTimeFormat(c,e),i&&Lo.set(r,a)}if(null==t||Po.test(t))return a.format(e);function c(e){const t=`${o??""}:time:${e}`;let r=Lo.get(t);if(null==r){const a={localeMatcher:"best fit",timeStyle:e};let c;c=null==o?No:"system"===o?void 0:[o],r=new Intl.DateTimeFormat(c,a),i&&Lo.set(t,r)}return r}const l=a.formatToParts(e);return t.replace(Eo,((t,o,i,r,a,d,h,u,p,f,m,g,v,y,w)=>{if(null!=o)return o.substring(1,o.length-1);for(const[t,o]of Object.entries(w)){if(null==o)continue;const i=l.find((e=>e.type===t));if("Do"===o&&"day"===i?.type)return Fo(Number(i.value));if("a"===o&&"dayPeriod"===i?.type){const t=c("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return` ${(t??i)?.value??""}`}return i?.value??""}return""}))}const zo=["th","st","nd","rd"];function Fo(e){const t=e%100;return`${e}${zo[(t-20)%10]??zo[t]??zo[0]}`}var Vo=Object.defineProperty,qo=Object.getOwnPropertyDescriptor,Go=(e,t,o,i)=>{for(var r,a=i>1?void 0:i?qo(t,o):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i?r(t,o,a):r(a))||a);return i&&a&&Vo(t,o,a),a};let Wo=class extends lit_element_s{constructor(){super(...arguments),this.format="MMMM Do, YYYY h:mma",this.date=new Date}render(){return Gt`<time datetime="${this.date}" title="${jo(this.date,this.format??"MMMM Do, YYYY h:mma")}"
			>${function(e,t){const o=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,i,r,a]of Oo){const c=Math.abs(o);if(c>=i||1e3===i)return t?(null==To&&(null!=Io?To=Io.resolvedOptions().locale:null!=Uo?To=Uo.resolvedOptions().locale:(Io=new Intl.RelativeTimeFormat(No,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),To=Io.resolvedOptions().locale)),"en"===To||To?.startsWith("en-")?`${Math.round(c/r)}${a}`:(null==Io&&(Io=new Intl.RelativeTimeFormat(No,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),Io.format(Math.round(o/r),e))):(null==Uo&&(Uo=new Intl.RelativeTimeFormat(No,{localeMatcher:"best fit",numeric:"auto",style:"long"})),Uo.format(Math.round(o/r),e))}return""}(this.date)}</time
		>`}};Go([ro()],Wo.prototype,"format",2),Go([ro({converter:So(),reflect:!0})],Wo.prototype,"date",2),Wo=Go([oo("formatted-date")],Wo);var Ko=Object.defineProperty,Yo=Object.getOwnPropertyDescriptor,Zo=(e,t,o,i)=>{for(var r,a=i>1?void 0:i?Yo(t,o):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i?r(t,o,a):r(a))||a);return i&&a&&Ko(t,o,a),a};let Jo=class extends lit_element_s{constructor(){super(...arguments),this.name="",this.email="",this.avatarUrl="https://www.gravatar.com/avatar/?s=64&d=robohash",this.showAvatar=!1,this.dateFormat="MMMM Do, YYYY h:mma",this.committer=!1,this.actionLabel="committed"}render(){const e=this.showAvatar&&null!=this.avatarUrl&&this.avatarUrl.length>0;return Gt`
			<a class="avatar" href="${this.email?`mailto:${this.email}`:"#"}">
				${e?Gt`<img class="thumb" src="${this.avatarUrl}" alt="${this.name}" />`:Gt`<code-icon icon="person" size="32"></code-icon>`}
			</a>
			<a class="name" href="${this.email?`mailto:${this.email}`:"#"}">${this.name}</a>
			<span class="date">
				${this.actionLabel}
				<formatted-date date=${this.date?.getTime()} format=${this.dateFormat}> </formatted-date>
			</span>
		`}};Jo.styles=Qe`
		:host {
			display: grid;
			gap: 0rem 1rem;
			justify-content: start;
		}

		a {
			color: var(--color-link-foreground);
			text-decoration: none;
		}

		.avatar {
			grid-column: 1;
			grid-row: 1 / 3;
			width: 36px;
		}

		.thumb {
			width: 100%;
			height: auto;
			border-radius: 0.4rem;
		}

		.name {
			grid-column: 2;
			grid-row: 1;
			font-size: 1.5rem;
		}

		.date {
			grid-column: 2;
			grid-row: 2;
			font-size: 1.3rem;
		}
	`,Zo([ro()],Jo.prototype,"name",2),Zo([ro()],Jo.prototype,"email",2),Zo([ro({converter:So(),reflect:!0})],Jo.prototype,"date",2),Zo([ro()],Jo.prototype,"avatarUrl",2),Zo([ro({type:Boolean})],Jo.prototype,"showAvatar",2),Zo([ro()],Jo.prototype,"dateFormat",2),Zo([ro({type:Boolean})],Jo.prototype,"committer",2),Zo([ro()],Jo.prototype,"actionLabel",2),Jo=Zo([oo("commit-identity")],Jo);var Xo=Object.defineProperty,Qo=Object.getOwnPropertyDescriptor,en=(e,t,o,i)=>{for(var r,a=i>1?void 0:i?Qo(t,o):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i?r(t,o,a):r(a))||a);return i&&a&&Xo(t,o,a),a};let tn=class extends lit_element_s{constructor(){super(...arguments),this.url="",this.name="",this.date="",this.status="merged",this.type="autolink",this.key=""}renderDate(){return""===this.date?Kt:Gt`<formatted-date date="${this.date}"></formatted-date>`}render(){let e;switch(this.type){case"issue":e="closed"===this.status?"pass":"issues";break;case"pr":switch(this.status){case"merged":e="git-merge";break;case"closed":e="git-pull-request-closed";break;default:e="git-pull-request"}break;default:e="link"}return Gt`
			<span class="icon"><code-icon icon=${e}></code-icon></span>
			<p class="title">
				<a href="${this.url}">${this.name}</a>
			</p>
			<p class="date">${this.key} ${this.status?this.status:Kt} ${this.renderDate()}</p>
		`}};tn.styles=Qe`
		:host {
			display: grid;
			gap: 0.25rem 0.6rem;
			justify-content: start;
		}

		a {
			color: var(--color-link-foreground);
			text-decoration: none;
		}

		.icon {
			grid-column: 1;
			grid-row: 1 / 3;
			color: var(--vscode-gitlens-mergedPullRequestIconColor);
			text-align: center;
			padding-top: 0.1rem;
		}

		.title {
			grid-column: 2;
			grid-row: 1;
			margin: 0;
			font-size: 1.4rem;
		}

		.date {
			grid-column: 2;
			grid-row: 2;
			margin: 0;
			font-size: 1.3rem;
		}
	`,en([ro()],tn.prototype,"url",2),en([ro()],tn.prototype,"name",2),en([ro()],tn.prototype,"date",2),en([ro()],tn.prototype,"status",2),en([ro()],tn.prototype,"type",2),en([ro()],tn.prototype,"key",2),tn=en([oo("issue-pull-request")],tn);var on=Object.defineProperty,nn=Object.getOwnPropertyDescriptor,rn=(e,t,o,i)=>{for(var r,a=i>1?void 0:i?nn(t,o):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i?r(t,o,a):r(a))||a);return i&&a&&on(t,o,a),a};let sn=class extends lit_element_s{constructor(){super(...arguments),this.lines=1}render(){const e=`--skeleton-lines: ${this.lines};`;return Gt`<div class="skeleton" style=${e}></div>`}};function an(e,t,o){return e?t(e):o?.(e)}sn.styles=Qe`
		:host {
			--skeleton-line-height: 1.2;
			--skeleton-lines: 1;
		}

		.skeleton {
			position: relative;
			display: block;
			overflow: hidden;
			border-radius: 0.25em;
			width: 100%;
			height: calc(1em * var(--skeleton-line-height, 1.2) * var(--skeleton-lines, 1));
			background-color: var(--color-background--lighten-15);
		}

		.skeleton::before {
			content: '';
			position: absolute;
			display: block;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background-image: linear-gradient(
				to right,
				transparent 0%,
				var(--color-background--lighten-15) 20%,
				var(--color-background--lighten-30) 60%,
				transparent 100%
			);
			transform: translateX(-100%);
			animation: skeleton-loader 2s ease-in-out infinite;
		}

		@keyframes skeleton-loader {
			100% {
				transform: translateX(100%);
			}
		}
	`,rn([ro({type:Number})],sn.prototype,"lines",2),sn=rn([oo("skeleton-loader")],sn);var cn=Object.defineProperty,ln=Object.getOwnPropertyDescriptor,dn=(e,t,o,i)=>{for(var r,a=i>1?void 0:i?ln(t,o):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i?r(t,o,a):r(a))||a);return i&&a&&cn(t,o,a),a};let hn=class extends lit_element_s{constructor(){super(...arguments),this.added=0,this.modified=0,this.removed=0}render(){return Gt`
			${an(null!=this.added,(()=>Gt`<span class="stat added" title="${this.added} added" aria-label="${this.added} added"
						><span class="label">+${this.added}</span></span
					>`))}
			${an(null!=this.modified,(()=>Gt`<span
						class="stat modified"
						title="${this.modified} modified"
						aria-label="${this.modified} modified"
						><span class="label">~${this.modified}</span></span
					>`))}
			${an(null!=this.removed,(()=>Gt`<span class="stat deleted" title="${this.removed} removed" aria-label="${this.removed} removed"
						><span class="label">-${this.removed}</span></span
					>`))}
		`}};hn.styles=Qe`
		:host {
			display: inline-flex;
			flex-direction: row;
			align-items: center;
			gap: 1rem;
		}

		.stat {
			display: inline-flex;
			flex-direction: row;
			align-items: center;
		}

		.stat code-icon {
			margin-right: 0.25rem;
		}

		.added {
			color: var(--vscode-gitDecoration-addedResourceForeground);
		}
		.modified {
			color: var(--vscode-gitDecoration-modifiedResourceForeground);
		}
		.deleted {
			color: var(--vscode-gitDecoration-deletedResourceForeground);
		}

		.label {
			flex-basis: 100%;
			text-align: center;
		}
	`,dn([ro({type:Number})],hn.prototype,"added",2),dn([ro({type:Number})],hn.prototype,"modified",2),dn([ro({type:Number})],hn.prototype,"removed",2),hn=dn([oo("commit-stats")],hn);Qe`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus) {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		width: 1px;
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
	}
`;const un=Qe`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,pn=Qe`
	:host {
		box-sizing: border-box;
	}
	:host *,
	:host *::before,
	:host *::after {
		box-sizing: inherit;
	}
	[hidden] {
		display: none !important;
	}
`,fn=(Qe`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${un}
	}
	a:hover {
		text-decoration: underline;
	}
`,Qe`
	::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}
	::-webkit-scrollbar-corner {
		background-color: transparent;
	}

	::-webkit-scrollbar-thumb {
		background-color: transparent;
		border-color: inherit;
		border-right-style: inset;
		border-right-width: calc(100vw + 100vh);
		border-radius: unset !important;
	}
	::-webkit-scrollbar-thumb:hover {
		border-color: var(--vscode-scrollbarSlider-hoverBackground);
	}
	::-webkit-scrollbar-thumb:active {
		border-color: var(--vscode-scrollbarSlider-activeBackground);
	}

	.scrollable {
		border-color: transparent;
		transition: border-color 1s linear;
	}

	:host(:hover) .scrollable,
	:host(:focus-within) .scrollable {
		border-color: var(--vscode-scrollbarSlider-background);
		transition: none;
	}
`);var bn=Object.defineProperty,mn=Object.getOwnPropertyDescriptor,gn=(e,t,o,i)=>{for(var r,a=i>1?void 0:i?mn(t,o):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i?r(t,o,a):r(a))||a);return i&&a&&bn(t,o,a),a};let vn=class extends lit_element_s{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}firstUpdated(){this.setAttribute("role","progressbar")}render(){return Gt`<div class="progress-bar"></div>`}};vn.styles=Qe`
		* {
			box-sizing: border-box;
		}

		:host {
			position: absolute;
			left: 0;
			z-index: 5;
			height: 2px;
			width: 100%;
			overflow: hidden;
		}

		:host([position='bottom']) {
			bottom: 0;
		}

		:host([position='top']) {
			top: 0;
		}

		.progress-bar {
			background-color: var(--vscode-progressBar-background);
			display: none;
			position: absolute;
			left: 0;
			width: 2%;
			height: 2px;
		}

		:host([active]:not([active='false'])) .progress-bar {
			display: inherit;
		}

		:host([mode='discrete']) .progress-bar {
			left: 0;
			transition: width 0.1s linear;
		}

		:host([mode='discrete done']) .progress-bar {
			width: 100%;
		}

		:host([mode='infinite']) .progress-bar {
			animation-name: progress;
			animation-duration: 4s;
			animation-iteration-count: infinite;
			animation-timing-function: steps(100);
			transform: translateZ(0);
		}

		@keyframes progress {
			0% {
				transform: translateX(0) scaleX(1);
			}

			50% {
				transform: translateX(2500%) scaleX(3);
			}

			to {
				transform: translateX(4900%) scaleX(1);
			}
		}
	`,gn([ro({reflect:!0})],vn.prototype,"mode",2),gn([ro({type:Boolean})],vn.prototype,"active",2),gn([ro()],vn.prototype,"position",2),vn=gn([oo("progress-indicator")],vn);var yn=Object.defineProperty,wn=Object.getOwnPropertyDescriptor,$n=(e,t,o,i)=>{for(var r,a=i>1?void 0:i?wn(t,o):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i?r(t,o,a):r(a))||a);return i&&a&&yn(t,o,a),a};let _n=class extends lit_element_s{constructor(){super(...arguments),this.collapsable=!1,this.expanded=!1,this.loading=!1}renderTitle(){return this.collapsable?Gt`<button
			type="button"
			class="label"
			aria-controls="content"
			aria-expanded=${this.expanded}
			@click="${this.toggleExpanded}"
		>
			<code-icon class="icon" icon=${this.expanded?"chevron-down":"chevron-right"}></code-icon
			><span class="title"><slot name="title">Section</slot></span>
			<span class="subtitle"><slot name="subtitle"></slot></span>
		</button>`:Gt`<div class="label">
				<span class="title"><slot name="title">Section</slot></span>
				<span class="subtitle"><slot name="subtitle"></slot></span>
			</div>`}render(){return Gt`
			<header class="header">
				${this.renderTitle()}
				<slot name="actions"></slot>
				<progress-indicator ?active="${this.loading}"></progress-indicator>
			</header>
			<div id="content" role="region" part="content" class="content scrollable">
				<slot></slot>
			</div>
		`}toggleExpanded(){this.expanded=!this.expanded,this.dispatchEvent(new CustomEvent("expanded-change",{detail:{expanded:this.expanded},bubbles:!0,composed:!0}))}};_n.styles=[fn,Qe`
			:host {
				display: flex;
				flex-direction: column;
				background-color: var(--vscode-sideBar-background);
			}

			* {
				box-sizing: border-box;
			}

			.header {
				flex: none;
				display: flex;
				background-color: var(--vscode-sideBarSectionHeader-background);
				color: var(--vscode-sideBarSectionHeader-foreground);
				border-top: 1px solid var(--vscode-sideBarSectionHeader-border);
				position: relative;
			}

			.header:focus-within {
				outline: 1px solid var(--vscode-focusBorder);
				outline-offset: -1px;
			}

			.label {
				appearance: none;
				display: flex;
				flex-direction: row;
				align-items: center;
				width: 100%;
				padding: 0;
				border: none;
				text-align: left;
				font-family: var(--font-family);
				font-size: 1.1rem;
				line-height: 2.2rem;
				height: 2.2rem;
				background: transparent;
				color: inherit;
				outline: none;
				text-overflow: ellipsis;
				user-select: none;
			}

			:host([collapsable]) .label {
				cursor: pointer;
			}

			.title {
				font-weight: bold;
				text-transform: uppercase;
			}

			:host(:not([collapsable])) .title {
				margin-left: 0.8rem;
			}

			.subtitle {
				margin-left: 1rem;
				opacity: 0.6;
			}

			.icon {
				font-weight: normal;
				margin: 0 0.2rem;
			}

			.content {
				flex: 1;
				overflow: auto;
				min-height: 0;
				/*
			scrollbar-gutter: stable;
			box-shadow: #000000 0 0.6rem 0.6rem -0.6rem inset;
			*/
				padding-top: 0.6rem;
			}

			:host([collapsable]:not([expanded])) .content,
			:host([collapsable][expanded='false']) .content {
				display: none;
			}

			slot[name='actions']::slotted(*) {
				flex: none;
				margin-left: auto;
			}
		`],$n([ro({type:Boolean,reflect:!0})],_n.prototype,"collapsable",2),$n([ro({type:Boolean,reflect:!0})],_n.prototype,"expanded",2),$n([ro({type:Boolean,reflect:!0})],_n.prototype,"loading",2),_n=$n([oo("webview-pane")],_n);var kn={408:(e,t)=>{var o=Symbol.for("react.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),m=Symbol.iterator,g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,y={};function w(e,t,o){this.props=e,this.context=t,this.refs=y,this.updater=o||g}function _(){}function x(e,t,o){this.props=e,this.context=t,this.refs=y,this.updater=o||g}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=w.prototype;var A=x.prototype=new _;A.constructor=x,v(A,w.prototype),A.isPureReactComponent=!0;var C=Array.isArray,S=Object.prototype.hasOwnProperty,E={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,i){var r,a={},c=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(c=""+t.key),t)S.call(t,r)&&!P.hasOwnProperty(r)&&(a[r]=t[r]);var d=arguments.length-2;if(1===d)a.children=i;else if(1<d){for(var h=Array(d),u=0;u<d;u++)h[u]=arguments[u+2];a.children=h}if(e&&e.defaultProps)for(r in d=e.defaultProps)void 0===a[r]&&(a[r]=d[r]);return{$$typeof:o,type:e,key:c,ref:l,props:a,_owner:E.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var D=/\/+/g;function N(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function U(e,t,r,a,c){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var d=!1;if(null===e)d=!0;else switch(l){case"string":case"number":d=!0;break;case"object":switch(e.$$typeof){case o:case i:d=!0}}if(d)return c=c(d=e),e=""===a?"."+N(d,0):a,C(c)?(r="",null!=e&&(r=e.replace(D,"$&/")+"/"),U(c,t,r,"",(function(e){return e}))):null!=c&&(T(c)&&(c=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,r+(!c.key||d&&d.key===c.key?"":(""+c.key).replace(D,"$&/")+"/")+e)),t.push(c)),1;if(d=0,a=""===a?".":a+":",C(e))for(var h=0;h<e.length;h++){var u=a+N(l=e[h],h);d+=U(l,t,r,u,c)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),h=0;!(l=e.next()).done;)d+=U(l=l.value,t,r,u=a+N(l,h++),c);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return d}function B(e,t,o){if(null==e)return e;var i=[],r=0;return U(e,i,"","",(function(e){return t.call(o,e,r++)})),i}function j(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var z={current:null},F={transition:null},q={ReactCurrentDispatcher:z,ReactCurrentBatchConfig:F,ReactCurrentOwner:E};t.Children={map:B,forEach:function(e,t,o){B(e,(function(){t.apply(this,arguments)}),o)},count:function(e){var t=0;return B(e,(function(){t++})),t},toArray:function(e){return B(e,(function(e){return e}))||[]},only:function(e){if(!T(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=w,t.Fragment=r,t.Profiler=c,t.PureComponent=x,t.StrictMode=a,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,t.cloneElement=function(e,t,i){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=v({},e.props),a=e.key,c=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,l=E.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var d=e.type.defaultProps;for(h in t)S.call(t,h)&&!P.hasOwnProperty(h)&&(r[h]=void 0===t[h]&&void 0!==d?d[h]:t[h])}var h=arguments.length-2;if(1===h)r.children=i;else if(1<h){d=Array(h);for(var u=0;u<h;u++)d[u]=arguments[u+2];r.children=d}return{$$typeof:o,type:e.type,key:a,ref:c,props:r,_owner:l}},t.createContext=function(e){return(e={$$typeof:d,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=O,t.createFactory=function(e){var t=O.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:h,render:e}},t.isValidElement=T,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:j}},t.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=F.transition;F.transition={};try{e()}finally{F.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return z.current.useCallback(e,t)},t.useContext=function(e){return z.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return z.current.useDeferredValue(e)},t.useEffect=function(e,t){return z.current.useEffect(e,t)},t.useId=function(){return z.current.useId()},t.useImperativeHandle=function(e,t,o){return z.current.useImperativeHandle(e,t,o)},t.useInsertionEffect=function(e,t){return z.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return z.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return z.current.useMemo(e,t)},t.useReducer=function(e,t,o){return z.current.useReducer(e,t,o)},t.useRef=function(e){return z.current.useRef(e)},t.useState=function(e){return z.current.useState(e)},t.useSyncExternalStore=function(e,t,o){return z.current.useSyncExternalStore(e,t,o)},t.useTransition=function(){return z.current.useTransition()},t.version="18.2.0"},294:(e,t,o)=>{e.exports=o(408)}},xn={};function An(e){var t=xn[e];if(void 0!==t)return t.exports;var o=xn[e]={exports:{}};return kn[e](o,o.exports,An),o.exports}An.d=(e,t)=>{for(var o in t)An.o(t,o)&&!An.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},An.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var Cn={};(()=>{An.d(Cn,{Tn:()=>Se,qE:()=>He,HE:()=>Le,Ct:()=>Be,zx:()=>Ge,M1:()=>Je,sX:()=>bo,D0:()=>yo,fs:()=>vo,Tw:()=>Ht,ud:()=>Vt,wt:()=>qt,ne:()=>Wt,Ku:()=>Zt,FU:()=>Qt,XO:()=>wo,Ze:()=>_o,K$:()=>ko,cX:()=>To,Js:()=>Lo,J9:()=>No,si:()=>uo,sg:()=>Io,hW:()=>jo,II:()=>Ro,v2:()=>Mo,sN:()=>Do,Lb:()=>Ho,J2:()=>xe,$$:()=>po,Vp:()=>Bo,u:()=>$e,fW:()=>zo,WV:()=>be,h4:()=>fe,kZ:()=>pe});const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),i=new WeakMap;class s{constructor(e,t,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const o=this.t;if(t&&void 0===e){const t=void 0!==o&&1===o.length;t&&(e=i.get(o)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&i.set(o,e))}return e}toString(){return this.cssText}}const r=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,o,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1]),e[0]);return new s(i,e,o)},a=(o,i)=>{if(t)o.adoptedStyleSheets=i.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const t of i){const i=document.createElement("style"),r=e.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=t.cssText,o.appendChild(i)}},c=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new s("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:l,defineProperty:d,getOwnPropertyDescriptor:h,getOwnPropertyNames:u,getOwnPropertySymbols:p,getPrototypeOf:f}=Object,m=globalThis,g=m.trustedTypes,v=g?g.emptyScript:"",y=m.reactiveElementPolyfillSupport,w=(e,t)=>e,_={toAttribute(e,t){switch(t){case Boolean:e=e?v:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},x=(e,t)=>!l(e,t),A={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:x};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=A){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,t);void 0!==i&&d(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){const{get:i,set:r}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){const a=i?.call(this);r.call(this,t),this.requestUpdate(e,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??A}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;const e=f(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){const e=this.properties,t=[...u(e),...p(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(c(e))}else void 0!==e&&t.push(c(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$ES??=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$ES?.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return a(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$ES?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t){const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(void 0!==i&&!0===o.reflect){const r=(void 0!==o.converter?.toAttribute?o.converter:_).toAttribute(t,o.type);this._$Em=e,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){const o=this.constructor,i=o._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=o.getPropertyOptions(i),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:_;this._$Em=i,this[i]=r.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o,i=!1,r){if(void 0!==e){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??x)(i?r:this[e],t))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$ES?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$ES?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EO(e,this[e]))),this._$ET()}updated(e){}firstUpdated(e){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[w("elementProperties")]=new Map,$[w("finalized")]=new Map,y?.({ReactiveElement:$}),(m.reactiveElementVersions??=[]).push("2.0.0");const C=globalThis,S=C.trustedTypes,E=S?S.createPolicy("lit-html",{createHTML:e=>e}):void 0,P="$lit$",O=`lit$${(Math.random()+"").slice(9)}$`,T="?"+O,D=`<${T}>`,N=document,U=()=>N.createComment(""),B=e=>null===e||"object"!=typeof e&&"function"!=typeof e,j=Array.isArray,z="[ \t\n\f\r]",F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,q=/-->/g,G=/>/g,W=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),K=/'/g,Y=/"/g,Z=/^(?:script|style|textarea|title)$/i,J=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),X=J(1),ee=(J(2),Symbol.for("lit-noChange")),te=Symbol.for("lit-nothing"),oe=new WeakMap,ne=N.createTreeWalker(N,129);function ie(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(t):t}class Q{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let r=0,a=0;const c=e.length-1,l=this.parts,[d,h]=((e,t)=>{const o=e.length-1,i=[];let r,a=2===t?"<svg>":"",c=F;for(let t=0;t<o;t++){const o=e[t];let l,d,h=-1,u=0;for(;u<o.length&&(c.lastIndex=u,d=c.exec(o),null!==d);)u=c.lastIndex,c===F?"!--"===d[1]?c=q:void 0!==d[1]?c=G:void 0!==d[2]?(Z.test(d[2])&&(r=RegExp("</"+d[2],"g")),c=W):void 0!==d[3]&&(c=W):c===W?">"===d[0]?(c=r??F,h=-1):void 0===d[1]?h=-2:(h=c.lastIndex-d[2].length,l=d[1],c=void 0===d[3]?W:'"'===d[3]?Y:K):c===Y||c===K?c=W:c===q||c===G?c=F:(c=W,r=void 0);const p=c===W&&e[t+1].startsWith("/>")?" ":"";a+=c===F?o+D:h>=0?(i.push(l),o.slice(0,h)+P+o.slice(h)+O+p):o+O+(-2===h?t:p)}return[ie(e,a+(e[o]||"<?>")+(2===t?"</svg>":"")),i]})(e,t);if(this.el=Q.createElement(d,o),ne.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=ne.nextNode())&&l.length<c;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(P)){const t=h[a++],o=i.getAttribute(e).split(O),c=/([.?@])?(.*)/.exec(t);l.push({type:1,index:r,name:c[2],strings:o,ctor:"."===c[1]?it:"?"===c[1]?rt:"@"===c[1]?st:nt}),i.removeAttribute(e)}else e.startsWith(O)&&(l.push({type:6,index:r}),i.removeAttribute(e));if(Z.test(i.tagName)){const e=i.textContent.split(O),t=e.length-1;if(t>0){i.textContent=S?S.emptyScript:"";for(let o=0;o<t;o++)i.append(e[o],U()),ne.nextNode(),l.push({type:2,index:++r});i.append(e[t],U())}}}else if(8===i.nodeType)if(i.data===T)l.push({type:2,index:r});else{let e=-1;for(;-1!==(e=i.data.indexOf(O,e+1));)l.push({type:7,index:r}),e+=O.length-1}r++}}static createElement(e,t){const o=N.createElement("template");return o.innerHTML=e,o}}function re(e,t,o=e,i){if(t===ee)return t;let r=void 0!==i?o._$Co?.[i]:o._$Cl;const a=B(t)?void 0:t._$litDirective$;return r?.constructor!==a&&(r?._$AO?.(!1),void 0===a?r=void 0:(r=new a(e),r._$AT(e,o,i)),void 0!==i?(o._$Co??=[])[i]=r:o._$Cl=r),void 0!==r&&(t=re(e,r._$AS(e,t.values),r,i)),t}class et{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,i=(e?.creationScope??N).importNode(t,!0);ne.currentNode=i;let r=ne.nextNode(),a=0,c=0,l=o[0];for(;void 0!==l;){if(a===l.index){let t;2===l.type?t=new ot(r,r.nextSibling,this,e):1===l.type?t=new l.ctor(r,l.name,l.strings,this,e):6===l.type&&(t=new at(r,this,e)),this._$AV.push(t),l=o[++c]}a!==l?.index&&(r=ne.nextNode(),a++)}return ne.currentNode=N,i}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class ot{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,i){this.type=2,this._$AH=te,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=re(this,e,t),B(e)?e===te||null==e||""===e?(this._$AH!==te&&this._$AR(),this._$AH=te):e!==this._$AH&&e!==ee&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>j(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==te&&B(this._$AH)?this._$AA.nextSibling.data=e:this.$(N.createTextNode(e)),this._$AH=e}g(e){const{values:t,_$litType$:o}=e,i="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=Q.createElement(ie(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new et(i,this),o=e.u(this.options);e.p(t),this.$(o),this._$AH=e}}_$AC(e){let t=oe.get(e.strings);return void 0===t&&oe.set(e.strings,t=new Q(e)),t}T(e){j(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,i=0;for(const r of e)i===t.length?t.push(o=new ot(this.k(U()),this.k(U()),this,this.options)):o=t[i],o._$AI(r),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class nt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,i,r){this.type=1,this._$AH=te,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=te}_$AI(e,t=this,o,i){const r=this.strings;let a=!1;if(void 0===r)e=re(this,e,t,0),a=!B(e)||e!==this._$AH&&e!==ee,a&&(this._$AH=e);else{const i=e;let c,l;for(e=r[0],c=0;c<r.length-1;c++)l=re(this,i[o+c],t,c),l===ee&&(l=this._$AH[c]),a||=!B(l)||l!==this._$AH[c],l===te?e=te:e!==te&&(e+=(l??"")+r[c+1]),this._$AH[c]=l}a&&!i&&this.j(e)}j(e){e===te?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class it extends nt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===te?void 0:e}}class rt extends nt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==te)}}class st extends nt{constructor(e,t,o,i,r){super(e,t,o,i,r),this.type=5}_$AI(e,t=this){if((e=re(this,e,t,0)??te)===ee)return;const o=this._$AH,i=e===te&&o!==te||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==te&&(o===te||i);i&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class at{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){re(this,e)}}const se=C.litHtmlPolyfillSupport;se?.(Q,ot),(C.litHtmlVersions??=[]).push("3.0.0");class ct extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const i=o?.renderBefore??t;let r=i._$litPart$;if(void 0===r){const e=o?.renderBefore??null;i._$litPart$=r=new ot(t.insertBefore(U(),e),e,void 0,o??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ee}}ct._$litElement$=!0,ct.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ct});const ae=globalThis.litElementPolyfillSupport;ae?.({LitElement:ct}),(globalThis.litElementVersions??=[]).push("4.0.0");const ce={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:x},le=(e=ce,t,o)=>{const{kind:i,metadata:r}=o;let a=globalThis.litPropertyMetadata.get(r);if(void 0===a&&globalThis.litPropertyMetadata.set(r,a=new Map),a.set(o.name,e),"accessor"===i){const{name:i}=o;return{set(o){const r=t.get.call(this);t.set.call(this,o),this.requestUpdate(i,r,e)},init(t){return void 0!==t&&this.C(i,void 0,e),t}}}if("setter"===i){const{name:i}=o;return function(o){const r=this[i];t.call(this,o),this.requestUpdate(i,r,e)}}throw Error("Unsupported decorator location: "+i)};function de(e){return(t,o)=>"object"==typeof o?le(e,t,o):((e,t,o)=>{const i=t.hasOwnProperty(o);return t.constructor.createProperty(o,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}const he=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function ue(e,t){return(o,i,r)=>{const a=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:c}="object"==typeof i?o:r??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return he(o,i,{get(){if(t){let t=e.call(this);return void 0===t&&(t=a(this),c.call(this,t)),t}return a(this)}})}return he(o,i,{get(){return a(this)}})}}class gt extends ct{}const pe=r`.sr-only,.sr-only-focusable:not(:active):not(:focus){clip:rect(0 0 0 0);clip-path:inset(50%);width:1px;height:1px;overflow:hidden;position:absolute;white-space:nowrap}`,fe=r``,be=r`:host{box-sizing:border-box}:host *,:host ::after,:host ::before{box-sizing:inherit}[hidden]{display:none!important}`,me=Math.min,ge=Math.max,ve=Math.round,ye=(Math.floor,e=>({x:e,y:e})),we={left:"right",right:"left",bottom:"top",top:"bottom"},_e={start:"end",end:"start"};function ke(e,t,o){return ge(e,me(t,o))}function Ae(e,t){return"function"==typeof e?e(t):e}function Ce(e){return e.split("-")[0]}function Ee(e){return e.split("-")[1]}function Pe(e){return"x"===e?"y":"x"}function Oe(e){return"y"===e?"height":"width"}function Me(e){return["top","bottom"].includes(Ce(e))?"y":"x"}function Te(e){return Pe(Me(e))}function De(e){return e.replace(/start|end/g,(e=>_e[e]))}function Re(e){return e.replace(/left|right|bottom|top/g,(e=>we[e]))}function Ne(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function Ue(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Ie(e,t,o){let{reference:i,floating:r}=e;const a=Me(t),c=Te(t),l=Oe(c),d=Ce(t),h="y"===a,u=i.x+i.width/2-r.width/2,p=i.y+i.height/2-r.height/2,f=i[l]/2-r[l]/2;let m;switch(d){case"top":m={x:u,y:i.y-r.height};break;case"bottom":m={x:u,y:i.y+i.height};break;case"right":m={x:i.x+i.width,y:p};break;case"left":m={x:i.x-r.width,y:p};break;default:m={x:i.x,y:i.y}}switch(Ee(t)){case"start":m[c]-=f*(o&&h?-1:1);break;case"end":m[c]+=f*(o&&h?-1:1)}return m}async function je(e,t){var o;void 0===t&&(t={});const{x:i,y:r,platform:a,rects:c,elements:l,strategy:d}=e,{boundary:h="clippingAncestors",rootBoundary:u="viewport",elementContext:p="floating",altBoundary:f=!1,padding:m=0}=Ae(t,e),g=Ne(m),v=l[f?"floating"===p?"reference":"floating":p],y=Ue(await a.getClippingRect({element:null==(o=await(null==a.isElement?void 0:a.isElement(v)))||o?v:v.contextElement||await(null==a.getDocumentElement?void 0:a.getDocumentElement(l.floating)),boundary:h,rootBoundary:u,strategy:d})),w="floating"===p?{...c.floating,x:i,y:r}:c.reference,_=await(null==a.getOffsetParent?void 0:a.getOffsetParent(l.floating)),x=await(null==a.isElement?void 0:a.isElement(_))&&await(null==a.getScale?void 0:a.getScale(_))||{x:1,y:1},A=Ue(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({rect:w,offsetParent:_,strategy:d}):w);return{top:(y.top-A.top+g.top)/x.y,bottom:(A.bottom-y.bottom+g.bottom)/x.y,left:(y.left-A.left+g.left)/x.x,right:(A.right-y.right+g.right)/x.x}}const ze=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var o,i;const{placement:r,middlewareData:a,rects:c,initialPlacement:l,platform:d,elements:h}=t,{mainAxis:u=!0,crossAxis:p=!0,fallbackPlacements:f,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:v=!0,...y}=Ae(e,t);if(null!=(o=a.arrow)&&o.alignmentOffset)return{};const w=Ce(r),_=Ce(l)===l,x=await(null==d.isRTL?void 0:d.isRTL(h.floating)),A=f||(_||!v?[Re(l)]:function(e){const t=Re(e);return[De(e),t,De(t)]}(l));f||"none"===g||A.push(...function(e,t,o,i){const r=Ee(e);let a=function(e,t,o){const i=["left","right"],r=["right","left"],a=["top","bottom"],c=["bottom","top"];switch(e){case"top":case"bottom":return o?t?r:i:t?i:r;case"left":case"right":return t?a:c;default:return[]}}(Ce(e),"start"===o,i);return r&&(a=a.map((e=>e+"-"+r)),t&&(a=a.concat(a.map(De)))),a}(l,v,g,x));const C=[l,...A],S=await je(t,y),E=[];let P=(null==(i=a.flip)?void 0:i.overflows)||[];if(u&&E.push(S[w]),p){const e=function(e,t,o){void 0===o&&(o=!1);const i=Ee(e),r=Te(e),a=Oe(r);let c="x"===r?i===(o?"end":"start")?"right":"left":"start"===i?"bottom":"top";return t.reference[a]>t.floating[a]&&(c=Re(c)),[c,Re(c)]}(r,c,x);E.push(S[e[0]],S[e[1]])}if(P=[...P,{placement:r,overflows:E}],!E.every((e=>e<=0))){var O,T;const e=((null==(O=a.flip)?void 0:O.index)||0)+1,t=C[e];if(t)return{data:{index:e,overflows:P},reset:{placement:t}};let o=null==(T=P.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:T.placement;if(!o)switch(m){case"bestFit":{var D;const e=null==(D=P.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:D[0];e&&(o=e);break}case"initialPlacement":o=l}if(r!==o)return{reset:{placement:o}}}return{}}}},Fe=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){const{x:o,y:i}=t,r=await async function(e,t){const{placement:o,platform:i,elements:r}=e,a=await(null==i.isRTL?void 0:i.isRTL(r.floating)),c=Ce(o),l=Ee(o),d="y"===Me(o),h=["left","top"].includes(c)?-1:1,u=a&&d?-1:1,p=Ae(t,e);let{mainAxis:f,crossAxis:m,alignmentAxis:g}="number"==typeof p?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return l&&"number"==typeof g&&(m="end"===l?-1*g:g),d?{x:m*u,y:f*h}:{x:f*h,y:m*u}}(t,e);return{x:o+r.x,y:i+r.y,data:r}}}};function Ve(e){return Ke(e)?(e.nodeName||"").toLowerCase():"#document"}function qe(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function We(e){var t;return null==(t=(Ke(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function Ke(e){return e instanceof Node||e instanceof qe(e).Node}function Ye(e){return e instanceof Element||e instanceof qe(e).Element}function Ze(e){return e instanceof HTMLElement||e instanceof qe(e).HTMLElement}function Xe(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof qe(e).ShadowRoot)}function Qe(e){const{overflow:t,overflowX:o,overflowY:i,display:r}=ut(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+o)&&!["inline","contents"].includes(r)}function tt(e){return["table","td","th"].includes(Ve(e))}function lt(e){const t=dt(),o=ut(e);return"none"!==o.transform||"none"!==o.perspective||!!o.containerType&&"normal"!==o.containerType||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||["transform","perspective","filter"].some((e=>(o.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(o.contain||"").includes(e)))}function dt(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function ht(e){return["html","body","#document"].includes(Ve(e))}function ut(e){return qe(e).getComputedStyle(e)}function pt(e){return Ye(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function ft(e){if("html"===Ve(e))return e;const t=e.assignedSlot||e.parentNode||Xe(e)&&e.host||We(e);return Xe(t)?t.host:t}function bt(e){const t=ft(e);return ht(t)?e.ownerDocument?e.ownerDocument.body:e.body:Ze(t)&&Qe(t)?t:bt(t)}function mt(e,t,o){var i;void 0===t&&(t=[]),void 0===o&&(o=!0);const r=bt(e),a=r===(null==(i=e.ownerDocument)?void 0:i.body),c=qe(r);return a?t.concat(c,c.visualViewport||[],Qe(r)?r:[],c.frameElement&&o?mt(c.frameElement):[]):t.concat(r,mt(r,[],o))}function vt(e){const t=ut(e);let o=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const r=Ze(e),a=r?e.offsetWidth:o,c=r?e.offsetHeight:i,l=ve(o)!==a||ve(i)!==c;return l&&(o=a,i=c),{width:o,height:i,$:l}}function yt(e){return Ye(e)?e:e.contextElement}function wt(e){const t=yt(e);if(!Ze(t))return ye(1);const o=t.getBoundingClientRect(),{width:i,height:r,$:a}=vt(t);let c=(a?ve(o.width):o.width)/i,l=(a?ve(o.height):o.height)/r;return c&&Number.isFinite(c)||(c=1),l&&Number.isFinite(l)||(l=1),{x:c,y:l}}const $t=ye(0);function _t(e){const t=qe(e);return dt()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:$t}function kt(e,t,o,i){void 0===t&&(t=!1),void 0===o&&(o=!1);const r=e.getBoundingClientRect(),a=yt(e);let c=ye(1);t&&(i?Ye(i)&&(c=wt(i)):c=wt(e));const l=function(e,t,o){return void 0===t&&(t=!1),!(!o||t&&o!==qe(e))&&t}(a,o,i)?_t(a):ye(0);let d=(r.left+l.x)/c.x,h=(r.top+l.y)/c.y,u=r.width/c.x,p=r.height/c.y;if(a){const e=qe(a),t=i&&Ye(i)?qe(i):i;let o=e.frameElement;for(;o&&i&&t!==e;){const e=wt(o),t=o.getBoundingClientRect(),i=ut(o),r=t.left+(o.clientLeft+parseFloat(i.paddingLeft))*e.x,a=t.top+(o.clientTop+parseFloat(i.paddingTop))*e.y;d*=e.x,h*=e.y,u*=e.x,p*=e.y,d+=r,h+=a,o=qe(o).frameElement}}return Ue({width:u,height:p,x:d,y:h})}function xt(e){return kt(We(e)).left+pt(e).scrollLeft}function At(e,t,o){let i;if("viewport"===t)i=function(e,t){const o=qe(e),i=We(e),r=o.visualViewport;let a=i.clientWidth,c=i.clientHeight,l=0,d=0;if(r){a=r.width,c=r.height;const e=dt();(!e||e&&"fixed"===t)&&(l=r.offsetLeft,d=r.offsetTop)}return{width:a,height:c,x:l,y:d}}(e,o);else if("document"===t)i=function(e){const t=We(e),o=pt(e),i=e.ownerDocument.body,r=ge(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),a=ge(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let c=-o.scrollLeft+xt(e);const l=-o.scrollTop;return"rtl"===ut(i).direction&&(c+=ge(t.clientWidth,i.clientWidth)-r),{width:r,height:a,x:c,y:l}}(We(e));else if(Ye(t))i=function(e,t){const o=kt(e,!0,"fixed"===t),i=o.top+e.clientTop,r=o.left+e.clientLeft,a=Ze(e)?wt(e):ye(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:r*a.x,y:i*a.y}}(t,o);else{const o=_t(e);i={...t,x:t.x-o.x,y:t.y-o.y}}return Ue(i)}function Ct(e,t){const o=ft(e);return!(o===t||!Ye(o)||ht(o))&&("fixed"===ut(o).position||Ct(o,t))}function St(e,t,o){const i=Ze(t),r=We(t),a="fixed"===o,c=kt(e,!0,a,t);let l={scrollLeft:0,scrollTop:0};const d=ye(0);if(i||!i&&!a)if(("body"!==Ve(t)||Qe(r))&&(l=pt(t)),i){const e=kt(t,!0,a,t);d.x=e.x+t.clientLeft,d.y=e.y+t.clientTop}else r&&(d.x=xt(r));return{x:c.left+l.scrollLeft-d.x,y:c.top+l.scrollTop-d.y,width:c.width,height:c.height}}function Et(e,t){return Ze(e)&&"fixed"!==ut(e).position?t?t(e):e.offsetParent:null}function Pt(e,t){const o=qe(e);if(!Ze(e))return o;let i=Et(e,t);for(;i&&tt(i)&&"static"===ut(i).position;)i=Et(i,t);return i&&("html"===Ve(i)||"body"===Ve(i)&&"static"===ut(i).position&&!lt(i))?o:i||function(e){let t=ft(e);for(;Ze(t)&&!ht(t);){if(lt(t))return t;t=ft(t)}return null}(e)||o}const Ot={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:o,strategy:i}=e;const r=Ze(o),a=We(o);if(o===a)return t;let c={scrollLeft:0,scrollTop:0},l=ye(1);const d=ye(0);if((r||!r&&"fixed"!==i)&&(("body"!==Ve(o)||Qe(a))&&(c=pt(o)),Ze(o))){const e=kt(o);l=wt(o),d.x=e.x+o.clientLeft,d.y=e.y+o.clientTop}return{width:t.width*l.x,height:t.height*l.y,x:t.x*l.x-c.scrollLeft*l.x+d.x,y:t.y*l.y-c.scrollTop*l.y+d.y}},getDocumentElement:We,getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:i,strategy:r}=e;const a=[..."clippingAncestors"===o?function(e,t){const o=t.get(e);if(o)return o;let i=mt(e,[],!1).filter((e=>Ye(e)&&"body"!==Ve(e))),r=null;const a="fixed"===ut(e).position;let c=a?ft(e):e;for(;Ye(c)&&!ht(c);){const t=ut(c),o=lt(c);o||"fixed"!==t.position||(r=null),(a?!o&&!r:!o&&"static"===t.position&&r&&["absolute","fixed"].includes(r.position)||Qe(c)&&!o&&Ct(e,c))?i=i.filter((e=>e!==c)):r=t,c=ft(c)}return t.set(e,i),i}(t,this._c):[].concat(o),i],c=a[0],l=a.reduce(((e,o)=>{const i=At(t,o,r);return e.top=ge(i.top,e.top),e.right=me(i.right,e.right),e.bottom=me(i.bottom,e.bottom),e.left=ge(i.left,e.left),e}),At(t,c,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:Pt,getElementRects:async function(e){let{reference:t,floating:o,strategy:i}=e;const r=this.getOffsetParent||Pt,a=this.getDimensions;return{reference:St(t,await r(o),i),floating:{x:0,y:0,...await a(o)}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){return vt(e)},getScale:wt,isElement:Ye,isRTL:function(e){return"rtl"===ut(e).direction}},Mt=r`:host{display:contents;position:relative}.popover{display:block;left:0;top:0;position:absolute;z-index:var(--gk-popover-z-index,100)}.arrow{background:var(--gk-tooltip-background-color,#000);height:8px;position:absolute;transform:rotate(45deg);width:8px}`;var Tt=function(e,t,o,i){var r,a=arguments.length,c=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(c=(a<3?r(c):a>3?r(t,o,c):r(t,o))||c);return a>3&&c&&Object.defineProperty(t,o,c),c};class xe extends gt{constructor(){super(...arguments),this.arrow=!1,this.hover=!1,this.placement="top",this.popoverId=`popover_${Math.random().toString(16).slice(2)}`,this.srVisible=!1,this.open=!1,this.isTrackingOutside=!1}static{this.styles=[be,pe,Mt]}static{this.elementName="gk-popover"}firstUpdated(e){const t=this.triggerSlot.assignedElements()[0];this.triggerEl=t instanceof HTMLSlotElement?t.assignedElements({flatten:!0})[0]:t}async connectedCallback(){super.connectedCallback(),await this.updateComplete,await this.updateToggle(),null==this._toggleHandler&&(this._toggleHandler=this.handleToggle.bind(this)),this.hover?(this.triggerEl?.addEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.addEventListener("mouseout",this._toggleHandler,!1)):this.triggerEl?.addEventListener("focus",this._toggleHandler,!1)}disconnectedCallback(){super.disconnectedCallback(),null!=this._toggleHandler&&(this.triggerEl?.removeEventListener("focus",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseout",this._toggleHandler,!1),this._toggleHandler=void 0),this.disposeTrackOutside()}handleToggle(e){e.composedPath().includes(this.triggerEl)&&(this.open=!this.open,this.updateToggle())}async updateToggle(){this.open?(await this.showPopover(),null!=this.popoverEl&&window.requestAnimationFrame((()=>{this.popoverEl?.focus()}))):this.hidePopover()}handleDocumentEvent(e){!1!==this.open&&(e.composedPath().includes(this)||this.hidePopover())}trackOutside(){this.hover||this.isTrackingOutside||!this.open||(this.isTrackingOutside=!0,null==this._documentEventHandler&&(this._documentEventHandler=this.handleDocumentEvent.bind(this)),document.addEventListener("click",this._documentEventHandler,!1),document.addEventListener("focusin",this._documentEventHandler,!1))}disposeTrackOutside(){this.isTrackingOutside&&(this.isTrackingOutside=!1,null!=this._documentEventHandler&&(document.removeEventListener("click",this._documentEventHandler,!1),window.removeEventListener("focusin",this._documentEventHandler,!1),this._documentEventHandler=void 0))}async updatePositioning(){const e=[Fe(6),ze(),(t={padding:5},void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:i,placement:r}=e,{mainAxis:a=!0,crossAxis:c=!1,limiter:l={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...d}=Ae(t,e),h={x:o,y:i},u=await je(e,d),p=Me(Ce(r)),f=Pe(p);let m=h[f],g=h[p];if(a){const e="y"===f?"bottom":"right";m=ke(m+u["y"===f?"top":"left"],m,m-u[e])}if(c){const e="y"===p?"bottom":"right";g=ke(g+u["y"===p?"top":"left"],g,g-u[e])}const v=l.fn({...e,[f]:m,[p]:g});return{...v,data:{x:v.x-o,y:v.y-i}}}})];var t;this.arrowEl&&e.push((e=>({name:"arrow",options:e,async fn(t){const{x:o,y:i,placement:r,rects:a,platform:c,elements:l,middlewareData:d}=t,{element:h,padding:u=0}=Ae(e,t)||{};if(null==h)return{};const p=Ne(u),f={x:o,y:i},m=Te(r),g=Oe(m),v=await c.getDimensions(h),y="y"===m,w=y?"top":"left",_=y?"bottom":"right",x=y?"clientHeight":"clientWidth",A=a.reference[g]+a.reference[m]-f[m]-a.floating[g],C=f[m]-a.reference[m],S=await(null==c.getOffsetParent?void 0:c.getOffsetParent(h));let E=S?S[x]:0;E&&await(null==c.isElement?void 0:c.isElement(S))||(E=l.floating[x]||a.floating[g]);const P=A/2-C/2,O=E/2-v[g]/2-1,T=me(p[w],O),D=me(p[_],O),N=T,U=E-v[g]-D,B=E/2-v[g]/2+P,j=ke(N,B,U),z=!d.arrow&&null!=Ee(r)&&B!=j&&a.reference[g]/2-(B<N?T:D)-v[g]/2<0,F=z?B<N?B-N:B-U:0;return{[m]:f[m]+F,data:{[m]:j,centerOffset:B-j-F,...z&&{alignmentOffset:F}},reset:z}}}))({element:this.arrowEl})),await((e,t,o)=>{const i=new Map,r={platform:Ot,...o},a={...r.platform,_c:i};return(async(e,t,o)=>{const{placement:i="bottom",strategy:r="absolute",middleware:a=[],platform:c}=o,l=a.filter(Boolean),d=await(null==c.isRTL?void 0:c.isRTL(t));let h=await c.getElementRects({reference:e,floating:t,strategy:r}),{x:u,y:p}=Ie(h,i,d),f=i,m={},g=0;for(let o=0;o<l.length;o++){const{name:a,fn:v}=l[o],{x:y,y:w,data:_,reset:x}=await v({x:u,y:p,initialPlacement:i,placement:f,strategy:r,middlewareData:m,rects:h,platform:c,elements:{reference:e,floating:t}});u=null!=y?y:u,p=null!=w?w:p,m={...m,[a]:{...m[a],..._}},x&&g<=50&&(g++,"object"==typeof x&&(x.placement&&(f=x.placement),x.rects&&(h=!0===x.rects?await c.getElementRects({reference:e,floating:t,strategy:r}):x.rects),({x:u,y:p}=Ie(h,f,d))),o=-1)}return{x:u,y:p,placement:f,strategy:r,middlewareData:m}})(e,t,{...r,platform:a})})(this.triggerEl,this.popoverEl,{middleware:e,placement:this.placement}).then((({x:e,y:t,placement:o,middlewareData:i})=>{if(Object.assign(this.popoverEl.style,{left:`${e}px`,top:`${t}px`}),this.arrowEl){const e=i.arrow?.x,t=i.arrow?.y,r={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];Object.assign(this.arrowEl.style,{left:null!=e?`${e}px`:"",top:null!=t?`${t}px`:"",right:"",bottom:"",[r]:"-4px"})}}))}async showPopover(){this.open=!0,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="true"),this.srVisible?this.popoverEl.classList.remove("sr-only"):this.popoverEl.removeAttribute("hidden"),await this.updatePositioning(),this.trackOutside()}hidePopover(){this.open=!1,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="false"),this.srVisible?this.popoverEl.classList.add("sr-only"):this.popoverEl.setAttribute("hidden","true"),this.disposeTrackOutside()}get arrowMarkup(){return this.arrow?X`<div part="arrow" class="arrow"></div>`:""}render(){return X`<slot name="trigger" aria-describedby="${this.popoverId}"></slot><div class="popover ${this.srVisible&&"sr-only"}" ?hidden="${!this.srVisible}" id="${this.popoverId}" part="popover" role="tooltip"><slot></slot>${this.arrowMarkup}</div>`}}Tt([de({type:Boolean})],xe.prototype,"arrow",void 0),Tt([de({type:Boolean})],xe.prototype,"hover",void 0),Tt([de()],xe.prototype,"placement",void 0),Tt([de({attribute:"popover-id"})],xe.prototype,"popoverId",void 0),Tt([de({attribute:"sr-visible",type:Boolean})],xe.prototype,"srVisible",void 0),Tt([ue('slot[name="trigger"]')],xe.prototype,"triggerSlot",void 0),Tt([ue(".popover")],xe.prototype,"popoverEl",void 0),Tt([ue(".arrow")],xe.prototype,"arrowEl",void 0),Tt([de({state:!0,attribute:!1})],xe.prototype,"open",void 0);const Dt=r`gk-popover::part(popover){background:var(--gk-tooltip-background-color,#000);border-radius:var(--gk-tooltip-border-radius,0);color:var(--gk-tooltip-font-color,#fff);font-size:var(--gk-tooltip-font-size, 14px);font-weight:var(--gk-tooltip-font-weight,bold);line-height:var(--gk-tooltip-line-height, 14px);max-width:var(--gk-tooltip-max-width,none);padding:var(--gk-tooltip-padding,10px 16px);text-align:var(--gk-tooltip-text-align,left);width:max-content}`;class $e extends gt{constructor(){super(...arguments),this.srVisible=!1}static{this.styles=[be,pe,Dt]}static{this.elementName="gk-tooltip"}static{this.components=[xe]}render(){return X`<gk-popover arrow hover ?sr-visible="${this.srVisible}" part="base"><slot name="trigger" slot="trigger"></slot><slot></slot></gk-popover>`}}!function(e,t,o,i){var r,a=arguments.length,c=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(c=(a<3?r(c):a>3?r(t,o,c):r(t,o))||c);a>3&&c&&Object.defineProperty(t,o,c)}([de({attribute:"sr-visible",type:Boolean})],$e.prototype,"srVisible",void 0);const Rt=r`:host{display:inline-block;vertical-align:middle;font-weight:700}.deletions{color:var(--gk-deletions-color,#fe5955);padding-left:4px}.additions{color:var(--gk-additions-color,#74b666);padding-right:4px}`;class Se extends gt{constructor(){super(...arguments),this.tooltipText="Lines Added/Removed",this.tooltipId=`additions-deletions_${Math.random().toString(16).slice(2)}`}static{this.styles=Rt}static{this.elementName="gk-additions-deletions"}static{this.components=[$e]}render(){return X`<gk-tooltip sr-visible tooltip-id="${this.tooltipId}"><span slot="trigger" part="base"><span class="additions">+<slot name="additions"></slot></span>/ <span class="deletions">−<slot name="deletions"></slot></span></span><span>${this.tooltipText}</span></gk-tooltip>`}}!function(e,t,o,i){var r,a=arguments.length,c=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(c=(a<3?r(c):a>3?r(t,o,c):r(t,o))||c);a>3&&c&&Object.defineProperty(t,o,c)}([de({attribute:"tooltip-text"})],Se.prototype,"tooltipText",void 0);const Lt=new Set(["children","localName","ref","style","className"]),Nt=new WeakMap,Ut=(e,t,o,i,r)=>{const a=r?.[t];void 0===a||o===i?(e[t]=o,null==o&&t in HTMLElement.prototype&&e.removeAttribute(t)):((e,t,o)=>{let i=Nt.get(e);void 0===i&&Nt.set(e,i=new Map);let r=i.get(t);void 0!==o?void 0===r?(i.set(t,r={handleEvent:o}),e.addEventListener(t,r)):r.handleEvent=o:void 0!==r&&(i.delete(t),e.removeEventListener(t,r))})(e,a,o)},Bt=({react:e,tagName:t,elementClass:o,events:i,displayName:r})=>{const a=new Set(Object.keys(i??{})),c=e.forwardRef(((r,c)=>{const l=e.useRef(null),d=e.useRef(null),h={},u={};for(const[e,t]of Object.entries(r))Lt.has(e)?h["className"===e?"class":e]=t:a.has(e)||e in o.prototype?u[e]=t:h[e]=t;return e.useLayoutEffect((()=>{if(null!==d.current){for(const e in u)Ut(d.current,e,r[e],l.current?l.current[e]:void 0,i);l.current=r}})),e.useLayoutEffect((()=>{d.current?.removeAttribute("defer-hydration")}),[]),h.suppressHydrationWarning=!0,e.createElement(t,{...h,ref:e=>{d.current=e,"function"==typeof c?c(e):null!==c&&(c.current=e)}})}));return c.displayName=r??o.name,c};var It=An(294);const Ht=Bt({react:It,tagName:Se.elementName,elementClass:Se}),jt=r`:host{display:inline-block}.avatar{vertical-align:middle;background-color:var(--gk-avatar-background-color,#e0e0e0);width:var(--gk-avatar-size,30px);aspect-ratio:1/1;border-radius:50%;transition:.2s}.avatar.is-offline{border:2px solid var(--gk-avatar-offline-outline-color,#3d424d)}.avatar.is-online{border:2px solid var(--gk-avatar-online-outline-color,#60b864)}.avatar--image{display:inline-block;object-fit:cover;object-position:50% 50%}.avatar--content{display:inline-flex;justify-content:center;align-items:center;font-size:var(--gk-avatar-font-size, 11px);line-height:var(--gk-avatar-size, 30px);text-align:center}.avatar:hover{transform:scale(1.2)}`,zt=r`:host{display:inline-block}.avatar-group{display:inline-flex;flex-direction:row;justify-content:center;align-items:center}.avatar-group::slotted(:not(:first-child)){margin-left:calc(var(--gk-avatar-size,2.4rem) * -.2)}.avatar-group:focus-within::slotted(*),.avatar-group:hover::slotted(*){opacity:.5}.avatar-group:focus-within::slotted(:focus),.avatar-group:hover::slotted(:hover){opacity:1;z-index:var(--gk-avatar-selected-zindex,1)!important}`;var Ft=function(e,t,o,i){var r,a=arguments.length,c=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(c=(a<3?r(c):a>3?r(t,o,c):r(t,o))||c);return a>3&&c&&Object.defineProperty(t,o,c),c};class He extends gt{static{this.styles=[be,jt]}static{this.elementName="gk-avatar"}get indicatorClass(){return this.indicator?`is-${this.indicator}`:""}render(){return this.src?X`<img src="${this.src}" class="avatar avatar--image${this.indicatorClass}" part="base" alt="">`:X`<slot class="avatar avatar--content${this.indicatorClass}" part="base"></slot>`}}Ft([de()],He.prototype,"src",void 0),Ft([de()],He.prototype,"indicator",void 0);class Le extends gt{static{this.elementName="gk-avatar-group"}static{this.styles=[be,zt]}render(){return X`<slot class="avatar-group" part="base"></slot>`}}const Vt=Bt({react:It,tagName:He.elementName,elementClass:He}),qt=Bt({react:It,tagName:Le.elementName,elementClass:Le}),Gt=r`.badge{border-radius:var(--gk-badge-border-radius,22px);display:inline-block;font-size:var(--gk-badge-font-size, 12px)}.badge--outline{border-color:var(--gk-badge-outline-color,#ffffff99);border-style:solid;border-width:var(--gk-badge-outline-border-width,1px);color:var(--gk-badge-outline-color,#ffffff99);padding:var(--gk-badge-outline-padding,0 8px)}.badge--filled{background-color:var(--gk-badge-filled-background-color,#2b2f36);color:var(--gk-badge-filled-color,#ffffff99);padding:var(--gk-badge-filled-padding,2px 6px)}`;class Be extends gt{constructor(){super(...arguments),this.variant="outline"}static{this.styles=Gt}static{this.elementName="gk-badge"}render(){return X`<slot class="${`badge badge--${this.variant}`}" part="base"></slot>`}}!function(e,t,o,i){var r,a=arguments.length,c=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(c=(a<3?r(c):a>3?r(t,o,c):r(t,o))||c);a>3&&c&&Object.defineProperty(t,o,c)}([de()],Be.prototype,"variant",void 0);const Wt=Bt({react:It,tagName:Be.elementName,elementClass:Be}),Kt=r`:host{display:inline-block}button{appearance:none;border:none;padding:8px 12px}button:hover{cursor:pointer}button:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.button--ghost{background:0 0;color:var(--gk-button-ghost-color,#fff)}.button--ghost:focus,.button--ghost:hover{text-decoration:underline}.button--ghost:active{color:var(--gk-button-ghost-color-active,#adb8c2)}.button--ghost:disabled,.button--ghost:disabled:active,.button--ghost:disabled:focus,.button--ghost:disabled:hover{color:var(--gk-button-ghost-color-disabled,#ffffff60);cursor:default;text-decoration:none}.button--outline{background:0 0;border-radius:2px;border-style:solid;border-width:var(--gk-button-outline-border-width,1px);color:var(--gk-button-outline-color,#fff)}.button--outline:focus,.button--outline:hover{background-color:#ffffff50}.button--outline:active{background-color:var(--gk-button-outline-color-active,#adb8c2)}.button--outline:disabled,.button--outline:disabled:active,.button--outline:disabled:focus,.button--outline:disabled:hover{background-color:transparent;border-color:var(--gk-button-outline-color-disabled,#ffffff60);color:var(--gk-button-outline-color-disabled,#ffffff60);cursor:default;text-decoration:none}`;var Yt=function(e,t,o,i){var r,a=arguments.length,c=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(c=(a<3?r(c):a>3?r(t,o,c):r(t,o))||c);return a>3&&c&&Object.defineProperty(t,o,c),c};class Ge extends gt{constructor(){super(...arguments),this.disabled=!1,this.type="button",this.variant="ghost"}static{this.styles=Kt}static{this.elementName="gk-button"}get allClasses(){const e=["button"];return e.push(`button--${this.variant}`),e.join(" ")}_handleClick(e){e.stopPropagation(),this.dispatchEvent(new Event("click"))}render(){return X`<button class="${this.allClasses}" @click="${this._handleClick}" ?disabled="${this.disabled}" part="base" type="${this.type}"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></button>`}}Yt([de({type:Boolean,reflect:!0})],Ge.prototype,"disabled",void 0),Yt([de({reflect:!0})],Ge.prototype,"type",void 0),Yt([de()],Ge.prototype,"variant",void 0);const Zt=Bt({react:It,tagName:Ge.elementName,elementClass:Ge,events:{onClick:"click"}}),Jt=r`:host{display:inline-block}.complexity-indicator{display:inline-flex}.complexity-indicator__box{display:block;height:var(--gk-complexity-indicator-box-size,8px);width:var(--gk-complexity-indicator-box-size,8px)}.complexity-indicator__box:not(:last-of-type){margin-right:var(--gk-complexity-indicator-space-between,2px)}.complexity-indicator--level-1 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-1,#5cb85c)}.complexity-indicator--level-2 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-2,#4d88ff)}.complexity-indicator--level-3 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-3,#de9b43)}.complexity-indicator--level-4 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-4,#d9413d)}`;var Xt=function(e,t,o,i){var r,a=arguments.length,c=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(c=(a<3?r(c):a>3?r(t,o,c):r(t,o))||c);return a>3&&c&&Object.defineProperty(t,o,c),c};class Je extends gt{constructor(){super(...arguments),this.level=1,this.label="Complexity of pull request"}static{this.styles=[be,pe,Jt]}static{this.elementName="gk-complexity-indicator"}render(){const e=[];for(let t=0;t<this.level;t++)e.push(t);return X`<div class="complexity-indicator complexity-indicator--level-${this.level}" part="base"><span class="sr-only">${this.label}</span> ${e.map((()=>X`<span class="complexity-indicator__box"></span>`))}</div>`}}Xt([de({type:Number})],Je.prototype,"level",void 0),Xt([de()],Je.prototype,"label",void 0);const Qt=Bt({react:It,tagName:Je.elementName,elementClass:Je}),eo=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,to=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,oo=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let no;const io=new Map;let ro,so,ao;new Map;const co=["th","st","nd","rd"];function lo(e){const t=e%100;return`${e}${co[(t-20)%10]??co[t]??co[0]}`}var ho=function(e,t,o,i){var r,a=arguments.length,c=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(c=(a<3?r(c):a>3?r(t,o,c):r(t,o))||c);return a>3&&c&&Object.defineProperty(t,o,c),c};class po extends gt{constructor(){super(...arguments),this.date=new Date,this.format="MMMM Do, YYYY h:mma"}static{this.styles=[be]}static{this.elementName="gk-date-from"}static{this.components=[$e]}get relativeTime(){return function(e,t){const o=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,t,i,r]of oo){const a=Math.abs(o);if(a>=t||1e3===t)return null==no&&(null!=ao?no=ao.resolvedOptions().locale:null!=so?no=so.resolvedOptions().locale:(ao=new Intl.RelativeTimeFormat(ro,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),no=ao.resolvedOptions().locale)),"en"===no||no?.startsWith("en-")?`${Math.round(a/i)}${r}`:(null==ao&&(ao=new Intl.RelativeTimeFormat(ro,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),ao.format(Math.round(o/i),e))}return""}(this.date)}get isDate(){return this.date&&!isNaN(this.date.getMilliseconds())}render(){if(this.isDate)return X`<gk-tooltip><time datetime="${this.date}" part="base" slot="trigger">${this.relativeTime}</time><span>${function(e,t,o,i=!0){const r=`${o??""}:${t=t??void 0}`;let a=io.get(r);if(null==a){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=to.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}const o={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll(eo))if(null!=t)for(const e in t){const i=t[e];if(null!=i)switch(e){case"year":o.year=4===i.length?"numeric":"2-digit";break;case"month":switch(i.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":o.day="DD"===i?"2-digit":"numeric";break;case"weekday":switch(i.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===i.length?"2-digit":"numeric",o.hour12="hh"===i||"h"===i;break;case"minute":o.minute=2===i.length?"2-digit":"numeric";break;case"second":o.second=2===i.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===i.length?"long":"short"}}return o}(t);let c;c=null==o?ro:"system"===o?void 0:[o],a=new Intl.DateTimeFormat(c,e),i&&io.set(r,a)}if(null==t||to.test(t))return a.format(e);function c(e){const t=`${o??""}:time:${e}`;let r=io.get(t);if(null==r){const a={localeMatcher:"best fit",timeStyle:e};let c;c=null==o?ro:"system"===o?void 0:[o],r=new Intl.DateTimeFormat(c,a),i&&io.set(t,r)}return r}const l=a.formatToParts(e);return t.replace(eo,((t,o,i,r,a,d,h,u,p,f,m,g,v,y,w)=>{if(null!=o)return o.substring(1,o.length-1);for(const t in w){const o=w[t];if(null==o)continue;const i=l.find((e=>e.type===t));if("Do"===o&&"day"===i?.type)return lo(Number(i.value));if("a"===o&&"dayPeriod"===i?.type){const t=c("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return`${(t??i)?.value??""}`}return i?.value??""}return""}))}(this.date,this.format??"MMMM Do, YYYY h:mma")}</span></gk-tooltip>`}}ho([de({converter:(e=>({toAttribute:t=>t.toLocaleDateString(e),fromAttribute:e=>new Date(e)}))(navigator.language),reflect:!0})],po.prototype,"date",void 0),ho([de()],po.prototype,"format",void 0);const uo=Bt({react:It,tagName:po.elementName,elementClass:po}),fo=r`.row--heading{text-transform:uppercase;color:var(--gk-text-secondary-color,rgba(255,255,255,.6))}.content::slotted(:not(:first-child)){border-top:1px solid var(--gk-divider-color,rgba(255,255,255,.04))}`,mo=r`:host{display:contents}.row{display:flex;flex-direction:row;padding:var(--gk-focus-row-padding,8px)}.row:not(.row--heading):focus-within,.row:not(.row--heading):hover{background-color:var(--gk-focus-background-color-hover,rgba(255,255,255,.04))}.row:not(.row--heading):focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.row__key{flex:none;display:block;width:var(--gk-focus-row-key-min-width,64px)}@media (max-width:720px){.row__key{width:var(--gk-focus-row-key-min-width-screen-sm,32px)}}.row__content{flex:1;display:block}.row__pin{display:block;min-width:var(--gk-focus-row-pin-min-width,35px)}.row__date{display:block;min-width:var(--gk-focus-row-date-min-width,48px)}@media (max-width:720px){.row--heading .item__date,.row--heading .item__secondary{display:none}}`,go=r`.item{display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item{flex-direction:column;align-items:stretch}}.item__primary{flex:1;display:flex;flex-direction:row;gap:12px}.item__type{flex:none}@media (max-width:720px){.item__type{order:-1}}.item__content{display:flex;flex-direction:column;gap:6px;min-width:var(--gk-focus-item-content-min-width,92px)}@media (max-width:720px){.item__content{align-items:stretch}}.item__content>p{margin:0}.item__secondary{flex:none;display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item__secondary{flex-wrap:wrap;padding-left:36px}}.item__people{display:block;min-width:var(--gk-focus-item-people-min-width,92px)}@media (max-width:720px){.item__people{min-width:0}}.item__repo{display:block;width:var(--gk-focus-item-repo-min-width,150px)}@media (max-width:720px){.item__repo{width:max-content}}@media (max-width:720px){.item__date{align-self:flex-start;min-width:0}}.item__actions{display:block;min-width:var(--gk-focus-item-actions-min-width,70px)}@media (max-width:720px){.item__actions{width:100%}}`;class yo extends gt{static{this.styles=[be,go]}static{this.elementName="gk-focus-item"}render(){return X`<div class="item"><div class="item__primary"><div class="item__content" part="base"><slot></slot></div></div><div class="item__secondary"><slot name="people" class="item__people" part="people"></slot><slot name="repo" class="item__repo" part="repo"></slot><slot name="actions" class="item__actions" part="actions"></slot></div></div>`}}class vo extends gt{static{this.styles=[be,mo]}static{this.elementName="gk-focus-row"}render(){return X`<div class="row" part="row"><slot name="pin" class="row__pin" part="pin"></slot><div class="row__date" part="date"><slot name="date"></slot></div><div class="row__key" part="key"><slot name="key"></slot></div><slot class="row__content"></slot></div>`}}class bo extends gt{static{this.styles=[be,mo,go,fo]}static{this.elementName="gk-focus-container"}render(){return X`<div class="row row--heading"><slot name="pin" class="row__pin" part="pin">Pinned</slot><slot name="date" class="row__date" part="date">Updated</slot><slot name="key" class="row__key" part="key">Key</slot><div class="row__content"><div class="item"><div class="item__primary"><slot name="item" class="item__content" part="item">Item</slot></div><div class="item__secondary"><slot name="people" class="item__people" part="people">People</slot><slot name="repo" class="item__repo" part="repo">Repo</slot><slot name="actions" class="item__actions" part="actions">Action</slot></div></div></div></div><slot class="content"></slot>`}}const wo=Bt({react:It,tagName:yo.elementName,elementClass:yo}),_o=Bt({react:It,tagName:vo.elementName,elementClass:vo}),ko=Bt({react:It,tagName:bo.elementName,elementClass:bo});class $o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const xo=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends $o{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.st?.has(e)&&this.it.add(e);return this.render(t)}const o=e.element.classList;for(const e of this.it)e in t||(o.remove(e),this.it.delete(e));for(const e in t){const i=!!t[e];i===this.it.has(e)||this.st?.has(e)||(i?(o.add(e),this.it.add(e)):(o.remove(e),this.it.delete(e)))}return ee}}),Ao=e=>e??te,Co=r`:host{display:block}.input-container{background-color:var(--gk-input-background-color,#000);border:1px solid var(--gk-input-border-color,#ffffff14);border-radius:var(--gk-input-border-radius,2px);color:var(--gk-input-color,#ffffff99);cursor:text;display:inline-flex;justify-content:start;padding:var(--gk-input-padding,10px);vertical-align:middle;width:100%}.input{appearance:none;background:inherit;border:none;box-shadow:none;color:inherit;flex:1 1 auto;font:inherit;height:100%;margin:0;outline:0;padding:0}.input-container:focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}`;var So=function(e,t,o,i){var r,a=arguments.length,c=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(c=(a<3?r(c):a>3?r(t,o,c):r(t,o))||c);return a>3&&c&&Object.defineProperty(t,o,c),c};class Ro extends gt{static{this.formAssociated=!0}static{this.styles=[be,pe,Co]}static{this.elementName="gk-input"}constructor(){super(),this.disabled=!1,this.labelVisibility="visible",this.required=!1,this.type="text",this.value="";try{this.internals=this.attachInternals()}catch{}}firstUpdated(){this.internals&&this.internals.setFormValue(this.value)}render(){return X`<div class="field"><label class="${xo({label:!0,"sr-only":"sr-only"===this.labelVisibility})}" for="input" ?hidden="${"hidden"===this.labelVisibility}" part="field-label"><slot name="label">${this.label}</slot></label><div class="${xo({"input-container":!0,"input-container--disabled":this.disabled})}"><slot name="prefix" part="prefix"></slot><input autocomplete="${Ao(this.autocomplete)}" autocorrect="${Ao(this.autocorrect)}" class="input" ?disabled="${this.disabled}" id="input" name="${Ao(this.name)}" part="input" placeholder="${Ao(this.placeholder)}" type="${this.type}" @input="${this.onInput}"><slot name="suffix" part="suffix"></slot></div></div>`}onInput(e){this.value=e.target.value,this.internals&&this.internals.setFormValue(this.value)}}So([de()],Ro.prototype,"autocomplete",void 0),So([de()],Ro.prototype,"autocorrect",void 0),So([de({type:Boolean,reflect:!0})],Ro.prototype,"disabled",void 0),So([de()],Ro.prototype,"label",void 0),So([de({attribute:"label-visibility"})],Ro.prototype,"labelVisibility",void 0),So([de()],Ro.prototype,"name",void 0),So([de()],Ro.prototype,"placeholder",void 0),So([de({type:Boolean,reflect:!0})],Ro.prototype,"required",void 0),So([de({reflect:!0})],Ro.prototype,"type",void 0),So([de()],Ro.prototype,"value",void 0);const Eo=r`:host{display:inline-block}.menu{border:1px solid var(--gk-menu-border-color,#2a2f35);border-radius:4px;background:var(--gk-menu-background-color,#32363f);box-shadow:0 5px 16px 0 rgba(0,0,0,.85);display:inline-block;padding:4px 0}`,Po=r`:host{display:block}.menu-item{font-size:var(--gk-menu-item-font-size, 12px);padding:5px 6px}.menu-item:focus,.menu-item:hover{background-color:var(--gk-menu-item-background-color-hover,#4d88ff1a);cursor:pointer}.menu-item:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.menu-item:active{background-color:var(--gk-menu-item-background-color-active,#4d88ff4d)}.menu-item--disabled,.menu-item--disabled:active,.menu-item--disabled:focus,.menu-item--disabled:hover{background-color:initial;color:var(--gk-menu-item-font-color-disabled,#ffffff60);cursor:default;pointer-events:none}`,Oo=r`:host{display:block}.menu-label{cursor:default;display:inline-block;font-size:var(--gk-menu-label-font-size, 12px);font-weight:700;padding:5px 6px}`;class Mo extends gt{constructor(){super(...arguments),this._currentMenuItem=void 0}static{this.styles=[be,Eo]}static{this.elementName="gk-menu"}_handleSlotChange(){const e=this._getAllItems();e.length&&this._setCurrentItem(e[0])}_handleClick(e){e.stopPropagation();const t=e.target.closest("gk-menu-item");if(!t||t.disabled)return;this._currentMenuItem=t;const o=new CustomEvent("select",{detail:{target:t}});this.dispatchEvent(o)}_handleKeyDown(e){if("Enter"===e.key||" "===e.key)return e.preventDefault(),void this._currentMenuItem?.click();if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=this._getAllItems(),o=t.length;let i=this._currentMenuItem?t.indexOf(this._currentMenuItem):0;"ArrowUp"===e.key?i=(i-1+o)%o:"ArrowDown"===e.key?i=(i+1)%o:"Home"===e.key?i=0:"End"===e.key&&(i=o-1),this._setCurrentItem(t[i]),t[i].focus()}}_handleMouseDown(e){const t=e.target;this._isMenuItem(t)&&this._setCurrentItem(t)}_isMenuItem(e){const t=e.getAttribute("role")||"";return"gk-menu-item"===e.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(t)}_setCurrentItem(e){this._currentMenuItem=e,this._setTabIndex()}_getAllItems(){return this.slotChildren.filter((e=>this._isMenuItem(e)))}_setTabIndex(){this._getAllItems().forEach((e=>{e.setAttribute("tabindex",this._currentMenuItem===e?"0":"-1")}))}render(){return X`<slot class="menu" @click="${this._handleClick}" @keydown="${this._handleKeyDown}" @mousedown="${this._handleMouseDown}" @slotchange="${this._handleSlotChange}" part="base" role="menu"></slot>`}}!function(e,t,o,i){var r,a=arguments.length,c=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(c=(a<3?r(c):a>3?r(t,o,c):r(t,o))||c);a>3&&c&&Object.defineProperty(t,o,c)}([function(e){return(t,o)=>{const{slot:i,selector:r}=e??{},a="slot"+(i?`[name=${i}]`:":not([name])");return he(t,o,{get(){const t=this.renderRoot?.querySelector(a),o=t?.assignedElements(e)??[];return void 0===r?o:o.filter((e=>e.matches(r)))}})}}({flatten:!0})],Mo.prototype,"slotChildren",void 0);class Do extends gt{constructor(){super(...arguments),this.disabled=!1}static{this.styles=[be,Po]}static{this.elementName="gk-menu-item"}get allClasses(){return this.disabled?"menu-item--disabled":""}render(){return X`<div aria-disabled="${this.disabled}" class="menu-item ${this.allClasses}" part="base" role="menuitem"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></div>`}}!function(e,t,o,i){var r,a=arguments.length,c=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(c=(a<3?r(c):a>3?r(t,o,c):r(t,o))||c);a>3&&c&&Object.defineProperty(t,o,c)}([de({type:Boolean,reflect:!0})],Do.prototype,"disabled",void 0);class Ho extends gt{static{this.styles=[be,Oo]}static{this.elementName="gk-menu-label"}render(){return X`<slot class="menu-label" part="base"></slot>`}}const To=Bt({react:It,tagName:Mo.elementName,elementClass:Mo,events:{onClick:"select"}}),Lo=Bt({react:It,tagName:Do.elementName,elementClass:Do}),No=Bt({react:It,tagName:Ho.elementName,elementClass:Ho}),Uo=r`:host{display:inline-block}.tag{display:inline-flex;align-items:center;vertical-align:middle;gap:8px;padding:var(--gk-tag-padding,2px 6px);border-radius:var(--gk-tag-radius,4px);background-color:var(--gk-tag-background-color,#33363e);color:var(--gk-tag-color,#85868b);max-width:100%}.tag__prefix,.tag__suffix{flex:none}.tag__label{display:inline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tag--ghost{background-color:transparent}`;class Bo extends gt{static{this.styles=[be,Uo]}static{this.elementName="gk-tag"}render(){return X`<span class="tag ${this.variant?`tag--${this.variant}`:""}" part="base"><slot class="tag__prefix" name="prefix"></slot><slot class="tag__label"></slot><slot class="tag__suffix" name="suffix"></slot></span>`}}!function(e,t,o,i){var r,a=arguments.length,c=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(c=(a<3?r(c):a>3?r(t,o,c):r(t,o))||c);a>3&&c&&Object.defineProperty(t,o,c)}([de()],Bo.prototype,"variant",void 0);const Io=Bt({react:It,tagName:Bo.elementName,elementClass:Bo}),jo=Bt({react:It,tagName:$e.elementName,elementClass:$e});function zo(...e){e.forEach((e=>{e.elementName&&!customElements.get(e.elementName)&&(customElements.define(e.elementName,e),e.components&&e.components.length>0&&zo(...e.components))}))}})();var Sn=Cn.Ct,En=Cn.fW;const Pn=e=>e??Kt;var On=Object.defineProperty,Mn=Object.getOwnPropertyDescriptor,Tn=(e,t,o,i)=>{for(var r,a=i>1?void 0:i?Mn(t,o):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i?r(t,o,a):r(a))||a);return i&&a&&On(t,o,a),a};let Dn=class extends lit_element_s{constructor(){super(...arguments),this.full=!1,this.disabled=!1,this.tabIndex=0}get role(){return this.href?"link":"button"}updated(e){super.updated(e),e.has("disabled")&&(this.tabIndex=this.disabled?-1:0,this.setAttribute("aria-disabled",this.disabled.toString()))}render(){const e=Gt`<slot></slot>`;return null!=this.href?Gt`<a href=${this.href}>${e}</a>`:e}};Dn.styles=[pn,Qe`
			:host {
				--button-foreground: var(--color-button-foreground);
				--button-background: var(--color-button-background);
				--button-hover-background: var(--vscode-button-hoverBackground);
				--button-padding: 0.4rem 1.1rem;
				--button-compact-padding: 0.4rem 0.4rem;
				--button-line-height: 1.694;
				--button-border: var(--vscode-button-border, transparent);

				display: inline-block;
				border: none;
				font-family: inherit;
				font-size: inherit;
				line-height: var(--button-line-height);
				text-align: center;
				text-decoration: none;
				user-select: none;
				background: var(--button-background);
				color: var(--button-foreground);
				cursor: pointer;
				border: 1px solid var(--button-border);
				border-radius: var(--gk-action-radius);
			}

			:host(:not([href])) {
				padding: var(--button-padding);
			}

			:host([href]) > a {
				display: inline-block;
				padding: var(--button-padding);

				color: inherit;
				text-decoration: none;

				width: 100%;
				height: 100%;
			}

			:host(:hover) {
				background: var(--button-hover-background);
			}

			:host(:focus) {
				${un}
			}

			:host([full]) {
				width: 100%;
			}

			:host([appearance='secondary']) {
				--button-background: var(--vscode-button-secondaryBackground);
				--button-foreground: var(--vscode-button-secondaryForeground);
				--button-hover-background: var(--vscode-button-secondaryHoverBackground);
			}

			:host([appearance='toolbar']) {
				--button-background: transparent;
				--button-foreground: var(--vscode-foreground);
				--button-hover-background: var(--vscode-toolbar-hoverBackground);
				--button-padding: 0.4rem;
				--button-line-height: 1.6;
				--button-border: transparent;
			}

			:host([appearance='alert']) {
				--button-background: transparent;
				--button-border: var(--color-alert-infoBorder);
				--button-foreground: var(--color-button-foreground);
				--button-hover-background: var(--color-alert-infoBorder);
				--button-line-height: 1.64;
				width: max-content;
			}

			:host-context(.vscode-light):host([appearance='alert']:not(:hover)),
			:host-context(.vscode-high-contrast-light):host([appearance='alert']:not(:hover)) {
				--button-foreground: var(--color-foreground);
			}

			:host([appearance='toolbar'][href]) > a {
				display: flex;
				align-items: center;
			}

			:host([appearance='alert'][href]) > a {
				display: block;
				width: max-content;
			}

			:host([density='compact']) {
				padding: var(--button-compact-padding);
			}

			:host([disabled]) {
				opacity: 0.4;
				cursor: not-allowed;
				pointer-events: none;
			}
		`],Tn([ro({type:Boolean,reflect:!0})],Dn.prototype,"full",2),Tn([ro({type:Boolean,reflect:!0})],Dn.prototype,"disabled",2),Tn([ro({reflect:!0})],Dn.prototype,"density",2),Tn([ro()],Dn.prototype,"href",2),Tn([ro({reflect:!0})],Dn.prototype,"role",1),Tn([ro()],Dn.prototype,"appearance",2),Tn([ro({type:Number,reflect:!0})],Dn.prototype,"tabIndex",2),Dn=Tn([oo("gl-button")],Dn);const Rn=2;class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}class unsafe_html_e extends directive_i{constructor(e){if(super(e),this.et=Kt,e.type!==Rn)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===Kt||null==e)return this.vt=void 0,this.et=e;if(e===Wt)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;const t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;const Ln=(e=>(...t)=>({_$litDirective$:e,values:t}))(unsafe_html_e);function Nn(e,t,o,i=!1,r){const a={name:"",relativePath:"",children:new Map,descendants:[]};let c=e.reduce(((e,i)=>{let r=e,a="";for(const e of t(i)){a=o(a,e),void 0===r.children&&(r.children=new Map);let t=r.children.get(e);void 0===t&&(t={name:e,relativePath:a,parent:r,children:void 0,descendants:void 0},r.children.set(e,t)),void 0===r.descendants&&(r.descendants=[]),r.descendants.push(i),r=t}return r.value=i,e}),a);return i&&(c=Un(c,o,!0,r)),c}function Un(e,t,o=!0,i){if(void 0===e.children)return e;const r=[...e.children.values()];for(const e of r)Un(e,t,!1,i);if(!o&&1===r.length){const o=r[0];(void 0===o.value||i?.(o.value))&&(e.name=t(e.name,o.name),e.relativePath=o.relativePath,e.children=o.children,e.descendants=o.descendants,e.value=o.value)}return e}class GlElement extends lit_element_s{fireEvent(e,t){return this.dispatchEvent(new CustomEvent(e,{detail:t}))}}var Bn=Object.defineProperty,In=Object.getOwnPropertyDescriptor,Hn=(e,t,o,i)=>{for(var r,a=i>1?void 0:i?In(t,o):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i?r(t,o,a):r(a))||a);return i&&a&&Bn(t,o,a),a};const jn={".":"Unchanged","!":"Ignored","?":"Untracked",A:"Added",D:"Deleted",M:"Modified",R:"Renamed",C:"Copied",AA:"Conflict",AU:"Conflict",UA:"Conflict",DD:"Conflict",DU:"Conflict",UD:"Conflict",UU:"Conflict",T:"Modified",U:"Updated but Unmerged"};let zn=class extends lit_element_s{get statusName(){return this.status?jn[this.status]:""}updated(e){super.updated(e),e.has("status")&&(this.statusName?this.setAttribute("title",this.statusName):this.removeAttribute("title"))}renderIgnored(){return Gt`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#969696"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM10 4l-6.01 6.01 1.06 1.061 6.01-6.01L10 4z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderUntracked(){return Gt`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#6C6C6C"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm-3.942-3.942l7.5-7.5.884.884-.664.664c.95.655 1.65 1.524 2.222 2.394-1.15 1.75-2.824 3.5-6 3.5-.696 0-1.32-.084-1.882-.234l-1.176 1.176-.884-.884zm5.188-3.42l1.629-1.629c.634.393 1.147.913 1.594 1.491C10.99 8.767 9.692 9.75 7.5 9.75c-.287 0-.56-.017-.817-.05l.455-.454a1.5 1.5 0 0 0 1.608-1.608zM7.362 6.254L5.754 7.862a1.5 1.5 0 0 1 1.608-1.608zm.955-.955A6.595 6.595 0 0 0 7.5 5.25c-2.192 0-3.49.982-4.469 2.25.447.578.96 1.098 1.594 1.491l-.903.903C2.772 9.239 2.072 8.369 1.5 7.5 2.65 5.75 4.324 4 7.5 4c.696 0 1.32.084 1.882.234L8.317 5.299z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderAdded(){return Gt`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#388A34"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm.75-6.75h3v-1.5h-3v-3h-1.5v3h-3v1.5h3v3h1.5v-3z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderDeleted(){return Gt`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#9E121D"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm3.75-6.75v-1.5h-7.5v1.5h7.5z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderModified(){return Gt`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#1B80B2"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm3.75-9.5V7h-3v2.5h-1.5V7h-3V5.5h3v-3h1.5v3h3zm0 5V12h-7.5v-1.5h7.5z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderRenamed(){return Gt`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#C63"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM9.25 4.5v1.25h1.25l1 1v2.5l-1 1H9.25v1.25H10v1.25H7V11.5h.75v-1.25H4l-1-1v-2.5l1-1h3.75V4.5H7V3.25h3V4.5h-.75zm-5 2.5h3.5v2h-3.5V7zm5 0v2h1V7h-1z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderCopied(){return Gt`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#692C77"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM6.964 3.75L5.893 4.813v.53h1.071v-.53h3.215v4.25h-.536v1.062h.536l1.071-1.063v-4.25L10.179 3.75H6.964zM3.75 6.938l1.071-1.063h3.215l1.071 1.063v4.25L8.036 12.25H4.82L3.75 11.187v-4.25zm1.071 0v4.25h3.215v-4.25H4.82z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderConflict(){return Gt`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#7F4E7E"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm-4.03-4.53L6.44 7.5 3.47 4.53l1.06-1.06L7.5 6.44l2.97-2.97 1.06 1.06L8.56 7.5l2.97 2.97-1.06 1.06L7.5 8.56l-2.97 2.97-1.06-1.06z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderUnknown(){return Gt`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#6C6C6C"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM9.19 2.822c-.439-.215-.97-.322-1.596-.322-1.25 0-2.282.478-3.094 1.435l1.05.798c.275-.331.579-.574.91-.728.331-.154.66-.231.987-.231.415 0 .76.093 1.036.28.275.182.413.448.413.798 0 .275-.082.509-.245.7-.159.187-.36.364-.602.532a9.506 9.506 0 0 0-.728.56 2.66 2.66 0 0 0-.602.763c-.159.299-.238.679-.238 1.141v.483h1.498v-.413c0-.364.086-.663.259-.896a2.76 2.76 0 0 1 .637-.616c.252-.177.504-.362.756-.553.257-.196.471-.436.644-.721.173-.285.259-.651.259-1.099 0-.387-.114-.749-.343-1.085-.229-.34-.562-.616-1.001-.826zm-1.169 7.917a1.024 1.024 0 0 0-.763-.315c-.294 0-.544.105-.749.315-.2.205-.301.453-.301.742 0 .294.1.546.301.756.205.205.455.308.749.308.303 0 .558-.103.763-.308.205-.21.308-.462.308-.756 0-.29-.103-.537-.308-.742z"
					clip-rule="evenodd"
				/>
			</svg>
		`}render(){switch(this.status){case"!":return this.renderIgnored();case"?":return this.renderUntracked();case"A":return this.renderAdded();case"D":return this.renderDeleted();case"M":case"T":case"U":return this.renderModified();case"R":return this.renderRenamed();case"C":return this.renderCopied();case"AA":case"AU":case"UA":case"DD":case"DU":case"UD":case"UU":return this.renderConflict()}return this.renderUnknown()}};zn.styles=[Qe`
			:host-context(.vscode-high-contrast),
			:host-context(.vscode-dark) {
				--gl-git-status-ignored: #969696;
				--gl-git-status-untracked: #6c6c6c;
				--gl-git-status-added: #388a34;
				--gl-git-status-deleted: #9e121d;
				--gl-git-status-modified: #1b80b2;
				--gl-git-status-renamed: #c63;
				--gl-git-status-copied: #692c77;
				--gl-git-status-conflict: #7f4e7e;
				--gl-git-status-unknown: #6c6c6c;
			}

			:host-context(.vscode-high-contrast-light),
			:host-context(.vscode-light) {
				--gl-git-status-ignored: #969696;
				--gl-git-status-untracked: #6c6c6c;
				--gl-git-status-added: #388a34;
				--gl-git-status-deleted: #9e121d;
				--gl-git-status-modified: #1b80b2;
				--gl-git-status-renamed: #c63;
				--gl-git-status-copied: #692c77;
				--gl-git-status-conflict: #7f4e7e;
				--gl-git-status-unknown: #6c6c6c;
			}

			:host {
				display: inline-block;
				width: 16px;
				aspect-ratio: 1 / 1;
			}

			svg {
				display: inline-block;
				vertical-align: text-bottom;
			}
		`],Hn([ro()],zn.prototype,"status",2),Hn([so()],zn.prototype,"statusName",1),zn=Hn([oo("gl-git-status")],zn);const Fn=[pn,Qe``],Vn=[pn,Qe`
		:host {
			--tree-connector-spacing: 0.6rem;
			--tree-connector-size: var(--gitlens-tree-indent, 1.6rem);
			box-sizing: border-box;
			padding-left: var(--gitlens-gutter-width);
			/* padding-right: var(--gitlens-scrollbar-gutter-width); */
			padding-right: 0.5rem;
			padding-top: 0.1rem;
			padding-bottom: 0.1rem;
			line-height: 2.2rem;
			height: 2.2rem;

			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			font-size: var(--vscode-font-size);
			color: var(--vscode-foreground);

			content-visibility: auto;
			contain-intrinsic-size: auto 2.2rem;
			cursor: pointer;
		}

		:host([aria-hidden='true']) {
			display: none;
		}

		:host(:hover) {
			color: var(--vscode-list-hoverForeground);
			background-color: var(--vscode-list-hoverBackground);
		}

		:host([aria-selected='true']) {
			color: var(--vscode-list-inactiveSelectionForeground);
			background-color: var(--vscode-list-inactiveSelectionBackground);
		}

		/* TODO: these should be :has(.input:focus) instead of :focus-within */
		:host(:focus-within) {
			outline: 1px solid var(--vscode-list-focusOutline);
			outline-offset: -0.1rem;
		}

		:host([aria-selected='true']:focus-within) {
			color: var(--vscode-list-activeSelectionForeground);
			background-color: var(--vscode-list-activeSelectionBackground);
		}

		.item {
			appearance: none;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			gap: 0.6rem;
			width: 100%;
			padding: 0;
			font-family: inherit;
			font-size: inherit;
			text-decoration: none;
			color: inherit;
			background: none;
			border: none;
			outline: none;
			cursor: pointer;
			min-width: 0;
		}

		/* FIXME: remove, this is for debugging
		.item:focus {
			outline: 1px solid var(--vscode-list-focusOutline);
			outline-offset: -0.1rem;
		}
 		*/
		.icon {
			display: inline-block;
			width: 1.6rem;
			text-align: center;
		}

		slot[name='icon']::slotted(*) {
			width: 1.6rem;
			aspect-ratio: 1;
			vertical-align: text-bottom;
		}

		.node {
			display: inline-block;
			width: var(--tree-connector-size);
			text-align: center;
			flex: none;
		}

		.node:last-of-type {
			margin-right: 0.3rem;
		}

		.node--connector {
			position: relative;
		}

		.node--connector::before {
			content: '';
			position: absolute;
			height: 2.2rem;
			border-left: 1px solid transparent;
			top: 50%;
			transform: translate(-1px, -50%);
			left: 0.8rem;
			width: 0.1rem;
			transition: border-color 0.1s linear;
			opacity: 0.4;
		}

		:host-context([guides='always']) .node--connector::before,
		:host-context([guides='onHover']:focus-within) .node--connector::before,
		:host-context([guides='onHover']:hover) .node--connector::before {
			border-color: var(--vscode-tree-indentGuidesStroke);
		}

		.branch {
			margin-right: 0.6rem;
		}

		.text {
			line-height: 1.6rem;
			overflow: hidden;
			white-space: nowrap;
			text-align: left;
			text-overflow: ellipsis;
			flex: 1;
		}

		.main {
			display: inline;
		}

		.description {
			display: inline;
			opacity: 0.7;
			font-size: 0.9em;
			margin-left: 0.3rem;
		}

		.actions {
			flex: none;
			user-select: none;
			color: var(--vscode-icon-foreground);
		}

		:host(:focus-within) .actions {
			color: var(--vscode-list-activeSelectionIconForeground);
		}

		:host(:not(:hover):not(:focus-within)) .actions {
			display: none;
		}

		.checkbox {
			position: relative;
			display: inline-flex;
			width: 1.6rem;
			aspect-ratio: 1 / 1;
			text-align: center;
			color: var(--vscode-checkbox-foreground);
			background: var(--vscode-checkbox-background);
			border: 1px solid var(--vscode-checkbox-border);
			border-radius: 0.3rem;
			// overflow: hidden;
			margin-right: 0.6rem;
		}

		.checkbox:has(:checked) {
			color: var(--vscode-inputOption-activeForeground);
			border-color: var(--vscode-inputOption-activeBorder);
			background-color: var(--vscode-inputOption-activeBackground);
		}

		.checkbox:has(:disabled) {
			opacity: 0.4;
		}

		.checkbox__input {
			position: absolute;
			top: 0;
			left: 0;
			appearance: none;
			width: 1.4rem;
			aspect-ratio: 1 / 1;
			margin: 0;
			cursor: pointer;
			border-radius: 0.3rem;
		}

		.checkbox__input:disabled {
			cursor: default;
		}

		.checkbox__check {
			width: 1.6rem;
			aspect-ratio: 1 / 1;
			opacity: 0;
			transition: opacity 0.1s linear;
			color: var(--vscode-checkbox-foreground);
			pointer-events: none;
		}

		.checkbox__input:checked + .checkbox__check {
			opacity: 1;
		}

		slot[name='decorations'] {
			display: inline-block;
			margin-left: 0.4rem;
		}
	`];var qn=Object.defineProperty,Gn=Object.getOwnPropertyDescriptor,Wn=(e,t,o,i)=>{for(var r,a=i>1?void 0:i?Gn(t,o):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i?r(t,o,a):r(a))||a);return i&&a&&qn(t,o,a),a};let Kn=class extends lit_element_s{disconnectedCallback(){super.disconnectedCallback(),this._slotSubscriptionsDisposer?.()}firstUpdated(){this.setAttribute("role","tree")}render(){return Gt`<slot @slotchange=${this.handleSlotChange}></slot>`}handleSlotChange(){if(!this.treeItems?.length)return;const e=this.handleKeydown.bind(this),t=this.handleBeforeSelected.bind(this),o=this.handleSelected.bind(this),i=this.treeItems.map((i=>(i.addEventListener("keydown",e,!1),i.addEventListener("gl-tree-item-select",t,!1),i.addEventListener("gl-tree-item-selected",o,!1),{dispose:function(){i?.removeEventListener("keydown",e,!1),i?.removeEventListener("gl-tree-item-select",t,!1),i?.removeEventListener("gl-tree-item-selected",o,!1)}})));this._slotSubscriptionsDisposer=()=>{i?.forEach((({dispose:e})=>e()))}}handleKeydown(e){if(!e.target)return;const t=e.target;if("ArrowUp"===e.key){const e=t.previousElementSibling;e?.focus()}else if("ArrowDown"===e.key){const e=t.nextElementSibling;e?.focus()}}handleBeforeSelected(e){if(!e.target)return;const t=e.target;null!=this._lastSelected&&this._lastSelected!==t&&this._lastSelected.deselect(),this._lastSelected=t}handleSelected(e){if(!e.target||!e.detail.node.branch)return;function t(e){const t=e.level;let o=e.previousElementSibling;for(;o;){if(o.level<t)return o;o=o.previousElementSibling}}const o=e.target,i=o.level;let r=o.nextElementSibling;for(;r&&i!==r.level;){const o=t(r);r.parentExpanded=!1!==o?.expanded,r.expanded=e.detail.node.expanded,r=r.nextElementSibling}}};Kn.styles=Fn,Wn([ro({reflect:!0})],Kn.prototype,"guides",2),Wn([co({flatten:!0})],Kn.prototype,"treeItems",2),Kn=Wn([oo("gl-tree")],Kn);var Yn=Object.defineProperty,Zn=Object.getOwnPropertyDescriptor,Jn=(e,t,o,i)=>{for(var r,a=i>1?void 0:i?Zn(t,o):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i?r(t,o,a):r(a))||a);return i&&a&&Yn(t,o,a),a};let Xn=class extends GlElement{constructor(){super(...arguments),this.branch=!1,this.expanded=!0,this.path="",this.level=0,this.size=1,this.position=1,this.checkable=!1,this.checked=!1,this.disableCheck=!1,this.showIcon=!0,this.selected=!1,this.focused=!1,this.onComponentClickBound=this.onComponentClick.bind(this)}get isHidden(){return!1===this.parentExpanded||!this.branch&&!this.expanded}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.onComponentClickBound)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.onComponentClickBound)}onComponentClick(e){this.selectCore({dblClick:!1,altKey:e.altKey}),this.buttonEl.focus()}updateAttrs(e,t=!1){(e.has("expanded")||t)&&this.setAttribute("aria-expanded",this.expanded.toString()),(e.has("parentExpanded")||t)&&this.setAttribute("aria-hidden",this.isHidden.toString()),(e.has("selected")||t)&&this.setAttribute("aria-selected",this.selected.toString()),(e.has("size")||t)&&this.setAttribute("aria-setsize",this.size.toString()),(e.has("position")||t)&&this.setAttribute("aria-posinset",this.position.toString()),(e.has("level")||t)&&this.setAttribute("aria-level",this.level.toString())}firstUpdated(){this.role="treeitem"}updated(e){this.updateAttrs(e)}renderBranching(){const e=this.level-1;if(e<1&&!this.branch)return Kt;const t=[];if(e>0)for(let o=0;o<e;o++)t.push(Gt`<span class="node node--connector"><code-icon name="blank"></code-icon></span>`);return this.branch&&t.push(Gt`<code-icon class="branch" icon="${this.expanded?"chevron-down":"chevron-right"}"></code-icon>`),t}renderCheckbox(){return this.checkable?Gt`<span class="checkbox"
			><input
				class="checkbox__input"
				id="checkbox"
				type="checkbox"
				.checked=${this.checked}
				?disabled=${this.disableCheck}
				@change=${this.onCheckboxChange}
				@click=${this.onCheckboxClick} /><code-icon icon="check" size="14" class="checkbox__check"></code-icon
		></span>`:Kt}renderActions(){return Gt`<action-nav class="actions"><slot name="actions"></slot></action-nav>`}renderDecorations(){return Gt`<slot name="decorations" class="decorations"></slot>`}render(){return Gt`
			${this.renderBranching()}${this.renderCheckbox()}
			<button
				id="button"
				class="item"
				type="button"
				@click=${this.onButtonClick}
				@dblclick=${this.onButtonDblClick}
			>
				${an(this.showIcon,(()=>Gt`<slot name="icon" class="icon"></slot>`))}
				<span class="text">
					<slot class="main"></slot>
					<slot name="description" class="description"></slot>
				</span>
			</button>
			${this.renderActions()}${this.renderDecorations()}
		`}selectCore(e,t=!1){this.fireEvent("gl-tree-item-select"),this.branch&&(this.expanded=!this.expanded),this.selected=!0,t||window.requestAnimationFrame((()=>{this.fireEvent("gl-tree-item-selected",{node:this,dblClick:e?.dblClick??!1,altKey:e?.altKey??!1,ctrlKey:e?.ctrlKey??!1,metaKey:e?.metaKey??!1})}))}select(){this.selectCore(void 0,!0)}deselect(){this.selected=!1}focus(){this.buttonEl.focus()}onButtonClick(e){e.stopPropagation(),this.selectCore({dblClick:!1,altKey:e.altKey})}onButtonDblClick(e){e.stopPropagation(),this.selectCore({dblClick:!0,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey})}onCheckboxClick(e){e.stopPropagation()}onCheckboxChange(e){e.preventDefault(),e.stopPropagation(),this.checked=e.target.checked,this.fireEvent("gl-tree-item-checked",{node:this,checked:this.checked})}};Xn.styles=Vn,Jn([ro({type:Boolean})],Xn.prototype,"branch",2),Jn([ro({type:Boolean})],Xn.prototype,"expanded",2),Jn([ro({type:String})],Xn.prototype,"path",2),Jn([ro({type:String,attribute:"parent-path"})],Xn.prototype,"parentPath",2),Jn([ro({type:Boolean,attribute:"parent-expanded"})],Xn.prototype,"parentExpanded",2),Jn([ro({type:Number})],Xn.prototype,"level",2),Jn([ro({type:Number})],Xn.prototype,"size",2),Jn([ro({type:Number})],Xn.prototype,"position",2),Jn([ro({type:Boolean})],Xn.prototype,"checkable",2),Jn([ro({type:Boolean})],Xn.prototype,"checked",2),Jn([ro({type:Boolean})],Xn.prototype,"disableCheck",2),Jn([ro({type:Boolean})],Xn.prototype,"showIcon",2),Jn([so()],Xn.prototype,"selected",2),Jn([so()],Xn.prototype,"focused",2),Jn([function(e,t){return(o,i,r)=>{const a=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof i?o:r??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return ao(o,i,{get(){let o=e.call(this);return void 0===o&&(o=a(this),(null!==o||this.hasUpdated)&&t.call(this,o)),o}})}return ao(o,i,{get(){return a(this)}})}}("#button")],Xn.prototype,"buttonEl",2),Xn=Jn([oo("gl-tree-item")],Xn);var Qn=Object.defineProperty,ei=Object.getOwnPropertyDescriptor,ti=(e,t,o,i)=>{for(var r,a=i>1?void 0:i?ei(t,o):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i?r(t,o,a):r(a))||a);return i&&a&&Qn(t,o,a),a};let oi=class extends GlElement{constructor(){super(...arguments),this.treeItems=void 0}set model(e){if(this._model===e)return;let t;if(this._model=e,null!=this._model){const e=this._model.length;t=this._model.reduce(((t,o,i)=>(t.push(...ni(o,e,i+1)),t)),[])}this.treeItems=t}get model(){return this._model}renderIcon(e){return null==e?Kt:"string"==typeof e?Gt`<code-icon slot="icon" icon=${e}></code-icon>`:"status"!==e.type?Kt:Gt`<gl-git-status slot="icon" .status=${e.name}></gl-git-status>`}renderActions(e){const t=e.actions;return null==t||0===t.length?Kt:t.map((t=>Gt`<action-item
				slot="actions"
				.icon=${t.icon}
				.label=${t.label}
				@click=${o=>this.onTreeItemActionClicked(o,e,t)}
			></action-item>`))}renderDecorations(e){const t=e.decorations;return null==t||0===t.length?Kt:t.map((e=>"icon"===e.type?Gt`<code-icon
					slot="decorations"
					title="${e.label}"
					aria-label="${e.label}"
					.icon=${e.icon}
				></code-icon>`:"text"===e.type?Gt`<span slot="decorations">${e.label}</span>`:void 0))}renderTreeItem(e){return Gt`<gl-tree-item
			.branch=${e.branch}
			.expanded=${e.expanded}
			.path=${e.path}
			.parentPath=${e.parentPath}
			.parentExpanded=${e.parentExpanded}
			.level=${e.level}
			.size=${e.size}
			.position=${e.position}
			.checkable=${e.checkable}
			.checked=${e.checked??!1}
			.disableCheck=${e.disableCheck??!1}
			.showIcon=${null!=e.icon}
			@gl-tree-item-selected=${t=>this.onTreeItemSelected(t,e)}
			@gl-tree-item-checked=${t=>this.onTreeItemChecked(t,e)}
		>
			${this.renderIcon(e.icon)}
			${e.label}${an(null!=e.description,(()=>Gt`<span slot="description">${e.description}</span>`))}
			${this.renderActions(e)} ${this.renderDecorations(e)}
		</gl-tree-item>`}renderTree(e){return e?.map((e=>this.renderTreeItem(e)))}render(){return Gt`<gl-tree>${this.renderTree(this.treeItems)}</gl-tree>`}onTreeItemSelected(e,t){e.stopPropagation(),this.fireEvent("gl-tree-generated-item-selected",{...e.detail,node:t,context:t.context})}onTreeItemChecked(e,t){e.stopPropagation(),this.fireEvent("gl-tree-generated-item-checked",{...e.detail,node:t,context:t.context})}onTreeItemActionClicked(e,t,o){e.stopPropagation(),this.fireEvent("gl-tree-generated-item-action-clicked",{node:t,context:t.context,action:o,dblClick:!1,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey})}};function ni(e,t=1,o=1){const i={size:t,position:o};for(const[t,o]of Object.entries(e))null!=o&&"children"!==t&&(i[t]=o);const r=[i];if(null!=e.children&&e.children.length>0){const t=e.children.length;for(let o=0;o<t;o++)r.push(...ni(e.children[o],t,o+1))}return r}oi.styles=Qe`
		:host {
			display: contents;
		}
	`,ti([so()],oi.prototype,"treeItems",2),ti([ro({reflect:!0})],oi.prototype,"guides",2),ti([ro({type:Array,attribute:!1})],oi.prototype,"model",1),oi=ti([oo("gl-tree-generator")],oi);var ii=Object.defineProperty,ri=Object.getOwnPropertyDescriptor,si=(e,t,o,i)=>{for(var r,a=i>1?void 0:i?ri(t,o):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i?r(t,o,a):r(a))||a);return i&&a&&ii(t,o,a),a};const ai=-2;class GlDetailsBase extends lit_element_s{constructor(){super(...arguments),this.tab="commit",this.isUncommitted=!1,this.emptyText="No Files"}get fileLayout(){return this.preferences?.files?.layout??"auto"}get isCompact(){return this.preferences?.files?.compact??!0}get indentGuides(){return this.preferences?.indentGuides??"none"}renderChangedFiles(e,t){const o=this.isTree(this.files?.length??0);let i="tree",r="list-tree",a="View as Tree";switch(this.fileLayout){case"auto":i="list",r="gl-list-auto",a="View as List";break;case"list":i="tree",r="list-flat",a="View as Tree";break;case"tree":i="auto",r="list-tree",a="View as Auto"}const c=this.createTreeModel(e,this.files??[],o,this.isCompact);return Gt`
			<webview-pane collapsable expanded>
				<span slot="title">Files changed </span>
				<span slot="subtitle" data-region="stats">${t}</span>
				<action-nav slot="actions">
					<action-item
						data-action="files-layout"
						data-files-layout="${i}"
						label="${a}"
						icon="${r}"
					></action-item>
				</action-nav>

				${this.renderTreeFileModel(c)}
			</webview-pane>
		`}onShareWipChanges(e,t,o){if(!o)return;const i=new CustomEvent("share-wip",{detail:{checked:t}});this.dispatchEvent(i)}createRenderRoot(){return this}isTree(e){return"auto"===this.fileLayout?e>(this.preferences?.files?.threshold??5):"tree"===this.fileLayout}createTreeModel(e,t,o=!1,i=!0){if(!this.isUncommitted)return this.createFileTreeModel(e,t,o,i);const r=[],a=[],c=[];for(const e of t)e.staged?a.push(e):c.push(e);return 0===a.length||0===c.length?r.push(...this.createFileTreeModel(e,t,o,i)):(a.length&&r.push({label:"Staged Changes",path:"",level:1,branch:!0,checkable:!1,expanded:!0,checked:!1,context:["staged"],children:this.createFileTreeModel(e,a,o,i,{level:2}),actions:this.getStagedActions()}),c.length&&r.push({label:"Unstaged Changes",path:"",level:1,branch:!0,checkable:!1,expanded:!0,checked:!1,context:["unstaged"],children:this.createFileTreeModel(e,c,o,i,{level:2}),actions:this.getUnstagedActions()})),r}sortChildren(e){return e.sort(((e,t)=>e.branch&&!t.branch?-1:!e.branch&&t.branch?1:e.label<t.label?-1:e.label>t.label?1:0)),e}createFileTreeModel(e,t,o=!1,i=!0,r={level:1}){if(void 0===r.level&&(r.level=1),!t.length)return[{label:"No changes",path:"",level:r.level,branch:!1,checkable:!1,expanded:!0,checked:!1}];const a=[];if(o){const e=Nn(t,(e=>e.path.split("/")),((...e)=>e.join("/")),i);if(null!=e.children)for(const t of e.children.values()){const e=this.walkFileTree(t,{level:r.level});a.push(e)}}else for(const e of t){const t=this.fileToTreeModel(e,{level:r.level,branch:!1},!0);a.push(t)}return this.sortChildren(a),a}walkFileTree(e,t={level:1}){let o;if(void 0===t.level&&(t.level=1),o=null==e.value?this.folderToTreeModel(e.name,t):this.fileToTreeModel(e.value,t),null!=e.children){const i=[];for(const o of e.children.values()){const e=this.walkFileTree(o,{...t,level:t.level+1});i.push(e)}i.length>0&&(this.sortChildren(i),o.branch=!0,o.children=i)}return o}getStagedActions(e){return"wip"===this.tab?[{icon:"gl-cloud-patch-share",label:"Share Staged Changes",action:"staged-create-patch"}]:[]}getUnstagedActions(e){return"wip"===this.tab?[{icon:"gl-cloud-patch-share",label:"Share Unstaged Changes",action:"unstaged-create-patch"}]:[]}getFileActions(e,t){return[]}fileToTreeModel(e,t,o=!1,i="/"){const r=e.path.lastIndexOf(i),a=-1!==r?e.path.substring(r+1):e.path,c=o&&-1!==r?e.path.substring(0,r):"";return{branch:!1,expanded:!0,path:e.path,level:1,checkable:!1,checked:!1,icon:{type:"status",name:e.status},label:a,description:!0===o?c:void 0,context:[e],actions:this.getFileActions(e,t),...t}}folderToTreeModel(e,t){return{branch:!1,expanded:!0,path:e,level:1,checkable:!1,checked:!1,icon:"folder",label:e,...t}}renderTreeFileModel(e){return Gt`<gl-tree-generator
			.model=${e}
			.guides=${this.indentGuides}
			@gl-tree-generated-item-action-clicked=${this.onTreeItemActionClicked}
			@gl-tree-generated-item-checked=${this.onTreeItemChecked}
			@gl-tree-generated-item-selected=${this.onTreeItemSelected}
		></gl-tree-generator>`}onTreeItemActionClicked(e){if(!e.detail.context||!e.detail.action)return;switch(e.detail.action.action){case"staged-create-patch":this.onCreatePatch(e);break;case"unstaged-create-patch":this.onCreatePatch(e,!0);break;case"file-open":this.onOpenFile(e);break;case"file-unstage":this.onUnstageFile(e);break;case"file-stage":this.onStageFile(e);break;case"file-compare-working":this.onCompareWorking(e);break;case"file-open-on-remote":this.onOpenFileOnRemote(e);break;case"file-more-actions":this.onMoreActions(e)}}onTreeItemSelected(e){e.detail.context&&this.onComparePrevious(e)}onCreatePatch(e,t=!1){const o=new CustomEvent("create-patch",{detail:{checked:!!t||"staged"}});this.dispatchEvent(o)}onOpenFile(e){if(!e.detail.context)return;const[t]=e.detail.context,o=new CustomEvent("file-open",{detail:this.getEventDetail(t,{preview:!1,viewColumn:e.detail.altKey?ai:void 0})});this.dispatchEvent(o)}onOpenFileOnRemote(e){if(!e.detail.context)return;const[t]=e.detail.context,o=new CustomEvent("file-open-on-remote",{detail:this.getEventDetail(t,{preview:!1,viewColumn:e.detail.altKey?ai:void 0})});this.dispatchEvent(o)}onCompareWorking(e){if(!e.detail.context)return;const[t]=e.detail.context,o=new CustomEvent("file-compare-working",{detail:this.getEventDetail(t,{preview:!1,viewColumn:e.detail.altKey?ai:void 0})});this.dispatchEvent(o)}onComparePrevious(e){if(!e.detail.context)return;const[t]=e.detail.context,o=new CustomEvent("file-compare-previous",{detail:this.getEventDetail(t,{preview:!1,viewColumn:e.detail.altKey?ai:void 0})});this.dispatchEvent(o)}onMoreActions(e){if(!e.detail.context)return;const[t]=e.detail.context,o=new CustomEvent("file-more-actions",{detail:this.getEventDetail(t)});this.dispatchEvent(o)}onStageFile(e){if(!e.detail.context)return;const[t]=e.detail.context,o=new CustomEvent("file-stage",{detail:this.getEventDetail(t,{preview:!1,viewColumn:e.detail.altKey?ai:void 0})});this.dispatchEvent(o)}onUnstageFile(e){if(!e.detail.context)return;const[t]=e.detail.context,o=new CustomEvent("file-unstage",{detail:this.getEventDetail(t,{preview:!1,viewColumn:e.detail.altKey?ai:void 0})});this.dispatchEvent(o)}getEventDetail(e,t){return{path:e.path,repoPath:e.repoPath,status:e.status,staged:e.staged,showOptions:t}}}si([ro({type:Array})],GlDetailsBase.prototype,"files",2),si([ro({type:Boolean})],GlDetailsBase.prototype,"isUncommitted",2),si([ro({type:Object})],GlDetailsBase.prototype,"preferences",2),si([ro({attribute:"empty-text"})],GlDetailsBase.prototype,"emptyText",2);var ci=Object.defineProperty,li=Object.getOwnPropertyDescriptor,di=(e,t,o,i)=>{for(var r,a=i>1?void 0:i?li(t,o):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i?r(t,o,a):r(a))||a);return i&&a&&ci(t,o,a),a};let hi=class extends GlDetailsBase{constructor(){super(...arguments),this.tab="commit",this.explainBusy=!1}get isStash(){return null!=this.state?.commit?.stashNumber}get shortSha(){return this.state?.commit?.shortSha??""}get navigation(){if(null==this.state?.navigationStack)return{back:!1,forward:!1};const e={back:!0,forward:!0};return this.state.navigationStack.count<=1?(e.back=!1,e.forward=!1):0===this.state.navigationStack.position?(e.back=!0,e.forward=!1):this.state.navigationStack.position===this.state.navigationStack.count-1&&(e.back=!1,e.forward=!0),e}updated(e){e.has("explain")&&(this.explainBusy=!1,this.querySelector('[data-region="commit-explanation"]')?.scrollIntoView())}renderEmptyContent(){return Gt`
			<div class="section section--empty" id="empty">
				<p>Rich details for commits and stashes are shown as you navigate:</p>

				<ul class="bulleted">
					<li>lines in the text editor</li>
					<li>
						commits in the <a href="command:gitlens.showGraph">Commit Graph</a>,
						<a href="command:gitlens.showTimelineView">Visual File History</a>, or
						<a href="command:gitlens.showCommitsView">Commits view</a>
					</li>
					<li>stashes in the <a href="command:gitlens.showStashesView">Stashes view</a></li>
				</ul>

				<p>Alternatively, show your work-in-progress, or search for or choose a commit</p>

				<p class="button-container">
					<button class="button button--full" type="button" data-action="wip">Show Working Changes</button>
				</p>
				<p class="button-container">
					<span class="button-group button-group--single">
						<button class="button button--full" type="button" data-action="pick-commit">
							Choose Commit...
						</button>
						<button
							class="button"
							type="button"
							data-action="search-commit"
							aria-label="Search for Commit"
							title="Search for Commit"
						>
							<code-icon icon="search"></code-icon>
						</button>
					</span>
				</p>
			</div>
		`}renderCommitMessage(){if(null==this.state?.commit)return;const e=this.state.commit.message,t=e.indexOf("\0\n\0");return Gt`
			<div class="section section--message">
				<div class="message-block">
					${an(-1===t,(()=>Gt`<p class="message-block__text scrollable" data-region="message">
								<strong>${Ln(e)}</strong>
							</p>`),(()=>Gt`<p class="message-block__text scrollable" data-region="message">
								<strong>${Ln(e.substring(0,t))}</strong><br /><span
									>${Ln(e.substring(t+3))}</span
								>
							</p>`))}
				</div>
			</div>
		`}renderAutoLinks(){if(this.isUncommitted)return;const e=new Map;if(null!=this.state?.commit?.autolinks)for(const t of this.state.commit.autolinks)e.set(t.id,{type:"autolink",value:t});if(null!=this.state?.autolinkedIssues)for(const t of this.state.autolinkedIssues)e.set(t.id,{type:"issue",value:t});null!=this.state?.pullRequest&&e.set(this.state.pullRequest.id,{type:"pr",value:this.state.pullRequest});const t=[],o=[],i=[];for(const r of e.values())switch(r.type){case"autolink":t.push(r.value);break;case"issue":o.push(r.value);break;case"pr":i.push(r.value)}return Gt`
			<webview-pane
				collapsable
				?expanded=${this.state?.preferences?.autolinksExpanded??!0}
				?loading=${!this.state?.includeRichContent}
				data-region="rich-pane"
			>
				<span slot="title">Autolinks</span>
				<span slot="subtitle" data-region="autolink-count"
					>${this.state?.includeRichContent||e.size?`${e.size} found `:""}${this.state?.includeRichContent?"":"…"}</span
				>
				${an(null==this.state,(()=>Gt`
						<div class="section" data-region="autolinks">
							<section class="auto-link" aria-label="Custom Autolinks" data-region="custom-autolinks">
								<skeleton-loader lines="2"></skeleton-loader>
							</section>
							<section class="pull-request" aria-label="Pull request" data-region="pull-request">
								<skeleton-loader lines="2"></skeleton-loader>
							</section>
							<section class="issue" aria-label="Issue" data-region="issue">
								<skeleton-loader lines="2"></skeleton-loader>
							</section>
						</div>
					`),(()=>0===e.size?Gt`
								<div class="section" data-region="rich-info">
									<p>
										<code-icon icon="info"></code-icon>&nbsp;Use
										<a href="#" data-action="autolink-settings" title="Configure autolinks"
											>autolinks</a
										>
										to linkify external references, like Jira issues or Zendesk tickets, in commit
										messages.
									</p>
								</div>
							`:Gt`
							<div class="section" data-region="autolinks">
								${t.length?Gt`
											<section
												class="auto-link"
												aria-label="Custom Autolinks"
												data-region="custom-autolinks"
											>
												${t.map((e=>{let t=e.description??e.title;return void 0===t&&(t=`Custom Autolink ${e.prefix}${e.id}`),Gt`
														<issue-pull-request
															type="autolink"
															name="${t}"
															url="${e.url}"
															key="${e.prefix}${e.id}"
															status=""
														></issue-pull-request>
													`}))}
											</section>
									  `:void 0}
								${i.length?Gt`
											<section
												class="pull-request"
												aria-label="Pull request"
												data-region="pull-request"
											>
												${i.map((e=>Gt`
														<issue-pull-request
																type="pr"
																name="${e.title}"
																url="${e.url}"
																key="#${e.id}"
																status="${e.state}"
																date=${e.date}
																dateFormat="${this.state.preferences.dateFormat}"
															></issue-pull-request>
														</section>
									  				`))}
											</section>
									  `:void 0}
								${o.length?Gt`
											<section class="issue" aria-label="Issue" data-region="issue">
												${o.map((e=>Gt`
														<issue-pull-request
															type="issue"
															name="${e.title}"
															url="${e.url}"
															key="${e.id}"
															status="${e.state}"
															date="${e.closed?e.closedDate:e.date}"
															dateFormat="${this.state.preferences.dateFormat}"
														></issue-pull-request>
													`))}
											</section>
									  `:void 0}
							</div>
						`))}
			</webview-pane>
		`}renderExplainAi(){return Gt`
			<webview-pane collapsable data-region="explain-pane">
				<span slot="title">Explain (AI)</span>
				<span slot="subtitle"><code-icon icon="beaker" size="12"></code-icon></span>
				<action-nav slot="actions">
					<action-item data-action="switch-ai" label="Switch AI Model" icon="hubot"></action-item>
				</action-nav>

				<div class="section">
					<p>Let AI assist in understanding the changes made with this commit.</p>
					<p class="button-container">
						<span class="button-group button-group--single">
							<button
								class="button button--full button--busy"
								type="button"
								data-action="explain-commit"
								aria-busy="${this.explainBusy?"true":Kt}"
								@click=${this.onExplainChanges}
								@keydown=${this.onExplainChanges}
							>
								<code-icon icon="loading" modifier="spin"></code-icon>Explain Changes
							</button>
						</span>
					</p>
					${an(this.explain,(()=>Gt`
							<div
								class="ai-content${this.explain?.error?" has-error":""}"
								data-region="commit-explanation"
							>
								${an(this.explain?.error,(()=>Gt`<p class="ai-content__summary scrollable">
											${this.explain.error.message??"Error retrieving content"}
										</p>`))}
								${an(this.explain?.summary,(()=>Gt`<p class="ai-content__summary scrollable">${this.explain.summary}</p>`))}
							</div>
						`))}
				</div>
			</webview-pane>
		`}render(){if(null==this.state?.commit)return this.renderEmptyContent();const e=this.state.commit,t=this.state.pinned?"Unpin this Commit\nRestores Automatic Following":"Pin this Commit\nSuspends Automatic Following";return Gt`
			<div class="top-details">
				<div class="top-details__top-menu">
					<div class="top-details__actionbar${this.state.pinned?" is-pinned":""}">
						<div class="top-details__actionbar-group">
							<a
								class="commit-action${this.state.pinned?" is-active":""}"
								href="#"
								data-action="pin"
								aria-label="${t}"
								title="${t}"
								><code-icon
									icon="${this.state.pinned?"gl-pinned-filled":"pin"}"
									data-region="commit-pin"
								></code-icon
							></a>
							<a
								class="commit-action${this.navigation.back?"":" is-disabled"}"
								aria-disabled="${this.navigation.back?Kt:"true"}"
								href="#"
								data-action="back"
								aria-label="Back"
								title="Back"
								><code-icon icon="arrow-left" data-region="commit-back"></code-icon
							></a>
							${an(this.navigation.forward,(()=>Gt`
									<a
										class="commit-action"
										href="#"
										data-action="forward"
										aria-label="Forward"
										title="Forward"
										><code-icon icon="arrow-right" data-region="commit-forward"></code-icon
									></a>
								`))}
							${an(this.state.navigationStack?.hint,(()=>Gt`
									<a
										class="commit-action commit-action--emphasis-low"
										href="#"
										title="View this Commit"
										data-action="${this.state?.pinned?"forward":"back"}"
										><code-icon icon="git-commit"></code-icon
										><span data-region="commit-hint">${this.state.navigationStack?.hint}</span></a
									>
								`))}
						</div>
						<div class="top-details__actionbar-group">
							${an(!this.isUncommitted,(()=>Gt`
									<a
										class="commit-action"
										href="#"
										data-action="commit-actions"
										data-action-type="sha"
										aria-label="Copy SHA
[⌥] Pick Commit..."
										title="Copy SHA
[⌥] Pick Commit..."
									>
										<code-icon icon="git-commit"></code-icon>
										<span class="top-details__sha" data-region="shortsha">${this.shortSha}</span></a
									>
								`),(()=>Gt`
									<a
										class="commit-action"
										href="#"
										data-action="commit-actions"
										data-action-type="scm"
										aria-label="Open SCM view"
										title="Open SCM view"
										><code-icon icon="source-control"></code-icon
									></a>
								`))}
							<a
								class="commit-action"
								href="#"
								data-action="commit-actions"
								data-action-type="graph"
								aria-label="Open in Commit Graph"
								title="Open in Commit Graph"
								><code-icon icon="gl-graph"></code-icon
							></a>
							${an(!this.isUncommitted,(()=>Gt`
									<a
										class="commit-action"
										href="#"
										data-action="commit-actions"
										data-action-type="more"
										aria-label="Show Commit Actions"
										title="Show Commit Actions"
										><code-icon icon="kebab-vertical"></code-icon
									></a>
								`))}
						</div>
					</div>
					${an(null!=e&&!this.isStash,(()=>Gt`
							<ul class="top-details__authors" aria-label="Authors">
								<li class="top-details__author" data-region="author">
									<commit-identity
										name="${e.author.name}"
										email="${e.author.email}"
										date=${e.author.date}
										dateFormat="${this.preferences?.dateFormat}"
										avatarUrl="${e.author.avatar??""}"
										showAvatar="${this.preferences?.avatars??!0}"
										actionLabel="${e.sha===wi?"modified":"committed"}"
									></commit-identity>
								</li>
							</ul>
						`))}
				</div>
			</div>
			${this.renderCommitMessage()} ${this.renderAutoLinks()}
			${this.renderChangedFiles(this.isStash?"stash":"commit",this.renderCommitStats(e?.stats))}
			${this.renderExplainAi()}
		`}onExplainChanges(e){if(!0===this.explainBusy||e instanceof KeyboardEvent&&"Enter"!==e.key)return e.preventDefault(),void e.stopPropagation();this.explainBusy=!0}renderCommitStats(e){if(null==e?.changedFiles)return;if("number"==typeof e.changedFiles)return Gt`<commit-stats added="?" modified="${e.changedFiles}" removed="?"></commit-stats>`;const{added:t,deleted:o,changed:i}=e.changedFiles;return Gt`<commit-stats added="${t}" modified="${i}" removed="${o}"></commit-stats>`}getFileActions(e,t){const o=[{icon:"go-to-file",label:"Open file",action:"file-open"}];return this.isUncommitted||(o.push({icon:"git-compare",label:"Open Changes with Working File",action:"file-compare-working"}),this.isStash||o.push({icon:"globe",label:"Open on remote",action:"file-open-on-remote"},{icon:"ellipsis",label:"Show more actions",action:"file-more-actions"})),o}};di([ro({type:Object})],hi.prototype,"state",2),di([so()],hi.prototype,"isStash",1),di([so()],hi.prototype,"shortSha",1),di([so()],hi.prototype,"explainBusy",2),di([ro({type:Object})],hi.prototype,"explain",2),hi=di([oo("gl-commit-details")],hi);var ui=Object.defineProperty,pi=Object.getOwnPropertyDescriptor,fi=(e,t,o,i)=>{for(var r,a=i>1?void 0:i?pi(t,o):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i?r(t,o,a):r(a))||a);return i&&a&&ui(t,o,a),a};let bi=class extends GlDetailsBase{constructor(){super(...arguments),this.tab="wip"}render(){return Gt`
			<div class="top-details">
				<div class="top-details__top-menu">
					<div class="top-details__actionbar">
						<div class="top-details__actionbar-group">
							${an(null==this.wip?.changes||null==this.files,(()=>"Loading..."),(()=>Gt`<span
										>${ce("change",this.files.length)} on
										<span
											class="top-details__actionbar--highlight"
											title="${this.wip.repositoryCount>1?`${this.wip.changes.repository.name}:${this.wip.changes.branchName}`:this.wip.changes.branchName}"
											>${this.wip.repositoryCount>1?`${this.wip.changes.repository.name}:${this.wip.changes.branchName}`:this.wip.changes.branchName}</span
										></span
									>`))}
						</div>
						<div class="top-details__actionbar-group">
							<a
								class="commit-action"
								href="#"
								data-action="create-patch"
								aria-label="Share as Cloud Patch"
								title="Share as Cloud Patch"
							>
								<code-icon icon="gl-cloud-patch-share"></code-icon>
								<span class="top-details__sha">Share</span>
							</a>
							<a
								class="commit-action"
								href="#"
								data-action="commit-actions"
								data-action-type="scm"
								aria-label="Open SCM view"
								title="Open SCM view"
								><code-icon icon="source-control"></code-icon
							></a>
							<a
								class="commit-action"
								href="#"
								data-action="commit-actions"
								data-action-type="graph"
								aria-label="Open in Commit Graph"
								title="Open in Commit Graph"
								><code-icon icon="gl-graph"></code-icon
							></a>
						</div>
					</div>
				</div>
			</div>
			${this.renderChangedFiles("wip")}
		`}getFileActions(e,t){const o={icon:"go-to-file",label:"Open file",action:"file-open"};return!0===e.staged?[o,{icon:"remove",label:"Unstage changes",action:"file-unstage"}]:[o,{icon:"plus",label:"Stage changes",action:"file-stage"}]}};fi([ro({type:Object})],bi.prototype,"wip",2),bi=fi([oo("gl-wip-details")],bi);var mi=Object.defineProperty,gi=Object.getOwnPropertyDescriptor,vi=(e,t,o,i)=>{for(var r,a=i>1?void 0:i?gi(t,o):t,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i?r(t,o,a):r(a))||a);return i&&a&&mi(t,o,a),a};let yi=class extends lit_element_s{constructor(){super(),this.indentPreference=16,En(Sn)}get isUncommitted(){return this.state?.commit?.sha===wi}get isStash(){return null!=this.state?.commit?.stashNumber}get navigation(){if(null==this.state?.navigationStack)return{back:!1,forward:!1};const e={back:!0,forward:!0};return this.state.navigationStack.count<=1?(e.back=!1,e.forward=!1):0===this.state.navigationStack.position?(e.back=!0,e.forward=!1):this.state.navigationStack.position===this.state.navigationStack.count-1&&(e.back=!1,e.forward=!0),e}updateDocumentProperties(){const e=this.state?.preferences?.indent;if(e===this.indentPreference)return;this.indentPreference=e??16;document.documentElement.style.setProperty("--gitlens-tree-indent",`${this.indentPreference}px`)}updated(e){e.has("state")&&this.updateDocumentProperties()}render(){const e=this.state?.wip;return Gt`
			<div class="commit-detail-panel scrollable">
				<main id="main" tabindex="-1">
					<nav class="details-tab">
						<button
							class="details-tab__item ${"commit"===this.state?.mode?" is-active":""}"
							data-action="details"
						>
							${this.isStash?"Stash":"Commit"}
						</button>
						<button
							class="details-tab__item ${"wip"===this.state?.mode?" is-active":""}"
							data-action="wip"
							title="${Pn("wip"===this.state?.mode&&e?.changes?.files.length?`${ce("change",e.changes.files.length)} on ${e.repositoryCount>1?`${e.changes.repository.name}:${e.changes.branchName}`:e.changes.branchName}`:void 0)}"
						>
							Working
							Changes${Pn("wip"===this.state?.mode&&e?.changes?.files.length?Gt` &nbsp;<gk-badge variant="filled">${e.changes.files.length}</gk-badge>`:void 0)}
						</button>
					</nav>
					${an("commit"===this.state?.mode,(()=>Gt`<gl-commit-details
								.state=${this.state}
								.files=${this.state?.commit?.files}
								.explain=${this.explain}
								.preferences=${this.state?.preferences}
								.isUncommitted=${this.isUncommitted}
							></gl-commit-details>`),(()=>Gt`<gl-wip-details
								.wip=${e}
								.files=${e?.changes?.files}
								.preferences=${this.state?.preferences}
								.isUncommitted=${!0}
								.emptyText=${"No working changes"}
							></gl-wip-details>`))}
				</main>
			</div>
		`}createRenderRoot(){return this}};vi([ro({type:Object})],yi.prototype,"state",2),vi([ro({type:Object})],yi.prototype,"explain",2),vi([so()],yi.prototype,"isUncommitted",1),vi([so()],yi.prototype,"isStash",1),yi=vi([oo("gl-commit-details-app")],yi);const wi="0000000000000000000000000000000000000000";class CommitDetailsApp extends App{constructor(){super("CommitDetailsApp")}onInitialize(){this.attachState()}onBind(){const e=[de.on('[data-action="commit-actions"]',"click",(e=>this.onCommitActions(e))),de.on('[data-action="pick-commit"]',"click",(e=>this.onPickCommit(e))),de.on('[data-action="wip"]',"click",(e=>this.onSwitchMode(e,"wip"))),de.on('[data-action="details"]',"click",(e=>this.onSwitchMode(e,"commit"))),de.on('[data-action="search-commit"]',"click",(e=>this.onSearchCommit(e))),de.on('[data-action="autolink-settings"]',"click",(e=>this.onAutolinkSettings(e))),de.on('[data-action="files-layout"]',"click",(e=>this.onToggleFilesLayout(e))),de.on('[data-action="pin"]',"click",(e=>this.onTogglePin(e))),de.on('[data-action="back"]',"click",(e=>this.onNavigate("back",e))),de.on('[data-action="forward"]',"click",(e=>this.onNavigate("forward",e))),de.on('[data-action="create-patch"]',"click",(e=>this.onCreatePatchFromWip(!0))),de.on('[data-region="rich-pane"]',"expanded-change",(e=>this.onExpandedChange(e.detail))),de.on('[data-action="explain-commit"]',"click",(e=>this.onExplainCommit(e))),de.on('[data-action="switch-ai"]',"click",(e=>this.onSwitchAiModel(e))),de.on("gl-wip-details","create-patch",(e=>this.onCreatePatchFromWip(e.detail.checked))),de.on("gl-commit-details","file-open-on-remote",(e=>this.onOpenFileOnRemote(e.detail))),de.on("gl-commit-details,gl-wip-details","file-open",(e=>this.onOpenFile(e.detail))),de.on("gl-commit-details","file-compare-working",(e=>this.onCompareFileWithWorking(e.detail))),de.on("gl-commit-details,gl-wip-details","file-compare-previous",(e=>this.onCompareFileWithPrevious(e.detail))),de.on("gl-commit-details","file-more-actions",(e=>this.onFileMoreActions(e.detail))),de.on("gl-wip-details","file-stage",(e=>this.onStageFile(e.detail))),de.on("gl-wip-details","file-unstage",(e=>this.onUnstageFile(e.detail)))];return e}onMessageReceived(e){switch(e.method){case E.method:o(E,e,(e=>{e.state,this.state=e.state,this.setState(this.state),this.attachState()}));break;case P.method:o(P,e,(e=>{this.state={...this.state,...e},this.setState(this.state),this.attachState()}));break;default:super.onMessageReceived?.(e)}}onCreatePatchFromWip(e=!0){null!=this.state.wip?.changes&&this.sendCommand(S,{changes:this.state.wip?.changes,checked:e})}onCommandClickedCore(e){const t=e?.startsWith("command:")?e.slice(8):e;null!=t&&this.sendCommand(a,{command:t})}onSwitchAiModel(e){this.onCommandClickedCore("gitlens.switchAIModel")}async onExplainCommit(e){try{const e=await this.sendCommandWithCompletion(_,void 0,O);e.error?this.component.explain={error:{message:e.error.message??"Error retrieving content"}}:e.summary?this.component.explain={summary:e.summary}:this.component.explain=void 0}catch(e){this.component.explain={error:{message:"Error retrieving content"}}}}onToggleFilesLayout(e){const t=e.target?.dataset.filesLayout??void 0;if(t===this.state.preferences?.files?.layout)return;const o={...this.state.preferences?.files,layout:t??"auto"};this.state={...this.state,preferences:{...this.state.preferences,files:o}},this.attachState(),this.sendCommand(C,{files:o})}onExpandedChange(e){this.state={...this.state,preferences:{...this.state.preferences,autolinksExpanded:e.expanded}},this.attachState(),this.sendCommand(C,{autolinksExpanded:e.expanded})}onNavigate(e,t){t.preventDefault(),this.sendCommand(A,{direction:e})}onTogglePin(e){e.preventDefault(),this.sendCommand(x,{pin:!this.state.pinned})}onAutolinkSettings(e){e.preventDefault(),this.sendCommand(w,void 0)}onPickCommit(e){this.sendCommand(g,void 0)}onSearchCommit(e){this.sendCommand(v,void 0)}onSwitchMode(e,t){this.state={...this.state,mode:t},this.attachState(),this.sendCommand(y,{mode:t,repoPath:this.state.commit?.repoPath})}onOpenFileOnRemote(e){this.sendCommand(h,e)}onOpenFile(e){this.sendCommand(d,e)}onCompareFileWithWorking(e){this.sendCommand(u,e)}onCompareFileWithPrevious(e){this.sendCommand(p,e)}onFileMoreActions(e){this.sendCommand(l,e)}onStageFile(e){this.sendCommand(f,e)}onUnstageFile(e){this.sendCommand(m,e)}onCommitActions(e){if(e.preventDefault(),void 0===this.state.commit)return void e.stopPropagation();const t=e.target?.getAttribute("data-action-type");null!=t&&this.sendCommand(c,{action:t,alt:e.altKey})}get component(){return null==this._component&&(this._component=document.getElementById("app")),this._component}attachState(){this.component.state=this.state}}new CommitDetailsApp;var $i=t.b,_i=t.F;export{$i as CommitDetailsApp,_i as uncommittedSha};
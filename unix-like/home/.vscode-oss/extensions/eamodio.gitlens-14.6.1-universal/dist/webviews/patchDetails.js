var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};void 0!==e&&Object.defineProperty(e,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}});var t={};e.d(t,{N:()=>PatchDetailsApp,b:()=>ui});class IpcMessageType{constructor(e,t=!1,o=!1){this.method=e,this.reset=t,this.pack=o}}class IpcCommandType extends IpcMessageType{}class IpcNotificationType extends IpcMessageType{}function o(e,t,o){e.method===t.method&&o(t.params,e)}const n=new IpcCommandType("webview/ready"),i=new IpcCommandType("webview/focus"),r=new IpcCommandType("command/execute");new IpcCommandType("configuration/preview"),new IpcCommandType("configuration/update"),new IpcNotificationType("configuration/didChange"),new IpcNotificationType("configuration/didPreview"),new IpcNotificationType("webview/didOpenAnchor");const a=new IpcCommandType("patch/apply"),c=new IpcCommandType("patch/create"),l=(new IpcCommandType("patch/openInGraph"),new IpcCommandType("patch/checked")),h=new IpcCommandType("patch/selectRepo"),d=new IpcCommandType("patch/selectBase"),p=new IpcCommandType("patch/file/actions"),u=new IpcCommandType("patch/file/open"),f=new IpcCommandType("patch/file/openOnRemote"),b=new IpcCommandType("patch/file/compareWorking"),g=new IpcCommandType("patch/file/comparePrevious"),m=new IpcCommandType("patch/explain"),v=new IpcCommandType("patch/preferences/update"),y=new IpcCommandType("patch/switchMode"),w=new IpcCommandType("patch/cloud/copyLink"),_=new IpcCommandType("patch/local/createPatch"),x=new IpcCommandType("patch/create/repository/check"),k=new IpcCommandType("patch/update/create/metadata"),A=new IpcNotificationType("patch/didChange",!0),C=new IpcNotificationType("patch/create/didChange"),S=new IpcNotificationType("patch/draft/didChange"),E=new IpcNotificationType("patch/preferences/didChange"),P=new IpcNotificationType("patch/didExplain"),T=new IpcNotificationType("patch/draft/didChangeRepository");function M(e){const t=.001*performance.now();let o=Math.floor(t),n=Math.floor(t%1*1e9);return void 0!==e&&(o-=e[0],n-=e[1],n<0&&(o--,n+=1e9)),[o,n]}function O(e,t,o){let n,i,r,a,c;function l(e){const o=e-(i??0);return null==i||o>=t||o<0}function h(){const e=Date.now();if(l(e))d();else{c=setTimeout(h,t-(e-(i??0)))}}function d(){return c=void 0,n?function(){const t=n,o=r;return n=r=void 0,a=e.apply(o,t),a}():(n=r=void 0,a)}function p(...e){const d=Date.now(),p=l(d);return n=null!=o&&n?o(n,e):e,r=this,i=d,p&&null==c?(c=setTimeout(h,t),a):(null==c&&(c=setTimeout(h,t)),a)}return p.cancel=function(){null!=c&&clearTimeout(c),n=i=r=c=void 0},p.flush=function(){return null!=c?d():a},p.pending=function(){return null!=c},p}const R=",",D="=",L="{",I="(",N=")",B=/\(([\s\S]*)\)/,U=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,j=/\s?=.*$/;const H=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,o=!1){this.provider=e,this._isDebugging=o,this.logLevel=t}enabled(e){return this.level>=z(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=z(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){if(this.level<4&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!0,t)}`)}error(e,t,...o){if(this.level<1&&!this.isDebugging)return;let n;if(n=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??""}`,null==n){const t=e instanceof Error?e.stack:void 0;if(t){const e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(n=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${n??""}${this.toLoggableParams(!1,o)}${null!=e?`\n${String(e)}`:""}`)}log(e,...t){if(this.level<3&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}warn(e,...t){if(this.level<2&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map((e=>this.toLoggable(e,t))).join(", ")}]`;const o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,t)}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";const o=t.map((e=>this.toLoggable(e))).join(", ");return 0!==o.length?` — ${o}`:""}};function z(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}function F(e){let t;if("function"==typeof e){if(null==e.prototype?.constructor)return e.name;t=e.prototype.constructor.name??""}else t=e.constructor?.name??"";const o=t.indexOf("_");return-1===o?t:t.substr(o+1)}const G={enabled:e=>H.enabled(e)||H.isDebugging,log:(e,t,o,...n)=>{switch(e){case"error":H.error("",t,o,...n);break;case"warn":H.warn(t,o,...n);break;case"info":H.log(t,o,...n);break;default:H.debug(t,o,...n)}}},q=500,W=2**30,K=new Map;let Y=0;function Z(e){K.delete(e)}function J(e,t){if(null!=t)return{scopeId:t.scopeId,prefix:`${t.prefix}${e}`};const o=X();return{scopeId:o,prefix:`[${String(o).padStart(5)}] ${e}`}}function X(){return Y===W&&(Y=0),++Y}var ee=(e=>(e[e.Hash=35]="Hash",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Backslash=92]="Backslash",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.Z=90]="Z",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.z=122]="z",e))(ee||{});const{fromCharCode:te}=String;new TextEncoder;function oe(e){const[t,o]=M(e);return 1e3*t+Math.floor(o/1e6)}const ne=Symbol("logInstanceNameFn");Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");class Stopwatch{constructor(e,t,...o){let n;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:J(e??""),n="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??G,this._time=M(),null!=n){if(!this.logProvider.enabled(this.logLevel))return;o.length?this.logProvider.log(this.logLevel,this.logScope,`${n.message??""}${n.suffix??""}`,...o):this.logProvider.log(this.logLevel,this.logScope,`${n.message??""}${n.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){const[e,t]=M(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=M(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);const[o,n]=M(this._time),i=1e3*o+Math.floor(n/1e6),r=e?.message??"";this.logProvider.log(i>250?"warn":this.logLevel,this.logScope,`${r?`${r} `:""}[${i}ms]${e?.suffix??""}`)}}var ie,re;function se(e,t){const o=e+t,n=t<0?o<0?0:o:o>255?255:o;return Math.round(n)}function ae(e,t){return ce(e,-t)}function ce(e,t){const o=function(e){const t=ve(e);return null==t?null:[t.rgba.r,t.rgba.g,t.rgba.b,t.rgba.a]}(e);if(null==o)return e;const[n,i,r,a]=o,c=255*t/100;return`rgba(${se(n,c)}, ${se(i,c)}, ${se(r,c)}, ${a})`}function le(e,t){const o=ue.from(e);return null==o?e:o.transparent(t/100).toString()}(re=ie||(ie={})).on=function(e,t,o,n){let i=!1;if("string"==typeof e){const r=function(t){const n=t?.target?.closest(e);null!=n&&o(t,n)};return document.addEventListener(t,r,n??!0),{dispose:()=>{i||(i=!0,document.removeEventListener(t,r,n??!0))}}}const r=function(e){o(e,this)};return e.addEventListener(t,r,n??!1),{dispose:()=>{i||(i=!0,e.removeEventListener(t,r,n??!1))}}},re.insertTemplate=function(e,t,o){const n=document.getElementById(e);if(t.replaceChildren(n?.content.cloneNode(!0)),t.className=n.className,null!=o?.visible){const e=t.querySelectorAll("[data-visible]");for(const t of e){const e=t.dataset.visible;e&&(o.visible[e]?t.style.display="initial":t.style.display="none")}}if(null!=o?.bindings){const e=t.querySelectorAll("[data-bind]");for(const t of e){const e=t.dataset.bind;if(!e)continue;const n=o.bindings[e];null!=n&&(t.textContent=String(n))}}},re.resetSlot=function(e){e.replaceChildren(),e.className=""};function he(e,t){const o=Math.pow(10,t);return Math.round(e*o)/o}class RGBA{constructor(e,t,o,n=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,o)),this.a=he(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}}class HSLA{constructor(e,t,o,n){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=he(Math.max(Math.min(1,t),0),3),this.l=he(Math.max(Math.min(1,o),0),3),this.a=he(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,n=e.b/255,i=e.a,r=Math.max(t,o,n),a=Math.min(t,o,n);let c=0,l=0;const h=(a+r)/2,d=r-a;if(d>0){switch(l=Math.min(h<=.5?d/(2*h):d/(2-2*h),1),r){case t:c=(o-n)/d+(o<n?6:0);break;case o:c=(n-t)/d+2;break;case n:c=(t-o)/d+4}c*=60,c=Math.round(c)}return new HSLA(c,l,h,i)}static _hue2rgb(e,t,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+6*(t-e)*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}static toRGBA(e){const t=e.h/360,{s:o,l:n,a:i}=e;let r,a,c;if(0===o)r=a=c=n;else{const e=n<.5?n*(1+o):n+o-n*o,i=2*n-e;r=HSLA._hue2rgb(i,e,t+1/3),a=HSLA._hue2rgb(i,e,t),c=HSLA._hue2rgb(i,e,t-1/3)}return new RGBA(Math.round(255*r),Math.round(255*a),Math.round(255*c),i)}}class HSVA{constructor(e,t,o,n){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=he(Math.max(Math.min(1,t),0),3),this.v=he(Math.max(Math.min(1,o),0),3),this.a=he(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,n=e.b/255,i=Math.max(t,o,n),r=i-Math.min(t,o,n),a=0===i?0:r/i;let c;return c=0===r?0:i===t?((o-n)/r%6+6)%6:i===o?(n-t)/r+2:(t-o)/r+4,new HSVA(Math.round(60*c),a,i,e.a)}static toRGBA(e){const{h:t,s:o,v:n,a:i}=e,r=n*o,a=r*(1-Math.abs(t/60%2-1)),c=n-r;let[l,h,d]=[0,0,0];return t<60?(l=r,h=a):t<120?(l=a,h=r):t<180?(h=r,d=a):t<240?(h=a,d=r):t<300?(l=a,d=r):t<=360&&(l=r,d=a),l=Math.round(255*(l+c)),h=Math.round(255*(h+c)),d=Math.round(255*(d+c)),new RGBA(l,h,d,i)}}function de(e,t){return t.getPropertyValue(e).trim()}const pe=class _Color{static from(e){return e instanceof _Color?e:ve(e)||_Color.red}static fromCssVariable(e,t){return ve(de(e,t))||_Color.red}static fromHex(e){return ye(e)||_Color.red}static equals(e,t){return!e&&!t||!(!e||!t)&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(!e)throw new Error("Color needs a value");if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else{if(!(e instanceof HSVA))throw new Error("Invalid color ctor argument");this._hsva=e,this.rgba=HSVA.toRGBA(e)}}equals(e){return null!=e&&(Boolean(e)&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva))}getRelativeLuminance(){return he(.2126*_Color._relativeLuminanceForComponent(this.rgba.r)+.7152*_Color._relativeLuminanceForComponent(this.rgba.g)+.0722*_Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new ue(new RGBA(0,0,0,e.rgba.a));if(1===t)return new ue(new RGBA(255,255,255,e.rgba.a));const o=e.getRelativeLuminance();let n=20;const i=(e,o)=>{const r=e.mix(o,.5),a=r.getRelativeLuminance();return Math.abs(t-a)<1e-7||!n--?r:a>t?i(e,r):i(r,o)},r=(o>t?i(ue.black,e):i(e,ue.white)).rgba;return new ue(new RGBA(r.r,r.g,r.b,e.rgba.a))}(this,e)}getContrastRatio(e){const t=this.getRelativeLuminance(),o=e.getRelativeLuminance();return t>o?(t+.05)/(o+.05):(o+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){const{r:t,g:o,b:n,a:i}=this.rgba;return new _Color(new RGBA(t,o,n,i*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new _Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){const t=e.rgba,o=this.rgba.a,n=t.a,i=o+n*(1-o);if(i<1e-6)return _Color.transparent;const r=this.rgba.r*o/i+t.r*n*(1-o)/i,a=this.rgba.g*o/i+t.g*n*(1-o)/i,c=this.rgba.b*o/i+t.b*n*(1-o)/i;return new _Color(new RGBA(r,a,c,i))}mix(e,t){return function(e,t,o){const n=e.rgba,i=t.rgba;return new ue(new RGBA(n.r+o*(i.r-n.r),n.g+o*(i.g-n.g),n.b+o*(i.b-n.b),n.a+o*(i.a-n.a)))}(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;const{r:t,g:o,b:n,a:i}=this.rgba;return new _Color(new RGBA(e.rgba.r-i*(e.rgba.r-t),e.rgba.g-i*(e.rgba.g-o),e.rgba.b-i*(e.rgba.b-n),1))}flatten(...e){const t=e.reduceRight(((e,t)=>_Color._flatten(t,e)));return _Color._flatten(this,t)}static _flatten(e,t){const o=1-e.rgba.a;return new _Color(new RGBA(o*t.rgba.r+e.rgba.a*e.rgba.r,o*t.rgba.g+e.rgba.a*e.rgba.g,o*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){if(e.isOpaque())return ge(e);return fe(e)}(this)),this._toString}static getLighterColor(e,t,o){if(e.isLighterThan(t))return e;o=o||.5;const n=e.getRelativeLuminance(),i=t.getRelativeLuminance();return o=o*(i-n)/i,e.lighten(o)}static getDarkerColor(e,t,o){if(e.isDarkerThan(t))return e;o=o||.5;const n=e.getRelativeLuminance();return o=o*(n-t.getRelativeLuminance())/n,e.darken(o)}};pe.white=new pe(new RGBA(255,255,255,1)),pe.black=new pe(new RGBA(0,0,0,1)),pe.red=new pe(new RGBA(255,0,0,1)),pe.blue=new pe(new RGBA(0,0,255,1)),pe.green=new pe(new RGBA(0,255,0,1)),pe.cyan=new pe(new RGBA(0,255,255,1)),pe.lightgrey=new pe(new RGBA(211,211,211,1)),pe.transparent=new pe(new RGBA(0,0,0,0));let ue=pe;function fe(e){return`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}function be(e){const t=e.toString(16);return 2!==t.length?`0${t}`:t}function ge(e){return`#${be(e.rgba.r)}${be(e.rgba.g)}${be(e.rgba.b)}`}const me=/^((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function ve(e){if(0===(e=e.trim()).length)return null;if(e.charCodeAt(0)===ee.Hash)return ye(e);const t=me.exec(e);if(null==t)return null;const o=t[1];let n;switch(o){case"rgb":case"hsl":n=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),1];break;case"rgba":case"hsla":n=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),parseFloat(t[5])];break;default:return null}switch(o){case"rgb":case"rgba":return new ue(new RGBA(n[0],n[1],n[2],n[3]));case"hsl":case"hsla":return new ue(new HSLA(n[0],n[1],n[2],n[3]))}return ue.red}function ye(e){const t=(e=e.trim()).length;if(0===t)return null;if(e.charCodeAt(0)!==ee.Hash)return null;switch(t){case 7:{const t=16*we(e.charCodeAt(1))+we(e.charCodeAt(2)),o=16*we(e.charCodeAt(3))+we(e.charCodeAt(4)),n=16*we(e.charCodeAt(5))+we(e.charCodeAt(6));return new ue(new RGBA(t,o,n,1))}case 9:{const t=16*we(e.charCodeAt(1))+we(e.charCodeAt(2)),o=16*we(e.charCodeAt(3))+we(e.charCodeAt(4)),n=16*we(e.charCodeAt(5))+we(e.charCodeAt(6)),i=16*we(e.charCodeAt(7))+we(e.charCodeAt(8));return new ue(new RGBA(t,o,n,i/255))}case 4:{const t=we(e.charCodeAt(1)),o=we(e.charCodeAt(2)),n=we(e.charCodeAt(3));return new ue(new RGBA(16*t+t,16*o+o,16*n+n))}case 5:{const t=we(e.charCodeAt(1)),o=we(e.charCodeAt(2)),n=we(e.charCodeAt(3)),i=we(e.charCodeAt(4));return new ue(new RGBA(16*t+t,16*o+o,16*n+n,(16*i+i)/255))}default:return null}}function we(e){switch(e){case ee.Digit0:return 0;case ee.Digit1:return 1;case ee.Digit2:return 2;case ee.Digit3:return 3;case ee.Digit4:return 4;case ee.Digit5:return 5;case ee.Digit6:return 6;case ee.Digit7:return 7;case ee.Digit8:return 8;case ee.Digit9:return 9;case ee.a:case ee.A:return 10;case ee.b:case ee.B:return 11;case ee.c:case ee.C:return 12;case ee.d:case ee.D:return 13;case ee.e:case ee.E:return 14;case ee.f:case ee.F:return 15}return 0}const _e=class _Emitter{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(e,t,o)=>{null==this.listeners&&(this.listeners=new LinkedList);const n=this.listeners.push(null==t?e:[e,t]),i={dispose:()=>{i.dispose=_Emitter._noop,this._disposed||n()}};return Array.isArray(o)&&o.push(i),i}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){const[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};_e._noop=function(){};let ke=_e;const Ae={done:!0,value:void 0},Ce=class _Node{constructor(e){this.element=e,this.next=_Node.Undefined,this.prev=_Node.Undefined}};Ce.Undefined=new Ce(void 0);let Ee=Ce;class LinkedList{constructor(){this._first=Ee.Undefined,this._last=Ee.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===Ee.Undefined}clear(){this._first=Ee.Undefined,this._last=Ee.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){const o=new Ee(e);if(this._first===Ee.Undefined)this._first=o,this._last=o;else if(t){const e=this._last;this._last=o,o.prev=e,e.next=o}else{const e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let n=!1;return()=>{n||(n=!0,this._remove(o))}}shift(){if(this._first===Ee.Undefined)return;const e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===Ee.Undefined)return;const e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==Ee.Undefined&&e.next!==Ee.Undefined){const t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===Ee.Undefined&&e.next===Ee.Undefined?(this._first=Ee.Undefined,this._last=Ee.Undefined):e.next===Ee.Undefined?(this._last=this._last.prev,this._last.next=Ee.Undefined):e.prev===Ee.Undefined&&(this._first=this._first.next,this._first.prev=Ee.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===Ee.Undefined?Ae:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){const e=[];for(let t=this._first;t!==Ee.Undefined;t=t.next)e.push(t.element);return e}}const Pe=new ke,Te=Pe.event;function Me(e){const t=document.documentElement,o=window.getComputedStyle(t),n=document.body.classList,i=n.contains("vscode-light")||n.contains("vscode-high-contrast-light"),r=n.contains("vscode-high-contrast")||n.contains("vscode-high-contrast-light"),a=t.style,c=de("--vscode-editor-background",o);let l=de("--vscode-editor-foreground",o);l||(l=de("--vscode-foreground",o));let h=de("--color-background",o);return a.setProperty("--color-background--lighten-05",ce(h,5)),a.setProperty("--color-background--darken-05",ae(h,5)),a.setProperty("--color-background--lighten-075",ce(h,7.5)),a.setProperty("--color-background--darken-075",ae(h,7.5)),a.setProperty("--color-background--lighten-10",ce(h,10)),a.setProperty("--color-background--darken-10",ae(h,10)),a.setProperty("--color-background--lighten-15",ce(h,15)),a.setProperty("--color-background--darken-15",ae(h,15)),a.setProperty("--color-background--lighten-30",ce(h,30)),a.setProperty("--color-background--darken-30",ae(h,30)),a.setProperty("--color-background--lighten-50",ce(h,50)),a.setProperty("--color-background--darken-50",ae(h,50)),h=de("--color-button-background",o),a.setProperty("--color-button-background--darken-30",ae(h,30)),h=de("--color-highlight",o),a.setProperty("--color-highlight--75",le(h,75)),a.setProperty("--color-highlight--50",le(h,50)),a.setProperty("--color-highlight--25",le(h,25)),h=de("--color-button-secondary-background",o),a.setProperty("--color-button-secondary-background--darken-30",ae(h,30)),h=de("--color-foreground",o),a.setProperty("--color-foreground--85",le(h,85)),a.setProperty("--color-foreground--75",le(h,75)),a.setProperty("--color-foreground--65",le(h,65)),a.setProperty("--color-foreground--50",le(h,50)),h=de("--color-link-foreground",o),a.setProperty("--color-link-foreground--darken-20",ae(h,20)),a.setProperty("--color-link-foreground--lighten-20",ce(h,20)),h=de("--color-alert-infoBackground",o),a.setProperty("--color-alert-infoHoverBackground",i?ae(h,5):ce(h,5)),h=de("--color-alert-warningBackground",o),a.setProperty("--color-alert-warningHoverBackground",i?ae(h,5):ce(h,5)),h=de("--color-alert-errorBackground",o),a.setProperty("--color-alert-errorHoverBackground",i?ae(h,5):ce(h,5)),h=i?ae(c,5):ce(c,5),a.setProperty("--color-alert-neutralBackground",h),a.setProperty("--color-alert-neutralHoverBackground",i?ae(h,5):ce(h,5)),{colors:{background:c,foreground:l},computedStyle:o,isLightTheme:i,isHighContrastTheme:r,isInitializing:null==e}}var Oe=Object.defineProperty,Re=Object.getOwnPropertyDescriptor;let De=0;function Ie(){return 1073741824===De?De=1:De++,`webview:${De}`}const Ne=new TextDecoder;class App{constructor(e){this.appName=e;const t=[],o=Me();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(o),t.push(Te(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",H.configure({name:e,createChannel:function(e){return{name:e,appendLine:function(e){}}}},"off"),this.log(`${e}()`),this._api=acquireVsCodeApi(),null!=this.state){const e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){const e=new MutationObserver((e=>{Pe.fire(Me(e))}));return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame((()=>{this.log(`${e}(): initializing...`);try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(ie.on(window,"message",(e=>this.onMessageReceivedCore(e)))),this.sendCommand(n,void 0),this.onInitialized?.()}finally{document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}})),t.push(ie.on(window,"pagehide",(()=>{t?.forEach((e=>e.dispose())),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=void 0})))}onMessageReceivedCore(e){const t=K.get(Y),o=e.data;if(o.packed&&o.params instanceof Uint8Array){const n=function(e,t,...o){return(t?.provider??G).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...o):void 0}(J(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});o.params=JSON.parse(Ne.decode(o.params)),n?.stop()}this.onMessageReceived(o)}bind(){this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);const e=O((e=>{this.sendCommand(i,e)}),150);this.bindDisposables.push(ie.on(document,"focusin",(t=>{const o=t.composedPath().some((e=>"INPUT"===e.tagName));!0===this._focused&&this._inputFocused===o||(this._focused=!0,this._inputFocused=o,e({focused:!0,inputFocused:o}))})),ie.on(document,"focusout",(()=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))})))}log(e,...t){"string"==typeof e?H.log(e,...t):H.log(e,t.shift(),...t)}getState(){return this._api.getState()}sendCommand(e,t){const o=Ie();this.log(`${this.appName}.sendCommand(${o}): name=${e.method}`),this.postMessage({id:o,method:e.method,params:t})}async sendCommandWithCompletion(e,t,n){const i=Ie();this.log(`${this.appName}.sendCommandWithCompletion(${i}): name=${e.method}`);const r=new Promise(((e,t)=>{let r;const a=[ie.on(window,"message",(t=>{o(n,t.data,(o=>{t.data.completionId===i&&(a.forEach((e=>e.dispose())),queueMicrotask((()=>e(o))))}))})),{dispose:function(){null!=r&&(clearTimeout(r),r=void 0)}}];r=setTimeout((()=>{r=void 0,a.forEach((e=>e.dispose())),t(new Error(`Timed out waiting for completion of ${n.method}`))}),6e4)}));return this.postMessage({id:i,method:e.method,params:t,completionId:i}),r}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}}var Ue;((e,t,o,n)=>{for(var i,r=n>1?void 0:n?Re(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n?i(t,o,r):i(r))||r);n&&r&&Oe(t,o,r)})([(Ue={args:{0:e=>`${e.data.id}, method=${e.data.method}`}},function(e,t=!1){let o,n,i,r,a=0,c=!1,l=!1,h=!0;null!=e&&({args:o,enter:n,exit:i,prefix:r,logThreshold:a=0,scoped:c=!0,singleLine:l=!1,timed:h=!0}=e),a>0&&(l=!0,h=!0),h&&(c=!0);const d=H.isDebugging,p=t?H.debug:H.log,u=d?"debug":"info";return(e,t,f)=>{let b,g;if("function"==typeof f.value?(b=f.value,g="value"):"function"==typeof f.get&&(b=f.get,g="get"),null==b||null==g)throw new Error("Not supported");const m=!1!==o?function(e){if("function"!=typeof e)throw new Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e);t=t.replace(U,"")||t,t=t.slice(0,t.indexOf(L));let o=t.indexOf(I),n=t.indexOf(N);o=o>=0?o+1:0,n=n>0?n:t.indexOf(D),t=t.slice(o,n),t=`(${t})`;const i=B.exec(t);return null!=i?i[1].split(R).map((e=>e.trim().replace(j,""))):[]}(b):[];f[g]=function(...e){if(!d&&!H.enabled(u))return b.apply(this,e);const f=X(),g=null!=this?this.constructor?.[ne]?.(this,F(this))??F(this):void 0;let v,y=g?c?`[${f.toString(16).padStart(5)}] ${g}.${t}`:`${g}.${t}`:t;null!=r&&(y=r({id:f,instance:this,instanceName:g??"",name:t,prefix:y},...e)),c&&(v={scopeId:f,prefix:y},function(e,t){K.set(e,t)}(f,v));const w=null!=n?n(...e):"";let _;if(!1===o||0===e.length)_="",l||p.call(H,`${y}${w}`);else{let t;_="";let n,i,r,a=-1;for(r of e){if(n=m[++a],t=o?.[a],null!=t){if("boolean"==typeof t)continue;if(_.length>0&&(_+=", "),"string"==typeof t){_+=t;continue}i=String(t(r))}else _.length>0&&(_+=", "),i=H.toLoggable(r);_+=n?`${n}=${i}`:i}l||p.call(H,_?`${y}${w}(${_})`:`${y}${w}`)}if(l||h||null!=i){const t=h?M():void 0,o=e=>{const o=void 0!==t?` [${oe(t)}ms]`:"";l?H.error(e,_?`${y}${w}(${_})`:`${y}${w}`,v?.exitDetails?`failed${v.exitDetails}${o}`:`failed${o}`):H.error(e,y,v?.exitDetails?`failed${v.exitDetails}${o}`:`failed${o}`),c&&Z(f)};let n;try{n=b.apply(this,e)}catch(e){throw o(e),e}const r=e=>{let o,n,r,h;if(null!=t?(o=oe(t),o>q?(n=H.warn,r=` [*${o}ms] (slow)`):(n=p,r=` [${o}ms]`)):(r="",n=p),null!=i)if("function"==typeof i)try{h=i(e)}catch(e){h=`@log.exit error: ${e}`}else!0===i&&(h=`returned ${H.toLoggable(e)}`);else v?.exitFailed?(h=v.exitFailed,n=H.error):h="completed";l?(0===a||o>a)&&n.call(H,_?`${y}${w}(${_}) ${h}${v?.exitDetails||""}${r}`:`${y}${w} ${h}${v?.exitDetails||""}${r}`):n.call(H,_?`${y}(${_}) ${h}${v?.exitDetails||""}${r}`:`${y} ${h}${v?.exitDetails||""}${r}`),c&&Z(f)};return null!=n&&null!=(x=n)&&(x instanceof Promise||"function"==typeof x?.then)?n.then(r,o):r(n),n}var x;return b.apply(this,e)}}}(Ue,!0))],App.prototype,"onMessageReceivedCore",1);var je={408:(e,t)=>{var o=Symbol.for("react.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),l=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),f=Symbol.iterator,b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function v(e,t,o){this.props=e,this.context=t,this.refs=m,this.updater=o||b}function y(){}function w(e,t,o){this.props=e,this.context=t,this.refs=m,this.updater=o||b}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var _=w.prototype=new y;_.constructor=w,g(_,v.prototype),_.isPureReactComponent=!0;var x=Array.isArray,k=Object.prototype.hasOwnProperty,A={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var i,r={},a=null,c=null;if(null!=t)for(i in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,i)&&!C.hasOwnProperty(i)&&(r[i]=t[i]);var l=arguments.length-2;if(1===l)r.children=n;else if(1<l){for(var h=Array(l),d=0;d<l;d++)h[d]=arguments[d+2];r.children=h}if(e&&e.defaultProps)for(i in l=e.defaultProps)void 0===r[i]&&(r[i]=l[i]);return{$$typeof:o,type:e,key:a,ref:c,props:r,_owner:A.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function M(e,t,i,r,a){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var l=!1;if(null===e)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case n:l=!0}}if(l)return a=a(l=e),e=""===r?"."+T(l,0):r,x(a)?(i="",null!=e&&(i=e.replace(P,"$&/")+"/"),M(a,t,i,"",(function(e){return e}))):null!=a&&(E(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,i+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+e)),t.push(a)),1;if(l=0,r=""===r?".":r+":",x(e))for(var h=0;h<e.length;h++){var d=r+T(c=e[h],h);l+=M(c,t,i,d,a)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),h=0;!(c=e.next()).done;)l+=M(c=c.value,t,i,d=r+T(c,h++),a);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function O(e,t,o){if(null==e)return e;var n=[],i=0;return M(e,n,"","",(function(e){return t.call(o,e,i++)})),n}function R(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var D={current:null},L={transition:null},I={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:L,ReactCurrentOwner:A};t.Children={map:O,forEach:function(e,t,o){O(e,(function(){t.apply(this,arguments)}),o)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=i,t.Profiler=a,t.PureComponent=w,t.StrictMode=r,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=g({},e.props),r=e.key,a=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,c=A.current),void 0!==t.key&&(r=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(h in t)k.call(t,h)&&!C.hasOwnProperty(h)&&(i[h]=void 0===t[h]&&void 0!==l?l[h]:t[h])}var h=arguments.length-2;if(1===h)i.children=n;else if(1<h){l=Array(h);for(var d=0;d<h;d++)l[d]=arguments[d+2];i.children=l}return{$$typeof:o,type:e.type,key:r,ref:a,props:i,_owner:c}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:h,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=L.transition;L.transition={};try{e()}finally{L.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return D.current.useCallback(e,t)},t.useContext=function(e){return D.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return D.current.useDeferredValue(e)},t.useEffect=function(e,t){return D.current.useEffect(e,t)},t.useId=function(){return D.current.useId()},t.useImperativeHandle=function(e,t,o){return D.current.useImperativeHandle(e,t,o)},t.useInsertionEffect=function(e,t){return D.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return D.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return D.current.useMemo(e,t)},t.useReducer=function(e,t,o){return D.current.useReducer(e,t,o)},t.useRef=function(e){return D.current.useRef(e)},t.useState=function(e){return D.current.useState(e)},t.useSyncExternalStore=function(e,t,o){return D.current.useSyncExternalStore(e,t,o)},t.useTransition=function(){return D.current.useTransition()},t.version="18.2.0"},294:(e,t,o)=>{e.exports=o(408)}},ze={};function Fe(e){var t=ze[e];if(void 0!==t)return t.exports;var o=ze[e]={exports:{}};return je[e](o,o.exports,Fe),o.exports}Fe.d=(e,t)=>{for(var o in t)Fe.o(t,o)&&!Fe.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},Fe.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var Ve={};(()=>{Fe.d(Ve,{Tn:()=>Se,qE:()=>He,HE:()=>Le,Ct:()=>Be,zx:()=>Ge,M1:()=>Je,sX:()=>bo,D0:()=>yo,fs:()=>vo,Tw:()=>Dt,ud:()=>Bt,wt:()=>Ut,ne:()=>Ht,Ku:()=>Vt,FU:()=>Wt,XO:()=>lo,Ze:()=>ho,K$:()=>uo,cX:()=>Ao,Js:()=>Co,J9:()=>So,si:()=>ro,sg:()=>Po,hW:()=>To,II:()=>Ro,v2:()=>Mo,sN:()=>Do,Lb:()=>Ho,J2:()=>xe,$$:()=>po,Vp:()=>Bo,u:()=>$e,fW:()=>Oo,WV:()=>ae,h4:()=>se,kZ:()=>re});const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new WeakMap;class s{constructor(e,t,n){if(this._$cssResult$=!0,n!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const o=this.t;if(t&&void 0===e){const t=void 0!==o&&1===o.length;t&&(e=n.get(o)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&n.set(o,e))}return e}toString(){return this.cssText}}const i=(e,...t)=>{const n=1===e.length?e[0]:t.reduce(((t,o,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1]),e[0]);return new s(n,e,o)},r=(o,n)=>{if(t)o.adoptedStyleSheets=n.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const t of n){const n=document.createElement("style"),i=e.litNonce;void 0!==i&&n.setAttribute("nonce",i),n.textContent=t.cssText,o.appendChild(n)}},a=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new s("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:c,defineProperty:l,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,f=globalThis,b=f.trustedTypes,g=b?b.emptyScript:"",m=f.reactiveElementPolyfillSupport,v=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},w=(e,t)=>!c(e,t),_={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:w};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),n=this.getPropertyDescriptor(e,o,t);void 0!==n&&l(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){const{get:n,set:i}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return n?.call(this)},set(t){const r=n?.call(this);i.call(this,t),this.requestUpdate(e,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const e=u(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...d(e),...p(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$ES??=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$ES?.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return r(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$ES?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t){const o=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,o);if(void 0!==n&&!0===o.reflect){const i=(void 0!==o.converter?.toAttribute?o.converter:y).toAttribute(t,o.type);this._$Em=e,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(e,t){const o=this.constructor,n=o._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=o.getPropertyOptions(n),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:y;this._$Em=n,this[n]=i.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o,n=!1,i){if(void 0!==e){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??w)(n?i:this[e],t))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$ES?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$ES?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EO(e,this[e]))),this._$ET()}updated(e){}firstUpdated(e){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[v("elementProperties")]=new Map,$[v("finalized")]=new Map,m?.({ReactiveElement:$}),(f.reactiveElementVersions??=[]).push("2.0.0");const x=globalThis,k=x.trustedTypes,A=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,C="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,E="?"+S,P=`<${E}>`,T=document,M=()=>T.createComment(""),O=e=>null===e||"object"!=typeof e&&"function"!=typeof e,R=Array.isArray,D="[ \t\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,N=/>/g,B=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,j=/"/g,H=/^(?:script|style|textarea|title)$/i,z=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),F=z(1),G=(z(2),Symbol.for("lit-noChange")),q=Symbol.for("lit-nothing"),W=new WeakMap,K=T.createTreeWalker(T,129);function Y(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(t):t}class Q{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let i=0,r=0;const a=e.length-1,c=this.parts,[l,h]=((e,t)=>{const o=e.length-1,n=[];let i,r=2===t?"<svg>":"",a=L;for(let t=0;t<o;t++){const o=e[t];let c,l,h=-1,d=0;for(;d<o.length&&(a.lastIndex=d,l=a.exec(o),null!==l);)d=a.lastIndex,a===L?"!--"===l[1]?a=I:void 0!==l[1]?a=N:void 0!==l[2]?(H.test(l[2])&&(i=RegExp("</"+l[2],"g")),a=B):void 0!==l[3]&&(a=B):a===B?">"===l[0]?(a=i??L,h=-1):void 0===l[1]?h=-2:(h=a.lastIndex-l[2].length,c=l[1],a=void 0===l[3]?B:'"'===l[3]?j:U):a===j||a===U?a=B:a===I||a===N?a=L:(a=B,i=void 0);const p=a===B&&e[t+1].startsWith("/>")?" ":"";r+=a===L?o+P:h>=0?(n.push(c),o.slice(0,h)+C+o.slice(h)+S+p):o+S+(-2===h?t:p)}return[Y(e,r+(e[o]||"<?>")+(2===t?"</svg>":"")),n]})(e,t);if(this.el=Q.createElement(l,o),K.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=K.nextNode())&&c.length<a;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(C)){const t=h[r++],o=n.getAttribute(e).split(S),a=/([.?@])?(.*)/.exec(t);c.push({type:1,index:i,name:a[2],strings:o,ctor:"."===a[1]?it:"?"===a[1]?rt:"@"===a[1]?st:nt}),n.removeAttribute(e)}else e.startsWith(S)&&(c.push({type:6,index:i}),n.removeAttribute(e));if(H.test(n.tagName)){const e=n.textContent.split(S),t=e.length-1;if(t>0){n.textContent=k?k.emptyScript:"";for(let o=0;o<t;o++)n.append(e[o],M()),K.nextNode(),c.push({type:2,index:++i});n.append(e[t],M())}}}else if(8===n.nodeType)if(n.data===E)c.push({type:2,index:i});else{let e=-1;for(;-1!==(e=n.data.indexOf(S,e+1));)c.push({type:7,index:i}),e+=S.length-1}i++}}static createElement(e,t){const o=T.createElement("template");return o.innerHTML=e,o}}function Z(e,t,o=e,n){if(t===G)return t;let i=void 0!==n?o._$Co?.[n]:o._$Cl;const r=O(t)?void 0:t._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),void 0===r?i=void 0:(i=new r(e),i._$AT(e,o,n)),void 0!==n?(o._$Co??=[])[n]=i:o._$Cl=i),void 0!==i&&(t=Z(e,i._$AS(e,t.values),i,n)),t}class et{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,n=(e?.creationScope??T).importNode(t,!0);K.currentNode=n;let i=K.nextNode(),r=0,a=0,c=o[0];for(;void 0!==c;){if(r===c.index){let t;2===c.type?t=new ot(i,i.nextSibling,this,e):1===c.type?t=new c.ctor(i,c.name,c.strings,this,e):6===c.type&&(t=new at(i,this,e)),this._$AV.push(t),c=o[++a]}r!==c?.index&&(i=K.nextNode(),r++)}return K.currentNode=T,n}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class ot{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,n){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Z(this,e,t),O(e)?e===q||null==e||""===e?(this._$AH!==q&&this._$AR(),this._$AH=q):e!==this._$AH&&e!==G&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>R(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==q&&O(this._$AH)?this._$AA.nextSibling.data=e:this.$(T.createTextNode(e)),this._$AH=e}g(e){const{values:t,_$litType$:o}=e,n="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=Q.createElement(Y(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new et(n,this),o=e.u(this.options);e.p(t),this.$(o),this._$AH=e}}_$AC(e){let t=W.get(e.strings);return void 0===t&&W.set(e.strings,t=new Q(e)),t}T(e){R(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,n=0;for(const i of e)n===t.length?t.push(o=new ot(this.k(M()),this.k(M()),this,this.options)):o=t[n],o._$AI(i),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class nt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,n,i){this.type=1,this._$AH=q,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=q}_$AI(e,t=this,o,n){const i=this.strings;let r=!1;if(void 0===i)e=Z(this,e,t,0),r=!O(e)||e!==this._$AH&&e!==G,r&&(this._$AH=e);else{const n=e;let a,c;for(e=i[0],a=0;a<i.length-1;a++)c=Z(this,n[o+a],t,a),c===G&&(c=this._$AH[a]),r||=!O(c)||c!==this._$AH[a],c===q?e=q:e!==q&&(e+=(c??"")+i[a+1]),this._$AH[a]=c}r&&!n&&this.j(e)}j(e){e===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class it extends nt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===q?void 0:e}}class rt extends nt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==q)}}class st extends nt{constructor(e,t,o,n,i){super(e,t,o,n,i),this.type=5}_$AI(e,t=this){if((e=Z(this,e,t,0)??q)===G)return;const o=this._$AH,n=e===q&&o!==q||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==q&&(o===q||n);n&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class at{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}}const J=x.litHtmlPolyfillSupport;J?.(Q,ot),(x.litHtmlVersions??=[]).push("3.0.0");class ct extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const n=o?.renderBefore??t;let i=n._$litPart$;if(void 0===i){const e=o?.renderBefore??null;n._$litPart$=i=new ot(t.insertBefore(M(),e),e,void 0,o??{})}return i._$AI(e),i})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return G}}ct._$litElement$=!0,ct.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ct});const X=globalThis.litElementPolyfillSupport;X?.({LitElement:ct}),(globalThis.litElementVersions??=[]).push("4.0.0");const ee={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:w},te=(e=ee,t,o)=>{const{kind:n,metadata:i}=o;let r=globalThis.litPropertyMetadata.get(i);if(void 0===r&&globalThis.litPropertyMetadata.set(i,r=new Map),r.set(o.name,e),"accessor"===n){const{name:n}=o;return{set(o){const i=t.get.call(this);t.set.call(this,o),this.requestUpdate(n,i,e)},init(t){return void 0!==t&&this.C(n,void 0,e),t}}}if("setter"===n){const{name:n}=o;return function(o){const i=this[n];t.call(this,o),this.requestUpdate(n,i,e)}}throw Error("Unsupported decorator location: "+n)};function oe(e){return(t,o)=>"object"==typeof o?te(e,t,o):((e,t,o)=>{const n=t.hasOwnProperty(o);return t.constructor.createProperty(o,n?{...e,wrapped:!0}:e),n?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}const ne=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function ie(e,t){return(o,n,i)=>{const r=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:a}="object"==typeof n?o:i??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return ne(o,n,{get(){if(t){let t=e.call(this);return void 0===t&&(t=r(this),a.call(this,t)),t}return r(this)}})}return ne(o,n,{get(){return r(this)}})}}class gt extends ct{}const re=i`.sr-only,.sr-only-focusable:not(:active):not(:focus){clip:rect(0 0 0 0);clip-path:inset(50%);width:1px;height:1px;overflow:hidden;position:absolute;white-space:nowrap}`,se=i``,ae=i`:host{box-sizing:border-box}:host *,:host ::after,:host ::before{box-sizing:inherit}[hidden]{display:none!important}`,ce=Math.min,le=Math.max,he=Math.round,de=(Math.floor,e=>({x:e,y:e})),pe={left:"right",right:"left",bottom:"top",top:"bottom"},ue={start:"end",end:"start"};function fe(e,t,o){return le(e,ce(t,o))}function be(e,t){return"function"==typeof e?e(t):e}function ge(e){return e.split("-")[0]}function me(e){return e.split("-")[1]}function ve(e){return"x"===e?"y":"x"}function ye(e){return"y"===e?"height":"width"}function we(e){return["top","bottom"].includes(ge(e))?"y":"x"}function _e(e){return ve(we(e))}function ke(e){return e.replace(/start|end/g,(e=>ue[e]))}function Ae(e){return e.replace(/left|right|bottom|top/g,(e=>pe[e]))}function Ce(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function Ee(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Pe(e,t,o){let{reference:n,floating:i}=e;const r=we(t),a=_e(t),c=ye(a),l=ge(t),h="y"===r,d=n.x+n.width/2-i.width/2,p=n.y+n.height/2-i.height/2,u=n[c]/2-i[c]/2;let f;switch(l){case"top":f={x:d,y:n.y-i.height};break;case"bottom":f={x:d,y:n.y+n.height};break;case"right":f={x:n.x+n.width,y:p};break;case"left":f={x:n.x-i.width,y:p};break;default:f={x:n.x,y:n.y}}switch(me(t)){case"start":f[a]-=u*(o&&h?-1:1);break;case"end":f[a]+=u*(o&&h?-1:1)}return f}async function Te(e,t){var o;void 0===t&&(t={});const{x:n,y:i,platform:r,rects:a,elements:c,strategy:l}=e,{boundary:h="clippingAncestors",rootBoundary:d="viewport",elementContext:p="floating",altBoundary:u=!1,padding:f=0}=be(t,e),b=Ce(f),g=c[u?"floating"===p?"reference":"floating":p],m=Ee(await r.getClippingRect({element:null==(o=await(null==r.isElement?void 0:r.isElement(g)))||o?g:g.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(c.floating)),boundary:h,rootBoundary:d,strategy:l})),v="floating"===p?{...a.floating,x:n,y:i}:a.reference,y=await(null==r.getOffsetParent?void 0:r.getOffsetParent(c.floating)),w=await(null==r.isElement?void 0:r.isElement(y))&&await(null==r.getScale?void 0:r.getScale(y))||{x:1,y:1},_=Ee(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:v,offsetParent:y,strategy:l}):v);return{top:(m.top-_.top+b.top)/w.y,bottom:(_.bottom-m.bottom+b.bottom)/w.y,left:(m.left-_.left+b.left)/w.x,right:(_.right-m.right+b.right)/w.x}}const Me=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var o,n;const{placement:i,middlewareData:r,rects:a,initialPlacement:c,platform:l,elements:h}=t,{mainAxis:d=!0,crossAxis:p=!0,fallbackPlacements:u,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:g=!0,...m}=be(e,t);if(null!=(o=r.arrow)&&o.alignmentOffset)return{};const v=ge(i),y=ge(c)===c,w=await(null==l.isRTL?void 0:l.isRTL(h.floating)),_=u||(y||!g?[Ae(c)]:function(e){const t=Ae(e);return[ke(e),t,ke(t)]}(c));u||"none"===b||_.push(...function(e,t,o,n){const i=me(e);let r=function(e,t,o){const n=["left","right"],i=["right","left"],r=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return o?t?i:n:t?n:i;case"left":case"right":return t?r:a;default:return[]}}(ge(e),"start"===o,n);return i&&(r=r.map((e=>e+"-"+i)),t&&(r=r.concat(r.map(ke)))),r}(c,g,b,w));const x=[c,..._],k=await Te(t,m),A=[];let C=(null==(n=r.flip)?void 0:n.overflows)||[];if(d&&A.push(k[v]),p){const e=function(e,t,o){void 0===o&&(o=!1);const n=me(e),i=_e(e),r=ye(i);let a="x"===i?n===(o?"end":"start")?"right":"left":"start"===n?"bottom":"top";return t.reference[r]>t.floating[r]&&(a=Ae(a)),[a,Ae(a)]}(i,a,w);A.push(k[e[0]],k[e[1]])}if(C=[...C,{placement:i,overflows:A}],!A.every((e=>e<=0))){var S,E;const e=((null==(S=r.flip)?void 0:S.index)||0)+1,t=x[e];if(t)return{data:{index:e,overflows:C},reset:{placement:t}};let o=null==(E=C.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:E.placement;if(!o)switch(f){case"bestFit":{var P;const e=null==(P=C.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:P[0];e&&(o=e);break}case"initialPlacement":o=c}if(i!==o)return{reset:{placement:o}}}return{}}}},Oe=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){const{x:o,y:n}=t,i=await async function(e,t){const{placement:o,platform:n,elements:i}=e,r=await(null==n.isRTL?void 0:n.isRTL(i.floating)),a=ge(o),c=me(o),l="y"===we(o),h=["left","top"].includes(a)?-1:1,d=r&&l?-1:1,p=be(t,e);let{mainAxis:u,crossAxis:f,alignmentAxis:b}="number"==typeof p?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return c&&"number"==typeof b&&(f="end"===c?-1*b:b),l?{x:f*d,y:u*h}:{x:u*h,y:f*d}}(t,e);return{x:o+i.x,y:n+i.y,data:i}}}};function Re(e){return Ne(e)?(e.nodeName||"").toLowerCase():"#document"}function De(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function Ie(e){var t;return null==(t=(Ne(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function Ne(e){return e instanceof Node||e instanceof De(e).Node}function Ue(e){return e instanceof Element||e instanceof De(e).Element}function je(e){return e instanceof HTMLElement||e instanceof De(e).HTMLElement}function ze(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof De(e).ShadowRoot)}function qe(e){const{overflow:t,overflowX:o,overflowY:n,display:i}=Xe(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+o)&&!["inline","contents"].includes(i)}function We(e){return["table","td","th"].includes(Re(e))}function Ke(e){const t=Ye(),o=Xe(e);return"none"!==o.transform||"none"!==o.perspective||!!o.containerType&&"normal"!==o.containerType||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||["transform","perspective","filter"].some((e=>(o.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(o.contain||"").includes(e)))}function Ye(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Ze(e){return["html","body","#document"].includes(Re(e))}function Xe(e){return De(e).getComputedStyle(e)}function Qe(e){return Ue(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function tt(e){if("html"===Re(e))return e;const t=e.assignedSlot||e.parentNode||ze(e)&&e.host||Ie(e);return ze(t)?t.host:t}function lt(e){const t=tt(e);return Ze(t)?e.ownerDocument?e.ownerDocument.body:e.body:je(t)&&qe(t)?t:lt(t)}function ht(e,t,o){var n;void 0===t&&(t=[]),void 0===o&&(o=!0);const i=lt(e),r=i===(null==(n=e.ownerDocument)?void 0:n.body),a=De(i);return r?t.concat(a,a.visualViewport||[],qe(i)?i:[],a.frameElement&&o?ht(a.frameElement):[]):t.concat(i,ht(i,[],o))}function dt(e){const t=Xe(e);let o=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const i=je(e),r=i?e.offsetWidth:o,a=i?e.offsetHeight:n,c=he(o)!==r||he(n)!==a;return c&&(o=r,n=a),{width:o,height:n,$:c}}function pt(e){return Ue(e)?e:e.contextElement}function ut(e){const t=pt(e);if(!je(t))return de(1);const o=t.getBoundingClientRect(),{width:n,height:i,$:r}=dt(t);let a=(r?he(o.width):o.width)/n,c=(r?he(o.height):o.height)/i;return a&&Number.isFinite(a)||(a=1),c&&Number.isFinite(c)||(c=1),{x:a,y:c}}const ft=de(0);function bt(e){const t=De(e);return Ye()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:ft}function mt(e,t,o,n){void 0===t&&(t=!1),void 0===o&&(o=!1);const i=e.getBoundingClientRect(),r=pt(e);let a=de(1);t&&(n?Ue(n)&&(a=ut(n)):a=ut(e));const c=function(e,t,o){return void 0===t&&(t=!1),!(!o||t&&o!==De(e))&&t}(r,o,n)?bt(r):de(0);let l=(i.left+c.x)/a.x,h=(i.top+c.y)/a.y,d=i.width/a.x,p=i.height/a.y;if(r){const e=De(r),t=n&&Ue(n)?De(n):n;let o=e.frameElement;for(;o&&n&&t!==e;){const e=ut(o),t=o.getBoundingClientRect(),n=Xe(o),i=t.left+(o.clientLeft+parseFloat(n.paddingLeft))*e.x,r=t.top+(o.clientTop+parseFloat(n.paddingTop))*e.y;l*=e.x,h*=e.y,d*=e.x,p*=e.y,l+=i,h+=r,o=De(o).frameElement}}return Ee({width:d,height:p,x:l,y:h})}function vt(e){return mt(Ie(e)).left+Qe(e).scrollLeft}function yt(e,t,o){let n;if("viewport"===t)n=function(e,t){const o=De(e),n=Ie(e),i=o.visualViewport;let r=n.clientWidth,a=n.clientHeight,c=0,l=0;if(i){r=i.width,a=i.height;const e=Ye();(!e||e&&"fixed"===t)&&(c=i.offsetLeft,l=i.offsetTop)}return{width:r,height:a,x:c,y:l}}(e,o);else if("document"===t)n=function(e){const t=Ie(e),o=Qe(e),n=e.ownerDocument.body,i=le(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),r=le(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let a=-o.scrollLeft+vt(e);const c=-o.scrollTop;return"rtl"===Xe(n).direction&&(a+=le(t.clientWidth,n.clientWidth)-i),{width:i,height:r,x:a,y:c}}(Ie(e));else if(Ue(t))n=function(e,t){const o=mt(e,!0,"fixed"===t),n=o.top+e.clientTop,i=o.left+e.clientLeft,r=je(e)?ut(e):de(1);return{width:e.clientWidth*r.x,height:e.clientHeight*r.y,x:i*r.x,y:n*r.y}}(t,o);else{const o=bt(e);n={...t,x:t.x-o.x,y:t.y-o.y}}return Ee(n)}function wt(e,t){const o=tt(e);return!(o===t||!Ue(o)||Ze(o))&&("fixed"===Xe(o).position||wt(o,t))}function _t(e,t,o){const n=je(t),i=Ie(t),r="fixed"===o,a=mt(e,!0,r,t);let c={scrollLeft:0,scrollTop:0};const l=de(0);if(n||!n&&!r)if(("body"!==Re(t)||qe(i))&&(c=Qe(t)),n){const e=mt(t,!0,r,t);l.x=e.x+t.clientLeft,l.y=e.y+t.clientTop}else i&&(l.x=vt(i));return{x:a.left+c.scrollLeft-l.x,y:a.top+c.scrollTop-l.y,width:a.width,height:a.height}}function xt(e,t){return je(e)&&"fixed"!==Xe(e).position?t?t(e):e.offsetParent:null}function kt(e,t){const o=De(e);if(!je(e))return o;let n=xt(e,t);for(;n&&We(n)&&"static"===Xe(n).position;)n=xt(n,t);return n&&("html"===Re(n)||"body"===Re(n)&&"static"===Xe(n).position&&!Ke(n))?o:n||function(e){let t=tt(e);for(;je(t)&&!Ze(t);){if(Ke(t))return t;t=tt(t)}return null}(e)||o}const $t={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:o,strategy:n}=e;const i=je(o),r=Ie(o);if(o===r)return t;let a={scrollLeft:0,scrollTop:0},c=de(1);const l=de(0);if((i||!i&&"fixed"!==n)&&(("body"!==Re(o)||qe(r))&&(a=Qe(o)),je(o))){const e=mt(o);c=ut(o),l.x=e.x+o.clientLeft,l.y=e.y+o.clientTop}return{width:t.width*c.x,height:t.height*c.y,x:t.x*c.x-a.scrollLeft*c.x+l.x,y:t.y*c.y-a.scrollTop*c.y+l.y}},getDocumentElement:Ie,getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:n,strategy:i}=e;const r=[..."clippingAncestors"===o?function(e,t){const o=t.get(e);if(o)return o;let n=ht(e,[],!1).filter((e=>Ue(e)&&"body"!==Re(e))),i=null;const r="fixed"===Xe(e).position;let a=r?tt(e):e;for(;Ue(a)&&!Ze(a);){const t=Xe(a),o=Ke(a);o||"fixed"!==t.position||(i=null),(r?!o&&!i:!o&&"static"===t.position&&i&&["absolute","fixed"].includes(i.position)||qe(a)&&!o&&wt(e,a))?n=n.filter((e=>e!==a)):i=t,a=tt(a)}return t.set(e,n),n}(t,this._c):[].concat(o),n],a=r[0],c=r.reduce(((e,o)=>{const n=yt(t,o,i);return e.top=le(n.top,e.top),e.right=ce(n.right,e.right),e.bottom=ce(n.bottom,e.bottom),e.left=le(n.left,e.left),e}),yt(t,a,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:kt,getElementRects:async function(e){let{reference:t,floating:o,strategy:n}=e;const i=this.getOffsetParent||kt,r=this.getDimensions;return{reference:_t(t,await i(o),n),floating:{x:0,y:0,...await r(o)}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){return dt(e)},getScale:ut,isElement:Ue,isRTL:function(e){return"rtl"===Xe(e).direction}},At=i`:host{display:contents;position:relative}.popover{display:block;left:0;top:0;position:absolute;z-index:var(--gk-popover-z-index,100)}.arrow{background:var(--gk-tooltip-background-color,#000);height:8px;position:absolute;transform:rotate(45deg);width:8px}`;var Ct=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};class xe extends gt{constructor(){super(...arguments),this.arrow=!1,this.hover=!1,this.placement="top",this.popoverId=`popover_${Math.random().toString(16).slice(2)}`,this.srVisible=!1,this.open=!1,this.isTrackingOutside=!1}static{this.styles=[ae,re,At]}static{this.elementName="gk-popover"}firstUpdated(e){const t=this.triggerSlot.assignedElements()[0];this.triggerEl=t instanceof HTMLSlotElement?t.assignedElements({flatten:!0})[0]:t}async connectedCallback(){super.connectedCallback(),await this.updateComplete,await this.updateToggle(),null==this._toggleHandler&&(this._toggleHandler=this.handleToggle.bind(this)),this.hover?(this.triggerEl?.addEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.addEventListener("mouseout",this._toggleHandler,!1)):this.triggerEl?.addEventListener("focus",this._toggleHandler,!1)}disconnectedCallback(){super.disconnectedCallback(),null!=this._toggleHandler&&(this.triggerEl?.removeEventListener("focus",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseout",this._toggleHandler,!1),this._toggleHandler=void 0),this.disposeTrackOutside()}handleToggle(e){e.composedPath().includes(this.triggerEl)&&(this.open=!this.open,this.updateToggle())}async updateToggle(){this.open?(await this.showPopover(),null!=this.popoverEl&&window.requestAnimationFrame((()=>{this.popoverEl?.focus()}))):this.hidePopover()}handleDocumentEvent(e){!1!==this.open&&(e.composedPath().includes(this)||this.hidePopover())}trackOutside(){this.hover||this.isTrackingOutside||!this.open||(this.isTrackingOutside=!0,null==this._documentEventHandler&&(this._documentEventHandler=this.handleDocumentEvent.bind(this)),document.addEventListener("click",this._documentEventHandler,!1),document.addEventListener("focusin",this._documentEventHandler,!1))}disposeTrackOutside(){this.isTrackingOutside&&(this.isTrackingOutside=!1,null!=this._documentEventHandler&&(document.removeEventListener("click",this._documentEventHandler,!1),window.removeEventListener("focusin",this._documentEventHandler,!1),this._documentEventHandler=void 0))}async updatePositioning(){const e=[Oe(6),Me(),(t={padding:5},void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:i}=e,{mainAxis:r=!0,crossAxis:a=!1,limiter:c={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...l}=be(t,e),h={x:o,y:n},d=await Te(e,l),p=we(ge(i)),u=ve(p);let f=h[u],b=h[p];if(r){const e="y"===u?"bottom":"right";f=fe(f+d["y"===u?"top":"left"],f,f-d[e])}if(a){const e="y"===p?"bottom":"right";b=fe(b+d["y"===p?"top":"left"],b,b-d[e])}const g=c.fn({...e,[u]:f,[p]:b});return{...g,data:{x:g.x-o,y:g.y-n}}}})];var t;this.arrowEl&&e.push((e=>({name:"arrow",options:e,async fn(t){const{x:o,y:n,placement:i,rects:r,platform:a,elements:c,middlewareData:l}=t,{element:h,padding:d=0}=be(e,t)||{};if(null==h)return{};const p=Ce(d),u={x:o,y:n},f=_e(i),b=ye(f),g=await a.getDimensions(h),m="y"===f,v=m?"top":"left",y=m?"bottom":"right",w=m?"clientHeight":"clientWidth",_=r.reference[b]+r.reference[f]-u[f]-r.floating[b],x=u[f]-r.reference[f],k=await(null==a.getOffsetParent?void 0:a.getOffsetParent(h));let A=k?k[w]:0;A&&await(null==a.isElement?void 0:a.isElement(k))||(A=c.floating[w]||r.floating[b]);const C=_/2-x/2,S=A/2-g[b]/2-1,E=ce(p[v],S),P=ce(p[y],S),T=E,M=A-g[b]-P,O=A/2-g[b]/2+C,R=fe(T,O,M),D=!l.arrow&&null!=me(i)&&O!=R&&r.reference[b]/2-(O<T?E:P)-g[b]/2<0,L=D?O<T?O-T:O-M:0;return{[f]:u[f]+L,data:{[f]:R,centerOffset:O-R-L,...D&&{alignmentOffset:L}},reset:D}}}))({element:this.arrowEl})),await((e,t,o)=>{const n=new Map,i={platform:$t,...o},r={...i.platform,_c:n};return(async(e,t,o)=>{const{placement:n="bottom",strategy:i="absolute",middleware:r=[],platform:a}=o,c=r.filter(Boolean),l=await(null==a.isRTL?void 0:a.isRTL(t));let h=await a.getElementRects({reference:e,floating:t,strategy:i}),{x:d,y:p}=Pe(h,n,l),u=n,f={},b=0;for(let o=0;o<c.length;o++){const{name:r,fn:g}=c[o],{x:m,y:v,data:y,reset:w}=await g({x:d,y:p,initialPlacement:n,placement:u,strategy:i,middlewareData:f,rects:h,platform:a,elements:{reference:e,floating:t}});d=null!=m?m:d,p=null!=v?v:p,f={...f,[r]:{...f[r],...y}},w&&b<=50&&(b++,"object"==typeof w&&(w.placement&&(u=w.placement),w.rects&&(h=!0===w.rects?await a.getElementRects({reference:e,floating:t,strategy:i}):w.rects),({x:d,y:p}=Pe(h,u,l))),o=-1)}return{x:d,y:p,placement:u,strategy:i,middlewareData:f}})(e,t,{...i,platform:r})})(this.triggerEl,this.popoverEl,{middleware:e,placement:this.placement}).then((({x:e,y:t,placement:o,middlewareData:n})=>{if(Object.assign(this.popoverEl.style,{left:`${e}px`,top:`${t}px`}),this.arrowEl){const e=n.arrow?.x,t=n.arrow?.y,i={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];Object.assign(this.arrowEl.style,{left:null!=e?`${e}px`:"",top:null!=t?`${t}px`:"",right:"",bottom:"",[i]:"-4px"})}}))}async showPopover(){this.open=!0,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="true"),this.srVisible?this.popoverEl.classList.remove("sr-only"):this.popoverEl.removeAttribute("hidden"),await this.updatePositioning(),this.trackOutside()}hidePopover(){this.open=!1,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="false"),this.srVisible?this.popoverEl.classList.add("sr-only"):this.popoverEl.setAttribute("hidden","true"),this.disposeTrackOutside()}get arrowMarkup(){return this.arrow?F`<div part="arrow" class="arrow"></div>`:""}render(){return F`<slot name="trigger" aria-describedby="${this.popoverId}"></slot><div class="popover ${this.srVisible&&"sr-only"}" ?hidden="${!this.srVisible}" id="${this.popoverId}" part="popover" role="tooltip"><slot></slot>${this.arrowMarkup}</div>`}}Ct([oe({type:Boolean})],xe.prototype,"arrow",void 0),Ct([oe({type:Boolean})],xe.prototype,"hover",void 0),Ct([oe()],xe.prototype,"placement",void 0),Ct([oe({attribute:"popover-id"})],xe.prototype,"popoverId",void 0),Ct([oe({attribute:"sr-visible",type:Boolean})],xe.prototype,"srVisible",void 0),Ct([ie('slot[name="trigger"]')],xe.prototype,"triggerSlot",void 0),Ct([ie(".popover")],xe.prototype,"popoverEl",void 0),Ct([ie(".arrow")],xe.prototype,"arrowEl",void 0),Ct([oe({state:!0,attribute:!1})],xe.prototype,"open",void 0);const St=i`gk-popover::part(popover){background:var(--gk-tooltip-background-color,#000);border-radius:var(--gk-tooltip-border-radius,0);color:var(--gk-tooltip-font-color,#fff);font-size:var(--gk-tooltip-font-size, 14px);font-weight:var(--gk-tooltip-font-weight,bold);line-height:var(--gk-tooltip-line-height, 14px);max-width:var(--gk-tooltip-max-width,none);padding:var(--gk-tooltip-padding,10px 16px);text-align:var(--gk-tooltip-text-align,left);width:max-content}`;class $e extends gt{constructor(){super(...arguments),this.srVisible=!1}static{this.styles=[ae,re,St]}static{this.elementName="gk-tooltip"}static{this.components=[xe]}render(){return F`<gk-popover arrow hover ?sr-visible="${this.srVisible}" part="base"><slot name="trigger" slot="trigger"></slot><slot></slot></gk-popover>`}}!function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);r>3&&a&&Object.defineProperty(t,o,a)}([oe({attribute:"sr-visible",type:Boolean})],$e.prototype,"srVisible",void 0);const Et=i`:host{display:inline-block;vertical-align:middle;font-weight:700}.deletions{color:var(--gk-deletions-color,#fe5955);padding-left:4px}.additions{color:var(--gk-additions-color,#74b666);padding-right:4px}`;class Se extends gt{constructor(){super(...arguments),this.tooltipText="Lines Added/Removed",this.tooltipId=`additions-deletions_${Math.random().toString(16).slice(2)}`}static{this.styles=Et}static{this.elementName="gk-additions-deletions"}static{this.components=[$e]}render(){return F`<gk-tooltip sr-visible tooltip-id="${this.tooltipId}"><span slot="trigger" part="base"><span class="additions">+<slot name="additions"></slot></span>/ <span class="deletions">−<slot name="deletions"></slot></span></span><span>${this.tooltipText}</span></gk-tooltip>`}}!function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);r>3&&a&&Object.defineProperty(t,o,a)}([oe({attribute:"tooltip-text"})],Se.prototype,"tooltipText",void 0);const Pt=new Set(["children","localName","ref","style","className"]),Tt=new WeakMap,Mt=(e,t,o,n,i)=>{const r=i?.[t];void 0===r||o===n?(e[t]=o,null==o&&t in HTMLElement.prototype&&e.removeAttribute(t)):((e,t,o)=>{let n=Tt.get(e);void 0===n&&Tt.set(e,n=new Map);let i=n.get(t);void 0!==o?void 0===i?(n.set(t,i={handleEvent:o}),e.addEventListener(t,i)):i.handleEvent=o:void 0!==i&&(n.delete(t),e.removeEventListener(t,i))})(e,r,o)},Ot=({react:e,tagName:t,elementClass:o,events:n,displayName:i})=>{const r=new Set(Object.keys(n??{})),a=e.forwardRef(((i,a)=>{const c=e.useRef(null),l=e.useRef(null),h={},d={};for(const[e,t]of Object.entries(i))Pt.has(e)?h["className"===e?"class":e]=t:r.has(e)||e in o.prototype?d[e]=t:h[e]=t;return e.useLayoutEffect((()=>{if(null!==l.current){for(const e in d)Mt(l.current,e,i[e],c.current?c.current[e]:void 0,n);c.current=i}})),e.useLayoutEffect((()=>{l.current?.removeAttribute("defer-hydration")}),[]),h.suppressHydrationWarning=!0,e.createElement(t,{...h,ref:e=>{l.current=e,"function"==typeof a?a(e):null!==a&&(a.current=e)}})}));return a.displayName=i??o.name,a};var Rt=Fe(294);const Dt=Ot({react:Rt,tagName:Se.elementName,elementClass:Se}),Lt=i`:host{display:inline-block}.avatar{vertical-align:middle;background-color:var(--gk-avatar-background-color,#e0e0e0);width:var(--gk-avatar-size,30px);aspect-ratio:1/1;border-radius:50%;transition:.2s}.avatar.is-offline{border:2px solid var(--gk-avatar-offline-outline-color,#3d424d)}.avatar.is-online{border:2px solid var(--gk-avatar-online-outline-color,#60b864)}.avatar--image{display:inline-block;object-fit:cover;object-position:50% 50%}.avatar--content{display:inline-flex;justify-content:center;align-items:center;font-size:var(--gk-avatar-font-size, 11px);line-height:var(--gk-avatar-size, 30px);text-align:center}.avatar:hover{transform:scale(1.2)}`,It=i`:host{display:inline-block}.avatar-group{display:inline-flex;flex-direction:row;justify-content:center;align-items:center}.avatar-group::slotted(:not(:first-child)){margin-left:calc(var(--gk-avatar-size,2.4rem) * -.2)}.avatar-group:focus-within::slotted(*),.avatar-group:hover::slotted(*){opacity:.5}.avatar-group:focus-within::slotted(:focus),.avatar-group:hover::slotted(:hover){opacity:1;z-index:var(--gk-avatar-selected-zindex,1)!important}`;var Nt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};class He extends gt{static{this.styles=[ae,Lt]}static{this.elementName="gk-avatar"}get indicatorClass(){return this.indicator?`is-${this.indicator}`:""}render(){return this.src?F`<img src="${this.src}" class="avatar avatar--image${this.indicatorClass}" part="base" alt="">`:F`<slot class="avatar avatar--content${this.indicatorClass}" part="base"></slot>`}}Nt([oe()],He.prototype,"src",void 0),Nt([oe()],He.prototype,"indicator",void 0);class Le extends gt{static{this.elementName="gk-avatar-group"}static{this.styles=[ae,It]}render(){return F`<slot class="avatar-group" part="base"></slot>`}}const Bt=Ot({react:Rt,tagName:He.elementName,elementClass:He}),Ut=Ot({react:Rt,tagName:Le.elementName,elementClass:Le}),jt=i`.badge{border-radius:var(--gk-badge-border-radius,22px);display:inline-block;font-size:var(--gk-badge-font-size, 12px)}.badge--outline{border-color:var(--gk-badge-outline-color,#ffffff99);border-style:solid;border-width:var(--gk-badge-outline-border-width,1px);color:var(--gk-badge-outline-color,#ffffff99);padding:var(--gk-badge-outline-padding,0 8px)}.badge--filled{background-color:var(--gk-badge-filled-background-color,#2b2f36);color:var(--gk-badge-filled-color,#ffffff99);padding:var(--gk-badge-filled-padding,2px 6px)}`;class Be extends gt{constructor(){super(...arguments),this.variant="outline"}static{this.styles=jt}static{this.elementName="gk-badge"}render(){return F`<slot class="${`badge badge--${this.variant}`}" part="base"></slot>`}}!function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);r>3&&a&&Object.defineProperty(t,o,a)}([oe()],Be.prototype,"variant",void 0);const Ht=Ot({react:Rt,tagName:Be.elementName,elementClass:Be}),zt=i`:host{display:inline-block}button{appearance:none;border:none;padding:8px 12px}button:hover{cursor:pointer}button:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.button--ghost{background:0 0;color:var(--gk-button-ghost-color,#fff)}.button--ghost:focus,.button--ghost:hover{text-decoration:underline}.button--ghost:active{color:var(--gk-button-ghost-color-active,#adb8c2)}.button--ghost:disabled,.button--ghost:disabled:active,.button--ghost:disabled:focus,.button--ghost:disabled:hover{color:var(--gk-button-ghost-color-disabled,#ffffff60);cursor:default;text-decoration:none}.button--outline{background:0 0;border-radius:2px;border-style:solid;border-width:var(--gk-button-outline-border-width,1px);color:var(--gk-button-outline-color,#fff)}.button--outline:focus,.button--outline:hover{background-color:#ffffff50}.button--outline:active{background-color:var(--gk-button-outline-color-active,#adb8c2)}.button--outline:disabled,.button--outline:disabled:active,.button--outline:disabled:focus,.button--outline:disabled:hover{background-color:transparent;border-color:var(--gk-button-outline-color-disabled,#ffffff60);color:var(--gk-button-outline-color-disabled,#ffffff60);cursor:default;text-decoration:none}`;var Ft=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};class Ge extends gt{constructor(){super(...arguments),this.disabled=!1,this.type="button",this.variant="ghost"}static{this.styles=zt}static{this.elementName="gk-button"}get allClasses(){const e=["button"];return e.push(`button--${this.variant}`),e.join(" ")}_handleClick(e){e.stopPropagation(),this.dispatchEvent(new Event("click"))}render(){return F`<button class="${this.allClasses}" @click="${this._handleClick}" ?disabled="${this.disabled}" part="base" type="${this.type}"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></button>`}}Ft([oe({type:Boolean,reflect:!0})],Ge.prototype,"disabled",void 0),Ft([oe({reflect:!0})],Ge.prototype,"type",void 0),Ft([oe()],Ge.prototype,"variant",void 0);const Vt=Ot({react:Rt,tagName:Ge.elementName,elementClass:Ge,events:{onClick:"click"}}),Gt=i`:host{display:inline-block}.complexity-indicator{display:inline-flex}.complexity-indicator__box{display:block;height:var(--gk-complexity-indicator-box-size,8px);width:var(--gk-complexity-indicator-box-size,8px)}.complexity-indicator__box:not(:last-of-type){margin-right:var(--gk-complexity-indicator-space-between,2px)}.complexity-indicator--level-1 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-1,#5cb85c)}.complexity-indicator--level-2 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-2,#4d88ff)}.complexity-indicator--level-3 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-3,#de9b43)}.complexity-indicator--level-4 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-4,#d9413d)}`;var qt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};class Je extends gt{constructor(){super(...arguments),this.level=1,this.label="Complexity of pull request"}static{this.styles=[ae,re,Gt]}static{this.elementName="gk-complexity-indicator"}render(){const e=[];for(let t=0;t<this.level;t++)e.push(t);return F`<div class="complexity-indicator complexity-indicator--level-${this.level}" part="base"><span class="sr-only">${this.label}</span> ${e.map((()=>F`<span class="complexity-indicator__box"></span>`))}</div>`}}qt([oe({type:Number})],Je.prototype,"level",void 0),qt([oe()],Je.prototype,"label",void 0);const Wt=Ot({react:Rt,tagName:Je.elementName,elementClass:Je}),Kt=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,Yt=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,Zt=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let Jt;const Xt=new Map;let Qt,eo,to;new Map;const oo=["th","st","nd","rd"];function no(e){const t=e%100;return`${e}${oo[(t-20)%10]??oo[t]??oo[0]}`}var io=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};class po extends gt{constructor(){super(...arguments),this.date=new Date,this.format="MMMM Do, YYYY h:mma"}static{this.styles=[ae]}static{this.elementName="gk-date-from"}static{this.components=[$e]}get relativeTime(){return function(e,t){const o=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,t,n,i]of Zt){const r=Math.abs(o);if(r>=t||1e3===t)return null==Jt&&(null!=to?Jt=to.resolvedOptions().locale:null!=eo?Jt=eo.resolvedOptions().locale:(to=new Intl.RelativeTimeFormat(Qt,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),Jt=to.resolvedOptions().locale)),"en"===Jt||Jt?.startsWith("en-")?`${Math.round(r/n)}${i}`:(null==to&&(to=new Intl.RelativeTimeFormat(Qt,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),to.format(Math.round(o/n),e))}return""}(this.date)}get isDate(){return this.date&&!isNaN(this.date.getMilliseconds())}render(){if(this.isDate)return F`<gk-tooltip><time datetime="${this.date}" part="base" slot="trigger">${this.relativeTime}</time><span>${function(e,t,o,n=!0){const i=`${o??""}:${t=t??void 0}`;let r=Xt.get(i);if(null==r){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=Yt.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}const o={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll(Kt))if(null!=t)for(const e in t){const n=t[e];if(null!=n)switch(e){case"year":o.year=4===n.length?"numeric":"2-digit";break;case"month":switch(n.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":o.day="DD"===n?"2-digit":"numeric";break;case"weekday":switch(n.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===n.length?"2-digit":"numeric",o.hour12="hh"===n||"h"===n;break;case"minute":o.minute=2===n.length?"2-digit":"numeric";break;case"second":o.second=2===n.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===n.length?"long":"short"}}return o}(t);let a;a=null==o?Qt:"system"===o?void 0:[o],r=new Intl.DateTimeFormat(a,e),n&&Xt.set(i,r)}if(null==t||Yt.test(t))return r.format(e);function a(e){const t=`${o??""}:time:${e}`;let i=Xt.get(t);if(null==i){const r={localeMatcher:"best fit",timeStyle:e};let a;a=null==o?Qt:"system"===o?void 0:[o],i=new Intl.DateTimeFormat(a,r),n&&Xt.set(t,i)}return i}const c=r.formatToParts(e);return t.replace(Kt,((t,o,n,i,r,l,h,d,p,u,f,b,g,m,v)=>{if(null!=o)return o.substring(1,o.length-1);for(const t in v){const o=v[t];if(null==o)continue;const n=c.find((e=>e.type===t));if("Do"===o&&"day"===n?.type)return no(Number(n.value));if("a"===o&&"dayPeriod"===n?.type){const t=a("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return`${(t??n)?.value??""}`}return n?.value??""}return""}))}(this.date,this.format??"MMMM Do, YYYY h:mma")}</span></gk-tooltip>`}}io([oe({converter:(e=>({toAttribute:t=>t.toLocaleDateString(e),fromAttribute:e=>new Date(e)}))(navigator.language),reflect:!0})],po.prototype,"date",void 0),io([oe()],po.prototype,"format",void 0);const ro=Ot({react:Rt,tagName:po.elementName,elementClass:po}),so=i`.row--heading{text-transform:uppercase;color:var(--gk-text-secondary-color,rgba(255,255,255,.6))}.content::slotted(:not(:first-child)){border-top:1px solid var(--gk-divider-color,rgba(255,255,255,.04))}`,ao=i`:host{display:contents}.row{display:flex;flex-direction:row;padding:var(--gk-focus-row-padding,8px)}.row:not(.row--heading):focus-within,.row:not(.row--heading):hover{background-color:var(--gk-focus-background-color-hover,rgba(255,255,255,.04))}.row:not(.row--heading):focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.row__key{flex:none;display:block;width:var(--gk-focus-row-key-min-width,64px)}@media (max-width:720px){.row__key{width:var(--gk-focus-row-key-min-width-screen-sm,32px)}}.row__content{flex:1;display:block}.row__pin{display:block;min-width:var(--gk-focus-row-pin-min-width,35px)}.row__date{display:block;min-width:var(--gk-focus-row-date-min-width,48px)}@media (max-width:720px){.row--heading .item__date,.row--heading .item__secondary{display:none}}`,co=i`.item{display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item{flex-direction:column;align-items:stretch}}.item__primary{flex:1;display:flex;flex-direction:row;gap:12px}.item__type{flex:none}@media (max-width:720px){.item__type{order:-1}}.item__content{display:flex;flex-direction:column;gap:6px;min-width:var(--gk-focus-item-content-min-width,92px)}@media (max-width:720px){.item__content{align-items:stretch}}.item__content>p{margin:0}.item__secondary{flex:none;display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item__secondary{flex-wrap:wrap;padding-left:36px}}.item__people{display:block;min-width:var(--gk-focus-item-people-min-width,92px)}@media (max-width:720px){.item__people{min-width:0}}.item__repo{display:block;width:var(--gk-focus-item-repo-min-width,150px)}@media (max-width:720px){.item__repo{width:max-content}}@media (max-width:720px){.item__date{align-self:flex-start;min-width:0}}.item__actions{display:block;min-width:var(--gk-focus-item-actions-min-width,70px)}@media (max-width:720px){.item__actions{width:100%}}`;class yo extends gt{static{this.styles=[ae,co]}static{this.elementName="gk-focus-item"}render(){return F`<div class="item"><div class="item__primary"><div class="item__content" part="base"><slot></slot></div></div><div class="item__secondary"><slot name="people" class="item__people" part="people"></slot><slot name="repo" class="item__repo" part="repo"></slot><slot name="actions" class="item__actions" part="actions"></slot></div></div>`}}class vo extends gt{static{this.styles=[ae,ao]}static{this.elementName="gk-focus-row"}render(){return F`<div class="row" part="row"><slot name="pin" class="row__pin" part="pin"></slot><div class="row__date" part="date"><slot name="date"></slot></div><div class="row__key" part="key"><slot name="key"></slot></div><slot class="row__content"></slot></div>`}}class bo extends gt{static{this.styles=[ae,ao,co,so]}static{this.elementName="gk-focus-container"}render(){return F`<div class="row row--heading"><slot name="pin" class="row__pin" part="pin">Pinned</slot><slot name="date" class="row__date" part="date">Updated</slot><slot name="key" class="row__key" part="key">Key</slot><div class="row__content"><div class="item"><div class="item__primary"><slot name="item" class="item__content" part="item">Item</slot></div><div class="item__secondary"><slot name="people" class="item__people" part="people">People</slot><slot name="repo" class="item__repo" part="repo">Repo</slot><slot name="actions" class="item__actions" part="actions">Action</slot></div></div></div></div><slot class="content"></slot>`}}const lo=Ot({react:Rt,tagName:yo.elementName,elementClass:yo}),ho=Ot({react:Rt,tagName:vo.elementName,elementClass:vo}),uo=Ot({react:Rt,tagName:bo.elementName,elementClass:bo});class $o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const fo=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends $o{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.st?.has(e)&&this.it.add(e);return this.render(t)}const o=e.element.classList;for(const e of this.it)e in t||(o.remove(e),this.it.delete(e));for(const e in t){const n=!!t[e];n===this.it.has(e)||this.st?.has(e)||(n?(o.add(e),this.it.add(e)):(o.remove(e),this.it.delete(e)))}return G}}),go=e=>e??q,mo=i`:host{display:block}.input-container{background-color:var(--gk-input-background-color,#000);border:1px solid var(--gk-input-border-color,#ffffff14);border-radius:var(--gk-input-border-radius,2px);color:var(--gk-input-color,#ffffff99);cursor:text;display:inline-flex;justify-content:start;padding:var(--gk-input-padding,10px);vertical-align:middle;width:100%}.input{appearance:none;background:inherit;border:none;box-shadow:none;color:inherit;flex:1 1 auto;font:inherit;height:100%;margin:0;outline:0;padding:0}.input-container:focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}`;var wo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};class Ro extends gt{static{this.formAssociated=!0}static{this.styles=[ae,re,mo]}static{this.elementName="gk-input"}constructor(){super(),this.disabled=!1,this.labelVisibility="visible",this.required=!1,this.type="text",this.value="";try{this.internals=this.attachInternals()}catch{}}firstUpdated(){this.internals&&this.internals.setFormValue(this.value)}render(){return F`<div class="field"><label class="${fo({label:!0,"sr-only":"sr-only"===this.labelVisibility})}" for="input" ?hidden="${"hidden"===this.labelVisibility}" part="field-label"><slot name="label">${this.label}</slot></label><div class="${fo({"input-container":!0,"input-container--disabled":this.disabled})}"><slot name="prefix" part="prefix"></slot><input autocomplete="${go(this.autocomplete)}" autocorrect="${go(this.autocorrect)}" class="input" ?disabled="${this.disabled}" id="input" name="${go(this.name)}" part="input" placeholder="${go(this.placeholder)}" type="${this.type}" @input="${this.onInput}"><slot name="suffix" part="suffix"></slot></div></div>`}onInput(e){this.value=e.target.value,this.internals&&this.internals.setFormValue(this.value)}}wo([oe()],Ro.prototype,"autocomplete",void 0),wo([oe()],Ro.prototype,"autocorrect",void 0),wo([oe({type:Boolean,reflect:!0})],Ro.prototype,"disabled",void 0),wo([oe()],Ro.prototype,"label",void 0),wo([oe({attribute:"label-visibility"})],Ro.prototype,"labelVisibility",void 0),wo([oe()],Ro.prototype,"name",void 0),wo([oe()],Ro.prototype,"placeholder",void 0),wo([oe({type:Boolean,reflect:!0})],Ro.prototype,"required",void 0),wo([oe({reflect:!0})],Ro.prototype,"type",void 0),wo([oe()],Ro.prototype,"value",void 0);const _o=i`:host{display:inline-block}.menu{border:1px solid var(--gk-menu-border-color,#2a2f35);border-radius:4px;background:var(--gk-menu-background-color,#32363f);box-shadow:0 5px 16px 0 rgba(0,0,0,.85);display:inline-block;padding:4px 0}`,xo=i`:host{display:block}.menu-item{font-size:var(--gk-menu-item-font-size, 12px);padding:5px 6px}.menu-item:focus,.menu-item:hover{background-color:var(--gk-menu-item-background-color-hover,#4d88ff1a);cursor:pointer}.menu-item:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.menu-item:active{background-color:var(--gk-menu-item-background-color-active,#4d88ff4d)}.menu-item--disabled,.menu-item--disabled:active,.menu-item--disabled:focus,.menu-item--disabled:hover{background-color:initial;color:var(--gk-menu-item-font-color-disabled,#ffffff60);cursor:default;pointer-events:none}`,ko=i`:host{display:block}.menu-label{cursor:default;display:inline-block;font-size:var(--gk-menu-label-font-size, 12px);font-weight:700;padding:5px 6px}`;class Mo extends gt{constructor(){super(...arguments),this._currentMenuItem=void 0}static{this.styles=[ae,_o]}static{this.elementName="gk-menu"}_handleSlotChange(){const e=this._getAllItems();e.length&&this._setCurrentItem(e[0])}_handleClick(e){e.stopPropagation();const t=e.target.closest("gk-menu-item");if(!t||t.disabled)return;this._currentMenuItem=t;const o=new CustomEvent("select",{detail:{target:t}});this.dispatchEvent(o)}_handleKeyDown(e){if("Enter"===e.key||" "===e.key)return e.preventDefault(),void this._currentMenuItem?.click();if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=this._getAllItems(),o=t.length;let n=this._currentMenuItem?t.indexOf(this._currentMenuItem):0;"ArrowUp"===e.key?n=(n-1+o)%o:"ArrowDown"===e.key?n=(n+1)%o:"Home"===e.key?n=0:"End"===e.key&&(n=o-1),this._setCurrentItem(t[n]),t[n].focus()}}_handleMouseDown(e){const t=e.target;this._isMenuItem(t)&&this._setCurrentItem(t)}_isMenuItem(e){const t=e.getAttribute("role")||"";return"gk-menu-item"===e.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(t)}_setCurrentItem(e){this._currentMenuItem=e,this._setTabIndex()}_getAllItems(){return this.slotChildren.filter((e=>this._isMenuItem(e)))}_setTabIndex(){this._getAllItems().forEach((e=>{e.setAttribute("tabindex",this._currentMenuItem===e?"0":"-1")}))}render(){return F`<slot class="menu" @click="${this._handleClick}" @keydown="${this._handleKeyDown}" @mousedown="${this._handleMouseDown}" @slotchange="${this._handleSlotChange}" part="base" role="menu"></slot>`}}!function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);r>3&&a&&Object.defineProperty(t,o,a)}([function(e){return(t,o)=>{const{slot:n,selector:i}=e??{},r="slot"+(n?`[name=${n}]`:":not([name])");return ne(t,o,{get(){const t=this.renderRoot?.querySelector(r),o=t?.assignedElements(e)??[];return void 0===i?o:o.filter((e=>e.matches(i)))}})}}({flatten:!0})],Mo.prototype,"slotChildren",void 0);class Do extends gt{constructor(){super(...arguments),this.disabled=!1}static{this.styles=[ae,xo]}static{this.elementName="gk-menu-item"}get allClasses(){return this.disabled?"menu-item--disabled":""}render(){return F`<div aria-disabled="${this.disabled}" class="menu-item ${this.allClasses}" part="base" role="menuitem"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></div>`}}!function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);r>3&&a&&Object.defineProperty(t,o,a)}([oe({type:Boolean,reflect:!0})],Do.prototype,"disabled",void 0);class Ho extends gt{static{this.styles=[ae,ko]}static{this.elementName="gk-menu-label"}render(){return F`<slot class="menu-label" part="base"></slot>`}}const Ao=Ot({react:Rt,tagName:Mo.elementName,elementClass:Mo,events:{onClick:"select"}}),Co=Ot({react:Rt,tagName:Do.elementName,elementClass:Do}),So=Ot({react:Rt,tagName:Ho.elementName,elementClass:Ho}),Eo=i`:host{display:inline-block}.tag{display:inline-flex;align-items:center;vertical-align:middle;gap:8px;padding:var(--gk-tag-padding,2px 6px);border-radius:var(--gk-tag-radius,4px);background-color:var(--gk-tag-background-color,#33363e);color:var(--gk-tag-color,#85868b);max-width:100%}.tag__prefix,.tag__suffix{flex:none}.tag__label{display:inline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tag--ghost{background-color:transparent}`;class Bo extends gt{static{this.styles=[ae,Eo]}static{this.elementName="gk-tag"}render(){return F`<span class="tag ${this.variant?`tag--${this.variant}`:""}" part="base"><slot class="tag__prefix" name="prefix"></slot><slot class="tag__label"></slot><slot class="tag__suffix" name="suffix"></slot></span>`}}!function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);r>3&&a&&Object.defineProperty(t,o,a)}([oe()],Bo.prototype,"variant",void 0);const Po=Ot({react:Rt,tagName:Bo.elementName,elementClass:Bo}),To=Ot({react:Rt,tagName:$e.elementName,elementClass:$e});function Oo(...e){e.forEach((e=>{e.elementName&&!customElements.get(e.elementName)&&(customElements.define(e.elementName,e),e.components&&e.components.length>0&&Oo(...e.components))}))}})();var qe=Ve.Ct,We=Ve.v2,Ke=Ve.sN,Ye=Ve.J2,Ze=Ve.fW;const Xe=globalThis,Qe=Xe.ShadowRoot&&(void 0===Xe.ShadyCSS||Xe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tt=Symbol(),lt=new WeakMap;class css_tag_n{constructor(e,t,o){if(this._$cssResult$=!0,o!==tt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Qe&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=lt.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&lt.set(t,e))}return e}toString(){return this.cssText}}const ht=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,o,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1]),e[0]);return new css_tag_n(o,e,tt)},dt=Qe?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new css_tag_n("string"==typeof e?e:e+"",void 0,tt))(t)})(e):e,{is:pt,defineProperty:ut,getOwnPropertyDescriptor:ft,getOwnPropertyNames:bt,getOwnPropertySymbols:mt,getPrototypeOf:vt}=Object,yt=globalThis,wt=yt.trustedTypes,_t=wt?wt.emptyScript:"",xt=yt.reactiveElementPolyfillSupport,kt=(e,t)=>e,$t={toAttribute(e,t){switch(t){case Boolean:e=e?_t:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},At=(e,t)=>!pt(e,t),Ct={attribute:!0,type:String,converter:$t,reflect:!1,hasChanged:At};Symbol.metadata??=Symbol("metadata"),yt.litPropertyMetadata??=new WeakMap;class reactive_element_b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ct){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),n=this.getPropertyDescriptor(e,o,t);void 0!==n&&ut(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){const{get:n,set:i}=ft(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return n?.call(this)},set(t){const r=n?.call(this);i.call(this,t),this.requestUpdate(e,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ct}static _$Ei(){if(this.hasOwnProperty(kt("elementProperties")))return;const e=vt(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(kt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(kt("properties"))){const e=this.properties,t=[...bt(e),...mt(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(dt(e))}else void 0!==e&&t.push(dt(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$E_??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$E_?.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(Qe)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const o of t){const t=document.createElement("style"),n=Xe.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=o.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$E_?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t){const o=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,o);if(void 0!==n&&!0===o.reflect){const i=(void 0!==o.converter?.toAttribute?o.converter:$t).toAttribute(t,o.type);this._$Em=e,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(e,t){const o=this.constructor,n=o._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=o.getPropertyOptions(n),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:$t;this._$Em=n,this[n]=i.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o,n=!1,i){if(void 0!==e){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??At)(n?i:this[e],t))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$E_?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$E_?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EO(e,this[e]))),this._$ET()}updated(e){}firstUpdated(e){}}reactive_element_b.elementStyles=[],reactive_element_b.shadowRootOptions={mode:"open"},reactive_element_b[kt("elementProperties")]=new Map,reactive_element_b[kt("finalized")]=new Map,xt?.({ReactiveElement:reactive_element_b}),(yt.reactiveElementVersions??=[]).push("2.0.2");const St=globalThis,Et=St.trustedTypes,Pt=Et?Et.createPolicy("lit-html",{createHTML:e=>e}):void 0,Tt="$lit$",Mt=`lit$${(Math.random()+"").slice(9)}$`,Ot="?"+Mt,Rt=`<${Ot}>`,Dt=document,Lt=()=>Dt.createComment(""),It=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Nt=Array.isArray,Bt=e=>Nt(e)||"function"==typeof e?.[Symbol.iterator],Ut="[ \t\n\f\r]",jt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ht=/-->/g,zt=/>/g,Ft=RegExp(`>|${Ut}(?:([^\\s"'>=/]+)(${Ut}*=${Ut}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Vt=/'/g,Gt=/"/g,qt=/^(?:script|style|textarea|title)$/i,Wt=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),Kt=Wt(1),Yt=(Wt(2),Symbol.for("lit-noChange")),Zt=Symbol.for("lit-nothing"),Jt=new WeakMap,Xt=Dt.createTreeWalker(Dt,129);function Qt(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Pt?Pt.createHTML(t):t}const eo=(e,t)=>{const o=e.length-1,n=[];let i,r=2===t?"<svg>":"",a=jt;for(let t=0;t<o;t++){const o=e[t];let c,l,h=-1,d=0;for(;d<o.length&&(a.lastIndex=d,l=a.exec(o),null!==l);)d=a.lastIndex,a===jt?"!--"===l[1]?a=Ht:void 0!==l[1]?a=zt:void 0!==l[2]?(qt.test(l[2])&&(i=RegExp("</"+l[2],"g")),a=Ft):void 0!==l[3]&&(a=Ft):a===Ft?">"===l[0]?(a=i??jt,h=-1):void 0===l[1]?h=-2:(h=a.lastIndex-l[2].length,c=l[1],a=void 0===l[3]?Ft:'"'===l[3]?Gt:Vt):a===Gt||a===Vt?a=Ft:a===Ht||a===zt?a=jt:(a=Ft,i=void 0);const p=a===Ft&&e[t+1].startsWith("/>")?" ":"";r+=a===jt?o+Rt:h>=0?(n.push(c),o.slice(0,h)+Tt+o.slice(h)+Mt+p):o+Mt+(-2===h?t:p)}return[Qt(e,r+(e[o]||"<?>")+(2===t?"</svg>":"")),n]};class V{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let i=0,r=0;const a=e.length-1,c=this.parts,[l,h]=eo(e,t);if(this.el=V.createElement(l,o),Xt.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=Xt.nextNode())&&c.length<a;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(Tt)){const t=h[r++],o=n.getAttribute(e).split(Mt),a=/([.?@])?(.*)/.exec(t);c.push({type:1,index:i,name:a[2],strings:o,ctor:"."===a[1]?lit_html_k:"?"===a[1]?lit_html_H:"@"===a[1]?lit_html_I:lit_html_R}),n.removeAttribute(e)}else e.startsWith(Mt)&&(c.push({type:6,index:i}),n.removeAttribute(e));if(qt.test(n.tagName)){const e=n.textContent.split(Mt),t=e.length-1;if(t>0){n.textContent=Et?Et.emptyScript:"";for(let o=0;o<t;o++)n.append(e[o],Lt()),Xt.nextNode(),c.push({type:2,index:++i});n.append(e[t],Lt())}}}else if(8===n.nodeType)if(n.data===Ot)c.push({type:2,index:i});else{let e=-1;for(;-1!==(e=n.data.indexOf(Mt,e+1));)c.push({type:7,index:i}),e+=Mt.length-1}i++}}static createElement(e,t){const o=Dt.createElement("template");return o.innerHTML=e,o}}function to(e,t,o=e,n){if(t===Yt)return t;let i=void 0!==n?o._$Co?.[n]:o._$Cl;const r=It(t)?void 0:t._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),void 0===r?i=void 0:(i=new r(e),i._$AT(e,o,n)),void 0!==n?(o._$Co??=[])[n]=i:o._$Cl=i),void 0!==i&&(t=to(e,i._$AS(e,t.values),i,n)),t}class lit_html_S{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,n=(e?.creationScope??Dt).importNode(t,!0);Xt.currentNode=n;let i=Xt.nextNode(),r=0,a=0,c=o[0];for(;void 0!==c;){if(r===c.index){let t;2===c.type?t=new lit_html_M(i,i.nextSibling,this,e):1===c.type?t=new c.ctor(i,c.name,c.strings,this,e):6===c.type&&(t=new lit_html_L(i,this,e)),this._$AV.push(t),c=o[++a]}r!==c?.index&&(i=Xt.nextNode(),r++)}return Xt.currentNode=Dt,n}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class lit_html_M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,n){this.type=2,this._$AH=Zt,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=to(this,e,t),It(e)?e===Zt||null==e||""===e?(this._$AH!==Zt&&this._$AR(),this._$AH=Zt):e!==this._$AH&&e!==Yt&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):Bt(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Zt&&It(this._$AH)?this._$AA.nextSibling.data=e:this.$(Dt.createTextNode(e)),this._$AH=e}g(e){const{values:t,_$litType$:o}=e,n="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=V.createElement(Qt(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new lit_html_S(n,this),o=e.u(this.options);e.p(t),this.$(o),this._$AH=e}}_$AC(e){let t=Jt.get(e.strings);return void 0===t&&Jt.set(e.strings,t=new V(e)),t}T(e){Nt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,n=0;for(const i of e)n===t.length?t.push(o=new lit_html_M(this.k(Lt()),this.k(Lt()),this,this.options)):o=t[n],o._$AI(i),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class lit_html_R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,n,i){this.type=1,this._$AH=Zt,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Zt}_$AI(e,t=this,o,n){const i=this.strings;let r=!1;if(void 0===i)e=to(this,e,t,0),r=!It(e)||e!==this._$AH&&e!==Yt,r&&(this._$AH=e);else{const n=e;let a,c;for(e=i[0],a=0;a<i.length-1;a++)c=to(this,n[o+a],t,a),c===Yt&&(c=this._$AH[a]),r||=!It(c)||c!==this._$AH[a],c===Zt?e=Zt:e!==Zt&&(e+=(c??"")+i[a+1]),this._$AH[a]=c}r&&!n&&this.O(e)}O(e){e===Zt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class lit_html_k extends lit_html_R{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===Zt?void 0:e}}class lit_html_H extends lit_html_R{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==Zt)}}class lit_html_I extends lit_html_R{constructor(e,t,o,n,i){super(e,t,o,n,i),this.type=5}_$AI(e,t=this){if((e=to(this,e,t,0)??Zt)===Yt)return;const o=this._$AH,n=e===Zt&&o!==Zt||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==Zt&&(o===Zt||n);n&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class lit_html_L{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){to(this,e)}}const oo=St.litHtmlPolyfillSupport;oo?.(V,lit_html_M),(St.litHtmlVersions??=[]).push("3.1.0");class lit_element_s extends reactive_element_b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const n=o?.renderBefore??t;let i=n._$litPart$;if(void 0===i){const e=o?.renderBefore??null;n._$litPart$=i=new lit_html_M(t.insertBefore(Lt(),e),e,void 0,o??{})}return i._$AI(e),i})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Yt}}lit_element_s._$litElement$=!0,lit_element_s.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lit_element_s});const no=globalThis.litElementPolyfillSupport;no?.({LitElement:lit_element_s});(globalThis.litElementVersions??=[]).push("4.0.2");const io=e=>(t,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},ro={attribute:!0,type:String,converter:$t,reflect:!1,hasChanged:At},so=(e=ro,t,o)=>{const{kind:n,metadata:i}=o;let r=globalThis.litPropertyMetadata.get(i);if(void 0===r&&globalThis.litPropertyMetadata.set(i,r=new Map),r.set(o.name,e),"accessor"===n){const{name:n}=o;return{set(o){const i=t.get.call(this);t.set.call(this,o),this.requestUpdate(n,i,e)},init(t){return void 0!==t&&this.C(n,void 0,e),t}}}if("setter"===n){const{name:n}=o;return function(o){const i=this[n];t.call(this,o),this.requestUpdate(n,i,e)}}throw Error("Unsupported decorator location: "+n)};function ao(e){return(t,o)=>"object"==typeof o?so(e,t,o):((e,t,o)=>{const n=t.hasOwnProperty(o);return t.constructor.createProperty(o,n?{...e,wrapped:!0}:e),n?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}function co(e){return ao({...e,state:!0,attribute:!1})}const lo=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function ho(e,t){return(o,n,i)=>{const r=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof n?o:i??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return lo(o,n,{get(){let o=e.call(this);return void 0===o&&(o=r(this),(null!==o||this.hasUpdated)&&t.call(this,o)),o}})}return lo(o,n,{get(){return r(this)}})}}function uo(e){return(t,o)=>{const{slot:n,selector:i}=e??{},r="slot"+(n?`[name=${n}]`:":not([name])");return lo(t,o,{get(){const t=this.renderRoot?.querySelector(r),o=t?.assignedElements(e)??[];return void 0===i?o:o.filter((e=>e.matches(i)))}})}}function fo(e,t,o){return e?t(e):o?.(e)}class GlElement extends lit_element_s{fireEvent(e,t){return this.dispatchEvent(new CustomEvent(e,{detail:t}))}}const go=2;class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}class unsafe_html_e extends directive_i{constructor(e){if(super(e),this.et=Zt,e.type!==go)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===Zt||null==e)return this.vt=void 0,this.et=e;if(e===Yt)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;const t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;const mo=(e=>(...t)=>({_$litDirective$:e,values:t}))(unsafe_html_e);function wo(e,t,o,n=!1,i){const r={name:"",relativePath:"",children:new Map,descendants:[]};let a=e.reduce(((e,n)=>{let i=e,r="";for(const e of t(n)){r=o(r,e),void 0===i.children&&(i.children=new Map);let t=i.children.get(e);void 0===t&&(t={name:e,relativePath:r,parent:i,children:void 0,descendants:void 0},i.children.set(e,t)),void 0===i.descendants&&(i.descendants=[]),i.descendants.push(n),i=t}return i.value=n,e}),r);return n&&(a=_o(a,o,!0,i)),a}function _o(e,t,o=!0,n){if(void 0===e.children)return e;const i=[...e.children.values()];for(const e of i)_o(e,t,!1,n);if(!o&&1===i.length){const o=i[0];(void 0===o.value||n?.(o.value))&&(e.name=t(e.name,o.name),e.relativePath=o.relativePath,e.children=o.children,e.descendants=o.descendants,e.value=o.value)}return e}function xo(e,t){if(null==e)return 0;let o=0;for(const n of e)o+=t(n);return o}var ko=Object.defineProperty,Ao=Object.getOwnPropertyDescriptor,Co=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?Ao(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&ko(t,o,r),r};let So=class extends lit_element_s{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=16}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};So.styles=ht`
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
	`,Co([ao()],So.prototype,"icon",2),Co([ao()],So.prototype,"modifier",2),Co([ao({type:Number})],So.prototype,"size",2),So=Co([io("code-icon")],So);var Eo=Object.defineProperty,Po=Object.getOwnPropertyDescriptor,To=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?Po(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&Eo(t,o,r),r};let Oo=class extends lit_element_s{constructor(){super(...arguments),this.label="",this.icon=""}render(){return Kt`
			<a
				role="${this.href?Zt:"button"}"
				type="${this.href?Zt:"button"}"
				aria-label="${this.label}"
				title="${this.label}"
			>
				<code-icon icon="${this.icon}"></code-icon>
			</a>
		`}};Oo.styles=ht`
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
	`,To([ao()],Oo.prototype,"href",2),To([ao()],Oo.prototype,"label",2),To([ao()],Oo.prototype,"icon",2),Oo=To([io("action-item")],Oo);var Lo=Object.defineProperty,Io=Object.getOwnPropertyDescriptor,No=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?Io(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&Lo(t,o,r),r};const Uo={".":"Unchanged","!":"Ignored","?":"Untracked",A:"Added",D:"Deleted",M:"Modified",R:"Renamed",C:"Copied",AA:"Conflict",AU:"Conflict",UA:"Conflict",DD:"Conflict",DU:"Conflict",UD:"Conflict",UU:"Conflict",T:"Modified",U:"Updated but Unmerged"};let jo=class extends lit_element_s{get statusName(){return this.status?Uo[this.status]:""}updated(e){super.updated(e),e.has("status")&&(this.statusName?this.setAttribute("title",this.statusName):this.removeAttribute("title"))}renderIgnored(){return Kt`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#969696"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM10 4l-6.01 6.01 1.06 1.061 6.01-6.01L10 4z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderUntracked(){return Kt`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#6C6C6C"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm-3.942-3.942l7.5-7.5.884.884-.664.664c.95.655 1.65 1.524 2.222 2.394-1.15 1.75-2.824 3.5-6 3.5-.696 0-1.32-.084-1.882-.234l-1.176 1.176-.884-.884zm5.188-3.42l1.629-1.629c.634.393 1.147.913 1.594 1.491C10.99 8.767 9.692 9.75 7.5 9.75c-.287 0-.56-.017-.817-.05l.455-.454a1.5 1.5 0 0 0 1.608-1.608zM7.362 6.254L5.754 7.862a1.5 1.5 0 0 1 1.608-1.608zm.955-.955A6.595 6.595 0 0 0 7.5 5.25c-2.192 0-3.49.982-4.469 2.25.447.578.96 1.098 1.594 1.491l-.903.903C2.772 9.239 2.072 8.369 1.5 7.5 2.65 5.75 4.324 4 7.5 4c.696 0 1.32.084 1.882.234L8.317 5.299z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderAdded(){return Kt`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#388A34"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm.75-6.75h3v-1.5h-3v-3h-1.5v3h-3v1.5h3v3h1.5v-3z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderDeleted(){return Kt`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#9E121D"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm3.75-6.75v-1.5h-7.5v1.5h7.5z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderModified(){return Kt`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#1B80B2"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm3.75-9.5V7h-3v2.5h-1.5V7h-3V5.5h3v-3h1.5v3h3zm0 5V12h-7.5v-1.5h7.5z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderRenamed(){return Kt`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#C63"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM9.25 4.5v1.25h1.25l1 1v2.5l-1 1H9.25v1.25H10v1.25H7V11.5h.75v-1.25H4l-1-1v-2.5l1-1h3.75V4.5H7V3.25h3V4.5h-.75zm-5 2.5h3.5v2h-3.5V7zm5 0v2h1V7h-1z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderCopied(){return Kt`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#692C77"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM6.964 3.75L5.893 4.813v.53h1.071v-.53h3.215v4.25h-.536v1.062h.536l1.071-1.063v-4.25L10.179 3.75H6.964zM3.75 6.938l1.071-1.063h3.215l1.071 1.063v4.25L8.036 12.25H4.82L3.75 11.187v-4.25zm1.071 0v4.25h3.215v-4.25H4.82z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderConflict(){return Kt`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#7F4E7E"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm-4.03-4.53L6.44 7.5 3.47 4.53l1.06-1.06L7.5 6.44l2.97-2.97 1.06 1.06L8.56 7.5l2.97 2.97-1.06 1.06L7.5 8.56l-2.97 2.97-1.06-1.06z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderUnknown(){return Kt`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#6C6C6C"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM9.19 2.822c-.439-.215-.97-.322-1.596-.322-1.25 0-2.282.478-3.094 1.435l1.05.798c.275-.331.579-.574.91-.728.331-.154.66-.231.987-.231.415 0 .76.093 1.036.28.275.182.413.448.413.798 0 .275-.082.509-.245.7-.159.187-.36.364-.602.532a9.506 9.506 0 0 0-.728.56 2.66 2.66 0 0 0-.602.763c-.159.299-.238.679-.238 1.141v.483h1.498v-.413c0-.364.086-.663.259-.896a2.76 2.76 0 0 1 .637-.616c.252-.177.504-.362.756-.553.257-.196.471-.436.644-.721.173-.285.259-.651.259-1.099 0-.387-.114-.749-.343-1.085-.229-.34-.562-.616-1.001-.826zm-1.169 7.917a1.024 1.024 0 0 0-.763-.315c-.294 0-.544.105-.749.315-.2.205-.301.453-.301.742 0 .294.1.546.301.756.205.205.455.308.749.308.303 0 .558-.103.763-.308.205-.21.308-.462.308-.756 0-.29-.103-.537-.308-.742z"
					clip-rule="evenodd"
				/>
			</svg>
		`}render(){switch(this.status){case"!":return this.renderIgnored();case"?":return this.renderUntracked();case"A":return this.renderAdded();case"D":return this.renderDeleted();case"M":case"T":case"U":return this.renderModified();case"R":return this.renderRenamed();case"C":return this.renderCopied();case"AA":case"AU":case"UA":case"DD":case"DU":case"UD":case"UU":return this.renderConflict()}return this.renderUnknown()}};jo.styles=[ht`
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
		`],No([ao()],jo.prototype,"status",2),No([co()],jo.prototype,"statusName",1),jo=No([io("gl-git-status")],jo);ht`
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
`;const zo=ht`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,Fo=ht`
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
`,Vo=(ht`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${zo}
	}
	a:hover {
		text-decoration: underline;
	}
`,ht`
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
`),Go=[Fo,ht``],qo=[Fo,ht`
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
	`];var Wo=Object.defineProperty,Ko=Object.getOwnPropertyDescriptor,Yo=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?Ko(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&Wo(t,o,r),r};let Zo=class extends lit_element_s{disconnectedCallback(){super.disconnectedCallback(),this._slotSubscriptionsDisposer?.()}firstUpdated(){this.setAttribute("role","tree")}render(){return Kt`<slot @slotchange=${this.handleSlotChange}></slot>`}handleSlotChange(){if(!this.treeItems?.length)return;const e=this.handleKeydown.bind(this),t=this.handleBeforeSelected.bind(this),o=this.handleSelected.bind(this),n=this.treeItems.map((n=>(n.addEventListener("keydown",e,!1),n.addEventListener("gl-tree-item-select",t,!1),n.addEventListener("gl-tree-item-selected",o,!1),{dispose:function(){n?.removeEventListener("keydown",e,!1),n?.removeEventListener("gl-tree-item-select",t,!1),n?.removeEventListener("gl-tree-item-selected",o,!1)}})));this._slotSubscriptionsDisposer=()=>{n?.forEach((({dispose:e})=>e()))}}handleKeydown(e){if(!e.target)return;const t=e.target;if("ArrowUp"===e.key){const e=t.previousElementSibling;e?.focus()}else if("ArrowDown"===e.key){const e=t.nextElementSibling;e?.focus()}}handleBeforeSelected(e){if(!e.target)return;const t=e.target;null!=this._lastSelected&&this._lastSelected!==t&&this._lastSelected.deselect(),this._lastSelected=t}handleSelected(e){if(!e.target||!e.detail.node.branch)return;function t(e){const t=e.level;let o=e.previousElementSibling;for(;o;){if(o.level<t)return o;o=o.previousElementSibling}}const o=e.target,n=o.level;let i=o.nextElementSibling;for(;i&&n!==i.level;){const o=t(i);i.parentExpanded=!1!==o?.expanded,i.expanded=e.detail.node.expanded,i=i.nextElementSibling}}};Zo.styles=Go,Yo([ao({reflect:!0})],Zo.prototype,"guides",2),Yo([uo({flatten:!0})],Zo.prototype,"treeItems",2),Zo=Yo([io("gl-tree")],Zo);var Jo=Object.defineProperty,Xo=Object.getOwnPropertyDescriptor,Qo=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?Xo(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&Jo(t,o,r),r};let en=class extends lit_element_s{firstUpdated(){this.role="navigation"}disconnectedCallback(){this._slotSubscriptionsDisposer?.()}render(){return Kt`<slot @slotchange=${this.handleSlotChange}></slot>`}handleSlotChange(e){if(this._slotSubscriptionsDisposer?.(),this.actionNodes.length<2)return;const t=this.handleKeydown.bind(this),o=`${this.actionNodes.length}`,n=this.actionNodes.map(((e,n)=>(e.setAttribute("aria-posinset",`${n+1}`),e.setAttribute("aria-setsize",o),e.setAttribute("tabindex",0===n?"0":"-1"),e.addEventListener("keydown",t,!1),{dispose:()=>{e?.removeEventListener("keydown",t,!1)}})));this._slotSubscriptionsDisposer=()=>{n?.forEach((({dispose:e})=>e()))}}handleKeydown(e){if(!e.target||null==this.actionNodes||this.actionNodes.length<2)return;const t=e.target,o=parseInt(t.getAttribute("aria-posinset")??"0",10);let n=null;if("ArrowLeft"===e.key){const e=1===o?this.actionNodes.length-1:o-2;n=this.actionNodes[e]}else if("ArrowRight"===e.key){const e=o===this.actionNodes.length?0:o;n=this.actionNodes[e]}null!=n&&n!==t&&(t.setAttribute("tabindex","-1"),n.setAttribute("tabindex","0"),n.focus())}};en.styles=ht`
		:host {
			display: flex;
			align-items: center;
			user-select: none;
		}
	`,Qo([uo({flatten:!0})],en.prototype,"actionNodes",2),en=Qo([io("action-nav")],en);var tn=Object.defineProperty,on=Object.getOwnPropertyDescriptor,nn=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?on(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&tn(t,o,r),r};let rn=class extends GlElement{constructor(){super(...arguments),this.branch=!1,this.expanded=!0,this.path="",this.level=0,this.size=1,this.position=1,this.checkable=!1,this.checked=!1,this.disableCheck=!1,this.showIcon=!0,this.selected=!1,this.focused=!1,this.onComponentClickBound=this.onComponentClick.bind(this)}get isHidden(){return!1===this.parentExpanded||!this.branch&&!this.expanded}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.onComponentClickBound)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.onComponentClickBound)}onComponentClick(e){this.selectCore({dblClick:!1,altKey:e.altKey}),this.buttonEl.focus()}updateAttrs(e,t=!1){(e.has("expanded")||t)&&this.setAttribute("aria-expanded",this.expanded.toString()),(e.has("parentExpanded")||t)&&this.setAttribute("aria-hidden",this.isHidden.toString()),(e.has("selected")||t)&&this.setAttribute("aria-selected",this.selected.toString()),(e.has("size")||t)&&this.setAttribute("aria-setsize",this.size.toString()),(e.has("position")||t)&&this.setAttribute("aria-posinset",this.position.toString()),(e.has("level")||t)&&this.setAttribute("aria-level",this.level.toString())}firstUpdated(){this.role="treeitem"}updated(e){this.updateAttrs(e)}renderBranching(){const e=this.level-1;if(e<1&&!this.branch)return Zt;const t=[];if(e>0)for(let o=0;o<e;o++)t.push(Kt`<span class="node node--connector"><code-icon name="blank"></code-icon></span>`);return this.branch&&t.push(Kt`<code-icon class="branch" icon="${this.expanded?"chevron-down":"chevron-right"}"></code-icon>`),t}renderCheckbox(){return this.checkable?Kt`<span class="checkbox"
			><input
				class="checkbox__input"
				id="checkbox"
				type="checkbox"
				.checked=${this.checked}
				?disabled=${this.disableCheck}
				@change=${this.onCheckboxChange}
				@click=${this.onCheckboxClick} /><code-icon icon="check" size="14" class="checkbox__check"></code-icon
		></span>`:Zt}renderActions(){return Kt`<action-nav class="actions"><slot name="actions"></slot></action-nav>`}renderDecorations(){return Kt`<slot name="decorations" class="decorations"></slot>`}render(){return Kt`
			${this.renderBranching()}${this.renderCheckbox()}
			<button
				id="button"
				class="item"
				type="button"
				@click=${this.onButtonClick}
				@dblclick=${this.onButtonDblClick}
			>
				${fo(this.showIcon,(()=>Kt`<slot name="icon" class="icon"></slot>`))}
				<span class="text">
					<slot class="main"></slot>
					<slot name="description" class="description"></slot>
				</span>
			</button>
			${this.renderActions()}${this.renderDecorations()}
		`}selectCore(e,t=!1){this.fireEvent("gl-tree-item-select"),this.branch&&(this.expanded=!this.expanded),this.selected=!0,t||window.requestAnimationFrame((()=>{this.fireEvent("gl-tree-item-selected",{node:this,dblClick:e?.dblClick??!1,altKey:e?.altKey??!1,ctrlKey:e?.ctrlKey??!1,metaKey:e?.metaKey??!1})}))}select(){this.selectCore(void 0,!0)}deselect(){this.selected=!1}focus(){this.buttonEl.focus()}onButtonClick(e){e.stopPropagation(),this.selectCore({dblClick:!1,altKey:e.altKey})}onButtonDblClick(e){e.stopPropagation(),this.selectCore({dblClick:!0,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey})}onCheckboxClick(e){e.stopPropagation()}onCheckboxChange(e){e.preventDefault(),e.stopPropagation(),this.checked=e.target.checked,this.fireEvent("gl-tree-item-checked",{node:this,checked:this.checked})}};rn.styles=qo,nn([ao({type:Boolean})],rn.prototype,"branch",2),nn([ao({type:Boolean})],rn.prototype,"expanded",2),nn([ao({type:String})],rn.prototype,"path",2),nn([ao({type:String,attribute:"parent-path"})],rn.prototype,"parentPath",2),nn([ao({type:Boolean,attribute:"parent-expanded"})],rn.prototype,"parentExpanded",2),nn([ao({type:Number})],rn.prototype,"level",2),nn([ao({type:Number})],rn.prototype,"size",2),nn([ao({type:Number})],rn.prototype,"position",2),nn([ao({type:Boolean})],rn.prototype,"checkable",2),nn([ao({type:Boolean})],rn.prototype,"checked",2),nn([ao({type:Boolean})],rn.prototype,"disableCheck",2),nn([ao({type:Boolean})],rn.prototype,"showIcon",2),nn([co()],rn.prototype,"selected",2),nn([co()],rn.prototype,"focused",2),nn([ho("#button")],rn.prototype,"buttonEl",2),rn=nn([io("gl-tree-item")],rn);var sn=Object.defineProperty,an=Object.getOwnPropertyDescriptor,cn=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?an(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&sn(t,o,r),r};let ln=class extends GlElement{constructor(){super(...arguments),this.treeItems=void 0}set model(e){if(this._model===e)return;let t;if(this._model=e,null!=this._model){const e=this._model.length;t=this._model.reduce(((t,o,n)=>(t.push(...hn(o,e,n+1)),t)),[])}this.treeItems=t}get model(){return this._model}renderIcon(e){return null==e?Zt:"string"==typeof e?Kt`<code-icon slot="icon" icon=${e}></code-icon>`:"status"!==e.type?Zt:Kt`<gl-git-status slot="icon" .status=${e.name}></gl-git-status>`}renderActions(e){const t=e.actions;return null==t||0===t.length?Zt:t.map((t=>Kt`<action-item
				slot="actions"
				.icon=${t.icon}
				.label=${t.label}
				@click=${o=>this.onTreeItemActionClicked(o,e,t)}
			></action-item>`))}renderDecorations(e){const t=e.decorations;return null==t||0===t.length?Zt:t.map((e=>"icon"===e.type?Kt`<code-icon
					slot="decorations"
					title="${e.label}"
					aria-label="${e.label}"
					.icon=${e.icon}
				></code-icon>`:"text"===e.type?Kt`<span slot="decorations">${e.label}</span>`:void 0))}renderTreeItem(e){return Kt`<gl-tree-item
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
			${e.label}${fo(null!=e.description,(()=>Kt`<span slot="description">${e.description}</span>`))}
			${this.renderActions(e)} ${this.renderDecorations(e)}
		</gl-tree-item>`}renderTree(e){return e?.map((e=>this.renderTreeItem(e)))}render(){return Kt`<gl-tree>${this.renderTree(this.treeItems)}</gl-tree>`}onTreeItemSelected(e,t){e.stopPropagation(),this.fireEvent("gl-tree-generated-item-selected",{...e.detail,node:t,context:t.context})}onTreeItemChecked(e,t){e.stopPropagation(),this.fireEvent("gl-tree-generated-item-checked",{...e.detail,node:t,context:t.context})}onTreeItemActionClicked(e,t,o){e.stopPropagation(),this.fireEvent("gl-tree-generated-item-action-clicked",{node:t,context:t.context,action:o,dblClick:!1,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey})}};function hn(e,t=1,o=1){const n={size:t,position:o};for(const[t,o]of Object.entries(e))null!=o&&"children"!==t&&(n[t]=o);const i=[n];if(null!=e.children&&e.children.length>0){const t=e.children.length;for(let o=0;o<t;o++)i.push(...hn(e.children[o],t,o+1))}return i}ln.styles=ht`
		:host {
			display: contents;
		}
	`,cn([co()],ln.prototype,"treeItems",2),cn([ao({reflect:!0})],ln.prototype,"guides",2),cn([ao({type:Array,attribute:!1})],ln.prototype,"model",1),ln=cn([io("gl-tree-generator")],ln);var dn=Object.defineProperty,pn=Object.getOwnPropertyDescriptor,un=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?pn(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&dn(t,o,r),r};let fn=class extends lit_element_s{constructor(){super(...arguments),this.lines=1}render(){const e=`--skeleton-lines: ${this.lines};`;return Kt`<div class="skeleton" style=${e}></div>`}};fn.styles=ht`
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
	`,un([ao({type:Number})],fn.prototype,"lines",2),fn=un([io("skeleton-loader")],fn);class GlTreeBase extends GlElement{renderLoading(){return Kt`
			<div class="section section--skeleton">
				<skeleton-loader></skeleton-loader>
			</div>
			<div class="section section--skeleton">
				<skeleton-loader></skeleton-loader>
			</div>
			<div class="section section--skeleton">
				<skeleton-loader></skeleton-loader>
			</div>
		`}renderLayoutAction(e){if(!e)return Zt;let t="tree",o="list-tree",n="View as Tree";switch(e){case"auto":t="list",o="gl-list-auto",n="View as List";break;case"list":t="tree",o="list-flat",n="View as Tree";break;case"tree":t="auto",o="list-tree",n="View as Auto"}return Kt`<action-item data-switch-value="${t}" label="${n}" icon="${o}"></action-item>`}renderTreeView(e,t="none"){return Kt`<gl-tree-generator
			.model=${e}
			.guides=${t}
			@gl-tree-generated-item-action-clicked=${this.onTreeItemActionClicked}
			@gl-tree-generated-item-checked=${this.onTreeItemChecked}
			@gl-tree-generated-item-selected=${this.onTreeItemSelected}
		></gl-tree-generator>`}renderFiles(e,t=!1,o=!1,n=2){const i=[];if(t){const t=wo(e,(e=>e.path.split("/")),((...e)=>e.join("/")),o);if(null!=t.children)for(const e of t.children.values()){const t=this.walkFileTree(e,{level:n});i.push(t)}}else for(const t of e){const e=this.fileToTreeModel(t,{level:n,branch:!1},!0);i.push(e)}return i}walkFileTree(e,t={level:1}){let o;if(void 0===t.level&&(t.level=1),o=null==e.value?this.folderToTreeModel(e.name,t):this.fileToTreeModel(e.value,t),null!=e.children){const n=[];for(const o of e.children.values()){const e=this.walkFileTree(o,{...t,level:t.level+1});n.push(e)}n.length>0&&(o.branch=!0,o.children=n)}return o}folderToTreeModel(e,t){return{branch:!1,expanded:!0,path:e,level:1,checkable:!1,checked:!1,icon:"folder",label:e,...t}}getRepoActions(e,t,o){return[]}emptyTreeModel(e,t){return{branch:!1,expanded:!0,path:"",level:1,checkable:!0,checked:!0,icon:void 0,label:e,...t}}repoToTreeModel(e,t,o,n){return{branch:!1,expanded:!0,path:t,level:1,checkable:!0,checked:!0,icon:"repo",label:e,description:n,context:[t],actions:this.getRepoActions(e,t,o),...o}}getFileActions(e,t){return[]}fileToTreeModel(e,t,o=!1,n="/"){const i=e.path.lastIndexOf(n),r=-1!==i?e.path.substring(i+1):e.path,a=o&&-1!==i?e.path.substring(0,i):"";return{branch:!1,expanded:!0,path:e.path,level:1,checkable:!1,checked:!1,icon:"file",label:r,description:!0===o?a:void 0,context:[e],actions:this.getFileActions(e,t),decorations:[{type:"text",label:e.status}],...t}}}var bn=Object.defineProperty,gn=Object.getOwnPropertyDescriptor,mn=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?gn(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&bn(t,o,r),r};let vn=class extends lit_element_s{constructor(){super(...arguments),this.editor=!1}render(){return Kt`<div class="group"><slot></slot></div>`}};vn.styles=[Fo,ht`
			:host {
				display: block;
				max-width: 30rem;
				margin-right: auto;
				margin-left: auto;
				text-align: left;
				transition: max-width 0.2s ease-out;
			}

			@media (min-width: 640px) {
				:host(:not([editor])) {
					max-width: 100%;
				}
			}

			.group {
				display: inline-flex;
				gap: 0.4rem;
				width: 100%;
				max-width: 30rem;
			}
		`],mn([ao({type:Boolean})],vn.prototype,"editor",2),vn=mn([io("button-container")],vn);var yn=Object.defineProperty,wn=Object.getOwnPropertyDescriptor,_n=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?wn(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&yn(t,o,r),r};let xn=class extends lit_element_s{constructor(){super(...arguments),this.full=!1,this.disabled=!1,this.tabIndex=0}get role(){return this.href?"link":"button"}updated(e){super.updated(e),e.has("disabled")&&(this.tabIndex=this.disabled?-1:0,this.setAttribute("aria-disabled",this.disabled.toString()))}render(){const e=Kt`<slot></slot>`;return null!=this.href?Kt`<a href=${this.href}>${e}</a>`:e}};xn.styles=[Fo,ht`
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
				${zo}
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
		`],_n([ao({type:Boolean,reflect:!0})],xn.prototype,"full",2),_n([ao({type:Boolean,reflect:!0})],xn.prototype,"disabled",2),_n([ao({reflect:!0})],xn.prototype,"density",2),_n([ao()],xn.prototype,"href",2),_n([ao({reflect:!0})],xn.prototype,"role",1),_n([ao()],xn.prototype,"appearance",2),_n([ao({type:Number,reflect:!0})],xn.prototype,"tabIndex",2),xn=_n([io("gl-button")],xn);const kn=()=>({toAttribute:e=>e.getTime(),fromAttribute:(e,t)=>new Date(parseInt(e,10))}),$n=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,An=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,Cn=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let Sn;const En=new Map;let Pn,Tn,Mn;function On(e,t,o,n=!0){const i=`${o??""}:${t=t??void 0}`;let r=En.get(i);if(null==r){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=An.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}const o={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll($n))if(null!=t)for(const[e,n]of Object.entries(t))if(null!=n)switch(e){case"year":o.year=4===n.length?"numeric":"2-digit";break;case"month":switch(n.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":o.day="DD"===n?"2-digit":"numeric";break;case"weekday":switch(n.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===n.length?"2-digit":"numeric",o.hour12="hh"===n||"h"===n;break;case"minute":o.minute=2===n.length?"2-digit":"numeric";break;case"second":o.second=2===n.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===n.length?"long":"short"}return o}(t);let a;a=null==o?Pn:"system"===o?void 0:[o],r=new Intl.DateTimeFormat(a,e),n&&En.set(i,r)}if(null==t||An.test(t))return r.format(e);function a(e){const t=`${o??""}:time:${e}`;let i=En.get(t);if(null==i){const r={localeMatcher:"best fit",timeStyle:e};let a;a=null==o?Pn:"system"===o?void 0:[o],i=new Intl.DateTimeFormat(a,r),n&&En.set(t,i)}return i}const c=r.formatToParts(e);return t.replace($n,((t,o,n,i,r,l,h,d,p,u,f,b,g,m,v)=>{if(null!=o)return o.substring(1,o.length-1);for(const[t,o]of Object.entries(v)){if(null==o)continue;const n=c.find((e=>e.type===t));if("Do"===o&&"day"===n?.type)return Dn(Number(n.value));if("a"===o&&"dayPeriod"===n?.type){const t=a("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return` ${(t??n)?.value??""}`}return n?.value??""}return""}))}const Rn=["th","st","nd","rd"];function Dn(e){const t=e%100;return`${e}${Rn[(t-20)%10]??Rn[t]??Rn[0]}`}var Ln=Object.defineProperty,In=Object.getOwnPropertyDescriptor,Nn=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?In(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&Ln(t,o,r),r};let Bn=class extends lit_element_s{constructor(){super(...arguments),this.format="MMMM Do, YYYY h:mma",this.date=new Date}render(){return Kt`<time datetime="${this.date}" title="${On(this.date,this.format??"MMMM Do, YYYY h:mma")}"
			>${function(e,t){const o=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,n,i,r]of Cn){const a=Math.abs(o);if(a>=n||1e3===n)return t?(null==Sn&&(null!=Mn?Sn=Mn.resolvedOptions().locale:null!=Tn?Sn=Tn.resolvedOptions().locale:(Mn=new Intl.RelativeTimeFormat(Pn,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),Sn=Mn.resolvedOptions().locale)),"en"===Sn||Sn?.startsWith("en-")?`${Math.round(a/i)}${r}`:(null==Mn&&(Mn=new Intl.RelativeTimeFormat(Pn,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),Mn.format(Math.round(o/i),e))):(null==Tn&&(Tn=new Intl.RelativeTimeFormat(Pn,{localeMatcher:"best fit",numeric:"auto",style:"long"})),Tn.format(Math.round(o/i),e))}return""}(this.date)}</time
		>`}};Nn([ao()],Bn.prototype,"format",2),Nn([ao({converter:kn(),reflect:!0})],Bn.prototype,"date",2),Bn=Nn([io("formatted-date")],Bn);var Un=Object.defineProperty,jn=Object.getOwnPropertyDescriptor,Hn=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?jn(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&Un(t,o,r),r};let zn=class extends lit_element_s{constructor(){super(...arguments),this.name="",this.email="",this.avatarUrl="https://www.gravatar.com/avatar/?s=64&d=robohash",this.showAvatar=!1,this.dateFormat="MMMM Do, YYYY h:mma",this.committer=!1,this.actionLabel="committed"}render(){const e=this.showAvatar&&null!=this.avatarUrl&&this.avatarUrl.length>0;return Kt`
			<a class="avatar" href="${this.email?`mailto:${this.email}`:"#"}">
				${e?Kt`<img class="thumb" src="${this.avatarUrl}" alt="${this.name}" />`:Kt`<code-icon icon="person" size="32"></code-icon>`}
			</a>
			<a class="name" href="${this.email?`mailto:${this.email}`:"#"}">${this.name}</a>
			<span class="date">
				${this.actionLabel}
				<formatted-date date=${this.date?.getTime()} format=${this.dateFormat}> </formatted-date>
			</span>
		`}};zn.styles=ht`
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
	`,Hn([ao()],zn.prototype,"name",2),Hn([ao()],zn.prototype,"email",2),Hn([ao({converter:kn(),reflect:!0})],zn.prototype,"date",2),Hn([ao()],zn.prototype,"avatarUrl",2),Hn([ao({type:Boolean})],zn.prototype,"showAvatar",2),Hn([ao()],zn.prototype,"dateFormat",2),Hn([ao({type:Boolean})],zn.prototype,"committer",2),Hn([ao()],zn.prototype,"actionLabel",2),zn=Hn([io("commit-identity")],zn);var Fn=Object.defineProperty,Vn=Object.getOwnPropertyDescriptor,Gn=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?Vn(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&Fn(t,o,r),r};let qn=class extends lit_element_s{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}firstUpdated(){this.setAttribute("role","progressbar")}render(){return Kt`<div class="progress-bar"></div>`}};qn.styles=ht`
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
	`,Gn([ao({reflect:!0})],qn.prototype,"mode",2),Gn([ao({type:Boolean})],qn.prototype,"active",2),Gn([ao()],qn.prototype,"position",2),qn=Gn([io("progress-indicator")],qn);var Wn=Object.defineProperty,Kn=Object.getOwnPropertyDescriptor,Yn=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?Kn(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&Wn(t,o,r),r};let Zn=class extends lit_element_s{constructor(){super(...arguments),this.collapsable=!1,this.expanded=!1,this.loading=!1}renderTitle(){return this.collapsable?Kt`<button
			type="button"
			class="label"
			aria-controls="content"
			aria-expanded=${this.expanded}
			@click="${this.toggleExpanded}"
		>
			<code-icon class="icon" icon=${this.expanded?"chevron-down":"chevron-right"}></code-icon
			><span class="title"><slot name="title">Section</slot></span>
			<span class="subtitle"><slot name="subtitle"></slot></span>
		</button>`:Kt`<div class="label">
				<span class="title"><slot name="title">Section</slot></span>
				<span class="subtitle"><slot name="subtitle"></slot></span>
			</div>`}render(){return Kt`
			<header class="header">
				${this.renderTitle()}
				<slot name="actions"></slot>
				<progress-indicator ?active="${this.loading}"></progress-indicator>
			</header>
			<div id="content" role="region" part="content" class="content scrollable">
				<slot></slot>
			</div>
		`}toggleExpanded(){this.expanded=!this.expanded,this.dispatchEvent(new CustomEvent("expanded-change",{detail:{expanded:this.expanded},bubbles:!0,composed:!0}))}};Zn.styles=[Vo,ht`
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
		`],Yn([ao({type:Boolean,reflect:!0})],Zn.prototype,"collapsable",2),Yn([ao({type:Boolean,reflect:!0})],Zn.prototype,"expanded",2),Yn([ao({type:Boolean,reflect:!0})],Zn.prototype,"loading",2),Zn=Yn([io("webview-pane")],Zn);var Jn=Object.defineProperty,Xn=Object.getOwnPropertyDescriptor,Qn=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?Xn(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&Jn(t,o,r),r};let ei=class extends GlTreeBase{constructor(){super(),this.explainBusy=!1,this.selectedPatches=[],this._copiedLink=!1,Ze(Ye,We,Ke)}get canSubmit(){return this.selectedPatches.length>0}updated(e){if(e.has("explain")&&(this.explainBusy=!1,this.querySelector('[data-region="ai-explanation"]')?.scrollIntoView()),e.has("state")){const e=this.state?.draft?.patches;if(e?.length){this.selectedPatches=e.map((e=>e.id));for(const t of e){const e=this.selectedPatches.indexOf(t.id);t.repository.located?-1===e&&this.selectedPatches.push(t.id):e>-1&&this.selectedPatches.splice(e,1)}}else this.selectedPatches=[]}}renderEmptyContent(){return Kt`
			<div class="section section--empty" id="empty">
				<button-container>
					<gl-button full href="command:gitlens.openPatch">Open Patch...</gl-button>
				</button-container>
			</div>
		`}renderPatchMessage(){if(null==this.state?.draft?.title)return;let e="cloud"===this.state.draft.draftType?this.state.draft.description:void 0;return null!=e?(e=e.trim(),Kt`
			<div class="message-block">
				<p class="message-block__text scrollable" data-region="message">
					<span>${mo(e)}</span>
				</p>
			</div>
		`):void 0}renderExplainAi(){return Kt`
			<webview-pane collapsable data-region="explain-pane">
				<span slot="title">Explain (AI)</span>
				<span slot="subtitle"><code-icon icon="beaker" size="12"></code-icon></span>
				<action-nav slot="actions">
					<action-item data-action="switch-ai" label="Switch AI Model" icon="hubot"></action-item>
				</action-nav>

				<div class="section">
					<p>Let AI assist in understanding the changes made with this patch.</p>
					<p class="button-container">
						<span class="button-group button-group--single">
							<gl-button
								full
								class="button--busy"
								data-action="ai-explain"
								aria-busy="${(e=>e??Zt)(this.explainBusy?"true":void 0)}"
								@click=${this.onExplainChanges}
								@keydown=${this.onExplainChanges}
								><code-icon icon="loading" modifier="spin"></code-icon>Explain Changes</gl-button
							>
						</span>
					</p>
					${fo(this.explain,(()=>Kt`
							<div
								class="ai-content${this.explain?.error?" has-error":""}"
								data-region="ai-explanation"
							>
								${fo(this.explain?.error,(()=>Kt`<p class="ai-content__summary scrollable">
											${this.explain.error.message??"Error retrieving content"}
										</p>`))}
								${fo(this.explain?.summary,(()=>Kt`<p class="ai-content__summary scrollable">${this.explain.summary}</p>`))}
							</div>
						`))}
				</div>
			</webview-pane>
		`}renderChangedFiles(){const e=this.state?.preferences?.files?.layout??"auto";return Kt`
			<webview-pane collapsable expanded>
				<span slot="title">Files changed </span>
				<!-- <span slot="subtitle" data-region="stats">\${this.renderCommitStats()}</span> -->
				<action-nav slot="actions">${this.renderLayoutAction(e)}</action-nav>

				${fo(null!=this.validityMessage,(()=>Kt`<div class="section">
							<div class="alert alert--error">
								<code-icon icon="error"></code-icon>
								<p class="alert__content">${this.validityMessage}</p>
							</div>
						</div>`))}
				<div class="change-list" data-region="files">
					${fo(null==this.state?.draft?.patches,(()=>this.renderLoading()),(()=>this.renderTreeView(this.treeModel,this.state?.preferences?.indentGuides)))}
				</div>
			</webview-pane>
		`}get treeModel(){if(null==this.state?.draft?.patches)return[];const{draft:{patches:e}}=this.state,t=this.state?.preferences?.files?.layout??"auto";let o=!1;const n=xo(e,(e=>e?.files?.length??0));o="auto"===t?n>(this.state.preferences?.files?.threshold??5):"tree"===t;const i=e?.map((e=>this.draftPatchToTreeModel(e,o,this.state.preferences?.files?.compact,{checkable:!0,checked:this.selectedPatches.includes(e.id)})));return i}renderPatches(){const e="cloud"===this.state.draft.draftType?this.state.draft:void 0;return Kt`
			<div class="section section--action">
				${fo(null!=e,(()=>Kt`
						<div class="message-input">
							<div class="message-input__control message-input__control--text">
								${fo("public"===e.visibility,(()=>Kt`<code-icon icon="globe"></code-icon> Anyone with the link`))}
								${fo("private"===e.visibility,(()=>Kt`<code-icon icon="organization"></code-icon> Members of my Org with the link`))}
								${fo("invite_only"===e.visibility,(()=>Kt`<code-icon icon="lock"></code-icon> Collaborators only`))}
							</div>
						</div>
					`))}
				<p class="button-container">
					<span class="button-group button-group--single">
						<gl-button full @click=${this.onApplyPatch}>Apply Patch</gl-button>
						<gk-popover placement="top">
							<gl-button
								slot="trigger"
								density="compact"
								aria-label="Apply Patch Options..."
								title="Apply Patch Options..."
								><code-icon icon="chevron-down"></code-icon
							></gl-button>
							<gk-menu class="mine-menu" @select=${this.onSelectApplyOption}>
								<gk-menu-item data-value="branch">Apply to a Branch</gk-menu-item>
								<!-- <gk-menu-item data-value="worktree">Apply to new worktree</gk-menu-item> -->
							</gk-menu>
						</gk-popover>
					</span>
				</p>
			</div>
		`}renderActionbar(){const e=this.state?.draft;if(null!=e)return"local"===e.draftType?Kt`
				<div class="top-details__actionbar">
					<div class="top-details__actionbar-group"></div>
					<div class="top-details__actionbar-group">
						<a
							class="commit-action"
							href="#"
							aria-label="Share Patch"
							title="Share Patch"
							@click=${this.onShareLocalPatch}
							>Share</a
						>
					</div>
				</div>
			`:Kt`
			<div class="top-details__actionbar">
				<div class="top-details__actionbar-group"></div>
				<div class="top-details__actionbar-group">
					<a class="commit-action" href="#" @click=${this.onCopyCloudLink}>
						<code-icon icon="${this._copiedLink?"check":"link"}"></code-icon>
						<span class="top-details__sha">Copy Link</span></a
					>
				</div>
			</div>
		`}render(){return null==this.state?.draft?Kt` <div class="commit-detail-panel scrollable">${this.renderEmptyContent()}</div>`:Kt`
			<div class="pane-groups">
				<div class="pane-groups__group-fixed">
					<div class="section">
						${this.renderActionbar()}
						${fo(null!=this.state.draft?.title,(()=>Kt`
								<h1 class="title">${this.state.draft?.title}</h1>
								${this.renderPatchMessage()}
							`))}
					</div>
				</div>
				<div class="pane-groups__group">${this.renderChangedFiles()}</div>
				<div class="pane-groups__group-fixed pane-groups__group--bottom">
					${this.renderExplainAi()}${this.renderPatches()}
				</div>
			</div>
		`}createRenderRoot(){return this}onExplainChanges(e){if(!0===this.explainBusy||e instanceof KeyboardEvent&&"Enter"!==e.key)return e.preventDefault(),void e.stopPropagation();this.explainBusy=!0}onTreeItemActionClicked(e){if(!e.detail.context||!e.detail.action)return;switch(e.detail.action.action){case"apply-patch":this.onApplyPatch();break;case"change-patch-base":this.onChangePatchBase();break;case"show-patch-in-graph":this.onShowInGraph();break;case"file-open":this.onOpenFile(e);break;case"file-compare-working":this.onCompareWorking(e)}}fireFileEvent(e,t,o){const n=new CustomEvent(e,{detail:{...t,showOptions:o}});this.dispatchEvent(n)}onCompareWorking(e){if(!e.detail.context)return;const[t]=e.detail.context;this.fireEvent("gl-patch-file-compare-working",{...t,showOptions:{preview:!1,viewColumn:e.detail.altKey?-2:void 0}})}onOpenFile(e){if(!e.detail.context)return;const[t]=e.detail.context;this.fireEvent("gl-patch-file-open",{...t,showOptions:{preview:!1,viewColumn:e.detail.altKey?-2:void 0}})}onTreeItemChecked(e){if(!e.detail.context)return;const[t]=e.detail.context,o=this.state.draft?.patches?.find((e=>e.gkRepositoryId===t));if(!o)return;const n=this.selectedPatches.indexOf(o?.id);e.detail.checked?-1===n&&(this.selectedPatches.push(o.id),this.validityMessage=void 0):n>-1&&this.selectedPatches.splice(n,1);const i=new CustomEvent("gl-patch-checked",{detail:{patch:o,checked:e.detail.checked}});this.dispatchEvent(i)}onTreeItemSelected(e){if(!e.detail.context)return;const[t]=e.detail.context;this.fireEvent("gl-patch-file-compare-previous",{...t})}onApplyPatch(e,t="current"){!1!==this.canSubmit?(this.validityMessage=void 0,this.fireEvent("gl-patch-apply-patch",{draft:this.state.draft,target:t,selectedPatches:this.selectedPatches})):this.validityMessage="Please select changes to apply"}onSelectApplyOption(e){if(!1===this.canSubmit)return void(this.validityMessage="Please select changes to apply");const t=e.detail?.target;null!=t?.dataset?.value&&this.onApplyPatch(void 0,t.dataset.value)}onChangePatchBase(e){const t=new CustomEvent("change-patch-base",{detail:{draft:this.state.draft}});this.dispatchEvent(t)}onSelectPatchRepo(e){const t=new CustomEvent("select-patch-repo",{detail:{draft:this.state.draft}});this.dispatchEvent(t)}onShowInGraph(e){this.fireEvent("gl-patch-details-graph-show-patch",{draft:this.state.draft})}onCopyCloudLink(){this.fireEvent("gl-patch-details-copy-cloud-link",{draft:this.state.draft}),this._copiedLink=!0,setTimeout((()=>this._copiedLink=!1),1e3)}onShareLocalPatch(){this.fireEvent("gl-patch-details-share-local-patch",{draft:this.state.draft})}draftPatchToTreeModel(e,t=!1,o=!0,n){const i=this.repoToTreeModel(e.repository.name,e.gkRepositoryId,n,e.repository.located?void 0:"missing");if(!e.files?.length)return i;const r=[];if(t){const t=wo(e.files,(e=>e.path.split("/")),((...e)=>e.join("/")),o);if(null!=t.children)for(const e of t.children.values()){const t=this.walkFileTree(e,{level:2});r.push(t)}}else for(const t of e.files){const e=this.fileToTreeModel(t,{level:2,branch:!1},!0);r.push(e)}return r.length>0&&(i.branch=!0,i.children=r),i}getFileActions(e,t){return[{icon:"go-to-file",label:"Open file",action:"file-open"},{icon:"git-compare",label:"Open Changes with Working File",action:"file-compare-working"}]}};Qn([ao({type:Object})],ei.prototype,"state",2),Qn([co()],ei.prototype,"explainBusy",2),Qn([ao({type:Object})],ei.prototype,"explain",2),Qn([co()],ei.prototype,"selectedPatches",2),Qn([co()],ei.prototype,"validityMessage",2),Qn([co()],ei.prototype,"_copiedLink",2),ei=Qn([io("gl-draft-details")],ei);var ti=Object.defineProperty,oi=Object.getOwnPropertyDescriptor,ni=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?oi(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&ti(t,o,r),r};let ii=class extends lit_element_s{constructor(){super(...arguments),this.added=0,this.modified=0,this.removed=0}render(){return Kt`
			${fo(null!=this.added,(()=>Kt`<span class="stat added" title="${this.added} added" aria-label="${this.added} added"
						><span class="label">+${this.added}</span></span
					>`))}
			${fo(null!=this.modified,(()=>Kt`<span
						class="stat modified"
						title="${this.modified} modified"
						aria-label="${this.modified} modified"
						><span class="label">~${this.modified}</span></span
					>`))}
			${fo(null!=this.removed,(()=>Kt`<span class="stat deleted" title="${this.removed} removed" aria-label="${this.removed} removed"
						><span class="label">-${this.removed}</span></span
					>`))}
		`}};ii.styles=ht`
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
	`,ni([ao({type:Number})],ii.prototype,"added",2),ni([ao({type:Number})],ii.prototype,"modified",2),ni([ao({type:Number})],ii.prototype,"removed",2),ii=ni([io("commit-stats")],ii);var ri=Object.defineProperty,si=Object.getOwnPropertyDescriptor,ai=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?si(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&ri(t,o,r),r};let ci=class extends GlTreeBase{constructor(){super(),Ze(We,Ke,Ye)}get create(){return this.state.create}get createChanges(){return Object.values(this.create.changes)}get createEntries(){return Object.entries(this.create.changes)}get hasWipChanges(){return this.createChanges.some((e=>"wip"===e?.type))}get selectedChanges(){return 1===this.createChanges.length?this.createEntries:this.createEntries.filter((([,e])=>!1!==e.checked))}get canSubmit(){return null!=this.create.title&&this.create.title.length>0&&this.selectedChanges.length>0}get fileLayout(){return this.state?.preferences?.files?.layout??"auto"}get isCompact(){return this.state?.preferences?.files?.compact??!0}get filesModified(){return xo(this.createChanges,(e=>e.files?.length??0))}get draftVisibility(){return this.state?.create?.visibility??"public"}renderForm(){return Kt`
			<div class="section section--action">
				${fo(null!=this.state?.create?.creationError,(()=>Kt` <div class="alert alert--error">
							<code-icon icon="error"></code-icon>
							<p class="alert__content">${this.state.create.creationError}</p>
						</div>`))}
				<div class="message-input">
					<div class="message-input__select">
						<span class="message-input__select-icon"><code-icon icon=${"private"===this.draftVisibility?"organization":"globe"}></code-icon></span>
					<select id="visibility" class="message-input__control" @change=${this.onVisibilityChange}>
						<option value="public" ?selected=${"public"===this.draftVisibility}>Anyone with the link</option>
						<option value="private" ?selected=${"private"===this.draftVisibility}>Members of my Org with the link</option>
					</select>
						<span class="message-input__select-caret"><code-icon icon="chevron-down"></code-icon></span>
					</div>
				</div>
				<div class="message-input">
					<input id="title" type="text" class="message-input__control" placeholder="Title (required)" maxlength="100" .value=${this.create.title??""} @input=${this.onTitleInput}></textarea>
				</div>
				<div class="message-input">
					<textarea id="desc" class="message-input__control" placeholder="Description (optional)" maxlength="10000" .value=${this.create.description??""}  @input=${this.onDescriptionInput}></textarea>
				</div>
				<p class="button-container">
					<span class="button-group button-group--single">
						<gl-button full @click=${this.onCreateAll}>Create Cloud Patch</gl-button>
					</span>
				</p>
				<!-- <p class="h-deemphasize"><code-icon icon="account"></code-icon> Requires a GitKraken account <a href="#">sign-in</a></p> -->
				<p class="h-deemphasize"><code-icon icon="info"></code-icon> <a href="https://www.gitkraken.com/solutions/cloud-patches" title="Learn more about Cloud Patches"
					aria-label="Learn more about GitKraken security">Cloud Patches</a> are <a href="https://help.gitkraken.com/gitlens/security/"
					title="Learn more about Cloud Patches"
					aria-label="Learn more about GitKraken security">securely stored</a> by GitKraken.
				</p>
			</div>
			`}render(){return Kt`
			<div class="pane-groups">
				<div class="pane-groups__group">${this.renderChangedFiles()}</div>
				<div class="pane-groups__group-fixed pane-groups__group--bottom">${this.renderForm()}</div>
			</div>
		`}renderChangedFiles(){return Kt`
			<webview-pane class="h-no-border" expanded>
				<span slot="title">Changes to Include</span>
				<action-nav slot="actions">${this.renderLayoutAction(this.fileLayout)}</action-nav>

				${fo(null!=this.validityMessage,(()=>Kt`<div class="section">
							<div class="alert alert--error">
								<code-icon icon="error"></code-icon>
								<p class="alert__content">${this.validityMessage}</p>
							</div>
						</div>`))}
				<div class="change-list" data-region="files">
					${fo(null==this.create.changes,(()=>this.renderLoading()),(()=>this.renderTreeViewWithModel()))}
				</div>
			</webview-pane>
		`}onTreeItemChecked(e){if(null==e.detail.context||e.detail.context.length<1)return;const[t,o]=e.detail.context;let n=e.detail.checked;"unstaged"===o&&(n=!!e.detail.checked||"staged");const i=this.getChangeForRepo(t);null!=i&&i.checked!==n&&(i.checked=n,this.requestUpdate("state"),this.fireEvent("gl-patch-create-repo-checked",{repoUri:t,checked:n}))}onTreeItemSelected(e){if(!e.detail.context)return;const[t]=e.detail.context;this.fireEvent("gl-patch-file-compare-previous",{...t})}renderTreeViewWithModel(){if(null==this.createChanges||0===this.createChanges.length)return this.renderTreeView([{label:"No changes",path:"",level:1,branch:!1,checkable:!1,expanded:!0,checked:!1}]);const e=[],t=this.createChanges.length>1,o=this.isTree(this.filesModified??0),n=this.isCompact;if(t)for(const t of this.createChanges){const i=this.getTreeForChange(t,!0,o,n);null!=i&&e.push(...i)}else{const t=this.createChanges[0],i=this.getTreeForChange(t,!1,o,n);null!=i&&e.push(...i)}return this.renderTreeView(e,this.state?.preferences?.indentGuides)}getTreeForChange(e,t=!1,o=!1,n=!0){if(null==e.files||0===e.files.length)return;const i=[];if("wip"===e.type){const r=[],a=[];for(const t of e.files)t.staged?r.push(t):a.push(t);0===r.length||0===a.length?i.push(...this.renderFiles(e.files,o,n,t?2:1)):(a.length&&i.push({label:"Unstaged Changes",path:"",level:t?2:1,branch:!0,checkable:!0,expanded:!0,checked:!0===e.checked,context:[e.repository.uri,"unstaged"],children:this.renderFiles(a,o,n,t?3:2)}),r.length&&i.push({label:"Staged Changes",path:"",level:t?2:1,branch:!0,checkable:!0,expanded:!0,checked:!1!==e.checked,disableCheck:!0,children:this.renderFiles(r,o,n,t?3:2)}))}else i.push(...this.renderFiles(e.files,o,n));if(!t)return i;const r=this.repoToTreeModel(e.repository.name,e.repository.uri,{branch:!0,checkable:!0,checked:!1!==e.checked});return r.children=i,[r]}isTree(e){return"auto"===this.fileLayout?e>(this.state?.preferences?.files?.threshold??5):"tree"===this.fileLayout}createPatch(){if(!this.canSubmit)return 0===this.titleInput.value.length?(this.titleInput.setCustomValidity("Title is required"),this.titleInput.reportValidity(),this.titleInput.focus()):this.titleInput.setCustomValidity(""),void(null==this.selectedChanges||0===this.selectedChanges.length?this.validityMessage="Check at least one change":this.validityMessage=void 0);this.validityMessage=void 0,this.titleInput.setCustomValidity("");const e=this.selectedChanges.reduce(((e,[t,o])=>(e[t]=o,e)),{}),t={title:this.create.title??"",description:this.create.description,changesets:e,visibility:this.create.visibility};this.fireEvent("gl-patch-create-patch",t)}onCreateAll(e){this.createPatch()}onSelectCreateOption(e){}getChangeForRepo(e){return this.create.changes[e]}onTitleInput(e){this.create.title=e.target.value,this.fireEvent("gl-patch-create-update-metadata",{title:this.create.title,description:this.create.description,visibility:this.create.visibility})}onDescriptionInput(e){this.create.description=e.target.value,this.fireEvent("gl-patch-create-update-metadata",{title:this.create.title,description:this.create.description,visibility:this.create.visibility})}onVisibilityChange(e){this.create.visibility=e.target.value,this.fireEvent("gl-patch-create-update-metadata",{title:this.create.title,description:this.create.description,visibility:this.create.visibility})}createRenderRoot(){return this}onTreeItemActionClicked(e){if(!e.detail.context||!e.detail.action)return;switch(e.detail.action.action){case"show-patch-in-graph":this.onShowInGraph(e);break;case"file-open":this.onOpenFile(e)}}onOpenFile(e){if(!e.detail.context)return;const[t]=e.detail.context;this.fireEvent("gl-patch-file-open",{...t,showOptions:{preview:!1,viewColumn:e.detail.altKey?-2:void 0}})}onShowInGraph(e){}getFileActions(e,t){return[{icon:"go-to-file",label:"Open file",action:"file-open"}]}getRepoActions(e,t,o){return[{icon:"gl-graph",label:"Open in Commit Graph",action:"show-patch-in-graph"}]}};ai([ao({type:Object})],ci.prototype,"state",2),ai([ho("#title")],ci.prototype,"titleInput",2),ai([ho("#desc")],ci.prototype,"descInput",2),ai([co()],ci.prototype,"validityMessage",2),ci=ai([io("gl-patch-create")],ci);var li=Object.defineProperty,hi=Object.getOwnPropertyDescriptor,di=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?hi(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&li(t,o,r),r};let pi=class extends GlElement{constructor(){super(),this.indentPreference=16,Ze(qe,Ye,We,Ke)}get wipChangesCount(){return null==this.state?.create?0:Object.values(this.state.create.changes).reduce(((e,t)=>e+=t.files?.length??0),0)}get wipChangeState(){if(null==this.state?.create)return;const e=Object.values(this.state.create.changes).reduce(((e,t)=>(null!=t.files&&(e.files+=t.files.length,e.on.add(t.repository.uri)),e)),{files:0,on:new Set});return{count:e.files,branches:Array.from(e.on).join(", ")}}get mode(){return this.state?.mode??"view"}updateDocumentProperties(){const e=this.state?.preferences?.indent;if(e===this.indentPreference)return;this.indentPreference=e??16;document.documentElement.style.setProperty("--gitlens-tree-indent",`${this.indentPreference}px`)}updated(e){e.has("state")&&this.updateDocumentProperties()}render(){return Kt`
			<div class="commit-detail-panel scrollable">
				<main id="main" tabindex="-1">
					${fo("view"===this.mode,(()=>Kt`<gl-draft-details .state=${this.state} .explain=${this.explain}></gl-draft-details>`),(()=>Kt`<gl-patch-create .state=${this.state}></gl-patch-create>`))}
				</main>
			</div>
		`}createRenderRoot(){return this}};di([ao({type:Object})],pi.prototype,"state",2),di([ao({type:Object})],pi.prototype,"explain",2),di([ao({attribute:!1,type:Object})],pi.prototype,"app",2),pi=di([io("gl-patch-details-app")],pi);const ui="0000000000000000000000000000000000000000";class PatchDetailsApp extends App{constructor(){super("PatchDetailsApp")}onInitialize(){this.attachState()}onBind(){const e=[ie.on("[data-switch-value]","click",(e=>this.onToggleFilesLayout(e))),ie.on('[data-action="ai-explain"]',"click",(e=>this.onAIExplain(e))),ie.on('[data-action="switch-ai"]',"click",(e=>this.onSwitchAIModel(e))),ie.on('[data-action="mode"]',"click",(e=>this.onModeClicked(e))),ie.on("gl-draft-details","gl-patch-apply-patch",(e=>this.onApplyPatch(e.detail))),ie.on("gl-patch-details-app","change-patch-base",(e=>this.onChangePatchBase(e.detail))),ie.on("gl-patch-details-app","select-patch-repo",(e=>this.onSelectPatchRepo(e.detail))),ie.on("gl-patch-details-app","gl-patch-details-graph-show-patch",(e=>this.onShowPatchInGraph(e.detail))),ie.on("gl-patch-details-app","gl-patch-create-patch",(e=>this.onCreatePatch(e.detail))),ie.on("gl-patch-details-app","gl-patch-share-local-patch",(()=>this.onShareLocalPatch())),ie.on("gl-draft-details","gl-patch-details-copy-cloud-link",(()=>this.onCopyCloudLink())),ie.on("gl-patch-create","gl-patch-create-repo-checked",(e=>this.onCreateCheckRepo(e.detail))),ie.on("gl-patch-create","gl-patch-create-update-metadata",(e=>this.onCreateUpdateMetadata(e.detail))),ie.on("gl-patch-create,gl-draft-details","gl-patch-file-compare-previous",(e=>this.onCompareFileWithPrevious(e.detail))),ie.on("gl-patch-create,gl-draft-details","gl-patch-file-compare-working",(e=>this.onCompareFileWithWorking(e.detail))),ie.on("gl-patch-create,gl-draft-details","gl-patch-file-open",(e=>this.onOpenFile(e.detail))),ie.on("gl-draft-details","gl-patch-checked",(e=>this.onPatchChecked(e.detail)))];return e}onMessageReceived(e){switch(e.method){case A.method:o(A,e,(e=>{e.state,this.state=e.state,this.setState(this.state),this.attachState()}));break;case C.method:o(C,e,(e=>{this.state={...this.state,...e},this.setState(this.state),this.attachState(!0)}));break;case S.method:o(S,e,(e=>{this.state={...this.state,...e},this.setState(this.state),this.attachState(!0)}));break;case E.method:o(E,e,(e=>{this.state={...this.state,...e},this.setState(this.state),this.attachState(!0)}));break;case T.method:o(T,e,(e=>{const t=this.state.draft,o=t.patches,n=o.findIndex((t=>t.id===e.patch.id));o.splice(n,1,e.patch),this.state={...this.state,draft:t},this.setState(this.state),this.attachState(!0)}));break;default:super.onMessageReceived?.(e)}}onPatchChecked(e){this.sendCommand(l,e)}onCreateCheckRepo(e){this.sendCommand(x,e)}onCreateUpdateMetadata(e){this.sendCommand(k,e)}onShowPatchInGraph(e){}onCreatePatch(e){this.sendCommand(c,e)}onShareLocalPatch(){this.sendCommand(_,void 0)}onCopyCloudLink(){this.sendCommand(w,void 0)}onModeClicked(e){const t=e.target?.dataset.actionValue??void 0;t!==this.state.mode&&this.sendCommand(y,{mode:t})}onApplyPatch(e){null!=e.selectedPatches&&0!==e.selectedPatches.length&&this.sendCommand(a,{details:e.draft,target:e.target??"current",selected:e.selectedPatches})}onChangePatchBase(e){this.sendCommand(d,void 0)}onSelectPatchRepo(e){this.sendCommand(h,void 0)}onCommandClickedCore(e){const t=e?.startsWith("command:")?e.slice(8):e;null!=t&&this.sendCommand(r,{command:t})}onSwitchAIModel(e){this.onCommandClickedCore("gitlens.switchAIModel")}async onAIExplain(e){try{const e=await this.sendCommandWithCompletion(m,void 0,P);e.error?this.component.explain={error:{message:e.error.message??"Error retrieving content"}}:e.summary?this.component.explain={summary:e.summary}:this.component.explain=void 0}catch(e){this.component.explain={error:{message:"Error retrieving content"}}}}onToggleFilesLayout(e){const t=e.target?.dataset.switchValue??void 0;if(t===this.state.preferences.files?.layout)return;const o={...this.state.preferences.files,layout:t??"auto",compact:this.state.preferences.files?.compact??!0,threshold:this.state.preferences.files?.threshold??5,icon:this.state.preferences.files?.icon??"type"};this.state={...this.state,preferences:{...this.state.preferences,files:o}},this.attachState(),this.sendCommand(v,{files:o})}onOpenFileOnRemote(e){this.sendCommand(f,e)}onOpenFile(e){this.sendCommand(u,e)}onCompareFileWithWorking(e){this.sendCommand(b,e)}onCompareFileWithPrevious(e){this.sendCommand(g,e)}onFileMoreActions(e){this.sendCommand(p,e)}get component(){return null==this._component&&(this._component=document.getElementById("app"),this._component.app=this),this._component}attachState(e){this.component.state=this.state}}new PatchDetailsApp;var fi=t.N,bi=t.b;export{fi as PatchDetailsApp,bi as uncommittedSha};
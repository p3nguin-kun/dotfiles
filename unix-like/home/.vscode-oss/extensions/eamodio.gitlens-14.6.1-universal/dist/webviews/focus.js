var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};void 0!==e&&Object.defineProperty(e,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}});var t={};e.d(t,{S:()=>FocusApp});class IpcMessageType{constructor(e,t=!1,o=!1){this.method=e,this.reset=t,this.pack=o}}class IpcCommandType extends IpcMessageType{}class IpcNotificationType extends IpcMessageType{}function o(e,t,o){e.method===t.method&&o(t.params,e)}const n=new IpcCommandType("webview/ready"),i=new IpcCommandType("webview/focus");new IpcCommandType("command/execute"),new IpcCommandType("configuration/preview"),new IpcCommandType("configuration/update"),new IpcNotificationType("configuration/didChange"),new IpcNotificationType("configuration/didPreview"),new IpcNotificationType("webview/didOpenAnchor");const r=new IpcCommandType("focus/pr/openWorktree"),a=new IpcCommandType("focus/pr/openBranch"),c=new IpcCommandType("focus/pr/switchToBranch"),l=new IpcCommandType("focus/pr/snooze"),h=new IpcCommandType("focus/pr/pin"),d=new IpcCommandType("focus/issue/snooze"),u=new IpcCommandType("focus/issue/pin"),p=new IpcNotificationType("focus/didChange",!0);function f(e){const t=.001*performance.now();let o=Math.floor(t),n=Math.floor(t%1*1e9);return void 0!==e&&(o-=e[0],n-=e[1],n<0&&(o--,n+=1e9)),[o,n]}function b(e,t,o){let n,i,r,a,c;function l(e){const o=e-(i??0);return null==i||o>=t||o<0}function h(){const e=Date.now();if(l(e))d();else{c=setTimeout(h,t-(e-(i??0)))}}function d(){return c=void 0,n?function(){const t=n,o=r;return n=r=void 0,a=e.apply(o,t),a}():(n=r=void 0,a)}function u(...e){const d=Date.now(),u=l(d);return n=null!=o&&n?o(n,e):e,r=this,i=d,u&&null==c?(c=setTimeout(h,t),a):(null==c&&(c=setTimeout(h,t)),a)}return u.cancel=function(){null!=c&&clearTimeout(c),n=i=r=c=void 0},u.flush=function(){return null!=c?d():a},u.pending=function(){return null!=c},u}const g=",",m="=",v="{",y="(",w=")",_=/\(([\s\S]*)\)/,k=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,x=/\s?=.*$/;const A=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,o=!1){this.provider=e,this._isDebugging=o,this.logLevel=t}enabled(e){return this.level>=S(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=S(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){if(this.level<4&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!0,t)}`)}error(e,t,...o){if(this.level<1&&!this.isDebugging)return;let n;if(n=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??""}`,null==n){const t=e instanceof Error?e.stack:void 0;if(t){const e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(n=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${n??""}${this.toLoggableParams(!1,o)}${null!=e?`\n${String(e)}`:""}`)}log(e,...t){if(this.level<3&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}warn(e,...t){if(this.level<2&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map((e=>this.toLoggable(e,t))).join(", ")}]`;const o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,t)}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";const o=t.map((e=>this.toLoggable(e))).join(", ");return 0!==o.length?` — ${o}`:""}};function S(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}function C(e){let t;if("function"==typeof e){if(null==e.prototype?.constructor)return e.name;t=e.prototype.constructor.name??""}else t=e.constructor?.name??"";const o=t.indexOf("_");return-1===o?t:t.substr(o+1)}const E={enabled:e=>A.enabled(e)||A.isDebugging,log:(e,t,o,...n)=>{switch(e){case"error":A.error("",t,o,...n);break;case"warn":A.warn(t,o,...n);break;case"info":A.log(t,o,...n);break;default:A.debug(t,o,...n)}}},T=500,P=2**30,R=new Map;let O=0;function M(e){R.delete(e)}function B(e,t){if(null!=t)return{scopeId:t.scopeId,prefix:`${t.prefix}${e}`};const o=N();return{scopeId:o,prefix:`[${String(o).padStart(5)}] ${e}`}}function N(){return O===P&&(O=0),++O}var D=(e=>(e[e.Hash=35]="Hash",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Backslash=92]="Backslash",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.Z=90]="Z",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.z=122]="z",e))(D||{});const{fromCharCode:L}=String;new TextEncoder;function z(e){const[t,o]=f(e);return 1e3*t+Math.floor(o/1e6)}const I=Symbol("logInstanceNameFn");Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");class Stopwatch{constructor(e,t,...o){let n;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:B(e??""),n="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??E,this._time=f(),null!=n){if(!this.logProvider.enabled(this.logLevel))return;o.length?this.logProvider.log(this.logLevel,this.logScope,`${n.message??""}${n.suffix??""}`,...o):this.logProvider.log(this.logLevel,this.logScope,`${n.message??""}${n.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){const[e,t]=f(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=f(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);const[o,n]=f(this._time),i=1e3*o+Math.floor(n/1e6),r=e?.message??"";this.logProvider.log(i>250?"warn":this.logLevel,this.logScope,`${r?`${r} `:""}[${i}ms]${e?.suffix??""}`)}}var H,U;function F(e,t){const o=e+t,n=t<0?o<0?0:o:o>255?255:o;return Math.round(n)}function j(e,t){return q(e,-t)}function q(e,t){const o=function(e){const t=oe(e);return null==t?null:[t.rgba.r,t.rgba.g,t.rgba.b,t.rgba.a]}(e);if(null==o)return e;const[n,i,r,a]=o,c=255*t/100;return`rgba(${F(n,c)}, ${F(i,c)}, ${F(r,c)}, ${a})`}function W(e,t){const o=J.from(e);return null==o?e:o.transparent(t/100).toString()}(U=H||(H={})).on=function(e,t,o,n){let i=!1;if("string"==typeof e){const r=function(t){const n=t?.target?.closest(e);null!=n&&o(t,n)};return document.addEventListener(t,r,n??!0),{dispose:()=>{i||(i=!0,document.removeEventListener(t,r,n??!0))}}}const r=function(e){o(e,this)};return e.addEventListener(t,r,n??!1),{dispose:()=>{i||(i=!0,e.removeEventListener(t,r,n??!1))}}},U.insertTemplate=function(e,t,o){const n=document.getElementById(e);if(t.replaceChildren(n?.content.cloneNode(!0)),t.className=n.className,null!=o?.visible){const e=t.querySelectorAll("[data-visible]");for(const t of e){const e=t.dataset.visible;e&&(o.visible[e]?t.style.display="initial":t.style.display="none")}}if(null!=o?.bindings){const e=t.querySelectorAll("[data-bind]");for(const t of e){const e=t.dataset.bind;if(!e)continue;const n=o.bindings[e];null!=n&&(t.textContent=String(n))}}},U.resetSlot=function(e){e.replaceChildren(),e.className=""};function G(e,t){const o=Math.pow(10,t);return Math.round(e*o)/o}class RGBA{constructor(e,t,o,n=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,o)),this.a=G(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}}class HSLA{constructor(e,t,o,n){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=G(Math.max(Math.min(1,t),0),3),this.l=G(Math.max(Math.min(1,o),0),3),this.a=G(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,n=e.b/255,i=e.a,r=Math.max(t,o,n),a=Math.min(t,o,n);let c=0,l=0;const h=(a+r)/2,d=r-a;if(d>0){switch(l=Math.min(h<=.5?d/(2*h):d/(2-2*h),1),r){case t:c=(o-n)/d+(o<n?6:0);break;case o:c=(n-t)/d+2;break;case n:c=(t-o)/d+4}c*=60,c=Math.round(c)}return new HSLA(c,l,h,i)}static _hue2rgb(e,t,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+6*(t-e)*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}static toRGBA(e){const t=e.h/360,{s:o,l:n,a:i}=e;let r,a,c;if(0===o)r=a=c=n;else{const e=n<.5?n*(1+o):n+o-n*o,i=2*n-e;r=HSLA._hue2rgb(i,e,t+1/3),a=HSLA._hue2rgb(i,e,t),c=HSLA._hue2rgb(i,e,t-1/3)}return new RGBA(Math.round(255*r),Math.round(255*a),Math.round(255*c),i)}}class HSVA{constructor(e,t,o,n){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=G(Math.max(Math.min(1,t),0),3),this.v=G(Math.max(Math.min(1,o),0),3),this.a=G(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,n=e.b/255,i=Math.max(t,o,n),r=i-Math.min(t,o,n),a=0===i?0:r/i;let c;return c=0===r?0:i===t?((o-n)/r%6+6)%6:i===o?(n-t)/r+2:(t-o)/r+4,new HSVA(Math.round(60*c),a,i,e.a)}static toRGBA(e){const{h:t,s:o,v:n,a:i}=e,r=n*o,a=r*(1-Math.abs(t/60%2-1)),c=n-r;let[l,h,d]=[0,0,0];return t<60?(l=r,h=a):t<120?(l=a,h=r):t<180?(h=r,d=a):t<240?(h=a,d=r):t<300?(l=a,d=r):t<=360&&(l=r,d=a),l=Math.round(255*(l+c)),h=Math.round(255*(h+c)),d=Math.round(255*(d+c)),new RGBA(l,h,d,i)}}function Y(e,t){return t.getPropertyValue(e).trim()}const K=class _Color{static from(e){return e instanceof _Color?e:oe(e)||_Color.red}static fromCssVariable(e,t){return oe(Y(e,t))||_Color.red}static fromHex(e){return ne(e)||_Color.red}static equals(e,t){return!e&&!t||!(!e||!t)&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(!e)throw new Error("Color needs a value");if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else{if(!(e instanceof HSVA))throw new Error("Invalid color ctor argument");this._hsva=e,this.rgba=HSVA.toRGBA(e)}}equals(e){return null!=e&&(Boolean(e)&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva))}getRelativeLuminance(){return G(.2126*_Color._relativeLuminanceForComponent(this.rgba.r)+.7152*_Color._relativeLuminanceForComponent(this.rgba.g)+.0722*_Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new J(new RGBA(0,0,0,e.rgba.a));if(1===t)return new J(new RGBA(255,255,255,e.rgba.a));const o=e.getRelativeLuminance();let n=20;const i=(e,o)=>{const r=e.mix(o,.5),a=r.getRelativeLuminance();return Math.abs(t-a)<1e-7||!n--?r:a>t?i(e,r):i(r,o)},r=(o>t?i(J.black,e):i(e,J.white)).rgba;return new J(new RGBA(r.r,r.g,r.b,e.rgba.a))}(this,e)}getContrastRatio(e){const t=this.getRelativeLuminance(),o=e.getRelativeLuminance();return t>o?(t+.05)/(o+.05):(o+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){const{r:t,g:o,b:n,a:i}=this.rgba;return new _Color(new RGBA(t,o,n,i*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new _Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){const t=e.rgba,o=this.rgba.a,n=t.a,i=o+n*(1-o);if(i<1e-6)return _Color.transparent;const r=this.rgba.r*o/i+t.r*n*(1-o)/i,a=this.rgba.g*o/i+t.g*n*(1-o)/i,c=this.rgba.b*o/i+t.b*n*(1-o)/i;return new _Color(new RGBA(r,a,c,i))}mix(e,t){return function(e,t,o){const n=e.rgba,i=t.rgba;return new J(new RGBA(n.r+o*(i.r-n.r),n.g+o*(i.g-n.g),n.b+o*(i.b-n.b),n.a+o*(i.a-n.a)))}(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;const{r:t,g:o,b:n,a:i}=this.rgba;return new _Color(new RGBA(e.rgba.r-i*(e.rgba.r-t),e.rgba.g-i*(e.rgba.g-o),e.rgba.b-i*(e.rgba.b-n),1))}flatten(...e){const t=e.reduceRight(((e,t)=>_Color._flatten(t,e)));return _Color._flatten(this,t)}static _flatten(e,t){const o=1-e.rgba.a;return new _Color(new RGBA(o*t.rgba.r+e.rgba.a*e.rgba.r,o*t.rgba.g+e.rgba.a*e.rgba.g,o*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){if(e.isOpaque())return ee(e);return Z(e)}(this)),this._toString}static getLighterColor(e,t,o){if(e.isLighterThan(t))return e;o=o||.5;const n=e.getRelativeLuminance(),i=t.getRelativeLuminance();return o=o*(i-n)/i,e.lighten(o)}static getDarkerColor(e,t,o){if(e.isDarkerThan(t))return e;o=o||.5;const n=e.getRelativeLuminance();return o=o*(n-t.getRelativeLuminance())/n,e.darken(o)}};K.white=new K(new RGBA(255,255,255,1)),K.black=new K(new RGBA(0,0,0,1)),K.red=new K(new RGBA(255,0,0,1)),K.blue=new K(new RGBA(0,0,255,1)),K.green=new K(new RGBA(0,255,0,1)),K.cyan=new K(new RGBA(0,255,255,1)),K.lightgrey=new K(new RGBA(211,211,211,1)),K.transparent=new K(new RGBA(0,0,0,0));let J=K;function Z(e){return`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}function X(e){const t=e.toString(16);return 2!==t.length?`0${t}`:t}function ee(e){return`#${X(e.rgba.r)}${X(e.rgba.g)}${X(e.rgba.b)}`}const te=/^((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function oe(e){if(0===(e=e.trim()).length)return null;if(e.charCodeAt(0)===D.Hash)return ne(e);const t=te.exec(e);if(null==t)return null;const o=t[1];let n;switch(o){case"rgb":case"hsl":n=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),1];break;case"rgba":case"hsla":n=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),parseFloat(t[5])];break;default:return null}switch(o){case"rgb":case"rgba":return new J(new RGBA(n[0],n[1],n[2],n[3]));case"hsl":case"hsla":return new J(new HSLA(n[0],n[1],n[2],n[3]))}return J.red}function ne(e){const t=(e=e.trim()).length;if(0===t)return null;if(e.charCodeAt(0)!==D.Hash)return null;switch(t){case 7:{const t=16*ie(e.charCodeAt(1))+ie(e.charCodeAt(2)),o=16*ie(e.charCodeAt(3))+ie(e.charCodeAt(4)),n=16*ie(e.charCodeAt(5))+ie(e.charCodeAt(6));return new J(new RGBA(t,o,n,1))}case 9:{const t=16*ie(e.charCodeAt(1))+ie(e.charCodeAt(2)),o=16*ie(e.charCodeAt(3))+ie(e.charCodeAt(4)),n=16*ie(e.charCodeAt(5))+ie(e.charCodeAt(6)),i=16*ie(e.charCodeAt(7))+ie(e.charCodeAt(8));return new J(new RGBA(t,o,n,i/255))}case 4:{const t=ie(e.charCodeAt(1)),o=ie(e.charCodeAt(2)),n=ie(e.charCodeAt(3));return new J(new RGBA(16*t+t,16*o+o,16*n+n))}case 5:{const t=ie(e.charCodeAt(1)),o=ie(e.charCodeAt(2)),n=ie(e.charCodeAt(3)),i=ie(e.charCodeAt(4));return new J(new RGBA(16*t+t,16*o+o,16*n+n,(16*i+i)/255))}default:return null}}function ie(e){switch(e){case D.Digit0:return 0;case D.Digit1:return 1;case D.Digit2:return 2;case D.Digit3:return 3;case D.Digit4:return 4;case D.Digit5:return 5;case D.Digit6:return 6;case D.Digit7:return 7;case D.Digit8:return 8;case D.Digit9:return 9;case D.a:case D.A:return 10;case D.b:case D.B:return 11;case D.c:case D.C:return 12;case D.d:case D.D:return 13;case D.e:case D.E:return 14;case D.f:case D.F:return 15}return 0}const se=class _Emitter{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(e,t,o)=>{null==this.listeners&&(this.listeners=new LinkedList);const n=this.listeners.push(null==t?e:[e,t]),i={dispose:()=>{i.dispose=_Emitter._noop,this._disposed||n()}};return Array.isArray(o)&&o.push(i),i}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){const[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};se._noop=function(){};let re=se;const ae={done:!0,value:void 0},ce=class _Node{constructor(e){this.element=e,this.next=_Node.Undefined,this.prev=_Node.Undefined}};ce.Undefined=new ce(void 0);let le=ce;class LinkedList{constructor(){this._first=le.Undefined,this._last=le.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===le.Undefined}clear(){this._first=le.Undefined,this._last=le.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){const o=new le(e);if(this._first===le.Undefined)this._first=o,this._last=o;else if(t){const e=this._last;this._last=o,o.prev=e,e.next=o}else{const e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let n=!1;return()=>{n||(n=!0,this._remove(o))}}shift(){if(this._first===le.Undefined)return;const e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===le.Undefined)return;const e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==le.Undefined&&e.next!==le.Undefined){const t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===le.Undefined&&e.next===le.Undefined?(this._first=le.Undefined,this._last=le.Undefined):e.next===le.Undefined?(this._last=this._last.prev,this._last.next=le.Undefined):e.prev===le.Undefined&&(this._first=this._first.next,this._first.prev=le.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===le.Undefined?ae:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){const e=[];for(let t=this._first;t!==le.Undefined;t=t.next)e.push(t.element);return e}}const he=new re,de=he.event;function ue(e){const t=document.documentElement,o=window.getComputedStyle(t),n=document.body.classList,i=n.contains("vscode-light")||n.contains("vscode-high-contrast-light"),r=n.contains("vscode-high-contrast")||n.contains("vscode-high-contrast-light"),a=t.style,c=Y("--vscode-editor-background",o);let l=Y("--vscode-editor-foreground",o);l||(l=Y("--vscode-foreground",o));let h=Y("--color-background",o);return a.setProperty("--color-background--lighten-05",q(h,5)),a.setProperty("--color-background--darken-05",j(h,5)),a.setProperty("--color-background--lighten-075",q(h,7.5)),a.setProperty("--color-background--darken-075",j(h,7.5)),a.setProperty("--color-background--lighten-10",q(h,10)),a.setProperty("--color-background--darken-10",j(h,10)),a.setProperty("--color-background--lighten-15",q(h,15)),a.setProperty("--color-background--darken-15",j(h,15)),a.setProperty("--color-background--lighten-30",q(h,30)),a.setProperty("--color-background--darken-30",j(h,30)),a.setProperty("--color-background--lighten-50",q(h,50)),a.setProperty("--color-background--darken-50",j(h,50)),h=Y("--color-button-background",o),a.setProperty("--color-button-background--darken-30",j(h,30)),h=Y("--color-highlight",o),a.setProperty("--color-highlight--75",W(h,75)),a.setProperty("--color-highlight--50",W(h,50)),a.setProperty("--color-highlight--25",W(h,25)),h=Y("--color-button-secondary-background",o),a.setProperty("--color-button-secondary-background--darken-30",j(h,30)),h=Y("--color-foreground",o),a.setProperty("--color-foreground--85",W(h,85)),a.setProperty("--color-foreground--75",W(h,75)),a.setProperty("--color-foreground--65",W(h,65)),a.setProperty("--color-foreground--50",W(h,50)),h=Y("--color-link-foreground",o),a.setProperty("--color-link-foreground--darken-20",j(h,20)),a.setProperty("--color-link-foreground--lighten-20",q(h,20)),h=Y("--color-alert-infoBackground",o),a.setProperty("--color-alert-infoHoverBackground",i?j(h,5):q(h,5)),h=Y("--color-alert-warningBackground",o),a.setProperty("--color-alert-warningHoverBackground",i?j(h,5):q(h,5)),h=Y("--color-alert-errorBackground",o),a.setProperty("--color-alert-errorHoverBackground",i?j(h,5):q(h,5)),h=i?j(c,5):q(c,5),a.setProperty("--color-alert-neutralBackground",h),a.setProperty("--color-alert-neutralHoverBackground",i?j(h,5):q(h,5)),{colors:{background:c,foreground:l},computedStyle:o,isLightTheme:i,isHighContrastTheme:r,isInitializing:null==e}}var pe=Object.defineProperty,fe=Object.getOwnPropertyDescriptor;let be=0;function ge(){return 1073741824===be?be=1:be++,`webview:${be}`}const me=new TextDecoder;class App{constructor(e){this.appName=e;const t=[],o=ue();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(o),t.push(de(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",A.configure({name:e,createChannel:function(e){return{name:e,appendLine:function(e){}}}},"off"),this.log(`${e}()`),this._api=acquireVsCodeApi(),null!=this.state){const e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){const e=new MutationObserver((e=>{he.fire(ue(e))}));return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame((()=>{this.log(`${e}(): initializing...`);try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(H.on(window,"message",(e=>this.onMessageReceivedCore(e)))),this.sendCommand(n,void 0),this.onInitialized?.()}finally{document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}})),t.push(H.on(window,"pagehide",(()=>{t?.forEach((e=>e.dispose())),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=void 0})))}onMessageReceivedCore(e){const t=R.get(O),o=e.data;if(o.packed&&o.params instanceof Uint8Array){const n=function(e,t,...o){return(t?.provider??E).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...o):void 0}(B(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});o.params=JSON.parse(me.decode(o.params)),n?.stop()}this.onMessageReceived(o)}bind(){this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);const e=b((e=>{this.sendCommand(i,e)}),150);this.bindDisposables.push(H.on(document,"focusin",(t=>{const o=t.composedPath().some((e=>"INPUT"===e.tagName));!0===this._focused&&this._inputFocused===o||(this._focused=!0,this._inputFocused=o,e({focused:!0,inputFocused:o}))})),H.on(document,"focusout",(()=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))})))}log(e,...t){"string"==typeof e?A.log(e,...t):A.log(e,t.shift(),...t)}getState(){return this._api.getState()}sendCommand(e,t){const o=ge();this.log(`${this.appName}.sendCommand(${o}): name=${e.method}`),this.postMessage({id:o,method:e.method,params:t})}async sendCommandWithCompletion(e,t,n){const i=ge();this.log(`${this.appName}.sendCommandWithCompletion(${i}): name=${e.method}`);const r=new Promise(((e,t)=>{let r;const a=[H.on(window,"message",(t=>{o(n,t.data,(o=>{t.data.completionId===i&&(a.forEach((e=>e.dispose())),queueMicrotask((()=>e(o))))}))})),{dispose:function(){null!=r&&(clearTimeout(r),r=void 0)}}];r=setTimeout((()=>{r=void 0,a.forEach((e=>e.dispose())),t(new Error(`Timed out waiting for completion of ${n.method}`))}),6e4)}));return this.postMessage({id:i,method:e.method,params:t,completionId:i}),r}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}}var ve;((e,t,o,n)=>{for(var i,r=n>1?void 0:n?fe(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n?i(t,o,r):i(r))||r);n&&r&&pe(t,o,r)})([(ve={args:{0:e=>`${e.data.id}, method=${e.data.method}`}},function(e,t=!1){let o,n,i,r,a=0,c=!1,l=!1,h=!0;null!=e&&({args:o,enter:n,exit:i,prefix:r,logThreshold:a=0,scoped:c=!0,singleLine:l=!1,timed:h=!0}=e),a>0&&(l=!0,h=!0),h&&(c=!0);const d=A.isDebugging,u=t?A.debug:A.log,p=d?"debug":"info";return(e,t,b)=>{let S,E;if("function"==typeof b.value?(S=b.value,E="value"):"function"==typeof b.get&&(S=b.get,E="get"),null==S||null==E)throw new Error("Not supported");const P=!1!==o?function(e){if("function"!=typeof e)throw new Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e);t=t.replace(k,"")||t,t=t.slice(0,t.indexOf(v));let o=t.indexOf(y),n=t.indexOf(w);o=o>=0?o+1:0,n=n>0?n:t.indexOf(m),t=t.slice(o,n),t=`(${t})`;const i=_.exec(t);return null!=i?i[1].split(g).map((e=>e.trim().replace(x,""))):[]}(S):[];b[E]=function(...e){if(!d&&!A.enabled(p))return S.apply(this,e);const b=N(),g=null!=this?this.constructor?.[I]?.(this,C(this))??C(this):void 0;let m,v=g?c?`[${b.toString(16).padStart(5)}] ${g}.${t}`:`${g}.${t}`:t;null!=r&&(v=r({id:b,instance:this,instanceName:g??"",name:t,prefix:v},...e)),c&&(m={scopeId:b,prefix:v},function(e,t){R.set(e,t)}(b,m));const y=null!=n?n(...e):"";let w;if(!1===o||0===e.length)w="",l||u.call(A,`${v}${y}`);else{let t;w="";let n,i,r,a=-1;for(r of e){if(n=P[++a],t=o?.[a],null!=t){if("boolean"==typeof t)continue;if(w.length>0&&(w+=", "),"string"==typeof t){w+=t;continue}i=String(t(r))}else w.length>0&&(w+=", "),i=A.toLoggable(r);w+=n?`${n}=${i}`:i}l||u.call(A,w?`${v}${y}(${w})`:`${v}${y}`)}if(l||h||null!=i){const t=h?f():void 0,o=e=>{const o=void 0!==t?` [${z(t)}ms]`:"";l?A.error(e,w?`${v}${y}(${w})`:`${v}${y}`,m?.exitDetails?`failed${m.exitDetails}${o}`:`failed${o}`):A.error(e,v,m?.exitDetails?`failed${m.exitDetails}${o}`:`failed${o}`),c&&M(b)};let n;try{n=S.apply(this,e)}catch(e){throw o(e),e}const r=e=>{let o,n,r,h;if(null!=t?(o=z(t),o>T?(n=A.warn,r=` [*${o}ms] (slow)`):(n=u,r=` [${o}ms]`)):(r="",n=u),null!=i)if("function"==typeof i)try{h=i(e)}catch(e){h=`@log.exit error: ${e}`}else!0===i&&(h=`returned ${A.toLoggable(e)}`);else m?.exitFailed?(h=m.exitFailed,n=A.error):h="completed";l?(0===a||o>a)&&n.call(A,w?`${v}${y}(${w}) ${h}${m?.exitDetails||""}${r}`:`${v}${y} ${h}${m?.exitDetails||""}${r}`):n.call(A,w?`${v}(${w}) ${h}${m?.exitDetails||""}${r}`:`${v} ${h}${m?.exitDetails||""}${r}`),c&&M(b)};return null!=n&&null!=(_=n)&&(_ instanceof Promise||"function"==typeof _?.then)?n.then(r,o):r(n),n}var _;return S.apply(this,e)}}}(ve,!0))],App.prototype,"onMessageReceivedCore",1);var ye={408:(e,t)=>{var o=Symbol.for("react.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),l=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator,b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function v(e,t,o){this.props=e,this.context=t,this.refs=m,this.updater=o||b}function y(){}function w(e,t,o){this.props=e,this.context=t,this.refs=m,this.updater=o||b}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var _=w.prototype=new y;_.constructor=w,g(_,v.prototype),_.isPureReactComponent=!0;var k=Array.isArray,x=Object.prototype.hasOwnProperty,A={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var i,r={},a=null,c=null;if(null!=t)for(i in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)x.call(t,i)&&!S.hasOwnProperty(i)&&(r[i]=t[i]);var l=arguments.length-2;if(1===l)r.children=n;else if(1<l){for(var h=Array(l),d=0;d<l;d++)h[d]=arguments[d+2];r.children=h}if(e&&e.defaultProps)for(i in l=e.defaultProps)void 0===r[i]&&(r[i]=l[i]);return{$$typeof:o,type:e,key:a,ref:c,props:r,_owner:A.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var T=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,i,r,a){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var l=!1;if(null===e)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case n:l=!0}}if(l)return a=a(l=e),e=""===r?"."+P(l,0):r,k(a)?(i="",null!=e&&(i=e.replace(T,"$&/")+"/"),R(a,t,i,"",(function(e){return e}))):null!=a&&(E(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,i+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(T,"$&/")+"/")+e)),t.push(a)),1;if(l=0,r=""===r?".":r+":",k(e))for(var h=0;h<e.length;h++){var d=r+P(c=e[h],h);l+=R(c,t,i,d,a)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),h=0;!(c=e.next()).done;)l+=R(c=c.value,t,i,d=r+P(c,h++),a);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function O(e,t,o){if(null==e)return e;var n=[],i=0;return R(e,n,"","",(function(e){return t.call(o,e,i++)})),n}function M(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var B={current:null},N={transition:null},D={ReactCurrentDispatcher:B,ReactCurrentBatchConfig:N,ReactCurrentOwner:A};t.Children={map:O,forEach:function(e,t,o){O(e,(function(){t.apply(this,arguments)}),o)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=i,t.Profiler=a,t.PureComponent=w,t.StrictMode=r,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=g({},e.props),r=e.key,a=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,c=A.current),void 0!==t.key&&(r=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(h in t)x.call(t,h)&&!S.hasOwnProperty(h)&&(i[h]=void 0===t[h]&&void 0!==l?l[h]:t[h])}var h=arguments.length-2;if(1===h)i.children=n;else if(1<h){l=Array(h);for(var d=0;d<h;d++)l[d]=arguments[d+2];i.children=l}return{$$typeof:o,type:e.type,key:r,ref:a,props:i,_owner:c}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:h,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:M}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=N.transition;N.transition={};try{e()}finally{N.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return B.current.useCallback(e,t)},t.useContext=function(e){return B.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return B.current.useDeferredValue(e)},t.useEffect=function(e,t){return B.current.useEffect(e,t)},t.useId=function(){return B.current.useId()},t.useImperativeHandle=function(e,t,o){return B.current.useImperativeHandle(e,t,o)},t.useInsertionEffect=function(e,t){return B.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return B.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return B.current.useMemo(e,t)},t.useReducer=function(e,t,o){return B.current.useReducer(e,t,o)},t.useRef=function(e){return B.current.useRef(e)},t.useState=function(e){return B.current.useState(e)},t.useSyncExternalStore=function(e,t,o){return B.current.useSyncExternalStore(e,t,o)},t.useTransition=function(){return B.current.useTransition()},t.version="18.2.0"},294:(e,t,o)=>{e.exports=o(408)}},we={};function _e(e){var t=we[e];if(void 0!==t)return t.exports;var o=we[e]={exports:{}};return ye[e](o,o.exports,_e),o.exports}_e.d=(e,t)=>{for(var o in t)_e.o(t,o)&&!_e.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},_e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var ke={};(()=>{_e.d(ke,{Tn:()=>Se,qE:()=>He,HE:()=>Le,Ct:()=>Be,zx:()=>Ge,M1:()=>Je,sX:()=>bo,D0:()=>yo,fs:()=>vo,Tw:()=>Bt,ud:()=>zt,wt:()=>It,ne:()=>Ut,Ku:()=>qt,FU:()=>Gt,XO:()=>lo,Ze:()=>ho,K$:()=>uo,cX:()=>Ao,Js:()=>So,J9:()=>Co,si:()=>so,sg:()=>To,hW:()=>Po,II:()=>Ro,v2:()=>Mo,sN:()=>Do,Lb:()=>Ho,J2:()=>xe,$$:()=>po,Vp:()=>Bo,u:()=>$e,fW:()=>Oo,WV:()=>ae,h4:()=>re,kZ:()=>se});const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new WeakMap;class s{constructor(e,t,n){if(this._$cssResult$=!0,n!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const o=this.t;if(t&&void 0===e){const t=void 0!==o&&1===o.length;t&&(e=n.get(o)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&n.set(o,e))}return e}toString(){return this.cssText}}const i=(e,...t)=>{const n=1===e.length?e[0]:t.reduce(((t,o,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1]),e[0]);return new s(n,e,o)},r=(o,n)=>{if(t)o.adoptedStyleSheets=n.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const t of n){const n=document.createElement("style"),i=e.litNonce;void 0!==i&&n.setAttribute("nonce",i),n.textContent=t.cssText,o.appendChild(n)}},a=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new s("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:c,defineProperty:l,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,f=globalThis,b=f.trustedTypes,g=b?b.emptyScript:"",m=f.reactiveElementPolyfillSupport,v=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},w=(e,t)=>!c(e,t),_={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:w};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),n=this.getPropertyDescriptor(e,o,t);void 0!==n&&l(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){const{get:n,set:i}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return n?.call(this)},set(t){const r=n?.call(this);i.call(this,t),this.requestUpdate(e,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const e=p(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...d(e),...u(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$ES??=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$ES?.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return r(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$ES?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t){const o=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,o);if(void 0!==n&&!0===o.reflect){const i=(void 0!==o.converter?.toAttribute?o.converter:y).toAttribute(t,o.type);this._$Em=e,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(e,t){const o=this.constructor,n=o._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=o.getPropertyOptions(n),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:y;this._$Em=n,this[n]=i.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o,n=!1,i){if(void 0!==e){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??w)(n?i:this[e],t))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$ES?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$ES?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EO(e,this[e]))),this._$ET()}updated(e){}firstUpdated(e){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[v("elementProperties")]=new Map,$[v("finalized")]=new Map,m?.({ReactiveElement:$}),(f.reactiveElementVersions??=[]).push("2.0.0");const k=globalThis,x=k.trustedTypes,A=x?x.createPolicy("lit-html",{createHTML:e=>e}):void 0,S="$lit$",C=`lit$${(Math.random()+"").slice(9)}$`,E="?"+C,T=`<${E}>`,P=document,R=()=>P.createComment(""),O=e=>null===e||"object"!=typeof e&&"function"!=typeof e,M=Array.isArray,B="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,L=/>/g,z=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,H=/"/g,U=/^(?:script|style|textarea|title)$/i,F=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),j=F(1),q=(F(2),Symbol.for("lit-noChange")),W=Symbol.for("lit-nothing"),G=new WeakMap,Y=P.createTreeWalker(P,129);function K(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(t):t}class Q{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let i=0,r=0;const a=e.length-1,c=this.parts,[l,h]=((e,t)=>{const o=e.length-1,n=[];let i,r=2===t?"<svg>":"",a=N;for(let t=0;t<o;t++){const o=e[t];let c,l,h=-1,d=0;for(;d<o.length&&(a.lastIndex=d,l=a.exec(o),null!==l);)d=a.lastIndex,a===N?"!--"===l[1]?a=D:void 0!==l[1]?a=L:void 0!==l[2]?(U.test(l[2])&&(i=RegExp("</"+l[2],"g")),a=z):void 0!==l[3]&&(a=z):a===z?">"===l[0]?(a=i??N,h=-1):void 0===l[1]?h=-2:(h=a.lastIndex-l[2].length,c=l[1],a=void 0===l[3]?z:'"'===l[3]?H:I):a===H||a===I?a=z:a===D||a===L?a=N:(a=z,i=void 0);const u=a===z&&e[t+1].startsWith("/>")?" ":"";r+=a===N?o+T:h>=0?(n.push(c),o.slice(0,h)+S+o.slice(h)+C+u):o+C+(-2===h?t:u)}return[K(e,r+(e[o]||"<?>")+(2===t?"</svg>":"")),n]})(e,t);if(this.el=Q.createElement(l,o),Y.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=Y.nextNode())&&c.length<a;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(S)){const t=h[r++],o=n.getAttribute(e).split(C),a=/([.?@])?(.*)/.exec(t);c.push({type:1,index:i,name:a[2],strings:o,ctor:"."===a[1]?it:"?"===a[1]?rt:"@"===a[1]?st:nt}),n.removeAttribute(e)}else e.startsWith(C)&&(c.push({type:6,index:i}),n.removeAttribute(e));if(U.test(n.tagName)){const e=n.textContent.split(C),t=e.length-1;if(t>0){n.textContent=x?x.emptyScript:"";for(let o=0;o<t;o++)n.append(e[o],R()),Y.nextNode(),c.push({type:2,index:++i});n.append(e[t],R())}}}else if(8===n.nodeType)if(n.data===E)c.push({type:2,index:i});else{let e=-1;for(;-1!==(e=n.data.indexOf(C,e+1));)c.push({type:7,index:i}),e+=C.length-1}i++}}static createElement(e,t){const o=P.createElement("template");return o.innerHTML=e,o}}function J(e,t,o=e,n){if(t===q)return t;let i=void 0!==n?o._$Co?.[n]:o._$Cl;const r=O(t)?void 0:t._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),void 0===r?i=void 0:(i=new r(e),i._$AT(e,o,n)),void 0!==n?(o._$Co??=[])[n]=i:o._$Cl=i),void 0!==i&&(t=J(e,i._$AS(e,t.values),i,n)),t}class et{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,n=(e?.creationScope??P).importNode(t,!0);Y.currentNode=n;let i=Y.nextNode(),r=0,a=0,c=o[0];for(;void 0!==c;){if(r===c.index){let t;2===c.type?t=new ot(i,i.nextSibling,this,e):1===c.type?t=new c.ctor(i,c.name,c.strings,this,e):6===c.type&&(t=new at(i,this,e)),this._$AV.push(t),c=o[++a]}r!==c?.index&&(i=Y.nextNode(),r++)}return Y.currentNode=P,n}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class ot{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,n){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=J(this,e,t),O(e)?e===W||null==e||""===e?(this._$AH!==W&&this._$AR(),this._$AH=W):e!==this._$AH&&e!==q&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>M(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==W&&O(this._$AH)?this._$AA.nextSibling.data=e:this.$(P.createTextNode(e)),this._$AH=e}g(e){const{values:t,_$litType$:o}=e,n="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=Q.createElement(K(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new et(n,this),o=e.u(this.options);e.p(t),this.$(o),this._$AH=e}}_$AC(e){let t=G.get(e.strings);return void 0===t&&G.set(e.strings,t=new Q(e)),t}T(e){M(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,n=0;for(const i of e)n===t.length?t.push(o=new ot(this.k(R()),this.k(R()),this,this.options)):o=t[n],o._$AI(i),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class nt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,n,i){this.type=1,this._$AH=W,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=W}_$AI(e,t=this,o,n){const i=this.strings;let r=!1;if(void 0===i)e=J(this,e,t,0),r=!O(e)||e!==this._$AH&&e!==q,r&&(this._$AH=e);else{const n=e;let a,c;for(e=i[0],a=0;a<i.length-1;a++)c=J(this,n[o+a],t,a),c===q&&(c=this._$AH[a]),r||=!O(c)||c!==this._$AH[a],c===W?e=W:e!==W&&(e+=(c??"")+i[a+1]),this._$AH[a]=c}r&&!n&&this.j(e)}j(e){e===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class it extends nt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===W?void 0:e}}class rt extends nt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==W)}}class st extends nt{constructor(e,t,o,n,i){super(e,t,o,n,i),this.type=5}_$AI(e,t=this){if((e=J(this,e,t,0)??W)===q)return;const o=this._$AH,n=e===W&&o!==W||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==W&&(o===W||n);n&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class at{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){J(this,e)}}const Z=k.litHtmlPolyfillSupport;Z?.(Q,ot),(k.litHtmlVersions??=[]).push("3.0.0");class ct extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const n=o?.renderBefore??t;let i=n._$litPart$;if(void 0===i){const e=o?.renderBefore??null;n._$litPart$=i=new ot(t.insertBefore(R(),e),e,void 0,o??{})}return i._$AI(e),i})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}ct._$litElement$=!0,ct.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ct});const X=globalThis.litElementPolyfillSupport;X?.({LitElement:ct}),(globalThis.litElementVersions??=[]).push("4.0.0");const ee={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:w},te=(e=ee,t,o)=>{const{kind:n,metadata:i}=o;let r=globalThis.litPropertyMetadata.get(i);if(void 0===r&&globalThis.litPropertyMetadata.set(i,r=new Map),r.set(o.name,e),"accessor"===n){const{name:n}=o;return{set(o){const i=t.get.call(this);t.set.call(this,o),this.requestUpdate(n,i,e)},init(t){return void 0!==t&&this.C(n,void 0,e),t}}}if("setter"===n){const{name:n}=o;return function(o){const i=this[n];t.call(this,o),this.requestUpdate(n,i,e)}}throw Error("Unsupported decorator location: "+n)};function oe(e){return(t,o)=>"object"==typeof o?te(e,t,o):((e,t,o)=>{const n=t.hasOwnProperty(o);return t.constructor.createProperty(o,n?{...e,wrapped:!0}:e),n?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}const ne=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function ie(e,t){return(o,n,i)=>{const r=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:a}="object"==typeof n?o:i??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return ne(o,n,{get(){if(t){let t=e.call(this);return void 0===t&&(t=r(this),a.call(this,t)),t}return r(this)}})}return ne(o,n,{get(){return r(this)}})}}class gt extends ct{}const se=i`.sr-only,.sr-only-focusable:not(:active):not(:focus){clip:rect(0 0 0 0);clip-path:inset(50%);width:1px;height:1px;overflow:hidden;position:absolute;white-space:nowrap}`,re=i``,ae=i`:host{box-sizing:border-box}:host *,:host ::after,:host ::before{box-sizing:inherit}[hidden]{display:none!important}`,ce=Math.min,le=Math.max,he=Math.round,de=(Math.floor,e=>({x:e,y:e})),ue={left:"right",right:"left",bottom:"top",top:"bottom"},pe={start:"end",end:"start"};function fe(e,t,o){return le(e,ce(t,o))}function be(e,t){return"function"==typeof e?e(t):e}function ge(e){return e.split("-")[0]}function me(e){return e.split("-")[1]}function ve(e){return"x"===e?"y":"x"}function ye(e){return"y"===e?"height":"width"}function we(e){return["top","bottom"].includes(ge(e))?"y":"x"}function Ae(e){return ve(we(e))}function Ce(e){return e.replace(/start|end/g,(e=>pe[e]))}function Ee(e){return e.replace(/left|right|bottom|top/g,(e=>ue[e]))}function Te(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function Pe(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Re(e,t,o){let{reference:n,floating:i}=e;const r=we(t),a=Ae(t),c=ye(a),l=ge(t),h="y"===r,d=n.x+n.width/2-i.width/2,u=n.y+n.height/2-i.height/2,p=n[c]/2-i[c]/2;let f;switch(l){case"top":f={x:d,y:n.y-i.height};break;case"bottom":f={x:d,y:n.y+n.height};break;case"right":f={x:n.x+n.width,y:u};break;case"left":f={x:n.x-i.width,y:u};break;default:f={x:n.x,y:n.y}}switch(me(t)){case"start":f[a]-=p*(o&&h?-1:1);break;case"end":f[a]+=p*(o&&h?-1:1)}return f}async function Oe(e,t){var o;void 0===t&&(t={});const{x:n,y:i,platform:r,rects:a,elements:c,strategy:l}=e,{boundary:h="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:p=!1,padding:f=0}=be(t,e),b=Te(f),g=c[p?"floating"===u?"reference":"floating":u],m=Pe(await r.getClippingRect({element:null==(o=await(null==r.isElement?void 0:r.isElement(g)))||o?g:g.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(c.floating)),boundary:h,rootBoundary:d,strategy:l})),v="floating"===u?{...a.floating,x:n,y:i}:a.reference,y=await(null==r.getOffsetParent?void 0:r.getOffsetParent(c.floating)),w=await(null==r.isElement?void 0:r.isElement(y))&&await(null==r.getScale?void 0:r.getScale(y))||{x:1,y:1},_=Pe(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:v,offsetParent:y,strategy:l}):v);return{top:(m.top-_.top+b.top)/w.y,bottom:(_.bottom-m.bottom+b.bottom)/w.y,left:(m.left-_.left+b.left)/w.x,right:(_.right-m.right+b.right)/w.x}}const Me=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var o,n;const{placement:i,middlewareData:r,rects:a,initialPlacement:c,platform:l,elements:h}=t,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:p,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:g=!0,...m}=be(e,t);if(null!=(o=r.arrow)&&o.alignmentOffset)return{};const v=ge(i),y=ge(c)===c,w=await(null==l.isRTL?void 0:l.isRTL(h.floating)),_=p||(y||!g?[Ee(c)]:function(e){const t=Ee(e);return[Ce(e),t,Ce(t)]}(c));p||"none"===b||_.push(...function(e,t,o,n){const i=me(e);let r=function(e,t,o){const n=["left","right"],i=["right","left"],r=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return o?t?i:n:t?n:i;case"left":case"right":return t?r:a;default:return[]}}(ge(e),"start"===o,n);return i&&(r=r.map((e=>e+"-"+i)),t&&(r=r.concat(r.map(Ce)))),r}(c,g,b,w));const k=[c,..._],x=await Oe(t,m),A=[];let S=(null==(n=r.flip)?void 0:n.overflows)||[];if(d&&A.push(x[v]),u){const e=function(e,t,o){void 0===o&&(o=!1);const n=me(e),i=Ae(e),r=ye(i);let a="x"===i?n===(o?"end":"start")?"right":"left":"start"===n?"bottom":"top";return t.reference[r]>t.floating[r]&&(a=Ee(a)),[a,Ee(a)]}(i,a,w);A.push(x[e[0]],x[e[1]])}if(S=[...S,{placement:i,overflows:A}],!A.every((e=>e<=0))){var C,E;const e=((null==(C=r.flip)?void 0:C.index)||0)+1,t=k[e];if(t)return{data:{index:e,overflows:S},reset:{placement:t}};let o=null==(E=S.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:E.placement;if(!o)switch(f){case"bestFit":{var T;const e=null==(T=S.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:T[0];e&&(o=e);break}case"initialPlacement":o=c}if(i!==o)return{reset:{placement:o}}}return{}}}},Ne=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){const{x:o,y:n}=t,i=await async function(e,t){const{placement:o,platform:n,elements:i}=e,r=await(null==n.isRTL?void 0:n.isRTL(i.floating)),a=ge(o),c=me(o),l="y"===we(o),h=["left","top"].includes(a)?-1:1,d=r&&l?-1:1,u=be(t,e);let{mainAxis:p,crossAxis:f,alignmentAxis:b}="number"==typeof u?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return c&&"number"==typeof b&&(f="end"===c?-1*b:b),l?{x:f*d,y:p*h}:{x:p*h,y:f*d}}(t,e);return{x:o+i.x,y:n+i.y,data:i}}}};function De(e){return Ue(e)?(e.nodeName||"").toLowerCase():"#document"}function ze(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function Ie(e){var t;return null==(t=(Ue(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function Ue(e){return e instanceof Node||e instanceof ze(e).Node}function Fe(e){return e instanceof Element||e instanceof ze(e).Element}function je(e){return e instanceof HTMLElement||e instanceof ze(e).HTMLElement}function qe(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof ze(e).ShadowRoot)}function Ve(e){const{overflow:t,overflowX:o,overflowY:n,display:i}=Ze(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+o)&&!["inline","contents"].includes(i)}function We(e){return["table","td","th"].includes(De(e))}function Ye(e){const t=Ke(),o=Ze(e);return"none"!==o.transform||"none"!==o.perspective||!!o.containerType&&"normal"!==o.containerType||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||["transform","perspective","filter"].some((e=>(o.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(o.contain||"").includes(e)))}function Ke(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Qe(e){return["html","body","#document"].includes(De(e))}function Ze(e){return ze(e).getComputedStyle(e)}function Xe(e){return Fe(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function tt(e){if("html"===De(e))return e;const t=e.assignedSlot||e.parentNode||qe(e)&&e.host||Ie(e);return qe(t)?t.host:t}function lt(e){const t=tt(e);return Qe(t)?e.ownerDocument?e.ownerDocument.body:e.body:je(t)&&Ve(t)?t:lt(t)}function ht(e,t,o){var n;void 0===t&&(t=[]),void 0===o&&(o=!0);const i=lt(e),r=i===(null==(n=e.ownerDocument)?void 0:n.body),a=ze(i);return r?t.concat(a,a.visualViewport||[],Ve(i)?i:[],a.frameElement&&o?ht(a.frameElement):[]):t.concat(i,ht(i,[],o))}function dt(e){const t=Ze(e);let o=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const i=je(e),r=i?e.offsetWidth:o,a=i?e.offsetHeight:n,c=he(o)!==r||he(n)!==a;return c&&(o=r,n=a),{width:o,height:n,$:c}}function ut(e){return Fe(e)?e:e.contextElement}function pt(e){const t=ut(e);if(!je(t))return de(1);const o=t.getBoundingClientRect(),{width:n,height:i,$:r}=dt(t);let a=(r?he(o.width):o.width)/n,c=(r?he(o.height):o.height)/i;return a&&Number.isFinite(a)||(a=1),c&&Number.isFinite(c)||(c=1),{x:a,y:c}}const ft=de(0);function bt(e){const t=ze(e);return Ke()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:ft}function mt(e,t,o,n){void 0===t&&(t=!1),void 0===o&&(o=!1);const i=e.getBoundingClientRect(),r=ut(e);let a=de(1);t&&(n?Fe(n)&&(a=pt(n)):a=pt(e));const c=function(e,t,o){return void 0===t&&(t=!1),!(!o||t&&o!==ze(e))&&t}(r,o,n)?bt(r):de(0);let l=(i.left+c.x)/a.x,h=(i.top+c.y)/a.y,d=i.width/a.x,u=i.height/a.y;if(r){const e=ze(r),t=n&&Fe(n)?ze(n):n;let o=e.frameElement;for(;o&&n&&t!==e;){const e=pt(o),t=o.getBoundingClientRect(),n=Ze(o),i=t.left+(o.clientLeft+parseFloat(n.paddingLeft))*e.x,r=t.top+(o.clientTop+parseFloat(n.paddingTop))*e.y;l*=e.x,h*=e.y,d*=e.x,u*=e.y,l+=i,h+=r,o=ze(o).frameElement}}return Pe({width:d,height:u,x:l,y:h})}function vt(e){return mt(Ie(e)).left+Xe(e).scrollLeft}function yt(e,t,o){let n;if("viewport"===t)n=function(e,t){const o=ze(e),n=Ie(e),i=o.visualViewport;let r=n.clientWidth,a=n.clientHeight,c=0,l=0;if(i){r=i.width,a=i.height;const e=Ke();(!e||e&&"fixed"===t)&&(c=i.offsetLeft,l=i.offsetTop)}return{width:r,height:a,x:c,y:l}}(e,o);else if("document"===t)n=function(e){const t=Ie(e),o=Xe(e),n=e.ownerDocument.body,i=le(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),r=le(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let a=-o.scrollLeft+vt(e);const c=-o.scrollTop;return"rtl"===Ze(n).direction&&(a+=le(t.clientWidth,n.clientWidth)-i),{width:i,height:r,x:a,y:c}}(Ie(e));else if(Fe(t))n=function(e,t){const o=mt(e,!0,"fixed"===t),n=o.top+e.clientTop,i=o.left+e.clientLeft,r=je(e)?pt(e):de(1);return{width:e.clientWidth*r.x,height:e.clientHeight*r.y,x:i*r.x,y:n*r.y}}(t,o);else{const o=bt(e);n={...t,x:t.x-o.x,y:t.y-o.y}}return Pe(n)}function wt(e,t){const o=tt(e);return!(o===t||!Fe(o)||Qe(o))&&("fixed"===Ze(o).position||wt(o,t))}function _t(e,t,o){const n=je(t),i=Ie(t),r="fixed"===o,a=mt(e,!0,r,t);let c={scrollLeft:0,scrollTop:0};const l=de(0);if(n||!n&&!r)if(("body"!==De(t)||Ve(i))&&(c=Xe(t)),n){const e=mt(t,!0,r,t);l.x=e.x+t.clientLeft,l.y=e.y+t.clientTop}else i&&(l.x=vt(i));return{x:a.left+c.scrollLeft-l.x,y:a.top+c.scrollTop-l.y,width:a.width,height:a.height}}function kt(e,t){return je(e)&&"fixed"!==Ze(e).position?t?t(e):e.offsetParent:null}function $t(e,t){const o=ze(e);if(!je(e))return o;let n=kt(e,t);for(;n&&We(n)&&"static"===Ze(n).position;)n=kt(n,t);return n&&("html"===De(n)||"body"===De(n)&&"static"===Ze(n).position&&!Ye(n))?o:n||function(e){let t=tt(e);for(;je(t)&&!Qe(t);){if(Ye(t))return t;t=tt(t)}return null}(e)||o}const xt={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:o,strategy:n}=e;const i=je(o),r=Ie(o);if(o===r)return t;let a={scrollLeft:0,scrollTop:0},c=de(1);const l=de(0);if((i||!i&&"fixed"!==n)&&(("body"!==De(o)||Ve(r))&&(a=Xe(o)),je(o))){const e=mt(o);c=pt(o),l.x=e.x+o.clientLeft,l.y=e.y+o.clientTop}return{width:t.width*c.x,height:t.height*c.y,x:t.x*c.x-a.scrollLeft*c.x+l.x,y:t.y*c.y-a.scrollTop*c.y+l.y}},getDocumentElement:Ie,getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:n,strategy:i}=e;const r=[..."clippingAncestors"===o?function(e,t){const o=t.get(e);if(o)return o;let n=ht(e,[],!1).filter((e=>Fe(e)&&"body"!==De(e))),i=null;const r="fixed"===Ze(e).position;let a=r?tt(e):e;for(;Fe(a)&&!Qe(a);){const t=Ze(a),o=Ye(a);o||"fixed"!==t.position||(i=null),(r?!o&&!i:!o&&"static"===t.position&&i&&["absolute","fixed"].includes(i.position)||Ve(a)&&!o&&wt(e,a))?n=n.filter((e=>e!==a)):i=t,a=tt(a)}return t.set(e,n),n}(t,this._c):[].concat(o),n],a=r[0],c=r.reduce(((e,o)=>{const n=yt(t,o,i);return e.top=le(n.top,e.top),e.right=ce(n.right,e.right),e.bottom=ce(n.bottom,e.bottom),e.left=le(n.left,e.left),e}),yt(t,a,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:$t,getElementRects:async function(e){let{reference:t,floating:o,strategy:n}=e;const i=this.getOffsetParent||$t,r=this.getDimensions;return{reference:_t(t,await i(o),n),floating:{x:0,y:0,...await r(o)}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){return dt(e)},getScale:pt,isElement:Fe,isRTL:function(e){return"rtl"===Ze(e).direction}},At=i`:host{display:contents;position:relative}.popover{display:block;left:0;top:0;position:absolute;z-index:var(--gk-popover-z-index,100)}.arrow{background:var(--gk-tooltip-background-color,#000);height:8px;position:absolute;transform:rotate(45deg);width:8px}`;var St=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};class xe extends gt{constructor(){super(...arguments),this.arrow=!1,this.hover=!1,this.placement="top",this.popoverId=`popover_${Math.random().toString(16).slice(2)}`,this.srVisible=!1,this.open=!1,this.isTrackingOutside=!1}static{this.styles=[ae,se,At]}static{this.elementName="gk-popover"}firstUpdated(e){const t=this.triggerSlot.assignedElements()[0];this.triggerEl=t instanceof HTMLSlotElement?t.assignedElements({flatten:!0})[0]:t}async connectedCallback(){super.connectedCallback(),await this.updateComplete,await this.updateToggle(),null==this._toggleHandler&&(this._toggleHandler=this.handleToggle.bind(this)),this.hover?(this.triggerEl?.addEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.addEventListener("mouseout",this._toggleHandler,!1)):this.triggerEl?.addEventListener("focus",this._toggleHandler,!1)}disconnectedCallback(){super.disconnectedCallback(),null!=this._toggleHandler&&(this.triggerEl?.removeEventListener("focus",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseout",this._toggleHandler,!1),this._toggleHandler=void 0),this.disposeTrackOutside()}handleToggle(e){e.composedPath().includes(this.triggerEl)&&(this.open=!this.open,this.updateToggle())}async updateToggle(){this.open?(await this.showPopover(),null!=this.popoverEl&&window.requestAnimationFrame((()=>{this.popoverEl?.focus()}))):this.hidePopover()}handleDocumentEvent(e){!1!==this.open&&(e.composedPath().includes(this)||this.hidePopover())}trackOutside(){this.hover||this.isTrackingOutside||!this.open||(this.isTrackingOutside=!0,null==this._documentEventHandler&&(this._documentEventHandler=this.handleDocumentEvent.bind(this)),document.addEventListener("click",this._documentEventHandler,!1),document.addEventListener("focusin",this._documentEventHandler,!1))}disposeTrackOutside(){this.isTrackingOutside&&(this.isTrackingOutside=!1,null!=this._documentEventHandler&&(document.removeEventListener("click",this._documentEventHandler,!1),window.removeEventListener("focusin",this._documentEventHandler,!1),this._documentEventHandler=void 0))}async updatePositioning(){const e=[Ne(6),Me(),(t={padding:5},void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:i}=e,{mainAxis:r=!0,crossAxis:a=!1,limiter:c={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...l}=be(t,e),h={x:o,y:n},d=await Oe(e,l),u=we(ge(i)),p=ve(u);let f=h[p],b=h[u];if(r){const e="y"===p?"bottom":"right";f=fe(f+d["y"===p?"top":"left"],f,f-d[e])}if(a){const e="y"===u?"bottom":"right";b=fe(b+d["y"===u?"top":"left"],b,b-d[e])}const g=c.fn({...e,[p]:f,[u]:b});return{...g,data:{x:g.x-o,y:g.y-n}}}})];var t;this.arrowEl&&e.push((e=>({name:"arrow",options:e,async fn(t){const{x:o,y:n,placement:i,rects:r,platform:a,elements:c,middlewareData:l}=t,{element:h,padding:d=0}=be(e,t)||{};if(null==h)return{};const u=Te(d),p={x:o,y:n},f=Ae(i),b=ye(f),g=await a.getDimensions(h),m="y"===f,v=m?"top":"left",y=m?"bottom":"right",w=m?"clientHeight":"clientWidth",_=r.reference[b]+r.reference[f]-p[f]-r.floating[b],k=p[f]-r.reference[f],x=await(null==a.getOffsetParent?void 0:a.getOffsetParent(h));let A=x?x[w]:0;A&&await(null==a.isElement?void 0:a.isElement(x))||(A=c.floating[w]||r.floating[b]);const S=_/2-k/2,C=A/2-g[b]/2-1,E=ce(u[v],C),T=ce(u[y],C),P=E,R=A-g[b]-T,O=A/2-g[b]/2+S,M=fe(P,O,R),B=!l.arrow&&null!=me(i)&&O!=M&&r.reference[b]/2-(O<P?E:T)-g[b]/2<0,N=B?O<P?O-P:O-R:0;return{[f]:p[f]+N,data:{[f]:M,centerOffset:O-M-N,...B&&{alignmentOffset:N}},reset:B}}}))({element:this.arrowEl})),await((e,t,o)=>{const n=new Map,i={platform:xt,...o},r={...i.platform,_c:n};return(async(e,t,o)=>{const{placement:n="bottom",strategy:i="absolute",middleware:r=[],platform:a}=o,c=r.filter(Boolean),l=await(null==a.isRTL?void 0:a.isRTL(t));let h=await a.getElementRects({reference:e,floating:t,strategy:i}),{x:d,y:u}=Re(h,n,l),p=n,f={},b=0;for(let o=0;o<c.length;o++){const{name:r,fn:g}=c[o],{x:m,y:v,data:y,reset:w}=await g({x:d,y:u,initialPlacement:n,placement:p,strategy:i,middlewareData:f,rects:h,platform:a,elements:{reference:e,floating:t}});d=null!=m?m:d,u=null!=v?v:u,f={...f,[r]:{...f[r],...y}},w&&b<=50&&(b++,"object"==typeof w&&(w.placement&&(p=w.placement),w.rects&&(h=!0===w.rects?await a.getElementRects({reference:e,floating:t,strategy:i}):w.rects),({x:d,y:u}=Re(h,p,l))),o=-1)}return{x:d,y:u,placement:p,strategy:i,middlewareData:f}})(e,t,{...i,platform:r})})(this.triggerEl,this.popoverEl,{middleware:e,placement:this.placement}).then((({x:e,y:t,placement:o,middlewareData:n})=>{if(Object.assign(this.popoverEl.style,{left:`${e}px`,top:`${t}px`}),this.arrowEl){const e=n.arrow?.x,t=n.arrow?.y,i={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];Object.assign(this.arrowEl.style,{left:null!=e?`${e}px`:"",top:null!=t?`${t}px`:"",right:"",bottom:"",[i]:"-4px"})}}))}async showPopover(){this.open=!0,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="true"),this.srVisible?this.popoverEl.classList.remove("sr-only"):this.popoverEl.removeAttribute("hidden"),await this.updatePositioning(),this.trackOutside()}hidePopover(){this.open=!1,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="false"),this.srVisible?this.popoverEl.classList.add("sr-only"):this.popoverEl.setAttribute("hidden","true"),this.disposeTrackOutside()}get arrowMarkup(){return this.arrow?j`<div part="arrow" class="arrow"></div>`:""}render(){return j`<slot name="trigger" aria-describedby="${this.popoverId}"></slot><div class="popover ${this.srVisible&&"sr-only"}" ?hidden="${!this.srVisible}" id="${this.popoverId}" part="popover" role="tooltip"><slot></slot>${this.arrowMarkup}</div>`}}St([oe({type:Boolean})],xe.prototype,"arrow",void 0),St([oe({type:Boolean})],xe.prototype,"hover",void 0),St([oe()],xe.prototype,"placement",void 0),St([oe({attribute:"popover-id"})],xe.prototype,"popoverId",void 0),St([oe({attribute:"sr-visible",type:Boolean})],xe.prototype,"srVisible",void 0),St([ie('slot[name="trigger"]')],xe.prototype,"triggerSlot",void 0),St([ie(".popover")],xe.prototype,"popoverEl",void 0),St([ie(".arrow")],xe.prototype,"arrowEl",void 0),St([oe({state:!0,attribute:!1})],xe.prototype,"open",void 0);const Ct=i`gk-popover::part(popover){background:var(--gk-tooltip-background-color,#000);border-radius:var(--gk-tooltip-border-radius,0);color:var(--gk-tooltip-font-color,#fff);font-size:var(--gk-tooltip-font-size, 14px);font-weight:var(--gk-tooltip-font-weight,bold);line-height:var(--gk-tooltip-line-height, 14px);max-width:var(--gk-tooltip-max-width,none);padding:var(--gk-tooltip-padding,10px 16px);text-align:var(--gk-tooltip-text-align,left);width:max-content}`;class $e extends gt{constructor(){super(...arguments),this.srVisible=!1}static{this.styles=[ae,se,Ct]}static{this.elementName="gk-tooltip"}static{this.components=[xe]}render(){return j`<gk-popover arrow hover ?sr-visible="${this.srVisible}" part="base"><slot name="trigger" slot="trigger"></slot><slot></slot></gk-popover>`}}!function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);r>3&&a&&Object.defineProperty(t,o,a)}([oe({attribute:"sr-visible",type:Boolean})],$e.prototype,"srVisible",void 0);const Et=i`:host{display:inline-block;vertical-align:middle;font-weight:700}.deletions{color:var(--gk-deletions-color,#fe5955);padding-left:4px}.additions{color:var(--gk-additions-color,#74b666);padding-right:4px}`;class Se extends gt{constructor(){super(...arguments),this.tooltipText="Lines Added/Removed",this.tooltipId=`additions-deletions_${Math.random().toString(16).slice(2)}`}static{this.styles=Et}static{this.elementName="gk-additions-deletions"}static{this.components=[$e]}render(){return j`<gk-tooltip sr-visible tooltip-id="${this.tooltipId}"><span slot="trigger" part="base"><span class="additions">+<slot name="additions"></slot></span>/ <span class="deletions">−<slot name="deletions"></slot></span></span><span>${this.tooltipText}</span></gk-tooltip>`}}!function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);r>3&&a&&Object.defineProperty(t,o,a)}([oe({attribute:"tooltip-text"})],Se.prototype,"tooltipText",void 0);const Tt=new Set(["children","localName","ref","style","className"]),Pt=new WeakMap,Rt=(e,t,o,n,i)=>{const r=i?.[t];void 0===r||o===n?(e[t]=o,null==o&&t in HTMLElement.prototype&&e.removeAttribute(t)):((e,t,o)=>{let n=Pt.get(e);void 0===n&&Pt.set(e,n=new Map);let i=n.get(t);void 0!==o?void 0===i?(n.set(t,i={handleEvent:o}),e.addEventListener(t,i)):i.handleEvent=o:void 0!==i&&(n.delete(t),e.removeEventListener(t,i))})(e,r,o)},Ot=({react:e,tagName:t,elementClass:o,events:n,displayName:i})=>{const r=new Set(Object.keys(n??{})),a=e.forwardRef(((i,a)=>{const c=e.useRef(null),l=e.useRef(null),h={},d={};for(const[e,t]of Object.entries(i))Tt.has(e)?h["className"===e?"class":e]=t:r.has(e)||e in o.prototype?d[e]=t:h[e]=t;return e.useLayoutEffect((()=>{if(null!==l.current){for(const e in d)Rt(l.current,e,i[e],c.current?c.current[e]:void 0,n);c.current=i}})),e.useLayoutEffect((()=>{l.current?.removeAttribute("defer-hydration")}),[]),h.suppressHydrationWarning=!0,e.createElement(t,{...h,ref:e=>{l.current=e,"function"==typeof a?a(e):null!==a&&(a.current=e)}})}));return a.displayName=i??o.name,a};var Mt=_e(294);const Bt=Ot({react:Mt,tagName:Se.elementName,elementClass:Se}),Nt=i`:host{display:inline-block}.avatar{vertical-align:middle;background-color:var(--gk-avatar-background-color,#e0e0e0);width:var(--gk-avatar-size,30px);aspect-ratio:1/1;border-radius:50%;transition:.2s}.avatar.is-offline{border:2px solid var(--gk-avatar-offline-outline-color,#3d424d)}.avatar.is-online{border:2px solid var(--gk-avatar-online-outline-color,#60b864)}.avatar--image{display:inline-block;object-fit:cover;object-position:50% 50%}.avatar--content{display:inline-flex;justify-content:center;align-items:center;font-size:var(--gk-avatar-font-size, 11px);line-height:var(--gk-avatar-size, 30px);text-align:center}.avatar:hover{transform:scale(1.2)}`,Dt=i`:host{display:inline-block}.avatar-group{display:inline-flex;flex-direction:row;justify-content:center;align-items:center}.avatar-group::slotted(:not(:first-child)){margin-left:calc(var(--gk-avatar-size,2.4rem) * -.2)}.avatar-group:focus-within::slotted(*),.avatar-group:hover::slotted(*){opacity:.5}.avatar-group:focus-within::slotted(:focus),.avatar-group:hover::slotted(:hover){opacity:1;z-index:var(--gk-avatar-selected-zindex,1)!important}`;var Lt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};class He extends gt{static{this.styles=[ae,Nt]}static{this.elementName="gk-avatar"}get indicatorClass(){return this.indicator?`is-${this.indicator}`:""}render(){return this.src?j`<img src="${this.src}" class="avatar avatar--image${this.indicatorClass}" part="base" alt="">`:j`<slot class="avatar avatar--content${this.indicatorClass}" part="base"></slot>`}}Lt([oe()],He.prototype,"src",void 0),Lt([oe()],He.prototype,"indicator",void 0);class Le extends gt{static{this.elementName="gk-avatar-group"}static{this.styles=[ae,Dt]}render(){return j`<slot class="avatar-group" part="base"></slot>`}}const zt=Ot({react:Mt,tagName:He.elementName,elementClass:He}),It=Ot({react:Mt,tagName:Le.elementName,elementClass:Le}),Ht=i`.badge{border-radius:var(--gk-badge-border-radius,22px);display:inline-block;font-size:var(--gk-badge-font-size, 12px)}.badge--outline{border-color:var(--gk-badge-outline-color,#ffffff99);border-style:solid;border-width:var(--gk-badge-outline-border-width,1px);color:var(--gk-badge-outline-color,#ffffff99);padding:var(--gk-badge-outline-padding,0 8px)}.badge--filled{background-color:var(--gk-badge-filled-background-color,#2b2f36);color:var(--gk-badge-filled-color,#ffffff99);padding:var(--gk-badge-filled-padding,2px 6px)}`;class Be extends gt{constructor(){super(...arguments),this.variant="outline"}static{this.styles=Ht}static{this.elementName="gk-badge"}render(){return j`<slot class="${`badge badge--${this.variant}`}" part="base"></slot>`}}!function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);r>3&&a&&Object.defineProperty(t,o,a)}([oe()],Be.prototype,"variant",void 0);const Ut=Ot({react:Mt,tagName:Be.elementName,elementClass:Be}),Ft=i`:host{display:inline-block}button{appearance:none;border:none;padding:8px 12px}button:hover{cursor:pointer}button:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.button--ghost{background:0 0;color:var(--gk-button-ghost-color,#fff)}.button--ghost:focus,.button--ghost:hover{text-decoration:underline}.button--ghost:active{color:var(--gk-button-ghost-color-active,#adb8c2)}.button--ghost:disabled,.button--ghost:disabled:active,.button--ghost:disabled:focus,.button--ghost:disabled:hover{color:var(--gk-button-ghost-color-disabled,#ffffff60);cursor:default;text-decoration:none}.button--outline{background:0 0;border-radius:2px;border-style:solid;border-width:var(--gk-button-outline-border-width,1px);color:var(--gk-button-outline-color,#fff)}.button--outline:focus,.button--outline:hover{background-color:#ffffff50}.button--outline:active{background-color:var(--gk-button-outline-color-active,#adb8c2)}.button--outline:disabled,.button--outline:disabled:active,.button--outline:disabled:focus,.button--outline:disabled:hover{background-color:transparent;border-color:var(--gk-button-outline-color-disabled,#ffffff60);color:var(--gk-button-outline-color-disabled,#ffffff60);cursor:default;text-decoration:none}`;var jt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};class Ge extends gt{constructor(){super(...arguments),this.disabled=!1,this.type="button",this.variant="ghost"}static{this.styles=Ft}static{this.elementName="gk-button"}get allClasses(){const e=["button"];return e.push(`button--${this.variant}`),e.join(" ")}_handleClick(e){e.stopPropagation(),this.dispatchEvent(new Event("click"))}render(){return j`<button class="${this.allClasses}" @click="${this._handleClick}" ?disabled="${this.disabled}" part="base" type="${this.type}"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></button>`}}jt([oe({type:Boolean,reflect:!0})],Ge.prototype,"disabled",void 0),jt([oe({reflect:!0})],Ge.prototype,"type",void 0),jt([oe()],Ge.prototype,"variant",void 0);const qt=Ot({react:Mt,tagName:Ge.elementName,elementClass:Ge,events:{onClick:"click"}}),Vt=i`:host{display:inline-block}.complexity-indicator{display:inline-flex}.complexity-indicator__box{display:block;height:var(--gk-complexity-indicator-box-size,8px);width:var(--gk-complexity-indicator-box-size,8px)}.complexity-indicator__box:not(:last-of-type){margin-right:var(--gk-complexity-indicator-space-between,2px)}.complexity-indicator--level-1 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-1,#5cb85c)}.complexity-indicator--level-2 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-2,#4d88ff)}.complexity-indicator--level-3 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-3,#de9b43)}.complexity-indicator--level-4 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-4,#d9413d)}`;var Wt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};class Je extends gt{constructor(){super(...arguments),this.level=1,this.label="Complexity of pull request"}static{this.styles=[ae,se,Vt]}static{this.elementName="gk-complexity-indicator"}render(){const e=[];for(let t=0;t<this.level;t++)e.push(t);return j`<div class="complexity-indicator complexity-indicator--level-${this.level}" part="base"><span class="sr-only">${this.label}</span> ${e.map((()=>j`<span class="complexity-indicator__box"></span>`))}</div>`}}Wt([oe({type:Number})],Je.prototype,"level",void 0),Wt([oe()],Je.prototype,"label",void 0);const Gt=Ot({react:Mt,tagName:Je.elementName,elementClass:Je}),Yt=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,Kt=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,Qt=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let Jt;const Zt=new Map;let Xt,eo,to;new Map;const oo=["th","st","nd","rd"];function no(e){const t=e%100;return`${e}${oo[(t-20)%10]??oo[t]??oo[0]}`}var io=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};class po extends gt{constructor(){super(...arguments),this.date=new Date,this.format="MMMM Do, YYYY h:mma"}static{this.styles=[ae]}static{this.elementName="gk-date-from"}static{this.components=[$e]}get relativeTime(){return function(e,t){const o=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,t,n,i]of Qt){const r=Math.abs(o);if(r>=t||1e3===t)return null==Jt&&(null!=to?Jt=to.resolvedOptions().locale:null!=eo?Jt=eo.resolvedOptions().locale:(to=new Intl.RelativeTimeFormat(Xt,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),Jt=to.resolvedOptions().locale)),"en"===Jt||Jt?.startsWith("en-")?`${Math.round(r/n)}${i}`:(null==to&&(to=new Intl.RelativeTimeFormat(Xt,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),to.format(Math.round(o/n),e))}return""}(this.date)}get isDate(){return this.date&&!isNaN(this.date.getMilliseconds())}render(){if(this.isDate)return j`<gk-tooltip><time datetime="${this.date}" part="base" slot="trigger">${this.relativeTime}</time><span>${function(e,t,o,n=!0){const i=`${o??""}:${t=t??void 0}`;let r=Zt.get(i);if(null==r){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=Kt.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}const o={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll(Yt))if(null!=t)for(const e in t){const n=t[e];if(null!=n)switch(e){case"year":o.year=4===n.length?"numeric":"2-digit";break;case"month":switch(n.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":o.day="DD"===n?"2-digit":"numeric";break;case"weekday":switch(n.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===n.length?"2-digit":"numeric",o.hour12="hh"===n||"h"===n;break;case"minute":o.minute=2===n.length?"2-digit":"numeric";break;case"second":o.second=2===n.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===n.length?"long":"short"}}return o}(t);let a;a=null==o?Xt:"system"===o?void 0:[o],r=new Intl.DateTimeFormat(a,e),n&&Zt.set(i,r)}if(null==t||Kt.test(t))return r.format(e);function a(e){const t=`${o??""}:time:${e}`;let i=Zt.get(t);if(null==i){const r={localeMatcher:"best fit",timeStyle:e};let a;a=null==o?Xt:"system"===o?void 0:[o],i=new Intl.DateTimeFormat(a,r),n&&Zt.set(t,i)}return i}const c=r.formatToParts(e);return t.replace(Yt,((t,o,n,i,r,l,h,d,u,p,f,b,g,m,v)=>{if(null!=o)return o.substring(1,o.length-1);for(const t in v){const o=v[t];if(null==o)continue;const n=c.find((e=>e.type===t));if("Do"===o&&"day"===n?.type)return no(Number(n.value));if("a"===o&&"dayPeriod"===n?.type){const t=a("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return`${(t??n)?.value??""}`}return n?.value??""}return""}))}(this.date,this.format??"MMMM Do, YYYY h:mma")}</span></gk-tooltip>`}}io([oe({converter:(e=>({toAttribute:t=>t.toLocaleDateString(e),fromAttribute:e=>new Date(e)}))(navigator.language),reflect:!0})],po.prototype,"date",void 0),io([oe()],po.prototype,"format",void 0);const so=Ot({react:Mt,tagName:po.elementName,elementClass:po}),ro=i`.row--heading{text-transform:uppercase;color:var(--gk-text-secondary-color,rgba(255,255,255,.6))}.content::slotted(:not(:first-child)){border-top:1px solid var(--gk-divider-color,rgba(255,255,255,.04))}`,ao=i`:host{display:contents}.row{display:flex;flex-direction:row;padding:var(--gk-focus-row-padding,8px)}.row:not(.row--heading):focus-within,.row:not(.row--heading):hover{background-color:var(--gk-focus-background-color-hover,rgba(255,255,255,.04))}.row:not(.row--heading):focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.row__key{flex:none;display:block;width:var(--gk-focus-row-key-min-width,64px)}@media (max-width:720px){.row__key{width:var(--gk-focus-row-key-min-width-screen-sm,32px)}}.row__content{flex:1;display:block}.row__pin{display:block;min-width:var(--gk-focus-row-pin-min-width,35px)}.row__date{display:block;min-width:var(--gk-focus-row-date-min-width,48px)}@media (max-width:720px){.row--heading .item__date,.row--heading .item__secondary{display:none}}`,co=i`.item{display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item{flex-direction:column;align-items:stretch}}.item__primary{flex:1;display:flex;flex-direction:row;gap:12px}.item__type{flex:none}@media (max-width:720px){.item__type{order:-1}}.item__content{display:flex;flex-direction:column;gap:6px;min-width:var(--gk-focus-item-content-min-width,92px)}@media (max-width:720px){.item__content{align-items:stretch}}.item__content>p{margin:0}.item__secondary{flex:none;display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item__secondary{flex-wrap:wrap;padding-left:36px}}.item__people{display:block;min-width:var(--gk-focus-item-people-min-width,92px)}@media (max-width:720px){.item__people{min-width:0}}.item__repo{display:block;width:var(--gk-focus-item-repo-min-width,150px)}@media (max-width:720px){.item__repo{width:max-content}}@media (max-width:720px){.item__date{align-self:flex-start;min-width:0}}.item__actions{display:block;min-width:var(--gk-focus-item-actions-min-width,70px)}@media (max-width:720px){.item__actions{width:100%}}`;class yo extends gt{static{this.styles=[ae,co]}static{this.elementName="gk-focus-item"}render(){return j`<div class="item"><div class="item__primary"><div class="item__content" part="base"><slot></slot></div></div><div class="item__secondary"><slot name="people" class="item__people" part="people"></slot><slot name="repo" class="item__repo" part="repo"></slot><slot name="actions" class="item__actions" part="actions"></slot></div></div>`}}class vo extends gt{static{this.styles=[ae,ao]}static{this.elementName="gk-focus-row"}render(){return j`<div class="row" part="row"><slot name="pin" class="row__pin" part="pin"></slot><div class="row__date" part="date"><slot name="date"></slot></div><div class="row__key" part="key"><slot name="key"></slot></div><slot class="row__content"></slot></div>`}}class bo extends gt{static{this.styles=[ae,ao,co,ro]}static{this.elementName="gk-focus-container"}render(){return j`<div class="row row--heading"><slot name="pin" class="row__pin" part="pin">Pinned</slot><slot name="date" class="row__date" part="date">Updated</slot><slot name="key" class="row__key" part="key">Key</slot><div class="row__content"><div class="item"><div class="item__primary"><slot name="item" class="item__content" part="item">Item</slot></div><div class="item__secondary"><slot name="people" class="item__people" part="people">People</slot><slot name="repo" class="item__repo" part="repo">Repo</slot><slot name="actions" class="item__actions" part="actions">Action</slot></div></div></div></div><slot class="content"></slot>`}}const lo=Ot({react:Mt,tagName:yo.elementName,elementClass:yo}),ho=Ot({react:Mt,tagName:vo.elementName,elementClass:vo}),uo=Ot({react:Mt,tagName:bo.elementName,elementClass:bo});class $o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const fo=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends $o{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.st?.has(e)&&this.it.add(e);return this.render(t)}const o=e.element.classList;for(const e of this.it)e in t||(o.remove(e),this.it.delete(e));for(const e in t){const n=!!t[e];n===this.it.has(e)||this.st?.has(e)||(n?(o.add(e),this.it.add(e)):(o.remove(e),this.it.delete(e)))}return q}}),go=e=>e??W,mo=i`:host{display:block}.input-container{background-color:var(--gk-input-background-color,#000);border:1px solid var(--gk-input-border-color,#ffffff14);border-radius:var(--gk-input-border-radius,2px);color:var(--gk-input-color,#ffffff99);cursor:text;display:inline-flex;justify-content:start;padding:var(--gk-input-padding,10px);vertical-align:middle;width:100%}.input{appearance:none;background:inherit;border:none;box-shadow:none;color:inherit;flex:1 1 auto;font:inherit;height:100%;margin:0;outline:0;padding:0}.input-container:focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}`;var wo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};class Ro extends gt{static{this.formAssociated=!0}static{this.styles=[ae,se,mo]}static{this.elementName="gk-input"}constructor(){super(),this.disabled=!1,this.labelVisibility="visible",this.required=!1,this.type="text",this.value="";try{this.internals=this.attachInternals()}catch{}}firstUpdated(){this.internals&&this.internals.setFormValue(this.value)}render(){return j`<div class="field"><label class="${fo({label:!0,"sr-only":"sr-only"===this.labelVisibility})}" for="input" ?hidden="${"hidden"===this.labelVisibility}" part="field-label"><slot name="label">${this.label}</slot></label><div class="${fo({"input-container":!0,"input-container--disabled":this.disabled})}"><slot name="prefix" part="prefix"></slot><input autocomplete="${go(this.autocomplete)}" autocorrect="${go(this.autocorrect)}" class="input" ?disabled="${this.disabled}" id="input" name="${go(this.name)}" part="input" placeholder="${go(this.placeholder)}" type="${this.type}" @input="${this.onInput}"><slot name="suffix" part="suffix"></slot></div></div>`}onInput(e){this.value=e.target.value,this.internals&&this.internals.setFormValue(this.value)}}wo([oe()],Ro.prototype,"autocomplete",void 0),wo([oe()],Ro.prototype,"autocorrect",void 0),wo([oe({type:Boolean,reflect:!0})],Ro.prototype,"disabled",void 0),wo([oe()],Ro.prototype,"label",void 0),wo([oe({attribute:"label-visibility"})],Ro.prototype,"labelVisibility",void 0),wo([oe()],Ro.prototype,"name",void 0),wo([oe()],Ro.prototype,"placeholder",void 0),wo([oe({type:Boolean,reflect:!0})],Ro.prototype,"required",void 0),wo([oe({reflect:!0})],Ro.prototype,"type",void 0),wo([oe()],Ro.prototype,"value",void 0);const _o=i`:host{display:inline-block}.menu{border:1px solid var(--gk-menu-border-color,#2a2f35);border-radius:4px;background:var(--gk-menu-background-color,#32363f);box-shadow:0 5px 16px 0 rgba(0,0,0,.85);display:inline-block;padding:4px 0}`,ko=i`:host{display:block}.menu-item{font-size:var(--gk-menu-item-font-size, 12px);padding:5px 6px}.menu-item:focus,.menu-item:hover{background-color:var(--gk-menu-item-background-color-hover,#4d88ff1a);cursor:pointer}.menu-item:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.menu-item:active{background-color:var(--gk-menu-item-background-color-active,#4d88ff4d)}.menu-item--disabled,.menu-item--disabled:active,.menu-item--disabled:focus,.menu-item--disabled:hover{background-color:initial;color:var(--gk-menu-item-font-color-disabled,#ffffff60);cursor:default;pointer-events:none}`,xo=i`:host{display:block}.menu-label{cursor:default;display:inline-block;font-size:var(--gk-menu-label-font-size, 12px);font-weight:700;padding:5px 6px}`;class Mo extends gt{constructor(){super(...arguments),this._currentMenuItem=void 0}static{this.styles=[ae,_o]}static{this.elementName="gk-menu"}_handleSlotChange(){const e=this._getAllItems();e.length&&this._setCurrentItem(e[0])}_handleClick(e){e.stopPropagation();const t=e.target.closest("gk-menu-item");if(!t||t.disabled)return;this._currentMenuItem=t;const o=new CustomEvent("select",{detail:{target:t}});this.dispatchEvent(o)}_handleKeyDown(e){if("Enter"===e.key||" "===e.key)return e.preventDefault(),void this._currentMenuItem?.click();if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=this._getAllItems(),o=t.length;let n=this._currentMenuItem?t.indexOf(this._currentMenuItem):0;"ArrowUp"===e.key?n=(n-1+o)%o:"ArrowDown"===e.key?n=(n+1)%o:"Home"===e.key?n=0:"End"===e.key&&(n=o-1),this._setCurrentItem(t[n]),t[n].focus()}}_handleMouseDown(e){const t=e.target;this._isMenuItem(t)&&this._setCurrentItem(t)}_isMenuItem(e){const t=e.getAttribute("role")||"";return"gk-menu-item"===e.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(t)}_setCurrentItem(e){this._currentMenuItem=e,this._setTabIndex()}_getAllItems(){return this.slotChildren.filter((e=>this._isMenuItem(e)))}_setTabIndex(){this._getAllItems().forEach((e=>{e.setAttribute("tabindex",this._currentMenuItem===e?"0":"-1")}))}render(){return j`<slot class="menu" @click="${this._handleClick}" @keydown="${this._handleKeyDown}" @mousedown="${this._handleMouseDown}" @slotchange="${this._handleSlotChange}" part="base" role="menu"></slot>`}}!function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);r>3&&a&&Object.defineProperty(t,o,a)}([function(e){return(t,o)=>{const{slot:n,selector:i}=e??{},r="slot"+(n?`[name=${n}]`:":not([name])");return ne(t,o,{get(){const t=this.renderRoot?.querySelector(r),o=t?.assignedElements(e)??[];return void 0===i?o:o.filter((e=>e.matches(i)))}})}}({flatten:!0})],Mo.prototype,"slotChildren",void 0);class Do extends gt{constructor(){super(...arguments),this.disabled=!1}static{this.styles=[ae,ko]}static{this.elementName="gk-menu-item"}get allClasses(){return this.disabled?"menu-item--disabled":""}render(){return j`<div aria-disabled="${this.disabled}" class="menu-item ${this.allClasses}" part="base" role="menuitem"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></div>`}}!function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);r>3&&a&&Object.defineProperty(t,o,a)}([oe({type:Boolean,reflect:!0})],Do.prototype,"disabled",void 0);class Ho extends gt{static{this.styles=[ae,xo]}static{this.elementName="gk-menu-label"}render(){return j`<slot class="menu-label" part="base"></slot>`}}const Ao=Ot({react:Mt,tagName:Mo.elementName,elementClass:Mo,events:{onClick:"select"}}),So=Ot({react:Mt,tagName:Do.elementName,elementClass:Do}),Co=Ot({react:Mt,tagName:Ho.elementName,elementClass:Ho}),Eo=i`:host{display:inline-block}.tag{display:inline-flex;align-items:center;vertical-align:middle;gap:8px;padding:var(--gk-tag-padding,2px 6px);border-radius:var(--gk-tag-radius,4px);background-color:var(--gk-tag-background-color,#33363e);color:var(--gk-tag-color,#85868b);max-width:100%}.tag__prefix,.tag__suffix{flex:none}.tag__label{display:inline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tag--ghost{background-color:transparent}`;class Bo extends gt{static{this.styles=[ae,Eo]}static{this.elementName="gk-tag"}render(){return j`<span class="tag ${this.variant?`tag--${this.variant}`:""}" part="base"><slot class="tag__prefix" name="prefix"></slot><slot class="tag__label"></slot><slot class="tag__suffix" name="suffix"></slot></span>`}}!function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);r>3&&a&&Object.defineProperty(t,o,a)}([oe()],Bo.prototype,"variant",void 0);const To=Ot({react:Mt,tagName:Bo.elementName,elementClass:Bo}),Po=Ot({react:Mt,tagName:$e.elementName,elementClass:$e});function Oo(...e){e.forEach((e=>{e.elementName&&!customElements.get(e.elementName)&&(customElements.define(e.elementName,e),e.components&&e.components.length>0&&Oo(...e.components))}))}})();var Ae=ke.Tn,Ce=ke.qE,Ee=ke.HE,Te=ke.Ct,Pe=ke.zx,Re=ke.sX,Oe=ke.D0,Me=ke.fs,Ne=ke.II,De=ke.v2,ze=ke.sN,Ie=ke.J2,Ue=ke.$$,Fe=ke.Vp,je=ke.u,qe=ke.fW;const Ve=globalThis,We=Ve.ShadowRoot&&(void 0===Ve.ShadyCSS||Ve.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ye=Symbol(),Ke=new WeakMap;class css_tag_n{constructor(e,t,o){if(this._$cssResult$=!0,o!==Ye)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(We&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=Ke.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Ke.set(t,e))}return e}toString(){return this.cssText}}const Qe=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,o,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1]),e[0]);return new css_tag_n(o,e,Ye)},Ze=We?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new css_tag_n("string"==typeof e?e:e+"",void 0,Ye))(t)})(e):e,{is:Xe,defineProperty:tt,getOwnPropertyDescriptor:lt,getOwnPropertyNames:ht,getOwnPropertySymbols:dt,getPrototypeOf:ut}=Object,pt=globalThis,ft=pt.trustedTypes,bt=ft?ft.emptyScript:"",mt=pt.reactiveElementPolyfillSupport,vt=(e,t)=>e,yt={toAttribute(e,t){switch(t){case Boolean:e=e?bt:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},wt=(e,t)=>!Xe(e,t),_t={attribute:!0,type:String,converter:yt,reflect:!1,hasChanged:wt};Symbol.metadata??=Symbol("metadata"),pt.litPropertyMetadata??=new WeakMap;class reactive_element_b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_t){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),n=this.getPropertyDescriptor(e,o,t);void 0!==n&&tt(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){const{get:n,set:i}=lt(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return n?.call(this)},set(t){const r=n?.call(this);i.call(this,t),this.requestUpdate(e,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_t}static _$Ei(){if(this.hasOwnProperty(vt("elementProperties")))return;const e=ut(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(vt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(vt("properties"))){const e=this.properties,t=[...ht(e),...dt(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(Ze(e))}else void 0!==e&&t.push(Ze(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$E_??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$E_?.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(We)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const o of t){const t=document.createElement("style"),n=Ve.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=o.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$E_?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t){const o=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,o);if(void 0!==n&&!0===o.reflect){const i=(void 0!==o.converter?.toAttribute?o.converter:yt).toAttribute(t,o.type);this._$Em=e,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(e,t){const o=this.constructor,n=o._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=o.getPropertyOptions(n),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:yt;this._$Em=n,this[n]=i.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o,n=!1,i){if(void 0!==e){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??wt)(n?i:this[e],t))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$E_?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$E_?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EO(e,this[e]))),this._$ET()}updated(e){}firstUpdated(e){}}reactive_element_b.elementStyles=[],reactive_element_b.shadowRootOptions={mode:"open"},reactive_element_b[vt("elementProperties")]=new Map,reactive_element_b[vt("finalized")]=new Map,mt?.({ReactiveElement:reactive_element_b}),(pt.reactiveElementVersions??=[]).push("2.0.2");const kt=globalThis,$t=kt.trustedTypes,xt=$t?$t.createPolicy("lit-html",{createHTML:e=>e}):void 0,At="$lit$",St=`lit$${(Math.random()+"").slice(9)}$`,Ct="?"+St,Et=`<${Ct}>`,Tt=document,Pt=()=>Tt.createComment(""),Rt=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Ot=Array.isArray,Mt=e=>Ot(e)||"function"==typeof e?.[Symbol.iterator],Bt="[ \t\n\f\r]",Nt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Dt=/-->/g,Lt=/>/g,zt=RegExp(`>|${Bt}(?:([^\\s"'>=/]+)(${Bt}*=${Bt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),It=/'/g,Ht=/"/g,Ut=/^(?:script|style|textarea|title)$/i,Ft=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),jt=Ft(1),qt=(Ft(2),Symbol.for("lit-noChange")),Vt=Symbol.for("lit-nothing"),Wt=new WeakMap,Gt=Tt.createTreeWalker(Tt,129);function Yt(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==xt?xt.createHTML(t):t}const Kt=(e,t)=>{const o=e.length-1,n=[];let i,r=2===t?"<svg>":"",a=Nt;for(let t=0;t<o;t++){const o=e[t];let c,l,h=-1,d=0;for(;d<o.length&&(a.lastIndex=d,l=a.exec(o),null!==l);)d=a.lastIndex,a===Nt?"!--"===l[1]?a=Dt:void 0!==l[1]?a=Lt:void 0!==l[2]?(Ut.test(l[2])&&(i=RegExp("</"+l[2],"g")),a=zt):void 0!==l[3]&&(a=zt):a===zt?">"===l[0]?(a=i??Nt,h=-1):void 0===l[1]?h=-2:(h=a.lastIndex-l[2].length,c=l[1],a=void 0===l[3]?zt:'"'===l[3]?Ht:It):a===Ht||a===It?a=zt:a===Dt||a===Lt?a=Nt:(a=zt,i=void 0);const u=a===zt&&e[t+1].startsWith("/>")?" ":"";r+=a===Nt?o+Et:h>=0?(n.push(c),o.slice(0,h)+At+o.slice(h)+St+u):o+St+(-2===h?t:u)}return[Yt(e,r+(e[o]||"<?>")+(2===t?"</svg>":"")),n]};class V{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let i=0,r=0;const a=e.length-1,c=this.parts,[l,h]=Kt(e,t);if(this.el=V.createElement(l,o),Gt.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=Gt.nextNode())&&c.length<a;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(At)){const t=h[r++],o=n.getAttribute(e).split(St),a=/([.?@])?(.*)/.exec(t);c.push({type:1,index:i,name:a[2],strings:o,ctor:"."===a[1]?lit_html_k:"?"===a[1]?lit_html_H:"@"===a[1]?lit_html_I:lit_html_R}),n.removeAttribute(e)}else e.startsWith(St)&&(c.push({type:6,index:i}),n.removeAttribute(e));if(Ut.test(n.tagName)){const e=n.textContent.split(St),t=e.length-1;if(t>0){n.textContent=$t?$t.emptyScript:"";for(let o=0;o<t;o++)n.append(e[o],Pt()),Gt.nextNode(),c.push({type:2,index:++i});n.append(e[t],Pt())}}}else if(8===n.nodeType)if(n.data===Ct)c.push({type:2,index:i});else{let e=-1;for(;-1!==(e=n.data.indexOf(St,e+1));)c.push({type:7,index:i}),e+=St.length-1}i++}}static createElement(e,t){const o=Tt.createElement("template");return o.innerHTML=e,o}}function Qt(e,t,o=e,n){if(t===qt)return t;let i=void 0!==n?o._$Co?.[n]:o._$Cl;const r=Rt(t)?void 0:t._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),void 0===r?i=void 0:(i=new r(e),i._$AT(e,o,n)),void 0!==n?(o._$Co??=[])[n]=i:o._$Cl=i),void 0!==i&&(t=Qt(e,i._$AS(e,t.values),i,n)),t}class lit_html_S{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,n=(e?.creationScope??Tt).importNode(t,!0);Gt.currentNode=n;let i=Gt.nextNode(),r=0,a=0,c=o[0];for(;void 0!==c;){if(r===c.index){let t;2===c.type?t=new lit_html_M(i,i.nextSibling,this,e):1===c.type?t=new c.ctor(i,c.name,c.strings,this,e):6===c.type&&(t=new lit_html_L(i,this,e)),this._$AV.push(t),c=o[++a]}r!==c?.index&&(i=Gt.nextNode(),r++)}return Gt.currentNode=Tt,n}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class lit_html_M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,n){this.type=2,this._$AH=Vt,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Qt(this,e,t),Rt(e)?e===Vt||null==e||""===e?(this._$AH!==Vt&&this._$AR(),this._$AH=Vt):e!==this._$AH&&e!==qt&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):Mt(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Vt&&Rt(this._$AH)?this._$AA.nextSibling.data=e:this.$(Tt.createTextNode(e)),this._$AH=e}g(e){const{values:t,_$litType$:o}=e,n="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=V.createElement(Yt(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new lit_html_S(n,this),o=e.u(this.options);e.p(t),this.$(o),this._$AH=e}}_$AC(e){let t=Wt.get(e.strings);return void 0===t&&Wt.set(e.strings,t=new V(e)),t}T(e){Ot(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,n=0;for(const i of e)n===t.length?t.push(o=new lit_html_M(this.k(Pt()),this.k(Pt()),this,this.options)):o=t[n],o._$AI(i),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class lit_html_R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,n,i){this.type=1,this._$AH=Vt,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Vt}_$AI(e,t=this,o,n){const i=this.strings;let r=!1;if(void 0===i)e=Qt(this,e,t,0),r=!Rt(e)||e!==this._$AH&&e!==qt,r&&(this._$AH=e);else{const n=e;let a,c;for(e=i[0],a=0;a<i.length-1;a++)c=Qt(this,n[o+a],t,a),c===qt&&(c=this._$AH[a]),r||=!Rt(c)||c!==this._$AH[a],c===Vt?e=Vt:e!==Vt&&(e+=(c??"")+i[a+1]),this._$AH[a]=c}r&&!n&&this.O(e)}O(e){e===Vt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class lit_html_k extends lit_html_R{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===Vt?void 0:e}}class lit_html_H extends lit_html_R{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==Vt)}}class lit_html_I extends lit_html_R{constructor(e,t,o,n,i){super(e,t,o,n,i),this.type=5}_$AI(e,t=this){if((e=Qt(this,e,t,0)??Vt)===qt)return;const o=this._$AH,n=e===Vt&&o!==Vt||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==Vt&&(o===Vt||n);n&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class lit_html_L{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Qt(this,e)}}const Jt={j:At,P:St,A:Ct,C:1,M:Kt,L:lit_html_S,R:Mt,V:Qt,D:lit_html_M,I:lit_html_R,H:lit_html_H,N:lit_html_I,U:lit_html_k,B:lit_html_L},Zt=kt.litHtmlPolyfillSupport;Zt?.(V,lit_html_M),(kt.litHtmlVersions??=[]).push("3.1.0");class lit_element_s extends reactive_element_b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const n=o?.renderBefore??t;let i=n._$litPart$;if(void 0===i){const e=o?.renderBefore??null;n._$litPart$=i=new lit_html_M(t.insertBefore(Pt(),e),e,void 0,o??{})}return i._$AI(e),i})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return qt}}lit_element_s._$litElement$=!0,lit_element_s.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lit_element_s});const Xt=globalThis.litElementPolyfillSupport;Xt?.({LitElement:lit_element_s});(globalThis.litElementVersions??=[]).push("4.0.2");const eo=e=>(t,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},to={attribute:!0,type:String,converter:yt,reflect:!1,hasChanged:wt},oo=(e=to,t,o)=>{const{kind:n,metadata:i}=o;let r=globalThis.litPropertyMetadata.get(i);if(void 0===r&&globalThis.litPropertyMetadata.set(i,r=new Map),r.set(o.name,e),"accessor"===n){const{name:n}=o;return{set(o){const i=t.get.call(this);t.set.call(this,o),this.requestUpdate(n,i,e)},init(t){return void 0!==t&&this.C(n,void 0,e),t}}}if("setter"===n){const{name:n}=o;return function(o){const i=this[n];t.call(this,o),this.requestUpdate(n,i,e)}}throw Error("Unsupported decorator location: "+n)};function no(e){return(t,o)=>"object"==typeof o?oo(e,t,o):((e,t,o)=>{const n=t.hasOwnProperty(o);return t.constructor.createProperty(o,n?{...e,wrapped:!0}:e),n?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}function io(e){return no({...e,state:!0,attribute:!1})}const so=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function ro(e,t){return(o,n,i)=>{const r=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof n?o:i??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return so(o,n,{get(){let o=e.call(this);return void 0===o&&(o=r(this),(null!==o||this.hasUpdated)&&t.call(this,o)),o}})}return so(o,n,{get(){return r(this)}})}}function*ao(e,t){if(void 0!==e){let o=0;for(const n of e)yield t(n,o++)}}const co=2;class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const{D:lo}=Jt,ho=()=>document.createComment(""),uo=(e,t,o)=>{const n=e._$AA.parentNode,i=void 0===t?e._$AB:t._$AA;if(void 0===o){const t=n.insertBefore(ho(),i),r=n.insertBefore(ho(),i);o=new lo(t,r,e,e.options)}else{const t=o._$AB.nextSibling,r=o._$AM,a=r!==e;if(a){let t;o._$AQ?.(e),o._$AM=e,void 0!==o._$AP&&(t=e._$AU)!==r._$AU&&o._$AP(t)}if(t!==i||a){let e=o._$AA;for(;e!==t;){const t=e.nextSibling;n.insertBefore(e,i),e=t}}}return o},fo=(e,t,o=e)=>(e._$AI(t,o),e),go={},mo=e=>{e._$AP?.(!1,!0);let t=e._$AA;const o=e._$AB.nextSibling;for(;t!==o;){const e=t.nextSibling;t.remove(),t=e}},wo=(e,t,o)=>{const n=new Map;for(let i=t;i<=o;i++)n.set(e[i],i);return n},_o=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends directive_i{constructor(e){if(super(e),e.type!==co)throw Error("repeat() can only be used in text expressions")}ht(e,t,o){let n;void 0===o?o=t:void 0!==t&&(n=t);const i=[],r=[];let a=0;for(const t of e)i[a]=n?n(t,a):a,r[a]=o(t,a),a++;return{values:r,keys:i}}render(e,t,o){return this.ht(e,t,o).values}update(e,[t,o,n]){const i=(e=>e._$AH)(e),{values:r,keys:a}=this.ht(t,o,n);if(!Array.isArray(i))return this.dt=a,r;const c=this.dt??=[],l=[];let h,d,u=0,p=i.length-1,f=0,b=r.length-1;for(;u<=p&&f<=b;)if(null===i[u])u++;else if(null===i[p])p--;else if(c[u]===a[f])l[f]=fo(i[u],r[f]),u++,f++;else if(c[p]===a[b])l[b]=fo(i[p],r[b]),p--,b--;else if(c[u]===a[b])l[b]=fo(i[u],r[b]),uo(e,l[b+1],i[u]),u++,b--;else if(c[p]===a[f])l[f]=fo(i[p],r[f]),uo(e,i[u],i[p]),p--,f++;else if(void 0===h&&(h=wo(a,f,b),d=wo(c,u,p)),h.has(c[u]))if(h.has(c[p])){const t=d.get(a[f]),o=void 0!==t?i[t]:null;if(null===o){const t=uo(e,i[u]);fo(t,r[f]),l[f]=t}else l[f]=fo(o,r[f]),uo(e,i[u],o),i[t]=null;f++}else mo(i[p]),p--;else mo(i[u]),u++;for(;f<=b;){const t=uo(e,l[b+1]);fo(t,r[f]),l[f++]=t}for(;u<=p;){const e=i[u++];null!==e&&mo(e)}return this.dt=a,((e,t=go)=>{e._$AH=t})(e,l),qt}});function ko(e,t,o){return e?t(e):o?.(e)}const xo=Qe`
	:host {
		--focus-color: var(--vscode-focusBorder);
		--gk-focus-border-color: var(--focus-color);

		--gk-additions-color: var(--vscode-gitDecoration-addedResourceForeground);
		--gk-deletions-color: var(--vscode-gitDecoration-deletedResourceForeground);

		--gk-avatar-background-color: var(--background-10);
		--gk-tag-background-color: var(--background-10);
		--gk-text-secondary-color: var(--color-foreground--85);

		--gk-menu-border-color: var(--vscode-menu-border);
		--gk-menu-background-color: var(--vscode-menu-background);
		--gk-menu-item-background-color-hover: var(--vscode-menu-selectionBackground);
		--gk-menu-item-background-color-active: var(--vscode-menu-background);

		--gk-button-ghost-color: var(--color-foreground);
		--gk-button-ghost-color-active: var(--color-foreground--85);
		--gk-button-ghost-color-disabled: var(--color-foreground--50);
		--gk-button-outline-color: var(--color-foreground);
		--gk-button-outline-color-active: var(--background-10);
		--gk-button-outline-color-disabled: var(--color-foreground--50);

		--gk-tooltip-background-color: var(--popover-bg); // var(--vscode-editorHoverWidget-background);
		--gk-tooltip-font-color: var(--color-foreground); // var(--vscode-editorHoverWidget-foreground);
		--gk-tooltip-font-weight: normal;
		--gk-tooltip-font-size: 1.2rem;
	}
`,Ao=(Qe`
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
`,Qe`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`),So=Qe`
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
`;Qe`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${Ao}
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
`;var Co=Object.defineProperty,Eo=Object.getOwnPropertyDescriptor,To=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?Eo(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&Co(t,o,r),r};let Po=class extends lit_element_s{constructor(){super(...arguments),this.full=!1,this.disabled=!1,this.tabIndex=0}get role(){return this.href?"link":"button"}updated(e){super.updated(e),e.has("disabled")&&(this.tabIndex=this.disabled?-1:0,this.setAttribute("aria-disabled",this.disabled.toString()))}render(){const e=jt`<slot></slot>`;return null!=this.href?jt`<a href=${this.href}>${e}</a>`:e}};Po.styles=[So,Qe`
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
				${Ao}
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
		`],To([no({type:Boolean,reflect:!0})],Po.prototype,"full",2),To([no({type:Boolean,reflect:!0})],Po.prototype,"disabled",2),To([no({reflect:!0})],Po.prototype,"density",2),To([no()],Po.prototype,"href",2),To([no({reflect:!0})],Po.prototype,"role",1),To([no()],Po.prototype,"appearance",2),To([no({type:Number,reflect:!0})],Po.prototype,"tabIndex",2),Po=To([eo("gl-button")],Po);var Oo=Object.defineProperty,No=Object.getOwnPropertyDescriptor,Lo=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?No(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&Oo(t,o,r),r};let zo=class extends lit_element_s{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=16}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};zo.styles=Qe`
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
	`,Lo([no()],zo.prototype,"icon",2),Lo([no()],zo.prototype,"modifier",2),Lo([no({type:Number})],zo.prototype,"size",2),zo=Lo([eo("code-icon")],zo);const Io=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let Uo;let Fo,jo,qo;function Vo(e,t){const o=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,n,i,r]of Io){const a=Math.abs(o);if(a>=n||1e3===n){if(t){if(null==Uo&&(null!=qo?Uo=qo.resolvedOptions().locale:null!=jo?Uo=jo.resolvedOptions().locale:(qo=new Intl.RelativeTimeFormat(Fo,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),Uo=qo.resolvedOptions().locale)),"en"===Uo||Uo?.startsWith("en-")){return`${Math.round(a/i)}${r}`}return null==qo&&(qo=new Intl.RelativeTimeFormat(Fo,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),qo.format(Math.round(o/i),e)}return null==jo&&(jo=new Intl.RelativeTimeFormat(Fo,{localeMatcher:"best fit",numeric:"auto",style:"long"})),jo.format(Math.round(o/i),e)}}return""}var Wo=(e=>(e[e.VerificationRequired=-1]="VerificationRequired",e[e.Free=0]="Free",e[e.FreeInPreviewTrial=1]="FreeInPreviewTrial",e[e.FreePreviewTrialExpired=2]="FreePreviewTrialExpired",e[e.FreePlusInTrial=3]="FreePlusInTrial",e[e.FreePlusTrialExpired=4]="FreePlusTrialExpired",e[e.Paid=5]="Paid",e))(Wo||{});function Go(e){switch(e){case"free+":return"GitKraken Free";case"pro":return"GitKraken Pro";case"teams":return"GitKraken Teams";case"enterprise":return"GitKraken Enterprise";default:return"GitKraken"}}function Yo(e,t){return Ko(e.plan.effective.expiresOn,t)}function Ko(e,t){return null!=e?function(e,t,o){const n=("number"==typeof t?t:t.getTime())-("number"==typeof e?e:e.getTime());switch(o){case"days":return Math.floor(n/864e5);case"hours":return Math.floor(n/36e5);case"minutes":return Math.floor(n/6e4);case"seconds":return Math.floor(n/1e3);default:return n}}(Date.now(),new Date(e),t):void 0}function Qo(e){return null!=e&&(5===e||1===e||3===e)}function Jo(e){return null!=e&&(1===e||3===e)}const Zo=Qe`
	a {
		color: var(--link-foreground);
		text-decoration: var(--link-decoration-default, none);
	}
	a:focus {
		outline-color: var(--focus-border);
	}
	a:hover {
		color: var(--link-foreground-active);
		text-decoration: underline;
	}
`;var Xo=Object.defineProperty,en=Object.getOwnPropertyDescriptor,tn=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?en(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&Xo(t,o,r),r};let on=class extends lit_element_s{render(){if(null==this.state)return void(this.hidden=!0);this.hidden=!1;const e="alert"===(this.appearance??"alert")?"alert":Vt,t=new Date("2023-12-31T07:59:00.000Z").getTime(),o=Date.now()<t;switch(this.state){case Wo.VerificationRequired:return jt`
					<p>You must verify your email before you can continue.</p>
					<gl-button appearance="${e}" href="command:gitlens.plus.resendVerification"
						>Resend verification email</gl-button
					>
					<gl-button appearance="${e}" href="command:gitlens.plus.validate"
						>Refresh verification status</gl-button
					>
				`;case Wo.Free:return jt`
					<gl-button appearance="${e}" href="command:gitlens.plus.startPreviewTrial"
						>Preview Now</gl-button
					>
					<p>
						Preview Pro for 3 days, or
						<a href="command:gitlens.plus.loginOrSignUp">sign in</a> to start a full 7-day GitKraken trial.
					</p>
					<p>✨ A trial or paid plan is required to use this on privately hosted repos.</p>
				`;case Wo.FreePreviewTrialExpired:return jt`
					<p>
						Your 3-day Pro preview has ended, start a free GitKraken trial to get an additional 7 days, or
						<a href="command:gitlens.plus.loginOrSignUp">sign in</a>.
					</p>
					<gl-button appearance="${e}" href="command:gitlens.plus.loginOrSignUp"
						>Start Free GitKraken Trial</gl-button
					>
					<p>✨ A trial or paid plan is required to use this on privately hosted repos.</p>
				`;case Wo.FreePlusTrialExpired:return jt`
					<p>
						Your GitKraken trial has ended, please upgrade to continue to use this on privately hosted
						repos.
					</p>
					${ko(o,(()=>jt`<p style="text-align: center;">
								<a
									href=${"https://www.gitkraken.com/hs23?utm_source=holiday_special&utm_medium=gitlens_banner&utm_campaign=holiday_special_2023"}
									>Holiday Special: <b>50% off first seat of Pro</b> — only $4/month!<br />
									Includes entire GitKraken suite of dev tools.</a
								>
							</p>`),(()=>jt`<p style="text-align: center;">
								Special: <b>50% off first seat of Pro</b> — only $4/month!<br />
								Includes entire GitKraken suite of dev tools.
							</p>`))}
					<gl-button appearance="${e}" href="command:gitlens.plus.purchase"
						>Upgrade to Pro</gl-button
					>
					<p>✨ A paid plan is required to use this on privately hosted repos.</p>
				`}}};on.styles=[Zo,Qe`
			:host {
				container-type: inline-size;
			}

			:host([appearance='welcome']) gl-button {
				width: 100%;
				max-width: 300px;
			}

			@container (max-width: 600px) {
				:host([appearance='welcome']) gl-button {
					display: block;
					margin-left: auto;
					margin-right: auto;
				}
			}

			:host([appearance='alert']) gl-button {
				display: block;
				margin-left: auto;
				margin-right: auto;
			}

			:host-context([appearance='alert']) p:first-child {
				margin-top: 0;
			}

			:host-context([appearance='alert']) p:last-child {
				margin-bottom: 0;
			}
		`],tn([no({type:String})],on.prototype,"appearance",2),tn([no({attribute:!1,type:Number})],on.prototype,"state",2),on=tn([eo("gk-feature-gate-plus-state")],on);var nn=Object.defineProperty,sn=Object.getOwnPropertyDescriptor,rn=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?sn(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&nn(t,o,r),r};let an=class extends lit_element_s{render(){if(!this.visible||null!=this.state&&Qo(this.state))return void(this.hidden=!0);const e=this.appearance??"editor"===(document.body.getAttribute("data-placement")??"editor")?"alert":"welcome";return this.hidden=!1,jt`
			<section>
				<slot>
					<slot name="feature" hidden=${this.state===Wo.Free?Vt:""}></slot>
				</slot>
				<gk-feature-gate-plus-state appearance=${e} .state=${this.state}></gk-feature-gate-plus-state>
			</section>
		`}};an.styles=Qe`
		:host {
			--background: var(--vscode-sideBar-background);
			--foreground: var(--vscode-sideBar-foreground);
			--link-foreground: var(--vscode-textLink-foreground);
			--link-foreground-active: var(--vscode-textLink-activeForeground);

			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			overflow: auto;
			z-index: 100;

			box-sizing: border-box;
		}

		:host-context(body[data-placement='editor']),
		:host([appearance='alert']) {
			--background: transparent;
			--foreground: var(--vscode-editor-foreground);

			backdrop-filter: blur(3px) saturate(0.8);
			padding: 0 2rem;
		}

		::slotted(p) {
			margin: revert !important;
		}

		::slotted(p:first-child) {
			margin-top: 0 !important;
		}

		section {
			--section-foreground: var(--foreground);
			--section-background: var(--background);
			--section-border-color: transparent;

			display: flex;
			flex-direction: column;
			padding: 0 2rem 1.3rem 2rem;
			background: var(--section-background);
			color: var(--section-foreground);
			border: 1px solid var(--section-border-color);

			height: min-content;
		}

		:host-context(body[data-placement='editor']) section,
		:host([appearance='alert']) section {
			--section-foreground: var(--color-alert-foreground);
			--section-background: var(--color-alert-infoBackground);
			--section-border-color: var(--color-alert-infoBorder);

			--link-decoration-default: underline;
			--link-foreground: var(--vscode-foreground);
			--link-foreground-active: var(--vscode-foreground);

			border-radius: 0.3rem;
			max-width: 600px;
			max-height: min-content;
			margin: 0.2rem auto;
			padding: 1.3rem;
		}

		:host-context(body[data-placement='editor']) section ::slotted(gl-button),
		:host([appearance='alert']) section ::slotted(gl-button) {
			display: block;
			margin-left: auto;
			margin-right: auto;
		}
	`,rn([no({reflect:!0})],an.prototype,"appearance",2),rn([no({attribute:!1,type:Number})],an.prototype,"state",2),rn([no({type:Boolean})],an.prototype,"visible",2),an=rn([eo("gk-feature-gate")],an);const cn=function(){if("undefined"!=typeof globalThis)return globalThis;if("undefined"!=typeof global)return global;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(e){return{}}}();void 0===cn.trustedTypes&&(cn.trustedTypes={createPolicy:(e,t)=>t});const ln={configurable:!1,enumerable:!1,writable:!1};void 0===cn.FAST&&Reflect.defineProperty(cn,"FAST",Object.assign({value:Object.create(null)},ln));const hn=cn.FAST;if(void 0===hn.getById){const e=Object.create(null);Reflect.defineProperty(hn,"getById",Object.assign({value(t,o){let n=e[t];return void 0===n&&(n=o?e[t]=o():null),n}},ln))}const dn=Object.freeze([]);function un(){const e=new WeakMap;return function(t){let o=e.get(t);if(void 0===o){let n=Reflect.getPrototypeOf(t);for(;void 0===o&&null!==n;)o=e.get(n),n=Reflect.getPrototypeOf(n);o=void 0===o?[]:o.slice(0),e.set(t,o)}return o}}const pn=cn.FAST.getById(1,(()=>{const e=[],t=[];function o(){if(t.length)throw t.shift()}function n(e){try{e.call()}catch(e){t.push(e),setTimeout(o,0)}}function i(){let t=0;for(;t<e.length;)if(n(e[t]),t++,t>1024){for(let o=0,n=e.length-t;o<n;o++)e[o]=e[o+t];e.length-=t,t=0}e.length=0}return Object.freeze({enqueue:function(t){e.length<1&&cn.requestAnimationFrame(i),e.push(t)},process:i})})),fn=cn.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});let bn=fn;const gn=`fast-${Math.random().toString(36).substring(2,8)}`,mn=`${gn}{`,vn=`}${gn}`,yn=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(bn!==fn)throw new Error("The HTML policy can only be set once.");bn=e},createHTML:e=>bn.createHTML(e),isMarker:e=>e&&8===e.nodeType&&e.data.startsWith(gn),extractDirectiveIndexFromMarker:e=>parseInt(e.data.replace(`${gn}:`,"")),createInterpolationPlaceholder:e=>`${mn}${e}${vn}`,createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder:e=>`\x3c!--${gn}:${e}--\x3e`,queueUpdate:pn.enqueue,processUpdates:pn.process,nextUpdate:()=>new Promise(pn.enqueue),setAttribute(e,t,o){null==o?e.removeAttribute(t):e.setAttribute(t,o)},setBooleanAttribute(e,t,o){o?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;null!==t;t=e.firstChild)e.removeChild(t)},createTemplateWalker:e=>document.createTreeWalker(e,133,null,!1)});class SubscriberSet{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return void 0===this.spillover?this.sub1===e||this.sub2===e:-1!==this.spillover.indexOf(e)}subscribe(e){const t=this.spillover;if(void 0===t){if(this.has(e))return;if(void 0===this.sub1)return void(this.sub1=e);if(void 0===this.sub2)return void(this.sub2=e);this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else{-1===t.indexOf(e)&&t.push(e)}}unsubscribe(e){const t=this.spillover;if(void 0===t)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const o=t.indexOf(e);-1!==o&&t.splice(o,1)}}notify(e){const t=this.spillover,o=this.source;if(void 0===t){const t=this.sub1,n=this.sub2;void 0!==t&&t.handleChange(o,e),void 0!==n&&n.handleChange(o,e)}else for(let n=0,i=t.length;n<i;++n)t[n].handleChange(o,e)}}class PropertyChangeNotifier{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const o=this.subscribers[e];void 0!==o&&o.notify(e),null===(t=this.sourceSubscribers)||void 0===t||t.notify(e)}subscribe(e,t){var o;if(t){let o=this.subscribers[t];void 0===o&&(this.subscribers[t]=o=new SubscriberSet(this.source)),o.subscribe(e)}else this.sourceSubscribers=null!==(o=this.sourceSubscribers)&&void 0!==o?o:new SubscriberSet(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var o;if(t){const o=this.subscribers[t];void 0!==o&&o.unsubscribe(e)}else null===(o=this.sourceSubscribers)||void 0===o||o.unsubscribe(e)}}const wn=hn.getById(2,(()=>{const e=/(:|&&|\|\||if)/,t=new WeakMap,o=yn.queueUpdate;let n,i=e=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function r(e){let o=e.$fastController||t.get(e);return void 0===o&&(Array.isArray(e)?o=i(e):t.set(e,o=new PropertyChangeNotifier(e))),o}const a=un();class DefaultObservableAccessor{constructor(e){this.name=e,this.field=`_${e}`,this.callback=`${e}Changed`}getValue(e){return void 0!==n&&n.watch(e,this.name),e[this.field]}setValue(e,t){const o=this.field,n=e[o];if(n!==t){e[o]=t;const i=e[this.callback];"function"==typeof i&&i.call(e,n,t),r(e).notify(this.name)}}}class BindingObserverImplementation extends SubscriberSet{constructor(e,t,o=!1){super(e,t),this.binding=e,this.isVolatileBinding=o,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(e,t){this.needsRefresh&&null!==this.last&&this.disconnect();const o=n;n=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const i=this.binding(e,t);return n=o,i}disconnect(){if(null!==this.last){let e=this.first;for(;void 0!==e;)e.notifier.unsubscribe(this,e.propertyName),e=e.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(e,t){const o=this.last,i=r(e),a=null===o?this.first:{};if(a.propertySource=e,a.propertyName=t,a.notifier=i,i.subscribe(this,t),null!==o){if(!this.needsRefresh){let t;n=void 0,t=o.propertySource[o.propertyName],n=this,e===t&&(this.needsRefresh=!0)}o.next=a}this.last=a}handleChange(){this.needsQueue&&(this.needsQueue=!1,o(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let e=this.first;return{next:()=>{const t=e;return void 0===t?{value:void 0,done:!0}:(e=e.next,{value:t,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(e){i=e},getNotifier:r,track(e,t){void 0!==n&&n.watch(e,t)},trackVolatile(){void 0!==n&&(n.needsRefresh=!0)},notify(e,t){r(e).notify(t)},defineProperty(e,t){"string"==typeof t&&(t=new DefaultObservableAccessor(t)),a(e).push(t),Reflect.defineProperty(e,t.name,{enumerable:!0,get:function(){return t.getValue(this)},set:function(e){t.setValue(this,e)}})},getAccessors:a,binding(e,t,o=this.isVolatileBinding(e)){return new BindingObserverImplementation(e,t,o)},isVolatileBinding:t=>e.test(t.toString())})}));function _n(e,t){wn.defineProperty(e,t)}function kn(e,t,o){return Object.assign({},o,{get:function(){return wn.trackVolatile(),o.get.apply(this)}})}const $n=hn.getById(3,(()=>{let e=null;return{get:()=>e,set(t){e=t}}}));class ExecutionContext{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return $n.get()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){$n.set(e)}}wn.defineProperty(ExecutionContext.prototype,"index"),wn.defineProperty(ExecutionContext.prototype,"length");const xn=Object.seal(new ExecutionContext);class HTMLDirective{constructor(){this.targetIndex=0}}class TargetedHTMLDirective extends HTMLDirective{constructor(){super(...arguments),this.createPlaceholder=yn.createInterpolationPlaceholder}}class AttachedBehaviorHTMLDirective extends HTMLDirective{constructor(e,t,o){super(),this.name=e,this.behavior=t,this.options=o}createPlaceholder(e){return yn.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function An(e,t){this.source=e,this.context=t,null===this.bindingObserver&&(this.bindingObserver=wn.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function Sn(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function Cn(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function En(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function Tn(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function Pn(e){yn.setAttribute(this.target,this.targetName,e)}function Rn(e){yn.setBooleanAttribute(this.target,this.targetName,e)}function On(e){if(null==e&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;void 0===t?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function Mn(e){this.target[this.targetName]=e}function Bn(e){const t=this.classVersions||Object.create(null),o=this.target;let n=this.version||0;if(null!=e&&e.length){const i=e.split(/\s+/);for(let e=0,r=i.length;e<r;++e){const r=i[e];""!==r&&(t[r]=n,o.classList.add(r))}}if(this.classVersions=t,this.version=n+1,0!==n){n-=1;for(const e in t)t[e]===n&&o.classList.remove(e)}}class HTMLBindingDirective extends TargetedHTMLDirective{constructor(e){super(),this.binding=e,this.bind=An,this.unbind=Cn,this.updateTarget=Pn,this.isBindingVolatile=wn.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,void 0!==e)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=Mn,"innerHTML"===this.cleanedTargetName){const e=this.binding;this.binding=(t,o)=>yn.createHTML(e(t,o))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=Rn;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=Sn,this.unbind=Tn;break;default:this.cleanedTargetName=e,"class"===e&&(this.updateTarget=Bn)}}targetAtContent(){this.updateTarget=On,this.unbind=En}createBehavior(e){return new BindingBehavior(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class BindingBehavior{constructor(e,t,o,n,i,r,a){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=o,this.bind=n,this.unbind=i,this.updateTarget=r,this.targetName=a}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){ExecutionContext.setEvent(e);const t=this.binding(this.source,this.context);ExecutionContext.setEvent(null),!0!==t&&e.preventDefault()}}let Nn=null;class CompilationContext{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){Nn=this}static borrow(e){const t=Nn||new CompilationContext;return t.directives=e,t.reset(),Nn=null,t}}function Dn(e){if(1===e.length)return e[0];let t;const o=e.length,n=e.map((e=>"string"==typeof e?()=>e:(t=e.targetName||t,e.binding))),i=new HTMLBindingDirective(((e,t)=>{let i="";for(let r=0;r<o;++r)i+=n[r](e,t);return i}));return i.targetName=t,i}const Ln=vn.length;function zn(e,t){const o=t.split(mn);if(1===o.length)return null;const n=[];for(let t=0,i=o.length;t<i;++t){const i=o[t],r=i.indexOf(vn);let a;if(-1===r)a=i;else{const t=parseInt(i.substring(0,r));n.push(e.directives[t]),a=i.substring(r+Ln)}""!==a&&n.push(a)}return n}function In(e,t,o=!1){const n=t.attributes;for(let i=0,r=n.length;i<r;++i){const a=n[i],c=a.value,l=zn(e,c);let h=null;null===l?o&&(h=new HTMLBindingDirective((()=>c)),h.targetName=a.name):h=Dn(l),null!==h&&(t.removeAttributeNode(a),i--,r--,e.addFactory(h))}}function Hn(e,t,o){const n=zn(e,t.textContent);if(null!==n){let i=t;for(let r=0,a=n.length;r<a;++r){const a=n[r],c=0===r?t:i.parentNode.insertBefore(document.createTextNode(""),i.nextSibling);"string"==typeof a?c.textContent=a:(c.textContent=" ",e.captureContentBinding(a)),i=c,e.targetIndex++,c!==t&&o.nextNode()}e.targetIndex--}}const Un=document.createRange();class HTMLView{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const o=e.parentNode;let n,i=this.firstChild;for(;i!==t;)n=i.nextSibling,o.insertBefore(i,e),i=n;o.insertBefore(t,e)}}remove(){const e=this.fragment,t=this.lastChild;let o,n=this.firstChild;for(;n!==t;)o=n.nextSibling,e.appendChild(n),n=o;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let o,n=this.firstChild;for(;n!==t;)o=n.nextSibling,e.removeChild(n),n=o;e.removeChild(t);const i=this.behaviors,r=this.source;for(let e=0,t=i.length;e<t;++e)i[e].unbind(r)}bind(e,t){const o=this.behaviors;if(this.source!==e)if(null!==this.source){const n=this.source;this.source=e,this.context=t;for(let i=0,r=o.length;i<r;++i){const r=o[i];r.unbind(n),r.bind(e,t)}}else{this.source=e,this.context=t;for(let n=0,i=o.length;n<i;++n)o[n].bind(e,t)}}unbind(){if(null===this.source)return;const e=this.behaviors,t=this.source;for(let o=0,n=e.length;o<n;++o)e[o].unbind(t);this.source=null}static disposeContiguousBatch(e){if(0!==e.length){Un.setStartBefore(e[0].firstChild),Un.setEndAfter(e[e.length-1].lastChild),Un.deleteContents();for(let t=0,o=e.length;t<o;++t){const o=e[t],n=o.behaviors,i=o.source;for(let e=0,t=n.length;e<t;++e)n[e].unbind(i)}}}}class ViewTemplate{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(null===this.fragment){let e;const t=this.html;if("string"==typeof t){e=document.createElement("template"),e.innerHTML=yn.createHTML(t);const o=e.content.firstElementChild;null!==o&&"TEMPLATE"===o.tagName&&(e=o)}else e=t;const o=function(e,t){const o=e.content;document.adoptNode(o);const n=CompilationContext.borrow(t);In(n,e,!0);const i=n.behaviorFactories;n.reset();const r=yn.createTemplateWalker(o);let a;for(;a=r.nextNode();)switch(n.targetIndex++,a.nodeType){case 1:In(n,a);break;case 3:Hn(n,a,r);break;case 8:yn.isMarker(a)&&n.addFactory(t[yn.extractDirectiveIndexFromMarker(a)])}let c=0;(yn.isMarker(o.firstChild)||1===o.childNodes.length&&t.length)&&(o.insertBefore(document.createComment(""),o.firstChild),c=-1);const l=n.behaviorFactories;return n.release(),{fragment:o,viewBehaviorFactories:l,hostBehaviorFactories:i,targetOffset:c}}(e,this.directives);this.fragment=o.fragment,this.viewBehaviorFactories=o.viewBehaviorFactories,this.hostBehaviorFactories=o.hostBehaviorFactories,this.targetOffset=o.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),o=this.viewBehaviorFactories,n=new Array(this.behaviorCount),i=yn.createTemplateWalker(t);let r=0,a=this.targetOffset,c=i.nextNode();for(let e=o.length;r<e;++r){const e=o[r],t=e.targetIndex;for(;null!==c;){if(a===t){n[r]=e.createBehavior(c);break}c=i.nextNode(),a++}}if(this.hasHostBehaviors){const t=this.hostBehaviorFactories;for(let o=0,i=t.length;o<i;++o,++r)n[r]=t[o].createBehavior(e)}return new HTMLView(t,n)}render(e,t,o){"string"==typeof t&&(t=document.getElementById(t)),void 0===o&&(o=t);const n=this.create(o);return n.bind(e,xn),n.appendTo(t),n}}const Fn=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function jn(e,...t){const o=[];let n="";for(let i=0,r=e.length-1;i<r;++i){const r=e[i];let a=t[i];if(n+=r,a instanceof ViewTemplate){const e=a;a=()=>e}if("function"==typeof a&&(a=new HTMLBindingDirective(a)),a instanceof TargetedHTMLDirective){const e=Fn.exec(r);null!==e&&(a.targetName=e[2])}a instanceof HTMLDirective?(n+=a.createPlaceholder(o.length),o.push(a)):n+=a}return n+=e[e.length-1],new ViewTemplate(n,o)}class NodeObservationBehavior{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=wn.getAccessors(e).some((e=>e.name===t)),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(dn),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class SlottedBehavior extends NodeObservationBehavior{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function qn(e){return"string"==typeof e&&(e={property:e}),new AttachedBehaviorHTMLDirective("fast-slotted",SlottedBehavior,e)}const Vn=e=>"function"==typeof e,Wn=()=>null;function Gn(e){return void 0===e?Wn:Vn(e)?e:()=>e}class css_directive_CSSDirective{createCSS(){return""}createBehavior(){}}class element_styles_ElementStyles{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=null===this.behaviors?e:this.behaviors.concat(e),this}}function Yn(e){return e.map((e=>e instanceof element_styles_ElementStyles?Yn(e.styles):[e])).reduce(((e,t)=>e.concat(t)),[])}function Kn(e){return e.map((e=>e instanceof element_styles_ElementStyles?e.behaviors:null)).reduce(((e,t)=>null===t?e:(null===e&&(e=[]),e.concat(t))),null)}element_styles_ElementStyles.create=(()=>{if(yn.supportsAdoptedStyleSheets){const e=new Map;return t=>new AdoptedStyleSheetsStyles(t,e)}return e=>new StyleElementStyles(e)})();let Qn=(e,t)=>{e.adoptedStyleSheets=[...e.adoptedStyleSheets,...t]},Jn=(e,t)=>{e.adoptedStyleSheets=e.adoptedStyleSheets.filter((e=>-1===t.indexOf(e)))};if(yn.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),Qn=(e,t)=>{e.adoptedStyleSheets.push(...t)},Jn=(e,t)=>{for(const o of t){const t=e.adoptedStyleSheets.indexOf(o);-1!==t&&e.adoptedStyleSheets.splice(t,1)}}}catch(we){}class AdoptedStyleSheetsStyles extends element_styles_ElementStyles{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=Kn(e)}get styleSheets(){if(void 0===this._styleSheets){const e=this.styles,t=this.styleSheetCache;this._styleSheets=Yn(e).map((e=>{if(e instanceof CSSStyleSheet)return e;let o=t.get(e);return void 0===o&&(o=new CSSStyleSheet,o.replaceSync(e),t.set(e,o)),o}))}return this._styleSheets}addStylesTo(e){Qn(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){Jn(e,this.styleSheets),super.removeStylesFrom(e)}}let Zn=0;class StyleElementStyles extends element_styles_ElementStyles{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=Kn(e),this.styleSheets=Yn(e),this.styleClass="fast-style-class-"+ ++Zn}addStylesTo(e){const t=this.styleSheets,o=this.styleClass;e=this.normalizeTarget(e);for(let n=0;n<t.length;n++){const i=document.createElement("style");i.innerHTML=t[n],i.className=o,e.append(i)}super.addStylesTo(e)}removeStylesFrom(e){const t=(e=this.normalizeTarget(e)).querySelectorAll(`.${this.styleClass}`);for(let o=0,n=t.length;o<n;++o)e.removeChild(t[o]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}function Xn(e,t){const o=[];let n="";const i=[];for(let r=0,a=e.length-1;r<a;++r){n+=e[r];let a=t[r];if(a instanceof css_directive_CSSDirective){const e=a.createBehavior();a=a.createCSS(),e&&i.push(e)}a instanceof element_styles_ElementStyles||a instanceof CSSStyleSheet?(""!==n.trim()&&(o.push(n),n=""),o.push(a)):n+=a}return n+=e[e.length-1],""!==n.trim()&&o.push(n),{styles:o,behaviors:i}}function ei(e,...t){const{styles:o,behaviors:n}=Xn(e,t),i=element_styles_ElementStyles.create(o);return n.length&&i.withBehaviors(...n),i}const ti=Object.freeze({locate:un()}),oi={toView:e=>e?"true":"false",fromView:e=>null!=e&&"false"!==e&&!1!==e&&0!==e};class AttributeDefinition{constructor(e,t,o=t.toLowerCase(),n="reflect",i){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=o,this.mode=n,this.converter=i,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,"boolean"===n&&void 0===i&&(this.converter=oi)}setValue(e,t){const o=e[this.fieldName],n=this.converter;void 0!==n&&(t=n.fromView(t)),o!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](o,t),e.$fastController.notify(this.name))}getValue(e){return wn.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,o=this.guards;o.has(e)||"fromView"===t||yn.queueUpdate((()=>{o.add(e);const n=e[this.fieldName];switch(t){case"reflect":const t=this.converter;yn.setAttribute(e,this.attribute,void 0!==t?t.toView(n):n);break;case"boolean":yn.setBooleanAttribute(e,this.attribute,n)}o.delete(e)}))}static collect(e,...t){const o=[];t.push(ti.locate(e));for(let n=0,i=t.length;n<i;++n){const i=t[n];if(void 0!==i)for(let t=0,n=i.length;t<n;++t){const n=i[t];"string"==typeof n?o.push(new AttributeDefinition(e,n)):o.push(new AttributeDefinition(e,n.property,n.attribute,n.mode,n.converter))}}return o}}function ni(e,t){let o;function n(e,t){arguments.length>1&&(o.property=t),ti.locate(e.constructor).push(o)}return arguments.length>1?(o={},void n(e,t)):(o=void 0===e?{}:e,n)}const ii={mode:"open"},si={},ri=hn.getById(4,(()=>{const e=new Map;return Object.freeze({register:t=>!e.has(t.type)&&(e.set(t.type,t),!0),getByType:t=>e.get(t)})}));class FASTElementDefinition{constructor(e,t=e.definition){"string"==typeof t&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const o=AttributeDefinition.collect(e,t.attributes),n=new Array(o.length),i={},r={};for(let e=0,t=o.length;e<t;++e){const t=o[e];n[e]=t.attribute,i[t.name]=t,r[t.attribute]=t}this.attributes=o,this.observedAttributes=n,this.propertyLookup=i,this.attributeLookup=r,this.shadowOptions=void 0===t.shadowOptions?ii:null===t.shadowOptions?void 0:Object.assign(Object.assign({},ii),t.shadowOptions),this.elementOptions=void 0===t.elementOptions?si:Object.assign(Object.assign({},si),t.elementOptions),this.styles=void 0===t.styles?void 0:Array.isArray(t.styles)?element_styles_ElementStyles.create(t.styles):t.styles instanceof element_styles_ElementStyles?t.styles:element_styles_ElementStyles.create([t.styles])}get isDefined(){return!!ri.getByType(this.type)}define(e=customElements){const t=this.type;if(ri.register(this)){const e=this.attributes,o=t.prototype;for(let t=0,n=e.length;t<n;++t)wn.defineProperty(o,e[t]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}}FASTElementDefinition.forType=ri.getByType;const ai=new WeakMap,ci={bubbles:!0,composed:!0,cancelable:!0};function li(e){return e.shadowRoot||ai.get(e)||null}class Controller extends PropertyChangeNotifier{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const o=t.shadowOptions;if(void 0!==o){const t=e.attachShadow(o);"closed"===o.mode&&ai.set(e,t)}const n=wn.getAccessors(e);if(n.length>0){const t=this.boundObservables=Object.create(null);for(let o=0,i=n.length;o<i;++o){const i=n[o].name,r=e[i];void 0!==r&&(delete e[i],t[i]=r)}}}get isConnected(){return wn.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,wn.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=e,this.needsInitialization||null===e||this.addStyles(e))}addStyles(e){const t=li(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const o=e.behaviors;e.addStylesTo(t),null!==o&&this.addBehaviors(o)}}removeStyles(e){const t=li(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const o=e.behaviors;e.removeStylesFrom(t),null!==o&&this.removeBehaviors(o)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),o=e.length,n=[];for(let i=0;i<o;++i){const o=e[i];t.has(o)?t.set(o,t.get(o)+1):(t.set(o,1),n.push(o))}if(this._isConnected){const e=this.element;for(let t=0;t<n.length;++t)n[t].bind(e,xn)}}removeBehaviors(e,t=!1){const o=this.behaviors;if(null===o)return;const n=e.length,i=[];for(let r=0;r<n;++r){const n=e[r];if(o.has(n)){const e=o.get(n)-1;0===e||t?o.delete(n)&&i.push(n):o.set(n,e)}}if(this._isConnected){const e=this.element;for(let t=0;t<i.length;++t)i[t].unbind(e)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(e,xn);const t=this.behaviors;if(null!==t)for(const[o]of t)o.bind(e,xn);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;null!==e&&e.unbind();const t=this.behaviors;if(null!==t){const e=this.element;for(const[o]of t)o.unbind(e)}}onAttributeChangedCallback(e,t,o){const n=this.definition.attributeLookup[e];void 0!==n&&n.onAttributeChangedCallback(this.element,o)}emit(e,t,o){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},ci),o)))}finishInitialization(){const e=this.element,t=this.boundObservables;if(null!==t){const o=Object.keys(t);for(let n=0,i=o.length;n<i;++n){const i=o[n];e[i]=t[i]}this.boundObservables=null}const o=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():o.template&&(this._template=o.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():o.styles&&(this._styles=o.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,o=li(t)||t;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||yn.removeChildNodes(o),e&&(this.view=e.render(t,o,t))}static forCustomElement(e){const t=e.$fastController;if(void 0!==t)return t;const o=FASTElementDefinition.forType(e.constructor);if(void 0===o)throw new Error("Missing FASTElement definition.");return e.$fastController=new Controller(e,o)}}function hi(e){return class extends e{constructor(){super(),Controller.forCustomElement(this)}$emit(e,t,o){return this.$fastController.emit(e,t,o)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,o){this.$fastController.onAttributeChangedCallback(e,t,o)}}}const di=Object.assign(hi(HTMLElement),{from:e=>hi(e),define:(e,t)=>new FASTElementDefinition(e,t).define().type});function ui(...e){return e.some((e=>(e?.length??0)>0))}const pi=ei`
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
`;var fi=Object.defineProperty,bi=Object.getOwnPropertyDescriptor,gi=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?bi(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&fi(t,o,r),r};const mi=jn`
	<template>
		<div class="top" ?hidden="${e=>!e.hasTopNodes}">
			<slot ${qn("typeNodes")} name="type"></slot>
			<slot ${qn("actionsNodes")} name="actions"></slot>
		</div>
		<div class="heading" ?hidden="${e=>!e.hasHeadingNodes}">
			<slot ${qn("headingNodes")} name="heading"></slot>
		</div>
		<div class="content"><slot></slot></div>
		${function(e,t,o){const n=Vn(e)?e:()=>e,i=Gn(t),r=Gn(o);return(e,t)=>n(e,t)?i(e,t):r(e,t)}((e=>e.caret),jn`<span class="caret"></span>`)}
	</template>
`,vi=ei`
	${pi}

	:host {
		position: absolute;
		width: var(--popover-width, 100%);
		max-width: var(--popover-max-width, 30rem);
		padding: 1.2rem 1.2rem 1.2rem;
		/* update with a standardized z-index */
		z-index: 10;

		background-color: var(--popover-bg);
		box-shadow: 0 0.3rem 0.3rem 0 var(--vscode-widget-shadow);

		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	:host([caret]:not([placement~='bottom'])) {
		transform: translateY(0.8rem);
	}

	:host([caret][placement~='bottom']) {
		transform: translateY(-0.8rem);
	}

	.top {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		opacity: 0.5;
		margin-top: -0.4rem;
	}

	.heading {
		font-weight: 600;
	}

	.caret {
		position: absolute;
		width: 0;
		height: 0;
		border-left: 0.8rem solid transparent;
		border-right: 0.8rem solid transparent;
		border-bottom: 0.8rem solid var(--popover-bg);
	}

	:host(:not([placement~='bottom'])) .caret {
		bottom: 100%;
	}

	:host([placement~='bottom']) .caret {
		top: 100%;
		transform: rotate(180deg);
	}

	:host(:not([placement~='end'])) .caret {
		left: 1.2rem;
	}

	:host([placement~='end']) .caret {
		right: 1.2rem;
	}
`;let yi=class extends di{constructor(){super(...arguments),this.open=!1,this.caret=!0}get hasTopNodes(){return ui(this.typeNodes,this.actionsNodes)}get hasHeadingNodes(){return ui(this.headingNodes)}};var wi;gi([ni({mode:"boolean"})],yi.prototype,"open",2),gi([ni({mode:"boolean"})],yi.prototype,"caret",2),gi([ni],yi.prototype,"placement",2),gi([_n],yi.prototype,"typeNodes",2),gi([_n],yi.prototype,"actionsNodes",2),gi([_n],yi.prototype,"headingNodes",2),gi([kn],yi.prototype,"hasTopNodes",1),gi([kn],yi.prototype,"hasHeadingNodes",1),yi=gi([(wi={name:"pop-over",template:mi,styles:vi},function(e){new FASTElementDefinition(e,wi).define()})],yi);var _i=Object.defineProperty,ki=Object.getOwnPropertyDescriptor,$i=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?ki(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&_i(t,o,r),r};let xi=class extends lit_element_s{constructor(){super(...arguments),this.placement="top end"}render(){const e=Qo(this.subscription?.state),t=Jo(this.subscription?.state);return jt`
			<span class="badge-container">
				<span class="badge ${e?"active":"inactive"}"
					>${t?jt`<span class="badge-trial">Trial</span>`:""}✨</span
				>
				<pop-over .placement=${this.placement} class="badge-popover">
					<span slot="heading"
						>${function(e,t){switch(e){case 4:return Go("free+");case 1:return`${Go("pro")} (Trial)`;case 3:return`${Go(t??"pro")} (Trial)`;case-1:return"GitKraken (Unverified)";case 5:return Go(t??"pro");default:return"GitKraken"}}(this.subscription?.state,this.subscription?.plan.effective.id)}${this.trialHtml}</span
					>
					${this.footnoteHtml}
				</pop-over>
			</span>
		`}get trialHtml(){if(!Jo(this.subscription?.state))return Vt;const e=Yo(this.subscription,"days")??0;return jt`<span class="badge-trial-left">${e<1?"<1 day":function(e,t,o){if(null==o)return`${t} ${e}${1===t?"":"s"}`;const n=1===t?e:o.plural??`${e}s`;return o.only?n:`${0===t?o.zero??t:o.format?.(t)??t}${o.infix??" "}${n}`}("day",e)} left</span>`}get footnoteHtml(){switch(this.subscription?.state){case Wo.VerificationRequired:case Wo.Free:case Wo.FreePreviewTrialExpired:return jt`<span class="badge-footnote"
					>✨ Requires a trial or paid plan for use on privately hosted repos.</span
				>`;case Wo.FreePlusTrialExpired:case Wo.FreeInPreviewTrial:case Wo.FreePlusInTrial:return jt`<span class="badge-footnote"
					>✨ Requires a paid plan for use on privately hosted repos.</span
				>`;case Wo.Paid:return jt`<span class="badge-footnote"
					>You have access to ✨ features on privately hosted repos and ☁️ features based on your plan.</span
				>`;default:return Vt}}};xi.styles=[So,Qe`
			:host {
				position: relative;
			}

			:host(:focus) {
				${Ao}
			}

			.badge-container {
				position: relative;
			}

			.badge {
				cursor: help;
			}

			.badge.inactive {
				filter: grayscale(100%);
			}

			.badge-popover {
				width: max-content;
				top: 100%;
				text-align: left;
			}

			.badge-footnote {
				white-space: break-spaces;
			}

			.badge-trial {
				font-size: smaller;
				font-weight: 700;
				margin-right: 0.5rem;
				text-transform: uppercase;
				white-space: nowrap;
			}

			.badge-trial-left {
				font-weight: 400;
				opacity: 0.6;
				margin-left: 1rem;
			}

			.badge:not(:hover) ~ .badge-popover {
				display: none;
			}

			:host(:not([placement~='end'])) .badge-popover {
				left: 0;
			}

			:host([placement~='end']) .badge-popover {
				right: 0;
			}
		`],$i([no({reflect:!0})],xi.prototype,"placement",2),$i([no({attribute:!1})],xi.prototype,"subscription",2),xi=$i([eo("gk-feature-gate-badge")],xi);const Ai=Qe`
	.repo-branch {
		display: flex;
		flex-direction: column;
		gap: 0 0.4rem;
	}

	@media (max-width: 720px) {
		.repo-branch {
			flex-direction: row;
			flex-wrap: wrap;
		}
	}

	.repo-branch__tag {
		cursor: pointer;
	}
`,Si=Qe`
	:host {
		display: block;
	}

	p {
		margin: 0;
	}

	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
	a:focus {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}

	.actions gk-tooltip {
		display: inline-block;
	}

	.actions a {
		box-sizing: border-box;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 3.2rem;
		height: 3.2rem;
		border-radius: 0.5rem;
		color: inherit;
		padding: 0.2rem;
		vertical-align: text-bottom;
		text-decoration: none;
		cursor: pointer;
	}
	.actions a:hover {
		background-color: var(--vscode-toolbar-hoverBackground);
	}
	.actions a:active {
		background-color: var(--vscode-toolbar-activeBackground);
	}
	.actions a[tabindex='-1'] {
		opacity: 0.5;
		cursor: default;
	}

	.actions a code-icon {
		font-size: 1.6rem;
	}

	.indicator-info {
		color: var(--vscode-problemsInfoIcon-foreground);
	}
	.indicator-warning {
		color: var(--vscode-problemsWarningIcon-foreground);
	}
	.indicator-error {
		color: var(--vscode-problemsErrorIcon-foreground);
	}
	.indicator-neutral {
		color: var(--color-alert-neutralBorder);
	}

	.row-type {
		--gk-badge-outline-padding: 0.3rem 0.8rem;
		--gk-badge-font-size: 1.1rem;
		opacity: 0.4;
		vertical-align: middle;
	}

	.title {
		font-size: 1.4rem;
	}

	.add-delete {
		margin-left: 0.4rem;
		margin-right: 0.2rem;
	}

	.key {
		z-index: 1;
		position: relative;
	}

	.date {
		display: inline-block;
		min-width: 1.6rem;
		line-height: 2.4rem;
	}

	gk-focus-row:not(:hover):not(:focus-within) gl-snooze:not([snoozed]),
	gk-focus-row:not(:hover):not(:focus-within) .pin:not(.is-active) {
		opacity: 0;
	}
`,Ci=Qe`
	.icon {
		box-sizing: border-box;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 2.4rem;
		height: 2.4rem;
	}

	.pin {
		color: inherit;
		text-decoration: none;
		cursor: pointer;
		opacity: 0.4;
	}

	.pin:hover {
		opacity: 0.64;
		text-decoration: none;
	}

	.pin:focus {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}

	.pin.is-active {
		opacity: 1;
	}

	.pin-menu {
		width: max-content;
	}

	gk-tooltip gk-menu {
		z-index: 10;
	}
`,Ei=Qe`
	.indicator-warning {
		color: var(--vscode-problemsWarningIcon-foreground);
	}
	.indicator-danger {
		color: var(--vscode-problemsErrorIcon-foreground);
	}
`;function Ti(e,t=new Date){const o=Math.floor((t.getTime()-e.getTime())/1e3);let n="ok";return Math.floor(o/31536e3)>=1||Math.floor(o/2592e3)>=1||Math.floor(o/604800)>=1?n="danger":Math.floor(o/86400)>=1&&(n="warning"),{label:Vo(e,!0),tooltip:Vo(e),status:n}}var Pi=Object.defineProperty,Ri=Object.getOwnPropertyDescriptor,Oi=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?Ri(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&Pi(t,o,r),r};const Mi=36e5;let Bi=class extends lit_element_s{constructor(){super(),qe(De,ze,Ie,je)}render(){return this.snoozed?jt`
				<gk-tooltip>
					<a href="#" class="icon pin is-active" slot="trigger" @click=${this.onUnsnoozeClick}
						><code-icon icon="bell"></code-icon
					></a>
					<span>Unsnooze</span>
				</gk-tooltip>
			`:jt`
			<gk-popover placement="bottom-start">
				<a href="#" class="icon pin" slot="trigger"><code-icon icon="bell-slash"></code-icon></a>
				<gk-menu class="pin-menu" @select=${this.onSelectDuration}>
					<gk-menu-item data-value="unlimited">Snooze</gk-menu-item>
					<gk-menu-item data-value="1hr">Snooze for 1 hour</gk-menu-item>
					<gk-menu-item data-value="4hr">Snooze for 4 hours</gk-menu-item>
					<gk-menu-item data-value="tomorrow-9am">Snooze until tomorrow at 9:00 AM</gk-menu-item>
				</gk-menu>
			</gk-popover>
		`}onSnoozeActionCore(e){this.dispatchEvent(new CustomEvent("gl-snooze-action",{detail:{expiresAt:e,snooze:this.snoozed}}))}onUnsnoozeClick(e){e.preventDefault(),this.onSnoozeActionCore()}onSelectDuration(e){e.preventDefault();const t=e.detail.target.dataset.value;if(!t)return;if("unlimited"===t)return void this.onSnoozeActionCore();const o=new Date;let n=o.getTime();switch(t){case"1hr":n+=Mi;break;case"4hr":n+=4*Mi;break;case"tomorrow-9am":o.setDate(o.getDate()+1),o.setHours(9,0,0,0),n=o.getTime()}this.onSnoozeActionCore(new Date(n).toISOString())}};Bi.styles=[xo,Ci],Oi([no({reflect:!0})],Bi.prototype,"snoozed",2),Bi=Oi([eo("gl-snooze")],Bi);var Ni=Object.defineProperty,Di=Object.getOwnPropertyDescriptor,Li=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?Di(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&Ni(t,o,r),r};let zi=class extends lit_element_s{constructor(){super(),this.isCurrentBranch=!1,this.isCurrentWorktree=!1,this.hasWorktree=!1,this.hasLocalBranch=!1,qe(Fe,Me,Oe,Ee,Ce,Ue,Ae,je)}get lastUpdatedDate(){return new Date(this.pullRequest.date)}get assignees(){const e=this.pullRequest?.assignees;if(null==e)return[];const t=this.pullRequest.author;return null!=t?e.filter((e=>e.name!==t.name)):e}get indicator(){return null==this.pullRequest?"":"ChangesRequested"===this.pullRequest.reviewDecision?"changes":"Approved"===this.pullRequest.reviewDecision&&"Mergeable"===this.pullRequest.mergeableState?"ready":"Conflicting"===this.pullRequest.mergeableState?"conflicting":""}get dateStyle(){return`indicator-${Ti(this.lastUpdatedDate).status}`}get participants(){const e=[];function t(t,o){const n=e.find((e=>e.member.name===t.name));null!=n?n.roles.push(o):e.push({member:t,roles:[o]})}return null!=this.pullRequest?.author&&t(this.pullRequest.author,"author"),null!=this.pullRequest?.assignees&&this.pullRequest.assignees.forEach((e=>t(e,"assigned"))),null!=this.pullRequest?.reviewRequests&&this.pullRequest.reviewRequests.forEach((e=>t(e.reviewer,"reviewer"))),e}render(){if(this.pullRequest)return jt`
			<gk-focus-row>
				<span slot="pin">
					<gk-tooltip>
						<a
							href="#"
							class="icon pin ${this.pinned?" is-active":""}"
							slot="trigger"
							@click="${this.onPinClick}"
							><code-icon icon="pinned"></code-icon
						></a>
						<span>${this.pinned?"Unpin":"Pin"}</span>
					</gk-tooltip>
					<gl-snooze .snoozed=${this.snoozed} @gl-snooze-action=${this.onSnoozeAction}></gl-snooze>
				</span>
				<span slot="date">
					<gk-date-from class="date ${this.dateStyle}" date="${this.lastUpdatedDate}"></gk-date-from>
				</span>
				<span slot="key" class="key">
					${ko("changes"===this.indicator,(()=>jt`<gk-tooltip>
								<span class="icon" slot="trigger"
									><code-icon class="indicator-error" icon="request-changes"></code-icon
								></span>
								<span>changes requested</span>
							</gk-tooltip>`))}
					${ko("ready"===this.indicator,(()=>jt`<gk-tooltip>
								<span class="icon" slot="trigger"
									><code-icon class="indicator-info" icon="pass"></code-icon
								></span>
								<span>approved and ready to merge</span>
							</gk-tooltip>`))}
					${ko("conflicting"===this.indicator,(()=>jt`<gk-tooltip>
								<span class="icon" slot="trigger"
									><code-icon class="indicator-error" icon="bracket-error"></code-icon
								></span>
								<span>cannot be merged due to merge conflicts</span>
							</gk-tooltip>`))}
				</span>
				<gk-focus-item>
					<p>
						<span class="title"
							>${this.pullRequest.title}
							<a href="${this.pullRequest.url}">#${this.pullRequest.id}</a></span
						>
						<!-- &nbsp;
						<gk-badge>pending suggestions</gk-badge> -->
					</p>
					<p>
						<gk-badge variant="outline" class="row-type">PR</gk-badge>
						<gk-additions-deletions class="add-delete">
							<span slot="additions">${this.pullRequest.additions}</span>
							<span slot="deletions">${this.pullRequest.deletions}</span>
						</gk-additions-deletions>
						<gk-tooltip>
							<gk-tag variant="ghost" slot="trigger">
								<span slot="prefix"><code-icon icon="comment-discussion"></code-icon></span>
								${this.pullRequest.comments}
							</gk-tag>
							<span>Comments</span>
						</gk-tooltip>
					</p>
					<span slot="people">
						<gk-avatar-group>
							${ko(this.participants.length>0,(()=>jt`
									${_o(this.participants,(e=>e.member.url),(e=>jt`<gk-avatar
												src="${e.member.avatarUrl}"
												title="${`${e.member.name?`${e.member.name} `:""}(${e.roles.join(", ")})`}"
											></gk-avatar>`))}
								`))}
						</gk-avatar-group>
					</span>
					<div slot="repo" class="repo-branch">
						<gk-tag class="repo-branch__tag" full @click=${this.onOpenBranchClick}>
							<span slot="prefix"><code-icon icon="source-control"></code-icon></span>
							${!0===this.pullRequest.refs?.isCrossRepository?jt`${this.pullRequest.refs?.head.owner}:${this.pullRequest.refs?.head.branch}`:this.pullRequest.refs?.head.branch}
						</gk-tag>
						<gk-tag variant="ghost" class="repo-branch__tag" full>
							<span slot="prefix"><code-icon icon="repo"></code-icon></span>
							${this.pullRequest.refs?.base.repo}
						</gk-tag>
					</div>
					<nav slot="actions" class="actions">
						<gk-tooltip>
							<a
								slot="trigger"
								href="#"
								tabindex="${this.isCurrentWorktree||this.isCurrentBranch?-1:Vt}"
								aria-label="${this.isCurrentWorktree?"Already on this worktree":"Open Worktree..."}"
								@click="${this.onOpenWorktreeClick}"
								><code-icon icon="gl-worktrees-view"></code-icon
							></a>
							<span
								>${this.isCurrentWorktree?"Already on this worktree":"Open Worktree..."}</span
							> </gk-tooltip
						><gk-tooltip>
							<a
								slot="trigger"
								href="#"
								tabindex="${this.hasWorktree||this.isCurrentBranch?-1:Vt}"
								aria-label="${this.isCurrentBranch?"Already on this branch":this.hasWorktree?"This branch has a worktree":"Switch to Branch..."}"
								@click="${this.onSwitchBranchClick}"
								><code-icon icon="gl-switch"></code-icon
							></a>
							<span
								>${this.isCurrentBranch?"Already on this branch":this.hasWorktree?"This branch has a worktree":"Switch to Branch..."}</span
							>
						</gk-tooltip>
					</nav>
				</gk-focus-item>
			</gk-focus-row>
		`}onOpenBranchClick(e){this.dispatchEvent(new CustomEvent("open-branch",{detail:this.pullRequest}))}onOpenWorktreeClick(e){if(this.isCurrentWorktree)return e.preventDefault(),void e.stopImmediatePropagation();this.dispatchEvent(new CustomEvent("open-worktree",{detail:this.pullRequest}))}onSwitchBranchClick(e){if(this.isCurrentBranch||this.hasWorktree)return e.preventDefault(),void e.stopImmediatePropagation();this.dispatchEvent(new CustomEvent("switch-branch",{detail:this.pullRequest}))}onSnoozeAction(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("snooze-item",{detail:{item:this.pullRequest,expiresAt:e.detail.expiresAt,snooze:this.snoozed}}))}onPinClick(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("pin-item",{detail:{item:this.pullRequest,pin:this.pinned}}))}};zi.styles=[xo,So,Ei,Ai,Ci,Si,Qe``],Li([no({type:Number})],zi.prototype,"rank",2),Li([no({type:Object})],zi.prototype,"pullRequest",2),Li([no({type:Boolean})],zi.prototype,"isCurrentBranch",2),Li([no({type:Boolean})],zi.prototype,"isCurrentWorktree",2),Li([no({type:Boolean})],zi.prototype,"hasWorktree",2),Li([no({type:Boolean})],zi.prototype,"hasLocalBranch",2),Li([no()],zi.prototype,"pinned",2),Li([no()],zi.prototype,"snoozed",2),zi=Li([eo("gk-pull-request-row")],zi);var Ii=Object.defineProperty,Hi=Object.getOwnPropertyDescriptor,Ui=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?Hi(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&Ii(t,o,r),r};let Fi=class extends lit_element_s{constructor(){super(),qe(Fe,Me,Oe,Ee,Ce,Ue,je)}get lastUpdatedDate(){return new Date(this.issue.date)}get dateStyle(){return`indicator-${Ti(this.lastUpdatedDate).status}`}get assignees(){const e=this.issue?.assignees;if(null==e)return[];const t=this.issue.author;return null!=t?e.filter((e=>e.avatarUrl!==t.avatarUrl)):e}render(){if(this.issue)return jt`
			<gk-focus-row>
				<span slot="pin">
					<gk-tooltip>
						<a
							href="#"
							class="icon pin ${this.pinned?" is-active":""}"
							slot="trigger"
							@click="${this.onPinClick}"
							><code-icon icon="pinned"></code-icon
						></a>
						<span>${this.pinned?"Unpin":"Pin"}</span>
					</gk-tooltip>
					<gl-snooze .snoozed=${this.snoozed} @gl-snooze-action=${this.onSnoozeAction}></gl-snooze>
				</span>
				<span slot="date">
					<gk-date-from class="date ${this.dateStyle}" date="${this.lastUpdatedDate}"></gk-date-from>
				</span>
				<span slot="key"></span>
				<gk-focus-item>
					<p>
						<span class="title">${this.issue.title} <a href="${this.issue.url}">#${this.issue.id}</a></span>
						<!-- &nbsp;
						<gk-badge>pending suggestions</gk-badge> -->
					</p>
					<p>
						<gk-badge variant="outline" class="row-type">Issue</gk-badge>
						<gk-tooltip
							><gk-tag variant="ghost" slot="trigger">
								<span slot="prefix"><code-icon icon="comment-discussion"></code-icon></span>
								${this.issue.commentsCount} </gk-tag
							><span>Comments</span></gk-tooltip
						>
						<gk-tooltip
							><gk-tag variant="ghost" slot="trigger">
								<span slot="prefix"><code-icon icon="thumbsup"></code-icon></span>
								${this.issue.thumbsUpCount} </gk-tag
							><span>Thumbs Up</span></gk-tooltip
						>
					</p>
					<span slot="people">
						<gk-avatar-group>
							${ko(null!=this.issue.author,(()=>jt`<gk-avatar
										src="${this.issue.author.avatarUrl}"
										title="${this.issue.author.name} (author)"
									></gk-avatar>`))}
							${ko(this.assignees.length>0,(()=>jt`
									${_o(this.assignees,(e=>e.url),(e=>jt`<gk-avatar
												src="${e.avatarUrl}"
												title="${e.name?`${e.name} `:""}(assignee)"
											></gk-avatar>`))}
								`))}
						</gk-avatar-group>
					</span>
					<div slot="repo">
						<gk-tag variant="ghost" full>
							<span slot="prefix"><code-icon icon="repo"></code-icon></span>
							${this.issue.repository.repo}
						</gk-tag>
					</div>
					<nav slot="actions" class="actions">
						<gk-tooltip>
							<a slot="trigger" href="${this.issue.url}"><code-icon icon="globe"></code-icon></a>
							<span>Open issue on remote</span>
						</gk-tooltip>
					</nav>
				</gk-focus-item>
			</gk-focus-row>
		`}onSnoozeAction(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("snooze-item",{detail:{item:this.issue,expiresAt:e.detail.expiresAt,snooze:this.snoozed}}))}onPinClick(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("pin-item",{detail:{item:this.issue,pin:this.pinned}}))}};Fi.styles=[xo,So,Ei,Ai,Ci,Si,Qe``],Ui([no({type:Number})],Fi.prototype,"rank",2),Ui([no({type:Object})],Fi.prototype,"issue",2),Ui([no()],Fi.prototype,"pinned",2),Ui([no()],Fi.prototype,"snoozed",2),Fi=Ui([eo("gk-issue-row")],Fi);var ji=Object.defineProperty,qi=Object.getOwnPropertyDescriptor,Vi=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?qi(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&ji(t,o,r),r};let Wi=class extends lit_element_s{constructor(){super(),this.tabFilters=["prs","issues","snoozed"],this.tabFilterOptions=[{label:"All",value:""},{label:"PRs",value:"prs"},{label:"Issues",value:"issues"},{label:"Snoozed",value:"snoozed"}],this.mineFilters=["authored","assigned","review-requested","mentioned"],this.mineFilterOptions=[{label:"Mine",value:""},{label:"Opened by Me",value:"authored"},{label:"Assigned to Me",value:"assigned"},{label:"Needs my Review",value:"review-requested"},{label:"Mentions Me",value:"mentioned"}],qe(Pe,Te,Ne,Re,Ie,De,ze)}get subscriptionState(){return this.state?.access.subscription.current}get showSubscriptionGate(){return!1===this.state?.access.allowed}get showFeatureGate(){return!0!==this.state?.access.allowed}get showConnectionGate(){return!0===this.state?.access.allowed&&!this.state?.repos?.some((e=>e.isConnected))}get mineFilterMenuLabel(){return null!=this.selectedMineFilter&&""!==this.selectedMineFilter?this.mineFilterOptions.find((e=>e.value===this.selectedMineFilter))?.label:this.mineFilterOptions[0].label}get items(){if(this.isLoading)return[];const e=[];return this.state?.pullRequests?.forEach((({pullRequest:t,reasons:o,isCurrentBranch:n,isCurrentWorktree:i,hasWorktree:r,hasLocalBranch:a,rank:c,enriched:l})=>{const h=l?.find((e=>"pin"===e.type))?.id,d=l?.find((e=>"snooze"===e.type))?.id;e.push({isPullrequest:!0,state:{pullRequest:t,isCurrentBranch:n,isCurrentWorktree:i,hasWorktree:r,hasLocalBranch:a},rank:c??0,tags:o,isPinned:h,isSnoozed:d})})),this.state?.issues?.forEach((({issue:t,reasons:o,rank:n,enriched:i})=>{const r=i?.find((e=>"pin"===e.type))?.id,a=i?.find((e=>"snooze"===e.type))?.id;e.push({isPullrequest:!1,rank:n??0,state:{issue:t},tags:o,isPinned:r,isSnoozed:a})})),e}get tabFilterOptionsWithCounts(){const e={};return this.tabFilters.forEach((t=>e[t]=0)),this.items.forEach((({isPullrequest:t,isSnoozed:o})=>{const n=o?"snoozed":t?"prs":"issues";null!=e[n]&&e[n]++})),this.tabFilterOptions.map((t=>({...t,count:""===t.value?this.items.length:e[t.value]})))}get filteredItems(){if(0===this.items.length)return this.items;const e=null!=this.searchText&&""!==this.searchText,t=null!=this.selectedMineFilter&&""!==this.selectedMineFilter,o=null!=this.selectedTabFilter&&""!==this.selectedTabFilter;if(!e&&!t&&!o)return this.items.filter((e=>null==e.isSnoozed));const n=this.searchText?.toLowerCase();return this.items.filter((i=>{if(o){if(null!=i.isSnoozed&&"snoozed"!==this.selectedTabFilter||null==i.isSnoozed&&"snoozed"==this.selectedTabFilter||!0===i.isPullrequest&&"issues"===this.selectedTabFilter||!1===i.isPullrequest&&"prs"===this.selectedTabFilter)return!1}else if(null!=i.isSnoozed)return!1;if(t&&!i.tags.includes(this.selectedMineFilter))return!1;if(e){if(i.state.issue&&!i.state.issue.title.toLowerCase().includes(n))return!1;if(i.state.pullRequest&&!i.state.pullRequest.title.toLowerCase().includes(n))return!1}return!0}))}get sortedItems(){return this.filteredItems.sort(((e,t)=>e.isPinned===t.isPinned?0:e.isPinned?-1:1))}get isLoading(){return null==this.state?.pullRequests||null==this.state?.issues}loadingContent(){return jt`
			<div class="alert">
				<span class="alert__content"><code-icon modifier="spin" icon="loading"></code-icon> Loading</span>
			</div>
		`}focusItemsContent(){return this.isLoading?this.loadingContent():0===this.sortedItems.length?jt`
				<div class="alert">
					<span class="alert__content">None found</span>
				</div>
			`:jt`
			${_o(this.sortedItems,((e,t)=>`item-${t}-${e.isPullrequest?`pr-${e.state.pullRequest.id}`:`issue-${e.state.issue.id}`}`),(({isPullrequest:e,rank:t,state:o,isPinned:n,isSnoozed:i})=>ko(e,(()=>jt`<gk-pull-request-row
								.rank=${t}
								.pullRequest=${o.pullRequest}
								.isCurrentBranch=${o.isCurrentBranch}
								.isCurrentWorktree=${o.isCurrentWorktree}
								.hasWorktree=${o.hasWorktree}
								.hasLocalBranch=${o.hasLocalBranch}
								.pinned=${n}
								.snoozed=${i}
								.enrichedId=${o.enrichedId}
							></gk-pull-request-row>`),(()=>jt`<gk-issue-row
								.rank=${t}
								.issue=${o.issue}
								.pinned=${n}
								.snoozed=${i}
								.enrichedId=${o.enrichedId}
							></gk-issue-row>`))))}
		`}render(){return null==this.state?this.loadingContent():jt`
			<div class="app">
				<div class="app__toolbar">
					<span class="preview">Preview</span>
					<gk-feature-gate-badge
						.subscription=${this.subscriptionState}
						id="subscription-gate-badge"
					></gk-feature-gate-badge>
					<gk-button
						class="feedback"
						appearance="toolbar"
						href="https://github.com/gitkraken/vscode-gitlens/discussions/2535"
						title="Focus Feedback"
						aria-label="Focus Feedback"
						><code-icon icon="feedback"></code-icon
					></gk-button>
				</div>

				<div class="app__content">
					<gk-feature-gate
						.state=${this.subscriptionState?.state}
						.visible=${this.showFeatureGate}
						id="subscription-gate"
						class="scrollable"
						><p slot="feature">
							Brings all of your GitHub pull requests and issues into a unified actionable view to help to
							you more easily juggle work in progress, pending work, reviews, and more. Quickly see if
							anything requires your attention while keeping you focused.
						</p></gk-feature-gate
					>
					<gk-feature-gate .visible=${this.showConnectionGate} id="connection-gate" class="scrollable">
						<h3>No GitHub remotes are connected</h3>
						<p>
							This enables access to Pull Requests and Issues as well as provide additional information
							inside hovers and the Commit Details view, such as auto-linked issues and pull requests and
							avatars.
						</p>
						<gl-button appearance="alert" href="command:gitlens.connectRemoteProvider"
							>Connect to GitHub</gl-button
						>
					</gk-feature-gate>

					<div class="app__focus">
						<header class="app__header">
							<div class="app__header-group">
								<nav class="tab-filter" id="filter-focus-items">
									${ao(this.tabFilterOptionsWithCounts,(({label:e,value:t,count:o},n)=>jt`
											<button
												class="tab-filter__tab ${(this.selectedTabFilter?t===this.selectedTabFilter:0===n)?"is-active":""}"
												type="button"
												data-tab="${t}"
												@click=${()=>this.selectedTabFilter=t}
											>
												${e} <gk-badge variant="filled">${o}</gk-badge>
											</button>
										`))}
								</nav>
								<gk-popover>
									<gk-button slot="trigger"
										><code-icon icon="list-filter"></code-icon> ${this.mineFilterMenuLabel}
										<code-icon icon="chevron-down"></code-icon
									></gk-button>
									<gk-menu class="mine-menu" @select=${this.onSelectMineFilter}>
										${ao(this.mineFilterOptions,(({label:e,value:t},o)=>jt`
												<gk-menu-item
													data-value="${t}"
													?disabled=${this.selectedMineFilter?t===this.selectedMineFilter:0===o}
													>${e}</gk-menu-item
												>
											`))}
									</gk-menu>
								</gk-popover>
							</div>
							<div class="app__header-group">
								<gk-input
									class="app__search"
									label="Search field"
									label-visibility="sr-only"
									placeholder="Search"
									@input=${b(this.onSearchInput.bind(this),200)}
								>
									<code-icon slot="prefix" icon="search"></code-icon>
								</gk-input>
							</div>
						</header>
						<main class="app__main">
							<gk-focus-container id="list-focus-items">
								<span slot="pin">
									<code-icon icon="pinned"></code-icon>
								</span>
								<span slot="key"><code-icon icon="circle-large-outline"></code-icon></span>
								<span slot="date"><code-icon icon="gl-clock"></code-icon></span>
								<span slot="repo">Repo / Branch</span>
								${this.focusItemsContent()}
							</gk-focus-container>
						</main>
					</div>
				</div>
			</div>
		`}onSearchInput(e){const t=e.target.value;""===t||t.length<3?this.searchText=void 0:this.searchText=t}onSelectMineFilter(e){const t=e.detail?.target;if(null!=t?.dataset?.value){this.selectedMineFilter=t.dataset.value;const e=t.closest("gk-popover");e?.hidePopover()}}createRenderRoot(){return this}};Wi.styles=[xo],Vi([ro("#subscription-gate",!0)],Wi.prototype,"subscriptionEl",2),Vi([ro("#connection-gate",!0)],Wi.prototype,"connectionEl",2),Vi([ro("#subscription-gate-badge",!0)],Wi.prototype,"subScriptionBadgeEl",2),Vi([io()],Wi.prototype,"selectedTabFilter",2),Vi([io()],Wi.prototype,"selectedMineFilter",2),Vi([io()],Wi.prototype,"searchText",2),Vi([no({type:Object})],Wi.prototype,"state",2),Wi=Vi([eo("gl-focus-app")],Wi);class FocusApp extends App{constructor(){super("FocusApp")}onInitialize(){this.attachState()}onBind(){const e=super.onBind?.()??[];return e.push(H.on("gk-pull-request-row","open-worktree",((e,t)=>this.onOpenWorktree(e,t))),H.on("gk-pull-request-row","open-branch",((e,t)=>this.onOpenBranch(e,t))),H.on("gk-pull-request-row","switch-branch",((e,t)=>this.onSwitchBranch(e,t))),H.on("gk-pull-request-row","snooze-item",((e,t)=>this.onSnoozeItem(e,!1))),H.on("gk-pull-request-row","pin-item",((e,t)=>this.onPinItem(e,!1))),H.on("gk-issue-row","snooze-item",((e,t)=>this.onSnoozeItem(e,!0))),H.on("gk-issue-row","pin-item",((e,t)=>this.onPinItem(e,!0)))),e}get component(){return null==this._component&&(this._component=document.getElementById("app")),this._component}attachState(){this.component.state=this.state}onOpenBranch(e,t){null!=e.detail?.refs?.head&&this.sendCommand(a,{pullRequest:e.detail})}onSwitchBranch(e,t){null!=e.detail?.refs?.head&&this.sendCommand(c,{pullRequest:e.detail})}onOpenWorktree(e,t){null!=e.detail?.refs?.head&&this.sendCommand(r,{pullRequest:e.detail})}onSnoozeItem(e,t){t?this.sendCommand(d,{issue:e.detail.item,expiresAt:e.detail.expiresAt,snooze:e.detail.snooze}):this.sendCommand(l,{pullRequest:e.detail.item,expiresAt:e.detail.expiresAt,snooze:e.detail.snooze})}onPinItem(e,t){t?this.sendCommand(u,{issue:e.detail.item,pin:e.detail.pin}):this.sendCommand(h,{pullRequest:e.detail.item,pin:e.detail.pin})}onMessageReceived(e){if(e.method===p.method)o(p,e,(e=>{this.state=e.state,this.setState(this.state),this.attachState()}));else super.onMessageReceived?.(e)}}new FocusApp;var Gi=t.S;export{Gi as FocusApp};
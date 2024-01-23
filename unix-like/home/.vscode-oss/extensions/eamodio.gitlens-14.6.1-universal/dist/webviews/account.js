var e={d:(t,o)=>{for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};void 0!==e&&Object.defineProperty(e,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}});var t={};e.d(t,{d:()=>AccountApp});var o=(e=>(e[e.VerificationRequired=-1]="VerificationRequired",e[e.Free=0]="Free",e[e.FreeInPreviewTrial=1]="FreeInPreviewTrial",e[e.FreePreviewTrialExpired=2]="FreePreviewTrialExpired",e[e.FreePlusInTrial=3]="FreePlusInTrial",e[e.FreePlusTrialExpired=4]="FreePlusTrialExpired",e[e.Paid=5]="Paid",e))(o||{});function r(e,t){return i(e.plan.effective.expiresOn,t)}function i(e,t){return null!=e?function(e,t,o){const r=("number"==typeof t?t:t.getTime())-("number"==typeof e?e:e.getTime());switch(o){case"days":return Math.floor(r/864e5);case"hours":return Math.floor(r/36e5);case"minutes":return Math.floor(r/6e4);case"seconds":return Math.floor(r/1e3);default:return r}}(Date.now(),new Date(e),t):void 0}class IpcMessageType{constructor(e,t=!1,o=!1){this.method=e,this.reset=t,this.pack=o}}class IpcCommandType extends IpcMessageType{}class IpcNotificationType extends IpcMessageType{}function s(e,t,o){e.method===t.method&&o(t.params,e)}const c=new IpcCommandType("webview/ready"),a=new IpcCommandType("webview/focus"),l=new IpcCommandType("command/execute");new IpcCommandType("configuration/preview"),new IpcCommandType("configuration/update"),new IpcNotificationType("configuration/didChange"),new IpcNotificationType("configuration/didPreview"),new IpcNotificationType("webview/didOpenAnchor");const h=new IpcNotificationType("subscription/didChange");function f(e){const t=.001*performance.now();let o=Math.floor(t),r=Math.floor(t%1*1e9);return void 0!==e&&(o-=e[0],r-=e[1],r<0&&(o--,r+=1e9)),[o,r]}function d(e,t,o){let r,i,s,c,a;function l(e){const o=e-(i??0);return null==i||o>=t||o<0}function h(){const e=Date.now();if(l(e))f();else{a=setTimeout(h,t-(e-(i??0)))}}function f(){return a=void 0,r?function(){const t=r,o=s;return r=s=void 0,c=e.apply(o,t),c}():(r=s=void 0,c)}function d(...e){const f=Date.now(),d=l(f);return r=null!=o&&r?o(r,e):e,s=this,i=f,d&&null==a?(a=setTimeout(h,t),c):(null==a&&(a=setTimeout(h,t)),c)}return d.cancel=function(){null!=a&&clearTimeout(a),r=i=s=a=void 0},d.flush=function(){return null!=a?f():c},d.pending=function(){return null!=a},d}const u=",",p="=",g="{",m="(",v=")",y=/\(([\s\S]*)\)/,_=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,w=/\s?=.*$/;const $=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,o=!1){this.provider=e,this._isDebugging=o,this.logLevel=t}enabled(e){return this.level>=A(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=A(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){if(this.level<4&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!0,t)}`)}error(e,t,...o){if(this.level<1&&!this.isDebugging)return;let r;if(r=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??""}`,null==r){const t=e instanceof Error?e.stack:void 0;if(t){const e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(r=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${r??""}${this.toLoggableParams(!1,o)}${null!=e?`\n${String(e)}`:""}`)}log(e,...t){if(this.level<3&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}warn(e,...t){if(this.level<2&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map((e=>this.toLoggable(e,t))).join(", ")}]`;const o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,t)}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";const o=t.map((e=>this.toLoggable(e))).join(", ");return 0!==o.length?` — ${o}`:""}};function A(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}function x(e){let t;if("function"==typeof e){if(null==e.prototype?.constructor)return e.name;t=e.prototype.constructor.name??""}else t=e.constructor?.name??"";const o=t.indexOf("_");return-1===o?t:t.substr(o+1)}const S={enabled:e=>$.enabled(e)||$.isDebugging,log:(e,t,o,...r)=>{switch(e){case"error":$.error("",t,o,...r);break;case"warn":$.warn(t,o,...r);break;case"info":$.log(t,o,...r);break;default:$.debug(t,o,...r)}}},C=500,P=2**30,E=new Map;let T=0;function D(e){E.delete(e)}function z(e,t){if(null!=t)return{scopeId:t.scopeId,prefix:`${t.prefix}${e}`};const o=B();return{scopeId:o,prefix:`[${String(o).padStart(5)}] ${e}`}}function B(){return T===P&&(T=0),++T}var O=(e=>(e[e.Hash=35]="Hash",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Backslash=92]="Backslash",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.Z=90]="Z",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.z=122]="z",e))(O||{});const{fromCharCode:U}=String;new TextEncoder;function N(e){const[t,o]=f(e);return 1e3*t+Math.floor(o/1e6)}function F(e,t,o){if(null==o)return`${t} ${e}${1===t?"":"s"}`;const r=1===t?e:o.plural??`${e}s`;return o.only?r:`${0===t?o.zero??t:o.format?.(t)??t}${o.infix??" "}${r}`}const G=Symbol("logInstanceNameFn");Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");class Stopwatch{constructor(e,t,...o){let r;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:z(e??""),r="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??S,this._time=f(),null!=r){if(!this.logProvider.enabled(this.logLevel))return;o.length?this.logProvider.log(this.logLevel,this.logScope,`${r.message??""}${r.suffix??""}`,...o):this.logProvider.log(this.logLevel,this.logScope,`${r.message??""}${r.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){const[e,t]=f(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=f(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);const[o,r]=f(this._time),i=1e3*o+Math.floor(r/1e6),s=e?.message??"";this.logProvider.log(i>250?"warn":this.logLevel,this.logScope,`${s?`${s} `:""}[${i}ms]${e?.suffix??""}`)}}var q,j;function W(e,t){const o=e+t,r=t<0?o<0?0:o:o>255?255:o;return Math.round(r)}function K(e,t){return Q(e,-t)}function Q(e,t){const o=function(e){const t=ie(e);return null==t?null:[t.rgba.r,t.rgba.g,t.rgba.b,t.rgba.a]}(e);if(null==o)return e;const[r,i,s,c]=o,a=255*t/100;return`rgba(${W(r,a)}, ${W(i,a)}, ${W(s,a)}, ${c})`}function Y(e,t){const o=ee.from(e);return null==o?e:o.transparent(t/100).toString()}(j=q||(q={})).on=function(e,t,o,r){let i=!1;if("string"==typeof e){const s=function(t){const r=t?.target?.closest(e);null!=r&&o(t,r)};return document.addEventListener(t,s,r??!0),{dispose:()=>{i||(i=!0,document.removeEventListener(t,s,r??!0))}}}const s=function(e){o(e,this)};return e.addEventListener(t,s,r??!1),{dispose:()=>{i||(i=!0,e.removeEventListener(t,s,r??!1))}}},j.insertTemplate=function(e,t,o){const r=document.getElementById(e);if(t.replaceChildren(r?.content.cloneNode(!0)),t.className=r.className,null!=o?.visible){const e=t.querySelectorAll("[data-visible]");for(const t of e){const e=t.dataset.visible;e&&(o.visible[e]?t.style.display="initial":t.style.display="none")}}if(null!=o?.bindings){const e=t.querySelectorAll("[data-bind]");for(const t of e){const e=t.dataset.bind;if(!e)continue;const r=o.bindings[e];null!=r&&(t.textContent=String(r))}}},j.resetSlot=function(e){e.replaceChildren(),e.className=""};function Z(e,t){const o=Math.pow(10,t);return Math.round(e*o)/o}class RGBA{constructor(e,t,o,r=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,o)),this.a=Z(Math.max(Math.min(1,r),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}}class HSLA{constructor(e,t,o,r){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=Z(Math.max(Math.min(1,t),0),3),this.l=Z(Math.max(Math.min(1,o),0),3),this.a=Z(Math.max(Math.min(1,r),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,r=e.b/255,i=e.a,s=Math.max(t,o,r),c=Math.min(t,o,r);let a=0,l=0;const h=(c+s)/2,f=s-c;if(f>0){switch(l=Math.min(h<=.5?f/(2*h):f/(2-2*h),1),s){case t:a=(o-r)/f+(o<r?6:0);break;case o:a=(r-t)/f+2;break;case r:a=(t-o)/f+4}a*=60,a=Math.round(a)}return new HSLA(a,l,h,i)}static _hue2rgb(e,t,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+6*(t-e)*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}static toRGBA(e){const t=e.h/360,{s:o,l:r,a:i}=e;let s,c,a;if(0===o)s=c=a=r;else{const e=r<.5?r*(1+o):r+o-r*o,i=2*r-e;s=HSLA._hue2rgb(i,e,t+1/3),c=HSLA._hue2rgb(i,e,t),a=HSLA._hue2rgb(i,e,t-1/3)}return new RGBA(Math.round(255*s),Math.round(255*c),Math.round(255*a),i)}}class HSVA{constructor(e,t,o,r){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=Z(Math.max(Math.min(1,t),0),3),this.v=Z(Math.max(Math.min(1,o),0),3),this.a=Z(Math.max(Math.min(1,r),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,r=e.b/255,i=Math.max(t,o,r),s=i-Math.min(t,o,r),c=0===i?0:s/i;let a;return a=0===s?0:i===t?((o-r)/s%6+6)%6:i===o?(r-t)/s+2:(t-o)/s+4,new HSVA(Math.round(60*a),c,i,e.a)}static toRGBA(e){const{h:t,s:o,v:r,a:i}=e,s=r*o,c=s*(1-Math.abs(t/60%2-1)),a=r-s;let[l,h,f]=[0,0,0];return t<60?(l=s,h=c):t<120?(l=c,h=s):t<180?(h=s,f=c):t<240?(h=c,f=s):t<300?(l=c,f=s):t<=360&&(l=s,f=c),l=Math.round(255*(l+a)),h=Math.round(255*(h+a)),f=Math.round(255*(f+a)),new RGBA(l,h,f,i)}}function J(e,t){return t.getPropertyValue(e).trim()}const X=class _Color{static from(e){return e instanceof _Color?e:ie(e)||_Color.red}static fromCssVariable(e,t){return ie(J(e,t))||_Color.red}static fromHex(e){return se(e)||_Color.red}static equals(e,t){return!e&&!t||!(!e||!t)&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(!e)throw new Error("Color needs a value");if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else{if(!(e instanceof HSVA))throw new Error("Invalid color ctor argument");this._hsva=e,this.rgba=HSVA.toRGBA(e)}}equals(e){return null!=e&&(Boolean(e)&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva))}getRelativeLuminance(){return Z(.2126*_Color._relativeLuminanceForComponent(this.rgba.r)+.7152*_Color._relativeLuminanceForComponent(this.rgba.g)+.0722*_Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new ee(new RGBA(0,0,0,e.rgba.a));if(1===t)return new ee(new RGBA(255,255,255,e.rgba.a));const o=e.getRelativeLuminance();let r=20;const i=(e,o)=>{const s=e.mix(o,.5),c=s.getRelativeLuminance();return Math.abs(t-c)<1e-7||!r--?s:c>t?i(e,s):i(s,o)},s=(o>t?i(ee.black,e):i(e,ee.white)).rgba;return new ee(new RGBA(s.r,s.g,s.b,e.rgba.a))}(this,e)}getContrastRatio(e){const t=this.getRelativeLuminance(),o=e.getRelativeLuminance();return t>o?(t+.05)/(o+.05):(o+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){const{r:t,g:o,b:r,a:i}=this.rgba;return new _Color(new RGBA(t,o,r,i*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new _Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){const t=e.rgba,o=this.rgba.a,r=t.a,i=o+r*(1-o);if(i<1e-6)return _Color.transparent;const s=this.rgba.r*o/i+t.r*r*(1-o)/i,c=this.rgba.g*o/i+t.g*r*(1-o)/i,a=this.rgba.b*o/i+t.b*r*(1-o)/i;return new _Color(new RGBA(s,c,a,i))}mix(e,t){return function(e,t,o){const r=e.rgba,i=t.rgba;return new ee(new RGBA(r.r+o*(i.r-r.r),r.g+o*(i.g-r.g),r.b+o*(i.b-r.b),r.a+o*(i.a-r.a)))}(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;const{r:t,g:o,b:r,a:i}=this.rgba;return new _Color(new RGBA(e.rgba.r-i*(e.rgba.r-t),e.rgba.g-i*(e.rgba.g-o),e.rgba.b-i*(e.rgba.b-r),1))}flatten(...e){const t=e.reduceRight(((e,t)=>_Color._flatten(t,e)));return _Color._flatten(this,t)}static _flatten(e,t){const o=1-e.rgba.a;return new _Color(new RGBA(o*t.rgba.r+e.rgba.a*e.rgba.r,o*t.rgba.g+e.rgba.a*e.rgba.g,o*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){if(e.isOpaque())return ne(e);return te(e)}(this)),this._toString}static getLighterColor(e,t,o){if(e.isLighterThan(t))return e;o=o||.5;const r=e.getRelativeLuminance(),i=t.getRelativeLuminance();return o=o*(i-r)/i,e.lighten(o)}static getDarkerColor(e,t,o){if(e.isDarkerThan(t))return e;o=o||.5;const r=e.getRelativeLuminance();return o=o*(r-t.getRelativeLuminance())/r,e.darken(o)}};X.white=new X(new RGBA(255,255,255,1)),X.black=new X(new RGBA(0,0,0,1)),X.red=new X(new RGBA(255,0,0,1)),X.blue=new X(new RGBA(0,0,255,1)),X.green=new X(new RGBA(0,255,0,1)),X.cyan=new X(new RGBA(0,255,255,1)),X.lightgrey=new X(new RGBA(211,211,211,1)),X.transparent=new X(new RGBA(0,0,0,0));let ee=X;function te(e){return`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}function oe(e){const t=e.toString(16);return 2!==t.length?`0${t}`:t}function ne(e){return`#${oe(e.rgba.r)}${oe(e.rgba.g)}${oe(e.rgba.b)}`}const re=/^((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function ie(e){if(0===(e=e.trim()).length)return null;if(e.charCodeAt(0)===O.Hash)return se(e);const t=re.exec(e);if(null==t)return null;const o=t[1];let r;switch(o){case"rgb":case"hsl":r=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),1];break;case"rgba":case"hsla":r=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),parseFloat(t[5])];break;default:return null}switch(o){case"rgb":case"rgba":return new ee(new RGBA(r[0],r[1],r[2],r[3]));case"hsl":case"hsla":return new ee(new HSLA(r[0],r[1],r[2],r[3]))}return ee.red}function se(e){const t=(e=e.trim()).length;if(0===t)return null;if(e.charCodeAt(0)!==O.Hash)return null;switch(t){case 7:{const t=16*ce(e.charCodeAt(1))+ce(e.charCodeAt(2)),o=16*ce(e.charCodeAt(3))+ce(e.charCodeAt(4)),r=16*ce(e.charCodeAt(5))+ce(e.charCodeAt(6));return new ee(new RGBA(t,o,r,1))}case 9:{const t=16*ce(e.charCodeAt(1))+ce(e.charCodeAt(2)),o=16*ce(e.charCodeAt(3))+ce(e.charCodeAt(4)),r=16*ce(e.charCodeAt(5))+ce(e.charCodeAt(6)),i=16*ce(e.charCodeAt(7))+ce(e.charCodeAt(8));return new ee(new RGBA(t,o,r,i/255))}case 4:{const t=ce(e.charCodeAt(1)),o=ce(e.charCodeAt(2)),r=ce(e.charCodeAt(3));return new ee(new RGBA(16*t+t,16*o+o,16*r+r))}case 5:{const t=ce(e.charCodeAt(1)),o=ce(e.charCodeAt(2)),r=ce(e.charCodeAt(3)),i=ce(e.charCodeAt(4));return new ee(new RGBA(16*t+t,16*o+o,16*r+r,(16*i+i)/255))}default:return null}}function ce(e){switch(e){case O.Digit0:return 0;case O.Digit1:return 1;case O.Digit2:return 2;case O.Digit3:return 3;case O.Digit4:return 4;case O.Digit5:return 5;case O.Digit6:return 6;case O.Digit7:return 7;case O.Digit8:return 8;case O.Digit9:return 9;case O.a:case O.A:return 10;case O.b:case O.B:return 11;case O.c:case O.C:return 12;case O.d:case O.D:return 13;case O.e:case O.E:return 14;case O.f:case O.F:return 15}return 0}const ae=class _Emitter{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(e,t,o)=>{null==this.listeners&&(this.listeners=new LinkedList);const r=this.listeners.push(null==t?e:[e,t]),i={dispose:()=>{i.dispose=_Emitter._noop,this._disposed||r()}};return Array.isArray(o)&&o.push(i),i}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){const[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};ae._noop=function(){};let le=ae;const he={done:!0,value:void 0},be=class _Node{constructor(e){this.element=e,this.next=_Node.Undefined,this.prev=_Node.Undefined}};be.Undefined=new be(void 0);let fe=be;class LinkedList{constructor(){this._first=fe.Undefined,this._last=fe.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===fe.Undefined}clear(){this._first=fe.Undefined,this._last=fe.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){const o=new fe(e);if(this._first===fe.Undefined)this._first=o,this._last=o;else if(t){const e=this._last;this._last=o,o.prev=e,e.next=o}else{const e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let r=!1;return()=>{r||(r=!0,this._remove(o))}}shift(){if(this._first===fe.Undefined)return;const e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===fe.Undefined)return;const e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==fe.Undefined&&e.next!==fe.Undefined){const t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===fe.Undefined&&e.next===fe.Undefined?(this._first=fe.Undefined,this._last=fe.Undefined):e.next===fe.Undefined?(this._last=this._last.prev,this._last.next=fe.Undefined):e.prev===fe.Undefined&&(this._first=this._first.next,this._first.prev=fe.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===fe.Undefined?he:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){const e=[];for(let t=this._first;t!==fe.Undefined;t=t.next)e.push(t.element);return e}}const de=new le,ue=de.event;function pe(e){const t=document.documentElement,o=window.getComputedStyle(t),r=document.body.classList,i=r.contains("vscode-light")||r.contains("vscode-high-contrast-light"),s=r.contains("vscode-high-contrast")||r.contains("vscode-high-contrast-light"),c=t.style,a=J("--vscode-editor-background",o);let l=J("--vscode-editor-foreground",o);l||(l=J("--vscode-foreground",o));let h=J("--color-background",o);return c.setProperty("--color-background--lighten-05",Q(h,5)),c.setProperty("--color-background--darken-05",K(h,5)),c.setProperty("--color-background--lighten-075",Q(h,7.5)),c.setProperty("--color-background--darken-075",K(h,7.5)),c.setProperty("--color-background--lighten-10",Q(h,10)),c.setProperty("--color-background--darken-10",K(h,10)),c.setProperty("--color-background--lighten-15",Q(h,15)),c.setProperty("--color-background--darken-15",K(h,15)),c.setProperty("--color-background--lighten-30",Q(h,30)),c.setProperty("--color-background--darken-30",K(h,30)),c.setProperty("--color-background--lighten-50",Q(h,50)),c.setProperty("--color-background--darken-50",K(h,50)),h=J("--color-button-background",o),c.setProperty("--color-button-background--darken-30",K(h,30)),h=J("--color-highlight",o),c.setProperty("--color-highlight--75",Y(h,75)),c.setProperty("--color-highlight--50",Y(h,50)),c.setProperty("--color-highlight--25",Y(h,25)),h=J("--color-button-secondary-background",o),c.setProperty("--color-button-secondary-background--darken-30",K(h,30)),h=J("--color-foreground",o),c.setProperty("--color-foreground--85",Y(h,85)),c.setProperty("--color-foreground--75",Y(h,75)),c.setProperty("--color-foreground--65",Y(h,65)),c.setProperty("--color-foreground--50",Y(h,50)),h=J("--color-link-foreground",o),c.setProperty("--color-link-foreground--darken-20",K(h,20)),c.setProperty("--color-link-foreground--lighten-20",Q(h,20)),h=J("--color-alert-infoBackground",o),c.setProperty("--color-alert-infoHoverBackground",i?K(h,5):Q(h,5)),h=J("--color-alert-warningBackground",o),c.setProperty("--color-alert-warningHoverBackground",i?K(h,5):Q(h,5)),h=J("--color-alert-errorBackground",o),c.setProperty("--color-alert-errorHoverBackground",i?K(h,5):Q(h,5)),h=i?K(a,5):Q(a,5),c.setProperty("--color-alert-neutralBackground",h),c.setProperty("--color-alert-neutralHoverBackground",i?K(h,5):Q(h,5)),{colors:{background:a,foreground:l},computedStyle:o,isLightTheme:i,isHighContrastTheme:s,isInitializing:null==e}}var ge=Object.defineProperty,me=Object.getOwnPropertyDescriptor;let ve=0;function ye(){return 1073741824===ve?ve=1:ve++,`webview:${ve}`}const _e=new TextDecoder;class App{constructor(e){this.appName=e;const t=[],o=pe();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(o),t.push(ue(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",$.configure({name:e,createChannel:function(e){return{name:e,appendLine:function(e){}}}},"off"),this.log(`${e}()`),this._api=acquireVsCodeApi(),null!=this.state){const e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){const e=new MutationObserver((e=>{de.fire(pe(e))}));return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame((()=>{this.log(`${e}(): initializing...`);try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(q.on(window,"message",(e=>this.onMessageReceivedCore(e)))),this.sendCommand(c,void 0),this.onInitialized?.()}finally{document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}})),t.push(q.on(window,"pagehide",(()=>{t?.forEach((e=>e.dispose())),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=void 0})))}onMessageReceivedCore(e){const t=E.get(T),o=e.data;if(o.packed&&o.params instanceof Uint8Array){const r=function(e,t,...o){return(t?.provider??S).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...o):void 0}(z(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});o.params=JSON.parse(_e.decode(o.params)),r?.stop()}this.onMessageReceived(o)}bind(){this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);const e=d((e=>{this.sendCommand(a,e)}),150);this.bindDisposables.push(q.on(document,"focusin",(t=>{const o=t.composedPath().some((e=>"INPUT"===e.tagName));!0===this._focused&&this._inputFocused===o||(this._focused=!0,this._inputFocused=o,e({focused:!0,inputFocused:o}))})),q.on(document,"focusout",(()=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))})))}log(e,...t){"string"==typeof e?$.log(e,...t):$.log(e,t.shift(),...t)}getState(){return this._api.getState()}sendCommand(e,t){const o=ye();this.log(`${this.appName}.sendCommand(${o}): name=${e.method}`),this.postMessage({id:o,method:e.method,params:t})}async sendCommandWithCompletion(e,t,o){const r=ye();this.log(`${this.appName}.sendCommandWithCompletion(${r}): name=${e.method}`);const i=new Promise(((e,t)=>{let i;const c=[q.on(window,"message",(t=>{s(o,t.data,(o=>{t.data.completionId===r&&(c.forEach((e=>e.dispose())),queueMicrotask((()=>e(o))))}))})),{dispose:function(){null!=i&&(clearTimeout(i),i=void 0)}}];i=setTimeout((()=>{i=void 0,c.forEach((e=>e.dispose())),t(new Error(`Timed out waiting for completion of ${o.method}`))}),6e4)}));return this.postMessage({id:r,method:e.method,params:t,completionId:r}),i}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}}var we;((e,t,o,r)=>{for(var i,s=r>1?void 0:r?me(t,o):t,c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r?i(t,o,s):i(s))||s);r&&s&&ge(t,o,s)})([(we={args:{0:e=>`${e.data.id}, method=${e.data.method}`}},function(e,t=!1){let o,r,i,s,c=0,a=!1,l=!1,h=!0;null!=e&&({args:o,enter:r,exit:i,prefix:s,logThreshold:c=0,scoped:a=!0,singleLine:l=!1,timed:h=!0}=e),c>0&&(l=!0,h=!0),h&&(a=!0);const d=$.isDebugging,A=t?$.debug:$.log,S=d?"debug":"info";return(e,t,P)=>{let T,z;if("function"==typeof P.value?(T=P.value,z="value"):"function"==typeof P.get&&(T=P.get,z="get"),null==T||null==z)throw new Error("Not supported");const O=!1!==o?function(e){if("function"!=typeof e)throw new Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e);t=t.replace(_,"")||t,t=t.slice(0,t.indexOf(g));let o=t.indexOf(m),r=t.indexOf(v);o=o>=0?o+1:0,r=r>0?r:t.indexOf(p),t=t.slice(o,r),t=`(${t})`;const i=y.exec(t);return null!=i?i[1].split(u).map((e=>e.trim().replace(w,""))):[]}(T):[];P[z]=function(...e){if(!d&&!$.enabled(S))return T.apply(this,e);const u=B(),p=null!=this?this.constructor?.[G]?.(this,x(this))??x(this):void 0;let g,m=p?a?`[${u.toString(16).padStart(5)}] ${p}.${t}`:`${p}.${t}`:t;null!=s&&(m=s({id:u,instance:this,instanceName:p??"",name:t,prefix:m},...e)),a&&(g={scopeId:u,prefix:m},function(e,t){E.set(e,t)}(u,g));const v=null!=r?r(...e):"";let y;if(!1===o||0===e.length)y="",l||A.call($,`${m}${v}`);else{let t;y="";let r,i,s,c=-1;for(s of e){if(r=O[++c],t=o?.[c],null!=t){if("boolean"==typeof t)continue;if(y.length>0&&(y+=", "),"string"==typeof t){y+=t;continue}i=String(t(s))}else y.length>0&&(y+=", "),i=$.toLoggable(s);y+=r?`${r}=${i}`:i}l||A.call($,y?`${m}${v}(${y})`:`${m}${v}`)}if(l||h||null!=i){const t=h?f():void 0,o=e=>{const o=void 0!==t?` [${N(t)}ms]`:"";l?$.error(e,y?`${m}${v}(${y})`:`${m}${v}`,g?.exitDetails?`failed${g.exitDetails}${o}`:`failed${o}`):$.error(e,m,g?.exitDetails?`failed${g.exitDetails}${o}`:`failed${o}`),a&&D(u)};let r;try{r=T.apply(this,e)}catch(e){throw o(e),e}const s=e=>{let o,r,s,h;if(null!=t?(o=N(t),o>C?(r=$.warn,s=` [*${o}ms] (slow)`):(r=A,s=` [${o}ms]`)):(s="",r=A),null!=i)if("function"==typeof i)try{h=i(e)}catch(e){h=`@log.exit error: ${e}`}else!0===i&&(h=`returned ${$.toLoggable(e)}`);else g?.exitFailed?(h=g.exitFailed,r=$.error):h="completed";l?(0===c||o>c)&&r.call($,y?`${m}${v}(${y}) ${h}${g?.exitDetails||""}${s}`:`${m}${v} ${h}${g?.exitDetails||""}${s}`):r.call($,y?`${m}(${y}) ${h}${g?.exitDetails||""}${s}`:`${m} ${h}${g?.exitDetails||""}${s}`),a&&D(u)};return null!=r&&null!=(_=r)&&(_ instanceof Promise||"function"==typeof _?.then)?r.then(s,o):s(r),r}var _;return T.apply(this,e)}}}(we,!0))],App.prototype,"onMessageReceivedCore",1);const $e=globalThis,Ae=$e.ShadowRoot&&(void 0===$e.ShadyCSS||$e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ke=Symbol(),xe=new WeakMap;class n{constructor(e,t,o){if(this._$cssResult$=!0,o!==ke)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ae&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=xe.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&xe.set(t,e))}return e}toString(){return this.cssText}}const Se=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,o,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[r+1]),e[0]);return new n(o,e,ke)},Ce=Ae?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,ke))(t)})(e):e,{is:Pe,defineProperty:Ee,getOwnPropertyDescriptor:Re,getOwnPropertyNames:Me,getOwnPropertySymbols:Te,getPrototypeOf:Le}=Object,De=globalThis,ze=De.trustedTypes,Be=ze?ze.emptyScript:"",Oe=De.reactiveElementPolyfillSupport,Ue=(e,t)=>e,Ie={toAttribute(e,t){switch(t){case Boolean:e=e?Be:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},He=(e,t)=>!Pe(e,t),Ne={attribute:!0,type:String,converter:Ie,reflect:!1,hasChanged:He};Symbol.metadata??=Symbol("metadata"),De.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ne){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),r=this.getPropertyDescriptor(e,o,t);void 0!==r&&Ee(this.prototype,e,r)}}static getPropertyDescriptor(e,t,o){const{get:r,set:i}=Re(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return r?.call(this)},set(t){const s=r?.call(this);i.call(this,t),this.requestUpdate(e,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ne}static _$Ei(){if(this.hasOwnProperty(Ue("elementProperties")))return;const e=Le(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ue("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ue("properties"))){const e=this.properties,t=[...Me(e),...Te(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(Ce(e))}else void 0!==e&&t.push(Ce(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$E_??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$E_?.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(Ae)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const o of t){const t=document.createElement("style"),r=$e.litNonce;void 0!==r&&t.setAttribute("nonce",r),t.textContent=o.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$E_?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t){const o=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,o);if(void 0!==r&&!0===o.reflect){const i=(void 0!==o.converter?.toAttribute?o.converter:Ie).toAttribute(t,o.type);this._$Em=e,null==i?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){const o=this.constructor,r=o._$Eh.get(e);if(void 0!==r&&this._$Em!==r){const e=o.getPropertyOptions(r),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:Ie;this._$Em=r,this[r]=i.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o,r=!1,i){if(void 0!==e){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??He)(r?i:this[e],t))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$E_?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$E_?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EO(e,this[e]))),this._$ET()}updated(e){}firstUpdated(e){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[Ue("elementProperties")]=new Map,b[Ue("finalized")]=new Map,Oe?.({ReactiveElement:b}),(De.reactiveElementVersions??=[]).push("2.0.2");const Fe=globalThis,Ge=Fe.trustedTypes,qe=Ge?Ge.createPolicy("lit-html",{createHTML:e=>e}):void 0,je="$lit$",Ve=`lit$${(Math.random()+"").slice(9)}$`,We="?"+Ve,Ke=`<${We}>`,Qe=document,Ye=()=>Qe.createComment(""),Ze=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Je=Array.isArray,Xe=e=>Je(e)||"function"==typeof e?.[Symbol.iterator],et="[ \t\n\f\r]",tt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ot=/-->/g,nt=/>/g,rt=RegExp(`>|${et}(?:([^\\s"'>=/]+)(${et}*=${et}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),it=/'/g,st=/"/g,ct=/^(?:script|style|textarea|title)$/i,at=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),lt=at(1),ht=(at(2),Symbol.for("lit-noChange")),bt=Symbol.for("lit-nothing"),ft=new WeakMap,dt=Qe.createTreeWalker(Qe,129);function ut(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==qe?qe.createHTML(t):t}const pt=(e,t)=>{const o=e.length-1,r=[];let i,s=2===t?"<svg>":"",c=tt;for(let t=0;t<o;t++){const o=e[t];let a,l,h=-1,f=0;for(;f<o.length&&(c.lastIndex=f,l=c.exec(o),null!==l);)f=c.lastIndex,c===tt?"!--"===l[1]?c=ot:void 0!==l[1]?c=nt:void 0!==l[2]?(ct.test(l[2])&&(i=RegExp("</"+l[2],"g")),c=rt):void 0!==l[3]&&(c=rt):c===rt?">"===l[0]?(c=i??tt,h=-1):void 0===l[1]?h=-2:(h=c.lastIndex-l[2].length,a=l[1],c=void 0===l[3]?rt:'"'===l[3]?st:it):c===st||c===it?c=rt:c===ot||c===nt?c=tt:(c=rt,i=void 0);const d=c===rt&&e[t+1].startsWith("/>")?" ":"";s+=c===tt?o+Ke:h>=0?(r.push(a),o.slice(0,h)+je+o.slice(h)+Ve+d):o+Ve+(-2===h?t:d)}return[ut(e,s+(e[o]||"<?>")+(2===t?"</svg>":"")),r]};class V{constructor({strings:e,_$litType$:t},o){let r;this.parts=[];let i=0,s=0;const c=e.length-1,a=this.parts,[l,h]=pt(e,t);if(this.el=V.createElement(l,o),dt.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=dt.nextNode())&&a.length<c;){if(1===r.nodeType){if(r.hasAttributes())for(const e of r.getAttributeNames())if(e.endsWith(je)){const t=h[s++],o=r.getAttribute(e).split(Ve),c=/([.?@])?(.*)/.exec(t);a.push({type:1,index:i,name:c[2],strings:o,ctor:"."===c[1]?k:"?"===c[1]?H:"@"===c[1]?I:R}),r.removeAttribute(e)}else e.startsWith(Ve)&&(a.push({type:6,index:i}),r.removeAttribute(e));if(ct.test(r.tagName)){const e=r.textContent.split(Ve),t=e.length-1;if(t>0){r.textContent=Ge?Ge.emptyScript:"";for(let o=0;o<t;o++)r.append(e[o],Ye()),dt.nextNode(),a.push({type:2,index:++i});r.append(e[t],Ye())}}}else if(8===r.nodeType)if(r.data===We)a.push({type:2,index:i});else{let e=-1;for(;-1!==(e=r.data.indexOf(Ve,e+1));)a.push({type:7,index:i}),e+=Ve.length-1}i++}}static createElement(e,t){const o=Qe.createElement("template");return o.innerHTML=e,o}}function gt(e,t,o=e,r){if(t===ht)return t;let i=void 0!==r?o._$Co?.[r]:o._$Cl;const s=Ze(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),void 0===s?i=void 0:(i=new s(e),i._$AT(e,o,r)),void 0!==r?(o._$Co??=[])[r]=i:o._$Cl=i),void 0!==i&&(t=gt(e,i._$AS(e,t.values),i,r)),t}class lit_html_S{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,r=(e?.creationScope??Qe).importNode(t,!0);dt.currentNode=r;let i=dt.nextNode(),s=0,c=0,a=o[0];for(;void 0!==a;){if(s===a.index){let t;2===a.type?t=new M(i,i.nextSibling,this,e):1===a.type?t=new a.ctor(i,a.name,a.strings,this,e):6===a.type&&(t=new L(i,this,e)),this._$AV.push(t),a=o[++c]}s!==a?.index&&(i=dt.nextNode(),s++)}return dt.currentNode=Qe,r}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,r){this.type=2,this._$AH=bt,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=gt(this,e,t),Ze(e)?e===bt||null==e||""===e?(this._$AH!==bt&&this._$AR(),this._$AH=bt):e!==this._$AH&&e!==ht&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):Xe(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==bt&&Ze(this._$AH)?this._$AA.nextSibling.data=e:this.$(Qe.createTextNode(e)),this._$AH=e}g(e){const{values:t,_$litType$:o}=e,r="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=V.createElement(ut(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===r)this._$AH.p(t);else{const e=new lit_html_S(r,this),o=e.u(this.options);e.p(t),this.$(o),this._$AH=e}}_$AC(e){let t=ft.get(e.strings);return void 0===t&&ft.set(e.strings,t=new V(e)),t}T(e){Je(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,r=0;for(const i of e)r===t.length?t.push(o=new M(this.k(Ye()),this.k(Ye()),this,this.options)):o=t[r],o._$AI(i),r++;r<t.length&&(this._$AR(o&&o._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,r,i){this.type=1,this._$AH=bt,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=bt}_$AI(e,t=this,o,r){const i=this.strings;let s=!1;if(void 0===i)e=gt(this,e,t,0),s=!Ze(e)||e!==this._$AH&&e!==ht,s&&(this._$AH=e);else{const r=e;let c,a;for(e=i[0],c=0;c<i.length-1;c++)a=gt(this,r[o+c],t,c),a===ht&&(a=this._$AH[c]),s||=!Ze(a)||a!==this._$AH[c],a===bt?e=bt:e!==bt&&(e+=(a??"")+i[c+1]),this._$AH[c]=a}s&&!r&&this.O(e)}O(e){e===bt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===bt?void 0:e}}class H extends R{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==bt)}}class I extends R{constructor(e,t,o,r,i){super(e,t,o,r,i),this.type=5}_$AI(e,t=this){if((e=gt(this,e,t,0)??bt)===ht)return;const o=this._$AH,r=e===bt&&o!==bt||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==bt&&(o===bt||r);r&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class L{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){gt(this,e)}}const mt=Fe.litHtmlPolyfillSupport;mt?.(V,M),(Fe.litHtmlVersions??=[]).push("3.1.0");class lit_element_s extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const r=o?.renderBefore??t;let i=r._$litPart$;if(void 0===i){const e=o?.renderBefore??null;r._$litPart$=i=new M(t.insertBefore(Ye(),e),e,void 0,o??{})}return i._$AI(e),i})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ht}}lit_element_s._$litElement$=!0,lit_element_s.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lit_element_s});const vt=globalThis.litElementPolyfillSupport;vt?.({LitElement:lit_element_s});(globalThis.litElementVersions??=[]).push("4.0.2");const yt=e=>(t,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},_t={attribute:!0,type:String,converter:Ie,reflect:!1,hasChanged:He},wt=(e=_t,t,o)=>{const{kind:r,metadata:i}=o;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(o.name,e),"accessor"===r){const{name:r}=o;return{set(o){const i=t.get.call(this);t.set.call(this,o),this.requestUpdate(r,i,e)},init(t){return void 0!==t&&this.C(r,void 0,e),t}}}if("setter"===r){const{name:r}=o;return function(o){const i=this[r];t.call(this,o),this.requestUpdate(r,i,e)}}throw Error("Unsupported decorator location: "+r)};function $t(e){return(t,o)=>"object"==typeof o?wt(e,t,o):((e,t,o)=>{const r=t.hasOwnProperty(o);return t.constructor.createProperty(o,r?{...e,wrapped:!0}:e),r?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}function At(e,t,o){return e?t(e):o?.(e)}Se`
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
`;const kt=Se`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,xt=Se`
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
`,St=Se`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${kt}
	}
	a:hover {
		text-decoration: underline;
	}
`;Se`
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
`;var Ct=Object.defineProperty,Pt=Object.getOwnPropertyDescriptor,Et=(e,t,o,r)=>{for(var i,s=r>1?void 0:r?Pt(t,o):t,c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r?i(t,o,s):i(s))||s);return r&&s&&Ct(t,o,s),s};let Rt=class extends lit_element_s{constructor(){super(...arguments),this.full=!1,this.disabled=!1,this.tabIndex=0}get role(){return this.href?"link":"button"}updated(e){super.updated(e),e.has("disabled")&&(this.tabIndex=this.disabled?-1:0,this.setAttribute("aria-disabled",this.disabled.toString()))}render(){const e=lt`<slot></slot>`;return null!=this.href?lt`<a href=${this.href}>${e}</a>`:e}};Rt.styles=[xt,Se`
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
				${kt}
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
		`],Et([$t({type:Boolean,reflect:!0})],Rt.prototype,"full",2),Et([$t({type:Boolean,reflect:!0})],Rt.prototype,"disabled",2),Et([$t({reflect:!0})],Rt.prototype,"density",2),Et([$t()],Rt.prototype,"href",2),Et([$t({reflect:!0})],Rt.prototype,"role",1),Et([$t()],Rt.prototype,"appearance",2),Et([$t({type:Number,reflect:!0})],Rt.prototype,"tabIndex",2),Rt=Et([yt("gl-button")],Rt);var Mt=Object.defineProperty,Tt=Object.getOwnPropertyDescriptor,Lt=(e,t,o,r)=>{for(var i,s=r>1?void 0:r?Tt(t,o):t,c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r?i(t,o,s):i(s))||s);return r&&s&&Mt(t,o,s),s};let Dt=class extends lit_element_s{constructor(){super(...arguments),this.editor=!1}render(){return lt`<div class="group"><slot></slot></div>`}};Dt.styles=[xt,Se`
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
		`],Lt([$t({type:Boolean})],Dt.prototype,"editor",2),Dt=Lt([yt("button-container")],Dt);var zt=Object.defineProperty,Bt=Object.getOwnPropertyDescriptor,Ot=(e,t,o,r)=>{for(var i,s=r>1?void 0:r?Bt(t,o):t,c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r?i(t,o,s):i(s))||s);return r&&s&&zt(t,o,s),s};let Ut=class extends lit_element_s{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=16}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};Ut.styles=Se`
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
	`,Ot([$t()],Ut.prototype,"icon",2),Ot([$t()],Ut.prototype,"modifier",2),Ot([$t({type:Number})],Ut.prototype,"size",2),Ut=Ot([yt("code-icon")],Ut);var It=Object.defineProperty,Ht=Object.getOwnPropertyDescriptor,Nt=(e,t,o,r)=>{for(var i,s=r>1?void 0:r?Ht(t,o):t,c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r?i(t,o,s):i(s))||s);return r&&s&&It(t,o,s),s};let Ft=class extends lit_element_s{constructor(){super(...arguments),this.image="",this.name="",this.organizationsCount=0,this.days=0,this.state=o.Free,this.plan="",this.trialReactivationCount=0}get daysRemaining(){return this.days<1?"<1 day":F("day",this.days)}get planName(){switch(this.state){case o.Free:case o.FreePreviewTrialExpired:case o.FreePlusTrialExpired:return"GitKraken Free";case o.FreeInPreviewTrial:case o.FreePlusInTrial:return"GitKraken Pro (Trial)";case o.VerificationRequired:return`${this.plan} (Unverified)`;default:return this.plan}}get daysLeft(){switch(this.state){case o.FreeInPreviewTrial:case o.FreePlusInTrial:return`, ${this.daysRemaining} left`;default:return""}}get hasAccount(){return null!=(e=this.state)&&0!==e&&2!==e&&1!==e;var e}get isReactivatedTrial(){return this.state===o.FreePlusInTrial&&this.trialReactivationCount>0}renderAccountInfo(){return this.hasAccount?lt`
			<div class="account">
				<div class="account__media">
					${this.image?lt`<img src=${this.image} class="account__image" />`:lt`<code-icon icon="account" size="34"></code-icon>`}
				</div>
				<div class="account__details">
					<p class="account__title">${this.name}</p>
					${At(0===this.organizationsCount,(()=>lt`<p class="account__access">${this.planName}${this.daysLeft}</p>`))}
				</div>
				<div class="account__signout">
					<gl-button appearance="toolbar" href="command:gitlens.plus.logout"
						><code-icon icon="sign-out" title="Sign Out" aria-label="Sign Out"></code-icon
					></gl-button>
				</div>
			</div>
		`:bt}renderOrganization(){return this.hasAccount&&this.organization?lt`
			<div class="account account--org">
				<div class="account__media">
					<code-icon icon="organization" size="22"></code-icon>
				</div>
				<div class="account__details">
					<p class="account__title">${this.organization}</p>
					<p class="account__access">${this.planName}${this.daysLeft}</p>
				</div>
				${At(this.organizationsCount>1,(()=>lt`<div class="account__signout">
							<span class="account__badge">+${this.organizationsCount-1}</span>
							<gl-button appearance="toolbar" href="command:gitlens.gk.switchOrganization"
								><code-icon
									icon="arrow-swap"
									title="Switch Organization"
									aria-label="Switch Organization"
								></code-icon
							></gl-button>
						</div>`))}
			</div>
		`:bt}renderAccountState(){const e=new Date("2023-12-31T07:59:00.000Z").getTime(),t=Date.now()<e;switch(this.state){case o.VerificationRequired:return lt`
					<p>You must verify your email before you can continue.</p>
					<button-container>
						<gl-button full href="command:gitlens.plus.resendVerification"
							>Resend verification email</gl-button
						>
					</button-container>
					<button-container>
						<gl-button full href="command:gitlens.plus.validate">Refresh verification status</gl-button>
					</button-container>
				`;case o.Free:case o.FreeInPreviewTrial:case o.FreePreviewTrialExpired:return lt`
					<p>
						Sign up for access to our developer productivity and collaboration services, e.g. Workspaces, or
						<a href="command:gitlens.plus.loginOrSignUp">sign in</a>.
					</p>
					<button-container>
						<gl-button full href="command:gitlens.plus.loginOrSignUp">Sign Up</gl-button>
					</button-container>
					<p>Signing up starts a free 7-day GitKraken trial.</p>
				`;case o.FreePlusTrialExpired:return lt`
					<p>
						Your GitKraken trial has ended, please upgrade to continue to use ✨ features on privately
						hosted repos.
					</p>
					${At(t,(()=>lt`<p style="text-align: center;">
								<a
									href=${"https://www.gitkraken.com/hs23?utm_source=holiday_special&utm_medium=gitlens_banner&utm_campaign=holiday_special_2023"}
									>Holiday Special: 50% off first seat of Pro — only $4/month! Includes entire
									GitKraken suite of dev tools.</a
								>
							</p>`),(()=>lt`<p style="text-align: center;">
								Special: 50% off first seat of Pro — only $4/month! Includes entire GitKraken suite of
								dev tools.
							</p>`))}
					<button-container>
						<gl-button full href="command:gitlens.plus.purchase">Upgrade to Pro</gl-button>
					</button-container>
					<p>
						You only have access to ✨ features on local and publicly hosted repos and ☁️ features based on
						your plan, e.g. Free, Pro, etc.
					</p>
				`;case o.FreePlusInTrial:return lt`
					<p>
						${this.isReactivatedTrial?lt`<a href="https://help.gitkraken.com/gitlens/gitlens-release-notes-current/"
										>See what's new</a
									>
									with
									${F("day",this.days,{infix:" more "})}
									in your GitKraken trial.`:`You have\n\t\t\t\t\t\t${this.daysRemaining} remaining in your GitKraken trial.`}
						Once your trial ends, you'll need a paid plan to continue using ✨ features.
					</p>
					${At(t,(()=>lt`<p style="text-align: center;">
								<a
									href=${"https://www.gitkraken.com/hs23?utm_source=holiday_special&utm_medium=gitlens_banner&utm_campaign=holiday_special_2023"}
									>Holiday Special: 50% off first seat of Pro — only $4/month! Includes entire
									GitKraken suite of dev tools.</a
								>
							</p>`),(()=>lt`<p style="text-align: center;">
								Special: <b>50% off first seat of Pro</b> — only $4/month! Includes entire GitKraken
								suite of dev tools.
							</p>`))}
					<button-container>
						<gl-button full href="command:gitlens.plus.purchase">Upgrade to Pro</gl-button>
					</button-container>
					<p>
						You have access to ✨ features on privately hosted repos and ☁️ features based on the Pro plan.
					</p>
					<p>
						Try our
						<a href="https://www.gitkraken.com/suite">other developer tools</a> also included in your trial.
					</p>
				`;case o.Paid:return lt`
					<button-container>
						<gl-button appearance="secondary" full href="command:gitlens.plus.manage"
							>Manage Account</gl-button
						>
					</button-container>
					<p>You have access to ✨ features on privately hosted repos and ☁️ features based on your plan.</p>
					<p>
						Try our
						<a href="https://www.gitkraken.com/suite">other developer tools</a> also included in your plan.
					</p>
				`}return bt}render(){return lt`${this.renderAccountInfo()}${this.renderOrganization()}${this.renderAccountState()}`}};Ft.styles=[xt,St,Se`
			:host {
				display: block;
				margin-bottom: 1.3rem;
			}

			button-container {
				margin-bottom: 1.3rem;
			}

			.account {
				position: relative;
				display: grid;
				gap: 0 0.8rem;
				grid-template-columns: 3.4rem auto min-content;
				grid-auto-flow: column;
				margin-bottom: 1.3rem;
			}

			.account--org {
				font-size: 0.9em;
				line-height: 1.2;
				margin-top: -1rem;
			}

			.account__media {
				grid-column: 1;
				grid-row: 1 / span 2;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			.account--org .account__media {
				color: var(--color-foreground--65);
			}

			.account__image {
				width: 100%;
				aspect-ratio: 1 / 1;
				border-radius: 50%;
			}

			.account__details {
				grid-row: 1 / span 2;
				display: flex;
				flex-direction: column;
				justify-content: center;
			}

			.account__title {
				font-size: 1.5rem;
				font-weight: 600;
				margin: 0;
			}

			.account--org .account__title {
				font-size: 1.2rem;
				font-weight: normal;
			}

			.account__access {
				position: relative;
				margin: 0;
				color: var(--color-foreground--65);
			}

			.account__signout {
				grid-row: 1 / span 2;
				display: flex;
				gap: 0.2rem;
				flex-direction: row;
				align-items: center;
				justify-content: center;
			}

			.account__badge {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				width: 2.4rem;
				height: 2.4rem;
				line-height: 2.4rem;
				font-size: 1rem;
				font-weight: 600;
				color: var(--color-foreground--65);
				background-color: var(--vscode-toolbar-hoverBackground);
				border-radius: 50%;
			}

			.repo-access {
				font-size: 1.1em;
				margin-right: 0.2rem;
			}
			.repo-access:not(.is-pro) {
				filter: grayscale(1) brightness(0.7);
			}
		`],Nt([$t()],Ft.prototype,"image",2),Nt([$t()],Ft.prototype,"name",2),Nt([$t()],Ft.prototype,"organization",2),Nt([$t({type:Number})],Ft.prototype,"organizationsCount",2),Nt([$t({type:Number})],Ft.prototype,"days",2),Nt([$t({type:Number})],Ft.prototype,"state",2),Nt([$t()],Ft.prototype,"plan",2),Nt([$t({type:Number})],Ft.prototype,"trialReactivationCount",2),Ft=Nt([yt("account-content")],Ft);class AccountApp extends App{constructor(){super("AccountApp")}onInitialize(){this.state=this.getState()??this.state,this.updateState()}onBind(){const e=super.onBind?.()??[];return e.push(q.on("[data-action]","click",((e,t)=>this.onDataActionClicked(e,t)))),e}onMessageReceived(e){if(e.method===h.method)s(h,e,(e=>{this.state.subscription=e.subscription,this.state.avatar=e.avatar,this.state.organizationsCount=e.organizationsCount,this.state.timestamp=Date.now(),this.setState(this.state),this.updateState()}));else super.onMessageReceived?.(e)}onDataActionClicked(e,t){const o=t.dataset.action;this.onActionClickedCore(o)}onActionClickedCore(e){e?.startsWith("command:")&&this.sendCommand(l,{command:e.slice(8)})}getDaysRemaining(){return this.state.subscription.state!==o.FreePlusInTrial?0:r(this.state.subscription,"days")??0}updateState(){const e=this.getDaysRemaining(),{subscription:t,avatar:o,organizationsCount:r}=this.state,i=document.getElementById("account-content");i.image=o??"",i.name=t.account?.name??"",i.state=t.state,i.organization=t.activeOrganization?.name??"",i.organizationsCount=r??0,i.plan=t.plan.effective.name,i.days=e,i.trialReactivationCount=t.plan.effective.trialReactivationCount}}new AccountApp;var Gt=t.d;export{Gt as AccountApp};
var e={d:(t,o)=>{for(var s in o)e.o(o,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:o[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};void 0!==e&&Object.defineProperty(e,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}});var t={};e.d(t,{$:()=>WelcomeApp});class IpcMessageType{constructor(e,t=!1,o=!1){this.method=e,this.reset=t,this.pack=o}}class IpcCommandType extends IpcMessageType{}class IpcNotificationType extends IpcMessageType{}function o(e,t,o){e.method===t.method&&o(t.params,e)}const s=new IpcCommandType("webview/ready"),r=new IpcCommandType("webview/focus");new IpcCommandType("command/execute"),new IpcCommandType("configuration/preview"),new IpcCommandType("configuration/update"),new IpcNotificationType("configuration/didChange"),new IpcNotificationType("configuration/didPreview"),new IpcNotificationType("webview/didOpenAnchor");const i=new IpcCommandType("welcome/configuration/update"),a=new IpcNotificationType("welcome/didChange",!0);function c(e){const t=.001*performance.now();let o=Math.floor(t),s=Math.floor(t%1*1e9);return void 0!==e&&(o-=e[0],s-=e[1],s<0&&(o--,s+=1e9)),[o,s]}function l(e,t,o){let s,r,i,a,c;function l(e){const o=e-(r??0);return null==r||o>=t||o<0}function d(){const e=Date.now();if(l(e))h();else{c=setTimeout(d,t-(e-(r??0)))}}function h(){return c=void 0,s?function(){const t=s,o=i;return s=i=void 0,a=e.apply(o,t),a}():(s=i=void 0,a)}function p(...e){const h=Date.now(),p=l(h);return s=null!=o&&s?o(s,e):e,i=this,r=h,p&&null==c?(c=setTimeout(d,t),a):(null==c&&(c=setTimeout(d,t)),a)}return p.cancel=function(){null!=c&&clearTimeout(c),s=r=i=c=void 0},p.flush=function(){return null!=c?h():a},p.pending=function(){return null!=c},p}const d=",",h="=",p="{",f="(",u=")",g=/\(([\s\S]*)\)/,y=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,x=/\s?=.*$/;const m=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,o=!1){this.provider=e,this._isDebugging=o,this.logLevel=t}enabled(e){return this.level>=v(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=v(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){if(this.level<4&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!0,t)}`)}error(e,t,...o){if(this.level<1&&!this.isDebugging)return;let s;if(s=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??""}`,null==s){const t=e instanceof Error?e.stack:void 0;if(t){const e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(s=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${s??""}${this.toLoggableParams(!1,o)}${null!=e?`\n${String(e)}`:""}`)}log(e,...t){if(this.level<3&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}warn(e,...t){if(this.level<2&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map((e=>this.toLoggable(e,t))).join(", ")}]`;const o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,t)}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";const o=t.map((e=>this.toLoggable(e))).join(", ");return 0!==o.length?` — ${o}`:""}};function v(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}function C(e){let t;if("function"==typeof e){if(null==e.prototype?.constructor)return e.name;t=e.prototype.constructor.name??""}else t=e.constructor?.name??"";const o=t.indexOf("_");return-1===o?t:t.substr(o+1)}const w={enabled:e=>m.enabled(e)||m.isDebugging,log:(e,t,o,...s)=>{switch(e){case"error":m.error("",t,o,...s);break;case"warn":m.warn(t,o,...s);break;case"info":m.log(t,o,...s);break;default:m.debug(t,o,...s)}}},_=500,$=2**30,A=new Map;let S=0;function P(e){A.delete(e)}function E(e,t){if(null!=t)return{scopeId:t.scopeId,prefix:`${t.prefix}${e}`};const o=B();return{scopeId:o,prefix:`[${String(o).padStart(5)}] ${e}`}}function B(){return S===$&&(S=0),++S}var D=(e=>(e[e.Hash=35]="Hash",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Backslash=92]="Backslash",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.Z=90]="Z",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.z=122]="z",e))(D||{});const{fromCharCode:F}=String;new TextEncoder;function O(e){const[t,o]=c(e);return 1e3*t+Math.floor(o/1e6)}const Z=Symbol("logInstanceNameFn");Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");class Stopwatch{constructor(e,t,...o){let s;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:E(e??""),s="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??w,this._time=c(),null!=s){if(!this.logProvider.enabled(this.logLevel))return;o.length?this.logProvider.log(this.logLevel,this.logScope,`${s.message??""}${s.suffix??""}`,...o):this.logProvider.log(this.logLevel,this.logScope,`${s.message??""}${s.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){const[e,t]=c(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=c(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);const[o,s]=c(this._time),r=1e3*o+Math.floor(s/1e6),i=e?.message??"";this.logProvider.log(r>250?"warn":this.logLevel,this.logScope,`${i?`${i} `:""}[${r}ms]${e?.suffix??""}`)}}var U,T;function z(e,t){const o=e+t,s=t<0?o<0?0:o:o>255?255:o;return Math.round(s)}function G(e,t){return N(e,-t)}function N(e,t){const o=function(e){const t=te(e);return null==t?null:[t.rgba.r,t.rgba.g,t.rgba.b,t.rgba.a]}(e);if(null==o)return e;const[s,r,i,a]=o,c=255*t/100;return`rgba(${z(s,c)}, ${z(r,c)}, ${z(i,c)}, ${a})`}function j(e,t){const o=Q.from(e);return null==o?e:o.transparent(t/100).toString()}(T=U||(U={})).on=function(e,t,o,s){let r=!1;if("string"==typeof e){const i=function(t){const s=t?.target?.closest(e);null!=s&&o(t,s)};return document.addEventListener(t,i,s??!0),{dispose:()=>{r||(r=!0,document.removeEventListener(t,i,s??!0))}}}const i=function(e){o(e,this)};return e.addEventListener(t,i,s??!1),{dispose:()=>{r||(r=!0,e.removeEventListener(t,i,s??!1))}}},T.insertTemplate=function(e,t,o){const s=document.getElementById(e);if(t.replaceChildren(s?.content.cloneNode(!0)),t.className=s.className,null!=o?.visible){const e=t.querySelectorAll("[data-visible]");for(const t of e){const e=t.dataset.visible;e&&(o.visible[e]?t.style.display="initial":t.style.display="none")}}if(null!=o?.bindings){const e=t.querySelectorAll("[data-bind]");for(const t of e){const e=t.dataset.bind;if(!e)continue;const s=o.bindings[e];null!=s&&(t.textContent=String(s))}}},T.resetSlot=function(e){e.replaceChildren(),e.className=""};function q(e,t){const o=Math.pow(10,t);return Math.round(e*o)/o}class RGBA{constructor(e,t,o,s=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,o)),this.a=q(Math.max(Math.min(1,s),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}}class HSLA{constructor(e,t,o,s){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=q(Math.max(Math.min(1,t),0),3),this.l=q(Math.max(Math.min(1,o),0),3),this.a=q(Math.max(Math.min(1,s),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,s=e.b/255,r=e.a,i=Math.max(t,o,s),a=Math.min(t,o,s);let c=0,l=0;const d=(a+i)/2,h=i-a;if(h>0){switch(l=Math.min(d<=.5?h/(2*d):h/(2-2*d),1),i){case t:c=(o-s)/h+(o<s?6:0);break;case o:c=(s-t)/h+2;break;case s:c=(t-o)/h+4}c*=60,c=Math.round(c)}return new HSLA(c,l,d,r)}static _hue2rgb(e,t,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+6*(t-e)*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}static toRGBA(e){const t=e.h/360,{s:o,l:s,a:r}=e;let i,a,c;if(0===o)i=a=c=s;else{const e=s<.5?s*(1+o):s+o-s*o,r=2*s-e;i=HSLA._hue2rgb(r,e,t+1/3),a=HSLA._hue2rgb(r,e,t),c=HSLA._hue2rgb(r,e,t-1/3)}return new RGBA(Math.round(255*i),Math.round(255*a),Math.round(255*c),r)}}class HSVA{constructor(e,t,o,s){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=q(Math.max(Math.min(1,t),0),3),this.v=q(Math.max(Math.min(1,o),0),3),this.a=q(Math.max(Math.min(1,s),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,s=e.b/255,r=Math.max(t,o,s),i=r-Math.min(t,o,s),a=0===r?0:i/r;let c;return c=0===i?0:r===t?((o-s)/i%6+6)%6:r===o?(s-t)/i+2:(t-o)/i+4,new HSVA(Math.round(60*c),a,r,e.a)}static toRGBA(e){const{h:t,s:o,v:s,a:r}=e,i=s*o,a=i*(1-Math.abs(t/60%2-1)),c=s-i;let[l,d,h]=[0,0,0];return t<60?(l=i,d=a):t<120?(l=a,d=i):t<180?(d=i,h=a):t<240?(d=a,h=i):t<300?(l=a,h=i):t<=360&&(l=i,h=a),l=Math.round(255*(l+c)),d=Math.round(255*(d+c)),h=Math.round(255*(h+c)),new RGBA(l,d,h,r)}}function W(e,t){return t.getPropertyValue(e).trim()}const K=class _Color{static from(e){return e instanceof _Color?e:te(e)||_Color.red}static fromCssVariable(e,t){return te(W(e,t))||_Color.red}static fromHex(e){return oe(e)||_Color.red}static equals(e,t){return!e&&!t||!(!e||!t)&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(!e)throw new Error("Color needs a value");if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else{if(!(e instanceof HSVA))throw new Error("Invalid color ctor argument");this._hsva=e,this.rgba=HSVA.toRGBA(e)}}equals(e){return null!=e&&(Boolean(e)&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva))}getRelativeLuminance(){return q(.2126*_Color._relativeLuminanceForComponent(this.rgba.r)+.7152*_Color._relativeLuminanceForComponent(this.rgba.g)+.0722*_Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new Q(new RGBA(0,0,0,e.rgba.a));if(1===t)return new Q(new RGBA(255,255,255,e.rgba.a));const o=e.getRelativeLuminance();let s=20;const r=(e,o)=>{const i=e.mix(o,.5),a=i.getRelativeLuminance();return Math.abs(t-a)<1e-7||!s--?i:a>t?r(e,i):r(i,o)},i=(o>t?r(Q.black,e):r(e,Q.white)).rgba;return new Q(new RGBA(i.r,i.g,i.b,e.rgba.a))}(this,e)}getContrastRatio(e){const t=this.getRelativeLuminance(),o=e.getRelativeLuminance();return t>o?(t+.05)/(o+.05):(o+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){const{r:t,g:o,b:s,a:r}=this.rgba;return new _Color(new RGBA(t,o,s,r*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new _Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){const t=e.rgba,o=this.rgba.a,s=t.a,r=o+s*(1-o);if(r<1e-6)return _Color.transparent;const i=this.rgba.r*o/r+t.r*s*(1-o)/r,a=this.rgba.g*o/r+t.g*s*(1-o)/r,c=this.rgba.b*o/r+t.b*s*(1-o)/r;return new _Color(new RGBA(i,a,c,r))}mix(e,t){return function(e,t,o){const s=e.rgba,r=t.rgba;return new Q(new RGBA(s.r+o*(r.r-s.r),s.g+o*(r.g-s.g),s.b+o*(r.b-s.b),s.a+o*(r.a-s.a)))}(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;const{r:t,g:o,b:s,a:r}=this.rgba;return new _Color(new RGBA(e.rgba.r-r*(e.rgba.r-t),e.rgba.g-r*(e.rgba.g-o),e.rgba.b-r*(e.rgba.b-s),1))}flatten(...e){const t=e.reduceRight(((e,t)=>_Color._flatten(t,e)));return _Color._flatten(this,t)}static _flatten(e,t){const o=1-e.rgba.a;return new _Color(new RGBA(o*t.rgba.r+e.rgba.a*e.rgba.r,o*t.rgba.g+e.rgba.a*e.rgba.g,o*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){if(e.isOpaque())return Y(e);return J(e)}(this)),this._toString}static getLighterColor(e,t,o){if(e.isLighterThan(t))return e;o=o||.5;const s=e.getRelativeLuminance(),r=t.getRelativeLuminance();return o=o*(r-s)/r,e.lighten(o)}static getDarkerColor(e,t,o){if(e.isDarkerThan(t))return e;o=o||.5;const s=e.getRelativeLuminance();return o=o*(s-t.getRelativeLuminance())/s,e.darken(o)}};K.white=new K(new RGBA(255,255,255,1)),K.black=new K(new RGBA(0,0,0,1)),K.red=new K(new RGBA(255,0,0,1)),K.blue=new K(new RGBA(0,0,255,1)),K.green=new K(new RGBA(0,255,0,1)),K.cyan=new K(new RGBA(0,255,255,1)),K.lightgrey=new K(new RGBA(211,211,211,1)),K.transparent=new K(new RGBA(0,0,0,0));let Q=K;function J(e){return`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}function X(e){const t=e.toString(16);return 2!==t.length?`0${t}`:t}function Y(e){return`#${X(e.rgba.r)}${X(e.rgba.g)}${X(e.rgba.b)}`}const ee=/^((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function te(e){if(0===(e=e.trim()).length)return null;if(e.charCodeAt(0)===D.Hash)return oe(e);const t=ee.exec(e);if(null==t)return null;const o=t[1];let s;switch(o){case"rgb":case"hsl":s=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),1];break;case"rgba":case"hsla":s=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),parseFloat(t[5])];break;default:return null}switch(o){case"rgb":case"rgba":return new Q(new RGBA(s[0],s[1],s[2],s[3]));case"hsl":case"hsla":return new Q(new HSLA(s[0],s[1],s[2],s[3]))}return Q.red}function oe(e){const t=(e=e.trim()).length;if(0===t)return null;if(e.charCodeAt(0)!==D.Hash)return null;switch(t){case 7:{const t=16*ne(e.charCodeAt(1))+ne(e.charCodeAt(2)),o=16*ne(e.charCodeAt(3))+ne(e.charCodeAt(4)),s=16*ne(e.charCodeAt(5))+ne(e.charCodeAt(6));return new Q(new RGBA(t,o,s,1))}case 9:{const t=16*ne(e.charCodeAt(1))+ne(e.charCodeAt(2)),o=16*ne(e.charCodeAt(3))+ne(e.charCodeAt(4)),s=16*ne(e.charCodeAt(5))+ne(e.charCodeAt(6)),r=16*ne(e.charCodeAt(7))+ne(e.charCodeAt(8));return new Q(new RGBA(t,o,s,r/255))}case 4:{const t=ne(e.charCodeAt(1)),o=ne(e.charCodeAt(2)),s=ne(e.charCodeAt(3));return new Q(new RGBA(16*t+t,16*o+o,16*s+s))}case 5:{const t=ne(e.charCodeAt(1)),o=ne(e.charCodeAt(2)),s=ne(e.charCodeAt(3)),r=ne(e.charCodeAt(4));return new Q(new RGBA(16*t+t,16*o+o,16*s+s,(16*r+r)/255))}default:return null}}function ne(e){switch(e){case D.Digit0:return 0;case D.Digit1:return 1;case D.Digit2:return 2;case D.Digit3:return 3;case D.Digit4:return 4;case D.Digit5:return 5;case D.Digit6:return 6;case D.Digit7:return 7;case D.Digit8:return 8;case D.Digit9:return 9;case D.a:case D.A:return 10;case D.b:case D.B:return 11;case D.c:case D.C:return 12;case D.d:case D.D:return 13;case D.e:case D.E:return 14;case D.f:case D.F:return 15}return 0}const se=class _Emitter{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(e,t,o)=>{null==this.listeners&&(this.listeners=new LinkedList);const s=this.listeners.push(null==t?e:[e,t]),r={dispose:()=>{r.dispose=_Emitter._noop,this._disposed||s()}};return Array.isArray(o)&&o.push(r),r}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){const[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};se._noop=function(){};let re=se;const ie={done:!0,value:void 0},ae=class _Node{constructor(e){this.element=e,this.next=_Node.Undefined,this.prev=_Node.Undefined}};ae.Undefined=new ae(void 0);let ce=ae;class LinkedList{constructor(){this._first=ce.Undefined,this._last=ce.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===ce.Undefined}clear(){this._first=ce.Undefined,this._last=ce.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){const o=new ce(e);if(this._first===ce.Undefined)this._first=o,this._last=o;else if(t){const e=this._last;this._last=o,o.prev=e,e.next=o}else{const e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let s=!1;return()=>{s||(s=!0,this._remove(o))}}shift(){if(this._first===ce.Undefined)return;const e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===ce.Undefined)return;const e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==ce.Undefined&&e.next!==ce.Undefined){const t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===ce.Undefined&&e.next===ce.Undefined?(this._first=ce.Undefined,this._last=ce.Undefined):e.next===ce.Undefined?(this._last=this._last.prev,this._last.next=ce.Undefined):e.prev===ce.Undefined&&(this._first=this._first.next,this._first.prev=ce.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===ce.Undefined?ie:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){const e=[];for(let t=this._first;t!==ce.Undefined;t=t.next)e.push(t.element);return e}}const le=new re,de=le.event;function he(e){const t=document.documentElement,o=window.getComputedStyle(t),s=document.body.classList,r=s.contains("vscode-light")||s.contains("vscode-high-contrast-light"),i=s.contains("vscode-high-contrast")||s.contains("vscode-high-contrast-light"),a=t.style,c=W("--vscode-editor-background",o);let l=W("--vscode-editor-foreground",o);l||(l=W("--vscode-foreground",o));let d=W("--color-background",o);return a.setProperty("--color-background--lighten-05",N(d,5)),a.setProperty("--color-background--darken-05",G(d,5)),a.setProperty("--color-background--lighten-075",N(d,7.5)),a.setProperty("--color-background--darken-075",G(d,7.5)),a.setProperty("--color-background--lighten-10",N(d,10)),a.setProperty("--color-background--darken-10",G(d,10)),a.setProperty("--color-background--lighten-15",N(d,15)),a.setProperty("--color-background--darken-15",G(d,15)),a.setProperty("--color-background--lighten-30",N(d,30)),a.setProperty("--color-background--darken-30",G(d,30)),a.setProperty("--color-background--lighten-50",N(d,50)),a.setProperty("--color-background--darken-50",G(d,50)),d=W("--color-button-background",o),a.setProperty("--color-button-background--darken-30",G(d,30)),d=W("--color-highlight",o),a.setProperty("--color-highlight--75",j(d,75)),a.setProperty("--color-highlight--50",j(d,50)),a.setProperty("--color-highlight--25",j(d,25)),d=W("--color-button-secondary-background",o),a.setProperty("--color-button-secondary-background--darken-30",G(d,30)),d=W("--color-foreground",o),a.setProperty("--color-foreground--85",j(d,85)),a.setProperty("--color-foreground--75",j(d,75)),a.setProperty("--color-foreground--65",j(d,65)),a.setProperty("--color-foreground--50",j(d,50)),d=W("--color-link-foreground",o),a.setProperty("--color-link-foreground--darken-20",G(d,20)),a.setProperty("--color-link-foreground--lighten-20",N(d,20)),d=W("--color-alert-infoBackground",o),a.setProperty("--color-alert-infoHoverBackground",r?G(d,5):N(d,5)),d=W("--color-alert-warningBackground",o),a.setProperty("--color-alert-warningHoverBackground",r?G(d,5):N(d,5)),d=W("--color-alert-errorBackground",o),a.setProperty("--color-alert-errorHoverBackground",r?G(d,5):N(d,5)),d=r?G(c,5):N(c,5),a.setProperty("--color-alert-neutralBackground",d),a.setProperty("--color-alert-neutralHoverBackground",r?G(d,5):N(d,5)),{colors:{background:c,foreground:l},computedStyle:o,isLightTheme:r,isHighContrastTheme:i,isInitializing:null==e}}var pe=Object.defineProperty,fe=Object.getOwnPropertyDescriptor;let be=0;function ue(){return 1073741824===be?be=1:be++,`webview:${be}`}const ge=new TextDecoder;class App{constructor(e){this.appName=e;const t=[],o=he();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(o),t.push(de(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",m.configure({name:e,createChannel:function(e){return{name:e,appendLine:function(e){}}}},"off"),this.log(`${e}()`),this._api=acquireVsCodeApi(),null!=this.state){const e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){const e=new MutationObserver((e=>{le.fire(he(e))}));return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame((()=>{this.log(`${e}(): initializing...`);try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(U.on(window,"message",(e=>this.onMessageReceivedCore(e)))),this.sendCommand(s,void 0),this.onInitialized?.()}finally{document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}})),t.push(U.on(window,"pagehide",(()=>{t?.forEach((e=>e.dispose())),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=void 0})))}onMessageReceivedCore(e){const t=A.get(S),o=e.data;if(o.packed&&o.params instanceof Uint8Array){const s=function(e,t,...o){return(t?.provider??w).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...o):void 0}(E(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});o.params=JSON.parse(ge.decode(o.params)),s?.stop()}this.onMessageReceived(o)}bind(){this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);const e=l((e=>{this.sendCommand(r,e)}),150);this.bindDisposables.push(U.on(document,"focusin",(t=>{const o=t.composedPath().some((e=>"INPUT"===e.tagName));!0===this._focused&&this._inputFocused===o||(this._focused=!0,this._inputFocused=o,e({focused:!0,inputFocused:o}))})),U.on(document,"focusout",(()=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))})))}log(e,...t){"string"==typeof e?m.log(e,...t):m.log(e,t.shift(),...t)}getState(){return this._api.getState()}sendCommand(e,t){const o=ue();this.log(`${this.appName}.sendCommand(${o}): name=${e.method}`),this.postMessage({id:o,method:e.method,params:t})}async sendCommandWithCompletion(e,t,s){const r=ue();this.log(`${this.appName}.sendCommandWithCompletion(${r}): name=${e.method}`);const i=new Promise(((e,t)=>{let i;const a=[U.on(window,"message",(t=>{o(s,t.data,(o=>{t.data.completionId===r&&(a.forEach((e=>e.dispose())),queueMicrotask((()=>e(o))))}))})),{dispose:function(){null!=i&&(clearTimeout(i),i=void 0)}}];i=setTimeout((()=>{i=void 0,a.forEach((e=>e.dispose())),t(new Error(`Timed out waiting for completion of ${s.method}`))}),6e4)}));return this.postMessage({id:r,method:e.method,params:t,completionId:r}),i}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}}var ye;((e,t,o,s)=>{for(var r,i=s>1?void 0:s?fe(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(i=(s?r(t,o,i):r(i))||i);s&&i&&pe(t,o,i)})([(ye={args:{0:e=>`${e.data.id}, method=${e.data.method}`}},function(e,t=!1){let o,s,r,i,a=0,l=!1,v=!1,w=!0;null!=e&&({args:o,enter:s,exit:r,prefix:i,logThreshold:a=0,scoped:l=!0,singleLine:v=!1,timed:w=!0}=e),a>0&&(v=!0,w=!0),w&&(l=!0);const $=m.isDebugging,S=t?m.debug:m.log,E=$?"debug":"info";return(e,t,D)=>{let F,U;if("function"==typeof D.value?(F=D.value,U="value"):"function"==typeof D.get&&(F=D.get,U="get"),null==F||null==U)throw new Error("Not supported");const T=!1!==o?function(e){if("function"!=typeof e)throw new Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e);t=t.replace(y,"")||t,t=t.slice(0,t.indexOf(p));let o=t.indexOf(f),s=t.indexOf(u);o=o>=0?o+1:0,s=s>0?s:t.indexOf(h),t=t.slice(o,s),t=`(${t})`;const r=g.exec(t);return null!=r?r[1].split(d).map((e=>e.trim().replace(x,""))):[]}(F):[];D[U]=function(...e){if(!$&&!m.enabled(E))return F.apply(this,e);const d=B(),h=null!=this?this.constructor?.[Z]?.(this,C(this))??C(this):void 0;let p,f=h?l?`[${d.toString(16).padStart(5)}] ${h}.${t}`:`${h}.${t}`:t;null!=i&&(f=i({id:d,instance:this,instanceName:h??"",name:t,prefix:f},...e)),l&&(p={scopeId:d,prefix:f},function(e,t){A.set(e,t)}(d,p));const u=null!=s?s(...e):"";let g;if(!1===o||0===e.length)g="",v||S.call(m,`${f}${u}`);else{let t;g="";let s,r,i,a=-1;for(i of e){if(s=T[++a],t=o?.[a],null!=t){if("boolean"==typeof t)continue;if(g.length>0&&(g+=", "),"string"==typeof t){g+=t;continue}r=String(t(i))}else g.length>0&&(g+=", "),r=m.toLoggable(i);g+=s?`${s}=${r}`:r}v||S.call(m,g?`${f}${u}(${g})`:`${f}${u}`)}if(v||w||null!=r){const t=w?c():void 0,o=e=>{const o=void 0!==t?` [${O(t)}ms]`:"";v?m.error(e,g?`${f}${u}(${g})`:`${f}${u}`,p?.exitDetails?`failed${p.exitDetails}${o}`:`failed${o}`):m.error(e,f,p?.exitDetails?`failed${p.exitDetails}${o}`:`failed${o}`),l&&P(d)};let s;try{s=F.apply(this,e)}catch(e){throw o(e),e}const i=e=>{let o,s,i,c;if(null!=t?(o=O(t),o>_?(s=m.warn,i=` [*${o}ms] (slow)`):(s=S,i=` [${o}ms]`)):(i="",s=S),null!=r)if("function"==typeof r)try{c=r(e)}catch(e){c=`@log.exit error: ${e}`}else!0===r&&(c=`returned ${m.toLoggable(e)}`);else p?.exitFailed?(c=p.exitFailed,s=m.error):c="completed";v?(0===a||o>a)&&s.call(m,g?`${f}${u}(${g}) ${c}${p?.exitDetails||""}${i}`:`${f}${u} ${c}${p?.exitDetails||""}${i}`):s.call(m,g?`${f}(${g}) ${c}${p?.exitDetails||""}${i}`:`${f} ${c}${p?.exitDetails||""}${i}`),l&&P(d)};return null!=s&&null!=(y=s)&&(y instanceof Promise||"function"==typeof y?.then)?s.then(i,o):i(s),s}var y;return F.apply(this,e)}}}(ye,!0))],App.prototype,"onMessageReceivedCore",1);const xe=globalThis,me=xe.ShadowRoot&&(void 0===xe.ShadyCSS||xe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ve=Symbol(),Ce=new WeakMap;class n{constructor(e,t,o){if(this._$cssResult$=!0,o!==ve)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(me&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=Ce.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Ce.set(t,e))}return e}toString(){return this.cssText}}const we=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,o,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1]),e[0]);return new n(o,e,ve)},_e=me?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,ve))(t)})(e):e,{is:ke,defineProperty:$e,getOwnPropertyDescriptor:Ae,getOwnPropertyNames:Le,getOwnPropertySymbols:Me,getPrototypeOf:Se}=Object,Pe=globalThis,Ee=Pe.trustedTypes,Be=Ee?Ee.emptyScript:"",De=Pe.reactiveElementPolyfillSupport,He=(e,t)=>e,Fe={toAttribute(e,t){switch(t){case Boolean:e=e?Be:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},Oe=(e,t)=>!ke(e,t),Re={attribute:!0,type:String,converter:Fe,reflect:!1,hasChanged:Oe};Symbol.metadata??=Symbol("metadata"),Pe.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Re){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),s=this.getPropertyDescriptor(e,o,t);void 0!==s&&$e(this.prototype,e,s)}}static getPropertyDescriptor(e,t,o){const{get:s,set:r}=Ae(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return s?.call(this)},set(t){const i=s?.call(this);r.call(this,t),this.requestUpdate(e,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Re}static _$Ei(){if(this.hasOwnProperty(He("elementProperties")))return;const e=Se(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(He("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(He("properties"))){const e=this.properties,t=[...Le(e),...Me(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(_e(e))}else void 0!==e&&t.push(_e(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$E_??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$E_?.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(me)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const o of t){const t=document.createElement("style"),s=xe.litNonce;void 0!==s&&t.setAttribute("nonce",s),t.textContent=o.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$E_?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t){const o=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,o);if(void 0!==s&&!0===o.reflect){const r=(void 0!==o.converter?.toAttribute?o.converter:Fe).toAttribute(t,o.type);this._$Em=e,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(e,t){const o=this.constructor,s=o._$Eh.get(e);if(void 0!==s&&this._$Em!==s){const e=o.getPropertyOptions(s),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:Fe;this._$Em=s,this[s]=r.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o,s=!1,r){if(void 0!==e){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??Oe)(s?r:this[e],t))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$E_?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$E_?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EO(e,this[e]))),this._$ET()}updated(e){}firstUpdated(e){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[He("elementProperties")]=new Map,b[He("finalized")]=new Map,De?.({ReactiveElement:b}),(Pe.reactiveElementVersions??=[]).push("2.0.2");const Ze=globalThis,Ue=Ze.trustedTypes,Te=Ue?Ue.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ie="$lit$",Ve=`lit$${(Math.random()+"").slice(9)}$`,ze="?"+Ve,Ge=`<${ze}>`,Ne=document,je=()=>Ne.createComment(""),qe=e=>null===e||"object"!=typeof e&&"function"!=typeof e,We=Array.isArray,Ke=e=>We(e)||"function"==typeof e?.[Symbol.iterator],Qe="[ \t\n\f\r]",Je=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Xe=/-->/g,Ye=/>/g,et=RegExp(`>|${Qe}(?:([^\\s"'>=/]+)(${Qe}*=${Qe}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),tt=/'/g,ot=/"/g,nt=/^(?:script|style|textarea|title)$/i,st=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),rt=st(1),it=st(2),at=Symbol.for("lit-noChange"),ct=Symbol.for("lit-nothing"),lt=new WeakMap,dt=Ne.createTreeWalker(Ne,129);function ht(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Te?Te.createHTML(t):t}const pt=(e,t)=>{const o=e.length-1,s=[];let r,i=2===t?"<svg>":"",a=Je;for(let t=0;t<o;t++){const o=e[t];let c,l,d=-1,h=0;for(;h<o.length&&(a.lastIndex=h,l=a.exec(o),null!==l);)h=a.lastIndex,a===Je?"!--"===l[1]?a=Xe:void 0!==l[1]?a=Ye:void 0!==l[2]?(nt.test(l[2])&&(r=RegExp("</"+l[2],"g")),a=et):void 0!==l[3]&&(a=et):a===et?">"===l[0]?(a=r??Je,d=-1):void 0===l[1]?d=-2:(d=a.lastIndex-l[2].length,c=l[1],a=void 0===l[3]?et:'"'===l[3]?ot:tt):a===ot||a===tt?a=et:a===Xe||a===Ye?a=Je:(a=et,r=void 0);const p=a===et&&e[t+1].startsWith("/>")?" ":"";i+=a===Je?o+Ge:d>=0?(s.push(c),o.slice(0,d)+Ie+o.slice(d)+Ve+p):o+Ve+(-2===d?t:p)}return[ht(e,i+(e[o]||"<?>")+(2===t?"</svg>":"")),s]};class V{constructor({strings:e,_$litType$:t},o){let s;this.parts=[];let r=0,i=0;const a=e.length-1,c=this.parts,[l,d]=pt(e,t);if(this.el=V.createElement(l,o),dt.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(s=dt.nextNode())&&c.length<a;){if(1===s.nodeType){if(s.hasAttributes())for(const e of s.getAttributeNames())if(e.endsWith(Ie)){const t=d[i++],o=s.getAttribute(e).split(Ve),a=/([.?@])?(.*)/.exec(t);c.push({type:1,index:r,name:a[2],strings:o,ctor:"."===a[1]?k:"?"===a[1]?H:"@"===a[1]?I:R}),s.removeAttribute(e)}else e.startsWith(Ve)&&(c.push({type:6,index:r}),s.removeAttribute(e));if(nt.test(s.tagName)){const e=s.textContent.split(Ve),t=e.length-1;if(t>0){s.textContent=Ue?Ue.emptyScript:"";for(let o=0;o<t;o++)s.append(e[o],je()),dt.nextNode(),c.push({type:2,index:++r});s.append(e[t],je())}}}else if(8===s.nodeType)if(s.data===ze)c.push({type:2,index:r});else{let e=-1;for(;-1!==(e=s.data.indexOf(Ve,e+1));)c.push({type:7,index:r}),e+=Ve.length-1}r++}}static createElement(e,t){const o=Ne.createElement("template");return o.innerHTML=e,o}}function ft(e,t,o=e,s){if(t===at)return t;let r=void 0!==s?o._$Co?.[s]:o._$Cl;const i=qe(t)?void 0:t._$litDirective$;return r?.constructor!==i&&(r?._$AO?.(!1),void 0===i?r=void 0:(r=new i(e),r._$AT(e,o,s)),void 0!==s?(o._$Co??=[])[s]=r:o._$Cl=r),void 0!==r&&(t=ft(e,r._$AS(e,t.values),r,s)),t}class lit_html_S{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,s=(e?.creationScope??Ne).importNode(t,!0);dt.currentNode=s;let r=dt.nextNode(),i=0,a=0,c=o[0];for(;void 0!==c;){if(i===c.index){let t;2===c.type?t=new M(r,r.nextSibling,this,e):1===c.type?t=new c.ctor(r,c.name,c.strings,this,e):6===c.type&&(t=new L(r,this,e)),this._$AV.push(t),c=o[++a]}i!==c?.index&&(r=dt.nextNode(),i++)}return dt.currentNode=Ne,s}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,s){this.type=2,this._$AH=ct,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ft(this,e,t),qe(e)?e===ct||null==e||""===e?(this._$AH!==ct&&this._$AR(),this._$AH=ct):e!==this._$AH&&e!==at&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):Ke(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==ct&&qe(this._$AH)?this._$AA.nextSibling.data=e:this.$(Ne.createTextNode(e)),this._$AH=e}g(e){const{values:t,_$litType$:o}=e,s="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=V.createElement(ht(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===s)this._$AH.p(t);else{const e=new lit_html_S(s,this),o=e.u(this.options);e.p(t),this.$(o),this._$AH=e}}_$AC(e){let t=lt.get(e.strings);return void 0===t&&lt.set(e.strings,t=new V(e)),t}T(e){We(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,s=0;for(const r of e)s===t.length?t.push(o=new M(this.k(je()),this.k(je()),this,this.options)):o=t[s],o._$AI(r),s++;s<t.length&&(this._$AR(o&&o._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,s,r){this.type=1,this._$AH=ct,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=ct}_$AI(e,t=this,o,s){const r=this.strings;let i=!1;if(void 0===r)e=ft(this,e,t,0),i=!qe(e)||e!==this._$AH&&e!==at,i&&(this._$AH=e);else{const s=e;let a,c;for(e=r[0],a=0;a<r.length-1;a++)c=ft(this,s[o+a],t,a),c===at&&(c=this._$AH[a]),i||=!qe(c)||c!==this._$AH[a],c===ct?e=ct:e!==ct&&(e+=(c??"")+r[a+1]),this._$AH[a]=c}i&&!s&&this.O(e)}O(e){e===ct?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===ct?void 0:e}}class H extends R{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==ct)}}class I extends R{constructor(e,t,o,s,r){super(e,t,o,s,r),this.type=5}_$AI(e,t=this){if((e=ft(this,e,t,0)??ct)===at)return;const o=this._$AH,s=e===ct&&o!==ct||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==ct&&(o===ct||s);s&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class L{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){ft(this,e)}}const bt=Ze.litHtmlPolyfillSupport;bt?.(V,M),(Ze.litHtmlVersions??=[]).push("3.1.0");class lit_element_s extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const s=o?.renderBefore??t;let r=s._$litPart$;if(void 0===r){const e=o?.renderBefore??null;s._$litPart$=r=new M(t.insertBefore(je(),e),e,void 0,o??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return at}}lit_element_s._$litElement$=!0,lit_element_s.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lit_element_s});const ut=globalThis.litElementPolyfillSupport;ut?.({LitElement:lit_element_s});(globalThis.litElementVersions??=[]).push("4.0.2");const gt=e=>(t,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},yt={attribute:!0,type:String,converter:Fe,reflect:!1,hasChanged:Oe},xt=(e=yt,t,o)=>{const{kind:s,metadata:r}=o;let i=globalThis.litPropertyMetadata.get(r);if(void 0===i&&globalThis.litPropertyMetadata.set(r,i=new Map),i.set(o.name,e),"accessor"===s){const{name:s}=o;return{set(o){const r=t.get.call(this);t.set.call(this,o),this.requestUpdate(s,r,e)},init(t){return void 0!==t&&this.C(s,void 0,e),t}}}if("setter"===s){const{name:s}=o;return function(o){const r=this[s];t.call(this,o),this.requestUpdate(s,r,e)}}throw Error("Unsupported decorator location: "+s)};function mt(e){return(t,o)=>"object"==typeof o?xt(e,t,o):((e,t,o)=>{const s=t.hasOwnProperty(o);return t.constructor.createProperty(o,s?{...e,wrapped:!0}:e),s?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}var vt=Object.defineProperty,Ct=Object.getOwnPropertyDescriptor,wt=(e,t,o,s)=>{for(var r,i=s>1?void 0:s?Ct(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(i=(s?r(t,o,i):r(i))||i);return s&&i&&vt(t,o,i),i};let _t=class extends lit_element_s{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=16}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};_t.styles=we`
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
	`,wt([mt()],_t.prototype,"icon",2),wt([mt()],_t.prototype,"modifier",2),wt([mt({type:Number})],_t.prototype,"size",2),_t=wt([gt("code-icon")],_t);we`
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
`;const kt=we`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,$t=we`
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
`;we`
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
`,we`
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
`;var At=Object.defineProperty,Lt=Object.getOwnPropertyDescriptor,Mt=(e,t,o,s)=>{for(var r,i=s>1?void 0:s?Lt(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(i=(s?r(t,o,i):r(i))||i);return s&&i&&At(t,o,i),i};let St=class extends lit_element_s{constructor(){super(...arguments),this.full=!1,this.disabled=!1,this.tabIndex=0}get role(){return this.href?"link":"button"}updated(e){super.updated(e),e.has("disabled")&&(this.tabIndex=this.disabled?-1:0,this.setAttribute("aria-disabled",this.disabled.toString()))}render(){const e=rt`<slot></slot>`;return null!=this.href?rt`<a href=${this.href}>${e}</a>`:e}};St.styles=[$t,we`
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
		`],Mt([mt({type:Boolean,reflect:!0})],St.prototype,"full",2),Mt([mt({type:Boolean,reflect:!0})],St.prototype,"disabled",2),Mt([mt({reflect:!0})],St.prototype,"density",2),Mt([mt()],St.prototype,"href",2),Mt([mt({reflect:!0})],St.prototype,"role",1),Mt([mt()],St.prototype,"appearance",2),Mt([mt({type:Number,reflect:!0})],St.prototype,"tabIndex",2),St=Mt([gt("gl-button")],St);var Pt=Object.defineProperty,Et=Object.getOwnPropertyDescriptor,Bt=(e,t,o,s)=>{for(var r,i=s>1?void 0:s?Et(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(i=(s?r(t,o,i):r(i))||i);return s&&i&&Pt(t,o,i),i};let Dt=class extends lit_element_s{render(){const e=rt`
			<div class="header">
				<slot name="header"></slot>
			</div>
			<div class="content">
				<slot></slot>
			</div>
		`;return null!=this.href?rt`<a href=${this.href}>${e}</a>`:e}};Dt.styles=[$t,we`
			:host {
				display: block;
				padding: 1.6rem;
				background-color: var(--gk-card-background);
				border-radius: var(--gk-card-radius);
			}

			:host > a {
				color: inherit;
				text-decoration: none;
			}

			:host([tabindex]:not([tabindex='-1'])) {
				cursor: pointer;
			}

			:host([tabindex]:not([tabindex='-1']):hover) {
				background-color: var(--gk-card-hover-background);
			}

			:host([tabindex]:not([tabindex='-1']):focus) {
				${kt}
			}

			.header {
			}

			slot[name='header']::slotted(*) {
				margin-top: 0 !important;
				margin-bottom: 0 !important;
			}

			.content {
				margin-top: 0.4rem;
			}

			/*
			slot:not([name])::slotted(:first-child) {
				margin-top: 0;
			}
			slot:not([name])::slotted(:last-child) {
				margin-bottom: 0;
			} */
		`],Bt([mt()],Dt.prototype,"href",2),Dt=Bt([gt("gk-card")],Dt);var Ht=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor;let Ot=class extends lit_element_s{render(){return rt`<svg
			alt="GitLens"
			width="159"
			height="46"
			viewBox="0 0 159 46"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="23" cy="23" r="23" fill="#04090D" />
			<circle cx="23" cy="23" r="23" fill="url(#paint0_linear_43_72231)" />
			<circle cx="23" cy="23" r="23" fill="url(#paint1_radial_43_72231)" />
			<circle cx="23" cy="23" r="23" fill="url(#paint2_radial_43_72231)" />
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M23 45.0272C35.1653 45.0272 45.0272 35.1653 45.0272 23C45.0272 10.8347 35.1653 0.97281 23 0.97281C10.8347 0.97281 0.97281 10.8347 0.97281 23C0.97281 35.1653 10.8347 45.0272 23 45.0272ZM23 46C35.7025 46 46 35.7025 46 23C46 10.2975 35.7025 0 23 0C10.2975 0 0 10.2975 0 23C0 35.7025 10.2975 46 23 46Z"
				fill="white"
				style="mix-blend-mode:soft-light"
			/>
			<mask id="path-3-inside-1_43_72231" fill="white">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M23.7041 11.4729C23.9472 12.1964 23.9225 12.949 23.6825 13.6317C24.3067 14.1892 24.9927 14.8352 25.7364 15.5815C27.588 17.4394 28.8416 18.9594 29.656 20.0599C30.0572 19.9115 30.4909 19.8304 30.9435 19.8304C32.9992 19.8304 34.6656 21.5026 34.6656 23.5653C34.6656 25.628 32.9992 27.3002 30.9435 27.3002C28.8879 27.3002 27.2214 25.628 27.2214 23.5653C27.2214 22.6041 27.5833 21.7277 28.1778 21.0658C27.371 20.0286 26.204 18.6439 24.5714 16.9401C23.9124 16.2524 23.2877 15.641 22.7043 15.0996C22.3317 15.4388 21.881 15.7102 21.3681 15.8837C21.1476 15.9583 20.9254 16.0115 20.7039 16.0445C20.574 17.5426 20.4653 19.5952 20.4653 22.2681C20.4653 26.1145 20.6904 28.6762 20.8797 30.15C21.4 30.21 21.9245 30.3776 22.4173 30.6606C24.1985 31.6832 24.8932 33.826 23.969 35.4466C23.0449 37.0672 20.8519 37.552 19.0708 36.5294C17.2897 35.5067 16.595 33.3639 17.5191 31.7433C17.8825 31.1061 18.4421 30.6444 19.0957 30.381C18.8672 29.0854 18.6075 26.6547 18.6075 22.2997C18.6075 19.3649 18.7255 17.295 18.8723 15.8552C17.9399 15.5066 17.1791 14.7792 16.8475 13.7923C16.2443 11.9967 17.2902 10.0219 19.1835 9.38139C21.0769 8.74091 23.1009 9.6773 23.7041 11.4729Z"
				/>
			</mask>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M23.7041 11.4729C23.9472 12.1964 23.9225 12.949 23.6825 13.6317C24.3067 14.1892 24.9927 14.8352 25.7364 15.5815C27.588 17.4394 28.8416 18.9594 29.656 20.0599C30.0572 19.9115 30.4909 19.8304 30.9435 19.8304C32.9992 19.8304 34.6656 21.5026 34.6656 23.5653C34.6656 25.628 32.9992 27.3002 30.9435 27.3002C28.8879 27.3002 27.2214 25.628 27.2214 23.5653C27.2214 22.6041 27.5833 21.7277 28.1778 21.0658C27.371 20.0286 26.204 18.6439 24.5714 16.9401C23.9124 16.2524 23.2877 15.641 22.7043 15.0996C22.3317 15.4388 21.881 15.7102 21.3681 15.8837C21.1476 15.9583 20.9254 16.0115 20.7039 16.0445C20.574 17.5426 20.4653 19.5952 20.4653 22.2681C20.4653 26.1145 20.6904 28.6762 20.8797 30.15C21.4 30.21 21.9245 30.3776 22.4173 30.6606C24.1985 31.6832 24.8932 33.826 23.969 35.4466C23.0449 37.0672 20.8519 37.552 19.0708 36.5294C17.2897 35.5067 16.595 33.3639 17.5191 31.7433C17.8825 31.1061 18.4421 30.6444 19.0957 30.381C18.8672 29.0854 18.6075 26.6547 18.6075 22.2997C18.6075 19.3649 18.7255 17.295 18.8723 15.8552C17.9399 15.5066 17.1791 14.7792 16.8475 13.7923C16.2443 11.9967 17.2902 10.0219 19.1835 9.38139C21.0769 8.74091 23.1009 9.6773 23.7041 11.4729Z"
				fill="url(#paint3_linear_43_72231)"
			/>
			<path
				d="M23.6825 13.6317L22.7391 13.3001L22.517 13.9317L23.0164 14.3776L23.6825 13.6317ZM23.7041 11.4729L24.652 11.1544L23.7041 11.4729ZM25.7364 15.5815L25.0281 16.2874V16.2874L25.7364 15.5815ZM29.656 20.0599L28.8521 20.6547L29.2988 21.2583L30.003 20.9978L29.656 20.0599ZM28.1778 21.0658L28.9218 21.734L29.4805 21.1119L28.9671 20.4518L28.1778 21.0658ZM24.5714 16.9401L23.8494 17.632V17.632L24.5714 16.9401ZM22.7043 15.0996L23.3845 14.3666L22.7107 13.7413L22.031 14.3601L22.7043 15.0996ZM21.3681 15.8837L21.6885 16.831L21.6885 16.831L21.3681 15.8837ZM20.7039 16.0445L20.5567 15.0553L19.7758 15.1715L19.7076 15.9581L20.7039 16.0445ZM20.8797 30.15L19.8878 30.2774L19.9875 31.0538L20.7651 31.1434L20.8797 30.15ZM22.4173 30.6606L21.9194 31.5278H21.9194L22.4173 30.6606ZM23.969 35.4466L23.1004 34.9512L23.969 35.4466ZM19.0708 36.5294L19.5687 35.6621L19.0708 36.5294ZM17.5191 31.7433L18.3878 32.2387H18.3878L17.5191 31.7433ZM19.0957 30.381L19.4695 31.3085L20.2212 31.0056L20.0805 30.2074L19.0957 30.381ZM18.8723 15.8552L19.8671 15.9566L19.9454 15.1888L19.2225 14.9185L18.8723 15.8552ZM16.8475 13.7923L15.8996 14.1107L16.8475 13.7923ZM24.6259 13.9634C24.9355 13.0825 24.97 12.1009 24.652 11.1544L22.7562 11.7913C22.9243 12.2919 22.9094 12.8155 22.7391 13.3001L24.6259 13.9634ZM26.4448 14.8756C25.6877 14.116 24.9877 13.4565 24.3485 12.8858L23.0164 14.3776C23.6258 14.9218 24.2977 15.5545 25.0281 16.2874L26.4448 14.8756ZM30.4598 19.4651C29.6154 18.3239 28.3296 16.7669 26.4448 14.8756L25.0281 16.2874C26.8464 18.1119 28.0679 19.5949 28.8521 20.6547L30.4598 19.4651ZM30.9435 18.8304C30.3707 18.8304 29.8196 18.9331 29.309 19.122L30.003 20.9978C30.2948 20.8898 30.6112 20.8304 30.9435 20.8304V18.8304ZM35.6656 23.5653C35.6656 20.9535 33.5547 18.8304 30.9435 18.8304V20.8304C32.4437 20.8304 33.6656 22.0516 33.6656 23.5653H35.6656ZM30.9435 28.3002C33.5547 28.3002 35.6656 26.1771 35.6656 23.5653H33.6656C33.6656 25.079 32.4437 26.3002 30.9435 26.3002V28.3002ZM26.2214 23.5653C26.2214 26.1771 28.3323 28.3002 30.9435 28.3002V26.3002C29.4434 26.3002 28.2214 25.079 28.2214 23.5653H26.2214ZM27.4338 20.3976C26.6806 21.2362 26.2214 22.3484 26.2214 23.5653H28.2214C28.2214 22.8598 28.486 22.2192 28.9218 21.734L27.4338 20.3976ZM23.8494 17.632C25.4595 19.3123 26.6038 20.671 27.3884 21.6798L28.9671 20.4518C28.1382 19.3862 26.9486 17.9756 25.2934 16.2483L23.8494 17.632ZM22.024 15.8325C22.5932 16.3607 23.2039 16.9585 23.8494 17.632L25.2934 16.2483C24.6208 15.5464 23.9822 14.9212 23.3845 14.3666L22.024 15.8325ZM21.6885 16.831C22.3336 16.6128 22.9041 16.27 23.3775 15.839L22.031 14.3601C21.7593 14.6076 21.4283 14.8077 21.0476 14.9365L21.6885 16.831ZM20.851 17.0336C21.1313 16.9919 21.4115 16.9247 21.6885 16.831L21.0476 14.9365C20.8838 14.9919 20.7195 15.0311 20.5567 15.0553L20.851 17.0336ZM21.4653 22.2681C21.4653 19.6222 21.5729 17.5986 21.7001 16.1308L19.7076 15.9581C19.5751 17.4867 19.4653 19.5681 19.4653 22.2681H21.4653ZM21.8715 30.0227C21.6881 28.5945 21.4653 26.0756 21.4653 22.2681H19.4653C19.4653 26.1534 19.6927 28.7578 19.8878 30.2774L21.8715 30.0227ZM20.7651 31.1434C21.1508 31.1879 21.5448 31.3127 21.9194 31.5278L22.9153 29.7933C22.3041 29.4425 21.6492 29.2321 20.9942 29.1566L20.7651 31.1434ZM21.9194 31.5278C23.3025 32.3219 23.7079 33.8857 23.1004 34.9512L24.8377 35.9419C26.0784 33.7662 25.0944 31.0445 22.9153 29.7933L21.9194 31.5278ZM23.1004 34.9512C22.4943 36.0141 20.9505 36.4555 19.5687 35.6621L18.5729 37.3966C20.7533 38.6485 23.5955 38.1204 24.8377 35.9419L23.1004 34.9512ZM19.5687 35.6621C18.1856 34.868 17.7802 33.3042 18.3878 32.2387L16.6504 31.248C15.4097 33.4237 16.3938 36.1454 18.5729 37.3966L19.5687 35.6621ZM18.3878 32.2387C18.6319 31.8105 19.01 31.4937 19.4695 31.3085L18.7218 29.4535C17.8741 29.7952 17.133 30.4016 16.6504 31.248L18.3878 32.2387ZM17.6075 22.2997C17.6075 26.6892 17.8689 29.1823 18.1108 30.5546L20.0805 30.2074C19.8656 28.9885 19.6075 26.6202 19.6075 22.2997H17.6075ZM17.8775 15.7537C17.7264 17.2346 17.6075 19.3393 17.6075 22.2997H19.6075C19.6075 19.3905 19.7245 17.3553 19.8671 15.9566L17.8775 15.7537ZM15.8996 14.1107C16.3345 15.4053 17.33 16.3461 18.5221 16.7919L19.2225 14.9185C18.5498 14.667 18.0237 14.1531 17.7955 13.4738L15.8996 14.1107ZM18.8631 8.43412C16.4958 9.23492 15.1049 11.7452 15.8996 14.1107L17.7955 13.4738C17.3837 12.2482 18.0845 10.8088 19.504 10.3287L18.8631 8.43412ZM24.652 11.1544C23.8567 8.78703 21.2317 7.6329 18.8631 8.43412L19.504 10.3287C20.9222 9.84892 22.345 10.5676 22.7562 11.7913L24.652 11.1544Z"
				fill="white"
				style="mix-blend-mode:soft-light"
				mask="url(#path-3-inside-1_43_72231)"
			/>
			<path
				d="M71.554 18.5081C71.0032 17.4524 70.2382 16.6607 69.2591 16.1328C68.2799 15.5846 67.1477 15.3106 65.8626 15.3106C64.455 15.3106 63.2005 15.6252 62.0989 16.2546C60.9974 16.884 60.1304 17.7773 59.498 18.9345C58.8861 20.0917 58.5801 21.4317 58.5801 22.9543C58.5801 24.477 58.8861 25.8271 59.498 27.0046C60.1304 28.1618 60.9974 29.0551 62.0989 29.6845C63.2005 30.3138 64.455 30.6285 65.8626 30.6285C67.7597 30.6285 69.2999 30.1007 70.483 29.0449C71.6662 27.9892 72.3903 26.5579 72.6555 24.7511H64.6692V21.9798H76.3886C76.3886 21.9798 76.4973 22.789 76.4973 23.4052C76.4973 23.9332 76.3886 24.6901 76.3886 24.6901C76.1642 26.3346 75.5726 27.8471 74.6139 29.2277C73.6755 30.6082 72.4413 31.7147 70.9114 32.5471C69.4019 33.3592 67.7189 33.7652 65.8626 33.7652C63.8635 33.7652 62.0377 33.3084 60.3854 32.3948C58.7331 31.4609 57.4173 30.1717 56.4381 28.5272C55.4794 26.8828 55 25.0251 55 22.9543C55 20.8835 55.4794 19.0259 56.4381 17.3814C57.4173 15.7369 58.7331 14.4579 60.3854 13.5443C62.0581 12.6104 63.8839 12.1434 65.8626 12.1434C68.1269 12.1434 70.1362 12.7017 71.8906 13.8184C73.6653 14.9147 74.9505 16.4779 75.746 18.5081H71.554Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path d="M82.7053 19.7872V33.5825H79.2171V19.7872H82.7053Z" fill="#F7DEFF" class="letters" />
			<path
				d="M90.7428 19.6349V28.9231C90.7428 29.5525 90.8856 30.0093 91.1712 30.2935C91.4772 30.5575 91.9872 30.6894 92.7011 30.6894H94.8431V33.5825H92.0892C90.5184 33.5825 89.3149 33.217 88.4785 32.4862C87.6421 31.7553 87.2239 30.5676 87.2239 28.9231V19.6349H85.235V16.8028H87.2239V12.4049H90.7428V16.8028H94.8431V19.6349H90.7428Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path
				d="M100.934 30.7808H109.505V33.5825H97.4461V12.4175H100.934V30.7808Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path
				d="M125.883 24.7815C125.883 25.4109 125.842 25.9793 125.76 26.4869H112.878C112.98 27.8268 113.48 28.9028 114.378 29.7149C115.275 30.527 116.377 30.933 117.682 30.933C119.559 30.933 120.885 30.1514 121.66 28.5882H125.424C124.914 30.1311 123.986 31.4 122.639 32.3948C121.313 33.3693 119.661 33.8566 117.682 33.8566C116.071 33.8566 114.622 33.5013 113.337 32.7907C112.072 32.0598 111.073 31.0447 110.339 29.7454C109.625 28.4257 109.268 26.9031 109.268 25.1774C109.268 23.4517 109.614 21.9392 110.308 20.6399C111.022 19.3202 112.011 18.3051 113.276 17.5946C114.561 16.884 116.03 16.5287 117.682 16.5287C119.273 16.5287 120.691 16.8738 121.935 17.5641C123.18 18.2544 124.149 19.2289 124.842 20.4876C125.536 21.726 125.883 23.1573 125.883 24.7815ZM122.241 23.6852C122.221 22.4062 121.762 21.3809 120.865 20.6094C119.967 19.8379 118.855 19.4522 117.529 19.4522C116.326 19.4522 115.296 19.8379 114.439 20.6094C113.582 21.3606 113.072 22.3859 112.909 23.6852H122.241Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path
				d="M136.29 16.5287C137.616 16.5287 138.799 16.8028 139.84 17.3509C140.901 17.8991 141.727 18.7112 142.318 19.7872C142.91 20.8632 143.206 22.1625 143.206 23.6852V33.5825H139.748V24.2029C139.748 22.7005 139.371 21.5535 138.616 20.7617C137.861 19.9496 136.831 19.5436 135.525 19.5436C134.22 19.5436 133.179 19.9496 132.404 20.7617C131.65 21.5535 131.272 22.7005 131.272 24.2029V33.5825H127.784V16.8028H131.272V18.7213C131.843 18.031 132.568 17.493 133.445 17.1073C134.342 16.7216 135.291 16.5287 136.29 16.5287Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path
				d="M152.243 33.8566C150.917 33.8566 149.724 33.6231 148.663 33.1561C147.623 32.6689 146.797 32.0192 146.185 31.2071C145.573 30.3747 145.246 29.451 145.206 28.4359H148.816C148.877 29.1465 149.214 29.7454 149.826 30.2326C150.458 30.6996 151.244 30.933 152.182 30.933C153.161 30.933 153.916 30.7503 154.446 30.3849C154.997 29.9991 155.273 29.5119 155.273 28.9231C155.273 28.2938 154.967 27.8268 154.355 27.5223C153.763 27.2178 152.815 26.8828 151.509 26.5173C150.244 26.1722 149.214 25.8372 148.418 25.5124C147.623 25.1875 146.929 24.6901 146.338 24.0202C145.767 23.3502 145.481 22.4671 145.481 21.3707C145.481 20.4775 145.746 19.6654 146.277 18.9345C146.807 18.1833 147.562 17.5946 148.541 17.1682C149.54 16.7419 150.683 16.5287 151.968 16.5287C153.885 16.5287 155.426 17.0159 156.588 17.9904C157.772 18.9446 158.404 20.2541 158.486 21.9189H154.997C154.936 21.1677 154.63 20.5688 154.079 20.1222C153.528 19.6755 152.784 19.4522 151.846 19.4522C150.928 19.4522 150.224 19.6248 149.734 19.9699C149.245 20.315 149 20.7718 149 21.3403C149 21.7869 149.163 22.1625 149.489 22.4671C149.816 22.7716 150.214 23.0152 150.683 23.1979C151.152 23.3604 151.846 23.5735 152.764 23.8375C153.987 24.1623 154.987 24.4973 155.762 24.8424C156.558 25.1672 157.241 25.6545 157.812 26.3042C158.384 26.9538 158.679 27.8167 158.7 28.8927C158.7 29.8469 158.435 30.6996 157.904 31.4508C157.374 32.2019 156.619 32.7907 155.64 33.217C154.681 33.6434 153.549 33.8566 152.243 33.8566Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path
				d="M83.4777 14.9015C83.4777 16.2735 82.3602 17.3857 80.9817 17.3857C79.6031 17.3857 78.4856 16.2735 78.4856 14.9015C78.4856 13.5295 79.6031 12.4173 80.9817 12.4173C82.3602 12.4173 83.4777 13.5295 83.4777 14.9015Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_43_72231"
					x1="-5.14199"
					y1="15.148"
					x2="35.1957"
					y2="53.4671"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#F1C6FF" />
					<stop offset="0.104167" stop-color="#DD74FF" />
					<stop offset="0.352245" stop-color="#DD74FF" stop-opacity="0" />
					<stop offset="0.62022" stop-color="#4E032E" stop-opacity="0" />
					<stop offset="0.825426" stop-color="#3C17A7" />
					<stop offset="1" stop-color="#3687FF" />
				</linearGradient>
				<radialGradient
					id="paint1_radial_43_72231"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(51.1591 15.2989) rotate(138.744) scale(31.2464 31.2515)"
				>
					<stop stop-color="#00A3FF" />
					<stop offset="1" stop-color="#00A3FF" stop-opacity="0" />
				</radialGradient>
				<radialGradient
					id="paint2_radial_43_72231"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(-2.91103 29.7569) rotate(42.9991) scale(28.6895 28.728)"
				>
					<stop stop-color="#00A3FF" />
					<stop offset="1" stop-color="#0D1017" stop-opacity="0" />
				</radialGradient>
				<linearGradient
					id="paint3_linear_43_72231"
					x1="23.4169"
					y1="14.5226"
					x2="41.2576"
					y2="49.9689"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="white" />
					<stop offset="1" stop-color="#B7E1FF" stop-opacity="0.58" />
				</linearGradient>
			</defs>
		</svg>`}};Ot.styles=[we`
			:host {
				display: inline-block;
				vertical-align: middle;
			}

			:host-context(.vscode-high-contrast-light) .letters,
			:host-context(.vscode-light) .letters {
				fill: var(--color-foreground);
			}

			svg {
				vertical-align: middle;
			}
		`],Ot=((e,t,o,s)=>{for(var r,i=s>1?void 0:s?Ft(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(i=(s?r(t,o,i):r(i))||i);return s&&i&&Ht(t,o,i),i})([gt("gitlens-logo")],Ot);var Rt=Object.defineProperty,Zt=Object.getOwnPropertyDescriptor,Ut=(e,t,o,s)=>{for(var r,i=s>1?void 0:s?Zt(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(i=(s?r(t,o,i):r(i))||i);return s&&i&&Rt(t,o,i),i};let Tt=class extends lit_element_s{render(){return rt`
			<!-- Don't reformat or let prettier reformat the SVG otherwise whitespace will get added incorrect and screw up the positioning -->
			<!-- prettier-ignore -->
			<svg width="600" height="44" viewBox="0 0 600 42" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g class="line">
					<rect class="line-current" x="0" y="21" width="calc(100% - 1px)" height="21"></rect>
					<text y="14"><tspan x="7" class="line-number">12</tspan></text>
					<text y="36"><tspan x="7" class="line-number-active">13</tspan></text>
				</g>
				<g class="annotations-left">
					<rect class="gutter" x="28" y="0" width="242" height="100%"></rect>
					<g class="line">
						<g class="gutter-avatar">
							<circle cx="42" cy="9" r="7"></circle>
							<text x="42" y="11.5" text-anchor="middle">EA</text>
						</g>
						<text y="14"><tspan x="58" class="gutter-text">Hello GitLens</tspan><tspan x="274" dx="-12" text-anchor="end" class="gutter-text">6 yrs ago</tspan></text>
						<g class="gutter-avatar">
							<circle cx="42" cy="31" r="7"></circle>
							<text x="42" y="33.5" text-anchor="middle">EA</text>
						</g>
						<text y="36"><tspan x="58" class="gutter-text">Supercharged</tspan><tspan x="274" dx="-12" text-anchor="end" class="gutter-text">6 yrs ago</tspan></text>
					</g>
					<line class="heatmap" x1="270" y1="0" x2="270" y2="100%" />
				</g>
				<g class="annotations-right">
					<g class="line">
						<text y="14"><tspan x="278" class="function-declaration">function</tspan><tspan dx="6" class="function-name">gitlens</tspan><tspan class="punctuation">(</tspan><tspan class="function-argument">git</tspan><tspan class="punctuation">:</tspan><tspan dx="6" class="function-argument-type">object</tspan><tspan class="punctuation">)</tspan><tspan dx="6" class="punctuation">{</tspan></text>
						<text y="36"><tspan x="278" dx="24" class="function-return">return</tspan><tspan dx="6" class="function-name">supercharged</tspan><tspan class="punctuation">(</tspan><tspan class="function-argument">git</tspan><tspan class="punctuation">)</tspan><tspan class="punctuation">;</tspan><tspan class="cursor">|</tspan></text>
					</g>
				</g>
			</svg>
		`}};Tt.styles=we`
		:host > svg {
			display: block;
			max-width: 69.2rem;
			width: calc(100% - 2rem);
			height: auto;
			margin: 0 1rem;

			border: 0.1rem solid var(--vscode-editorWidget-border);
		}

		* {
			user-select: none;
		}

		.codicon {
			font-family: codicon;
			cursor: default;
			user-select: none;
		}

		.glicon {
			font-family: glicons;
			cursor: default;
			user-select: none;
		}

		.line text {
			font-family: var(--vscode-editor-font-family);
			font-size: var(--vscode-editor-font-size);
			font-weight: var(--vscode-editor-font-weight);
		}

		.cursor {
			fill: var(--vscode-editorCursor-foreground);
		}

		.splitter {
			stroke: var(--vscode-editorGroup-border);
		}

		.punctuation {
			fill: var(--vscode-editor-foreground);
		}

		.function-declaration {
			fill: var(--vscode-symbolIcon-functionForeground);
		}

		.function-name {
			fill: var(--vscode-symbolIcon-colorForeground);
		}

		.function-argument {
			fill: var(--vscode-symbolIcon-variableForeground);
		}

		.function-argument-type {
			fill: var(--vscode-symbolIcon-typeParameterForeground);
		}

		.function-return {
			fill: var(--vscode-debugTokenExpression-name);
		}

		.line-current {
			fill: var(--vscode-editor-lineHighlightBackground);
			stroke: var(--vscode-editor-lineHighlightBorder);
			stroke-width: 0.1rem;
			fill-opacity: 0.8;
		}

		.line-number {
			fill: var(--vscode-editorLineNumber-foreground);
		}

		.line-number-active {
			fill: var(--vscode-editorLineNumber-activeForeground);
		}

		.gutter {
			fill: var(--vscode-gitlens-gutterBackgroundColor);
		}

		.gutter-avatar circle {
			fill: var(--vscode-editorInfo-foreground);
		}
		.gutter-avatar text {
			fill: var(--vscode-gitlens-gutterForegroundColor);
			font-size: 0.75rem;
		}

		.gutter-text {
			fill: var(--vscode-gitlens-gutterForegroundColor);
		}

		.heatmap {
			stroke: #7162db;
		}

		.annotations-left {
			transition: opacity 150ms ease-in-out;
		}

		.annotations-right {
			transition: transform 150ms ease-in-out;
		}

		:host(:not([toggled])) .annotations-left {
			opacity: 0;
		}
		:host(:not([toggled])) .annotations-right {
			transform: translateX(-242px);
		}
	`,Ut([mt({type:Boolean,reflect:!0})],Tt.prototype,"toggled",2),Tt=Ut([gt("gk-annotations-svg")],Tt);var It=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,zt=(e,t,o,s)=>{for(var r,i=s>1?void 0:s?Vt(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(i=(s?r(t,o,i):r(i))||i);return s&&i&&It(t,o,i),i};let Gt=class extends lit_element_s{onMouseOver(){this.hovered=!0,this.hovering=this.inline}onMouseOut(){this.hovered=!0,this.hovering=!1}render(){return rt`
			<!-- Don't reformat or let prettier reformat the SVG otherwise whitespace will get added incorrect and screw up the positioning -->
			<!-- prettier-ignore -->
			<svg class="hover" width="600" height="177" viewBox="30 0 80 177" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect width="370" height="177" rx="3"></rect>
				<text x="9" y="41" text-anchor="start"><tspan class="codicon" font-size="32">&#xeb99;</tspan></text>
				<text>
					<tspan class="hover__author hover__link" x="52" y="30">You</tspan><tspan>, 6 years ago via PR&nbsp;</tspan><tspan class="hover__author hover__link">#1</tspan><tspan class="hover__date" dx="12">(November 12th, 2016 3:41pm)</tspan><tspan x="52" y="55">Supercharge Git</tspan>
				</text>

				<line x1="0" y1="70" x2="371" y2="70" />

				<text y="89">
					<tspan x="9" dy="1.5" class="codicon hover__link">&#xeafc;</tspan><tspan dx="2" dy="-1.5" class="hover__link">29ad3a0</tspan><tspan dx="9" opacity="0.6">|</tspan><tspan dx="9" dy="1.5" class="codicon hover__link">&#xeafd;</tspan><tspan dx="9" dy="-1.5" opacity="0.6">|</tspan><tspan dx="9" dy="1.5" class="codicon hover__link">&#xea82;</tspan><tspan dx="9" dy="-1.5" opacity="0.6">|</tspan><tspan dx="9" dy="1.5" class="codicon hover__link">&#xeb01;</tspan><tspan dx="9" dy="-1.5" opacity="0.6">|</tspan><tspan dx="9" dy="1.5" class="codicon hover__link">&#xea7c;</tspan>
				</text>

				<line x1="0" y1="99" x2="371" y2="99" />

				<text class="hover__diff">
					<tspan class="hover__diff-removed" x="9" y="119">- return git;</tspan>
					<tspan class="hover__diff-added" x="9" y="136">+ return supercharged(git);</tspan>
				</text>

				<line x1="0" y1="147" x2="371" y2="147" />

				<text y="166">
					<tspan x="9">Changes</tspan><tspan dx="12" dy="1.5" class="codicon hover__link">&#xeafc;</tspan><tspan dx="2" dy="-1.5" class="hover__link">3ac1d3f</tspan><tspan dx="9" dy="1.5" class="codicon">&#xea99;</tspan><tspan dx="6" class="codicon hover__link">&#xeafc;</tspan><tspan dx="2" dy="-1.5" class="hover__link">29ad3a0</tspan><tspan dx="9" opacity="0.6">|</tspan><tspan dx="9" dy="1.5" class="codicon hover__link">&#xeafd;</tspan>
				</text>
			</svg>

			<!-- Don't reformat or let prettier reformat the SVG otherwise whitespace will get added incorrect and screw up the positioning -->
			<!-- prettier-ignore -->
			<svg width="600" height="45" viewBox="0 0 600 43" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g class="codelens">
					<text y="18"><tspan x="38">Eric Amodio, 3 minutes ago | 1 author (Eric Amodio)</tspan></text>
				</g>
				<g class="line">
					<text y="34"><tspan x="7" class="line-number">13</tspan><tspan x="38" class="function-return">return</tspan><tspan dx="6" class="function-name">supercharged</tspan><tspan class="punctuation">(</tspan><tspan class="function-argument">git</tspan><tspan class="punctuation">)</tspan><tspan class="punctuation">;</tspan><tspan class="cursor">|</tspan><tspan dx="24" class="blame" @mouseover=${this.onMouseOver} @mouseout=${this.onMouseOut}>You, 6 years ago via PR #1 • Supercharge Git</tspan></text>
				</g>
				<!-- <g class="line">
					<text y="34"><tspan x="7" class="line-number">12</tspan><tspan x="38" class="function-declaration">function</tspan><tspan dx="6" class="function-name">gitlens</tspan><tspan class="punctuation">(</tspan><tspan class="function-argument">git</tspan><tspan class="punctuation">:</tspan><tspan dx="6" class="function-argument-type">object</tspan><tspan class="punctuation">)</tspan><tspan dx="6" class="punctuation">{</tspan><tspan class="cursor">|</tspan><tspan dx="24" class="blame" data-feature-blame="on">You, 6 years ago via PR #1 • Supercharge Git</tspan></text>
				</g> -->
			</svg>
		`}};Gt.styles=we`
		:host {
			position: relative;
		}

		:host svg:last-child {
			display: block;
			max-width: 69.2rem;
			width: calc(100% - 2rem);
			height: auto;
			margin: 0 1rem;

			border: 0.1rem solid var(--vscode-editorWidget-border);
		}

		* {
			user-select: none;
		}

		.codicon {
			font-family: codicon;
			cursor: default;
			user-select: none;
		}

		.glicon {
			font-family: glicons;
			cursor: default;
			user-select: none;
		}

		.line text {
			font-family: var(--vscode-editor-font-family);
			font-size: var(--vscode-editor-font-size);
			font-weight: var(--vscode-editor-font-weight);
		}

		.cursor {
			fill: var(--vscode-editorCursor-foreground);
		}

		.splitter {
			stroke: var(--vscode-editorGroup-border);
		}

		.punctuation {
			fill: var(--vscode-editor-foreground);
		}

		.function-declaration {
			fill: var(--vscode-symbolIcon-functionForeground);
		}

		.function-name {
			fill: var(--vscode-symbolIcon-colorForeground);
		}

		.function-argument {
			fill: var(--vscode-symbolIcon-variableForeground);
		}

		.function-argument-type {
			fill: var(--vscode-symbolIcon-typeParameterForeground);
		}

		.function-return {
			fill: var(--vscode-debugTokenExpression-name);
		}

		.line-current {
			fill: var(--vscode-editor-lineHighlightBackground);
			stroke: var(--vscode-editor-lineHighlightBorder);
			stroke-width: 0.1rem;
			fill-opacity: 0.8;
		}

		.line-number {
			fill: var(--vscode-editorLineNumber-foreground);
		}

		.line-number-active {
			fill: var(--vscode-editorLineNumber-activeForeground);
		}

		.blame {
			fill: var(--vscode-gitlens-trailingLineForegroundColor);
			cursor: pointer;
		}

		.codelens text {
			font-family: var(--vscode-font-family);
			font-size: var(--vscode-font-size);
			font-weight: var(--vscode-font-weight);

			fill: var(--vscode-editorCodeLens-foreground);
		}
		.codelens text tspan {
			font-size: 0.8em;
		}

		.hover {
			opacity: 0;
			visibility: hidden;
			position: absolute;
			bottom: 30px;
			right: -30px;
			animation-duration: 0.25s;
			animation-timing-function: ease-in-out;
			animation-fill-mode: both;
		}

		.hover rect {
			fill: var(--vscode-editorHoverWidget-background);
			stroke: var(--vscode-editorHoverWidget-border);
			stroke-width: 1;
		}

		.hover line {
			stroke: var(--vscode-editorHoverWidget-border);
			stroke-width: 1;
		}

		.hover text {
			font-family: var(--vscode-font-family);
			font-weight: var(--vscode-font-weight);
			font-size: 1.1rem;

			fill: var(--vscode-editorHoverWidget-foreground);
		}

		.hover__diff tspan {
			font-family: var(--vscode-editor-font-family);
			font-weight: var(--vscode-editor-font-weight);
			font-size: var(--vscode-editor-font-size);
		}

		.hover__diff-removed {
			fill: var(--vscode-gitDecoration-deletedResourceForeground);
		}

		.hover__diff-added {
			fill: var(--vscode-gitDecoration-addedResourceForeground);
		}

		.hover__author {
			font-weight: 700;
		}

		.hover__date {
			font-style: italic;
		}

		.hover__link {
			fill: #3794ff !important;
		}

		@keyframes fadeInHover {
			0% {
				opacity: 0;
				visibility: visible;
			}

			100% {
				opacity: 1;
				visibility: visible;
			}
		}

		@keyframes fadeOutHover {
			0% {
				opacity: 1;
				visibility: visible;
			}

			100% {
				opacity: 0;
				visibility: hidden;
			}
		}

		:host([hovered][hovering]) .hover {
			animation-name: fadeInHover;
		}

		:host([hovered]:not([hovering])) .hover {
			animation-name: fadeOutHover;
		}

		.blame,
		.codelens {
			transition: opacity 150ms ease-in-out;
		}

		:host(:not([inline])) .blame,
		:host(:not([codelens])) .codelens {
			cursor: default;
			opacity: 0;
		}
	`,zt([mt({type:Boolean,reflect:!0})],Gt.prototype,"inline",2),zt([mt({type:Boolean,reflect:!0})],Gt.prototype,"codelens",2),zt([mt({type:Boolean,reflect:!0})],Gt.prototype,"hovered",2),zt([mt({type:Boolean,reflect:!0})],Gt.prototype,"hovering",2),Gt=zt([gt("gk-blame-svg")],Gt);var Nt=Object.defineProperty,jt=Object.getOwnPropertyDescriptor,qt=(e,t,o,s)=>{for(var r,i=s>1?void 0:s?jt(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(i=(s?r(t,o,i):r(i))||i);return s&&i&&Nt(t,o,i),i};let Wt=class extends lit_element_s{onClick(e){switch(e.target.dataset.feature){case"annotations":{this.annotationsToggled=!this.annotationsToggled;const e=document.getElementById("annotations");e.toggled=!e.toggled;break}case"revision":{this.revisionToggled=!this.revisionToggled;const e=document.getElementById("revision");e.toggled=!e.toggled;break}}this.dispatchEvent(new CustomEvent("click"))}render(){return rt`
			<!-- Don't reformat or let prettier reformat the SVG otherwise whitespace will get added incorrect and screw up the positioning -->
			<!-- prettier-ignore -->
			<svg width="148" height="22" viewBox="-4 -3 147 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				${this.revision?it`<rect class="icon__revision-bg" x="-4" y="-2.5" width="24" height="20.5" rx="4"/>`:""}
				<text y="16" class="icon ${this.revision?"icon__revision active":"inactive"}">
					<tspan class="glicon">&#xf105;</tspan>
				</text>
				<text y="16" class="icon inactive">
					<tspan dx="25" class="glicon">&#xf101;</tspan><tspan dx="9" class="glicon">&#xf103;</tspan><tspan dx="32" class="codicon">&#xeb56;</tspan><tspan dx="9" class="codicon">&#xea7c;</tspan>
				</text>

				${this.annotationsToggled?it`<g class="icon icon__annotations">
						<circle cx="83" cy="8" r="7.5" />
						<path
							d="M84.2583 4.71315C84.4119 4.44544 84.4999 4.13329 84.4999 3.79998C84.4999 2.80588 83.7165 2 82.75 2C81.7835 2 81 2.80588 81 3.79998C81 4.62503 81.5397 5.32043 82.2757 5.53309V10.4669C81.5397 10.6796 81 11.375 81 12.2C81 13.1941 81.7835 14 82.75 14C83.7165 14 84.4999 13.1941 84.4999 12.2C84.4999 11.3747 83.96 10.6792 83.2236 10.4667V5.53326C83.3465 5.49782 83.4638 5.44893 83.5741 5.38824L85.2151 7.07621C85.1305 7.26617 85.0834 7.47746 85.0834 7.70007C85.0834 8.52849 85.7363 9.20005 86.5417 9.20005C87.3471 9.20005 88 8.52849 88 7.70007C88 6.87165 87.3471 6.20008 86.5417 6.20008C86.2988 6.20008 86.0697 6.26117 85.8683 6.36922L84.2583 4.71315Z"
						/>
				  </g>`:it`<text y="16" class="icon ${this.annotations?"icon__annotations":"inactive"}"><tspan dx="75" class="glicon">&#xf113;</tspan></text>`}

				${this.revision?it`<rect
						class="interactive"
						data-feature="revision"
						x="0"
						y="0"
						width="16"
						height="16"
						fill="transparent"
						stroke="none"
						@click=${this.onClick}
				  ></rect>`:""}
				${this.annotations?it`<rect
						class="interactive"
						data-feature="annotations"
						x="80"
						y="0"
						width="16"
						height="16"
						fill="transparent"
						stroke="none"
						@click=${this.onClick}
				  ></rect>`:""}
			</svg>
		`}};Wt.styles=we`
		:host > svg {
			display: block;
			max-width: 69.2rem;
			width: calc(100% - 2rem);
			height: auto;
			margin: 0 1rem;

			fill: var(--vscode-menu-background);
		}

		* {
			user-select: none;
		}

		.codicon {
			font-family: codicon;
			cursor: default;
			user-select: none;
		}

		.glicon {
			font-family: glicons;
			cursor: default;
			user-select: none;
		}

		.interactive {
			cursor: pointer;
		}

		.icon {
			fill: var(--vscode-icon-foreground);
			font-size: 16px;
		}

		.icon.active {
			fill: var(--color-foreground);
		}

		.icon.inactive {
			opacity: 0.6;
		}

		.icon__annotations circle {
			fill: #f05133;
			stroke: none;
		}

		.icon__annotations path {
			fill: var(--vscode-menu-background);
		}

		@keyframes wiggle {
			0%,
			8%,
			100% {
				transform: rotate(0) scale(1);
			}

			1%,
			4% {
				transform: rotate(0.02turn) scale(var(--wiggle-scale-1));
			}

			2%,
			6% {
				transform: rotate(-0.02turn) scale(var(--wiggle-scale-2));
			}
		}

		.icon__annotations {
			--wiggle-scale-1: 1.14;
			--wiggle-scale-2: 1.28;

			transform-origin: 60%;
			animation: wiggle 5s ease-in-out 2s infinite;
			animation-timing-function: steps(8);
		}

		.icon__revision {
			--wiggle-scale-1: 1.14;
			--wiggle-scale-2: 1.28;

			transform-origin: 5%;
			animation: wiggle 5s ease-in-out 4s infinite;
			animation-timing-function: steps(8);
		}

		:host([revision-toggled]) .icon__revision-bg {
			fill: var(--color-foreground);
			opacity: 0.2;
		}
		:host(:not([revision-toggled])) .icon__revision-bg {
			fill: none;
		}
	`,qt([mt({type:Boolean,reflect:!0})],Wt.prototype,"annotations",2),qt([mt({type:Boolean,reflect:!0})],Wt.prototype,"revision",2),qt([mt({type:Boolean,reflect:!0,attribute:"annotations-toggled"})],Wt.prototype,"annotationsToggled",2),qt([mt({type:Boolean,reflect:!0,attribute:"revision-toggled"})],Wt.prototype,"revisionToggled",2),Wt=qt([gt("gk-editor-toolbar-svg")],Wt);const Kt=we`
	:host {
		display: block;
		max-width: 69.2rem;
		width: calc(100% - 2rem);
		margin: 0 1rem 1.3rem;
	}
	:host > svg {
		width: 100%;
		height: auto;
		border: 0.1rem solid var(--vscode-editorWidget-border);
		fill: var(--vscode-editor-background);
	}

	* {
		user-select: none;
	}
`,Qt=we`
	.codicon {
		font-family: codicon;
		cursor: default;
		user-select: none;
	}

	.glicon {
		font-family: glicons;
		cursor: default;
		user-select: none;
	}
`;var Jt=Object.defineProperty,Xt=Object.getOwnPropertyDescriptor;let Yt=class extends lit_element_s{render(){return rt`
			<!-- Don't reformat or let prettier reformat the SVG otherwise whitespace will get added incorrect and screw up the positioning -->
			<!-- a-prettier-ignore -->
			<svg width="850" height="290" viewBox="0 0 850 290" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g>
					<text x="10" y="30" class="heading">
						<tspan>My Pull Requests</tspan>
					</text>
					<text x="100%" y="30.5" class="tabs" text-anchor="end">
						<tspan class="tab" dx="-10">All</tspan>
						<tspan class="tab" dx="6">Opened by me</tspan>
						<tspan class="tab" dx="6">Assigned to me</tspan>
						<tspan class="tab" dx="6">Needs my review</tspan>
						<tspan class="tab" dx="6">Mentions me</tspan>
					</text>
				</g>
				<g class="row">
					<rect x="0" y="52" width="100%" height="34" class="row-box" />
					<text x="10" y="75">
						<tspan dx="2" dy="2" class="codicon">&#xea64;</tspan>
						<tspan dx="2" class="codicon indicator-error">&#xeb43;</tspan>
						<tspan dx="30" dy="-2">1wk</tspan>
						<tspan dx="30">adds stylelint</tspan>
						<tspan class="link">#2453</tspan>
					</text>
					<text x="100%" y="75" text-anchor="end">
						<tspan dx="-10" dy="2" class="codicon">&#xeb99;</tspan>
						<tspan dx="40" dy="-2" class="addition">+1735</tspan>
						<tspan dx="2" class="deletion">-748</tspan>
						<tspan dx="40" dy="2" class="glicon">&#xf118;</tspan>
					</text>
				</g>
				<g class="row">
					<rect x="0" y="86" width="100%" height="34" class="row-box" />
					<text x="10" y="109">
						<tspan dx="2" dy="2" class="codicon">&#xea64;</tspan>
						<tspan dx="2" class="codicon indicator-info">&#xeba4;</tspan>
						<tspan dx="30" dy="-2">1wk</tspan>
						<tspan dx="30">Workspaces side bar view</tspan>
						<tspan class="link">#2650</tspan>
					</text>
					<text x="100%" y="109" text-anchor="end">
						<tspan dx="-10" dy="2" class="codicon">&#xeb99;</tspan>
						<tspan dx="40" dy="-2" class="addition">+3,556</tspan>
						<tspan dx="2" class="deletion">-136</tspan>
						<tspan dx="34" dy="2" class="glicon">&#xf118;</tspan>
					</text>
				</g>
				<g class="row">
					<rect x="0" y="120" width="100%" height="34" class="row-box" />
					<text x="10" y="143">
						<tspan dx="2" dy="2" class="codicon">&#xea64;</tspan>
						<tspan dx="2" class="codicon indicator-error">&#xebe6;</tspan>
						<tspan dx="30" dy="-2" class="indicator-warning">3wk</tspan>
						<tspan dx="29">Adds experimental.OpenAIModel</tspan>
						<tspan class="link">#2637</tspan>
					</text>
					<text x="100%" y="143" text-anchor="end">
						<tspan dx="-10" dy="2" class="codicon">&#xeb99;</tspan>
						<tspan dx="40" dy="-2" class="addition">+79</tspan>
						<tspan dx="2" class="deletion">-12</tspan>
						<tspan dx="72" dy="2" class="glicon">&#xf118;</tspan>
					</text>
				</g>
				<g class="row">
					<rect x="0" y="154" width="100%" height="34" class="row-box" />
					<text x="10" y="177">
						<tspan dx="2" dy="2" class="codicon">&#xea64;</tspan>
						<tspan dx="54" dy="-2" class="indicator-error">2mo</tspan>
						<tspan dx="29">adds focus view</tspan>
						<tspan class="link">#2516</tspan>
					</text>
					<text x="100%" y="177" text-anchor="end">
						<tspan dx="-10" dy="2" class="codicon">&#xeb99;</tspan>
						<tspan dx="39" dy="-2" class="addition">+3,327</tspan>
						<tspan dx="2" class="deletion">-28</tspan>
						<tspan dx="45" dy="2" class="glicon">&#xf118;</tspan>
					</text>
				</g>
				<g>
					<text x="10" y="232" class="heading">
						<tspan>My Issues</tspan>
					</text>
					<text x="100%" y="232.5" class="tabs" text-anchor="end">
						<tspan class="tab" dx="-10">All</tspan>
						<tspan class="tab" dx="6">Opened by me</tspan>
						<tspan class="tab" dx="6">Assigned to me</tspan>
						<tspan class="tab" dx="6">Mentions me</tspan>
					</text>
				</g>
				<g class="row">
					<rect x="0" y="255" width="100%" height="30" class="row-box" />
					<text x="10" y="278">
						<tspan dx="2" dy="2" class="codicon">&#xeb0c;</tspan>
						<tspan dx="54" dy="-2" class="indicator-error">2mo</tspan>
						<tspan dx="30">Labs: add AI explain panel to Commit Details</tspan>
						<tspan class="link">#2628</tspan>
					</text>
					<text x="100%" y="278" text-anchor="end">
						<tspan dx="-10" dy="2" class="codicon">&#xeb99;</tspan>
						<tspan dx="10" dy="0.5" class="codicon">&#xeb01;</tspan>
					</text>
				</g>
			</svg>
		`}};Yt.styles=[Kt,Qt,we`
			text {
				fill: var(--vscode-foreground);
				font-size: 18px;
			}
			.heading {
				font-weight: 600;
				font-size: 20px;
			}

			.codicon {
				font-family: codicon;
				cursor: default;
				user-select: none;
			}

			.glicon {
				font-family: glicons;
				cursor: default;
				user-select: none;
			}
			.indicator-info {
				fill: var(--vscode-problemsInfoIcon-foreground);
			}
			.indicator-warning {
				fill: var(--vscode-problemsWarningIcon-foreground);
			}
			.indicator-error {
				fill: var(--vscode-problemsErrorIcon-foreground);
			}
			.tabs {
			}
			.tab {
				text-decoration: underline;
				opacity: 0.8;
				font-size: 16px;
				cursor: pointer;
			}
			.row-box {
				fill: var(--vscode-foreground);
				opacity: 0;
			}
			.row:hover .row-box {
				opacity: 0.06;
			}
			.link {
				fill: var(--vscode-textLink-foreground);
				cursor: pointer;
			}
			.link:hover {
				text-decoration: underline;
			}
			.addition {
				fill: var(--vscode-gitDecoration-addedResourceForeground);
			}
			.deletion {
				fill: var(--vscode-gitDecoration-deletedResourceForeground);
			}
		`],Yt=((e,t,o,s)=>{for(var r,i=s>1?void 0:s?Xt(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(i=(s?r(t,o,i):r(i))||i);return s&&i&&Jt(t,o,i),i})([gt("gk-focus-svg")],Yt);var eo=Object.defineProperty,to=Object.getOwnPropertyDescriptor;let oo=class extends lit_element_s{render(){return rt`
			<!-- Don't reformat or let prettier reformat the SVG otherwise whitespace will get added incorrect and screw up the positioning -->
			<!-- prettier-ignore -->
			<svg width="850" height="290" viewBox="0 0 850 290" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect class="lane2-background" x="70" y="46" width="126" height="19" rx="4"/>
				<text class="branch branch-current" x="74" y="59"><tspan dy="1" class="codicon">&#xeab2;</tspan><tspan dx="4" class="codicon">&#xea7a;</tspan><tspan dx="6" dy="-1">main</tspan></text>

				<rect class="lane3-background" opacity="0.5" x="70" y="73" width="126" height="19" rx="4"/>
				<text class="branch" x="74" y="87"><tspan dy="1" class="codicon">&#xebaa;</tspan><tspan dx="4" class="codicon">&#xea64;</tspan><tspan dx="6" dy="-1">feature/onboard</tspan></text>

				<rect class="lane4-background" opacity="0.5" x="70" y="99" width="126" height="19" rx="4"/>
				<text class="branch" x="74" y="113"><tspan dy="1" class="codicon">&#xea7a;</tspan><tspan dx="4" class="codicon">&#xea64;</tspan><tspan dx="6" dy="-1">feature/graph</tspan></text>

				<rect class="lane5-background" opacity="0.5" x="70" y="237" width="126" height="19" rx="4"/>
				<text class="branch" x="74" y="251"><tspan dy="1" class="codicon">&#xea7a;</tspan><tspan dx="6" dy="-1">bug/crash</tspan></text>

				<rect class="lane1-background" opacity="0.2" x="216" y="20" width="128" height="18"/>
				<rect class="lane1-background" x="342" y="20" width="2" height="18"/>

				<line class="lane2-foreground" opacity="0.4" x1="196" y1="56" x2="230" y2="56" stroke-width="2"/>
				<rect class="lane2-background" opacity="0.2" x="238" y="47" width="106" height="18"/>
				<rect class="lane2-background" x="342" y="47" width="2" height="18"/>

				<rect class="lane2-background" opacity="0.2" x="238" y="128" width="106" height="18" />
				<rect class="lane2-background" x="342" y="128" width="2" height="18"/>

				<rect class="lane2-background" opacity="0.2" x="238" y="263" width="106" height="18"/>
				<rect class="lane2-background" x="342" y="263" width="2" height="18"/>

				<line class="lane3-foreground" opacity="0.4" x1="196" y1="83" x2="253" y2="83" stroke-width="2"/>
				<rect class="lane3-background" opacity="0.2" x="260" y="74" width="84" height="18"/>
				<rect class="lane3-background" x="342" y="74" width="2" height="18"/>

				<rect class="lane3-background" opacity="0.2" x="260" y="155" width="84" height="18"/>
				<rect class="lane3-background" x="342" y="155" width="2" height="18"/>

				<rect class="lane3-background" opacity="0.2" x="260" y="209" width="84" height="18"/>
				<rect class="lane3-background" x="342" y="209" width="2" height="18"/>

				<line class="lane4-foreground" opacity="0.4" x1="196" y1="109" x2="275" y2="109" stroke-width="2"/>
				<rect class="lane4-background" opacity="0.2" x="282" y="101" width="62" height="18"/>
				<rect class="lane4-background" x="342" y="101" width="2" height="18"/>

				<rect class="lane4-background" x="342" y="182" width="2" height="18"/>
				<rect class="lane4-background" opacity="0.2" x="282" y="182" width="62" height="18"/>

				<line class="lane5-foreground" opacity="0.3" x1="196" y1="246" x2="297" y2="246" stroke-width="2"/>
				<rect class="lane5-background" opacity="0.2" x="304" y="236" width="40" height="18"/>
				<rect class="lane5-background" x="342" y="236" width="2" height="18"/>
				<path class="lane5-foreground" d="M239 270.74H297C301.418 270.74 305 267.158 305 262.74V247" stroke-width="2"/>

				<line class="lane1-foreground" x1="217" y1="38" x2="217" y2="319" stroke-width="2" stroke-dasharray="4 4"/>
				<circle class="lane1-foreground container" cx="217" cy="29" r="8" stroke-width="2" stroke-dasharray="4 4"/>

				<rect class="lane2-background" x="238" y="47" width="2" height="332"/>
				<circle class="lane2-foreground container" cx="239" cy="56" r="8" stroke-width="2"/>
				<circle class="lane2-foreground container" cx="239" cy="137" r="8" stroke-width="2"/>
				<circle class="lane2-foreground container" cx="239" cy="271" r="8" stroke-width="2"/>

				<rect class="lane3-background" x="260" y="74" width="2" height="305"/>
				<circle class="lane3-foreground container" cx="261" cy="83" r="8" stroke-width="2"/>
				<circle class="lane3-foreground container" cx="261" cy="164" r="8" stroke-width="2"/>
				<circle class="lane3-foreground container" cx="261" cy="218" r="8" stroke-width="2"/>

				<rect class="lane4-background" x="282" y="106" width="2" height="209"/>
				<circle class="lane4-foreground container" cx="283" cy="110" r="8" stroke-width="2"/>
				<circle class="lane4-foreground container" cx="283" cy="191" r="8" stroke-width="2"/>

				<circle class="lane5-foreground container" cx="305" cy="245" r="8" stroke-width="2"/>

				<text x="366" y="33.5" class="foreground wip"><tspan>Work in progress</tspan><tspan dx="9" dy="1" class="codicon">&#xea73;</tspan><tspan dx="3" dy="-1">2</tspan><tspan dx="9" dy="1" class="codicon">&#xea60;</tspan><tspan dx="3" dy="-1">1</tspan></text>
				<text class="foreground messages">
					<tspan x="366" y="59.5">Improves performance &amp; reduces bundle size</tspan>
					<tspan x="366" y="86.5">Adds brand new welcome experience</tspan>
					<tspan x="366" y="113.5">Adds new Commit Graph panel layout</tspan>
					<tspan x="366" y="140.5">Optimizes startup performance</tspan>
					<tspan x="366" y="167.5">Revamps Home view experience for better utility</tspan>
					<tspan x="366" y="194.5">Optimizes Commit Graph loading performance</tspan>
					<tspan x="366" y="221.5">Adds new GitLens Inspect side bar for a better experience</tspan>
					<tspan x="366" y="248.5">Fixes crash when run on a phone</tspan>
					<tspan x="366" y="275.5">Updates package dependencies</tspan>
				</text>

				<text class="foreground authors">
					<tspan x="696" y="59.5">Eric Amodio</tspan>
					<tspan x="696" y="86.5">Keith Daulton</tspan>
					<tspan x="696" y="113.5">Eric Amodio</tspan>
					<tspan x="696" y="140.5">Ramin Tadayon</tspan>
					<tspan x="696" y="167.5">Keith Daulton</tspan>
					<tspan x="696" y="194.5">Eric Amodio</tspan>
					<tspan x="696" y="221.5">Keith Daulton</tspan>
					<tspan x="696" y="248.5">Ramin Tadayon</tspan>
					<tspan x="696" y="275.5">Ramin Tadayon</tspan>
				</text>
			</svg>
		`}};oo.styles=we`
		:host > svg {
			display: block;
			max-width: 69.2rem;
			width: calc(100% - 2rem);
			height: auto;
			margin: 0 1rem;

			border: 0.1rem solid var(--vscode-editorWidget-border);
			fill: var(--vscode-editor-background);
		}

		* {
			user-select: none;
		}

		text {
			font-family: var(--vscode-font-family);
			font-weight: var(--vscode-font-weight);
			font-size: 1.1rem;
		}

		.codicon {
			font-family: codicon;
			cursor: default;
			user-select: none;
		}

		.foreground {
			fill: var(--vscode-editor-foreground);
		}

		.branch {
			fill: white;
		}

		.branch-current {
			font-weight: 700 !important;
		}

		.messages {
			opacity: 0.7;
		}

		.authors {
			opacity: 0.45;
		}

		.wip {
			opacity: 0.45;
		}

		.lane1-foreground {
			stroke: var(--vscode-gitlens-graphLane1Color);
		}
		.lane1-background {
			fill: var(--vscode-gitlens-graphLane1Color);
		}

		.lane2-foreground {
			stroke: var(--vscode-gitlens-graphLane2Color);
		}
		.lane2-background {
			fill: var(--vscode-gitlens-graphLane2Color);
		}

		.lane3-foreground {
			stroke: var(--vscode-gitlens-graphLane3Color);
		}
		.lane3-background {
			fill: var(--vscode-gitlens-graphLane3Color);
		}

		.lane4-foreground {
			stroke: var(--vscode-gitlens-graphLane4Color);
		}
		.lane4-background {
			fill: var(--vscode-gitlens-graphLane4Color);
		}

		.lane5-foreground {
			stroke: var(--vscode-gitlens-graphLane5Color);
		}
		.lane5-background {
			fill: var(--vscode-gitlens-graphLane5Color);
		}
	`,oo=((e,t,o,s)=>{for(var r,i=s>1?void 0:s?to(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(i=(s?r(t,o,i):r(i))||i);return s&&i&&eo(t,o,i),i})([gt("gk-graph-svg")],oo);var no=Object.defineProperty,so=Object.getOwnPropertyDescriptor,ro=(e,t,o,s)=>{for(var r,i=s>1?void 0:s?so(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(i=(s?r(t,o,i):r(i))||i);return s&&i&&no(t,o,i),i};let io=class extends lit_element_s{render(){return rt`
			<!-- Don't reformat or let prettier reformat the SVG otherwise whitespace will get added incorrect and screw up the positioning -->
			<!-- prettier-ignore -->
			<svg width="600" height="44" viewBox="0 0 600 42" fill="none" xmlns="http://www.w3.org/2000/svg">
				<defs>
					<clipPath id="clip-left">
						<rect x="0" y="0" width="279" height="100%"></rect>
					</clipPath>
				</defs>

				<g class="revision-left">
					<rect class="removed-line" x="28" y="21" width="251" height="21"></rect>
					<rect class="added-line" x="311" y="21" width="309" height="21"></rect>
					<!-- <rect class="added-text" x="433" y="21" width="38" height="21"></rect> -->
					<rect class="line-current" x="0" y="21" width="calc(100% - 1px)" height="21"></rect>
					<g class="line line-left" style="clip-path: url(#clip-left)">
						<text y="14"><tspan x="7" class="line-number">12</tspan><tspan x="40" class="function-declaration">function</tspan><tspan dx="6" class="function-name">gitlens</tspan><tspan class="punctuation">(</tspan><tspan class="function-argument">git</tspan><tspan class="punctuation">:</tspan><tspan dx="6" class="function-argument-type">object</tspan><tspan class="punctuation">)</tspan><tspan dx="6" class="punctuation">{</tspan></text>
						<text y="36"><tspan x="7" class="line-number">13</tspan><tspan x="40" dx="24" class="function-return">return</tspan><tspan dx="6" class="function-name">supercharged</tspan><tspan class="punctuation">(</tspan><tspan class="function-argument">git</tspan><tspan class="punctuation">)</tspan><tspan class="punctuation">;</tspan></text>
					</g>
					<line class="splitter" x1="280" y1="0" x2="280" y2="100%" />
				</g>
				<g class="revision-right">
					<g class="line line-right">
						<text y="14"><tspan x="290" class="line-number">12</tspan><tspan x="323" class="function-declaration">function</tspan><tspan dx="6" class="function-name">gitlens</tspan><tspan class="punctuation">(</tspan><tspan class="function-argument">git</tspan><tspan class="punctuation">:</tspan><tspan dx="6" class="function-argument-type">object</tspan><tspan class="punctuation">)</tspan><tspan dx="6" class="punctuation">{</tspan></text>
						<text y="36"><tspan x="290" class="line-number-active">13</tspan><tspan x="323" dx="24" class="function-return">return</tspan><tspan dx="6" class="function-name"><tspan>super</tspan><tspan class="added-text">DuperC</tspan><tspan>harged</tspan></tspan><tspan class="punctuation">(</tspan><tspan class="function-argument">git</tspan><tspan class="punctuation">)</tspan><tspan class="punctuation">;</tspan><tspan class="cursor">|</tspan></text>
					</g>
				</g>
			</svg>
		`}};io.styles=we`
		:host > svg {
			display: block;
			max-width: 69.2rem;
			width: calc(100% - 2rem);
			height: auto;
			margin: 0 1rem;

			border: 0.1rem solid var(--vscode-editorWidget-border);
		}

		* {
			user-select: none;
		}

		.codicon {
			font-family: codicon;
			cursor: default;
			user-select: none;
		}

		.glicon {
			font-family: glicons;
			cursor: default;
			user-select: none;
		}

		.line text {
			font-family: var(--vscode-editor-font-family);
			font-size: var(--vscode-editor-font-size);
			font-weight: var(--vscode-editor-font-weight);
		}

		.cursor {
			fill: var(--vscode-editorCursor-foreground);
		}

		.punctuation {
			fill: var(--vscode-editor-foreground);
		}

		.function-declaration {
			fill: var(--vscode-symbolIcon-functionForeground);
		}

		.function-name {
			fill: var(--vscode-symbolIcon-colorForeground);
		}

		.function-argument {
			fill: var(--vscode-symbolIcon-variableForeground);
		}

		.function-argument-type {
			fill: var(--vscode-symbolIcon-typeParameterForeground);
		}

		.function-return {
			fill: var(--vscode-debugTokenExpression-name);
		}

		.line-current {
			fill: var(--vscode-editor-lineHighlightBackground);
			stroke: var(--vscode-editor-lineHighlightBorder);
			stroke-width: 0.1rem;
			fill-opacity: 0.8;
		}

		.line-number {
			fill: var(--vscode-editorLineNumber-foreground);
		}

		.line-number-active {
			fill: var(--vscode-editorLineNumber-activeForeground);
		}

		.splitter {
			stroke: var(--vscode-editorGroup-border);
		}

		.added-line {
			fill: var(--vscode-diffEditor-insertedLineBackground);
		}

		.removed-line {
			fill: var(--vscode-diffEditor-removedLineBackground);
		}

		.added-text {
			outline: 1px solid green;
			fill: green;
		}

		.revision-left {
			transition: opacity 150ms ease-in-out;
		}

		.revision-right {
			transition: transform 150ms ease-in-out;
		}

		:host(:not([toggled])) .revision-left {
			opacity: 0;
		}
		:host(:not([toggled])) .revision-right {
			transform: translateX(-283px);
		}
		:host(:not([toggled])) .revision-right .added-text {
			outline-color: transparent;
			fill: inherit;
		}
	`,ro([mt({type:Boolean,reflect:!0})],io.prototype,"toggled",2),io=ro([gt("gk-revision-navigation-svg")],io);var ao=Object.defineProperty,co=Object.getOwnPropertyDescriptor;let lo=class extends lit_element_s{render(){return rt`
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 850 290">
				<g class="additions">
					<line x1="39" x2="39" y1="278" y2="276" />
					<line x1="45" x2="45" y1="272" y2="265" />
					<line x1="99" x2="99" y1="264" y2="249" />
					<line x1="106" x2="106" y1="252" y2="225" />
					<line x1="161" x2="161" y1="272" y2="265" />
					<line x1="174" x2="174" y1="278" y2="276" />
					<line x1="228" x2="228" y1="272" y2="265" />
					<line x1="234" x2="234" y1="264" y2="249" />
					<line x1="288" x2="288" y1="278" y2="276" />
					<line x1="342" x2="342" y1="272" y2="265" />
					<line x1="350" x2="350" y1="172" y2="63" />
					<line x1="357" x2="357" y1="249" y2="218" />
					<line x1="364" x2="364" y1="266" y2="254" />
					<line x1="371" x2="371" y1="273" y2="266" />
					<line x1="378" x2="378" y1="273" y2="266" />
					<line x1="385" x2="385" y1="273" y2="266" />
					<line x1="440" x2="440" y1="249" y2="218" />
					<line x1="447" x2="447" y1="249" y2="218" />
					<line x1="454" x2="454" y1="264" y2="249" />
					<line x1="461" x2="461" y1="264" y2="249" />
					<line x1="468" x2="468" y1="273" y2="266" />
					<line x1="475" x2="475" y1="117" y2="20" />
					<line x1="482" x2="482" y1="273" y2="266" />
					<line x1="490" x2="490" y1="273" y2="266" />
					<line x1="497" x2="497" y1="204" y2="129" />
					<line x1="504" x2="504" y1="200" y2="120" />
					<line x1="511" x2="511" y1="200" y2="120" />
					<line x1="518" x2="518" y1="213" y2="145" />
					<line x1="525" x2="525" y1="252" y2="225" />
					<line x1="580" x2="580" y1="278" y2="276" />
					<line x1="587" x2="587" y1="273" y2="266" />
					<line x1="594" x2="594" y1="252" y2="225" />
					<line x1="601" x2="601" y1="247" y2="214" />
					<line x1="608" x2="608" y1="271" y2="263" />
					<line x1="615" x2="615" y1="274" y2="268" />
					<line x1="623" x2="623" y1="271" y2="263" />
					<line x1="677" x2="677" y1="264" y2="249" />
					<line x1="731" x2="731" y1="273" y2="266" />
					<line x1="739" x2="739" y1="252" y2="225" />
					<line x1="743" x2="743" y1="264" y2="249" />
					<line x1="751" x2="751" y1="224" y2="168" />
					<line x1="805" x2="805" y1="278" y2="276" />
				</g>
				<g class="deletions">
					<line x1="39" x2="39" y1="276" y2="289" />
					<line x1="45" x2="45" y1="270" y2="289" />
					<line x1="99" x2="99" y1="262" y2="289" />
					<line x1="106" x2="106" y1="250" y2="289" />
					<line x1="161" x2="161" y1="270" y2="289" />
					<line x1="174" x2="174" y1="276" y2="289" />
					<line x1="228" x2="228" y1="270" y2="289" />
					<line x1="234" x2="234" y1="262" y2="289" />
					<line x1="288" x2="288" y1="276" y2="289" />
					<line x1="342" x2="342" y1="270" y2="289" />
					<line x1="350" x2="350" y1="170" y2="289" />
					<line x1="357" x2="357" y1="249" y2="289" />
					<line x1="364" x2="364" y1="264" y2="289" />
					<line x1="371" x2="371" y1="271" y2="289" />
					<line x1="378" x2="378" y1="271" y2="289" />
					<line x1="385" x2="385" y1="271" y2="289" />
					<line x1="440" x2="440" y1="247" y2="289" />
					<line x1="447" x2="447" y1="247" y2="289" />
					<line x1="454" x2="454" y1="262" y2="289" />
					<line x1="461" x2="461" y1="262" y2="289" />
					<line x1="468" x2="468" y1="271" y2="289" />
					<line x1="475" x2="475" y1="115" y2="289" />
					<line x1="482" x2="482" y1="271" y2="289" />
					<line x1="490" x2="490" y1="271" y2="289" />
					<line x1="497" x2="497" y1="202" y2="289" />
					<line x1="504" x2="504" y1="198" y2="289" />
					<line x1="511" x2="511" y1="198" y2="289" />
					<line x1="518" x2="518" y1="211" y2="289" />
					<line x1="525" x2="525" y1="250" y2="289" />
					<line x1="580" x2="580" y1="276" y2="289" />
					<line x1="587" x2="587" y1="271" y2="289" />
					<line x1="594" x2="594" y1="250" y2="289" />
					<line x1="601" x2="601" y1="245" y2="289" />
					<line x1="608" x2="608" y1="269" y2="289" />
					<line x1="615" x2="615" y1="272" y2="289" />
					<line x1="623" x2="623" y1="269" y2="289" />
					<line x1="677" x2="677" y1="262" y2="289" />
					<line x1="731" x2="731" y1="271" y2="289" />
					<line x1="739" x2="739" y1="250" y2="289" />
					<line x1="743" x2="743" y1="262" y2="289" />
					<line x1="751" x2="751" y1="222" y2="289" />
					<line x1="805" x2="805" y1="276" y2="289" />
				</g>
				<g class="lane1">
					<line class="grid-line" x1="39" x2="809" y1="99" y2="99" />
					<circle cx="39" cy="99" r="4" />
					<circle cx="45" cy="99" r="8" />
					<circle cx="99" cy="99" r="17" />
					<circle cx="106" cy="99" r="29" />
					<circle cx="174" cy="99" r="4" />
					<circle cx="350" cy="99" r="96" />
					<circle cx="364" cy="99" r="12" />
					<circle cx="378" cy="99" r="8" />
					<circle cx="385" cy="99" r="8" />
					<circle cx="447" cy="99" r="32" />
					<circle cx="461" cy="99" r="17" />
					<circle cx="468" cy="99" r="8" />
					<circle cx="475" cy="99" r="100" />
					<circle cx="482" cy="99" r="8" />
					<circle cx="490" cy="99" r="8" />
					<circle cx="497" cy="99" r="67" />
					<circle cx="504" cy="99" r="71" />
					<circle cx="511" cy="99" r="71" />
					<circle cx="518" cy="99" r="61" />
					<circle cx="525" cy="99" r="29" />
					<circle cx="580" cy="99" r="4" />
					<circle cx="594" cy="99" r="29" />
					<circle cx="677" cy="99" r="17" />
					<circle cx="731" cy="99" r="8" />
					<circle cx="739" cy="99" r="29" />
				</g>
				<g class="lane2">
					<line class="grid-line" x1="39" x2="809" y1="154" y2="154" />
					<circle cx="161" cy="154" r="8" />
					<circle cx="228" cy="154" r="8" />
					<circle cx="234" cy="154" r="17" />
					<circle cx="288" cy="154" r="4" />
					<circle cx="342" cy="154" r="8" />
					<circle cx="357" cy="154" r="31" />
					<circle cx="371" cy="154" r="8" />
					<circle cx="385" cy="154" r="8" />
					<circle cx="440" cy="154" r="32" />
					<circle cx="454" cy="154" r="17" />
					<circle cx="587" cy="154" r="8" />
					<circle cx="601" cy="154" r="33" />
					<circle cx="608" cy="154" r="9" />
					<circle cx="615" cy="154" r="7" />
					<circle cx="623" cy="154" r="9" />
					<circle cx="743" cy="154" r="17" />
					<circle cx="751" cy="154" r="50" />
					<circle cx="805" cy="154" r="4" />
				</g>
			</svg>
		`}};lo.styles=we`
		:host {
			--color-lane1: #7101ff;
			--color-lane2: #f90;
		}

		:host > svg {
			display: block;
			max-width: 69.2rem;
			width: calc(100% - 2rem);
			height: auto;
			margin: 0 1rem;

			border: 0.1rem solid var(--vscode-editorWidget-border);
		}

		* {
			user-select: none;
		}

		.additions line {
			stroke: var(--vscode-gitlens-decorations-addedForegroundColor, #339e3e);
			stroke-width: 1.2;
		}

		.deletions line {
			stroke: var(--vscode-gitlens-decorations-deletedForegroundColor, #9e2716);
			stroke-width: 1.2;
		}

		.grid-line {
			stroke: var(--vscode-editorWidget-border, #474747);
			stroke-dasharray: 4.5 4.5;
		}

		.lane1 circle {
			fill: var(--color-lane1);
			opacity: 0.3;
		}

		.lane1 circle:hover {
			cursor: pointer;
			opacity: 0.8;
		}

		.lane2 circle {
			fill: var(--color-lane2);
			opacity: 0.3;
		}

		.lane2 circle:hover {
			cursor: pointer;
			opacity: 0.8;
		}

		:host-context(.vscode-light),
		:host-context(.vscode-high-contrast-light) {
			--color-lane1: #007acc;
			--color-lane2: #ea5c00;
		}
	`,lo=((e,t,o,s)=>{for(var r,i=s>1?void 0:s?co(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(i=(s?r(t,o,i):r(i))||i);return s&&i&&ao(t,o,i),i})([gt("gk-timeline-svg")],lo);var ho=Object.defineProperty,po=Object.getOwnPropertyDescriptor;let fo=class extends lit_element_s{render(){return rt`
			<!-- Don't reformat or let prettier reformat the SVG otherwise whitespace will get added incorrect and screw up the positioning -->
			<!-- a-prettier-ignore -->
			<svg width="850" height="290" viewBox="0 0 850 290" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g>
					<rect x="0" y="0" width="100%" height="44" class="header-box" />
					<text x="10" y="28" class="header">
						<tspan dy="4" class="codicon">&#xeab4;</tspan>
						<tspan dx="6" dy="-4">GITKRAKEN WORKSPACES</tspan>
					</text>
				</g>
				<g class="row">
					<rect x="0" y="45" width="100%" height="44" class="row-box-selected" />
					<text x="30" y="71" class="selected">
						<tspan dx="2" dy="4" class="codicon">&#xeab4;</tspan>
						<tspan dx="24" class="codicon">&#xebaa;</tspan>
						<tspan dx="10" dy="-4">Client apps</tspan>
					</text>
					<text x="100%" y="71" text-anchor="end" class="selected">
						<tspan dx="-10" dy="4" class="codicon">&#xea60;</tspan>
						<tspan dx="12" class="codicon">&#xeb1a;</tspan>
						<tspan dx="12" class="codicon">&#xeae4;</tspan>
					</text>
				</g>
				<g class="row">
					<rect x="0" y="90" width="100%" height="44" class="row-box" />
					<text x="50" y="116">
						<tspan dx="2" dy="4" class="codicon">&#xeab6;</tspan>
						<tspan dx="24" class="codicon">&#xea83;</tspan>
						<tspan dx="10" dy="-4">vscode-gitlens</tspan>
						<tspan dx="4" class="small">0</tspan>
						<tspan dx="-8" dy="6" class="codicon">&#xea9d;</tspan>
						<tspan dx="-4" dy="-6" class="small">1</tspan>
						<tspan dx="-8" dy="6" class="codicon">&#xeaa0;</tspan>
						<tspan dx="-3" dy="-6" class="desc">•</tspan>
						<tspan dx="1" dy="0" class="desc">main</tspan>
						<tspan dx="1" dy="0" class="desc">•</tspan>
						<tspan dx="1" dy="0" class="desc">Last fetched 6/9/23</tspan>
					</text>
					<text x="100%" y="116" text-anchor="end" class="row-actions">
						<tspan dx="-10" dy="4" class="codicon">&#xeaa1;</tspan>
						<tspan dx="12" class="codicon">&#xea9a;</tspan>
						<tspan dx="12" class="codicon">&#xeb37;</tspan>
						<tspan dx="12" class="codicon">&#xeae4;</tspan>
					</text>
				</g>
				<g class="row">
					<rect x="0" y="135" width="100%" height="44" class="row-box" />
					<text x="50" y="162">
						<tspan dx="2" dy="4" class="codicon">&#xeab6;</tspan>
						<tspan dx="24" class="codicon">&#xea83;</tspan>
						<tspan dx="10" dy="-4">GitKraken</tspan>
						<tspan dx="4" class="small">1</tspan>
						<tspan dx="-8" dy="6" class="codicon">&#xea9d;</tspan>
						<tspan dx="-4" dy="-6" class="small">0</tspan>
						<tspan dx="-8" dy="6" class="codicon">&#xeaa0;</tspan>
						<tspan dx="-3" dy="-6" class="desc">•</tspan>
						<tspan dx="1" dy="0" class="desc">development</tspan>
						<tspan dx="1" dy="0" class="desc">•</tspan>
						<tspan dx="1" dy="0" class="desc">Last fetched 6/7/23</tspan>
					</text>
					<text x="100%" y="162" text-anchor="end" class="row-actions">
						<tspan dx="-10" dy="4" class="codicon">&#xeaa1;</tspan>
						<tspan dx="12" class="codicon">&#xea9a;</tspan>
						<tspan dx="12" class="codicon">&#xeb37;</tspan>
						<tspan dx="12" class="codicon">&#xeae4;</tspan>
					</text>
				</g>
				<g class="row">
					<rect x="0" y="179" width="100%" height="44" class="row-box" />
					<text x="30" y="209">
						<tspan dx="2" dy="4" class="codicon">&#xeab6;</tspan>
						<tspan dx="24" class="codicon">&#xebaa;</tspan>
						<tspan dx="10" dy="-4">Backend services</tspan>
					</text>
					<text x="100%" y="209" text-anchor="end" class="row-actions">
						<tspan dx="-10" dy="4" class="codicon">&#xea60;</tspan>
						<tspan dx="12" class="codicon">&#xeb1a;</tspan>
						<tspan dx="12" class="codicon">&#xeae4;</tspan>
					</text>
				</g>
				<g class="row">
					<rect x="0" y="223" width="100%" height="44" class="row-box" />
					<text x="30" y="253">
						<tspan dx="2" dy="4" class="codicon">&#xeab6;</tspan>
						<tspan dx="24" class="codicon">&#xebaa;</tspan>
						<tspan dx="10" dy="-4">Open source projects</tspan>
					</text>
					<text x="100%" y="253" text-anchor="end" class="row-actions">
						<tspan dx="-10" dy="4" class="codicon">&#xea60;</tspan>
						<tspan dx="12" class="codicon">&#xeb1a;</tspan>
						<tspan dx="12" class="codicon">&#xeae4;</tspan>
					</text>
				</g>
			</svg>
		`}};fo.styles=[Kt,Qt,we`
			text {
				fill: var(--vscode-foreground);
				font-size: 18px;
			}
			.header {
				font-weight: 700;
			}

			.codicon {
				font-family: codicon;
				cursor: default;
				user-select: none;
				font-size: 20px;
			}

			.glicon {
				font-family: glicons;
				cursor: default;
				user-select: none;
			}
			.desc {
				font-size: 0.9em;
				opacity: 0.6;
			}
			.small {
				font-size: 0.9em;
			}
			.header-box {
				fill: var(--vscode-sideBarSectionHeader-background);
			}
			.row-box {
				fill: var(--vscode-list-hoverBackground);
				opacity: 0;
			}
			.row {
				cursor: pointer;
			}
			.row:hover .row-box {
				opacity: 1;
			}
			.row-box-selected {
				fill: var(--vscode-list-activeSelectionBackground);
				stroke: var(--vscode-list-focusOutline);
				stroke-width: 1;
			}
			.selected {
				fill: var(--vscode-list-activeSelectionForeground);
			}
			.row:not(:hover) .row-actions {
				display: none;
			}
			.link {
				fill: var(--vscode-textLink-foreground);
			}
			.link:hover {
				text-decoration: underline;
			}
			.addition {
				fill: var(--vscode-gitDecoration-addedResourceForeground);
			}
			.deletion {
				fill: var(--vscode-gitDecoration-deletedResourceForeground);
			}
		`],fo=((e,t,o,s)=>{for(var r,i=s>1?void 0:s?po(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(i=(s?r(t,o,i):r(i))||i);return s&&i&&ho(t,o,i),i})([gt("gk-workspaces-svg")],fo);var bo=Object.defineProperty,uo=Object.getOwnPropertyDescriptor;let go=class extends lit_element_s{render(){return rt`
			<a
				class="video-button"
				href="https://www.youtube.com/watch?v=UQPb73Zz9qk"
				aria-label="Watch the Tutorial video"
				title="Watch the Tutorial video"
			>
				<!-- Don't reformat or let prettier reformat the SVG otherwise whitespace will get added incorrect and screw up the positioning -->
				<!-- prettier-ignore -->
				<svg class="background background--light" width="235" height="110" viewBox="0 0 235 110" fill="none" xmlns="http://www.w3.org/2000/svg">
					<mask id="mask0_332_69519" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="235" height="110">
						<path d="M0 5.61224C0 2.51269 1.21493 0 2.71363 0H232.286C233.785 0 235 2.51269 235 5.61224V104.388C235 107.487 233.785 110 232.286 110H2.71362C1.21493 110 0 107.487 0 104.388V5.61224Z" fill="#110013"/>
					</mask>
					<g mask="url(#mask0_332_69519)">
						<path d="M0 6.73469C0 3.01522 1.45792 0 3.25635 0H231.744C233.542 0 235 3.01523 235 6.73469V103.265C235 106.985 233.542 110 231.744 110H3.25635C1.45792 110 0 106.985 0 103.265V6.73469Z" fill="white" class="background__base"/>
						<g opacity="0.3" filter="url(#filter0_f_332_69519)">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M18.7112 19.7739C18.8604 20.9461 18.7853 22.071 18.5987 23.0202C18.5392 23.3231 18.5072 23.64 18.5072 23.9693C18.5072 25.723 19.4319 27.2654 20.8448 28.1277C21.5546 28.5609 22.3035 29.1432 22.985 29.869C23.59 29.2757 24.3104 28.8165 25.0845 28.5252C25.8681 28.2302 26.7192 28.1011 27.5701 28.1524C27.6001 27.1475 27.7755 26.2057 28.022 25.4057C28.16 24.958 28.2361 24.4773 28.2361 23.9693C28.2361 21.2828 26.0582 19.1049 23.3716 19.1049C22.8637 19.1049 22.383 19.181 21.9353 19.319C21.0097 19.6042 19.8944 19.7942 18.7112 19.7739ZM23.3392 72.9228C22.5692 73.8363 21.6799 74.5524 20.8448 75.062C19.4319 75.9244 18.5072 77.4668 18.5072 79.2205C18.5072 81.907 20.6851 84.0849 23.3716 84.0849C26.0582 84.0849 28.2361 81.907 28.2361 79.2205C28.2361 77.4492 27.2925 75.8931 25.8559 75.0364C25.0157 74.5353 24.119 73.828 23.3392 72.9228ZM31.4566 44.4275V66.4411C35.6751 69.1141 38.4925 73.8358 38.4925 79.2205C38.4925 87.5715 31.7227 94.3413 23.3716 94.3413C15.0206 94.3413 8.25077 87.5715 8.25077 79.2205C8.25077 73.8911 11.0109 69.2109 15.1571 66.5241V36.6657C11.0109 33.9789 8.25077 29.2986 8.25077 23.9693C8.25077 23.1088 8.32317 22.2615 8.4632 21.4341L-9.56448 3.40645C-20.8419 13.6419 -27.9117 28.4028 -27.9117 44.8199C-27.9117 75.6989 -2.87935 100.731 27.9997 100.731C58.8787 100.731 83.911 75.6989 83.911 44.8199C83.911 13.9409 58.8787 -11.0915 27.9997 -11.0915C19.458 -11.0915 11.3751 -9.17948 4.1447 -5.76306L19.3094 9.40169C20.6074 9.04025 21.971 8.84845 23.3716 8.84845C31.7227 8.84845 38.4925 15.6183 38.4925 23.9693C38.4925 25.3699 38.3007 26.7336 37.9393 28.0316L47.9921 38.0844C49.2391 37.7529 50.5449 37.5775 51.8842 37.5775C60.2353 37.5775 67.0051 44.3473 67.0051 52.6984C67.0051 61.0494 60.2353 67.8192 51.8842 67.8192C43.5332 67.8192 36.7634 61.0494 36.7634 52.6984C36.7634 51.7738 36.847 50.8646 37.0081 49.979L31.4566 44.4275ZM37.0893 49.5576C37.0896 49.5562 37.0896 49.5587 37.0888 49.5652C37.0889 49.561 37.0892 49.5585 37.0893 49.5576ZM47.5581 38.2039C47.5581 38.2037 47.5609 38.2032 47.5666 38.2028C47.561 38.2038 47.5581 38.204 47.5581 38.2039ZM37.8142 28.4667C37.8141 28.4665 37.8143 28.4636 37.8153 28.4582C37.8149 28.4641 37.8143 28.4669 37.8142 28.4667ZM18.8743 9.52677C18.8743 9.52661 18.8772 9.52609 18.8828 9.52562C18.8771 9.5267 18.8742 9.52693 18.8743 9.52677ZM8.53867 21.0149C8.53885 21.0142 8.53882 21.0168 8.5381 21.0227C8.53825 21.018 8.53853 21.0154 8.53867 21.0149ZM15.5273 36.9003C15.5266 36.8999 15.5245 36.8983 15.521 36.8952C15.5263 36.899 15.5283 36.9009 15.5273 36.9003ZM15.5275 66.2893C15.5277 66.2893 15.5256 66.2912 15.521 66.2946C15.5251 66.291 15.5273 66.2893 15.5275 66.2893ZM31.0819 66.2088C31.0821 66.2088 31.0844 66.2105 31.0885 66.2141C31.0837 66.2106 31.0816 66.2087 31.0819 66.2088ZM47.2774 48.4486C48.4585 48.4828 49.574 48.3057 50.5018 48.0317C50.9339 47.9041 51.3964 47.8339 51.8842 47.8339C54.5708 47.8339 56.7487 50.0118 56.7487 52.6984C56.7487 55.3849 54.5708 57.5628 51.8842 57.5628C49.1977 57.5628 47.0198 55.3849 47.0198 52.6984C47.0198 52.3477 47.0561 52.011 47.1233 51.69C47.3216 50.7441 47.4105 49.6212 47.2774 48.4486ZM-47 45C-47 3.57864 -13.4214 -30 28 -30C69.4214 -30 103 3.57864 103 45C103 86.4214 69.4214 120 28 120C-13.4214 120 -47 86.4214 -47 45Z" fill="#9C00FF"/>
						</g>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M24 117.171C63.8592 117.171 96.1714 84.8592 96.1714 45C96.1714 5.14084 63.8592 -27.1714 24 -27.1714C-15.8592 -27.1714 -48.1714 5.14084 -48.1714 45C-48.1714 84.8592 -15.8592 117.171 24 117.171ZM24 119C64.8691 119 98 85.8691 98 45C98 4.13093 64.8691 -29 24 -29C-16.8691 -29 -50 4.13093 -50 45C-50 85.8691 -16.8691 119 24 119ZM23.9996 109.455C59.7026 109.455 88.6456 80.5122 88.6456 44.8092C88.6456 9.10626 59.7026 -19.8367 23.9996 -19.8367C12.9548 -19.8367 2.55693 -17.0669 -6.53731 -12.184C-8.46031 -11.1515 -8.75328 -8.56997 -7.20991 -7.0266L11.6367 11.82C12.7504 12.9337 14.4725 13.0751 15.9777 12.6113C16.9641 12.3073 18.012 12.1437 19.0982 12.1437C24.9431 12.1437 29.6813 16.8819 29.6813 22.7268C29.6813 23.8129 29.5176 24.8609 29.2137 25.8473C28.7499 27.3525 28.8912 29.0746 30.0049 30.1883L42.007 42.1904C43.1066 43.29 44.8018 43.4424 46.2931 43.002C47.2449 42.721 48.2525 42.5701 49.2954 42.5701C55.1403 42.5701 59.8785 47.3083 59.8785 53.1532C59.8785 58.9981 55.1403 63.7363 49.2954 63.7363C43.4505 63.7363 38.7123 58.9981 38.7123 53.1532C38.7123 52.4052 38.7899 51.6752 38.9375 50.9711C39.2291 49.58 39.0107 48.0627 38.0057 47.0577L23.7755 32.8275C23.527 32.579 23.1541 32.5112 22.8252 32.6349V32.6349C22.4757 32.7664 22.2296 33.0935 22.2296 33.4669V68.627C22.2296 70.1153 23.2327 71.384 24.511 72.1463C27.6073 73.9928 29.6813 77.3753 29.6813 81.2423C29.6813 87.0872 24.9431 91.8254 19.0982 91.8254C13.2533 91.8254 8.51513 87.0872 8.51513 81.2423C8.51513 77.4141 10.5478 74.0606 13.5927 72.2022C14.8484 71.4358 15.8295 70.1774 15.8295 68.7062V35.2628C15.8295 33.7917 14.8484 32.5333 13.5927 31.7669C10.5478 29.9085 8.51513 26.555 8.51513 22.7268C8.51513 22.0245 8.58354 21.3381 8.71407 20.674C8.98424 19.2995 8.75703 17.809 7.76649 16.8185L-13.3452 -4.29319C-14.5522 -5.50015 -16.4744 -5.63034 -17.7765 -4.52668C-31.7665 7.33144 -40.6463 25.0333 -40.6463 44.8092C-40.6463 80.5122 -11.7033 109.455 23.9996 109.455ZM23.9996 111.284C60.7125 111.284 90.4742 81.5221 90.4742 44.8092C90.4742 8.09635 60.7125 -21.6653 23.9996 -21.6653C-12.7133 -21.6653 -42.4749 8.09635 -42.4749 44.8092C-42.4749 81.5221 -12.7133 111.284 23.9996 111.284Z" fill="url(#paint0_linear_332_69519)"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M96.8503 45C96.8503 85.2341 64.2341 117.85 24 117.85C-16.2341 117.85 -48.8503 85.2341 -48.8503 45C-48.8503 4.7659 -16.2341 -27.8503 24 -27.8503C64.2341 -27.8503 96.8503 4.7659 96.8503 45ZM24 118.321C64.4941 118.321 97.3211 85.4941 97.3211 45C97.3211 4.50588 64.4941 -28.3211 24 -28.3211C-16.4941 -28.3211 -49.3211 4.50588 -49.3211 45C-49.3211 85.4941 -16.4941 118.321 24 118.321ZM89.3245 44.8092C89.3245 80.8872 60.0776 110.134 23.9996 110.134C-12.0783 110.134 -41.3252 80.8872 -41.3252 44.8092C-41.3252 24.8255 -32.3511 6.93703 -18.2154 -5.04456C-16.6289 -6.38932 -14.3079 -6.21595 -12.8651 -4.77324L8.24654 16.3384C9.45024 17.5421 9.67716 19.2942 9.38022 20.805C9.25813 21.4261 9.19403 22.0686 9.19403 22.7268C9.19403 26.3086 11.095 29.4471 13.9463 31.1874C15.3246 32.0285 16.5084 33.4748 16.5084 35.2628V68.7062C16.5084 70.4942 15.3246 71.9405 13.9463 72.7817C11.095 74.5219 9.19403 77.6604 9.19403 81.2423C9.19403 86.7122 13.6283 91.1465 19.0982 91.1465C24.5681 91.1465 29.0024 86.7122 29.0024 81.2423C29.0024 77.6242 27.0627 74.4585 24.1633 72.7294C22.761 71.8931 21.5507 70.436 21.5507 68.627V33.4669C21.5507 32.7862 21.9958 32.2217 22.5861 31.9995C23.1455 31.789 23.8048 31.8967 24.2555 32.3474L38.4858 46.5777C39.7071 47.799 39.9223 49.5822 39.602 51.1103C39.4639 51.769 39.3912 52.4522 39.3912 53.1532C39.3912 58.6231 43.8255 63.0574 49.2954 63.0574C54.7653 63.0574 59.1996 58.6231 59.1996 53.1532C59.1996 47.6833 54.7653 43.249 49.2954 43.249C48.3183 43.249 47.3754 43.3903 46.4854 43.6531C44.8524 44.1353 42.8638 44.0073 41.527 42.6705L29.5249 30.6684C28.1708 29.3143 28.0573 27.2947 28.5649 25.6474C28.8491 24.725 29.0024 23.7444 29.0024 22.7268C29.0024 17.2569 24.5681 12.8226 19.0982 12.8226C18.0806 12.8226 17.1 12.9759 16.1776 13.2601C14.5303 13.7677 12.5107 13.6542 11.1566 12.3001L-7.68997 -6.54654C-9.53113 -8.38771 -9.21186 -11.5185 -6.85846 -12.7821C2.3321 -17.7168 12.84 -20.5156 23.9996 -20.5156C60.0776 -20.5156 89.3245 8.73132 89.3245 44.8092ZM23.9996 110.605C60.3376 110.605 89.7953 81.1472 89.7953 44.8092C89.7953 8.47129 60.3376 -20.9864 23.9996 -20.9864C-12.3383 -20.9864 -41.796 8.47129 -41.796 44.8092C-41.796 81.1472 -12.3383 110.605 23.9996 110.605ZM96.1714 45C96.1714 84.8592 63.8592 117.171 24 117.171C-15.8592 117.171 -48.1714 84.8592 -48.1714 45C-48.1714 5.14084 -15.8592 -27.1714 24 -27.1714C63.8592 -27.1714 96.1714 5.14084 96.1714 45ZM98 45C98 85.8691 64.8691 119 24 119C-16.8691 119 -50 85.8691 -50 45C-50 4.13093 -16.8691 -29 24 -29C64.8691 -29 98 4.13093 98 45ZM88.6456 44.8092C88.6456 80.5122 59.7026 109.455 23.9996 109.455C-11.7033 109.455 -40.6463 80.5122 -40.6463 44.8092C-40.6463 25.0333 -31.7665 7.33144 -17.7765 -4.52668C-16.4744 -5.63034 -14.5522 -5.50014 -13.3452 -4.29319L7.76649 16.8185C8.75703 17.809 8.98424 19.2995 8.71407 20.674C8.58354 21.3381 8.51513 22.0245 8.51513 22.7268C8.51513 26.555 10.5478 29.9085 13.5927 31.7669C14.8484 32.5333 15.8295 33.7917 15.8295 35.2628V68.7062C15.8295 70.1774 14.8484 71.4358 13.5927 72.2022C10.5478 74.0606 8.51513 77.4141 8.51513 81.2423C8.51513 87.0872 13.2533 91.8254 19.0982 91.8254C24.9431 91.8254 29.6813 87.0872 29.6813 81.2423C29.6813 77.3754 27.6073 73.9928 24.511 72.1463C23.2327 71.384 22.2296 70.1153 22.2296 68.627V33.4669C22.2296 33.0935 22.4757 32.7664 22.8252 32.6349C23.1541 32.5112 23.527 32.579 23.7755 32.8275L38.0057 47.0577C39.0107 48.0627 39.2291 49.58 38.9375 50.9711C38.7899 51.6752 38.7123 52.4052 38.7123 53.1532C38.7123 58.9981 43.4505 63.7363 49.2954 63.7363C55.1403 63.7363 59.8785 58.9981 59.8785 53.1532C59.8785 47.3083 55.1403 42.5701 49.2954 42.5701C48.2525 42.5701 47.2449 42.721 46.2931 43.002C44.8018 43.4424 43.1066 43.29 42.007 42.1904L30.0049 30.1883C28.8912 29.0746 28.7499 27.3524 29.2137 25.8473C29.5176 24.8609 29.6813 23.8129 29.6813 22.7268C29.6813 16.8819 24.9431 12.1437 19.0982 12.1437C18.012 12.1437 16.9641 12.3073 15.9777 12.6113C14.4725 13.0751 12.7504 12.9337 11.6367 11.82L-7.20991 -7.0266C-8.75328 -8.56997 -8.46031 -11.1515 -6.53731 -12.184C2.55694 -17.0669 12.9548 -19.8367 23.9996 -19.8367C59.7026 -19.8367 88.6456 9.10626 88.6456 44.8092ZM90.4742 44.8092C90.4742 81.5221 60.7125 111.284 23.9996 111.284C-12.7133 111.284 -42.4749 81.5221 -42.4749 44.8092C-42.4749 8.09635 -12.7133 -21.6653 23.9996 -21.6653C60.7125 -21.6653 90.4742 8.09635 90.4742 44.8092Z" fill="url(#paint1_linear_332_69519)"/>
					</g>
					<defs>
						<filter id="filter0_f_332_69519" x="-77" y="-60" width="210" height="210" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
							<feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_332_69519"/>
						</filter>
						<linearGradient id="paint0_linear_332_69519" x1="5.33026" y1="4.26604" x2="45.5" y2="116" gradientUnits="userSpaceOnUse">
							<stop stop-color="#9C00FF"/>
							<stop offset="0.794921" stop-color="#9C00FF" stop-opacity="0.2"/>
							<stop offset="0.896965" stop-color="#9C00FF" stop-opacity="0"/>
						</linearGradient>
						<linearGradient id="paint1_linear_332_69519" x1="88.4954" y1="3.2477" x2="5.6697" y2="89.4679" gradientUnits="userSpaceOnUse">
							<stop stop-color="#9C00FF"/>
							<stop offset="1" stop-color="#9C00FF" stop-opacity="0"/>
						</linearGradient>
					</defs>
				</svg>
				<!-- Don't reformat or let prettier reformat the SVG otherwise whitespace will get added incorrect and screw up the positioning -->
				<!-- prettier-ignore -->
				<svg class="background background--dark" width="235" height="110" viewBox="0 0 235 110" fill="none" xmlns="http://www.w3.org/2000/svg">
					<mask id="mask0_338_69533" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="235" height="110">
						<path d="M0 5.61224C0 2.51269 1.21493 0 2.71363 0H232.286C233.785 0 235 2.51269 235 5.61224V104.388C235 107.487 233.785 110 232.286 110H2.71362C1.21493 110 0 107.487 0 104.388V5.61224Z" fill="#110013"/>
					</mask>
					<g mask="url(#mask0_338_69533)">
						<!-- <path d="M0 6.73469C0 3.01522 1.45792 0 3.25635 0H231.744C233.542 0 235 3.01523 235 6.73469V103.265C235 106.985 233.542 110 231.744 110H3.25635C1.45792 110 0 106.985 0 103.265V6.73469Z" fill="black"/> -->
						<path d="M0 6.73469C0 3.01522 1.45792 0 3.25635 0H231.744C233.542 0 235 3.01523 235 6.73469V103.265C235 106.985 233.542 110 231.744 110H3.25635C1.45792 110 0 106.985 0 103.265V6.73469Z" fill="#2B2B2B" class="background__base" />
						<g opacity="0.5" filter="url(#filter0_f_338_69533)">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M14.2158 18.4285C14.373 19.6632 14.2938 20.8481 14.0973 21.8479C14.0346 22.167 14.0009 22.5008 14.0009 22.8477C14.0009 24.6949 14.9749 26.3195 16.4632 27.2279C17.2108 27.6842 17.9997 28.2975 18.7175 29.062C19.3547 28.4371 20.1136 27.9534 20.929 27.6465C21.7544 27.3359 22.6509 27.1999 23.5472 27.2538C23.5788 26.1953 23.7635 25.2034 24.0232 24.3606C24.1685 23.8891 24.2487 23.3827 24.2487 22.8477C24.2487 20.0178 21.9547 17.7238 19.1248 17.7238C18.5898 17.7238 18.0834 17.804 17.6119 17.9493C16.6369 18.2497 15.4622 18.4499 14.2158 18.4285ZM19.0906 74.412C18.2796 75.3742 17.3429 76.1285 16.4632 76.6654C14.9749 77.5737 14.0009 79.1983 14.0009 81.0456C14.0009 83.8754 16.2949 86.1695 19.1248 86.1695C21.9547 86.1695 24.2487 83.8754 24.2487 81.0456C24.2487 79.1798 23.2547 77.5407 21.7415 76.6383C20.8565 76.1105 19.912 75.3655 19.0906 74.412ZM27.6409 44.397V67.5846C32.0844 70.4002 35.0521 75.3737 35.0521 81.0456C35.0521 89.842 27.9212 96.9729 19.1248 96.9729C10.3284 96.9729 3.19748 89.842 3.19748 81.0456C3.19748 75.432 6.10484 70.5021 10.4721 67.6721V36.2212C6.10484 33.3911 3.19748 28.4612 3.19748 22.8477C3.19748 21.9413 3.27374 21.0488 3.42123 20.1773L-15.5679 1.18812C-27.4468 11.9694 -34.8937 27.5177 -34.8937 44.8103C-34.8937 77.3362 -8.52625 103.704 23.9996 103.704C56.5255 103.704 82.893 77.3362 82.893 44.8103C82.893 12.2844 56.5255 -14.0831 23.9996 -14.0831C15.0024 -14.0831 6.48839 -12.069 -1.12758 -8.47042L14.8459 7.50311C16.2132 7.1224 17.6495 6.92037 19.1248 6.92037C27.9212 6.92037 35.0521 14.0513 35.0521 22.8477C35.0521 24.323 34.8501 25.7594 34.4694 27.1266L45.0584 37.7156C46.3719 37.3664 47.7473 37.1816 49.1581 37.1816C57.9545 37.1816 65.0854 44.3125 65.0854 53.1089C65.0854 61.9054 57.9545 69.0363 49.1581 69.0363C40.3617 69.0363 33.2307 61.9054 33.2307 53.1089C33.2307 52.1351 33.3188 51.1774 33.4886 50.2446L27.6409 44.397ZM33.5741 49.8007C33.5744 49.7992 33.5744 49.8019 33.5735 49.8087C33.5737 49.8043 33.5739 49.8016 33.5741 49.8007ZM44.6012 37.8414C44.6012 37.8413 44.6042 37.8407 44.6102 37.8403C44.6043 37.8413 44.6012 37.8416 44.6012 37.8414ZM34.3376 27.5849C34.3375 27.5847 34.3377 27.5817 34.3388 27.5759C34.3383 27.5822 34.3377 27.5852 34.3376 27.5849ZM14.3876 7.63486C14.3876 7.6347 14.3906 7.63415 14.3966 7.63365C14.3906 7.63479 14.3875 7.63503 14.3876 7.63486ZM3.50074 19.7357C3.50093 19.735 3.5009 19.7377 3.50013 19.7439C3.50029 19.739 3.50058 19.7363 3.50074 19.7357ZM10.8621 36.4684C10.8614 36.4679 10.8591 36.4662 10.8554 36.4629C10.861 36.467 10.8631 36.469 10.8621 36.4684ZM10.8623 67.4248C10.8626 67.4248 10.8603 67.4268 10.8554 67.4303C10.8597 67.4265 10.8621 67.4248 10.8623 67.4248ZM27.2462 67.3399C27.2465 67.3399 27.2489 67.3417 27.2532 67.3455C27.2482 67.3419 27.246 67.3399 27.2462 67.3399ZM44.3055 48.6325C45.5496 48.6685 46.7246 48.482 47.7019 48.1934C48.157 48.059 48.6442 47.985 49.1581 47.985C51.9879 47.985 54.282 50.2791 54.282 53.1089C54.282 55.9388 51.9879 58.2329 49.1581 58.2329C46.3282 58.2329 44.0342 55.9388 44.0342 53.1089C44.0342 52.7395 44.0724 52.3849 44.1433 52.0469C44.3521 51.0505 44.4458 49.8677 44.3055 48.6325ZM-55 45C-55 1.3695 -19.6305 -34 24 -34C67.6305 -34 103 1.3695 103 45C103 88.6305 67.6305 124 24 124C-19.6305 124 -55 88.6305 -55 45Z" fill="#F619FA"/>
						</g>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M24 117.171C63.8592 117.171 96.1714 84.8592 96.1714 45C96.1714 5.14084 63.8592 -27.1714 24 -27.1714C-15.8592 -27.1714 -48.1714 5.14084 -48.1714 45C-48.1714 84.8592 -15.8592 117.171 24 117.171ZM24 119C64.8691 119 98 85.8691 98 45C98 4.13093 64.8691 -29 24 -29C-16.8691 -29 -50 4.13093 -50 45C-50 85.8691 -16.8691 119 24 119ZM23.9996 109.455C59.7026 109.455 88.6456 80.5122 88.6456 44.8092C88.6456 9.10626 59.7026 -19.8367 23.9996 -19.8367C12.9548 -19.8367 2.55693 -17.0669 -6.53731 -12.184C-8.46031 -11.1515 -8.75328 -8.56997 -7.20991 -7.0266L11.6367 11.82C12.7504 12.9337 14.4725 13.0751 15.9777 12.6113C16.9641 12.3073 18.012 12.1437 19.0982 12.1437C24.9431 12.1437 29.6813 16.8819 29.6813 22.7268C29.6813 23.8129 29.5176 24.8609 29.2137 25.8473C28.7499 27.3525 28.8912 29.0746 30.0049 30.1883L42.007 42.1904C43.1066 43.29 44.8018 43.4424 46.2931 43.002C47.2449 42.721 48.2525 42.5701 49.2954 42.5701C55.1403 42.5701 59.8785 47.3083 59.8785 53.1532C59.8785 58.9981 55.1403 63.7363 49.2954 63.7363C43.4505 63.7363 38.7123 58.9981 38.7123 53.1532C38.7123 52.4052 38.7899 51.6752 38.9375 50.9711C39.2291 49.58 39.0107 48.0627 38.0057 47.0577L23.7755 32.8275C23.527 32.579 23.1541 32.5112 22.8252 32.6349V32.6349C22.4757 32.7664 22.2296 33.0935 22.2296 33.4669V68.627C22.2296 70.1153 23.2327 71.384 24.511 72.1463C27.6073 73.9928 29.6813 77.3753 29.6813 81.2423C29.6813 87.0872 24.9431 91.8254 19.0982 91.8254C13.2533 91.8254 8.51513 87.0872 8.51513 81.2423C8.51513 77.4141 10.5478 74.0606 13.5927 72.2022C14.8484 71.4358 15.8295 70.1774 15.8295 68.7062V35.2628C15.8295 33.7917 14.8484 32.5333 13.5927 31.7669C10.5478 29.9085 8.51513 26.555 8.51513 22.7268C8.51513 22.0245 8.58354 21.3381 8.71407 20.674C8.98424 19.2995 8.75703 17.809 7.76649 16.8185L-13.3452 -4.29319C-14.5522 -5.50015 -16.4744 -5.63034 -17.7765 -4.52668C-31.7665 7.33144 -40.6463 25.0333 -40.6463 44.8092C-40.6463 80.5122 -11.7033 109.455 23.9996 109.455ZM23.9996 111.284C60.7125 111.284 90.4742 81.5221 90.4742 44.8092C90.4742 8.09635 60.7125 -21.6653 23.9996 -21.6653C-12.7133 -21.6653 -42.4749 8.09635 -42.4749 44.8092C-42.4749 81.5221 -12.7133 111.284 23.9996 111.284Z" fill="url(#paint0_linear_338_69533)"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M96.8503 45C96.8503 85.2341 64.2341 117.85 24 117.85C-16.2341 117.85 -48.8503 85.2341 -48.8503 45C-48.8503 4.7659 -16.2341 -27.8503 24 -27.8503C64.2341 -27.8503 96.8503 4.7659 96.8503 45ZM24 118.321C64.4941 118.321 97.3211 85.4941 97.3211 45C97.3211 4.50588 64.4941 -28.3211 24 -28.3211C-16.4941 -28.3211 -49.3211 4.50588 -49.3211 45C-49.3211 85.4941 -16.4941 118.321 24 118.321ZM89.3245 44.8092C89.3245 80.8872 60.0776 110.134 23.9996 110.134C-12.0783 110.134 -41.3252 80.8872 -41.3252 44.8092C-41.3252 24.8255 -32.3511 6.93703 -18.2154 -5.04456C-16.6289 -6.38932 -14.3079 -6.21595 -12.8651 -4.77324L8.24654 16.3384C9.45024 17.5421 9.67716 19.2942 9.38022 20.805C9.25813 21.4261 9.19403 22.0686 9.19403 22.7268C9.19403 26.3086 11.095 29.4471 13.9463 31.1874C15.3246 32.0285 16.5084 33.4748 16.5084 35.2628V68.7062C16.5084 70.4942 15.3246 71.9405 13.9463 72.7817C11.095 74.5219 9.19403 77.6604 9.19403 81.2423C9.19403 86.7122 13.6283 91.1465 19.0982 91.1465C24.5681 91.1465 29.0024 86.7122 29.0024 81.2423C29.0024 77.6242 27.0627 74.4585 24.1633 72.7294C22.761 71.8931 21.5507 70.436 21.5507 68.627V33.4669C21.5507 32.7862 21.9958 32.2217 22.5861 31.9995C23.1455 31.789 23.8048 31.8967 24.2555 32.3474L38.4858 46.5777C39.7071 47.799 39.9223 49.5822 39.602 51.1103C39.4639 51.769 39.3912 52.4522 39.3912 53.1532C39.3912 58.6231 43.8255 63.0574 49.2954 63.0574C54.7653 63.0574 59.1996 58.6231 59.1996 53.1532C59.1996 47.6833 54.7653 43.249 49.2954 43.249C48.3183 43.249 47.3754 43.3903 46.4854 43.6531C44.8524 44.1353 42.8638 44.0073 41.527 42.6705L29.5249 30.6684C28.1708 29.3143 28.0573 27.2947 28.5649 25.6474C28.8491 24.725 29.0024 23.7444 29.0024 22.7268C29.0024 17.2569 24.5681 12.8226 19.0982 12.8226C18.0806 12.8226 17.1 12.9759 16.1776 13.2601C14.5303 13.7677 12.5107 13.6542 11.1566 12.3001L-7.68997 -6.54654C-9.53113 -8.38771 -9.21186 -11.5185 -6.85846 -12.7821C2.3321 -17.7168 12.84 -20.5156 23.9996 -20.5156C60.0776 -20.5156 89.3245 8.73132 89.3245 44.8092ZM23.9996 110.605C60.3376 110.605 89.7953 81.1472 89.7953 44.8092C89.7953 8.47129 60.3376 -20.9864 23.9996 -20.9864C-12.3383 -20.9864 -41.796 8.47129 -41.796 44.8092C-41.796 81.1472 -12.3383 110.605 23.9996 110.605ZM96.1714 45C96.1714 84.8592 63.8592 117.171 24 117.171C-15.8592 117.171 -48.1714 84.8592 -48.1714 45C-48.1714 5.14084 -15.8592 -27.1714 24 -27.1714C63.8592 -27.1714 96.1714 5.14084 96.1714 45ZM98 45C98 85.8691 64.8691 119 24 119C-16.8691 119 -50 85.8691 -50 45C-50 4.13093 -16.8691 -29 24 -29C64.8691 -29 98 4.13093 98 45ZM88.6456 44.8092C88.6456 80.5122 59.7026 109.455 23.9996 109.455C-11.7033 109.455 -40.6463 80.5122 -40.6463 44.8092C-40.6463 25.0333 -31.7665 7.33144 -17.7765 -4.52668C-16.4744 -5.63034 -14.5522 -5.50014 -13.3452 -4.29319L7.76649 16.8185C8.75703 17.809 8.98424 19.2995 8.71407 20.674C8.58354 21.3381 8.51513 22.0245 8.51513 22.7268C8.51513 26.555 10.5478 29.9085 13.5927 31.7669C14.8484 32.5333 15.8295 33.7917 15.8295 35.2628V68.7062C15.8295 70.1774 14.8484 71.4358 13.5927 72.2022C10.5478 74.0606 8.51513 77.4141 8.51513 81.2423C8.51513 87.0872 13.2533 91.8254 19.0982 91.8254C24.9431 91.8254 29.6813 87.0872 29.6813 81.2423C29.6813 77.3754 27.6073 73.9928 24.511 72.1463C23.2327 71.384 22.2296 70.1153 22.2296 68.627V33.4669C22.2296 33.0935 22.4757 32.7664 22.8252 32.6349C23.1541 32.5112 23.527 32.579 23.7755 32.8275L38.0057 47.0577C39.0107 48.0627 39.2291 49.58 38.9375 50.9711C38.7899 51.6752 38.7123 52.4052 38.7123 53.1532C38.7123 58.9981 43.4505 63.7363 49.2954 63.7363C55.1403 63.7363 59.8785 58.9981 59.8785 53.1532C59.8785 47.3083 55.1403 42.5701 49.2954 42.5701C48.2525 42.5701 47.2449 42.721 46.2931 43.002C44.8018 43.4424 43.1066 43.29 42.007 42.1904L30.0049 30.1883C28.8912 29.0746 28.7499 27.3524 29.2137 25.8473C29.5176 24.8609 29.6813 23.8129 29.6813 22.7268C29.6813 16.8819 24.9431 12.1437 19.0982 12.1437C18.012 12.1437 16.9641 12.3073 15.9777 12.6113C14.4725 13.0751 12.7504 12.9337 11.6367 11.82L-7.20991 -7.0266C-8.75328 -8.56997 -8.46031 -11.1515 -6.53731 -12.184C2.55694 -17.0669 12.9548 -19.8367 23.9996 -19.8367C59.7026 -19.8367 88.6456 9.10626 88.6456 44.8092ZM90.4742 44.8092C90.4742 81.5221 60.7125 111.284 23.9996 111.284C-12.7133 111.284 -42.4749 81.5221 -42.4749 44.8092C-42.4749 8.09635 -12.7133 -21.6653 23.9996 -21.6653C60.7125 -21.6653 90.4742 8.09635 90.4742 44.8092Z" fill="url(#paint1_linear_338_69533)"/>
					</g>
					<defs>
						<filter id="filter0_f_338_69533" x="-76" y="-55" width="200" height="200" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
							<feGaussianBlur stdDeviation="10.5" result="effect1_foregroundBlur_338_69533"/>
						</filter>
						<linearGradient id="paint0_linear_338_69533" x1="5.33025" y1="4.26604" x2="24" y2="92.5229" gradientUnits="userSpaceOnUse">
							<stop stop-color="#DE98FF"/>
							<stop offset="1" stop-color="#837A89" stop-opacity="0"/>
						</linearGradient>
						<linearGradient id="paint1_linear_338_69533" x1="88.4954" y1="3.2477" x2="5.6697" y2="89.4679" gradientUnits="userSpaceOnUse">
							<stop stop-color="white"/>
							<stop offset="1" stop-color="white" stop-opacity="0"/>
						</linearGradient>
					</defs>
				</svg>
				<!-- Don't reformat or let prettier reformat the SVG otherwise whitespace will get added incorrect and screw up the positioning -->
				<!-- prettier-ignore -->
				<svg class="play" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M13.8626 11.0319C14.3464 10.5343 24.5 16.0074 24.5 17.5C24.5 18.9926 14.346 24.4657 13.8627 23.9681C13.3794 23.4706 13.3788 11.5294 13.8626 11.0319Z"
						fill="currentColor"
					></path>
					<path
						d="M34 18C34 26.8366 26.8366 34 18 34C9.16344 34 2 26.8366 2 18C2 9.16344 9.16344 2 18 2C26.8366 2 34 9.16344 34 18Z"
						stroke="currentColor"
					></path>
				</svg>
			</a>
		`}};go.styles=[$t,we`
			:host {
				display: block;
			}

			:host-context(.vscode-high-contrast),
			:host-context(.vscode-dark) {
				--video-button-background: var(--color-background--lighten-05);
				--video-button-hover-background: var(--color-background--lighten-075);
			}

			:host-context(.vscode-high-contrast-light),
			:host-context(.vscode-light) {
				--video-button-background: var(--color-background--darken-05);
				--video-button-hover-background: var(--color-background--darken-075);
			}

			.video-button {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-end;
				background-color: var(--video-button-background);
				padding: 0 2rem 0 0;
				color: inherit;
				transition: background-color ease-in-out 150ms;
				border-radius: 0.4rem;
				position: relative;
				overflow: hidden;
				height: 70px;
			}
			.video-button:hover {
				background-color: var(--video-button-hover-background);
				text-decoration: none;
				color: inherit;
			}

			.video-button > .play {
				transform: scale(1.2);
				transition: transform ease-in-out 150ms;
			}
			.video-button:hover > .play {
				transform: scale(1.4);
			}

			.background {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				object-fit: cover;
				transition: transform ease-in-out 150ms;
				width: 100%;
				height: auto;
			}
			.video-button:hover .background {
				transform: translateX(-3px) scale(1.05);
			}

			.background__base {
				fill: var(--video-button-background);
				transition: fill ease-in-out 150ms;
			}
			.video-button:hover .background__base {
				opacity: 0.5;
			}

			:host-context(.vscode-high-contrast-light) .background--dark,
			:host-context(.vscode-light) .background--dark {
				display: none;
			}
			:host-context(.vscode-high-contrast) .background--light,
			:host-context(.vscode-dark) .background--light {
				display: none;
			}
		`],go=((e,t,o,s)=>{for(var r,i=s>1?void 0:s?uo(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(i=(s?r(t,o,i):r(i))||i);return s&&i&&bo(t,o,i),i})([gt("video-button")],go);class WelcomeApp extends App{constructor(){super("WelcomeApp")}onInitialize(){this.updateState()}onBind(){const e=[...super.onBind?.()??[],U.on("[data-feature]","change",((e,t)=>this.onFeatureToggled(e,t))),U.on('[data-requires="repo"]',"click",((e,t)=>this.onRepoFeatureClicked(e,t)))];return e}onMessageReceived(e){if(e.method===a.method)o(a,e,(e=>{this.state=e.state,this.setState(this.state),this.updateState()}));else super.onMessageReceived?.(e)}onRepoFeatureClicked(e,t){return!this.state.repoFeaturesBlocked||(e.preventDefault(),e.stopPropagation(),!1)}onFeatureToggled(e,t){const o=t.dataset.feature;if(!o)return;let s;switch(o){case"blame":s="currentLine";break;case"codelens":s="codeLens";break;default:return}const r=t.checked;this.state.config[s]=r,this.sendCommand(i,{type:s,value:r}),this.updateFeatures()}updateState(){this.updateVersion(),this.updateFeatures(),this.updateRepoState(),this.updateAccountState(),this.updatePromo()}updatePromo(){const{canShowPromo:e}=this.state;document.getElementById("promo").hidden=!e}updateVersion(){document.getElementById("version").textContent=this.state.version}updateFeatures(){const{config:e}=this.state,t=document.getElementById("blame");t.inline=e.currentLine??!1,t.codelens=e.codeLens??!1;let o=document.getElementById("inline-blame");o.checked=e.currentLine??!1,o=document.getElementById("codelens"),o.checked=e.codeLens??!1}updateRepoState(){const{repoFeaturesBlocked:e}=this.state;document.body.dataset.repos=e?"blocked":"allowed"}updateAccountState(){const{isTrialOrPaid:e}=this.state;document.getElementById("try-pro").hidden=e??!1}}new WelcomeApp;var yo=t.$;export{yo as WelcomeApp};
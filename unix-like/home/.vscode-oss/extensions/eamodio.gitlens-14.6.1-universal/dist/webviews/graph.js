var e,t={7507:(e,t,o)=>{(()=>{var t={2584:e=>{e.exports=function(e,t){return Array.prototype.slice.call(e,t)}},4184:(e,t)=>{var o;!function(){var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var c=typeof o;if("string"===c||"number"===c)e.push(o);else if(Array.isArray(o)){if(o.length){var d=r.apply(null,o);d&&e.push(d)}}else if("object"===c){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){e.push(o.toString());continue}for(var h in o)n.call(o,h)&&o[h]&&e.push(h)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},8514:(e,t,o)=>{var n=o(6115);e.exports=function(e,t,o){e&&n((function(){e.apply(o||null,t||[])}))}},5229:(e,t,o)=>{var n=o(2584),r=o(8514);e.exports=function(e,t){var o=t||{},c={};return void 0===e&&(e={}),e.on=function(t,o){return c[t]?c[t].push(o):c[t]=[o],e},e.once=function(t,o){return o._once=!0,e.on(t,o),e},e.off=function(t,o){var n=arguments.length;if(1===n)delete c[t];else if(0===n)c={};else{var r=c[t];if(!r)return e;r.splice(r.indexOf(o),1)}return e},e.emit=function(){var t=n(arguments);return e.emitterSnapshot(t.shift()).apply(this,t)},e.emitterSnapshot=function(t){var d=(c[t]||[]).slice(0);return function(){var c=n(arguments),h=this||e;if("error"===t&&!1!==o.throws&&!d.length)throw 1===c.length?c[0]:c;return d.forEach((function(n){o.async?r(n,c,h):n.apply(h,c),n._once&&e.off(t,n)})),e}},e}},3285:(e,t,o)=>{o(8691),e.exports=o(4579).Array.isArray},6981:(e,t,o)=>{o(2699),e.exports=o(4579).Object.assign},5627:(e,t,o)=>{o(6760);var n=o(4579).Object;e.exports=function(e,t){return n.create(e,t)}},7965:(e,t,o)=>{o(520),e.exports=o(4579).Object.entries},8613:(e,t,o)=>{o(961),e.exports=o(4579).Object.keys},433:(e,t,o)=>{o(9349),e.exports=o(4579).Object.setPrototypeOf},5663:e=>{e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},2159:(e,t,o)=>{var n=o(6727);e.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},7428:(e,t,o)=>{var n=o(7932),r=o(8728),c=o(6531);e.exports=function(e){return function(t,o,d){var h,u=n(t),p=r(u.length),m=c(d,p);if(e&&o!=o){for(;p>m;)if((h=u[m++])!=h)return!0}else for(;p>m;m++)if((e||m in u)&&u[m]===o)return e||m||0;return!e&&-1}}},2894:e=>{var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},4579:e=>{var t=e.exports={version:"2.6.12"};"number"==typeof __e&&(__e=t)},9216:(e,t,o)=>{var n=o(5663);e.exports=function(e,t,o){if(n(e),void 0===t)return e;switch(o){case 1:return function(o){return e.call(t,o)};case 2:return function(o,n){return e.call(t,o,n)};case 3:return function(o,n,r){return e.call(t,o,n,r)}}return function(){return e.apply(t,arguments)}}},8333:e=>{e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},9666:(e,t,o)=>{e.exports=!o(7929)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},7467:(e,t,o)=>{var n=o(6727),r=o(3938).document,c=n(r)&&n(r.createElement);e.exports=function(e){return c?r.createElement(e):{}}},3338:e=>{e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},3856:(e,t,o)=>{var n=o(3938),r=o(4579),c=o(9216),d=o(1818),h=o(7069),u="prototype",p=function(e,t,o){var m,g,v,y=e&p.F,w=e&p.G,x=e&p.S,S=e&p.P,_=e&p.B,T=e&p.W,E=w?r:r[t]||(r[t]={}),O=E[u],A=w?n:x?n[t]:(n[t]||{})[u];for(m in w&&(o=t),o)(g=!y&&A&&void 0!==A[m])&&h(E,m)||(v=g?A[m]:o[m],E[m]=w&&"function"!=typeof A[m]?o[m]:_&&g?c(v,n):T&&A[m]==v?function(e){var t=function(t,o,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,o)}return new e(t,o,n)}return e.apply(this,arguments)};return t[u]=e[u],t}(v):S&&"function"==typeof v?c(Function.call,v):v,S&&((E.virtual||(E.virtual={}))[m]=v,e&p.R&&O&&!O[m]&&d(O,m,v)))};p.F=1,p.G=2,p.S=4,p.P=8,p.B=16,p.W=32,p.U=64,p.R=128,e.exports=p},7929:e=>{e.exports=function(e){try{return!!e()}catch(e){return!0}}},3938:e=>{var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)},7069:e=>{var t={}.hasOwnProperty;e.exports=function(e,o){return t.call(e,o)}},1818:(e,t,o)=>{var n=o(4743),r=o(3101);e.exports=o(9666)?function(e,t,o){return n.f(e,t,r(1,o))}:function(e,t,o){return e[t]=o,e}},4881:(e,t,o)=>{var n=o(3938).document;e.exports=n&&n.documentElement},3758:(e,t,o)=>{e.exports=!o(9666)&&!o(7929)((function(){return 7!=Object.defineProperty(o(7467)("div"),"a",{get:function(){return 7}}).a}))},799:(e,t,o)=>{var n=o(2894);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},1421:(e,t,o)=>{var n=o(2894);e.exports=Array.isArray||function(e){return"Array"==n(e)}},6727:e=>{e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},6227:e=>{e.exports=!0},8082:(e,t,o)=>{var n=o(9666),r=o(6162),c=o(8195),d=o(6274),h=o(6530),u=o(799),p=Object.assign;e.exports=!p||o(7929)((function(){var e={},t={},o=Symbol(),n="abcdefghijklmnopqrst";return e[o]=7,n.split("").forEach((function(e){t[e]=e})),7!=p({},e)[o]||Object.keys(p({},t)).join("")!=n}))?function(e,t){for(var o=h(e),p=arguments.length,m=1,g=c.f,v=d.f;p>m;)for(var y,w=u(arguments[m++]),x=g?r(w).concat(g(w)):r(w),S=x.length,_=0;S>_;)y=x[_++],n&&!v.call(w,y)||(o[y]=w[y]);return o}:p},526:(e,t,o)=>{var n=o(2159),r=o(7856),c=o(3338),d=o(8989)("IE_PROTO"),h=function(){},u="prototype",p=function(){var e,t=o(7467)("iframe"),n=c.length;for(t.style.display="none",o(4881).appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),p=e.F;n--;)delete p[u][c[n]];return p()};e.exports=Object.create||function(e,t){var o;return null!==e?(h[u]=n(e),o=new h,h[u]=null,o[d]=e):o=p(),void 0===t?o:r(o,t)}},4743:(e,t,o)=>{var n=o(2159),r=o(3758),c=o(3206),d=Object.defineProperty;t.f=o(9666)?Object.defineProperty:function(e,t,o){if(n(e),t=c(t,!0),n(o),r)try{return d(e,t,o)}catch(e){}if("get"in o||"set"in o)throw TypeError("Accessors not supported!");return"value"in o&&(e[t]=o.value),e}},7856:(e,t,o)=>{var n=o(4743),r=o(2159),c=o(6162);e.exports=o(9666)?Object.defineProperties:function(e,t){r(e);for(var o,d=c(t),h=d.length,u=0;h>u;)n.f(e,o=d[u++],t[o]);return e}},6183:(e,t,o)=>{var n=o(6274),r=o(3101),c=o(7932),d=o(3206),h=o(7069),u=o(3758),p=Object.getOwnPropertyDescriptor;t.f=o(9666)?p:function(e,t){if(e=c(e),t=d(t,!0),u)try{return p(e,t)}catch(e){}if(h(e,t))return r(!n.f.call(e,t),e[t])}},8195:(e,t)=>{t.f=Object.getOwnPropertySymbols},2963:(e,t,o)=>{var n=o(7069),r=o(7932),c=o(7428)(!1),d=o(8989)("IE_PROTO");e.exports=function(e,t){var o,h=r(e),u=0,p=[];for(o in h)o!=d&&n(h,o)&&p.push(o);for(;t.length>u;)n(h,o=t[u++])&&(~c(p,o)||p.push(o));return p}},6162:(e,t,o)=>{var n=o(2963),r=o(3338);e.exports=Object.keys||function(e){return n(e,r)}},6274:(e,t)=>{t.f={}.propertyIsEnumerable},4938:(e,t,o)=>{var n=o(3856),r=o(4579),c=o(7929);e.exports=function(e,t){var o=(r.Object||{})[e]||Object[e],d={};d[e]=t(o),n(n.S+n.F*c((function(){o(1)})),"Object",d)}},2050:(e,t,o)=>{var n=o(9666),r=o(6162),c=o(7932),d=o(6274).f;e.exports=function(e){return function(t){for(var o,h=c(t),u=r(h),p=u.length,m=0,g=[];p>m;)o=u[m++],n&&!d.call(h,o)||g.push(e?[o,h[o]]:h[o]);return g}}},3101:e=>{e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},2906:(e,t,o)=>{var n=o(6727),r=o(2159),c=function(e,t){if(r(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,n){try{(n=o(9216)(Function.call,o(6183).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,o){return c(e,o),t?e.__proto__=o:n(e,o),e}}({},!1):void 0),check:c}},8989:(e,t,o)=>{var n=o(250)("keys"),r=o(5730);e.exports=function(e){return n[e]||(n[e]=r(e))}},250:(e,t,o)=>{var n=o(4579),r=o(3938),c="__core-js_shared__",d=r[c]||(r[c]={});(e.exports=function(e,t){return d[e]||(d[e]=void 0!==t?t:{})})("versions",[]).push({version:n.version,mode:o(6227)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},6531:(e,t,o)=>{var n=o(1052),r=Math.max,c=Math.min;e.exports=function(e,t){return(e=n(e))<0?r(e+t,0):c(e,t)}},1052:e=>{var t=Math.ceil,o=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?o:t)(e)}},7932:(e,t,o)=>{var n=o(799),r=o(8333);e.exports=function(e){return n(r(e))}},8728:(e,t,o)=>{var n=o(1052),r=Math.min;e.exports=function(e){return e>0?r(n(e),9007199254740991):0}},6530:(e,t,o)=>{var n=o(8333);e.exports=function(e){return Object(n(e))}},3206:(e,t,o)=>{var n=o(6727);e.exports=function(e,t){if(!n(e))return e;var o,r;if(t&&"function"==typeof(o=e.toString)&&!n(r=o.call(e)))return r;if("function"==typeof(o=e.valueOf)&&!n(r=o.call(e)))return r;if(!t&&"function"==typeof(o=e.toString)&&!n(r=o.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},5730:e=>{var t=0,o=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++t+o).toString(36))}},8691:(e,t,o)=>{var n=o(3856);n(n.S,"Array",{isArray:o(1421)})},2699:(e,t,o)=>{var n=o(3856);n(n.S+n.F,"Object",{assign:o(8082)})},6760:(e,t,o)=>{var n=o(3856);n(n.S,"Object",{create:o(526)})},961:(e,t,o)=>{var n=o(6530),r=o(6162);o(4938)("keys",(function(){return function(e){return r(n(e))}}))},9349:(e,t,o)=>{var n=o(3856);n(n.S,"Object",{setPrototypeOf:o(2906).set})},520:(e,t,o)=>{var n=o(3856),r=o(2050)(!0);n(n.S,"Object",{entries:function(e){return r(e)}})},1808:(e,t,o)=>{var n=o(9638),r=o(4874),c=o.g.document,d=function(e,t,o,n){return e.addEventListener(t,o,n)},h=function(e,t,o,n){return e.removeEventListener(t,o,n)},u=[];function p(e,t,o){var n=function(e,t,o){var n,r;for(n=0;n<u.length;n++)if((r=u[n]).element===e&&r.type===t&&r.fn===o)return n}(e,t,o);if(n){var r=u[n].wrapper;return u.splice(n,1),r}}o.g.addEventListener||(d=function(e,t,n){return e.attachEvent("on"+t,function(e,t,n){var r=p(e,t,n)||function(e,t,n){return function(t){var r=t||o.g.event;r.target=r.target||r.srcElement,r.preventDefault=r.preventDefault||function(){r.returnValue=!1},r.stopPropagation=r.stopPropagation||function(){r.cancelBubble=!0},r.which=r.which||r.keyCode,n.call(e,r)}}(e,0,n);return u.push({wrapper:r,element:e,type:t,fn:n}),r}(e,t,n))},h=function(e,t,o){var n=p(e,t,o);if(n)return e.detachEvent("on"+t,n)}),e.exports={add:d,remove:h,fabricate:function(e,t,o){var d=-1===r.indexOf(t)?new n(t,{detail:o}):function(){var e;return c.createEvent?(e=c.createEvent("Event")).initEvent(t,!0,!0):c.createEventObject&&(e=c.createEventObject()),e}();e.dispatchEvent?e.dispatchEvent(d):e.fireEvent("on"+t,d)}}},4874:(e,t,o)=>{var n=[],r="",c=/^on/;for(r in o.g)c.test(r)&&n.push(r.slice(2));e.exports=n},9638:(e,t,o)=>{var n=o.g.CustomEvent;e.exports=function(){try{var e=new n("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(e){}return!1}()?n:"function"==typeof document.createEvent?function(e,t){var o=document.createEvent("CustomEvent");return t?o.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):o.initCustomEvent(e,!1,!1,void 0),o}:function(e,t){var o=document.createEventObject();return o.type=e,t?(o.bubbles=Boolean(t.bubbles),o.cancelable=Boolean(t.cancelable),o.detail=t.detail):(o.bubbles=!1,o.cancelable=!1,o.detail=void 0),o}},3249:(e,t,o)=>{var n=o(4836);t.__esModule=!0,t.default=void 0;var r=function(){};n(o(139)).default&&(r=document.addEventListener?function(e,t,o,n){return e.removeEventListener(t,o,n||!1)}:document.attachEvent?function(e,t,o){return e.detachEvent("on"+t,o)}:void 0);var c=r;t.default=c,e.exports=t.default},1416:(e,t,o)=>{var n=o(4836);t.__esModule=!0,t.default=void 0;var r=function(){};n(o(139)).default&&(r=document.addEventListener?function(e,t,o,n){return e.addEventListener(t,o,n||!1)}:document.attachEvent?function(e,t,o){return e.attachEvent("on"+t,(function(t){(t=t||window.event).target=t.target||t.srcElement,t.currentTarget=e,o.call(e,t)}))}:void 0);var c=r;t.default=c,e.exports=t.default},9981:(e,t)=>{t.__esModule=!0,t.default=function(e){return e&&e.ownerDocument||document},e.exports=t.default},1629:(e,t,o)=>{var n=o(4836);t.__esModule=!0,t.default=void 0;var r=n(o(139)).default?function(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):c(e,t)}:c;function c(e,t){if(t)do{if(t===e)return!0}while(t=t.parentNode);return!1}t.default=r,e.exports=t.default},7624:(e,t)=>{t.__esModule=!0,t.default=function(e){return e===e.window?e:9===e.nodeType&&(e.defaultView||e.parentWindow)},e.exports=t.default},2565:(e,t,o)=>{var n=o(4836);t.__esModule=!0,t.default=function(e){var t=(0,d.default)(e),o=(0,c.default)(t),n=t&&t.documentElement,h={top:0,left:0,height:0,width:0};if(t)return(0,r.default)(n,e)?(void 0!==e.getBoundingClientRect&&(h=e.getBoundingClientRect()),{top:h.top+(o.pageYOffset||n.scrollTop)-(n.clientTop||0),left:h.left+(o.pageXOffset||n.scrollLeft)-(n.clientLeft||0),width:(null==h.width?e.offsetWidth:h.width)||0,height:(null==h.height?e.offsetHeight:h.height)||0}):h};var r=n(o(1629)),c=n(o(7624)),d=n(o(9981));e.exports=t.default},2939:(e,t,o)=>{var n=o(4836);t.__esModule=!0,t.default=function(e){for(var t=(0,r.default)(e),o=e&&e.offsetParent;o&&"html"!==d(e)&&"static"===(0,c.default)(o,"position");)o=o.offsetParent;return o||t.documentElement};var r=n(o(9981)),c=n(o(162));function d(e){return e.nodeName&&e.nodeName.toLowerCase()}e.exports=t.default},7265:(e,t,o)=>{var n=o(4836);t.__esModule=!0,t.default=function(e,t){var o,n={top:0,left:0};return"fixed"===(0,p.default)(e,"position")?o=e.getBoundingClientRect():(t=t||(0,d.default)(e),o=(0,c.default)(e),"html"!==function(e){return e.nodeName&&e.nodeName.toLowerCase()}(t)&&(n=(0,c.default)(t)),n.top+=parseInt((0,p.default)(t,"borderTopWidth"),10)-(0,h.default)(t)||0,n.left+=parseInt((0,p.default)(t,"borderLeftWidth"),10)-(0,u.default)(t)||0),(0,r.default)({},o,{top:o.top-n.top-(parseInt((0,p.default)(e,"marginTop"),10)||0),left:o.left-n.left-(parseInt((0,p.default)(e,"marginLeft"),10)||0)})};var r=n(o(434)),c=n(o(2565)),d=n(o(2939)),h=n(o(504)),u=n(o(5770)),p=n(o(162));e.exports=t.default},5770:(e,t,o)=>{var n=o(4836);t.__esModule=!0,t.default=function(e,t){var o=(0,r.default)(e);if(void 0===t)return o?"pageXOffset"in o?o.pageXOffset:o.document.documentElement.scrollLeft:e.scrollLeft;o?o.scrollTo(t,"pageYOffset"in o?o.pageYOffset:o.document.documentElement.scrollTop):e.scrollLeft=t};var r=n(o(7624));e.exports=t.default},504:(e,t,o)=>{var n=o(4836);t.__esModule=!0,t.default=function(e,t){var o=(0,r.default)(e);if(void 0===t)return o?"pageYOffset"in o?o.pageYOffset:o.document.documentElement.scrollTop:e.scrollTop;o?o.scrollTo("pageXOffset"in o?o.pageXOffset:o.document.documentElement.scrollLeft,t):e.scrollTop=t};var r=n(o(7624));e.exports=t.default},7023:(e,t,o)=>{var n=o(4836);t.__esModule=!0,t.default=function(e){if(!e)throw new TypeError("No Element passed to `getComputedStyle()`");var t=e.ownerDocument;return"defaultView"in t?t.defaultView.opener?e.ownerDocument.defaultView.getComputedStyle(e,null):window.getComputedStyle(e,null):{getPropertyValue:function(t){var o=e.style;"float"==(t=(0,r.default)(t))&&(t="styleFloat");var n=e.currentStyle[t]||null;if(null==n&&o&&o[t]&&(n=o[t]),d.test(n)&&!c.test(t)){var h=o.left,u=e.runtimeStyle,p=u&&u.left;p&&(u.left=e.currentStyle.left),o.left="fontSize"===t?"1em":n,n=o.pixelLeft+"px",o.left=h,p&&(u.left=p)}return n}}};var r=n(o(3497)),c=/^(top|right|bottom|left)$/,d=/^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;e.exports=t.default},162:(e,t,o)=>{var n=o(4836);t.__esModule=!0,t.default=function(e,t,o){var n="",m="",g=t;if("string"==typeof t){if(void 0===o)return e.style[(0,r.default)(t)]||(0,d.default)(e).getPropertyValue((0,c.default)(t));(g={})[t]=o}Object.keys(g).forEach((function(t){var o=g[t];o||0===o?(0,p.default)(t)?m+=t+"("+o+") ":n+=(0,c.default)(t)+": "+o+";":(0,h.default)(e,(0,c.default)(t))})),m&&(n+=u.transform+": "+m+";"),e.style.cssText+=";"+n};var r=n(o(3497)),c=n(o(4403)),d=n(o(7023)),h=n(o(1760)),u=o(702),p=n(o(3293));e.exports=t.default},1760:(e,t)=>{t.__esModule=!0,t.default=function(e,t){return"removeProperty"in e.style?e.style.removeProperty(t):e.style.removeAttribute(t)},e.exports=t.default},3293:(e,t)=>{t.__esModule=!0,t.default=function(e){return!(!e||!o.test(e))};var o=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;e.exports=t.default},702:(e,t,o)=>{var n=o(4836);t.__esModule=!0,t.default=t.animationEnd=t.animationDelay=t.animationTiming=t.animationDuration=t.animationName=t.transitionEnd=t.transitionDuration=t.transitionDelay=t.transitionTiming=t.transitionProperty=t.transform=void 0;var r,c,d,h,u,p,m,g,v,y,w,x=n(o(139)),S="transform";if(t.transform=S,t.animationEnd=d,t.transitionEnd=c,t.transitionDelay=m,t.transitionTiming=p,t.transitionDuration=u,t.transitionProperty=h,t.animationDelay=w,t.animationTiming=y,t.animationDuration=v,t.animationName=g,x.default){var _=function(){for(var e,t,o=document.createElement("div").style,n={O:function(e){return"o"+e.toLowerCase()},Moz:function(e){return e.toLowerCase()},Webkit:function(e){return"webkit"+e},ms:function(e){return"MS"+e}},r=Object.keys(n),c="",d=0;d<r.length;d++){var h=r[d];if(h+"TransitionProperty"in o){c="-"+h.toLowerCase(),e=n[h]("TransitionEnd"),t=n[h]("AnimationEnd");break}}return!e&&"transitionProperty"in o&&(e="transitionend"),!t&&"animationName"in o&&(t="animationend"),o=null,{animationEnd:t,transitionEnd:e,prefix:c}}();r=_.prefix,t.transitionEnd=c=_.transitionEnd,t.animationEnd=d=_.animationEnd,t.transform=S=r+"-"+S,t.transitionProperty=h=r+"-transition-property",t.transitionDuration=u=r+"-transition-duration",t.transitionDelay=m=r+"-transition-delay",t.transitionTiming=p=r+"-transition-timing-function",t.animationName=g=r+"-animation-name",t.animationDuration=v=r+"-animation-duration",t.animationTiming=y=r+"-animation-delay",t.animationDelay=w=r+"-animation-timing-function"}var T={transform:S,end:c,property:h,timing:p,delay:m,duration:u};t.default=T},1908:(e,t)=>{t.__esModule=!0,t.default=function(e){return e.replace(o,(function(e,t){return t.toUpperCase()}))};var o=/-(.)/g;e.exports=t.default},3497:(e,t,o)=>{var n=o(4836);t.__esModule=!0,t.default=function(e){return(0,r.default)(e.replace(c,"ms-"))};var r=n(o(1908)),c=/^-ms-/;e.exports=t.default},1185:(e,t)=>{t.__esModule=!0,t.default=function(e){return e.replace(o,"-$1").toLowerCase()};var o=/([A-Z])/g;e.exports=t.default},4403:(e,t,o)=>{var n=o(4836);t.__esModule=!0,t.default=function(e){return(0,r.default)(e).replace(c,"-ms-")};var r=n(o(1185)),c=/^ms-/;e.exports=t.default},139:(e,t)=>{t.__esModule=!0,t.default=void 0;var o=!("undefined"==typeof window||!window.document||!window.document.createElement);t.default=o,e.exports=t.default},9425:e=>{var t={};function o(e){var o=t[e];return o?o.lastIndex=0:t[e]=o=new RegExp("(?:^|\\s)"+e+"(?:\\s|$)","g"),o}e.exports={add:function(e,t){var n=e.className;n.length?o(t).test(n)||(e.className+=" "+t):e.className=t},rm:function(e,t){e.className=e.className.replace(o(t)," ").trim()}}},7137:(e,t,o)=>{var n=o(5229),r=o(1808),c=o(9425),d=document,h=d.documentElement;function u(e,t,n,c){o.g.navigator.pointerEnabled?r[t](e,{mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"}[n],c):o.g.navigator.msPointerEnabled?r[t](e,{mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"}[n],c):(r[t](e,{mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"}[n],c),r[t](e,n,c))}function p(e){if(void 0!==e.touches)return e.touches.length;if(void 0!==e.which&&0!==e.which)return e.which;if(void 0!==e.buttons)return e.buttons;var t=e.button;return void 0!==t?1&t?1:2&t?3:4&t?2:0:void 0}function m(e,t){return void 0!==o.g[t]?o.g[t]:h.clientHeight?h[e]:d.body[e]}function g(e,t,o){var n,r=e||{},c=r.className;return r.className+=" gu-hide",n=d.elementFromPoint(t,o),r.className=c,n}function v(){return!1}function y(){return!0}function w(e){return e.width||e.right-e.left}function x(e){return e.height||e.bottom-e.top}function S(e){return e.parentNode===d?null:e.parentNode}function _(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||T(e)}function T(e){return!!e&&"false"!==e.contentEditable&&("true"===e.contentEditable||T(S(e)))}function E(e){return e.nextElementSibling||function(){var t=e;do{t=t.nextSibling}while(t&&1!==t.nodeType);return t}()}function O(e,t){var o=function(e){return e.targetTouches&&e.targetTouches.length?e.targetTouches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e}(t),n={pageX:"clientX",pageY:"clientY"};return e in n&&!(e in o)&&n[e]in o&&(e=n[e]),o[e]}e.exports=function(e,t){var o,T,A,N,$,P,z,G,F,B,W;1===arguments.length&&!1===Array.isArray(e)&&(t=e,e=[]);var U,j=null,Z=t||{};void 0===Z.moves&&(Z.moves=y),void 0===Z.accepts&&(Z.accepts=y),void 0===Z.invalid&&(Z.invalid=function(){return!1}),void 0===Z.containers&&(Z.containers=e||[]),void 0===Z.isContainer&&(Z.isContainer=v),void 0===Z.copy&&(Z.copy=!1),void 0===Z.copySortSource&&(Z.copySortSource=!1),void 0===Z.revertOnSpill&&(Z.revertOnSpill=!1),void 0===Z.removeOnSpill&&(Z.removeOnSpill=!1),void 0===Z.direction&&(Z.direction="vertical"),void 0===Z.ignoreInputTextSelection&&(Z.ignoreInputTextSelection=!0),void 0===Z.mirrorContainer&&(Z.mirrorContainer=d.body);var q=n({containers:Z.containers,start:function(e){var t=oe(e);t&&ne(t)},end:re,cancel:ce,remove:le,destroy:function(){Y(!0),se({})},canMove:function(e){return!!oe(e)},dragging:!1});return!0===Z.removeOnSpill&&q.on("over",(function(e){c.rm(e,"gu-hide")})).on("out",(function(e){q.dragging&&c.add(e,"gu-hide")})),Y(),q;function K(e){return-1!==q.containers.indexOf(e)||Z.isContainer(e)}function Y(e){var t=e?"remove":"add";u(h,t,"mousedown",ee),u(h,t,"mouseup",se)}function X(e){u(h,e?"remove":"add","mousemove",te)}function Q(e){var t=e?"remove":"add";r[t](h,"selectstart",J),r[t](h,"click",J)}function J(e){U&&e.preventDefault()}function ee(e){if(P=e.clientX,z=e.clientY,1===p(e)&&!e.metaKey&&!e.ctrlKey){var t=e.target,o=oe(t);o&&(U=o,X(),"mousedown"===e.type&&(_(t)?t.focus():e.preventDefault()))}}function te(e){if(U)if(0!==p(e)){if(void 0===e.clientX||e.clientX!==P||void 0===e.clientY||e.clientY!==z){if(Z.ignoreInputTextSelection){var t=O("clientX",e),n=O("clientY",e);if(_(d.elementFromPoint(t,n)))return}var r=U;X(!0),Q(),re(),ne(r);var g,v={left:(g=A.getBoundingClientRect()).left+m("scrollLeft","pageXOffset"),top:g.top+m("scrollTop","pageYOffset")};N=O("pageX",e)-v.left,$=O("pageY",e)-v.top,c.add(B||A,"gu-transit"),function(){if(!o){var e=A.getBoundingClientRect();(o=A.cloneNode(!0)).style.width=w(e)+"px",o.style.height=x(e)+"px",c.rm(o,"gu-transit"),c.add(o,"gu-mirror"),Z.mirrorContainer.appendChild(o),u(h,"add","mousemove",pe),c.add(Z.mirrorContainer,"gu-unselectable"),q.emit("cloned",o,A,"mirror")}}(),pe(e)}}else se({})}function oe(e){if(!(q.dragging&&o||K(e))){for(var t=e;S(e)&&!1===K(S(e));){if(Z.invalid(e,t))return;if(!(e=S(e)))return}var n=S(e);if(n&&!Z.invalid(e,t)&&Z.moves(e,n,t,E(e)))return{item:e,source:n}}}function ne(e){var t,o;t=e.item,o=e.source,("boolean"==typeof Z.copy?Z.copy:Z.copy(t,o))&&(B=e.item.cloneNode(!0),q.emit("cloned",B,e.item,"copy")),T=e.source,A=e.item,G=F=E(e.item),q.dragging=!0,q.emit("drag",A,T)}function re(){if(q.dragging){var e=B||A;ae(e,S(e))}}function ie(){U=!1,X(!0),Q(!0)}function se(e){if(ie(),q.dragging){var t=B||A,n=O("clientX",e),r=O("clientY",e),c=ue(g(o,n,r),n,r);c&&(B&&Z.copySortSource||!B||c!==T)?ae(t,c):Z.removeOnSpill?le():ce()}}function ae(e,t){var o=S(e);B&&Z.copySortSource&&t===T&&o.removeChild(A),he(t)?q.emit("cancel",e,T,T):q.emit("drop",e,t,T,F),de()}function le(){if(q.dragging){var e=B||A,t=S(e);t&&t.removeChild(e),q.emit(B?"cancel":"remove",e,t,T),de()}}function ce(e){if(q.dragging){var t=arguments.length>0?e:Z.revertOnSpill,o=B||A,n=S(o),r=he(n);!1===r&&t&&(B?n&&n.removeChild(B):T.insertBefore(o,G)),r||t?q.emit("cancel",o,T,T):q.emit("drop",o,n,T,F),de()}}function de(){var e=B||A;ie(),o&&(c.rm(Z.mirrorContainer,"gu-unselectable"),u(h,"remove","mousemove",pe),S(o).removeChild(o),o=null),e&&c.rm(e,"gu-transit"),W&&clearTimeout(W),q.dragging=!1,j&&q.emit("out",e,j,T),q.emit("dragend",e),T=A=B=G=F=W=j=null}function he(e,t){var n;return n=void 0!==t?t:o?F:E(B||A),e===T&&n===G}function ue(e,t,o){for(var n=e;n&&!r();)n=S(n);return n;function r(){if(!1===K(n))return!1;var r=fe(n,e),c=me(n,r,t,o);return!!he(n,c)||Z.accepts(A,n,T,c)}}function pe(e){if(o){e.preventDefault();var t=O("clientX",e),n=O("clientY",e),r=t-N,c=n-$;o.style.left=r+"px",o.style.top=c+"px";var d=B||A,h=g(o,t,n),u=ue(h,t,n),p=null!==u&&u!==j;(p||null===u)&&(j&&w("out"),j=u,p&&w("over"));var m=S(d);if(u!==T||!B||Z.copySortSource){var v,y=fe(u,h);if(null!==y)v=me(u,y,t,n);else{if(!0!==Z.revertOnSpill||B)return void(B&&m&&m.removeChild(d));v=G,u=T}(null===v&&p||v!==d&&v!==E(d))&&(F=v,u.insertBefore(d,v),q.emit("shadow",d,u,T))}else m&&m.removeChild(d)}function w(e){q.emit(e,d,j,T)}}function fe(e,t){for(var o=t;o!==e&&S(o)!==e;)o=S(o);return o===h?null:o}function me(e,t,o,n){var r="horizontal"===Z.direction,c=t!==e?function(){var e=t.getBoundingClientRect();return d(r?o>e.left+w(e)/2:n>e.top+x(e)/2)}():function(){var t,c,d,h=e.children.length;for(t=0;t<h;t++){if(d=(c=e.children[t]).getBoundingClientRect(),r&&d.left+d.width/2>o)return c;if(!r&&d.top+d.height/2>n)return c}return null}();return c;function d(e){return e?E(t):t}}}},9915:(e,t,o)=>{o.d(t,{Z:()=>v});var n=o(4184),r=o.n(n),c=o(6689),d=o.n(c);class a{name;notify;constructor(e,t){this.name=e,this.notify=t}}class l{observer;unsubscribeCallback;constructor(e,t){this.observer=e,this.unsubscribeCallback=t}unsubscribe(){this.unsubscribeCallback(this.observer)}}const h=new class{observers;constructor(){this.observers=new Set}broadcast(e){this.observers&&this.observers.forEach((t=>{e.name===t.name&&t.notify(e)}))}subscribe(e,t){const o=new a(e,t);return this.observers.add(o),new l(o,(e=>{this.observers.delete(e)}))}unsubscribe(e){e&&e.unsubscribe()}},u="ON_DRAG_START",p="ON_DRAG_END";let m=null;const g=new Map;class f extends d().Component{dndComponentRef=d().createRef();mounted=!1;onDragStartSubscription;onDragEndSubscription;constructor(e){super(e),this.onDragStartSubscription=h.subscribe(u,(e=>{const t=null!==e.content&&g.get(e.content);this.setState({isDroppable:this.canDrop(void 0,t,this.props.dndData)})})),this.onDragEndSubscription=h.subscribe(p,(()=>{this.mounted&&this.setState({isDroppable:!1})})),this.state={isDragging:!1,isDroppable:!1,isOver:!1}}componentDidMount(){if(this.mounted=!0,null!==m){const e=g.get(m);this.setState({isDroppable:this.canDrop(void 0,e,this.props.dndData)})}}componentWillUnmount(){this.mounted=!1,this.onDragStartSubscription.unsubscribe(),this.onDragEndSubscription.unsubscribe()}canDrop(e,t,o){const{canDrop:n}=this.props;return n&&("boolean"==typeof n||n(e,t,o))}addDragEndEventListenerOnce(){const e=this.dndComponentRef?.current;e&&(e.removeEventListener("dragend",this.onDragEnd),e.addEventListener("dragend",this.onDragEnd,{once:!0}))}isDraggable(){const{canDrag:e,dndData:t}=this.props;return!!e&&("boolean"==typeof e||e(t))}onDragEnter(e){if(e.stopPropagation(),this.setState({isOver:!0}),this.props.onDragEnter){const t=g.get(m);this.props.onDragEnter(e,t,this.props.dndData)}}onDragLeave(e){e.stopPropagation();const t=g.get(m);this.props.onDragLeave&&this.props.onDragLeave(e,t,this.props.dndData),this.setState({isDroppable:this.canDrop(void 0,t,this.props.dndData),isOver:!1})}onDrag(e){e.stopPropagation()}onDragOver(e){e.stopPropagation();const t=g.get(m);this.canDrop(e,t,this.props.dndData)&&(e.preventDefault(),this.setState({isOver:!0}))}onDragStart(e){e.stopPropagation();const{dndData:t,dndId:o,onBeginDrag:n}=this.props;m=o,g.set(m,t),this.addDragEndEventListenerOnce(),h.broadcast({name:u,content:m}),n&&n(e,t),this.setState({isDragging:!0})}onDragEnd=e=>{e.stopPropagation();const{dndData:t,onEndDrag:o}=this.props;o&&o(e,g.get(m),t),h.broadcast({name:p,content:m}),g.delete(m),m=null,this.mounted&&this.setState({isDragging:!1})};onDrop(e){e.stopPropagation();const{dndData:t,onDrop:o}=this.props;o&&(o(e,g.get(m),t),this.setState({isOver:!1}))}cloneChildrenWithShallowMergedProps(e,t){if(e)return d().Children.map(e,(e=>d().isValidElement(e)?d().cloneElement(e,t):e))}render(){const{children:e,className:t,forwardDndPropsToChildren:o,style:n}=this.props,{isDragging:c,isDroppable:h,isOver:u}=this.state,p=this.isDraggable(),m=r()("dnd-component",t,{draggable:p,dragging:c,droppable:h,hovering:u});return d().createElement("div",{className:m,draggable:p,onDrag:e=>this.onDrag(e),onDragEnter:e=>this.onDragEnter(e),onDragLeave:e=>this.onDragLeave(e),onDragOver:e=>this.onDragOver(e),onDragStart:e=>this.onDragStart(e),onDrop:e=>this.onDrop(e),ref:this.dndComponentRef,style:n},o?this.cloneChildrenWithShallowMergedProps(e,{isDraggable:p,isDragging:c,isDroppable:h,isOver:u}):e)}}var v=f},3607:(e,t,o)=>{o.d(t,{Z:()=>vs});var n={};o.r(n),o.d(n,{types:()=>wi});var r=o(4184),c=o.n(r),d=o(6689),h=o.n(d);function u(e){switch(e){case 48:return 0;case 49:return 1;case 50:return 2;case 51:return 3;case 52:return 4;case 53:return 5;case 54:return 6;case 55:return 7;case 56:return 8;case 57:return 9;case 97:case 65:return 10;case 98:case 66:return 11;case 99:case 67:return 12;case 100:case 68:return 13;case 101:case 69:return 14;case 102:case 70:return 15}return 0}function p(e,t,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+6*(t-e)*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}function m(e){const t=e.h/360,{s:o,l:n,a:r}=e;let c,d,h;if(0===o)c=d=h=n;else{const e=n<.5?n*(1+o):n+o-n*o,r=2*n-e;c=p(r,e,t+1/3),d=p(r,e,t),h=p(r,e,t-1/3)}return{type:"rgba",r:Math.round(255*c),g:Math.round(255*d),b:Math.round(255*h),a:r}}const g=/^((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function v(e){if(0===(e=e.trim()).length)return null;if(35===e.charCodeAt(0))return function(e){const t=(e=e.trim()).length;if(0===t)return null;if(35!==e.charCodeAt(0))return null;if(7===t)return{type:"rgba",r:16*u(e.charCodeAt(1))+u(e.charCodeAt(2)),g:16*u(e.charCodeAt(3))+u(e.charCodeAt(4)),b:16*u(e.charCodeAt(5))+u(e.charCodeAt(6)),a:1};if(9===t)return{type:"rgba",r:16*u(e.charCodeAt(1))+u(e.charCodeAt(2)),g:16*u(e.charCodeAt(3))+u(e.charCodeAt(4)),b:16*u(e.charCodeAt(5))+u(e.charCodeAt(6)),a:(16*u(e.charCodeAt(7))+u(e.charCodeAt(8)))/255};if(4===t){const t=u(e.charCodeAt(1)),o=u(e.charCodeAt(2)),n=u(e.charCodeAt(3));return{type:"rgba",r:16*t+t,g:16*o+o,b:16*n+n,a:1}}if(5===t){const t=u(e.charCodeAt(1)),o=u(e.charCodeAt(2)),n=u(e.charCodeAt(3)),r=u(e.charCodeAt(4));return{type:"rgba",r:16*t+t,g:16*o+o,b:16*n+n,a:(16*r+r)/255}}return null}(e);const t=g.exec(e);if(null==t)return null;const o=t[1];let n;switch(o){case"rgb":case"hsl":n=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),1];break;case"rgba":case"hsla":n=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),parseFloat(t[5])];break;default:return null}return"hsl"===o||"hsla"===o?m({h:n[0],s:n[1],l:n[2],a:n[3]}):{type:"rgba",r:n[0],g:n[1],b:n[2],a:n[3]}}const y=e=>{return"hsla"===(t=v(e)).type&&(t=m(t)),(299*t.r+587*t.g+114*t.b)/1e3<128?"#FFFFFF":"#000000";var t};var w=o(827),x=o(3308);const S=e=>!(e===w.o$||e===w.lH),_=/^.*(:?\n){0,2}/m;function T(e,t="\n"){return e.replace("\n"===t?_:new RegExp(`^.*(:?${t}){0,2}`,"m"),"")}const E=/^co-authored-by:\s*([^\s<>]+(?:\s+[^\s<>]+)*)\s*<([^<>]+)>/gim;function O(e){const t=[];for(let o=E.exec(e);null!==o;o=E.exec(e)){const[,e,n]=o;t.push({name:e,email:n})}return t}var A=o(376),N=o(7675);const $=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,P=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,z=new Map;let G;const F=["th","st","nd","rd"];function B(e){const t=e%100;return`${e}${F[(t-20)%10]??F[t]??F[0]}`}let W={};function U(e,t,o,n){const r=`${e}${n?"_compact":""}`;let c=W[e];return c||(c=o+e*t+t/2,W[r]=c,c)}const j={d:"d",fill:"fill","shape-rendering":"shapeRendering","stroke-linejoin":"strokeLinejoin","stroke-width":"strokeWidth","stroke-dasharray":"strokeDasharray",stroke:"stroke",x1:"x1",x2:"x2",y1:"y1",y2:"y2"};function Z(e,t){let o="";for(const[e,n]of Object.entries(j)){const r=t[n];r&&(o+=` ${e}="${r}"`)}return`<${e}${o} />`}function q(e){return Z("line",e)}function K(e,t,o,n){return{fill:"none",shapeRendering:"auto",strokeLinejoin:"round",strokeWidth:o,strokeDasharray:S(e)?n?1:2:0,stroke:t}}function Y(e,t,o,n){return`${e}_${t}_${o||"+"}${n?"_compact":""}`}function X(e,t,o){return`${e}_${t||"+"}${o?"_compact":""}`}var Q=o(5191),J=o(466);const ee={"CommitDiffSection-FileAdded":"added","CommitDiffSection-FileDeleted":"deleted","CommitDiffSection-FileModified":"modified","CommitDiffSection-FileRenamed":"renamed","CommitDiffSection-NFilesAdded":"{0} added","CommitDiffSection-NFilesDeleted":"{0} deleted","CommitDiffSection-NFilesModified":"{0} modified","CommitDiffSection-NFilesRenamed":"{0} renamed","Graph-IsLoadingRows":"Loading...","Graph-NoCommits":"No commits","Graph-WorkInProgress":"Work in progress","GraphHeader-BranchTag":"BRANCH / TAG","GraphHeader-Changes":"CHANGES","GraphHeader-CommitAuthor":"AUTHOR","GraphHeader-CommitDateTime":"COMMIT DATE / TIME","GraphHeader-CommitGraph":"GRAPH","GraphHeader-CommitMessage":"COMMIT MESSAGE","GraphHeader-CommitSha":"SHA","GraphHeader-EditColumns":"Columns settings","GraphHeader-Filter":"Filter","GraphHeader-HiddenRefs-btn":"Hidden Branches / Tags","OptionalGraphZone-CommitAuthor":"Author","OptionalGraphZone-CommitDateTime":"Date / Time","OptionalGraphZone-CommitSha":"Sha","IssueIcon-Tooltip":"{0}: {1}","PullRequestIcon-Tooltip":"#{0}: {1}\n Double-click to open pull request on {2}","Ref-Current":"Current Branch","Ref-Local":"Local Branch","Ref-Remote":"Remote Branch","Ref-Tag":"Tag","RefZone-EnterBranchName":"enter branch name","RefZone-EnterTagName":"enter tag name","Timeline-1HourAgo":"1 hour ago","Timeline-NHoursAgo":"{0} hours ago","Timeline-Yesterday":"yesterday","Timeline-NDaysAgo":"{0} days ago","Timeline-1WeekAgo":"a week ago","Timeline-NWeeksAgo":"{0} weeks ago","Timeline-1MonthAgo":"a month ago","Timeline-NMonthsAgo":"{0} months ago","Timeline-1YearAgo":"a year ago","Timeline-NYearsAgo":"{0} years ago","Timeline-NPlusYearsAgo":"{0}+ years ago","UpstreamIndicatorIcon-BehindAndAheadTooltip":"{0} commit(s) behind and {1} commit(s) ahead of {2}\n Double-click to pull changes","UpstreamIndicatorIcon-BehindTooltip":"{0} commit(s) behind {1}\n Double-click to pull changes","UpstreamIndicatorIcon-AheadTooltip":"{0} commit(s) ahead of {1}\n Double-click to pull changes",ResizePanel:"Resize Panel",Stash:"Stash",Hide:"Hide",Show:"Show","WorkDirMessageInput-WIPPlaceholder":"WIP"};var te=o(8649),oe=o(4561);const ne={0:1,90:0,180:-1,270:0},re={0:0,90:1,180:0,270:-1},ie=x.O5-x.NP,se=` A ${ie} ${ie} 0 0 0 `;function ae(e,t,o){const n=ne[o],r=re[o];return{x:e-x.O5*n,xOffset:-n*x.NP,y:t+x.O5*r,yOffset:r*x.NP}}const le={};var ce=function(e,t,o,n,r,c,d,h){const u=K(n,e,d,h);return u.d=function(e,t,o,n){const r=`${e}_${t}_${o}_${n}`;let c=le[r];if(c)return c;const d=ae(e,t,n),h=ae(e,t,o);return c=`M ${d.x} ${d.y}${h.xOffset?` H ${d.x+h.xOffset}`:` V ${d.y+h.yOffset}`}${se}${h.x+d.xOffset} ${h.y+d.yOffset}${d.xOffset?` H ${h.x}`:` V ${h.y}`}`,le[r]=c,c}(r,c,o,t),Z("path",u)};let de={};function he(e,t,o,n,r,c,d,h){const u=Y(e,t,o,h);let p=de[u];return p||(p=function(e,t){return e===t}(t,e)?function(e,t,o,n,r,c,d){const h=K(o,e,c,d);return h.x1=U(t,n,r,d),h.x2=U(t,n,r,d),h.y1=0,h.y2=x.at/2,q(h)}(n[e],t,o,r,c,d,h):function(e,t,o,n,r,c,d,h){const u=K(n,e,d,h),p=t<o?-x.O5:x.O5,m={...u};m.x1=U(o,r,c,h),m.x2=U(o,r,c,h),m.y1=0,m.y2=x.An;const g={...u};return g.x1=U(o,r,c,h)+p,g.x2=U(t,r,c,h),g.y1=x.at/2,g.y2=x.at/2,`<g>${q(m)}${ce(e,t>o?0:90,t>o?90:180,n,U(o,r,c,h)+p,x.An,d,h)}${q(g)}</g>`}(n[e],t,e,o,r,c,d,h),de[u]=p,p)}let ue={};function pe(e,t,o,n,r,c,d){const h=X(e,t,d);let u=ue[h];if(u)return u;const p=U(e,n,r,d),m=K(t,o[e],c,d);return m.x1=p,m.x2=p,m.y1=0,m.y2=x.at,u=q(m),ue[h]=u,u}let fe={};function me(e,t,o,n,r,c,d,h){const u=Y(e,t,o,h);let p=fe[u];return p||(p=function(e,t){return e===t}(t,e)?function(e,t,o,n,r,c,d){const h=K(o,e,c,d);return h.x1=U(t,n,r,d),h.x2=U(t,n,r,d),h.y1=x.at/2,h.y2=x.at,q(h)}(n[e],t,o,r,c,d,h):function(e,t,o,n,r,c,d,h){const u=K(n,e,d,h),p=t<o?-x.O5:x.O5,m={...u};m.x1=U(o,r,c,h),m.x2=U(o,r,c,h),m.y1=x.at-x.$s,m.y2=x.at;const g={...u};return g.x1=U(o,r,c,h)+p,g.x2=U(t,r,c,h),g.y1=x.at/2,g.y2=x.at/2,`<g>${ce(e,t<o?180:270,t<o?270:0,n,U(o,r,c,h)+p,x.at-x.$s,d,h)}${q(m)}${q(g)}</g>`}(n[e],t,e,o,r,c,d,h),fe[u]=p,p)}let ge={};function be(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ve(e){return ve="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ve(e)}function ye(e){var t=function(e,t){if("object"!==ve(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,"string");if("object"!==ve(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===ve(t)?t:String(t)}function we(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,ye(n.key),n)}}function Ce(e,t,o){return t&&we(e.prototype,t),o&&we(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}function xe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Se(e,t){if(t&&("object"===ve(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return xe(e)}function _e(e){return _e=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_e(e)}function Te(e,t){return Te=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Te(e,t)}function Re(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Te(e,t)}function ke(e,t,o){return(t=ye(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var Ee=o(6871);function Oe(){return Oe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},Oe.apply(this,arguments)}function Ie(e){var t,o,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=Ie(e[t]))&&(n&&(n+=" "),n+=o);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}const Me=function(){for(var e,t,o=0,n="";o<arguments.length;)(e=arguments[o++])&&(t=Ie(e))&&(n&&(n+=" "),n+=t);return n};function De(e){var t=e.cellCount,o=e.cellSize,n=e.computeMetadataCallback,r=e.computeMetadataCallbackProps,c=e.nextCellsCount,d=e.nextCellSize,h=e.nextScrollToIndex,u=e.scrollToIndex,p=e.updateScrollOffsetForScrollToIndex;t===c&&("number"!=typeof o&&"number"!=typeof d||o===d)||(n(r),u>=0&&u===h&&p())}function Ae(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)o=c[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)o=c[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var Ne=function(){function e(t){var o=t.cellCount,n=t.cellSizeGetter,r=t.estimatedCellSize;be(this,e),ke(this,"_cellSizeAndPositionData",{}),ke(this,"_lastMeasuredIndex",-1),ke(this,"_lastBatchedIndex",-1),ke(this,"_cellCount",void 0),ke(this,"_cellSizeGetter",void 0),ke(this,"_estimatedCellSize",void 0),this._cellSizeGetter=n,this._cellCount=o,this._estimatedCellSize=r}return Ce(e,[{key:"areOffsetsAdjusted",value:function(){return!1}},{key:"configure",value:function(e){var t=e.cellCount,o=e.estimatedCellSize,n=e.cellSizeGetter;this._cellCount=t,this._estimatedCellSize=o,this._cellSizeGetter=n}},{key:"getCellCount",value:function(){return this._cellCount}},{key:"getEstimatedCellSize",value:function(){return this._estimatedCellSize}},{key:"getLastMeasuredIndex",value:function(){return this._lastMeasuredIndex}},{key:"getOffsetAdjustment",value:function(){return 0}},{key:"getSizeAndPositionOfCell",value:function(e){if(e<0||e>=this._cellCount)throw Error("Requested index ".concat(e," is outside of range 0..").concat(this._cellCount));if(e>this._lastMeasuredIndex)for(var t=this.getSizeAndPositionOfLastMeasuredCell(),o=t.offset+t.size,n=this._lastMeasuredIndex+1;n<=e;n++){var r=this._cellSizeGetter({index:n});if(void 0===r||isNaN(r))throw Error("Invalid size returned for cell ".concat(n," of value ").concat(r));null===r?(this._cellSizeAndPositionData[n]={offset:o,size:0},this._lastBatchedIndex=e):(this._cellSizeAndPositionData[n]={offset:o,size:r},o+=r,this._lastMeasuredIndex=e)}return this._cellSizeAndPositionData[e]}},{key:"getSizeAndPositionOfLastMeasuredCell",value:function(){return this._lastMeasuredIndex>=0?this._cellSizeAndPositionData[this._lastMeasuredIndex]:{offset:0,size:0}}},{key:"getTotalSize",value:function(){var e=this.getSizeAndPositionOfLastMeasuredCell();return e.offset+e.size+(this._cellCount-this._lastMeasuredIndex-1)*this._estimatedCellSize}},{key:"getUpdatedOffsetForIndex",value:function(e){var t=e.align,o=void 0===t?"auto":t,n=e.containerSize,r=e.currentOffset,c=e.targetIndex;if(n<=0)return 0;var d,h=this.getSizeAndPositionOfCell(c),u=h.offset,p=u-n+h.size;switch(o){case"start":d=u;break;case"end":d=p;break;case"center":d=u-(n-h.size)/2;break;default:d=Math.max(p,Math.min(u,r))}var m=this.getTotalSize();return Math.max(0,Math.min(m-n,d))}},{key:"getVisibleCellRange",value:function(e){var t=e.containerSize,o=e.offset;if(0===this.getTotalSize())return{};var n=o+t,r=this._findNearestCell(o),c=this.getSizeAndPositionOfCell(r);o=c.offset+c.size;for(var d=r;o<n&&d<this._cellCount-1;)d++,o+=this.getSizeAndPositionOfCell(d).size;return{start:r,stop:d}}},{key:"resetCell",value:function(e){this._lastMeasuredIndex=Math.min(this._lastMeasuredIndex,e-1)}},{key:"_binarySearch",value:function(e,t,o){for(;t<=e;){var n=t+Math.floor((e-t)/2),r=this.getSizeAndPositionOfCell(n).offset;if(r===o)return n;r<o?t=n+1:r>o&&(e=n-1)}return t>0?t-1:0}},{key:"_exponentialSearch",value:function(e,t){for(var o=1;e<this._cellCount&&this.getSizeAndPositionOfCell(e).offset<t;)e+=o,o*=2;return this._binarySearch(Math.min(e,this._cellCount-1),Math.floor(e/2),t)}},{key:"_findNearestCell",value:function(e){if(isNaN(e))throw Error("Invalid offset ".concat(e," specified"));e=Math.max(0,e);var t=this.getSizeAndPositionOfLastMeasuredCell(),o=Math.max(0,this._lastMeasuredIndex);return t.offset>=e?this._binarySearch(o,0,e):this._exponentialSearch(o,e)}}]),e}(),$e=function(){function e(t){var o=t.maxScrollSize,n=void 0===o?"undefined"!=typeof window&&window.chrome?16777100:15e5:o,r=Ae(t,["maxScrollSize"]);be(this,e),ke(this,"_cellSizeAndPositionManager",void 0),ke(this,"_maxScrollSize",void 0),this._cellSizeAndPositionManager=new Ne(r),this._maxScrollSize=n}return Ce(e,[{key:"areOffsetsAdjusted",value:function(){return this._cellSizeAndPositionManager.getTotalSize()>this._maxScrollSize}},{key:"configure",value:function(e){this._cellSizeAndPositionManager.configure(e)}},{key:"getCellCount",value:function(){return this._cellSizeAndPositionManager.getCellCount()}},{key:"getEstimatedCellSize",value:function(){return this._cellSizeAndPositionManager.getEstimatedCellSize()}},{key:"getLastMeasuredIndex",value:function(){return this._cellSizeAndPositionManager.getLastMeasuredIndex()}},{key:"getOffsetAdjustment",value:function(e){var t=e.containerSize,o=e.offset,n=this._cellSizeAndPositionManager.getTotalSize(),r=this.getTotalSize(),c=this._getOffsetPercentage({containerSize:t,offset:o,totalSize:r});return Math.round(c*(r-n))}},{key:"getSizeAndPositionOfCell",value:function(e){return this._cellSizeAndPositionManager.getSizeAndPositionOfCell(e)}},{key:"getSizeAndPositionOfLastMeasuredCell",value:function(){return this._cellSizeAndPositionManager.getSizeAndPositionOfLastMeasuredCell()}},{key:"getTotalSize",value:function(){return Math.min(this._maxScrollSize,this._cellSizeAndPositionManager.getTotalSize())}},{key:"getUpdatedOffsetForIndex",value:function(e){var t=e.align,o=void 0===t?"auto":t,n=e.containerSize,r=e.currentOffset,c=e.targetIndex;r=this._safeOffsetToOffset({containerSize:n,offset:r});var d=this._cellSizeAndPositionManager.getUpdatedOffsetForIndex({align:o,containerSize:n,currentOffset:r,targetIndex:c});return this._offsetToSafeOffset({containerSize:n,offset:d})}},{key:"getVisibleCellRange",value:function(e){var t=e.containerSize,o=e.offset;return o=this._safeOffsetToOffset({containerSize:t,offset:o}),this._cellSizeAndPositionManager.getVisibleCellRange({containerSize:t,offset:o})}},{key:"resetCell",value:function(e){this._cellSizeAndPositionManager.resetCell(e)}},{key:"_getOffsetPercentage",value:function(e){var t=e.containerSize,o=e.offset,n=e.totalSize;return n<=t?0:o/(n-t)}},{key:"_offsetToSafeOffset",value:function(e){var t=e.containerSize,o=e.offset,n=this._cellSizeAndPositionManager.getTotalSize(),r=this.getTotalSize();if(n===r)return o;var c=this._getOffsetPercentage({containerSize:t,offset:o,totalSize:n});return Math.round(c*(r-t))}},{key:"_safeOffsetToOffset",value:function(e){var t=e.containerSize,o=e.offset,n=this._cellSizeAndPositionManager.getTotalSize(),r=this.getTotalSize();if(n===r)return o;var c=this._getOffsetPercentage({containerSize:t,offset:o,totalSize:r});return Math.round(c*(n-t))}}]),e}();function Pe(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t={};return function(o){var n=o.callback,r=o.indices,c=Object.keys(r),d=!e||c.every((function(e){var t=r[e];return Array.isArray(t)?t.length>0:t>=0})),h=c.length!==Object.keys(t).length||c.some((function(e){var o=t[e],n=r[e];return Array.isArray(n)?o.join(",")!==n.join(","):o!==n}));t=r,d&&h&&n(r)}}var ze=-1;function He(e){var t=e.cellSize,o=e.cellSizeAndPositionManager,n=e.previousCellsCount,r=e.previousCellSize,c=e.previousScrollToAlignment,d=e.previousScrollToIndex,h=e.previousSize,u=e.scrollOffset,p=e.scrollToAlignment,m=e.scrollToIndex,g=e.size,v=e.sizeJustIncreasedFromZero,y=e.updateScrollIndexCallback,w=o.getCellCount(),x=m>=0&&m<w;x&&(g!==h||v||!r||"number"==typeof t&&t!==r||p!==c||m!==d)?y(m):!x&&w>0&&(g<h||w<n)&&u>o.getTotalSize()-g&&y(w-1)}const Le=!("undefined"==typeof window||!window.document||!window.document.createElement);var Ge,Fe;function Be(e){if((!Ge&&0!==Ge||e)&&Le){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),Ge=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return Ge}var We,Ue,je=(Fe="undefined"!=typeof window?window:"undefined"!=typeof self?self:{}).requestAnimationFrame||Fe.webkitRequestAnimationFrame||Fe.mozRequestAnimationFrame||Fe.oRequestAnimationFrame||Fe.msRequestAnimationFrame||function(e){return Fe.setTimeout(e,1e3/60)},Ve=Fe.cancelAnimationFrame||Fe.webkitCancelAnimationFrame||Fe.mozCancelAnimationFrame||Fe.oCancelAnimationFrame||Fe.msCancelAnimationFrame||function(e){Fe.clearTimeout(e)},Ze=je,qe=Ve,Ke=function(e){return qe(e.id)},Ye=function(e,t){var o;Promise.resolve().then((function(){o=Date.now()}));var n={id:Ze((function r(){Date.now()-o>=t?e.call():n.id=Ze(r)}))};return n};function Xe(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function Qe(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?Xe(o,!0).forEach((function(t){ke(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):Xe(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var Je="requested",et=(Ue=We=function(e){function t(e){var o;be(this,t),ke(xe(o=Se(this,_e(t).call(this,e))),"_onGridRenderedMemoizer",Pe()),ke(xe(o),"_onScrollMemoizer",Pe(!1)),ke(xe(o),"_deferredInvalidateColumnIndex",null),ke(xe(o),"_deferredInvalidateRowIndex",null),ke(xe(o),"_recomputeScrollLeftFlag",!1),ke(xe(o),"_recomputeScrollTopFlag",!1),ke(xe(o),"_horizontalScrollBarSize",0),ke(xe(o),"_verticalScrollBarSize",0),ke(xe(o),"_scrollbarPresenceChanged",!1),ke(xe(o),"_scrollingContainer",void 0),ke(xe(o),"_childrenToDisplay",void 0),ke(xe(o),"_columnStartIndex",void 0),ke(xe(o),"_columnStopIndex",void 0),ke(xe(o),"_rowStartIndex",void 0),ke(xe(o),"_rowStopIndex",void 0),ke(xe(o),"_renderedColumnStartIndex",0),ke(xe(o),"_renderedColumnStopIndex",0),ke(xe(o),"_renderedRowStartIndex",0),ke(xe(o),"_renderedRowStopIndex",0),ke(xe(o),"_initialScrollTop",void 0),ke(xe(o),"_initialScrollLeft",void 0),ke(xe(o),"_disablePointerEventsTimeoutId",void 0),ke(xe(o),"_styleCache",{}),ke(xe(o),"_cellCache",{}),ke(xe(o),"_debounceScrollEndedCallback",(function(){o._disablePointerEventsTimeoutId=null,o.setState({isScrolling:!1,needToResetStyleCache:!1})})),ke(xe(o),"_invokeOnGridRenderedHelper",(function(){var e=o.props.onSectionRendered;o._onGridRenderedMemoizer({callback:e,indices:{columnOverscanStartIndex:o._columnStartIndex,columnOverscanStopIndex:o._columnStopIndex,columnStartIndex:o._renderedColumnStartIndex,columnStopIndex:o._renderedColumnStopIndex,rowOverscanStartIndex:o._rowStartIndex,rowOverscanStopIndex:o._rowStopIndex,rowStartIndex:o._renderedRowStartIndex,rowStopIndex:o._renderedRowStopIndex}})})),ke(xe(o),"_onWheel",(function(e){var t=e.deltaX,n=e.deltaY;o.handleWheelEvent({deltaX:t,deltaY:n})})),ke(xe(o),"_setScrollingContainerRef",(function(e){e&&(e.removeEventListener("wheel",o.preventDefault),e.addEventListener("wheel",o.preventDefault,{passive:!1})),o._scrollingContainer=e})),ke(xe(o),"_onScroll",(function(e){e.target===o._scrollingContainer&&o.handleScrollEvent(e.target)}));var n=new $e({cellCount:e.columnCount,cellSizeGetter:function(o){return t._wrapSizeGetter(e.columnWidth)(o)},estimatedCellSize:t._getEstimatedColumnSize(e)}),r=new $e({cellCount:e.rowCount,cellSizeGetter:function(o){return t._wrapSizeGetter(e.rowHeight)(o)},estimatedCellSize:t._getEstimatedRowSize(e)});return o.state={instanceProps:{columnSizeAndPositionManager:n,rowSizeAndPositionManager:r,prevColumnWidth:e.columnWidth,prevRowHeight:e.rowHeight,prevColumnCount:e.columnCount,prevRowCount:e.rowCount,prevIsScrolling:!0===e.isScrolling,prevScrollToColumn:e.scrollToColumn,prevScrollToRow:e.scrollToRow,scrollbarSize:0,scrollbarSizeMeasured:!1},isScrolling:!1,scrollDirectionHorizontal:1,scrollDirectionVertical:1,scrollLeft:0,scrollTop:0,scrollPositionChangeReason:null,needToResetStyleCache:!1},e.scrollToRow>0&&(o._initialScrollTop=o._getCalculatedScrollTop(e,o.state)),e.scrollToColumn>0&&(o._initialScrollLeft=o._getCalculatedScrollLeft(e,o.state)),o}return Re(t,e),Ce(t,[{key:"getOffsetForCell",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.alignment,o=void 0===t?this.props.scrollToAlignment:t,n=e.columnIndex,r=void 0===n?this.props.scrollToColumn:n,c=e.rowIndex,d=void 0===c?this.props.scrollToRow:c,h=Qe({},this.props,{scrollToAlignment:o,scrollToColumn:r,scrollToRow:d});return{scrollLeft:this._getCalculatedScrollLeft(h),scrollTop:this._getCalculatedScrollTop(h)}}},{key:"getTotalRowsHeight",value:function(){return this.state.instanceProps.rowSizeAndPositionManager.getTotalSize()}},{key:"getTotalColumnsWidth",value:function(){return this.state.instanceProps.columnSizeAndPositionManager.getTotalSize()}},{key:"handleScrollEvent",value:function(e){var t=e.scrollLeft,o=void 0===t?0:t,n=e.scrollTop,r=void 0===n?0:n;if(!(r<0)){this._debounceScrollEnded();var c=this.props,d=c.autoHeight,h=c.autoWidth,u=c.height,p=c.width,m=this.state.instanceProps,g=m.scrollbarSize,v=m.rowSizeAndPositionManager.getTotalSize(),y=m.columnSizeAndPositionManager.getTotalSize(),w=Math.min(Math.max(0,y-p+g),o),x=Math.min(Math.max(0,v-u+g),r);if(this.state.scrollLeft!==w||this.state.scrollTop!==x){var S={isScrolling:!0,scrollDirectionHorizontal:w!==this.state.scrollLeft?w>this.state.scrollLeft?1:ze:this.state.scrollDirectionHorizontal,scrollDirectionVertical:x!==this.state.scrollTop?x>this.state.scrollTop?1:ze:this.state.scrollDirectionVertical,scrollPositionChangeReason:"observed"};d||(S.scrollTop=x),h||(S.scrollLeft=w),S.needToResetStyleCache=!1,this.setState(S)}this._invokeOnScrollMemoizer({scrollLeft:w,scrollTop:x,totalColumnsWidth:y,totalRowsHeight:v})}}},{key:"preventDefault",value:function(e){e.preventDefault()}},{key:"handleWheelEvent",value:function(e){var t=e.deltaX,o=e.deltaY;this._debounceScrollEnded();var n=this.props,r=n.autoHeight,c=n.autoWidth,d=n.height,h=n.width,u=this.state.instanceProps.scrollbarSize,p=this.state.instanceProps.rowSizeAndPositionManager.getTotalSize(),m=this.state.instanceProps.columnSizeAndPositionManager.getTotalSize(),g=Math.min(Math.max(0,m-h+u),Math.max(0,this._scrollingContainer.scrollLeft+t)),v=Math.min(Math.max(0,p-d+u),Math.max(0,this._scrollingContainer.scrollTop+o));if(this.state.scrollLeft!==g||this.state.scrollTop!==v){var y={isScrolling:!0,scrollDirectionHorizontal:g!==this.state.scrollLeft?g>this.state.scrollLeft?1:ze:this.state.scrollDirectionHorizontal,scrollDirectionVertical:v!==this.state.scrollTop?v>this.state.scrollTop?1:ze:this.state.scrollDirectionVertical,scrollPositionChangeReason:Je};r||(y.scrollTop=v),c||(y.scrollLeft=g),y.needToResetStyleCache=!1,this.setState(y)}this._invokeOnScrollMemoizer({scrollLeft:g,scrollTop:v,totalColumnsWidth:m,totalRowsHeight:p})}},{key:"invalidateCellSizeAfterRender",value:function(e){var t=e.columnIndex,o=e.rowIndex;this._deferredInvalidateColumnIndex="number"==typeof this._deferredInvalidateColumnIndex?Math.min(this._deferredInvalidateColumnIndex,t):t,this._deferredInvalidateRowIndex="number"==typeof this._deferredInvalidateRowIndex?Math.min(this._deferredInvalidateRowIndex,o):o}},{key:"measureAllCells",value:function(){var e=this.props,t=e.columnCount,o=e.rowCount,n=this.state.instanceProps;n.columnSizeAndPositionManager.getSizeAndPositionOfCell(t-1),n.rowSizeAndPositionManager.getSizeAndPositionOfCell(o-1)}},{key:"recomputeGridSize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.columnIndex,o=void 0===t?0:t,n=e.rowIndex,r=void 0===n?0:n,c=this.props,d=c.scrollToColumn,h=c.scrollToRow,u=this.state.instanceProps;u.columnSizeAndPositionManager.resetCell(o),u.rowSizeAndPositionManager.resetCell(r),this._recomputeScrollLeftFlag=d>=0&&(1===this.state.scrollDirectionHorizontal?o<=d:o>=d),this._recomputeScrollTopFlag=h>=0&&(1===this.state.scrollDirectionVertical?r<=h:r>=h),this._styleCache={},this._cellCache={},this.forceUpdate()}},{key:"scrollToCell",value:function(e){var t=e.columnIndex,o=e.rowIndex,n=this.props,r=n.columnCount,c=n.onScrollToTargetCausedUpdate,d=this.state,h=d.scrollLeft,u=d.scrollTop,p=this.props,m=this.state,g=void 0,v=void 0;if(r>1&&void 0!==t){var y=this._updateScrollLeftForScrollToColumn(Qe({},p,{scrollToColumn:t}),m,!0);y&&"number"==typeof y.scrollLeft&&y.scrollLeft>=0&&(g=y.scrollLeft)}if(void 0!==o){var w=this._updateScrollTopForScrollToRow(Qe({},p,{scrollToRow:o}),m,!0);w&&"number"==typeof w.scrollTop&&w.scrollTop>=0&&(v=w.scrollTop)}if(c&&("number"==typeof g||"number"==typeof v)){var x="number"!=typeof g?g:h,S="number"!=typeof v?v:u;c({clientHeight:p.height,clientWidth:p.width,scrollHeight:this.getTotalRowsHeight(),scrollLeft:x,scrollTop:S,scrollWidth:this.getTotalColumnsWidth()})}}},{key:"componentDidMount",value:function(){var e=this.props,o=e.getScrollbarSize,n=e.height,r=e.scrollLeft,c=e.scrollToColumn,d=e.scrollTop,h=e.scrollToRow,u=e.width,p=this.state.instanceProps;if(this._initialScrollTop=0,this._initialScrollLeft=0,this._handleInvalidatedGridSize(),p.scrollbarSizeMeasured||this.setState((function(e){var t=Qe({},e,{needToResetStyleCache:!1});return t.instanceProps.scrollbarSize=o(),t.instanceProps.scrollbarSizeMeasured=!0,t})),"number"==typeof r&&r>=0||"number"==typeof d&&d>=0){var m=t._getScrollToPositionStateUpdate({prevState:this.state,scrollLeft:r,scrollTop:d});m&&(m.needToResetStyleCache=!1,this.setState(m))}this._scrollingContainer&&(this._scrollingContainer.scrollLeft!==this.state.scrollLeft&&(this._scrollingContainer.scrollLeft=this.state.scrollLeft),this._scrollingContainer.scrollTop!==this.state.scrollTop&&(this._scrollingContainer.scrollTop=this.state.scrollTop));var g=n>0&&u>0;c>=0&&g&&this._updateScrollLeftForScrollToColumn(),h>=0&&g&&this._updateScrollTopForScrollToRow(),this._invokeOnGridRenderedHelper(),this._invokeOnScrollMemoizer({scrollLeft:r||0,scrollTop:d||0,totalColumnsWidth:p.columnSizeAndPositionManager.getTotalSize(),totalRowsHeight:p.rowSizeAndPositionManager.getTotalSize()}),this._maybeCallOnScrollbarPresenceChange()}},{key:"componentDidUpdate",value:function(e,t){var o=this,n=this.props,r=n.autoHeight,c=n.autoWidth,d=n.columnCount,h=n.height,u=n.rowCount,p=n.scrollToAlignment,m=n.scrollToColumn,g=n.scrollToRow,v=n.width,y=this.state,w=y.scrollLeft,x=y.scrollPositionChangeReason,S=y.scrollTop,_=y.instanceProps;this._handleInvalidatedGridSize();var T=d>0&&0===e.columnCount||u>0&&0===e.rowCount;x===Je&&(!c&&w>=0&&(w!==this._scrollingContainer.scrollLeft||T)&&(this._scrollingContainer.scrollLeft=w),!r&&S>=0&&(S!==this._scrollingContainer.scrollTop||T)&&(this._scrollingContainer.scrollTop=S));var E=(0===e.width||0===e.height)&&h>0&&v>0;if(this._recomputeScrollLeftFlag?(this._recomputeScrollLeftFlag=!1,this._updateScrollLeftForScrollToColumn(this.props)):He({cellSizeAndPositionManager:_.columnSizeAndPositionManager,previousCellsCount:e.columnCount,previousCellSize:e.columnWidth,previousScrollToAlignment:e.scrollToAlignment,previousScrollToIndex:e.scrollToColumn,previousSize:e.width,scrollOffset:w,scrollToAlignment:p,scrollToIndex:m,size:v,sizeJustIncreasedFromZero:E,updateScrollIndexCallback:function(){return o._updateScrollLeftForScrollToColumn(o.props)}}),this._recomputeScrollTopFlag?(this._recomputeScrollTopFlag=!1,this._updateScrollTopForScrollToRow(this.props)):He({cellSizeAndPositionManager:_.rowSizeAndPositionManager,previousCellsCount:e.rowCount,previousCellSize:e.rowHeight,previousScrollToAlignment:e.scrollToAlignment,previousScrollToIndex:e.scrollToRow,previousSize:e.height,scrollOffset:S,scrollToAlignment:p,scrollToIndex:g,size:h,sizeJustIncreasedFromZero:E,updateScrollIndexCallback:function(){return o._updateScrollTopForScrollToRow(o.props)}}),this._invokeOnGridRenderedHelper(),w!==t.scrollLeft||S!==t.scrollTop){var O=_.rowSizeAndPositionManager.getTotalSize(),A=_.columnSizeAndPositionManager.getTotalSize();this._invokeOnScrollMemoizer({scrollLeft:w,scrollTop:S,totalColumnsWidth:A,totalRowsHeight:O})}this._maybeCallOnScrollbarPresenceChange()}},{key:"componentWillUnmount",value:function(){this._scrollingContainer&&this._scrollingContainer.removeEventListener("wheel",this.preventDefault),this._disablePointerEventsTimeoutId&&Ke(this._disablePointerEventsTimeoutId)}},{key:"render",value:function(){var e=this.props,t=e.autoContainerWidth,o=e.autoHeight,n=e.autoWidth,r=e.className,c=e.containerProps,h=e.containerRole,u=e.containerStyle,p=e.height,m=e.id,g=e.noContentRenderer,v=e.role,y=e.style,w=e.tabIndex,x=e.width,S=this.state,_=S.instanceProps,T=S.needToResetStyleCache,E=this._isScrolling(),O={boxSizing:"border-box",direction:"ltr",height:o?"auto":p,position:"relative",width:n?"auto":x,WebkitOverflowScrolling:"touch",willChange:"transform"};T&&(this._styleCache={}),this.state.isScrolling||this._resetStyleCache(),this._calculateChildrenToRender(this.props,this.state);var A=_.columnSizeAndPositionManager.getTotalSize(),N=_.rowSizeAndPositionManager.getTotalSize(),$=N>p?_.scrollbarSize:0,P=A>x?_.scrollbarSize:0;P===this._horizontalScrollBarSize&&$===this._verticalScrollBarSize||(this._horizontalScrollBarSize=P,this._verticalScrollBarSize=$,this._scrollbarPresenceChanged=!0),O.overflowX=A+$<=x?"hidden":"auto",O.overflowY=N+P<=p?"hidden":"auto";var z=this._childrenToDisplay,G=0===z.length&&p>0&&x>0;return d.createElement("div",Oe({ref:this._setScrollingContainerRef},c,{"aria-label":this.props["aria-label"],"aria-readonly":this.props["aria-readonly"],className:Me("ReactVirtualized__Grid",r),id:m,onScroll:this._onScroll,onWheel:this._onWheel,role:v,style:Qe({},O,{},y),tabIndex:w}),z.length>0&&d.createElement("div",{className:"ReactVirtualized__Grid__innerScrollContainer",role:h,style:Qe({width:t?"auto":A,height:N,maxWidth:A,maxHeight:N,overflow:"hidden",pointerEvents:E?"none":"",position:"relative"},u)},z),G&&g())}},{key:"_calculateChildrenToRender",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state,o=e.cellRenderer,n=e.cellRangeRenderer,r=e.columnCount,c=e.deferredMeasurementCache,d=e.height,h=e.overscanColumnCount,u=e.overscanIndicesGetter,p=e.overscanRowCount,m=e.rowCount,g=e.width,v=e.isScrollingOptOut,y=t.scrollDirectionHorizontal,w=t.scrollDirectionVertical,x=t.instanceProps,S=this._initialScrollTop>0?this._initialScrollTop:t.scrollTop,_=this._initialScrollLeft>0?this._initialScrollLeft:t.scrollLeft,T=this._isScrolling(e,t);if(this._childrenToDisplay=[],d>0&&g>0){var E=x.columnSizeAndPositionManager.getVisibleCellRange({containerSize:g,offset:_}),O=x.rowSizeAndPositionManager.getVisibleCellRange({containerSize:d,offset:S}),A=x.columnSizeAndPositionManager.getOffsetAdjustment({containerSize:g,offset:_}),N=x.rowSizeAndPositionManager.getOffsetAdjustment({containerSize:d,offset:S});this._renderedColumnStartIndex=E.start,this._renderedColumnStopIndex=E.stop,this._renderedRowStartIndex=O.start,this._renderedRowStopIndex=O.stop;var $=u({direction:"horizontal",cellCount:r,overscanCellsCount:h,scrollDirection:y,startIndex:"number"==typeof E.start?E.start:0,stopIndex:"number"==typeof E.stop?E.stop:-1}),P=u({direction:"vertical",cellCount:m,overscanCellsCount:p,scrollDirection:w,startIndex:"number"==typeof O.start?O.start:0,stopIndex:"number"==typeof O.stop?O.stop:-1}),z=$.overscanStartIndex,G=$.overscanStopIndex,F=P.overscanStartIndex,B=P.overscanStopIndex;if(c){if(!c.hasFixedHeight())for(var W=F;W<=B;W++)if(!c.has(W,0)){z=0,G=r-1;break}if(!c.hasFixedWidth())for(var U=z;U<=G;U++)if(!c.has(0,U)){F=0,B=m-1;break}}this._childrenToDisplay=n({cellCache:this._cellCache,cellRenderer:o,columnSizeAndPositionManager:x.columnSizeAndPositionManager,columnStartIndex:z,columnStopIndex:G,deferredMeasurementCache:c,horizontalOffsetAdjustment:A,isScrolling:T,isScrollingOptOut:v,parent:this,rowSizeAndPositionManager:x.rowSizeAndPositionManager,rowStartIndex:F,rowStopIndex:B,scrollLeft:_,scrollTop:S,styleCache:this._styleCache,verticalOffsetAdjustment:N,visibleColumnIndices:E,visibleRowIndices:O}),this._columnStartIndex=z,this._columnStopIndex=G,this._rowStartIndex=F,this._rowStopIndex=B}}},{key:"_debounceScrollEnded",value:function(){var e=this.props.scrollingResetTimeInterval;this._disablePointerEventsTimeoutId&&Ke(this._disablePointerEventsTimeoutId),this._disablePointerEventsTimeoutId=Ye(this._debounceScrollEndedCallback,e)}},{key:"_handleInvalidatedGridSize",value:function(){if("number"==typeof this._deferredInvalidateColumnIndex&&"number"==typeof this._deferredInvalidateRowIndex){var e=this._deferredInvalidateColumnIndex,t=this._deferredInvalidateRowIndex;this._deferredInvalidateColumnIndex=null,this._deferredInvalidateRowIndex=null,this.recomputeGridSize({columnIndex:e,rowIndex:t})}}},{key:"_invokeOnScrollMemoizer",value:function(e){var t=this,o=e.scrollLeft,n=e.scrollTop,r=e.totalColumnsWidth,c=e.totalRowsHeight;this._onScrollMemoizer({callback:function(e){var o=e.scrollLeft,n=e.scrollTop,d=t.props,h=d.height;(0,d.onScroll)({clientHeight:h,clientWidth:d.width,scrollHeight:c,scrollLeft:o,scrollTop:n,scrollWidth:r})},indices:{scrollLeft:o,scrollTop:n}})}},{key:"_isScrolling",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state;return Object.hasOwnProperty.call(e,"isScrolling")?Boolean(e.isScrolling):Boolean(t.isScrolling)}},{key:"_maybeCallOnScrollbarPresenceChange",value:function(){if(this._scrollbarPresenceChanged){var e=this.props.onScrollbarPresenceChange;this._scrollbarPresenceChanged=!1,e({horizontal:this._horizontalScrollBarSize>0,size:this.state.instanceProps.scrollbarSize,vertical:this._verticalScrollBarSize>0})}}},{key:"scrollToPosition",value:function(e){var o=e.scrollLeft,n=e.scrollTop,r=t._getScrollToPositionStateUpdate({prevState:this.state,scrollLeft:o,scrollTop:n});r&&(r.needToResetStyleCache=!1,this.setState(r))}},{key:"_getCalculatedScrollLeft",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state;return t._getCalculatedScrollLeft(e,o)}},{key:"_updateScrollLeftForScrollToColumn",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=t._getScrollLeftForScrollToColumnStateUpdate(e,o);if(r)return r.needToResetStyleCache=!1,this.setState(r),e.onScrollToTargetCausedUpdate&&!n&&e.onScrollToTargetCausedUpdate({clientHeight:e.height,clientWidth:e.width,scrollHeight:this.getTotalRowsHeight(),scrollLeft:r.scrollLeft,scrollTop:r.scrollTop,scrollWidth:this.getTotalColumnsWidth()}),r}},{key:"_getCalculatedScrollTop",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state;return t._getCalculatedScrollTop(e,o)}},{key:"_resetStyleCache",value:function(){var e=this._styleCache,t=this._cellCache,o=this.props.isScrollingOptOut;this._cellCache={},this._styleCache={};for(var n=this._rowStartIndex;n<=this._rowStopIndex;n++)for(var r=this._columnStartIndex;r<=this._columnStopIndex;r++){var c="".concat(n,"-").concat(r);this._styleCache[c]=e[c],o&&(this._cellCache[c]=t[c])}}},{key:"_updateScrollTopForScrollToRow",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=t._getScrollTopForScrollToRowStateUpdate(e,o);if(r)return r.needToResetStyleCache=!1,this.setState(r),e.onScrollToTargetCausedUpdate&&!n&&e.onScrollToTargetCausedUpdate({clientHeight:e.height,clientWidth:e.width,scrollHeight:this.getTotalRowsHeight(),scrollLeft:r.scrollLeft,scrollTop:r.scrollTop,scrollWidth:this.getTotalColumnsWidth()}),r}}],[{key:"getDerivedStateFromProps",value:function(e,o){var n={};0===e.columnCount&&0!==o.scrollLeft||0===e.rowCount&&0!==o.scrollTop?(n.scrollLeft=0,n.scrollTop=0):(e.scrollLeft!==o.scrollLeft&&e.scrollToColumn<0||e.scrollTop!==o.scrollTop&&e.scrollToRow<0)&&Object.assign(n,t._getScrollToPositionStateUpdate({prevState:o,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}));var r,c,d=o.instanceProps;return n.needToResetStyleCache=!1,e.columnWidth===d.prevColumnWidth&&e.rowHeight===d.prevRowHeight||(n.needToResetStyleCache=!0),d.columnSizeAndPositionManager.configure({cellCount:e.columnCount,estimatedCellSize:t._getEstimatedColumnSize(e),cellSizeGetter:t._wrapSizeGetter(e.columnWidth)}),d.rowSizeAndPositionManager.configure({cellCount:e.rowCount,estimatedCellSize:t._getEstimatedRowSize(e),cellSizeGetter:t._wrapSizeGetter(e.rowHeight)}),0!==d.prevColumnCount&&0!==d.prevRowCount||(d.prevColumnCount=0,d.prevRowCount=0),e.autoHeight&&!1===e.isScrolling&&!0===d.prevIsScrolling&&Object.assign(n,{isScrolling:!1}),De({cellCount:d.prevColumnCount,cellSize:"number"==typeof d.prevColumnWidth?d.prevColumnWidth:null,computeMetadataCallback:function(){return d.columnSizeAndPositionManager.resetCell(0)},computeMetadataCallbackProps:e,nextCellsCount:e.columnCount,nextCellSize:"number"==typeof e.columnWidth?e.columnWidth:null,nextScrollToIndex:e.scrollToColumn,scrollToIndex:d.prevScrollToColumn,updateScrollOffsetForScrollToIndex:function(){r=t._getScrollLeftForScrollToColumnStateUpdate(e,o)}}),De({cellCount:d.prevRowCount,cellSize:"number"==typeof d.prevRowHeight?d.prevRowHeight:null,computeMetadataCallback:function(){return d.rowSizeAndPositionManager.resetCell(0)},computeMetadataCallbackProps:e,nextCellsCount:e.rowCount,nextCellSize:"number"==typeof e.rowHeight?e.rowHeight:null,nextScrollToIndex:e.scrollToRow,scrollToIndex:d.prevScrollToRow,updateScrollOffsetForScrollToIndex:function(){c=t._getScrollTopForScrollToRowStateUpdate(e,o)}}),d.prevColumnCount=e.columnCount,d.prevColumnWidth=e.columnWidth,d.prevIsScrolling=!0===e.isScrolling,d.prevRowCount=e.rowCount,d.prevRowHeight=e.rowHeight,d.prevScrollToColumn=e.scrollToColumn,d.prevScrollToRow=e.scrollToRow,d.scrollbarSize=e.getScrollbarSize(),void 0===d.scrollbarSize?(d.scrollbarSizeMeasured=!1,d.scrollbarSize=0):d.scrollbarSizeMeasured=!0,n.instanceProps=d,Qe({},n,{},r,{},c)}},{key:"_getEstimatedColumnSize",value:function(e){return"number"==typeof e.columnWidth?e.columnWidth:e.estimatedColumnSize}},{key:"_getEstimatedRowSize",value:function(e){return"number"==typeof e.rowHeight?e.rowHeight:e.estimatedRowSize}},{key:"_getScrollToPositionStateUpdate",value:function(e){var t=e.prevState,o=e.scrollLeft,n=e.scrollTop,r={scrollPositionChangeReason:Je};return"number"==typeof o&&o>=0&&(r.scrollDirectionHorizontal=o>t.scrollLeft?1:ze,r.scrollLeft=o),"number"==typeof n&&n>=0&&(r.scrollDirectionVertical=n>t.scrollTop?1:ze,r.scrollTop=n),"number"==typeof o&&o>=0&&o!==t.scrollLeft||"number"==typeof n&&n>=0&&n!==t.scrollTop?r:{}}},{key:"_wrapSizeGetter",value:function(e){return"function"==typeof e?e:function(){return e}}},{key:"_getCalculatedScrollLeft",value:function(e,t){var o=e.columnCount,n=e.height,r=e.scrollToAlignment,c=e.scrollToColumn,d=e.width,h=t.scrollLeft,u=t.instanceProps;if(o>0){var p=o-1,m=c<0?p:Math.min(p,c),g=u.rowSizeAndPositionManager.getTotalSize(),v=u.scrollbarSizeMeasured&&g>n?u.scrollbarSize:0;return u.columnSizeAndPositionManager.getUpdatedOffsetForIndex({align:r,containerSize:d-v,currentOffset:h,targetIndex:m})}return 0}},{key:"_getScrollLeftForScrollToColumnStateUpdate",value:function(e,o){var n=o.scrollLeft,r=t._getCalculatedScrollLeft(e,o);return"number"==typeof r&&r>=0&&n!==r?t._getScrollToPositionStateUpdate({prevState:o,scrollLeft:r,scrollTop:-1}):{}}},{key:"_getCalculatedScrollTop",value:function(e,t){var o=e.height,n=e.rowCount,r=e.scrollToAlignment,c=e.scrollToRow,d=e.width,h=t.scrollTop,u=t.instanceProps;if(n>0){var p=n-1,m=c<0?p:Math.min(p,c),g=u.columnSizeAndPositionManager.getTotalSize(),v=u.scrollbarSizeMeasured&&g>d?u.scrollbarSize:0;return u.rowSizeAndPositionManager.getUpdatedOffsetForIndex({align:r,containerSize:o-v,currentOffset:h,targetIndex:m})}return 0}},{key:"_getScrollTopForScrollToRowStateUpdate",value:function(e,o){var n=o.scrollTop,r=t._getCalculatedScrollTop(e,o);return"number"==typeof r&&r>=0&&n!==r?t._getScrollToPositionStateUpdate({prevState:o,scrollLeft:-1,scrollTop:r}):{}}}]),t}(d.PureComponent),ke(We,"propTypes",null),Ue);ke(et,"defaultProps",{"aria-label":"grid","aria-readonly":!0,autoContainerWidth:!1,autoHeight:!1,autoWidth:!1,cellRangeRenderer:function(e){for(var t=e.cellCache,o=e.cellRenderer,n=e.columnSizeAndPositionManager,r=e.columnStartIndex,c=e.columnStopIndex,d=e.deferredMeasurementCache,h=e.horizontalOffsetAdjustment,u=e.isScrolling,p=e.isScrollingOptOut,m=e.parent,g=e.rowSizeAndPositionManager,v=e.rowStartIndex,y=e.rowStopIndex,w=e.styleCache,x=e.verticalOffsetAdjustment,S=e.visibleColumnIndices,_=e.visibleRowIndices,T=[],E=n.areOffsetsAdjusted()||g.areOffsetsAdjusted(),O=!u&&!E,A=v;A<=y;A++)for(var N=g.getSizeAndPositionOfCell(A),$=r;$<=c;$++){var P=n.getSizeAndPositionOfCell($),z=$>=S.start&&$<=S.stop&&A>=_.start&&A<=_.stop,G="".concat(A,"-").concat($),F=void 0;O&&w[G]?F=w[G]:d&&!d.has(A,$)?F={height:"auto",left:0,position:"absolute",top:0,width:"auto"}:(F={height:N.size,left:P.offset+h,position:"absolute",top:N.offset+x,width:P.size},w[G]=F);var B={columnIndex:$,isScrolling:u,isVisible:z,key:G,parent:m,rowIndex:A,style:F},W=void 0;!p&&!u||h||x?W=o(B):(t[G]||(t[G]=o(B)),W=t[G]),null!=W&&!1!==W&&T.push(W)}return T},containerRole:"rowgroup",containerStyle:{},estimatedColumnSize:100,estimatedRowSize:30,getScrollbarSize:Be,noContentRenderer:function(){return null},onScroll:function(){},onScrollbarPresenceChange:function(){},onSectionRendered:function(){},overscanColumnCount:0,overscanIndicesGetter:function(e){var t=e.cellCount,o=e.overscanCellsCount,n=e.scrollDirection,r=e.startIndex,c=e.stopIndex;return 1===n?{overscanStartIndex:Math.max(0,r),overscanStopIndex:Math.min(t-1,c+o)}:{overscanStartIndex:Math.max(0,r-o),overscanStopIndex:Math.min(t-1,c)}},overscanRowCount:10,role:"grid",scrollingResetTimeInterval:150,scrollToAlignment:"auto",scrollToColumn:-1,scrollToRow:-1,style:{},tabIndex:0,isScrollingOptOut:!1}),(0,Ee.polyfill)(et);const tt=et;function ot(e){var t=e.cellCount,o=e.overscanCellsCount,n=e.scrollDirection,r=e.startIndex,c=e.stopIndex;return o=Math.max(1,o),1===n?{overscanStartIndex:Math.max(0,r-1),overscanStopIndex:Math.min(t-1,c+o)}:{overscanStartIndex:Math.max(0,r-o),overscanStopIndex:Math.min(t-1,c+1)}}var nt,rt;function it(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}var st,at,lt=(rt=nt=function(e){function t(){var e,o;be(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return ke(xe(o=Se(this,(e=_e(t)).call.apply(e,[this].concat(r)))),"state",{scrollToColumn:0,scrollToRow:0,instanceProps:{prevScrollToColumn:0,prevScrollToRow:0}}),ke(xe(o),"_columnStartIndex",0),ke(xe(o),"_columnStopIndex",0),ke(xe(o),"_rowStartIndex",0),ke(xe(o),"_rowStopIndex",0),ke(xe(o),"_onKeyDown",(function(e){var t=o.props,n=t.columnCount,r=t.disabled,c=t.mode,d=t.rowCount;if(!r){var h=o._getScrollState(),u=h.scrollToColumn,p=h.scrollToRow,m=o._getScrollState(),g=m.scrollToColumn,v=m.scrollToRow;switch(e.key){case"ArrowDown":v="cells"===c?Math.min(v+1,d-1):Math.min(o._rowStopIndex+1,d-1);break;case"ArrowLeft":g="cells"===c?Math.max(g-1,0):Math.max(o._columnStartIndex-1,0);break;case"ArrowRight":g="cells"===c?Math.min(g+1,n-1):Math.min(o._columnStopIndex+1,n-1);break;case"ArrowUp":v="cells"===c?Math.max(v-1,0):Math.max(o._rowStartIndex-1,0)}g===u&&v===p||(e.preventDefault(),o._updateScrollState({scrollToColumn:g,scrollToRow:v}))}})),ke(xe(o),"_onSectionRendered",(function(e){var t=e.columnStartIndex,n=e.columnStopIndex,r=e.rowStartIndex,c=e.rowStopIndex;o._columnStartIndex=t,o._columnStopIndex=n,o._rowStartIndex=r,o._rowStopIndex=c})),o}return Re(t,e),Ce(t,[{key:"setScrollIndexes",value:function(e){var t=e.scrollToColumn,o=e.scrollToRow;this.setState({scrollToRow:o,scrollToColumn:t})}},{key:"render",value:function(){var e=this.props,t=e.className,o=e.children,n=this._getScrollState(),r=n.scrollToColumn,c=n.scrollToRow;return d.createElement("div",{className:t,onKeyDown:this._onKeyDown},o({onSectionRendered:this._onSectionRendered,scrollToColumn:r,scrollToRow:c}))}},{key:"_getScrollState",value:function(){return this.props.isControlled?this.props:this.state}},{key:"_updateScrollState",value:function(e){var t=e.scrollToColumn,o=e.scrollToRow,n=this.props,r=n.isControlled,c=n.onScrollToChange;"function"==typeof c&&c({scrollToColumn:t,scrollToRow:o}),r||this.setState({scrollToColumn:t,scrollToRow:o})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.isControlled?{}:e.scrollToColumn!==t.instanceProps.prevScrollToColumn||e.scrollToRow!==t.instanceProps.prevScrollToRow?function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?it(o,!0).forEach((function(t){ke(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):it(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},t,{scrollToColumn:e.scrollToColumn,scrollToRow:e.scrollToRow,instanceProps:{prevScrollToColumn:e.scrollToColumn,prevScrollToRow:e.scrollToRow}}):{}}}]),t}(d.PureComponent),ke(nt,"propTypes",null),rt);function ct(e,t){var n,r=void 0!==(n=void 0!==t?t:"undefined"!=typeof window?window:"undefined"!=typeof self?self:o.g).document&&n.document.attachEvent;if(!r){var c=function(){var e=n.requestAnimationFrame||n.mozRequestAnimationFrame||n.webkitRequestAnimationFrame||function(e){return n.setTimeout(e,20)};return function(t){return e(t)}}(),d=function(){var e=n.cancelAnimationFrame||n.mozCancelAnimationFrame||n.webkitCancelAnimationFrame||n.clearTimeout;return function(t){return e(t)}}(),h=function(e){var t=e.__resizeTriggers__,o=t.firstElementChild,n=t.lastElementChild,r=o.firstElementChild;n.scrollLeft=n.scrollWidth,n.scrollTop=n.scrollHeight,r.style.width=o.offsetWidth+1+"px",r.style.height=o.offsetHeight+1+"px",o.scrollLeft=o.scrollWidth,o.scrollTop=o.scrollHeight},u=function(e){if(!(e.target.className&&"function"==typeof e.target.className.indexOf&&e.target.className.indexOf("contract-trigger")<0&&e.target.className.indexOf("expand-trigger")<0)){var t=this;h(this),this.__resizeRAF__&&d(this.__resizeRAF__),this.__resizeRAF__=c((function(){(function(e){return e.offsetWidth!=e.__resizeLast__.width||e.offsetHeight!=e.__resizeLast__.height})(t)&&(t.__resizeLast__.width=t.offsetWidth,t.__resizeLast__.height=t.offsetHeight,t.__resizeListeners__.forEach((function(o){o.call(t,e)})))}))}},p=!1,m="",g="animationstart",v="Webkit Moz O ms".split(" "),y="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),w=n.document.createElement("fakeelement");if(void 0!==w.style.animationName&&(p=!0),!1===p)for(var x=0;x<v.length;x++)if(void 0!==w.style[v[x]+"AnimationName"]){m="-"+v[x].toLowerCase()+"-",g=y[x],p=!0;break}var S="resizeanim",_="@"+m+"keyframes "+S+" { from { opacity: 0; } to { opacity: 0; } } ",T=m+"animation: 1ms "+S+"; "}return{addResizeListener:function(t,o){if(r)t.attachEvent("onresize",o);else{if(!t.__resizeTriggers__){var c=t.ownerDocument,d=n.getComputedStyle(t);d&&"static"==d.position&&(t.style.position="relative"),function(t){if(!t.getElementById("detectElementResize")){var o=(_||"")+".resize-triggers { "+(T||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',n=t.head||t.getElementsByTagName("head")[0],r=t.createElement("style");r.id="detectElementResize",r.type="text/css",null!=e&&r.setAttribute("nonce",e),r.styleSheet?r.styleSheet.cssText=o:r.appendChild(t.createTextNode(o)),n.appendChild(r)}}(c),t.__resizeLast__={},t.__resizeListeners__=[],(t.__resizeTriggers__=c.createElement("div")).className="resize-triggers";var p='<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>';if(window.trustedTypes){var m=trustedTypes.createPolicy("react-virtualized-auto-sizer",{createHTML:function(){return p}});t.__resizeTriggers__.innerHTML=m.createHTML("")}else t.__resizeTriggers__.innerHTML=p;t.appendChild(t.__resizeTriggers__),h(t),t.addEventListener("scroll",u,!0),g&&(t.__resizeTriggers__.__animationListener__=function(e){e.animationName==S&&h(t)},t.__resizeTriggers__.addEventListener(g,t.__resizeTriggers__.__animationListener__))}t.__resizeListeners__.push(o)}},removeResizeListener:function(e,t){if(r)e.detachEvent("onresize",t);else if(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),!e.__resizeListeners__.length){e.removeEventListener("scroll",u,!0),e.__resizeTriggers__.__animationListener__&&(e.__resizeTriggers__.removeEventListener(g,e.__resizeTriggers__.__animationListener__),e.__resizeTriggers__.__animationListener__=null);try{e.__resizeTriggers__=!e.removeChild(e.__resizeTriggers__)}catch(e){}}}}}function dt(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function ht(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?dt(o,!0).forEach((function(t){ke(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):dt(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}ke(lt,"defaultProps",{disabled:!1,isControlled:!1,mode:"edges",scrollToColumn:0,scrollToRow:0}),(0,Ee.polyfill)(lt);var ut=(at=st=function(e){function t(){var e,o;be(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return ke(xe(o=Se(this,(e=_e(t)).call.apply(e,[this].concat(r)))),"state",{height:o.props.defaultHeight||0,width:o.props.defaultWidth||0}),ke(xe(o),"_parentNode",void 0),ke(xe(o),"_autoSizer",void 0),ke(xe(o),"_window",void 0),ke(xe(o),"_detectElementResize",void 0),ke(xe(o),"_onResize",(function(){var e=o.props,t=e.disableHeight,n=e.disableWidth,r=e.onResize;if(o._parentNode){var c=o._parentNode.offsetHeight||0,d=o._parentNode.offsetWidth||0,h=(o._window||window).getComputedStyle(o._parentNode)||{},u=parseInt(h.paddingLeft,10)||0,p=parseInt(h.paddingRight,10)||0,m=parseInt(h.paddingTop,10)||0,g=parseInt(h.paddingBottom,10)||0,v=c-m-g,y=d-u-p;(!t&&o.state.height!==v||!n&&o.state.width!==y)&&(o.setState({height:c-m-g,width:d-u-p}),r({height:c,width:d}))}})),ke(xe(o),"_setRef",(function(e){o._autoSizer=e})),o}return Re(t,e),Ce(t,[{key:"componentDidMount",value:function(){var e=this.props.nonce;this._autoSizer&&this._autoSizer.parentNode&&this._autoSizer.parentNode.ownerDocument&&this._autoSizer.parentNode.ownerDocument.defaultView&&this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement&&(this._parentNode=this._autoSizer.parentNode,this._window=this._autoSizer.parentNode.ownerDocument.defaultView,this._detectElementResize=ct(e,this._window),this._detectElementResize.addResizeListener(this._parentNode,this._onResize),this._onResize())}},{key:"componentWillUnmount",value:function(){this._detectElementResize&&this._parentNode&&this._detectElementResize.removeResizeListener(this._parentNode,this._onResize)}},{key:"render",value:function(){var e=this.props,t=e.children,o=e.className,n=e.disableHeight,r=e.disableWidth,c=e.style,h=this.state,u=h.height,p=h.width,m={overflow:"visible"},g={};return n||(m.height=0,g.height=u),r||(m.width=0,g.width=p),d.createElement("div",{className:o,ref:this._setRef,style:ht({},m,{},c)},t(g))}}]),t}(d.Component),ke(st,"propTypes",null),at);ke(ut,"defaultProps",{onResize:function(){},disableHeight:!1,disableWidth:!1,style:{}});var pt,ft,mt=o(6405),gt=o.n(mt),bt=(ft=pt=function(e){function t(){var e,o;be(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return ke(xe(o=Se(this,(e=_e(t)).call.apply(e,[this].concat(r)))),"_child",void 0),ke(xe(o),"_measure",(function(){var e=o.props,t=e.cache,n=e.columnIndex,r=void 0===n?0:n,c=e.parent,d=e.rowIndex,h=void 0===d?o.props.index||0:d,u=o._getCellMeasurements(),p=u.height,m=u.width;p===t.getHeight(h,r)&&m===t.getWidth(h,r)||(t.set(h,r,m,p),c&&"function"==typeof c.recomputeGridSize&&c.recomputeGridSize({columnIndex:r,rowIndex:h}))})),ke(xe(o),"_registerChild",(function(e){e&&Element,o._child=e,e&&o._maybeMeasureCell()})),o}return Re(t,e),Ce(t,[{key:"componentDidMount",value:function(){this._maybeMeasureCell()}},{key:"componentDidUpdate",value:function(){this._maybeMeasureCell()}},{key:"render",value:function(){var e=this.props.children;return"function"==typeof e?e({measure:this._measure,registerChild:this._registerChild}):e}},{key:"_getCellMeasurements",value:function(){var e=this.props.cache,t=this._child||(0,mt.findDOMNode)(this);if(t&&t.ownerDocument&&t.ownerDocument.defaultView&&t instanceof t.ownerDocument.defaultView.HTMLElement){var o=t.style.width,n=t.style.height;e.hasFixedWidth()||(t.style.width="auto"),e.hasFixedHeight()||(t.style.height="auto");var r=Math.ceil(t.offsetHeight),c=Math.ceil(t.offsetWidth);return o&&(t.style.width=o),n&&(t.style.height=n),{height:r,width:c}}return{height:0,width:0}}},{key:"_maybeMeasureCell",value:function(){var e=this.props,t=e.cache,o=e.columnIndex,n=void 0===o?0:o,r=e.parent,c=e.rowIndex,d=void 0===c?this.props.index||0:c;if(!t.has(d,n)){var h=this._getCellMeasurements(),u=h.height,p=h.width;t.set(d,n,p,u),r&&"function"==typeof r.invalidateCellSizeAfterRender&&r.invalidateCellSizeAfterRender({columnIndex:n,rowIndex:d})}}}]),t}(d.PureComponent),ke(pt,"propTypes",null),ft);function vt(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function yt(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?vt(o,!0).forEach((function(t){ke(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):vt(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}ke(bt,"__internalCellMeasurerFlag",!1);var wt="requested",Ct=function(e){function t(){var e,o;be(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return ke(xe(o=Se(this,(e=_e(t)).call.apply(e,[this].concat(r)))),"state",{isScrolling:!1,scrollLeft:0,scrollTop:0}),ke(xe(o),"_calculateSizeAndPositionDataOnNextUpdate",!1),ke(xe(o),"_onSectionRenderedMemoizer",Pe()),ke(xe(o),"_onScrollMemoizer",Pe(!1)),ke(xe(o),"_invokeOnSectionRenderedHelper",(function(){var e=o.props,t=e.cellLayoutManager,n=e.onSectionRendered;o._onSectionRenderedMemoizer({callback:n,indices:{indices:t.getLastRenderedIndices()}})})),ke(xe(o),"_setScrollingContainerRef",(function(e){o._scrollingContainer=e})),ke(xe(o),"_updateScrollPositionForScrollToCell",(function(){var e=o.props,t=e.cellLayoutManager,n=e.height,r=e.scrollToAlignment,c=e.scrollToCell,d=e.width,h=o.state,u=h.scrollLeft,p=h.scrollTop;if(c>=0){var m=t.getScrollPositionForCell({align:r,cellIndex:c,height:n,scrollLeft:u,scrollTop:p,width:d});m.scrollLeft===u&&m.scrollTop===p||o._setScrollPosition(m)}})),ke(xe(o),"_onScroll",(function(e){if(e.target===o._scrollingContainer){o._enablePointerEventsAfterDelay();var t=o.props,n=t.cellLayoutManager,r=t.height,c=t.isScrollingChange,d=t.width,h=o._scrollbarSize,u=n.getTotalSize(),p=u.height,m=u.width,g=Math.max(0,Math.min(m-d+h,e.target.scrollLeft)),v=Math.max(0,Math.min(p-r+h,e.target.scrollTop));if(o.state.scrollLeft!==g||o.state.scrollTop!==v){var y=e.cancelable?"observed":wt;o.state.isScrolling||c(!0),o.setState({isScrolling:!0,scrollLeft:g,scrollPositionChangeReason:y,scrollTop:v})}o._invokeOnScrollMemoizer({scrollLeft:g,scrollTop:v,totalWidth:m,totalHeight:p})}})),o._scrollbarSize=Be(),void 0===o._scrollbarSize?(o._scrollbarSizeMeasured=!1,o._scrollbarSize=0):o._scrollbarSizeMeasured=!0,o}return Re(t,e),Ce(t,[{key:"recomputeCellSizesAndPositions",value:function(){this._calculateSizeAndPositionDataOnNextUpdate=!0,this.forceUpdate()}},{key:"componentDidMount",value:function(){var e=this.props,t=e.cellLayoutManager,o=e.scrollLeft,n=e.scrollToCell,r=e.scrollTop;this._scrollbarSizeMeasured||(this._scrollbarSize=Be(),this._scrollbarSizeMeasured=!0,this.setState({})),n>=0?this._updateScrollPositionForScrollToCell():(o>=0||r>=0)&&this._setScrollPosition({scrollLeft:o,scrollTop:r}),this._invokeOnSectionRenderedHelper();var c=t.getTotalSize(),d=c.height,h=c.width;this._invokeOnScrollMemoizer({scrollLeft:o||0,scrollTop:r||0,totalHeight:d,totalWidth:h})}},{key:"componentDidUpdate",value:function(e,t){var o=this.props,n=o.height,r=o.scrollToAlignment,c=o.scrollToCell,d=o.width,h=this.state,u=h.scrollLeft,p=h.scrollPositionChangeReason,m=h.scrollTop;p===wt&&(u>=0&&u!==t.scrollLeft&&u!==this._scrollingContainer.scrollLeft&&(this._scrollingContainer.scrollLeft=u),m>=0&&m!==t.scrollTop&&m!==this._scrollingContainer.scrollTop&&(this._scrollingContainer.scrollTop=m)),n===e.height&&r===e.scrollToAlignment&&c===e.scrollToCell&&d===e.width||this._updateScrollPositionForScrollToCell(),this._invokeOnSectionRenderedHelper()}},{key:"componentWillUnmount",value:function(){this._disablePointerEventsTimeoutId&&clearTimeout(this._disablePointerEventsTimeoutId)}},{key:"render",value:function(){var e=this.props,t=e.autoHeight,o=e.cellCount,n=e.cellLayoutManager,r=e.className,c=e.height,h=e.horizontalOverscanSize,u=e.id,p=e.noContentRenderer,m=e.style,g=e.verticalOverscanSize,v=e.width,y=this.state,w=y.isScrolling,x=y.scrollLeft,S=y.scrollTop;(this._lastRenderedCellCount!==o||this._lastRenderedCellLayoutManager!==n||this._calculateSizeAndPositionDataOnNextUpdate)&&(this._lastRenderedCellCount=o,this._lastRenderedCellLayoutManager=n,this._calculateSizeAndPositionDataOnNextUpdate=!1,n.calculateSizeAndPositionData());var _=n.getTotalSize(),T=_.height,E=_.width,O=Math.max(0,x-h),A=Math.max(0,S-g),N=Math.min(E,x+v+h),$=Math.min(T,S+c+g),P=c>0&&v>0?n.cellRenderers({height:$-A,isScrolling:w,width:N-O,x:O,y:A}):[],z={boxSizing:"border-box",direction:"ltr",height:t?"auto":c,position:"relative",WebkitOverflowScrolling:"touch",width:v,willChange:"transform"},G=T>c?this._scrollbarSize:0,F=E>v?this._scrollbarSize:0;return z.overflowX=E+G<=v?"hidden":"auto",z.overflowY=T+F<=c?"hidden":"auto",d.createElement("div",{ref:this._setScrollingContainerRef,"aria-label":this.props["aria-label"],className:Me("ReactVirtualized__Collection",r),id:u,onScroll:this._onScroll,role:"grid",style:yt({},z,{},m),tabIndex:0},o>0&&d.createElement("div",{className:"ReactVirtualized__Collection__innerScrollContainer",style:{height:T,maxHeight:T,maxWidth:E,overflow:"hidden",pointerEvents:w?"none":"",width:E}},P),0===o&&p())}},{key:"_enablePointerEventsAfterDelay",value:function(){var e=this;this._disablePointerEventsTimeoutId&&clearTimeout(this._disablePointerEventsTimeoutId),this._disablePointerEventsTimeoutId=setTimeout((function(){(0,e.props.isScrollingChange)(!1),e._disablePointerEventsTimeoutId=null,e.setState({isScrolling:!1})}),150)}},{key:"_invokeOnScrollMemoizer",value:function(e){var t=this,o=e.scrollLeft,n=e.scrollTop,r=e.totalHeight,c=e.totalWidth;this._onScrollMemoizer({callback:function(e){var o=e.scrollLeft,n=e.scrollTop,d=t.props,h=d.height;(0,d.onScroll)({clientHeight:h,clientWidth:d.width,scrollHeight:r,scrollLeft:o,scrollTop:n,scrollWidth:c})},indices:{scrollLeft:o,scrollTop:n}})}},{key:"_setScrollPosition",value:function(e){var t=e.scrollLeft,o=e.scrollTop,n={scrollPositionChangeReason:wt};t>=0&&(n.scrollLeft=t),o>=0&&(n.scrollTop=o),(t>=0&&t!==this.state.scrollLeft||o>=0&&o!==this.state.scrollTop)&&this.setState(n)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return 0!==e.cellCount||0===t.scrollLeft&&0===t.scrollTop?e.scrollLeft!==t.scrollLeft||e.scrollTop!==t.scrollTop?{scrollLeft:null!=e.scrollLeft?e.scrollLeft:t.scrollLeft,scrollTop:null!=e.scrollTop?e.scrollTop:t.scrollTop,scrollPositionChangeReason:wt}:null:{scrollLeft:0,scrollTop:0,scrollPositionChangeReason:wt}}}]),t}(d.PureComponent);ke(Ct,"defaultProps",{"aria-label":"grid",horizontalOverscanSize:0,noContentRenderer:function(){return null},onScroll:function(){return null},onSectionRendered:function(){return null},scrollToAlignment:"auto",scrollToCell:-1,style:{},verticalOverscanSize:0}),Ct.propTypes={},(0,Ee.polyfill)(Ct);const xt=Ct;var St=function(){function e(t){var o=t.height,n=t.width,r=t.x,c=t.y;be(this,e),this.height=o,this.width=n,this.x=r,this.y=c,this._indexMap={},this._indices=[]}return Ce(e,[{key:"addCellIndex",value:function(e){var t=e.index;this._indexMap[t]||(this._indexMap[t]=!0,this._indices.push(t))}},{key:"getCellIndices",value:function(){return this._indices}},{key:"toString",value:function(){return"".concat(this.x,",").concat(this.y," ").concat(this.width,"x").concat(this.height)}}]),e}(),_t=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;be(this,e),this._sectionSize=t,this._cellMetadata=[],this._sections={}}return Ce(e,[{key:"getCellIndices",value:function(e){var t=e.height,o=e.width,n=e.x,r=e.y,c={};return this.getSections({height:t,width:o,x:n,y:r}).forEach((function(e){return e.getCellIndices().forEach((function(e){c[e]=e}))})),Object.keys(c).map((function(e){return c[e]}))}},{key:"getCellMetadata",value:function(e){var t=e.index;return this._cellMetadata[t]}},{key:"getSections",value:function(e){for(var t=e.height,o=e.width,n=e.x,r=e.y,c=Math.floor(n/this._sectionSize),d=Math.floor((n+o-1)/this._sectionSize),h=Math.floor(r/this._sectionSize),u=Math.floor((r+t-1)/this._sectionSize),p=[],m=c;m<=d;m++)for(var g=h;g<=u;g++){var v="".concat(m,".").concat(g);this._sections[v]||(this._sections[v]=new St({height:this._sectionSize,width:this._sectionSize,x:m*this._sectionSize,y:g*this._sectionSize})),p.push(this._sections[v])}return p}},{key:"getTotalSectionCount",value:function(){return Object.keys(this._sections).length}},{key:"toString",value:function(){var e=this;return Object.keys(this._sections).map((function(t){return e._sections[t].toString()}))}},{key:"registerCell",value:function(e){var t=e.cellMetadatum,o=e.index;this._cellMetadata[o]=t,this.getSections(t).forEach((function(e){return e.addCellIndex({index:o})}))}}]),e}();function Tt(e){var t=e.align,o=void 0===t?"auto":t,n=e.cellOffset,r=e.cellSize,c=e.containerSize,d=e.currentOffset,h=n,u=h-c+r;switch(o){case"start":return h;case"end":return u;case"center":return h-(c-r)/2;default:return Math.max(u,Math.min(h,d))}}var Rt=function(e){function t(e,o){var n;return be(this,t),(n=Se(this,_e(t).call(this,e,o)))._cellMetadata=[],n._lastRenderedCellIndices=[],n._cellCache=[],n._isScrollingChange=n._isScrollingChange.bind(xe(n)),n._setCollectionViewRef=n._setCollectionViewRef.bind(xe(n)),n}return Re(t,e),Ce(t,[{key:"forceUpdate",value:function(){void 0!==this._collectionView&&this._collectionView.forceUpdate()}},{key:"recomputeCellSizesAndPositions",value:function(){this._cellCache=[],this._collectionView.recomputeCellSizesAndPositions()}},{key:"render",value:function(){var e=Oe({},this.props);return d.createElement(xt,Oe({cellLayoutManager:this,isScrollingChange:this._isScrollingChange,ref:this._setCollectionViewRef},e))}},{key:"calculateSizeAndPositionData",value:function(){var e=this.props,t=function(e){for(var t=e.cellCount,o=e.cellSizeAndPositionGetter,n=[],r=new _t(e.sectionSize),c=0,d=0,h=0;h<t;h++){var u=o({index:h});if(null==u.height||isNaN(u.height)||null==u.width||isNaN(u.width)||null==u.x||isNaN(u.x)||null==u.y||isNaN(u.y))throw Error("Invalid metadata returned for cell ".concat(h,":\n        x:").concat(u.x,", y:").concat(u.y,", width:").concat(u.width,", height:").concat(u.height));c=Math.max(c,u.y+u.height),d=Math.max(d,u.x+u.width),n[h]=u,r.registerCell({cellMetadatum:u,index:h})}return{cellMetadata:n,height:c,sectionManager:r,width:d}}({cellCount:e.cellCount,cellSizeAndPositionGetter:e.cellSizeAndPositionGetter,sectionSize:e.sectionSize});this._cellMetadata=t.cellMetadata,this._sectionManager=t.sectionManager,this._height=t.height,this._width=t.width}},{key:"getLastRenderedIndices",value:function(){return this._lastRenderedCellIndices}},{key:"getScrollPositionForCell",value:function(e){var t=e.align,o=e.cellIndex,n=e.height,r=e.scrollLeft,c=e.scrollTop,d=e.width,h=this.props.cellCount;if(o>=0&&o<h){var u=this._cellMetadata[o];r=Tt({align:t,cellOffset:u.x,cellSize:u.width,containerSize:d,currentOffset:r,targetIndex:o}),c=Tt({align:t,cellOffset:u.y,cellSize:u.height,containerSize:n,currentOffset:c,targetIndex:o})}return{scrollLeft:r,scrollTop:c}}},{key:"getTotalSize",value:function(){return{height:this._height,width:this._width}}},{key:"cellRenderers",value:function(e){var t=this,o=e.height,n=e.isScrolling,r=e.width,c=e.x,d=e.y,h=this.props,u=h.cellGroupRenderer,p=h.cellRenderer;return this._lastRenderedCellIndices=this._sectionManager.getCellIndices({height:o,width:r,x:c,y:d}),u({cellCache:this._cellCache,cellRenderer:p,cellSizeAndPositionGetter:function(e){var o=e.index;return t._sectionManager.getCellMetadata({index:o})},indices:this._lastRenderedCellIndices,isScrolling:n})}},{key:"_isScrollingChange",value:function(e){e||(this._cellCache=[])}},{key:"_setCollectionViewRef",value:function(e){this._collectionView=e}}]),t}(d.PureComponent);function kt(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function Et(e,t){if(e){if("string"==typeof e)return kt(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?kt(e,t):void 0}}ke(Rt,"defaultProps",{"aria-label":"grid",cellGroupRenderer:function(e){var t=e.cellCache,o=e.cellRenderer,n=e.cellSizeAndPositionGetter,r=e.indices,c=e.isScrolling;return r.map((function(e){var r=n({index:e}),d={index:e,isScrolling:c,key:e,style:{height:r.height,left:r.x,position:"absolute",top:r.y,width:r.width}};return c?(e in t||(t[e]=o(d)),t[e]):o(d)})).filter((function(e){return!!e}))}}),Rt.propTypes={},(function(e){function t(e,o){var n;return be(this,t),(n=Se(this,_e(t).call(this,e,o)))._registerChild=n._registerChild.bind(xe(n)),n}return Re(t,e),Ce(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,o=t.columnMaxWidth,n=t.columnMinWidth,r=t.columnCount,c=t.width;o===e.columnMaxWidth&&n===e.columnMinWidth&&r===e.columnCount&&c===e.width||this._registeredChild&&this._registeredChild.recomputeGridSize()}},{key:"render",value:function(){var e=this.props,t=e.children,o=e.columnMaxWidth,n=e.columnMinWidth,r=e.columnCount,c=e.width,d=n||1,h=o?Math.min(o,c):c,u=c/r;return u=Math.max(d,u),u=Math.min(h,u),u=Math.floor(u),t({adjustedWidth:Math.min(c,u*r),columnWidth:u,getColumnWidth:function(){return u},registerChild:this._registerChild})}},{key:"_registerChild",value:function(e){if(e&&"function"!=typeof e.recomputeGridSize)throw Error("Unexpected child type registered; only Grid/MultiGrid children are supported.");this._registeredChild=e,this._registeredChild&&this._registeredChild.recomputeGridSize()}}]),t}(d.PureComponent)).propTypes={};var Ot=function(e){function t(e,o){var n;return be(this,t),(n=Se(this,_e(t).call(this,e,o)))._loadMoreRowsMemoizer=Pe(),n._onRowsRendered=n._onRowsRendered.bind(xe(n)),n._registerChild=n._registerChild.bind(xe(n)),n}return Re(t,e),Ce(t,[{key:"resetLoadMoreRowsCache",value:function(e){this._loadMoreRowsMemoizer=Pe(),e&&this._doStuff(this._lastRenderedStartIndex,this._lastRenderedStopIndex)}},{key:"render",value:function(){return(0,this.props.children)({onRowsRendered:this._onRowsRendered,registerChild:this._registerChild})}},{key:"_loadUnloadedRanges",value:function(e){var t=this,o=this.props.loadMoreRows;e.forEach((function(e){var n=o(e);n&&n.then((function(){var o;(o={lastRenderedStartIndex:t._lastRenderedStartIndex,lastRenderedStopIndex:t._lastRenderedStopIndex,startIndex:e.startIndex,stopIndex:e.stopIndex}).startIndex>o.lastRenderedStopIndex||o.stopIndex<o.lastRenderedStartIndex||t._registeredChild&&function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o="function"==typeof e.recomputeGridSize?e.recomputeGridSize:e.recomputeRowHeights;o?o.call(e,t):e.forceUpdate()}(t._registeredChild,t._lastRenderedStartIndex)}))}))}},{key:"_onRowsRendered",value:function(e){var t=e.startIndex,o=e.stopIndex;this._lastRenderedStartIndex=t,this._lastRenderedStopIndex=o,this._doStuff(t,o)}},{key:"_doStuff",value:function(e,t){var o,n=this,r=this.props,c=r.isRowLoaded,d=r.minimumBatchSize,h=r.rowCount,u=r.threshold,p=function(e){for(var t=e.isRowLoaded,o=e.minimumBatchSize,n=e.rowCount,r=e.stopIndex,c=[],d=null,h=null,u=e.startIndex;u<=r;u++)t({index:u})?null!==h&&(c.push({startIndex:d,stopIndex:h}),d=h=null):(h=u,null===d&&(d=u));if(null!==h){for(var p=Math.min(Math.max(h,d+o-1),n-1),m=h+1;m<=p&&!t({index:m});m++)h=m;c.push({startIndex:d,stopIndex:h})}if(c.length)for(var g=c[0];g.stopIndex-g.startIndex+1<o&&g.startIndex>0;){var v=g.startIndex-1;if(t({index:v}))break;g.startIndex=v}return c}({isRowLoaded:c,minimumBatchSize:d,rowCount:h,startIndex:Math.max(0,e-u),stopIndex:Math.min(h-1,t+u)}),m=(o=[]).concat.apply(o,function(e){return function(e){if(Array.isArray(e))return kt(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Et(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(p.map((function(e){return[e.startIndex,e.stopIndex]}))));this._loadMoreRowsMemoizer({callback:function(){n._loadUnloadedRanges(p)},indices:{squashedUnloadedRanges:m}})}},{key:"_registerChild",value:function(e){this._registeredChild=e}}]),t}(d.PureComponent);ke(Ot,"defaultProps",{minimumBatchSize:10,rowCount:0,threshold:15}),Ot.propTypes={};var It,Mt,Dt=(Mt=It=function(e){function t(){var e,o;be(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return ke(xe(o=Se(this,(e=_e(t)).call.apply(e,[this].concat(r)))),"Grid",void 0),ke(xe(o),"_cellRenderer",(function(e){var t=e.parent,n=e.rowIndex,r=e.style,c=e.isScrolling,d=e.isVisible,h=e.key,u=o.props.rowRenderer,p=Object.getOwnPropertyDescriptor(r,"width");return p&&p.writable&&(r.width="100%"),u({index:n,style:r,isScrolling:c,isVisible:d,key:h,parent:t})})),ke(xe(o),"_setRef",(function(e){o.Grid=e})),ke(xe(o),"_onScroll",(function(e){var t=e.clientHeight,n=e.scrollHeight,r=e.scrollTop;(0,o.props.onScroll)({clientHeight:t,scrollHeight:n,scrollTop:r})})),ke(xe(o),"_onScrollToRowCausedUpdate",(function(e){var t=e.clientHeight,n=e.scrollHeight,r=e.scrollTop;(0,o.props.onScrollToRowCausedUpdate)({clientHeight:t,scrollHeight:n,scrollTop:r})})),ke(xe(o),"_onSectionRendered",(function(e){var t=e.rowOverscanStartIndex,n=e.rowOverscanStopIndex,r=e.rowStartIndex,c=e.rowStopIndex;(0,o.props.onRowsRendered)({overscanStartIndex:t,overscanStopIndex:n,startIndex:r,stopIndex:c})})),o}return Re(t,e),Ce(t,[{key:"forceUpdateGrid",value:function(){this.Grid&&this.Grid.forceUpdate()}},{key:"getOffsetForRow",value:function(e){var t=e.alignment,o=e.index;return this.Grid?this.Grid.getOffsetForCell({alignment:t,rowIndex:o,columnIndex:0}).scrollTop:0}},{key:"invalidateCellSizeAfterRender",value:function(e){var t=e.columnIndex,o=e.rowIndex;this.Grid&&this.Grid.invalidateCellSizeAfterRender({rowIndex:o,columnIndex:t})}},{key:"measureAllRows",value:function(){this.Grid&&this.Grid.measureAllCells()}},{key:"recomputeGridSize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.columnIndex,o=void 0===t?0:t,n=e.rowIndex,r=void 0===n?0:n;this.Grid&&this.Grid.recomputeGridSize({rowIndex:r,columnIndex:o})}},{key:"recomputeRowHeights",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.recomputeGridSize({rowIndex:e,columnIndex:0})}},{key:"scrollToPosition",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.scrollToPosition({scrollTop:e})}},{key:"scrollToRow",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.scrollToCell({columnIndex:0,rowIndex:e})}},{key:"render",value:function(){var e=this.props,t=e.className,o=e.noRowsRenderer,n=e.scrollToIndex,r=e.width,c=Me("ReactVirtualized__List",t);return d.createElement(tt,Oe({},this.props,{autoContainerWidth:!0,cellRenderer:this._cellRenderer,className:c,columnWidth:r,columnCount:1,noContentRenderer:o,onScroll:this._onScroll,onScrollToTargetCausedUpdate:this._onScrollToRowCausedUpdate,onSectionRendered:this._onSectionRendered,ref:this._setRef,scrollToRow:n}))}}]),t}(d.PureComponent),ke(It,"propTypes",null),Mt);ke(Dt,"defaultProps",{autoHeight:!1,estimatedRowSize:30,onScroll:function(){},onScrollToRowCausedUpdate:function(){},noRowsRenderer:function(){return null},onRowsRendered:function(){},overscanIndicesGetter:ot,overscanRowCount:10,scrollToAlignment:"auto",scrollToIndex:-1,style:{}});const At=function(e,t,o,n,r){return"function"==typeof o?function(e,t,o,n,r){for(var c=o+1;t<=o;){var d=t+o>>>1;r(e[d],n)>=0?(c=d,o=d-1):t=d+1}return c}(e,void 0===n?0:0|n,void 0===r?e.length-1:0|r,t,o):function(e,t,o,n){for(var r=o+1;t<=o;){var c=t+o>>>1;e[c]>=n?(r=c,o=c-1):t=c+1}return r}(e,void 0===o?0:0|o,void 0===n?e.length-1:0|n,t)};function Nt(e,t,o,n,r){this.mid=e,this.left=t,this.right=o,this.leftPoints=n,this.rightPoints=r,this.count=(t?t.count:0)+(o?o.count:0)+n.length}var $t=Nt.prototype;function Pt(e,t){e.mid=t.mid,e.left=t.left,e.right=t.right,e.leftPoints=t.leftPoints,e.rightPoints=t.rightPoints,e.count=t.count}function zt(e,t){var o=Vt(t);e.mid=o.mid,e.left=o.left,e.right=o.right,e.leftPoints=o.leftPoints,e.rightPoints=o.rightPoints,e.count=o.count}function Ht(e,t){var o=e.intervals([]);o.push(t),zt(e,o)}function Lt(e,t){var o=e.intervals([]),n=o.indexOf(t);return n<0?0:(o.splice(n,1),zt(e,o),1)}function Gt(e,t,o){for(var n=0;n<e.length&&e[n][0]<=t;++n){var r=o(e[n]);if(r)return r}}function Ft(e,t,o){for(var n=e.length-1;n>=0&&e[n][1]>=t;--n){var r=o(e[n]);if(r)return r}}function Bt(e,t){for(var o=0;o<e.length;++o){var n=t(e[o]);if(n)return n}}function Wt(e,t){return e-t}function Ut(e,t){return e[0]-t[0]||e[1]-t[1]}function jt(e,t){return e[1]-t[1]||e[0]-t[0]}function Vt(e){if(0===e.length)return null;for(var t=[],o=0;o<e.length;++o)t.push(e[o][0],e[o][1]);t.sort(Wt);var n=t[t.length>>1],r=[],c=[],d=[];for(o=0;o<e.length;++o){var h=e[o];h[1]<n?r.push(h):n<h[0]?c.push(h):d.push(h)}var u=d,p=d.slice();return u.sort(Ut),p.sort(jt),new Nt(n,Vt(r),Vt(c),u,p)}function Zt(e){this.root=e}$t.intervals=function(e){return e.push.apply(e,this.leftPoints),this.left&&this.left.intervals(e),this.right&&this.right.intervals(e),e},$t.insert=function(e){var t=this.count-this.leftPoints.length;if(this.count+=1,e[1]<this.mid)this.left?4*(this.left.count+1)>3*(t+1)?Ht(this,e):this.left.insert(e):this.left=Vt([e]);else if(e[0]>this.mid)this.right?4*(this.right.count+1)>3*(t+1)?Ht(this,e):this.right.insert(e):this.right=Vt([e]);else{var o=At(this.leftPoints,e,Ut),n=At(this.rightPoints,e,jt);this.leftPoints.splice(o,0,e),this.rightPoints.splice(n,0,e)}},$t.remove=function(e){var t=this.count-this.leftPoints;if(e[1]<this.mid)return this.left?4*(this.right?this.right.count:0)>3*(t-1)?Lt(this,e):2===(c=this.left.remove(e))?(this.left=null,this.count-=1,1):(1===c&&(this.count-=1),c):0;if(e[0]>this.mid)return this.right?4*(this.left?this.left.count:0)>3*(t-1)?Lt(this,e):2===(c=this.right.remove(e))?(this.right=null,this.count-=1,1):(1===c&&(this.count-=1),c):0;if(1===this.count)return this.leftPoints[0]===e?2:0;if(1===this.leftPoints.length&&this.leftPoints[0]===e){if(this.left&&this.right){for(var o=this,n=this.left;n.right;)o=n,n=n.right;if(o===this)n.right=this.right;else{var r=this.left,c=this.right;o.count-=n.count,o.right=n.left,n.left=r,n.right=c}Pt(this,n),this.count=(this.left?this.left.count:0)+(this.right?this.right.count:0)+this.leftPoints.length}else this.left?Pt(this,this.left):Pt(this,this.right);return 1}for(r=At(this.leftPoints,e,Ut);r<this.leftPoints.length&&this.leftPoints[r][0]===e[0];++r)if(this.leftPoints[r]===e)for(this.count-=1,this.leftPoints.splice(r,1),c=At(this.rightPoints,e,jt);c<this.rightPoints.length&&this.rightPoints[c][1]===e[1];++c)if(this.rightPoints[c]===e)return this.rightPoints.splice(c,1),1;return 0},$t.queryPoint=function(e,t){return e<this.mid?this.left&&(o=this.left.queryPoint(e,t))?o:Gt(this.leftPoints,e,t):e>this.mid?this.right&&(o=this.right.queryPoint(e,t))?o:Ft(this.rightPoints,e,t):Bt(this.leftPoints,t);var o},$t.queryInterval=function(e,t,o){var n;return e<this.mid&&this.left&&(n=this.left.queryInterval(e,t,o))||t>this.mid&&this.right&&(n=this.right.queryInterval(e,t,o))?n:t<this.mid?Gt(this.leftPoints,t,o):e>this.mid?Ft(this.rightPoints,e,o):Bt(this.leftPoints,o)};var qt=Zt.prototype;qt.insert=function(e){this.root?this.root.insert(e):this.root=new Nt(e[0],null,null,[e],[e])},qt.remove=function(e){if(this.root){var t=this.root.remove(e);return 2===t&&(this.root=null),0!==t}return!1},qt.queryPoint=function(e,t){if(this.root)return this.root.queryPoint(e,t)},qt.queryInterval=function(e,t,o){if(e<=t&&this.root)return this.root.queryInterval(e,t,o)},Object.defineProperty(qt,"count",{get:function(){return this.root?this.root.count:0}}),Object.defineProperty(qt,"intervals",{get:function(){return this.root?this.root.intervals([]):[]}});var Kt,Yt,Xt=function(){function e(){be(this,e),ke(this,"_columnSizeMap",{}),ke(this,"_intervalTree",new Zt(null)),ke(this,"_leftMap",{})}return Ce(e,[{key:"estimateTotalHeight",value:function(e,t,o){var n=e-this.count;return this.tallestColumnSize+Math.ceil(n/t)*o}},{key:"range",value:function(e,t,o){var n=this;this._intervalTree.queryInterval(e,e+t,(function(e){var t=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var n,r,c,d,h=[],u=!0,p=!1;try{if(c=(o=o.call(e)).next,0===t){if(Object(o)!==o)return;u=!1}else for(;!(u=(n=c.call(o)).done)&&(h.push(n.value),h.length!==t);u=!0);}catch(e){p=!0,r=e}finally{try{if(!u&&null!=o.return&&(d=o.return(),Object(d)!==d))return}finally{if(p)throw r}}return h}}(e,t)||Et(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e,3),r=t[0],c=(t[1],t[2]);return o(c,n._leftMap[c],r)}))}},{key:"setPosition",value:function(e,t,o,n){this._intervalTree.insert([o,o+n,e]),this._leftMap[e]=t;var r=this._columnSizeMap,c=r[t];r[t]=void 0===c?o+n:Math.max(c,o+n)}},{key:"count",get:function(){return this._intervalTree.count}},{key:"shortestColumnSize",get:function(){var e=this._columnSizeMap,t=0;for(var o in e){var n=e[o];t=0===t?n:Math.min(t,n)}return t}},{key:"tallestColumnSize",get:function(){var e=this._columnSizeMap,t=0;for(var o in e){var n=e[o];t=Math.max(t,n)}return t}}]),e}();function Qt(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function Jt(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?Qt(o,!0).forEach((function(t){ke(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):Qt(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var eo=(Yt=Kt=function(e){function t(){var e,o;be(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return ke(xe(o=Se(this,(e=_e(t)).call.apply(e,[this].concat(r)))),"state",{isScrolling:!1,scrollTop:0}),ke(xe(o),"_debounceResetIsScrollingId",void 0),ke(xe(o),"_invalidateOnUpdateStartIndex",null),ke(xe(o),"_invalidateOnUpdateStopIndex",null),ke(xe(o),"_positionCache",new Xt),ke(xe(o),"_startIndex",null),ke(xe(o),"_startIndexMemoized",null),ke(xe(o),"_stopIndex",null),ke(xe(o),"_stopIndexMemoized",null),ke(xe(o),"_debounceResetIsScrollingCallback",(function(){o.setState({isScrolling:!1})})),ke(xe(o),"_setScrollingContainerRef",(function(e){o._scrollingContainer=e})),ke(xe(o),"_onScroll",(function(e){var t=o.props.height,n=e.currentTarget.scrollTop,r=Math.min(Math.max(0,o._getEstimatedTotalHeight()-t),n);n===r&&(o._debounceResetIsScrolling(),o.state.scrollTop!==r&&o.setState({isScrolling:!0,scrollTop:r}))})),o}return Re(t,e),Ce(t,[{key:"clearCellPositions",value:function(){this._positionCache=new Xt,this.forceUpdate()}},{key:"invalidateCellSizeAfterRender",value:function(e){var t=e.rowIndex;null===this._invalidateOnUpdateStartIndex?(this._invalidateOnUpdateStartIndex=t,this._invalidateOnUpdateStopIndex=t):(this._invalidateOnUpdateStartIndex=Math.min(this._invalidateOnUpdateStartIndex,t),this._invalidateOnUpdateStopIndex=Math.max(this._invalidateOnUpdateStopIndex,t))}},{key:"recomputeCellPositions",value:function(){var e=this._positionCache.count-1;this._positionCache=new Xt,this._populatePositionCache(0,e),this.forceUpdate()}},{key:"componentDidMount",value:function(){this._checkInvalidateOnUpdate(),this._invokeOnScrollCallback(),this._invokeOnCellsRenderedCallback()}},{key:"componentDidUpdate",value:function(e,t){this._checkInvalidateOnUpdate(),this._invokeOnScrollCallback(),this._invokeOnCellsRenderedCallback(),this.props.scrollTop!==e.scrollTop&&this._debounceResetIsScrolling()}},{key:"componentWillUnmount",value:function(){this._debounceResetIsScrollingId&&Ke(this._debounceResetIsScrollingId)}},{key:"render",value:function(){var e,t=this,o=this.props,n=o.autoHeight,r=o.cellCount,c=o.cellMeasurerCache,h=o.cellRenderer,u=o.className,p=o.height,m=o.id,g=o.keyMapper,v=o.overscanByPixels,y=o.role,w=o.style,x=o.tabIndex,S=o.width,_=o.rowDirection,T=this.state,E=T.isScrolling,O=T.scrollTop,A=[],N=this._getEstimatedTotalHeight(),$=this._positionCache.shortestColumnSize,P=this._positionCache.count,z=0;if(this._positionCache.range(Math.max(0,O-v),p+2*v,(function(o,n,r){var d;void 0===e?(z=o,e=o):(z=Math.min(z,o),e=Math.max(e,o)),A.push(h({index:o,isScrolling:E,key:g(o),parent:t,style:(d={height:c.getHeight(o)},ke(d,"ltr"===_?"left":"right",n),ke(d,"position","absolute"),ke(d,"top",r),ke(d,"width",c.getWidth(o)),d)}))})),$<O+p+v&&P<r)for(var G=Math.min(r-P,Math.ceil((O+p+v-$)/c.defaultHeight*S/c.defaultWidth)),F=P;F<P+G;F++)e=F,A.push(h({index:F,isScrolling:E,key:g(F),parent:this,style:{width:c.getWidth(F)}}));return this._startIndex=z,this._stopIndex=e,d.createElement("div",{ref:this._setScrollingContainerRef,"aria-label":this.props["aria-label"],className:Me("ReactVirtualized__Masonry",u),id:m,onScroll:this._onScroll,role:y,style:Jt({boxSizing:"border-box",direction:"ltr",height:n?"auto":p,overflowX:"hidden",overflowY:N<p?"hidden":"auto",position:"relative",width:S,WebkitOverflowScrolling:"touch",willChange:"transform"},w),tabIndex:x},d.createElement("div",{className:"ReactVirtualized__Masonry__innerScrollContainer",style:{width:"100%",height:N,maxWidth:"100%",maxHeight:N,overflow:"hidden",pointerEvents:E?"none":"",position:"relative"}},A))}},{key:"_checkInvalidateOnUpdate",value:function(){if("number"==typeof this._invalidateOnUpdateStartIndex){var e=this._invalidateOnUpdateStartIndex,t=this._invalidateOnUpdateStopIndex;this._invalidateOnUpdateStartIndex=null,this._invalidateOnUpdateStopIndex=null,this._populatePositionCache(e,t),this.forceUpdate()}}},{key:"_debounceResetIsScrolling",value:function(){var e=this.props.scrollingResetTimeInterval;this._debounceResetIsScrollingId&&Ke(this._debounceResetIsScrollingId),this._debounceResetIsScrollingId=Ye(this._debounceResetIsScrollingCallback,e)}},{key:"_getEstimatedTotalHeight",value:function(){var e=this.props,t=e.cellCount,o=e.cellMeasurerCache,n=e.width,r=Math.max(1,Math.floor(n/o.defaultWidth));return this._positionCache.estimateTotalHeight(t,r,o.defaultHeight)}},{key:"_invokeOnScrollCallback",value:function(){var e=this.props,t=e.height,o=e.onScroll,n=this.state.scrollTop;this._onScrollMemoized!==n&&(o({clientHeight:t,scrollHeight:this._getEstimatedTotalHeight(),scrollTop:n}),this._onScrollMemoized=n)}},{key:"_invokeOnCellsRenderedCallback",value:function(){this._startIndexMemoized===this._startIndex&&this._stopIndexMemoized===this._stopIndex||((0,this.props.onCellsRendered)({startIndex:this._startIndex,stopIndex:this._stopIndex}),this._startIndexMemoized=this._startIndex,this._stopIndexMemoized=this._stopIndex)}},{key:"_populatePositionCache",value:function(e,t){for(var o=this.props,n=o.cellMeasurerCache,r=o.cellPositioner,c=e;c<=t;c++){var d=r(c),h=d.left,u=d.top;this._positionCache.setPosition(c,h,u,n.getHeight(c))}}}],[{key:"getDerivedStateFromProps",value:function(e,t){return void 0!==e.scrollTop&&t.scrollTop!==e.scrollTop?{isScrolling:!0,scrollTop:e.scrollTop}:null}}]),t}(d.PureComponent),ke(Kt,"propTypes",null),Yt);function to(){}ke(eo,"defaultProps",{autoHeight:!1,keyMapper:function(e){return e},onCellsRendered:to,onScroll:to,overscanByPixels:20,role:"grid",scrollingResetTimeInterval:150,style:{},tabIndex:0,rowDirection:"ltr"}),(0,Ee.polyfill)(eo);var oo=function(){function e(){var t=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};be(this,e),ke(this,"_cellMeasurerCache",void 0),ke(this,"_columnIndexOffset",void 0),ke(this,"_rowIndexOffset",void 0),ke(this,"columnWidth",(function(e){var o=e.index;t._cellMeasurerCache.columnWidth({index:o+t._columnIndexOffset})})),ke(this,"rowHeight",(function(e){var o=e.index;t._cellMeasurerCache.rowHeight({index:o+t._rowIndexOffset})}));var n=o.cellMeasurerCache,r=o.columnIndexOffset,c=void 0===r?0:r,d=o.rowIndexOffset,h=void 0===d?0:d;this._cellMeasurerCache=n,this._columnIndexOffset=c,this._rowIndexOffset=h}return Ce(e,[{key:"clear",value:function(e,t){this._cellMeasurerCache.clear(e+this._rowIndexOffset,t+this._columnIndexOffset)}},{key:"clearAll",value:function(){this._cellMeasurerCache.clearAll()}},{key:"hasFixedHeight",value:function(){return this._cellMeasurerCache.hasFixedHeight()}},{key:"hasFixedWidth",value:function(){return this._cellMeasurerCache.hasFixedWidth()}},{key:"getHeight",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this._cellMeasurerCache.getHeight(e+this._rowIndexOffset,t+this._columnIndexOffset)}},{key:"getWidth",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this._cellMeasurerCache.getWidth(e+this._rowIndexOffset,t+this._columnIndexOffset)}},{key:"has",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this._cellMeasurerCache.has(e+this._rowIndexOffset,t+this._columnIndexOffset)}},{key:"set",value:function(e,t,o,n){this._cellMeasurerCache.set(e+this._rowIndexOffset,t+this._columnIndexOffset,o,n)}},{key:"defaultHeight",get:function(){return this._cellMeasurerCache.defaultHeight}},{key:"defaultWidth",get:function(){return this._cellMeasurerCache.defaultWidth}}]),e}();function no(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function ro(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?no(o,!0).forEach((function(t){ke(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):no(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var io=function(e){function t(e,o){var n;be(this,t),ke(xe(n=Se(this,_e(t).call(this,e,o))),"state",{scrollLeft:0,scrollTop:0,scrollbarSize:0,showHorizontalScrollbar:!1,showVerticalScrollbar:!1}),ke(xe(n),"_deferredInvalidateColumnIndex",null),ke(xe(n),"_deferredInvalidateRowIndex",null),ke(xe(n),"_bottomLeftGridRef",(function(e){n._bottomLeftGrid=e})),ke(xe(n),"_bottomRightGridRef",(function(e){n._bottomRightGrid=e})),ke(xe(n),"_cellRendererBottomLeftGrid",(function(e){var t=e.rowIndex,o=Ae(e,["rowIndex"]),r=n.props,c=r.cellRenderer,h=r.fixedRowCount;return t===r.rowCount-h?d.createElement("div",{key:o.key,style:ro({},o.style,{height:20})}):c(ro({},o,{parent:xe(n),rowIndex:t+h}))})),ke(xe(n),"_cellRendererBottomRightGrid",(function(e){var t=e.columnIndex,o=e.rowIndex,r=Ae(e,["columnIndex","rowIndex"]),c=n.props,d=c.cellRenderer,h=c.fixedColumnCount,u=c.fixedRowCount;return d(ro({},r,{columnIndex:t+h,parent:xe(n),rowIndex:o+u}))})),ke(xe(n),"_cellRendererTopRightGrid",(function(e){var t=e.columnIndex,o=Ae(e,["columnIndex"]),r=n.props,c=r.cellRenderer,h=r.columnCount,u=r.fixedColumnCount;return t===h-u?d.createElement("div",{key:o.key,style:ro({},o.style,{width:20})}):c(ro({},o,{columnIndex:t+u,parent:xe(n)}))})),ke(xe(n),"_columnWidthRightGrid",(function(e){var t=e.index,o=n.props,r=o.columnCount,c=o.fixedColumnCount,d=o.columnWidth,h=n.state,u=h.scrollbarSize;return h.showHorizontalScrollbar&&t===r-c?u:"function"==typeof d?d({index:t+c}):d})),ke(xe(n),"_onScroll",(function(e){var t=e.scrollLeft,o=e.scrollTop;n.setState({scrollLeft:t,scrollTop:o});var r=n.props.onScroll;r&&r(e)})),ke(xe(n),"_onScrollbarPresenceChange",(function(e){var t=e.horizontal,o=e.size,r=e.vertical,c=n.state,d=c.showHorizontalScrollbar,h=c.showVerticalScrollbar;if(t!==d||r!==h){n.setState({scrollbarSize:o,showHorizontalScrollbar:t,showVerticalScrollbar:r});var u=n.props.onScrollbarPresenceChange;"function"==typeof u&&u({horizontal:t,size:o,vertical:r})}})),ke(xe(n),"_onScrollLeft",(function(e){var t=e.scrollLeft;n._onScroll({scrollLeft:t,scrollTop:n.state.scrollTop})})),ke(xe(n),"_onScrollTop",(function(e){var t=e.scrollTop;n._onScroll({scrollTop:t,scrollLeft:n.state.scrollLeft})})),ke(xe(n),"_rowHeightBottomGrid",(function(e){var t=e.index,o=n.props,r=o.fixedRowCount,c=o.rowCount,d=o.rowHeight,h=n.state,u=h.scrollbarSize;return h.showVerticalScrollbar&&t===c-r?u:"function"==typeof d?d({index:t+r}):d})),ke(xe(n),"_topLeftGridRef",(function(e){n._topLeftGrid=e})),ke(xe(n),"_topRightGridRef",(function(e){n._topRightGrid=e}));var r=e.deferredMeasurementCache,c=e.fixedColumnCount,h=e.fixedRowCount;return n._maybeCalculateCachedStyles(!0),r&&(n._deferredMeasurementCacheBottomLeftGrid=h>0?new oo({cellMeasurerCache:r,columnIndexOffset:0,rowIndexOffset:h}):r,n._deferredMeasurementCacheBottomRightGrid=c>0||h>0?new oo({cellMeasurerCache:r,columnIndexOffset:c,rowIndexOffset:h}):r,n._deferredMeasurementCacheTopRightGrid=c>0?new oo({cellMeasurerCache:r,columnIndexOffset:c,rowIndexOffset:0}):r),n}return Re(t,e),Ce(t,[{key:"forceUpdateGrids",value:function(){this._bottomLeftGrid&&this._bottomLeftGrid.forceUpdate(),this._bottomRightGrid&&this._bottomRightGrid.forceUpdate(),this._topLeftGrid&&this._topLeftGrid.forceUpdate(),this._topRightGrid&&this._topRightGrid.forceUpdate()}},{key:"invalidateCellSizeAfterRender",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.columnIndex,o=void 0===t?0:t,n=e.rowIndex,r=void 0===n?0:n;this._deferredInvalidateColumnIndex="number"==typeof this._deferredInvalidateColumnIndex?Math.min(this._deferredInvalidateColumnIndex,o):o,this._deferredInvalidateRowIndex="number"==typeof this._deferredInvalidateRowIndex?Math.min(this._deferredInvalidateRowIndex,r):r}},{key:"measureAllCells",value:function(){this._bottomLeftGrid&&this._bottomLeftGrid.measureAllCells(),this._bottomRightGrid&&this._bottomRightGrid.measureAllCells(),this._topLeftGrid&&this._topLeftGrid.measureAllCells(),this._topRightGrid&&this._topRightGrid.measureAllCells()}},{key:"recomputeGridSize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.columnIndex,o=void 0===t?0:t,n=e.rowIndex,r=void 0===n?0:n,c=this.props,d=c.fixedColumnCount,h=c.fixedRowCount,u=Math.max(0,o-d),p=Math.max(0,r-h);this._bottomLeftGrid&&this._bottomLeftGrid.recomputeGridSize({columnIndex:o,rowIndex:p}),this._bottomRightGrid&&this._bottomRightGrid.recomputeGridSize({columnIndex:u,rowIndex:p}),this._topLeftGrid&&this._topLeftGrid.recomputeGridSize({columnIndex:o,rowIndex:r}),this._topRightGrid&&this._topRightGrid.recomputeGridSize({columnIndex:u,rowIndex:r}),this._leftGridWidth=null,this._topGridHeight=null,this._maybeCalculateCachedStyles(!0)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.scrollLeft,o=e.scrollTop;if(t>0||o>0){var n={};t>0&&(n.scrollLeft=t),o>0&&(n.scrollTop=o),this.setState(n)}this._handleInvalidatedGridSize()}},{key:"componentDidUpdate",value:function(){this._handleInvalidatedGridSize()}},{key:"render",value:function(){var e=this.props,t=e.onScroll,o=e.onSectionRendered,n=(e.onScrollbarPresenceChange,e.scrollLeft,e.scrollToColumn),r=(e.scrollTop,e.scrollToRow),c=Ae(e,["onScroll","onSectionRendered","onScrollbarPresenceChange","scrollLeft","scrollToColumn","scrollTop","scrollToRow"]);if(this._prepareForRender(),0===this.props.width||0===this.props.height)return null;var h=this.state,u=h.scrollLeft,p=h.scrollTop;return d.createElement("div",{style:this._containerOuterStyle},d.createElement("div",{style:this._containerTopStyle},this._renderTopLeftGrid(c),this._renderTopRightGrid(ro({},c,{onScroll:t,scrollLeft:u}))),d.createElement("div",{style:this._containerBottomStyle},this._renderBottomLeftGrid(ro({},c,{onScroll:t,scrollTop:p})),this._renderBottomRightGrid(ro({},c,{onScroll:t,onSectionRendered:o,scrollLeft:u,scrollToColumn:n,scrollToRow:r,scrollTop:p}))))}},{key:"_getBottomGridHeight",value:function(e){return e.height-this._getTopGridHeight(e)}},{key:"_getLeftGridWidth",value:function(e){var t=e.fixedColumnCount,o=e.columnWidth;if(null==this._leftGridWidth)if("function"==typeof o){for(var n=0,r=0;r<t;r++)n+=o({index:r});this._leftGridWidth=n}else this._leftGridWidth=o*t;return this._leftGridWidth}},{key:"_getRightGridWidth",value:function(e){return e.width-this._getLeftGridWidth(e)}},{key:"_getTopGridHeight",value:function(e){var t=e.fixedRowCount,o=e.rowHeight;if(null==this._topGridHeight)if("function"==typeof o){for(var n=0,r=0;r<t;r++)n+=o({index:r});this._topGridHeight=n}else this._topGridHeight=o*t;return this._topGridHeight}},{key:"_handleInvalidatedGridSize",value:function(){if("number"==typeof this._deferredInvalidateColumnIndex){var e=this._deferredInvalidateColumnIndex,t=this._deferredInvalidateRowIndex;this._deferredInvalidateColumnIndex=null,this._deferredInvalidateRowIndex=null,this.recomputeGridSize({columnIndex:e,rowIndex:t}),this.forceUpdate()}}},{key:"_maybeCalculateCachedStyles",value:function(e){var t=this.props,o=t.columnWidth,n=t.enableFixedColumnScroll,r=t.enableFixedRowScroll,c=t.height,d=t.fixedColumnCount,h=t.fixedRowCount,u=t.rowHeight,p=t.style,m=t.styleBottomLeftGrid,g=t.styleBottomRightGrid,v=t.styleTopLeftGrid,y=t.styleTopRightGrid,w=t.width,x=e||c!==this._lastRenderedHeight||w!==this._lastRenderedWidth,S=e||o!==this._lastRenderedColumnWidth||d!==this._lastRenderedFixedColumnCount,_=e||h!==this._lastRenderedFixedRowCount||u!==this._lastRenderedRowHeight;(e||x||p!==this._lastRenderedStyle)&&(this._containerOuterStyle=ro({height:c,overflow:"visible",width:w},p)),(e||x||_)&&(this._containerTopStyle={height:this._getTopGridHeight(this.props),position:"relative",width:w},this._containerBottomStyle={height:c-this._getTopGridHeight(this.props),overflow:"visible",position:"relative",width:w}),(e||m!==this._lastRenderedStyleBottomLeftGrid)&&(this._bottomLeftGridStyle=ro({left:0,overflowX:"hidden",overflowY:n?"auto":"hidden",position:"absolute"},m)),(e||S||g!==this._lastRenderedStyleBottomRightGrid)&&(this._bottomRightGridStyle=ro({left:this._getLeftGridWidth(this.props),position:"absolute"},g)),(e||v!==this._lastRenderedStyleTopLeftGrid)&&(this._topLeftGridStyle=ro({left:0,overflowX:"hidden",overflowY:"hidden",position:"absolute",top:0},v)),(e||S||y!==this._lastRenderedStyleTopRightGrid)&&(this._topRightGridStyle=ro({left:this._getLeftGridWidth(this.props),overflowX:r?"auto":"hidden",overflowY:"hidden",position:"absolute",top:0},y)),this._lastRenderedColumnWidth=o,this._lastRenderedFixedColumnCount=d,this._lastRenderedFixedRowCount=h,this._lastRenderedHeight=c,this._lastRenderedRowHeight=u,this._lastRenderedStyle=p,this._lastRenderedStyleBottomLeftGrid=m,this._lastRenderedStyleBottomRightGrid=g,this._lastRenderedStyleTopLeftGrid=v,this._lastRenderedStyleTopRightGrid=y,this._lastRenderedWidth=w}},{key:"_prepareForRender",value:function(){this._lastRenderedColumnWidth===this.props.columnWidth&&this._lastRenderedFixedColumnCount===this.props.fixedColumnCount||(this._leftGridWidth=null),this._lastRenderedFixedRowCount===this.props.fixedRowCount&&this._lastRenderedRowHeight===this.props.rowHeight||(this._topGridHeight=null),this._maybeCalculateCachedStyles(),this._lastRenderedColumnWidth=this.props.columnWidth,this._lastRenderedFixedColumnCount=this.props.fixedColumnCount,this._lastRenderedFixedRowCount=this.props.fixedRowCount,this._lastRenderedRowHeight=this.props.rowHeight}},{key:"_renderBottomLeftGrid",value:function(e){var t=e.enableFixedColumnScroll,o=e.fixedColumnCount,n=e.fixedRowCount,r=e.rowCount,c=e.hideBottomLeftGridScrollbar,h=this.state.showVerticalScrollbar;if(!o)return null;var u=h?1:0,p=this._getBottomGridHeight(e),m=this._getLeftGridWidth(e),g=this.state.showVerticalScrollbar?this.state.scrollbarSize:0,v=c?m+g:m,y=d.createElement(tt,Oe({},e,{cellRenderer:this._cellRendererBottomLeftGrid,className:this.props.classNameBottomLeftGrid,columnCount:o,deferredMeasurementCache:this._deferredMeasurementCacheBottomLeftGrid,height:p,onScroll:t?this._onScrollTop:void 0,ref:this._bottomLeftGridRef,rowCount:Math.max(0,r-n)+u,rowHeight:this._rowHeightBottomGrid,style:this._bottomLeftGridStyle,tabIndex:null,width:v}));return c?d.createElement("div",{className:"BottomLeftGrid_ScrollWrapper",style:ro({},this._bottomLeftGridStyle,{height:p,width:m,overflowY:"hidden"})},y):y}},{key:"_renderBottomRightGrid",value:function(e){var t=e.columnCount,o=e.fixedColumnCount,n=e.fixedRowCount,r=e.rowCount,c=e.scrollToColumn,h=e.scrollToRow;return d.createElement(tt,Oe({},e,{cellRenderer:this._cellRendererBottomRightGrid,className:this.props.classNameBottomRightGrid,columnCount:Math.max(0,t-o),columnWidth:this._columnWidthRightGrid,deferredMeasurementCache:this._deferredMeasurementCacheBottomRightGrid,height:this._getBottomGridHeight(e),onScroll:this._onScroll,onScrollbarPresenceChange:this._onScrollbarPresenceChange,ref:this._bottomRightGridRef,rowCount:Math.max(0,r-n),rowHeight:this._rowHeightBottomGrid,scrollToColumn:c-o,scrollToRow:h-n,style:this._bottomRightGridStyle,width:this._getRightGridWidth(e)}))}},{key:"_renderTopLeftGrid",value:function(e){var t=e.fixedColumnCount,o=e.fixedRowCount;return t&&o?d.createElement(tt,Oe({},e,{className:this.props.classNameTopLeftGrid,columnCount:t,height:this._getTopGridHeight(e),ref:this._topLeftGridRef,rowCount:o,style:this._topLeftGridStyle,tabIndex:null,width:this._getLeftGridWidth(e)})):null}},{key:"_renderTopRightGrid",value:function(e){var t=e.columnCount,o=e.enableFixedRowScroll,n=e.fixedColumnCount,r=e.fixedRowCount,c=e.scrollLeft,h=e.hideTopRightGridScrollbar,u=this.state,p=u.showHorizontalScrollbar,m=u.scrollbarSize;if(!r)return null;var g=p?1:0,v=this._getTopGridHeight(e),y=this._getRightGridWidth(e),w=p?m:0,x=v,S=this._topRightGridStyle;h&&(x=v+w,S=ro({},this._topRightGridStyle,{left:0}));var _=d.createElement(tt,Oe({},e,{cellRenderer:this._cellRendererTopRightGrid,className:this.props.classNameTopRightGrid,columnCount:Math.max(0,t-n)+g,columnWidth:this._columnWidthRightGrid,deferredMeasurementCache:this._deferredMeasurementCacheTopRightGrid,height:x,onScroll:o?this._onScrollLeft:void 0,ref:this._topRightGridRef,rowCount:r,scrollLeft:c,style:S,tabIndex:null,width:y}));return h?d.createElement("div",{className:"TopRightGrid_ScrollWrapper",style:ro({},this._topRightGridStyle,{height:v,width:y,overflowX:"hidden"})},_):_}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.scrollLeft!==t.scrollLeft||e.scrollTop!==t.scrollTop?{scrollLeft:null!=e.scrollLeft&&e.scrollLeft>=0?e.scrollLeft:t.scrollLeft,scrollTop:null!=e.scrollTop&&e.scrollTop>=0?e.scrollTop:t.scrollTop}:null}}]),t}(d.PureComponent);function so(e){var t=e.className,o=e.columns,n=e.style;return d.createElement("div",{className:t,role:"row",style:n},o)}ke(io,"defaultProps",{classNameBottomLeftGrid:"",classNameBottomRightGrid:"",classNameTopLeftGrid:"",classNameTopRightGrid:"",enableFixedColumnScroll:!1,enableFixedRowScroll:!1,fixedColumnCount:0,fixedRowCount:0,scrollToColumn:-1,scrollToRow:-1,style:{},styleBottomLeftGrid:{},styleBottomRightGrid:{},styleTopLeftGrid:{},styleTopRightGrid:{},hideTopRightGridScrollbar:!1,hideBottomLeftGridScrollbar:!1}),io.propTypes={},(0,Ee.polyfill)(io),(function(e){function t(e,o){var n;return be(this,t),(n=Se(this,_e(t).call(this,e,o))).state={clientHeight:0,clientWidth:0,scrollHeight:0,scrollLeft:0,scrollTop:0,scrollWidth:0},n._onScroll=n._onScroll.bind(xe(n)),n}return Re(t,e),Ce(t,[{key:"render",value:function(){var e=this.props.children,t=this.state,o=t.clientHeight,n=t.clientWidth,r=t.scrollHeight,c=t.scrollLeft,d=t.scrollTop,h=t.scrollWidth;return e({clientHeight:o,clientWidth:n,onScroll:this._onScroll,scrollHeight:r,scrollLeft:c,scrollTop:d,scrollWidth:h})}},{key:"_onScroll",value:function(e){var t=e.clientHeight,o=e.clientWidth,n=e.scrollHeight,r=e.scrollLeft,c=e.scrollTop,d=e.scrollWidth;this.setState({clientHeight:t,clientWidth:o,scrollHeight:n,scrollLeft:r,scrollTop:c,scrollWidth:d})}}]),t}(d.PureComponent)).propTypes={},so.propTypes=null;const ao={ASC:"ASC",DESC:"DESC"};function lo(e){var t=e.sortDirection,o=Me("ReactVirtualized__Table__sortableHeaderIcon",{"ReactVirtualized__Table__sortableHeaderIcon--ASC":t===ao.ASC,"ReactVirtualized__Table__sortableHeaderIcon--DESC":t===ao.DESC});return d.createElement("svg",{className:o,width:18,height:18,viewBox:"0 0 24 24"},t===ao.ASC?d.createElement("path",{d:"M7 14l5-5 5 5z"}):d.createElement("path",{d:"M7 10l5 5 5-5z"}),d.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}function co(e){var t=e.dataKey,o=e.label,n=e.sortBy,r=e.sortDirection,c=n===t,h=[d.createElement("span",{className:"ReactVirtualized__Table__headerTruncatedText",key:"label",title:"string"==typeof o?o:null},o)];return c&&h.push(d.createElement(lo,{key:"SortIndicator",sortDirection:r})),h}function ho(e){var t=e.className,o=e.columns,n=e.index,r=e.key,c=e.onRowClick,h=e.onRowDoubleClick,u=e.onRowMouseOut,p=e.onRowMouseOver,m=e.onRowRightClick,g=e.rowData,v=e.style,y={"aria-rowindex":n+1};return(c||h||u||p||m)&&(y["aria-label"]="row",y.tabIndex=0,c&&(y.onClick=function(e){return c({event:e,index:n,rowData:g})}),h&&(y.onDoubleClick=function(e){return h({event:e,index:n,rowData:g})}),u&&(y.onMouseOut=function(e){return u({event:e,index:n,rowData:g})}),p&&(y.onMouseOver=function(e){return p({event:e,index:n,rowData:g})}),m&&(y.onContextMenu=function(e){return m({event:e,index:n,rowData:g})})),d.createElement("div",Oe({},y,{className:t,key:r,role:"row",style:v}),o)}lo.propTypes={},co.propTypes=null,ho.propTypes=null;var uo=function(e){function t(){return be(this,t),Se(this,_e(t).apply(this,arguments))}return Re(t,e),t}(d.Component);function po(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function fo(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?po(o,!0).forEach((function(t){ke(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):po(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}ke(uo,"defaultProps",{cellDataGetter:function(e){var t=e.dataKey,o=e.rowData;return"function"==typeof o.get?o.get(t):o[t]},cellRenderer:function(e){var t=e.cellData;return null==t?"":String(t)},defaultSortDirection:ao.ASC,flexGrow:0,flexShrink:1,headerRenderer:co,style:{}}),uo.propTypes={};var mo=function(e){function t(e){var o;return be(this,t),(o=Se(this,_e(t).call(this,e))).state={scrollbarWidth:0},o._createColumn=o._createColumn.bind(xe(o)),o._createRow=o._createRow.bind(xe(o)),o._onScroll=o._onScroll.bind(xe(o)),o._onSectionRendered=o._onSectionRendered.bind(xe(o)),o._setRef=o._setRef.bind(xe(o)),o}return Re(t,e),Ce(t,[{key:"forceUpdateGrid",value:function(){this.Grid&&this.Grid.forceUpdate()}},{key:"getOffsetForRow",value:function(e){var t=e.alignment,o=e.index;return this.Grid?this.Grid.getOffsetForCell({alignment:t,rowIndex:o}).scrollTop:0}},{key:"invalidateCellSizeAfterRender",value:function(e){var t=e.columnIndex,o=e.rowIndex;this.Grid&&this.Grid.invalidateCellSizeAfterRender({rowIndex:o,columnIndex:t})}},{key:"measureAllRows",value:function(){this.Grid&&this.Grid.measureAllCells()}},{key:"recomputeGridSize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.columnIndex,o=void 0===t?0:t,n=e.rowIndex,r=void 0===n?0:n;this.Grid&&this.Grid.recomputeGridSize({rowIndex:r,columnIndex:o})}},{key:"recomputeRowHeights",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.recomputeGridSize({rowIndex:e})}},{key:"scrollToPosition",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.scrollToPosition({scrollTop:e})}},{key:"scrollToRow",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.scrollToCell({columnIndex:0,rowIndex:e})}},{key:"getScrollbarWidth",value:function(){if(this.Grid){var e=(0,mt.findDOMNode)(this.Grid),t=e.clientWidth||0;return(e.offsetWidth||0)-t}return 0}},{key:"componentDidMount",value:function(){this._setScrollbarWidth()}},{key:"componentDidUpdate",value:function(){this._setScrollbarWidth()}},{key:"render",value:function(){var e=this,t=this.props,o=t.children,n=t.className,r=t.disableHeader,c=t.gridClassName,h=t.gridStyle,u=t.headerHeight,p=t.headerRowRenderer,m=t.height,g=t.id,v=t.noRowsRenderer,y=t.rowClassName,w=t.rowStyle,x=t.scrollToIndex,S=t.style,_=t.width,T=this.state.scrollbarWidth,E=r?m:m-u,O="function"==typeof y?y({index:-1}):y,A="function"==typeof w?w({index:-1}):w;return this._cachedColumnStyles=[],d.Children.toArray(o).forEach((function(t,o){var n=e._getFlexStyleForColumn(t,t.props.style);e._cachedColumnStyles[o]=fo({overflow:"hidden"},n)})),d.createElement("div",{"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-colcount":d.Children.toArray(o).length,"aria-rowcount":this.props.rowCount,className:Me("ReactVirtualized__Table",n),id:g,role:"grid",style:S},!r&&p({className:Me("ReactVirtualized__Table__headerRow",O),columns:this._getHeaderColumns(),style:fo({height:u,overflow:"hidden",paddingRight:T,width:_},A)}),d.createElement(tt,Oe({},this.props,{"aria-readonly":null,autoContainerWidth:!0,className:Me("ReactVirtualized__Table__Grid",c),cellRenderer:this._createRow,columnWidth:_,columnCount:1,height:E,id:void 0,noContentRenderer:v,onScroll:this._onScroll,onSectionRendered:this._onSectionRendered,ref:this._setRef,role:"rowgroup",scrollbarWidth:T,scrollToRow:x,style:fo({},h,{overflowX:"hidden"})})))}},{key:"_createColumn",value:function(e){var t=e.column,o=e.columnIndex,n=e.isScrolling,r=e.parent,c=e.rowData,h=e.rowIndex,u=this.props.onColumnClick,p=t.props,m=p.cellDataGetter,g=p.cellRenderer,v=p.className,y=p.columnData,w=p.dataKey,x=p.id,S=g({cellData:m({columnData:y,dataKey:w,rowData:c}),columnData:y,columnIndex:o,dataKey:w,isScrolling:n,parent:r,rowData:c,rowIndex:h}),_=this._cachedColumnStyles[o],T="string"==typeof S?S:null;return d.createElement("div",{"aria-colindex":o+1,"aria-describedby":x,className:Me("ReactVirtualized__Table__rowColumn",v),key:"Row"+h+"-Col"+o,onClick:function(e){u&&u({columnData:y,dataKey:w,event:e})},role:"gridcell",style:_,title:T},S)}},{key:"_createHeader",value:function(e){var t,o,n,r,c,h=e.column,u=e.index,p=this.props,m=p.headerClassName,g=p.headerStyle,v=p.onHeaderClick,y=p.sort,w=p.sortBy,x=p.sortDirection,S=h.props,_=S.columnData,T=S.dataKey,E=S.defaultSortDirection,O=S.disableSort,A=S.headerRenderer,N=S.id,$=S.label,P=!O&&y,z=Me("ReactVirtualized__Table__headerColumn",m,h.props.headerClassName,{ReactVirtualized__Table__sortableHeaderColumn:P}),G=this._getFlexStyleForColumn(h,fo({},g,{},h.props.headerStyle)),F=A({columnData:_,dataKey:T,disableSort:O,label:$,sortBy:w,sortDirection:x});if(P||v){var B=w!==T?E:x===ao.DESC?ao.ASC:ao.DESC,W=function(e){P&&y({defaultSortDirection:E,event:e,sortBy:T,sortDirection:B}),v&&v({columnData:_,dataKey:T,event:e})};c=h.props["aria-label"]||$||T,r="none",n=0,t=W,o=function(e){"Enter"!==e.key&&" "!==e.key||W(e)}}return w===T&&(r=x===ao.ASC?"ascending":"descending"),d.createElement("div",{"aria-label":c,"aria-sort":r,className:z,id:N,key:"Header-Col"+u,onClick:t,onKeyDown:o,role:"columnheader",style:G,tabIndex:n},F)}},{key:"_createRow",value:function(e){var t=this,o=e.rowIndex,n=e.isScrolling,r=e.key,c=e.parent,h=e.style,u=this.props,p=u.children,m=u.onRowClick,g=u.onRowDoubleClick,v=u.onRowRightClick,y=u.onRowMouseOver,w=u.onRowMouseOut,x=u.rowClassName,S=u.rowGetter,_=u.rowRenderer,T=u.rowStyle,E=this.state.scrollbarWidth,O="function"==typeof x?x({index:o}):x,A="function"==typeof T?T({index:o}):T,N=S({index:o}),$=d.Children.toArray(p).map((function(e,r){return t._createColumn({column:e,columnIndex:r,isScrolling:n,parent:c,rowData:N,rowIndex:o,scrollbarWidth:E})})),P=Me("ReactVirtualized__Table__row",O),z=fo({},h,{height:this._getRowHeight(o),overflow:"hidden",paddingRight:E},A);return _({className:P,columns:$,index:o,isScrolling:n,key:r,onRowClick:m,onRowDoubleClick:g,onRowRightClick:v,onRowMouseOver:y,onRowMouseOut:w,rowData:N,style:z})}},{key:"_getFlexStyleForColumn",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o="".concat(e.props.flexGrow," ").concat(e.props.flexShrink," ").concat(e.props.width,"px"),n=fo({},t,{flex:o,msFlex:o,WebkitFlex:o});return e.props.maxWidth&&(n.maxWidth=e.props.maxWidth),e.props.minWidth&&(n.minWidth=e.props.minWidth),n}},{key:"_getHeaderColumns",value:function(){var e=this,t=this.props,o=t.children;return(t.disableHeader?[]:d.Children.toArray(o)).map((function(t,o){return e._createHeader({column:t,index:o})}))}},{key:"_getRowHeight",value:function(e){var t=this.props.rowHeight;return"function"==typeof t?t({index:e}):t}},{key:"_onScroll",value:function(e){var t=e.clientHeight,o=e.scrollHeight,n=e.scrollTop;(0,this.props.onScroll)({clientHeight:t,scrollHeight:o,scrollTop:n})}},{key:"_onSectionRendered",value:function(e){var t=e.rowOverscanStartIndex,o=e.rowOverscanStopIndex,n=e.rowStartIndex,r=e.rowStopIndex;(0,this.props.onRowsRendered)({overscanStartIndex:t,overscanStopIndex:o,startIndex:n,stopIndex:r})}},{key:"_setRef",value:function(e){this.Grid=e}},{key:"_setScrollbarWidth",value:function(){var e=this.getScrollbarWidth();this.setState({scrollbarWidth:e})}}]),t}(d.PureComponent);ke(mo,"defaultProps",{disableHeader:!1,estimatedRowSize:30,headerHeight:0,headerStyle:{},noRowsRenderer:function(){return null},onRowsRendered:function(){return null},onScroll:function(){return null},overscanIndicesGetter:ot,overscanRowCount:10,rowRenderer:ho,headerRowRenderer:so,rowStyle:{},scrollToAlignment:"auto",scrollToIndex:-1,style:{}}),mo.propTypes={};var go=[],bo=null,vo=null;function yo(){vo&&(vo=null,document.body&&null!=bo&&(document.body.style.pointerEvents=bo),bo=null)}function wo(){yo(),go.forEach((function(e){return e.__resetIsScrolling()}))}function Co(e){e.currentTarget===window&&null==bo&&document.body&&(bo=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),function(){vo&&Ke(vo);var e=0;go.forEach((function(t){e=Math.max(e,t.props.scrollingResetTimeInterval)})),vo=Ye(wo,e)}(),go.forEach((function(t){t.props.scrollElement===e.currentTarget&&t.__handleWindowScrollEvent()}))}function xo(e,t){go.some((function(e){return e.props.scrollElement===t}))||t.addEventListener("scroll",Co),go.push(e)}function So(e,t){(go=go.filter((function(t){return t!==e}))).length||(t.removeEventListener("scroll",Co),vo&&(Ke(vo),yo()))}var _o,To,Ro=function(e){return e===window},ko=function(e){return e.getBoundingClientRect()};function Eo(e,t){if(e){if(Ro(e)){var o=window,n=o.innerHeight,r=o.innerWidth;return{height:"number"==typeof n?n:0,width:"number"==typeof r?r:0}}return ko(e)}return{height:t.serverHeight,width:t.serverWidth}}function Oo(e){return Ro(e)&&document.documentElement?{top:"scrollY"in window?window.scrollY:document.documentElement.scrollTop,left:"scrollX"in window?window.scrollX:document.documentElement.scrollLeft}:{top:e.scrollTop,left:e.scrollLeft}}function Io(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}var Mo=function(){return"undefined"!=typeof window?window:void 0},Do=(To=_o=function(e){function t(){var e,o;be(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return ke(xe(o=Se(this,(e=_e(t)).call.apply(e,[this].concat(r)))),"_window",Mo()),ke(xe(o),"_isMounted",!1),ke(xe(o),"_positionFromTop",0),ke(xe(o),"_positionFromLeft",0),ke(xe(o),"_detectElementResize",void 0),ke(xe(o),"_child",void 0),ke(xe(o),"state",function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?Io(o,!0).forEach((function(t){ke(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):Io(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},Eo(o.props.scrollElement,o.props),{isScrolling:!1,scrollLeft:0,scrollTop:0})),ke(xe(o),"_registerChild",(function(e){e&&Element,o._child=e,o.updatePosition()})),ke(xe(o),"_onChildScroll",(function(e){var t=e.scrollTop;if(o.state.scrollTop!==t){var n=o.props.scrollElement;n&&("function"==typeof n.scrollTo?n.scrollTo(0,t+o._positionFromTop):n.scrollTop=t+o._positionFromTop)}})),ke(xe(o),"_registerResizeListener",(function(e){e===window?window.addEventListener("resize",o._onResize,!1):o._detectElementResize.addResizeListener(e,o._onResize)})),ke(xe(o),"_unregisterResizeListener",(function(e){e===window?window.removeEventListener("resize",o._onResize,!1):e&&o._detectElementResize.removeResizeListener(e,o._onResize)})),ke(xe(o),"_onResize",(function(){o.updatePosition()})),ke(xe(o),"__handleWindowScrollEvent",(function(){if(o._isMounted){var e=o.props.onScroll,t=o.props.scrollElement;if(t){var n=Oo(t),r=Math.max(0,n.left-o._positionFromLeft),c=Math.max(0,n.top-o._positionFromTop);o.setState({isScrolling:!0,scrollLeft:r,scrollTop:c}),e({scrollLeft:r,scrollTop:c})}}})),ke(xe(o),"__resetIsScrolling",(function(){o.setState({isScrolling:!1})})),o}return Re(t,e),Ce(t,[{key:"updatePosition",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.scrollElement,t=this.props.onResize,o=this.state,n=o.height,r=o.width,c=this._child||mt.findDOMNode(this);if(c instanceof Element&&e){var d=function(e,t){if(Ro(t)&&document.documentElement){var o=document.documentElement,n=ko(e),r=ko(o);return{top:n.top-r.top,left:n.left-r.left}}var c=Oo(t),d=ko(e),h=ko(t);return{top:d.top+c.top-h.top,left:d.left+c.left-h.left}}(c,e);this._positionFromTop=d.top,this._positionFromLeft=d.left}var h=Eo(e,this.props);n===h.height&&r===h.width||(this.setState({height:h.height,width:h.width}),t({height:h.height,width:h.width}))}},{key:"componentDidMount",value:function(){var e=this.props.scrollElement;this._detectElementResize=ct(),this.updatePosition(e),e&&(xo(this,e),this._registerResizeListener(e)),this._isMounted=!0}},{key:"componentDidUpdate",value:function(e,t){var o=this.props.scrollElement,n=e.scrollElement;n!==o&&null!=n&&null!=o&&(this.updatePosition(o),So(this,n),xo(this,o),this._unregisterResizeListener(n),this._registerResizeListener(o))}},{key:"componentWillUnmount",value:function(){var e=this.props.scrollElement;e&&(So(this,e),this._unregisterResizeListener(e)),this._isMounted=!1}},{key:"render",value:function(){var e=this.props.children,t=this.state,o=t.isScrolling,n=t.scrollTop,r=t.scrollLeft,c=t.height,d=t.width;return e({onChildScroll:this._onChildScroll,registerChild:this._registerChild,height:c,isScrolling:o,scrollLeft:r,scrollTop:n,width:d})}}]),t}(d.PureComponent),ke(_o,"propTypes",null),To);ke(Do,"defaultProps",{onResize:function(){},onScroll:function(){},scrollingResetTimeInterval:150,scrollElement:Mo(),serverHeight:0,serverWidth:0});var Ao,No=(Ao=function(e,t){return Ao=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])},Ao(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function o(){this.constructor=e}Ao(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),$o=function(){return $o=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},$o.apply(this,arguments)},Po={top:{width:"100%",height:"10px",top:"-5px",left:"0px",cursor:"row-resize"},right:{width:"10px",height:"100%",top:"0px",right:"-5px",cursor:"col-resize"},bottom:{width:"100%",height:"10px",bottom:"-5px",left:"0px",cursor:"row-resize"},left:{width:"10px",height:"100%",top:"0px",left:"-5px",cursor:"col-resize"},topRight:{width:"20px",height:"20px",position:"absolute",right:"-10px",top:"-10px",cursor:"ne-resize"},bottomRight:{width:"20px",height:"20px",position:"absolute",right:"-10px",bottom:"-10px",cursor:"se-resize"},bottomLeft:{width:"20px",height:"20px",position:"absolute",left:"-10px",bottom:"-10px",cursor:"sw-resize"},topLeft:{width:"20px",height:"20px",position:"absolute",left:"-10px",top:"-10px",cursor:"nw-resize"}},zo=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onMouseDown=function(e){t.props.onResizeStart(e,t.props.direction)},t.onTouchStart=function(e){t.props.onResizeStart(e,t.props.direction)},t}return No(t,e),t.prototype.render=function(){return d.createElement("div",{className:this.props.className||"",style:$o($o({position:"absolute",userSelect:"none"},Po[this.props.direction]),this.props.replaceStyles||{}),onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart},this.props.children)},t}(d.PureComponent),Ho=o(3316),Lo=o.n(Ho),Go=function(){var e=function(t,o){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])},e(t,o)};return function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),Fo=function(){return Fo=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},Fo.apply(this,arguments)},Bo={width:"auto",height:"auto"},Wo=Lo()((function(e,t,o){return Math.max(Math.min(e,o),t)})),Uo=Lo()((function(e,t){return Math.round(e/t)*t})),jo=Lo()((function(e,t){return new RegExp(e,"i").test(t)})),Vo=function(e){return Boolean(e.touches&&e.touches.length)},Zo=Lo()((function(e,t,o){void 0===o&&(o=0);var n=t.reduce((function(o,n,r){return Math.abs(n-e)<Math.abs(t[o]-e)?r:o}),0),r=Math.abs(t[n]-e);return 0===o||r<o?t[n]:e})),qo=Lo()((function(e,t){return e.substr(e.length-t.length,t.length)===t})),Ko=Lo()((function(e){return"auto"===(e=e.toString())||qo(e,"px")||qo(e,"%")||qo(e,"vh")||qo(e,"vw")||qo(e,"vmax")||qo(e,"vmin")?e:e+"px"})),Yo=function(e,t,o,n){if(e&&"string"==typeof e){if(qo(e,"px"))return Number(e.replace("px",""));if(qo(e,"%"))return t*(Number(e.replace("%",""))/100);if(qo(e,"vw"))return o*(Number(e.replace("vw",""))/100);if(qo(e,"vh"))return n*(Number(e.replace("vh",""))/100)}return e},Xo=Lo()((function(e,t,o,n,r,c,d){return n=Yo(n,e.width,t,o),r=Yo(r,e.height,t,o),c=Yo(c,e.width,t,o),d=Yo(d,e.height,t,o),{maxWidth:void 0===n?void 0:Number(n),maxHeight:void 0===r?void 0:Number(r),minWidth:void 0===c?void 0:Number(c),minHeight:void 0===d?void 0:Number(d)}})),Qo=["as","style","className","grid","snap","bounds","boundsByDirection","size","defaultSize","minWidth","minHeight","maxWidth","maxHeight","lockAspectRatio","lockAspectRatioExtraWidth","lockAspectRatioExtraHeight","enable","handleStyles","handleClasses","handleWrapperStyle","handleWrapperClass","children","onResizeStart","onResize","onResizeStop","handleComponent","scale","resizeRatio","snapGap"],Jo="__resizable_base__",en=function(e){function t(t){var o=e.call(this,t)||this;return o.ratio=1,o.resizable=null,o.parentLeft=0,o.parentTop=0,o.resizableLeft=0,o.resizableRight=0,o.resizableTop=0,o.resizableBottom=0,o.targetLeft=0,o.targetTop=0,o.appendBase=function(){if(!o.resizable||!o.window)return null;var e=o.parentNode;if(!e)return null;var t=o.window.document.createElement("div");return t.style.width="100%",t.style.height="100%",t.style.position="absolute",t.style.transform="scale(0, 0)",t.style.left="0",t.style.flex="0",t.classList?t.classList.add(Jo):t.className+=Jo,e.appendChild(t),t},o.removeBase=function(e){var t=o.parentNode;t&&t.removeChild(e)},o.ref=function(e){e&&(o.resizable=e)},o.state={isResizing:!1,width:void 0===(o.propsSize&&o.propsSize.width)?"auto":o.propsSize&&o.propsSize.width,height:void 0===(o.propsSize&&o.propsSize.height)?"auto":o.propsSize&&o.propsSize.height,direction:"right",original:{x:0,y:0,width:0,height:0},backgroundStyle:{height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0)",cursor:"auto",opacity:0,position:"fixed",zIndex:9999,top:"0",left:"0",bottom:"0",right:"0"},flexBasis:void 0},o.onResizeStart=o.onResizeStart.bind(o),o.onMouseMove=o.onMouseMove.bind(o),o.onMouseUp=o.onMouseUp.bind(o),o}return Go(t,e),Object.defineProperty(t.prototype,"parentNode",{get:function(){return this.resizable?this.resizable.parentNode:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"window",{get:function(){return this.resizable&&this.resizable.ownerDocument?this.resizable.ownerDocument.defaultView:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"propsSize",{get:function(){return this.props.size||this.props.defaultSize||Bo},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){var e=0,t=0;if(this.resizable&&this.window){var o=this.resizable.offsetWidth,n=this.resizable.offsetHeight,r=this.resizable.style.position;"relative"!==r&&(this.resizable.style.position="relative"),e="auto"!==this.resizable.style.width?this.resizable.offsetWidth:o,t="auto"!==this.resizable.style.height?this.resizable.offsetHeight:n,this.resizable.style.position=r}return{width:e,height:t}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"sizeStyle",{get:function(){var e=this,t=this.props.size,o=function(t){if(void 0===e.state[t]||"auto"===e.state[t])return"auto";if(e.propsSize&&e.propsSize[t]&&qo(e.propsSize[t].toString(),"%")){if(qo(e.state[t].toString(),"%"))return e.state[t].toString();var o=e.getParentSize();return Number(e.state[t].toString().replace("px",""))/o[t]*100+"%"}return Ko(e.state[t])};return{width:t&&void 0!==t.width&&!this.state.isResizing?Ko(t.width):o("width"),height:t&&void 0!==t.height&&!this.state.isResizing?Ko(t.height):o("height")}},enumerable:!1,configurable:!0}),t.prototype.getParentSize=function(){if(!this.parentNode)return this.window?{width:this.window.innerWidth,height:this.window.innerHeight}:{width:0,height:0};var e=this.appendBase();if(!e)return{width:0,height:0};var t=!1,o=this.parentNode.style.flexWrap;"wrap"!==o&&(t=!0,this.parentNode.style.flexWrap="wrap"),e.style.position="relative",e.style.minWidth="100%";var n={width:e.offsetWidth,height:e.offsetHeight};return t&&(this.parentNode.style.flexWrap=o),this.removeBase(e),n},t.prototype.bindEvents=function(){this.window&&(this.window.addEventListener("mouseup",this.onMouseUp),this.window.addEventListener("mousemove",this.onMouseMove),this.window.addEventListener("mouseleave",this.onMouseUp),this.window.addEventListener("touchmove",this.onMouseMove,{capture:!0,passive:!1}),this.window.addEventListener("touchend",this.onMouseUp))},t.prototype.unbindEvents=function(){this.window&&(this.window.removeEventListener("mouseup",this.onMouseUp),this.window.removeEventListener("mousemove",this.onMouseMove),this.window.removeEventListener("mouseleave",this.onMouseUp),this.window.removeEventListener("touchmove",this.onMouseMove,!0),this.window.removeEventListener("touchend",this.onMouseUp))},t.prototype.componentDidMount=function(){if(this.resizable&&this.window){var e=this.window.getComputedStyle(this.resizable);this.setState({width:this.state.width||this.size.width,height:this.state.height||this.size.height,flexBasis:"auto"!==e.flexBasis?e.flexBasis:void 0})}},t.prototype.componentWillUnmount=function(){this.window&&this.unbindEvents()},t.prototype.createSizeForCssProperty=function(e,t){var o=this.propsSize&&this.propsSize[t];return"auto"!==this.state[t]||this.state.original[t]!==e||void 0!==o&&"auto"!==o?e:"auto"},t.prototype.calculateNewMaxFromBoundary=function(e,t){var o,n,r=this.props.boundsByDirection,c=this.state.direction,d=r&&jo("left",c),h=r&&jo("top",c);if("parent"===this.props.bounds){var u=this.parentNode;u&&(o=d?this.resizableRight-this.parentLeft:u.offsetWidth+(this.parentLeft-this.resizableLeft),n=h?this.resizableBottom-this.parentTop:u.offsetHeight+(this.parentTop-this.resizableTop))}else"window"===this.props.bounds?this.window&&(o=d?this.resizableRight:this.window.innerWidth-this.resizableLeft,n=h?this.resizableBottom:this.window.innerHeight-this.resizableTop):this.props.bounds&&(o=d?this.resizableRight-this.targetLeft:this.props.bounds.offsetWidth+(this.targetLeft-this.resizableLeft),n=h?this.resizableBottom-this.targetTop:this.props.bounds.offsetHeight+(this.targetTop-this.resizableTop));return o&&Number.isFinite(o)&&(e=e&&e<o?e:o),n&&Number.isFinite(n)&&(t=t&&t<n?t:n),{maxWidth:e,maxHeight:t}},t.prototype.calculateNewSizeFromDirection=function(e,t){var o=this.props.scale||1,n=this.props.resizeRatio||1,r=this.state,c=r.direction,d=r.original,h=this.props,u=h.lockAspectRatio,p=h.lockAspectRatioExtraHeight,m=h.lockAspectRatioExtraWidth,g=d.width,v=d.height,y=p||0,w=m||0;return jo("right",c)&&(g=d.width+(e-d.x)*n/o,u&&(v=(g-w)/this.ratio+y)),jo("left",c)&&(g=d.width-(e-d.x)*n/o,u&&(v=(g-w)/this.ratio+y)),jo("bottom",c)&&(v=d.height+(t-d.y)*n/o,u&&(g=(v-y)*this.ratio+w)),jo("top",c)&&(v=d.height-(t-d.y)*n/o,u&&(g=(v-y)*this.ratio+w)),{newWidth:g,newHeight:v}},t.prototype.calculateNewSizeFromAspectRatio=function(e,t,o,n){var r=this.props,c=r.lockAspectRatio,d=r.lockAspectRatioExtraHeight,h=r.lockAspectRatioExtraWidth,u=void 0===n.width?10:n.width,p=void 0===o.width||o.width<0?e:o.width,m=void 0===n.height?10:n.height,g=void 0===o.height||o.height<0?t:o.height,v=d||0,y=h||0;if(c){var w=(m-v)*this.ratio+y,x=(g-v)*this.ratio+y,S=(u-y)/this.ratio+v,_=(p-y)/this.ratio+v,T=Math.max(u,w),E=Math.min(p,x),O=Math.max(m,S),A=Math.min(g,_);e=Wo(e,T,E),t=Wo(t,O,A)}else e=Wo(e,u,p),t=Wo(t,m,g);return{newWidth:e,newHeight:t}},t.prototype.setBoundingClientRect=function(){if("parent"===this.props.bounds){var e=this.parentNode;if(e){var t=e.getBoundingClientRect();this.parentLeft=t.left,this.parentTop=t.top}}if(this.props.bounds&&"string"!=typeof this.props.bounds){var o=this.props.bounds.getBoundingClientRect();this.targetLeft=o.left,this.targetTop=o.top}if(this.resizable){var n=this.resizable.getBoundingClientRect(),r=n.left,c=n.top,d=n.right,h=n.bottom;this.resizableLeft=r,this.resizableRight=d,this.resizableTop=c,this.resizableBottom=h}},t.prototype.onResizeStart=function(e,t){if(this.resizable&&this.window){var o,n=0,r=0;if(e.nativeEvent&&function(e){return Boolean((e.clientX||0===e.clientX)&&(e.clientY||0===e.clientY))}(e.nativeEvent)?(n=e.nativeEvent.clientX,r=e.nativeEvent.clientY):e.nativeEvent&&Vo(e.nativeEvent)&&(n=e.nativeEvent.touches[0].clientX,r=e.nativeEvent.touches[0].clientY),this.props.onResizeStart&&this.resizable&&!1===this.props.onResizeStart(e,t,this.resizable))return;this.props.size&&(void 0!==this.props.size.height&&this.props.size.height!==this.state.height&&this.setState({height:this.props.size.height}),void 0!==this.props.size.width&&this.props.size.width!==this.state.width&&this.setState({width:this.props.size.width})),this.ratio="number"==typeof this.props.lockAspectRatio?this.props.lockAspectRatio:this.size.width/this.size.height;var c=this.window.getComputedStyle(this.resizable);if("auto"!==c.flexBasis){var d=this.parentNode;if(d){var h=this.window.getComputedStyle(d).flexDirection;this.flexDir=h.startsWith("row")?"row":"column",o=c.flexBasis}}this.setBoundingClientRect(),this.bindEvents();var u={original:{x:n,y:r,width:this.size.width,height:this.size.height},isResizing:!0,backgroundStyle:Fo(Fo({},this.state.backgroundStyle),{cursor:this.window.getComputedStyle(e.target).cursor||"auto"}),direction:t,flexBasis:o};this.setState(u)}},t.prototype.onMouseMove=function(e){if(this.state.isResizing&&this.resizable&&this.window){if(this.window.TouchEvent&&Vo(e))try{e.preventDefault(),e.stopPropagation()}catch(e){}var t=this.props,o=t.maxWidth,n=t.maxHeight,r=t.minWidth,c=t.minHeight,d=Vo(e)?e.touches[0].clientX:e.clientX,h=Vo(e)?e.touches[0].clientY:e.clientY,u=this.state,p=u.direction,m=u.original,g=u.width,v=u.height,y=this.getParentSize(),w=Xo(y,this.window.innerWidth,this.window.innerHeight,o,n,r,c);o=w.maxWidth,n=w.maxHeight,r=w.minWidth,c=w.minHeight;var x=this.calculateNewSizeFromDirection(d,h),S=x.newHeight,_=x.newWidth,T=this.calculateNewMaxFromBoundary(o,n),E=this.calculateNewSizeFromAspectRatio(_,S,{width:T.maxWidth,height:T.maxHeight},{width:r,height:c});if(_=E.newWidth,S=E.newHeight,this.props.grid){var O=Uo(_,this.props.grid[0]),A=Uo(S,this.props.grid[1]),N=this.props.snapGap||0;_=0===N||Math.abs(O-_)<=N?O:_,S=0===N||Math.abs(A-S)<=N?A:S}this.props.snap&&this.props.snap.x&&(_=Zo(_,this.props.snap.x,this.props.snapGap)),this.props.snap&&this.props.snap.y&&(S=Zo(S,this.props.snap.y,this.props.snapGap));var $={width:_-m.width,height:S-m.height};g&&"string"==typeof g&&(qo(g,"%")?_=_/y.width*100+"%":qo(g,"vw")?_=_/this.window.innerWidth*100+"vw":qo(g,"vh")&&(_=_/this.window.innerHeight*100+"vh")),v&&"string"==typeof v&&(qo(v,"%")?S=S/y.height*100+"%":qo(v,"vw")?S=S/this.window.innerWidth*100+"vw":qo(v,"vh")&&(S=S/this.window.innerHeight*100+"vh"));var P={width:this.createSizeForCssProperty(_,"width"),height:this.createSizeForCssProperty(S,"height")};"row"===this.flexDir?P.flexBasis=P.width:"column"===this.flexDir&&(P.flexBasis=P.height),this.setState(P),this.props.onResize&&this.props.onResize(e,p,this.resizable,$)}},t.prototype.onMouseUp=function(e){var t=this.state,o=t.isResizing,n=t.direction,r=t.original;if(o&&this.resizable){var c={width:this.size.width-r.width,height:this.size.height-r.height};this.props.onResizeStop&&this.props.onResizeStop(e,n,this.resizable,c),this.props.size&&this.setState(this.props.size),this.unbindEvents(),this.setState({isResizing:!1,backgroundStyle:Fo(Fo({},this.state.backgroundStyle),{cursor:"auto"})})}},t.prototype.updateSize=function(e){this.setState({width:e.width,height:e.height})},t.prototype.renderResizer=function(){var e=this,t=this.props,o=t.enable,n=t.handleStyles,r=t.handleClasses,c=t.handleWrapperStyle,h=t.handleWrapperClass,u=t.handleComponent;if(!o)return null;var p=Object.keys(o).map((function(t){return!1!==o[t]?d.createElement(zo,{key:t,direction:t,onResizeStart:e.onResizeStart,replaceStyles:n&&n[t],className:r&&r[t]},u&&u[t]?u[t]:null):null}));return d.createElement("div",{className:h,style:c},p)},t.prototype.render=function(){var e=this,t=Object.keys(this.props).reduce((function(t,o){return-1!==Qo.indexOf(o)||(t[o]=e.props[o]),t}),{}),o=Fo(Fo(Fo({position:"relative",userSelect:this.state.isResizing?"none":"auto"},this.props.style),this.sizeStyle),{maxWidth:this.props.maxWidth,maxHeight:this.props.maxHeight,minWidth:this.props.minWidth,minHeight:this.props.minHeight,boxSizing:"border-box",flexShrink:0});this.state.flexBasis&&(o.flexBasis=this.state.flexBasis);var n=this.props.as||"div";return d.createElement(n,Fo({ref:this.ref,style:o,className:this.props.className},t),this.state.isResizing&&d.createElement("div",{style:this.state.backgroundStyle}),this.props.children,this.renderResizer())},t.defaultProps={as:"div",onResizeStart:function(){},onResize:function(){},onResizeStop:function(){},enable:{top:!0,right:!0,bottom:!0,left:!0,topRight:!0,bottomRight:!0,bottomLeft:!0,topLeft:!0},style:{},grid:[1,1],lockAspectRatio:!1,lockAspectRatioExtraWidth:0,lockAspectRatioExtraHeight:0,scale:1,resizeRatio:1,snapGap:0},t}(d.PureComponent);const on={top:!1,right:!1,bottom:!1,left:!1,topRight:!1,bottomRight:!1,bottomLeft:!1,topLeft:!1},nn={min:0,max:1/0},rn=({height:e,heightConstraints:t,width:o,widthConstraints:n})=>({height:(0,oe.u)(e,t.min,t.max),width:(0,oe.u)(o,n.min,n.max)}),an=({enable:e,height:t,heightConstraints:o,resizeEdge:n,width:r=0,widthConstraints:c})=>({...rn({height:t,widthConstraints:c,heightConstraints:o,width:r}),enable:void 0===e||e,horizontal:"left"===n||"right"===n,initialHeight:t,initialWidth:r,resizing:!1,isMouseWheeling:!1,vertical:"top"===n||"bottom"===n});class tn extends h().PureComponent{static defaultProps={className:"",enable:!0,heightConstraints:nn,resizeContentClassName:"",resizeHandleClassName:"",style:{},wrapperStyle:{},translate:()=>"",wrapChildrenInDivContainer:!0,widthConstraints:nn};onWheelTimeOut;isMouseWheeling=!1;constructor(e){super(e),this.state=an(e)}componentWillReceiveProps(e){const{onResizeFromPropChange:t}=this.props,{height:o,resizing:n,width:r}=this.state,{onResizeFromPropChange:c}=e;if(n)return;const d=an(e);this.setState(d);const{height:h,width:u}=d,p=c||t;!p||h===o&&u===r||p({height:h,width:u,originalHeight:o,originalWidth:r})}_onResize=(e,t,o,{height:n,width:r})=>{const{onResize:c}=this.props,{height:d,horizontal:h,vertical:u,width:p}=this.state,{height:m,width:g}=(({deltaWidth:e,deltaHeight:t},{heightConstraints:o,widthConstraints:n},{initialHeight:r,initialWidth:c})=>rn({height:r+t,heightConstraints:o,width:c+e,widthConstraints:n}))({deltaWidth:r,deltaHeight:n},this.props,this.state),v=h&&g!==p,y=u&&m!==d;(v||y)&&(this.setState({height:y?m:d,width:v?g:p,isMouseWheeling:!1}),c&&c({height:y?m:void 0,width:v?g:void 0}))};_onResizeStart=e=>{e.preventDefault(),e.stopPropagation();const{onResizeStart:t}=this.props,{height:o,horizontal:n,vertical:r,width:c}=this.state;this.setState({resizing:!0}),t&&t({height:r?o:void 0,width:n?c:void 0})};_onResizeEnd=()=>{const{onResizeEnd:e}=this.props,{height:t,horizontal:o,vertical:n,width:r,initialWidth:c,initialHeight:d}=this.state;this.setState({initialWidth:r,initialHeight:t,resizing:!1}),c===r&&d===t||e&&e({width:o?r:void 0,height:n?t:void 0})};_onWheel=()=>{this.isMouseWheeling||(this.isMouseWheeling=!0,this.setState({isMouseWheeling:!0})),clearTimeout(this.onWheelTimeOut),this.onWheelTimeOut=setTimeout((()=>{this.isMouseWheeling=!1,this.setState({isMouseWheeling:!1})}),50)};render(){const{children:e,className:t,handleStyles:o,resizeContentClassName:n,resizeEdge:r,resizeHandleClassName:d,style:u,translate:p,heightConstraints:m,wrapChildrenInDivContainer:g,widthConstraints:v}=this.props,{enable:y,height:w,horizontal:x,resizing:S,vertical:_,width:T,isMouseWheeling:E}=this.state,{display:O,...A}=u,{min:N,max:$}=v,{min:P,max:z}=m,G={...this.props.wrapperStyle};x&&(G.width=T,G.minWidth=T),_&&(G.height=w,G.minHeight=w);const F=c()("resizable",t,{resizing:S}),B=c()("contents",n,`resize-edge-${r}`,{horizontal:x,vertical:_}),W=c()(r,d,"resizable-handle",{horizontal:x,vertical:_}),U=h().createElement("span",{title:p("ResizePanel")});return h().createElement("div",{"data-testid":"resizable",onWheel:this._onWheel,style:{...G,display:O}},h().createElement(en,{className:F,"data-testid":"resizable-core",enable:{...on,[r]:!E&&y},handleClasses:{[r]:W},handleComponent:{[r]:U},handleStyles:o,maxHeight:_?z:void 0,maxWidth:x?$:void 0,minHeight:_?P:void 0,minWidth:x?N:void 0,onResize:this._onResize,onResizeStart:this._onResizeStart,onResizeStop:this._onResizeEnd,size:{height:_?w:"100%",width:x?T:"100%"},style:A},g?h().createElement("div",{className:B,style:{userSelect:"none"}},e):e))}}var ln=o(7154);function dn(e,t,o){const n=t*x.$0,{shape:r}=x.Qh[e],c=x.d_[r];if(!c)return{height:0,offset:0};const{baseHeight:d,minHeight:h,maxHeight:u}=c;let p=d*(o/n);void 0!==h&&p<h&&(p=h),void 0!==u&&p>u&&(p=u);const m=x.$0*(o/n);return{height:p,offset:p>=m?0:(m-p)/2}}function hn(e,t,o){const n=o*x.$0;return e*x.$0/n*t}class sn extends h().PureComponent{canvas;componentDidMount(){this.updateCanvas()}componentWillReceiveProps(e){e.branchUpstreamRowIndices===this.props.branchUpstreamRowIndices&&e.markerRowIndices===this.props.markerRowIndices&&e.totalRows===this.props.totalRows&&e.viewportHeight===this.props.viewportHeight&&e.viewportWidth===this.props.viewportWidth&&e.markerColors===this.props.markerColors&&e.enabledScrollMarkerTypes===this.props.enabledScrollMarkerTypes&&e.scrollWidth===this.props.scrollWidth||this.updateCanvas()}updateCanvas(e){const{branchUpstreamRowIndices:t,enabledScrollMarkerTypes:o,viewportHeight:n,markerRowIndices:r,markerColors:c,scrollWidth:d,totalRows:h}=e||this.props,u=this.canvas.getContext("2d");u.canvas.width=d,u.canvas.height=n;const p=d/x.dF;u.clearRect(0,0,u.canvas.width,u.canvas.height);for(const[e,d]of Object.entries(x.Qh)){if(!(o.includes(e)||"remoteBranches"===e&&o.includes("localBranches")))continue;const m="remoteBranches"!==e||o.includes("remoteBranches")?r[e]||[]:t,g=c[e],v=d.lanes;g&&m.length&&(u.fillStyle=g,m.forEach((t=>{const{height:o,offset:r}=dn(e,h,n);v.length&&u.fillRect(v[0]*p,hn(t,n,h)+r-.5*o,p*v.length,o)})))}}render(){return h().createElement("canvas",{className:"graph-scroll-markers",ref:e=>this.canvas=e})}}var un=function({children:e,className:t,height:o,heightAdjustment:n,graphZoneType:r,scrollTop:c,style:d}){const u=x.qi[r].listId,p=document.getElementById(u),m=p?.scrollHeight||0;let g=o-28;void 0!==c&&(g=Number(d.top)-c,p&&m-o-c<0&&(g=o-n-28));const v={top:g,zIndex:2},y=h().createElement("span",{className:"absolute",style:v},e);return h().createElement("div",{className:t,style:d},p?gt().createPortal(y,document.getElementById("graph-container")):y)};function pn({inline:e,getExternalIcon:t,message:o,size:n=100,useSimpleSpinner:r}){const d=c()("loading-spinner",{"inline-block":e,ml2:e,"shrink-0":e}),u=c()("spinner","mr1",{"inline-block":e}),p={height:n,width:n},m=c()("message",{"inline-block":e,mx2:e}),g=r?h().createElement("span",{className:u,style:p},t("loading")):h().createElement("div",{className:u,style:p},h().createElement("img",{className:"ring outer",src:"../../../images/spinner-outer-ring.svg",style:p}),h().createElement("img",{className:"ring inner",src:"../../../images/spinner-inner-ring.svg",style:p}),h().createElement("img",{className:"bg-img",src:"../../../images/spinner-kraken.svg",style:p}));return h().createElement("div",{className:d},g,o&&h().createElement("div",{className:m},o))}class cn extends h().Component{render(){const{currentCommits:e,customFooterRow:t,graphZoneType:o,hasMoreCommits:n,height:r,horizontalScrollHeight:c,getExternalIcon:d,isLoadingRows:u,scrollTop:p,style:m,translate:g}=this.props,v=h().createElement(pn,{className:"loading-spinner",getExternalIcon:d,size:20,useSimpleSpinner:!0}),y=h().createElement("div",{className:"flex items-center"},h().createElement("span",{style:{paddingRight:"5px"}},v)),w=0!==(e>0?e:0)||n?t:h().createElement(h().Fragment,null,g("Graph-NoCommits")),x=h().createElement("div",{className:"graph-adjust-commit-count p1"},u?y:w);return h().createElement(un,{graphZoneType:o,height:r,heightAdjustment:c,scrollTop:p,style:m},x)}}var fn=cn;function gn({branchUpstreamRowIndices:e,rowCount:t,cellRenderersByIds:o,columnIndex:n,customFooterRow:r,enabledScrollMarkerTypes:d,enableResizer:u,getExternalIcon:p,getKeyForCell:m,graphHeight:g,graphWidth:v,graphZoneType:y,graphZones:w,hasMoreCommits:S,horizontalScrollHeight:_,isLoadingRows:T,markerColors:E,markerRowIndices:O,onResize:A,onResizeEnd:N,onResizeFromPropChange:$,onScroll:P,onScrollToRowCausedUpdate:z,onZoneEnter:G,scrollLeft:F,scrollToAlignment:B,scrollToIndex:W,scrollTop:U,smartCellRangeRenderer:j,translate:Z,verticalScrollWidth:q}){const K=(0,Q.zv)(y,w);if(!K)return null;const Y=document.getElementById(K.listId),X=(0,Q.SH)(y,w),J=(0,Q.Xq)(t,S,T),ee=(0,Q.Jq)(t,S,T),te=(0,Q.Jp)(K,t),oe=(0,Q.wE)(t,S,T),ne=q>0,re=d.length>0,ie=c()("graph-panel","react-virtualized-list","pad-for-horizontal-scrollbar",y===x.jZ?"z3":null,{"pad-for-vertical-scrollbar":ne}),se=y===x.Wm?{...!X&&{position:"static"},...X&&{width:K.currentWidth>te?K.currentWidth:te,maxWidth:"none"}}:void 0,ae=(e,c,d,u,w,E,O,A)=>h().createElement(tt,{autoContainerWidth:!0,cellRangeRenderer:j,cellRenderer:c=>((e,c)=>{if(c.rowIndex>t-1)return J&&0===n?h().createElement(fn,{currentCommits:t-1,customFooterRow:r,getExternalIcon:p,graphZoneType:y,hasMoreCommits:S,height:g,horizontalScrollHeight:_,isLoadingRows:T,key:m(c.rowIndex),scrollTop:U,style:c.style,translate:Z}):void 0;const d={...c,style:{...c.style}};x.Gn===e&&(d.style.top=Number(c.style.top)-U);const u=o[e];return u?u(d):void 0})(e,c),className:d,columnCount:1,columnWidth:A,containerStyle:u,height:O,id:c,isScrolling:!1,key:c,onScrollToTargetCausedUpdate:z?e=>z(y,e,v,g,S):void 0,overscanRowCount:0,rowCount:ee,rowHeight:x.$0,scrollLeft:F,scrollToAlignment:B,scrollTop:U,scrollToRow:W,style:w,tabIndex:null,width:E}),le=ae(K.type,K.listId,ie,se,{position:"absolute"},K.currentWidth,g,te),ce=le&&h().createElement(h().Fragment,null,re&&X?h().createElement(sn,{branchUpstreamRowIndices:e,enabledScrollMarkerTypes:d,markerColors:E,markerRowIndices:O,scrollWidth:q,totalRows:ee,viewportHeight:g<oe?g:oe,viewportWidth:K.currentWidth}):null,h().createElement(ln.Z,{contentHeight:oe,contentWidth:te,displayHorizontalScrollbar:K.type===x.Wm,displayVerticalScrollbar:X,forceOnWheel:!X,forceVerticalScrollbar:X&&re,height:g,onScroll:e=>((e,t)=>{e.scrollTop>t&&Y&&(0,Q.BL)(Y)||P(y,e,v,g,S)})(e,U),scrollLeft:F,scrollTop:U,width:K.currentWidth},le)),de=X?h().createElement("div",{onWheelCapture:e=>((e,t)=>{let o=t+e.deltaY;o=o>=0?o:0,o>t&&Y&&(0,Q.BL)(Y)||P(y,{clientHeight:oe,clientWidth:te,scrollHeight:_,scrollLeft:0,scrollTop:o>=0?o:0,scrollWidth:q},v,g,S)})(e,U)},ae(x.Gn,"timeline-column","graph-panel react-virtualized-list timeline-column",{overflow:"visible",zIndex:3,maxHeight:oe},{position:"absolute",right:0,zIndex:3,maxHeight:g},1,g,1)):void 0,he=h().createElement("div",{onMouseEnter:G},ce,de);return X?he:h().createElement(tn,{enable:u,height:g,id:`${y}Column`,key:`${y}Column`,onResize:A?e=>A(K,e):void 0,onResizeEnd:N?e=>N(K,e):void 0,onResizeFromPropChange:$?e=>$(K,e):void 0,resizeContentClassName:"z1",resizeEdge:"right",resizeHandleClassName:"z1",width:K.currentWidth,widthConstraints:(0,Q.eR)(y,w,v)},he)}var bn=o(977),vn=o.n(bn);const yn="dnd-container";class mn extends h().PureComponent{dndDrake;childReactElementsById={};constructor(e){super(e),this.loadChildrenReactElements(this.props.children)}componentDidMount(){this.dndDrake&&this.dndDrake.on("drop",this.onDrop)}componentWillReceiveProps(e){this.props.children!==e.children&&this.loadChildrenReactElements(e.children)}componentWillUnmount(){this.dndDrake&&this.dndDrake.destroy()}onDrop=(e,t,o,n)=>{if(this.props.onDrop&&e.id){const t=this.sanitizeId(e.id),o=n?.id?this.sanitizeId(n.id):null,r=this.childReactElementsById[t],c=o?this.childReactElementsById[o]:null;r&&this.props.onDrop(r,c)}};isContainerCallback=e=>Boolean(e?.classList.contains(yn));movesCallback=e=>Boolean(e?.id)&&this.isDraggable(e.id);acceptsCallback=(e,t,o,n)=>Boolean(e?.id)&&this.isDroppable(e.id,n?.id);invalidCallBack=()=>!1;dndDecorator=e=>{if(e){const t={isContainer:this.isContainerCallback,mirrorContainer:this.props.mirrorContainer,moves:this.movesCallback,accepts:this.acceptsCallback,invalid:this.invalidCallBack,direction:this.props.direction||"horizontal",copy:!1,copySortSource:!1,revertOnSpill:!1,removeOnSpill:!1,ignoreInputTextSelection:!0};this.dndDrake=vn()([e],t)}};loadChildrenReactElements(e){this.childReactElementsById={},e&&(e instanceof Array?e.forEach((e=>{h().isValidElement(e)&&this.addChildReactElement(e)})):h().isValidElement(e)&&this.addChildReactElement(e))}addChildReactElement(e){const t=e.props.id;t&&(this.childReactElementsById[this.sanitizeId(t)]=e)}sanitizeId(e){return e.trim().toLowerCase().replace(/-/g,"").replace(/_/g,"")}isDraggable(e){if(this.props.isDraggable){const t=this.sanitizeId(e),o=this.childReactElementsById[t];return Boolean(o)&&this.props.isDraggable(o)}return!1}isDroppable(e,t){if(this.props.isDroppable){const o=this.sanitizeId(e),n=t?this.sanitizeId(t):null,r=this.childReactElementsById[o],c=n?this.childReactElementsById[n]:null;if(r)return this.props.isDroppable(r,c)}return!1}render(){const{children:e,className:t}=this.props,o=c()(yn,t);return h().createElement("div",{className:o,ref:this.dndDecorator},e)}}var wn=mn,Cn=o(8613);function xn(e,t){if(null==e)return{};var o,n,r={},c=Cn(e);for(n=0;n<c.length;n++)o=c[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}var Sn=o(5627),_n=o(433);function Tn(e,t){return Tn=_n?_n.bind():function(e,t){return e.__proto__=t,e},Tn(e,t)}function Rn(e,t){e.prototype=Sn(t.prototype),e.prototype.constructor=e,Tn(e,t)}var kn=o(6981);function En(){return En=kn?kn.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},En.apply(this,arguments)}var On,In=o(5697),Mn=o.n(In),Dn=o(2856),An=o.n(Dn),Nn=o(8853),$n=o.n(Nn),Pn=o(644),zn={in:Mn().bool,mountOnEnter:Mn().bool,unmountOnExit:Mn().bool,appear:Mn().bool,timeout:Mn().number,onEnter:Mn().func,onEntering:Mn().func,onEntered:Mn().func,onExit:Mn().func,onExiting:Mn().func,onExited:Mn().func},Hn=((On={})[Pn.d0]="in",On[Pn.cn]="in",On),Ln=function(e){function t(){return e.apply(this,arguments)||this}return Rn(t,e),t.prototype.render=function(){var e=this.props,t=e.className,o=e.children,n=xn(e,["className","children"]);return h().createElement(Pn.ZP,n,(function(e,n){return h().cloneElement(o,En({},n,{className:c()("fade",t,o.props.className,Hn[e])}))}))},t}(h().Component);Ln.propTypes=zn,Ln.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1};const Gn=Ln;var Fn=En({},An().propTypes,{show:Mn().bool,rootClose:Mn().bool,onHide:Mn().func,animation:Mn().oneOfType([Mn().bool,$n()]),onEnter:Mn().func,onEntering:Mn().func,onEntered:Mn().func,onExit:Mn().func,onExiting:Mn().func,onExited:Mn().func,placement:Mn().oneOf(["top","right","bottom","left"])}),Bn={animation:Gn,rootClose:!1,show:!1,placement:"right"},Wn=function(e){function t(){return e.apply(this,arguments)||this}return Rn(t,e),t.prototype.render=function(){var e,t=this.props,o=t.animation,n=t.children,r=xn(t,["animation","children"]),u=!0===o?Gn:o||null;return e=u?n:(0,d.cloneElement)(n,{className:c()(n.props.className,"in")}),h().createElement(An(),En({},r,{transition:u}),e)},t}(h().Component);Wn.propTypes=Fn,Wn.defaultProps=Bn;const Un=Wn;var jn=o(5638),Vn=o.n(jn),Zn=o(3562),qn=o.n(Zn),Kn=o(1143),Yn=o.n(Kn),Xn="large",Qn="small",Jn={large:"lg",medium:"md",small:"sm",xsmall:"xs",lg:"lg",md:"md",sm:"sm",xs:"xs"};function er(e){return function(){for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return"function"==typeof o[o.length-1]?e.apply(void 0,o):function(t){return e.apply(void 0,o.concat([t]))}}}function tr(e,t){var o=(e.bsClass||"").trim();return null==o&&Yn()(!1),o+(t?"-"+t:"")}var or=er((function(e,t){var o=t.propTypes||(t.propTypes={}),n=t.defaultProps||(t.defaultProps={});return o.bsClass=Mn().string,n.bsClass=e,t})),nr=(er((function(e,t,o){"string"!=typeof t&&(o=t,t=void 0);var n=o.STYLES||[],r=o.propTypes||{};e.forEach((function(e){-1===n.indexOf(e)&&n.push(e)}));var c=Mn().oneOf(n);return o.STYLES=n,c._values=n,o.propTypes=En({},r,{bsStyle:c}),void 0!==t&&((o.defaultProps||(o.defaultProps={})).bsStyle=t),o})),er((function(e,t,o){"string"!=typeof t&&(o=t,t=void 0);var n=o.SIZES||[],r=o.propTypes||{};e.forEach((function(e){-1===n.indexOf(e)&&n.push(e)}));var c=[];n.forEach((function(e){var t=Jn[e];t&&t!==e&&c.push(t),c.push(e)}));var d=Mn().oneOf(c);return d._values=c,o.SIZES=n,o.propTypes=En({},r,{bsSize:d}),void 0!==t&&(o.defaultProps||(o.defaultProps={}),o.defaultProps.bsSize=t),o})));function rr(e){var t,o=((t={})[tr(e)]=!0,t);return e.bsSize&&(o[tr(e,Jn[e.bsSize]||e.bsSize)]=!0),e.bsStyle&&(o[tr(e,e.bsStyle)]=!0),o}function ir(e){return{bsClass:e.bsClass,bsSize:e.bsSize,bsStyle:e.bsStyle,bsRole:e.bsRole}}function sr(e){return"bsClass"===e||"bsSize"===e||"bsStyle"===e||"bsRole"===e}function ar(e){var t={};return qn()(e).forEach((function(e){var o=e[0],n=e[1];sr(o)||(t[o]=n)})),[ir(e),t]}var lr={id:Vn()(Mn().oneOfType([Mn().string,Mn().number])),placement:Mn().oneOf(["top","right","bottom","left"]),positionTop:Mn().oneOfType([Mn().number,Mn().string]),positionLeft:Mn().oneOfType([Mn().number,Mn().string]),arrowOffsetTop:Mn().oneOfType([Mn().number,Mn().string]),arrowOffsetLeft:Mn().oneOfType([Mn().number,Mn().string]),title:Mn().node},cr=function(e){function t(){return e.apply(this,arguments)||this}return Rn(t,e),t.prototype.render=function(){var e,t=this.props,o=t.placement,n=t.positionTop,r=t.positionLeft,d=t.arrowOffsetTop,u=t.arrowOffsetLeft,p=t.title,m=t.className,g=t.style,v=t.children,y=ar(xn(t,["placement","positionTop","positionLeft","arrowOffsetTop","arrowOffsetLeft","title","className","style","children"])),w=y[0],x=y[1],S=En({},rr(w),((e={})[o]=!0,e)),_=En({display:"block",top:n,left:r},g),T={top:d,left:u};return h().createElement("div",En({},x,{role:"tooltip",className:c()(m,S),style:_}),h().createElement("div",{className:"arrow",style:T}),p&&h().createElement("h3",{className:tr(w,"title")},p),h().createElement("div",{className:tr(w,"content")},v))},t}(h().Component);cr.propTypes=lr,cr.defaultProps={placement:"right"};const dr=or("popover",cr);function hr(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var ur=o(8149),pr=o.n(ur),fr=o(1629),mr=o.n(fr);o(670);const gr=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];e.apply(this,n),t.apply(this,n)}}),null)};function br(e,t){return pr()(t)?t.indexOf(e)>=0:e===t}var vr=Mn().oneOf(["click","hover","focus"]),yr=En({},Un.propTypes,{trigger:Mn().oneOfType([vr,Mn().arrayOf(vr)]),delay:Mn().number,delayShow:Mn().number,delayHide:Mn().number,defaultOverlayShown:Mn().bool,overlay:Mn().node.isRequired,onBlur:Mn().func,onClick:Mn().func,onFocus:Mn().func,onMouseOut:Mn().func,onMouseOver:Mn().func,target:Mn().oneOf([null]),onHide:Mn().oneOf([null]),show:Mn().oneOf([null])}),wr=function(e){function t(t,o){var n;return(n=e.call(this,t,o)||this).handleToggle=n.handleToggle.bind(hr(hr(n))),n.handleDelayedShow=n.handleDelayedShow.bind(hr(hr(n))),n.handleDelayedHide=n.handleDelayedHide.bind(hr(hr(n))),n.handleHide=n.handleHide.bind(hr(hr(n))),n.handleMouseOver=function(e){return n.handleMouseOverOut(n.handleDelayedShow,e,"fromElement")},n.handleMouseOut=function(e){return n.handleMouseOverOut(n.handleDelayedHide,e,"toElement")},n._mountNode=null,n.state={show:t.defaultOverlayShown},n}Rn(t,e);var o=t.prototype;return o.componentDidMount=function(){this._mountNode=document.createElement("div"),this.renderOverlay()},o.componentDidUpdate=function(){this.renderOverlay()},o.componentWillUnmount=function(){gt().unmountComponentAtNode(this._mountNode),this._mountNode=null,clearTimeout(this._hoverShowDelay),clearTimeout(this._hoverHideDelay)},o.handleDelayedHide=function(){var e=this;if(null!=this._hoverShowDelay)return clearTimeout(this._hoverShowDelay),void(this._hoverShowDelay=null);if(this.state.show&&null==this._hoverHideDelay){var t=null!=this.props.delayHide?this.props.delayHide:this.props.delay;t?this._hoverHideDelay=setTimeout((function(){e._hoverHideDelay=null,e.hide()}),t):this.hide()}},o.handleDelayedShow=function(){var e=this;if(null!=this._hoverHideDelay)return clearTimeout(this._hoverHideDelay),void(this._hoverHideDelay=null);if(!this.state.show&&null==this._hoverShowDelay){var t=null!=this.props.delayShow?this.props.delayShow:this.props.delay;t?this._hoverShowDelay=setTimeout((function(){e._hoverShowDelay=null,e.show()}),t):this.show()}},o.handleHide=function(){this.hide()},o.handleMouseOverOut=function(e,t,o){var n=t.currentTarget,r=t.relatedTarget||t.nativeEvent[o];r&&r===n||mr()(n,r)||e(t)},o.handleToggle=function(){this.state.show?this.hide():this.show()},o.hide=function(){this.setState({show:!1})},o.makeOverlay=function(e,t){return h().createElement(Un,En({},t,{show:this.state.show,onHide:this.handleHide,target:this}),e)},o.show=function(){this.setState({show:!0})},o.renderOverlay=function(){gt().unstable_renderSubtreeIntoContainer(this,this._overlay,this._mountNode)},o.render=function(){var e=this.props,t=e.trigger,o=e.overlay,n=e.children,r=e.onBlur,c=e.onClick,u=e.onFocus,p=e.onMouseOut,m=e.onMouseOver,g=xn(e,["trigger","overlay","children","onBlur","onClick","onFocus","onMouseOut","onMouseOver"]);delete g.delay,delete g.delayShow,delete g.delayHide,delete g.defaultOverlayShown;var v=h().Children.only(n),y=v.props,w={};return this.state.show&&(w["aria-describedby"]=o.props.id),w.onClick=gr(y.onClick,c),br("click",t)&&(w.onClick=gr(w.onClick,this.handleToggle)),br("hover",t)&&(w.onMouseOver=gr(y.onMouseOver,m,this.handleMouseOver),w.onMouseOut=gr(y.onMouseOut,p,this.handleMouseOut)),br("focus",t)&&(w.onFocus=gr(y.onFocus,u,this.handleDelayedShow),w.onBlur=gr(y.onBlur,r,this.handleDelayedHide)),this._overlay=this.makeOverlay(o,g),(0,d.cloneElement)(v,w)},t}(h().Component);wr.propTypes=yr,wr.defaultProps={defaultOverlayShown:!1,trigger:["hover","focus"]};const Cr=wr;var xr={id:Vn()(Mn().oneOfType([Mn().string,Mn().number])),placement:Mn().oneOf(["top","right","bottom","left"]),positionTop:Mn().oneOfType([Mn().number,Mn().string]),positionLeft:Mn().oneOfType([Mn().number,Mn().string]),arrowOffsetTop:Mn().oneOfType([Mn().number,Mn().string]),arrowOffsetLeft:Mn().oneOfType([Mn().number,Mn().string])},Sr=function(e){function t(){return e.apply(this,arguments)||this}return Rn(t,e),t.prototype.render=function(){var e,t=this.props,o=t.placement,n=t.positionTop,r=t.positionLeft,d=t.arrowOffsetTop,u=t.arrowOffsetLeft,p=t.className,m=t.style,g=t.children,v=ar(xn(t,["placement","positionTop","positionLeft","arrowOffsetTop","arrowOffsetLeft","className","style","children"])),y=v[0],w=v[1],x=En({},rr(y),((e={})[o]=!0,e)),S=En({top:n,left:r},m),_={top:d,left:u};return h().createElement("div",En({},w,{role:"tooltip",className:c()(p,x),style:S}),h().createElement("div",{className:tr(y,"arrow"),style:_}),h().createElement("div",{className:tr(y,"inner")},g))},t}(h().Component);Sr.propTypes=xr,Sr.defaultProps={placement:"right"};const _r=or("tooltip",Sr),Tr={},Er=document.createElement("canvas");Er.id="gk-graph-avatar-canvas";class Rr extends h().Component{image;constructor(e){super(e),this.image=new Image,this.image.crossOrigin="anonymous",this.image.onload=()=>this.refreshImage(),this.state={dataURL:void 0}}componentDidMount(){const{url:e}=this.props;e&&this.startImgLoading(e)}componentDidUpdate(e){const{url:t}=this.props;t&&e.url!==t&&this.startImgLoading(t)}componentWillUnmount(){this.image=void 0}refreshImage(){if(!this.image)return;let e;if(this.image.complete){const t=this.image.height,o=this.image.width,n=Er.getContext("2d");n.canvas.width=o,n.canvas.height=t,n.drawImage(this.image,0,0,o,t),e=Er.toDataURL(),Tr[this.image.src]=e}this.setState({dataURL:e})}startImgLoading(e){if(!this.image)return;const t=Tr[e];t?this.setState({dataURL:t}):this.image.src=e}render(){const{avatarClassName:e,avatarStyle:t,children:o,className:n,context:r,style:d,height:u,hint:p,size:m,width:g}=this.props,{dataURL:v}=this.state,y=!v,w=y?d:{...d,...t,background:`url(${v}) 0% 0% / ${m}px no-repeat`,height:u||m,width:g||m},x=c()(n,y?"":e,!y&&{avatar:!0}),S=y?h().createElement(h().Fragment,null,o):void 0;return h().createElement("div",{className:x,"data-test-class":"avatar","data-vscode-context":(0,Q.q3)(r),style:w,title:p},S)}}var Or=Rr;const Ir=(e,t,o)=>h().createElement("span",{className:"ref-avatar"},h().createElement(Or,{avatarClassName:"mr1",context:o,size:14,url:e},t));function Mr({icon:e,tooltipClassName:t="",tooltipId:o,tooltipText:n}){return n&&o?h().createElement(Cr,{delayShow:400,overlay:h().createElement(_r,{className:c()("gk-graph","bs-tooltip",t),id:o},n),placement:"top",trigger:["hover","focus"]},e):h().createElement(h().Fragment,null," ",e," ")}function Dr({id:e,toolTipText:t,getExternalIcon:o,issueTrackerType:n}){return h().createElement(Mr,{icon:o(`issue-${n}`),tooltipClassName:"wide pull-left",tooltipId:`issue-tooltip-${e}`,tooltipText:t?t.trim():""})}function Nr({hostingServiceType:e,icon:t,id:o,toolTipText:n}){return h().createElement(Mr,{icon:t,tooltipClassName:"wide pull-left",tooltipId:`pr-tooltip-${e}-${o}`,tooltipText:n?n.trim():""})}function $r({icon:e,type:t,upstream:o,tooltipText:n}){return h().createElement(Mr,{icon:e,tooltipClassName:"wide pull-left",tooltipId:`upstream-indicator-tooltip-${t}-${o}`,tooltipText:n})}function zr({avatarUrl:e,context:t,icon:o,tooltipText:n}){return h().createElement(Mr,{icon:Ir(e,o,t),tooltipId:`remote-icon-${n||"tooltipText"}`,tooltipText:n})}var Hr=o(9453),Lr=o(7334),Gr=o(9915),Fr=function({name:e}){return h().createElement("span",{className:"ref-name truncate",style:{height:x.pj}},e)};function Br(e,t,o,n=0){const{annotated:r,refType:d,message:u,name:p}=t;let m,g,v;switch(d){case te.V.REMOTE:{const e=t;g=function(e){return e.hostingServiceType?`${te.V.REMOTE}-${e.hostingServiceType}`:te.V.REMOTE}(e),m=e.avatarUrl;const n=`${p} (${o("Ref-Remote")})`;v=e.owner?`${e.owner} -> ${n}`:n;break}case te.V.TAG:g=te.V.TAG,v=`${r&&u?u:p} (${o("Ref-Tag")})`;break;case te.V.HEAD:default:g=te.V.HEAD,v=`${p} (${o("Ref-Local")})`}const y=t.context||void 0,w=h().createElement("span",{className:c()("mr1"),"data-vscode-context":(0,Q.q3)(y)},e(g));return h().createElement(zr,{avatarUrl:m||"",context:y,icon:w,key:`ref-icon-${n}-${d}-${p}`,tooltipText:v})}class kr extends h().PureComponent{getContextForRefGroupIfExists(e,t,o){let n,r=!1,c=!1,d=!1;for(const h of e){if(h.refType===te.V.HEAD)return o?h.contextGroup||t:h.context;h.refType===te.V.REMOTE&&("origin"===h.owner?(r=!0,n=o?h.contextGroup||t:h.context):r||"upstream"!==h.owner?r||c||(d=!0,n=o?h.contextGroup||t:h.context):(c=!0,n=o?h.contextGroup||t:h.context)),r||c||d||(n=o?h.contextGroup||t:h.context)}return n}getDecoratedRefIcon(e,t,o,n,r){return h().createElement("div",{className:r,"data-vscode-context":(0,Q.q3)(n),key:e,onClick:e=>this.onClickMetadata(e,o),onDoubleClick:e=>this.onDoubleClickMetadata(e,o)},t)}getPullRequestIconsAndTooltipsForRef(e,t,o){const{getExternalIcon:n,onMissingRefMetadata:r,translate:d}=this.props;let u;if(u=t.refType===te.V.HEAD?t.upstream?e?.[t.upstream.id]?.[Hr.mQ]:null:(0,Q.uV)(t,e,r,Hr.mQ),!u||0===u.length)return null;const p=u,m=[];for(const e of p){const{context:r,hostingServiceType:u,id:p,title:g}=e;if(o.has(p))continue;o.add(p);const v={refId:t.id,type:Hr.mQ,data:e},y=`pr-icon-${t.refType}-${t.name}-${p}`,w=this.getDecoratedRefIcon(y,n("pull-request"),v,r,c()("mr1","ref-pull-request"));m.push(h().createElement(Nr,{hostingServiceType:u,icon:w,id:p,key:y,toolTipText:g&&""!==g.trim()?d("PullRequestIcon-Tooltip",p,g,(0,Lr.y)(u)):""}))}return m}getUpstreamIndicatorIconsAndTooltipsForRef(e,t){const{getExternalIcon:o,onMissingRefMetadata:n,translate:r}=this.props,c=(0,Q.uV)(t,e,n,Hr.uq);if(!c||0===c.ahead&&0===c.behind)return null;const d=c,u={refId:t.id,type:Hr.uq,data:d},p=d.ahead>0,m=d.behind>0,g=d.context;if(p||m){const e=p?`${d.ahead>99?"99+":d.ahead}`:"",n=m?`${d.behind>99?"99+":d.behind}`:"",c=`${d.owner}/${d.name}`;let v,y;m&&p?(v=r("UpstreamIndicatorIcon-BehindAndAheadTooltip",n,e,c),y="ahead-behind"):m?(v=r("UpstreamIndicatorIcon-BehindTooltip",n,c),y="behind"):p&&(v=r("UpstreamIndicatorIcon-AheadTooltip",e,c),y="ahead");const w=h().createElement(h().Fragment,null,m?h().createElement(h().Fragment,null,h().createElement("span",{className:"ref-upstream-behind"},n),o("upstream-behind")):null,p?h().createElement(h().Fragment,null,h().createElement("span",{className:"ref-upstream-ahead"},e),o("upstream-ahead")):null);return h().createElement($r,{icon:this.getDecoratedRefIcon(`ref-upstream-${t.id}`,w,u,g,"ref-upstream"),tooltipText:v,type:y,upstream:c})}return null}getIssueIconsAndTooltipsForRef(e,t,o){const{getExternalIcon:n,onMissingRefMetadata:r,translate:d}=this.props,u=(0,Q.uV)(t,e,r,Hr.$M);if(!u||0===u.length)return null;const p=u,m=[];for(const e of p){if(o.has(e.id))continue;const r={refId:t.id,type:Hr.$M,data:e};o.add(e.id);const u=h().createElement(Dr,{getExternalIcon:n,id:e.id,issueTrackerType:e.issueTrackerType,key:`issue-icon-${e.id}`,toolTipText:e.title&&""!==e.title.trim()?d("IssueIcon-Tooltip",e.displayId,e.title):""}),p=t.context||void 0;m.push(this.getDecoratedRefIcon(`ref-issue-${e.id}`,u,r,p,c()("mr1","ref-issue")))}return m}onContextMenu=e=>{const{onContextMenu:t,refGroup:o,sha:n}=this.props;t(e,o,n)};onClick=e=>{const{onClick:t,refGroup:o,sha:n}=this.props;t(e,o,n)};onClickMetadata=(e,t)=>{e.stopPropagation();const{onClick:o,refGroup:n,sha:r}=this.props;o(e,n,r,t)};onDoubleClick=e=>{const{onDoubleClick:t,refGroup:o,sha:n}=this.props;t(e,o,n)};onDoubleClickMetadata=(e,t)=>{e.stopPropagation();const{onDoubleClick:o,refGroup:n,sha:r}=this.props;o(e,n,r,t)};render(){const{enableShowHideRefsOptions:e,hasActive:t,hasRefs:o,isActive:n,isGhostRef:r,getExternalIcon:d,groupIsHovered:u,isInUnsupportedRebase:p,onRefBeginDrag:m,onRefDragEnter:g,onRefDragLeave:v,onRefDrop:y,onRefCanDrag:w,onRefCanDrop:S,onRefEndDrag:_,isRefGroupIncluded:T,refGroup:E,refGroupContext:O,refMetadata:A,onHovered:N,onHideRefClick:$,sha:P,showRemoteNamesOnRefs:z,enabledRefMetadataTypes:G,translate:F,type:B}=this.props,W=c()("ref-node-wrapper","flex"),U={minWidth:0,marginLeft:3,height:x.cZ},j=c()("ref-node","flex","items-center","p1",{"has-active":t,"dim-ref":!o&&u,"is-active":n});let Z="";E.length>0&&(Z=z&&E[0].fullName||E[0].name);const q=h().createElement(Fr,{name:Z}),K=[],Y=[],X=[];let J=null;const ee=new Set,oe=new Set;E.forEach(((e,t)=>{if(K.push(Br(d,e,F,t)),G.includes(Hr.$M)&&(e.refType===te.V.HEAD||e.refType===te.V.REMOTE)){const t=this.getIssueIconsAndTooltipsForRef(A,e,oe);t&&X.push(...t)}if(G.includes(Hr.mQ)&&e.refType===te.V.REMOTE){const t=this.getPullRequestIconsAndTooltipsForRef(A,e,ee);t&&Y.push(...t)}G.includes(Hr.uq)&&e.refType===te.V.HEAD&&(J=this.getUpstreamIndicatorIconsAndTooltipsForRef(A,e))}));const ne=[...K,...Y,...X],re=n?h().createElement(Mr,{icon:h().createElement("span",{className:c()("mr1")},d("check")),tooltipId:"ref-icon-current",tooltipText:F("Ref-Current")}):null,ie=this.getContextForRefGroupIfExists(E,O),se=this.getContextForRefGroupIfExists(E,O,!0),ae=e&&!t&&u&&!T?h().createElement(Mr,{icon:h().createElement("span",{className:c()("mr1","button"),onClick:e=>$(e,E,P)},d("hide")),tooltipId:`ref-node-toggle-visibility-btn-${Z}`,tooltipText:F("Hide")}):null,le={commitType:B,isGhostRef:r,isInUnsupportedRebase:p,refGroup:E,sha:P};return h().createElement(Gr.Z,{canDrag:e=>w(e),canDrop:(e,t,o)=>S(e,t,o),className:W,"data-vscode-context":(0,Q.q3)(se),dndData:le,dndId:`DndRefNode_${E[0].id}`,onBeginDrag:(e,t)=>m(e,t),onDragEnter:(e,t,o)=>g(e,t,o),onDragLeave:(e,t,o)=>v(e,t,o),onDrop:(e,t,o)=>y(e,t,o),onEndDrag:(e,t,o)=>_(e,t,o),style:U},h().createElement("span",{className:j,"data-test-class":"ref-node-span","data-vscode-context":(0,Q.q3)(ie),onContextMenu:p?void 0:this.onContextMenu,onDoubleClick:p?void 0:this.onDoubleClick,onMouseDown:this.onClick,onMouseEnter:e=>N(e,E,P),style:{minWidth:"100%"}},re,h().createElement("span",{className:"flex items-center"},ne),q,J,h().createElement("span",{className:"flex ml-auto"},ae)))}}class Ar extends h().Component{headIconsRef=h().createRef();constructor(e){super(e),this.state={showPopoverMenu:!1,refPopoverMenuTarget:void 0}}onHiddenRefsClick=e=>{const{showPopoverMenu:t}=this.state;this.setState({showPopoverMenu:!t,refPopoverMenuTarget:t?e.target:void 0})};onShowRefNodes=(e,t,o)=>{this.props.onToggleRefNodesShown(e,t,o),0===Object.keys(this.props.excludeRefsById).length&&this.onHiddenRefsClick(e)};compareGraphRefOpts(e,t){const o=e.name.localeCompare(t.name);return 0===o&&e.type===te.V.REMOTE?-1:o}render(){const{columnSetting:e,enableResizer:t,enableShowHideRefsOptions:o,getExternalIcon:n,graphWidth:r,graphZones:d,graphZoneType:u,excludeRefsById:p,includeOnlyRefsById:m,isDraggable:g,onFilterColumnClick:v,onHover:y,onResize:w,onResizeEnd:S,onResizeFromPropChange:_,onResizeStart:T,onUnhover:E,onSettingsClick:O,rowsStatsLoading:A,settingsContext:N,showRemoteNamesOnRefs:$,translate:P}=this.props,{showPopoverMenu:z,refPopoverMenuTarget:G}=this.state,F=(0,Q.zv)(u,d);if(!F)return null;const B=(0,Q.SH)(u,d),W=F.currentWidth-x.b4,U=`${u}-header`,j=F.currentWidth<=F.showIconWidth,Z=e?.isFilterable||!1,q=j&&(Z||o),K=c()("columns-btn",{"small-btn":q});let Y=null,X=null;if(u===x.jZ){const e=Object.entries(p),t=Object.values(m),r=t.length>0,d=r&&t.some((e=>e.type===te.V.TAG)),u=e.filter((e=>e[1].type===te.V.TAG&&(!r||!d)||!m[e[0]]));u.length>0&&(X=u.sort(((e,t)=>this.compareGraphRefOpts(e[1],t[1]))).map(((e,t)=>{const o=e[0],r=e[1];p[o].id=o;const c={name:r.name,refType:r.type,owner:r.owner,avatarUrl:r.avatarUrl},d=!$&&"*"!==c.name||c.refType!==te.V.REMOTE?c.name:`${c.owner}/${c.name}`;return h().createElement("li",{id:o,key:o,onClick:e=>this.onShowRefNodes(e,[p[o]],!0)},Br(n,c,P,t),h().createElement("span",{className:"text-ellipsis"},d))})),Y=o?h().createElement("div",{className:c()(K,"right","text-normal","button",z?"active":null)},h().createElement(Mr,{icon:h().createElement("span",{onClick:this.onHiddenRefsClick},n("hide")),tooltipId:"header-ref-node-hidden-refs-btn",tooltipText:P("GraphHeader-HiddenRefs-btn")})):null)}const J=Z?h().createElement("div",{className:c()(K,"columns-filter","right","fs-1",{filtering:e?.isFilterActive||!1})},h().createElement(Mr,{icon:h().createElement("span",{className:"columns-filter-icon text-disabled hover-icon",id:`${u}-header-filter`,onClick:e=>v(e,u),style:{height:x.ze,marginBottom:x.wi}},n("filter")),tooltipId:"header-columns-filter",tooltipText:P("GraphHeader-Filter")})):null,ee=!j&&u===x.WD&&A?h().createElement("span",{className:c()(K,"spinner")},n("loading")):null,oe=h().createElement(Un,{container:this,onHide:z?this.onHiddenRefsClick:void 0,placement:z?"bottom":void 0,rootClose:z,show:z,target:G},h().createElement(dr,{className:c()({"is-last-header":B}),id:"opts-popover",style:{display:z?"block":"none"}},h().createElement("ul",null,X))),ne=B&&O?h().createElement("div",{className:c()("columns-btn","columns-settings","right","fs-1"),"data-vscode-context":(0,Q.q3)(N)},h().createElement(Mr,{icon:h().createElement("span",{className:"columns-settings-icon text-disabled hover-icon",onClick:e=>O(e,r)},n("settings")),tooltipId:"header-columns-settings",tooltipText:P("GraphHeader-EditColumns")})):null,re=this.headIconsRef?.current?.clientWidth&&parseInt(this.headIconsRef.current.clientWidth,10)||0,ie=h().createElement("div",{className:"header-columns-icons",ref:this.headIconsRef},ne,ee,J,Y),se=j?h().createElement(h().Fragment,null,h().createElement("div",{className:c()(K,"justify-start",{ml1:!q}),style:{width:W-re},title:P(F.headerLabelUntranslated)},n((0,Q.sH)(u))),ie):h().createElement(h().Fragment,null,h().createElement("div",{className:"text-disabled text-ellipsis",style:{height:x.ze,overflow:"hidden",width:W-re}},h().createElement("span",{className:"fs-1 ml1 font-monospace"},P(F.headerLabelUntranslated))),ie),ae=h().createElement("div",{onMouseEnter:y,onMouseLeave:E},oe,se),le=c()("panel-bg0","graph-header",{"is-draggable":g,"is-last-header":B});return B?h().createElement("div",{className:le,id:U,key:U,style:{minWidth:W,transform:"translate3d(0, 0, 0)",zIndex:2}},ae):h().createElement("div",{className:le,id:U,key:U,style:{display:"flex",minWidth:F.currentWidth,transform:"translate3d(0, 0, 0)",width:F.currentWidth,zIndex:2}},h().createElement(tn,{className:le,enable:t,handleStyles:{right:{right:0}},height:x.ze,onResize:w?e=>w(F,e):void 0,onResizeEnd:S?e=>S(F,e):void 0,onResizeFromPropChange:_?e=>_(F,e):void 0,onResizeStart:T?e=>T(F,e):void 0,resizeContentClassName:"z1",resizeEdge:"right",resizeHandleClassName:"z2 border-right",style:{display:"flex"},translate:P,width:F.currentWidth,widthConstraints:(0,Q.eR)(u,d,r)},ae))}}const Wr=Ar;class Pr extends h().PureComponent{canDrag=!1;isDraggable=e=>this.canDrag&&e.props.isDraggable;isDroppable=(e,t)=>e.props.graphZoneType!==t?.props?.graphZoneType&&(!t||t.props.isDroppable);onDrop=(e,t)=>{this.props.onColumnReOrdered&&this.props.onColumnReOrdered(e.props.graphZoneType,t?t.props.graphZoneType:null)};onZoneHover=()=>{this.canDrag=!0};onZoneUnHover=()=>{this.canDrag=!1};render(){const{columnsSettings:e,dragAppendToContainer:t,enableResizer:o,enableShowHideRefsOptions:n,getExternalIcon:r,excludeRefsById:c,headerContext:d,includeOnlyRefsById:u,onFilterColumnClick:p,onPopupGraphHeaderContextMenu:m,onGraphZoneResize:g,onGraphZoneResizeEnd:v,onGraphZoneResizeFromPropChange:y,onSettingsClick:w,onToggleRefNodesShown:S,graphZones:_,repoPath:T,rowsStatsLoading:E,showRemoteNamesOnRefs:O,translate:A,width:N,height:$,settingsContext:P}=this.props,z=h().createElement("div",{className:"panel-bg0",style:{height:x.ze,marginBottom:x.wi,marginLeft:-x.mu,minWidth:x.mu+x.b4}});return h().createElement("div",{className:"graph-header flex","data-vscode-context":(0,Q.q3)(d),onContextMenu:m?e=>m(e,N):void 0,style:{height:x.ze,marginBottom:x.wi}},z,h().createElement(wn,{className:"flex",direction:"horizontal",isDraggable:this.isDraggable,isDroppable:this.isDroppable,mirrorContainer:t,onDrop:this.onDrop},_.map((t=>h().createElement(Wr,{columnSetting:e[t.type],enableResizer:o,enableShowHideRefsOptions:n,excludeRefsById:c,getExternalIcon:r,graphHeight:$,graphWidth:N,graphZones:_,graphZoneType:t.type,id:`${t.type}Header`,includeOnlyRefsById:u,isDraggable:t.isCustomizable,isDroppable:t.isCustomizable,key:`${t.type}Header`,onFilterColumnClick:p,onHover:this.onZoneHover,onResize:g,onResizeEnd:v,onResizeFromPropChange:y,onSettingsClick:w,onToggleRefNodesShown:S,onUnhover:this.onZoneUnHover,repoPath:T,rowsStatsLoading:E,settingsContext:P,showRemoteNamesOnRefs:O,translate:A})))))}}var Ur=Pr;function jr(e){const{constraints:{max:t,min:o},stats:{files:n,additions:r,deletions:d},getExternalIcon:u,isLastColumn:p,isRowSelected:m,verticalScrollWidth:g,zoneWidth:v}=e,y=r+d,w=Math.max(o,Math.min(t,y));let S=p?g+x.SZ:x.SZ;y<=w&&(S+=x.SZ);const _=Math.max(x.QW,w/t*(v-52-S)),T=r/y*_,E=d/y*_;return h().createElement("div",{className:c()("changes-zone",m?"selected":null)},h().createElement("span",{className:"changes-files",style:{width:52}},h().createElement("span",{className:"mr1"},u("files")),h().createElement("span",{className:"mr1"},n>999?"999+":n)),h().createElement("span",{className:"changes-bar",style:{width:_}},r?h().createElement("div",{className:"changes-sub-bar added",style:{width:T}}):null,d?h().createElement("div",{className:"changes-sub-bar deleted",style:{width:E}}):null))}const Vr=c()("absolute","top-0","right-0","bottom-0","left-0","time-line"),Zr=c()(Vr,"z2");var qr=function({z2:e}){return h().createElement("div",{className:e?Zr:Vr,style:{height:2}})};const Kr=h().createElement("div",{className:"color-strip height-100",style:{width:2}}),Xr={},Qr={};class Yr extends h().PureComponent{render(){const{clearCurrentlyHoveredGraphCommit:e,children:t,column:o,context:n,currentlyHoveredCommitSha:r,dimRowsOfSelectedCommit:d,getExternalIcon:u,graphZoneType:p,hasAvatars:m,highlightRowsOnRefHover:g,isDimmedMergeCommitRow:v,isHighlighted:y,isHovering:w,isLastColumn:S,isInUnsupportedRebase:_,isMissingHoveredRefGroup:T,isSelected:E,numGraphColumns:O,onContextMenu:A,onClickCommit:N,onDoubleClickCommit:$,rowContext:P,sha:z,showColorStrip:G,showConflictIcon:F,showTimeline:B,setAsCurrentlyHoveredGraphCommit:W,style:U,title:j,type:Z,verticalScrollWidth:q,zoneWidth:K}=this.props,Y=function(e,t){const o=e+t.toString();let n=Xr[o];return n||(n=c()("graph-row-wrapper","grow-3","height-100","graph-zone-column","min-width-0","pb3","pointer","pt3","relative",e,{"is-hovering":t}),Xr[o]=n,n)}(Z,w),X=function(e,t,o,n,r,d=!1,h=!1,u=!1,p=!1){const m=`${e}${t}${n}${o}${d}${h}${u}${p}${r}`;let g=Qr[m];return g||(g=c()("column-"+(t%r+1),"graph-row","height-100-percent","flex",e,{"is-selected":n},{"is-highlighted":o},{"dimmed-row":p&&!o||d&&(h||u)}),Qr[m]=g,g)}(Z,o,y,E,O,T,g,d,v),J=B?h().createElement(qr,null):null;return h().createElement("div",{className:Y,"data-vscode-context":(0,Q.q3)(P),onContextMenu:_?void 0:e=>A(e,p,z),onDoubleClick:e=>$(e,p,z),onMouseDown:e=>N(e,p,z),onMouseEnter:e=>W(e,p,z,r),onMouseLeave:t=>e(t,p,z,r),style:U},J,h().createElement("div",{className:X,"data-vscode-context":(0,Q.q3)(n)},G?Kr:null,F?h().createElement("span",{className:c()("ml2")},u("warning")):null,h().createElement("span",{className:c()("graph-zone","width-100","flex-1"),style:{lineHeight:`${x.cZ}px`,...S&&{width:K-q},...m&&{marginLeft:5}},title:j},t)))}}var ei=(e,t)=>{const{processedRows:o,rowStatsConstraints:n,getExternalIcon:r,highlightRowsOnRefHover:c,isInUnsupportedRebase:d,numGraphColumns:u,clearCurrentlyHoveredGraphCommit:p,currentlyHoveredCommitSha:m,dimMergeCommits:g,dimRowsOfSelectedCommit:v,onCommitContextMenu:y,onClickCommit:S,onDoubleClickCommit:_,rowsStats:T,setAsCurrentlyHoveredGraphCommit:E}=e,O=new Q.Dj(e);return({rowIndex:e,style:A})=>{const N=t(e),$=o[e],{sha:P,type:z,contexts:G}=$,F=G?.stats||void 0,B=G?.row||void 0,W=T?.[P];let U=[W?.files?`${W.files} files changed`:"",W?.additions?`${W.additions} lines added`:"",W?.deletions?`${W.deletions} lines deleted`:""].filter(Boolean).join(", ");U=z!==w.ch?U:"";const j=x.WD,Z=O.isColumnFollowingGraphColumn(j),q=O.isLastColumn(j),K=O.getZoneWidth(j),Y=O.getVerticalScrollWidth(j);return h().createElement(Yr,{clearCurrentlyHoveredGraphCommit:p,column:$.column,context:F,currentlyHoveredCommitSha:m,dimRowsOfSelectedCommit:v,getExternalIcon:r,graphZoneType:j,highlightRowsOnRefHover:c,isDimmedMergeCommitRow:z===w.lH&&g,isHighlighted:O.isHighlighted(e),isHovering:O.isHovering(e),isInUnsupportedRebase:d,isLastColumn:q,isMissingHoveredRefGroup:O.isMissingHoveredRefGroup(e),isSelected:O.isSelected(e),key:N,numGraphColumns:u,onClickCommit:S,onContextMenu:y,onDoubleClickCommit:_,rowContext:B,setAsCurrentlyHoveredGraphCommit:E,sha:P,showColorStrip:Z,showTimeline:O.hasTimeline(e),style:A,title:U,type:z,verticalScrollWidth:Y,zoneWidth:K},W&&z!==w.ch?h().createElement(jr,{constraints:n,getExternalIcon:r,isLastColumn:q,isRowSelected:O.isSelected(e),stats:W,verticalScrollWidth:Y,zoneWidth:K}):null)}};function ti(e){const t=(e||"").trim().toUpperCase();if(0===t.length)return"?";const o=t.split(" ");return 1===o.length?o[0][0]:o.length>1?o[0][0]+o[o.length-1][0]:"?"}function oi(e,t){return e&&t?`${e} <${t}>`:e||t||""}class Jr extends h().Component{overlayTriggerRef;constructor(e){super(e),this.state={tooltipText:""}}componentDidUpdate(e,t){this.overlayTriggerRef&&this.state.tooltipText!==t.tooltipText&&this.overlayTriggerRef.show()}getDefaultAvatar=(e,t,o)=>{const{authorInitials:n,column:r,context:c,cssVariables:d,style:u,fontSize:p,minWidth:m,size:g,title:v=""}=this.props,w=void 0!==r&&d[(0,N.a2)(r)]||x.iq,S=y(w.trim()),_={alignItems:"center",backgroundColor:w,backgroundSize:g,color:S,display:"flex",fontSize:`${p}px`,fontWeight:"bold",height:e,justifyContent:"center",minWidth:m,top:o,width:t,...u};return h().createElement("div",{className:this.getAvatarClassName(),"data-vscode-context":(0,Q.q3)(c),style:_,title:v},n?n.toUpperCase():"")};ensureTooltipText=()=>{const{tooltip:e}=this.props;this.setState({tooltipText:"function"==typeof e?e():e})};setOverlayTriggerRef=e=>{this.overlayTriggerRef=e};getAvatarClassName(){return c()("avatar","gravatar","rad2",this.props.className)}render(){const{tooltipText:e}=this.state,{avatarUrl:t,context:o,style:n,height:r,minWidth:c,size:d,title:u="",tooltip:p,top:m,useAuthorInitialsForAvatars:g,width:v}=this.props,y=r||d,w=v||d,S=m||x.P3/2-y/2,_={top:S,minWidth:c,...n},T=this.getDefaultAvatar(y,w,S),E=g?T:h().createElement("span",null,h().createElement(Or,{avatarClassName:this.getAvatarClassName(),avatarStyle:_,context:o,height:y,hint:u,size:d,url:t,width:w},this.getDefaultAvatar(y,w,S)));return p?h().createElement(Cr,{delayShow:250,key:e,onEnter:this.ensureTooltipText,overlay:h().createElement(_r,{className:"gk-graph",id:"graph-gravatar-tooltip"},e),placement:"top",ref:this.setOverlayTriggerRef,trigger:["hover","focus"]},E):E}}var ni=(e,t)=>{const{avatarUrlByEmail:o,clearCurrentlyHoveredGraphCommit:n,cssVariables:r,currentlyHoveredCommitSha:d,dimMergeCommits:u,dimRowsOfSelectedCommit:p,getExternalIcon:m,highlightRowsOnRefHover:g,processedRows:v,isInUnsupportedRebase:y,onCommitContextMenu:S,onClickCommit:_,onDoubleClickCommit:E,numGraphColumns:A,setAsCurrentlyHoveredGraphCommit:N,useAuthorInitialsForAvatars:$}=e,P=new Q.Dj(e);return({rowIndex:e,style:z})=>{const G=t(e),F=v[e],{author:B,email:W,message:U,sha:j,type:Z,contexts:q}=F,K=x.GF,Y=P.getActiveGraphZone(K);let X=Z!==w.ch?B:void 0;const Q=Z!==w.ch?oi(B,W):void 0,J=q?.author||void 0,ee=q?.row||void 0,te=P.isColumnFollowingGraphColumn(K),oe=P.isLastColumn(K),ne=P.getZoneWidth(K),re=(ne<=Y.minimumWidth||Y?.mode===x.Um.Rich)&&Z!==w.ch;if(re){const e=()=>{const e=B&&""!==B.trim()&&"Unknown"!==B?oi(B,W):W,t=O(T(U||""));let o="";if(0===t.length)o=e;else{t.unshift({email:W,name:B});for(let e=0;e<t.length;e+=1){const n=t[e];o+=oi(n.name,n.email),e<t.length-1&&(o+=", ")}}return o},t=$?void 0:o[W];X=h().createElement(Jr,{authorInitials:ti(B),avatarUrl:t,className:c()("node",`${w.o$}`,"z6"),column:F.column,context:q?.avatar||void 0,cssVariables:r,fontSize:10,height:x.LG,size:x.Y8,tooltip:e,useAuthorInitialsForAvatars:$,width:x.LG})}return h().createElement(Yr,{clearCurrentlyHoveredGraphCommit:n,column:F.column,context:J,currentlyHoveredCommitSha:d,dimRowsOfSelectedCommit:p,getExternalIcon:m,graphZoneType:K,hasAvatars:re,highlightRowsOnRefHover:g,isDimmedMergeCommitRow:Z===w.lH&&u,isHighlighted:P.isHighlighted(e),isHovering:P.isHovering(e),isInUnsupportedRebase:y,isLastColumn:oe,isMissingHoveredRefGroup:P.isMissingHoveredRefGroup(e),isSelected:P.isSelected(e),key:G,numGraphColumns:A,onClickCommit:_,onContextMenu:S,onDoubleClickCommit:E,rowContext:ee,setAsCurrentlyHoveredGraphCommit:N,sha:j,showColorStrip:te,showTimeline:P.hasTimeline(e),style:z,title:Q,type:Z,verticalScrollWidth:P.getVerticalScrollWidth(K),zoneWidth:ne},X)}},ri=(e,t)=>{const{processedRows:o,getExternalIcon:n,highlightRowsOnRefHover:r,isInUnsupportedRebase:c,numGraphColumns:d,formatCommitDateTime:u,clearCurrentlyHoveredGraphCommit:p,dimMergeCommits:m,dimRowsOfSelectedCommit:g,currentlyHoveredCommitSha:v,onCommitContextMenu:y,onClickCommit:S,onDoubleClickCommit:_,setAsCurrentlyHoveredGraphCommit:T}=e,E=new Q.Dj(e);return({rowIndex:e,style:O})=>{const A=t(e),N=o[e],{date:$,sha:P,type:z,contexts:G}=N,F=$&&z!==w.ch?u($,w.Gu.RowEntry):void 0,B=$&&z!==w.ch?u($,w.Gu.Tooltip):void 0,W=G?.date||void 0,U=G?.row||void 0,j=x.PL,Z=E.isColumnFollowingGraphColumn(j),q=E.isLastColumn(j),K=E.getZoneWidth(j),Y=E.getVerticalScrollWidth(j);return h().createElement(Yr,{clearCurrentlyHoveredGraphCommit:p,column:N.column,context:W,currentlyHoveredCommitSha:v,dimRowsOfSelectedCommit:g,getExternalIcon:n,graphZoneType:j,highlightRowsOnRefHover:r,isDimmedMergeCommitRow:z===w.lH&&m,isHighlighted:E.isHighlighted(e),isHovering:E.isHovering(e),isInUnsupportedRebase:c,isLastColumn:q,isMissingHoveredRefGroup:E.isMissingHoveredRefGroup(e),isSelected:E.isSelected(e),key:A,numGraphColumns:d,onClickCommit:S,onContextMenu:y,onDoubleClickCommit:_,rowContext:U,setAsCurrentlyHoveredGraphCommit:T,sha:P,showColorStrip:Z,showTimeline:!1,style:O,title:B,type:z,verticalScrollWidth:Y,zoneWidth:K},F)}},ii={glyph:Mn().string.isRequired},si=function(e){function t(){return e.apply(this,arguments)||this}return Rn(t,e),t.prototype.render=function(){var e,t=this.props,o=t.glyph,n=t.className,r=ar(xn(t,["glyph","className"])),d=r[0],u=r[1],p=En({},rr(d),((e={})[tr(d,o)]=!0,e));return h().createElement("span",En({},u,{className:c()(n,p)}))},t}(h().Component);si.propTypes=ii;const ai=or("glyphicon",si);var li={$bs_formGroup:Mn().object},ci=function(e){function t(){return e.apply(this,arguments)||this}Rn(t,e);var o=t.prototype;return o.getGlyph=function(e){switch(e){case"success":return"ok";case"warning":return"warning-sign";case"error":return"remove";default:return null}},o.renderDefaultFeedback=function(e,t,o,n){var r=this.getGlyph(e&&e.validationState);return r?h().createElement(ai,En({},n,{glyph:r,className:c()(t,o)})):null},o.render=function(){var e=this.props,t=e.className,o=e.children,n=ar(xn(e,["className","children"])),r=n[0],d=n[1],u=rr(r);if(!o)return this.renderDefaultFeedback(this.context.$bs_formGroup,t,u,d);var p=h().Children.only(o);return h().cloneElement(p,En({},d,{className:c()(p.props.className,t,u)}))},t}(h().Component);ci.defaultProps={bsRole:"feedback"},ci.contextTypes=li;const di=or("form-control-feedback",ci);var hi={componentClass:$n()},ui=function(e){function t(){return e.apply(this,arguments)||this}return Rn(t,e),t.prototype.render=function(){var e=this.props,t=e.componentClass,o=e.className,n=ar(xn(e,["componentClass","className"])),r=n[0],d=n[1],u=rr(r);return h().createElement(t,En({},d,{className:c()(o,u)}))},t}(h().Component);ui.propTypes=hi,ui.defaultProps={componentClass:"p"};const pi=or("form-control-static",ui);var fi={componentClass:$n(),type:Mn().string,id:Mn().string,inputRef:Mn().func},gi={$bs_formGroup:Mn().object},vi=function(e){function t(){return e.apply(this,arguments)||this}return Rn(t,e),t.prototype.render=function(){var e,t=this.context.$bs_formGroup,o=t&&t.controlId,n=this.props,r=n.componentClass,d=n.type,u=n.id,p=void 0===u?o:u,m=n.inputRef,g=n.className,v=n.bsSize,y=ar(xn(n,["componentClass","type","id","inputRef","className","bsSize"])),w=y[0],x=y[1];return"file"!==d&&(e=rr(w)),v&&(e[tr({bsClass:"input"},Jn[v]||v)]=!0),h().createElement(r,En({},x,{type:d,id:p,ref:m,className:c()(g,e)}))},t}(h().Component);vi.propTypes=fi,vi.defaultProps={componentClass:"input"},vi.contextTypes=gi,vi.Feedback=di,vi.Static=pi;const yi=or("form-control",nr([Qn,Xn],vi)),wi={ADDED:"added",DELETED:"deleted",MODIFIED:"modified",RENAMED:"renamed"};class mi extends h().Component{render(){const{fileDiffType:e,getExternalIcon:t,translate:o}=this.props;if(!e)return null;const n=(e=>{switch(e){case wi.ADDED:return"added";case wi.MODIFIED:return"modified";case wi.DELETED:return"deleted";case wi.RENAMED:return"renamed";default:return null}})(e),r=(e=>{switch(e){case wi.ADDED:return"color-green";case wi.MODIFIED:return"color-orange";case wi.DELETED:return"color-red";case wi.RENAMED:return"color-blue";default:return null}})(e),d=(e=>{switch(e){case wi.ADDED:return"CommitDiffSection-FileAdded";case wi.MODIFIED:return"CommitDiffSection-FileModified";case wi.DELETED:return"CommitDiffSection-FileDeleted";case wi.RENAMED:return"CommitDiffSection-FileRenamed";default:return null}})(e),u=c()("fs-1",r,"mr1");return h().createElement("span",{className:u,title:o(d)},n&&t(n))}}var Ci=mi;const{ADDED:xi,DELETED:Si,MODIFIED:_i,RENAMED:Ti}=wi,Ri={[xi]:"CommitDiffSection-NFilesAdded",[Si]:"CommitDiffSection-NFilesDeleted",[_i]:"CommitDiffSection-NFilesModified",[Ti]:"CommitDiffSection-NFilesRenamed"};var Ei=function({count:e,diffType:t,getExternalIcon:o,fileNodeListStyle:n,translate:r}){const c=n?e:r(Ri[t],e);let d,u;return n&&(d={fontSize:x.wd,marginRight:x.IX},u={fontSize:x.dH,margin:`0px ${x.VB}px 0px 0px`}),h().createElement("span",{className:"tiny-files-readout",style:d},h().createElement(Ci,{fileDiffType:t,getExternalIcon:o,style:u,translate:r}),h().createElement("span",{className:"tiny-files-readout-text"},c))},Oi=function({diffStats:e,fileNodeListStyle:t,getExternalIcon:o,translate:r}){const{types:c}=n;if(!e)return h().createElement("span",null);if(!Object.values(e).some((e=>Boolean(e))))return h().createElement("span",null);const d=e.modified?h().createElement(Ei,{count:e.modified,diffType:c.MODIFIED,fileNodeListStyle:!0,getExternalIcon:o,translate:r}):null,u=e.added?h().createElement(Ei,{count:e.added,diffType:c.ADDED,fileNodeListStyle:!0,getExternalIcon:o,translate:r}):null,p=e.deleted?h().createElement(Ei,{count:e.deleted,diffType:c.DELETED,fileNodeListStyle:!0,getExternalIcon:o,translate:r}):null,m=e.renamed?h().createElement(Ei,{count:e.renamed,diffType:c.RENAMED,fileNodeListStyle:!0,getExternalIcon:o,translate:r}):null,g=t?{marginLeft:x.aV}:null;return h().createElement("span",{className:"summary",style:g},d,u,p,m)};class bi extends h().Component{textWidthRef=h().createRef();wrapperRef=h().createRef();static defaultProps={style:{},value:""};componentDidMount(){this.wrapperRef?.current&&(this.wrapperRef.current.style.width="0px")}componentDidUpdate(){this.textWidthRef?.current&&this.wrapperRef?.current&&(this.wrapperRef.current.style.width=`${Number(this.textWidthRef.current.offsetWidth)+35}px`)}componentWillUnmount(){this.props.onBlur&&this.props.onBlur()}onWipKeyDown(e){e.stopPropagation()}render(){const{clearCurrentlyHoveredGraphCommit:e,currentlyHoveredCommitSha:t,getExternalIcon:o,graphZoneType:n,isCommitting:r,isHovering:d,isSelected:u,onBlur:p,onClickCommit:m,onContextMenu:g,onFocus:v,onMessageChange:y,setAsCurrentlyHoveredGraphCommit:x,sha:S,style:_,translate:T,value:E,workDirStats:O}=this.props,A=c()("graph-zone-column","pt3","pb3","pointer","height-100-percent","grow-3","graph-row-wrapper",w.ch,{"is-hovering":d}),N=c()("column-1","graph-row","flex",{"is-selected":u}),$=h().createElement(Oi,{diffStats:O,getExternalIcon:o,translate:T}),P=h().createElement("div",{className:"work-dir-input",ref:this.wrapperRef},h().createElement(yi,{"data-test-class":"work-dir-input-field",disabled:r,onBlur:e=>p(e),onChange:e=>y(e.target.value),onContextMenu:e=>g(e,n,S),onFocus:e=>v(e),onKeyDown:e=>this.onWipKeyDown(e),placeholder:T("WorkDirMessageInput-WIPPlaceholder"),type:"text",value:E}),h().createElement("div",{className:"text-width","data-test-class":"work-dir-input-message",ref:this.textWidthRef},E));return h().createElement("div",{className:A,onMouseEnter:e=>x(e,n,S,t),onMouseLeave:o=>e(o,n,S,t),style:_},h().createElement("div",{className:N,"data-test-class":"work-dir-message-row-div",onMouseDown:e=>m(e,n,S)},P,$))}}var Ii=(e,t)=>{const{dimMergeCommits:o,dimRowsOfSelectedCommit:n,processedRows:r,translate:c,getExternalIcon:d,graphCommitDescDisplayMode:u,highlightRowsOnRefHover:p,isInUnsupportedRebase:m,numGraphColumns:g,isCommitting:v,pendingCommitMessageSummary:y,workDirStats:S,onBlurWipNodeInput:_,onFocusWipNodeInput:T,onMessageChange:E,clearCurrentlyHoveredGraphCommit:O,currentlyHoveredCommitSha:A,onCommitContextMenu:N,onClickCommit:$,onDoubleClickCommit:P,setAsCurrentlyHoveredGraphCommit:z,wipMessageEditable:G}=e,F=new Q.Dj(e);return({rowIndex:e,style:B})=>{const W=t(e),U=r[e],{displaySummary:j,displayBody:Z,sha:q,type:K,contexts:Y,message:X}=U,Q=Y?.message||void 0,J=Y?.row||void 0,ee=x.KE,te=F.isColumnFollowingGraphColumn(ee),oe=F.isLastColumn(ee),ne=F.getZoneWidth(ee),re=F.getVerticalScrollWidth(ee),ie=F.isHovering(e),se=K===w.ch&&void 0!==S&&Object.keys(S).length>0,ae=se&&!G?h().createElement(Oi,{diffStats:S,getExternalIcon:d,translate:c}):null,le=u===x.R_.ALWAYS||u===x.R_.ON_HOVER&&ie,ce=K!==w.ch||G?h().createElement(h().Fragment,null,h().createElement("span",{className:"message-zone--summary"},j),le&&Z?h().createElement("span",{className:"message-zone--body"},Z):null):h().createElement("span",{style:{display:"flex",alignItems:"stretch",textOverflow:"ellipsis"}},le?j:null,ae);return se&&G?h().createElement(bi,{clearCurrentlyHoveredGraphCommit:O,currentlyHoveredCommitSha:A,getExternalIcon:d,graphZoneType:ee,isCommitting:v,isHovering:F.isHovering(e),isSelected:F.isSelected(e),key:W,onBlur:_,onClickCommit:$,onContextMenu:N,onFocus:T,onMessageChange:E,setAsCurrentlyHoveredGraphCommit:z,sha:q,style:B,translate:c,value:y,workDirStats:S}):h().createElement(Yr,{clearCurrentlyHoveredGraphCommit:O,column:U.column,context:Q,currentlyHoveredCommitSha:A,dimRowsOfSelectedCommit:n,getExternalIcon:d,graphZoneType:ee,highlightRowsOnRefHover:p,isDimmedMergeCommitRow:K===w.lH&&o,isHighlighted:F.isHighlighted(e),isHovering:ie,isInUnsupportedRebase:m,isLastColumn:oe,isMissingHoveredRefGroup:F.isMissingHoveredRefGroup(e),isSelected:F.isSelected(e),key:W,numGraphColumns:g,onClickCommit:$,onContextMenu:N,onDoubleClickCommit:P,rowContext:J,setAsCurrentlyHoveredGraphCommit:z,sha:q,showColorStrip:te,showConflictIcon:K===w.S7||K===w.br,showTimeline:F.hasTimeline(e),style:B,title:X,type:K,verticalScrollWidth:re,zoneWidth:ne},ce)}},Mi=(e,t)=>{const{processedRows:o,getExternalIcon:n,highlightRowsOnRefHover:r,isInUnsupportedRebase:c,numGraphColumns:d,clearCurrentlyHoveredGraphCommit:u,currentlyHoveredCommitSha:p,dimMergeCommits:m,dimRowsOfSelectedCommit:g,onCommitContextMenu:v,onClickCommit:y,onDoubleClickCommit:S,setAsCurrentlyHoveredGraphCommit:_,shaLength:T}=e,E=new Q.Dj(e);return({rowIndex:e,style:O})=>{const A=t(e),N=o[e],{sha:$,type:P,contexts:z}=N,G=((e,t=x.ai)=>e?e.substring(0,t):"")($,T),F=z?.sha||void 0,B=z?.row||void 0,W=x.av,U=E.isColumnFollowingGraphColumn(W),j=E.isLastColumn(W),Z=E.getZoneWidth(W),q=E.getVerticalScrollWidth(W);return h().createElement(Yr,{clearCurrentlyHoveredGraphCommit:u,column:N.column,context:F,currentlyHoveredCommitSha:p,dimRowsOfSelectedCommit:g,getExternalIcon:n,graphZoneType:W,highlightRowsOnRefHover:r,isDimmedMergeCommitRow:P===w.lH&&m,isHighlighted:E.isHighlighted(e),isHovering:E.isHovering(e),isInUnsupportedRebase:c,isLastColumn:j,isMissingHoveredRefGroup:E.isMissingHoveredRefGroup(e),isSelected:E.isSelected(e),key:A,numGraphColumns:d,onClickCommit:y,onContextMenu:v,onDoubleClickCommit:S,rowContext:B,setAsCurrentlyHoveredGraphCommit:_,sha:$,showColorStrip:U,showTimeline:E.hasTimeline(e),style:O,type:P,verticalScrollWidth:q,zoneWidth:Z},P!==w.ch?h().createElement("span",{className:"font-monospace pointer",title:G},G):null)}};function Di({hasRefs:e,isActiveSha:t,left:o,type:n,width:r}){const d=c()("ref-line","z4",{"is-active":t});return e&&function(e){return[w.o$,w.lH,w.S7].includes(e)}(n)?h().createElement("hr",{className:d,style:{left:o,width:r}}):null}var Ai=Di;function Ni({graphZoneModeConstants:{RADIUS_DIFF_MERGE_NODE_COMMIT_NODE:e},hasRefs:t,isActiveSha:o,nodeOffset:n,type:r}){return h().createElement(Di,{hasRefs:t,isActiveSha:o,left:0,type:r,width:n+(r===w.lH?e:0)})}function $i({className:e,marginLeft:t}){return h().createElement("div",{className:c()("app-bg0","absolute","left-0","right-0","bottom-0","top-0","pt3","pb3",e),style:{marginLeft:t}},h().createElement("div",{className:"commit-bg-color height-100-percent width-100-percent"}))}const Pi=(e,t,o,n)=>o+t*e+n/2;function zi({column:e,graphZoneModeConstants:{COMMIT_COLUMN_WIDTH:t,COMMIT_NODE_DIAMETER:o,COMMIT_ZONE_GUTTER_WIDTH:n}}){return h().createElement($i,{className:"z1",marginLeft:Pi(e,t,n,o)})}function Li(){return h().createElement($i,{marginLeft:0})}const Gi=(e,t,o,n,r,d)=>{const u={height:d.COMMIT_MERGE_NODE_DIAMETER,left:o+d.COMMIT_MERGE_NODE_LEFT_OFFSET,marginTop:d.COMMIT_MERGE_NODE_TOP_OFFSET,opacity:n,width:d.COMMIT_MERGE_NODE_DIAMETER},p=c()("node",r,"z6"),m=h().createElement(_r,{className:"gk-graph",id:"graph-merge-node-tooltip"},oi(t,e));return h().createElement(Cr,{delayShow:250,overlay:m,placement:"top",trigger:["hover","focus"]},h().createElement("div",{className:p,"data-test-class":"tree-row-commit-node",style:u}))};class Hi extends h().PureComponent{render(){const{authorEmail:e,authorName:t,getExternalIcon:o,graphZoneModeConstants:n,left:r,opacity:d,translate:u,type:p}=this.props;return(t||e)&&p===w.o$?n.IS_COMPACT?Gi(e,t,r,d,w.lH,n):(({authorEmail:e,authorInitials:t,authorName:o,avatarUrl:n,column:r,context:d,cssVariables:u,graphZoneModeConstants:p,left:m,message:g,opacity:v,type:y,useAuthorInitialsForAvatars:w})=>h().createElement(Jr,{authorInitials:t,avatarUrl:n,className:c()("node",`${y}`,"z6"),column:r,context:d,cssVariables:u,fontSize:10,height:p.COMMIT_NODE_DIAMETER,size:p.COMMIT_ZONE_AVATAR_DIAMETER,style:{left:m,opacity:v},tooltip:()=>{const t=o&&""!==o.trim()&&"Unknown"!==o?oi(o,e):e,n=O(T(g||""));let r="";if(0===n.length)r=t;else{n.unshift({email:e,name:o});for(let e=0;e<n.length;e+=1){const t=n[e];r+=oi(t.name,t.email),e<n.length-1&&(r+=", ")}}return r},top:p.COMMIT_NODE_TOP_OFFSET,useAuthorInitialsForAvatars:w,width:p.COMMIT_NODE_DIAMETER}))(this.props):p===w.lH||p===w.S7||p===w.br?Gi(e,t,r,d,p,n):((e,t,o,n,r,d,u,p=!1,m)=>{const g={height:m.COMMIT_NODE_DIAMETER,left:n,marginTop:m.COMMIT_NODE_TOP_OFFSET,opacity:r,width:m.COMMIT_NODE_DIAMETER};p&&(g.borderWidth=1);const v=c()("gk-graph","node",u,"z6",{compact:p});let y;y=u===w.kP?d("Stash"):u===w.ch?d("Graph-WorkInProgress"):oi(o,t);const x=h().createElement(_r,{className:"gk-graph",id:"graph-other-node-tooltip"},y);return h().createElement(Cr,{delayShow:250,overlay:x,placement:"top",trigger:["hover","focus"]},h().createElement("div",{className:v,"data-test-class":"tree-row-commit-node",style:g},u!==w.kP||p?null:h().createElement("span",null,e("stash"))))})(o,e,t,r,d,u,p,n.IS_COMPACT,n)}}class ki extends h().Component{render(){const{columnColorByColumn:e,edgeColumnMax:t,edges:o,nodeColumn:n,graphZoneModeConstants:{COMMIT_COLUMN_WIDTH:r,COMMIT_ZONE_GUTTER_WIDTH:c,COMMIT_ZONE_LINE_WIDTH:d,IS_COMPACT:u}}=this.props,p=function(e,t,o,n,r,c,d,h){const u=function(e,t,o,n){let r="";for(let c=0;c<=t;c++){const{passThrough:t,starting:d,ending:h}=e[c]??{};r=`${r}_${Y(c,o,d?.type,n)}_${Y(c,o,h?.type,n)}_${X(c,t?.type,n)}`}return r}(e,t,o,h);let p=ge[u];if(p)return p;let m="";for(let u=0;u<=t;u+=1){const t=e[u];if(!t)continue;const{passThrough:p,starting:g,ending:v}=t;m+=g?me(u,o,g.type,n,r,c,d,h):"",m+=p?pe(u,p.type,n,r,c,d,h):"",m+=v?he(u,o,v.type,n,r,c,d,h):""}return p=`url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><g>${m}</g></svg>')`,ge[u]=p,p}(o,t,n,e,r,c,d,u);return h().createElement("div",{className:"absolute top-0 right-0 bottom-0 left-0 z2",style:{background:p}})}}var Bi=ki;function Wi({boxShadowAlpha:e,boxShadowLeft:t,children:o,className:n="",left:r,width:d}){return h().createElement("div",{className:c()("absolute","top-0","bottom-0","z3",n),style:{boxShadow:`${t}px 5px 10px rgba(0, 0, 0, ${e})`,left:r,width:d}},o)}function Ui({boxShadowAlpha:e,hasTimeline:t,scrollLeft:o,width:n}){return h().createElement(Wi,{boxShadowAlpha:e,boxShadowLeft:5,className:"app-bg0 left-0",left:o,width:n},t?h().createElement(qr,{z2:!0}):null)}function ji({boxShadowAlpha:e,commitZoneWidth:t,hasTimeline:o,scrollLeft:n,width:r}){return h().createElement(Wi,{boxShadowAlpha:e,boxShadowLeft:-5,left:n+t-r,width:r},o?h().createElement(qr,{z2:!0}):null,h().createElement(Li,null))}class Fi extends h().PureComponent{render(){const{authorEmail:e,authorName:t,avatarContext:o,avatarUrl:n,clearCurrentlyHoveredGraphCommit:r,column:d,columnColorByColumn:u,commitZoneWidth:p,cssVariables:m,currentlyHoveredCommitSha:g,edgeColumnMax:v,edges:y,hasRefs:w,hasTimeline:S,getExternalIcon:_,graphZoneModeConstants:T,isActiveSha:E,isInUnsupportedRebase:O,isLastColumn:A,isSelected:N,leftGutterBoxShadowAlpha:$,leftGutterWidth:P,message:z,nodeOffset:G,nodeOpacity:F,numGraphColumns:B,onContextMenu:W,onClickCommit:U,onDoubleClickCommit:j,rightGutterBoxShadowAlpha:Z,rightGutterWidth:q,rowContext:K,scrollLeft:Y,setAsCurrentlyHoveredGraphCommit:X,sha:J,shouldShowRefLine:ee,style:te,translate:oe,type:ne,useAuthorInitialsForAvatars:re,zoneContext:ie}=this.props,se=d%B+1,ae=c()("relative","commit-zone","height-100-percent","pt3",ne,`column-${se}`,{"is-selected":N,"has-active":E}),le=S?h().createElement(qr,{z2:!0}):null,ce=h().createElement("div",{className:ae,"data-vscode-context":(0,Q.q3)(ie),onContextMenu:O?void 0:e=>W(e,x.Wm,J),onDoubleClick:e=>j(e,x.Wm,J),onMouseDown:e=>U(e,x.Wm,J),onMouseEnter:e=>X(e,x.Wm,J,g),onMouseLeave:e=>r(e,x.Wm,J,g),style:{...te,...A&&{width:"100%"}}},le,h().createElement(Ui,{boxShadowAlpha:$,hasTimeline:S,scrollLeft:Y,width:P}),ee?h().createElement(Ni,{graphZoneModeConstants:T,hasRefs:w,isActiveSha:E,nodeOffset:G,type:ne}):null,h().createElement(Hi,{authorEmail:e,authorInitials:ti(t),authorName:t,avatarUrl:n,column:d,context:o,cssVariables:m,getExternalIcon:_,graphZoneModeConstants:T,left:G,message:z,opacity:F,translate:oe,type:ne,useAuthorInitialsForAvatars:re}),h().createElement(zi,{column:d,graphZoneModeConstants:T}),h().createElement(Bi,{columnColorByColumn:u,edgeColumnMax:v,edges:y,graphZoneModeConstants:T,nodeColumn:d}),h().createElement(ji,{boxShadowAlpha:Z,commitZoneWidth:p,hasTimeline:S,scrollLeft:Y,width:q}));return K?h().createElement("div",{"data-vscode-context":(0,Q.q3)(K)},ce):ce}}var Vi=function(e,t){const{avatarUrlByEmail:o,onMissingAvatar:n,clearCurrentlyHoveredGraphCommit:r,columnColorByColumn:c,cssVariables:d,currentlyHoveredCommitSha:u,processedRows:p,getExternalIcon:m,graphZoneModeConstants:g,isInUnsupportedRebase:v,leftGutterBoxShadowAlpha:y,leftGutterWidth:w,onCommitContextMenu:S,onClickCommit:_,onDoubleClickCommit:T,nodeOffsetByColumn:E,nodeOpacityByColumn:O,numGraphColumns:A,rightGutterBoxShadowAlpha:N,rightGutterWidth:$,setAsCurrentlyHoveredGraphCommit:P,scrollLeft:z,shouldShowRefLine:G,translate:F,useAuthorInitialsForAvatars:B}=e,W=new Q.Dj(e);return({rowIndex:e,style:U})=>{const j=t(e),Z=p[e],q=x.Wm,K=W.getZoneWidth(q),{email:Y,author:X,contexts:Q,message:J,sha:ee,type:te}=Z,oe=Z.column,ne=Q?.graph||void 0,re=Q?.avatar||void 0,ie=Q?.row||void 0;let se;B||(se=o[Y],se||n(Y,ee));const ae=W.isLastColumn(q);return h().createElement(Fi,{authorEmail:Y,authorName:X,avatarContext:re,avatarUrl:se,clearCurrentlyHoveredGraphCommit:r,column:oe,columnColorByColumn:c,commitZoneWidth:K,cssVariables:d,currentlyHoveredCommitSha:u,edgeColumnMax:Z.edgeColumnMaxes,edges:Z.edges,getExternalIcon:m,graphZoneModeConstants:g,hasRefs:Z.hasRefs||!1,hasTimeline:W.hasTimeline(e),isActiveSha:W.rowContainsCurrentHeadRef(Z),isInUnsupportedRebase:v,isLastColumn:ae,isSelected:W.isSelected(e),key:j,leftGutterBoxShadowAlpha:y,leftGutterWidth:w,message:J,nodeOffset:E[oe],nodeOpacity:O[oe],numGraphColumns:A,onClickCommit:_,onContextMenu:S,onDoubleClickCommit:T,rightGutterBoxShadowAlpha:N,rightGutterWidth:$,rowContext:ie,scrollLeft:z,setAsCurrentlyHoveredGraphCommit:P,sha:ee,shouldShowRefLine:G,style:U,translate:F,type:te,useAuthorInitialsForAvatars:B,zoneContext:ne})}};const Zi=function(e,t,o){var n=0,r=!1;return h().Children.forEach(e,(function(e){r||h().isValidElement(e)&&t.call(o,e,n++)&&(r=!0)})),r};var qi={controlId:Mn().string,validationState:Mn().oneOf(["success","warning","error",null])},Ki={$bs_formGroup:Mn().object.isRequired},Yi=function(e){function t(){return e.apply(this,arguments)||this}Rn(t,e);var o=t.prototype;return o.getChildContext=function(){var e=this.props;return{$bs_formGroup:{controlId:e.controlId,validationState:e.validationState}}},o.hasFeedback=function(e){var t=this;return Zi(e,(function(e){return"feedback"===e.props.bsRole||e.props.children&&t.hasFeedback(e.props.children)}))},o.render=function(){var e=this.props,t=e.validationState,o=e.className,n=e.children,r=function(e,t){var o={};["controlId"].forEach((function(e){o[e]=!0}));var n={};return qn()(e).forEach((function(e){var t=e[0],r=e[1];sr(t)||o[t]||(n[t]=r)})),[ir(e),n]}(xn(e,["validationState","className","children"])),d=r[0],u=r[1],p=En({},rr(d),{"has-feedback":this.hasFeedback(n)});return t&&(p["has-"+t]=!0),h().createElement("div",En({},u,{className:c()(o,p)}),n)},t}(h().Component);Yi.propTypes=qi,Yi.childContextTypes=Ki;const Xi=or("form-group",nr([Xn,Qn],Yi));function Qi(e,t){return Qi=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Qi(e,t)}function Ji(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function es(e,t,o){return e===t||(e.correspondingElement?e.correspondingElement.classList.contains(o):e.classList.contains(o))}var ts,os,ns=(void 0===ts&&(ts=0),function(){return++ts}),rs={},ss={},as=["touchstart","touchmove"];function ls(e,t){var o={};return-1!==as.indexOf(t)&&os&&(o.passive=!e.props.preventDefault),o}class is extends h().PureComponent{handleClickOutside(){const{sha:e,shorthand:t,type:o,data:n}=this.props.createRefFormData;this.props.onCancel(t,e,o,n)}constructor(e){super(e);const{createRefFormData:t,formatRefShorthand:o}=this.props,{sha:n,shorthand:r,type:c,data:d}=t;this.state={currentShorthand:o(r,n,c,d),initShorthand:r}}static getDerivedStateFromProps(e,t){const{createRefFormData:o,formatRefShorthand:n}=e,{currentShorthand:r,initShorthand:c}=t,{sha:d,shorthand:h,type:u,data:p}=o,m=h!==c;return m&&n(h,d,u,p)!==r?{currentShorthand:n(h,d,u,p),initShorthand:h}:m?{currentShorthand:r,initShorthand:h}:null}onInputChange(e){let t=e||"";if(e){const{sha:e,type:o,data:n}=this.props.createRefFormData;t=this.props.formatRefShorthand(t,e,o,n)}this.setState({currentShorthand:t}),this.props.onRefShorthandChange?.(t)}render(){const{createRefFormData:e,isRefShorthandValid:t,onCancel:o,onContextMenu:n,onRefCreate:r,refZoneWidth:c,style:d,translate:u}=this.props,{currentShorthand:p}=this.state,{data:m,sha:g,type:v}=e,y=u(v===te.V.TAG?"RefZone-EnterTagName":"RefZone-EnterBranchName");return h().createElement("div",{className:"create-ref","data-testid":"create-ref",style:{...d,minWidth:c,width:c}},h().createElement(Xi,{validationState:0===p.length||t(p,g,v,m)?"success":"error"},h().createElement(yi,{autoFocus:!0,"data-testid":"create-ref-form-control",onChange:e=>this.onInputChange(e.target?.value),onContextMenu:e=>n(e,p,g,v,m),onKeyDown:e=>{e.stopPropagation(),"Escape"!==e.key?g&&"Enter"===e.key&&r(p,g,v,m):o(p,g,v,m)},placeholder:y,type:"text",value:p})))}}var cs=function(e,t){var o,n,r=e.displayName||e.name||"Component";return n=o=function(o){var n,c;function h(e){var n;return(n=o.call(this,e)||this).__outsideClickHandler=function(e){if("function"!=typeof n.__clickOutsideHandlerProp){var t=n.getInstance();if("function"!=typeof t.props.handleClickOutside){if("function"!=typeof t.handleClickOutside)throw new Error("WrappedComponent: "+r+" lacks a handleClickOutside(event) function for processing outside click events.");t.handleClickOutside(e)}else t.props.handleClickOutside(e)}else n.__clickOutsideHandlerProp(e)},n.__getComponentNode=function(){var e=n.getInstance();return t&&"function"==typeof t.setClickOutsideRef?t.setClickOutsideRef()(e):"function"==typeof e.setClickOutsideRef?e.setClickOutsideRef():(0,mt.findDOMNode)(e)},n.enableOnClickOutside=function(){if("undefined"!=typeof document&&!ss[n._uid]){void 0===os&&(os=function(){if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}}),o=function(){};return window.addEventListener("testPassiveEventSupport",o,t),window.removeEventListener("testPassiveEventSupport",o,t),e}}()),ss[n._uid]=!0;var e=n.props.eventTypes;e.forEach||(e=[e]),rs[n._uid]=function(e){var t;null!==n.componentNode&&(n.props.preventDefault&&e.preventDefault(),n.props.stopPropagation&&e.stopPropagation(),n.props.excludeScrollbar&&(t=e,document.documentElement.clientWidth<=t.clientX||document.documentElement.clientHeight<=t.clientY)||function(e,t,o){if(e===t)return!0;for(;e.parentNode||e.host;){if(e.parentNode&&es(e,t,o))return!0;e=e.parentNode||e.host}return e}(e.composed&&e.composedPath&&e.composedPath().shift()||e.target,n.componentNode,n.props.outsideClickIgnoreClass)===document&&n.__outsideClickHandler(e))},e.forEach((function(e){document.addEventListener(e,rs[n._uid],ls(Ji(n),e))}))}},n.disableOnClickOutside=function(){delete ss[n._uid];var e=rs[n._uid];if(e&&"undefined"!=typeof document){var t=n.props.eventTypes;t.forEach||(t=[t]),t.forEach((function(t){return document.removeEventListener(t,e,ls(Ji(n),t))})),delete rs[n._uid]}},n.getRef=function(e){return n.instanceRef=e},n._uid=ns(),n}c=o,(n=h).prototype=Object.create(c.prototype),n.prototype.constructor=n,Qi(n,c);var u=h.prototype;return u.getInstance=function(){if(e.prototype&&!e.prototype.isReactComponent)return this;var t=this.instanceRef;return t.getInstance?t.getInstance():t},u.componentDidMount=function(){if("undefined"!=typeof document&&document.createElement){var e=this.getInstance();if(t&&"function"==typeof t.handleClickOutside&&(this.__clickOutsideHandlerProp=t.handleClickOutside(e),"function"!=typeof this.__clickOutsideHandlerProp))throw new Error("WrappedComponent: "+r+" lacks a function for processing outside click events specified by the handleClickOutside config option.");this.componentNode=this.__getComponentNode(),this.props.disableOnClickOutside||this.enableOnClickOutside()}},u.componentDidUpdate=function(){this.componentNode=this.__getComponentNode()},u.componentWillUnmount=function(){this.disableOnClickOutside()},u.render=function(){var t=this.props;t.excludeScrollbar;var o=function(e,t){if(null==e)return{};var o,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)o=c[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(t,["excludeScrollbar"]);return e.prototype&&e.prototype.isReactComponent?o.ref=this.getRef:o.wrappedRef=this.getRef,o.disableOnClickOutside=this.disableOnClickOutside,o.enableOnClickOutside=this.enableOnClickOutside,(0,d.createElement)(e,o)},h}(d.Component),o.displayName="OnClickOutside("+r+")",o.defaultProps={eventTypes:["mousedown","touchstart"],excludeScrollbar:t&&t.excludeScrollbar||!1,outsideClickIgnoreClass:"ignore-react-onclickoutside",preventDefault:!1,stopPropagation:!1},o.getClass=function(){return e.getClass?e.getClass():e},n}(is),hs=function({hasActive:e,overflowCount:t}){return h().createElement("span",{className:c()("overflow-count ml1",{"is-active":e}),"data-test-class":"overflow-count"},"+",t)},us=function({style:e,children:t,column:o,numGraphColumns:n,onMouseEnter:r,onMouseLeave:d}){const u=e?.top||0;return h().createElement("div",{className:c()("gk-graph","ref-zone","column-"+(o%n+1))},h().createElement("ul",{onMouseEnter:r,onMouseLeave:d,style:{...e,top:u-x.cZ/2,position:"absolute",listStyle:"none",padding:0,zIndex:1}},t))},ps=function({enabledRefMetadataTypes:e,column:t,context:o,enableShowHideRefsOptions:n,getTargetRef:r,hasActive:c,hasRefs:d,getExternalIcon:u,includeOnlyRefsById:p,includeOnlyRemotesByName:m,isGhostRef:g,isHovered:v,isInUnsupportedRebase:y,numGraphColumns:w,onMissingRefMetadata:S,refGroupContexts:_,refGroupsByName:T,refMetadata:E,refNodeHovered:O,sha:A,showRemoteNamesOnRefs:N,showContextMenuForGroupedRef:$,onClickRef:P,onDoubleClickRef:z,onToggleRefNodesShown:G,onRefBeginDrag:F,onRefCanDrag:B,onRefCanDrop:W,onRefDragEnter:U,onRefDragLeave:j,onRefDrop:Z,onRefEndDrag:q,translate:K,type:Y}){const X=(e,t,o)=>{const n=t.map((e=>({id:(0,Q.qP)(e),name:e.name,type:e.refType,owner:e.owner,avatarUrl:e.avatarUrl})));G(e,n,!1,o)},J=T&&T.length>x.v6?T.slice(0,x.v6):T,ee=J[0],oe=v?J:[ee],ne=x.Vh+(ee?.length||0)*x.B+(c?x.B:0),re=Object.values(p),ie=re.length>0&&re.some((e=>e.type===te.V.TAG)),se=oe.map((t=>{const o=t[0],r=_?.[o.name]||void 0,w=t.some((e=>{const t=(0,Q.qP)(e);switch(e.refType){case te.V.TAG:return ie&&Boolean(p[t]);case te.V.REMOTE:return Boolean(p[t])||e.owner&&m[e.owner];default:return Boolean(p[t])}})),x=h().createElement(kr,{enabledRefMetadataTypes:e,enableShowHideRefsOptions:n,getExternalIcon:u,groupIsHovered:v,hasActive:c,hasRefs:d,isActive:o.isCurrentHead,isGhostRef:g,isInUnsupportedRebase:y,isRefGroupIncluded:w,key:`ref-node-${o.fullName||o.name}`,onClick:P,onContextMenu:$,onDoubleClick:z,onHideRefClick:X,onHovered:O,onMissingRefMetadata:S,onRefBeginDrag:F,onRefCanDrag:B,onRefCanDrop:W,onRefDragEnter:U,onRefDragLeave:j,onRefDrop:Z,onRefEndDrag:q,refGroup:t,refGroupContext:r,refMetadata:E,sha:A,showRemoteNamesOnRefs:N,translate:K,type:Y});return v?h().createElement("li",{key:x.key},x):x}));return v?h().createElement("div",{"data-vscode-context":(0,Q.q3)(o),style:{height:100,position:"relative"}},h().createElement(Un,{placement:"right",show:v,target:r},h().createElement(us,{column:t,numGraphColumns:w},se))):h().createElement("span",{"data-vscode-context":(0,Q.q3)(o),style:{minWidth:ne}},se)};const ms={};class ds extends h().PureComponent{refPopoverTarget;isContextMenuShown=!1;static defaultProps={style:{}};componentWillReceiveProps(e){this.props.hasRefs||!this.props.isSingleSelected||e.isSingleSelected||this.props.hoveredRefZoneSha!==this.props.sha||(this.props.refZoneUnhovered(),this.props.hoveredRefGroup&&this.props.refNodeUnhovered(void 0,this.props.hoveredRefGroup,this.props.sha))}getRefPopoverTarget=()=>this.refPopoverTarget;onCustomToggleRefNodesShown=(e,t,o,n)=>{this.props.onToggleRefNodesShown(e,t,o,n),this.props.refZoneUnhovered()};render(){const{enabledRefMetadataTypes:e,column:t,context:o,enableShowHideRefsOptions:n,showGhostRefsOnRowHover:r,hasActive:d,hasRefs:u,hasTimeline:p,hoveredRefGroup:m,hoveredRefZoneSha:g,getExternalIcon:v,includeOnlyRefsById:y,includeOnlyRemotesByName:w,isContainerWindowFocused:S,isInUnsupportedRebase:_,numGraphColumns:T,onClickRef:E,onDoubleClickRef:O,onMissingRefMetadata:A,onRefBeginDrag:N,onRefCanDrag:$,onRefCanDrop:P,onRefDragEnter:z,onRefDragLeave:G,onRefDrop:F,onRefEndDrag:B,refGroupContexts:W,refGroupsByName:U,refMetadata:j,refNodeHovered:Z,refNodeUnhovered:q,refZoneHovered:K,refZoneUnhovered:Y,sha:X,shouldShowRefLine:J,showColorStrip:ee,showContextMenuForGroupedRef:te,showRemoteNamesOnRefs:oe,style:ne,translate:re,type:ie,width:se}=this.props,ae=g===X&&S,le={minWidth:se,width:se},ce={...ne,...le},de=p?h().createElement(qr,null):null,he=U.length,ue=e=>{K(X),he?Z(e,U[0],X):m&&q(e,m,X)},pe=e=>{S&&this.isContextMenuShown?this.isContextMenuShown=!1:(Y(),m&&q(e,m,X))},fe=(0,Q.h)(((e,t)=>{pe(e),N(e,t)})),me=he>0&&!u&&r,ge=function(e,t,o,n,r,d){const h=`${e}${t}${o}${n}${r}${d}`;let u=ms[h];return u||(u=c()("column-"+(t%r+1),"flex","pb3","pt3","ref-zone","relative",e,{"dim-ref":d,"has-active":n,z6:o,z1:!o}),ms[h]=u,u)}(ie,t,ae,d,T,me),be=h().createElement("div",{className:"color-strip height-100",style:{width:2}});if(!he)return h().createElement("div",{className:ge,onMouseEnter:ue,onWheel:pe,style:ce},ee?be:null,de);const ve={minWidth:0,overflow:"hidden",width:se-x.PB},ye=he-1,we=ye>0&&!ae?h().createElement(hs,{hasActive:d,overflowCount:ye}):null;return h().createElement("div",{className:ge,onMouseEnter:ue,onMouseLeave:pe,onWheel:pe,style:ce},h().createElement("div",{ref:e=>this.refPopoverTarget=e}),ee?be:null,de,h().createElement("div",{className:"flex",style:ve},h().createElement(ps,{column:t,context:o,enabledRefMetadataTypes:e,enableShowHideRefsOptions:n,getExternalIcon:v,getTargetRef:this.getRefPopoverTarget,hasActive:d,hasRefs:u,includeOnlyRefsById:y,includeOnlyRemotesByName:w,isGhostRef:me,isHovered:ae,isInUnsupportedRebase:_,numGraphColumns:T,onClickRef:E,onDoubleClickRef:O,onMissingRefMetadata:A,onRefBeginDrag:fe,onRefCanDrag:$,onRefCanDrop:P,onRefDragEnter:(e,t,o)=>{ae||o?.sha!==X||ue(e),z(e,t,o)},onRefDragLeave:G,onRefDrop:F,onRefEndDrag:B,onToggleRefNodesShown:this.onCustomToggleRefNodesShown,refGroupContexts:W,refGroupsByName:U,refMetadata:j,refNodeHovered:Z,sha:X,showContextMenuForGroupedRef:(e,t,o)=>{ue(e),this.isContextMenuShown=!0,te(e,t,o)},showRemoteNamesOnRefs:oe,translate:re,type:ie}),we),u&&J?h().createElement("div",{className:"absolute left-0 flex z1",style:le},h().createElement(Ai,{hasRefs:!0,isActiveSha:d,left:x.yv,type:ie,width:"100%"})):null)}}var gs=(e,t)=>{const{createRefFormData:o,formatRefShorthand:n,enableShowHideRefsOptions:r,enabledRefMetadataTypes:c,isRefShorthandValid:d,showGhostRefsOnRowHover:u,showRemoteNamesOnRefs:p,onDoubleClickRef:m,processedRows:g,includeOnlyRefsById:v,includeOnlyRemotesByName:y,isContainerWindowFocused:w,isInUnsupportedRebase:S,getExternalIcon:_,hoveredRefGroup:T,hoveredRefZoneSha:E,numGraphColumns:O,onClickRef:A,onMissingRefMetadata:N,onShowContextMenuForGroupedRef:$,onRefBeginDrag:P,onRefCanDrag:z,onRefCanDrop:G,onRefCreate:F,onRefCreateCancel:B,onRefCreateContextMenu:W,onRefDragEnter:U,onRefDragLeave:j,onRefDrop:Z,onRefEndDrag:q,onRefNodeHovered:K,onRefNodeUnhovered:Y,onRefShorthandChange:X,onRefZoneHovered:J,onRefZoneUnhovered:ee,onToggleRefNodesShown:te,refMetadataById:oe,shouldShowRefLine:ne,translate:re}=e,ie=new Q.Dj(e);return({rowIndex:e,style:Q})=>{const se=t(e),ae=g[e],le=x.jZ,ce=ie.getZoneWidth(le),de=ie.isHovering(e),{sha:he,type:ue,hasRefs:pe,contexts:fe}=ae,me=fe?.ref||void 0,ge=fe?.refGroups||void 0,be=ie.isSingleSelected(e),ve=(u||pe)&&(pe||de||be)?ie.getGraphRefGroupsByNameForRow(e):[],ye=ie.isColumnFollowingGraphColumn(le);return o?.sha===he?h().createElement(cs,{createRefFormData:o,formatRefShorthand:n,isRefShorthandValid:d,key:se,onCancel:B,onContextMenu:W,onRefCreate:F,onRefShorthandChange:X,refZoneWidth:ce,style:Q,translate:re}):h().createElement(ds,{column:ae.column,context:me,enabledRefMetadataTypes:c,enableShowHideRefsOptions:r,getExternalIcon:_,hasActive:ie.rowContainsCurrentHeadRef(ae),hasRefs:pe||!1,hasTimeline:ie.hasTimeline(e),hoveredRefGroup:T,hoveredRefZoneSha:E,includeOnlyRefsById:v,includeOnlyRemotesByName:y,isContainerWindowFocused:w,isInUnsupportedRebase:S,isSingleSelected:be,key:se,numGraphColumns:O,onClickRef:A,onDoubleClickRef:m,onMissingRefMetadata:N,onRefBeginDrag:P,onRefCanDrag:z,onRefCanDrop:G,onRefDragEnter:U,onRefDragLeave:j,onRefDrop:Z,onRefEndDrag:q,onToggleRefNodesShown:te,refGroupContexts:ge,refGroupsByName:ve,refMetadata:oe,refNodeHovered:K,refNodeUnhovered:Y,refZoneHovered:J,refZoneUnhovered:ee,sha:he,shouldShowRefLine:ne,showColorStrip:ye,showContextMenuForGroupedRef:$,showGhostRefsOnRowHover:u,showRemoteNamesOnRefs:p,style:Q,translate:re,type:ue,width:ce})}},bs=(e,t)=>{const{translate:o,processedRows:n}=e,r=c()("graph-row-wrapper","grow-3","height-100","graph-zone-column","min-width-0","pb3","pointer","pt3","relative"),d=new Q.Dj(e);return({rowIndex:e,style:u})=>{const p=t(e),m=c()("graph-row","height-100-percent","flex"),g=d.hasTimeline(e),v=n[e],y=v.contexts?.row||void 0,w=v.timeLineEntry?.label||"",x=v.timeLineEntry?.value||0,S=g?h().createElement(qr,null):null,_=g?h().createElement("span",{className:"time-line-message-container"},h().createElement("span",{className:"time-line-message"},o(w,x))):null;return h().createElement("div",{className:r,"data-vscode-context":(0,Q.q3)(y),key:p,style:u},S,h().createElement("div",{className:m,"data-vscode-context":(0,Q.q3)(y)},_))}};class fs extends h().Component{graphContainerRef=h().createRef();resizeObserver;isSelectedBySha={};processedGraphRowBySha={};childrenBySha={};scrollToSha;headSha;headUpstreamSha;lastLazyLoadHeight=0;lastTopVisibleRowIndex=-1;lastBottomVisibleRowIndex=-1;maxColumns=0;orderedGraphRows=[];rowStatsConstraints={min:0,max:0};shouldFireShowMoreCommits=!0;columnsToFreeWhenFound={};hasMergeNodeChildBySha={};reserverInfoBySha={};columnsUsed={};rowsStats;workDirStats=x.OR;excludeByType={};excludeRefsById={};includeOnlyRefsById={};excludeRemotesByName={};includeOnlyRemotesByName={};scrollLeft=0;scrollTop=0;graphHeight=585;graphWidth=804;graphZoneModeConstants=(0,Q.Ez)();graphZonesByType={};graphZoneOrdering=[x.jZ,x.Wm,x.KE,x.GF,x.WD,x.PL,x.av];clientHeight=0;missingAvatarsTimer;pendingMissingAvatars={};requestedMissingAvatars={};missingRefsMetadataTimer;pendingMissingRefsMetadata={};requestedMissingRefsMetadata={};markerRowIndices={};branchUpstreamRowIndices=[];downstreamsByUpstream={};timelinesInterval;constructor(e){super(e),this.resizeObserver=new ResizeObserver((e=>e.forEach((e=>this.onGraphResized(e.contentRect.width,e.contentRect.height))))),this.isSelectedBySha=this.props.isSelectedBySha||{},this.excludeByType=this.props.excludeByType||{},this.excludeRefsById=this.props.excludeRefsById||{},this.excludeRemotesByName=this.getExcludeRemotesByName(),this.includeOnlyRemotesByName=this.getIncludeOnlyRemotesByName(),this.includeOnlyRefsById=this.props.includeOnlyRefsById||{},this.downstreamsByUpstream=this.props.downstreamsByUpstream||{},this.rowsStats=this.props.rowsStats||this.rowsStats,this.workDirStats=this.props.workDirStats||this.workDirStats,this.processRows(this.props.graphRows),this.cleanupSelections(),this.updateMarkerRowIndices(["selection","highlights"]);const t=(0,N.Ld)(this.props.cssVariables);this.graphZoneModeConstants=(0,Q.Ez)(this.props.columnsSettings?.[x.Wm]?.mode),this.maybeSortGraphZoneOrderingFromSettings(this.props.columnsSettings),this.state={avatarUrlByEmail:this.props.avatarUrlByEmail||{},contexts:this.props.contexts,createRefFormData:this.props.createRefFormData,cssVariablesWithDefaults:t,columnColorByColumn:this.getColumnColorByColumn(t),currentlyHoveredCommitSha:void 0,dimMergeCommits:this.props.dimMergeCommits||!1,dimRowsOfSelectedCommit:!1,enableShowHideRefsOptions:this.props.enableShowHideRefsOptions||!1,highlightRowsOnRefHover:this.props.highlightRowsOnRefHover||!1,showGhostRefsOnRowHover:this.props.showGhostRefsOnRowHover||!1,showRemoteNamesOnRefs:this.props.showRemoteNamesOnRefs||!1,enabledRefMetadataTypes:this.props.enabledRefMetadataTypes||[],enabledScrollMarkerTypes:this.props.enabledScrollMarkerTypes||[],graphCommitDescDisplayMode:this.props.graphCommitDescDisplayMode||x.R_.ALWAYS,graphZones:this.initializeGraphZones(this.props.columnsSettings,this.graphZoneOrdering,580),hasMoreCommits:this.props.hasMoreCommits||!1,height:this.graphHeight,highlightedShas:this.props.highlightedShas,hoveredRefGroup:void 0,hoveredRefZoneSha:void 0,isContainerWindowFocused:void 0===this.props.isContainerWindowFocused||this.props.isContainerWindowFocused,isLoadingRows:this.props.isLoadingRows||!1,numGraphColumns:this.getNumGraphColumns(t),pendingCommitMessageSummary:this.props.pendingCommitMessageSummary||"",processedRows:[...this.orderedGraphRows],refMetadataById:this.props.refMetadataById,rowsStats:this.rowsStats,rowsStatsLoading:this.props.rowsStatsLoading||!1,useAuthorInitialsForAvatars:this.props.useAuthorInitialsForAvatars||!1,scrollLeft:this.getScrollLeft(),scrollToAlignment:this.getScrollToAlignment(),scrollToIndex:this.getScrollToIndex(),scrollTop:this.getScrollTop(),shaLength:this.props.shaLength,themeOpacityFactor:this.props.themeOpacityFactor||x.X9.dark,width:this.graphWidth,workDirStats:this.workDirStats}}componentDidMount(){this.resizeObserver.observe(this.graphContainerRef.current),window.addEventListener("keydown",this.onWindowKeyDown),window.addEventListener("keyup",this.onWindowKeyUp),window.addEventListener("blur",this.onWindowBlur);const e=this.isSelectedBySha?this.getSelectedShas():[];e.length>0&&this.selectCommits(e,!1,!0)}componentWillReceiveProps(e){let t=!1,o=!1,n=!1;if(this.props.highlightedShas!==e.highlightedShas){this.setState({highlightedShas:e.highlightedShas});const t=[];Object.keys(e.highlightedShas||{}).forEach((o=>{e.highlightedShas[o]&&void 0!==this.processedGraphRowBySha[o]?.rowIndex&&t.push(this.processedGraphRowBySha[o].rowIndex)})),this.markerRowIndices={...this.markerRowIndices,highlights:t}}if(this.props.isSelectedBySha!==e.isSelectedBySha&&this.selectCommits(e.isSelectedBySha?Object.keys(e.isSelectedBySha):[],!1,!0),this.props.excludeByType!==e.excludeByType&&(this.excludeByType=e.excludeByType||{},e.graphRows?.length&&(o=!0)),this.props.excludeRefsById!==e.excludeRefsById&&(this.excludeRefsById=e.excludeRefsById||{},this.excludeRemotesByName=this.getExcludeRemotesByName(),e.graphRows?.length&&(o=!0)),this.props.includeOnlyRefsById!==e.includeOnlyRefsById&&(this.includeOnlyRefsById=e.includeOnlyRefsById||{},this.includeOnlyRemotesByName=this.getIncludeOnlyRemotesByName(),e.graphRows?.length&&(o=!0)),this.props.themeOpacityFactor!==e.themeOpacityFactor&&this.setState({themeOpacityFactor:e.themeOpacityFactor}),this.props.dimMergeCommits!==e.dimMergeCommits&&this.setState({dimMergeCommits:e.dimMergeCommits||!1}),this.props.highlightRowsOnRefHover!==e.highlightRowsOnRefHover&&this.setState({highlightRowsOnRefHover:e.highlightRowsOnRefHover||!1}),this.props.showGhostRefsOnRowHover!==e.showGhostRefsOnRowHover&&this.setState({showGhostRefsOnRowHover:e.showGhostRefsOnRowHover||!1}),this.props.showRemoteNamesOnRefs!==e.showRemoteNamesOnRefs&&this.setState({showRemoteNamesOnRefs:e.showRemoteNamesOnRefs||!1}),this.props.enabledRefMetadataTypes!==e.enabledRefMetadataTypes&&this.setState({enabledRefMetadataTypes:e.enabledRefMetadataTypes||[]}),this.props.enabledScrollMarkerTypes!==e.enabledScrollMarkerTypes&&this.setState({enabledScrollMarkerTypes:e.enabledScrollMarkerTypes||[]}),this.props.graphCommitDescDisplayMode!==e.graphCommitDescDisplayMode&&this.setState({graphCommitDescDisplayMode:e.graphCommitDescDisplayMode||x.R_.ALWAYS}),this.props.isContainerWindowFocused!==e.isContainerWindowFocused&&this.setState({dimRowsOfSelectedCommit:!1,isContainerWindowFocused:void 0===e.isContainerWindowFocused||e.isContainerWindowFocused}),this.props.downstreamsByUpstream!==e.downstreamsByUpstream&&(this.downstreamsByUpstream=e.downstreamsByUpstream||{},e.graphRows?.length&&(o=!0)),this.props.graphRows!==e.graphRows||this.props.cssVariables!==e.cssVariables||o){this.cleanEdgeCaches();const r=(0,N.Ld)(e.cssVariables);n=!0,this.setState({columnColorByColumn:this.getColumnColorByColumn(r),cssVariablesWithDefaults:r,numGraphColumns:this.getNumGraphColumns(r)}),this.cleanupSelections(),t=!0,(e.graphRows?.length<this.props.graphRows?.length||o)&&(this.lastLazyLoadHeight=0)}if(this.props.useAuthorInitialsForAvatars!==e.useAuthorInitialsForAvatars&&this.setState({useAuthorInitialsForAvatars:e.useAuthorInitialsForAvatars}),this.props.shaLength!==e.shaLength&&this.setState({shaLength:e.shaLength}),this.props.hasMoreCommits===e.hasMoreCommits&&this.props.onShowMoreCommits===e.onShowMoreCommits||this.setState({hasMoreCommits:e.hasMoreCommits||!1},(()=>this.loadMoreCommitsIfNecessary(this.graphHeight,this.state.hasMoreCommits))),this.props.isLoadingRows!==e.isLoadingRows&&this.setState({isLoadingRows:e.isLoadingRows||!1}),this.props.rowsStats!==e.rowsStats&&(this.rowsStats=e.rowsStats,this.updateRowStatsConstraints(),this.setState({rowsStats:e.rowsStats})),this.props.rowsStatsLoading!==e.rowsStatsLoading&&this.setState({rowsStatsLoading:e.rowsStatsLoading||!1}),this.props.workDirStats!==e.workDirStats&&(this.workDirStats=e.workDirStats||x.OR,!(0,Q.Kk)(this.props.workDirStats)&&(0,Q.Kk)(e.workDirStats)||(0,Q.Kk)(this.props.workDirStats)&&!(0,Q.Kk)(e.workDirStats)?(n=!0,this.setState({workDirStats:this.workDirStats})):this.setState({workDirStats:this.workDirStats})),this.props.avatarUrlByEmail!==e.avatarUrlByEmail&&(this.setState({avatarUrlByEmail:e.avatarUrlByEmail||{}}),this.requestedMissingAvatars={}),this.props.refMetadataById!==e.refMetadataById&&(this.setState({refMetadataById:e.refMetadataById}),this.requestedMissingRefsMetadata={}),this.props.columnsSettings!==e.columnsSettings){if(e.columnsSettings?.[x.Wm]?.mode!==this.props.columnsSettings?.[x.Wm]?.mode){this.cleanEdgeCaches(),this.graphZoneModeConstants=(0,Q.Ez)(e.columnsSettings?.[x.Wm]?.mode),this.updateCommitZoneContentWidthFromChange();const o=this.graphZonesByType[x.Wm];o.currentWidth=o.contentWidth,o.preferredWidth=o.contentWidth,o.minimumWidth=this.graphZoneModeConstants.COMMIT_ZONE_VIEWPORT_WIDTH_MIN,o.showIconWidth=this.graphZoneModeConstants.COMMIT_ZONE_SHOW_ICON_WIDTH,this.loadEdgesBySha(),t=!0}e.columnsSettings&&(this.updateZonesFromSettings(e.columnsSettings),t=!0)}if(this.props.contexts!==e.contexts&&this.setState({contexts:e.contexts}),this.props.pendingCommitMessageSummary!==e.pendingCommitMessageSummary&&this.setState({pendingCommitMessageSummary:e.pendingCommitMessageSummary||""}),this.props.enableShowHideRefsOptions!==e.enableShowHideRefsOptions&&this.setState({enableShowHideRefsOptions:e.enableShowHideRefsOptions}),this.props.createRefFormData!==e.createRefFormData&&(e.createRefFormData?.sha&&this.selectCommits([e.createRefFormData?.sha],!1,!0),this.setState({createRefFormData:e.createRefFormData})),n&&(this.processRows(e.graphRows),this.setState({processedRows:[...this.orderedGraphRows]})),t){this.updateCommitZoneContentWidthFromChange();const e=this.getOrderedActiveGraphZones();this.expandLastZoneMinWidthForScrollbar(e),this.ensureZoneWidthsMatchGraphWidth(e,this.graphWidth),this.setState({graphZones:e})}}componentWillUnmount(){window.removeEventListener("keydown",this.onWindowKeyDown),window.removeEventListener("keyup",this.onWindowKeyUp),window.removeEventListener("blur",this.onWindowBlur),this.resizeObserver.disconnect()}onGraphVisibleRowsUpdatedThrottled=(0,Q.P2)((()=>this.onGraphVisibleRowsUpdated()),250,20);onBlurWipNodeInput=e=>{this.props.onBlurWipNodeInput&&this.props.onBlurWipNodeInput(e)};onDoubleClickRef=(e,t,o,n)=>{this.props.onDoubleClickGraphRef&&this.props.onDoubleClickGraphRef(e,t,this.processedGraphRowBySha[o],n)};onFocusWipNodeInput=e=>{this.props.onFocusWipNodeInput&&this.props.onFocusWipNodeInput(e)};onFilterColumnClick=(e,t)=>{this.props.onFilterColumnClick&&this.props.onFilterColumnClick(e,t)};onCurrentlyHoveredGraphCommit=(e,t,o,n)=>{n!==o&&(this.props.onGraphRowHovered&&this.props.onGraphRowHovered(e,t,this.processedGraphRowBySha[o]),this.setState({currentlyHoveredCommitSha:o}))};onClearCurrentlyHoveredGraphCommit=(e,t,o,n)=>{n&&(this.props.onGraphRowUnhovered&&this.props.onGraphRowUnhovered(e,t,this.processedGraphRowBySha[o]),this.setState({currentlyHoveredCommitSha:void 0}))};onGraphColumnReOrdered=(e,t)=>{const o=this.graphZoneOrdering.indexOf(e);let n=t?this.graphZoneOrdering.indexOf(t):this.graphZoneOrdering.length-1;t&&o<n&&(n-=1),this.graphZoneOrdering.splice(o,1),this.graphZoneOrdering.splice(n,0,e);const r={};this.graphZoneOrdering.forEach(((e,t)=>{this.graphZonesByType[e].order=t,r[e]=this.getGraphColumnSettingFromZoneType(this.graphZonesByType[e])})),this.setState({graphZones:this.initializeGraphZones(r,this.graphZoneOrdering,this.graphWidth)}),this.props.onGraphColumnsReOrdered&&this.props.onGraphColumnsReOrdered(r)};onGraphZoneResize=(0,Q.h)(((e,t)=>{if(t?.width){const o=this.getOrderedActiveGraphZones();this.adjustResizedGraphZone(o,e,t,!1),this.setState({graphZones:o})}}));onGraphZoneResizeEnd=(0,Q.h)(((e,t)=>{if(t?.width){const o=this.getOrderedActiveGraphZones();this.adjustResizedGraphZone(o,e,t,!0),this.setState({graphZones:o})}this.props.onColumnResized&&this.props.onColumnResized(e.type,this.getGraphColumnSettingFromZoneType(this.graphZonesByType[e.type]))}));onPopupGraphHeaderContextMenu=(e,t)=>{this.props.onPopupGraphHeaderContextMenu&&this.props.onPopupGraphHeaderContextMenu(e,t)};onSettingsClick=(e,t)=>{this.props.onSettingsClick&&this.props.onSettingsClick(e,t)};onMessageChange=e=>{this.setState({pendingCommitMessageSummary:e}),this.props.onMessageChange&&this.props.onMessageChange(e)};onRefBeginDrag=(e,t)=>{this.props.onRefBeginDrag&&this.props.onRefBeginDrag(e,t)};onRefCanDrag=e=>!!this.props.onRefCanDrag&&this.props.onRefCanDrag(e);onRefCanDrop=(e,t,o)=>!!this.props.onRefCanDrop&&this.props.onRefCanDrop(e,t,o);onRefCreate=(e,t,o,n)=>{this.props.onRefCreate&&this.props.onRefCreate(e,t,o,n)};onRefCreateCancel=(e,t,o,n)=>{this.props.onRefCreateCancel&&this.props.onRefCreateCancel(e,t,o,n)};onRefCreateContextMenu=(e,t,o,n,r)=>{this.props.onRefCreateContextMenu&&this.props.onRefCreateContextMenu(e,t,o,n,r)};onRefDragEnter=(e,t,o)=>{this.props.onRefDragEnter&&this.props.onRefDragEnter(e,t,o)};onRefDragLeave=(e,t,o)=>{this.props.onRefDragLeave&&this.props.onRefDragLeave(e,t,o)};onRefDrop=(e,t,o)=>{this.props.onRefDrop&&this.props.onRefDrop(e,t,o)};onRefEndDrag=(e,t,o)=>{this.props.onRefEndDrag&&this.props.onRefEndDrag(e,t,o)};onZoneRowClick(e,t,o){if(0===e.button){const{enableMultiSelection:t}=this.props,n=this.isMacOSPlatform();t&&(!n&&e.ctrlKey||n&&e.metaKey)?this.selectCommits([o],!0,!1):t&&e.shiftKey||this.selectCommits([o],!1,!1)}}onClickRef=(e,t,o,n)=>{this.onZoneRowClick(e,x.jZ,o),this.props.onClickGraphRef&&this.props.onClickGraphRef(e,t,this.processedGraphRowBySha[o],n)};onClickCommit=(e,t,o)=>{if(this.onZoneRowClick(e,t,o),this.props.onClickGraphRow){const n=this.processedGraphRowBySha[o];this.props.onClickGraphRow(e,t,n)}};onDoubleClickCommit=(e,t,o)=>{if(this.props.onDoubleClickGraphRow){const n=this.processedGraphRowBySha[o];this.props.onDoubleClickGraphRow(e,t,n)}};onWindowKeyUp=e=>{switch(e.keyCode){case 91:this.isMacOSPlatform()&&this.dimRowsOfSelectedCommit(!1);break;case 17:this.isMacOSPlatform()||this.dimRowsOfSelectedCommit(!1)}};onWindowBlur=()=>{this.dimRowsOfSelectedCommit(!1)};onWindowKeyDown=e=>{switch(e.keyCode){case 91:this.isMacOSPlatform()&&this.dimRowsOfSelectedCommit(!0);break;case 17:this.isMacOSPlatform()||this.dimRowsOfSelectedCommit(!0);break;default:this.state.dimRowsOfSelectedCommit&&this.dimRowsOfSelectedCommit(!1)}};onKeyDown=e=>{switch(e.keyCode){case 38:this.selectPrevious(e.shiftKey);break;case 40:this.selectNext(e.shiftKey);break;case 72:this.selectHead(e.shiftKey)}};onRefNodeHovered=(e,t,o)=>{(!this.props.showGhostRefsOnRowHover||(0,Q.PY)(this.isSelectedBySha,o)||this.processedGraphRowBySha[o]?.hasRefs)&&(this.props.onGraphRefNodeHovered&&this.props.onGraphRefNodeHovered(e,t,this.processedGraphRowBySha[o]),this.setState({hoveredRefGroup:[...t]}))};onRefNodeUnhovered=(e,t,o)=>{this.props.onGraphRefNodeUnhovered&&this.props.onGraphRefNodeUnhovered(e,t,this.processedGraphRowBySha[o]),this.setState({hoveredRefGroup:void 0})};onRefShorthandChange=e=>{const{createRefFormData:t}=this.state;this.setState({createRefFormData:{...t,shorthand:e}})};onRefZoneHovered=e=>{this.setState({hoveredRefZoneSha:e})};onRefZoneUnhovered=()=>{this.setState({hoveredRefZoneSha:void 0})};onShowMoreCommits=()=>{this.props.onShowMoreCommits&&this.shouldFireShowMoreCommits&&(this.props.onShowMoreCommits(),this.shouldFireShowMoreCommits=!1,setTimeout((()=>{this.shouldFireShowMoreCommits=!0}),250))};onScrollForZone=(e,t,o,n,r)=>{this.setScroll(e,t),this.props.onScrollForZone&&this.props.onScrollForZone(e,t),this.loadMoreCommitsIfNecessary(n,r)};loadMoreCommitsIfNecessary(e,t){if(!this.props.onShowMoreCommits||!t||!e||e<0||!this.scrollTop||this.scrollTop<0||!this.orderedGraphRows?.length)return;const o=this.scrollTop+e,n=this.orderedGraphRows.length*x.$0;o>n-x.qG&&o>this.lastLazyLoadHeight&&(this.lastLazyLoadHeight=Math.min(o,n-1),this.onShowMoreCommits())}onScrollToRowCausedUpdateForRefZone=(e,t)=>{this.setScroll(e,t),this.props.onScrollToRowCausedUpdateForRefZone&&this.props.onScrollToRowCausedUpdateForRefZone(e,t)};onCommitContextMenu=(e,t,o)=>{if(this.props.onRowContextMenu){const n=this.processedGraphRowBySha[o];this.props.onRowContextMenu(e,t,n)}};onRefContextMenu=(e,t,o)=>{if(this.props.onRefContextMenu){const n=this.processedGraphRowBySha[o];this.props.onRefContextMenu(e,t,n)}};selectCommits(e,t,o){t||Object.keys(this.isSelectedBySha).forEach((t=>{e.includes(t)||delete this.isSelectedBySha[t]}));const n=this.processedGraphRowBySha?Object.keys(this.processedGraphRowBySha):[];if(e.forEach((e=>{n.includes(e)&&(this.isSelectedBySha[e]=!t||!this.isSelectedBySha[e]||!this.isSelectedBySha[e],this.isSelectedBySha[e]&&this.selectSha(e,o))})),this.props.onSelectGraphRows){const e=this.getSelectedShas().map((e=>this.processedGraphRowBySha[e]));this.props.onSelectGraphRows(e)}this.updateMarkerRowIndices(["selection"]),this.setState({processedRows:[...this.orderedGraphRows]})}getCommitZoneContentWidthBetweenGutters(){return this.getCurrentWidthByZone(x.Wm)-this.getLeftGutterWidth()-this.getRightGutterWidth()}getSelectedShas(){const e=[];return Object.keys(this.isSelectedBySha).forEach((t=>{this.isSelectedBySha[t]&&e.push(t)})),e}getExcludeRemotesByName(){const e={};return Object.values(this.excludeRefsById).forEach((t=>{t.type===te.V.REMOTE&&t.owner&&"*"===t.name&&(e[t.owner]=!0)})),e}getIncludeOnlyRemotesByName(){const e={};return Object.values(this.includeOnlyRefsById).forEach((t=>{t.type===te.V.REMOTE&&t.owner&&"*"===t.name&&(e[t.owner]=!0)})),e}clearScrollToIndex=(0,Q.h)((()=>{this.setState({scrollToIndex:void 0})}));getTopAndBottomVisibleRowIndex(){const{graphHeight:e,orderedGraphRows:t,scrollTop:o}=this,n=e||0;if(!n||!t||!t.length)return{top:-1,bottom:-1};const r=(n-x.rl)/x.$0,c=o/x.$0,d=c+(r-1);return{top:Math.max(Math.floor(c),0),bottom:Math.min(Math.ceil(d),t.length-1)}}getOffsetSha(e){const t=this.graphHeight||0,o=this.props.scrollRowPadding||0;if(!o||!t)return e;let n=o;if(n<=0)return e;const r=this.getTopAndBottomVisibleRowIndex(),c=r.top,d=r.bottom;if(-1===c||-1===d)return e;const h=Math.floor((d-c)/2);if(h<1)return e;n=Math.min(n,h);const u=this.orderedGraphRows.length,p=this.orderedGraphRows.findIndex((t=>t.sha===e));if(!p||!this.orderedGraphRows.length)return e;const m=d-n<p;return c+n>p?this.orderedGraphRows[Math.max(p-n,0)].sha||e:m&&this.orderedGraphRows[Math.min(p+n,u-1)].sha||e}selectSha(e,t=!1){const o=this.processedGraphRowBySha[e]?.column||0,n=this.getScrollLeft(),r=this.getCommitZoneContentWidthBetweenGutters(),c=this.getCurrentWidthByZone(x.Wm),d=this.getCommitZoneContentWidth(),h=o*this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH,u=n-this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH/3<=h,p=h<=n+r,m=Math.max(0,d-c),g=u&&p?n:(0,oe.u)(h-r/2,0,m);this.setScrollToSha(t?this.getOffsetSha(e):e,g),this.setState({scrollToAlignment:this.getScrollToAlignment(),scrollToIndex:this.getScrollToIndex()},this.clearScrollToIndex)}updateWidthByZone(e,t,o){const n=this.getOrderedActiveGraphZones(),r=this.graphZonesByType[t],c=(0,Q.C_)(r,n,e);if(r.currentWidth=c,t===x.Wm){const e=Math.max(0,this.getCommitZoneContentWidth()-r.currentWidth);this.getScrollLeft()>e&&this.setScrollLeft(e)}o&&(r.preferredWidth=c)}updateCommitZoneContentWidthFromChange(){const e=this.graphZonesByType[x.Wm];if(!e.isHidden){const t=this.getOrderedActiveGraphZones(),o=this.getCommitZoneContentWidth();e.contentWidth=o,e.maximumWidth=o,e.currentWidth>o&&(e.currentWidth=(0,Q.C_)(e,t,o)),this.setState({graphZones:t})}}getCurrentWidthByZone(e,t=!0){const o=t?this.getVerticalScrollWidth(x.Wm,this.props.cssVariables,!0):0,n=this.graphZonesByType[e];return n&&!n.isHidden?n.currentWidth-o:0}getCommitZoneContentWidth(){return(this.maxColumns||1)*this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH+2*this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH+2*this.graphZoneModeConstants.COMMIT_ZONE_PADDING_RIGHT}getCommitZoneWidth(e=!0){const t=e?this.getVerticalScrollWidth(x.Wm,this.props.cssVariables,!0):0;if(this.graphZonesByType[x.Wm])return this.graphZonesByType[x.Wm].currentWidth-t;const{columnsSettings:o}=this.props;return o?.[x.Wm]?o[x.Wm].width-t:x.qi[x.Wm].minimumWidth-t}getSingleColumnModeFactor(){const e=this.maxColumns,t=this.getCurrentWidthByZone(x.Wm);return 1===e?0:(0,oe.u)(1-(t-2*this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH-this.graphZoneModeConstants.COMMIT_ZONE_PADDING_RIGHT)/this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH,0,1)}setClientHeight(e){this.clientHeight=e}getClientHeight(){return this.clientHeight}setScroll(e,t){this.setClientHeight(t.clientHeight),null!=t.scrollTop&&this.setScrollTop(t.scrollTop),e===x.Wm&&null!=t.scrollLeft&&this.setScrollLeft(t.scrollLeft)}getNonAdjustedScrollLeft(){return this.scrollLeft}setScrollLeft(e){this.scrollLeft!==e&&(this.scrollLeft=e,this.setState({scrollLeft:e}))}getScrollLeft(){const e=this.getNonAdjustedScrollLeft();return this.getCommitZoneContentWidth()!==this.getCommitZoneWidth()?e:0}setScrollTop(e){this.scrollTop!==e&&(this.scrollTop=e,this.setState({scrollTop:e}),this.onGraphVisibleRowsUpdatedThrottled())}getScrollTop(){return this.scrollTop}getScrollToSha(){return this.scrollToSha}setScrollToSha(e,t){this.scrollToSha=e,this.setScrollLeft(t),this.onGraphVisibleRowsUpdated()}getScrollToIndex(){const e=this.getScrollToSha();if(e){const t=this.processedGraphRowBySha[e]?.rowIndex;return void 0===t?this.orderedGraphRows.findIndex((t=>t.sha===e)):t}return-1}getScrollToAlignment(){const e=this.getClientHeight(),t=this.getScrollTop(),o=this.getScrollToIndex();return(0,Q.Ry)(x.$0,e,t,o)}getMinNodeOffset(){const e=this.getScrollLeft(),t=this.getSingleColumnModeFactor();return(1-t)*(e+2*this.graphZoneModeConstants.COMMIT_ZONE_PADDING_LEFT)+t*(e+this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH)}getHorizontalScrollHeight(e,t,o){return this.graphZonesByType[e]?(0,Q.KI)(e,this.getOrderedActiveGraphZones(),this.orderedGraphRows,t,o):0}getVerticalScrollWidth(e,t,o){return this.graphZonesByType[e]?(0,Q.Ne)(e,this.getOrderedActiveGraphZones(),this.props.hasMoreCommits,this.props.isLoadingRows,this.graphHeight,this.orderedGraphRows,this.props.enabledScrollMarkerTypes?.length>0,t,o):0}getMaxNodeOffset(){const e=this.getCurrentWidthByZone(x.Wm),t=this.getScrollLeft(),o=this.getSingleColumnModeFactor();return(1-o)*(e+t+(this.graphZoneModeConstants.COMMIT_ZONE_PADDING_RIGHT-this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH))+o*(t+this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH)}getAbsoluteNodeLeftByColumn(){const e={};for(let t=0;t<=this.maxColumns;t+=1)e[t]=this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH+this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH*t;return e}getNodeOffsetByColumn(){const e=this.getMinNodeOffset(),t=this.getMaxNodeOffset(),o=this.getAbsoluteNodeLeftByColumn(),n={};return Object.keys(o).forEach((r=>{const c=o[r];n[r]=(0,oe.u)(c,e,t)})),n}getMaxNodeLeft(){return this.getScrollLeft()+(this.getCurrentWidthByZone(x.Wm)-this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH-this.graphZoneModeConstants.COMMIT_ZONE_PADDING_RIGHT)}getMinNodeLeft(){const e=this.getScrollLeft(),t=this.getSingleColumnModeFactor();return e+this.graphZoneModeConstants.COMMIT_ZONE_PADDING_LEFT+t*this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH}getRightGutterSlideOutFactor(){const e=this.getCurrentWidthByZone(x.Wm),t=this.getCommitZoneContentWidth(),o=this.getSingleColumnModeFactor();return(0,oe.u)((e-(t-(this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH+this.graphZoneModeConstants.COMMIT_ZONE_PADDING_RIGHT)))/this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH,0,1)+o/2}getNodeOpacityByColumn(){const e=this.getMinNodeLeft(),t=this.getMaxNodeLeft(),o=this.getAbsoluteNodeLeftByColumn(),n=this.getRightGutterSlideOutFactor(),r=this.getSingleColumnModeFactor(),c={};return Object.keys(o).forEach((d=>{const h=o[d],u=h-(e-r*this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH),p=t+this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH-(h+this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH*(1-n)),m=Math.min(u,p);c[d]=x.l3+(1-x.l3)*Math.max(m/(this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH/2),r)})),c}getLeftGutterWidth(){const e=this.getSingleColumnModeFactor();return this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH+e*(this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH/2)}getRightGutterWidth(){return(1-this.getRightGutterSlideOutFactor())*this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH}getBoxShadowAlphaForGutter(e,t){return.4*(1-Math.max(e,t))}getLeftGutterBoxShadowAlpha(e){const t=this.getScrollLeft(),o=this.getSingleColumnModeFactor();return e*this.getBoxShadowAlphaForGutter(o,(0,oe.u)(1-t/this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH,0,1))}getRightGutterBoxShadowAlpha(e){const t=this.getSingleColumnModeFactor(),o=this.getRightGutterSlideOutFactor();return e*this.getBoxShadowAlphaForGutter(t,o)}updateMarkerRowIndices(e){const t={...this.markerRowIndices};if(e.forEach((e=>{t[e]=[]})),e.includes("selection")&&this.getSelectedShas().forEach((e=>{void 0!==this.processedGraphRowBySha[e]?.rowIndex&&t.selection.push(this.processedGraphRowBySha[e].rowIndex)})),e.includes("highlights")){const e=this.state?.highlightedShas||this.props.highlightedShas||{};Object.keys(e).forEach((e=>{void 0!==this.processedGraphRowBySha[e]?.rowIndex&&t.highlights.push(this.processedGraphRowBySha[e].rowIndex)}))}this.markerRowIndices=t}getMarkerColors(){const e=getComputedStyle(document.documentElement),t={};return Object.values(x.Qh).forEach((o=>{const n=e.getPropertyValue(o.colorCssKey).trim();n&&(t[o.type]=n)})),t}initializeGraphZones(e,t,o){this.graphZonesByType={};const n=[];let r=0;t.forEach(((t,o)=>{const c=e?e[t]:void 0,d=x.qi[t],h=c?.width?c.width:d.minimumWidth,u={...d,type:t,currentWidth:h,preferredWidth:h,isHidden:c?.isHidden||!1,mode:c?.mode,order:d.isCustomizable&&void 0!==c?.order?c?.order:o};c?.isHidden||(r+=u.currentWidth),t===x.Wm&&(u.contentWidth=this.getCommitZoneContentWidth(),u.minimumWidth=this.graphZoneModeConstants.COMMIT_ZONE_VIEWPORT_WIDTH_MIN,u.showIconWidth=this.graphZoneModeConstants.COMMIT_ZONE_SHOW_ICON_WIDTH,this.maxColumns>0&&(u.maximumWidth=u.contentWidth)),this.graphZonesByType[t]=u,u?.isHidden||n.push(u)}));const c=n[n.length-1];if(c){const e=(0,Q.Zg)(this.props.cssVariables,!0),t=c.minimumWidth+e;(null==c.maximumWidth||c.maximumWidth>=t)&&(c.minimumWidth=t,null!=c.showIconWidth&&(c.showIconWidth+=e),n[n.length-1]=c)}for(n.forEach((e=>{const t=(0,Q.C_)(e,n,e.currentWidth);t!==e.currentWidth&&(r-=e.currentWidth,e.currentWidth=t,r+=t)}));r>o;){const e=(0,Q.tC)(n);if(!e)break;const t=e.currentWidth,c=r-o,d=Math.max(e.minimumWidth,t-c),h=t-d;this.graphZonesByType[e.type].currentWidth=d,r-=h}if(r<o){const e=t[t.length-1],r=o-(0,Q.iM)(n,e);this.graphZonesByType[e].currentWidth=r}return n}maybeSortGraphZoneOrderingFromSettings(e){this.graphZoneOrdering.every((t=>void 0!==e?.[t]?.order))&&this.graphZoneOrdering.sort(((t,o)=>e[t].order<e[o].order?-1:e[t].order>e[o].order?1:0))}updateZonesFromSettings(e){let t=!1;this.graphZoneOrdering.forEach(((o,n)=>{const r=this.graphZonesByType[o],c=e?.[r.type];c&&(c.isHidden!==r.isHidden&&(t=!0,r.type!==x.WD||c.isHidden||this.updateRowStatsConstraints()),r.isHidden=c.isHidden,r.order=r.isCustomizable&&void 0!==c?.order?c?.order:n,r.mode=c.mode,r.preferredWidth=c.width??r.preferredWidth,r.currentWidth=r.preferredWidth)})),t&&this.graphZoneOrdering.forEach((e=>{const t=this.graphZonesByType[e];t.currentWidth=t.minimumWidth}))}getEdgeColumnMaxes(e){let t=0;const o=this.processedGraphRowBySha[e]?.edges||{};return Object.keys(o).forEach((e=>{t=Math.max(t,parseInt(e,10))})),t}getEndingAndPassThroughEdgesByColumnFromPrevRow(e,t){const o={};let n,r,c,d;return Object.keys(t).forEach((h=>{n=t[h],r=n.passThrough,c=n.starting,d=r&&!S(r.type)?r:c&&!S(c.type)?c:r||c||void 0,d&&(d.parentSha===e.sha?o[h]={ending:d}:o[h]={passThrough:d})})),o}getFinalEdgeStateForGraphAndRow(e,t){const o=this.getEndingAndPassThroughEdgesByColumnFromPrevRow(e,t),n=this.getStartingEdgesByColumn(e);let r;return Object.keys(n).forEach((e=>{o[e]||(o[e]={ending:void 0,passThrough:void 0,starting:void 0}),r=o[e],r.starting=n[e]})),o}loadEdgesBySha(){this.maxColumns=0,this.orderedGraphRows.forEach(((e,t)=>{const o=this.orderedGraphRows[t-1],n=o&&this.processedGraphRowBySha[o.sha]?.edges?this.processedGraphRowBySha[o.sha].edges:{};this.processedGraphRowBySha[e.sha].edges=this.getFinalEdgeStateForGraphAndRow(e,n);const r=this.getEdgeColumnMaxes(e.sha);this.processedGraphRowBySha[e.sha].edgeColumnMaxes=r,r>this.maxColumns&&(this.maxColumns=r)}))}processRows(e){this.loadRowsbySha(e||[]),this.loadEdgesBySha()}getStartingEdgesByColumn(e){const t={},o=e.parents;if(o.length>0){const n=e.type,r=this.processedGraphRowBySha[e.sha]?.column;void 0!==r&&(t[r]={parentSha:o[0],type:n});for(let e=1;e<o.length;e+=1){const r=o[e],c=this.processedGraphRowBySha[r]?.column;void 0!==c&&(t[c]={parentSha:r,type:n})}}return t}formatCommitDateTimeCallback=(e,t)=>this.props.formatCommitDateTime?this.props.formatCommitDateTime(e,t):function(e,t,o,n=!0){const r=`${o??""}:${t=t??void 0}`;let c=z.get(r);if(null==c){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=P.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}const o={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll($))if(null!=t)for(const e in t){const n=t[e];if(null!=n)switch(e){case"year":o.year=4===n.length?"numeric":"2-digit";break;case"month":switch(n.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":o.day="DD"===n?"2-digit":"numeric";break;case"weekday":switch(n.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===n.length?"2-digit":"numeric",o.hour12="hh"===n||"h"===n;break;case"minute":o.minute=2===n.length?"2-digit":"numeric";break;case"second":o.second=2===n.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===n.length?"long":"short"}}return o}(t);let d;d=null==o?G:"system"===o?void 0:[o],c=new Intl.DateTimeFormat(d,e),n&&z.set(r,c)}if(null==t||P.test(t))return c.format(e);function d(e){const t=`${o??""}:time:${e}`;let r=z.get(t);if(null==r){const c={localeMatcher:"best fit",timeStyle:e};let d;d=null==o?G:"system"===o?void 0:[o],r=new Intl.DateTimeFormat(d,c),n&&z.set(t,r)}return r}const h=c.formatToParts(e);return t.replace($,((t,o,n,r,c,u,p,m,g,v,y,w,x,S,_)=>{if(null!=o)return o.substring(1,o.length-1);for(const t in _){const o=_[t];if(null==o)continue;const n=h.find((e=>e.type===t));if("Do"===o&&"day"===n?.type)return B(Number(n.value));if("a"===o&&"dayPeriod"===n?.type){const t=d("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return` ${(t??n)?.value??""}`}return n?.value??""}return""}))}(e,x.It);formatCommitMessageCallback=e=>this.props.formatCommitMessage?this.props.formatCommitMessage(e):e;formatRefShorthandCallback=(e,t,o,n)=>this.props.formatRefShorthand?this.props.formatRefShorthand(e,t,o,n):e.replace(/\s/g,"");isRefShorthandValidCallback=(e,t,o,n)=>!this.props.isRefShorthandValid||this.props.isRefShorthandValid(e,t,o,n);translateCallback=(e,...t)=>this.props.translate?this.props.translate(e,...t):ee[e]?function(e,t){if(0===t.length)return e;let o=e;return t.forEach(((e,t)=>{const n=new RegExp(`\\{${t}\\}`,"g");o=o.replace(n,e)})),o}(ee[e],t):`${e}`;getIconCallback=e=>this.props.getExternalIcon?this.props.getExternalIcon(e):h().createElement("span",null);onMissingAvatar=(e,t)=>{this.props.onEmailsMissingAvatarUrls&&!this.requestedMissingAvatars[e]&&(this.pendingMissingAvatars[e]=t,this.missingAvatarsTimer&&(clearTimeout(this.missingAvatarsTimer),this.missingAvatarsTimer=void 0),this.missingAvatarsTimer=setTimeout((()=>{const e={...this.pendingMissingAvatars};this.pendingMissingAvatars={};const t=Object.keys(e);if(t.length){for(const e of t)this.requestedMissingAvatars[e]=!0;this.props.onEmailsMissingAvatarUrls?.(e)}}),100))};onMissingRefMetadata=(e,t)=>{if(!this.props.onRefsMissingMetadata||this.requestedMissingRefsMetadata[e])return;const o=this.pendingMissingRefsMetadata[e]||[],n=t.filter((e=>!o.includes(e)));this.pendingMissingRefsMetadata[e]=[...o,...n],this.missingRefsMetadataTimer&&(clearTimeout(this.missingRefsMetadataTimer),this.missingRefsMetadataTimer=void 0),this.missingRefsMetadataTimer=setTimeout((()=>{const e={...this.pendingMissingRefsMetadata};this.pendingMissingRefsMetadata={};const t=Object.keys(e);if(t.length){for(const e of t)this.requestedMissingRefsMetadata[e]=!0;this.props.onRefsMissingMetadata?.(e)}}),100)};selectNext(e){const t=this.getSelectedShas(),o=t.length>0?t[t.length-1]:null;let n;if(e&&o){const e=this.processedGraphRowBySha[o];e?.parents?.length&&(n=e.parents[0])}else{const e=o?this.orderedGraphRows.findIndex((e=>e.sha===o)):-1,t=Math.min(e+1,this.orderedGraphRows.length-1);n=this.orderedGraphRows[t]?.sha}n&&this.selectCommits([n],!1,!0)}selectPrevious(e){const t=this.getSelectedShas(),o=t.length>0?t[0]:null;let n;if(e&&o){const e=this.childrenBySha[o];if(e?.length)for(let t=0;t<e.length;t+=1)if(t===e.length-1)n=e[t];else if(this.processedGraphRowBySha[e[t]]?.type!==w.kP){n=e[t];break}}else{const e=o?this.orderedGraphRows.findIndex((e=>e.sha===o)):-1,t=Math.max(-1,e-1);n=this.orderedGraphRows[t]?.sha,t<0&&(n=this.orderedGraphRows[0]?.sha)}n&&this.selectCommits([n],!1,!0)}selectHead(e){e&&this.headUpstreamSha?this.selectCommits([this.headUpstreamSha],!1,!0):this.headSha&&this.selectCommits([this.headSha],!1,!0)}getAvailableColumnAndUseIt(){let e=0;for(;this.columnsUsed[e];)e+=1;return this.columnsUsed[e]=!0,e}getColumns(e){this.hasMergeNodeChildBySha[e.sha]&&delete this.hasMergeNodeChildBySha[e.sha];const t=e.parents||[],o=this.columnsToFreeWhenFound[e.sha];if(void 0!==o)for(let e=0;e<o.length;e+=1)delete this.columnsUsed[o[e]];let n=0;const r=this.reserverInfoBySha[e.sha];let c,d;void 0!==r?.column?(n=r.column,delete this.reserverInfoBySha[e.sha]):n=this.getAvailableColumnAndUseIt();for(let o=0;o<t.length;o+=1)if(c=t[o],e.type===w.lH&&(this.hasMergeNodeChildBySha[c]=!0),d=this.reserverInfoBySha[c],0===o&&void 0!==d?.column&&d?.column!==n){const t=this.columnsToFreeWhenFound[c]||[],o=d?.type===w.kP&&e.type!==w.kP&&r?.newestDate>d?.newestDate;(d?.column>n||o)&&!this.hasMergeNodeChildBySha[c]?(this.reserverInfoBySha[c]={type:e.type,newestDate:r?.newestDate,column:n},t.push(d.column)):t.push(n),this.columnsToFreeWhenFound[c]=t}else void 0===d?.column&&(this.reserverInfoBySha[c]={type:e.type,newestDate:r?.column===n?r?.newestDate:e.date,column:0===o?n:this.getAvailableColumnAndUseIt()});return n}getFilteredHeadsForGraphRow(e,t){return e.heads.filter((e=>e.isCurrentHead||(t?void 0!==this.includeOnlyRefsById[(0,Q.bY)(te.V.HEAD,e)]:!this.excludeByType.heads&&void 0===this.excludeRefsById[(0,Q.bY)(te.V.HEAD,e)])))}getFilteredRemotesForGraphRow(e,t){return e.remotes.filter((e=>t?void 0!==this.includeOnlyRefsById[(0,Q.bY)(te.V.REMOTE,e)]||!e.owner||void 0!==this.includeOnlyRemotesByName[e.owner]:(!this.excludeByType.remotes||e.owner&&this.downstreamsByUpstream[`${e.owner}/${e.name}`]?.length>0)&&void 0===this.excludeRefsById[(0,Q.bY)(te.V.REMOTE,e)]&&(!e.owner||void 0===this.excludeRemotesByName[e.owner])))}getFilteredTagsForGraphRow(e,t,o){const n=t&&Object.values(this.includeOnlyRefsById).some((e=>e.type===te.V.TAG)),r=t&&(this.getFilteredHeadsForGraphRow(e,t).length>0||this.getFilteredRemotesForGraphRow(e,t).length>0);return e.tags.filter((e=>n?void 0!==this.includeOnlyRefsById[(0,Q.bY)(te.V.TAG,e)]:!this.excludeByType.tags&&void 0===this.excludeRefsById[(0,Q.bY)(te.V.TAG,e)]&&(!t||r||o)))}loadRowsbySha(e){this.orderedGraphRows=[],this.processedGraphRowBySha={},this.childrenBySha={},this.reserverInfoBySha={},this.columnsToFreeWhenFound={},this.columnsUsed={};const t=new Map,o={},n=[],r=[];this.branchUpstreamRowIndices=[];const c=[],d=[],h=[],u=[],p={};if((0,Q.Kk)(this.workDirStats)&&e.length>0&&!(0,Q.H1)(e[0].type)){const t=(0,Q.DN)(e),o={sha:w.ch,parents:t?[t]:[],author:"",email:"",date:(new Date).getTime(),message:this.translateCallback("Graph-WorkInProgress"),type:w.ch,heads:[],remotes:[],tags:[]};this.workDirStats.context&&(o.contexts={row:this.workDirStats.context}),e.unshift(o)}else!(0,Q.Kk)(this.workDirStats)&&e.length>0&&(0,Q.H1)(e[0].type)&&e.shift();const m=Object.keys(this.includeOnlyRefsById).length>0;e.forEach(((e,g)=>{const v=this.childrenBySha[e.sha]?.length>0,y=e.heads?.length>0?this.getFilteredHeadsForGraphRow(e,m):[],x=e.remotes?.length>0?this.getFilteredRemotesForGraphRow(e,m):[],S=e.tags?.length>0?this.getFilteredTagsForGraphRow(e,m,Boolean(p[e.sha]||v)):[],_=e.parents?.length>0?e.parents.filter((e=>!o[e])):[],T=y.length>0||x.length>0||S.length>0,E=y.length>0||x.length>0;if(e.type!==w.o$&&e.type!==w.lH||p[e.sha]){if(e.type===w.kP&&this.excludeByType.stashes&&(o[e.sha]=!0),!o[e.sha]&&_.length>0){let e;for(e of _)p[e]=!0}}else e.type!==w.o$&&e.type!==w.lH||p[e.sha]||T||v||(o[e.sha]=!0);const O=o[e.sha],A=new J.A(this,{...e,heads:y,remotes:x,tags:S,parents:_},O?0:this.getColumns(e));if(!O){let o;const p=t.get(e.sha);p?.length&&(p.sort(((e,t)=>{if(e.parentIndexScore<t.parentIndexScore)return-1;if(e.parentIndexScore>t.parentIndexScore)return 1;if(e.parentIndexScore===t.parentIndexScore){if(e.rowEntered<t.rowEntered)return-1;if(e.rowEntered>t.rowEntered)return 1}return 0})),o=p[0],A.childRefs={heads:[...o?.heads||[]],remotes:[...o?.remotes||[]],tags:[...o?.tags||[]]},t.delete(e.sha));for(let n=0;n<_.length;n+=1){const r=_[n];this.childrenBySha[r]||(this.childrenBySha[r]=[]),this.childrenBySha[r].push(e.sha);let c=t.get(r);(E||o)&&void 0===c&&(c=[],t.set(r,c)),E?c?.unshift({sha:e.sha,parentIndexScore:n,rowEntered:g,heads:y,remotes:x,tags:S}):o&&c?.unshift({...o,parentIndexScore:n,rowEntered:g})}const m=this.orderedGraphRows.length;if(A.rowIndex=m,y.length>0&&(c.push(m),y.some((e=>e.isCurrentHead))&&(this.headSha=A.sha,n.push(m))),x.length>0){d.push(m);for(const e of x)e.current&&(r.push(m),this.headUpstreamSha=A.sha),this.downstreamsByUpstream[`${e.owner}/${e.name}`]?.length>0&&this.branchUpstreamRowIndices.push(m)}S.length>0&&h.push(m),e.type===w.kP&&u.push(m),this.orderedGraphRows.push(A)}this.processedGraphRowBySha[e.sha]=A})),this.markerRowIndices={...this.markerRowIndices,head:n,upstream:r,localBranches:c,remoteBranches:d,tags:h,stashes:u},clearInterval(this.timelinesInterval),this.updateTimelines(),this.timelinesInterval=setInterval((()=>{this.clearTimelines(),this.updateTimelines(),this.setState({processedRows:[...this.orderedGraphRows]})}),9e5),this.onGraphVisibleRowsUpdated()}updateRowStatsConstraints(){this.rowStatsConstraints=(0,Q.L1)(null!=this.rowsStats?Object.values(this.rowsStats).map((e=>e.additions+e.deletions)):[])}updateTimelines(){const e=(0,Q.yF)();Object.values(e).forEach((e=>{e.forEach((e=>{const{date:t}=e,o=this.orderedGraphRows.find((e=>e.date<t));o&&this.processedGraphRowBySha[o.sha]&&(this.processedGraphRowBySha[o.sha].timeLineEntry=e)}))}))}clearTimelines(){Object.keys(this.processedGraphRowBySha).forEach((e=>{this.processedGraphRowBySha[e].timeLineEntry&&delete this.processedGraphRowBySha[e].timeLineEntry}))}cleanupSelections(){const e=Object.keys(this.isSelectedBySha);for(let t=0;t<e.length;t+=1){const o=e[t];this.processedGraphRowBySha[o]||delete this.isSelectedBySha[o]}}getColumnColorByColumn(e){const t=this.getNumGraphColumns(e),o=this.maxColumns>t?this.maxColumns:t,n={};for(let c=0;c<=o;c+=1)if(c<t){const t=e[(0,N.a2)(c)];n[c]="rgba"===(r=v(t)).type?`rgba(${r.r}, ${r.g}, ${r.b}, ${Number(r.a.toFixed(2))})`:`hsla(${r.h}, ${(100*r.s).toFixed(2)}%, ${(100*r.l).toFixed(2)}%, ${Number(r.a.toFixed(2))})`}else{const e=n[c%t];n[c]=e}var r;return n}getNumGraphColumns(e){const t=e[A.i],o=Number.parseInt(t,x.uK);return Number.isNaN(o)?x.uK:o}expandLastZoneMinWidthForScrollbar(e){const t=e[e.length-1]?.type;if(!t)return;const o=(0,Q.Zg)(this.props.cssVariables,!0),n=x.qi[t].minimumWidth+o,r=this.graphZonesByType[t];if(!r||null!=r.maximumWidth&&n>r.maximumWidth)return;r.minimumWidth=n;const c=x.qi[t].showIconWidth;null!=c&&(r.showIconWidth=c+o),r.currentWidth<r.minimumWidth&&(r.currentWidth=r.minimumWidth),r.preferredWidth<r.minimumWidth&&(r.preferredWidth=r.minimumWidth)}ensureZoneWidthsMatchGraphWidth(e,t){const o=(0,Q.iM)(e);o>t&&this.shrinkZoneWidthsToFitWidth(e,t),o<t&&this.expandZoneWidthsToFitWidth(e,t)}shrinkZoneWidthsToFitWidth(e,t,o){let n=(0,Q.iM)(e);for(;n>t;){const r=(0,Q.tC)(e,o);if(!r)break;const c=(0,Q.iM)(e,r.type);if(c+r.currentWidth>t){const o=(0,Q.C_)(r,e,t-c);this.updateWidthByZone(o,r.type)}n=(0,Q.iM)(e)}}getOrderedActiveGraphZones(){return this.graphZoneOrdering.sort(((e,t)=>this.graphZonesByType[e].order-this.graphZonesByType[t].order)).filter((e=>!this.graphZonesByType[e].isHidden)).map((e=>this.graphZonesByType[e]))}expandZoneWidthsToFitWidth(e,t,o){let n=(0,Q.iM)(e);for(;n<t;){const r=(0,Q.nv)(e,o);if(!r)break;const c=(0,Q.iM)(e,r.type),d=r.maximumWidth?Math.min(r.maximumWidth,r.preferredWidth||1/0):r.preferredWidth||0;if(c+r.currentWidth<t){let o=t-c;!(0,Q.SH)(r.type,e)&&o>d&&(o=d),o=(0,Q.C_)(r,e,o),this.updateWidthByZone(o,r.type)}n=(0,Q.iM)(e)}}onGraphHeaderRowMouseDown=e=>{1===e.button&&e.preventDefault()};onToggleRefNodesShown=(e,t,o,n)=>{t.forEach((e=>{o&&this.excludeRefsById[e.id]?delete this.excludeRefsById[e.id]:o||(this.excludeRefsById[e.id]=e)})),this.excludeRemotesByName=this.getExcludeRemotesByName(),this.props.onToggleRefsVisibilityClick&&this.props.onToggleRefsVisibilityClick(e,t,o,n?this.processedGraphRowBySha[n]:void 0),this.processRows(this.props.graphRows),this.setState({processedRows:[...this.orderedGraphRows]})};cleanEdgeCaches(){ge={},fe={},ue={},de={},W={}}onZoneEnter=(e,t,o,n)=>{t!==x.jZ&&(o&&n&&this.onRefNodeUnhovered(e,o,n),this.onRefZoneUnhovered())};adjustResizedGraphZone(e,t,o,n){if(o?.width){const r=t.currentWidth;this.updateWidthByZone(o.width,t.type,n);const c=(0,Q.mb)(t.type,e),d=this.graphZonesByType[t.type];r>d.currentWidth&&this.expandZoneWidthsToFitWidth(e,this.graphWidth,c+1),r<d.currentWidth&&this.shrinkZoneWidthsToFitWidth(e,this.graphWidth,c-1)}}dimRowsOfSelectedCommit(e){this.setState({dimRowsOfSelectedCommit:e})}onGraphContainerBlurred=(e,t,o)=>{setTimeout((()=>{t&&o&&this.onRefNodeUnhovered(e,t,o),this.onRefZoneUnhovered()}),250)};onGraphContainerMouseEnter=e=>{this.props.onGraphMouseEnter&&this.props.onGraphMouseEnter(e)};onGraphContainerMouseLeave=e=>{this.props.onGraphMouseLeave&&this.props.onGraphMouseLeave(e)};onGraphResized=(0,Q.h)(((e,t)=>{const o=Math.floor(t),n=Math.floor(e),r=o!==this.graphHeight,c=n!==this.graphWidth,d={};if(r&&(this.graphHeight=o,d.height=o),c){this.graphWidth=n;const e=this.getOrderedActiveGraphZones();this.ensureZoneWidthsMatchGraphWidth(e,this.graphWidth),d.width=this.graphWidth,d.graphZones=e}(r||c)&&(this.setState(d),r&&this.onGraphVisibleRowsUpdatedThrottled(),this.props.onGraphResized&&this.props.onGraphResized(this.graphWidth,this.graphHeight))}));onGraphVisibleRowsUpdated(){if(!this.props.onGraphVisibleRowsChanged||!this.orderedGraphRows||!this.orderedGraphRows.length)return;const{top:e,bottom:t}=this.getTopAndBottomVisibleRowIndex();-1===e||-1===t||e>=this.orderedGraphRows.length||t>=this.orderedGraphRows.length||e===this.lastTopVisibleRowIndex&&t===this.lastBottomVisibleRowIndex||(this.lastTopVisibleRowIndex=e,this.lastBottomVisibleRowIndex=t,this.props.onGraphVisibleRowsChanged&&this.props.onGraphVisibleRowsChanged(this.orderedGraphRows[e],this.orderedGraphRows[t]))}getCurrentPlatform(){return this.props.platform||"darwin"}isMacOSPlatform(){return"darwin"===this.getCurrentPlatform()}getGraphColumnSettingFromZoneType(e){return{width:e.preferredWidth||0,isHidden:e.isHidden,mode:e.mode,order:e.order}}decorateWithHelmet=(e,t,o)=>{const n=(0,N.M)(t);return h().createElement(h().Fragment,null,h().createElement("style",{nonce:o},n),h().createElement("div",{className:"gk-graph"},e))};render(){const{columnsSettings:e,customFooterRow:t,isInUnsupportedRebase:o,isCommitting:n,repoPath:r,nonce:d,wipMessageEditable:u}=this.props,{avatarUrlByEmail:p,columnColorByColumn:m,contexts:g,createRefFormData:v,cssVariablesWithDefaults:y,currentlyHoveredCommitSha:w,dimMergeCommits:S,dimRowsOfSelectedCommit:_,enableShowHideRefsOptions:T,highlightRowsOnRefHover:E,showGhostRefsOnRowHover:O,showRemoteNamesOnRefs:A,enabledRefMetadataTypes:N,enabledScrollMarkerTypes:$,graphCommitDescDisplayMode:P,graphZones:z,hasMoreCommits:G,height:F,highlightedShas:B,hoveredRefGroup:W,hoveredRefZoneSha:U,themeOpacityFactor:j,isContainerWindowFocused:Z,isLoadingRows:q,rowsStatsLoading:K,numGraphColumns:Y,pendingCommitMessageSummary:X,processedRows:J,refMetadataById:ee,useAuthorInitialsForAvatars:te,scrollToAlignment:oe,scrollToIndex:ne,scrollTop:re,scrollLeft:ie,shaLength:se,width:ae,workDirStats:le}=this.state,ce=c()("flex","graph-container"),de=(0,Q.uM)(J),he=(ue=e=>de(e),({cellCache:e,cellRenderer:t,columnSizeAndPositionManager:o,columnStartIndex:n,columnStopIndex:r,deferredMeasurementCache:c,horizontalOffsetAdjustment:d,isScrolling:h,parent:u,rowSizeAndPositionManager:p,rowStartIndex:m,rowStopIndex:g,styleCache:v,verticalOffsetAdjustment:y,visibleColumnIndices:w,visibleRowIndices:x})=>{const S=[],_=e,T=o.areOffsetsAdjusted()||p.areOffsetsAdjusted(),E=!h&&!T;for(let e=m;e<=g;e+=1){const m=p.getSizeAndPositionOfCell(e);for(let p=n;p<=r;p+=1){const n=o.getSizeAndPositionOfCell(p),r=p>=w.start&&p<=w.stop&&e>=x.start&&e<=x.stop,g=`${e}-${p}`;let T;E&&v[g]?T=v[g]:c&&!c.has(e,p)?T={height:"auto",left:0,position:"absolute",top:0,width:"auto"}:(T={height:m.size,left:n.offset+d,position:"absolute",top:m.offset+y,width:n.size},v[g]=T);const O={columnIndex:p,isScrolling:h,isVisible:r,key:g,parent:u,rowIndex:e,style:T};let A;if(!h||d||y)A=t(O);else{const o=ue(e);_[g]&&_[g].realKeyForCell===o||(_[g]={realKeyForCell:o,cell:t(O)}),A=_[g].cell}null!=A&&S.push(A)}}return S});var ue;const pe=this.getLeftGutterWidth(),fe=this.getRightGutterWidth(),me=this.getRightGutterBoxShadowAlpha(j),ge=this.getLeftGutterBoxShadowAlpha(j),be=this.getNodeOffsetByColumn(),ve=this.getNodeOpacityByColumn(),ye=(0,Q.mb)(x.jZ,z),we=(0,Q.mb)(x.Wm,z),Ce=-1!==ye&&-1!==we&&we-ye==1,xe=!W,Se={avatarUrlByEmail:p,createRefFormData:v,dimMergeCommits:S,dimRowsOfSelectedCommit:_,enableShowHideRefsOptions:T,highlightRowsOnRefHover:E,showGhostRefsOnRowHover:O,showRemoteNamesOnRefs:A,enabledRefMetadataTypes:N,enabledScrollMarkerTypes:$,isInUnsupportedRebase:o,isCommitting:n||!1,isContainerWindowFocused:Z,pendingCommitMessageSummary:X,workDirStats:le,repoPath:r,columnColorByColumn:m,currentlyHoveredCommitSha:w,cssVariables:y,graphCommitDescDisplayMode:P,graphZoneModeConstants:this.graphZoneModeConstants,graphZones:z,hasMoreCommits:G,height:F,highlightedShas:B,hoveredRefGroup:W,hoveredRefZoneSha:U,includeOnlyRefsById:this.includeOnlyRefsById,includeOnlyRemotesByName:this.includeOnlyRemotesByName,isLoadingRows:q,isSelectedBySha:this.isSelectedBySha,leftGutterBoxShadowAlpha:ge,leftGutterWidth:pe,nodeOffsetByColumn:be,nodeOpacityByColumn:ve,nonce:d,numGraphColumns:Y,processedRows:J,processedGraphRowBySha:this.processedGraphRowBySha,refMetadataById:ee,rightGutterBoxShadowAlpha:me,rightGutterWidth:fe,rowStatsConstraints:this.rowStatsConstraints,rowsStats:this.rowsStats,useAuthorInitialsForAvatars:te,scrollToAlignment:oe,scrollLeft:ie,scrollTop:re,shaLength:se,shouldShowRefLine:Ce,width:ae,wipMessageEditable:u||!1,onMissingAvatar:this.onMissingAvatar,onMissingRefMetadata:this.onMissingRefMetadata,clearCurrentlyHoveredGraphCommit:this.onClearCurrentlyHoveredGraphCommit,setAsCurrentlyHoveredGraphCommit:this.onCurrentlyHoveredGraphCommit,onClickRef:this.onClickRef,onClickCommit:this.onClickCommit,onDoubleClickCommit:this.onDoubleClickCommit,onBlurWipNodeInput:this.onBlurWipNodeInput,onFocusWipNodeInput:this.onFocusWipNodeInput,onDoubleClickRef:this.onDoubleClickRef,onMessageChange:this.onMessageChange,onRefBeginDrag:this.onRefBeginDrag,onRefCanDrag:this.onRefCanDrag,onRefCanDrop:this.onRefCanDrop,onRefCreate:this.onRefCreate,onRefCreateCancel:this.onRefCreateCancel,onRefCreateContextMenu:this.onRefCreateContextMenu,onRefDragEnter:this.onRefDragEnter,onRefDragLeave:this.onRefDragLeave,onRefDrop:this.onRefDrop,onRefEndDrag:this.onRefEndDrag,onRefNodeHovered:this.onRefNodeHovered,onRefNodeUnhovered:this.onRefNodeUnhovered,onRefShorthandChange:this.onRefShorthandChange,onRefZoneHovered:this.onRefZoneHovered,onRefZoneUnhovered:this.onRefZoneUnhovered,onToggleRefNodesShown:this.onToggleRefNodesShown,onCommitContextMenu:this.onCommitContextMenu,onShowContextMenuForGroupedRef:this.onRefContextMenu,getExternalIcon:this.getIconCallback,formatCommitDateTime:this.formatCommitDateTimeCallback,formatRefShorthand:this.formatRefShorthandCallback,isRefShorthandValid:this.isRefShorthandValidCallback,translate:this.translateCallback},_e={[x.jZ]:gs(Se,de),[x.Wm]:Vi(Se,de),[x.KE]:Ii(Se,de),[x.GF]:ni(Se,de),[x.PL]:ri(Se,de),[x.av]:Mi(Se,de),[x.WD]:ei(Se,de),[x.Gn]:bs(Se,de)},Te=z.map(((e,o)=>h().createElement(gn,{branchUpstreamRowIndices:this.branchUpstreamRowIndices,cellRenderersByIds:_e,columnIndex:o,customFooterRow:t,enabledScrollMarkerTypes:$,enableResizer:xe,getExternalIcon:this.getIconCallback,getKeyForCell:de,graphHeight:F-x.rl,graphWidth:ae,graphZones:z,graphZoneType:e.type,hasMoreCommits:G,horizontalScrollHeight:this.getHorizontalScrollHeight(e.type,y),isLoadingRows:q,key:`${e.type}ColumnContainer`,markerColors:this.getMarkerColors(),markerRowIndices:this.markerRowIndices,onResize:this.onGraphZoneResize,onResizeEnd:this.onGraphZoneResizeEnd,onScroll:this.onScrollForZone,onScrollToRowCausedUpdate:e.type===x.jZ?this.onScrollToRowCausedUpdateForRefZone:void 0,onZoneEnter:t=>this.onZoneEnter(t,e.type,W,U),rowCount:J.length,scrollLeft:ie,scrollToAlignment:e.type===x.jZ?oe:void 0,scrollToIndex:e.type===x.jZ?ne:void 0,scrollTop:re,smartCellRangeRenderer:he,translate:this.translateCallback,verticalScrollWidth:this.getVerticalScrollWidth(e.type,y)}))),Re=this.graphContainerRef?.current&&h().createElement(Ur,{columnsSettings:e,dragAppendToContainer:this.graphContainerRef?.current,enableResizer:xe,enableShowHideRefsOptions:T,excludeRefsById:this.excludeRefsById,getExternalIcon:this.getIconCallback,graphZones:z,headerContext:g?.header,height:F,includeOnlyRefsById:this.includeOnlyRefsById,onColumnReOrdered:this.onGraphColumnReOrdered,onFilterColumnClick:this.onFilterColumnClick,onGraphZoneResize:this.onGraphZoneResize,onGraphZoneResizeEnd:this.onGraphZoneResizeEnd,onPopupGraphHeaderContextMenu:this.onPopupGraphHeaderContextMenu,onSettingsClick:this.onSettingsClick,onToggleRefNodesShown:this.onToggleRefNodesShown,repoPath:r,rowsStatsLoading:K,settingsContext:g?.settings,showRemoteNamesOnRefs:A,translate:this.translateCallback,width:ae}),ke=h().createElement("div",{className:"graph-component","data-vscode-context":(0,Q.q3)(g?.graph),onBlur:e=>this.onGraphContainerBlurred(e,W,U),onMouseEnter:this.onGraphContainerMouseEnter,onMouseLeave:this.onGraphContainerMouseLeave,ref:this.graphContainerRef,style:{height:"100%",width:"100%",position:"absolute"},tabIndex:-1},Re,h().createElement("div",{className:B&&Object.keys(B).length?c()(ce,"graph-highlighted"):ce,id:"graph-container",onKeyDown:this.onKeyDown,onMouseDown:this.onGraphHeaderRowMouseDown,style:{height:F,width:ae},tabIndex:-1},Te));return this.decorateWithHelmet(ke,y,d)}}var vs=fs},7154:(e,t,o)=>{o.d(t,{Z:()=>d});var n=o(6689),r=o.n(n),c=o(5191);class s extends r().PureComponent{horizontalScrollRef=r().createRef();scrollabbleContentRef=r().createRef();verticalScrollRef=r().createRef();outerHorizontalScrollRef=r().createRef();updateScrollbarValues(e,t){this.horizontalScrollRef?.current&&(this.horizontalScrollRef.current.scrollLeft=e||0),this.verticalScrollRef?.current&&(this.verticalScrollRef.current.scrollTop=t||0)}componentDidUpdate(e){const{scrollLeft:t,scrollTop:o}=this.props;e.scrollLeft===t&&e.scrollTop===o||this.updateScrollbarValues(t,o)}onHorizontalScroll(e){this.props.onScroll&&this.props.onScroll({clientHeight:this.props.height||0,clientWidth:e.target.clientWidth,scrollHeight:this.getAdjustedContentHeight(),scrollLeft:e.target.scrollLeft,scrollTop:this.props.scrollTop||0,scrollWidth:e.target.scrollWidth})}onVerticalScroll(e){this.props.onScroll&&this.props.onScroll({clientHeight:e.target.clientHeight,clientWidth:this.props.width||0,scrollHeight:e.target.scrollHeight,scrollLeft:this.props.scrollLeft||0,scrollTop:e.target.scrollTop,scrollWidth:this.props.contentWidth||0})}onWheel(e){if(!this.props.onScroll||!this.verticalScrollRef.current&&!this.props.forceOnWheel)return;const t=this.props.scrollTop||0;let o=t+e.deltaY;o=o>=0?o:0,o>t&&this.verticalScrollRef?.current&&(0,c.BL)(this.verticalScrollRef.current)&&(o=t),o!==this.props.scrollTop&&this.props.onScroll({clientHeight:this.props.height||0,clientWidth:this.props.width||0,scrollHeight:this.getAdjustedContentHeight(),scrollLeft:this.props.scrollLeft||0,scrollTop:o>=0?o:0,scrollWidth:this.props.contentWidth||0})}componentDidMount(){this.updateScrollbarValues(this.props.scrollLeft,this.props.scrollTop)}hasHorizontalScroll(){const{contentWidth:e,displayHorizontalScrollbar:t,forceHorizontalScrollbar:o,width:n}=this.props;return o||t&&n<e}hasVerticalScroll(){const{displayVerticalScrollbar:e,forceVerticalScrollbar:t,height:o}=this.props;return t||e&&o<this.getAdjustedContentHeight()}getHorizontalScrollbarTickness(){return parseInt(this.outerHorizontalScrollRef.current?.clientHeight,10)||0}getAdjustedContentHeight(){return this.props.contentHeight+this.getHorizontalScrollbarTickness()}adjustScrollWhileDragging(e){const t=this.getAdjustedContentHeight();if(!this.scrollabbleContentRef.current||this.props.height>=t||!this.props.onScroll)return;const o=this.scrollabbleContentRef.current.getBoundingClientRect(),n=e.clientY-o.top,r=Math.abs(t-this.props.height);let c;if(this.props.scrollTop>0&&n<=20){const e=this.props.scrollTop-20;c={clientHeight:o.height,clientWidth:o.width,scrollHeight:r,scrollLeft:this.props.scrollLeft||0,scrollTop:e>0?e:0,scrollWidth:this.props.contentWidth||0}}if(this.props.scrollTop<r&&n>=this.props.height-20){const e=this.props.scrollTop+20;c={clientHeight:o.height,clientWidth:o.width,scrollHeight:r,scrollLeft:this.props.scrollLeft||0,scrollTop:e<r?e:r,scrollWidth:this.props.contentWidth||0}}c&&this.props.onScroll(c)}render(){const{children:e,contentHeight:t,contentWidth:o,forceHorizontalScrollbar:n,forceVerticalScrollbar:c,height:d,width:h}=this.props,u=this.hasVerticalScroll(),p=this.hasHorizontalScroll(),m=p&&r().createElement("div",{className:"scrollbar-outer horizontal",ref:this.outerHorizontalScrollRef,style:{top:`calc(${d}px - var(--scrollable-scrollbar-thickness))`,width:h}},r().createElement("div",{className:"scrollbar-inner horizontal_scrollbar",onScroll:e=>this.onHorizontalScroll(e),ref:this.horizontalScrollRef,style:{overflowX:n?"scroll":"auto",width:u?`calc(${h}px - var(--scrollable-scrollbar-thickness))`:h}},r().createElement("div",{style:{height:"1px",width:o}}))),g=u&&r().createElement("div",{className:"scrollbar-outer vertical",style:{height:d}},r().createElement("div",{className:"scrollbar-inner vertical_scrollbar",onScroll:e=>this.onVerticalScroll(e),ref:this.verticalScrollRef,style:{overflowY:c?"scroll":"auto",height:p?`calc(${d}px - var(--scrollable-scrollbar-thickness))`:d}},r().createElement("div",{style:{height:`calc(${t}px + var(--scrollable-scrollbar-thickness))`,width:"1px"}})));return r().createElement("div",{className:"scrollbar-container",onWheelCapture:e=>this.onWheel(e)},r().createElement("div",{className:"scrollable-content",onDragOverCapture:e=>this.adjustScrollWhileDragging(e),ref:this.scrollabbleContentRef},e),m,g)}}var d=s},827:(e,t,o)=>{o.d(t,{Gu:()=>p,S7:()=>r,br:()=>d,ch:()=>u,kP:()=>h,lH:()=>c,o$:()=>n});const n="commit-node",r="merge-conflict-node",c="merge-node",d="unsupported-rebase-warning-node",h="stash-node",u="work-dir-changes";var p=(e=>(e.RowEntry="rowEntry",e.Tooltip="tooltip",e))(p||{})},8289:()=>{},376:(e,t,o)=>{o.d(t,{C:()=>r,i:()=>n});const n="--num-columns-supported",r={"--graph-row-height":"22px","--font-default":"'Open Sans', Arial, sans-serif !important","--font-monospace":"'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace","--font-size":"62.5%","--fs-1":"1rem","--fs-2":"1.2rem","--fs-3":"1.4rem","--fs-4":"1.6rem","--fs-5":"1.8rem","--fs-6":"2rem","--fs-7":"2.4rem","--button-xs-padding-y":".15rem","--button-xs-padding-x":".25rem","--button-small-padding-y":".25rem","--button-small-padding-x":".5rem","--button-medium-padding-y":".5rem","--button-medium-padding-x":".75rem","--button-large-padding-y":"1rem","--button-large-padding-x":"1.25rem","--button-radius":".2rem","--input-radius":"3px","--about-modal-bg-color":"#e2e4e9","--about-modal-width":"650px","--label__purple-color-f25":"rgba(197,23,182,0.25)","--registration-modal-width":"400px","--file-history-header-height":"35px","--shop-modal-width":"95vw","--shop-modal-height":"95vh","--scrollable-scrollbar-thickness":"14px","--mini-commit-col-left-width":"30px","--mini-commit-col-middle-padding":"6px","--mini-commit-col-right-width":"56px","--fuzzy-finder-repo-color":"rgba(46,206,157,0.1)","--fuzzy-finder-checkout-color":"rgba(6,105,247,0.1)","--fuzzy-finder-history-color":"rgba(197,23,182,0.1)","--handle-width":"7px","--shadow-color":"rgba(0,0,0,0.4)","--graph-color-5-f10":"rgba(205,1,1,0.1)","--graph-color-6-f10":"rgba(242,93,46,0.1)","--graph-color-7-f10":"rgba(242,202,51,0.1)","--graph-color-8-f10":"rgba(123,217,56,0.1)","--graph-color-9-f10":"rgba(46,206,157,0.1)","--graph-color-0-f10":"rgba(21,160,191,0.1)","--graph-color-1-f10":"rgba(6,105,247,0.1)","--graph-color-2-f10":"rgba(142,0,194,0.1)","--graph-color-3-f10":"rgba(197,23,182,0.1)","--graph-color-4-f10":"rgba(217,1,113,0.1)","--graph-color-5-f50":"rgba(205,1,1,0.5)","--graph-color-6-f50":"rgba(242,93,46,0.5)","--graph-color-7-f50":"rgba(242,202,51,0.5)","--graph-color-8-f50":"rgba(123,217,56,0.5)","--graph-color-9-f50":"rgba(46,206,157,0.5)","--graph-color-0-f50":"rgba(21,160,191,0.5)","--graph-color-1-f50":"rgba(6,105,247,0.5)","--graph-color-2-f50":"rgba(142,0,194,0.5)","--graph-color-3-f50":"rgba(197,23,182,0.5)","--graph-color-4-f50":"rgba(217,1,113,0.5)","--axo-orange":"#e75225","--axo-ink":"#141422","--axo-cream":"#f9efc1","--axo-yellow":"#d8c13a","--info-bar-height":"26px","--left-panel-header-height":"60px","--toolbar-height":"48px","--toolbar-border":"1px","--toolbar-item-height":"calc(var(--toolbar-height, 0px) - var(--toolbar-border, 1px))","--expand-detail-panel-transition":"flex-grow 250ms ease-in-out","--conflict-left-color":"rgba(21,160,191,0.25)","--conflict-right-color":"rgba(242,202,51,0.25)","--conflict-output-color":"rgba(197,23,182,0.25)","--graph-color-5-bg50":"#751012","--graph-color-6-bg50":"#873e29","--graph-color-7-bg50":"#87742b","--graph-color-8-bg50":"#4c7c2e","--graph-color-9-bg50":"#257660","--graph-color-0-bg50":"#195f71","--graph-color-1-bg50":"#11448d","--graph-color-2-bg50":"#550f73","--graph-color-3-bg50":"#711b6d","--graph-color-4-bg50":"#7b104a","--graph-color-5-bg45":"#6c1114","--graph-color-6-bg45":"#7c3a28","--graph-color-7-bg45":"#7c6b2a","--graph-color-8-bg45":"#47722c","--graph-color-9-bg45":"#246d5a","--graph-color-0-bg45":"#195969","--graph-color-1-bg45":"#124082","--graph-color-2-bg45":"#4f116b","--graph-color-3-bg45":"#681b65","--graph-color-4-bg45":"#711146","--graph-color-5-bg25":"#48171b","--graph-color-6-bg25":"#522e26","--graph-color-7-bg25":"#524927","--graph-color-8-bg25":"#344d28","--graph-color-9-bg25":"#214a42","--graph-color-0-bg25":"#1a3f4a","--graph-color-1-bg25":"#173158","--graph-color-2-bg25":"#39174b","--graph-color-3-bg25":"#461c48","--graph-color-4-bg25":"#4b1737","--graph-color-5-bg15":"#371a1e","--graph-color-6-bg15":"#3c2725","--graph-color-7-bg15":"#3c3825","--graph-color-8-bg15":"#2a3a26","--graph-color-9-bg15":"#1f3835","--graph-color-0-bg15":"#1b323a","--graph-color-1-bg15":"#192943","--graph-color-2-bg15":"#2d1a3b","--graph-color-3-bg15":"#351d39","--graph-color-4-bg15":"#381a2f","--semi-bold":"500","--bold":"600","--num-columns-supported":"10","--column-0-color":"#15a0bf","--column-1-color":"#0669f7","--column-2-color":"#8e00c2","--column-3-color":"#c517b6","--column-4-color":"#d90171","--column-5-color":"#cd0101","--column-6-color":"#f25d2e","--column-7-color":"#f2ca33","--column-8-color":"#7bd938","--column-9-color":"#2ece9d","--red":"#D9413D","--orange":"#DE9B43","--yellow":"#ECB91C","--green":"#5CB85C","--blue":"#4D88FF","--ltblue":"#5bc0de","--app__bg0":"#1C1E23","--toolbar__bg0":"rgb(42,45,52)","--toolbar__bg1":"rgb(51,55,63)","--toolbar__bg2":"rgb(65,70,80)","--panel__bg0":"rgb(39,42,49)","--panel__bg1":"rgb(50,54,63)","--panel__bg2":"rgb(61,66,77)","--input__bg":"rgba(0,0,0,0.2)","--input-bg-warn-color":"rgba(222,155,67,0.6)","--panel-border":"rgb(19,20,24)","--section-border":"rgba(255,255,255,0.08)","--subtle-border":"rgba(255,255,255,0.04)","--modal-overlay-color":"rgba(0,0,0,.5)","--graph-color-0":"#15a0bf","--graph-color-1":"#0669f7","--graph-color-2":"#8e00c2","--graph-color-3":"#c517b6","--graph-color-4":"#d90171","--graph-color-5":"#cd0101","--graph-color-6":"#f25d2e","--graph-color-7":"#f2ca33","--graph-color-8":"#7bd938","--graph-color-9":"#2ece9d","--text-selected":"#FFFFFF","--text-selected-row":"#FFFFFF","--text-dimmed":"rgba(255,255,255,0.2)","--text-dimmed-selected":"rgba(255,255,255,0.5)","--text-normal":"rgba(255,255,255,0.75)","--text-secondary":"rgba(255,255,255,0.6)","--text-disabled":"rgba(255,255,255,0.4)","--text-accent":"#93A9EC","--text-inverse":"#222222","--text-bright":"#FFFFFF","--btn-text":"rgba(255,255,255,0.75)","--btn-text-hover":"#FFFFFF","--default-border":"rgba(255,255,255,0.75)","--default-bg":"transparent","--default-hover":"transparent","--default-border-hover":"#FFFFFF","--primary-border":"#4D88FF","--primary-bg":"rgba(77,136,255,0.2)","--primary-hover":"rgba(77,136,255,0.6)","--success-border":"#5CB85C","--success-bg":"rgba(92,184,92,0.2)","--success-hover":"rgba(92,184,92,0.6)","--warning-border":"#DE9B43","--warning-bg":"rgba(222,155,67,0.2)","--warning-hover":"rgba(222,155,67,0.6)","--danger-border":"#D9413D","--danger-bg":"rgba(217,65,61,0.2)","--danger-hover":"rgba(217,65,61,0.6)","--hover-row":"rgba(77,136,255,0.1)","--hover-row-border":"none","--danger-row":"rgba(217,65,61,0.6)","--selected-row":"rgba(77,136,255,0.2)","--selected-row-border":"none","--warning-row":"rgba(222,155,67,0.6)","--droppable":"rgba(236,185,28,0.3)","--drop-target":"rgba(92,184,92,0.5)","--input--disabled":"rgba(0,0,0,0.1)","--link-color":"#40c5ec","--link-color-bright":"#40c5ec","--form-control-focus":"#4D88FF","--scroll-thumb-border":"#1C1E23","--scroll-thumb-bg":"rgb(65,70,80)","--scroll-thumb-bg-light":"rgb(111,119,136)","--wip-status":"rgba(77,136,255,0.4)","--card__bg":"rgb(61,66,77)","--card-shadow":"rgba(0,0,0,.2)","--statusbar__warning-bg":"#87742b","--label__yellow-color":"#f2ca33","--label__light-blue-color":"#15a0bf","--label__purple-color":"#c517b6","--filtering":"rgba(77,136,255,0.5)","--soloing":"rgba(222,155,67,0.5)","--checked-out":"rgba(92,184,92,0.3)","--soloed":"rgba(222,155,67,0.3)","--filter-match":"rgba(77,136,255,0.5)","--clone__progress":"rgba(77,136,255,0.7)","--toolbar__prompt":"rgba(77,136,255,0.2)","--verified":"rgba(92,184,92,0.3)","--unverified":"rgba(255,255,255,0.1)","--drop-sort-border":"#5CB85C","--terminal__repo-name-color":"turquoise","--terminal__repo-branch-color":"violet","--terminal__repo-tag-color":"lightcoral","--terminal__repo-upstream-color":"yellowgreen","--terminal__background":"#000000","--terminal__cursor":"#FFFFFF","--terminal__cursorAccent":"#000000","--terminal__foreground":"#FFFFFF","--terminal__selection":"#304676","--terminal__black":"#000000","--terminal__red":"#F24A4A","--terminal__green":"#0DBC79","--terminal__yellow":"#E5E510","--terminal__blue":"#4A98EE","--terminal__magenta":"#E063E0","--terminal__cyan":"#11A8CD","--terminal__white":"#E5E5E5","--terminal__brightBlack":"#686868","--terminal__brightRed":"#FF5656","--terminal__brightGreen":"#23D18B","--terminal__brightYellow":"#F5F543","--terminal__brightBlue":"#51A4FF","--terminal__brightMagenta":"#D670D6","--terminal__brightCyan":"#29B8DB","--terminal__brightWhite":"#E5E5E5","--code-bg":"#1C1E23","--code-foreground":"rgba(255,255,255,0.75)","--code-blame-color-0":"#15a0bf","--code-blame-color-1":"#0669f7","--code-blame-color-2":"#8e00c2","--code-blame-color-3":"#c517b6","--code-blame-color-4":"#d90171","--code-blame-color-5":"#cd0101","--code-blame-color-6":"#f25d2e","--code-blame-color-7":"#f2ca33","--code-blame-color-8":"#7bd938","--code-blame-color-9":"#2ece9d","--added-line":"rgba(92,184,92,0.2)","--deleted-line":"rgba(217,65,61,0.2)","--modified-line":"rgba(0,0,0,0.25)","--conflict-info-color":"#15a0bf","--conflict-left-border-color":"#15a0bf","--conflict-right-border-color":"#f2ca33","--conflict-output-border-color":"#c517b6","--scroll-marker-head-color":"#16c216","--scroll-marker-highlights-color":"#e6e62b","--scroll-marker-local-branches-color":"#ffa500","--scroll-marker-remote-branches-color":"#ffd68b","--scroll-marker-selection-color":"#0821ff","--scroll-marker-stashes-color":"#fb94ff","--scroll-marker-tags-color":"#affcff","--scroll-marker-upstream-color":"#9bff9b","--stats-added-color":"#347d39","--stats-deleted-color":"#c93c37","--stats-files-color":"#e2c08d","--stats-bar-border-radius":"3px","--stats-bar-height":"40%"}},7675:(e,t,o)=>{o.d(t,{Ld:()=>c,M:()=>d,a2:()=>r});var n=o(376);function r(e){return`--column-${e}-color`}function c(e={}){const t={};return Object.keys(e).forEach((o=>{o.includes("--graph-color-")||o.match(/^--column-\d+-color$/)?CSS.supports("color",e[o])&&(t[o]=e[o]):t[o]=e[o]})),function(e={}){return{...n.C,...e}}(t)}function d(e){const t=e||n.C;let o="";const r=Object.keys(t);o+=".gk-graph {\n";for(const e of r)o+=`${e}: ${t[e]};\n`;return o+="}\n",o}},2149:()=>{},3308:(e,t,o)=>{o.d(t,{$0:()=>d,$s:()=>m,An:()=>g,B:()=>Y,B8:()=>F,GF:()=>we,Gn:()=>ge,IX:()=>ce,It:()=>$,KE:()=>ye,LG:()=>E,MQ:()=>pe,NP:()=>w,O5:()=>x,OR:()=>De,Oi:()=>ne,P3:()=>y,PB:()=>Z,PL:()=>Ce,QW:()=>te,Qh:()=>ke,RG:()=>Te,R_:()=>Ae,Rg:()=>q,SZ:()=>oe,Um:()=>_e,VB:()=>de,Vh:()=>X,WD:()=>Se,Wm:()=>ve,Wu:()=>S,X9:()=>se,Y8:()=>O,YJ:()=>Me,aV:()=>ae,ai:()=>Oe,am:()=>K,at:()=>v,av:()=>xe,b4:()=>me,cZ:()=>h,dF:()=>r,dH:()=>he,d_:()=>Re,eq:()=>T,iq:()=>n,jZ:()=>be,j_:()=>B,jg:()=>P,jn:()=>_,l3:()=>p,lG:()=>G,m8:()=>A,mt:()=>Q,mu:()=>fe,os:()=>ue,pj:()=>W,q1:()=>N,qG:()=>u,qi:()=>Ie,rl:()=>c,uK:()=>Ee,v1:()=>ee,v6:()=>J,wd:()=>le,wi:()=>ie,wy:()=>U,xI:()=>z,yv:()=>j,ze:()=>re});const n="#199489",r=3,c=26,d=28,h=22,u=50*d,p=.5,m=3,g=3,v=d,y=h,w=3,x=y/2,S=56,_=56,T=32,E=h,O=E-4,A=55,N=50,$="short+short",P=55,z=50,G=50,F=50,B=55,W=18,U=32,j=2,Z=6,q=14,K=5,Y=q+K,X=10,Q=55,J=100,ee=50,te=10,oe=25,ne=58,re=22,ie=2,se={dark:1,light:.5},ae=10,le=12,ce=6,de=3,he=12,ue="auto",pe="center",fe=7,me=4,ge="timelineMessage",be="ref",ve="graph",ye="message",we="author",Ce="datetime",xe="sha",Se="changes";var _e=(e=>(e.Compact="compact",e.Rich="rich",e.Text="text",e))(_e||{}),Te=(e=>(e.Block="block",e.FullLine="fullLine",e.ThinLine="thinLine",e))(Te||{});const Re={block:{type:"block",baseHeight:1*d,minHeight:5,maxHeight:20},fullLine:{type:"fullLine",baseHeight:.5*d,minHeight:2,maxHeight:4},thinLine:{type:"thinLine",baseHeight:.25*d,minHeight:1,maxHeight:2}},ke={stashes:{type:"stashes",colorCssKey:"--color-graph-scroll-marker-stashes",lanes:[0],shape:"block"},tags:{type:"tags",colorCssKey:"--color-graph-scroll-marker-tags",lanes:[2],shape:"block"},remoteBranches:{type:"remoteBranches",colorCssKey:"--color-graph-scroll-marker-remote-branches",lanes:[2],shape:"block"},localBranches:{type:"localBranches",colorCssKey:"--color-graph-scroll-marker-local-branches",lanes:[0],shape:"block"},highlights:{type:"highlights",colorCssKey:"--color-graph-scroll-marker-highlights",lanes:[1],shape:"block"},upstream:{type:"upstream",colorCssKey:"--color-graph-scroll-marker-upstream",lanes:[1,2],shape:"block"},head:{type:"head",colorCssKey:"--scroll-marker-head-color",lanes:[0,1],shape:"block"},selection:{type:"selection",colorCssKey:"--color-graph-scroll-marker-selection",lanes:[0,1,2],shape:"fullLine"}},Ee=10,Oe=6,Ie={[we]:{headerLabelUntranslated:"GraphHeader-CommitAuthor",isCustomizable:!0,listId:"commit-author-zone",minimumWidth:T,showIconWidth:A},[Ce]:{headerLabelUntranslated:"GraphHeader-CommitDateTime",isCustomizable:!0,listId:"commit-date-time-zone",minimumWidth:N,showIconWidth:P},[ye]:{headerLabelUntranslated:"GraphHeader-CommitMessage",isCustomizable:!0,listId:"commit-message-zone",minimumWidth:F,showIconWidth:B},[xe]:{headerLabelUntranslated:"GraphHeader-CommitSha",isCustomizable:!0,listId:"commit-sha-zone",minimumWidth:z,showIconWidth:G},[ve]:{headerLabelUntranslated:"GraphHeader-CommitGraph",isCustomizable:!0,listId:"commit-zone",minimumWidth:S,showIconWidth:_},[be]:{headerLabelUntranslated:"GraphHeader-BranchTag",isCustomizable:!0,listId:"ref-zone",minimumWidth:U,showIconWidth:Q},[Se]:{headerLabelUntranslated:"GraphHeader-Changes",isCustomizable:!0,listId:"changes-zone",minimumWidth:ee,showIconWidth:ne}},Me={hour:23,day:6,week:4,month:11,year:6},De={added:0,deleted:0,modified:0};var Ae=(e=>(e.ALWAYS="ALWAYS",e.ON_HOVER="ON_HOVER",e.NEVER="NEVER",e))(Ae||{})},5191:(e,t,o)=>{o.d(t,{BL:()=>v,C_:()=>U,DN:()=>Q,Dj:()=>V,Ez:()=>K,H1:()=>J,Jp:()=>F,Jq:()=>z,KI:()=>B,Kk:()=>ee,L1:()=>w,Ne:()=>W,P2:()=>g,PY:()=>oe,Ry:()=>ne,SH:()=>$,Xq:()=>P,Yv:()=>se,Zg:()=>A,bY:()=>_,eR:()=>q,h:()=>m,iM:()=>N,mb:()=>Z,nv:()=>O,q3:()=>y,qP:()=>T,sH:()=>re,tC:()=>E,uM:()=>Y,uV:()=>x,wE:()=>G,yF:()=>S,zv:()=>j});var n=o(4561),r=o(827),c=o(7675),d=o(8649),h=o(3308),u=o(9453),p=o(466);const m=e=>{let t;return(...o)=>{t&&cancelAnimationFrame(t),t=requestAnimationFrame((()=>{e(...o)}))}},g=(e,t,o)=>{let n,r,c=!1,d=t;return(...h)=>{void 0!==o&&(r=(new Date).getTime(),d=!n||r-n>d+o?o:t),c||(e(...h),n=(new Date).getTime(),c=!0,setTimeout((()=>{c=!1}),d))}};function v(e){return Math.abs(e.scrollHeight-e.scrollTop-e.clientHeight)<1}function y(e){return e?"string"==typeof e?e:JSON.stringify(e):null}function w(e){const{length:t}=e;if(0===t)return{min:0,max:0};if(1===t)return{min:0,max:e[0]};e.sort(((e,t)=>e-t));const o=e[0],n=e[Math.floor(.25*t)],r=e[Math.floor(.5*t)],c=e[Math.floor(.75*t)],d=e[t-1],h=c-n;return{min:Math.max(o,r-1.5*h),max:Math.min(d,r+1.5*h)}}function x(e,t,o,n){const{id:r}=e;return!r||null===t||null===t?.[r]||n&&null===t?.[r]?.[n]?null:t&&r in t?n&&!t[r]?.[n]?(o(r,[n]),null):n?t?.[r]?.[n]:t?.[r]:(o(r,u.AI),null)}function S(){const e=new Date,t={hour:[],day:[],week:[],month:[],year:[]};let o;for(o=1;o<=h.YJ.hour;o+=1)t.hour.push({date:e.getTime()-36e5*o,label:1===o?"Timeline-1HourAgo":"Timeline-NHoursAgo",timeUnit:"hour",value:o});for(o=1;o<=h.YJ.day;o+=1)t.day.push({date:e.getTime()-864e5*o,label:1===o?"Timeline-Yesterday":"Timeline-NDaysAgo",timeUnit:"day",value:o});for(o=1;o<=h.YJ.week;o+=1)t.week.push({date:e.getTime()-6048e5*o,label:1===o?"Timeline-1WeekAgo":"Timeline-NWeeksAgo",timeUnit:"week",value:o});const n=new Date;for(n.setHours(0,0,0,0),o=1;o<=h.YJ.month;o+=1)n.setMonth(n.getMonth()-1),n.setHours(0,0,0,0),t.month.push({date:n.getTime(),label:1===o?"Timeline-1MonthAgo":"Timeline-NMonthsAgo",timeUnit:"month",value:o});const r=new Date;for(r.setHours(0,0,0,0),o=1;o<=h.YJ.year;o+=1){let e;switch(r.setFullYear(r.getFullYear()-1),r.setHours(0,0,0,0),o){case 1:e="Timeline-1YearAgo";break;case h.YJ.year:e="Timeline-NPlusYearsAgo";break;default:e="Timeline-NYearsAgo"}t.year.push({date:r.getTime(),label:e,timeUnit:"year",value:o})}return t}function _(e,t){if(t.id)return t.id;const o=t.owner||"";return e===d.V.REMOTE?`${e}/${o}/${t.name}`:`${e}/${t.name}`}function T(e){return _(e.refType,e)}function E(e,t=0){for(let o=e.length-1;o>=t;o-=1){const t=e[o];if(t.currentWidth>t.minimumWidth)return t}}function O(e,t=0){if(e.length){for(let o=t;o<e.length;o+=1){const t=e[o],n=t.maximumWidth?Math.min(t.maximumWidth,t.preferredWidth||1/0):t.preferredWidth;if(n&&t.currentWidth<n)return t}return e[e.length-1]}}function A(e,t=!1){const o="--scrollable-scrollbar-thickness",n=t||!e[o]?(0,c.Ld)(e):e,r=n[o]?parseInt(n[o],10):0;return Number.isNaN(r)?0:r}function N(e,t){let o=0;for(const n of e)t&&n.type===t||(o+=n.currentWidth);return o}const $=(e,t)=>e===t[t.length-1].type;function P(e,t,o){return t||o||0===e}function z(e,t,o){return e+(P(e,t,o)?1:0)}function G(e,t,o){const n=z(e,t,o);return h.$0*n}function F(e,t){return e.type===h.Wm&&t>0?e.contentWidth||0:e.currentWidth}function B(e,t,o,n,r){const c=j(e,t);return c?(d=c,h=o.length,d.currentWidth<F(d,h)?A(n,r):0):0;var d,h}function W(e,t,o,n,r,c,d,h,u){const p=j(e,t);if(!p)return 0;const m=function(e,t,o,n,r,c,d){const h=G(c,o,n);return $(e.type,t)&&(r<h||d)}(p,t,o,n,r,c.length,d);return m?A(h,u):0}function U(e,t,o){return(0,n.u)(o,e.minimumWidth||0,e.maximumWidth&&!$(e.type,t)?e.maximumWidth||0:Number.MAX_VALUE)}function j(e,t){return t.find((({type:t})=>t===e))}function Z(e,t){return t.findIndex((({type:t})=>t===e))}function q(e,t,o){let n=0,r=0;const c=Z(e,t);if(c>-1){const e=function(e,t=0){let o=0;for(let n=t;n<e.length;n+=1)o+=e[n].minimumWidth;return o}(t,c+1),d=function(e,t=e.length-1){let o=0;for(let n=0;n<=t;n+=1)o+=e[n].currentWidth;return o}(t,c-1),h=t[c].maximumWidth||Number.MAX_VALUE,u=Math.min(h,o-e-d);n=t[c].minimumWidth,r=u}return{min:n,max:r}}function K(e){const t=!!e&&e===h.Um.Compact,o=t?1:2,n=t?10:28,r=t?1:3,c=t?1:3,d=t?10:22,u=t?d:h.P3,p=t?d:d/2+1,m=t?45:56;return{COMMIT_ZONE_LINE_WIDTH:o,COMMIT_ZONE_GUTTER_WIDTH:n,COMMIT_ZONE_PADDING_LEFT:r,COMMIT_ZONE_PADDING_RIGHT:c,COMMIT_COLUMN_WIDTH:d,COMMIT_NODE_DIAMETER:u,COMMIT_MERGE_NODE_DIAMETER:p,COMMIT_NODE_TOP_OFFSET:.5*h.P3-.5*u,COMMIT_MERGE_NODE_LEFT_OFFSET:d/2-p/2,COMMIT_MERGE_NODE_TOP_OFFSET:.5*h.P3-.5*p,COMMIT_ZONE_AVATAR_DIAMETER:u-2*o,COMMIT_ZONE_VIEWPORT_WIDTH_MIN:u+r+c+n,COMMIT_ZONE_SHOW_ICON_WIDTH:m,IS_COMPACT:t,RADIUS_DIFF_MERGE_NODE_COMMIT_NODE:u/2-p/2}}const Y=e=>t=>t===e.length?"SHOW_MORE_COMMITS":e[t].sha;function X(e){return e instanceof p.A?Boolean(e.refsData?.activeGraphRef):!!e?.heads&&e.heads.some((e=>ie(e)))}function Q(e){const t=e.find(X);return t?.sha||void 0}function J(e){return[r.S7,r.br,r.ch].includes(e)}function ee(e){return!!e&&Object.values(e).some((e=>e>0))}function te(e){return 1===Object.keys(e).length}function oe(e,t){return!0===e[t]&&te(e)}function ne(e,t,o,n){if(n<0)return h.os;const r=e+2,c=n*e;return c>=o-r&&c<o+t+r?h.os:h.MQ}function re(e){switch(e){case h.Wm:return"graph";case h.jZ:return"branch";case h.KE:return"message";case h.GF:return"author";case h.PL:return"datetime";case h.av:return"commit";case h.WD:return"changes";default:return""}}function ie(e){return e.isCurrentHead}function se(e){return e.refType===d.V.HEAD&&ie(e)}class V{props;constructor(e){this.props=e}getActiveGraphZone(e){const t=j(e,this.props.graphZones);return!t||t.isHidden?void 0:t}getGraphRefGroupsByNameForRow(e){const t=this.getRow(e);return t&&t.refsData?.orderedRefGroups||[]}getRow(e){if(!(e<0||e>this.props.processedRows.length-1))return this.props.processedRows[e]}getZoneWidth(e,t=!0){const o=t?this.getVerticalScrollWidth(e):0;return function(e,t){return j(e,t)?.currentWidth||h.qi[e].minimumWidth}(e,this.props.graphZones)-o}isDateTimeZoneActive(){return Boolean(this.getActiveGraphZone(h.PL))}isFirstRow(e){return 0===e}isColumnFollowingGraphColumn(e){return((e,t)=>{const o=Z(e,t),n=Z(h.Wm,t);return-1!==o&&-1!==n&&o-n==1})(e,this.props.graphZones)}isHighlighted(e){if(this.props.processedRows[e]&&this.props.highlightedShas){const t=this.props.processedRows[e]?.sha;return this.props.highlightedShas[t]||!1}return!1}isHovering(e){return!(!this.props.isContainerWindowFocused||!this.props.processedRows[e])&&this.props.currentlyHoveredCommitSha===this.props.processedRows[e]?.sha}isLastColumn(e){return $(e,this.props.graphZones)}getSelectedRefGroupByName(){if(te(this.props.isSelectedBySha)){const e=Object.keys(this.props.isSelectedBySha),t=this.props.processedGraphRowBySha[e[0]];if(t)return t.refsData?.orderedRefGroups||[]}return[]}getHorizontalScrollHeight(e){return B(e,this.props.graphZones,this.props.processedRows,this.props.cssVariables)}getVerticalScrollWidth(e){return W(e,this.props.graphZones,this.props.hasMoreCommits,this.props.isLoadingRows,this.props.height,this.props.processedRows,this.props.enabledScrollMarkerTypes.length>0,this.props.cssVariables)}isMissingHoveredRefGroup(e){if(!this.props.isContainerWindowFocused||this.props.highlightedShas)return!1;const t=this.getRow(e);if(!t)return!1;let o=[];if(this.props.dimRowsOfSelectedCommit){const e=this.getSelectedRefGroupByName();if(!e.length)return!1;o=e[0]}else{const{hoveredRefGroup:e}=this.props;if(!e?.length)return!1;o=e}const{name:n,refType:r}=o[0],c=r===d.V.TAG,h=t.tags.length>0&&!t.heads.length&&!t.remotes.length,{heads:u,tags:p,remotes:m}=!t.hasRefs||h&&!c?t.childRefs:t;return!(u.length||m.length||p.length)||!u.some((e=>e.name===n&&o.some((e=>e.refType===d.V.HEAD))))&&!m.some((e=>e.name===n&&o.some((t=>t.refType===d.V.REMOTE&&t.owner===e.owner))))&&!p.some((e=>e.name===n&&o.some((e=>e.refType===d.V.TAG))))}isSelected(e){const t=this.getRow(e)?.sha;return Boolean(t)&&!0===this.props.isSelectedBySha[t]}isSingleSelected(e){const t=this.getRow(e)?.sha;return Boolean(t)&&oe(this.props.isSelectedBySha,t)}hasTimeline(e){return Boolean(this.props.processedRows[e]?.timeLineEntry)&&!this.isDateTimeZoneActive()&&!this.isFirstRow(e)}rowContainsCurrentHeadRef(e){return X(e)}}},9453:(e,t,o)=>{o.d(t,{$M:()=>c,AI:()=>d,mQ:()=>n,uq:()=>r});const n="pullRequest",r="upstream",c="issue",d=[n,r,c]},466:(e,t,o)=>{o.d(t,{A:()=>i});var n=o(8649),r=o(5191);class i{_graph;_message;_heads;_remotes;_tags;_activeGraphRef;_activeGraphRefGroup;_refGroupsByName;_orderedRefGroups;sha;parents;author;email;date;type;contexts;rowIndex;column;edgeColumnMaxes;edges;childRefs;timeLineEntry;summary;body;displayMessage;displaySummary;displayBody;set message(e){this._message!==e&&(this._message=e,this.displayMessage=this._graph.formatCommitMessageCallback(e),this.updateSummaryAndBody(e))}get message(){return this._message}get heads(){return this._heads}set heads(e){this._heads!==e&&(this._heads=e,this.initializeRefGroups())}set remotes(e){this._remotes!==e&&(this._remotes=e,this.initializeRefGroups())}get remotes(){return this._remotes}set tags(e){this._tags!==e&&(this._tags=e,this.initializeRefGroups())}get tags(){return this._tags}get hasRefs(){return this.heads.length>0||this.remotes.length>0||this.tags.length>0}get hasChildRefs(){return this.childRefs.heads.length>0||this.childRefs.remotes.length>0||this.childRefs.tags.length>0}get refsData(){if(this.hasRefs||this.hasChildRefs)return 0===this._orderedRefGroups.length&&this.loadGraphRefGroupsData(),{activeGraphRef:this._activeGraphRef,activeGraphRefGroup:this._activeGraphRefGroup,orderedRefGroups:this._orderedRefGroups,refGroupsByName:this._refGroupsByName}}constructor(e,t,o,n,r,c,d){this._graph=e,this._heads=t.heads||[],this._remotes=t.remotes||[],this._tags=t.tags||[],this._message=t.message,this.sha=t.sha,this.parents=t.parents,this.author=t.author,this.email=t.email,this.date=t.date,this.type=t.type,this.contexts=t.contexts,this.column=o||0,this.edgeColumnMaxes=n||0,this.edges=r||{},this.childRefs=c||{heads:[],tags:[],remotes:[]},this.timeLineEntry=d,this.initializeRefGroups(),this.updateSummaryAndBody(t.message)}updateSummaryAndBody(e){let t,o=e?e.trim():"";const n=o.indexOf("\n");-1!==n&&(t=o.substring(n+1).trim().replace(/\n+(?:\s+\n+)?/g," | "),o=o.substring(0,n)),this.body=t,this.summary=o,this.displaySummary=this._graph.formatCommitMessageCallback(o),this.displayBody=t?this._graph.formatCommitMessageCallback(t):void 0}initializeRefGroups(){this._activeGraphRefGroup=void 0,this._activeGraphRef=void 0,this._refGroupsByName={},this._orderedRefGroups=[]}addRefToRefGroup(e){const t=e.name;this._refGroupsByName[t]||(this._refGroupsByName[t]=[]),this._refGroupsByName[t].push(e)}loadGraphRefGroupsData(){this.initializeRefGroups();const e=[],{heads:t,tags:o,remotes:c}=this.hasRefs?this:this.childRefs;for(const o of t){const t={...o,refType:n.V.HEAD};this.addRefToRefGroup(t),(0,r.Yv)(t)?(this._activeGraphRefGroup=this._refGroupsByName[t.name],this._activeGraphRef=t,e.unshift(this._refGroupsByName[t.name])):e.push(this._refGroupsByName[t.name])}for(const t of c){const o={...t,fullName:t.owner?`${t.owner}/${t.name}`:t.name,refType:n.V.REMOTE},r=this._refGroupsByName[o.name];this.addRefToRefGroup(o),r||e.push(this._refGroupsByName[o.name])}for(const t of o){const o={...t,refType:n.V.TAG};this.addRefToRefGroup(o),e.push(this._refGroupsByName[o.name])}this._orderedRefGroups=e.sort(((e,t)=>e===this._activeGraphRefGroup?-1:t===this._activeGraphRefGroup?1:e.length>t.length?-1:e.length<t.length?1:e[0].name.localeCompare(t[0].name)))}}},7334:(e,t,o)=>{function n(e){switch(e){case"github":return"GitHub";case"githubEnterprise":return"GitHub Enterprise";case"gitlab":return"GitLab";case"gitlabSelfHosted":return"GitLab Self-Hosted";case"azureDevops":return"Azure DevOps";case"bitbucket":return"Bitbucket";case"bitbucketServer":return"Bitbucket Server";default:return e}}o.d(t,{y:()=>n})},8649:(e,t,o)=>{o.d(t,{V:()=>n});const n={HEAD:"head",REMOTE:"remote",TAG:"tag"}},664:()=>{},6756:()=>{},4561:(e,t,o)=>{function n(e,t,o){return(e=e<=o?e:o)>=t?e:t}o.d(t,{u:()=>n})},3316:e=>{function t(e,t,o,n){var r,c=null==(r=n)||"number"==typeof r||"boolean"==typeof r?n:o(n),d=t.get(c);return void 0===d&&(d=e.call(this,n),t.set(c,d)),d}function o(e,t,o){var n=Array.prototype.slice.call(arguments,3),r=o(n),c=t.get(r);return void 0===c&&(c=e.apply(this,n),t.set(r,c)),c}function n(e,t,o,n,r){return o.bind(t,e,n,r)}function r(e,r){return n(e,this,1===e.length?t:o,r.cache.create(),r.serializer)}function c(){return JSON.stringify(arguments)}function d(){this.cache=Object.create(null)}d.prototype.has=function(e){return e in this.cache},d.prototype.get=function(e){return this.cache[e]},d.prototype.set=function(e,t){this.cache[e]=t};var h={create:function(){return new d}};e.exports=function(e,t){var o=t&&t.cache?t.cache:h,n=t&&t.serializer?t.serializer:c;return(t&&t.strategy?t.strategy:r)(e,{cache:o,serializer:n})},e.exports.strategies={variadic:function(e,t){return n(e,this,o,t.cache.create(),t.serializer)},monadic:function(e,o){return n(e,this,t,o.cache.create(),o.serializer)}}},1143:e=>{e.exports=function(e,t,o,n,r,c,d,h){if(!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var p=[o,n,r,c,d,h],m=0;(u=new Error(t.replace(/%s/g,(function(){return p[m++]})))).name="Invariant Violation"}throw u.framesToPop=1,u}}},621:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=d(o(6689)),c=d(o(2613));function d(e){return e&&e.__esModule?e:{default:e}}t.default=(0,c.default)((function(e,t,o,c,d){var h=e[t],u=void 0===h?"undefined":n(h);return r.default.isValidElement(h)?new Error("Invalid "+c+" `"+d+"` of type ReactElement supplied to `"+o+"`, expected a ReactComponent or a DOMElement. You can usually obtain a ReactComponent or DOMElement from a ReactElement by attaching a ref to it."):"object"===u&&"function"==typeof h.render||1===h.nodeType?null:new Error("Invalid "+c+" `"+d+"` of value `"+h+"` supplied to `"+o+"`, expected a ReactComponent or a DOMElement.")})),e.exports=t.default},8853:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=d(o(6689)),r=o(9864),c=d(o(2613));function d(e){return e&&e.__esModule?e:{default:e}}t.default=(0,c.default)((function(e,t,o,c,d){var h=e[t];return n.default.isValidElement(h)?new Error("Invalid "+c+" `"+d+"` of type ReactElement supplied to `"+o+"`,expected an element type (a string , component class, or function component)."):(0,r.isValidElementType)(h)?null:new Error("Invalid "+c+" `"+d+"` of value `"+h+"` supplied to `"+o+"`, expected an element type (a string , component class, or function component).")})),e.exports=t.default},5638:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,o,n,r,c){var d=n||"<<anonymous>>",h=c||o;if(null==t[o])return new Error("The "+r+" `"+h+"` is required to make `"+d+"` accessible for users of assistive technologies such as screen readers.");for(var u=arguments.length,p=Array(u>5?u-5:0),m=5;m<u;m++)p[m-5]=arguments[m];return e.apply(void 0,[t,o,n,r,c].concat(p))}},e.exports=t.default},2613:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,o,n,r,c,d){var h=r||"<<anonymous>>",u=d||n;if(null==o[n])return t?new Error("Required "+c+" `"+u+"` was not specified in `"+h+"`."):null;for(var p=arguments.length,m=Array(p>6?p-6:0),g=6;g<p;g++)m[g-6]=arguments[g];return e.apply(void 0,[o,n,h,c,u].concat(m))}var o=t.bind(null,!1);return o.isRequired=t.bind(null,!0),o},e.exports=t.default},2703:(e,t,o)=>{var n=o(414);function r(){}function c(){}c.resetWarningCache=r,e.exports=function(){function e(e,t,o,r,c,d){if(d!==n){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}function t(){return e}e.isRequired=e;var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:r};return o.PropTypes=o,o}},5697:(e,t,o)=>{e.exports=o(2703)()},414:e=>{e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},977:(e,t,o)=>{var n=o(7137),r=o(2584);e.exports=function(){return n.apply(this,r(arguments)).on("cloned",(function(t){e(t),r(t.getElementsByTagName("*")).forEach(e)}));function e(e){e.removeAttribute("data-reactid")}}},9921:(e,t)=>{var o="function"==typeof Symbol&&Symbol.for,n=o?Symbol.for("react.element"):60103,r=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,d=o?Symbol.for("react.strict_mode"):60108,h=o?Symbol.for("react.profiler"):60114,u=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,m=o?Symbol.for("react.async_mode"):60111,g=o?Symbol.for("react.concurrent_mode"):60111,v=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,w=o?Symbol.for("react.suspense_list"):60120,x=o?Symbol.for("react.memo"):60115,S=o?Symbol.for("react.lazy"):60116,_=o?Symbol.for("react.block"):60121,T=o?Symbol.for("react.fundamental"):60117,E=o?Symbol.for("react.responder"):60118,O=o?Symbol.for("react.scope"):60119;function A(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case m:case g:case c:case h:case d:case y:return e;default:switch(e=e&&e.$$typeof){case p:case v:case S:case x:case u:return e;default:return t}}case r:return t}}}function N(e){return A(e)===g}t.AsyncMode=m,t.ConcurrentMode=g,t.ContextConsumer=p,t.ContextProvider=u,t.Element=n,t.ForwardRef=v,t.Fragment=c,t.Lazy=S,t.Memo=x,t.Portal=r,t.Profiler=h,t.StrictMode=d,t.Suspense=y,t.isAsyncMode=function(e){return N(e)||A(e)===m},t.isConcurrentMode=N,t.isContextConsumer=function(e){return A(e)===p},t.isContextProvider=function(e){return A(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return A(e)===v},t.isFragment=function(e){return A(e)===c},t.isLazy=function(e){return A(e)===S},t.isMemo=function(e){return A(e)===x},t.isPortal=function(e){return A(e)===r},t.isProfiler=function(e){return A(e)===h},t.isStrictMode=function(e){return A(e)===d},t.isSuspense=function(e){return A(e)===y},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===c||e===g||e===h||e===d||e===y||e===w||"object"==typeof e&&null!==e&&(e.$$typeof===S||e.$$typeof===x||e.$$typeof===u||e.$$typeof===p||e.$$typeof===v||e.$$typeof===T||e.$$typeof===E||e.$$typeof===O||e.$$typeof===_)},t.typeOf=A},9864:(e,t,o)=>{e.exports=o(9921)},6871:(e,t,o)=>{function n(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function r(e){this.setState(function(t){var o=this.constructor.getDerivedStateFromProps(e,t);return null!=o?o:null}.bind(this))}function c(e,t){try{var o=this.props,n=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(o,n)}finally{this.props=o,this.state=n}}function d(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var o=null,d=null,h=null;if("function"==typeof t.componentWillMount?o="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(o="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?d="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(d="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?h="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(h="UNSAFE_componentWillUpdate"),null!==o||null!==d||null!==h){var u=e.displayName||e.name,p="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+u+" uses "+p+" but also contains the following legacy lifecycles:"+(null!==o?"\n  "+o:"")+(null!==d?"\n  "+d:"")+(null!==h?"\n  "+h:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=n,t.componentWillReceiveProps=r),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=c;var m=t.componentDidUpdate;t.componentDidUpdate=function(e,t,o){var n=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:o;m.call(this,e,t,n)}}return e}o.r(t),o.d(t,{polyfill:()=>d}),n.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0,c.__suppressDeprecationWarning=!0},7281:(e,t,o)=>{t.__esModule=!0;var n=p(o(5697)),r=p(o(621)),c=p(o(6689)),d=p(o(6405)),h=p(o(3464)),u=p(o(290));function p(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var g=function(e){function t(){var o,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,p=Array(r),g=0;g<r;g++)p[g]=arguments[g];return o=n=m(this,e.call.apply(e,[this].concat(p))),n._mountOverlayTarget=function(){n._overlayTarget||(n._overlayTarget=document.createElement("div"),n._portalContainerNode=(0,h.default)(n.props.container,(0,u.default)(n).body),n._portalContainerNode.appendChild(n._overlayTarget))},n._unmountOverlayTarget=function(){n._overlayTarget&&(n._portalContainerNode.removeChild(n._overlayTarget),n._overlayTarget=null),n._portalContainerNode=null},n._renderOverlay=function(){var e=n.props.children?c.default.Children.only(n.props.children):null;if(null!==e){n._mountOverlayTarget();var t=!n._overlayInstance;n._overlayInstance=d.default.unstable_renderSubtreeIntoContainer(n,e,n._overlayTarget,(function(){t&&n.props.onRendered&&n.props.onRendered()}))}else n._unrenderOverlay(),n._unmountOverlayTarget()},n._unrenderOverlay=function(){n._overlayTarget&&(d.default.unmountComponentAtNode(n._overlayTarget),n._overlayInstance=null)},n.getMountNode=function(){return n._overlayTarget},m(n,o)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._isMounted=!0,this._renderOverlay()},t.prototype.componentDidUpdate=function(){this._renderOverlay()},t.prototype.componentWillReceiveProps=function(e){this._overlayTarget&&e.container!==this.props.container&&(this._portalContainerNode.removeChild(this._overlayTarget),this._portalContainerNode=(0,h.default)(e.container,(0,u.default)(this).body),this._portalContainerNode.appendChild(this._overlayTarget))},t.prototype.componentWillUnmount=function(){this._isMounted=!1,this._unrenderOverlay(),this._unmountOverlayTarget()},t.prototype.render=function(){return null},t}(c.default.Component);g.displayName="Portal",g.propTypes={container:n.default.oneOfType([r.default,n.default.func]),onRendered:n.default.func},t.default=g,e.exports=t.default},2856:(e,t,o)=>{t.__esModule=!0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r=m(o(5697)),c=m(o(8853)),d=m(o(6689)),h=m(o(5425)),u=m(o(7487)),p=m(o(2395));function m(e){return e&&e.__esModule?e:{default:e}}var g=function(e){function t(o,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,o,n));return r.handleHidden=function(){var e;r.setState({exited:!0}),r.props.onExited&&(e=r.props).onExited.apply(e,arguments)},r.state={exited:!o.show},r.onHiddenListener=r.handleHidden.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentWillReceiveProps=function(e){e.show?this.setState({exited:!1}):e.transition||this.setState({exited:!0})},t.prototype.render=function(){var e=this.props,t=e.container,o=e.containerPadding,n=e.target,r=e.placement,c=e.shouldUpdatePosition,m=e.rootClose,g=e.children,v=e.transition,y=function(e,t){var o={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}(e,["container","containerPadding","target","placement","shouldUpdatePosition","rootClose","children","transition"]);if(!(y.show||v&&!this.state.exited))return null;var w=g;if(w=d.default.createElement(u.default,{container:t,containerPadding:o,target:n,placement:r,shouldUpdatePosition:c},w),v){var x=y.onExit,S=y.onExiting,_=y.onEnter,T=y.onEntering,E=y.onEntered;w=d.default.createElement(v,{in:y.show,appear:!0,onExit:x,onExiting:S,onExited:this.onHiddenListener,onEnter:_,onEntering:T,onEntered:E},w)}return m&&(w=d.default.createElement(p.default,{onRootClose:y.onHide},w)),d.default.createElement(h.default,{container:t},w)},t}(d.default.Component);g.propTypes=n({},h.default.propTypes,u.default.propTypes,{show:r.default.bool,rootClose:r.default.bool,onHide:function(e){var t=r.default.func;e.rootClose&&(t=t.isRequired);for(var o=arguments.length,n=Array(o>1?o-1:0),c=1;c<o;c++)n[c-1]=arguments[c];return t.apply(void 0,[e].concat(n))},transition:c.default,onEnter:r.default.func,onEntering:r.default.func,onEntered:r.default.func,onExit:r.default.func,onExiting:r.default.func,onExited:r.default.func}),t.default=g,e.exports=t.default},5425:(e,t,o)=>{t.__esModule=!0;var n=m(o(5697)),r=m(o(621)),c=m(o(6689)),d=m(o(6405)),h=m(o(3464)),u=m(o(290)),p=m(o(7281));function m(e){return e&&e.__esModule?e:{default:e}}function g(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var v=function(e){function t(){var o,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,c=Array(r),d=0;d<r;d++)c[d]=arguments[d];return o=n=g(this,e.call.apply(e,[this].concat(c))),n.setContainer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.props;n._portalContainerNode=(0,h.default)(e.container,(0,u.default)(n).body)},n.getMountNode=function(){return n._portalContainerNode},g(n,o)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this.setContainer(),this.forceUpdate(this.props.onRendered)},t.prototype.componentWillReceiveProps=function(e){e.container!==this.props.container&&this.setContainer(e)},t.prototype.componentWillUnmount=function(){this._portalContainerNode=null},t.prototype.render=function(){return this.props.children&&this._portalContainerNode?d.default.createPortal(this.props.children,this._portalContainerNode):null},t}(c.default.Component);v.displayName="Portal",v.propTypes={container:n.default.oneOfType([r.default,n.default.func]),onRendered:n.default.func},t.default=d.default.createPortal?v:p.default,e.exports=t.default},7487:(e,t,o)=>{t.__esModule=!0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r=y(o(4184)),c=y(o(5697)),d=y(o(621)),h=o(6689),u=y(h),p=y(o(6405)),m=y(o(7603)),g=y(o(3464)),v=y(o(290));function y(e){return e&&e.__esModule?e:{default:e}}function w(e,t){var o={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}var x=function(e){function t(o,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,o,n));return r.getTarget=function(){var e=r.props.target,t="function"==typeof e?e():e;return t&&p.default.findDOMNode(t)||null},r.maybeUpdatePosition=function(e){var t=r.getTarget();(r.props.shouldUpdatePosition||t!==r._lastTarget||e)&&r.updatePosition(t)},r.state={positionLeft:0,positionTop:0,arrowOffsetLeft:null,arrowOffsetTop:null},r._needsFlush=!1,r._lastTarget=null,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this.updatePosition(this.getTarget())},t.prototype.componentWillReceiveProps=function(){this._needsFlush=!0},t.prototype.componentDidUpdate=function(e){this._needsFlush&&(this._needsFlush=!1,this.maybeUpdatePosition(this.props.placement!==e.placement))},t.prototype.render=function(){var e=this.props,t=e.children,o=e.className,c=w(e,["children","className"]),d=this.state,p=d.positionLeft,m=d.positionTop,g=w(d,["positionLeft","positionTop"]);delete c.target,delete c.container,delete c.containerPadding,delete c.shouldUpdatePosition;var v=u.default.Children.only(t);return(0,h.cloneElement)(v,n({},c,g,{positionLeft:p,positionTop:m,className:(0,r.default)(o,v.props.className),style:n({},v.props.style,{left:p,top:m})}))},t.prototype.updatePosition=function(e){if(this._lastTarget=e,e){var t=p.default.findDOMNode(this),o=(0,g.default)(this.props.container,(0,v.default)(this).body);this.setState((0,m.default)(this.props.placement,t,e,o,this.props.containerPadding))}else this.setState({positionLeft:0,positionTop:0,arrowOffsetLeft:null,arrowOffsetTop:null})},t}(u.default.Component);x.propTypes={target:c.default.oneOfType([d.default,c.default.func]),container:c.default.oneOfType([d.default,c.default.func]),containerPadding:c.default.number,placement:c.default.oneOf(["top","right","bottom","left"]),shouldUpdatePosition:c.default.bool},x.displayName="Position",x.defaultProps={containerPadding:0,placement:"right",shouldUpdatePosition:!1},t.default=x,e.exports=t.default},2395:(e,t,o)=>{t.__esModule=!0;var n=p(o(1629)),r=p(o(5697)),c=p(o(6689)),d=p(o(6405)),h=p(o(6616)),u=p(o(290));function p(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(o,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var c=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,o,r));return c.addEventListeners=function(){var e=c.props.event,t=(0,u.default)(c);c.documentMouseCaptureListener=(0,h.default)(t,e,c.handleMouseCapture,!0),c.documentMouseListener=(0,h.default)(t,e,c.handleMouse),c.documentKeyupListener=(0,h.default)(t,"keyup",c.handleKeyUp)},c.removeEventListeners=function(){c.documentMouseCaptureListener&&c.documentMouseCaptureListener.remove(),c.documentMouseListener&&c.documentMouseListener.remove(),c.documentKeyupListener&&c.documentKeyupListener.remove()},c.handleMouseCapture=function(e){var t;c.preventMouseRootClose=!!((t=e).metaKey||t.altKey||t.ctrlKey||t.shiftKey)||!function(e){return 0===e.button}(e)||(0,n.default)(d.default.findDOMNode(c),e.target)},c.handleMouse=function(e){!c.preventMouseRootClose&&c.props.onRootClose&&c.props.onRootClose(e)},c.handleKeyUp=function(e){27===e.keyCode&&c.props.onRootClose&&c.props.onRootClose(e)},c.preventMouseRootClose=!1,c}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this.props.disabled||this.addEventListeners()},t.prototype.componentDidUpdate=function(e){!this.props.disabled&&e.disabled?this.addEventListeners():this.props.disabled&&!e.disabled&&this.removeEventListeners()},t.prototype.componentWillUnmount=function(){this.props.disabled||this.removeEventListeners()},t.prototype.render=function(){return this.props.children},t}(c.default.Component);m.displayName="RootCloseWrapper",m.propTypes={onRootClose:r.default.func,children:r.default.element,disabled:r.default.bool,event:r.default.oneOf(["click","mousedown"])},m.defaultProps={event:"click"},t.default=m,e.exports=t.default},6616:(e,t,o)=>{t.__esModule=!0,t.default=function(e,t,o,c){return(0,n.default)(e,t,o,c),{remove:function(){(0,r.default)(e,t,o,c)}}};var n=c(o(1416)),r=c(o(3249));function c(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},7603:(e,t,o)=>{t.__esModule=!0,t.default=function(e,t,o,c,d){var h="BODY"===c.tagName?(0,n.default)(o):(0,r.default)(o,c),p=(0,n.default)(t),m=p.height,g=p.width,v=void 0,y=void 0,w=void 0,x=void 0;if("left"===e||"right"===e){y=h.top+(h.height-m)/2,v="left"===e?h.left-g:h.left+h.width;var S=function(e,t,o,n){var r=u(o),c=r.scroll,d=r.height,h=e-n-c,p=e+n-c+t;return h<0?-h:p>d?d-p:0}(y,m,c,d);y+=S,x=50*(1-2*S/m)+"%",w=void 0}else{if("top"!==e&&"bottom"!==e)throw new Error('calcOverlayPosition(): No such placement of "'+e+'" found.');v=h.left+(h.width-g)/2,y="top"===e?h.top-m:h.top+h.height;var _=function(e,t,o,n){var r=u(o).width,c=e-n,d=e+n+t;return c<0?-c:d>r?r-d:0}(v,g,c,d);v+=_,w=50*(1-2*_/g)+"%",x=void 0}return{positionLeft:v,positionTop:y,arrowOffsetLeft:w,arrowOffsetTop:x}};var n=h(o(2565)),r=h(o(7265)),c=h(o(504)),d=h(o(290));function h(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=void 0,o=void 0,r=void 0;if("BODY"===e.tagName)t=window.innerWidth,o=window.innerHeight,r=(0,c.default)((0,d.default)(e).documentElement)||(0,c.default)(e);else{var h=(0,n.default)(e);t=h.width,o=h.height,r=(0,c.default)(e)}return{width:t,height:o,scroll:r}}e.exports=t.default},3464:(e,t,o)=>{t.__esModule=!0,t.default=function(e,t){return e="function"==typeof e?e():e,r.default.findDOMNode(e)||t};var n,r=(n=o(6405))&&n.__esModule?n:{default:n};e.exports=t.default},290:(e,t,o)=>{t.__esModule=!0,t.default=function(e){return(0,r.default)(n.default.findDOMNode(e))};var n=c(o(6405)),r=c(o(9981));function c(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},644:(e,t,o)=>{t.ZP=t.cn=t.d0=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};n.get||n.set?Object.defineProperty(t,o,n):t[o]=e[o]}return t.default=e,t}(o(5697)),r=h(o(6689)),c=h(o(6405)),d=o(6871);function h(e){return e&&e.__esModule?e:{default:e}}o(4726);var u="unmounted",p="exited",m="entering";t.d0=m;var g="entered";t.cn=g;var v="exiting",y=function(e){var t,o;function n(t,o){var n;n=e.call(this,t,o)||this;var r,c=o.transitionGroup,d=c&&!c.isMounting?t.enter:t.appear;return n.appearStatus=null,t.in?d?(r=p,n.appearStatus=m):r=g:r=t.unmountOnExit||t.mountOnEnter?u:p,n.state={status:r},n.nextCallback=null,n}o=e,(t=n).prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o;var d=n.prototype;return d.getChildContext=function(){return{transitionGroup:null}},n.getDerivedStateFromProps=function(e,t){return e.in&&t.status===u?{status:p}:null},d.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},d.componentDidUpdate=function(e){var t=null;if(e!==this.props){var o=this.state.status;this.props.in?o!==m&&o!==g&&(t=m):o!==m&&o!==g||(t=v)}this.updateStatus(!1,t)},d.componentWillUnmount=function(){this.cancelNextCallback()},d.getTimeouts=function(){var e,t,o,n=this.props.timeout;return e=t=o=n,null!=n&&"number"!=typeof n&&(e=n.exit,t=n.enter,o=void 0!==n.appear?n.appear:t),{exit:e,enter:t,appear:o}},d.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var o=c.default.findDOMNode(this);t===m?this.performEnter(o,e):this.performExit(o)}else this.props.unmountOnExit&&this.state.status===p&&this.setState({status:u})},d.performEnter=function(e,t){var o=this,n=this.props.enter,r=this.context.transitionGroup?this.context.transitionGroup.isMounting:t,c=this.getTimeouts(),d=r?c.appear:c.enter;t||n?(this.props.onEnter(e,r),this.safeSetState({status:m},(function(){o.props.onEntering(e,r),o.onTransitionEnd(e,d,(function(){o.safeSetState({status:g},(function(){o.props.onEntered(e,r)}))}))}))):this.safeSetState({status:g},(function(){o.props.onEntered(e)}))},d.performExit=function(e){var t=this,o=this.props.exit,n=this.getTimeouts();o?(this.props.onExit(e),this.safeSetState({status:v},(function(){t.props.onExiting(e),t.onTransitionEnd(e,n.exit,(function(){t.safeSetState({status:p},(function(){t.props.onExited(e)}))}))}))):this.safeSetState({status:p},(function(){t.props.onExited(e)}))},d.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},d.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},d.setNextCallback=function(e){var t=this,o=!0;return this.nextCallback=function(n){o&&(o=!1,t.nextCallback=null,e(n))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},d.onTransitionEnd=function(e,t,o){this.setNextCallback(o);var n=null==t&&!this.props.addEndListener;e&&!n?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},d.render=function(){var e=this.state.status;if(e===u)return null;var t=this.props,o=t.children,n=function(e,t){if(null==e)return{};var o,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)o=c[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(t,["children"]);if(delete n.in,delete n.mountOnEnter,delete n.unmountOnExit,delete n.appear,delete n.enter,delete n.exit,delete n.timeout,delete n.addEndListener,delete n.onEnter,delete n.onEntering,delete n.onEntered,delete n.onExit,delete n.onExiting,delete n.onExited,"function"==typeof o)return o(e,n);var c=r.default.Children.only(o);return r.default.cloneElement(c,n)},n}(r.default.Component);function w(){}y.contextTypes={transitionGroup:n.object},y.childContextTypes={transitionGroup:function(){}},y.propTypes={},y.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:w,onEntering:w,onEntered:w,onExit:w,onExiting:w,onExited:w},y.UNMOUNTED=0,y.EXITED=1,y.ENTERING=2,y.ENTERED=3,y.EXITING=4;var x=(0,d.polyfill)(y);t.ZP=x},4726:(e,t,o)=>{var n;t.__esModule=!0,t.classNamesShape=t.timeoutsShape=void 0,(n=o(5697))&&n.__esModule,t.timeoutsShape=null,t.classNamesShape=null},6115:e=>{var t;t="function"==typeof setImmediate?function(e){setImmediate(e)}:function(e){setTimeout(e,0)},e.exports=t},670:e=>{e.exports=function(){}},6689:e=>{e.exports=o(2735)},6405:e=>{e.exports=o(2788)},8149:(e,t,o)=>{e.exports=o(3285)},3562:(e,t,o)=>{e.exports=o(7965)},434:e=>{function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},4836:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var c=n[e]={exports:{}};return t[e](c,c.exports,r),c.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var c={};(()=>{r.r(c),r.d(c,{CHANGES_BAR_MIN_WIDTH:()=>p.QW,CHANGES_BAR_RIGHT_MARGIN:()=>p.SZ,CHANGES_ZONE_MIN_WIDTH:()=>p.v1,CHANGES_ZONE_SHOW_ICON_WIDTH:()=>p.Oi,COMMIT_AUTHOR_ZONE_AVATAR_INNER_DIAMETER:()=>p.Y8,COMMIT_AUTHOR_ZONE_AVATAR_OUTER_DIAMETER:()=>p.LG,COMMIT_AUTHOR_ZONE_MIN_WIDTH:()=>p.eq,COMMIT_AUTHOR_ZONE_SHOW_ICON_WIDTH:()=>p.m8,COMMIT_DATE_TIME_ZONE_MIN_WIDTH:()=>p.q1,COMMIT_DATE_TIME_ZONE_SHOW_ICON_WIDTH:()=>p.jg,COMMIT_MESSAGE_ZONE_MIN_WIDTH:()=>p.B8,COMMIT_MESSAGE_ZONE_SHOW_ICON_WIDTH:()=>p.j_,COMMIT_NODE_MIN_ALPHA:()=>p.l3,COMMIT_SHA_ZONE_MIN_WIDTH:()=>p.xI,COMMIT_SHA_ZONE_SHOW_ICON_WIDTH:()=>p.lG,COMMIT_ZONE_DEFAULT_VIEWPORT_WIDTH_MIN:()=>p.Wu,COMMIT_ZONE_EDGE_ARC_PADDING:()=>p.NP,COMMIT_ZONE_EDGE_ARC_RADIUS:()=>p.O5,COMMIT_ZONE_MARGIN_BOTTOM:()=>p.$s,COMMIT_ZONE_MARGIN_TOP:()=>p.An,COMMIT_ZONE_ROW_HEIGHT:()=>p.at,COMMIT_ZONE_ROW_INNER_HEIGHT:()=>p.P3,COMMIT_ZONE_SHOW_ICON_WIDTH:()=>p.jn,CommitDateTimeSources:()=>n.Gu,DEFAULT_AVATAR_BACKGROUND_COLOR:()=>p.iq,DEFAULT_COMMIT_SHA_LENGTH:()=>p.ai,DEFAULT_WORKDIR_STATS:()=>p.OR,DndComponent:()=>e.Z,GRAPH_HEADER_ROW_HEIGHT:()=>p.rl,GRAPH_ROW_HEIGHT:()=>p.$0,GRAPH_ROW_INNER_HEIGHT:()=>p.cZ,GRAPH_ROW_LAZY_LOAD_COMMITS_OFFSET:()=>p.qG,GRAPH_SCROLL_MARKER_LANES:()=>p.dF,GraphColumnMode:()=>p.Um,GraphMarkerShape:()=>p.RG,HEADER_ROW_HEIGHT:()=>p.ze,HEADER_ROW_MARGIN_BOTTOM:()=>p.wi,INLINE_SUMMARY_MARGIN_LEFT:()=>p.aV,LeftPanelToGraphMarginGap:()=>p.mu,OPACITY_FACTOR_BY_THEME:()=>p.X9,REF_NODE_ICON_MARGIN:()=>p.am,REF_NODE_ICON_SPACING:()=>p.B,REF_NODE_ICON_WIDTH:()=>p.Rg,REF_NODE_OUTER_SPACING:()=>p.Vh,REF_ZONE_MARGIN_LEFT:()=>p.yv,REF_ZONE_MARGIN_RIGHT:()=>p.PB,REF_ZONE_MAX_REFS_TO_RENDER:()=>p.v6,REF_ZONE_MIN_WIDTH:()=>p.wy,REF_ZONE_SHOW_ICON_WIDTH:()=>p.mt,REF_ZONE_TEXT_HEIGHT:()=>p.pj,ResizableHandleCorrection:()=>p.b4,SCROLL_TO_ALIGNMENT_AUTO:()=>p.os,SCROLL_TO_ALIGNMENT_CENTER:()=>p.MQ,ScrollbarContainer:()=>t.Z,TIMESTAMP_FORMAT_DATE_TIME:()=>p.It,TINY_FILES_READOUT_FONT_SIZE:()=>p.wd,TINY_FILES_READOUT_RIGHT_MARGIN:()=>p.IX,TINY_ICON_RIGHT_MARGIN:()=>p.VB,TINY_ICON_SIZE:()=>p.dH,allMetadataTypes:()=>m.AI,changesZone:()=>p.WD,commitAuthorZone:()=>p.GF,commitDateTimeZone:()=>p.PL,commitMessageZone:()=>p.KE,commitNodeType:()=>n.o$,commitShaZone:()=>p.av,commitZone:()=>p.Wm,default:()=>x,getHostingServiceName:()=>g.y,graphCommitDescDisplayModes:()=>p.R_,graphMarkerMetadata:()=>p.Qh,graphMarkerShapeMetadata:()=>p.d_,graphZoneMetaData:()=>p.qi,issueMetadataType:()=>m.$M,lookbackLimitByPeriod:()=>p.YJ,mergeConflictNodeType:()=>n.S7,mergeNodeType:()=>n.lH,numGraphColumnsDefault:()=>p.uK,pullRequestMetadataType:()=>m.mQ,refTypes:()=>v.V,refZone:()=>p.jZ,stashNodeType:()=>n.kP,timelineMsgRowRenderId:()=>p.Gn,unsupportedRebaseWarningNodeType:()=>n.br,upstreamMetadataType:()=>m.uq,workDirType:()=>n.ch});var e=r(9915),t=r(7154),o=r(3607),n=r(827),d=r(2149),h={};for(const e in d)["default","DndComponent","ScrollbarContainer","CommitDateTimeSources","commitNodeType","mergeConflictNodeType","mergeNodeType","stashNodeType","unsupportedRebaseWarningNodeType","workDirType"].indexOf(e)<0&&(h[e]=()=>d[e]);r.d(c,h);var u=r(8289);h={};for(const e in u)["default","DndComponent","ScrollbarContainer","CommitDateTimeSources","commitNodeType","mergeConflictNodeType","mergeNodeType","stashNodeType","unsupportedRebaseWarningNodeType","workDirType"].indexOf(e)<0&&(h[e]=()=>u[e]);r.d(c,h);var p=r(3308),m=r(9453),g=r(7334),v=r(8649),y=r(664);h={};for(const e in y)["default","DndComponent","ScrollbarContainer","CommitDateTimeSources","commitNodeType","mergeConflictNodeType","mergeNodeType","stashNodeType","unsupportedRebaseWarningNodeType","workDirType","CHANGES_BAR_MIN_WIDTH","CHANGES_BAR_RIGHT_MARGIN","CHANGES_ZONE_MIN_WIDTH","CHANGES_ZONE_SHOW_ICON_WIDTH","COMMIT_AUTHOR_ZONE_AVATAR_INNER_DIAMETER","COMMIT_AUTHOR_ZONE_AVATAR_OUTER_DIAMETER","COMMIT_AUTHOR_ZONE_MIN_WIDTH","COMMIT_AUTHOR_ZONE_SHOW_ICON_WIDTH","COMMIT_DATE_TIME_ZONE_MIN_WIDTH","COMMIT_DATE_TIME_ZONE_SHOW_ICON_WIDTH","COMMIT_MESSAGE_ZONE_MIN_WIDTH","COMMIT_MESSAGE_ZONE_SHOW_ICON_WIDTH","COMMIT_NODE_MIN_ALPHA","COMMIT_SHA_ZONE_MIN_WIDTH","COMMIT_SHA_ZONE_SHOW_ICON_WIDTH","COMMIT_ZONE_DEFAULT_VIEWPORT_WIDTH_MIN","COMMIT_ZONE_EDGE_ARC_PADDING","COMMIT_ZONE_EDGE_ARC_RADIUS","COMMIT_ZONE_MARGIN_BOTTOM","COMMIT_ZONE_MARGIN_TOP","COMMIT_ZONE_ROW_HEIGHT","COMMIT_ZONE_ROW_INNER_HEIGHT","COMMIT_ZONE_SHOW_ICON_WIDTH","DEFAULT_AVATAR_BACKGROUND_COLOR","DEFAULT_COMMIT_SHA_LENGTH","DEFAULT_WORKDIR_STATS","GRAPH_HEADER_ROW_HEIGHT","GRAPH_ROW_HEIGHT","GRAPH_ROW_INNER_HEIGHT","GRAPH_ROW_LAZY_LOAD_COMMITS_OFFSET","GRAPH_SCROLL_MARKER_LANES","GraphColumnMode","GraphMarkerShape","HEADER_ROW_HEIGHT","HEADER_ROW_MARGIN_BOTTOM","INLINE_SUMMARY_MARGIN_LEFT","LeftPanelToGraphMarginGap","OPACITY_FACTOR_BY_THEME","REF_NODE_ICON_MARGIN","REF_NODE_ICON_SPACING","REF_NODE_ICON_WIDTH","REF_NODE_OUTER_SPACING","REF_ZONE_MARGIN_LEFT","REF_ZONE_MARGIN_RIGHT","REF_ZONE_MAX_REFS_TO_RENDER","REF_ZONE_MIN_WIDTH","REF_ZONE_SHOW_ICON_WIDTH","REF_ZONE_TEXT_HEIGHT","ResizableHandleCorrection","SCROLL_TO_ALIGNMENT_AUTO","SCROLL_TO_ALIGNMENT_CENTER","TIMESTAMP_FORMAT_DATE_TIME","TINY_FILES_READOUT_FONT_SIZE","TINY_FILES_READOUT_RIGHT_MARGIN","TINY_ICON_RIGHT_MARGIN","TINY_ICON_SIZE","changesZone","commitAuthorZone","commitDateTimeZone","commitMessageZone","commitShaZone","commitZone","graphCommitDescDisplayModes","graphMarkerMetadata","graphMarkerShapeMetadata","graphZoneMetaData","lookbackLimitByPeriod","numGraphColumnsDefault","refZone","timelineMsgRowRenderId","allMetadataTypes","issueMetadataType","pullRequestMetadataType","upstreamMetadataType","getHostingServiceName","refTypes"].indexOf(e)<0&&(h[e]=()=>y[e]);r.d(c,h);var w=r(6756);h={};for(const e in w)["default","DndComponent","ScrollbarContainer","CommitDateTimeSources","commitNodeType","mergeConflictNodeType","mergeNodeType","stashNodeType","unsupportedRebaseWarningNodeType","workDirType","CHANGES_BAR_MIN_WIDTH","CHANGES_BAR_RIGHT_MARGIN","CHANGES_ZONE_MIN_WIDTH","CHANGES_ZONE_SHOW_ICON_WIDTH","COMMIT_AUTHOR_ZONE_AVATAR_INNER_DIAMETER","COMMIT_AUTHOR_ZONE_AVATAR_OUTER_DIAMETER","COMMIT_AUTHOR_ZONE_MIN_WIDTH","COMMIT_AUTHOR_ZONE_SHOW_ICON_WIDTH","COMMIT_DATE_TIME_ZONE_MIN_WIDTH","COMMIT_DATE_TIME_ZONE_SHOW_ICON_WIDTH","COMMIT_MESSAGE_ZONE_MIN_WIDTH","COMMIT_MESSAGE_ZONE_SHOW_ICON_WIDTH","COMMIT_NODE_MIN_ALPHA","COMMIT_SHA_ZONE_MIN_WIDTH","COMMIT_SHA_ZONE_SHOW_ICON_WIDTH","COMMIT_ZONE_DEFAULT_VIEWPORT_WIDTH_MIN","COMMIT_ZONE_EDGE_ARC_PADDING","COMMIT_ZONE_EDGE_ARC_RADIUS","COMMIT_ZONE_MARGIN_BOTTOM","COMMIT_ZONE_MARGIN_TOP","COMMIT_ZONE_ROW_HEIGHT","COMMIT_ZONE_ROW_INNER_HEIGHT","COMMIT_ZONE_SHOW_ICON_WIDTH","DEFAULT_AVATAR_BACKGROUND_COLOR","DEFAULT_COMMIT_SHA_LENGTH","DEFAULT_WORKDIR_STATS","GRAPH_HEADER_ROW_HEIGHT","GRAPH_ROW_HEIGHT","GRAPH_ROW_INNER_HEIGHT","GRAPH_ROW_LAZY_LOAD_COMMITS_OFFSET","GRAPH_SCROLL_MARKER_LANES","GraphColumnMode","GraphMarkerShape","HEADER_ROW_HEIGHT","HEADER_ROW_MARGIN_BOTTOM","INLINE_SUMMARY_MARGIN_LEFT","LeftPanelToGraphMarginGap","OPACITY_FACTOR_BY_THEME","REF_NODE_ICON_MARGIN","REF_NODE_ICON_SPACING","REF_NODE_ICON_WIDTH","REF_NODE_OUTER_SPACING","REF_ZONE_MARGIN_LEFT","REF_ZONE_MARGIN_RIGHT","REF_ZONE_MAX_REFS_TO_RENDER","REF_ZONE_MIN_WIDTH","REF_ZONE_SHOW_ICON_WIDTH","REF_ZONE_TEXT_HEIGHT","ResizableHandleCorrection","SCROLL_TO_ALIGNMENT_AUTO","SCROLL_TO_ALIGNMENT_CENTER","TIMESTAMP_FORMAT_DATE_TIME","TINY_FILES_READOUT_FONT_SIZE","TINY_FILES_READOUT_RIGHT_MARGIN","TINY_ICON_RIGHT_MARGIN","TINY_ICON_SIZE","changesZone","commitAuthorZone","commitDateTimeZone","commitMessageZone","commitShaZone","commitZone","graphCommitDescDisplayModes","graphMarkerMetadata","graphMarkerShapeMetadata","graphZoneMetaData","lookbackLimitByPeriod","numGraphColumnsDefault","refZone","timelineMsgRowRenderId","allMetadataTypes","issueMetadataType","pullRequestMetadataType","upstreamMetadataType","getHostingServiceName","refTypes"].indexOf(e)<0&&(h[e]=()=>w[e]);r.d(c,h);var x=o.Z})(),e.exports=c})()},4516:e=>{var t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},o=0;o<10;o++)t["_"+String.fromCharCode(o)]=o;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,r){for(var c,d,h=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var p in c=Object(arguments[u]))o.call(c,p)&&(h[p]=c[p]);if(t){d=t(c);for(var m=0;m<d.length;m++)n.call(c,d[m])&&(h[d[m]]=c[d[m]])}}return h}},3975:(e,t,o)=>{var n=o(2735),r=o(4516),c=o(9146);function d(e){for(var t=arguments.length-1,o="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)o+="&args[]="+encodeURIComponent(arguments[n+1]);!function(e,t,o,n,r,c,d,h){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[o,n,r,c,d,h],p=0;(e=Error(t.replace(/%s/g,(function(){return u[p++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",o)}function h(e,t,o,n,r,c,d,h,u){var p=Array.prototype.slice.call(arguments,3);try{t.apply(o,p)}catch(e){this.onError(e)}}n||d("227");var u=!1,p=null,m=!1,g=null,v={onError:function(e){u=!0,p=e}};function y(e,t,o,n,r,c,d,m,g){u=!1,p=null,h.apply(v,arguments)}var w=null,x={};function S(){if(w)for(var e in x){var t=x[e],o=w.indexOf(e);if(-1<o||d("96",e),!T[o])for(var n in t.extractEvents||d("97",e),T[o]=t,o=t.eventTypes){var r=void 0,c=o[n],h=t,u=n;E.hasOwnProperty(u)&&d("99",u),E[u]=c;var p=c.phasedRegistrationNames;if(p){for(r in p)p.hasOwnProperty(r)&&_(p[r],h,u);r=!0}else c.registrationName?(_(c.registrationName,h,u),r=!0):r=!1;r||d("98",n,e)}}}function _(e,t,o){O[e]&&d("100",e),O[e]=t,A[e]=t.eventTypes[o].dependencies}var T=[],E={},O={},A={},N=null,$=null,P=null;function z(e,t,o){var n=e.type||"unknown-event";e.currentTarget=P(o),function(e,t,o,n,r,c,h,v,w){if(y.apply(this,arguments),u){if(u){var x=p;u=!1,p=null}else d("198"),x=void 0;m||(m=!0,g=x)}}(n,t,void 0,e),e.currentTarget=null}function G(e,t){return null==t&&d("30"),null==e?t:Array.isArray(e)?Array.isArray(t)?(e.push.apply(e,t),e):(e.push(t),e):Array.isArray(t)?[e].concat(t):[e,t]}function F(e,t,o){Array.isArray(e)?e.forEach(t,o):e&&t.call(o,e)}var B=null;function W(e){if(e){var t=e._dispatchListeners,o=e._dispatchInstances;if(Array.isArray(t))for(var n=0;n<t.length&&!e.isPropagationStopped();n++)z(e,t[n],o[n]);else t&&z(e,t,o);e._dispatchListeners=null,e._dispatchInstances=null,e.isPersistent()||e.constructor.release(e)}}var U={injectEventPluginOrder:function(e){w&&d("101"),w=Array.prototype.slice.call(e),S()},injectEventPluginsByName:function(e){var t,o=!1;for(t in e)if(e.hasOwnProperty(t)){var n=e[t];x.hasOwnProperty(t)&&x[t]===n||(x[t]&&d("102",t),x[t]=n,o=!0)}o&&S()}};function j(e,t){var o=e.stateNode;if(!o)return null;var n=N(o);if(!n)return null;o=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":(n=!n.disabled)||(n=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!n;break e;default:e=!1}return e?null:(o&&"function"!=typeof o&&d("231",t,typeof o),o)}function Z(e){if(null!==e&&(B=G(B,e)),e=B,B=null,e&&(F(e,W),B&&d("95"),m))throw e=g,m=!1,g=null,e}var q=Math.random().toString(36).slice(2),K="__reactInternalInstance$"+q,Y="__reactEventHandlers$"+q;function X(e){if(e[K])return e[K];for(;!e[K];){if(!e.parentNode)return null;e=e.parentNode}return 5===(e=e[K]).tag||6===e.tag?e:null}function Q(e){return!(e=e[K])||5!==e.tag&&6!==e.tag?null:e}function J(e){if(5===e.tag||6===e.tag)return e.stateNode;d("33")}function ee(e){return e[Y]||null}function te(e){do{e=e.return}while(e&&5!==e.tag);return e||null}function oe(e,t,o){(t=j(e,o.dispatchConfig.phasedRegistrationNames[t]))&&(o._dispatchListeners=G(o._dispatchListeners,t),o._dispatchInstances=G(o._dispatchInstances,e))}function ne(e){if(e&&e.dispatchConfig.phasedRegistrationNames){for(var t=e._targetInst,o=[];t;)o.push(t),t=te(t);for(t=o.length;0<t--;)oe(o[t],"captured",e);for(t=0;t<o.length;t++)oe(o[t],"bubbled",e)}}function re(e,t,o){e&&o&&o.dispatchConfig.registrationName&&(t=j(e,o.dispatchConfig.registrationName))&&(o._dispatchListeners=G(o._dispatchListeners,t),o._dispatchInstances=G(o._dispatchInstances,e))}function ie(e){e&&e.dispatchConfig.registrationName&&re(e._targetInst,null,e)}function se(e){F(e,ne)}var ae=!("undefined"==typeof window||!window.document||!window.document.createElement);function le(e,t){var o={};return o[e.toLowerCase()]=t.toLowerCase(),o["Webkit"+e]="webkit"+t,o["Moz"+e]="moz"+t,o}var ce={animationend:le("Animation","AnimationEnd"),animationiteration:le("Animation","AnimationIteration"),animationstart:le("Animation","AnimationStart"),transitionend:le("Transition","TransitionEnd")},de={},he={};function ue(e){if(de[e])return de[e];if(!ce[e])return e;var t,o=ce[e];for(t in o)if(o.hasOwnProperty(t)&&t in he)return de[e]=o[t];return e}ae&&(he=document.createElement("div").style,"AnimationEvent"in window||(delete ce.animationend.animation,delete ce.animationiteration.animation,delete ce.animationstart.animation),"TransitionEvent"in window||delete ce.transitionend.transition);var pe=ue("animationend"),fe=ue("animationiteration"),me=ue("animationstart"),ge=ue("transitionend"),be="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ve=null,ye=null,we=null;function Ce(){if(we)return we;var e,t,o=ye,n=o.length,r="value"in ve?ve.value:ve.textContent,c=r.length;for(e=0;e<n&&o[e]===r[e];e++);var d=n-e;for(t=1;t<=d&&o[n-t]===r[c-t];t++);return we=r.slice(e,1<t?1-t:void 0)}function xe(){return!0}function Se(){return!1}function _e(e,t,o,n){for(var r in this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=o,e=this.constructor.Interface)e.hasOwnProperty(r)&&((t=e[r])?this[r]=t(o):"target"===r?this.target=n:this[r]=o[r]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?xe:Se,this.isPropagationStopped=Se,this}function Te(e,t,o,n){if(this.eventPool.length){var r=this.eventPool.pop();return this.call(r,e,t,o,n),r}return new this(e,t,o,n)}function Re(e){e instanceof this||d("279"),e.destructor(),10>this.eventPool.length&&this.eventPool.push(e)}function ke(e){e.eventPool=[],e.getPooled=Te,e.release=Re}r(_e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=xe)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=xe)},persist:function(){this.isPersistent=xe},isPersistent:Se,destructor:function(){var e,t=this.constructor.Interface;for(e in t)this[e]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Se,this._dispatchInstances=this._dispatchListeners=null}}),_e.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},_e.extend=function(e){function t(){}function o(){return n.apply(this,arguments)}var n=this;t.prototype=n.prototype;var c=new t;return r(c,o.prototype),o.prototype=c,o.prototype.constructor=o,o.Interface=r({},n.Interface,e),o.extend=n.extend,ke(o),o},ke(_e);var Ee=_e.extend({data:null}),Oe=_e.extend({data:null}),Ie=[9,13,27,32],Me=ae&&"CompositionEvent"in window,De=null;ae&&"documentMode"in document&&(De=document.documentMode);var Ae=ae&&"TextEvent"in window&&!De,Ne=ae&&(!Me||De&&8<De&&11>=De),$e=String.fromCharCode(32),Pe={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},ze=!1;function He(e,t){switch(e){case"keyup":return-1!==Ie.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"blur":return!0;default:return!1}}function Le(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var Ge=!1;var Fe={eventTypes:Pe,extractEvents:function(e,t,o,n){var r=void 0,c=void 0;if(Me)e:{switch(e){case"compositionstart":r=Pe.compositionStart;break e;case"compositionend":r=Pe.compositionEnd;break e;case"compositionupdate":r=Pe.compositionUpdate;break e}r=void 0}else Ge?He(e,o)&&(r=Pe.compositionEnd):"keydown"===e&&229===o.keyCode&&(r=Pe.compositionStart);return r?(Ne&&"ko"!==o.locale&&(Ge||r!==Pe.compositionStart?r===Pe.compositionEnd&&Ge&&(c=Ce()):(ye="value"in(ve=n)?ve.value:ve.textContent,Ge=!0)),r=Ee.getPooled(r,t,o,n),c?r.data=c:null!==(c=Le(o))&&(r.data=c),se(r),c=r):c=null,(e=Ae?function(e,t){switch(e){case"compositionend":return Le(t);case"keypress":return 32!==t.which?null:(ze=!0,$e);case"textInput":return(e=t.data)===$e&&ze?null:e;default:return null}}(e,o):function(e,t){if(Ge)return"compositionend"===e||!Me&&He(e,t)?(e=Ce(),we=ye=ve=null,Ge=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ne&&"ko"!==t.locale?null:t.data}}(e,o))?((t=Oe.getPooled(Pe.beforeInput,t,o,n)).data=e,se(t)):t=null,null===c?t:null===t?c:[c,t]}},Be=null,We=null,Ue=null;function je(e){if(e=$(e)){"function"!=typeof Be&&d("280");var t=N(e.stateNode);Be(e.stateNode,e.type,t)}}function Ve(e){We?Ue?Ue.push(e):Ue=[e]:We=e}function Ze(){if(We){var e=We,t=Ue;if(Ue=We=null,je(e),t)for(e=0;e<t.length;e++)je(t[e])}}function qe(e,t){return e(t)}function Ke(e,t,o){return e(t,o)}function Ye(){}var Xe=!1;function Qe(e,t){if(Xe)return e(t);Xe=!0;try{return qe(e,t)}finally{Xe=!1,(null!==We||null!==Ue)&&(Ye(),Ze())}}var Je={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function et(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Je[e.type]:"textarea"===t}function tt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}function ot(e){if(!ae)return!1;var t=(e="on"+e)in document;return t||((t=document.createElement("div")).setAttribute(e,"return;"),t="function"==typeof t[e]),t}function nt(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function rt(e){e._valueTracker||(e._valueTracker=function(e){var t=nt(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==o&&"function"==typeof o.get&&"function"==typeof o.set){var r=o.get,c=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(e){n=""+e,c.call(this,e)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function it(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var o=t.getValue(),n="";return e&&(n=nt(e)?e.checked?"true":"false":e.value),(e=n)!==o&&(t.setValue(e),!0)}var st=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;st.hasOwnProperty("ReactCurrentDispatcher")||(st.ReactCurrentDispatcher={current:null});var at=/^(.*)[\\\/]/,lt="function"==typeof Symbol&&Symbol.for,ct=lt?Symbol.for("react.element"):60103,dt=lt?Symbol.for("react.portal"):60106,ht=lt?Symbol.for("react.fragment"):60107,ut=lt?Symbol.for("react.strict_mode"):60108,pt=lt?Symbol.for("react.profiler"):60114,ft=lt?Symbol.for("react.provider"):60109,mt=lt?Symbol.for("react.context"):60110,gt=lt?Symbol.for("react.concurrent_mode"):60111,bt=lt?Symbol.for("react.forward_ref"):60112,vt=lt?Symbol.for("react.suspense"):60113,yt=lt?Symbol.for("react.memo"):60115,wt=lt?Symbol.for("react.lazy"):60116,Ct="function"==typeof Symbol&&Symbol.iterator;function xt(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=Ct&&e[Ct]||e["@@iterator"])?e:null}function St(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case gt:return"ConcurrentMode";case ht:return"Fragment";case dt:return"Portal";case pt:return"Profiler";case ut:return"StrictMode";case vt:return"Suspense"}if("object"==typeof e)switch(e.$$typeof){case mt:return"Context.Consumer";case ft:return"Context.Provider";case bt:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case yt:return St(e.type);case wt:if(e=1===e._status?e._result:null)return St(e)}return null}function _t(e){var t="";do{e:switch(e.tag){case 3:case 4:case 6:case 7:case 10:case 9:var o="";break e;default:var n=e._debugOwner,r=e._debugSource,c=St(e.type);o=null,n&&(o=St(n.type)),n=c,c="",r?c=" (at "+r.fileName.replace(at,"")+":"+r.lineNumber+")":o&&(c=" (created by "+o+")"),o="\n    in "+(n||"Unknown")+c}t+=o,e=e.return}while(e);return t}var Tt=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rt=Object.prototype.hasOwnProperty,kt={},Et={};function Ot(e,t,o,n,r){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=n,this.attributeNamespace=r,this.mustUseProperty=o,this.propertyName=e,this.type=t}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){It[e]=new Ot(e,0,!1,e,null)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];It[t]=new Ot(t,1,!1,e[1],null)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){It[e]=new Ot(e,2,!1,e.toLowerCase(),null)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){It[e]=new Ot(e,2,!1,e,null)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){It[e]=new Ot(e,3,!1,e.toLowerCase(),null)})),["checked","multiple","muted","selected"].forEach((function(e){It[e]=new Ot(e,3,!0,e,null)})),["capture","download"].forEach((function(e){It[e]=new Ot(e,4,!1,e,null)})),["cols","rows","size","span"].forEach((function(e){It[e]=new Ot(e,6,!1,e,null)})),["rowSpan","start"].forEach((function(e){It[e]=new Ot(e,5,!1,e.toLowerCase(),null)}));var Mt=/[\-:]([a-z])/g;function Dt(e){return e[1].toUpperCase()}function At(e,t,o,n){var r=It.hasOwnProperty(t)?It[t]:null;(null!==r?0===r.type:!n&&(2<t.length&&("o"===t[0]||"O"===t[0])&&("n"===t[1]||"N"===t[1])))||(function(e,t,o,n){if(null==t||function(e,t,o,n){if(null!==o&&0===o.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!n&&(null!==o?!o.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,o,n))return!0;if(n)return!1;if(null!==o)switch(o.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,o,r,n)&&(o=null),n||null===r?function(e){return!!Rt.call(Et,e)||!Rt.call(kt,e)&&(Tt.test(e)?Et[e]=!0:(kt[e]=!0,!1))}(t)&&(null===o?e.removeAttribute(t):e.setAttribute(t,""+o)):r.mustUseProperty?e[r.propertyName]=null===o?3!==r.type&&"":o:(t=r.attributeName,n=r.attributeNamespace,null===o?e.removeAttribute(t):(o=3===(r=r.type)||4===r&&!0===o?"":""+o,n?e.setAttributeNS(n,t,o):e.setAttribute(t,o))))}function Nt(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function $t(e,t){var o=t.checked;return r({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=o?o:e._wrapperState.initialChecked})}function Pt(e,t){var o=null==t.defaultValue?"":t.defaultValue,n=null!=t.checked?t.checked:t.defaultChecked;o=Nt(null!=t.value?t.value:o),e._wrapperState={initialChecked:n,initialValue:o,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function zt(e,t){null!=(t=t.checked)&&At(e,"checked",t,!1)}function Ht(e,t){zt(e,t);var o=Nt(t.value),n=t.type;if(null!=o)"number"===n?(0===o&&""===e.value||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if("submit"===n||"reset"===n)return void e.removeAttribute("value");t.hasOwnProperty("value")?Gt(e,t.type,o):t.hasOwnProperty("defaultValue")&&Gt(e,t.type,Nt(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Lt(e,t,o){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!("submit"!==n&&"reset"!==n||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,o||t===e.value||(e.value=t),e.defaultValue=t}""!==(o=e.name)&&(e.name=""),e.defaultChecked=!e.defaultChecked,e.defaultChecked=!!e._wrapperState.initialChecked,""!==o&&(e.name=o)}function Gt(e,t,o){"number"===t&&e.ownerDocument.activeElement===e||(null==o?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(Mt,Dt);It[t]=new Ot(t,1,!1,e,null)})),"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(Mt,Dt);It[t]=new Ot(t,1,!1,e,"http://www.w3.org/1999/xlink")})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(Mt,Dt);It[t]=new Ot(t,1,!1,e,"http://www.w3.org/XML/1998/namespace")})),["tabIndex","crossOrigin"].forEach((function(e){It[e]=new Ot(e,1,!1,e.toLowerCase(),null)}));var Ft={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Bt(e,t,o){return(e=_e.getPooled(Ft.change,e,t,o)).type="change",Ve(o),se(e),e}var Wt=null,Ut=null;function jt(e){Z(e)}function Vt(e){if(it(J(e)))return e}function Zt(e,t){if("change"===e)return t}var qt=!1;function Kt(){Wt&&(Wt.detachEvent("onpropertychange",Yt),Ut=Wt=null)}function Yt(e){"value"===e.propertyName&&Vt(Ut)&&Qe(jt,e=Bt(Ut,e,tt(e)))}function Xt(e,t,o){"focus"===e?(Kt(),Ut=o,(Wt=t).attachEvent("onpropertychange",Yt)):"blur"===e&&Kt()}function Qt(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Vt(Ut)}function Jt(e,t){if("click"===e)return Vt(t)}function eo(e,t){if("input"===e||"change"===e)return Vt(t)}ae&&(qt=ot("input")&&(!document.documentMode||9<document.documentMode));var to={eventTypes:Ft,_isInputEventSupported:qt,extractEvents:function(e,t,o,n){var r=t?J(t):window,c=void 0,d=void 0,h=r.nodeName&&r.nodeName.toLowerCase();if("select"===h||"input"===h&&"file"===r.type?c=Zt:et(r)?qt?c=eo:(c=Qt,d=Xt):(h=r.nodeName)&&"input"===h.toLowerCase()&&("checkbox"===r.type||"radio"===r.type)&&(c=Jt),c&&(c=c(e,t)))return Bt(c,o,n);d&&d(e,r,t),"blur"===e&&(e=r._wrapperState)&&e.controlled&&"number"===r.type&&Gt(r,"number",r.value)}},oo=_e.extend({view:null,detail:null}),no={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ro(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=no[e])&&!!t[e]}function io(){return ro}var so=0,ao=0,lo=!1,co=!1,ho=oo.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:io,button:null,buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},movementX:function(e){if("movementX"in e)return e.movementX;var t=so;return so=e.screenX,lo?"mousemove"===e.type?e.screenX-t:0:(lo=!0,0)},movementY:function(e){if("movementY"in e)return e.movementY;var t=ao;return ao=e.screenY,co?"mousemove"===e.type?e.screenY-t:0:(co=!0,0)}}),uo=ho.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),po={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},fo={eventTypes:po,extractEvents:function(e,t,o,n){var r="mouseover"===e||"pointerover"===e,c="mouseout"===e||"pointerout"===e;if(r&&(o.relatedTarget||o.fromElement)||!c&&!r)return null;if(r=n.window===n?n:(r=n.ownerDocument)?r.defaultView||r.parentWindow:window,c?(c=t,t=(t=o.relatedTarget||o.toElement)?X(t):null):c=null,c===t)return null;var d=void 0,h=void 0,u=void 0,p=void 0;"mouseout"===e||"mouseover"===e?(d=ho,h=po.mouseLeave,u=po.mouseEnter,p="mouse"):"pointerout"!==e&&"pointerover"!==e||(d=uo,h=po.pointerLeave,u=po.pointerEnter,p="pointer");var m=null==c?r:J(c);if(r=null==t?r:J(t),(e=d.getPooled(h,c,o,n)).type=p+"leave",e.target=m,e.relatedTarget=r,(o=d.getPooled(u,t,o,n)).type=p+"enter",o.target=r,o.relatedTarget=m,n=t,c&&n)e:{for(r=n,p=0,d=t=c;d;d=te(d))p++;for(d=0,u=r;u;u=te(u))d++;for(;0<p-d;)t=te(t),p--;for(;0<d-p;)r=te(r),d--;for(;p--;){if(t===r||t===r.alternate)break e;t=te(t),r=te(r)}t=null}else t=null;for(r=t,t=[];c&&c!==r&&(null===(p=c.alternate)||p!==r);)t.push(c),c=te(c);for(c=[];n&&n!==r&&(null===(p=n.alternate)||p!==r);)c.push(n),n=te(n);for(n=0;n<t.length;n++)re(t[n],"bubbled",e);for(n=c.length;0<n--;)re(c[n],"captured",o);return[e,o]}};function mo(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t}var go=Object.prototype.hasOwnProperty;function bo(e,t){if(mo(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var o=Object.keys(e),n=Object.keys(t);if(o.length!==n.length)return!1;for(n=0;n<o.length;n++)if(!go.call(t,o[n])||!mo(e[o[n]],t[o[n]]))return!1;return!0}function vo(e){var t=e;if(e.alternate)for(;t.return;)t=t.return;else{if(0!=(2&t.effectTag))return 1;for(;t.return;)if(0!=(2&(t=t.return).effectTag))return 1}return 3===t.tag?2:3}function yo(e){2!==vo(e)&&d("188")}function wo(e){if(e=function(e){var t=e.alternate;if(!t)return 3===(t=vo(e))&&d("188"),1===t?null:e;for(var o=e,n=t;;){var r=o.return,c=r?r.alternate:null;if(!r||!c)break;if(r.child===c.child){for(var h=r.child;h;){if(h===o)return yo(r),e;if(h===n)return yo(r),t;h=h.sibling}d("188")}if(o.return!==n.return)o=r,n=c;else{h=!1;for(var u=r.child;u;){if(u===o){h=!0,o=r,n=c;break}if(u===n){h=!0,n=r,o=c;break}u=u.sibling}if(!h){for(u=c.child;u;){if(u===o){h=!0,o=c,n=r;break}if(u===n){h=!0,n=c,o=r;break}u=u.sibling}h||d("189")}}o.alternate!==n&&d("190")}return 3!==o.tag&&d("188"),o.stateNode.current===o?e:t}(e),!e)return null;for(var t=e;;){if(5===t.tag||6===t.tag)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}var Co=_e.extend({animationName:null,elapsedTime:null,pseudoElement:null}),xo=_e.extend({clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),So=oo.extend({relatedTarget:null});function _o(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}var To={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ro={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ko=oo.extend({key:function(e){if(e.key){var t=To[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=_o(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Ro[e.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:io,charCode:function(e){return"keypress"===e.type?_o(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?_o(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Eo=ho.extend({dataTransfer:null}),Oo=oo.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:io}),Io=_e.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),Mo=ho.extend({deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null}),Do=[["abort","abort"],[pe,"animationEnd"],[fe,"animationIteration"],[me,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[ge,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],Ao={},No={};function $o(e,t){var o=e[0],n="on"+((e=e[1])[0].toUpperCase()+e.slice(1));t={phasedRegistrationNames:{bubbled:n,captured:n+"Capture"},dependencies:[o],isInteractive:t},Ao[e]=t,No[o]=t}[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["auxclick","auxClick"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],["pointerdown","pointerDown"],["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach((function(e){$o(e,!0)})),Do.forEach((function(e){$o(e,!1)}));var Po={eventTypes:Ao,isInteractiveTopLevelEventType:function(e){return void 0!==(e=No[e])&&!0===e.isInteractive},extractEvents:function(e,t,o,n){var r=No[e];if(!r)return null;switch(e){case"keypress":if(0===_o(o))return null;case"keydown":case"keyup":e=ko;break;case"blur":case"focus":e=So;break;case"click":if(2===o.button)return null;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":e=ho;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":e=Eo;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":e=Oo;break;case pe:case fe:case me:e=Co;break;case ge:e=Io;break;case"scroll":e=oo;break;case"wheel":e=Mo;break;case"copy":case"cut":case"paste":e=xo;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":e=uo;break;default:e=_e}return se(t=e.getPooled(r,t,o,n)),t}},zo=Po.isInteractiveTopLevelEventType,Ho=[];function Lo(e){var t=e.targetInst,o=t;do{if(!o){e.ancestors.push(o);break}var n;for(n=o;n.return;)n=n.return;if(!(n=3!==n.tag?null:n.stateNode.containerInfo))break;e.ancestors.push(o),o=X(n)}while(o);for(o=0;o<e.ancestors.length;o++){t=e.ancestors[o];var r=tt(e.nativeEvent);n=e.topLevelType;for(var c=e.nativeEvent,d=null,h=0;h<T.length;h++){var u=T[h];u&&(u=u.extractEvents(n,t,c,r))&&(d=G(d,u))}Z(d)}}var Go=!0;function Fo(e,t){if(!t)return null;var o=(zo(e)?Wo:Uo).bind(null,e);t.addEventListener(e,o,!1)}function Bo(e,t){if(!t)return null;var o=(zo(e)?Wo:Uo).bind(null,e);t.addEventListener(e,o,!0)}function Wo(e,t){Ke(Uo,e,t)}function Uo(e,t){if(Go){var o=tt(t);if(null===(o=X(o))||"number"!=typeof o.tag||2===vo(o)||(o=null),Ho.length){var n=Ho.pop();n.topLevelType=e,n.nativeEvent=t,n.targetInst=o,e=n}else e={topLevelType:e,nativeEvent:t,targetInst:o,ancestors:[]};try{Qe(Lo,e)}finally{e.topLevelType=null,e.nativeEvent=null,e.targetInst=null,e.ancestors.length=0,10>Ho.length&&Ho.push(e)}}}var jo={},Vo=0,Zo="_reactListenersID"+(""+Math.random()).slice(2);function qo(e){return Object.prototype.hasOwnProperty.call(e,Zo)||(e[Zo]=Vo++,jo[e[Zo]]={}),jo[e[Zo]]}function Ko(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Yo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xo(e,t){var o,n=Yo(e);for(e=0;n;){if(3===n.nodeType){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yo(n)}}function Qo(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Qo(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function Jo(){for(var e=window,t=Ko();t instanceof e.HTMLIFrameElement;){try{e=t.contentDocument.defaultView}catch(e){break}t=Ko(e.document)}return t}function en(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function on(e){var t=Jo(),o=e.focusedElem,n=e.selectionRange;if(t!==o&&o&&o.ownerDocument&&Qo(o.ownerDocument.documentElement,o)){if(null!==n&&en(o))if(t=n.start,void 0===(e=n.end)&&(e=t),"selectionStart"in o)o.selectionStart=t,o.selectionEnd=Math.min(e,o.value.length);else if((e=(t=o.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var r=o.textContent.length,c=Math.min(n.start,r);n=void 0===n.end?c:Math.min(n.end,r),!e.extend&&c>n&&(r=n,n=c,c=r),r=Xo(o,c);var d=Xo(o,n);r&&d&&(1!==e.rangeCount||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&((t=t.createRange()).setStart(r.node,r.offset),e.removeAllRanges(),c>n?(e.addRange(t),e.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),e.addRange(t)))}for(t=[],e=o;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof o.focus&&o.focus(),o=0;o<t.length;o++)(e=t[o]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var nn=ae&&"documentMode"in document&&11>=document.documentMode,rn={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},an=null,ln=null,dn=null,hn=!1;function un(e,t){var o=t.window===t?t.document:9===t.nodeType?t:t.ownerDocument;return hn||null==an||an!==Ko(o)?null:("selectionStart"in(o=an)&&en(o)?o={start:o.selectionStart,end:o.selectionEnd}:o={anchorNode:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset},dn&&bo(dn,o)?null:(dn=o,(e=_e.getPooled(rn.select,ln,e,t)).type="select",e.target=an,se(e),e))}var pn={eventTypes:rn,extractEvents:function(e,t,o,n){var r,c=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;if(!(r=!c)){e:{c=qo(c),r=A.onSelect;for(var d=0;d<r.length;d++){var h=r[d];if(!c.hasOwnProperty(h)||!c[h]){c=!1;break e}}c=!0}r=!c}if(r)return null;switch(c=t?J(t):window,e){case"focus":(et(c)||"true"===c.contentEditable)&&(an=c,ln=t,dn=null);break;case"blur":dn=ln=an=null;break;case"mousedown":hn=!0;break;case"contextmenu":case"mouseup":case"dragend":return hn=!1,un(o,n);case"selectionchange":if(nn)break;case"keydown":case"keyup":return un(o,n)}return null}};function fn(e,t){return e=r({children:void 0},t),(t=function(e){var t="";return n.Children.forEach(e,(function(e){null!=e&&(t+=e)})),t}(t.children))&&(e.children=t),e}function gn(e,t,o,n){if(e=e.options,t){t={};for(var r=0;r<o.length;r++)t["$"+o[r]]=!0;for(o=0;o<e.length;o++)r=t.hasOwnProperty("$"+e[o].value),e[o].selected!==r&&(e[o].selected=r),r&&n&&(e[o].defaultSelected=!0)}else{for(o=""+Nt(o),t=null,r=0;r<e.length;r++){if(e[r].value===o)return e[r].selected=!0,void(n&&(e[r].defaultSelected=!0));null!==t||e[r].disabled||(t=e[r])}null!==t&&(t.selected=!0)}}function bn(e,t){return null!=t.dangerouslySetInnerHTML&&d("91"),r({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vn(e,t){var o=t.value;null==o&&(o=t.defaultValue,null!=(t=t.children)&&(null!=o&&d("92"),Array.isArray(t)&&(1>=t.length||d("93"),t=t[0]),o=t),null==o&&(o="")),e._wrapperState={initialValue:Nt(o)}}function yn(e,t){var o=Nt(t.value),n=Nt(t.defaultValue);null!=o&&((o=""+o)!==e.value&&(e.value=o),null==t.defaultValue&&e.defaultValue!==o&&(e.defaultValue=o)),null!=n&&(e.defaultValue=""+n)}function wn(e){var t=e.textContent;t===e._wrapperState.initialValue&&(e.value=t)}U.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")),N=ee,$=Q,P=J,U.injectEventPluginsByName({SimpleEventPlugin:Po,EnterLeaveEventPlugin:fo,ChangeEventPlugin:to,SelectEventPlugin:pn,BeforeInputEventPlugin:Fe});var Cn={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function xn(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sn(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?xn(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var _n,Tn=void 0,Rn=(_n=function(e,t){if(e.namespaceURI!==Cn.svg||"innerHTML"in e)e.innerHTML=t;else{for((Tn=Tn||document.createElement("div")).innerHTML="<svg>"+t+"</svg>",t=Tn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,o,n){MSApp.execUnsafeLocalFunction((function(){return _n(e,t)}))}:_n);function kn(e,t){if(t){var o=e.firstChild;if(o&&o===e.lastChild&&3===o.nodeType)return void(o.nodeValue=t)}e.textContent=t}var En={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},On=["Webkit","ms","Moz","O"];function In(e,t,o){return null==t||"boolean"==typeof t||""===t?"":o||"number"!=typeof t||0===t||En.hasOwnProperty(e)&&En[e]?(""+t).trim():t+"px"}function Mn(e,t){for(var o in e=e.style,t)if(t.hasOwnProperty(o)){var n=0===o.indexOf("--"),r=In(o,t[o],n);"float"===o&&(o="cssFloat"),n?e.setProperty(o,r):e[o]=r}}Object.keys(En).forEach((function(e){On.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),En[t]=En[e]}))}));var Dn=r({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function An(e,t){t&&(Dn[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML)&&d("137",e,""),null!=t.dangerouslySetInnerHTML&&(null!=t.children&&d("60"),"object"==typeof t.dangerouslySetInnerHTML&&"__html"in t.dangerouslySetInnerHTML||d("61")),null!=t.style&&"object"!=typeof t.style&&d("62",""))}function Nn(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function $n(e,t){var o=qo(e=9===e.nodeType||11===e.nodeType?e:e.ownerDocument);t=A[t];for(var n=0;n<t.length;n++){var r=t[n];if(!o.hasOwnProperty(r)||!o[r]){switch(r){case"scroll":Bo("scroll",e);break;case"focus":case"blur":Bo("focus",e),Bo("blur",e),o.blur=!0,o.focus=!0;break;case"cancel":case"close":ot(r)&&Bo(r,e);break;case"invalid":case"submit":case"reset":break;default:-1===be.indexOf(r)&&Fo(r,e)}o[r]=!0}}}function Pn(){}var zn=null,Hn=null;function Ln(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function Gn(e,t){return"textarea"===e||"option"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var Fn="function"==typeof setTimeout?setTimeout:void 0,Bn="function"==typeof clearTimeout?clearTimeout:void 0,Wn=c.unstable_scheduleCallback,Un=c.unstable_cancelCallback;function jn(e){for(e=e.nextSibling;e&&1!==e.nodeType&&3!==e.nodeType;)e=e.nextSibling;return e}function Vn(e){for(e=e.firstChild;e&&1!==e.nodeType&&3!==e.nodeType;)e=e.nextSibling;return e}new Set;var Zn=[],qn=-1;function Kn(e){0>qn||(e.current=Zn[qn],Zn[qn]=null,qn--)}function Yn(e,t){qn++,Zn[qn]=e.current,e.current=t}var Xn={},Qn={current:Xn},Jn={current:!1},er=Xn;function tr(e,t){var o=e.type.contextTypes;if(!o)return Xn;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var r,c={};for(r in o)c[r]=t[r];return n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=c),c}function or(e){return null!=(e=e.childContextTypes)}function nr(e){Kn(Jn),Kn(Qn)}function rr(e){Kn(Jn),Kn(Qn)}function ir(e,t,o){Qn.current!==Xn&&d("168"),Yn(Qn,t),Yn(Jn,o)}function sr(e,t,o){var n=e.stateNode;if(e=t.childContextTypes,"function"!=typeof n.getChildContext)return o;for(var c in n=n.getChildContext())c in e||d("108",St(t)||"Unknown",c);return r({},o,n)}function ar(e){var t=e.stateNode;return t=t&&t.__reactInternalMemoizedMergedChildContext||Xn,er=Qn.current,Yn(Qn,t),Yn(Jn,Jn.current),!0}function lr(e,t,o){var n=e.stateNode;n||d("169"),o?(t=sr(e,t,er),n.__reactInternalMemoizedMergedChildContext=t,Kn(Jn),Kn(Qn),Yn(Qn,t)):Kn(Jn),Yn(Jn,o)}var cr=null,dr=null;function hr(e){return function(t){try{return e(t)}catch(e){}}}function ur(e,t,o,n){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.contextDependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childExpirationTime=this.expirationTime=0,this.alternate=null}function pr(e,t,o,n){return new ur(e,t,o,n)}function fr(e){return!(!(e=e.prototype)||!e.isReactComponent)}function mr(e,t){var o=e.alternate;return null===o?((o=pr(e.tag,t,e.key,e.mode)).elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=t,o.effectTag=0,o.nextEffect=null,o.firstEffect=null,o.lastEffect=null),o.childExpirationTime=e.childExpirationTime,o.expirationTime=e.expirationTime,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,o.contextDependencies=e.contextDependencies,o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function gr(e,t,o,n,r,c){var h=2;if(n=e,"function"==typeof e)fr(e)&&(h=1);else if("string"==typeof e)h=5;else e:switch(e){case ht:return br(o.children,r,c,t);case gt:return vr(o,3|r,c,t);case ut:return vr(o,2|r,c,t);case pt:return(e=pr(12,o,t,4|r)).elementType=pt,e.type=pt,e.expirationTime=c,e;case vt:return(e=pr(13,o,t,r)).elementType=vt,e.type=vt,e.expirationTime=c,e;default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case ft:h=10;break e;case mt:h=9;break e;case bt:h=11;break e;case yt:h=14;break e;case wt:h=16,n=null;break e}d("130",null==e?e:typeof e,"")}return(t=pr(h,o,t,r)).elementType=e,t.type=n,t.expirationTime=c,t}function br(e,t,o,n){return(e=pr(7,e,n,t)).expirationTime=o,e}function vr(e,t,o,n){return e=pr(8,e,n,t),t=0==(1&t)?ut:gt,e.elementType=t,e.type=t,e.expirationTime=o,e}function yr(e,t,o){return(e=pr(6,e,null,t)).expirationTime=o,e}function wr(e,t,o){return(t=pr(4,null!==e.children?e.children:[],e.key,t)).expirationTime=o,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Cr(e,t){e.didError=!1;var o=e.earliestPendingTime;0===o?e.earliestPendingTime=e.latestPendingTime=t:o<t?e.earliestPendingTime=t:e.latestPendingTime>t&&(e.latestPendingTime=t),_r(t,e)}function xr(e,t){e.didError=!1,e.latestPingedTime>=t&&(e.latestPingedTime=0);var o=e.earliestPendingTime,n=e.latestPendingTime;o===t?e.earliestPendingTime=n===t?e.latestPendingTime=0:n:n===t&&(e.latestPendingTime=o),o=e.earliestSuspendedTime,n=e.latestSuspendedTime,0===o?e.earliestSuspendedTime=e.latestSuspendedTime=t:o<t?e.earliestSuspendedTime=t:n>t&&(e.latestSuspendedTime=t),_r(t,e)}function Sr(e,t){var o=e.earliestPendingTime;return o>t&&(t=o),(e=e.earliestSuspendedTime)>t&&(t=e),t}function _r(e,t){var o=t.earliestSuspendedTime,n=t.latestSuspendedTime,r=t.earliestPendingTime,c=t.latestPingedTime;0===(r=0!==r?r:c)&&(0===e||n<e)&&(r=n),0!==(e=r)&&o>e&&(e=o),t.nextExpirationTimeToWorkOn=r,t.expirationTime=e}function Tr(e,t){if(e&&e.defaultProps)for(var o in t=r({},t),e=e.defaultProps)void 0===t[o]&&(t[o]=e[o]);return t}var Er=(new n.Component).refs;function Or(e,t,o,n){o=null==(o=o(n,t=e.memoizedState))?t:r({},t,o),e.memoizedState=o,null!==(n=e.updateQueue)&&0===e.expirationTime&&(n.baseState=o)}var Ir={isMounted:function(e){return!!(e=e._reactInternalFiber)&&2===vo(e)},enqueueSetState:function(e,t,o){e=e._reactInternalFiber;var n=sl(),r=Ms(n=Ma(n,e));r.payload=t,null!=o&&(r.callback=o),Ta(),As(e,r),$a(e,n)},enqueueReplaceState:function(e,t,o){e=e._reactInternalFiber;var n=sl(),r=Ms(n=Ma(n,e));r.tag=Ts,r.payload=t,null!=o&&(r.callback=o),Ta(),As(e,r),$a(e,n)},enqueueForceUpdate:function(e,t){e=e._reactInternalFiber;var o=sl(),n=Ms(o=Ma(o,e));n.tag=Rs,null!=t&&(n.callback=t),Ta(),As(e,n),$a(e,o)}};function Mr(e,t,o,n,r,c,d){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(n,c,d):!t.prototype||!t.prototype.isPureReactComponent||(!bo(o,n)||!bo(r,c))}function Dr(e,t,o){var n=!1,r=Xn,c=t.contextType;return"object"==typeof c&&null!==c?c=Ss(c):(r=or(t)?er:Qn.current,c=(n=null!=(n=t.contextTypes))?tr(e,r):Xn),t=new t(o,c),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=Ir,e.stateNode=t,t._reactInternalFiber=e,n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=c),t}function Nr(e,t,o,n){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(o,n),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(o,n),t.state!==e&&Ir.enqueueReplaceState(t,t.state,null)}function $r(e,t,o,n){var r=e.stateNode;r.props=o,r.state=e.memoizedState,r.refs=Er;var c=t.contextType;"object"==typeof c&&null!==c?r.context=Ss(c):(c=or(t)?er:Qn.current,r.context=tr(e,c)),null!==(c=e.updateQueue)&&(zs(e,c,o,r,n),r.state=e.memoizedState),"function"==typeof(c=t.getDerivedStateFromProps)&&(Or(e,t,c,o),r.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof r.getSnapshotBeforeUpdate||"function"!=typeof r.UNSAFE_componentWillMount&&"function"!=typeof r.componentWillMount||(t=r.state,"function"==typeof r.componentWillMount&&r.componentWillMount(),"function"==typeof r.UNSAFE_componentWillMount&&r.UNSAFE_componentWillMount(),t!==r.state&&Ir.enqueueReplaceState(r,r.state,null),null!==(c=e.updateQueue)&&(zs(e,c,o,r,n),r.state=e.memoizedState)),"function"==typeof r.componentDidMount&&(e.effectTag|=4)}var zr=Array.isArray;function Hr(e,t,o){if(null!==(e=o.ref)&&"function"!=typeof e&&"object"!=typeof e){if(o._owner){o=o._owner;var n=void 0;o&&(1!==o.tag&&d("309"),n=o.stateNode),n||d("147",e);var r=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===r?t.ref:(t=function(e){var t=n.refs;t===Er&&(t=n.refs={}),null===e?delete t[r]:t[r]=e},t._stringRef=r,t)}"string"!=typeof e&&d("284"),o._owner||d("290",e)}return e}function Lr(e,t){"textarea"!==e.type&&d("31","[object Object]"===Object.prototype.toString.call(t)?"object with keys {"+Object.keys(t).join(", ")+"}":t,"")}function Gr(e){function t(t,o){if(e){var n=t.lastEffect;null!==n?(n.nextEffect=o,t.lastEffect=o):t.firstEffect=t.lastEffect=o,o.nextEffect=null,o.effectTag=8}}function o(o,n){if(!e)return null;for(;null!==n;)t(o,n),n=n.sibling;return null}function n(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function r(e,t,o){return(e=mr(e,t)).index=0,e.sibling=null,e}function c(t,o,n){return t.index=n,e?null!==(n=t.alternate)?(n=n.index)<o?(t.effectTag=2,o):n:(t.effectTag=2,o):o}function h(t){return e&&null===t.alternate&&(t.effectTag=2),t}function u(e,t,o,n){return null===t||6!==t.tag?((t=yr(o,e.mode,n)).return=e,t):((t=r(t,o)).return=e,t)}function p(e,t,o,n){return null!==t&&t.elementType===o.type?((n=r(t,o.props)).ref=Hr(e,t,o),n.return=e,n):((n=gr(o.type,o.key,o.props,null,e.mode,n)).ref=Hr(e,t,o),n.return=e,n)}function m(e,t,o,n){return null===t||4!==t.tag||t.stateNode.containerInfo!==o.containerInfo||t.stateNode.implementation!==o.implementation?((t=wr(o,e.mode,n)).return=e,t):((t=r(t,o.children||[])).return=e,t)}function g(e,t,o,n,c){return null===t||7!==t.tag?((t=br(o,e.mode,n,c)).return=e,t):((t=r(t,o)).return=e,t)}function v(e,t,o){if("string"==typeof t||"number"==typeof t)return(t=yr(""+t,e.mode,o)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case ct:return(o=gr(t.type,t.key,t.props,null,e.mode,o)).ref=Hr(e,null,t),o.return=e,o;case dt:return(t=wr(t,e.mode,o)).return=e,t}if(zr(t)||xt(t))return(t=br(t,e.mode,o,null)).return=e,t;Lr(e,t)}return null}function y(e,t,o,n){var r=null!==t?t.key:null;if("string"==typeof o||"number"==typeof o)return null!==r?null:u(e,t,""+o,n);if("object"==typeof o&&null!==o){switch(o.$$typeof){case ct:return o.key===r?o.type===ht?g(e,t,o.props.children,n,r):p(e,t,o,n):null;case dt:return o.key===r?m(e,t,o,n):null}if(zr(o)||xt(o))return null!==r?null:g(e,t,o,n,null);Lr(e,o)}return null}function w(e,t,o,n,r){if("string"==typeof n||"number"==typeof n)return u(t,e=e.get(o)||null,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case ct:return e=e.get(null===n.key?o:n.key)||null,n.type===ht?g(t,e,n.props.children,r,n.key):p(t,e,n,r);case dt:return m(t,e=e.get(null===n.key?o:n.key)||null,n,r)}if(zr(n)||xt(n))return g(t,e=e.get(o)||null,n,r,null);Lr(t,n)}return null}function x(r,d,h,u){for(var p=null,m=null,g=d,x=d=0,S=null;null!==g&&x<h.length;x++){g.index>x?(S=g,g=null):S=g.sibling;var _=y(r,g,h[x],u);if(null===_){null===g&&(g=S);break}e&&g&&null===_.alternate&&t(r,g),d=c(_,d,x),null===m?p=_:m.sibling=_,m=_,g=S}if(x===h.length)return o(r,g),p;if(null===g){for(;x<h.length;x++)(g=v(r,h[x],u))&&(d=c(g,d,x),null===m?p=g:m.sibling=g,m=g);return p}for(g=n(r,g);x<h.length;x++)(S=w(g,r,x,h[x],u))&&(e&&null!==S.alternate&&g.delete(null===S.key?x:S.key),d=c(S,d,x),null===m?p=S:m.sibling=S,m=S);return e&&g.forEach((function(e){return t(r,e)})),p}function S(r,h,u,p){var m=xt(u);"function"!=typeof m&&d("150"),null==(u=m.call(u))&&d("151");for(var g=m=null,x=h,S=h=0,_=null,T=u.next();null!==x&&!T.done;S++,T=u.next()){x.index>S?(_=x,x=null):_=x.sibling;var E=y(r,x,T.value,p);if(null===E){x||(x=_);break}e&&x&&null===E.alternate&&t(r,x),h=c(E,h,S),null===g?m=E:g.sibling=E,g=E,x=_}if(T.done)return o(r,x),m;if(null===x){for(;!T.done;S++,T=u.next())null!==(T=v(r,T.value,p))&&(h=c(T,h,S),null===g?m=T:g.sibling=T,g=T);return m}for(x=n(r,x);!T.done;S++,T=u.next())null!==(T=w(x,r,S,T.value,p))&&(e&&null!==T.alternate&&x.delete(null===T.key?S:T.key),h=c(T,h,S),null===g?m=T:g.sibling=T,g=T);return e&&x.forEach((function(e){return t(r,e)})),m}return function(e,n,c,u){var p="object"==typeof c&&null!==c&&c.type===ht&&null===c.key;p&&(c=c.props.children);var m="object"==typeof c&&null!==c;if(m)switch(c.$$typeof){case ct:e:{for(m=c.key,p=n;null!==p;){if(p.key===m){if(7===p.tag?c.type===ht:p.elementType===c.type){o(e,p.sibling),(n=r(p,c.type===ht?c.props.children:c.props)).ref=Hr(e,p,c),n.return=e,e=n;break e}o(e,p);break}t(e,p),p=p.sibling}c.type===ht?((n=br(c.props.children,e.mode,u,c.key)).return=e,e=n):((u=gr(c.type,c.key,c.props,null,e.mode,u)).ref=Hr(e,n,c),u.return=e,e=u)}return h(e);case dt:e:{for(p=c.key;null!==n;){if(n.key===p){if(4===n.tag&&n.stateNode.containerInfo===c.containerInfo&&n.stateNode.implementation===c.implementation){o(e,n.sibling),(n=r(n,c.children||[])).return=e,e=n;break e}o(e,n);break}t(e,n),n=n.sibling}(n=wr(c,e.mode,u)).return=e,e=n}return h(e)}if("string"==typeof c||"number"==typeof c)return c=""+c,null!==n&&6===n.tag?(o(e,n.sibling),(n=r(n,c)).return=e,e=n):(o(e,n),(n=yr(c,e.mode,u)).return=e,e=n),h(e);if(zr(c))return x(e,n,c,u);if(xt(c))return S(e,n,c,u);if(m&&Lr(e,c),void 0===c&&!p)switch(e.tag){case 1:case 0:d("152",(u=e.type).displayName||u.name||"Component")}return o(e,n)}}var Fr=Gr(!0),Br=Gr(!1),Wr={},Ur={current:Wr},jr={current:Wr},Vr={current:Wr};function Zr(e){return e===Wr&&d("174"),e}function qr(e,t){Yn(Vr,t),Yn(jr,e),Yn(Ur,Wr);var o=t.nodeType;switch(o){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Sn(null,"");break;default:t=Sn(t=(o=8===o?t.parentNode:t).namespaceURI||null,o=o.tagName)}Kn(Ur),Yn(Ur,t)}function Kr(e){Kn(Ur),Kn(jr),Kn(Vr)}function Xr(e){Zr(Vr.current);var t=Zr(Ur.current),o=Sn(t,e.type);t!==o&&(Yn(jr,e),Yn(Ur,o))}function Qr(e){jr.current===e&&(Kn(Ur),Kn(jr))}var ei=0,ti=2,oi=4,ni=8,ri=16,ii=32,si=64,ai=128,li=st.ReactCurrentDispatcher,ci=0,di=null,hi=null,ui=null,pi=null,fi=null,gi=null,vi=0,yi=null,wi=0,Ci=!1,xi=null,Si=0;function _i(){d("307")}function Ti(e,t){if(null===t)return!1;for(var o=0;o<t.length&&o<e.length;o++)if(!mo(e[o],t[o]))return!1;return!0}function Ri(e,t,o,n,r,c){if(ci=c,di=t,ui=null!==e?e.memoizedState:null,li.current=null===ui?Bi:Wi,t=o(n,r),Ci){do{Ci=!1,Si+=1,ui=null!==e?e.memoizedState:null,gi=pi,yi=fi=hi=null,li.current=Wi,t=o(n,r)}while(Ci);xi=null,Si=0}return li.current=Gi,(e=di).memoizedState=pi,e.expirationTime=vi,e.updateQueue=yi,e.effectTag|=wi,e=null!==hi&&null!==hi.next,ci=0,gi=fi=pi=ui=hi=di=null,vi=0,yi=null,wi=0,e&&d("300"),t}function Ei(){li.current=Gi,ci=0,gi=fi=pi=ui=hi=di=null,vi=0,yi=null,wi=0,Ci=!1,xi=null,Si=0}function Oi(){var e={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};return null===fi?pi=fi=e:fi=fi.next=e,fi}function Ii(){if(null!==gi)gi=(fi=gi).next,ui=null!==(hi=ui)?hi.next:null;else{null===ui&&d("310");var e={memoizedState:(hi=ui).memoizedState,baseState:hi.baseState,queue:hi.queue,baseUpdate:hi.baseUpdate,next:null};fi=null===fi?pi=e:fi.next=e,ui=hi.next}return fi}function Mi(e,t){return"function"==typeof t?t(e):t}function Di(e){var t=Ii(),o=t.queue;if(null===o&&d("311"),0<Si){var n=o.dispatch;if(null!==xi){var r=xi.get(o);if(void 0!==r){xi.delete(o);var c=t.memoizedState;do{c=e(c,r.action),r=r.next}while(null!==r);return mo(c,t.memoizedState)||(es=!0),t.memoizedState=c,t.baseUpdate===o.last&&(t.baseState=c),o.eagerReducer=e,o.eagerState=c,[c,n]}}return[t.memoizedState,n]}n=o.last;var h=t.baseUpdate;if(c=t.baseState,null!==h?(null!==n&&(n.next=null),n=h.next):n=null!==n?n.next:null,null!==n){var u=r=null,p=n,m=!1;do{var g=p.expirationTime;g<ci?(m||(m=!0,u=h,r=c),g>vi&&(vi=g)):c=p.eagerReducer===e?p.eagerState:e(c,p.action),h=p,p=p.next}while(null!==p&&p!==n);m||(u=h,r=c),mo(c,t.memoizedState)||(es=!0),t.memoizedState=c,t.baseUpdate=u,t.baseState=r,o.eagerReducer=e,o.eagerState=c}return[t.memoizedState,o.dispatch]}function Ai(e,t,o,n){return e={tag:e,create:t,destroy:o,deps:n,next:null},null===yi?(yi={lastEffect:null}).lastEffect=e.next=e:null===(t=yi.lastEffect)?yi.lastEffect=e.next=e:(o=t.next,t.next=e,e.next=o,yi.lastEffect=e),e}function Ni(e,t,o,n){var r=Oi();wi|=e,r.memoizedState=Ai(t,o,void 0,void 0===n?null:n)}function $i(e,t,o,n){var r=Ii();n=void 0===n?null:n;var c=void 0;if(null!==hi){var d=hi.memoizedState;if(c=d.destroy,null!==n&&Ti(n,d.deps))return void Ai(ei,o,c,n)}wi|=e,r.memoizedState=Ai(t,o,c,n)}function Pi(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function zi(){}function Li(e,t,o){25>Si||d("301");var n=e.alternate;if(e===di||null!==n&&n===di)if(Ci=!0,e={expirationTime:ci,action:o,eagerReducer:null,eagerState:null,next:null},null===xi&&(xi=new Map),void 0===(o=xi.get(t)))xi.set(t,e);else{for(t=o;null!==t.next;)t=t.next;t.next=e}else{Ta();var r=sl(),c={expirationTime:r=Ma(r,e),action:o,eagerReducer:null,eagerState:null,next:null},h=t.last;if(null===h)c.next=c;else{var u=h.next;null!==u&&(c.next=u),h.next=c}if(t.last=c,0===e.expirationTime&&(null===n||0===n.expirationTime)&&null!==(n=t.eagerReducer))try{var p=t.eagerState,m=n(p,o);if(c.eagerReducer=n,c.eagerState=m,mo(m,p))return}catch(e){}$a(e,r)}}var Gi={readContext:Ss,useCallback:_i,useContext:_i,useEffect:_i,useImperativeHandle:_i,useLayoutEffect:_i,useMemo:_i,useReducer:_i,useRef:_i,useState:_i,useDebugValue:_i},Bi={readContext:Ss,useCallback:function(e,t){return Oi().memoizedState=[e,void 0===t?null:t],e},useContext:Ss,useEffect:function(e,t){return Ni(516,ai|si,e,t)},useImperativeHandle:function(e,t,o){return o=null!=o?o.concat([e]):null,Ni(4,oi|ii,Pi.bind(null,t,e),o)},useLayoutEffect:function(e,t){return Ni(4,oi|ii,e,t)},useMemo:function(e,t){var o=Oi();return t=void 0===t?null:t,e=e(),o.memoizedState=[e,t],e},useReducer:function(e,t,o){var n=Oi();return t=void 0!==o?o(t):t,n.memoizedState=n.baseState=t,e=(e=n.queue={last:null,dispatch:null,eagerReducer:e,eagerState:t}).dispatch=Li.bind(null,di,e),[n.memoizedState,e]},useRef:function(e){return e={current:e},Oi().memoizedState=e},useState:function(e){var t=Oi();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e=(e=t.queue={last:null,dispatch:null,eagerReducer:Mi,eagerState:e}).dispatch=Li.bind(null,di,e),[t.memoizedState,e]},useDebugValue:zi},Wi={readContext:Ss,useCallback:function(e,t){var o=Ii();t=void 0===t?null:t;var n=o.memoizedState;return null!==n&&null!==t&&Ti(t,n[1])?n[0]:(o.memoizedState=[e,t],e)},useContext:Ss,useEffect:function(e,t){return $i(516,ai|si,e,t)},useImperativeHandle:function(e,t,o){return o=null!=o?o.concat([e]):null,$i(4,oi|ii,Pi.bind(null,t,e),o)},useLayoutEffect:function(e,t){return $i(4,oi|ii,e,t)},useMemo:function(e,t){var o=Ii();t=void 0===t?null:t;var n=o.memoizedState;return null!==n&&null!==t&&Ti(t,n[1])?n[0]:(e=e(),o.memoizedState=[e,t],e)},useReducer:Di,useRef:function(){return Ii().memoizedState},useState:function(e){return Di(Mi)},useDebugValue:zi},Ui=null,ji=null,Vi=!1;function Zi(e,t){var o=pr(5,null,null,0);o.elementType="DELETED",o.type="DELETED",o.stateNode=t,o.return=e,o.effectTag=8,null!==e.lastEffect?(e.lastEffect.nextEffect=o,e.lastEffect=o):e.firstEffect=e.lastEffect=o}function qi(e,t){switch(e.tag){case 5:var o=e.type;return null!==(t=1!==t.nodeType||o.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,!0);default:return!1}}function Ki(e){if(Vi){var t=ji;if(t){var o=t;if(!qi(e,t)){if(!(t=jn(o))||!qi(e,t))return e.effectTag|=2,Vi=!1,void(Ui=e);Zi(Ui,o)}Ui=e,ji=Vn(t)}else e.effectTag|=2,Vi=!1,Ui=e}}function Yi(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&18!==e.tag;)e=e.return;Ui=e}function Xi(e){if(e!==Ui)return!1;if(!Vi)return Yi(e),Vi=!0,!1;var t=e.type;if(5!==e.tag||"head"!==t&&"body"!==t&&!Gn(t,e.memoizedProps))for(t=ji;t;)Zi(e,t),t=jn(t);return Yi(e),ji=Ui?jn(e.stateNode):null,!0}function Qi(){ji=Ui=null,Vi=!1}var Ji=st.ReactCurrentOwner,es=!1;function ts(e,t,o,n){t.child=null===e?Br(t,null,o,n):Fr(t,e.child,o,n)}function os(e,t,o,n,r){o=o.render;var c=t.ref;return xs(t,r),n=Ri(e,t,o,n,c,r),null===e||es?(t.effectTag|=1,ts(e,t,n,r),t.child):(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=r&&(e.expirationTime=0),ps(e,t,r))}function ns(e,t,o,n,r,c){if(null===e){var d=o.type;return"function"!=typeof d||fr(d)||void 0!==d.defaultProps||null!==o.compare||void 0!==o.defaultProps?((e=gr(o.type,null,n,null,t.mode,c)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=d,rs(e,t,d,n,r,c))}return d=e.child,r<c&&(r=d.memoizedProps,(o=null!==(o=o.compare)?o:bo)(r,n)&&e.ref===t.ref)?ps(e,t,c):(t.effectTag|=1,(e=mr(d,n)).ref=t.ref,e.return=t,t.child=e)}function rs(e,t,o,n,r,c){return null!==e&&bo(e.memoizedProps,n)&&e.ref===t.ref&&(es=!1,r<c)?ps(e,t,c):as(e,t,o,n,c)}function ss(e,t){var o=t.ref;(null===e&&null!==o||null!==e&&e.ref!==o)&&(t.effectTag|=128)}function as(e,t,o,n,r){var c=or(o)?er:Qn.current;return c=tr(t,c),xs(t,r),o=Ri(e,t,o,n,c,r),null===e||es?(t.effectTag|=1,ts(e,t,o,r),t.child):(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=r&&(e.expirationTime=0),ps(e,t,r))}function ls(e,t,o,n,r){if(or(o)){var c=!0;ar(t)}else c=!1;if(xs(t,r),null===t.stateNode)null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),Dr(t,o,n),$r(t,o,n,r),n=!0;else if(null===e){var d=t.stateNode,h=t.memoizedProps;d.props=h;var u=d.context,p=o.contextType;"object"==typeof p&&null!==p?p=Ss(p):p=tr(t,p=or(o)?er:Qn.current);var m=o.getDerivedStateFromProps,g="function"==typeof m||"function"==typeof d.getSnapshotBeforeUpdate;g||"function"!=typeof d.UNSAFE_componentWillReceiveProps&&"function"!=typeof d.componentWillReceiveProps||(h!==n||u!==p)&&Nr(t,d,n,p),Es=!1;var v=t.memoizedState;u=d.state=v;var y=t.updateQueue;null!==y&&(zs(t,y,n,d,r),u=t.memoizedState),h!==n||v!==u||Jn.current||Es?("function"==typeof m&&(Or(t,o,m,n),u=t.memoizedState),(h=Es||Mr(t,o,h,n,v,u,p))?(g||"function"!=typeof d.UNSAFE_componentWillMount&&"function"!=typeof d.componentWillMount||("function"==typeof d.componentWillMount&&d.componentWillMount(),"function"==typeof d.UNSAFE_componentWillMount&&d.UNSAFE_componentWillMount()),"function"==typeof d.componentDidMount&&(t.effectTag|=4)):("function"==typeof d.componentDidMount&&(t.effectTag|=4),t.memoizedProps=n,t.memoizedState=u),d.props=n,d.state=u,d.context=p,n=h):("function"==typeof d.componentDidMount&&(t.effectTag|=4),n=!1)}else d=t.stateNode,h=t.memoizedProps,d.props=t.type===t.elementType?h:Tr(t.type,h),u=d.context,"object"==typeof(p=o.contextType)&&null!==p?p=Ss(p):p=tr(t,p=or(o)?er:Qn.current),(g="function"==typeof(m=o.getDerivedStateFromProps)||"function"==typeof d.getSnapshotBeforeUpdate)||"function"!=typeof d.UNSAFE_componentWillReceiveProps&&"function"!=typeof d.componentWillReceiveProps||(h!==n||u!==p)&&Nr(t,d,n,p),Es=!1,u=t.memoizedState,v=d.state=u,null!==(y=t.updateQueue)&&(zs(t,y,n,d,r),v=t.memoizedState),h!==n||u!==v||Jn.current||Es?("function"==typeof m&&(Or(t,o,m,n),v=t.memoizedState),(m=Es||Mr(t,o,h,n,u,v,p))?(g||"function"!=typeof d.UNSAFE_componentWillUpdate&&"function"!=typeof d.componentWillUpdate||("function"==typeof d.componentWillUpdate&&d.componentWillUpdate(n,v,p),"function"==typeof d.UNSAFE_componentWillUpdate&&d.UNSAFE_componentWillUpdate(n,v,p)),"function"==typeof d.componentDidUpdate&&(t.effectTag|=4),"function"==typeof d.getSnapshotBeforeUpdate&&(t.effectTag|=256)):("function"!=typeof d.componentDidUpdate||h===e.memoizedProps&&u===e.memoizedState||(t.effectTag|=4),"function"!=typeof d.getSnapshotBeforeUpdate||h===e.memoizedProps&&u===e.memoizedState||(t.effectTag|=256),t.memoizedProps=n,t.memoizedState=v),d.props=n,d.state=v,d.context=p,n=m):("function"!=typeof d.componentDidUpdate||h===e.memoizedProps&&u===e.memoizedState||(t.effectTag|=4),"function"!=typeof d.getSnapshotBeforeUpdate||h===e.memoizedProps&&u===e.memoizedState||(t.effectTag|=256),n=!1);return cs(e,t,o,n,c,r)}function cs(e,t,o,n,r,c){ss(e,t);var d=0!=(64&t.effectTag);if(!n&&!d)return r&&lr(t,o,!1),ps(e,t,c);n=t.stateNode,Ji.current=t;var h=d&&"function"!=typeof o.getDerivedStateFromError?null:n.render();return t.effectTag|=1,null!==e&&d?(t.child=Fr(t,e.child,null,c),t.child=Fr(t,null,h,c)):ts(e,t,h,c),t.memoizedState=n.state,r&&lr(t,o,!0),t.child}function hs(e){var t=e.stateNode;t.pendingContext?ir(0,t.pendingContext,t.pendingContext!==t.context):t.context&&ir(0,t.context,!1),qr(e,t.containerInfo)}function us(e,t,o){var n=t.mode,r=t.pendingProps,c=t.memoizedState;if(0==(64&t.effectTag)){c=null;var d=!1}else c={timedOutAt:null!==c?c.timedOutAt:0},d=!0,t.effectTag&=-65;if(null===e)if(d){var h=r.fallback;e=br(null,n,0,null),0==(1&t.mode)&&(e.child=null!==t.memoizedState?t.child.child:t.child),n=br(h,n,o,null),e.sibling=n,(o=e).return=n.return=t}else o=n=Br(t,null,r.children,o);else null!==e.memoizedState?(h=(n=e.child).sibling,d?(o=r.fallback,r=mr(n,n.pendingProps),0==(1&t.mode)&&((d=null!==t.memoizedState?t.child.child:t.child)!==n.child&&(r.child=d)),n=r.sibling=mr(h,o,h.expirationTime),o=r,r.childExpirationTime=0,o.return=n.return=t):o=n=Fr(t,n.child,r.children,o)):(h=e.child,d?(d=r.fallback,(r=br(null,n,0,null)).child=h,0==(1&t.mode)&&(r.child=null!==t.memoizedState?t.child.child:t.child),(n=r.sibling=br(d,n,o,null)).effectTag|=2,o=r,r.childExpirationTime=0,o.return=n.return=t):n=o=Fr(t,h,r.children,o)),t.stateNode=e.stateNode;return t.memoizedState=c,t.child=o,n}function ps(e,t,o){if(null!==e&&(t.contextDependencies=e.contextDependencies),t.childExpirationTime<o)return null;if(null!==e&&t.child!==e.child&&d("153"),null!==t.child){for(o=mr(e=t.child,e.pendingProps,e.expirationTime),t.child=o,o.return=t;null!==e.sibling;)e=e.sibling,(o=o.sibling=mr(e,e.pendingProps,e.expirationTime)).return=t;o.sibling=null}return t.child}function ms(e,t,o){var n=t.expirationTime;if(null!==e){if(e.memoizedProps!==t.pendingProps||Jn.current)es=!0;else if(n<o){switch(es=!1,t.tag){case 3:hs(t),Qi();break;case 5:Xr(t);break;case 1:or(t.type)&&ar(t);break;case 4:qr(t,t.stateNode.containerInfo);break;case 10:ws(t,t.memoizedProps.value);break;case 13:if(null!==t.memoizedState)return 0!==(n=t.child.childExpirationTime)&&n>=o?us(e,t,o):null!==(t=ps(e,t,o))?t.sibling:null}return ps(e,t,o)}}else es=!1;switch(t.expirationTime=0,t.tag){case 2:n=t.elementType,null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps;var r=tr(t,Qn.current);if(xs(t,o),r=Ri(null,t,n,e,r,o),t.effectTag|=1,"object"==typeof r&&null!==r&&"function"==typeof r.render&&void 0===r.$$typeof){if(t.tag=1,Ei(),or(n)){var c=!0;ar(t)}else c=!1;t.memoizedState=null!==r.state&&void 0!==r.state?r.state:null;var h=n.getDerivedStateFromProps;"function"==typeof h&&Or(t,n,h,e),r.updater=Ir,t.stateNode=r,r._reactInternalFiber=t,$r(t,n,e,o),t=cs(null,t,n,!0,c,o)}else t.tag=0,ts(null,t,r,o),t=t.child;return t;case 16:switch(r=t.elementType,null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),c=t.pendingProps,e=function(e){var t=e._result;switch(e._status){case 1:return t;case 2:case 0:throw t;default:switch(e._status=0,(t=(t=e._ctor)()).then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)})),e._status){case 1:return e._result;case 2:throw e._result}throw e._result=t,t}}(r),t.type=e,r=t.tag=function(e){if("function"==typeof e)return fr(e)?1:0;if(null!=e){if((e=e.$$typeof)===bt)return 11;if(e===yt)return 14}return 2}(e),c=Tr(e,c),h=void 0,r){case 0:h=as(null,t,e,c,o);break;case 1:h=ls(null,t,e,c,o);break;case 11:h=os(null,t,e,c,o);break;case 14:h=ns(null,t,e,Tr(e.type,c),n,o);break;default:d("306",e,"")}return h;case 0:return n=t.type,r=t.pendingProps,as(e,t,n,r=t.elementType===n?r:Tr(n,r),o);case 1:return n=t.type,r=t.pendingProps,ls(e,t,n,r=t.elementType===n?r:Tr(n,r),o);case 3:return hs(t),null===(n=t.updateQueue)&&d("282"),r=null!==(r=t.memoizedState)?r.element:null,zs(t,n,t.pendingProps,null,o),(n=t.memoizedState.element)===r?(Qi(),t=ps(e,t,o)):(r=t.stateNode,(r=(null===e||null===e.child)&&r.hydrate)&&(ji=Vn(t.stateNode.containerInfo),Ui=t,r=Vi=!0),r?(t.effectTag|=2,t.child=Br(t,null,n,o)):(ts(e,t,n,o),Qi()),t=t.child),t;case 5:return Xr(t),null===e&&Ki(t),n=t.type,r=t.pendingProps,c=null!==e?e.memoizedProps:null,h=r.children,Gn(n,r)?h=null:null!==c&&Gn(n,c)&&(t.effectTag|=16),ss(e,t),1!==o&&1&t.mode&&r.hidden?(t.expirationTime=t.childExpirationTime=1,t=null):(ts(e,t,h,o),t=t.child),t;case 6:return null===e&&Ki(t),null;case 13:return us(e,t,o);case 4:return qr(t,t.stateNode.containerInfo),n=t.pendingProps,null===e?t.child=Fr(t,null,n,o):ts(e,t,n,o),t.child;case 11:return n=t.type,r=t.pendingProps,os(e,t,n,r=t.elementType===n?r:Tr(n,r),o);case 7:return ts(e,t,t.pendingProps,o),t.child;case 8:case 12:return ts(e,t,t.pendingProps.children,o),t.child;case 10:e:{if(n=t.type._context,r=t.pendingProps,h=t.memoizedProps,ws(t,c=r.value),null!==h){var u=h.value;if(0===(c=mo(u,c)?0:0|("function"==typeof n._calculateChangedBits?n._calculateChangedBits(u,c):1073741823))){if(h.children===r.children&&!Jn.current){t=ps(e,t,o);break e}}else for(null!==(u=t.child)&&(u.return=t);null!==u;){var p=u.contextDependencies;if(null!==p){h=u.child;for(var m=p.first;null!==m;){if(m.context===n&&0!=(m.observedBits&c)){1===u.tag&&((m=Ms(o)).tag=Rs,As(u,m)),u.expirationTime<o&&(u.expirationTime=o),null!==(m=u.alternate)&&m.expirationTime<o&&(m.expirationTime=o),m=o;for(var g=u.return;null!==g;){var v=g.alternate;if(g.childExpirationTime<m)g.childExpirationTime=m,null!==v&&v.childExpirationTime<m&&(v.childExpirationTime=m);else{if(!(null!==v&&v.childExpirationTime<m))break;v.childExpirationTime=m}g=g.return}p.expirationTime<o&&(p.expirationTime=o);break}m=m.next}}else h=10===u.tag&&u.type===t.type?null:u.child;if(null!==h)h.return=u;else for(h=u;null!==h;){if(h===t){h=null;break}if(null!==(u=h.sibling)){u.return=h.return,h=u;break}h=h.return}u=h}}ts(e,t,r.children,o),t=t.child}return t;case 9:return r=t.type,n=(c=t.pendingProps).children,xs(t,o),n=n(r=Ss(r,c.unstable_observedBits)),t.effectTag|=1,ts(e,t,n,o),t.child;case 14:return c=Tr(r=t.type,t.pendingProps),ns(e,t,r,c=Tr(r.type,c),n,o);case 15:return rs(e,t,t.type,t.pendingProps,n,o);case 17:return n=t.type,r=t.pendingProps,r=t.elementType===n?r:Tr(n,r),null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),t.tag=1,or(n)?(e=!0,ar(t)):e=!1,xs(t,o),Dr(t,n,r),$r(t,n,r,o),cs(null,t,n,!0,e,o)}d("156")}var gs={current:null},bs=null,vs=null,ys=null;function ws(e,t){var o=e.type._context;Yn(gs,o._currentValue),o._currentValue=t}function Cs(e){var t=gs.current;Kn(gs),e.type._context._currentValue=t}function xs(e,t){bs=e,ys=vs=null;var o=e.contextDependencies;null!==o&&o.expirationTime>=t&&(es=!0),e.contextDependencies=null}function Ss(e,t){return ys!==e&&!1!==t&&0!==t&&("number"==typeof t&&1073741823!==t||(ys=e,t=1073741823),t={context:e,observedBits:t,next:null},null===vs?(null===bs&&d("308"),vs=t,bs.contextDependencies={first:t,expirationTime:0}):vs=vs.next=t),e._currentValue}var _s=0,Ts=1,Rs=2,ks=3,Es=!1;function Os(e){return{baseState:e,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Is(e){return{baseState:e.baseState,firstUpdate:e.firstUpdate,lastUpdate:e.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Ms(e){return{expirationTime:e,tag:_s,payload:null,callback:null,next:null,nextEffect:null}}function Ds(e,t){null===e.lastUpdate?e.firstUpdate=e.lastUpdate=t:(e.lastUpdate.next=t,e.lastUpdate=t)}function As(e,t){var o=e.alternate;if(null===o){var n=e.updateQueue,r=null;null===n&&(n=e.updateQueue=Os(e.memoizedState))}else n=e.updateQueue,r=o.updateQueue,null===n?null===r?(n=e.updateQueue=Os(e.memoizedState),r=o.updateQueue=Os(o.memoizedState)):n=e.updateQueue=Is(r):null===r&&(r=o.updateQueue=Is(n));null===r||n===r?Ds(n,t):null===n.lastUpdate||null===r.lastUpdate?(Ds(n,t),Ds(r,t)):(Ds(n,t),r.lastUpdate=t)}function Ns(e,t){var o=e.updateQueue;null===(o=null===o?e.updateQueue=Os(e.memoizedState):$s(e,o)).lastCapturedUpdate?o.firstCapturedUpdate=o.lastCapturedUpdate=t:(o.lastCapturedUpdate.next=t,o.lastCapturedUpdate=t)}function $s(e,t){var o=e.alternate;return null!==o&&t===o.updateQueue&&(t=e.updateQueue=Is(t)),t}function Ps(e,t,o,n,c,d){switch(o.tag){case Ts:return"function"==typeof(e=o.payload)?e.call(d,n,c):e;case ks:e.effectTag=-2049&e.effectTag|64;case _s:if(null==(c="function"==typeof(e=o.payload)?e.call(d,n,c):e))break;return r({},n,c);case Rs:Es=!0}return n}function zs(e,t,o,n,r){Es=!1;for(var c=(t=$s(e,t)).baseState,d=null,h=0,u=t.firstUpdate,p=c;null!==u;){var m=u.expirationTime;m<r?(null===d&&(d=u,c=p),h<m&&(h=m)):(p=Ps(e,0,u,p,o,n),null!==u.callback&&(e.effectTag|=32,u.nextEffect=null,null===t.lastEffect?t.firstEffect=t.lastEffect=u:(t.lastEffect.nextEffect=u,t.lastEffect=u))),u=u.next}for(m=null,u=t.firstCapturedUpdate;null!==u;){var g=u.expirationTime;g<r?(null===m&&(m=u,null===d&&(c=p)),h<g&&(h=g)):(p=Ps(e,0,u,p,o,n),null!==u.callback&&(e.effectTag|=32,u.nextEffect=null,null===t.lastCapturedEffect?t.firstCapturedEffect=t.lastCapturedEffect=u:(t.lastCapturedEffect.nextEffect=u,t.lastCapturedEffect=u))),u=u.next}null===d&&(t.lastUpdate=null),null===m?t.lastCapturedUpdate=null:e.effectTag|=32,null===d&&null===m&&(c=p),t.baseState=c,t.firstUpdate=d,t.firstCapturedUpdate=m,e.expirationTime=h,e.memoizedState=p}function Hs(e,t,o){null!==t.firstCapturedUpdate&&(null!==t.lastUpdate&&(t.lastUpdate.next=t.firstCapturedUpdate,t.lastUpdate=t.lastCapturedUpdate),t.firstCapturedUpdate=t.lastCapturedUpdate=null),Ls(t.firstEffect,o),t.firstEffect=t.lastEffect=null,Ls(t.firstCapturedEffect,o),t.firstCapturedEffect=t.lastCapturedEffect=null}function Ls(e,t){for(;null!==e;){var o=e.callback;if(null!==o){e.callback=null;var n=t;"function"!=typeof o&&d("191",o),o.call(n)}e=e.nextEffect}}function Gs(e,t){return{value:e,source:t,stack:_t(t)}}function Fs(e){e.effectTag|=4}var Bs=void 0,Ws=void 0,Us=void 0,js=void 0;Bs=function(e,t){for(var o=t.child;null!==o;){if(5===o.tag||6===o.tag)e.appendChild(o.stateNode);else if(4!==o.tag&&null!==o.child){o.child.return=o,o=o.child;continue}if(o===t)break;for(;null===o.sibling;){if(null===o.return||o.return===t)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Ws=function(){},Us=function(e,t,o,n,c){var d=e.memoizedProps;if(d!==n){var h=t.stateNode;switch(Zr(Ur.current),e=null,o){case"input":d=$t(h,d),n=$t(h,n),e=[];break;case"option":d=fn(h,d),n=fn(h,n),e=[];break;case"select":d=r({},d,{value:void 0}),n=r({},n,{value:void 0}),e=[];break;case"textarea":d=bn(h,d),n=bn(h,n),e=[];break;default:"function"!=typeof d.onClick&&"function"==typeof n.onClick&&(h.onclick=Pn)}An(o,n),h=o=void 0;var u=null;for(o in d)if(!n.hasOwnProperty(o)&&d.hasOwnProperty(o)&&null!=d[o])if("style"===o){var p=d[o];for(h in p)p.hasOwnProperty(h)&&(u||(u={}),u[h]="")}else"dangerouslySetInnerHTML"!==o&&"children"!==o&&"suppressContentEditableWarning"!==o&&"suppressHydrationWarning"!==o&&"autoFocus"!==o&&(O.hasOwnProperty(o)?e||(e=[]):(e=e||[]).push(o,null));for(o in n){var m=n[o];if(p=null!=d?d[o]:void 0,n.hasOwnProperty(o)&&m!==p&&(null!=m||null!=p))if("style"===o)if(p){for(h in p)!p.hasOwnProperty(h)||m&&m.hasOwnProperty(h)||(u||(u={}),u[h]="");for(h in m)m.hasOwnProperty(h)&&p[h]!==m[h]&&(u||(u={}),u[h]=m[h])}else u||(e||(e=[]),e.push(o,u)),u=m;else"dangerouslySetInnerHTML"===o?(m=m?m.__html:void 0,p=p?p.__html:void 0,null!=m&&p!==m&&(e=e||[]).push(o,""+m)):"children"===o?p===m||"string"!=typeof m&&"number"!=typeof m||(e=e||[]).push(o,""+m):"suppressContentEditableWarning"!==o&&"suppressHydrationWarning"!==o&&(O.hasOwnProperty(o)?(null!=m&&$n(c,o),e||p===m||(e=[])):(e=e||[]).push(o,m))}u&&(e=e||[]).push("style",u),c=e,(t.updateQueue=c)&&Fs(t)}},js=function(e,t,o,n){o!==n&&Fs(t)};var Vs="function"==typeof WeakSet?WeakSet:Set;function Zs(e,t){var o=t.source,n=t.stack;null===n&&null!==o&&(n=_t(o)),null!==o&&St(o.type),t=t.value,null!==e&&1===e.tag&&St(e.type)}function qs(e){var t=e.ref;if(null!==t)if("function"==typeof t)try{t(null)}catch(t){Ia(e,t)}else t.current=null}function Ks(e,t,o){if(null!==(o=null!==(o=o.updateQueue)?o.lastEffect:null)){var n=o=o.next;do{if((n.tag&e)!==ei){var r=n.destroy;n.destroy=void 0,void 0!==r&&r()}(n.tag&t)!==ei&&(r=n.create,n.destroy=r()),n=n.next}while(n!==o)}}function Ys(e){switch("function"==typeof dr&&dr(e),e.tag){case 0:case 11:case 14:case 15:var t=e.updateQueue;if(null!==t&&null!==(t=t.lastEffect)){var o=t=t.next;do{var n=o.destroy;if(void 0!==n){var r=e;try{n()}catch(e){Ia(r,e)}}o=o.next}while(o!==t)}break;case 1:if(qs(e),"function"==typeof(t=e.stateNode).componentWillUnmount)try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(t){Ia(e,t)}break;case 5:qs(e);break;case 4:Js(e)}}function Xs(e){return 5===e.tag||3===e.tag||4===e.tag}function Qs(e){e:{for(var t=e.return;null!==t;){if(Xs(t)){var o=t;break e}t=t.return}d("160"),o=void 0}var n=t=void 0;switch(o.tag){case 5:t=o.stateNode,n=!1;break;case 3:case 4:t=o.stateNode.containerInfo,n=!0;break;default:d("161")}16&o.effectTag&&(kn(t,""),o.effectTag&=-17);e:t:for(o=e;;){for(;null===o.sibling;){if(null===o.return||Xs(o.return)){o=null;break e}o=o.return}for(o.sibling.return=o.return,o=o.sibling;5!==o.tag&&6!==o.tag&&18!==o.tag;){if(2&o.effectTag)continue t;if(null===o.child||4===o.tag)continue t;o.child.return=o,o=o.child}if(!(2&o.effectTag)){o=o.stateNode;break e}}for(var r=e;;){if(5===r.tag||6===r.tag)if(o)if(n){var c=t,h=r.stateNode,u=o;8===c.nodeType?c.parentNode.insertBefore(h,u):c.insertBefore(h,u)}else t.insertBefore(r.stateNode,o);else n?(h=t,u=r.stateNode,8===h.nodeType?(c=h.parentNode).insertBefore(u,h):(c=h).appendChild(u),null!=(h=h._reactRootContainer)||null!==c.onclick||(c.onclick=Pn)):t.appendChild(r.stateNode);else if(4!==r.tag&&null!==r.child){r.child.return=r,r=r.child;continue}if(r===e)break;for(;null===r.sibling;){if(null===r.return||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}}function Js(e){for(var t=e,o=!1,n=void 0,r=void 0;;){if(!o){o=t.return;e:for(;;){switch(null===o&&d("160"),o.tag){case 5:n=o.stateNode,r=!1;break e;case 3:case 4:n=o.stateNode.containerInfo,r=!0;break e}o=o.return}o=!0}if(5===t.tag||6===t.tag){e:for(var c=t,h=c;;)if(Ys(h),null!==h.child&&4!==h.tag)h.child.return=h,h=h.child;else{if(h===c)break;for(;null===h.sibling;){if(null===h.return||h.return===c)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}r?(c=n,h=t.stateNode,8===c.nodeType?c.parentNode.removeChild(h):c.removeChild(h)):n.removeChild(t.stateNode)}else if(4===t.tag){if(null!==t.child){n=t.stateNode.containerInfo,r=!0,t.child.return=t,t=t.child;continue}}else if(Ys(t),null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return;4===(t=t.return).tag&&(o=!1)}t.sibling.return=t.return,t=t.sibling}}function ea(e,t){switch(t.tag){case 0:case 11:case 14:case 15:Ks(oi,ni,t);break;case 1:case 3:case 12:case 17:break;case 5:var o=t.stateNode;if(null!=o){var n=t.memoizedProps;e=null!==e?e.memoizedProps:n;var r=t.type,c=t.updateQueue;t.updateQueue=null,null!==c&&function(e,t,o,n,r){e[Y]=r,"input"===o&&"radio"===r.type&&null!=r.name&&zt(e,r),Nn(o,n),n=Nn(o,r);for(var c=0;c<t.length;c+=2){var d=t[c],h=t[c+1];"style"===d?Mn(e,h):"dangerouslySetInnerHTML"===d?Rn(e,h):"children"===d?kn(e,h):At(e,d,h,n)}switch(o){case"input":Ht(e,r);break;case"textarea":yn(e,r);break;case"select":t=e._wrapperState.wasMultiple,e._wrapperState.wasMultiple=!!r.multiple,null!=(o=r.value)?gn(e,!!r.multiple,o,!1):t!==!!r.multiple&&(null!=r.defaultValue?gn(e,!!r.multiple,r.defaultValue,!0):gn(e,!!r.multiple,r.multiple?[]:"",!1))}}(o,c,r,e,n)}break;case 6:null===t.stateNode&&d("162"),t.stateNode.nodeValue=t.memoizedProps;break;case 13:if(o=t.memoizedState,n=void 0,e=t,null===o?n=!1:(n=!0,e=t.child,0===o.timedOutAt&&(o.timedOutAt=sl())),null!==e&&function(e,t){for(var o=e;;){if(5===o.tag){var n=o.stateNode;if(t)n.style.display="none";else{n=o.stateNode;var r=o.memoizedProps.style;r=null!=r&&r.hasOwnProperty("display")?r.display:null,n.style.display=In("display",r)}}else if(6===o.tag)o.stateNode.nodeValue=t?"":o.memoizedProps;else{if(13===o.tag&&null!==o.memoizedState){(n=o.child.sibling).return=o,o=n;continue}if(null!==o.child){o.child.return=o,o=o.child;continue}}if(o===e)break;for(;null===o.sibling;){if(null===o.return||o.return===e)return;o=o.return}o.sibling.return=o.return,o=o.sibling}}(e,n),null!==(o=t.updateQueue)){t.updateQueue=null;var h=t.stateNode;null===h&&(h=t.stateNode=new Vs),o.forEach((function(e){var o=Aa.bind(null,t,e);h.has(e)||(h.add(e),e.then(o,o))}))}break;default:d("163")}}var ta="function"==typeof WeakMap?WeakMap:Map;function oa(e,t,o){(o=Ms(o)).tag=ks,o.payload={element:null};var n=t.value;return o.callback=function(){gl(n),Zs(e,t)},o}function na(e,t,o){(o=Ms(o)).tag=ks;var n=e.type.getDerivedStateFromError;if("function"==typeof n){var r=t.value;o.payload=function(){return n(r)}}var c=e.stateNode;return null!==c&&"function"==typeof c.componentDidCatch&&(o.callback=function(){"function"!=typeof n&&(null===ya?ya=new Set([this]):ya.add(this));var o=t.value,r=t.stack;Zs(e,t),this.componentDidCatch(o,{componentStack:null!==r?r:""})}),o}function ra(e){switch(e.tag){case 1:or(e.type)&&nr();var t=e.effectTag;return 2048&t?(e.effectTag=-2049&t|64,e):null;case 3:return Kr(),rr(),0!=(64&(t=e.effectTag))&&d("285"),e.effectTag=-2049&t|64,e;case 5:return Qr(e),null;case 13:return 2048&(t=e.effectTag)?(e.effectTag=-2049&t|64,e):null;case 18:default:return null;case 4:return Kr(),null;case 10:return Cs(e),null}}var ia=st.ReactCurrentDispatcher,sa=st.ReactCurrentOwner,aa=1073741822,la=!1,ca=null,da=null,ha=0,ua=-1,pa=!1,fa=null,ma=!1,ga=null,ba=null,va=null,ya=null;function wa(){if(null!==ca)for(var e=ca.return;null!==e;){var t=e;switch(t.tag){case 1:var o=t.type.childContextTypes;null!=o&&nr();break;case 3:Kr(),rr();break;case 5:Qr(t);break;case 4:Kr();break;case 10:Cs(t)}e=e.return}da=null,ha=0,ua=-1,pa=!1,ca=null}function Ca(){for(;null!==fa;){var e=fa.effectTag;if(16&e&&kn(fa.stateNode,""),128&e){var t=fa.alternate;null!==t&&(null!==(t=t.ref)&&("function"==typeof t?t(null):t.current=null))}switch(14&e){case 2:Qs(fa),fa.effectTag&=-3;break;case 6:Qs(fa),fa.effectTag&=-3,ea(fa.alternate,fa);break;case 4:ea(fa.alternate,fa);break;case 8:Js(e=fa),e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null,null!==(e=e.alternate)&&(e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null)}fa=fa.nextEffect}}function xa(){for(;null!==fa;){if(256&fa.effectTag)e:{var e=fa.alternate,t=fa;switch(t.tag){case 0:case 11:case 15:Ks(ti,ei,t);break e;case 1:if(256&t.effectTag&&null!==e){var o=e.memoizedProps,n=e.memoizedState;t=(e=t.stateNode).getSnapshotBeforeUpdate(t.elementType===t.type?o:Tr(t.type,o),n),e.__reactInternalSnapshotBeforeUpdate=t}break e;case 3:case 5:case 6:case 4:case 17:break e;default:d("163")}}fa=fa.nextEffect}}function Sa(e,t){for(;null!==fa;){var o=fa.effectTag;if(36&o){var n=fa.alternate,r=fa,c=t;switch(r.tag){case 0:case 11:case 15:Ks(ri,ii,r);break;case 1:var h=r.stateNode;if(4&r.effectTag)if(null===n)h.componentDidMount();else{var u=r.elementType===r.type?n.memoizedProps:Tr(r.type,n.memoizedProps);h.componentDidUpdate(u,n.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}null!==(n=r.updateQueue)&&Hs(0,n,h);break;case 3:if(null!==(n=r.updateQueue)){if(h=null,null!==r.child)switch(r.child.tag){case 5:case 1:h=r.child.stateNode}Hs(0,n,h)}break;case 5:c=r.stateNode,null===n&&4&r.effectTag&&Ln(r.type,r.memoizedProps)&&c.focus();break;case 6:case 4:case 12:case 13:case 17:break;default:d("163")}}128&o&&(null!==(r=fa.ref)&&(c=fa.stateNode,"function"==typeof r?r(c):r.current=c)),512&o&&(ga=e),fa=fa.nextEffect}}function _a(e,t){va=ba=ga=null;var o=Fa;Fa=!0;do{if(512&t.effectTag){var n=!1,r=void 0;try{var c=t;Ks(ai,ei,c),Ks(ei,si,c)}catch(e){n=!0,r=e}n&&Ia(t,r)}t=t.nextEffect}while(null!==t);Fa=o,0!==(o=e.expirationTime)&&al(e,o),Za||Fa||ul(1073741823,!1)}function Ta(){null!==ba&&Un(ba),null!==va&&va()}function Ra(e,t){ma=la=!0,e.current===t&&d("177");var o=e.pendingCommitExpirationTime;0===o&&d("261"),e.pendingCommitExpirationTime=0;var n=t.expirationTime,r=t.childExpirationTime;for(function(e,t){if(e.didError=!1,0===t)e.earliestPendingTime=0,e.latestPendingTime=0,e.earliestSuspendedTime=0,e.latestSuspendedTime=0,e.latestPingedTime=0;else{t<e.latestPingedTime&&(e.latestPingedTime=0);var o=e.latestPendingTime;0!==o&&(o>t?e.earliestPendingTime=e.latestPendingTime=0:e.earliestPendingTime>t&&(e.earliestPendingTime=e.latestPendingTime)),0===(o=e.earliestSuspendedTime)?Cr(e,t):t<e.latestSuspendedTime?(e.earliestSuspendedTime=0,e.latestSuspendedTime=0,e.latestPingedTime=0,Cr(e,t)):t>o&&Cr(e,t)}_r(0,e)}(e,r>n?r:n),sa.current=null,n=void 0,1<t.effectTag?null!==t.lastEffect?(t.lastEffect.nextEffect=t,n=t.firstEffect):n=t:n=t.firstEffect,zn=Go,Hn=function(){var e=Jo();if(en(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{var o=(t=(t=e.ownerDocument)&&t.defaultView||window).getSelection&&t.getSelection();if(o&&0!==o.rangeCount){t=o.anchorNode;var n=o.anchorOffset,r=o.focusNode;o=o.focusOffset;try{t.nodeType,r.nodeType}catch(e){t=null;break e}var c=0,d=-1,h=-1,u=0,p=0,m=e,g=null;t:for(;;){for(var v;m!==t||0!==n&&3!==m.nodeType||(d=c+n),m!==r||0!==o&&3!==m.nodeType||(h=c+o),3===m.nodeType&&(c+=m.nodeValue.length),null!==(v=m.firstChild);)g=m,m=v;for(;;){if(m===e)break t;if(g===t&&++u===n&&(d=c),g===r&&++p===o&&(h=c),null!==(v=m.nextSibling))break;g=(m=g).parentNode}m=v}t=-1===d||-1===h?null:{start:d,end:h}}else t=null}t=t||{start:0,end:0}}else t=null;return{focusedElem:e,selectionRange:t}}(),Go=!1,fa=n;null!==fa;){r=!1;var h=void 0;try{xa()}catch(e){r=!0,h=e}r&&(null===fa&&d("178"),Ia(fa,h),null!==fa&&(fa=fa.nextEffect))}for(fa=n;null!==fa;){r=!1,h=void 0;try{Ca()}catch(e){r=!0,h=e}r&&(null===fa&&d("178"),Ia(fa,h),null!==fa&&(fa=fa.nextEffect))}for(on(Hn),Hn=null,Go=!!zn,zn=null,e.current=t,fa=n;null!==fa;){r=!1,h=void 0;try{Sa(e,o)}catch(e){r=!0,h=e}r&&(null===fa&&d("178"),Ia(fa,h),null!==fa&&(fa=fa.nextEffect))}if(null!==n&&null!==ga){var u=_a.bind(null,e,n);ba=c.unstable_runWithPriority(c.unstable_NormalPriority,(function(){return Wn(u)})),va=u}la=ma=!1,"function"==typeof cr&&cr(t.stateNode),o=t.expirationTime,0===(t=(t=t.childExpirationTime)>o?t:o)&&(ya=null),function(e,t){e.expirationTime=t,e.finishedWork=null}(e,t)}function ka(e){for(;;){var t=e.alternate,o=e.return,n=e.sibling;if(0==(1024&e.effectTag)){ca=e;e:{var c=t,h=ha,u=(t=e).pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 18:break;case 1:case 17:or(t.type)&&nr();break;case 3:Kr(),rr(),(u=t.stateNode).pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),null!==c&&null!==c.child||(Xi(t),t.effectTag&=-3),Ws(t);break;case 5:Qr(t);var p=Zr(Vr.current);if(h=t.type,null!==c&&null!=t.stateNode)Us(c,t,h,u,p),c.ref!==t.ref&&(t.effectTag|=128);else if(u){var m=Zr(Ur.current);if(Xi(t)){c=(u=t).stateNode;var g=u.type,v=u.memoizedProps,y=p;switch(c[K]=u,c[Y]=v,h=void 0,p=g){case"iframe":case"object":Fo("load",c);break;case"video":case"audio":for(g=0;g<be.length;g++)Fo(be[g],c);break;case"source":Fo("error",c);break;case"img":case"image":case"link":Fo("error",c),Fo("load",c);break;case"form":Fo("reset",c),Fo("submit",c);break;case"details":Fo("toggle",c);break;case"input":Pt(c,v),Fo("invalid",c),$n(y,"onChange");break;case"select":c._wrapperState={wasMultiple:!!v.multiple},Fo("invalid",c),$n(y,"onChange");break;case"textarea":vn(c,v),Fo("invalid",c),$n(y,"onChange")}for(h in An(p,v),g=null,v)v.hasOwnProperty(h)&&(m=v[h],"children"===h?"string"==typeof m?c.textContent!==m&&(g=["children",m]):"number"==typeof m&&c.textContent!==""+m&&(g=["children",""+m]):O.hasOwnProperty(h)&&null!=m&&$n(y,h));switch(p){case"input":rt(c),Lt(c,v,!0);break;case"textarea":rt(c),wn(c);break;case"select":case"option":break;default:"function"==typeof v.onClick&&(c.onclick=Pn)}h=g,u.updateQueue=h,(u=null!==h)&&Fs(t)}else{v=t,c=h,y=u,g=9===p.nodeType?p:p.ownerDocument,m===Cn.html&&(m=xn(c)),m===Cn.html?"script"===c?((c=g.createElement("div")).innerHTML="<script><\/script>",g=c.removeChild(c.firstChild)):"string"==typeof y.is?g=g.createElement(c,{is:y.is}):(g=g.createElement(c),"select"===c&&y.multiple&&(g.multiple=!0)):g=g.createElementNS(m,c),(c=g)[K]=v,c[Y]=u,Bs(c,t,!1,!1),y=c;var w=p,x=Nn(g=h,v=u);switch(g){case"iframe":case"object":Fo("load",y),p=v;break;case"video":case"audio":for(p=0;p<be.length;p++)Fo(be[p],y);p=v;break;case"source":Fo("error",y),p=v;break;case"img":case"image":case"link":Fo("error",y),Fo("load",y),p=v;break;case"form":Fo("reset",y),Fo("submit",y),p=v;break;case"details":Fo("toggle",y),p=v;break;case"input":Pt(y,v),p=$t(y,v),Fo("invalid",y),$n(w,"onChange");break;case"option":p=fn(y,v);break;case"select":y._wrapperState={wasMultiple:!!v.multiple},p=r({},v,{value:void 0}),Fo("invalid",y),$n(w,"onChange");break;case"textarea":vn(y,v),p=bn(y,v),Fo("invalid",y),$n(w,"onChange");break;default:p=v}An(g,p),m=void 0;var S=g,_=y,T=p;for(m in T)if(T.hasOwnProperty(m)){var E=T[m];"style"===m?Mn(_,E):"dangerouslySetInnerHTML"===m?null!=(E=E?E.__html:void 0)&&Rn(_,E):"children"===m?"string"==typeof E?("textarea"!==S||""!==E)&&kn(_,E):"number"==typeof E&&kn(_,""+E):"suppressContentEditableWarning"!==m&&"suppressHydrationWarning"!==m&&"autoFocus"!==m&&(O.hasOwnProperty(m)?null!=E&&$n(w,m):null!=E&&At(_,m,E,x))}switch(g){case"input":rt(y),Lt(y,v,!1);break;case"textarea":rt(y),wn(y);break;case"option":null!=v.value&&y.setAttribute("value",""+Nt(v.value));break;case"select":(p=y).multiple=!!v.multiple,null!=(y=v.value)?gn(p,!!v.multiple,y,!1):null!=v.defaultValue&&gn(p,!!v.multiple,v.defaultValue,!0);break;default:"function"==typeof p.onClick&&(y.onclick=Pn)}(u=Ln(h,u))&&Fs(t),t.stateNode=c}null!==t.ref&&(t.effectTag|=128)}else null===t.stateNode&&d("166");break;case 6:c&&null!=t.stateNode?js(c,t,c.memoizedProps,u):("string"!=typeof u&&(null===t.stateNode&&d("166")),c=Zr(Vr.current),Zr(Ur.current),Xi(t)?(h=(u=t).stateNode,c=u.memoizedProps,h[K]=u,(u=h.nodeValue!==c)&&Fs(t)):(h=t,(u=(9===c.nodeType?c:c.ownerDocument).createTextNode(u))[K]=t,h.stateNode=u));break;case 13:if(u=t.memoizedState,0!=(64&t.effectTag)){t.expirationTime=h,ca=t;break e}u=null!==u,h=null!==c&&null!==c.memoizedState,null!==c&&!u&&h&&(null!==(c=c.child.sibling)&&(null!==(p=t.firstEffect)?(t.firstEffect=c,c.nextEffect=p):(t.firstEffect=t.lastEffect=c,c.nextEffect=null),c.effectTag=8)),(u||h)&&(t.effectTag|=4);break;case 4:Kr(),Ws(t);break;case 10:Cs(t);break;default:d("156")}ca=null}if(t=e,1===ha||1!==t.childExpirationTime){for(u=0,h=t.child;null!==h;)(c=h.expirationTime)>u&&(u=c),(p=h.childExpirationTime)>u&&(u=p),h=h.sibling;t.childExpirationTime=u}if(null!==ca)return ca;null!==o&&0==(1024&o.effectTag)&&(null===o.firstEffect&&(o.firstEffect=e.firstEffect),null!==e.lastEffect&&(null!==o.lastEffect&&(o.lastEffect.nextEffect=e.firstEffect),o.lastEffect=e.lastEffect),1<e.effectTag&&(null!==o.lastEffect?o.lastEffect.nextEffect=e:o.firstEffect=e,o.lastEffect=e))}else{if(null!==(e=ra(e)))return e.effectTag&=1023,e;null!==o&&(o.firstEffect=o.lastEffect=null,o.effectTag|=1024)}if(null!==n)return n;if(null===o)break;e=o}return null}function Ea(e){var t=ms(e.alternate,e,ha);return e.memoizedProps=e.pendingProps,null===t&&(t=ka(e)),sa.current=null,t}function Oa(e,t){la&&d("243"),Ta(),la=!0;var o=ia.current;ia.current=Gi;var n=e.nextExpirationTimeToWorkOn;n===ha&&e===da&&null!==ca||(wa(),ha=n,ca=mr((da=e).current,null),e.pendingCommitExpirationTime=0);for(var r=!1;;){try{if(t)for(;null!==ca&&!dl();)ca=Ea(ca);else for(;null!==ca;)ca=Ea(ca)}catch(t){if(ys=vs=bs=null,Ei(),null===ca)r=!0,gl(t);else{null===ca&&d("271");var c=ca,h=c.return;if(null!==h){e:{var u=e,p=h,m=c,g=t;if(h=ha,m.effectTag|=1024,m.firstEffect=m.lastEffect=null,null!==g&&"object"==typeof g&&"function"==typeof g.then){var v=g;g=p;var y=-1,w=-1;do{if(13===g.tag){var x=g.alternate;if(null!==x&&null!==(x=x.memoizedState)){w=10*(1073741822-x.timedOutAt);break}"number"==typeof(x=g.pendingProps.maxDuration)&&(0>=x?y=0:(-1===y||x<y)&&(y=x))}g=g.return}while(null!==g);g=p;do{if((x=13===g.tag)&&(x=void 0!==g.memoizedProps.fallback&&null===g.memoizedState),x){if(null===(p=g.updateQueue)?((p=new Set).add(v),g.updateQueue=p):p.add(v),0==(1&g.mode)){g.effectTag|=64,m.effectTag&=-1957,1===m.tag&&(null===m.alternate?m.tag=17:((h=Ms(1073741823)).tag=Rs,As(m,h))),m.expirationTime=1073741823;break e}p=h;var S=(m=u).pingCache;null===S?(S=m.pingCache=new ta,x=new Set,S.set(v,x)):void 0===(x=S.get(v))&&(x=new Set,S.set(v,x)),x.has(p)||(x.add(p),m=Da.bind(null,m,v,p),v.then(m,m)),-1===y?u=1073741823:(-1===w&&(w=10*(1073741822-Sr(u,h))-5e3),u=w+y),0<=u&&ua<u&&(ua=u),g.effectTag|=2048,g.expirationTime=h;break e}g=g.return}while(null!==g);g=Error((St(m.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+_t(m))}pa=!0,g=Gs(g,m),u=p;do{switch(u.tag){case 3:u.effectTag|=2048,u.expirationTime=h,Ns(u,h=oa(u,g,h));break e;case 1:if(y=g,w=u.type,m=u.stateNode,0==(64&u.effectTag)&&("function"==typeof w.getDerivedStateFromError||null!==m&&"function"==typeof m.componentDidCatch&&(null===ya||!ya.has(m)))){u.effectTag|=2048,u.expirationTime=h,Ns(u,h=na(u,y,h));break e}}u=u.return}while(null!==u)}ca=ka(c);continue}r=!0,gl(t)}}break}if(la=!1,ia.current=o,ys=vs=bs=null,Ei(),r)da=null,e.finishedWork=null;else if(null!==ca)e.finishedWork=null;else{if(null===(o=e.current.alternate)&&d("281"),da=null,pa){if(r=e.latestPendingTime,c=e.latestSuspendedTime,h=e.latestPingedTime,0!==r&&r<n||0!==c&&c<n||0!==h&&h<n)return xr(e,n),void rl(e,o,n,e.expirationTime,-1);if(!e.didError&&t)return e.didError=!0,n=e.nextExpirationTimeToWorkOn=n,t=e.expirationTime=1073741823,void rl(e,o,n,t,-1)}t&&-1!==ua?(xr(e,n),(t=10*(1073741822-Sr(e,n)))<ua&&(ua=t),t=10*(1073741822-sl()),t=ua-t,rl(e,o,n,e.expirationTime,0>t?0:t)):(e.pendingCommitExpirationTime=n,e.finishedWork=o)}}function Ia(e,t){for(var o=e.return;null!==o;){switch(o.tag){case 1:var n=o.stateNode;if("function"==typeof o.type.getDerivedStateFromError||"function"==typeof n.componentDidCatch&&(null===ya||!ya.has(n)))return As(o,e=na(o,e=Gs(t,e),1073741823)),void $a(o,1073741823);break;case 3:return As(o,e=oa(o,e=Gs(t,e),1073741823)),void $a(o,1073741823)}o=o.return}3===e.tag&&(As(e,o=oa(e,o=Gs(t,e),1073741823)),$a(e,1073741823))}function Ma(e,t){var o=c.unstable_getCurrentPriorityLevel(),n=void 0;if(0==(1&t.mode))n=1073741823;else if(la&&!ma)n=ha;else{switch(o){case c.unstable_ImmediatePriority:n=1073741823;break;case c.unstable_UserBlockingPriority:n=1073741822-10*(1+((1073741822-e+15)/10|0));break;case c.unstable_NormalPriority:n=1073741822-25*(1+((1073741822-e+500)/25|0));break;case c.unstable_LowPriority:case c.unstable_IdlePriority:n=1;break;default:d("313")}null!==da&&n===ha&&--n}return o===c.unstable_UserBlockingPriority&&(0===Ua||n<Ua)&&(Ua=n),n}function Da(e,t,o){var n=e.pingCache;null!==n&&n.delete(t),null!==da&&ha===o?da=null:(t=e.earliestSuspendedTime,n=e.latestSuspendedTime,0!==t&&o<=t&&o>=n&&(e.didError=!1,(0===(t=e.latestPingedTime)||t>o)&&(e.latestPingedTime=o),_r(o,e),0!==(o=e.expirationTime)&&al(e,o)))}function Aa(e,t){var o=e.stateNode;null!==o&&o.delete(t),null!==(e=Na(e,t=Ma(t=sl(),e)))&&(Cr(e,t),0!==(t=e.expirationTime)&&al(e,t))}function Na(e,t){e.expirationTime<t&&(e.expirationTime=t);var o=e.alternate;null!==o&&o.expirationTime<t&&(o.expirationTime=t);var n=e.return,r=null;if(null===n&&3===e.tag)r=e.stateNode;else for(;null!==n;){if(o=n.alternate,n.childExpirationTime<t&&(n.childExpirationTime=t),null!==o&&o.childExpirationTime<t&&(o.childExpirationTime=t),null===n.return&&3===n.tag){r=n.stateNode;break}n=n.return}return r}function $a(e,t){null!==(e=Na(e,t))&&(!la&&0!==ha&&t>ha&&wa(),Cr(e,t),la&&!ma&&da===e||al(e,e.expirationTime),el>Ja&&(el=0,d("185")))}function Pa(e,t,o,n,r){return c.unstable_runWithPriority(c.unstable_ImmediatePriority,(function(){return e(t,o,n,r)}))}var za=null,Ha=null,La=0,Ga=void 0,Fa=!1,Ba=null,Wa=0,Ua=0,ja=!1,Va=null,Za=!1,qa=!1,Ka=null,Ya=c.unstable_now(),Xa=1073741822-(Ya/10|0),Qa=Xa,Ja=50,el=0,tl=null;function ol(){Xa=1073741822-((c.unstable_now()-Ya)/10|0)}function nl(e,t){if(0!==La){if(t<La)return;null!==Ga&&c.unstable_cancelCallback(Ga)}La=t,e=c.unstable_now()-Ya,Ga=c.unstable_scheduleCallback(hl,{timeout:10*(1073741822-t)-e})}function rl(e,t,o,n,r){e.expirationTime=n,0!==r||dl()?0<r&&(e.timeoutHandle=Fn(il.bind(null,e,t,o),r)):(e.pendingCommitExpirationTime=o,e.finishedWork=t)}function il(e,t,o){e.pendingCommitExpirationTime=o,e.finishedWork=t,ol(),Qa=Xa,pl(e,o)}function sl(){return Fa||(ll(),0!==Wa&&1!==Wa||(ol(),Qa=Xa)),Qa}function al(e,t){null===e.nextScheduledRoot?(e.expirationTime=t,null===Ha?(za=Ha=e,e.nextScheduledRoot=e):(Ha=Ha.nextScheduledRoot=e).nextScheduledRoot=za):t>e.expirationTime&&(e.expirationTime=t),Fa||(Za?qa&&(Ba=e,Wa=1073741823,fl(e,1073741823,!1)):1073741823===t?ul(1073741823,!1):nl(e,t))}function ll(){var e=0,t=null;if(null!==Ha)for(var o=Ha,n=za;null!==n;){var r=n.expirationTime;if(0===r){if((null===o||null===Ha)&&d("244"),n===n.nextScheduledRoot){za=Ha=n.nextScheduledRoot=null;break}if(n===za)za=r=n.nextScheduledRoot,Ha.nextScheduledRoot=r,n.nextScheduledRoot=null;else{if(n===Ha){(Ha=o).nextScheduledRoot=za,n.nextScheduledRoot=null;break}o.nextScheduledRoot=n.nextScheduledRoot,n.nextScheduledRoot=null}n=o.nextScheduledRoot}else{if(r>e&&(e=r,t=n),n===Ha)break;if(1073741823===e)break;o=n,n=n.nextScheduledRoot}}Ba=t,Wa=e}var cl=!1;function dl(){return!!cl||!!c.unstable_shouldYield()&&(cl=!0)}function hl(){try{if(!dl()&&null!==za){ol();var e=za;do{var t=e.expirationTime;0!==t&&Xa<=t&&(e.nextExpirationTimeToWorkOn=Xa),e=e.nextScheduledRoot}while(e!==za)}ul(0,!0)}finally{cl=!1}}function ul(e,t){if(ll(),t)for(ol(),Qa=Xa;null!==Ba&&0!==Wa&&e<=Wa&&!(cl&&Xa>Wa);)fl(Ba,Wa,Xa>Wa),ll(),ol(),Qa=Xa;else for(;null!==Ba&&0!==Wa&&e<=Wa;)fl(Ba,Wa,!1),ll();if(t&&(La=0,Ga=null),0!==Wa&&nl(Ba,Wa),el=0,tl=null,null!==Ka)for(e=Ka,Ka=null,t=0;t<e.length;t++){var o=e[t];try{o._onComplete()}catch(e){ja||(ja=!0,Va=e)}}if(ja)throw e=Va,Va=null,ja=!1,e}function pl(e,t){Fa&&d("253"),Ba=e,Wa=t,fl(e,t,!1),ul(1073741823,!1)}function fl(e,t,o){if(Fa&&d("245"),Fa=!0,o){var n=e.finishedWork;null!==n?ml(e,n,t):(e.finishedWork=null,-1!==(n=e.timeoutHandle)&&(e.timeoutHandle=-1,Bn(n)),Oa(e,o),null!==(n=e.finishedWork)&&(dl()?e.finishedWork=n:ml(e,n,t)))}else null!==(n=e.finishedWork)?ml(e,n,t):(e.finishedWork=null,-1!==(n=e.timeoutHandle)&&(e.timeoutHandle=-1,Bn(n)),Oa(e,o),null!==(n=e.finishedWork)&&ml(e,n,t));Fa=!1}function ml(e,t,o){var n=e.firstBatch;if(null!==n&&n._expirationTime>=o&&(null===Ka?Ka=[n]:Ka.push(n),n._defer))return e.finishedWork=t,void(e.expirationTime=0);e.finishedWork=null,e===tl?el++:(tl=e,el=0),c.unstable_runWithPriority(c.unstable_ImmediatePriority,(function(){Ra(e,t)}))}function gl(e){null===Ba&&d("246"),Ba.expirationTime=0,ja||(ja=!0,Va=e)}function bl(e,t){var o=Za;Za=!0;try{return e(t)}finally{(Za=o)||Fa||ul(1073741823,!1)}}function vl(e,t){if(Za&&!qa){qa=!0;try{return e(t)}finally{qa=!1}}return e(t)}function yl(e,t,o){Za||Fa||0===Ua||(ul(Ua,!1),Ua=0);var n=Za;Za=!0;try{return c.unstable_runWithPriority(c.unstable_UserBlockingPriority,(function(){return e(t,o)}))}finally{(Za=n)||Fa||ul(1073741823,!1)}}function wl(e,t,o,n,r){var c=t.current;e:if(o){t:{2===vo(o=o._reactInternalFiber)&&1===o.tag||d("170");var h=o;do{switch(h.tag){case 3:h=h.stateNode.context;break t;case 1:if(or(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break t}}h=h.return}while(null!==h);d("171"),h=void 0}if(1===o.tag){var u=o.type;if(or(u)){o=sr(o,u,h);break e}}o=h}else o=Xn;return null===t.context?t.context=o:t.pendingContext=o,t=r,(r=Ms(n)).payload={element:e},null!==(t=void 0===t?null:t)&&(r.callback=t),Ta(),As(c,r),$a(c,n),n}function Cl(e,t,o,n){var r=t.current;return wl(e,t,o,r=Ma(sl(),r),n)}function xl(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Sl(e){var t=1073741822-25*(1+((1073741822-sl()+500)/25|0));t>=aa&&(t=aa-1),this._expirationTime=aa=t,this._root=e,this._callbacks=this._next=null,this._hasChildren=this._didComplete=!1,this._children=null,this._defer=!0}function _l(){this._callbacks=null,this._didCommit=!1,this._onCommit=this._onCommit.bind(this)}function Tl(e,t,o){e={current:t=pr(3,null,null,t?3:0),containerInfo:e,pendingChildren:null,pingCache:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:-1,context:null,pendingContext:null,hydrate:o,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null},this._internalRoot=t.stateNode=e}function Rl(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function kl(e,t,o,n,r){var c=o._reactRootContainer;if(c){if("function"==typeof r){var d=r;r=function(){var e=xl(c._internalRoot);d.call(e)}}null!=e?c.legacy_renderSubtreeIntoContainer(e,t,r):c.render(t,r)}else{if(c=o._reactRootContainer=function(e,t){if(t||(t=!(!(t=e?9===e.nodeType?e.documentElement:e.firstChild:null)||1!==t.nodeType||!t.hasAttribute("data-reactroot"))),!t)for(var o;o=e.lastChild;)e.removeChild(o);return new Tl(e,!1,t)}(o,n),"function"==typeof r){var h=r;r=function(){var e=xl(c._internalRoot);h.call(e)}}vl((function(){null!=e?c.legacy_renderSubtreeIntoContainer(e,t,r):c.render(t,r)}))}return xl(c._internalRoot)}function El(e,t){var o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;return Rl(t)||d("200"),function(e,t,o){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:dt,key:null==n?null:""+n,children:e,containerInfo:t,implementation:o}}(e,t,null,o)}Be=function(e,t,o){switch(t){case"input":if(Ht(e,o),t=o.name,"radio"===o.type&&null!=t){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<o.length;t++){var n=o[t];if(n!==e&&n.form===e.form){var r=ee(n);r||d("90"),it(n),Ht(n,r)}}}break;case"textarea":yn(e,o);break;case"select":null!=(t=o.value)&&gn(e,!!o.multiple,t,!1)}},Sl.prototype.render=function(e){this._defer||d("250"),this._hasChildren=!0,this._children=e;var t=this._root._internalRoot,o=this._expirationTime,n=new _l;return wl(e,t,null,o,n._onCommit),n},Sl.prototype.then=function(e){if(this._didComplete)e();else{var t=this._callbacks;null===t&&(t=this._callbacks=[]),t.push(e)}},Sl.prototype.commit=function(){var e=this._root._internalRoot,t=e.firstBatch;if(this._defer&&null!==t||d("251"),this._hasChildren){var o=this._expirationTime;if(t!==this){this._hasChildren&&(o=this._expirationTime=t._expirationTime,this.render(this._children));for(var n=null,r=t;r!==this;)n=r,r=r._next;null===n&&d("251"),n._next=r._next,this._next=t,e.firstBatch=this}this._defer=!1,pl(e,o),t=this._next,this._next=null,null!==(t=e.firstBatch=t)&&t._hasChildren&&t.render(t._children)}else this._next=null,this._defer=!1},Sl.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var e=this._callbacks;if(null!==e)for(var t=0;t<e.length;t++)(0,e[t])()}},_l.prototype.then=function(e){if(this._didCommit)e();else{var t=this._callbacks;null===t&&(t=this._callbacks=[]),t.push(e)}},_l.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var e=this._callbacks;if(null!==e)for(var t=0;t<e.length;t++){var o=e[t];"function"!=typeof o&&d("191",o),o()}}},Tl.prototype.render=function(e,t){var o=this._internalRoot,n=new _l;return null!==(t=void 0===t?null:t)&&n.then(t),Cl(e,o,null,n._onCommit),n},Tl.prototype.unmount=function(e){var t=this._internalRoot,o=new _l;return null!==(e=void 0===e?null:e)&&o.then(e),Cl(null,t,null,o._onCommit),o},Tl.prototype.legacy_renderSubtreeIntoContainer=function(e,t,o){var n=this._internalRoot,r=new _l;return null!==(o=void 0===o?null:o)&&r.then(o),Cl(t,n,e,r._onCommit),r},Tl.prototype.createBatch=function(){var e=new Sl(this),t=e._expirationTime,o=this._internalRoot,n=o.firstBatch;if(null===n)o.firstBatch=e,e._next=null;else{for(o=null;null!==n&&n._expirationTime>=t;)o=n,n=n._next;e._next=n,null!==o&&(o._next=e)}return e},qe=bl,Ke=yl,Ye=function(){Fa||0===Ua||(ul(Ua,!1),Ua=0)};var Ol={createPortal:El,findDOMNode:function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternalFiber;return void 0===t&&("function"==typeof e.render?d("188"):d("268",Object.keys(e))),e=null===(e=wo(t))?null:e.stateNode},hydrate:function(e,t,o){return Rl(t)||d("200"),kl(null,e,t,!0,o)},render:function(e,t,o){return Rl(t)||d("200"),kl(null,e,t,!1,o)},unstable_renderSubtreeIntoContainer:function(e,t,o,n){return Rl(o)||d("200"),(null==e||void 0===e._reactInternalFiber)&&d("38"),kl(e,t,o,!1,n)},unmountComponentAtNode:function(e){return Rl(e)||d("40"),!!e._reactRootContainer&&(vl((function(){kl(null,null,e,!1,(function(){e._reactRootContainer=null}))})),!0)},unstable_createPortal:function(){return El.apply(void 0,arguments)},unstable_batchedUpdates:bl,unstable_interactiveUpdates:yl,flushSync:function(e,t){Fa&&d("187");var o=Za;Za=!0;try{return Pa(e,t)}finally{Za=o,ul(1073741823,!1)}},unstable_createRoot:function(e,t){return Rl(e)||d("299","unstable_createRoot"),new Tl(e,!0,null!=t&&!0===t.hydrate)},unstable_flushControlled:function(e){var t=Za;Za=!0;try{Pa(e)}finally{(Za=t)||Fa||ul(1073741823,!1)}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[Q,J,ee,U.injectEventPluginsByName,E,se,function(e){F(e,ie)},Ve,Ze,Uo,Z]}};!function(e){var t=e.findFiberByHostInstance;(function(e){if("undefined"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled||!t.supportsFiber)return!0;try{var o=t.inject(e);cr=hr((function(e){return t.onCommitFiberRoot(o,e)})),dr=hr((function(e){return t.onCommitFiberUnmount(o,e)}))}catch(e){}})(r({},e,{overrideProps:null,currentDispatcherRef:st.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=wo(e))?null:e.stateNode},findFiberByHostInstance:function(e){return t?t(e):null}}))}({findFiberByHostInstance:X,bundleType:0,version:"16.8.4",rendererPackageName:"react-dom"});var Il={default:Ol},Ml=Il&&Ol||Il;e.exports=Ml.default||Ml},2788:(e,t,o)=>{!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){}}(),e.exports=o(3975)},8447:(e,t,o)=>{var n=o(4516),r="function"==typeof Symbol&&Symbol.for,c=r?Symbol.for("react.element"):60103,d=r?Symbol.for("react.portal"):60106,h=r?Symbol.for("react.fragment"):60107,u=r?Symbol.for("react.strict_mode"):60108,p=r?Symbol.for("react.profiler"):60114,m=r?Symbol.for("react.provider"):60109,g=r?Symbol.for("react.context"):60110,v=r?Symbol.for("react.concurrent_mode"):60111,y=r?Symbol.for("react.forward_ref"):60112,w=r?Symbol.for("react.suspense"):60113,x=r?Symbol.for("react.memo"):60115,S=r?Symbol.for("react.lazy"):60116,_="function"==typeof Symbol&&Symbol.iterator;function T(e){for(var t=arguments.length-1,o="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)o+="&args[]="+encodeURIComponent(arguments[n+1]);!function(e,t,o,n,r,c,d,h){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[o,n,r,c,d,h],p=0;(e=Error(t.replace(/%s/g,(function(){return u[p++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",o)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function A(e,t,o){this.props=e,this.context=t,this.refs=O,this.updater=o||E}function N(){}function $(e,t,o){this.props=e,this.context=t,this.refs=O,this.updater=o||E}A.prototype.isReactComponent={},A.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&T("85"),this.updater.enqueueSetState(this,e,t,"setState")},A.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},N.prototype=A.prototype;var P=$.prototype=new N;P.constructor=$,n(P,A.prototype),P.isPureReactComponent=!0;var z={current:null},G={current:null},F=Object.prototype.hasOwnProperty,B={key:!0,ref:!0,__self:!0,__source:!0};function W(e,t,o){var n=void 0,r={},d=null,h=null;if(null!=t)for(n in void 0!==t.ref&&(h=t.ref),void 0!==t.key&&(d=""+t.key),t)F.call(t,n)&&!B.hasOwnProperty(n)&&(r[n]=t[n]);var u=arguments.length-2;if(1===u)r.children=o;else if(1<u){for(var p=Array(u),m=0;m<u;m++)p[m]=arguments[m+2];r.children=p}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===r[n]&&(r[n]=u[n]);return{$$typeof:c,type:e,key:d,ref:h,props:r,_owner:G.current}}function U(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var j=/\/+/g,Z=[];function q(e,t,o,n){if(Z.length){var r=Z.pop();return r.result=e,r.keyPrefix=t,r.func=o,r.context=n,r.count=0,r}return{result:e,keyPrefix:t,func:o,context:n,count:0}}function K(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>Z.length&&Z.push(e)}function Y(e,t,o,n){var r=typeof e;"undefined"!==r&&"boolean"!==r||(e=null);var h=!1;if(null===e)h=!0;else switch(r){case"string":case"number":h=!0;break;case"object":switch(e.$$typeof){case c:case d:h=!0}}if(h)return o(n,e,""===t?"."+Q(e,0):t),1;if(h=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){var p=t+Q(r=e[u],u);h+=Y(r,p,o,n)}else if(null===e||"object"!=typeof e?p=null:p="function"==typeof(p=_&&e[_]||e["@@iterator"])?p:null,"function"==typeof p)for(e=p.call(e),u=0;!(r=e.next()).done;)h+=Y(r=r.value,p=t+Q(r,u++),o,n);else"object"===r&&T("31","[object Object]"===(o=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":o,"");return h}function X(e,t,o){return null==e?0:Y(e,"",t,o)}function Q(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function J(e,t){e.func.call(e.context,t,e.count++)}function ee(e,t,o){var n=e.result,r=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?te(e,n,o,(function(e){return e})):null!=e&&(U(e)&&(e=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,r+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(j,"$&/")+"/")+o)),n.push(e))}function te(e,t,o,n,r){var c="";null!=o&&(c=(""+o).replace(j,"$&/")+"/"),X(e,ee,t=q(t,c,n,r)),K(t)}function oe(){var e=z.current;return null===e&&T("307"),e}var ne={Children:{map:function(e,t,o){if(null==e)return e;var n=[];return te(e,n,null,t,o),n},forEach:function(e,t,o){if(null==e)return e;X(e,J,t=q(null,null,t,o)),K(t)},count:function(e){return X(e,(function(){return null}),null)},toArray:function(e){var t=[];return te(e,t,null,(function(e){return e})),t},only:function(e){return U(e)||T("143"),e}},createRef:function(){return{current:null}},Component:A,PureComponent:$,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:g,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:m,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:y,render:e}},lazy:function(e){return{$$typeof:S,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:x,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return oe().useCallback(e,t)},useContext:function(e,t){return oe().useContext(e,t)},useEffect:function(e,t){return oe().useEffect(e,t)},useImperativeHandle:function(e,t,o){return oe().useImperativeHandle(e,t,o)},useDebugValue:function(){},useLayoutEffect:function(e,t){return oe().useLayoutEffect(e,t)},useMemo:function(e,t){return oe().useMemo(e,t)},useReducer:function(e,t,o){return oe().useReducer(e,t,o)},useRef:function(e){return oe().useRef(e)},useState:function(e){return oe().useState(e)},Fragment:h,StrictMode:u,Suspense:w,createElement:W,cloneElement:function(e,t,o){null==e&&T("267",e);var r=void 0,d=n({},e.props),h=e.key,u=e.ref,p=e._owner;if(null!=t){void 0!==t.ref&&(u=t.ref,p=G.current),void 0!==t.key&&(h=""+t.key);var m=void 0;for(r in e.type&&e.type.defaultProps&&(m=e.type.defaultProps),t)F.call(t,r)&&!B.hasOwnProperty(r)&&(d[r]=void 0===t[r]&&void 0!==m?m[r]:t[r])}if(1===(r=arguments.length-2))d.children=o;else if(1<r){m=Array(r);for(var g=0;g<r;g++)m[g]=arguments[g+2];d.children=m}return{$$typeof:c,type:e.type,key:h,ref:u,props:d,_owner:p}},createFactory:function(e){var t=W.bind(null,e);return t.type=e,t},isValidElement:U,version:"16.8.4",unstable_ConcurrentMode:v,unstable_Profiler:p,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:z,ReactCurrentOwner:G,assign:n}},re={default:ne},ie=re&&ne||re;e.exports=ie.default||ie},2735:(e,t,o)=>{e.exports=o(8447)},9666:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=null,r=!1,c=3,d=-1,h=-1,u=!1,p=!1;function m(){if(!u){var e=n.expirationTime;p?P():p=!0,$(y,e)}}function g(){var e=n,t=n.next;if(n===t)n=null;else{var o=n.previous;n=o.next=t,t.previous=o}e.next=e.previous=null,o=e.callback,t=e.expirationTime,e=e.priorityLevel;var r=c,d=h;c=e,h=t;try{var u=o()}finally{c=r,h=d}if("function"==typeof u)if(u={callback:u,priorityLevel:e,expirationTime:t,next:null,previous:null},null===n)n=u.next=u.previous=u;else{o=null,e=n;do{if(e.expirationTime>=t){o=e;break}e=e.next}while(e!==n);null===o?o=n:o===n&&(n=u,m()),(t=o.previous).next=o.previous=u,u.next=o,u.previous=t}}function v(){if(-1===d&&null!==n&&1===n.priorityLevel){u=!0;try{do{g()}while(null!==n&&1===n.priorityLevel)}finally{u=!1,null!==n?m():p=!1}}}function y(e){u=!0;var o=r;r=e;try{if(e)for(;null!==n;){var c=t.unstable_now();if(!(n.expirationTime<=c))break;do{g()}while(null!==n&&n.expirationTime<=c)}else if(null!==n)do{g()}while(null!==n&&!z())}finally{u=!1,r=o,null!==n?m():p=!1,v()}}var w,x,S=Date,_="function"==typeof setTimeout?setTimeout:void 0,T="function"==typeof clearTimeout?clearTimeout:void 0,E="function"==typeof requestAnimationFrame?requestAnimationFrame:void 0,O="function"==typeof cancelAnimationFrame?cancelAnimationFrame:void 0;function A(e){w=E((function(t){T(x),e(t)})),x=_((function(){O(w),e(t.unstable_now())}),100)}if("object"==typeof performance&&"function"==typeof performance.now){var N=performance;t.unstable_now=function(){return N.now()}}else t.unstable_now=function(){return S.now()};var $,P,z,G=null;if("undefined"!=typeof window?G=window:void 0!==o.g&&(G=o.g),G&&G._schedMock){var F=G._schedMock;$=F[0],P=F[1],z=F[2],t.unstable_now=F[3]}else if("undefined"==typeof window||"function"!=typeof MessageChannel){var B=null,W=function(e){if(null!==B)try{B(e)}finally{B=null}};$=function(e){null!==B?setTimeout($,0,e):(B=e,setTimeout(W,0,!1))},P=function(){B=null},z=function(){return!1}}else{var U=null,j=!1,Z=-1,q=!1,K=!1,Y=0,X=33,Q=33;z=function(){return Y<=t.unstable_now()};var J=new MessageChannel,ee=J.port2;J.port1.onmessage=function(){j=!1;var e=U,o=Z;U=null,Z=-1;var n=t.unstable_now(),r=!1;if(0>=Y-n){if(!(-1!==o&&o<=n))return q||(q=!0,A(te)),U=e,void(Z=o);r=!0}if(null!==e){K=!0;try{e(r)}finally{K=!1}}};var te=function(e){if(null!==U){A(te);var t=e-Y+Q;t<Q&&X<Q?(8>t&&(t=8),Q=t<X?X:t):X=t,Y=e+Q,j||(j=!0,ee.postMessage(void 0))}else q=!1};$=function(e,t){U=e,Z=t,K||0>t?ee.postMessage(void 0):q||(q=!0,A(te))},P=function(){U=null,j=!1,Z=-1}}t.unstable_ImmediatePriority=1,t.unstable_UserBlockingPriority=2,t.unstable_NormalPriority=3,t.unstable_IdlePriority=5,t.unstable_LowPriority=4,t.unstable_runWithPriority=function(e,o){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=c,r=d;c=e,d=t.unstable_now();try{return o()}finally{c=n,d=r,v()}},t.unstable_next=function(e){switch(c){case 1:case 2:case 3:var o=3;break;default:o=c}var n=c,r=d;c=o,d=t.unstable_now();try{return e()}finally{c=n,d=r,v()}},t.unstable_scheduleCallback=function(e,o){var r=-1!==d?d:t.unstable_now();if("object"==typeof o&&null!==o&&"number"==typeof o.timeout)o=r+o.timeout;else switch(c){case 1:o=r+-1;break;case 2:o=r+250;break;case 5:o=r+1073741823;break;case 4:o=r+1e4;break;default:o=r+5e3}if(e={callback:e,priorityLevel:c,expirationTime:o,next:null,previous:null},null===n)n=e.next=e.previous=e,m();else{r=null;var h=n;do{if(h.expirationTime>o){r=h;break}h=h.next}while(h!==n);null===r?r=n:r===n&&(n=e,m()),(o=r.previous).next=r.previous=e,e.next=r,e.previous=o}return e},t.unstable_cancelCallback=function(e){var t=e.next;if(null!==t){if(t===e)n=null;else{e===n&&(n=t);var o=e.previous;o.next=t,t.previous=o}e.next=e.previous=null}},t.unstable_wrapCallback=function(e){var o=c;return function(){var n=c,r=d;c=o,d=t.unstable_now();try{return e.apply(this,arguments)}finally{c=n,d=r,v()}}},t.unstable_getCurrentPriorityLevel=function(){return c},t.unstable_shouldYield=function(){return!r&&(null!==n&&n.expirationTime<h||z())},t.unstable_continueExecution=function(){null!==n&&m()},t.unstable_pauseExecution=function(){},t.unstable_getFirstCallbackNode=function(){return n}},9146:(e,t,o)=>{e.exports=o(9666)}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var c=o[e]={exports:{}};return t[e](c,c.exports,n),c.exports}n.m=t,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,o)=>(n.f[o](e,t),t)),[])),n.u=e=>"feature-billboard.js",n.miniCssF=e=>{},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},n.l=(t,o,r,c)=>{if(e[t])e[t].push(o);else{var d,h;if(void 0!==r)for(var u=document.getElementsByTagName("script"),p=0;p<u.length;p++){var m=u[p];if(m.getAttribute("src")==t){d=m;break}}d||(h=!0,(d=document.createElement("script")).type="module",d.charset="utf-8",d.timeout=120,n.nc&&d.setAttribute("nonce",n.nc),d.src=t),e[t]=[o];var g=(o,n)=>{d.onerror=d.onload=null,clearTimeout(v);var r=e[t];if(delete e[t],d.parentNode&&d.parentNode.removeChild(d),r&&r.forEach((e=>e(n))),o)return o(n)},v=setTimeout(g.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=g.bind(null,d.onerror),d.onload=g.bind(null,d.onload),h&&document.head.appendChild(d)}},n.p="#{root}/dist/webviews/",void 0!==n&&Object.defineProperty(n,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}}),(()=>{var e={786:0};n.f.j=(t,o)=>{var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var c=new Promise(((o,n)=>r=e[t]=[o,n]));o.push(r[2]=c);var d=n.p+n.u(t),h=new Error;n.l(d,(o=>{if(n.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var c=o&&("load"===o.type?"missing":o.type),d=o&&o.target&&o.target.src;h.message="Loading chunk "+t+" failed.\n("+c+": "+d+")",h.name="ChunkLoadError",h.type=c,h.request=d,r[1](h)}}),"chunk-"+t,t)}};var t=(t,o)=>{var r,c,[d,h,u]=o,p=0;if(d.some((t=>0!==e[t]))){for(r in h)n.o(h,r)&&(n.m[r]=h[r]);if(u)u(n)}for(t&&t(o);p<d.length;p++)c=d[p],n.o(e,c)&&e[c]&&e[c][0](),e[c]=0},o=self.webpackChunk=self.webpackChunk||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var r={};(()=>{n.d(r,{q:()=>GraphApp});var e=n(2735),t=n.n(e),o=n(2788);class IpcMessageType{constructor(e,t=!1,o=!1){this.method=e,this.reset=t,this.pack=o}}class IpcCommandType extends IpcMessageType{}class IpcNotificationType extends IpcMessageType{}function c(e,t,o){e.method===t.method&&o(t.params,e)}const d=new IpcCommandType("webview/ready"),h=new IpcCommandType("webview/focus");new IpcCommandType("command/execute"),new IpcCommandType("configuration/preview"),new IpcCommandType("configuration/update"),new IpcNotificationType("configuration/didChange"),new IpcNotificationType("configuration/didPreview"),new IpcNotificationType("webview/didOpenAnchor");const u=new IpcCommandType("graph/chooseRepository"),p=new IpcCommandType("graph/dimMergeCommits"),m=new IpcCommandType("graph/dblclick"),g=new IpcCommandType("graph/rows/ensure"),v=new IpcCommandType("graph/avatars/get"),y=new IpcCommandType("graph/refs/metadata/get"),w=new IpcCommandType("graph/rows/get"),x=new IpcCommandType("graph/search"),S=new IpcCommandType("graph/search/openInView"),_=new IpcCommandType("graph/columns/update"),T=new IpcCommandType("graph/refs/update/visibility"),E=new IpcCommandType("graph/fitlers/update/excludeType"),O=new IpcCommandType("graph/configuration/update"),A=new IpcCommandType("graph/fitlers/update/includeOnlyRefs"),N=new IpcCommandType("graph/selection/update"),$=new IpcNotificationType("graph/didChange",!0,!0),P=new IpcNotificationType("graph/configuration/didChange"),z=new IpcNotificationType("graph/subscription/didChange"),G=new IpcNotificationType("graph/avatars/didChange"),F=new IpcNotificationType("graph/refs/didChangeMetadata"),B=new IpcNotificationType("graph/columns/didChange"),W=new IpcNotificationType("graph/scrollMarkers/didChange"),U=new IpcNotificationType("graph/focus/didChange"),j=new IpcNotificationType("graph/window/focus/didChange"),Z=new IpcNotificationType("graph/refs/didChangeVisibility"),q=new IpcNotificationType("graph/rows/didChange",void 0,!0),K=new IpcNotificationType("graph/rows/stats/didChange"),Y=new IpcNotificationType("graph/selection/didChange"),X=new IpcNotificationType("graph/workingTree/didChange"),Q=new IpcNotificationType("graph/rows/didEnsure"),J=new IpcNotificationType("graph/didSearch"),ee=new IpcNotificationType("graph/didFetch");var te=(e=>(e[e.Hash=35]="Hash",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Backslash=92]="Backslash",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.Z=90]="Z",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.z=122]="z",e))(te||{});function oe(e,t){const o=e+t,n=t<0?o<0?0:o:o>255?255:o;return Math.round(n)}function ne(e,t){return re(e,-t)}function re(e,t){const o=function(e){const t=me(e);return null==t?null:[t.rgba.r,t.rgba.g,t.rgba.b,t.rgba.a]}(e);if(null==o)return e;const[n,r,c,d]=o,h=255*t/100;return`rgba(${oe(n,h)}, ${oe(r,h)}, ${oe(c,h)}, ${d})`}function ie(e,t){const o=de.from(e);return null==o?e:o.transparent(t/100).toString()}function se(e,t,o){const n=de.from(e),r=de.from(t);return null==n||null==r?e:n.mix(r,o/100).toString()}function ae(e,t){const o=Math.pow(10,t);return Math.round(e*o)/o}class RGBA{constructor(e,t,o,n=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,o)),this.a=ae(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}}class HSLA{constructor(e,t,o,n){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=ae(Math.max(Math.min(1,t),0),3),this.l=ae(Math.max(Math.min(1,o),0),3),this.a=ae(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,n=e.b/255,r=e.a,c=Math.max(t,o,n),d=Math.min(t,o,n);let h=0,u=0;const p=(d+c)/2,m=c-d;if(m>0){switch(u=Math.min(p<=.5?m/(2*p):m/(2-2*p),1),c){case t:h=(o-n)/m+(o<n?6:0);break;case o:h=(n-t)/m+2;break;case n:h=(t-o)/m+4}h*=60,h=Math.round(h)}return new HSLA(h,u,p,r)}static _hue2rgb(e,t,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+6*(t-e)*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}static toRGBA(e){const t=e.h/360,{s:o,l:n,a:r}=e;let c,d,h;if(0===o)c=d=h=n;else{const e=n<.5?n*(1+o):n+o-n*o,r=2*n-e;c=HSLA._hue2rgb(r,e,t+1/3),d=HSLA._hue2rgb(r,e,t),h=HSLA._hue2rgb(r,e,t-1/3)}return new RGBA(Math.round(255*c),Math.round(255*d),Math.round(255*h),r)}}class HSVA{constructor(e,t,o,n){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=ae(Math.max(Math.min(1,t),0),3),this.v=ae(Math.max(Math.min(1,o),0),3),this.a=ae(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,n=e.b/255,r=Math.max(t,o,n),c=r-Math.min(t,o,n),d=0===r?0:c/r;let h;return h=0===c?0:r===t?((o-n)/c%6+6)%6:r===o?(n-t)/c+2:(t-o)/c+4,new HSVA(Math.round(60*h),d,r,e.a)}static toRGBA(e){const{h:t,s:o,v:n,a:r}=e,c=n*o,d=c*(1-Math.abs(t/60%2-1)),h=n-c;let[u,p,m]=[0,0,0];return t<60?(u=c,p=d):t<120?(u=d,p=c):t<180?(p=c,m=d):t<240?(p=d,m=c):t<300?(u=d,m=c):t<=360&&(u=c,m=d),u=Math.round(255*(u+h)),p=Math.round(255*(p+h)),m=Math.round(255*(m+h)),new RGBA(u,p,m,r)}}function le(e,t){return t.getPropertyValue(e).trim()}const ce=class _Color{static from(e){return e instanceof _Color?e:me(e)||_Color.red}static fromCssVariable(e,t){return me(le(e,t))||_Color.red}static fromHex(e){return ge(e)||_Color.red}static equals(e,t){return!e&&!t||!(!e||!t)&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(!e)throw new Error("Color needs a value");if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else{if(!(e instanceof HSVA))throw new Error("Invalid color ctor argument");this._hsva=e,this.rgba=HSVA.toRGBA(e)}}equals(e){return null!=e&&(Boolean(e)&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva))}getRelativeLuminance(){return ae(.2126*_Color._relativeLuminanceForComponent(this.rgba.r)+.7152*_Color._relativeLuminanceForComponent(this.rgba.g)+.0722*_Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new de(new RGBA(0,0,0,e.rgba.a));if(1===t)return new de(new RGBA(255,255,255,e.rgba.a));const o=e.getRelativeLuminance();let n=20;const r=(e,o)=>{const c=e.mix(o,.5),d=c.getRelativeLuminance();return Math.abs(t-d)<1e-7||!n--?c:d>t?r(e,c):r(c,o)},c=(o>t?r(de.black,e):r(e,de.white)).rgba;return new de(new RGBA(c.r,c.g,c.b,e.rgba.a))}(this,e)}getContrastRatio(e){const t=this.getRelativeLuminance(),o=e.getRelativeLuminance();return t>o?(t+.05)/(o+.05):(o+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){const{r:t,g:o,b:n,a:r}=this.rgba;return new _Color(new RGBA(t,o,n,r*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new _Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){const t=e.rgba,o=this.rgba.a,n=t.a,r=o+n*(1-o);if(r<1e-6)return _Color.transparent;const c=this.rgba.r*o/r+t.r*n*(1-o)/r,d=this.rgba.g*o/r+t.g*n*(1-o)/r,h=this.rgba.b*o/r+t.b*n*(1-o)/r;return new _Color(new RGBA(c,d,h,r))}mix(e,t){return function(e,t,o){const n=e.rgba,r=t.rgba;return new de(new RGBA(n.r+o*(r.r-n.r),n.g+o*(r.g-n.g),n.b+o*(r.b-n.b),n.a+o*(r.a-n.a)))}(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;const{r:t,g:o,b:n,a:r}=this.rgba;return new _Color(new RGBA(e.rgba.r-r*(e.rgba.r-t),e.rgba.g-r*(e.rgba.g-o),e.rgba.b-r*(e.rgba.b-n),1))}flatten(...e){const t=e.reduceRight(((e,t)=>_Color._flatten(t,e)));return _Color._flatten(this,t)}static _flatten(e,t){const o=1-e.rgba.a;return new _Color(new RGBA(o*t.rgba.r+e.rgba.a*e.rgba.r,o*t.rgba.g+e.rgba.a*e.rgba.g,o*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){if(e.isOpaque())return pe(e);return he(e)}(this)),this._toString}static getLighterColor(e,t,o){if(e.isLighterThan(t))return e;o=o||.5;const n=e.getRelativeLuminance(),r=t.getRelativeLuminance();return o=o*(r-n)/r,e.lighten(o)}static getDarkerColor(e,t,o){if(e.isDarkerThan(t))return e;o=o||.5;const n=e.getRelativeLuminance();return o=o*(n-t.getRelativeLuminance())/n,e.darken(o)}};ce.white=new ce(new RGBA(255,255,255,1)),ce.black=new ce(new RGBA(0,0,0,1)),ce.red=new ce(new RGBA(255,0,0,1)),ce.blue=new ce(new RGBA(0,0,255,1)),ce.green=new ce(new RGBA(0,255,0,1)),ce.cyan=new ce(new RGBA(0,255,255,1)),ce.lightgrey=new ce(new RGBA(211,211,211,1)),ce.transparent=new ce(new RGBA(0,0,0,0));let de=ce;function he(e){return`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}function ue(e){const t=e.toString(16);return 2!==t.length?`0${t}`:t}function pe(e){return`#${ue(e.rgba.r)}${ue(e.rgba.g)}${ue(e.rgba.b)}`}const fe=/^((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function me(e){if(0===(e=e.trim()).length)return null;if(e.charCodeAt(0)===te.Hash)return ge(e);const t=fe.exec(e);if(null==t)return null;const o=t[1];let n;switch(o){case"rgb":case"hsl":n=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),1];break;case"rgba":case"hsla":n=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),parseFloat(t[5])];break;default:return null}switch(o){case"rgb":case"rgba":return new de(new RGBA(n[0],n[1],n[2],n[3]));case"hsl":case"hsla":return new de(new HSLA(n[0],n[1],n[2],n[3]))}return de.red}function ge(e){const t=(e=e.trim()).length;if(0===t)return null;if(e.charCodeAt(0)!==te.Hash)return null;switch(t){case 7:{const t=16*be(e.charCodeAt(1))+be(e.charCodeAt(2)),o=16*be(e.charCodeAt(3))+be(e.charCodeAt(4)),n=16*be(e.charCodeAt(5))+be(e.charCodeAt(6));return new de(new RGBA(t,o,n,1))}case 9:{const t=16*be(e.charCodeAt(1))+be(e.charCodeAt(2)),o=16*be(e.charCodeAt(3))+be(e.charCodeAt(4)),n=16*be(e.charCodeAt(5))+be(e.charCodeAt(6)),r=16*be(e.charCodeAt(7))+be(e.charCodeAt(8));return new de(new RGBA(t,o,n,r/255))}case 4:{const t=be(e.charCodeAt(1)),o=be(e.charCodeAt(2)),n=be(e.charCodeAt(3));return new de(new RGBA(16*t+t,16*o+o,16*n+n))}case 5:{const t=be(e.charCodeAt(1)),o=be(e.charCodeAt(2)),n=be(e.charCodeAt(3)),r=be(e.charCodeAt(4));return new de(new RGBA(16*t+t,16*o+o,16*n+n,(16*r+r)/255))}default:return null}}function be(e){switch(e){case te.Digit0:return 0;case te.Digit1:return 1;case te.Digit2:return 2;case te.Digit3:return 3;case te.Digit4:return 4;case te.Digit5:return 5;case te.Digit6:return 6;case te.Digit7:return 7;case te.Digit8:return 8;case te.Digit9:return 9;case te.a:case te.A:return 10;case te.b:case te.B:return 11;case te.c:case te.C:return 12;case te.d:case te.D:return 13;case te.e:case te.E:return 14;case te.f:case te.F:return 15}return 0}function ve(e){const t=.001*performance.now();let o=Math.floor(t),n=Math.floor(t%1*1e9);return void 0!==e&&(o-=e[0],n-=e[1],n<0&&(o--,n+=1e9)),[o,n]}function ye(e,t,o){let n,r,c,d,h;function u(e){const o=e-(r??0);return null==r||o>=t||o<0}function p(){const e=Date.now();if(u(e))m();else{h=setTimeout(p,t-(e-(r??0)))}}function m(){return h=void 0,n?function(){const t=n,o=c;return n=c=void 0,d=e.apply(o,t),d}():(n=c=void 0,d)}function g(...e){const m=Date.now(),g=u(m);return n=null!=o&&n?o(n,e):e,c=this,r=m,g&&null==h?(h=setTimeout(p,t),d):(null==h&&(h=setTimeout(p,t)),d)}return g.cancel=function(){null!=h&&clearTimeout(h),n=r=c=h=void 0},g.flush=function(){return null!=h?m():d},g.pending=function(){return null!=h},g}const we=",",Ce="=",xe="{",Se="(",_e=")",Te=/\(([\s\S]*)\)/,Re=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,ke=/\s?=.*$/;const Ee=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,o=!1){this.provider=e,this._isDebugging=o,this.logLevel=t}enabled(e){return this.level>=Oe(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=Oe(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){if(this.level<4&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!0,t)}`)}error(e,t,...o){if(this.level<1&&!this.isDebugging)return;let n;if(n=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??""}`,null==n){const t=e instanceof Error?e.stack:void 0;if(t){const e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(n=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${n??""}${this.toLoggableParams(!1,o)}${null!=e?`\n${String(e)}`:""}`)}log(e,...t){if(this.level<3&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}warn(e,...t){if(this.level<2&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map((e=>this.toLoggable(e,t))).join(", ")}]`;const o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,t)}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";const o=t.map((e=>this.toLoggable(e))).join(", ");return 0!==o.length?` — ${o}`:""}};function Oe(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}function Ie(e){let t;if("function"==typeof e){if(null==e.prototype?.constructor)return e.name;t=e.prototype.constructor.name??""}else t=e.constructor?.name??"";const o=t.indexOf("_");return-1===o?t:t.substr(o+1)}const Me={enabled:e=>Ee.enabled(e)||Ee.isDebugging,log:(e,t,o,...n)=>{switch(e){case"error":Ee.error("",t,o,...n);break;case"warn":Ee.warn(t,o,...n);break;case"info":Ee.log(t,o,...n);break;default:Ee.debug(t,o,...n)}}},De=500,Ae=2**30,Ne=new Map;let $e=0;function Pe(e){Ne.delete(e)}function ze(){return Ne.get($e)}function He(e,t){if(null!=t)return{scopeId:t.scopeId,prefix:`${t.prefix}${e}`};const o=Le();return{scopeId:o,prefix:`[${String(o).padStart(5)}] ${e}`}}function Le(){return $e===Ae&&($e=0),++$e}const{fromCharCode:Ge}=String;new TextEncoder;function Fe(e){const[t,o]=ve(e);return 1e3*t+Math.floor(o/1e6)}function Be(e,t,o){if(null==o)return`${t} ${e}${1===t?"":"s"}`;const n=1===t?e:o.plural??`${e}s`;return o.only?n:`${0===t?o.zero??t:o.format?.(t)??t}${o.infix??" "}${n}`}const We=Symbol("logInstanceNameFn");function Ue(e){return function(e,t=!1){let o,n,r,c,d=0,h=!1,u=!1,p=!0;null!=e&&({args:o,enter:n,exit:r,prefix:c,logThreshold:d=0,scoped:h=!0,singleLine:u=!1,timed:p=!0}=e);d>0&&(u=!0,p=!0);p&&(h=!0);const m=Ee.isDebugging,g=t?Ee.debug:Ee.log,v=m?"debug":"info";return(e,t,y)=>{let w,x;if("function"==typeof y.value?(w=y.value,x="value"):"function"==typeof y.get&&(w=y.get,x="get"),null==w||null==x)throw new Error("Not supported");const S=!1!==o?function(e){if("function"!=typeof e)throw new Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e);t=t.replace(Re,"")||t,t=t.slice(0,t.indexOf(xe));let o=t.indexOf(Se),n=t.indexOf(_e);o=o>=0?o+1:0,n=n>0?n:t.indexOf(Ce),t=t.slice(o,n),t=`(${t})`;const r=Te.exec(t);return null!=r?r[1].split(we).map((e=>e.trim().replace(ke,""))):[]}(w):[];y[x]=function(...e){if(!m&&!Ee.enabled(v))return w.apply(this,e);const y=Le(),x=null!=this?this.constructor?.[We]?.(this,Ie(this))??Ie(this):void 0;let _,T=x?h?`[${y.toString(16).padStart(5)}] ${x}.${t}`:`${x}.${t}`:t;null!=c&&(T=c({id:y,instance:this,instanceName:x??"",name:t,prefix:T},...e)),h&&(_={scopeId:y,prefix:T},function(e,t){Ne.set(e,t)}(y,_));const E=null!=n?n(...e):"";let O;if(!1===o||0===e.length)O="",u||g.call(Ee,`${T}${E}`);else{let t;O="";let n,r,c,d=-1;for(c of e){if(n=S[++d],t=o?.[d],null!=t){if("boolean"==typeof t)continue;if(O.length>0&&(O+=", "),"string"==typeof t){O+=t;continue}r=String(t(c))}else O.length>0&&(O+=", "),r=Ee.toLoggable(c);O+=n?`${n}=${r}`:r}u||g.call(Ee,O?`${T}${E}(${O})`:`${T}${E}`)}if(u||p||null!=r){const t=p?ve():void 0,o=e=>{const o=void 0!==t?` [${Fe(t)}ms]`:"";u?Ee.error(e,O?`${T}${E}(${O})`:`${T}${E}`,_?.exitDetails?`failed${_.exitDetails}${o}`:`failed${o}`):Ee.error(e,T,_?.exitDetails?`failed${_.exitDetails}${o}`:`failed${o}`),h&&Pe(y)};let n;try{n=w.apply(this,e)}catch(e){throw o(e),e}const c=e=>{let o,n,c,p;if(null!=t?(o=Fe(t),o>De?(n=Ee.warn,c=` [*${o}ms] (slow)`):(n=g,c=` [${o}ms]`)):(c="",n=g),null!=r)if("function"==typeof r)try{p=r(e)}catch(e){p=`@log.exit error: ${e}`}else!0===r&&(p=`returned ${Ee.toLoggable(e)}`);else _?.exitFailed?(p=_.exitFailed,n=Ee.error):p="completed";u?(0===d||o>d)&&n.call(Ee,O?`${T}${E}(${O}) ${p}${_?.exitDetails||""}${c}`:`${T}${E} ${p}${_?.exitDetails||""}${c}`):n.call(Ee,O?`${T}(${O}) ${p}${_?.exitDetails||""}${c}`:`${T} ${p}${_?.exitDetails||""}${c}`),h&&Pe(y)};return null!=n&&(null!=(A=n)&&(A instanceof Promise||"function"==typeof A?.then))?n.then(c,o):c(n),n}var A;return w.apply(this,e)}}}(e,!0)}Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");class Stopwatch{constructor(e,t,...o){let n;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:He(e??""),n="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??Me,this._time=ve(),null!=n){if(!this.logProvider.enabled(this.logLevel))return;o.length?this.logProvider.log(this.logLevel,this.logScope,`${n.message??""}${n.suffix??""}`,...o):this.logProvider.log(this.logLevel,this.logScope,`${n.message??""}${n.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){const[e,t]=ve(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=ve(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);const[o,n]=ve(this._time),r=1e3*o+Math.floor(n/1e6),c=e?.message??"";this.logProvider.log(r>250?"warn":this.logLevel,this.logScope,`${c?`${c} `:""}[${r}ms]${e?.suffix??""}`)}}var je,Ve;(Ve=je||(je={})).on=function(e,t,o,n){let r=!1;if("string"==typeof e){const c=function(t){const n=t?.target?.closest(e);null!=n&&o(t,n)};return document.addEventListener(t,c,n??!0),{dispose:()=>{r||(r=!0,document.removeEventListener(t,c,n??!0))}}}const c=function(e){o(e,this)};return e.addEventListener(t,c,n??!1),{dispose:()=>{r||(r=!0,e.removeEventListener(t,c,n??!1))}}},Ve.insertTemplate=function(e,t,o){const n=document.getElementById(e);if(t.replaceChildren(n?.content.cloneNode(!0)),t.className=n.className,null!=o?.visible){const e=t.querySelectorAll("[data-visible]");for(const t of e){const e=t.dataset.visible;e&&(o.visible[e]?t.style.display="initial":t.style.display="none")}}if(null!=o?.bindings){const e=t.querySelectorAll("[data-bind]");for(const t of e){const e=t.dataset.bind;if(!e)continue;const n=o.bindings[e];null!=n&&(t.textContent=String(n))}}},Ve.resetSlot=function(e){e.replaceChildren(),e.className=""};const Ze=class _Emitter{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(e,t,o)=>{null==this.listeners&&(this.listeners=new LinkedList);const n=this.listeners.push(null==t?e:[e,t]),r={dispose:()=>{r.dispose=_Emitter._noop,this._disposed||n()}};return Array.isArray(o)&&o.push(r),r}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){const[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};Ze._noop=function(){};let qe=Ze;const Ke={done:!0,value:void 0},Ye=class _Node{constructor(e){this.element=e,this.next=_Node.Undefined,this.prev=_Node.Undefined}};Ye.Undefined=new Ye(void 0);let Xe=Ye;class LinkedList{constructor(){this._first=Xe.Undefined,this._last=Xe.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===Xe.Undefined}clear(){this._first=Xe.Undefined,this._last=Xe.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){const o=new Xe(e);if(this._first===Xe.Undefined)this._first=o,this._last=o;else if(t){const e=this._last;this._last=o,o.prev=e,e.next=o}else{const e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let n=!1;return()=>{n||(n=!0,this._remove(o))}}shift(){if(this._first===Xe.Undefined)return;const e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===Xe.Undefined)return;const e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==Xe.Undefined&&e.next!==Xe.Undefined){const t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===Xe.Undefined&&e.next===Xe.Undefined?(this._first=Xe.Undefined,this._last=Xe.Undefined):e.next===Xe.Undefined?(this._last=this._last.prev,this._last.next=Xe.Undefined):e.prev===Xe.Undefined&&(this._first=this._first.next,this._first.prev=Xe.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===Xe.Undefined?Ke:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){const e=[];for(let t=this._first;t!==Xe.Undefined;t=t.next)e.push(t.element);return e}}const Qe=new qe,Je=Qe.event;function et(e){const t=document.documentElement,o=window.getComputedStyle(t),n=document.body.classList,r=n.contains("vscode-light")||n.contains("vscode-high-contrast-light"),c=n.contains("vscode-high-contrast")||n.contains("vscode-high-contrast-light"),d=t.style,h=le("--vscode-editor-background",o);let u=le("--vscode-editor-foreground",o);u||(u=le("--vscode-foreground",o));let p=le("--color-background",o);return d.setProperty("--color-background--lighten-05",re(p,5)),d.setProperty("--color-background--darken-05",ne(p,5)),d.setProperty("--color-background--lighten-075",re(p,7.5)),d.setProperty("--color-background--darken-075",ne(p,7.5)),d.setProperty("--color-background--lighten-10",re(p,10)),d.setProperty("--color-background--darken-10",ne(p,10)),d.setProperty("--color-background--lighten-15",re(p,15)),d.setProperty("--color-background--darken-15",ne(p,15)),d.setProperty("--color-background--lighten-30",re(p,30)),d.setProperty("--color-background--darken-30",ne(p,30)),d.setProperty("--color-background--lighten-50",re(p,50)),d.setProperty("--color-background--darken-50",ne(p,50)),p=le("--color-button-background",o),d.setProperty("--color-button-background--darken-30",ne(p,30)),p=le("--color-highlight",o),d.setProperty("--color-highlight--75",ie(p,75)),d.setProperty("--color-highlight--50",ie(p,50)),d.setProperty("--color-highlight--25",ie(p,25)),p=le("--color-button-secondary-background",o),d.setProperty("--color-button-secondary-background--darken-30",ne(p,30)),p=le("--color-foreground",o),d.setProperty("--color-foreground--85",ie(p,85)),d.setProperty("--color-foreground--75",ie(p,75)),d.setProperty("--color-foreground--65",ie(p,65)),d.setProperty("--color-foreground--50",ie(p,50)),p=le("--color-link-foreground",o),d.setProperty("--color-link-foreground--darken-20",ne(p,20)),d.setProperty("--color-link-foreground--lighten-20",re(p,20)),p=le("--color-alert-infoBackground",o),d.setProperty("--color-alert-infoHoverBackground",r?ne(p,5):re(p,5)),p=le("--color-alert-warningBackground",o),d.setProperty("--color-alert-warningHoverBackground",r?ne(p,5):re(p,5)),p=le("--color-alert-errorBackground",o),d.setProperty("--color-alert-errorHoverBackground",r?ne(p,5):re(p,5)),p=r?ne(h,5):re(h,5),d.setProperty("--color-alert-neutralBackground",p),d.setProperty("--color-alert-neutralHoverBackground",r?ne(p,5):re(p,5)),{colors:{background:h,foreground:u},computedStyle:o,isLightTheme:r,isHighContrastTheme:c,isInitializing:null==e}}var tt=Object.defineProperty,ot=Object.getOwnPropertyDescriptor;let nt=0;function rt(){return 1073741824===nt?nt=1:nt++,`webview:${nt}`}const it=new TextDecoder;class App{constructor(e){this.appName=e;const t=[],o=et();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(o),t.push(Je(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",Ee.configure({name:e,createChannel:function(e){return{name:e,appendLine:function(e){}}}},"off"),this.log(`${e}()`),this._api=acquireVsCodeApi(),null!=this.state){const e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){const e=new MutationObserver((e=>{Qe.fire(et(e))}));return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame((()=>{this.log(`${e}(): initializing...`);try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(je.on(window,"message",(e=>this.onMessageReceivedCore(e)))),this.sendCommand(d,void 0),this.onInitialized?.()}finally{document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}})),t.push(je.on(window,"pagehide",(()=>{t?.forEach((e=>e.dispose())),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=void 0})))}onMessageReceivedCore(e){const t=ze(),o=e.data;if(o.packed&&o.params instanceof Uint8Array){const n=function(e,t,...o){return(t?.provider??Me).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...o):void 0}(He(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});o.params=JSON.parse(it.decode(o.params)),n?.stop()}this.onMessageReceived(o)}bind(){this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);const e=ye((e=>{this.sendCommand(h,e)}),150);this.bindDisposables.push(je.on(document,"focusin",(t=>{const o=t.composedPath().some((e=>"INPUT"===e.tagName));!0===this._focused&&this._inputFocused===o||(this._focused=!0,this._inputFocused=o,e({focused:!0,inputFocused:o}))})),je.on(document,"focusout",(()=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))})))}log(e,...t){"string"==typeof e?Ee.log(e,...t):Ee.log(e,t.shift(),...t)}getState(){return this._api.getState()}sendCommand(e,t){const o=rt();this.log(`${this.appName}.sendCommand(${o}): name=${e.method}`),this.postMessage({id:o,method:e.method,params:t})}async sendCommandWithCompletion(e,t,o){const n=rt();this.log(`${this.appName}.sendCommandWithCompletion(${n}): name=${e.method}`);const r=new Promise(((e,t)=>{let r;const d=[je.on(window,"message",(t=>{c(o,t.data,(o=>{t.data.completionId===n&&(d.forEach((e=>e.dispose())),queueMicrotask((()=>e(o))))}))})),{dispose:function(){null!=r&&(clearTimeout(r),r=void 0)}}];r=setTimeout((()=>{r=void 0,d.forEach((e=>e.dispose())),t(new Error(`Timed out waiting for completion of ${o.method}`))}),6e4)}));return this.postMessage({id:n,method:e.method,params:t,completionId:n}),r}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}}((e,t,o,n)=>{for(var r,c=n>1?void 0:n?ot(t,o):t,d=e.length-1;d>=0;d--)(r=e[d])&&(c=(n?r(t,o,c):r(c))||c);n&&c&&tt(t,o,c)})([Ue({args:{0:e=>`${e.data.id}, method=${e.data.method}`}})],App.prototype,"onMessageReceivedCore",1);var st=n(7507),at=n.n(st);const lt=function(){if("undefined"!=typeof globalThis)return globalThis;if("undefined"!=typeof global)return global;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(e){return{}}}();void 0===lt.trustedTypes&&(lt.trustedTypes={createPolicy:(e,t)=>t});const ct={configurable:!1,enumerable:!1,writable:!1};void 0===lt.FAST&&Reflect.defineProperty(lt,"FAST",Object.assign({value:Object.create(null)},ct));const dt=lt.FAST;if(void 0===dt.getById){const e=Object.create(null);Reflect.defineProperty(dt,"getById",Object.assign({value(t,o){let n=e[t];return void 0===n&&(n=o?e[t]=o():null),n}},ct))}const ht=Object.freeze([]);function ut(){const e=new WeakMap;return function(t){let o=e.get(t);if(void 0===o){let n=Reflect.getPrototypeOf(t);for(;void 0===o&&null!==n;)o=e.get(n),n=Reflect.getPrototypeOf(n);o=void 0===o?[]:o.slice(0),e.set(t,o)}return o}}const pt=lt.FAST.getById(1,(()=>{const e=[],t=[];function o(){if(t.length)throw t.shift()}function n(e){try{e.call()}catch(e){t.push(e),setTimeout(o,0)}}function r(){let t=0;for(;t<e.length;)if(n(e[t]),t++,t>1024){for(let o=0,n=e.length-t;o<n;o++)e[o]=e[o+t];e.length-=t,t=0}e.length=0}return Object.freeze({enqueue:function(t){e.length<1&&lt.requestAnimationFrame(r),e.push(t)},process:r})})),ft=lt.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});let mt=ft;const gt=`fast-${Math.random().toString(36).substring(2,8)}`,bt=`${gt}{`,vt=`}${gt}`,yt=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(mt!==ft)throw new Error("The HTML policy can only be set once.");mt=e},createHTML:e=>mt.createHTML(e),isMarker:e=>e&&8===e.nodeType&&e.data.startsWith(gt),extractDirectiveIndexFromMarker:e=>parseInt(e.data.replace(`${gt}:`,"")),createInterpolationPlaceholder:e=>`${bt}${e}${vt}`,createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder:e=>`\x3c!--${gt}:${e}--\x3e`,queueUpdate:pt.enqueue,processUpdates:pt.process,nextUpdate:()=>new Promise(pt.enqueue),setAttribute(e,t,o){null==o?e.removeAttribute(t):e.setAttribute(t,o)},setBooleanAttribute(e,t,o){o?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;null!==t;t=e.firstChild)e.removeChild(t)},createTemplateWalker:e=>document.createTreeWalker(e,133,null,!1)});class SubscriberSet{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return void 0===this.spillover?this.sub1===e||this.sub2===e:-1!==this.spillover.indexOf(e)}subscribe(e){const t=this.spillover;if(void 0===t){if(this.has(e))return;if(void 0===this.sub1)return void(this.sub1=e);if(void 0===this.sub2)return void(this.sub2=e);this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else{-1===t.indexOf(e)&&t.push(e)}}unsubscribe(e){const t=this.spillover;if(void 0===t)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const o=t.indexOf(e);-1!==o&&t.splice(o,1)}}notify(e){const t=this.spillover,o=this.source;if(void 0===t){const t=this.sub1,n=this.sub2;void 0!==t&&t.handleChange(o,e),void 0!==n&&n.handleChange(o,e)}else for(let n=0,r=t.length;n<r;++n)t[n].handleChange(o,e)}}class PropertyChangeNotifier{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const o=this.subscribers[e];void 0!==o&&o.notify(e),null===(t=this.sourceSubscribers)||void 0===t||t.notify(e)}subscribe(e,t){var o;if(t){let o=this.subscribers[t];void 0===o&&(this.subscribers[t]=o=new SubscriberSet(this.source)),o.subscribe(e)}else this.sourceSubscribers=null!==(o=this.sourceSubscribers)&&void 0!==o?o:new SubscriberSet(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var o;if(t){const o=this.subscribers[t];void 0!==o&&o.unsubscribe(e)}else null===(o=this.sourceSubscribers)||void 0===o||o.unsubscribe(e)}}const wt=dt.getById(2,(()=>{const e=/(:|&&|\|\||if)/,t=new WeakMap,o=yt.queueUpdate;let n,r=e=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function c(e){let o=e.$fastController||t.get(e);return void 0===o&&(Array.isArray(e)?o=r(e):t.set(e,o=new PropertyChangeNotifier(e))),o}const d=ut();class DefaultObservableAccessor{constructor(e){this.name=e,this.field=`_${e}`,this.callback=`${e}Changed`}getValue(e){return void 0!==n&&n.watch(e,this.name),e[this.field]}setValue(e,t){const o=this.field,n=e[o];if(n!==t){e[o]=t;const r=e[this.callback];"function"==typeof r&&r.call(e,n,t),c(e).notify(this.name)}}}class BindingObserverImplementation extends SubscriberSet{constructor(e,t,o=!1){super(e,t),this.binding=e,this.isVolatileBinding=o,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(e,t){this.needsRefresh&&null!==this.last&&this.disconnect();const o=n;n=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const r=this.binding(e,t);return n=o,r}disconnect(){if(null!==this.last){let e=this.first;for(;void 0!==e;)e.notifier.unsubscribe(this,e.propertyName),e=e.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(e,t){const o=this.last,r=c(e),d=null===o?this.first:{};if(d.propertySource=e,d.propertyName=t,d.notifier=r,r.subscribe(this,t),null!==o){if(!this.needsRefresh){let t;n=void 0,t=o.propertySource[o.propertyName],n=this,e===t&&(this.needsRefresh=!0)}o.next=d}this.last=d}handleChange(){this.needsQueue&&(this.needsQueue=!1,o(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let e=this.first;return{next:()=>{const t=e;return void 0===t?{value:void 0,done:!0}:(e=e.next,{value:t,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(e){r=e},getNotifier:c,track(e,t){void 0!==n&&n.watch(e,t)},trackVolatile(){void 0!==n&&(n.needsRefresh=!0)},notify(e,t){c(e).notify(t)},defineProperty(e,t){"string"==typeof t&&(t=new DefaultObservableAccessor(t)),d(e).push(t),Reflect.defineProperty(e,t.name,{enumerable:!0,get:function(){return t.getValue(this)},set:function(e){t.setValue(this,e)}})},getAccessors:d,binding(e,t,o=this.isVolatileBinding(e)){return new BindingObserverImplementation(e,t,o)},isVolatileBinding:t=>e.test(t.toString())})}));function Ct(e,t){wt.defineProperty(e,t)}function xt(e,t,o){return Object.assign({},o,{get:function(){return wt.trackVolatile(),o.get.apply(this)}})}const St=dt.getById(3,(()=>{let e=null;return{get:()=>e,set(t){e=t}}}));class ExecutionContext{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return St.get()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){St.set(e)}}wt.defineProperty(ExecutionContext.prototype,"index"),wt.defineProperty(ExecutionContext.prototype,"length");const _t=Object.seal(new ExecutionContext);class element_styles_ElementStyles{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=null===this.behaviors?e:this.behaviors.concat(e),this}}function Tt(e){return e.map((e=>e instanceof element_styles_ElementStyles?Tt(e.styles):[e])).reduce(((e,t)=>e.concat(t)),[])}function Rt(e){return e.map((e=>e instanceof element_styles_ElementStyles?e.behaviors:null)).reduce(((e,t)=>null===t?e:(null===e&&(e=[]),e.concat(t))),null)}element_styles_ElementStyles.create=(()=>{if(yt.supportsAdoptedStyleSheets){const e=new Map;return t=>new AdoptedStyleSheetsStyles(t,e)}return e=>new StyleElementStyles(e)})();let kt=(e,t)=>{e.adoptedStyleSheets=[...e.adoptedStyleSheets,...t]},Et=(e,t)=>{e.adoptedStyleSheets=e.adoptedStyleSheets.filter((e=>-1===t.indexOf(e)))};if(yt.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),kt=(e,t)=>{e.adoptedStyleSheets.push(...t)},Et=(e,t)=>{for(const o of t){const t=e.adoptedStyleSheets.indexOf(o);-1!==t&&e.adoptedStyleSheets.splice(t,1)}}}catch(Gs){}class AdoptedStyleSheetsStyles extends element_styles_ElementStyles{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=Rt(e)}get styleSheets(){if(void 0===this._styleSheets){const e=this.styles,t=this.styleSheetCache;this._styleSheets=Tt(e).map((e=>{if(e instanceof CSSStyleSheet)return e;let o=t.get(e);return void 0===o&&(o=new CSSStyleSheet,o.replaceSync(e),t.set(e,o)),o}))}return this._styleSheets}addStylesTo(e){kt(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){Et(e,this.styleSheets),super.removeStylesFrom(e)}}let Ot=0;class StyleElementStyles extends element_styles_ElementStyles{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=Rt(e),this.styleSheets=Tt(e),this.styleClass="fast-style-class-"+ ++Ot}addStylesTo(e){const t=this.styleSheets,o=this.styleClass;e=this.normalizeTarget(e);for(let n=0;n<t.length;n++){const r=document.createElement("style");r.innerHTML=t[n],r.className=o,e.append(r)}super.addStylesTo(e)}removeStylesFrom(e){const t=(e=this.normalizeTarget(e)).querySelectorAll(`.${this.styleClass}`);for(let o=0,n=t.length;o<n;++o)e.removeChild(t[o]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const It=Object.freeze({locate:ut()}),Mt={toView:e=>e?"true":"false",fromView:e=>null!=e&&"false"!==e&&!1!==e&&0!==e},Dt={toView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t.toString()},fromView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t}};class AttributeDefinition{constructor(e,t,o=t.toLowerCase(),n="reflect",r){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=o,this.mode=n,this.converter=r,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,"boolean"===n&&void 0===r&&(this.converter=Mt)}setValue(e,t){const o=e[this.fieldName],n=this.converter;void 0!==n&&(t=n.fromView(t)),o!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](o,t),e.$fastController.notify(this.name))}getValue(e){return wt.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,o=this.guards;o.has(e)||"fromView"===t||yt.queueUpdate((()=>{o.add(e);const n=e[this.fieldName];switch(t){case"reflect":const t=this.converter;yt.setAttribute(e,this.attribute,void 0!==t?t.toView(n):n);break;case"boolean":yt.setBooleanAttribute(e,this.attribute,n)}o.delete(e)}))}static collect(e,...t){const o=[];t.push(It.locate(e));for(let n=0,r=t.length;n<r;++n){const r=t[n];if(void 0!==r)for(let t=0,n=r.length;t<n;++t){const n=r[t];"string"==typeof n?o.push(new AttributeDefinition(e,n)):o.push(new AttributeDefinition(e,n.property,n.attribute,n.mode,n.converter))}}return o}}function At(e,t){let o;function n(e,t){arguments.length>1&&(o.property=t),It.locate(e.constructor).push(o)}return arguments.length>1?(o={},void n(e,t)):(o=void 0===e?{}:e,n)}const Nt={mode:"open"},$t={},Pt=dt.getById(4,(()=>{const e=new Map;return Object.freeze({register:t=>!e.has(t.type)&&(e.set(t.type,t),!0),getByType:t=>e.get(t)})}));class FASTElementDefinition{constructor(e,t=e.definition){"string"==typeof t&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const o=AttributeDefinition.collect(e,t.attributes),n=new Array(o.length),r={},c={};for(let e=0,t=o.length;e<t;++e){const t=o[e];n[e]=t.attribute,r[t.name]=t,c[t.attribute]=t}this.attributes=o,this.observedAttributes=n,this.propertyLookup=r,this.attributeLookup=c,this.shadowOptions=void 0===t.shadowOptions?Nt:null===t.shadowOptions?void 0:Object.assign(Object.assign({},Nt),t.shadowOptions),this.elementOptions=void 0===t.elementOptions?$t:Object.assign(Object.assign({},$t),t.elementOptions),this.styles=void 0===t.styles?void 0:Array.isArray(t.styles)?element_styles_ElementStyles.create(t.styles):t.styles instanceof element_styles_ElementStyles?t.styles:element_styles_ElementStyles.create([t.styles])}get isDefined(){return!!Pt.getByType(this.type)}define(e=customElements){const t=this.type;if(Pt.register(this)){const e=this.attributes,o=t.prototype;for(let t=0,n=e.length;t<n;++t)wt.defineProperty(o,e[t]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}}FASTElementDefinition.forType=Pt.getByType;function zt(e,t,o,n){var r,c=arguments.length,d=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(e,t,o,n);else for(var h=e.length-1;h>=0;h--)(r=e[h])&&(d=(c<3?r(d):c>3?r(t,o,d):r(t,o))||d);return c>3&&d&&Object.defineProperty(t,o,d),d}Object.create;Object.create;"function"==typeof SuppressedError&&SuppressedError;const Ht=new WeakMap,Lt={bubbles:!0,composed:!0,cancelable:!0};function Gt(e){return e.shadowRoot||Ht.get(e)||null}class Controller extends PropertyChangeNotifier{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const o=t.shadowOptions;if(void 0!==o){const t=e.attachShadow(o);"closed"===o.mode&&Ht.set(e,t)}const n=wt.getAccessors(e);if(n.length>0){const t=this.boundObservables=Object.create(null);for(let o=0,r=n.length;o<r;++o){const r=n[o].name,c=e[r];void 0!==c&&(delete e[r],t[r]=c)}}}get isConnected(){return wt.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,wt.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=e,this.needsInitialization||null===e||this.addStyles(e))}addStyles(e){const t=Gt(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const o=e.behaviors;e.addStylesTo(t),null!==o&&this.addBehaviors(o)}}removeStyles(e){const t=Gt(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const o=e.behaviors;e.removeStylesFrom(t),null!==o&&this.removeBehaviors(o)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),o=e.length,n=[];for(let r=0;r<o;++r){const o=e[r];t.has(o)?t.set(o,t.get(o)+1):(t.set(o,1),n.push(o))}if(this._isConnected){const e=this.element;for(let t=0;t<n.length;++t)n[t].bind(e,_t)}}removeBehaviors(e,t=!1){const o=this.behaviors;if(null===o)return;const n=e.length,r=[];for(let c=0;c<n;++c){const n=e[c];if(o.has(n)){const e=o.get(n)-1;0===e||t?o.delete(n)&&r.push(n):o.set(n,e)}}if(this._isConnected){const e=this.element;for(let t=0;t<r.length;++t)r[t].unbind(e)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(e,_t);const t=this.behaviors;if(null!==t)for(const[o]of t)o.bind(e,_t);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;null!==e&&e.unbind();const t=this.behaviors;if(null!==t){const e=this.element;for(const[o]of t)o.unbind(e)}}onAttributeChangedCallback(e,t,o){const n=this.definition.attributeLookup[e];void 0!==n&&n.onAttributeChangedCallback(this.element,o)}emit(e,t,o){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},Lt),o)))}finishInitialization(){const e=this.element,t=this.boundObservables;if(null!==t){const o=Object.keys(t);for(let n=0,r=o.length;n<r;++n){const r=o[n];e[r]=t[r]}this.boundObservables=null}const o=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():o.template&&(this._template=o.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():o.styles&&(this._styles=o.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,o=Gt(t)||t;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||yt.removeChildNodes(o),e&&(this.view=e.render(t,o,t))}static forCustomElement(e){const t=e.$fastController;if(void 0!==t)return t;const o=FASTElementDefinition.forType(e.constructor);if(void 0===o)throw new Error("Missing FASTElement definition.");return e.$fastController=new Controller(e,o)}}function Ft(e){return class extends e{constructor(){super(),Controller.forCustomElement(this)}$emit(e,t,o){return this.$fastController.emit(e,t,o)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,o){this.$fastController.onAttributeChangedCallback(e,t,o)}}}const Bt=Object.assign(Ft(HTMLElement),{from:e=>Ft(e),define:(e,t)=>new FASTElementDefinition(e,t).define().type});function Wt(e){return function(t){new FASTElementDefinition(t,e).define()}}const Ut=new Map;"metadata"in Reflect||(Reflect.metadata=function(e,t){return function(o){Reflect.defineMetadata(e,t,o)}},Reflect.defineMetadata=function(e,t,o){let n=Ut.get(o);void 0===n&&Ut.set(o,n=new Map),n.set(e,t)},Reflect.getOwnMetadata=function(e,t){const o=Ut.get(t);if(void 0!==o)return o.get(e)});class ResolverBuilder{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,fo(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){const{container:o,key:n}=this;return this.container=this.key=void 0,o.registerResolver(n,new ResolverImpl(n,e,t))}}function jt(e){const t=e.slice(),o=Object.keys(e),n=o.length;let r;for(let c=0;c<n;++c)r=o[c],xo(r)||(t[r]=e[r]);return t}const Vt=Object.freeze({none(e){throw Error(`${e.toString()} not registered, did you forget to add @singleton()?`)},singleton:e=>new ResolverImpl(e,1,e),transient:e=>new ResolverImpl(e,2,e)}),Zt=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:Vt.singleton})}),qt=new Map;function Kt(e){return t=>Reflect.getOwnMetadata(e,t)}let Yt=null;const Xt=Object.freeze({createContainer:e=>new ContainerImpl(null,Object.assign({},Zt.default,e)),findResponsibleContainer(e){const t=e.$$container$$;return t&&t.responsibleForOwnerRequests?t:Xt.findParentContainer(e)},findParentContainer(e){const t=new CustomEvent(ho,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return e.dispatchEvent(t),t.detail.container||Xt.getOrCreateDOMContainer()},getOrCreateDOMContainer:(e,t)=>e?e.$$container$$||new ContainerImpl(e,Object.assign({},Zt.default,t,{parentLocator:Xt.findParentContainer})):Yt||(Yt=new ContainerImpl(null,Object.assign({},Zt.default,t,{parentLocator:()=>null}))),getDesignParamtypes:Kt("design:paramtypes"),getAnnotationParamtypes:Kt("di:paramtypes"),getOrCreateAnnotationParamTypes(e){let t=this.getAnnotationParamtypes(e);return void 0===t&&Reflect.defineMetadata("di:paramtypes",t=[],e),t},getDependencies(e){let t=qt.get(e);if(void 0===t){const o=e.inject;if(void 0===o){const o=Xt.getDesignParamtypes(e),n=Xt.getAnnotationParamtypes(e);if(void 0===o)if(void 0===n){const o=Object.getPrototypeOf(e);t="function"==typeof o&&o!==Function.prototype?jt(Xt.getDependencies(o)):[]}else t=jt(n);else if(void 0===n)t=jt(o);else{t=jt(o);let e,r=n.length;for(let o=0;o<r;++o)e=n[o],void 0!==e&&(t[o]=e);const c=Object.keys(n);let d;r=c.length;for(let e=0;e<r;++e)d=c[e],xo(d)||(t[d]=n[d])}}else t=jt(o);qt.set(e,t)}return t},defineProperty(e,t,o,n=!1){const r=`$di_${t}`;Reflect.defineProperty(e,t,{get:function(){let e=this[r];if(void 0===e){const c=this instanceof HTMLElement?Xt.findResponsibleContainer(this):Xt.getOrCreateDOMContainer();if(e=c.get(o),this[r]=e,n&&this instanceof Bt){const n=this.$fastController,c=()=>{Xt.findResponsibleContainer(this).get(o)!==this[r]&&(this[r]=e,n.notify(t))};n.subscribe({handleChange:c},"isConnected")}}return e}})},createInterface(e,t){const o="function"==typeof e?e:t,n="string"==typeof e?e:e&&"friendlyName"in e&&e.friendlyName||vo,r="string"!=typeof e&&(e&&"respectConnection"in e&&e.respectConnection||!1),c=function(e,t,o){if(null==e||void 0!==new.target)throw new Error(`No registration for interface: '${c.friendlyName}'`);if(t)Xt.defineProperty(e,t,c,r);else{Xt.getOrCreateAnnotationParamTypes(e)[o]=c}};return c.$isInterface=!0,c.friendlyName=n??"(anonymous)",null!=o&&(c.register=function(e,t){return o(new ResolverBuilder(e,null!=t?t:c))}),c.toString=function(){return`InterfaceSymbol<${c.friendlyName}>`},c},inject:(...e)=>function(t,o,n){if("number"==typeof n){const o=Xt.getOrCreateAnnotationParamTypes(t),r=e[0];void 0!==r&&(o[n]=r)}else if(o)Xt.defineProperty(t,o,e[0]);else{const o=n?Xt.getOrCreateAnnotationParamTypes(n.value):Xt.getOrCreateAnnotationParamTypes(t);let r;for(let t=0;t<e.length;++t)r=e[t],void 0!==r&&(o[t]=r)}},transient:e=>(e.register=function(t){return mo.transient(e,e).register(t)},e.registerInRequestor=!1,e),singleton:(e,t=eo)=>(e.register=function(t){return mo.singleton(e,e).register(t)},e.registerInRequestor=t.scoped,e)}),Qt=Xt.createInterface("Container");function Jt(e){return function(t){const o=function(e,t,n){Xt.inject(o)(e,t,n)};return o.$isResolver=!0,o.resolve=function(o,n){return e(t,o,n)},o}}Xt.inject;const eo={scoped:!1};to=(e,t,o,n)=>o.getAll(e,n);var to;Jt(((e,t,o)=>()=>o.get(e))),Jt(((e,t,o)=>o.has(e,!0)?o.get(e):void 0));function oo(e,t,o){Xt.inject(oo)(e,t,o)}oo.$isResolver=!0,oo.resolve=()=>{};Jt(((e,t,o)=>{const n=no(e,t),r=new ResolverImpl(e,0,n);return o.registerResolver(e,r),n})),Jt(((e,t,o)=>no(e,t)));function no(e,t){return t.getFactory(e).construct(t)}class ResolverImpl{constructor(e,t,o){this.key=e,this.strategy=t,this.state=o,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state;case 2:{const o=e.getFactory(this.state);if(null===o)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return o.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,o,n;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return null!==(n=null===(o=null===(t=e.getResolver(this.state))||void 0===t?void 0:t.getFactory)||void 0===o?void 0:o.call(t,e))&&void 0!==n?n:null;default:return null}}}function ro(e){return this.get(e)}function io(e,t){return t(e)}class FactoryImpl{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let o;return o=void 0===t?new this.Type(...this.dependencies.map(ro,e)):new this.Type(...this.dependencies.map(ro,e),...t),null==this.transformers?o:this.transformers.reduce(io,o)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const so={$isResolver:!0,resolve:(e,t)=>t};function ao(e){return"function"==typeof e.register}function lo(e){return function(e){return ao(e)&&"boolean"==typeof e.registerInRequestor}(e)&&e.registerInRequestor}const co=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),ho="__DI_LOCATE_PARENT__",uo=new Map;class ContainerImpl{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,null!==e&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(Qt,so),e instanceof Node&&e.addEventListener(ho,(e=>{e.composedPath()[0]!==this.owner&&(e.detail.container=this,e.stopImmediatePropagation())}))}get parent(){return void 0===this._parent&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return null===this.parent?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){if(100==++this.registerDepth)throw new Error("Unable to autoregister dependency");let t,o,n,r,c;const d=this.context;for(let h=0,u=e.length;h<u;++h)if(t=e[h],yo(t))if(ao(t))t.register(this,d);else if(void 0!==t.prototype)mo.singleton(t,t).register(this);else for(o=Object.keys(t),r=0,c=o.length;r<c;++r)n=t[o[r]],yo(n)&&(ao(n)?n.register(this,d):this.register(n));return--this.registerDepth,this}registerResolver(e,t){go(e);const o=this.resolvers,n=o.get(e);return null==n?o.set(e,t):n instanceof ResolverImpl&&4===n.strategy?n.state.push(t):o.set(e,new ResolverImpl(e,4,[n,t])),t}registerTransformer(e,t){const o=this.getResolver(e);if(null==o)return!1;if(o.getFactory){const e=o.getFactory(this);return null!=e&&(e.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if(go(e),void 0!==e.resolve)return e;let o,n=this;for(;null!=n;){if(o=n.resolvers.get(e),null!=o)return o;if(null==n.parent){const o=lo(e)?this:n;return t?this.jitRegister(e,o):null}n=n.parent}return null}has(e,t=!1){return!!this.resolvers.has(e)||!(!t||null==this.parent)&&this.parent.has(e,!0)}get(e){if(go(e),e.$isResolver)return e.resolve(this,this);let t,o=this;for(;null!=o;){if(t=o.resolvers.get(e),null!=t)return t.resolve(o,this);if(null==o.parent){const n=lo(e)?this:o;return t=this.jitRegister(e,n),t.resolve(o,this)}o=o.parent}throw new Error(`Unable to resolve key: ${String(e)}`)}getAll(e,t=!1){go(e);const o=this;let n,r=o;if(t){let t=ht;for(;null!=r;)n=r.resolvers.get(e),null!=n&&(t=t.concat(bo(n,r,o))),r=r.parent;return t}for(;null!=r;){if(n=r.resolvers.get(e),null!=n)return bo(n,r,o);if(r=r.parent,null==r)return ht}return ht}getFactory(e){let t=uo.get(e);if(void 0===t){if(wo(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);uo.set(e,t=new FactoryImpl(e,Xt.getDependencies(e)))}return t}registerFactory(e,t){uo.set(e,t)}createChild(e){return new ContainerImpl(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if("function"!=typeof e)throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(co.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(ao(e)){const o=e.register(t);if(!(o instanceof Object)||null==o.resolve){const o=t.resolvers.get(e);if(null!=o)return o;throw new Error("A valid resolver was not returned from the static register method")}return o}if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{const o=this.config.defaultResolver(e,t);return t.resolvers.set(e,o),o}}}const po=new WeakMap;function fo(e){return function(t,o,n){if(po.has(n))return po.get(n);const r=e(t,o,n);return po.set(n,r),r}}const mo=Object.freeze({instance:(e,t)=>new ResolverImpl(e,0,t),singleton:(e,t)=>new ResolverImpl(e,1,t),transient:(e,t)=>new ResolverImpl(e,2,t),callback:(e,t)=>new ResolverImpl(e,3,t),cachedCallback:(e,t)=>new ResolverImpl(e,3,fo(t)),aliasTo:(e,t)=>new ResolverImpl(t,5,e)});function go(e){if(null==e)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function bo(e,t,o){if(e instanceof ResolverImpl&&4===e.strategy){const n=e.state;let r=n.length;const c=new Array(r);for(;r--;)c[r]=n[r].resolve(t,o);return c}return[e.resolve(t,o)]}const vo="(anonymous)";function yo(e){return"object"==typeof e&&null!==e||"function"==typeof e}const wo=function(){const e=new WeakMap;let t=!1,o="",n=0;return function(r){return t=e.get(r),void 0===t&&(o=r.toString(),n=o.length,t=n>=29&&n<=100&&125===o.charCodeAt(n-1)&&o.charCodeAt(n-2)<=32&&93===o.charCodeAt(n-3)&&101===o.charCodeAt(n-4)&&100===o.charCodeAt(n-5)&&111===o.charCodeAt(n-6)&&99===o.charCodeAt(n-7)&&32===o.charCodeAt(n-8)&&101===o.charCodeAt(n-9)&&118===o.charCodeAt(n-10)&&105===o.charCodeAt(n-11)&&116===o.charCodeAt(n-12)&&97===o.charCodeAt(n-13)&&110===o.charCodeAt(n-14)&&88===o.charCodeAt(n-15),e.set(r,t)),t}}(),Co={};function xo(e){switch(typeof e){case"number":return e>=0&&(0|e)===e;case"string":{const t=Co[e];if(void 0!==t)return t;const o=e.length;if(0===o)return Co[e]=!1;let n=0;for(let t=0;t<o;++t)if(n=e.charCodeAt(t),0===t&&48===n&&o>1||n<48||n>57)return Co[e]=!1;return Co[e]=!0}default:return!1}}function So(e){return`${e.toLowerCase()}:presentation`}const _o=new Map,To=Object.freeze({define(e,t,o){const n=So(e);void 0===_o.get(n)?_o.set(n,t):_o.set(n,!1),o.register(mo.instance(n,t))},forTag(e,t){const o=So(e),n=_o.get(o);if(!1===n){return Xt.findResponsibleContainer(t).get(o)}return n||null}});class DefaultComponentPresentation{constructor(e,t){this.template=e||null,this.styles=void 0===t?null:Array.isArray(t)?element_styles_ElementStyles.create(t):t instanceof element_styles_ElementStyles?t:element_styles_ElementStyles.create([t])}applyTo(e){const t=e.$fastController;null===t.template&&(t.template=this.template),null===t.styles&&(t.styles=this.styles)}}class FoundationElement extends Bt{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return void 0===this._presentation&&(this._presentation=To.forTag(this.tagName,this)),this._presentation}templateChanged(){void 0!==this.template&&(this.$fastController.template=this.template)}stylesChanged(){void 0!==this.styles&&(this.$fastController.styles=this.styles)}connectedCallback(){null!==this.$presentation&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new FoundationElementRegistry(this===FoundationElement?class extends FoundationElement{}:this,e,t)}}function Ro(e,t,o){return"function"==typeof e?e(t,o):e}zt([Ct],FoundationElement.prototype,"template",void 0),zt([Ct],FoundationElement.prototype,"styles",void 0);class FoundationElementRegistry{constructor(e,t,o){this.type=e,this.elementDefinition=t,this.overrideDefinition=o,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){const o=this.definition,n=this.overrideDefinition,r=`${o.prefix||t.elementPrefix}-${o.baseName}`;t.tryDefineElement({name:r,type:this.type,baseClass:this.elementDefinition.baseClass,callback:e=>{const t=new DefaultComponentPresentation(Ro(o.template,e,o),Ro(o.styles,e,o));e.definePresentation(t);let r=Ro(o.shadowOptions,e,o);e.shadowRootMode&&(r?n.shadowOptions||(r.mode=e.shadowRootMode):null!==r&&(r={mode:e.shadowRootMode})),e.defineElement({elementOptions:Ro(o.elementOptions,e,o),shadowOptions:r,attributes:Ro(o.attributes,e,o)})}})}}const ko=new Set(["children","localName","ref","style","className"]),Eo=Object.freeze(Object.create(null)),Oo="_default",Io=new Map;function Mo(e){return e.events||(e.events={})}function Do(e,t,o){return!ko.has(o)}class badge_Badge extends FoundationElement{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const e=`background-color: var(--badge-fill-${this.fill});`,t=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?e:this.color&&!this.fill?t:`${t} ${e}`}}}zt([At({attribute:"fill"})],badge_Badge.prototype,"fill",void 0),zt([At({attribute:"color"})],badge_Badge.prototype,"color",void 0),zt([At({mode:"boolean"})],badge_Badge.prototype,"circular",void 0);class HTMLDirective{constructor(){this.targetIndex=0}}class TargetedHTMLDirective extends HTMLDirective{constructor(){super(...arguments),this.createPlaceholder=yt.createInterpolationPlaceholder}}class AttachedBehaviorHTMLDirective extends HTMLDirective{constructor(e,t,o){super(),this.name=e,this.behavior=t,this.options=o}createPlaceholder(e){return yt.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function Ao(e,t){this.source=e,this.context=t,null===this.bindingObserver&&(this.bindingObserver=wt.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function No(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function $o(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function Po(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function zo(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function Ho(e){yt.setAttribute(this.target,this.targetName,e)}function Lo(e){yt.setBooleanAttribute(this.target,this.targetName,e)}function Go(e){if(null==e&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;void 0===t?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function Fo(e){this.target[this.targetName]=e}function Bo(e){const t=this.classVersions||Object.create(null),o=this.target;let n=this.version||0;if(null!=e&&e.length){const r=e.split(/\s+/);for(let e=0,c=r.length;e<c;++e){const c=r[e];""!==c&&(t[c]=n,o.classList.add(c))}}if(this.classVersions=t,this.version=n+1,0!==n){n-=1;for(const e in t)t[e]===n&&o.classList.remove(e)}}class HTMLBindingDirective extends TargetedHTMLDirective{constructor(e){super(),this.binding=e,this.bind=Ao,this.unbind=$o,this.updateTarget=Ho,this.isBindingVolatile=wt.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,void 0!==e)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=Fo,"innerHTML"===this.cleanedTargetName){const e=this.binding;this.binding=(t,o)=>yt.createHTML(e(t,o))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=Lo;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=No,this.unbind=zo;break;default:this.cleanedTargetName=e,"class"===e&&(this.updateTarget=Bo)}}targetAtContent(){this.updateTarget=Go,this.unbind=Po}createBehavior(e){return new BindingBehavior(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class BindingBehavior{constructor(e,t,o,n,r,c,d){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=o,this.bind=n,this.unbind=r,this.updateTarget=c,this.targetName=d}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){ExecutionContext.setEvent(e);const t=this.binding(this.source,this.context);ExecutionContext.setEvent(null),!0!==t&&e.preventDefault()}}let Wo=null;class CompilationContext{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){Wo=this}static borrow(e){const t=Wo||new CompilationContext;return t.directives=e,t.reset(),Wo=null,t}}function Uo(e){if(1===e.length)return e[0];let t;const o=e.length,n=e.map((e=>"string"==typeof e?()=>e:(t=e.targetName||t,e.binding))),r=new HTMLBindingDirective(((e,t)=>{let r="";for(let c=0;c<o;++c)r+=n[c](e,t);return r}));return r.targetName=t,r}const jo=vt.length;function Vo(e,t){const o=t.split(bt);if(1===o.length)return null;const n=[];for(let t=0,r=o.length;t<r;++t){const r=o[t],c=r.indexOf(vt);let d;if(-1===c)d=r;else{const t=parseInt(r.substring(0,c));n.push(e.directives[t]),d=r.substring(c+jo)}""!==d&&n.push(d)}return n}function Zo(e,t,o=!1){const n=t.attributes;for(let r=0,c=n.length;r<c;++r){const d=n[r],h=d.value,u=Vo(e,h);let p=null;null===u?o&&(p=new HTMLBindingDirective((()=>h)),p.targetName=d.name):p=Uo(u),null!==p&&(t.removeAttributeNode(d),r--,c--,e.addFactory(p))}}function qo(e,t,o){const n=Vo(e,t.textContent);if(null!==n){let r=t;for(let c=0,d=n.length;c<d;++c){const d=n[c],h=0===c?t:r.parentNode.insertBefore(document.createTextNode(""),r.nextSibling);"string"==typeof d?h.textContent=d:(h.textContent=" ",e.captureContentBinding(d)),r=h,e.targetIndex++,h!==t&&o.nextNode()}e.targetIndex--}}const Ko=document.createRange();class HTMLView{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const o=e.parentNode;let n,r=this.firstChild;for(;r!==t;)n=r.nextSibling,o.insertBefore(r,e),r=n;o.insertBefore(t,e)}}remove(){const e=this.fragment,t=this.lastChild;let o,n=this.firstChild;for(;n!==t;)o=n.nextSibling,e.appendChild(n),n=o;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let o,n=this.firstChild;for(;n!==t;)o=n.nextSibling,e.removeChild(n),n=o;e.removeChild(t);const r=this.behaviors,c=this.source;for(let e=0,t=r.length;e<t;++e)r[e].unbind(c)}bind(e,t){const o=this.behaviors;if(this.source!==e)if(null!==this.source){const n=this.source;this.source=e,this.context=t;for(let r=0,c=o.length;r<c;++r){const c=o[r];c.unbind(n),c.bind(e,t)}}else{this.source=e,this.context=t;for(let n=0,r=o.length;n<r;++n)o[n].bind(e,t)}}unbind(){if(null===this.source)return;const e=this.behaviors,t=this.source;for(let o=0,n=e.length;o<n;++o)e[o].unbind(t);this.source=null}static disposeContiguousBatch(e){if(0!==e.length){Ko.setStartBefore(e[0].firstChild),Ko.setEndAfter(e[e.length-1].lastChild),Ko.deleteContents();for(let t=0,o=e.length;t<o;++t){const o=e[t],n=o.behaviors,r=o.source;for(let e=0,t=n.length;e<t;++e)n[e].unbind(r)}}}}class ViewTemplate{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(null===this.fragment){let e;const t=this.html;if("string"==typeof t){e=document.createElement("template"),e.innerHTML=yt.createHTML(t);const o=e.content.firstElementChild;null!==o&&"TEMPLATE"===o.tagName&&(e=o)}else e=t;const o=function(e,t){const o=e.content;document.adoptNode(o);const n=CompilationContext.borrow(t);Zo(n,e,!0);const r=n.behaviorFactories;n.reset();const c=yt.createTemplateWalker(o);let d;for(;d=c.nextNode();)switch(n.targetIndex++,d.nodeType){case 1:Zo(n,d);break;case 3:qo(n,d,c);break;case 8:yt.isMarker(d)&&n.addFactory(t[yt.extractDirectiveIndexFromMarker(d)])}let h=0;(yt.isMarker(o.firstChild)||1===o.childNodes.length&&t.length)&&(o.insertBefore(document.createComment(""),o.firstChild),h=-1);const u=n.behaviorFactories;return n.release(),{fragment:o,viewBehaviorFactories:u,hostBehaviorFactories:r,targetOffset:h}}(e,this.directives);this.fragment=o.fragment,this.viewBehaviorFactories=o.viewBehaviorFactories,this.hostBehaviorFactories=o.hostBehaviorFactories,this.targetOffset=o.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),o=this.viewBehaviorFactories,n=new Array(this.behaviorCount),r=yt.createTemplateWalker(t);let c=0,d=this.targetOffset,h=r.nextNode();for(let e=o.length;c<e;++c){const e=o[c],t=e.targetIndex;for(;null!==h;){if(d===t){n[c]=e.createBehavior(h);break}h=r.nextNode(),d++}}if(this.hasHostBehaviors){const t=this.hostBehaviorFactories;for(let o=0,r=t.length;o<r;++o,++c)n[c]=t[o].createBehavior(e)}return new HTMLView(t,n)}render(e,t,o){"string"==typeof t&&(t=document.getElementById(t)),void 0===o&&(o=t);const n=this.create(o);return n.bind(e,_t),n.appendTo(t),n}}const Yo=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function Xo(e,...t){const o=[];let n="";for(let r=0,c=e.length-1;r<c;++r){const c=e[r];let d=t[r];if(n+=c,d instanceof ViewTemplate){const e=d;d=()=>e}if("function"==typeof d&&(d=new HTMLBindingDirective(d)),d instanceof TargetedHTMLDirective){const e=Yo.exec(c);null!==e&&(d.targetName=e[2])}d instanceof HTMLDirective?(n+=d.createPlaceholder(o.length),o.push(d)):n+=d}return n+=e[e.length-1],new ViewTemplate(n,o)}const Qo=(e,t)=>Xo`
    <template class="${e=>e.circular?"circular":""}">
        <div class="control" part="control" style="${e=>e.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`;class css_directive_CSSDirective{createCSS(){return""}createBehavior(){}}function Jo(e,t){const o=[];let n="";const r=[];for(let c=0,d=e.length-1;c<d;++c){n+=e[c];let d=t[c];if(d instanceof css_directive_CSSDirective){const e=d.createBehavior();d=d.createCSS(),e&&r.push(e)}d instanceof element_styles_ElementStyles||d instanceof CSSStyleSheet?(""!==n.trim()&&(o.push(n),n=""),o.push(d)):n+=d}return n+=e[e.length-1],""!==n.trim()&&o.push(n),{styles:o,behaviors:r}}function en(e,...t){const{styles:o,behaviors:n}=Jo(e,t),r=element_styles_ElementStyles.create(o);return n.length&&r.withBehaviors(...n),r}function on(e){return`:host([hidden]){display:none}:host{display:${e}}`}function nn(e){const t=e.parentElement;if(t)return t;{const t=e.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}const rn=document.createElement("div");class QueuedStyleSheetTarget{setProperty(e,t){yt.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){yt.queueUpdate((()=>this.target.removeProperty(e)))}}class DocumentStyleSheetTarget extends QueuedStyleSheetTarget{constructor(){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}class HeadStyleElementStyleSheetTarget extends QueuedStyleSheetTarget{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:e}=this.style;if(e){const t=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[t].style}}}class StyleElementStyleSheetTarget{constructor(e){this.store=new Map,this.target=null;const t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),wt.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(null!==this.target)for(const[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),yt.queueUpdate((()=>{null!==this.target&&this.target.setProperty(e,t)}))}removeProperty(e){this.store.delete(e),yt.queueUpdate((()=>{null!==this.target&&this.target.removeProperty(e)}))}handleChange(e,t){const{sheet:o}=this.style;if(o){const e=o.insertRule(":host{}",o.cssRules.length);this.target=o.cssRules[e].style}else this.target=null}}zt([Ct],StyleElementStyleSheetTarget.prototype,"target",void 0);class ElementStyleSheetTarget{constructor(e){this.target=e.style}setProperty(e,t){yt.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){yt.queueUpdate((()=>this.target.removeProperty(e)))}}class RootStyleSheetTarget{setProperty(e,t){RootStyleSheetTarget.properties[e]=t;for(const o of RootStyleSheetTarget.roots.values())dn.getOrCreate(RootStyleSheetTarget.normalizeRoot(o)).setProperty(e,t)}removeProperty(e){delete RootStyleSheetTarget.properties[e];for(const t of RootStyleSheetTarget.roots.values())dn.getOrCreate(RootStyleSheetTarget.normalizeRoot(t)).removeProperty(e)}static registerRoot(e){const{roots:t}=RootStyleSheetTarget;if(!t.has(e)){t.add(e);const o=dn.getOrCreate(this.normalizeRoot(e));for(const e in RootStyleSheetTarget.properties)o.setProperty(e,RootStyleSheetTarget.properties[e])}}static unregisterRoot(e){const{roots:t}=RootStyleSheetTarget;if(t.has(e)){t.delete(e);const o=dn.getOrCreate(RootStyleSheetTarget.normalizeRoot(e));for(const e in RootStyleSheetTarget.properties)o.removeProperty(e)}}static normalizeRoot(e){return e===rn?document:e}}RootStyleSheetTarget.roots=new Set,RootStyleSheetTarget.properties={};const an=new WeakMap,ln=yt.supportsAdoptedStyleSheets?class ConstructableStyleSheetTarget extends QueuedStyleSheetTarget{constructor(e){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles(element_styles_ElementStyles.create([t]))}}:StyleElementStyleSheetTarget,dn=Object.freeze({getOrCreate(e){if(an.has(e))return an.get(e);let t;return e===rn?t=new RootStyleSheetTarget:e instanceof Document?t=yt.supportsAdoptedStyleSheets?new DocumentStyleSheetTarget:new HeadStyleElementStyleSheetTarget:t=e instanceof Bt?new ln(e):new ElementStyleSheetTarget(e),an.set(e,t),t}});class DesignTokenImpl extends css_directive_CSSDirective{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,null!==e.cssCustomPropertyName&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=DesignTokenImpl.uniqueId(),DesignTokenImpl.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new DesignTokenImpl({name:"string"==typeof e?e:e.name,cssCustomPropertyName:"string"==typeof e?e:void 0===e.cssCustomPropertyName?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return"string"==typeof e.cssCustomProperty}static isDerivedDesignTokenValue(e){return"function"==typeof e}static getTokenById(e){return DesignTokenImpl.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const t=DesignTokenNode.getOrCreate(e).get(this);if(void 0!==t)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof DesignTokenImpl&&(t=this.alias(t)),DesignTokenNode.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),DesignTokenNode.existsFor(e)&&DesignTokenNode.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(rn,e),this}subscribe(e,t){const o=this.getOrCreateSubscriberSet(t);t&&!DesignTokenNode.existsFor(t)&&DesignTokenNode.getOrCreate(t),o.has(e)||o.add(e)}unsubscribe(e,t){const o=this.subscribers.get(t||this);o&&o.has(e)&&o.delete(e)}notify(e){const t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach((e=>e.handleChange(t))),this.subscribers.has(e)&&this.subscribers.get(e).forEach((e=>e.handleChange(t)))}alias(e){return t=>e.getValueFor(t)}}DesignTokenImpl.uniqueId=(()=>{let e=0;return()=>(e++,e.toString(16))})(),DesignTokenImpl.tokensById=new Map;class DesignTokenBindingObserver{constructor(e,t,o){this.source=e,this.token=t,this.node=o,this.dependencies=new Set,this.observer=wt.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,_t))}}class Store{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),wt.getNotifier(this).notify(e.id))}get(e){return wt.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e)}all(){return this.values.entries()}}const hn=new WeakMap,un=new WeakMap;class DesignTokenNode{constructor(e){this.target=e,this.store=new Store,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(e,t)=>{const o=DesignTokenImpl.getTokenById(t);if(o&&(o.notify(this.target),DesignTokenImpl.isCSSDesignToken(o))){const t=this.parent,n=this.isReflecting(o);if(t){const r=t.get(o),c=e.get(o);r===c||n?r===c&&n&&this.stopReflectToCSS(o):this.reflectToCSS(o)}else n||this.reflectToCSS(o)}}},hn.set(e,this),wt.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof Bt?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return hn.get(e)||new DesignTokenNode(e)}static existsFor(e){return hn.has(e)}static findParent(e){if(rn!==e.target){let t=nn(e.target);for(;null!==t;){if(hn.has(t))return hn.get(t);t=nn(t)}return DesignTokenNode.getOrCreate(rn)}return null}static findClosestAssignedNode(e,t){let o=t;do{if(o.has(e))return o;o=o.parent?o.parent:o.target!==rn?DesignTokenNode.getOrCreate(rn):null}while(null!==o);return null}get parent(){return un.get(this)||null}has(e){return this.assignedValues.has(e)}get(e){const t=this.store.get(e);if(void 0!==t)return t;const o=this.getRaw(e);return void 0!==o?(this.hydrate(e,o),this.get(e)):void 0}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):null===(t=DesignTokenNode.findClosestAssignedNode(e,this))||void 0===t?void 0:t.getRaw(e)}set(e,t){DesignTokenImpl.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),DesignTokenImpl.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);const t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){const e=DesignTokenNode.findParent(this);e&&e.appendChild(this);for(const e of this.assignedValues.keys())e.notify(this.target)}unbind(){if(this.parent){un.get(this).removeChild(this)}}appendChild(e){e.parent&&un.get(e).removeChild(e);const t=this.children.filter((t=>e.contains(t)));un.set(e,this),this.children.push(e),t.forEach((t=>e.appendChild(t))),wt.getNotifier(this.store).subscribe(e);for(const[t,o]of this.store.all())e.hydrate(t,this.bindingObservers.has(t)?this.getRaw(t):o)}removeChild(e){const t=this.children.indexOf(e);return-1!==t&&this.children.splice(t,1),wt.getNotifier(this.store).unsubscribe(e),e.parent===this&&un.delete(e)}contains(e){return function(e,t){let o=t;for(;null!==o;){if(o===e)return!0;o=nn(o)}return!1}(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),DesignTokenNode.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),DesignTokenNode.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){const o=DesignTokenImpl.getTokenById(t);o&&this.hydrate(o,this.getRaw(o))}hydrate(e,t){if(!this.has(e)){const o=this.bindingObservers.get(e);DesignTokenImpl.isDerivedDesignTokenValue(t)?o?o.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(o&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){const o=new DesignTokenBindingObserver(t,e,this);return this.bindingObservers.set(e,o),o}tearDownBindingObserver(e){return!!this.bindingObservers.has(e)&&(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0)}}DesignTokenNode.cssCustomPropertyReflector=new class CustomPropertyReflector{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){const{token:t,target:o}=e;this.add(t,o)}add(e,t){dn.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(DesignTokenNode.getOrCreate(t).get(e)))}remove(e,t){dn.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&"function"==typeof e.createCSS?e.createCSS():e}},zt([Ct],DesignTokenNode.prototype,"children",void 0);const pn=Object.freeze({create:function(e){return DesignTokenImpl.from(e)},notifyConnection:e=>!(!e.isConnected||!DesignTokenNode.existsFor(e))&&(DesignTokenNode.getOrCreate(e).bind(),!0),notifyDisconnection:e=>!(e.isConnected||!DesignTokenNode.existsFor(e))&&(DesignTokenNode.getOrCreate(e).unbind(),!0),registerRoot(e=rn){RootStyleSheetTarget.registerRoot(e)},unregisterRoot(e=rn){RootStyleSheetTarget.unregisterRoot(e)}});function fn(e){const t=getComputedStyle(document.body),o=document.querySelector("body");if(o){const n=o.getAttribute("data-vscode-theme-kind");for(const[r,c]of e){let e=t.getPropertyValue(r).toString();if("vscode-high-contrast"===n)0===e.length&&c.name.includes("background")&&(e="transparent"),"button-icon-hover-background"===c.name&&(e="transparent");else if("vscode-high-contrast-light"===n){if(0===e.length&&c.name.includes("background"))switch(c.name){case"button-primary-hover-background":e="#0F4A85";break;case"button-secondary-hover-background":case"button-icon-hover-background":e="transparent"}}else"contrast-active-border"===c.name&&(e="transparent");c.setValueFor(o,e)}}}const gn=new Map;let bn=!1;function vn(e,t){const o=pn.create(e);if(t){if(t.includes("--fake-vscode-token")){t=`${t}-${"id"+Math.random().toString(16).slice(2)}`}gn.set(t,o)}return bn||(!function(e){window.addEventListener("load",(()=>{new MutationObserver((()=>{fn(e)})).observe(document.body,{attributes:!0,attributeFilter:["class"]}),fn(e)}))}(gn),bn=!0),o}const yn=vn("background","--vscode-editor-background").withDefault("#1e1e1e"),wn=vn("border-width").withDefault(1),Cn=vn("contrast-active-border","--vscode-contrastActiveBorder").withDefault("#f38518"),xn=(vn("contrast-border","--vscode-contrastBorder").withDefault("#6fc3df"),vn("corner-radius").withDefault(0)),Sn=vn("design-unit").withDefault(4),_n=vn("disabled-opacity").withDefault(.4),Tn=vn("focus-border","--vscode-focusBorder").withDefault("#007fd4"),Rn=vn("font-family","--vscode-font-family").withDefault("-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"),kn=(vn("font-weight","--vscode-font-weight").withDefault("400"),vn("foreground","--vscode-foreground").withDefault("#cccccc")),En=vn("input-height").withDefault("26"),On=vn("input-min-width").withDefault("100px"),In=vn("type-ramp-base-font-size","--vscode-font-size").withDefault("13px"),Mn=vn("type-ramp-base-line-height").withDefault("normal"),Dn=vn("type-ramp-minus1-font-size").withDefault("11px"),An=vn("type-ramp-minus1-line-height").withDefault("16px"),Nn=(vn("type-ramp-minus2-font-size").withDefault("9px"),vn("type-ramp-minus2-line-height").withDefault("16px"),vn("type-ramp-plus1-font-size").withDefault("16px"),vn("type-ramp-plus1-line-height").withDefault("24px"),vn("scrollbarWidth").withDefault("10px")),$n=vn("scrollbarHeight").withDefault("10px"),Pn=vn("scrollbar-slider-background","--vscode-scrollbarSlider-background").withDefault("#79797966"),zn=vn("scrollbar-slider-hover-background","--vscode-scrollbarSlider-hoverBackground").withDefault("#646464b3"),Hn=vn("scrollbar-slider-active-background","--vscode-scrollbarSlider-activeBackground").withDefault("#bfbfbf66"),Ln=vn("badge-background","--vscode-badge-background").withDefault("#4d4d4d"),Gn=vn("badge-foreground","--vscode-badge-foreground").withDefault("#ffffff"),Fn=vn("button-border","--vscode-button-border").withDefault("transparent"),Bn=vn("button-icon-background").withDefault("transparent"),Wn=vn("button-icon-corner-radius").withDefault("5px"),Un=vn("button-icon-outline-offset").withDefault(0),jn=vn("button-icon-hover-background","--fake-vscode-token").withDefault("rgba(90, 93, 94, 0.31)"),Vn=vn("button-icon-padding").withDefault("3px"),Zn=vn("button-primary-background","--vscode-button-background").withDefault("#0e639c"),qn=vn("button-primary-foreground","--vscode-button-foreground").withDefault("#ffffff"),Kn=vn("button-primary-hover-background","--vscode-button-hoverBackground").withDefault("#1177bb"),Yn=vn("button-secondary-background","--vscode-button-secondaryBackground").withDefault("#3a3d41"),Xn=vn("button-secondary-foreground","--vscode-button-secondaryForeground").withDefault("#ffffff"),Qn=vn("button-secondary-hover-background","--vscode-button-secondaryHoverBackground").withDefault("#45494e"),Jn=vn("button-padding-horizontal").withDefault("11px"),er=vn("button-padding-vertical").withDefault("4px"),tr=vn("checkbox-background","--vscode-checkbox-background").withDefault("#3c3c3c"),or=vn("checkbox-border","--vscode-checkbox-border").withDefault("#3c3c3c"),nr=vn("checkbox-corner-radius").withDefault(3),rr=(vn("checkbox-foreground","--vscode-checkbox-foreground").withDefault("#f0f0f0"),vn("list-active-selection-background","--vscode-list-activeSelectionBackground").withDefault("#094771")),ir=vn("list-active-selection-foreground","--vscode-list-activeSelectionForeground").withDefault("#ffffff"),sr=vn("list-hover-background","--vscode-list-hoverBackground").withDefault("#2a2d2e"),ar=vn("divider-background","--vscode-settings-dropdownListBorder").withDefault("#454545"),lr=vn("dropdown-background","--vscode-dropdown-background").withDefault("#3c3c3c"),cr=vn("dropdown-border","--vscode-dropdown-border").withDefault("#3c3c3c"),dr=(vn("dropdown-foreground","--vscode-dropdown-foreground").withDefault("#f0f0f0"),vn("dropdown-list-max-height").withDefault("200px")),hr=vn("input-background","--vscode-input-background").withDefault("#3c3c3c"),ur=vn("input-foreground","--vscode-input-foreground").withDefault("#cccccc"),pr=(vn("input-placeholder-foreground","--vscode-input-placeholderForeground").withDefault("#cccccc"),vn("link-active-foreground","--vscode-textLink-activeForeground").withDefault("#3794ff")),fr=vn("link-foreground","--vscode-textLink-foreground").withDefault("#3794ff"),mr=vn("progress-background","--vscode-progressBar-background").withDefault("#0e70c0"),gr=vn("panel-tab-active-border","--vscode-panelTitle-activeBorder").withDefault("#e7e7e7"),br=vn("panel-tab-active-foreground","--vscode-panelTitle-activeForeground").withDefault("#e7e7e7"),vr=vn("panel-tab-foreground","--vscode-panelTitle-inactiveForeground").withDefault("#e7e7e799"),yr=(vn("panel-view-background","--vscode-panel-background").withDefault("#1e1e1e"),vn("panel-view-border","--vscode-panel-border").withDefault("#80808059"),vn("tag-corner-radius").withDefault("2px"));const wr=class Badge extends badge_Badge{connectedCallback(){super.connectedCallback(),this.circular||(this.circular=!0)}}.compose({baseName:"badge",template:Qo,styles:(e,t)=>en`
	${on("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${Rn};
		font-size: ${Dn};
		line-height: ${An};
		text-align: center;
	}
	.control {
		align-items: center;
		background-color: ${Ln};
		border: calc(${wn} * 1px) solid ${Fn};
		border-radius: 11px;
		box-sizing: border-box;
		color: ${Gn};
		display: flex;
		height: calc(${Sn} * 4px);
		justify-content: center;
		min-width: calc(${Sn} * 4px + 2px);
		min-height: calc(${Sn} * 4px + 2px);
		padding: 3px 6px;
	}
`});class ARIAGlobalStatesAndProperties{}zt([At({attribute:"aria-atomic"})],ARIAGlobalStatesAndProperties.prototype,"ariaAtomic",void 0),zt([At({attribute:"aria-busy"})],ARIAGlobalStatesAndProperties.prototype,"ariaBusy",void 0),zt([At({attribute:"aria-controls"})],ARIAGlobalStatesAndProperties.prototype,"ariaControls",void 0),zt([At({attribute:"aria-current"})],ARIAGlobalStatesAndProperties.prototype,"ariaCurrent",void 0),zt([At({attribute:"aria-describedby"})],ARIAGlobalStatesAndProperties.prototype,"ariaDescribedby",void 0),zt([At({attribute:"aria-details"})],ARIAGlobalStatesAndProperties.prototype,"ariaDetails",void 0),zt([At({attribute:"aria-disabled"})],ARIAGlobalStatesAndProperties.prototype,"ariaDisabled",void 0),zt([At({attribute:"aria-errormessage"})],ARIAGlobalStatesAndProperties.prototype,"ariaErrormessage",void 0),zt([At({attribute:"aria-flowto"})],ARIAGlobalStatesAndProperties.prototype,"ariaFlowto",void 0),zt([At({attribute:"aria-haspopup"})],ARIAGlobalStatesAndProperties.prototype,"ariaHaspopup",void 0),zt([At({attribute:"aria-hidden"})],ARIAGlobalStatesAndProperties.prototype,"ariaHidden",void 0),zt([At({attribute:"aria-invalid"})],ARIAGlobalStatesAndProperties.prototype,"ariaInvalid",void 0),zt([At({attribute:"aria-keyshortcuts"})],ARIAGlobalStatesAndProperties.prototype,"ariaKeyshortcuts",void 0),zt([At({attribute:"aria-label"})],ARIAGlobalStatesAndProperties.prototype,"ariaLabel",void 0),zt([At({attribute:"aria-labelledby"})],ARIAGlobalStatesAndProperties.prototype,"ariaLabelledby",void 0),zt([At({attribute:"aria-live"})],ARIAGlobalStatesAndProperties.prototype,"ariaLive",void 0),zt([At({attribute:"aria-owns"})],ARIAGlobalStatesAndProperties.prototype,"ariaOwns",void 0),zt([At({attribute:"aria-relevant"})],ARIAGlobalStatesAndProperties.prototype,"ariaRelevant",void 0),zt([At({attribute:"aria-roledescription"})],ARIAGlobalStatesAndProperties.prototype,"ariaRoledescription",void 0);class RefBehavior{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}function Cr(e){return new AttachedBehaviorHTMLDirective("fast-ref",RefBehavior,e)}class StartEnd{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const xr=(e,t)=>Xo`
    <span
        part="end"
        ${Cr("endContainer")}
        class=${e=>t.end?"end":void 0}
    >
        <slot name="end" ${Cr("end")} @slotchange="${e=>e.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`,Sr=(e,t)=>Xo`
    <span
        part="start"
        ${Cr("startContainer")}
        class="${e=>t.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Cr("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        >
            ${t.start||""}
        </slot>
    </span>
`;Xo`
    <span part="end" ${Cr("endContainer")}>
        <slot
            name="end"
            ${Cr("end")}
            @slotchange="${e=>e.handleEndContentChange()}"
        ></slot>
    </span>
`,Xo`
    <span part="start" ${Cr("startContainer")}>
        <slot
            name="start"
            ${Cr("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        ></slot>
    </span>
`;function _r(e,...t){const o=It.locate(e);t.forEach((t=>{Object.getOwnPropertyNames(t.prototype).forEach((o=>{"constructor"!==o&&Object.defineProperty(e.prototype,o,Object.getOwnPropertyDescriptor(t.prototype,o))}));It.locate(t).forEach((e=>o.push(e)))}))}var Tr;!function(e){e[e.alt=18]="alt",e[e.arrowDown=40]="arrowDown",e[e.arrowLeft=37]="arrowLeft",e[e.arrowRight=39]="arrowRight",e[e.arrowUp=38]="arrowUp",e[e.back=8]="back",e[e.backSlash=220]="backSlash",e[e.break=19]="break",e[e.capsLock=20]="capsLock",e[e.closeBracket=221]="closeBracket",e[e.colon=186]="colon",e[e.colon2=59]="colon2",e[e.comma=188]="comma",e[e.ctrl=17]="ctrl",e[e.delete=46]="delete",e[e.end=35]="end",e[e.enter=13]="enter",e[e.equals=187]="equals",e[e.equals2=61]="equals2",e[e.equals3=107]="equals3",e[e.escape=27]="escape",e[e.forwardSlash=191]="forwardSlash",e[e.function1=112]="function1",e[e.function10=121]="function10",e[e.function11=122]="function11",e[e.function12=123]="function12",e[e.function2=113]="function2",e[e.function3=114]="function3",e[e.function4=115]="function4",e[e.function5=116]="function5",e[e.function6=117]="function6",e[e.function7=118]="function7",e[e.function8=119]="function8",e[e.function9=120]="function9",e[e.home=36]="home",e[e.insert=45]="insert",e[e.menu=93]="menu",e[e.minus=189]="minus",e[e.minus2=109]="minus2",e[e.numLock=144]="numLock",e[e.numPad0=96]="numPad0",e[e.numPad1=97]="numPad1",e[e.numPad2=98]="numPad2",e[e.numPad3=99]="numPad3",e[e.numPad4=100]="numPad4",e[e.numPad5=101]="numPad5",e[e.numPad6=102]="numPad6",e[e.numPad7=103]="numPad7",e[e.numPad8=104]="numPad8",e[e.numPad9=105]="numPad9",e[e.numPadDivide=111]="numPadDivide",e[e.numPadDot=110]="numPadDot",e[e.numPadMinus=109]="numPadMinus",e[e.numPadMultiply=106]="numPadMultiply",e[e.numPadPlus=107]="numPadPlus",e[e.openBracket=219]="openBracket",e[e.pageDown=34]="pageDown",e[e.pageUp=33]="pageUp",e[e.period=190]="period",e[e.print=44]="print",e[e.quote=222]="quote",e[e.scrollLock=145]="scrollLock",e[e.shift=16]="shift",e[e.space=32]="space",e[e.tab=9]="tab",e[e.tilde=192]="tilde",e[e.windowsLeft=91]="windowsLeft",e[e.windowsOpera=219]="windowsOpera",e[e.windowsRight=92]="windowsRight"}(Tr||(Tr={}));const Er="ArrowDown",Or="ArrowLeft",Ir="ArrowRight",Mr="ArrowUp",Dr="Enter",Nr="Escape",$r="Home",zr="End",Hr=" ",Lr="Tab",Gr={ArrowDown:Er,ArrowLeft:Or,ArrowRight:Ir,ArrowUp:Mr},Fr="form-associated-proxy",Br="ElementInternals",Wr=Br in window&&"setFormValue"in window[Br].prototype,Ur=new WeakMap;function jr(e){const t=class extends e{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return Wr}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,t=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),o=e?t.concat(Array.from(e)):t;return Object.freeze(o)}return ht}valueChanged(e,t){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),yt.queueUpdate((()=>this.classList.toggle("disabled",this.disabled)))}nameChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),yt.queueUpdate((()=>this.classList.toggle("required",this.required))),this.validate()}get elementInternals(){if(!Wr)return null;let e=Ur.get(this);return e||(e=this.attachInternals(),Ur.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){super.disconnectedCallback(),this.proxyEventsToBlock.forEach((e=>this.proxy.removeEventListener(e,this.stopPropagation))),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,t,o){this.elementInternals?this.elementInternals.setValidity(e,t,o):"string"==typeof t&&this.proxy.setCustomValidity(t)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach((e=>this.proxy.addEventListener(e,this.stopPropagation))),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Fr),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Fr)),null===(e=this.shadowRoot)||void 0===e||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),null===(e=this.shadowRoot)||void 0===e||e.removeChild(this.proxySlot)}validate(e){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,e)}setFormValue(e,t){this.elementInternals&&this.elementInternals.setFormValue(e,t||e)}_keypressHandler(e){if(e.key===Dr)if(this.form instanceof HTMLFormElement){const e=this.form.querySelector("[type=submit]");null==e||e.click()}}stopPropagation(e){e.stopPropagation()}};return At({mode:"boolean"})(t.prototype,"disabled"),At({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),At({attribute:"current-value"})(t.prototype,"currentValue"),At(t.prototype,"name"),At({mode:"boolean"})(t.prototype,"required"),Ct(t.prototype,"value"),t}function Vr(e){class C extends(jr(e)){}class D extends C{constructor(...e){super(e),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(e,t){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),void 0!==e&&this.$emit("change"),this.validate()}currentCheckedChanged(e,t){this.checked=this.currentChecked}updateForm(){const e=this.checked?this.value:null;this.setFormValue(e,e)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return At({attribute:"checked",mode:"boolean"})(D.prototype,"checkedAttribute"),At({attribute:"current-checked",converter:Mt})(D.prototype,"currentChecked"),Ct(D.prototype,"defaultChecked"),Ct(D.prototype,"checked"),D}class _Button extends FoundationElement{}class FormAssociatedButton extends(jr(_Button)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class button_Button extends FormAssociatedButton{constructor(){super(...arguments),this.handleClick=e=>{var t;this.disabled&&(null===(t=this.defaultSlottedContent)||void 0===t?void 0:t.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;null===(e=this.form)||void 0===e||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===t&&this.addEventListener("click",this.handleSubmission),"submit"===e&&this.removeEventListener("click",this.handleSubmission),"reset"===t&&this.addEventListener("click",this.handleFormReset),"reset"===e&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.addEventListener("click",this.handleClick)}))}disconnectedCallback(){var e;super.disconnectedCallback();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.removeEventListener("click",this.handleClick)}))}}zt([At({mode:"boolean"})],button_Button.prototype,"autofocus",void 0),zt([At({attribute:"form"})],button_Button.prototype,"formId",void 0),zt([At],button_Button.prototype,"formaction",void 0),zt([At],button_Button.prototype,"formenctype",void 0),zt([At],button_Button.prototype,"formmethod",void 0),zt([At({mode:"boolean"})],button_Button.prototype,"formnovalidate",void 0),zt([At],button_Button.prototype,"formtarget",void 0),zt([At],button_Button.prototype,"type",void 0),zt([Ct],button_Button.prototype,"defaultSlottedContent",void 0);class DelegatesARIAButton{}function Zr(e){return e?function(t,o,n){return 1===t.nodeType&&t.matches(e)}:function(e,t,o){return 1===e.nodeType}}zt([At({attribute:"aria-expanded"})],DelegatesARIAButton.prototype,"ariaExpanded",void 0),zt([At({attribute:"aria-pressed"})],DelegatesARIAButton.prototype,"ariaPressed",void 0),_r(DelegatesARIAButton,ARIAGlobalStatesAndProperties),_r(button_Button,StartEnd,DelegatesARIAButton);class NodeObservationBehavior{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=wt.getAccessors(e).some((e=>e.name===t)),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(ht),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class SlottedBehavior extends NodeObservationBehavior{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function qr(e){return"string"==typeof e&&(e={property:e}),new AttachedBehaviorHTMLDirective("fast-slotted",SlottedBehavior,e)}function Kr(...e){return e.every((e=>e instanceof HTMLElement))}let Xr;const Qr=function(){if("boolean"==typeof Xr)return Xr;if("undefined"==typeof window||!window.document||!window.document.createElement)return Xr=!1,Xr;const e=document.createElement("style"),t=function(){const e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}();null!==t&&e.setAttribute("nonce",t),document.head.appendChild(e);try{e.sheet.insertRule("foo:focus-visible {color:inherit}",0),Xr=!0}catch(e){Xr=!1}finally{document.head.removeChild(e)}return Xr}()?"focus-visible":"focus",ei="not-allowed",ti=en`
	${on("inline-flex")} :host {
		outline: none;
		font-family: ${Rn};
		font-size: ${In};
		line-height: ${Mn};
		color: ${qn};
		background: ${Zn};
		border-radius: 2px;
		fill: currentColor;
		cursor: pointer;
	}
	.control {
		background: transparent;
		height: inherit;
		flex-grow: 1;
		box-sizing: border-box;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: ${er} ${Jn};
		white-space: wrap;
		outline: none;
		text-decoration: none;
		border: calc(${wn} * 1px) solid ${Fn};
		color: inherit;
		border-radius: inherit;
		fill: inherit;
		cursor: inherit;
		font-family: inherit;
	}
	:host(:hover) {
		background: ${Kn};
	}
	:host(:active) {
		background: ${Zn};
	}
	.control:${Qr} {
		outline: calc(${wn} * 1px) solid ${Tn};
		outline-offset: calc(${wn} * 2px);
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host([disabled]) {
		opacity: ${_n};
		background: ${Zn};
		cursor: ${ei};
	}
	.content {
		display: flex;
	}
	.start {
		display: flex;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${Sn} * 4px);
		height: calc(${Sn} * 4px);
	}
	.start {
		margin-inline-end: 8px;
	}
`,oi=en`
	:host([appearance='primary']) {
		background: ${Zn};
		color: ${qn};
	}
	:host([appearance='primary']:hover) {
		background: ${Kn};
	}
	:host([appearance='primary']:active) .control:active {
		background: ${Zn};
	}
	:host([appearance='primary']) .control:${Qr} {
		outline: calc(${wn} * 1px) solid ${Tn};
		outline-offset: calc(${wn} * 2px);
	}
	:host([appearance='primary'][disabled]) {
		background: ${Zn};
	}
`,ni=en`
	:host([appearance='secondary']) {
		background: ${Yn};
		color: ${Xn};
	}
	:host([appearance='secondary']:hover) {
		background: ${Qn};
	}
	:host([appearance='secondary']:active) .control:active {
		background: ${Yn};
	}
	:host([appearance='secondary']) .control:${Qr} {
		outline: calc(${wn} * 1px) solid ${Tn};
		outline-offset: calc(${wn} * 2px);
	}
	:host([appearance='secondary'][disabled]) {
		background: ${Yn};
	}
`,ri=en`
	:host([appearance='icon']) {
		background: ${Bn};
		border-radius: ${Wn};
		color: ${kn};
	}
	:host([appearance='icon']:hover) {
		background: ${jn};
		outline: 1px dotted ${Cn};
		outline-offset: -1px;
	}
	:host([appearance='icon']) .control {
		padding: ${Vn};
		border: none;
	}
	:host([appearance='icon']:active) .control:active {
		background: ${jn};
	}
	:host([appearance='icon']) .control:${Qr} {
		outline: calc(${wn} * 1px) solid ${Tn};
		outline-offset: ${Un};
	}
	:host([appearance='icon'][disabled]) {
		background: ${Bn};
	}
`;class Button extends button_Button{connectedCallback(){if(super.connectedCallback(),!this.appearance){const e=this.getAttribute("appearance");this.appearance=e}}attributeChangedCallback(e,t,o){if("appearance"===e&&"icon"===o){this.getAttribute("aria-label")||(this.ariaLabel="Icon Button")}"aria-label"===e&&(this.ariaLabel=o),"disabled"===e&&(this.disabled=null!==o)}}zt([At],Button.prototype,"appearance",void 0);const ii=Button.compose({baseName:"button",template:(e,t)=>Xo`
    <button
        class="control"
        part="control"
        ?autofocus="${e=>e.autofocus}"
        ?disabled="${e=>e.disabled}"
        form="${e=>e.formId}"
        formaction="${e=>e.formaction}"
        formenctype="${e=>e.formenctype}"
        formmethod="${e=>e.formmethod}"
        formnovalidate="${e=>e.formnovalidate}"
        formtarget="${e=>e.formtarget}"
        name="${e=>e.name}"
        type="${e=>e.type}"
        value="${e=>e.value}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-pressed="${e=>e.ariaPressed}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${Cr("control")}
    >
        ${Sr(0,t)}
        <span class="content" part="content">
            <slot ${qr("defaultSlottedContent")}></slot>
        </span>
        ${xr(0,t)}
    </button>
`,styles:(e,t)=>en`
	${ti}
	${oi}
	${ni}
	${ri}
`,shadowOptions:{delegatesFocus:!0}});class _Checkbox extends FoundationElement{}class FormAssociatedCheckbox extends(Vr(_Checkbox)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class checkbox_Checkbox extends FormAssociatedCheckbox{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{if(!this.readOnly&&e.key===Hr)this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked},this.clickHandler=e=>{this.disabled||this.readOnly||(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}zt([At({attribute:"readonly",mode:"boolean"})],checkbox_Checkbox.prototype,"readOnly",void 0),zt([Ct],checkbox_Checkbox.prototype,"defaultSlottedNodes",void 0),zt([Ct],checkbox_Checkbox.prototype,"indeterminate",void 0);const si=class Checkbox extends checkbox_Checkbox{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Checkbox")}}.compose({baseName:"checkbox",template:(e,t)=>Xo`
    <template
        role="checkbox"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        tabindex="${e=>e.disabled?null:0}"
        @keypress="${(e,t)=>e.keypressHandler(t.event)}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        class="${e=>e.readOnly?"readonly":""} ${e=>e.checked?"checked":""} ${e=>e.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${t.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${t.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${qr("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(e,t)=>en`
	${on("inline-flex")} :host {
		align-items: center;
		outline: none;
		margin: calc(${Sn} * 1px) 0;
		user-select: none;
		font-size: ${In};
		line-height: ${Mn};
	}
	.control {
		position: relative;
		width: calc(${Sn} * 4px + 2px);
		height: calc(${Sn} * 4px + 2px);
		box-sizing: border-box;
		border-radius: calc(${nr} * 1px);
		border: calc(${wn} * 1px) solid ${or};
		background: ${tr};
		outline: none;
		cursor: pointer;
	}
	.label {
		font-family: ${Rn};
		color: ${kn};
		padding-inline-start: calc(${Sn} * 2px + 2px);
		margin-inline-end: calc(${Sn} * 2px + 2px);
		cursor: pointer;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.checked-indicator {
		width: 100%;
		height: 100%;
		display: block;
		fill: ${kn};
		opacity: 0;
		pointer-events: none;
	}
	.indeterminate-indicator {
		border-radius: 2px;
		background: ${kn};
		position: absolute;
		top: 50%;
		left: 50%;
		width: 50%;
		height: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
	}
	:host(:enabled) .control:hover {
		background: ${tr};
		border-color: ${or};
	}
	:host(:enabled) .control:active {
		background: ${tr};
		border-color: ${Tn};
	}
	:host(:${Qr}) .control {
		border: calc(${wn} * 1px) solid ${Tn};
	}
	:host(.disabled) .label,
	:host(.readonly) .label,
	:host(.readonly) .control,
	:host(.disabled) .control {
		cursor: ${ei};
	}
	:host(.checked:not(.indeterminate)) .checked-indicator,
	:host(.indeterminate) .indeterminate-indicator {
		opacity: 1;
	}
	:host(.disabled) {
		opacity: ${_n};
	}
`,checkedIndicator:'\n\t\t<svg \n\t\t\tpart="checked-indicator"\n\t\t\tclass="checked-indicator"\n\t\t\twidth="16" \n\t\t\theight="16" \n\t\t\tviewBox="0 0 16 16" \n\t\t\txmlns="http://www.w3.org/2000/svg" \n\t\t\tfill="currentColor"\n\t\t>\n\t\t\t<path \n\t\t\t\tfill-rule="evenodd" \n\t\t\t\tclip-rule="evenodd" \n\t\t\t\td="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"\n\t\t\t/>\n\t\t</svg>\n\t',indeterminateIndicator:'\n\t\t<div part="indeterminate-indicator" class="indeterminate-indicator"></div>\n\t'});function ai(e,t,o){return{index:e,removed:t,addedCount:o}}const li=0,ci=1,di=2,hi=3;function ui(e,t,o,n,r,c){let d=0,h=0;const u=Math.min(o-t,c-r);if(0===t&&0===r&&(d=function(e,t,o){for(let n=0;n<o;++n)if(e[n]!==t[n])return n;return o}(e,n,u)),o===e.length&&c===n.length&&(h=function(e,t,o){let n=e.length,r=t.length,c=0;for(;c<o&&e[--n]===t[--r];)c++;return c}(e,n,u-d)),r+=d,c-=h,(o-=h)-(t+=d)==0&&c-r==0)return ht;if(t===o){const e=ai(t,[],0);for(;r<c;)e.removed.push(n[r++]);return[e]}if(r===c)return[ai(t,[],o-t)];const p=function(e){let t=e.length-1,o=e[0].length-1,n=e[t][o];const r=[];for(;t>0||o>0;){if(0===t){r.push(di),o--;continue}if(0===o){r.push(hi),t--;continue}const c=e[t-1][o-1],d=e[t-1][o],h=e[t][o-1];let u;u=d<h?d<c?d:c:h<c?h:c,u===c?(c===n?r.push(li):(r.push(ci),n=c),t--,o--):u===d?(r.push(hi),t--,n=d):(r.push(di),o--,n=h)}return r.reverse(),r}(function(e,t,o,n,r,c){const d=c-r+1,h=o-t+1,u=new Array(d);let p,m;for(let e=0;e<d;++e)u[e]=new Array(h),u[e][0]=e;for(let e=0;e<h;++e)u[0][e]=e;for(let o=1;o<d;++o)for(let c=1;c<h;++c)e[t+c-1]===n[r+o-1]?u[o][c]=u[o-1][c-1]:(p=u[o-1][c]+1,m=u[o][c-1]+1,u[o][c]=p<m?p:m);return u}(e,t,o,n,r,c)),m=[];let g,v=t,y=r;for(let e=0;e<p.length;++e)switch(p[e]){case li:void 0!==g&&(m.push(g),g=void 0),v++,y++;break;case ci:void 0===g&&(g=ai(v,[],0)),g.addedCount++,v++,g.removed.push(n[y]),y++;break;case di:void 0===g&&(g=ai(v,[],0)),g.addedCount++,v++;break;case hi:void 0===g&&(g=ai(v,[],0)),g.removed.push(n[y]),y++}return void 0!==g&&m.push(g),m}const pi=Array.prototype.push;function fi(e,t,o,n){const r=ai(t,o,n);let c=!1,d=0;for(let t=0;t<e.length;t++){const o=e[t];if(o.index+=d,c)continue;const n=(h=r.index,u=r.index+r.removed.length,p=o.index,m=o.index+o.addedCount,u<p||m<h?-1:u===p||m===h?0:h<p?u<m?u-p:m-p:m<u?m-h:u-h);if(n>=0){e.splice(t,1),t--,d-=o.addedCount-o.removed.length,r.addedCount+=o.addedCount-n;const h=r.removed.length+o.removed.length-n;if(r.addedCount||h){let e=o.removed;if(r.index<o.index){const t=r.removed.slice(0,o.index-r.index);pi.apply(t,e),e=t}if(r.index+r.removed.length>o.index+o.addedCount){const t=r.removed.slice(o.index+o.addedCount-r.index);pi.apply(e,t)}r.removed=e,o.index<r.index&&(r.index=o.index)}else c=!0}else if(r.index<o.index){c=!0,e.splice(t,0,r),t++;const n=r.addedCount-r.removed.length;o.index+=n,d+=n}}var h,u,p,m;c||e.push(r)}function gi(e,t){let o=[];const n=function(e){const t=[];for(let o=0,n=e.length;o<n;o++){const n=e[o];fi(t,n.index,n.removed,n.addedCount)}return t}(t);for(let t=0,r=n.length;t<r;++t){const r=n[t];1!==r.addedCount||1!==r.removed.length?o=o.concat(ui(e,r.index,r.index+r.addedCount,r.removed,0,r.removed.length)):r.removed[0]!==e[r.index]&&o.push(r)}return o}let vi=!1;function yi(e,t){let o=e.index;const n=t.length;return o>n?o=n-e.addedCount:o<0&&(o=n+e.removed.length+o-e.addedCount),o<0&&(o=0),e.index=o,e}class ArrayObserver extends SubscriberSet{constructor(e){super(e),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(e,"$fastController",{value:this,enumerable:!1})}subscribe(e){this.flush(),super.subscribe(e)}addSplice(e){void 0===this.splices?this.splices=[e]:this.splices.push(e),this.needsQueue&&(this.needsQueue=!1,yt.queueUpdate(this))}reset(e){this.oldCollection=e,this.needsQueue&&(this.needsQueue=!1,yt.queueUpdate(this))}flush(){const e=this.splices,t=this.oldCollection;if(void 0===e&&void 0===t)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const o=void 0===t?gi(this.source,e):ui(this.source,0,this.source.length,t,0,t.length);this.notify(o)}}Object.freeze({positioning:!1,recycle:!0});function wi(e,t,o,n){e.bind(t[o],n)}function Ci(e,t,o,n){const r=Object.create(n);r.index=o,r.length=t.length,e.bind(t[o],r)}class RepeatBehavior{constructor(e,t,o,n,r,c){this.location=e,this.itemsBinding=t,this.templateBinding=n,this.options=c,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=wi,this.itemsBindingObserver=wt.binding(t,this,o),this.templateBindingObserver=wt.binding(n,this,r),c.positioning&&(this.bindView=Ci)}bind(e,t){this.source=e,this.originalContext=t,this.childContext=Object.create(t),this.childContext.parent=e,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(e,this.originalContext),this.template=this.templateBindingObserver.observe(e,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,null!==this.itemsObserver&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(e,t){e===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):e===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(t)}observeItems(e=!1){if(!this.items)return void(this.items=ht);const t=this.itemsObserver,o=this.itemsObserver=wt.getNotifier(this.items),n=t!==o;n&&null!==t&&t.unsubscribe(this),(n||e)&&o.subscribe(this)}updateViews(e){const t=this.childContext,o=this.views,n=this.bindView,r=this.items,c=this.template,d=this.options.recycle,h=[];let u=0,p=0;for(let m=0,g=e.length;m<g;++m){const g=e[m],v=g.removed;let y=0,w=g.index;const x=w+g.addedCount,S=o.splice(g.index,v.length),_=p=h.length+S.length;for(;w<x;++w){const e=o[w],m=e?e.firstChild:this.location;let g;d&&p>0?(y<=_&&S.length>0?(g=S[y],y++):(g=h[u],u++),p--):g=c.create(),o.splice(w,0,g),n(g,r,w,t),g.insertBefore(m)}S[y]&&h.push(...S.slice(y))}for(let e=u,t=h.length;e<t;++e)h[e].dispose();if(this.options.positioning)for(let e=0,t=o.length;e<t;++e){const n=o[e].context;n.length=t,n.index=e}}refreshAllViews(e=!1){const t=this.items,o=this.childContext,n=this.template,r=this.location,c=this.bindView;let d=t.length,h=this.views,u=h.length;if(0!==d&&!e&&this.options.recycle||(HTMLView.disposeContiguousBatch(h),u=0),0===u){this.views=h=new Array(d);for(let e=0;e<d;++e){const d=n.create();c(d,t,e,o),h[e]=d,d.insertBefore(r)}}else{let e=0;for(;e<d;++e)if(e<u){c(h[e],t,e,o)}else{const d=n.create();c(d,t,e,o),h.push(d),d.insertBefore(r)}const p=h.splice(e,u-e);for(e=0,d=p.length;e<d;++e)p[e].dispose()}}unbindAllViews(){const e=this.views;for(let t=0,o=e.length;t<o;++t)e[t].unbind()}}class RepeatDirective extends HTMLDirective{constructor(e,t,o){super(),this.itemsBinding=e,this.templateBinding=t,this.options=o,this.createPlaceholder=yt.createBlockPlaceholder,function(){if(vi)return;vi=!0,wt.setArrayObserverFactory((e=>new ArrayObserver(e)));const e=Array.prototype;if(e.$fastPatch)return;Reflect.defineProperty(e,"$fastPatch",{value:1,enumerable:!1});const t=e.pop,o=e.push,n=e.reverse,r=e.shift,c=e.sort,d=e.splice,h=e.unshift;e.pop=function(){const e=this.length>0,o=t.apply(this,arguments),n=this.$fastController;return void 0!==n&&e&&n.addSplice(ai(this.length,[o],0)),o},e.push=function(){const e=o.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(yi(ai(this.length-arguments.length,[],arguments.length),this)),e},e.reverse=function(){let e;const t=this.$fastController;void 0!==t&&(t.flush(),e=this.slice());const o=n.apply(this,arguments);return void 0!==t&&t.reset(e),o},e.shift=function(){const e=this.length>0,t=r.apply(this,arguments),o=this.$fastController;return void 0!==o&&e&&o.addSplice(ai(0,[t],0)),t},e.sort=function(){let e;const t=this.$fastController;void 0!==t&&(t.flush(),e=this.slice());const o=c.apply(this,arguments);return void 0!==t&&t.reset(e),o},e.splice=function(){const e=d.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(yi(ai(+arguments[0],e,arguments.length>2?arguments.length-2:0),this)),e},e.unshift=function(){const e=h.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(yi(ai(0,[],arguments.length),this)),e}}(),this.isItemsBindingVolatile=wt.isVolatileBinding(e),this.isTemplateBindingVolatile=wt.isVolatileBinding(t)}createBehavior(e){return new RepeatBehavior(e,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}const xi="focus",Si="focusin",_i="focusout",Ti="keydown",Ri="none",Ei="default",Oi="sticky",Ii="default",Mi="columnheader",Di="rowheader",Ai="default",Ni="header",$i="sticky-header";class data_grid_DataGrid extends FoundationElement{constructor(){super(),this.noTabbing=!1,this.generateHeader=Ei,this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(e,t,o)=>{if(0===this.rowElements.length)return this.focusRowIndex=0,void(this.focusColumnIndex=0);const n=Math.max(0,Math.min(this.rowElements.length-1,e)),r=this.rowElements[n].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),c=r[Math.max(0,Math.min(r.length-1,t))];o&&this.scrollHeight!==this.clientHeight&&(n<this.focusRowIndex&&this.scrollTop>0||n>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&c.scrollIntoView({block:"center",inline:"center"}),c.focus()},this.onChildListChange=(e,t)=>{e&&e.length&&(e.forEach((e=>{e.addedNodes.forEach((e=>{1===e.nodeType&&"row"===e.getAttribute("role")&&(e.columnDefinitions=this.columnDefinitions)}))})),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,yt.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let e=this.gridTemplateColumns;if(void 0===e){if(""===this.generatedGridTemplateColumns&&this.rowElements.length>0){const e=this.rowElements[0];this.generatedGridTemplateColumns=new Array(e.cellElements.length).fill("1fr").join(" ")}e=this.generatedGridTemplateColumns}this.rowElements.forEach(((t,o)=>{const n=t;n.rowIndex=o,n.gridTemplateColumns=e,this.columnDefinitionsStale&&(n.columnDefinitions=this.columnDefinitions)})),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(e){let t="";return e.forEach((e=>{t=`${t}${""===t?"":" "}1fr`})),t}noTabbingChanged(){this.$fastController.isConnected&&(this.noTabbing?this.setAttribute("tabIndex","-1"):this.setAttribute("tabIndex",this.contains(document.activeElement)||this===document.activeElement?"-1":"0"))}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){null===this.columnDefinitions&&this.rowsData.length>0&&(this.columnDefinitions=data_grid_DataGrid.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){null!==this.columnDefinitions?(this.generatedGridTemplateColumns=data_grid_DataGrid.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())):this.generatedGridTemplateColumns=""}headerCellItemTemplateChanged(){this.$fastController.isConnected&&null!==this.generatedHeader&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),void 0===this.rowItemTemplate&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new RepeatDirective((e=>e.rowsData),(e=>e.rowItemTemplate),{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(xi,this.handleFocus),this.addEventListener(Ti,this.handleKeydown),this.addEventListener(_i,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),yt.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(xi,this.handleFocus),this.removeEventListener(Ti,this.handleKeydown),this.removeEventListener(_i,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(e){this.isUpdatingFocus=!0;const t=e.target;this.focusRowIndex=this.rowElements.indexOf(t),this.focusColumnIndex=t.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(e){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(e){null!==e.relatedTarget&&this.contains(e.relatedTarget)||this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(e){if(e.defaultPrevented)return;let t;const o=this.rowElements.length-1,n=this.offsetHeight+this.scrollTop,r=this.rowElements[o];switch(e.key){case Mr:e.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case Er:e.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case"PageUp":if(e.preventDefault(),0===this.rowElements.length){this.focusOnCell(0,0,!1);break}if(0===this.focusRowIndex)return void this.focusOnCell(0,this.focusColumnIndex,!1);for(t=this.focusRowIndex-1;t>=0;t--){const e=this.rowElements[t];if(e.offsetTop<this.scrollTop){this.scrollTop=e.offsetTop+e.clientHeight-this.clientHeight;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case"PageDown":if(e.preventDefault(),0===this.rowElements.length){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=o||r.offsetTop+r.offsetHeight<=n)return void this.focusOnCell(o,this.focusColumnIndex,!1);for(t=this.focusRowIndex+1;t<=o;t++){const e=this.rowElements[t];if(e.offsetTop+e.offsetHeight>n){let t=0;this.generateHeader===Oi&&null!==this.generatedHeader&&(t=this.generatedHeader.clientHeight),this.scrollTop=e.offsetTop-t;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case $r:e.ctrlKey&&(e.preventDefault(),this.focusOnCell(0,0,!0));break;case zr:e.ctrlKey&&null!==this.columnDefinitions&&(e.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0))}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||!1===this.pendingFocusUpdate&&(this.pendingFocusUpdate=!0,yt.queueUpdate((()=>this.updateFocus())))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(null!==this.generatedHeader&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),this.generateHeader!==Ri&&this.rowsData.length>0){const e=document.createElement(this.rowElementTag);return this.generatedHeader=e,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===Oi?$i:Ni,void(null===this.firstChild&&null===this.rowsPlaceholder||this.insertBefore(e,null!==this.firstChild?this.firstChild:this.rowsPlaceholder))}}}data_grid_DataGrid.generateColumns=e=>Object.getOwnPropertyNames(e).map(((e,t)=>({columnDataKey:e,gridColumn:`${t}`}))),zt([At({attribute:"no-tabbing",mode:"boolean"})],data_grid_DataGrid.prototype,"noTabbing",void 0),zt([At({attribute:"generate-header"})],data_grid_DataGrid.prototype,"generateHeader",void 0),zt([At({attribute:"grid-template-columns"})],data_grid_DataGrid.prototype,"gridTemplateColumns",void 0),zt([Ct],data_grid_DataGrid.prototype,"rowsData",void 0),zt([Ct],data_grid_DataGrid.prototype,"columnDefinitions",void 0),zt([Ct],data_grid_DataGrid.prototype,"rowItemTemplate",void 0),zt([Ct],data_grid_DataGrid.prototype,"cellItemTemplate",void 0),zt([Ct],data_grid_DataGrid.prototype,"headerCellItemTemplate",void 0),zt([Ct],data_grid_DataGrid.prototype,"focusRowIndex",void 0),zt([Ct],data_grid_DataGrid.prototype,"focusColumnIndex",void 0),zt([Ct],data_grid_DataGrid.prototype,"defaultRowItemTemplate",void 0),zt([Ct],data_grid_DataGrid.prototype,"rowElementTag",void 0),zt([Ct],data_grid_DataGrid.prototype,"rowElements",void 0);class ChildrenBehavior extends NodeObservationBehavior{constructor(e,t){super(e,t),this.observer=null,t.childList=!0}observe(){null===this.observer&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function Pi(e){return"string"==typeof e&&(e={property:e}),new AttachedBehaviorHTMLDirective("fast-children",ChildrenBehavior,e)}class data_grid_row_DataGridRow extends FoundationElement{constructor(){super(...arguments),this.rowType=Ai,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){null!==this.rowData&&this.isActiveRow&&(this.refocusOnLoad=!0)}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),null===this.cellsRepeatBehavior&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new RepeatDirective((e=>e.columnDefinitions),(e=>e.activeCellItemTemplate),{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(_i,this.handleFocusout),this.addEventListener(Ti,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(_i,this.handleFocusout),this.removeEventListener(Ti,this.handleKeydown)}handleFocusout(e){this.contains(e.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(e){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(e.target),this.$emit("row-focused",this)}handleKeydown(e){if(e.defaultPrevented)return;let t=0;switch(e.key){case Or:t=Math.max(0,this.focusColumnIndex-1),this.cellElements[t].focus(),e.preventDefault();break;case Ir:t=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[t].focus(),e.preventDefault();break;case $r:e.ctrlKey||(this.cellElements[0].focus(),e.preventDefault());break;case zr:e.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),e.preventDefault())}}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===Ai&&void 0!==this.cellItemTemplate?this.cellItemTemplate:this.rowType===Ai&&void 0===this.cellItemTemplate?this.defaultCellItemTemplate:void 0!==this.headerCellItemTemplate?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}}zt([At({attribute:"grid-template-columns"})],data_grid_row_DataGridRow.prototype,"gridTemplateColumns",void 0),zt([At({attribute:"row-type"})],data_grid_row_DataGridRow.prototype,"rowType",void 0),zt([Ct],data_grid_row_DataGridRow.prototype,"rowData",void 0),zt([Ct],data_grid_row_DataGridRow.prototype,"columnDefinitions",void 0),zt([Ct],data_grid_row_DataGridRow.prototype,"cellItemTemplate",void 0),zt([Ct],data_grid_row_DataGridRow.prototype,"headerCellItemTemplate",void 0),zt([Ct],data_grid_row_DataGridRow.prototype,"rowIndex",void 0),zt([Ct],data_grid_row_DataGridRow.prototype,"isActiveRow",void 0),zt([Ct],data_grid_row_DataGridRow.prototype,"activeCellItemTemplate",void 0),zt([Ct],data_grid_row_DataGridRow.prototype,"defaultCellItemTemplate",void 0),zt([Ct],data_grid_row_DataGridRow.prototype,"defaultHeaderCellItemTemplate",void 0),zt([Ct],data_grid_row_DataGridRow.prototype,"cellElements",void 0);const zi=Xo`
    <template>
        ${e=>null===e.rowData||null===e.columnDefinition||null===e.columnDefinition.columnDataKey?null:e.rowData[e.columnDefinition.columnDataKey]}
    </template>
`,Li=Xo`
    <template>
        ${e=>null===e.columnDefinition?null:void 0===e.columnDefinition.title?e.columnDefinition.columnDataKey:e.columnDefinition.title}
    </template>
`;class data_grid_cell_DataGridCell extends FoundationElement{constructor(){super(...arguments),this.cellType=Ii,this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(e,t){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var e;super.connectedCallback(),this.addEventListener(Si,this.handleFocusin),this.addEventListener(_i,this.handleFocusout),this.addEventListener(Ti,this.handleKeydown),this.style.gridColumn=`${void 0===(null===(e=this.columnDefinition)||void 0===e?void 0:e.gridColumn)?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(Si,this.handleFocusin),this.removeEventListener(_i,this.handleFocusout),this.removeEventListener(Ti,this.handleKeydown),this.disconnectCellView()}handleFocusin(e){if(!this.isActiveCell){if(this.isActiveCell=!0,this.cellType===Mi){if(null!==this.columnDefinition&&!0!==this.columnDefinition.headerCellInternalFocusQueue&&"function"==typeof this.columnDefinition.headerCellFocusTargetCallback){const e=this.columnDefinition.headerCellFocusTargetCallback(this);null!==e&&e.focus()}}else if(null!==this.columnDefinition&&!0!==this.columnDefinition.cellInternalFocusQueue&&"function"==typeof this.columnDefinition.cellFocusTargetCallback){const e=this.columnDefinition.cellFocusTargetCallback(this);null!==e&&e.focus()}this.$emit("cell-focused",this)}}handleFocusout(e){this===document.activeElement||this.contains(document.activeElement)||(this.isActiveCell=!1)}handleKeydown(e){if(!(e.defaultPrevented||null===this.columnDefinition||this.cellType===Ii&&!0!==this.columnDefinition.cellInternalFocusQueue||this.cellType===Mi&&!0!==this.columnDefinition.headerCellInternalFocusQueue))switch(e.key){case Dr:case"F2":if(this.contains(document.activeElement)&&document.activeElement!==this)return;if(this.cellType===Mi){if(void 0!==this.columnDefinition.headerCellFocusTargetCallback){const t=this.columnDefinition.headerCellFocusTargetCallback(this);null!==t&&t.focus(),e.preventDefault()}}else if(void 0!==this.columnDefinition.cellFocusTargetCallback){const t=this.columnDefinition.cellFocusTargetCallback(this);null!==t&&t.focus(),e.preventDefault()}break;case Nr:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),e.preventDefault())}}updateCellView(){if(this.disconnectCellView(),null!==this.columnDefinition)switch(this.cellType){case Mi:void 0!==this.columnDefinition.headerCellTemplate?this.customCellView=this.columnDefinition.headerCellTemplate.render(this,this):this.customCellView=Li.render(this,this);break;case void 0:case Di:case Ii:void 0!==this.columnDefinition.cellTemplate?this.customCellView=this.columnDefinition.cellTemplate.render(this,this):this.customCellView=zi.render(this,this)}}disconnectCellView(){null!==this.customCellView&&(this.customCellView.dispose(),this.customCellView=null)}}zt([At({attribute:"cell-type"})],data_grid_cell_DataGridCell.prototype,"cellType",void 0),zt([At({attribute:"grid-column"})],data_grid_cell_DataGridCell.prototype,"gridColumn",void 0),zt([Ct],data_grid_cell_DataGridCell.prototype,"rowData",void 0),zt([Ct],data_grid_cell_DataGridCell.prototype,"columnDefinition",void 0);const Gi=class DataGrid extends data_grid_DataGrid{connectedCallback(){super.connectedCallback();this.getAttribute("aria-label")||this.setAttribute("aria-label","Data Grid")}}.compose({baseName:"data-grid",baseClass:data_grid_DataGrid,template:(e,t)=>{const o=function(e){const t=e.tagFor(data_grid_row_DataGridRow);return Xo`
    <${t}
        :rowData="${e=>e}"
        :cellItemTemplate="${(e,t)=>t.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(e,t)=>t.parent.headerCellItemTemplate}"
    ></${t}>
`}(e),n=e.tagFor(data_grid_row_DataGridRow);return Xo`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>n}"
            :defaultRowItemTemplate="${o}"
            ${Pi({property:"rowElements",filter:Zr("[role=row]")})}
        >
            <slot></slot>
        </template>
    `},styles:(e,t)=>en`
	:host {
		display: flex;
		position: relative;
		flex-direction: column;
		width: 100%;
	}
`});const Bi=class DataGridRow extends data_grid_row_DataGridRow{}.compose({baseName:"data-grid-row",baseClass:data_grid_row_DataGridRow,template:(e,t)=>{const o=function(e){const t=e.tagFor(data_grid_cell_DataGridCell);return Xo`
    <${t}
        cell-type="${e=>e.isRowHeader?"rowheader":void 0}"
        grid-column="${(e,t)=>t.index+1}"
        :rowData="${(e,t)=>t.parent.rowData}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}(e),n=function(e){const t=e.tagFor(data_grid_cell_DataGridCell);return Xo`
    <${t}
        cell-type="columnheader"
        grid-column="${(e,t)=>t.index+1}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}(e);return Xo`
        <template
            role="row"
            class="${e=>"default"!==e.rowType?e.rowType:""}"
            :defaultCellItemTemplate="${o}"
            :defaultHeaderCellItemTemplate="${n}"
            ${Pi({property:"cellElements",filter:Zr('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${qr("slottedCellElements")}></slot>
        </template>
    `},styles:(e,t)=>en`
	:host {
		display: grid;
		padding: calc((${Sn} / 4) * 1px) 0;
		box-sizing: border-box;
		width: 100%;
		background: transparent;
	}
	:host(.header) {
	}
	:host(.sticky-header) {
		background: ${yn};
		position: sticky;
		top: 0;
	}
	:host(:hover) {
		background: ${sr};
		outline: 1px dotted ${Cn};
		outline-offset: -1px;
	}
`});const Wi=class DataGridCell extends data_grid_cell_DataGridCell{}.compose({baseName:"data-grid-cell",baseClass:data_grid_cell_DataGridCell,template:(e,t)=>Xo`
        <template
            tabindex="-1"
            role="${e=>e.cellType&&"default"!==e.cellType?e.cellType:"gridcell"}"
            class="
            ${e=>"columnheader"===e.cellType?"column-header":"rowheader"===e.cellType?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `,styles:(e,t)=>en`
	:host {
		padding: calc(${Sn} * 1px) calc(${Sn} * 3px);
		color: ${kn};
		opacity: 1;
		box-sizing: border-box;
		font-family: ${Rn};
		font-size: ${In};
		line-height: ${Mn};
		font-weight: 400;
		border: solid calc(${wn} * 1px) transparent;
		border-radius: calc(${xn} * 1px);
		white-space: wrap;
		overflow-wrap: anywhere;
	}
	:host(.column-header) {
		font-weight: 600;
	}
	:host(:${Qr}),
	:host(:focus),
	:host(:active) {
		background: ${rr};
		border: solid calc(${wn} * 1px) ${Tn};
		color: ${ir};
		outline: none;
	}
	:host(:${Qr}) ::slotted(*),
	:host(:focus) ::slotted(*),
	:host(:active) ::slotted(*) {
		color: ${ir} !important;
	}
`}),Ui="horizontal",ji="separator";class divider_Divider extends FoundationElement{constructor(){super(...arguments),this.role=ji,this.orientation=Ui}}zt([At],divider_Divider.prototype,"role",void 0),zt([At],divider_Divider.prototype,"orientation",void 0);const Vi=class Divider extends divider_Divider{}.compose({baseName:"divider",template:(e,t)=>Xo`
    <template role="${e=>e.role}" aria-orientation="${e=>e.orientation}"></template>
`,styles:(e,t)=>en`
	${on("block")} :host {
		border: none;
		border-top: calc(${wn} * 1px) solid ${ar};
		box-sizing: content-box;
		height: 0;
		margin: calc(${Sn} * 1px) 0;
		width: 100%;
	}
`});let Zi=0;function qi(e=""){return`${e}${Zi++}`}function Ki(e){return Kr(e)&&("option"===e.getAttribute("role")||e instanceof HTMLOptionElement)}class ListboxOption extends FoundationElement{constructor(e,t,o,n){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),t&&(this.initialValue=t),o&&(this.defaultSelected=o),n&&(this.selected=n),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,t){this.ariaChecked="boolean"!=typeof t?null:t?"true":"false"}contentChanged(e,t){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,t){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return null!==(e=this.value)&&void 0!==e?e:this.text}get text(){var e,t;return null!==(t=null===(e=this.textContent)||void 0===e?void 0:e.replace(/\s+/g," ").trim())&&void 0!==t?t:""}set value(e){const t=`${null!=e?e:""}`;this._value=t,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=t),wt.notify(this,"value")}get value(){var e;return wt.track(this,"value"),null!==(e=this._value)&&void 0!==e?e:this.text}get form(){return this.proxy?this.proxy.form:null}}zt([Ct],ListboxOption.prototype,"checked",void 0),zt([Ct],ListboxOption.prototype,"content",void 0),zt([Ct],ListboxOption.prototype,"defaultSelected",void 0),zt([At({mode:"boolean"})],ListboxOption.prototype,"disabled",void 0),zt([At({attribute:"selected",mode:"boolean"})],ListboxOption.prototype,"selectedAttribute",void 0),zt([Ct],ListboxOption.prototype,"selected",void 0),zt([At({attribute:"value",mode:"fromView"})],ListboxOption.prototype,"initialValue",void 0);class DelegatesARIAListboxOption{}zt([Ct],DelegatesARIAListboxOption.prototype,"ariaChecked",void 0),zt([Ct],DelegatesARIAListboxOption.prototype,"ariaPosInSet",void 0),zt([Ct],DelegatesARIAListboxOption.prototype,"ariaSelected",void 0),zt([Ct],DelegatesARIAListboxOption.prototype,"ariaSetSize",void 0),_r(DelegatesARIAListboxOption,ARIAGlobalStatesAndProperties),_r(ListboxOption,StartEnd,DelegatesARIAListboxOption);class Listbox extends FoundationElement{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return null!==(e=this.selectedOptions[0])&&void 0!==e?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every((e=>e.disabled))}get length(){var e,t;return null!==(t=null===(e=this.options)||void 0===e?void 0:e.length)&&void 0!==t?t:0}get options(){return wt.track(this,"options"),this._options}set options(e){this._options=e,wt.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){const t=e.target.closest("option,[role=option]");if(t&&!t.disabled)return this.selectedIndex=this.options.indexOf(t),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&null!==e&&(e.focus(),requestAnimationFrame((()=>{e.scrollIntoView({block:"nearest"})})))}focusinHandler(e){this.shouldSkipFocus||e.target!==e.currentTarget||(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t=new RegExp(`^${e}`,"gi");return this.options.filter((e=>e.text.trim().match(t)))}getSelectableIndex(e=this.selectedIndex,t){const o=e>t?-1:e<t?1:0,n=e+o;let r=null;switch(o){case-1:r=this.options.reduceRight(((e,t,o)=>!e&&!t.disabled&&o<n?t:e),r);break;case 1:r=this.options.reduce(((e,t,o)=>!e&&!t.disabled&&o>n?t:e),r)}return this.options.indexOf(r)}handleChange(e,t){if("selected"===t)Listbox.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions()}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout((()=>this.typeaheadExpired=!0),Listbox.TYPE_AHEAD_TIMEOUT_MS),e.length>1||(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;const t=e.key;switch(t){case $r:e.shiftKey||(e.preventDefault(),this.selectFirstOption());break;case Er:e.shiftKey||(e.preventDefault(),this.selectNextOption());break;case Mr:e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break;case zr:e.preventDefault(),this.selectLastOption();break;case Lr:return this.focusAndScrollOptionIntoView(),!0;case Dr:case Nr:return!0;case Hr:if(this.typeaheadExpired)return!0;default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,t){this.ariaMultiSelectable=t?"true":null}selectedIndexChanged(e,t){var o;if(this.hasSelectableOptions){if((null===(o=this.options[this.selectedIndex])||void 0===o?void 0:o.disabled)&&"number"==typeof e){const o=this.getSelectableIndex(e,t),n=o>-1?o:e;return this.selectedIndex=n,void(t===n&&this.selectedIndexChanged(t,n))}this.setSelectedOptions()}else this.selectedIndex=-1}selectedOptionsChanged(e,t){var o;const n=t.filter(Listbox.slottedOptionFilter);null===(o=this.options)||void 0===o||o.forEach((e=>{const t=wt.getNotifier(e);t.unsubscribe(this,"selected"),e.selected=n.includes(e),t.subscribe(this,"selected")}))}selectFirstOption(){var e,t;this.disabled||(this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex((e=>!e.disabled)))&&void 0!==t?t:-1)}selectLastOption(){this.disabled||(this.selectedIndex=function(e,t){let o=e.length;for(;o--;)if(t(e[o],o,e))return o;return-1}(this.options,(e=>!e.disabled)))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,t;this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex((e=>e.defaultSelected)))&&void 0!==t?t:-1}setSelectedOptions(){var e,t,o;(null===(e=this.options)||void 0===e?void 0:e.length)&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=null!==(o=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.id)&&void 0!==o?o:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,t){this.options=t.reduce(((e,t)=>(Ki(t)&&e.push(t),e)),[]);const o=`${this.options.length}`;this.options.forEach(((e,t)=>{e.id||(e.id=qi("option-")),e.ariaPosInSet=`${t+1}`,e.ariaSetSize=o})),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,t){if(this.$fastController.isConnected){const e=this.getTypeaheadMatches();if(e.length){const t=this.options.indexOf(e[0]);t>-1&&(this.selectedIndex=t)}this.typeaheadExpired=!1}}}Listbox.slottedOptionFilter=e=>Ki(e)&&!e.hidden,Listbox.TYPE_AHEAD_TIMEOUT_MS=1e3,zt([At({mode:"boolean"})],Listbox.prototype,"disabled",void 0),zt([Ct],Listbox.prototype,"selectedIndex",void 0),zt([Ct],Listbox.prototype,"selectedOptions",void 0),zt([Ct],Listbox.prototype,"slottedOptions",void 0),zt([Ct],Listbox.prototype,"typeaheadBuffer",void 0);class DelegatesARIAListbox{}function Yi(e,t,o=0){return[t,o]=[t,o].sort(((e,t)=>e-t)),t<=e&&e<o}zt([Ct],DelegatesARIAListbox.prototype,"ariaActiveDescendant",void 0),zt([Ct],DelegatesARIAListbox.prototype,"ariaDisabled",void 0),zt([Ct],DelegatesARIAListbox.prototype,"ariaExpanded",void 0),zt([Ct],DelegatesARIAListbox.prototype,"ariaMultiSelectable",void 0),_r(DelegatesARIAListbox,ARIAGlobalStatesAndProperties),_r(Listbox,DelegatesARIAListbox);class ListboxElement extends Listbox{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return null===(e=this.options)||void 0===e?void 0:e.filter((e=>e.checked))}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,t){var o,n;this.ariaActiveDescendant=null!==(n=null===(o=this.options[t])||void 0===o?void 0:o.id)&&void 0!==n?n:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach(((e,t)=>{e.checked=Yi(t,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((e,t)=>{e.checked=Yi(t,this.rangeStartIndex,this.options.length)}))):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((e,t)=>{e.checked=Yi(t,this.rangeStartIndex,this.activeIndex+1)}))):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),1===this.checkedOptions.length&&(this.rangeStartIndex+=1),this.options.forEach(((e,t)=>{e.checked=Yi(t,this.activeIndex,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var t;if(!this.multiple)return super.clickHandler(e);const o=null===(t=e.target)||void 0===t?void 0:t.closest("[role=option]");return o&&!o.disabled?(this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(o),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0):void 0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);this.shouldSkipFocus||e.target!==e.currentTarget||(this.uncheckAllOptions(),-1===this.activeIndex&&(this.activeIndex=-1!==this.firstSelectedOptionIndex?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;const{key:t,shiftKey:o}=e;switch(this.shouldSkipFocus=!1,t){case $r:return void this.checkFirstOption(o);case Er:return void this.checkNextOption(o);case Mr:return void this.checkPreviousOption(o);case zr:return void this.checkLastOption(o);case Lr:return this.focusAndScrollOptionIntoView(),!0;case Nr:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case Hr:if(e.preventDefault(),this.typeAheadExpired)return void this.toggleSelectedForAllCheckedOptions();default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,t){var o;this.ariaMultiSelectable=t?"true":null,null===(o=this.options)||void 0===o||o.forEach((e=>{e.checked=!t&&void 0})),this.setSelectedOptions()}setSelectedOptions(){this.multiple?this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter((e=>e.selected)),this.focusAndScrollOptionIntoView()):super.setSelectedOptions()}sizeChanged(e,t){var o;const n=Math.max(0,parseInt(null!==(o=null==t?void 0:t.toFixed())&&void 0!==o?o:"",10));n!==t&&yt.queueUpdate((()=>{this.size=n}))}toggleSelectedForAllCheckedOptions(){const e=this.checkedOptions.filter((e=>!e.disabled)),t=!e.every((e=>e.selected));e.forEach((e=>e.selected=t)),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,t){if(this.multiple){if(this.$fastController.isConnected){const e=this.getTypeaheadMatches(),t=this.options.indexOf(e[0]);t>-1&&(this.activeIndex=t,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}else super.typeaheadBufferChanged(e,t)}uncheckAllOptions(e=!1){this.options.forEach((e=>e.checked=!this.multiple&&void 0)),e||(this.rangeStartIndex=-1)}}zt([Ct],ListboxElement.prototype,"activeIndex",void 0),zt([At({mode:"boolean"})],ListboxElement.prototype,"multiple",void 0),zt([At({converter:Dt})],ListboxElement.prototype,"size",void 0);class _Select extends ListboxElement{}class FormAssociatedSelect extends(jr(_Select)){constructor(){super(...arguments),this.proxy=document.createElement("select")}}const Xi="above",Qi="below";class Select extends FormAssociatedSelect{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=qi("listbox-"),this.maxHeight=0}openChanged(e,t){if(this.collapsible){if(this.open)return this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,void yt.queueUpdate((()=>this.focus()));this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||"number"==typeof this.size)}get value(){return wt.track(this,"value"),this._value}set value(e){var t,o,n,r,c,d,h;const u=`${this._value}`;if(null===(t=this._options)||void 0===t?void 0:t.length){const t=this._options.findIndex((t=>t.value===e)),u=null!==(n=null===(o=this._options[this.selectedIndex])||void 0===o?void 0:o.value)&&void 0!==n?n:null,p=null!==(c=null===(r=this._options[t])||void 0===r?void 0:r.value)&&void 0!==c?c:null;-1!==t&&u===p||(e="",this.selectedIndex=t),e=null!==(h=null===(d=this.firstSelectedOption)||void 0===d?void 0:d.value)&&void 0!==h?h:e}u!==e&&(this._value=e,super.valueChanged(u,e),wt.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var t,o;this.$fastController.isConnected&&(this.value=null!==(o=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.value)&&void 0!==o?o:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,t){super.selectedIndexChanged(e,t),this.updateValue()}positionChanged(e,t){this.positionAttribute=t,this.setPositioning()}setPositioning(){const e=this.getBoundingClientRect(),t=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>t?Xi:Qi,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Xi?~~e.top:~~t}get displayValue(){var e,t;return wt.track(this,"displayValue"),null!==(t=null===(e=this.firstSelectedOption)||void 0===e?void 0:e.text)&&void 0!==t?t:""}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),-1===this.selectedIndex&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){const t=e.target.closest("option,[role=option]");if(t&&t.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,this.open||this.indexWhenOpened===this.selectedIndex||this.updateValue(!0),!0}}focusoutHandler(e){var t;if(super.focusoutHandler(e),!this.open)return!0;const o=e.relatedTarget;this.isSameNode(o)?this.focus():(null===(t=this.options)||void 0===t?void 0:t.includes(o))||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,t){super.handleChange(e,t),"value"===t&&this.updateValue()}slottedOptionsChanged(e,t){this.options.forEach((e=>{wt.getNotifier(e).unsubscribe(this,"value")})),super.slottedOptionsChanged(e,t),this.options.forEach((e=>{wt.getNotifier(e).subscribe(this,"value")})),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var t;return e.offsetX>=0&&e.offsetX<=(null===(t=this.listbox)||void 0===t?void 0:t.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,t){super.multipleChanged(e,t),this.proxy&&(this.proxy.multiple=t)}selectedOptionsChanged(e,t){var o;super.selectedOptionsChanged(e,t),null===(o=this.options)||void 0===o||o.forEach(((e,t)=>{var o;const n=null===(o=this.proxy)||void 0===o?void 0:o.options.item(t);n&&(n.selected=e.selected)}))}setDefaultSelectedOption(){var e;const t=null!==(e=this.options)&&void 0!==e?e:Array.from(this.children).filter(Listbox.slottedOptionFilter),o=null==t?void 0:t.findIndex((e=>e.hasAttribute("selected")||e.selected||e.value===this.value));this.selectedIndex=-1===o?0:o}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach((e=>{const t=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);t&&this.proxy.options.add(t)})))}keydownHandler(e){super.keydownHandler(e);const t=e.key||e.key.charCodeAt(0);switch(t){case Hr:e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break;case $r:case zr:e.preventDefault();break;case Dr:e.preventDefault(),this.open=!this.open;break;case Nr:this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break;case Lr:return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return this.open||this.indexWhenOpened===this.selectedIndex||(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(t===Er||t===Mr)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,t){super.sizeChanged(e,t),this.proxy&&(this.proxy.size=t)}updateDisplayValue(){this.collapsible&&wt.notify(this,"displayValue")}}zt([At({attribute:"open",mode:"boolean"})],Select.prototype,"open",void 0),zt([xt],Select.prototype,"collapsible",null),zt([Ct],Select.prototype,"control",void 0),zt([At({attribute:"position"})],Select.prototype,"positionAttribute",void 0),zt([Ct],Select.prototype,"position",void 0),zt([Ct],Select.prototype,"maxHeight",void 0);class DelegatesARIASelect{}zt([Ct],DelegatesARIASelect.prototype,"ariaControls",void 0),_r(DelegatesARIASelect,DelegatesARIAListbox),_r(Select,StartEnd,DelegatesARIASelect);const Ji=e=>"function"==typeof e,es=()=>null;function ts(e){return void 0===e?es:Ji(e)?e:()=>e}function os(e,t,o){const n=Ji(e)?e:()=>e,r=ts(t),c=ts(o);return(e,t)=>n(e,t)?r(e,t):c(e,t)}const ns=class Dropdown extends Select{}.compose({baseName:"dropdown",template:(e,t)=>Xo`
    <template
        class="${e=>[e.collapsible&&"collapsible",e.collapsible&&e.open&&"open",e.disabled&&"disabled",e.collapsible&&e.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${e=>e.ariaActiveDescendant}"
        aria-controls="${e=>e.ariaControls}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-haspopup="${e=>e.collapsible?"listbox":null}"
        aria-multiselectable="${e=>e.ariaMultiSelectable}"
        ?open="${e=>e.open}"
        role="combobox"
        tabindex="${e=>e.disabled?null:"0"}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        @focusin="${(e,t)=>e.focusinHandler(t.event)}"
        @focusout="${(e,t)=>e.focusoutHandler(t.event)}"
        @keydown="${(e,t)=>e.keydownHandler(t.event)}"
        @mousedown="${(e,t)=>e.mousedownHandler(t.event)}"
    >
        ${os((e=>e.collapsible),Xo`
                <div
                    class="control"
                    part="control"
                    ?disabled="${e=>e.disabled}"
                    ${Cr("control")}
                >
                    ${Sr(0,t)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${e=>e.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${t.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${xr(0,t)}
                </div>
            `)}
        <div
            class="listbox"
            id="${e=>e.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${e=>e.disabled}"
            ?hidden="${e=>!!e.collapsible&&!e.open}"
            ${Cr("listbox")}
        >
            <slot
                ${qr({filter:Listbox.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,styles:(e,t)=>en`
	${on("inline-flex")} :host {
		background: ${lr};
		box-sizing: border-box;
		color: ${kn};
		contain: contents;
		font-family: ${Rn};
		height: calc(${En} * 1px);
		position: relative;
		user-select: none;
		min-width: ${On};
		outline: none;
		vertical-align: top;
	}
	.control {
		align-items: center;
		box-sizing: border-box;
		border: calc(${wn} * 1px) solid ${cr};
		border-radius: calc(${xn} * 1px);
		cursor: pointer;
		display: flex;
		font-family: inherit;
		font-size: ${In};
		line-height: ${Mn};
		min-height: 100%;
		padding: 2px 6px 2px 8px;
		width: 100%;
	}
	.listbox {
		background: ${lr};
		border: calc(${wn} * 1px) solid ${Tn};
		border-radius: calc(${xn} * 1px);
		box-sizing: border-box;
		display: inline-flex;
		flex-direction: column;
		left: 0;
		max-height: ${dr};
		padding: 0 0 calc(${Sn} * 1px) 0;
		overflow-y: auto;
		position: absolute;
		width: 100%;
		z-index: 1;
	}
	.listbox[hidden] {
		display: none;
	}
	:host(:${Qr}) .control {
		border-color: ${Tn};
	}
	:host(:not([disabled]):hover) {
		background: ${lr};
		border-color: ${cr};
	}
	:host(:${Qr}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
		background: ${rr};
		border: calc(${wn} * 1px) solid ${Tn};
		color: ${ir};
	}
	:host([disabled]) {
		cursor: ${ei};
		opacity: ${_n};
	}
	:host([disabled]) .control {
		cursor: ${ei};
		user-select: none;
	}
	:host([disabled]:hover) {
		background: ${lr};
		color: ${kn};
		fill: currentcolor;
	}
	:host(:not([disabled])) .control:active {
		border-color: ${Tn};
	}
	:host(:empty) .listbox {
		display: none;
	}
	:host([open]) .control {
		border-color: ${Tn};
	}
	:host([open][position='above']) .listbox,
	:host([open][position='below']) .control {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	:host([open][position='above']) .control,
	:host([open][position='below']) .listbox {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	:host([open][position='above']) .listbox {
		bottom: calc(${En} * 1px);
	}
	:host([open][position='below']) .listbox {
		top: calc(${En} * 1px);
	}
	.selected-value {
		flex: 1 1 auto;
		font-family: inherit;
		overflow: hidden;
		text-align: start;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.indicator {
		flex: 0 0 auto;
		margin-inline-start: 1em;
	}
	slot[name='listbox'] {
		display: none;
		width: 100%;
	}
	:host([open]) slot[name='listbox'] {
		display: flex;
		position: absolute;
	}
	.end {
		margin-inline-start: auto;
	}
	.start,
	.end,
	.indicator,
	.select-indicator,
	::slotted(svg),
	::slotted(span) {
		fill: currentcolor;
		height: 1em;
		min-height: calc(${Sn} * 4px);
		min-width: calc(${Sn} * 4px);
		width: 1em;
	}
	::slotted([role='option']),
	::slotted(option) {
		flex: 0 0 auto;
	}
`,indicator:'\n\t\t<svg \n\t\t\tclass="select-indicator"\n\t\t\tpart="select-indicator"\n\t\t\twidth="16" \n\t\t\theight="16" \n\t\t\tviewBox="0 0 16 16" \n\t\t\txmlns="http://www.w3.org/2000/svg" \n\t\t\tfill="currentColor"\n\t\t>\n\t\t\t<path \n\t\t\t\tfill-rule="evenodd" \n\t\t\t\tclip-rule="evenodd" \n\t\t\t\td="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"\n\t\t\t/>\n\t\t</svg>\n\t'});class Anchor extends FoundationElement{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{var e;null===(e=this.control)||void 0===e||e.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}zt([At],Anchor.prototype,"download",void 0),zt([At],Anchor.prototype,"href",void 0),zt([At],Anchor.prototype,"hreflang",void 0),zt([At],Anchor.prototype,"ping",void 0),zt([At],Anchor.prototype,"referrerpolicy",void 0),zt([At],Anchor.prototype,"rel",void 0),zt([At],Anchor.prototype,"target",void 0),zt([At],Anchor.prototype,"type",void 0),zt([Ct],Anchor.prototype,"defaultSlottedContent",void 0);class DelegatesARIALink{}zt([At({attribute:"aria-expanded"})],DelegatesARIALink.prototype,"ariaExpanded",void 0),_r(DelegatesARIALink,ARIAGlobalStatesAndProperties),_r(Anchor,StartEnd,DelegatesARIALink);const rs=class Link extends Anchor{}.compose({baseName:"link",template:(e,t)=>Xo`
    <a
        class="control"
        part="control"
        download="${e=>e.download}"
        href="${e=>e.href}"
        hreflang="${e=>e.hreflang}"
        ping="${e=>e.ping}"
        referrerpolicy="${e=>e.referrerpolicy}"
        rel="${e=>e.rel}"
        target="${e=>e.target}"
        type="${e=>e.type}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${Cr("control")}
    >
        ${Sr(0,t)}
        <span class="content" part="content">
            <slot ${qr("defaultSlottedContent")}></slot>
        </span>
        ${xr(0,t)}
    </a>
`,styles:(e,t)=>en`
	${on("inline-flex")} :host {
		background: transparent;
		box-sizing: border-box;
		color: ${fr};
		cursor: pointer;
		fill: currentcolor;
		font-family: ${Rn};
		font-size: ${In};
		line-height: ${Mn};
		outline: none;
	}
	.control {
		background: transparent;
		border: calc(${wn} * 1px) solid transparent;
		border-radius: calc(${xn} * 1px);
		box-sizing: border-box;
		color: inherit;
		cursor: inherit;
		fill: inherit;
		font-family: inherit;
		height: inherit;
		padding: 0;
		outline: none;
		text-decoration: none;
		word-break: break-word;
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host(:hover) {
		color: ${pr};
	}
	:host(:hover) .content {
		text-decoration: underline;
	}
	:host(:active) {
		background: transparent;
		color: ${pr};
	}
	:host(:${Qr}) .control,
	:host(:focus) .control {
		border: calc(${wn} * 1px) solid ${Tn};
	}
`,shadowOptions:{delegatesFocus:!0}});const ss=class option_Option extends ListboxOption{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Option")}}.compose({baseName:"option",template:(e,t)=>Xo`
    <template
        aria-checked="${e=>e.ariaChecked}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-posinset="${e=>e.ariaPosInSet}"
        aria-selected="${e=>e.ariaSelected}"
        aria-setsize="${e=>e.ariaSetSize}"
        class="${e=>[e.checked&&"checked",e.selected&&"selected",e.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${Sr(0,t)}
        <span class="content" part="content">
            <slot ${qr("content")}></slot>
        </span>
        ${xr(0,t)}
    </template>
`,styles:(e,t)=>en`
	${on("inline-flex")} :host {
		font-family: var(--body-font);
		border-radius: ${xn};
		border: calc(${wn} * 1px) solid transparent;
		box-sizing: border-box;
		color: ${kn};
		cursor: pointer;
		fill: currentcolor;
		font-size: ${In};
		line-height: ${Mn};
		margin: 0;
		outline: none;
		overflow: hidden;
		padding: 0 calc((${Sn} / 2) * 1px)
			calc((${Sn} / 4) * 1px);
		user-select: none;
		white-space: nowrap;
	}
	:host(:${Qr}) {
		border-color: ${Tn};
		background: ${rr};
		color: ${kn};
	}
	:host([aria-selected='true']) {
		background: ${rr};
		border: calc(${wn} * 1px) solid ${Tn};
		color: ${ir};
	}
	:host(:active) {
		background: ${rr};
		color: ${ir};
	}
	:host(:not([aria-selected='true']):hover) {
		background: ${rr};
		border: calc(${wn} * 1px) solid ${Tn};
		color: ${ir};
	}
	:host(:not([aria-selected='true']):active) {
		background: ${rr};
		color: ${kn};
	}
	:host([disabled]) {
		cursor: ${ei};
		opacity: ${_n};
	}
	:host([disabled]:hover) {
		background-color: inherit;
	}
	.content {
		grid-column-start: 2;
		justify-self: start;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`}),as="horizontal";class Tabs extends FoundationElement{constructor(){super(...arguments),this.orientation=as,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=e=>"true"===e.getAttribute("aria-disabled"),this.isHiddenElement=e=>e.hasAttribute("hidden"),this.isFocusableElement=e=>!this.isDisabledElement(e)&&!this.isHiddenElement(e),this.setTabs=()=>{const e="gridColumn",t="gridRow",o=this.isHorizontal()?e:t;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach(((n,r)=>{if("tab"===n.slot){const e=this.activeTabIndex===r&&this.isFocusableElement(n);this.activeindicator&&this.isFocusableElement(n)&&(this.showActiveIndicator=!0);const t=this.tabIds[r],o=this.tabpanelIds[r];n.setAttribute("id",t),n.setAttribute("aria-selected",e?"true":"false"),n.setAttribute("aria-controls",o),n.addEventListener("click",this.handleTabClick),n.addEventListener("keydown",this.handleTabKeyDown),n.setAttribute("tabindex",e?"0":"-1"),e&&(this.activetab=n,this.activeid=t)}n.style[e]="",n.style[t]="",n.style[o]=`${r+1}`,this.isHorizontal()?n.classList.remove("vertical"):n.classList.add("vertical")}))},this.setTabPanels=()=>{this.tabpanels.forEach(((e,t)=>{const o=this.tabIds[t],n=this.tabpanelIds[t];e.setAttribute("id",n),e.setAttribute("aria-labelledby",o),this.activeTabIndex!==t?e.setAttribute("hidden",""):e.removeAttribute("hidden")}))},this.handleTabClick=e=>{const t=e.currentTarget;1===t.nodeType&&this.isFocusableElement(t)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(t),this.setComponent())},this.handleTabKeyDown=e=>{if(this.isHorizontal())switch(e.key){case Or:e.preventDefault(),this.adjustBackward(e);break;case Ir:e.preventDefault(),this.adjustForward(e)}else switch(e.key){case Mr:e.preventDefault(),this.adjustBackward(e);break;case Er:e.preventDefault(),this.adjustForward(e)}switch(e.key){case $r:e.preventDefault(),this.adjust(-this.activeTabIndex);break;case zr:e.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1)}},this.adjustForward=e=>{const t=this.tabs;let o=0;for(o=this.activetab?t.indexOf(this.activetab)+1:1,o===t.length&&(o=0);o<t.length&&t.length>1;){if(this.isFocusableElement(t[o])){this.moveToTabByIndex(t,o);break}if(this.activetab&&o===t.indexOf(this.activetab))break;o+1>=t.length?o=0:o+=1}},this.adjustBackward=e=>{const t=this.tabs;let o=0;for(o=this.activetab?t.indexOf(this.activetab)-1:0,o=o<0?t.length-1:o;o>=0&&t.length>1;){if(this.isFocusableElement(t[o])){this.moveToTabByIndex(t,o);break}o-1<0?o=t.length-1:o-=1}},this.moveToTabByIndex=(e,t)=>{const o=e[t];this.activetab=o,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=t,o.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(e,t){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex((t=>t.id===e)),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return void 0!==this.activeid?-1===this.tabIds.indexOf(this.activeid)?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map((e=>{var t;return null!==(t=e.getAttribute("id"))&&void 0!==t?t:`tab-${qi()}`}))}getTabPanelIds(){return this.tabpanels.map((e=>{var t;return null!==(t=e.getAttribute("id"))&&void 0!==t?t:`panel-${qi()}`}))}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===as}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const e=this.isHorizontal()?"gridColumn":"gridRow",t=this.isHorizontal()?"translateX":"translateY",o=this.isHorizontal()?"offsetLeft":"offsetTop",n=this.activeIndicatorRef[o];this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`;const r=this.activeIndicatorRef[o];this.activeIndicatorRef.style[e]=`${this.prevActiveTabIndex+1}`;const c=r-n;this.activeIndicatorRef.style.transform=`${t}(${c}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",(()=>{this.ticking=!1,this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${t}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")}))}adjust(e){const t=this.tabs.filter((e=>this.isFocusableElement(e))),o=t.indexOf(this.activetab),n=function(e,t,o){return Math.min(Math.max(o,e),t)}(0,t.length-1,o+e),r=this.tabs.indexOf(t[n]);r>-1&&this.moveToTabByIndex(this.tabs,r)}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}zt([At],Tabs.prototype,"orientation",void 0),zt([At],Tabs.prototype,"activeid",void 0),zt([Ct],Tabs.prototype,"tabs",void 0),zt([Ct],Tabs.prototype,"tabpanels",void 0),zt([At({mode:"boolean"})],Tabs.prototype,"activeindicator",void 0),zt([Ct],Tabs.prototype,"activeIndicatorRef",void 0),zt([Ct],Tabs.prototype,"showActiveIndicator",void 0),_r(Tabs,StartEnd);class Tab extends FoundationElement{}zt([At({mode:"boolean"})],Tab.prototype,"disabled",void 0);class TabPanel extends FoundationElement{}const ls=class Panels extends Tabs{connectedCallback(){super.connectedCallback(),this.orientation&&(this.orientation=as);this.getAttribute("aria-label")||this.setAttribute("aria-label","Panels")}}.compose({baseName:"panels",template:(e,t)=>Xo`
    <template class="${e=>e.orientation}">
        ${Sr(0,t)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${qr("tabs")}></slot>

            ${os((e=>e.showActiveIndicator),Xo`
                    <div
                        ${Cr("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${xr(0,t)}
        <div class="tabpanel" part="tabpanel">
            <slot name="tabpanel" ${qr("tabpanels")}></slot>
        </div>
    </template>
`,styles:(e,t)=>en`
	${on("grid")} :host {
		box-sizing: border-box;
		font-family: ${Rn};
		font-size: ${In};
		line-height: ${Mn};
		color: ${kn};
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto 1fr;
		overflow-x: auto;
	}
	.tablist {
		display: grid;
		grid-template-rows: auto auto;
		grid-template-columns: auto;
		column-gap: calc(${Sn} * 8px);
		position: relative;
		width: max-content;
		align-self: end;
		padding: calc(${Sn} * 1px) calc(${Sn} * 1px) 0;
		box-sizing: border-box;
	}
	.start,
	.end {
		align-self: center;
	}
	.activeIndicator {
		grid-row: 2;
		grid-column: 1;
		width: 100%;
		height: calc((${Sn} / 4) * 1px);
		justify-self: center;
		background: ${br};
		margin: 0;
		border-radius: calc(${xn} * 1px);
	}
	.activeIndicatorTransition {
		transition: transform 0.01s linear;
	}
	.tabpanel {
		grid-row: 2;
		grid-column-start: 1;
		grid-column-end: 4;
		position: relative;
	}
`});const cs=class PanelTab extends Tab{connectedCallback(){super.connectedCallback(),this.disabled&&(this.disabled=!1),this.textContent&&this.setAttribute("aria-label",this.textContent)}}.compose({baseName:"panel-tab",template:(e,t)=>Xo`
    <template slot="tab" role="tab" aria-disabled="${e=>e.disabled}">
        <slot></slot>
    </template>
`,styles:(e,t)=>en`
	${on("inline-flex")} :host {
		box-sizing: border-box;
		font-family: ${Rn};
		font-size: ${In};
		line-height: ${Mn};
		height: calc(${Sn} * 7px);
		padding: calc(${Sn} * 1px) 0;
		color: ${vr};
		fill: currentcolor;
		border-radius: calc(${xn} * 1px);
		border: solid calc(${wn} * 1px) transparent;
		align-items: center;
		justify-content: center;
		grid-row: 1;
		cursor: pointer;
	}
	:host(:hover) {
		color: ${br};
		fill: currentcolor;
	}
	:host(:active) {
		color: ${br};
		fill: currentcolor;
	}
	:host([aria-selected='true']) {
		background: transparent;
		color: ${br};
		fill: currentcolor;
	}
	:host([aria-selected='true']:hover) {
		background: transparent;
		color: ${br};
		fill: currentcolor;
	}
	:host([aria-selected='true']:active) {
		background: transparent;
		color: ${br};
		fill: currentcolor;
	}
	:host(:${Qr}) {
		outline: none;
		border: solid calc(${wn} * 1px) ${gr};
	}
	:host(:focus) {
		outline: none;
	}
	::slotted(vscode-badge) {
		margin-inline-start: calc(${Sn} * 2px);
	}
`});const hs=class PanelView extends TabPanel{}.compose({baseName:"panel-view",template:(e,t)=>Xo`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`,styles:(e,t)=>en`
	${on("flex")} :host {
		color: inherit;
		background-color: transparent;
		border: solid calc(${wn} * 1px) transparent;
		box-sizing: border-box;
		font-size: ${In};
		line-height: ${Mn};
		padding: 10px calc((${Sn} + 2) * 1px);
	}
`});class BaseProgress extends FoundationElement{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const e="number"==typeof this.min?this.min:0,t="number"==typeof this.max?this.max:100,o="number"==typeof this.value?this.value:0,n=t-e;this.percentComplete=0===n?0:Math.fround((o-e)/n*100)}}zt([At({converter:Dt})],BaseProgress.prototype,"value",void 0),zt([At({converter:Dt})],BaseProgress.prototype,"min",void 0),zt([At({converter:Dt})],BaseProgress.prototype,"max",void 0),zt([At({mode:"boolean"})],BaseProgress.prototype,"paused",void 0),zt([Ct],BaseProgress.prototype,"percentComplete",void 0);const us=class ProgressRing extends BaseProgress{connectedCallback(){super.connectedCallback(),this.paused&&(this.paused=!1),this.setAttribute("aria-label","Loading"),this.setAttribute("aria-live","assertive"),this.setAttribute("role","alert")}attributeChangedCallback(e,t,o){"value"===e&&this.removeAttribute("value")}}.compose({baseName:"progress-ring",template:(e,t)=>Xo`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${os((e=>"number"==typeof e.value),Xo`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${e=>44*e.percentComplete/100}px ${44}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `,Xo`
                <slot name="indeterminate" slot="indeterminate">
                    ${t.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`,styles:(e,t)=>en`
	${on("flex")} :host {
		align-items: center;
		outline: none;
		height: calc(${Sn} * 7px);
		width: calc(${Sn} * 7px);
		margin: 0;
	}
	.progress {
		height: 100%;
		width: 100%;
	}
	.background {
		fill: none;
		stroke: transparent;
		stroke-width: calc(${Sn} / 2 * 1px);
	}
	.indeterminate-indicator-1 {
		fill: none;
		stroke: ${mr};
		stroke-width: calc(${Sn} / 2 * 1px);
		stroke-linecap: square;
		transform-origin: 50% 50%;
		transform: rotate(-90deg);
		transition: all 0.2s ease-in-out;
		animation: spin-infinite 2s linear infinite;
	}
	@keyframes spin-infinite {
		0% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(0deg);
		}
		50% {
			stroke-dasharray: 21.99px 21.99px;
			transform: rotate(450deg);
		}
		100% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(1080deg);
		}
	}
`,indeterminateIndicator:'\n\t\t<svg class="progress" part="progress" viewBox="0 0 16 16">\n\t\t\t<circle\n\t\t\t\tclass="background"\n\t\t\t\tpart="background"\n\t\t\t\tcx="8px"\n\t\t\t\tcy="8px"\n\t\t\t\tr="7px"\n\t\t\t></circle>\n\t\t\t<circle\n\t\t\t\tclass="indeterminate-indicator-1"\n\t\t\t\tpart="indeterminate-indicator-1"\n\t\t\t\tcx="8px"\n\t\t\t\tcy="8px"\n\t\t\t\tr="7px"\n\t\t\t></circle>\n\t\t</svg>\n\t'});class _Radio extends FoundationElement{}class FormAssociatedRadio extends(Vr(_Radio)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class radio_Radio extends FormAssociatedRadio{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{if(e.key!==Hr)return!0;this.checked||this.readOnly||(this.checked=!0)},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var e;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=null!==(e=this.defaultChecked)&&void 0!==e&&e,this.dirtyChecked=!1))}connectedCallback(){var e,t;super.connectedCallback(),this.validate(),"radiogroup"!==(null===(e=this.parentElement)||void 0===e?void 0:e.getAttribute("role"))&&null===this.getAttribute("tabindex")&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=null!==(t=this.defaultChecked)&&void 0!==t&&t,this.dirtyChecked=!1))}isInsideRadioGroup(){return null!==this.closest("[role=radiogroup]")}clickHandler(e){this.disabled||this.readOnly||this.checked||(this.checked=!0)}}zt([At({attribute:"readonly",mode:"boolean"})],radio_Radio.prototype,"readOnly",void 0),zt([Ct],radio_Radio.prototype,"name",void 0),zt([Ct],radio_Radio.prototype,"defaultSlottedNodes",void 0);const ps=class Radio extends radio_Radio{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Radio")}}.compose({baseName:"radio",template:(e,t)=>Xo`
    <template
        role="radio"
        class="${e=>e.checked?"checked":""} ${e=>e.readOnly?"readonly":""}"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        @keypress="${(e,t)=>e.keypressHandler(t.event)}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${t.checkedIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${qr("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(e,t)=>en`
	${on("inline-flex")} :host {
		align-items: center;
		flex-direction: row;
		font-size: ${In};
		line-height: ${Mn};
		margin: calc(${Sn} * 1px) 0;
		outline: none;
		position: relative;
		transition: all 0.2s ease-in-out;
		user-select: none;
	}
	.control {
		background: ${tr};
		border-radius: 999px;
		border: calc(${wn} * 1px) solid ${or};
		box-sizing: border-box;
		cursor: pointer;
		height: calc(${Sn} * 4px);
		position: relative;
		outline: none;
		width: calc(${Sn} * 4px);
	}
	.label {
		color: ${kn};
		cursor: pointer;
		font-family: ${Rn};
		margin-inline-end: calc(${Sn} * 2px + 2px);
		padding-inline-start: calc(${Sn} * 2px + 2px);
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.control,
	.checked-indicator {
		flex-shrink: 0;
	}
	.checked-indicator {
		background: ${kn};
		border-radius: 999px;
		display: inline-block;
		inset: calc(${Sn} * 1px);
		opacity: 0;
		pointer-events: none;
		position: absolute;
	}
	:host(:not([disabled])) .control:hover {
		background: ${tr};
		border-color: ${or};
	}
	:host(:not([disabled])) .control:active {
		background: ${tr};
		border-color: ${Tn};
	}
	:host(:${Qr}) .control {
		border: calc(${wn} * 1px) solid ${Tn};
	}
	:host([aria-checked='true']) .control {
		background: ${tr};
		border: calc(${wn} * 1px) solid ${or};
	}
	:host([aria-checked='true']:not([disabled])) .control:hover {
		background: ${tr};
		border: calc(${wn} * 1px) solid ${or};
	}
	:host([aria-checked='true']:not([disabled])) .control:active {
		background: ${tr};
		border: calc(${wn} * 1px) solid ${Tn};
	}
	:host([aria-checked="true"]:${Qr}:not([disabled])) .control {
		border: calc(${wn} * 1px) solid ${Tn};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${ei};
	}
	:host([aria-checked='true']) .checked-indicator {
		opacity: 1;
	}
	:host([disabled]) {
		opacity: ${_n};
	}
`,checkedIndicator:'\n\t\t<div part="checked-indicator" class="checked-indicator"></div>\n\t'});var ms;!function(e){e.ltr="ltr",e.rtl="rtl"}(ms||(ms={}));class radio_group_RadioGroup extends FoundationElement{constructor(){super(...arguments),this.orientation=Ui,this.radioChangeHandler=e=>{const t=e.target;t.checked&&(this.slottedRadioButtons.forEach((e=>{e!==t&&(e.checked=!1,this.isInsideFoundationToolbar||e.setAttribute("tabindex","-1"))})),this.selectedRadio=t,this.value=t.value,t.setAttribute("tabindex","0"),this.focusedRadio=t),e.stopPropagation()},this.moveToRadioByIndex=(e,t)=>{const o=e[t];this.isInsideToolbar||(o.setAttribute("tabindex","0"),o.readOnly?this.slottedRadioButtons.forEach((e=>{e!==o&&e.setAttribute("tabindex","-1")})):(o.checked=!0,this.selectedRadio=o)),this.focusedRadio=o,o.focus()},this.moveRightOffGroup=()=>{var e;null===(e=this.nextElementSibling)||void 0===e||e.focus()},this.moveLeftOffGroup=()=>{var e;null===(e=this.previousElementSibling)||void 0===e||e.focus()},this.focusOutHandler=e=>{const t=this.slottedRadioButtons,o=e.target,n=null!==o?t.indexOf(o):0,r=this.focusedRadio?t.indexOf(this.focusedRadio):-1;return(0===r&&n===r||r===t.length-1&&r===n)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),t.forEach((e=>{e!==this.selectedRadio&&e.setAttribute("tabindex","-1")})))):(this.focusedRadio=t[0],this.focusedRadio.setAttribute("tabindex","0"),t.forEach((e=>{e!==this.focusedRadio&&e.setAttribute("tabindex","-1")})))),!0},this.clickHandler=e=>{const t=e.target;if(t){const e=this.slottedRadioButtons;t.checked||0===e.indexOf(t)?(t.setAttribute("tabindex","0"),this.selectedRadio=t):(t.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=t}e.preventDefault()},this.shouldMoveOffGroupToTheRight=(e,t,o)=>e===t.length&&this.isInsideToolbar&&o===Ir,this.shouldMoveOffGroupToTheLeft=(e,t)=>(this.focusedRadio?e.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&t===Or,this.checkFocusedRadio=()=>{null===this.focusedRadio||this.focusedRadio.readOnly||this.focusedRadio.checked||(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=e=>{const t=this.slottedRadioButtons;let o=0;if(o=this.focusedRadio?t.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(o,t,e.key))this.moveRightOffGroup();else for(o===t.length&&(o=0);o<t.length&&t.length>1;){if(!t[o].disabled){this.moveToRadioByIndex(t,o);break}if(this.focusedRadio&&o===t.indexOf(this.focusedRadio))break;if(o+1>=t.length){if(this.isInsideToolbar)break;o=0}else o+=1}},this.moveLeft=e=>{const t=this.slottedRadioButtons;let o=0;if(o=this.focusedRadio?t.indexOf(this.focusedRadio)-1:0,o=o<0?t.length-1:o,this.shouldMoveOffGroupToTheLeft(t,e.key))this.moveLeftOffGroup();else for(;o>=0&&t.length>1;){if(!t[o].disabled){this.moveToRadioByIndex(t,o);break}if(this.focusedRadio&&o===t.indexOf(this.focusedRadio))break;o-1<0?o=t.length-1:o-=1}},this.keydownHandler=e=>{const t=e.key;if(t in Gr&&this.isInsideFoundationToolbar)return!0;switch(t){case Dr:this.checkFocusedRadio();break;case Ir:case Er:this.direction===ms.ltr?this.moveRight(e):this.moveLeft(e);break;case Or:case Mr:this.direction===ms.ltr?this.moveLeft(e):this.moveRight(e);break;default:return!0}}}readOnlyChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{this.readOnly?e.readOnly=!0:e.readOnly=!1}))}disabledChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{this.disabled?e.disabled=!0:e.disabled=!1}))}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{e.setAttribute("name",this.name)}))}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{e.value===this.value&&(e.checked=!0,this.selectedRadio=e)})),this.$emit("change")}slottedRadioButtonsChanged(e,t){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var e;return null!==(e=this.parentToolbar)&&void 0!==e&&e}get isInsideFoundationToolbar(){var e;return!!(null===(e=this.parentToolbar)||void 0===e?void 0:e.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=(e=>{const t=e.closest("[dir]");return null!==t&&"rtl"===t.dir?ms.rtl:ms.ltr})(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach((e=>{e.removeEventListener("change",this.radioChangeHandler)}))}setupRadioButtons(){const e=this.slottedRadioButtons.filter((e=>e.hasAttribute("checked"))),t=e?e.length:0;if(t>1){e[t-1].checked=!0}let o=!1;if(this.slottedRadioButtons.forEach((e=>{void 0!==this.name&&e.setAttribute("name",this.name),this.disabled&&(e.disabled=!0),this.readOnly&&(e.readOnly=!0),this.value&&this.value===e.value?(this.selectedRadio=e,this.focusedRadio=e,e.checked=!0,e.setAttribute("tabindex","0"),o=!0):(this.isInsideFoundationToolbar||e.setAttribute("tabindex","-1"),e.checked=!1),e.addEventListener("change",this.radioChangeHandler)})),void 0===this.value&&this.slottedRadioButtons.length>0){const e=this.slottedRadioButtons.filter((e=>e.hasAttribute("checked"))),t=null!==e?e.length:0;if(t>0&&!o){const o=e[t-1];o.checked=!0,this.focusedRadio=o,o.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}zt([At({attribute:"readonly",mode:"boolean"})],radio_group_RadioGroup.prototype,"readOnly",void 0),zt([At({attribute:"disabled",mode:"boolean"})],radio_group_RadioGroup.prototype,"disabled",void 0),zt([At],radio_group_RadioGroup.prototype,"name",void 0),zt([At],radio_group_RadioGroup.prototype,"value",void 0),zt([At],radio_group_RadioGroup.prototype,"orientation",void 0),zt([Ct],radio_group_RadioGroup.prototype,"childItems",void 0),zt([Ct],radio_group_RadioGroup.prototype,"slottedRadioButtons",void 0);const gs=class RadioGroup extends radio_group_RadioGroup{connectedCallback(){super.connectedCallback();const e=this.querySelector("label");if(e){const t="radio-group-"+Math.random().toString(16).slice(2);e.setAttribute("id",t),this.setAttribute("aria-labelledby",t)}}}.compose({baseName:"radio-group",template:(e,t)=>Xo`
    <template
        role="radiogroup"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        @keydown="${(e,t)=>e.keydownHandler(t.event)}"
        @focusout="${(e,t)=>e.focusOutHandler(t.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${e=>e.orientation===Ui?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${qr({property:"slottedRadioButtons",filter:Zr("[role=radio]")})}
            ></slot>
        </div>
    </template>
`,styles:(e,t)=>en`
	${on("flex")} :host {
		align-items: flex-start;
		margin: calc(${Sn} * 1px) 0;
		flex-direction: column;
	}
	.positioning-region {
		display: flex;
		flex-wrap: wrap;
	}
	:host([orientation='vertical']) .positioning-region {
		flex-direction: column;
	}
	:host([orientation='horizontal']) .positioning-region {
		flex-direction: row;
	}
	::slotted([slot='label']) {
		color: ${kn};
		font-size: ${In};
		margin: calc(${Sn} * 1px) 0;
	}
`});const bs=class Tag extends badge_Badge{connectedCallback(){super.connectedCallback(),this.circular&&(this.circular=!1)}}.compose({baseName:"tag",template:Qo,styles:(e,t)=>en`
	${on("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${Rn};
		font-size: ${Dn};
		line-height: ${An};
	}
	.control {
		background-color: ${Ln};
		border: calc(${wn} * 1px) solid ${Fn};
		border-radius: ${yr};
		color: ${Gn};
		padding: calc(${Sn} * 0.5px) calc(${Sn} * 1px);
		text-transform: uppercase;
	}
`});class _TextField extends FoundationElement{}class FormAssociatedTextField extends(jr(_TextField)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const vs="text";class text_field_TextField extends FormAssociatedTextField{constructor(){super(...arguments),this.type=vs}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&yt.queueUpdate((()=>{this.focus()}))}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}zt([At({attribute:"readonly",mode:"boolean"})],text_field_TextField.prototype,"readOnly",void 0),zt([At({mode:"boolean"})],text_field_TextField.prototype,"autofocus",void 0),zt([At],text_field_TextField.prototype,"placeholder",void 0),zt([At],text_field_TextField.prototype,"type",void 0),zt([At],text_field_TextField.prototype,"list",void 0),zt([At({converter:Dt})],text_field_TextField.prototype,"maxlength",void 0),zt([At({converter:Dt})],text_field_TextField.prototype,"minlength",void 0),zt([At],text_field_TextField.prototype,"pattern",void 0),zt([At({converter:Dt})],text_field_TextField.prototype,"size",void 0),zt([At({mode:"boolean"})],text_field_TextField.prototype,"spellcheck",void 0),zt([Ct],text_field_TextField.prototype,"defaultSlottedNodes",void 0);class DelegatesARIATextbox{}_r(DelegatesARIATextbox,ARIAGlobalStatesAndProperties),_r(text_field_TextField,StartEnd,DelegatesARIATextbox);class _TextArea extends FoundationElement{}class FormAssociatedTextArea extends(jr(_TextArea)){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}const ys="none";class text_area_TextArea extends FormAssociatedTextArea{constructor(){super(...arguments),this.resize=ys,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}zt([At({mode:"boolean"})],text_area_TextArea.prototype,"readOnly",void 0),zt([At],text_area_TextArea.prototype,"resize",void 0),zt([At({mode:"boolean"})],text_area_TextArea.prototype,"autofocus",void 0),zt([At({attribute:"form"})],text_area_TextArea.prototype,"formId",void 0),zt([At],text_area_TextArea.prototype,"list",void 0),zt([At({converter:Dt})],text_area_TextArea.prototype,"maxlength",void 0),zt([At({converter:Dt})],text_area_TextArea.prototype,"minlength",void 0),zt([At],text_area_TextArea.prototype,"name",void 0),zt([At],text_area_TextArea.prototype,"placeholder",void 0),zt([At({converter:Dt,mode:"fromView"})],text_area_TextArea.prototype,"cols",void 0),zt([At({converter:Dt,mode:"fromView"})],text_area_TextArea.prototype,"rows",void 0),zt([At({mode:"boolean"})],text_area_TextArea.prototype,"spellcheck",void 0),zt([Ct],text_area_TextArea.prototype,"defaultSlottedNodes",void 0),_r(text_area_TextArea,DelegatesARIATextbox);const ws=class TextArea extends text_area_TextArea{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text area")}}.compose({baseName:"text-area",template:(e,t)=>Xo`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
            ${e=>e.resize!==ys?`resize-${e.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${qr("defaultSlottedNodes")}></slot>
        </label>
        <textarea
            part="control"
            class="control"
            id="control"
            ?autofocus="${e=>e.autofocus}"
            cols="${e=>e.cols}"
            ?disabled="${e=>e.disabled}"
            form="${e=>e.form}"
            list="${e=>e.list}"
            maxlength="${e=>e.maxlength}"
            minlength="${e=>e.minlength}"
            name="${e=>e.name}"
            placeholder="${e=>e.placeholder}"
            ?readonly="${e=>e.readOnly}"
            ?required="${e=>e.required}"
            rows="${e=>e.rows}"
            ?spellcheck="${e=>e.spellcheck}"
            :value="${e=>e.value}"
            aria-atomic="${e=>e.ariaAtomic}"
            aria-busy="${e=>e.ariaBusy}"
            aria-controls="${e=>e.ariaControls}"
            aria-current="${e=>e.ariaCurrent}"
            aria-describedby="${e=>e.ariaDescribedby}"
            aria-details="${e=>e.ariaDetails}"
            aria-disabled="${e=>e.ariaDisabled}"
            aria-errormessage="${e=>e.ariaErrormessage}"
            aria-flowto="${e=>e.ariaFlowto}"
            aria-haspopup="${e=>e.ariaHaspopup}"
            aria-hidden="${e=>e.ariaHidden}"
            aria-invalid="${e=>e.ariaInvalid}"
            aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
            aria-label="${e=>e.ariaLabel}"
            aria-labelledby="${e=>e.ariaLabelledby}"
            aria-live="${e=>e.ariaLive}"
            aria-owns="${e=>e.ariaOwns}"
            aria-relevant="${e=>e.ariaRelevant}"
            aria-roledescription="${e=>e.ariaRoledescription}"
            @input="${(e,t)=>e.handleTextInput()}"
            @change="${e=>e.handleChange()}"
            ${Cr("control")}
        ></textarea>
    </template>
`,styles:(e,t)=>en`
	${on("inline-block")} :host {
		font-family: ${Rn};
		outline: none;
		user-select: none;
	}
	.control {
		box-sizing: border-box;
		position: relative;
		color: ${ur};
		background: ${hr};
		border-radius: calc(${xn} * 1px);
		border: calc(${wn} * 1px) solid ${cr};
		font: inherit;
		font-size: ${In};
		line-height: ${Mn};
		padding: calc(${Sn} * 2px + 1px);
		width: 100%;
		min-width: ${On};
		resize: none;
	}
	.control:hover:enabled {
		background: ${hr};
		border-color: ${cr};
	}
	.control:active:enabled {
		background: ${hr};
		border-color: ${Tn};
	}
	.control:hover,
	.control:${Qr},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.control::-webkit-scrollbar {
		width: ${Nn};
		height: ${$n};
	}
	.control::-webkit-scrollbar-corner {
		background: ${hr};
	}
	.control::-webkit-scrollbar-thumb {
		background: ${Pn};
	}
	.control::-webkit-scrollbar-thumb:hover {
		background: ${zn};
	}
	.control::-webkit-scrollbar-thumb:active {
		background: ${Hn};
	}
	:host(:focus-within:not([disabled])) .control {
		border-color: ${Tn};
	}
	:host([resize='both']) .control {
		resize: both;
	}
	:host([resize='horizontal']) .control {
		resize: horizontal;
	}
	:host([resize='vertical']) .control {
		resize: vertical;
	}
	.label {
		display: block;
		color: ${kn};
		cursor: pointer;
		font-size: ${In};
		line-height: ${Mn};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${ei};
	}
	:host([disabled]) {
		opacity: ${_n};
	}
	:host([disabled]) .control {
		border-color: ${cr};
	}
`,shadowOptions:{delegatesFocus:!0}});function Cs(e,t,o){return e.nodeType!==Node.TEXT_NODE||"string"==typeof e.nodeValue&&!!e.nodeValue.trim().length}const xs=class TextField extends text_field_TextField{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text field")}}.compose({baseName:"text-field",template:(e,t)=>Xo`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${qr({property:"defaultSlottedNodes",filter:Cs})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${Sr(0,t)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${e=>e.handleTextInput()}"
                @change="${e=>e.handleChange()}"
                ?autofocus="${e=>e.autofocus}"
                ?disabled="${e=>e.disabled}"
                list="${e=>e.list}"
                maxlength="${e=>e.maxlength}"
                minlength="${e=>e.minlength}"
                pattern="${e=>e.pattern}"
                placeholder="${e=>e.placeholder}"
                ?readonly="${e=>e.readOnly}"
                ?required="${e=>e.required}"
                size="${e=>e.size}"
                ?spellcheck="${e=>e.spellcheck}"
                :value="${e=>e.value}"
                type="${e=>e.type}"
                aria-atomic="${e=>e.ariaAtomic}"
                aria-busy="${e=>e.ariaBusy}"
                aria-controls="${e=>e.ariaControls}"
                aria-current="${e=>e.ariaCurrent}"
                aria-describedby="${e=>e.ariaDescribedby}"
                aria-details="${e=>e.ariaDetails}"
                aria-disabled="${e=>e.ariaDisabled}"
                aria-errormessage="${e=>e.ariaErrormessage}"
                aria-flowto="${e=>e.ariaFlowto}"
                aria-haspopup="${e=>e.ariaHaspopup}"
                aria-hidden="${e=>e.ariaHidden}"
                aria-invalid="${e=>e.ariaInvalid}"
                aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
                aria-label="${e=>e.ariaLabel}"
                aria-labelledby="${e=>e.ariaLabelledby}"
                aria-live="${e=>e.ariaLive}"
                aria-owns="${e=>e.ariaOwns}"
                aria-relevant="${e=>e.ariaRelevant}"
                aria-roledescription="${e=>e.ariaRoledescription}"
                ${Cr("control")}
            />
            ${xr(0,t)}
        </div>
    </template>
`,styles:(e,t)=>en`
	${on("inline-block")} :host {
		font-family: ${Rn};
		outline: none;
		user-select: none;
	}
	.root {
		box-sizing: border-box;
		position: relative;
		display: flex;
		flex-direction: row;
		color: ${ur};
		background: ${hr};
		border-radius: calc(${xn} * 1px);
		border: calc(${wn} * 1px) solid ${cr};
		height: calc(${En} * 1px);
		min-width: ${On};
	}
	.control {
		-webkit-appearance: none;
		font: inherit;
		background: transparent;
		border: 0;
		color: inherit;
		height: calc(100% - (${Sn} * 1px));
		width: 100%;
		margin-top: auto;
		margin-bottom: auto;
		border: none;
		padding: 0 calc(${Sn} * 2px + 1px);
		font-size: ${In};
		line-height: ${Mn};
	}
	.control:hover,
	.control:${Qr},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.label {
		display: block;
		color: ${kn};
		cursor: pointer;
		font-size: ${In};
		line-height: ${Mn};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.start,
	.end {
		display: flex;
		margin: auto;
		fill: currentcolor;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${Sn} * 4px);
		height: calc(${Sn} * 4px);
	}
	.start {
		margin-inline-start: calc(${Sn} * 2px);
	}
	.end {
		margin-inline-end: calc(${Sn} * 2px);
	}
	:host(:hover:not([disabled])) .root {
		background: ${hr};
		border-color: ${cr};
	}
	:host(:active:not([disabled])) .root {
		background: ${hr};
		border-color: ${Tn};
	}
	:host(:focus-within:not([disabled])) .root {
		border-color: ${Tn};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${ei};
	}
	:host([disabled]) {
		opacity: ${_n};
	}
	:host([disabled]) .control {
		border-color: ${cr};
	}
`,shadowOptions:{delegatesFocus:!0}}),Ss=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),_s=new Map,Ts=new Map;let Rs=null;const ks=Xt.createInterface((e=>e.cachedCallback((e=>(null===Rs&&(Rs=new DefaultDesignSystem(null,e)),Rs))))),Es=Object.freeze({tagFor:e=>Ts.get(e),responsibleFor(e){const t=e.$$designSystem$$;if(t)return t;return Xt.findResponsibleContainer(e).get(ks)},getOrCreate(e){if(!e)return null===Rs&&(Rs=Xt.getOrCreateDOMContainer().get(ks)),Rs;const t=e.$$designSystem$$;if(t)return t;const o=Xt.getOrCreateDOMContainer(e);if(o.has(ks,!1))return o.get(ks);{const t=new DefaultDesignSystem(e,o);return o.register(mo.instance(ks,t)),t}}});class DefaultDesignSystem{constructor(e,t){this.owner=e,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>Ss.definitionCallbackOnly,null!==e&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){const t=this.container,o=[],n=this.disambiguate,r=this.shadowRootMode,c={elementPrefix:this.prefix,tryDefineElement(e,c,d){const h=function(e,t,o){return"string"==typeof e?{name:e,type:t,callback:o}:e}(e,c,d),{name:u,callback:p,baseClass:m}=h;let{type:g}=h,v=u,y=_s.get(v),w=!0;for(;y;){const e=n(v,g,y);switch(e){case Ss.ignoreDuplicate:return;case Ss.definitionCallbackOnly:w=!1,y=void 0;break;default:v=e,y=_s.get(v)}}w&&((Ts.has(g)||g===FoundationElement)&&(g=class extends g{}),_s.set(v,g),Ts.set(g,v),m&&Ts.set(m,v)),o.push(new ElementDefinitionEntry(t,v,g,r,p,w))}};this.designTokensInitialized||(this.designTokensInitialized=!0,null!==this.designTokenRoot&&pn.registerRoot(this.designTokenRoot)),t.registerWithContext(c,...e);for(const e of o)e.callback(e),e.willDefine&&null!==e.definition&&e.definition.define();return this}}class ElementDefinitionEntry{constructor(e,t,o,n,r,c){this.container=e,this.name=t,this.type=o,this.shadowRootMode=n,this.callback=r,this.willDefine=c,this.definition=null}definePresentation(e){To.define(this.name,e,this.container)}defineElement(e){this.definition=new FASTElementDefinition(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return Es.tagFor(e)}}const{wrap:Os}=function(e,t){let o=[];const n={register(e,...t){o.forEach((o=>o.register(e,...t))),o=[]}};return{wrap:function(n,r={}){var c,d;n instanceof FoundationElementRegistry&&(t?t.register(n):o.push(n),n=n.type);const h=Io.get(n);if(h){const e=h.get(null!==(c=r.name)&&void 0!==c?c:Oo);if(e)return e}class ReactComponent extends e.Component{constructor(){super(...arguments),this._element=null}_updateElement(e){const t=this._element;if(null===t)return;const o=this.props,n=e||Eo,c=Mo(r);for(const e in this._elementProps){const r=o[e],d=c[e];if(void 0===d)t[e]=r;else{const o=n[e];if(r===o)continue;void 0!==o&&t.removeEventListener(d,o),void 0!==r&&t.addEventListener(d,r)}}}componentDidMount(){this._updateElement()}componentDidUpdate(e){this._updateElement(e)}render(){const t=this.props.__forwardedRef;void 0!==this._ref&&this._userRef===t||(this._ref=e=>{null===this._element&&(this._element=e),null!==t&&function(e,t){"function"==typeof e?e(t):e.current=t}(t,e),this._userRef=t});const o={ref:this._ref},c=this._elementProps={},d=function(e,t){if(!t.keys)if(t.properties)t.keys=new Set(t.properties.concat(Object.keys(Mo(t))));else{const o=new Set(Object.keys(Mo(t))),n=wt.getAccessors(e.prototype);if(n.length>0)for(const e of n)Do(0,0,e.name)&&o.add(e.name);else for(const t in e.prototype)!(t in HTMLElement.prototype)&&Do(0,0,t)&&o.add(t);t.keys=o}return t.keys}(n,r),h=this.props;for(const e in h){const t=h[e];d.has(e)?c[e]=t:o["className"===e?"class":e]=t}return e.createElement(function(e,t){if(!t.name){const o=FASTElementDefinition.forType(e);if(!o)throw new Error("React wrappers must wrap a FASTElement or be configured with a name.");t.name=o.name}return t.name}(n,r),o)}}const u=e.forwardRef(((t,o)=>e.createElement(ReactComponent,Object.assign(Object.assign({},t),{__forwardedRef:o}),null==t?void 0:t.children)));return Io.has(n)||Io.set(n,new Map),Io.get(n).set(null!==(d=r.name)&&void 0!==d?d:Oo,u),u},registry:n}}(e,Es.getOrCreate(Is).withPrefix("vscode"));var Is;Os(wr(),{name:"vscode-badge"}),Os(ii(),{name:"vscode-button"});const Ms=Os(si(),{name:"vscode-checkbox",events:{onChange:"change"}}),Ds=(Os(Gi(),{name:"vscode-data-grid"}),Os(Wi(),{name:"vscode-data-grid-cell"}),Os(Bi(),{name:"vscode-data-grid-row"}),Os(Vi(),{name:"vscode-divider"}),Os(ns(),{name:"vscode-dropdown",events:{onChange:"change"}}),Os(rs(),{name:"vscode-link"}),Os(ss(),{name:"vscode-option"}),Os(ls(),{name:"vscode-panels",events:{onChange:"change"}}),Os(cs(),{name:"vscode-panel-tab"}),Os(hs(),{name:"vscode-panel-view"}),Os(us(),{name:"vscode-progress-ring"}),Os(ps(),{name:"vscode-radio",events:{onChange:"change"}})),As=Os(gs(),{name:"vscode-radio-group",events:{onChange:"change"}}),Ns=(Os(bs(),{name:"vscode-tag"}),Os(ws(),{name:"vscode-text-area",events:{onChange:"change",onInput:"input"}}),Os(xs(),{name:"vscode-text-field",events:{onChange:"change",onInput:"input"}}),navigator?.userAgentData?.platform),$s=navigator.userAgent,Ps="Linux"===Ns||$s.indexOf("Linux")>=0,zs="macOS"===Ns||$s.indexOf("Macintosh")>=0,Hs="Windows"===Ns||$s.indexOf("Windows")>=0;function Ls(e,t,o){return`command:${e}?${encodeURIComponent(JSON.stringify({webview:t,webviewInstance:o}))}`}const Gs=new Set(["children","localName","ref","style","className"]),Fs=new WeakMap,Bs=(e,t,o,n,r)=>{const c=r?.[t];void 0===c||o===n?(e[t]=o,null==o&&t in HTMLElement.prototype&&e.removeAttribute(t)):((e,t,o)=>{let n=Fs.get(e);void 0===n&&Fs.set(e,n=new Map);let r=n.get(t);void 0!==o?void 0===r?(n.set(t,r={handleEvent:o}),e.addEventListener(t,r)):r.handleEvent=o:void 0!==r&&(n.delete(t),e.removeEventListener(t,r))})(e,c,o)};function Ws(e,o){return(({react:e,tagName:t,elementClass:o,events:n,displayName:r})=>{const c=new Set(Object.keys(n??{})),d=e.forwardRef(((r,d)=>{const h=e.useRef(null),u=e.useRef(null),p={},m={};for(const[e,t]of Object.entries(r))Gs.has(e)?p["className"===e?"class":e]=t:c.has(e)||e in o.prototype?m[e]=t:p[e]=t;return e.useLayoutEffect((()=>{if(null!==u.current){for(const e in m)Bs(u.current,e,r[e],h.current?h.current[e]:void 0,n);h.current=r}})),e.useLayoutEffect((()=>{u.current?.removeAttribute("defer-hydration")}),[]),p.suppressHydrationWarning=!0,e.createElement(t,{...p,ref:e.useCallback((e=>{u.current=e,"function"==typeof d?d(e):null!==d&&(d.current=e)}),[d])})}));return d.displayName=r??o.name,d})({...o,elementClass:e,react:t()})}const Us=en`
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
`;var js=Object.defineProperty,Vs=Object.getOwnPropertyDescriptor;const Zs=Xo`
	<template role="listbox">
		<slot></slot>
	</template>
`,qs=en`
	${Us}

	:host {
		width: max-content;
		background-color: var(--vscode-menu-background);
		border: 1px solid var(--vscode-menu-border);
	}
`;let Ks=class extends Bt{};Ks=((e,t,o,n)=>{for(var r,c=n>1?void 0:n?Vs(t,o):t,d=e.length-1;d>=0;d--)(r=e[d])&&(c=(n?r(t,o,c):r(c))||c);return n&&c&&js(t,o,c),c})([Wt({name:"menu-list",template:Zs,styles:qs})],Ks);var Ys=Object.defineProperty,Xs=Object.getOwnPropertyDescriptor,Qs=(e,t,o,n)=>{for(var r,c=n>1?void 0:n?Xs(t,o):t,d=e.length-1;d>=0;d--)(r=e[d])&&(c=(n?r(t,o,c):r(c))||c);return n&&c&&Ys(t,o,c),c};const Js=Xo`
	<template tabindex="${e=>e.isInteractive?"0":null}" ?disabled="${e=>e.disabled}">
		<slot></slot>
	</template>
`,ea=en`
	${Us}

	:host {
		display: block;
		font-family: inherit;
		border: none;
		padding: 0 0.6rem;
		cursor: pointer;
		color: var(--vscode-menu-foreground);
		background-color: var(--vscode-menu-background);
		text-align: left;
		height: auto;
		line-height: 2.2rem;
	}

	:host([role='option']:hover) {
		color: var(--vscode-menu-selectionForeground);
		background-color: var(--vscode-menu-selectionBackground);
	}

	:host([disabled]) {
		pointer-events: none;
		cursor: default;
		opacity: 0.5;
	}

	:host([aria-selected='true']) {
		opacity: 1;
		color: var(--vscode-menu-selectionForeground);
		background-color: var(--vscode-menu-background);
	}
`;let ta=class extends Bt{constructor(){super(...arguments),this.disabled=!1,this.role="option"}get isInteractive(){return!this.disabled&&"option"===this.role}};Qs([At({mode:"boolean"})],ta.prototype,"disabled",2),Qs([At],ta.prototype,"role",2),Qs([xt],ta.prototype,"isInteractive",1),ta=Qs([Wt({name:"menu-item",template:Js,styles:ea})],ta);var oa=Object.defineProperty,na=Object.getOwnPropertyDescriptor;const ra=Xo`
	<template>
		<slot></slot>
	</template>
`,ia=en`
	${Us}

	:host {
		display: block;
		text-transform: uppercase;
		font-size: 0.84em;
		line-height: 2.2rem;
		padding-left: 0.6rem;
		padding-right: 0.6rem;
		margin: 0px;
		color: var(--vscode-menu-foreground);
		opacity: 0.6;
		user-select: none;
	}
`;let sa=class extends Bt{};sa=((e,t,o,n)=>{for(var r,c=n>1?void 0:n?na(t,o):t,d=e.length-1;d>=0;d--)(r=e[d])&&(c=(n?r(t,o,c):r(c))||c);return n&&c&&oa(t,o,c),c})([Wt({name:"menu-label",template:ra,styles:ia})],sa);var aa=Object.defineProperty,la=Object.getOwnPropertyDescriptor;const ca=Xo``,da=en`
	${Us}

	:host {
		display: block;
		height: 0;
		margin: 0.6rem;
		border-top: 0.1rem solid var(--vscode-menu-separatorBackground);
	}
`;let ha=class extends Bt{};ha=((e,t,o,n)=>{for(var r,c=n>1?void 0:n?la(t,o):t,d=e.length-1;d>=0;d--)(r=e[d])&&(c=(n?r(t,o,c):r(c))||c);return n&&c&&aa(t,o,c),c})([Wt({name:"menu-divider",template:ca,styles:da})],ha);const ua=Ws(ha,{tagName:"menu-divider"}),pa=Ws(ta,{tagName:"menu-item"}),fa=Ws(sa,{tagName:"menu-label"}),ma=Ws(Ks,{tagName:"menu-list"});function ga(...e){return e.some((e=>(e?.length??0)>0))}function ba(e){return t=>t.nodeType===e}var va=Object.defineProperty,ya=Object.getOwnPropertyDescriptor,wa=(e,t,o,n)=>{for(var r,c=n>1?void 0:n?ya(t,o):t,d=e.length-1;d>=0;d--)(r=e[d])&&(c=(n?r(t,o,c):r(c))||c);return n&&c&&va(t,o,c),c};const Ca=Xo`
	<template role="combobox">
		<slot ${qr({property:"triggerNodes",filter:ba(Node.ELEMENT_NODE)})} name="trigger"></slot>
		<slot ${qr({property:"contentNodes",filter:ba(Node.ELEMENT_NODE)})} name="content"></slot>
	</template>
`,xa=en`
	${Us}

	:host {
		position: relative;
	}

	slot[name='content']::slotted(*)::before {
		font: normal normal normal 14px/1 codicon;
		display: inline-block;
		text-decoration: none;
		text-rendering: auto;
		text-align: center;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;

		vertical-align: middle;
		line-height: 2rem;
		letter-spacing: normal;
		content: '\\ea76';
		position: absolute;
		top: 2px;
		right: 5px;
		cursor: pointer;
		pointer-events: all;
		z-index: 10001;
	}

	slot[name='content']::slotted(*) {
		position: absolute;
		top: 100%;
		z-index: 10000;
	}

	:host([position='left']) slot[name='content']::slotted(*) {
		left: 0;
	}

	:host([position='right']) slot[name='content']::slotted(*) {
		right: 0;
	}

	:host(:not([open])) slot[name='content']::slotted(*) {
		display: none;
	}
`;let Sa=class extends Bt{constructor(){super(...arguments),this.open=!1,this.position="left",this.isTrackingOutside=!1}get triggerNode(){if(ga(this.triggerNodes))return this.triggerNodes[0]}get contentNode(){if(ga(this.contentNodes))return this.contentNodes[0]}connectedCallback(){super.connectedCallback(),this.updateToggle(),null==this._toggleHandler&&(this._toggleHandler=this.handleToggle.bind(this)),this.addEventListener("click",this._toggleHandler,!1)}disconnectedCallback(){super.disconnectedCallback(),null!=this._toggleHandler&&(this.removeEventListener("click",this._toggleHandler,!1),this._toggleHandler=void 0),this.disposeTrackOutside()}close(){this.open=!1,this.disposeTrackOutside()}handleToggle(e){e.composedPath().includes(this.triggerNode)&&(this.open=!this.open,this.updateToggle())}updateToggle(){null!=this.triggerNode&&(this.triggerNode.ariaExpanded=this.open.toString()),this.open&&(null!=this.contentNode&&window.requestAnimationFrame((()=>{this.contentNode?.focus()})),this.trackOutside())}handleDocumentEvent(e){if(!1===this.open)return;const t=e.composedPath();(!t.includes(this)||"click"===e.type&&'""'===window.getComputedStyle(t[0],"::before").content)&&this.close()}trackOutside(){!this.isTrackingOutside&&this.open&&(this.isTrackingOutside=!0,null==this._documentEventHandler&&(this._documentEventHandler=this.handleDocumentEvent.bind(this)),document.addEventListener("click",this._documentEventHandler,!1),document.addEventListener("focusin",this._documentEventHandler,!1),null==this._webviewBlurEventHandler&&(this._webviewBlurEventHandler=()=>this.close()),window.addEventListener("webview-blur",this._webviewBlurEventHandler,!1))}disposeTrackOutside(){this.isTrackingOutside&&(this.isTrackingOutside=!1,null!=this._documentEventHandler&&(document.removeEventListener("click",this._documentEventHandler,!1),window.removeEventListener("focusin",this._documentEventHandler,!1),this._documentEventHandler=void 0),null!=this._webviewBlurEventHandler&&(window.removeEventListener("webview-blur",this._webviewBlurEventHandler,!1),this._webviewBlurEventHandler=void 0))}};wa([At({mode:"boolean"})],Sa.prototype,"open",2),wa([At()],Sa.prototype,"position",2),wa([Ct],Sa.prototype,"triggerNodes",2),wa([Ct],Sa.prototype,"contentNodes",2),wa([xt],Sa.prototype,"triggerNode",1),wa([xt],Sa.prototype,"contentNode",1),Sa=wa([Wt({name:"pop-menu",template:Ca,styles:xa})],Sa);const _a=Ws(Sa,{tagName:"pop-menu"});var Ta=Object.defineProperty,Ra=Object.getOwnPropertyDescriptor,ka=(e,t,o,n)=>{for(var r,c=n>1?void 0:n?Ra(t,o):t,d=e.length-1;d>=0;d--)(r=e[d])&&(c=(n?r(t,o,c):r(c))||c);return n&&c&&Ta(t,o,c),c};const Ea=Xo`
	<template>
		<div class="top" ?hidden="${e=>!e.hasTopNodes}">
			<slot ${qr("typeNodes")} name="type"></slot>
			<slot ${qr("actionsNodes")} name="actions"></slot>
		</div>
		<div class="heading" ?hidden="${e=>!e.hasHeadingNodes}">
			<slot ${qr("headingNodes")} name="heading"></slot>
		</div>
		<div class="content"><slot></slot></div>
		${os((e=>e.caret),Xo`<span class="caret"></span>`)}
	</template>
`,Oa=en`
	${Us}

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
`;let Ia=class extends Bt{constructor(){super(...arguments),this.open=!1,this.caret=!0}get hasTopNodes(){return ga(this.typeNodes,this.actionsNodes)}get hasHeadingNodes(){return ga(this.headingNodes)}};ka([At({mode:"boolean"})],Ia.prototype,"open",2),ka([At({mode:"boolean"})],Ia.prototype,"caret",2),ka([At],Ia.prototype,"placement",2),ka([Ct],Ia.prototype,"typeNodes",2),ka([Ct],Ia.prototype,"actionsNodes",2),ka([Ct],Ia.prototype,"headingNodes",2),ka([xt],Ia.prototype,"hasTopNodes",1),ka([xt],Ia.prototype,"hasHeadingNodes",1),Ia=ka([Wt({name:"pop-over",template:Ea,styles:Oa})],Ia);const Ma=Ws(Ia,{tagName:"pop-over"}),Da=globalThis,Aa=Da.ShadowRoot&&(void 0===Da.ShadyCSS||Da.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Na=Symbol(),$a=new WeakMap;class css_tag_n{constructor(e,t,o){if(this._$cssResult$=!0,o!==Na)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Aa&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=$a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&$a.set(t,e))}return e}toString(){return this.cssText}}const Pa=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,o,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1]),e[0]);return new css_tag_n(o,e,Na)},za=Aa?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new css_tag_n("string"==typeof e?e:e+"",void 0,Na))(t)})(e):e,{is:Ha,defineProperty:La,getOwnPropertyDescriptor:Ga,getOwnPropertyNames:Fa,getOwnPropertySymbols:Ba,getPrototypeOf:Wa}=Object,Ua=globalThis,ja=Ua.trustedTypes,Va=ja?ja.emptyScript:"",Za=Ua.reactiveElementPolyfillSupport,qa=(e,t)=>e,Ka={toAttribute(e,t){switch(t){case Boolean:e=e?Va:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},Ya=(e,t)=>!Ha(e,t),Xa={attribute:!0,type:String,converter:Ka,reflect:!1,hasChanged:Ya};Symbol.metadata??=Symbol("metadata"),Ua.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Xa){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),n=this.getPropertyDescriptor(e,o,t);void 0!==n&&La(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){const{get:n,set:r}=Ga(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return n?.call(this)},set(t){const c=n?.call(this);r.call(this,t),this.requestUpdate(e,c,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Xa}static _$Ei(){if(this.hasOwnProperty(qa("elementProperties")))return;const e=Wa(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(qa("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(qa("properties"))){const e=this.properties,t=[...Fa(e),...Ba(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(za(e))}else void 0!==e&&t.push(za(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$E_??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$E_?.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(Aa)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const o of t){const t=document.createElement("style"),n=Da.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=o.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$E_?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t){const o=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,o);if(void 0!==n&&!0===o.reflect){const r=(void 0!==o.converter?.toAttribute?o.converter:Ka).toAttribute(t,o.type);this._$Em=e,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(e,t){const o=this.constructor,n=o._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=o.getPropertyOptions(n),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:Ka;this._$Em=n,this[n]=r.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o,n=!1,r){if(void 0!==e){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??Ya)(n?r:this[e],t))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$E_?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$E_?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EO(e,this[e]))),this._$ET()}updated(e){}firstUpdated(e){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[qa("elementProperties")]=new Map,b[qa("finalized")]=new Map,Za?.({ReactiveElement:b}),(Ua.reactiveElementVersions??=[]).push("2.0.2");const Qa=globalThis,Ja=Qa.trustedTypes,el=Ja?Ja.createPolicy("lit-html",{createHTML:e=>e}):void 0,tl="$lit$",ol=`lit$${(Math.random()+"").slice(9)}$`,nl="?"+ol,rl=`<${nl}>`,il=document,sl=()=>il.createComment(""),al=e=>null===e||"object"!=typeof e&&"function"!=typeof e,ll=Array.isArray,cl=e=>ll(e)||"function"==typeof e?.[Symbol.iterator],dl="[ \t\n\f\r]",hl=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ul=/-->/g,pl=/>/g,fl=RegExp(`>|${dl}(?:([^\\s"'>=/]+)(${dl}*=${dl}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),ml=/'/g,gl=/"/g,bl=/^(?:script|style|textarea|title)$/i,vl=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),yl=vl(1),wl=(vl(2),Symbol.for("lit-noChange")),Cl=Symbol.for("lit-nothing"),xl=new WeakMap,Sl=il.createTreeWalker(il,129);function _l(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==el?el.createHTML(t):t}const Tl=(e,t)=>{const o=e.length-1,n=[];let r,c=2===t?"<svg>":"",d=hl;for(let t=0;t<o;t++){const o=e[t];let h,u,p=-1,m=0;for(;m<o.length&&(d.lastIndex=m,u=d.exec(o),null!==u);)m=d.lastIndex,d===hl?"!--"===u[1]?d=ul:void 0!==u[1]?d=pl:void 0!==u[2]?(bl.test(u[2])&&(r=RegExp("</"+u[2],"g")),d=fl):void 0!==u[3]&&(d=fl):d===fl?">"===u[0]?(d=r??hl,p=-1):void 0===u[1]?p=-2:(p=d.lastIndex-u[2].length,h=u[1],d=void 0===u[3]?fl:'"'===u[3]?gl:ml):d===gl||d===ml?d=fl:d===ul||d===pl?d=hl:(d=fl,r=void 0);const g=d===fl&&e[t+1].startsWith("/>")?" ":"";c+=d===hl?o+rl:p>=0?(n.push(h),o.slice(0,p)+tl+o.slice(p)+ol+g):o+ol+(-2===p?t:g)}return[_l(e,c+(e[o]||"<?>")+(2===t?"</svg>":"")),n]};class V{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let r=0,c=0;const d=e.length-1,h=this.parts,[u,p]=Tl(e,t);if(this.el=V.createElement(u,o),Sl.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=Sl.nextNode())&&h.length<d;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(tl)){const t=p[c++],o=n.getAttribute(e).split(ol),d=/([.?@])?(.*)/.exec(t);h.push({type:1,index:r,name:d[2],strings:o,ctor:"."===d[1]?k:"?"===d[1]?H:"@"===d[1]?I:R}),n.removeAttribute(e)}else e.startsWith(ol)&&(h.push({type:6,index:r}),n.removeAttribute(e));if(bl.test(n.tagName)){const e=n.textContent.split(ol),t=e.length-1;if(t>0){n.textContent=Ja?Ja.emptyScript:"";for(let o=0;o<t;o++)n.append(e[o],sl()),Sl.nextNode(),h.push({type:2,index:++r});n.append(e[t],sl())}}}else if(8===n.nodeType)if(n.data===nl)h.push({type:2,index:r});else{let e=-1;for(;-1!==(e=n.data.indexOf(ol,e+1));)h.push({type:7,index:r}),e+=ol.length-1}r++}}static createElement(e,t){const o=il.createElement("template");return o.innerHTML=e,o}}function Rl(e,t,o=e,n){if(t===wl)return t;let r=void 0!==n?o._$Co?.[n]:o._$Cl;const c=al(t)?void 0:t._$litDirective$;return r?.constructor!==c&&(r?._$AO?.(!1),void 0===c?r=void 0:(r=new c(e),r._$AT(e,o,n)),void 0!==n?(o._$Co??=[])[n]=r:o._$Cl=r),void 0!==r&&(t=Rl(e,r._$AS(e,t.values),r,n)),t}class lit_html_S{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,n=(e?.creationScope??il).importNode(t,!0);Sl.currentNode=n;let r=Sl.nextNode(),c=0,d=0,h=o[0];for(;void 0!==h;){if(c===h.index){let t;2===h.type?t=new M(r,r.nextSibling,this,e):1===h.type?t=new h.ctor(r,h.name,h.strings,this,e):6===h.type&&(t=new L(r,this,e)),this._$AV.push(t),h=o[++d]}c!==h?.index&&(r=Sl.nextNode(),c++)}return Sl.currentNode=il,n}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,n){this.type=2,this._$AH=Cl,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Rl(this,e,t),al(e)?e===Cl||null==e||""===e?(this._$AH!==Cl&&this._$AR(),this._$AH=Cl):e!==this._$AH&&e!==wl&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):cl(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Cl&&al(this._$AH)?this._$AA.nextSibling.data=e:this.$(il.createTextNode(e)),this._$AH=e}g(e){const{values:t,_$litType$:o}=e,n="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=V.createElement(_l(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new lit_html_S(n,this),o=e.u(this.options);e.p(t),this.$(o),this._$AH=e}}_$AC(e){let t=xl.get(e.strings);return void 0===t&&xl.set(e.strings,t=new V(e)),t}T(e){ll(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,n=0;for(const r of e)n===t.length?t.push(o=new M(this.k(sl()),this.k(sl()),this,this.options)):o=t[n],o._$AI(r),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,n,r){this.type=1,this._$AH=Cl,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Cl}_$AI(e,t=this,o,n){const r=this.strings;let c=!1;if(void 0===r)e=Rl(this,e,t,0),c=!al(e)||e!==this._$AH&&e!==wl,c&&(this._$AH=e);else{const n=e;let d,h;for(e=r[0],d=0;d<r.length-1;d++)h=Rl(this,n[o+d],t,d),h===wl&&(h=this._$AH[d]),c||=!al(h)||h!==this._$AH[d],h===Cl?e=Cl:e!==Cl&&(e+=(h??"")+r[d+1]),this._$AH[d]=h}c&&!n&&this.O(e)}O(e){e===Cl?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===Cl?void 0:e}}class H extends R{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==Cl)}}class I extends R{constructor(e,t,o,n,r){super(e,t,o,n,r),this.type=5}_$AI(e,t=this){if((e=Rl(this,e,t,0)??Cl)===wl)return;const o=this._$AH,n=e===Cl&&o!==Cl||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==Cl&&(o===Cl||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class L{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Rl(this,e)}}const kl=Qa.litHtmlPolyfillSupport;kl?.(V,M),(Qa.litHtmlVersions??=[]).push("3.1.0");class lit_element_s extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const n=o?.renderBefore??t;let r=n._$litPart$;if(void 0===r){const e=o?.renderBefore??null;n._$litPart$=r=new M(t.insertBefore(sl(),e),e,void 0,o??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return wl}}lit_element_s._$litElement$=!0,lit_element_s.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lit_element_s});const El=globalThis.litElementPolyfillSupport;El?.({LitElement:lit_element_s});(globalThis.litElementVersions??=[]).push("4.0.2");const Ol=e=>(t,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},Il={attribute:!0,type:String,converter:Ka,reflect:!1,hasChanged:Ya},Ml=(e=Il,t,o)=>{const{kind:n,metadata:r}=o;let c=globalThis.litPropertyMetadata.get(r);if(void 0===c&&globalThis.litPropertyMetadata.set(r,c=new Map),c.set(o.name,e),"accessor"===n){const{name:n}=o;return{set(o){const r=t.get.call(this);t.set.call(this,o),this.requestUpdate(n,r,e)},init(t){return void 0!==t&&this.C(n,void 0,e),t}}}if("setter"===n){const{name:n}=o;return function(o){const r=this[n];t.call(this,o),this.requestUpdate(n,r,e)}}throw Error("Unsupported decorator location: "+n)};function Dl(e){return(t,o)=>"object"==typeof o?Ml(e,t,o):((e,t,o)=>{const n=t.hasOwnProperty(o);return t.constructor.createProperty(o,n?{...e,wrapped:!0}:e),n?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}const Al=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,Nl=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,$l=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let Pl;const zl=new Map;let Hl,Ll,Gl;const Fl=new Map;function Bl(e,t){const o=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,n,r,c]of $l){const d=Math.abs(o);if(d>=n||1e3===n){if(t){if(null==Pl&&(null!=Gl?Pl=Gl.resolvedOptions().locale:null!=Ll?Pl=Ll.resolvedOptions().locale:(Gl=new Intl.RelativeTimeFormat(Hl,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),Pl=Gl.resolvedOptions().locale)),"en"===Pl||Pl?.startsWith("en-")){return`${Math.round(d/r)}${c}`}return null==Gl&&(Gl=new Intl.RelativeTimeFormat(Hl,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),Gl.format(Math.round(o/r),e)}return null==Ll&&(Ll=new Intl.RelativeTimeFormat(Hl,{localeMatcher:"best fit",numeric:"auto",style:"long"})),Ll.format(Math.round(o/r),e)}}return""}function Wl(e,t,o,n=!0){const r=`${o??""}:${t=t??void 0}`;let c=zl.get(r);if(null==c){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=Nl.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}const o={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll(Al))if(null!=t)for(const[e,n]of Object.entries(t))if(null!=n)switch(e){case"year":o.year=4===n.length?"numeric":"2-digit";break;case"month":switch(n.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":o.day="DD"===n?"2-digit":"numeric";break;case"weekday":switch(n.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===n.length?"2-digit":"numeric",o.hour12="hh"===n||"h"===n;break;case"minute":o.minute=2===n.length?"2-digit":"numeric";break;case"second":o.second=2===n.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===n.length?"long":"short"}return o}(t);let d;d=null==o?Hl:"system"===o?void 0:[o],c=new Intl.DateTimeFormat(d,e),n&&zl.set(r,c)}if(null==t||Nl.test(t))return c.format(e);function d(e){const t=`${o??""}:time:${e}`;let r=zl.get(t);if(null==r){const c={localeMatcher:"best fit",timeStyle:e};let d;d=null==o?Hl:"system"===o?void 0:[o],r=new Intl.DateTimeFormat(d,c),n&&zl.set(t,r)}return r}const h=c.formatToParts(e);return t.replace(Al,((t,o,n,r,c,u,p,m,g,v,y,w,x,S,_)=>{if(null!=o)return o.substring(1,o.length-1);for(const[t,o]of Object.entries(_)){if(null==o)continue;const n=h.find((e=>e.type===t));if("Do"===o&&"day"===n?.type)return jl(Number(n.value));if("a"===o&&"dayPeriod"===n?.type){const t=d("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return` ${(t??n)?.value??""}`}return n?.value??""}return""}))}const Ul=["th","st","nd","rd"];function jl(e){const t=e%100;return`${e}${Ul[(t-20)%10]??Ul[t]??Ul[0]}`}function Vl(e,t,o){null==t&&(t="decimal");const n=`${o??""}:${t}`;let r=Fl.get(n);if(null==r){const e={localeMatcher:"best fit",style:t};let c;c=null==o?Hl:"system"===o?void 0:[o],r=new Intl.NumberFormat(c,e),Fl.set(n,r)}return r.format(e)}var Zl=(e=>(e[e.VerificationRequired=-1]="VerificationRequired",e[e.Free=0]="Free",e[e.FreeInPreviewTrial=1]="FreeInPreviewTrial",e[e.FreePreviewTrialExpired=2]="FreePreviewTrialExpired",e[e.FreePlusInTrial=3]="FreePlusInTrial",e[e.FreePlusTrialExpired=4]="FreePlusTrialExpired",e[e.Paid=5]="Paid",e))(Zl||{});function ql(e){switch(e){case"free+":return"GitKraken Free";case"pro":return"GitKraken Pro";case"teams":return"GitKraken Teams";case"enterprise":return"GitKraken Enterprise";default:return"GitKraken"}}function Kl(e,t){return Yl(e.plan.effective.expiresOn,t)}function Yl(e,t){return null!=e?function(e,t,o){const n=("number"==typeof t?t:t.getTime())-("number"==typeof e?e:e.getTime());switch(o){case"days":return Math.floor(n/864e5);case"hours":return Math.floor(n/36e5);case"minutes":return Math.floor(n/6e4);case"seconds":return Math.floor(n/1e3);default:return n}}(Date.now(),new Date(e),t):void 0}function Xl(e){return null!=e&&(5===e||1===e||3===e)}function Ql(e){return null!=e&&(1===e||3===e)}const Jl=Pa`
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
`,ec=(Pa`
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
`,Pa`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`),tc=Pa`
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
`;Pa`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${ec}
	}
	a:hover {
		text-decoration: underline;
	}
`,Pa`
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
`;var oc=Object.defineProperty,nc=Object.getOwnPropertyDescriptor,rc=(e,t,o,n)=>{for(var r,c=n>1?void 0:n?nc(t,o):t,d=e.length-1;d>=0;d--)(r=e[d])&&(c=(n?r(t,o,c):r(c))||c);return n&&c&&oc(t,o,c),c};let ic=class extends lit_element_s{constructor(){super(...arguments),this.full=!1,this.disabled=!1,this.tabIndex=0}get role(){return this.href?"link":"button"}updated(e){super.updated(e),e.has("disabled")&&(this.tabIndex=this.disabled?-1:0,this.setAttribute("aria-disabled",this.disabled.toString()))}render(){const e=yl`<slot></slot>`;return null!=this.href?yl`<a href=${this.href}>${e}</a>`:e}};ic.styles=[tc,Pa`
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
				${ec}
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
		`],rc([Dl({type:Boolean,reflect:!0})],ic.prototype,"full",2),rc([Dl({type:Boolean,reflect:!0})],ic.prototype,"disabled",2),rc([Dl({reflect:!0})],ic.prototype,"density",2),rc([Dl()],ic.prototype,"href",2),rc([Dl({reflect:!0})],ic.prototype,"role",1),rc([Dl()],ic.prototype,"appearance",2),rc([Dl({type:Number,reflect:!0})],ic.prototype,"tabIndex",2),ic=rc([Ol("gl-button")],ic);var sc=Object.defineProperty,ac=Object.getOwnPropertyDescriptor,lc=(e,t,o,n)=>{for(var r,c=n>1?void 0:n?ac(t,o):t,d=e.length-1;d>=0;d--)(r=e[d])&&(c=(n?r(t,o,c):r(c))||c);return n&&c&&sc(t,o,c),c};let cc=class extends lit_element_s{render(){if(null==this.state)return void(this.hidden=!0);this.hidden=!1;const e="alert"===(this.appearance??"alert")?"alert":Cl,t=new Date("2023-12-31T07:59:00.000Z").getTime(),o=Date.now()<t;switch(this.state){case Zl.VerificationRequired:return yl`
					<p>You must verify your email before you can continue.</p>
					<gl-button appearance="${e}" href="command:gitlens.plus.resendVerification"
						>Resend verification email</gl-button
					>
					<gl-button appearance="${e}" href="command:gitlens.plus.validate"
						>Refresh verification status</gl-button
					>
				`;case Zl.Free:return yl`
					<gl-button appearance="${e}" href="command:gitlens.plus.startPreviewTrial"
						>Preview Now</gl-button
					>
					<p>
						Preview Pro for 3 days, or
						<a href="command:gitlens.plus.loginOrSignUp">sign in</a> to start a full 7-day GitKraken trial.
					</p>
					<p>✨ A trial or paid plan is required to use this on privately hosted repos.</p>
				`;case Zl.FreePreviewTrialExpired:return yl`
					<p>
						Your 3-day Pro preview has ended, start a free GitKraken trial to get an additional 7 days, or
						<a href="command:gitlens.plus.loginOrSignUp">sign in</a>.
					</p>
					<gl-button appearance="${e}" href="command:gitlens.plus.loginOrSignUp"
						>Start Free GitKraken Trial</gl-button
					>
					<p>✨ A trial or paid plan is required to use this on privately hosted repos.</p>
				`;case Zl.FreePlusTrialExpired:return yl`
					<p>
						Your GitKraken trial has ended, please upgrade to continue to use this on privately hosted
						repos.
					</p>
					${function(e,t,o){return e?t(e):o?.(e)}(o,(()=>yl`<p style="text-align: center;">
								<a
									href=${"https://www.gitkraken.com/hs23?utm_source=holiday_special&utm_medium=gitlens_banner&utm_campaign=holiday_special_2023"}
									>Holiday Special: <b>50% off first seat of Pro</b> — only $4/month!<br />
									Includes entire GitKraken suite of dev tools.</a
								>
							</p>`),(()=>yl`<p style="text-align: center;">
								Special: <b>50% off first seat of Pro</b> — only $4/month!<br />
								Includes entire GitKraken suite of dev tools.
							</p>`))}
					<gl-button appearance="${e}" href="command:gitlens.plus.purchase"
						>Upgrade to Pro</gl-button
					>
					<p>✨ A paid plan is required to use this on privately hosted repos.</p>
				`}}};cc.styles=[Jl,Pa`
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
		`],lc([Dl({type:String})],cc.prototype,"appearance",2),lc([Dl({attribute:!1,type:Number})],cc.prototype,"state",2),cc=lc([Ol("gk-feature-gate-plus-state")],cc);var dc=Object.defineProperty,hc=Object.getOwnPropertyDescriptor,uc=(e,t,o,n)=>{for(var r,c=n>1?void 0:n?hc(t,o):t,d=e.length-1;d>=0;d--)(r=e[d])&&(c=(n?r(t,o,c):r(c))||c);return n&&c&&dc(t,o,c),c};let pc=class extends lit_element_s{render(){if(!this.visible||null!=this.state&&Xl(this.state))return void(this.hidden=!0);const e=this.appearance??"editor"===(document.body.getAttribute("data-placement")??"editor")?"alert":"welcome";return this.hidden=!1,yl`
			<section>
				<slot>
					<slot name="feature" hidden=${this.state===Zl.Free?Cl:""}></slot>
				</slot>
				<gk-feature-gate-plus-state appearance=${e} .state=${this.state}></gk-feature-gate-plus-state>
			</section>
		`}};pc.styles=Pa`
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
	`,uc([Dl({reflect:!0})],pc.prototype,"appearance",2),uc([Dl({attribute:!1,type:Number})],pc.prototype,"state",2),uc([Dl({type:Boolean})],pc.prototype,"visible",2),pc=uc([Ol("gk-feature-gate")],pc);const fc=Ws(pc,{tagName:"gk-feature-gate"});var mc=Object.defineProperty,gc=Object.getOwnPropertyDescriptor,bc=(e,t,o,n)=>{for(var r,c=n>1?void 0:n?gc(t,o):t,d=e.length-1;d>=0;d--)(r=e[d])&&(c=(n?r(t,o,c):r(c))||c);return n&&c&&mc(t,o,c),c};let vc=class extends lit_element_s{constructor(){super(...arguments),this.placement="top end"}render(){const e=Xl(this.subscription?.state),t=Ql(this.subscription?.state);return yl`
			<span class="badge-container">
				<span class="badge ${e?"active":"inactive"}"
					>${t?yl`<span class="badge-trial">Trial</span>`:""}✨</span
				>
				<pop-over .placement=${this.placement} class="badge-popover">
					<span slot="heading"
						>${function(e,t){switch(e){case 4:return ql("free+");case 1:return`${ql("pro")} (Trial)`;case 3:return`${ql(t??"pro")} (Trial)`;case-1:return"GitKraken (Unverified)";case 5:return ql(t??"pro");default:return"GitKraken"}}(this.subscription?.state,this.subscription?.plan.effective.id)}${this.trialHtml}</span
					>
					${this.footnoteHtml}
				</pop-over>
			</span>
		`}get trialHtml(){if(!Ql(this.subscription?.state))return Cl;const e=Kl(this.subscription,"days")??0;return yl`<span class="badge-trial-left">${e<1?"<1 day":Be("day",e)} left</span>`}get footnoteHtml(){switch(this.subscription?.state){case Zl.VerificationRequired:case Zl.Free:case Zl.FreePreviewTrialExpired:return yl`<span class="badge-footnote"
					>✨ Requires a trial or paid plan for use on privately hosted repos.</span
				>`;case Zl.FreePlusTrialExpired:case Zl.FreeInPreviewTrial:case Zl.FreePlusInTrial:return yl`<span class="badge-footnote"
					>✨ Requires a paid plan for use on privately hosted repos.</span
				>`;case Zl.Paid:return yl`<span class="badge-footnote"
					>You have access to ✨ features on privately hosted repos and ☁️ features based on your plan.</span
				>`;default:return Cl}}};vc.styles=[tc,Pa`
			:host {
				position: relative;
			}

			:host(:focus) {
				${ec}
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
		`],bc([Dl({reflect:!0})],vc.prototype,"placement",2),bc([Dl({attribute:!1})],vc.prototype,"subscription",2),vc=bc([Ol("gk-feature-gate-badge")],vc);const yc=Ws(vc,{tagName:"gk-feature-gate-badge"}),wc={toView:function(e){return e.toString()},fromView:function(e){return parseInt(e,10)}};var Cc=Object.defineProperty,xc=Object.getOwnPropertyDescriptor,Sc=(e,t,o,n)=>{for(var r,c=n>1?void 0:n?xc(t,o):t,d=e.length-1;d>=0;d--)(r=e[d])&&(c=(n?r(t,o,c):r(c))||c);return n&&c&&Cc(t,o,c),c};let _c=class extends lit_element_s{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=16}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};_c.styles=Pa`
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
	`,Sc([Dl()],_c.prototype,"icon",2),Sc([Dl()],_c.prototype,"modifier",2),Sc([Dl({type:Number})],_c.prototype,"size",2),_c=Sc([Ol("code-icon")],_c);var Tc=Object.defineProperty,Rc=Object.getOwnPropertyDescriptor,kc=(e,t,o,n)=>{for(var r,c=n>1?void 0:n?Rc(t,o):t,d=e.length-1;d>=0;d--)(r=e[d])&&(c=(n?r(t,o,c):r(c))||c);return n&&c&&Tc(t,o,c),c};let Ec=class extends lit_element_s{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}firstUpdated(){this.setAttribute("role","progressbar")}render(){return yl`<div class="progress-bar"></div>`}};Ec.styles=Pa`
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
	`,kc([Dl({reflect:!0})],Ec.prototype,"mode",2),kc([Dl({type:Boolean})],Ec.prototype,"active",2),kc([Dl()],Ec.prototype,"position",2),Ec=kc([Ol("progress-indicator")],Ec);var Oc=Object.defineProperty,Ic=Object.getOwnPropertyDescriptor,Mc=(e,t,o,n)=>{for(var r,c=n>1?void 0:n?Ic(t,o):t,d=e.length-1;d>=0;d--)(r=e[d])&&(c=(n?r(t,o,c):r(c))||c);return n&&c&&Oc(t,o,c),c};const Dc=new Map([["=:","message:"],["message:","message:"],["@:","author:"],["author:","author:"],["#:","commit:"],["commit:","commit:"],["?:","file:"],["file:","file:"],["~:","change:"],["change:","change:"]]),Ac=Xo`
	<template role="search">
		<pop-menu ${Cr("popmenu")} style="margin-left: -0.25rem;">
			<button
				type="button"
				class="action-button"
				slot="trigger"
				aria-label="${e=>e.label}"
				title="${e=>e.label}"
			>
				<code-icon icon="search" aria-hidden="true"></code-icon>
				<code-icon class="action-button__more" icon="chevron-down" aria-hidden="true"></code-icon>
			</button>
			<menu-list slot="content">
				<menu-label>Search by</menu-label>
				<menu-item role="none">
					<button class="menu-button" type="button" @click="${(e,t)=>e.handleInsertToken("@me")}">
						My changes <small>@me</small>
					</button>
				</menu-item>
				<menu-item role="none">
					<button class="menu-button" type="button" @click="${(e,t)=>e.handleInsertToken("message:")}">
						Message <small>message: or =:</small>
					</button>
				</menu-item>
				<menu-item role="none">
					<button class="menu-button" type="button" @click="${(e,t)=>e.handleInsertToken("author:")}">
						Author <small>author: or @:</small>
					</button>
				</menu-item>
				<menu-item role="none">
					<button class="menu-button" type="button" @click="${(e,t)=>e.handleInsertToken("commit:")}">
						Commit SHA <small>commit: or #:</small>
					</button>
				</menu-item>
				<menu-item role="none">
					<button class="menu-button" type="button" @click="${(e,t)=>e.handleInsertToken("file:")}">
						File <small>file: or ?:</small>
					</button>
				</menu-item>
				<menu-item role="none">
					<button class="menu-button" type="button" @click="${(e,t)=>e.handleInsertToken("change:")}">
						Change <small>change: or ~:</small>
					</button>
				</menu-item>
			</menu-list>
		</pop-menu>
		<div class="field">
			<input
				${Cr("input")}
				id="search"
				part="search"
				type="text"
				spellcheck="false"
				placeholder="${e=>e.placeholder}"
				:value="${e=>e.value}"
				aria-valid="${e=>!e.errorMessage}"
				aria-describedby="${e=>""!==e.errorMessage||null!=e.helpType?"help-text":""}"
				@input="${(e,t)=>e.handleInput(t.event)}"
				@keydown="${(e,t)=>e.handleShortcutKeys(t.event)}"
				@keyup="${(e,t)=>e.handleKeyup(t.event)}"
				@click="${(e,t)=>e.handleInputClick(t.event)}"
				@focus="${(e,t)=>e.handleFocus(t.event)}"
			/>
			<div class="message" id="help-text" aria-live="polite">
				${os((e=>""!==e.errorMessage),Xo`${e=>e.errorMessage}${e=>e.helpType?Xo`<br />`:""}`)}
				${os((e=>"message:"===e.helpType),Xo`<span
						>Message: use quotes to search for phrases, e.g. message:"Updates dependencies"</span
					>`)}
				${os((e=>"author:"===e.helpType),Xo`<span>Author: use a user's account, e.g. author:eamodio</span>`)}
				${os((e=>"commit:"===e.helpType),Xo`<span>Commit: use a full or short Commit SHA, e.g. commit:4ce3a</span>`)}
				${os((e=>"file:"===e.helpType),Xo`<span
						>File: use a filename with extension, e.g. file:package.json, or a glob pattern, e.g.
						file:*graph*
					</span>`)}
				${os((e=>"change:"===e.helpType),Xo`<span>Change: use a regex pattern, e.g. change:update&#92;(param</span>`)}
			</div>
		</div>
		<div class="controls">
			<button
				class="control${e=>e.value?"":" is-hidden"}"
				type="button"
				role="button"
				aria-label="Clear"
				title="Clear"
				@click="${(e,t)=>e.handleClear(t.event)}"
				@focus="${(e,t)=>e.handleFocus(t.event)}"
			>
				<code-icon icon="close"></code-icon>
			</button>
			<button
				class="control"
				type="button"
				role="checkbox"
				aria-label="Match All"
				title="Match All"
				aria-checked="${e=>e.matchAll}"
				@click="${(e,t)=>e.handleMatchAll(t.event)}"
				@focus="${(e,t)=>e.handleFocus(t.event)}"
			>
				<code-icon icon="whole-word"></code-icon>
			</button>
			<button
				class="control"
				type="button"
				role="checkbox"
				aria-label="Match Case${e=>e.matchCaseOverride&&!e.matchCase?" (always on without regular expressions)":""}"
				title="Match Case${e=>e.matchCaseOverride&&!e.matchCase?" (always on without regular expressions)":""}"
				?disabled="${e=>!e.matchRegex}"
				aria-checked="${e=>e.matchCaseOverride}"
				@click="${(e,t)=>e.handleMatchCase(t.event)}"
				@focus="${(e,t)=>e.handleFocus(t.event)}"
			>
				<code-icon icon="case-sensitive"></code-icon>
			</button>
			<button
				class="control"
				type="button"
				role="checkbox"
				aria-label="Use Regular Expression"
				title="Use Regular Expression"
				aria-checked="${e=>e.matchRegex}"
				@click="${(e,t)=>e.handleMatchRegex(t.event)}"
				@focus="${(e,t)=>e.handleFocus(t.event)}"
			>
				<code-icon icon="regex"></code-icon>
			</button>
		</div>
	</template>
`,Nc=en`
	* {
		box-sizing: border-box;
	}

	:host {
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		gap: 0.4rem;
		position: relative;

		flex: auto 1 1;
	}

	label {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.2rem;
		width: 3.2rem;
		height: 2.4rem;
		color: var(--vscode-input-foreground);
		cursor: pointer;
		border-radius: 3px;
	}
	label:hover {
		background-color: var(--vscode-toolbar-hoverBackground);
	}
	label:focus {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}

	.icon-small {
		font-size: 1rem;
	}

	.field {
		position: relative;
		flex: auto 1 1;
	}

	input {
		width: 100%;
		height: 2.4rem;
		background-color: var(--vscode-input-background);
		color: var(--vscode-input-foreground);
		border: 1px solid var(--vscode-input-border);
		border-radius: 0.25rem;
		padding: 0 6.6rem 1px 0.4rem;
		font-family: inherit;
		font-size: inherit;
	}
	input:focus {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}
	input::placeholder {
		color: var(--vscode-input-placeholderForeground);
	}

	input::-webkit-search-cancel-button {
		display: none;
	}

	input[aria-describedby='help-text'] {
		border-color: var(--vscode-inputValidation-infoBorder);
	}
	input[aria-describedby='help-text']:focus {
		outline-color: var(--vscode-inputValidation-infoBorder);
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}

	input[aria-valid='false'] {
		border-color: var(--vscode-inputValidation-errorBorder);
	}
	input[aria-valid='false']:focus {
		outline-color: var(--vscode-inputValidation-errorBorder);
	}

	.message {
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		padding: 0.4rem;
		transform: translateY(-0.1rem);
		z-index: 1000;
		background-color: var(--vscode-inputValidation-infoBackground);
		border: 1px solid var(--vscode-inputValidation-infoBorder);
		color: var(--vscode-input-foreground);
		font-size: 1.2rem;
		line-height: 1.4;
	}

	input[aria-valid='false'] + .message {
		background-color: var(--vscode-inputValidation-errorBackground);
		border-color: var(--vscode-inputValidation-errorBorder);
	}

	input:not([aria-describedby='help-text']:focus) + .message {
		display: none;
	}

	.controls {
		position: absolute;
		top: 0.2rem;
		right: 0.2rem;
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		gap: 0.1rem;
	}

	button {
		padding: 0;
		color: var(--vscode-input-foreground);
		border: 1px solid transparent;
		background: none;
	}
	button:focus:not([disabled]) {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}
	button:not([disabled]) {
		cursor: pointer;
	}

	.control {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 2rem;
		height: 2rem;
		text-align: center;
		border-radius: 0.25rem;
	}
	.control:hover:not([disabled]):not([aria-checked='true']) {
		background-color: var(--vscode-inputOption-hoverBackground);
	}
	.control[disabled] {
		opacity: 0.5;
	}
	.control[disabled][aria-checked='true'] {
		opacity: 0.8;
	}
	.control[aria-checked='true'] {
		background-color: var(--vscode-inputOption-activeBackground);
		color: var(--vscode-inputOption-activeForeground);
		border-color: var(--vscode-inputOption-activeBorder);
	}

	.control.is-hidden {
		display: none;
	}

	.action-button {
		position: relative;
		appearance: none;
		font-family: inherit;
		font-size: 1.2rem;
		line-height: 2.2rem;
		// background-color: var(--color-graph-actionbar-background);
		background-color: transparent;
		border: none;
		color: inherit;
		color: var(--color-foreground);
		padding: 0 0.75rem;
		cursor: pointer;
		border-radius: 3px;
		height: auto;

		display: grid;
		grid-auto-flow: column;
		grid-gap: 0.5rem;
		gap: 0.5rem;
		max-width: fit-content;
	}

	.action-button[disabled] {
		pointer-events: none;
		cursor: default;
		opacity: 1;
	}

	.action-button:hover {
		background-color: var(--color-graph-actionbar-selectedBackground);
		color: var(--color-foreground);
		text-decoration: none;
	}

	.action-button[aria-checked] {
		border: 1px solid transparent;
	}

	.action-button[aria-checked='true'] {
		background-color: var(--vscode-inputOption-activeBackground);
		color: var(--vscode-inputOption-activeForeground);
		border-color: var(--vscode-inputOption-activeBorder);
	}

	.action-button code-icon,
	.action-button .codicon[class*='codicon-'],
	.action-button .glicon[class*='glicon-'] {
		line-height: 2.2rem;
		vertical-align: bottom;
	}

	.action-button__more,
	.action-button__more.codicon[class*='codicon-'] {
		font-size: 1rem;
		margin-right: -0.25rem;
	}

	.action-button__more::before {
		margin-left: -0.25rem;
	}

	menu-item {
		padding: 0 0.5rem;
	}

	menu-list {
		padding-bottom: 0.5rem;
	}

	.menu-button {
		display: block;
		width: 100%;
		padding: 0.1rem 0.6rem 0 0.6rem;
		line-height: 2.2rem;
		text-align: left;
		color: var(--vscode-menu-foreground);
		border-radius: 3px;
	}

	.menu-button:hover {
		color: var(--vscode-menu-selectionForeground);
		background-color: var(--vscode-menu-selectionBackground);
	}
`;let $c=class extends Bt{constructor(){super(...arguments),this.errorMessage="",this.label="Search",this.placeholder="Search...",this.value="",this.matchAll=!1,this.matchCase=!1,this.matchRegex=!0,this.debouncedEmitSearch=ye(this.emitSearch.bind(this),250),this.searchHistory=[],this.searchHistoryPos=0}get matchCaseOverride(){return!this.matchRegex||this.matchCase}focus(e){this.input.focus(e)}handleFocus(e){this.popmenu.close()}handleClear(e){this.value="",this.debouncedEmitSearch()}updateHelpText(){null==this._updateHelpTextDebounced&&(this._updateHelpTextDebounced=ye(this.updateHelpTextCore.bind(this),200)),this._updateHelpTextDebounced()}updateHelpTextCore(){const e=this.input?.selectionStart,t=this.value;if(null!=e&&0!==t.length&&t.includes(":")){const o=/(?:^|[\b\s]*)((=:|message:|@:|author:|#:|commit:|\?:|file:|~:|change:)(?:"[^"]*"?|\w*))(?:$|[\b\s])/gi;let n;for(;;){if(n=o.exec(t),null==n)break;const[,r,c]=n;if(e>n.index&&e<=n.index+r.trim().length)return void(this.helpType=Dc.get(c))}}this.helpType=void 0}handleInputClick(e){this.updateHelpText()}handleInput(e){const t=e.target?.value;this.value=t,this.updateHelpText(),this.debouncedEmitSearch()}handleMatchAll(e){this.matchAll=!this.matchAll,this.debouncedEmitSearch()}handleMatchCase(e){this.matchCase=!this.matchCase,this.debouncedEmitSearch()}handleMatchRegex(e){this.matchRegex=!this.matchRegex,this.debouncedEmitSearch()}handleKeyup(e){this.updateHelpText()}handleShortcutKeys(e){if(!["Enter","ArrowUp","ArrowDown"].includes(e.key)||e.ctrlKey||e.metaKey||e.altKey)return!0;if(e.preventDefault(),"Enter"===e.key)e.shiftKey?this.$emit("previous"):this.$emit("next");else if(0!==this.searchHistory.length){const t="ArrowDown"===e.key?1:-1,o=this.searchHistoryPos+t;if(o>-1&&o<this.searchHistory.length){this.searchHistoryPos=o;const e=this.searchHistory[o];e!==this.value&&(this.value=e,this.updateHelpText(),this.debouncedEmitSearch())}}return!1}handleInsertToken(e){this.value+=`${this.value.length>0?" ":""}${e}`,window.requestAnimationFrame((()=>{this.updateHelpText(),"@me"===e&&this.debouncedEmitSearch(),this.input.focus()}))}emitSearch(){const e={query:this.value,matchAll:this.matchAll,matchCase:this.matchCase,matchRegex:this.matchRegex};this.$emit("change",e)}setCustomValidity(e=""){this.errorMessage=e}logSearch(e){const t=this.searchHistory.length-1;this.searchHistoryPos<t||this.searchHistory[t]===e.query||(this.searchHistory.push(e.query),this.searchHistoryPos=this.searchHistory.length-1)}};Mc([Ct],$c.prototype,"errorMessage",2),Mc([Ct],$c.prototype,"helpType",2),Mc([At],$c.prototype,"label",2),Mc([At],$c.prototype,"placeholder",2),Mc([At],$c.prototype,"value",2),Mc([At({mode:"boolean"})],$c.prototype,"matchAll",2),Mc([At({mode:"boolean"})],$c.prototype,"matchCase",2),Mc([At({mode:"boolean"})],$c.prototype,"matchRegex",2),Mc([xt],$c.prototype,"matchCaseOverride",1),$c=Mc([Wt({name:"search-input",template:Ac,styles:Nc})],$c);var Pc=Object.defineProperty,zc=Object.getOwnPropertyDescriptor,Hc=(e,t,o,n)=>{for(var r,c=n>1?void 0:n?zc(t,o):t,d=e.length-1;d>=0;d--)(r=e[d])&&(c=(n?r(t,o,c):r(c))||c);return n&&c&&Pc(t,o,c),c};const Lc=Xo`<template>
	<search-input
		${Cr("searchInput")}
		id="search-input"
		:errorMessage="${e=>e.errorMessage}"
		label="${e=>e.label}"
		placeholder="${e=>e.placeholder}"
		matchAll="${e=>e.matchAll}"
		matchCase="${e=>e.matchCase}"
		matchRegex="${e=>e.matchRegex}"
		value="${e=>e.value}"
		@previous="${(e,t)=>{t.event.stopImmediatePropagation(),e.navigate("previous")}}"
		@next="${(e,t)=>{t.event.stopImmediatePropagation(),e.navigate("next")}}"
	></search-input>
	<div class="search-navigation" aria-label="Search navigation">
		<span class="count${e=>e.total<1&&e.valid&&e.resultsLoaded?" error":""}">
			${os((e=>e.searching),Xo`<code-icon icon="loading" modifier="spin"></code-icon>`)}
			${os((e=>!e.searching&&e.total<1),Xo`${e=>e.formattedLabel}`)}
			${os((e=>!e.searching&&e.total>0),Xo`<span aria-current="step">${e=>e.step}</span> of
					<span
						class="${e=>e.resultsHidden?"sr-hidden":""}"
						title="${e=>e.resultsHidden?"Some search results are hidden or unable to be shown on the Commit Graph":""}"
						>${e=>e.total}${e=>e.more?"+":""}</span
					><span class="sr-only"> ${e=>e.formattedLabel}</span>`)}
		</span>
		<button
			type="button"
			class="button"
			?disabled="${e=>!e.hasResults}"
			@click="${(e,t)=>e.handlePrevious(t.event)}"
		>
			<code-icon
				icon="arrow-up"
				aria-label="Previous Match (Shift+Enter)
First Match (Shift+Click)"
				title="Previous Match (Shift+Enter)
First Match (Shift+Click)"
			></code-icon>
		</button>
		<button
			type="button"
			class="button"
			?disabled="${e=>!e.hasResults}"
			@click="${(e,t)=>e.handleNext(t.event)}"
		>
			<code-icon
				icon="arrow-down"
				aria-label="Next Match (Enter)
Last Match (Shift+Click)"
				title="Next Match (Enter)
Last Match (Shift+Click)"
			></code-icon>
		</button>
		<button
			type="button"
			class="button"
			?disabled="${e=>!e.hasResults}"
			@click="${(e,t)=>e.handleOpenInView(t.event)}"
		>
			<code-icon
				icon="link-external"
				aria-label="Show Results in Side Bar"
				title="Show Results in Side Bar"
			></code-icon>
		</button>
	</div>
	<progress-indicator active="${e=>e.searching}"></progress-indicator>
</template>`,Gc=en`
	:host {
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		gap: 0.8rem;
		color: var(--color-foreground);
		flex: auto 1 1;
		position: relative;
	}
	:host(:focus) {
		outline: 0;
	}
	progress-indicator {
		top: -4px;
	}

	.search-navigation {
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		gap: 0.3rem;
		color: var(--color-foreground);
	}
	.search-navigation:focus {
		outline: 0;
	}

	.count {
		flex: none;
		margin-right: 0.4rem;
		font-size: 1.2rem;
		min-width: 10ch;
	}

	.count.error {
		color: var(--vscode-errorForeground);
	}

	.button {
		width: 2.4rem;
		height: 2.4rem;
		padding: 0;
		color: inherit;
		border: none;
		border-radius: 3px;
		background: none;
		text-align: center;
	}
	.button[disabled] {
		color: var(--vscode-disabledForeground);
	}
	.button:focus {
		background-color: var(--vscode-toolbar-activeBackground);
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}
	.button:not([disabled]) {
		cursor: pointer;
	}
	.button:hover:not([disabled]) {
		color: var(--vscode-foreground);
		background-color: var(--vscode-toolbar-hoverBackground);
	}
	.button > code-icon[icon='arrow-up'] {
		transform: translateX(-0.1rem);
	}

	.sr-hidden {
		color: var(--vscode-errorForeground);
	}

	.sr-only {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}
`;let Fc=class extends Bt{constructor(){super(...arguments),this.errorMessage="",this.label="Search",this.placeholder='Search commits (↑↓ for history), e.g. "Updates dependencies" author:eamodio',this.value="",this.matchAll=!1,this.matchCase=!1,this.matchRegex=!0,this.total=0,this.step=0,this.more=!1,this.searching=!1,this.valid=!1,this.resultsHidden=!1,this.resultsLabel="result",this.resultsLoaded=!1}get formattedLabel(){return Be(this.resultsLabel,this.total,{zero:"No"})}get hasResults(){return this.total>1}connectedCallback(){super.connectedCallback(),this._disposable=je.on(window,"keydown",(e=>this.handleShortcutKeys(e)))}disconnectedCallback(){super.disconnectedCallback(),this._disposable?.dispose()}focus(e){this.searchInput?.focus(e)}navigate(e){const t={direction:e};this.$emit("navigate",t)}logSearch(e){this.searchInput?.logSearch(e)}handleShortcutKeys(e){if(!e.altKey)return"F3"===e.key&&!e.ctrlKey&&!e.metaKey||"g"===e.key&&e.metaKey&&!e.ctrlKey&&zs?(e.preventDefault(),e.stopImmediatePropagation(),void this.navigate(e.shiftKey?"previous":"next")):void("f"===e.key&&(e.metaKey&&!e.ctrlKey&&zs||e.ctrlKey&&!zs)&&(e.preventDefault(),e.stopImmediatePropagation(),this.focus()))}handlePrevious(e){e.stopImmediatePropagation(),this.navigate(e.shiftKey?"first":"previous")}handleNext(e){e.stopImmediatePropagation(),this.navigate(e.shiftKey?"last":"next")}handleOpenInView(e){e.stopImmediatePropagation(),this.$emit("openinview")}};Hc([Ct],Fc.prototype,"errorMessage",2),Hc([At],Fc.prototype,"label",2),Hc([At],Fc.prototype,"placeholder",2),Hc([At],Fc.prototype,"value",2),Hc([At({mode:"boolean"})],Fc.prototype,"matchAll",2),Hc([At({mode:"boolean"})],Fc.prototype,"matchCase",2),Hc([At({mode:"boolean"})],Fc.prototype,"matchRegex",2),Hc([At({converter:wc})],Fc.prototype,"total",2),Hc([At({converter:wc})],Fc.prototype,"step",2),Hc([At({mode:"boolean"})],Fc.prototype,"more",2),Hc([At({mode:"boolean"})],Fc.prototype,"searching",2),Hc([At({mode:"boolean"})],Fc.prototype,"valid",2),Hc([At({mode:"boolean"})],Fc.prototype,"resultsHidden",2),Hc([At],Fc.prototype,"resultsLabel",2),Hc([At({mode:"boolean"})],Fc.prototype,"resultsLoaded",2),Hc([xt],Fc.prototype,"formattedLabel",1),Hc([xt],Fc.prototype,"hasResults",1),Fc=Hc([Wt({name:"search-box",template:Lc,styles:Gc})],Fc);const Bc=Ws(Fc,{tagName:"search-box",events:{onChange:"change",onNavigate:"navigate",onOpenInView:"openinview"}});function*Wc(e,t){for(const o of e)yield*t(o)}function*Uc(...e){for(const t of e)if(null!=t)for(const e of t)yield e}var jc=Object.defineProperty,Vc=Object.getOwnPropertyDescriptor,Zc=(e,t,o,n)=>{for(var r,c=n>1?void 0:n?Vc(t,o):t,d=e.length-1;d>=0;d--)(r=e[d])&&(c=(n?r(t,o,c):r(c))||c);return n&&c&&jc(t,o,c),c};const qc=Xo`<template>
	<div id="spinner" ${Cr("spinner")}><code-icon icon="loading" modifier="spin"></code-icon></div>
	<div id="chart" ${Cr("chart")}></div>
	<div
		class="legend"
		title="${e=>"lines"===e.dataType?"Showing lines changed per day":"Showing commits per day"}"
	>
		<code-icon icon="${e=>"lines"===e.dataType?"request-changes":"git-commit"}"></code-icon>
	</div>
</template>`,Kc=en`
	:host {
		display: flex;
		position: relative;
		width: 100%;
		min-height: 24px;
		height: 40px;
		background: var(--color-background);
	}

	#chart {
		height: 100%;
		width: calc(100% - 1rem);
		overflow: hidden;
		position: initial !important;
	}

	#spinner {
		position: absolute;
		inset: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1;
	}

	#spinner[aria-hidden='true'] {
		display: none;
	}

	.legend {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		z-index: 1;
		opacity: 0.7;
		cursor: help;
	}

	.bb svg {
		font: 10px var(--font-family);
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}

	.bb-chart {
		width: 100%;
		height: 100%;
	}

	.bb-event-rect {
		height: calc(100% + 2px);
		transform: translateY(-5px);
	}

	/*-- Grid --*/
	.bb-grid {
		pointer-events: none;
	}

	.bb-xgrid-focus line {
		stroke: var(--color-graph-minimap-focusLine);
	}

	/*-- Line --*/
	.bb path,
	.bb line {
		fill: none;
	}

	/*-- Point --*/
	.bb-circle._expanded_ {
		fill: var(--color-background);
		opacity: 1 !important;
		fill-opacity: 1 !important;
		stroke-opacity: 1 !important;
		stroke-width: 1px;
	}

	.bb-selected-circle {
		fill: var(--color-background);
		opacity: 1 !important;
		fill-opacity: 1 !important;
		stroke-opacity: 1 !important;
		stroke-width: 2px;
	}

	/*-- Bar --*/
	.bb-bar {
		stroke-width: 0;
	}
	.bb-bar._expanded_ {
		fill-opacity: 0.75;
	}

	/*-- Regions --*/

	.bb-regions {
		pointer-events: none;
	}

	.bb-region > rect:not([x]) {
		display: none;
	}

	.bb-region.visible-area {
		fill: var(--color-graph-minimap-visibleAreaBackground);
		/* transform: translateY(-4px); */
	}
	.bb-region.visible-area > rect {
		height: 100%;
	}

	.bb-region.marker-result {
		fill: var(--color-graph-minimap-marker-highlights);
		transform: translateX(-1px);
		z-index: 10;
	}
	.bb-region.marker-result > rect {
		width: 2px;
		height: 100%;
	}

	.bb-region.marker-head {
		fill: var(--color-graph-minimap-marker-head);
		stroke: var(--color-graph-minimap-marker-head);
		transform: translateX(-1px);
	}
	.bb-region.marker-head > rect {
		width: 1px;
		height: 100%;
	}

	.bb-region.marker-head-arrow-left {
		fill: var(--color-graph-minimap-marker-head);
		stroke: var(--color-graph-minimap-marker-head);
		transform: translate(-5px, -1px) skewX(45deg);
	}
	.bb-region.marker-head-arrow-left > rect {
		width: 3px;
		height: 3px;
	}

	.bb-region.marker-head-arrow-right {
		fill: var(--color-graph-minimap-marker-head);
		stroke: var(--color-graph-minimap-marker-head);
		transform: translate(1px, -1px) skewX(-45deg);
	}
	.bb-region.marker-head-arrow-right > rect {
		width: 3px;
		height: 3px;
	}

	.bb-region.marker-upstream {
		fill: var(--color-graph-minimap-marker-upstream);
		stroke: var(--color-graph-minimap-marker-upstream);
		transform: translateX(-1px);
	}
	.bb-region.marker-upstream > rect {
		width: 1px;
		height: 100%;
	}

	.bb-region.marker-branch {
		fill: var(--color-graph-minimap-marker-local-branches);
		stroke: var(--color-graph-minimap-marker-local-branches);
		transform: translate(-2px, 35px);
	}
	.bb-region.marker-branch > rect {
		width: 3px;
		height: 3px;
	}

	.bb-region.marker-remote {
		fill: var(--color-graph-minimap-marker-remote-branches);
		stroke: var(--color-graph-minimap-marker-remote-branches);
		transform: translate(-2px, 29px);
	}
	.bb-region.marker-remote > rect {
		width: 3px;
		height: 3px;
	}

	.bb-region.marker-stash {
		fill: var(--color-graph-minimap-marker-stashes);
		stroke: var(--color-graph-minimap-marker-stashes);
		transform: translate(-2px, 35px);
	}
	.bb-region.marker-stash > rect {
		width: 3px;
		height: 3px;
	}

	.bb-region.marker-tag {
		fill: var(--color-graph-minimap-marker-tags);
		stroke: var(--color-graph-minimap-marker-tags);
		transform: translate(-2px, 29px);
	}
	.bb-region.marker-tag > rect {
		width: 3px;
		height: 3px;
	}

	/*-- Zoom region --*/
	/*
	:host-context(.vscode-dark) .bb-zoom-brush {
		fill: white;
		fill-opacity: 0.2;
	}
	:host-context(.vscode-light) .bb-zoom-brush {
		fill: black;
		fill-opacity: 0.1;
	}
	*/

	/*-- Brush --*/
	/*
	.bb-brush .extent {
		fill-opacity: 0.1;
	}
	*/

	/*-- Button --*/
	/*
	.bb-button {
		position: absolute;
		top: 2px;
		right: 0;

		color: var(--color-button-foreground);

		font-size: var(--font-size);
		font-family: var(--font-family);
	}
	.bb-button .bb-zoom-reset {
		display: inline-block;
		padding: 0.1rem 0.3rem;
		cursor: pointer;
		font-family: 'codicon';
		font-display: block;

		background-color: var(--color-button-background);

		border: 1px solid var(--color-button-background);
		border-radius: 3px;
	}
	*/

	/*-- Tooltip --*/
	.bb-tooltip-container {
		top: unset !important;
		z-index: 10;
		user-select: none;
		min-width: 300px;
	}

	.bb-tooltip {
		display: flex;
		flex-direction: column;
		padding: 0.5rem 1rem;
		background-color: var(--color-hover-background);
		color: var(--color-hover-foreground);
		border: 1px solid var(--color-hover-border);
		box-shadow: 0 2px 8px var(--vscode-widget-shadow);
		font-size: var(--font-size);
		opacity: 1;
		white-space: nowrap;
	}

	.bb-tooltip .header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 1rem;
	}

	.bb-tooltip .header--title {
		font-weight: 600;
	}

	.bb-tooltip .header--description {
		font-weight: normal;
		font-style: italic;
	}

	.bb-tooltip .changes {
		margin: 0.5rem 0;
	}

	.bb-tooltip .results {
		display: flex;
		font-size: 12px;
		gap: 0.5rem;
		flex-direction: row;
		flex-wrap: wrap;
		margin: 0.5rem 0;
		max-width: fit-content;
	}

	.bb-tooltip .results .result {
		border-radius: 3px;
		padding: 0 4px;
		background-color: var(--color-graph-minimap-tip-highlightBackground);
		border: 1px solid var(--color-graph-minimap-tip-highlightBorder);
		color: var(--color-graph-minimap-tip-highlightForeground);
	}

	.bb-tooltip .refs {
		display: flex;
		font-size: 12px;
		gap: 0.5rem;
		flex-direction: row;
		flex-wrap: wrap;
		margin: 0.5rem 0;
		max-width: fit-content;
	}
	.bb-tooltip .refs:empty {
		margin: 0;
	}

	.bb-tooltip .refs .branch {
		border-radius: 3px;
		padding: 0 4px;
		background-color: var(--color-graph-minimap-tip-branchBackground);
		border: 1px solid var(--color-graph-minimap-tip-branchBorder);
		color: var(--color-graph-minimap-tip-branchForeground);
	}
	.bb-tooltip .refs .branch.current {
		background-color: var(--color-graph-minimap-tip-headBackground);
		border: 1px solid var(--color-graph-minimap-tip-headBorder);
		color: var(--color-graph-minimap-tip-headForeground);
	}
	.bb-tooltip .refs .remote {
		border-radius: 3px;
		padding: 0 4px;
		background-color: var(--color-graph-minimap-tip-remoteBackground);
		border: 1px solid var(--color-graph-minimap-tip-remoteBorder);
		color: var(--color-graph-minimap-tip-remoteForeground);
	}
	.bb-tooltip .refs .remote.current {
		background-color: var(--color-graph-minimap-tip-upstreamBackground);
		border: 1px solid var(--color-graph-minimap-tip-upstreamBorder);
		color: var(--color-graph-minimap-tip-upstreamForeground);
	}
	.bb-tooltip .refs .stash {
		border-radius: 3px;
		padding: 0 4px;
		background-color: var(--color-graph-minimap-tip-stashBackground);
		border: 1px solid var(--color-graph-minimap-tip-stashBorder);
		color: var(--color-graph-minimap-tip-stashForeground);
	}
	.bb-tooltip .refs .tag {
		border-radius: 3px;
		padding: 0 4px;
		background-color: var(--color-graph-minimap-tip-tagBackground);
		border: 1px solid var(--color-graph-minimap-tip-tagBorder);
		color: var(--color-graph-minimap-tip-tagForeground);
	}

	.bb-event-rects {
		cursor: pointer !important;
	}
`,Yc=["marker-result","marker-head-arrow-left","marker-head-arrow-right","marker-head","marker-upstream","marker-branch","marker-stash","marker-remote","marker-tag","visible-area"];let Xc=class extends Bt{constructor(){super(...arguments),this.dataType="commits"}activeDayChanged(){this.select(this.activeDay)}dataChanged(e,t,o){this._loadTimer&&(clearTimeout(this._loadTimer),this._loadTimer=void 0),o&&(this._regions=void 0,this._markerRegions=void 0),this._loadTimer=setTimeout((()=>this.loadChart()),150)}dataTypeChanged(){this.dataChanged()}markersChanged(){this.dataChanged(void 0,void 0,!0)}searchResultsChanged(){this._chart?.regions.remove({classes:["marker-result"]}),null!=this.searchResults&&this._chart?.regions.add([...this.getSearchResultsRegions(this.searchResults)])}visibleDaysChanged(){this._chart?.regions.remove({classes:["visible-area"]}),null!=this.visibleDays&&this._chart?.regions.add(this.getVisibleAreaRegion(this.visibleDays))}connectedCallback(){super.connectedCallback(),this.dataChanged(void 0,void 0,!1)}disconnectedCallback(){super.disconnectedCallback(),this._chart?.destroy(),this._chart=void 0}getInternalChart(){try{return this._chart?.internal}catch{return}}select(e,t=!1){if(null==e)return void this.unselect();const o=this.getData(e);if(null==o)return;const n=this.getInternalChart();if(null!=n&&(n.showGridFocus([o]),!t)){const{index:e}=o;this._chart.$.main.selectAll(`.bb-shape-${e}`).each((function(t){n.toggleShape?.(this,t,e)}))}}unselect(e,t=!1){if(t)this.getInternalChart()?.hideGridFocus();else if(null!=e){const t=this.getIndex(e);if(null==t)return;this._chart?.unselect(void 0,[t])}else this._chart?.unselect()}getData(e){return e=new Date(e).setHours(0,0,0,0),this._chart?.data()[0]?.values.find((t=>("number"==typeof t.x?t.x:t.x.getTime())===e))}getIndex(e){return this.getData(e)?.index}getMarkerRegions(){if(null==this._markerRegions)if(null!=this.markers){const e=Wc(this.markers,(([e,t])=>Wc(t,(t=>t.current&&"branch"===t.type?[{axis:"x",start:e,end:e,class:"marker-head"},{axis:"x",start:e,end:e,class:"marker-head-arrow-left"},{axis:"x",start:e,end:e,class:"marker-head-arrow-right"}]:[{axis:"x",start:e,end:e,class:t.current&&"remote"===t.type?"marker-upstream":`marker-${t.type}`}]))));this._markerRegions=e}else this._markerRegions=[];return this._markerRegions}getAllRegions(){if(null==this._regions){let e=this.getMarkerRegions();null!=this.visibleDays&&(e=Uc([this.getVisibleAreaRegion(this.visibleDays)],e)),null!=this.searchResults&&(e=Uc(e,this.getSearchResultsRegions(this.searchResults))),this._regions=[...e].sort(((e,t)=>Yc.indexOf(t.class??"")-Yc.indexOf(e.class??"")))}return this._regions}getSearchResultsRegions(e){return function*(e,t){for(const o of e)yield t(o)}(e.keys(),(e=>({axis:"x",start:e,end:e,class:"marker-result"})))}getVisibleAreaRegion(e){return{axis:"x",start:e.top,end:e.bottom,class:"visible-area"}}loadChart(){null==this._loading&&(this._loading=this.loadChartCore().then((()=>this._loading=void 0)))}async loadChartCore(){if(!this.data?.size)return this.spinner.setAttribute("aria-hidden","false"),this._chart?.destroy(),void(this._chart=void 0);const e="lines"===this.dataType,t=[],o=[],r=this.data.keys(),c=r[Symbol.iterator]().next().value;const d=new Date,h=new Date(c);let u,p,m,g,v,y=0;const w=d;for(;w>=h;)u=Qc(w),p=this.data.get(u),t.push(u),e?(m=p?.activity?.additions??0,v=p?.activity?.deletions??0,g=m+v):g=p?.commits??0,y=Math.max(y,g),o.push(g),w.setDate(w.getDate()-1);const x=this.getAllRegions(),S=[];let _=0,T=0;for(const e of o)0!==e&&(S.push(e),_+=e,T+=e**2);S.sort(((e,t)=>e-t));const E=S.length,O=_/E,A=Math.sqrt(T/E-O**2);let N=-1;for(let e=E-1;e>=0;e--)if(Math.abs((S[e]-O)/A)<=3){N=e;break}const $=S[Math.floor(.25*E)],P=S[Math.floor(.75*E)],z=S[E-1],G=P+3*(P-$),F=S[N],B=Math.floor(Math.min(z,G>z-G?F:G+(F-G)/2)+.1*G);if(null==this._chart){const{bb:e,selection:r,spline:c,zoom:d}=await n.e(490).then(n.bind(n,1893));this._chart=e.generate({bindto:this.chart,data:{x:"date",axes:{activity:"y"},columns:[["date",...t],["activity",...o]],names:{activity:"Activity"},onclick:e=>{if("activity"!==e.id)return;const t=new Date(e.x),o=Qc(t),n=this.searchResults?.get(o)?.sha??this.data?.get(o)?.sha;queueMicrotask((()=>{this.$emit("selected",{date:t,sha:n})}))},selection:{enabled:r(),grouped:!0,multiple:!1},colors:{activity:"var(--color-graph-minimap-line0)"},types:{activity:c()}},axis:{x:{inverted:!0,localtime:!0,type:"timeseries"},y:{min:0,max:B}},clipPath:!1,grid:{front:!1,focus:{show:!0}},legend:{show:!1},line:{point:!0,zerobased:!0},padding:{mode:"fit",bottom:-8,left:0,right:0,top:0},point:{show:!0,select:{r:5},focus:{only:!0,expand:{enabled:!0,r:3}},sensitivity:100},regions:x,resize:{auto:!0},spline:{interpolation:{type:"monotone-x"}},tooltip:{contents:(e,t,o,n)=>{const r=new Date(e[0].x),c=Qc(r),d=this.data?.get(c),h=this.markers?.get(c),u=this.searchResults?.get(c);let p;h?.length&&(p=function(e,t){return e.reduce(((e,o)=>{const n=t(o),r=e.get(n);return void 0===r?e.set(n,[o]):r.push(o),e}),new Map)}(h,(e=>e.type)));const m=p?.get("stash")?.length??0;let g,v,y;return d?.commits?(g=Be("commit",d.commits,{format:e=>Vl(e)}),u?.count&&(y=Be("matching commit",u.count)),"lines"===this.dataType&&(v=`${Be("file",d?.files??0,{format:e=>Vl(e),zero:"No"})}, ${Be("line",(d?.activity?.additions??0)+(d?.activity?.deletions??0),{format:e=>Vl(e),zero:"No"})} changed`)):g="No commits",`<div class="bb-tooltip">\n\t\t\t\t\t\t\t<div class="header">\n\t\t\t\t\t\t\t\t<span class="header--title">${Wl(r,"MMMM Do, YYYY")}</span>\n\t\t\t\t\t\t\t\t<span class="header--description">(${function(e){return e.charAt(0).toUpperCase()+e.slice(1)}(Bl(r))})</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="changes">\n\t\t\t\t\t\t\t\t<span>${g}${v?`, ${v}`:""}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t${y?`<div class="results"><span class="result">${y}</span></div>`:""}\n\t\t\t\t\t\t\t${null!=p?`\n\t\t\t\t\t\t\t<div class="refs">${m?`<span class="stash">${Be("stash",m,{plural:"stashes"})}</span>`:""}${p?.get("branch")?.sort(((e,t)=>(e.current?-1:1)-(t.current?-1:1))).map((e=>`<span class="branch${e.current?" current":""}">${e.name}</span>`)).join("")??""}</div>\n\t\t\t\t\t\t\t<div class="refs">${p?.get("remote")?.sort(((e,t)=>(e.current?-1:1)-(t.current?-1:1)))?.map((e=>`<span class="remote${e.current?" current":""}">${e.name}</span>`)).join("")??""}${p?.get("tag")?.map((e=>`<span class="tag">${e.name}</span>`)).join("")??""}</div>`:""}\n\t\t\t\t\t\t</div>`},grouped:!0,position:(e,t,o,n,r)=>{let{x:c}=r;const d=n.getBoundingClientRect();return c+t>d.right&&(c=d.right-t),{top:0,left:c}}},transition:{duration:0},zoom:{enabled:d(),rescale:!1,type:"wheel",onzoom:ye((()=>this.activeDayChanged()),250)},onafterinit:function(){const e=this.$.main.selectAll(".bb-axis-x").node();e?.remove();const t=this.$.main.selectAll(".bb-axis-y").node();t?.remove();const o=this.$.main.selectAll(".bb-grid").node();try{o?.removeAttribute("clip-path")}catch{}const n=this.$.main.selectAll(".bb-regions").node(),r=this.$.main.selectAll(".bb-chart").node();null!=n&&null!=r&&r.insertAdjacentElement("afterend",n)}})}else this._chart.load({columns:[["date",...t],["activity",...o]]}),this._chart.axis.max({y:B}),this._chart.regions(x);this.spinner.setAttribute("aria-hidden","true"),this.activeDayChanged()}};function Qc(e){return new Date(e).setHours(0,0,0,0)}Zc([Ct],Xc.prototype,"activeDay",2),Zc([Ct],Xc.prototype,"data",2),Zc([Ue({singleLine:!0})],Xc.prototype,"dataChanged",1),Zc([Ct],Xc.prototype,"dataType",2),Zc([Ct],Xc.prototype,"markers",2),Zc([Ct],Xc.prototype,"searchResults",2),Zc([Ct],Xc.prototype,"visibleDays",2),Zc([Ue({singleLine:!0})],Xc.prototype,"loadChartCore",1),Xc=Zc([Wt({name:"graph-minimap",template:qc,styles:Kc})],Xc);const Jc=Ws(Xc,{tagName:"graph-minimap",events:{onSelected:"selected"}}),ed=e=>(t,o)=>function(e,t="absolute",o="short+short",n){switch(n){case st.CommitDateTimeSources.Tooltip:return`${Wl(e,o)} (${Bl(e)})`;case st.CommitDateTimeSources.RowEntry:default:return"relative"===t?Bl(e):Wl(e,o)}}(t,e?.dateStyle,e?.dateFormat,o),td=(()=>{const t={};return["head","remote","remote-github","remote-githubEnterprise","remote-gitlab","remote-gitlabSelfHosted","remote-bitbucket","remote-bitbucketServer","remote-azureDevops","tag","stash","check","loading","warning","added","modified","deleted","renamed","resolved","pull-request","show","hide","branch","graph","commit","author","datetime","message","changes","files"].forEach((o=>{t[o]=(0,e.createElement)("span",{className:`graph-icon icon--${o}`})})),["upstream-ahead","upstream-behind"].forEach((o=>{t[o]=(0,e.createElement)("span",{className:`graph-icon mini-icon icon--${o}`})})),t.settings=(0,e.createElement)("span",{className:"graph-icon icon--settings",style:{fontSize:"1.1rem",right:"0px",top:"-1px"}}),t})(),od=e=>td[e],nd=(()=>{switch(Hs?"web-windows":zs?"web-macOS":Ps?"web-linux":"web"){case"web-macOS":return"darwin";case"web-windows":return"win32";default:return"linux"}})();function rd({subscriber:o,nonce:n,state:r,onChooseRepository:c,onColumnsChange:d,onDimMergeCommits:h,onDoubleClickRef:u,onDoubleClickRow:p,onEnsureRowPromise:m,onMissingAvatars:g,onMissingRefsMetadata:v,onMoreRows:y,onRefsVisibilityChange:w,onSearch:x,onSearchPromise:S,onSearchOpenInView:_,onSelectionChange:T,onExcludeType:E,onIncludeOnlyRef:O,onUpdateGraphConfiguration:A}){const N=(0,e.useRef)(null),[$,W]=(0,e.useState)(r.rows??[]),[U,Q]=(0,e.useState)(r.rowsStats),[te,oe]=(0,e.useState)(r.rowsStatsLoading),[ne,re]=(0,e.useState)(r.avatars),[ie,se]=(0,e.useState)(r.downstreams??{}),[ae,le]=(0,e.useState)(r.refsMetadata),[ce,de]=(0,e.useState)(r.repositories??[]),[he,ue]=(0,e.useState)(ce.find((e=>e.path===r.selectedRepository))),[pe,fe]=(0,e.useState)(r.branchState),[me,ge]=(0,e.useState)(r.selectedRows),[be,ve]=(0,e.useState)(r.activeRow),[ye,we]=(0,e.useState)(r.activeDay),[Ce,xe]=(0,e.useState)(r.visibleDays),[Se,_e]=(0,e.useState)(r.config),[Te,Re]=(0,e.useState)(r.columns),[ke,Ee]=(0,e.useState)(r.excludeRefs),[Oe,Ie]=(0,e.useState)(r.excludeTypes),[Me,De]=(0,e.useState)(r.includeOnlyRefs),[Ae,Ne]=(0,e.useState)(r.context),[$e,Pe]=(0,e.useState)(r.paging?.hasMore??!1),[ze,He]=(0,e.useState)(r.loading),[Le,Ge]=(0,e.useState)(r.theming),[Fe,We]=(0,e.useState)(r.branchName),[Ue,je]=(0,e.useState)(r.lastFetched),[Ve,Ze]=(0,e.useState)(r.windowFocused),[qe,Ke]=(0,e.useState)(r.allowed??!1),[Ye,Xe]=(0,e.useState)(r.subscription),Qe=(0,e.useRef)(null),[Je,et]=(0,e.useState)(void 0),{results:tt,resultsError:ot}=cd(r),[nt,rt]=(0,e.useState)(tt),[it,lt]=(0,e.useState)(ot),[ct,dt]=(0,e.useState)(!1),[ht,ut]=(0,e.useState)(!1),[pt,ft]=(0,e.useState)(r.workingTreeStats??{added:0,modified:0,deleted:0}),mt=(0,e.useRef)(void 0),gt=(0,e.useRef)(new Set),bt=(0,e.useRef)(new Set);function vt(e,t,o){switch(o&&Ge(e.theming),t){case"didChangeTheme":o||Ge(e.theming);break;case G:re(e.avatars);break;case j:Ze(e.windowFocused);break;case F:le(e.refsMetadata);break;case B:Re(e.columns),Ne(e.context);break;case q:W(e.rows??[]),Q(e.rowsStats),oe(e.rowsStatsLoading),ge(e.selectedRows),re(e.avatars),se(e.downstreams??{}),le(e.refsMetadata),Pe(e.paging?.hasMore??!1),He(e.loading);break;case K:Q(e.rowsStats),oe(e.rowsStatsLoading);break;case J:{const{results:t,resultsError:o}=cd(e);lt(o),rt(t),ge(e.selectedRows),ut(!1);break}case P:_e(e.config);break;case Y:ge(e.selectedRows);break;case Z:Ee(e.excludeRefs),Ie(e.excludeTypes),De(e.includeOnlyRefs);break;case z:Ke(e.allowed??!1),Xe(e.subscription);break;case X:ft(e.workingTreeStats??{added:0,modified:0,deleted:0});break;case ee:je(e.lastFetched);break;default:{Ke(e.allowed??!1),o||Ge(e.theming),We(e.branchName),je(e.lastFetched),Re(e.columns),W(e.rows??[]),Q(e.rowsStats),oe(e.rowsStatsLoading),ft(e.workingTreeStats??{added:0,modified:0,deleted:0}),_e(e.config),ge(e.selectedRows),Ee(e.excludeRefs),Ie(e.excludeTypes),De(e.includeOnlyRefs),Ne(e.context),re(e.avatars??{}),se(e.downstreams??{}),fe(e.branchState),le(e.refsMetadata),Pe(e.paging?.hasMore??!1),de(e.repositories??[]),ue(ce.find((t=>t.path===e.selectedRepository))),Xe(e.subscription);const{results:t,resultsError:n}=cd(e);lt(n),rt(t),He(e.loading);break}}}(0,e.useEffect)((()=>o?.(vt)),[]);const yt=e=>{if("Enter"===e.key||" "===e.key){const t=ld(be??r.activeRow)?.id;if(null==t)return;const o=N.current?.graphContainerRef.current;if(!e.composedPath().some((e=>e===o)))return;const n=$.find((e=>e.sha===t));if(null==n)return;p?.(n,"Enter"!==e.key)}};(0,e.useEffect)((()=>(window.addEventListener("keydown",yt),()=>{window.removeEventListener("keydown",yt)})),[be]);const wt=(0,e.useMemo)((()=>{if(!Se?.minimap)return;const e="lines"===(Se?.minimapDataType??"commits");if(e&&null==U)return;const t=new Map,o=new Map,n=Se?.minimapMarkerTypes??[];let r,c,d,h,u,p,m,g,v,y,w={head:void 0,branch:void 0,remote:void 0,tag:void 0};for(let x=$.length-1;x>=0;x--)g=$[x],r=dd(g.date),r!==c&&(c=r,w={head:void 0,branch:void 0,remote:void 0,tag:void 0}),g.heads?.length&&(n.includes("head")||n.includes("localBranches"))&&(w.branch=g.sha,h=[],g.heads.forEach((e=>{e.isCurrentHead&&(w.head=g.sha),(n.includes("localBranches")||n.includes("head")&&e.isCurrentHead)&&h.push({type:"branch",name:e.name,current:e.isCurrentHead&&n.includes("head")})})),d=o.get(r),null==d?o.set(r,h):d.push(...h)),g.remotes?.length&&(n.includes("upstream")||n.includes("remoteBranches")||n.includes("localBranches"))&&(w.remote=g.sha,u=[],g.remotes.forEach((e=>{let t=!1;const o=ie?.[`${e.owner}/${e.name}`]?.length;e.current&&(w.remote=g.sha,t=!0),(n.includes("remoteBranches")||n.includes("upstream")&&t||n.includes("localBranches")&&o)&&u.push({type:"remote",name:`${e.owner}/${e.name}`,current:t&&n.includes("upstream")})})),d=o.get(r),null==d?o.set(r,u):d.push(...u)),"stash-node"===g.type&&n.includes("stashes")&&(p={type:"stash",name:g.message},d=o.get(r),null==d?o.set(r,[p]):d.push(p)),g.tags?.length&&n.includes("tags")&&(w.tag=g.sha,m=g.tags.map((e=>({type:"tag",name:e.name}))),d=o.get(r),null==d?o.set(r,m):d.push(...m)),v=t.get(r),null==v?e?(y=U[g.sha],null!=y&&(v={activity:{additions:y.additions,deletions:y.deletions},commits:1,files:y.files,sha:g.sha},t.set(r,v))):(v={commits:1,sha:g.sha},t.set(r,v)):(v.commits++,v.sha=w.head??w.branch??w.remote??w.tag??v.sha,e&&(y=U[g.sha],null!=y&&(null==v.activity?v.activity={additions:y.additions,deletions:y.deletions}:(v.activity.additions+=y.additions,v.activity.deletions+=y.deletions),v.files=(v.files??0)+y.files)));return{stats:t,markers:o}}),[$,U,ie,Se?.minimap,Se?.minimapDataType,Se?.minimapMarkerTypes]),Ct=(0,e.useMemo)((()=>{if(!Se?.minimap||!Se.minimapMarkerTypes?.includes("highlights"))return;const e=new Map;if(null!=nt?.ids){let t,o,n,r;for([o,n]of Object.entries(nt.ids))t=dd(n.date),r=e.get(t),null==r?e.set(t,{type:"search-result",sha:o,count:1}):r.count++}return e}),[nt,Se?.minimap,Se?.minimapMarkerTypes]),xt=e=>{if(null==Se?.minimapMarkerTypes)return;const t=e.target,o=t.value;if(t.checked){if(!Se.minimapMarkerTypes.includes(o)){const e=[...Se.minimapMarkerTypes,o];_e({...Se,minimapMarkerTypes:e}),A?.({minimapMarkerTypes:e})}}else{const e=Se.minimapMarkerTypes.indexOf(o);if(-1!==e){const t=[...Se.minimapMarkerTypes];t.splice(e,1),_e({...Se,minimapMarkerTypes:t}),A?.({minimapMarkerTypes:t})}}};(0,e.useEffect)((()=>{null==it&&null!=nt&&0!==nt.count&&null!=Je&&Qe.current?.logSearch(Je)}),[nt]);const St=(0,e.useMemo)((()=>{if(null==nt?.ids||!Je?.query)return 0;const e=ld(be)?.id;let t=e?nt.ids[e]?.i:void 0;return null==t&&([t]=id(nt,Je,be)),t<1?1:t+1}),[be,nt]),_t=(0,e.useMemo)((()=>null==Me||0===Object.keys(Me).length),[Me]),Tt=(0,e.useMemo)((()=>!_t||null!=Oe&&Object.values(Oe).includes(!0)),[Oe,_t,Se?.dimMergeCommits]),Rt=(0,e.useMemo)((()=>!_t),[_t]),kt=async e=>{if(null==m)return e;if(gt.current.has(e))return e;if(bt.current.has(e))return;let t=setTimeout((()=>{t=void 0,He(!0)}),500);const o=await m(e,!1);if(null==t?He(!1):clearTimeout(t),o?.id===e)return gt.current.add(e),e;null!=o&&bt.current.add(e)},Et=e=>{const t=e.target,o=t.value;if(!["branch-all","branch-current"].includes(o)&&!["remotes","stashes","tags","mergeCommits"].includes(o))return;const n=t.checked;if("mergeCommits"===o)return void h?.(n);const r=o,c=Oe?.[r];(null==c&&n||null!=c&&c!==n)&&(Ie({...Oe,[r]:n}),E?.(r,n))};return t().createElement(t().Fragment,null,t().createElement("header",{className:"titlebar graph-app__header"},t().createElement("div",{className:"titlebar__row titlebar__row--wrap"+(qe?he&&pe?.provider?.url?"":" no-remote-provider":" disallowed")},he&&pe?.provider?.url&&t().createElement("a",{href:pe.provider.url,className:"action-button",style:{marginRight:"-0.5rem"},title:`Open Repository on ${pe.provider.name}`,"aria-label":`Open Repository on ${pe.provider.name}`},t().createElement("span",{className:"cloud"===pe.provider.icon?"codicon codicon-cloud action-button__icon":`glicon glicon-provider-${pe.provider.icon} action-button__icon`,"aria-hidden":"true"})),t().createElement("button",{type:"button",className:"action-button",slot:"trigger",title:"Switch to Another Repository...","aria-label":"Switch to Another Repository...",disabled:ce.length<2,onClick:()=>{c?.()}},he?.formattedName??"none selected",ce.length>1&&t().createElement("span",{className:"codicon codicon-chevron-down action-button__more","aria-hidden":"true"})),qe&&he&&t().createElement(t().Fragment,null,t().createElement("span",null,t().createElement("span",{className:"codicon codicon-chevron-right"})),t().createElement("a",{href:Ls("gitlens.graph.switchToAnotherBranch",r.webviewId,r.webviewInstanceId),className:"action-button",title:"Switch to Another Branch...","aria-label":"Switch to Another Branch..."},Fe,t().createElement("span",{className:"codicon codicon-chevron-down action-button__more","aria-hidden":"true"})),t().createElement("span",null,t().createElement("span",{className:"codicon codicon-chevron-right"})),(()=>{const e=Ue&&new Date(Ue),o=e&&0!==e.getTime()?Bl(e):void 0;let n="fetch",c="sync",d="Fetch",h=!1,u=!1,p="",m="Fetch from",g="remote";if(pe){h=pe.behind>0,u=pe.ahead>0;const e=`Branch ${Fe} is`;g=`${pe.upstream}${pe.provider?.name?` on ${pe.provider?.name}`:""}`,h?(n="pull",c="arrow-down",d="Pull",p=`Pull from ${g}\n${e} ${Be("commit",pe.behind)} behind of`):u&&(n="push",c="arrow-up",d="Push",p=`Push to ${g}\n${e} ${Be("commit",pe.ahead)} ahead of`),p+=` ${g}`,m+=` ${g}`}if(null!=o){const e=`\nLast fetched ${o}`;p+=e,m+=e}return t().createElement("div",{className:"titlebar__group"},(h||u)&&t().createElement("a",{href:Ls(`gitlens.graph.${n}`,r.webviewId,r.webviewInstanceId),className:`action-button${h?" is-behind":""}${u?" is-ahead":""}`,title:p},t().createElement("span",{className:`codicon codicon-${c} action-button__icon`}),d,(u||h)&&t().createElement("span",null,t().createElement("span",{className:"pill action-button__pill"},u&&t().createElement("span",null,pe.ahead," ",t().createElement("span",{className:"codicon codicon-arrow-up"})),h&&t().createElement("span",null,pe.behind," ",t().createElement("span",{className:"codicon codicon-arrow-down"}))))),t().createElement("a",{href:Ls("gitlens.graph.fetch",r.webviewId,r.webviewInstanceId),className:"action-button",title:m},t().createElement("span",{className:"codicon codicon-sync action-button__icon"}),"Fetch",o&&t().createElement("span",{className:"action-button__small"},"(",o,")")))})()),t().createElement(yc,{subscription:Ye}),t().createElement("div",{className:"popover"},t().createElement("a",{href:"command:gitlens.showFocusPage",className:"action-button popover__trigger"},"Try the Focus Preview"),t().createElement(Ma,{placement:"top end",className:"popover__content"},"Bring all of your GitHub pull requests and issues into a unified actionable to help to you more easily juggle work in progress, pending work, reviews, and more"))),qe&&t().createElement("div",{className:"titlebar__row"},t().createElement("div",{className:"titlebar__group"},t().createElement(_a,null,t().createElement("button",{type:"button",className:"action-button",slot:"trigger",title:"Filter Graph"},t().createElement("span",{className:"codicon codicon-filter"+(Tt?"-filled":"")}),Rt&&t().createElement("span",{className:"action-button__indicator"}),t().createElement("span",{className:"codicon codicon-chevron-down action-button__more","aria-hidden":"true"})),t().createElement(ma,{slot:"content"},t().createElement(fa,null,"Filter options"),t().createElement(pa,{role:"none"},t().createElement(As,{orientation:"vertical",value:_t&&!0!==he?.isVirtual?"branch-all":"branch-current",readOnly:!0===he?.isVirtual},!0!==he?.isVirtual&&t().createElement(Ds,{name:"branching-toggle",value:"branch-all",onChange:e=>{const t=e.target,o=t.value,n=t.checked,r="branch-all"===o&&n;_t!==r&&O?.(r)}},"Show All Branches"),t().createElement(Ds,{name:"branching-toggle",value:"branch-current"},"Show Current Branch Only"))),t().createElement(ua,null),!0!==he?.isVirtual&&t().createElement(t().Fragment,null,t().createElement(pa,{role:"none"},t().createElement(Ms,{value:"remotes",onChange:Et,defaultChecked:Oe?.remotes??!1},"Hide Remote-only Branches")),t().createElement(pa,{role:"none"},t().createElement(Ms,{value:"stashes",onChange:Et,defaultChecked:Oe?.stashes??!1},"Hide Stashes"))),t().createElement(pa,{role:"none"},t().createElement(Ms,{value:"tags",onChange:Et,defaultChecked:Oe?.tags??!1},"Hide Tags")),t().createElement(ua,null),t().createElement(pa,{role:"none"},t().createElement(Ms,{value:"mergeCommits",onChange:Et,defaultChecked:Se?.dimMergeCommits??!1},"Dim Merge Commit Rows")))),t().createElement("span",null,t().createElement("span",{className:"action-divider"})),t().createElement(Bc,{ref:Qe,label:"Search Commits",step:St,total:nt?.count??0,valid:Boolean(Je?.query&&Je.query.length>2),more:nt?.paging?.hasMore??!1,searching:ht,value:Je?.query??"",errorMessage:it?.error??"",resultsHidden:ct,resultsLoaded:null!=nt,onChange:e=>(e=>{const t=e.detail;et(t);const o=t.query.length>=3;rt(void 0),lt(void 0),dt(!1),ut(o),x?.(o?t:void 0)})(e),onNavigate:e=>(async e=>{if(null==nt)return;const t=e.detail?.direction??"next";let o,n,r,c=nt,d=c.count;"first"===t?(r=!1,o=0):"last"===t?(r=!1,o=-1):(r="next"===t,[o,n]=id(c,Je,be,r));let h=0;for(;h<1e3;){if(h++,-1==o)if(r)if(null!=Je&&c?.paging?.hasMore){let e;ut(!0);try{e=await(S?.(Je,{more:!0}))}finally{ut(!1)}null==e?.results||"error"in e.results?o=0:d<e.results.count?(c=e.results,o=d,d=c.count):o=0}else o=0;else if("last"===t&&null!=Je&&c?.paging?.hasMore){let e;ut(!0);try{e=await(S?.(Je,{limit:0,more:!0}))}finally{ut(!1)}null==e?.results||"error"in e.results||(d<e.results.count&&(c=e.results,d=c.count),o=d)}else o=d-1;if(n=n??ad(c,o),null!=n&&(n=await kt(n),null!=n))break;dt(!0),o=sd(o,r,c,Je)}null!=n&&queueMicrotask((()=>N.current?.selectCommits([n],!1,!0)))})(e),onOpenInView:()=>{null!=Je&&_?.(Je)}}),t().createElement("span",null,t().createElement("span",{className:"action-divider"})),t().createElement("span",{className:"button-group"},t().createElement("button",{type:"button",role:"checkbox",className:"action-button",title:"Toggle Minimap","aria-label":"Toggle Minimap","aria-checked":Se?.minimap??!1,onClick:e=>{A?.({minimap:!Se?.minimap})}},t().createElement("span",{className:"codicon codicon-graph-line action-button__icon"})),t().createElement(_a,{position:"right"},t().createElement("button",{type:"button",className:"action-button",slot:"trigger",title:"Minimap Options"},t().createElement("span",{className:"codicon codicon-chevron-down action-button__more","aria-hidden":"true"})),t().createElement(ma,{slot:"content"},t().createElement(fa,null,"Chart"),t().createElement(pa,{role:"none"},t().createElement(As,{orientation:"vertical",value:Se?.minimapDataType??"commits"},t().createElement(Ds,{name:"minimap-datatype",value:"commits",onChange:e=>{if(null==Se)return;const t=e.target;if("commits"===t.value){const e=t.checked?"commits":"lines";if(Se.minimapDataType===e)return;_e({...Se,minimapDataType:e}),A?.({minimapDataType:e})}}},"Commits"),t().createElement(Ds,{name:"minimap-datatype",value:"lines"},"Lines Changed"))),t().createElement(ua,null),t().createElement(fa,null,"Markers"),t().createElement(pa,{role:"none"},t().createElement(Ms,{value:"localBranches",onChange:xt,defaultChecked:Se?.minimapMarkerTypes?.includes("localBranches")??!1},t().createElement("span",{className:"minimap-marker-swatch","data-marker":"localBranches"}),"Local Branches")),t().createElement(pa,{role:"none"},t().createElement(Ms,{value:"remoteBranches",onChange:xt,defaultChecked:Se?.minimapMarkerTypes?.includes("remoteBranches")??!0},t().createElement("span",{className:"minimap-marker-swatch","data-marker":"remoteBranches"}),"Remote Branches")),t().createElement(pa,{role:"none"},t().createElement(Ms,{value:"stashes",onChange:xt,defaultChecked:Se?.minimapMarkerTypes?.includes("stashes")??!1},t().createElement("span",{className:"minimap-marker-swatch","data-marker":"stashes"}),"Stashes")),t().createElement(pa,{role:"none"},t().createElement(Ms,{value:"tags",onChange:xt,defaultChecked:Se?.minimapMarkerTypes?.includes("tags")??!0},t().createElement("span",{className:"minimap-marker-swatch","data-marker":"tags"}),"Tags"))))))),t().createElement("div",{className:"progress-container infinite"+(ze||te?" active":""),role:"progressbar"},t().createElement("div",{className:"progress-bar"}))),t().createElement(fc,{className:"graph-app__gate",appearance:"alert",state:Ye?.state,visible:!qe},t().createElement("p",{slot:"feature"},"Helps you easily visualize your repository and keep track of all work in progress.",t().createElement("br",null),t().createElement("br",null),"Use the rich commit search to find exactly what you're looking for. It's powerful filters allow you to search by a specific commit, message, author, a changed file or files, or even a specific code change.")),Se?.minimap&&t().createElement(Jc,{ref:mt,activeDay:ye,data:wt?.stats,dataType:Se?.minimapDataType??"commits",markers:wt?.markers,searchResults:Ct,visibleDays:Ce,onSelected:e=>(e=>{let{sha:t}=e.detail;if(null==t){const o=e.detail.date?.getTime();if(null==o)return;t=$.reduce(((e,t)=>Math.abs(t.date-o)<Math.abs(e.date-o)?t:e)).sha}N.current?.selectCommits([t],!1,!0)})(e)}),t().createElement("main",{id:"main",className:"graph-app__main","aria-hidden":!qe},void 0!==he?t().createElement(t().Fragment,null,t().createElement(at(),{ref:N,avatarUrlByEmail:ne,columnsSettings:Te,contexts:Ae,cssVariables:Le?.cssVariables,dimMergeCommits:Se?.dimMergeCommits,downstreamsByUpstream:ie,enabledRefMetadataTypes:Se?.enabledRefMetadataTypes,enabledScrollMarkerTypes:Se?.scrollMarkerTypes,enableShowHideRefsOptions:!0,enableMultiSelection:Se?.enableMultiSelection,excludeRefsById:ke,excludeByType:Oe,formatCommitDateTime:ed(Se),getExternalIcon:od,graphRows:$,hasMoreCommits:$e,highlightedShas:nt?.ids,highlightRowsOnRefHover:Se?.highlightRowsOnRefHover,includeOnlyRefsById:Me,scrollRowPadding:Se?.scrollRowPadding,showGhostRefsOnRowHover:Se?.showGhostRefsOnRowHover,showRemoteNamesOnRefs:Se?.showRemoteNamesOnRefs,isContainerWindowFocused:Ve,isLoadingRows:ze,isSelectedBySha:me,nonce:n,onColumnResized:(e,t)=>{t.width&&d?.({[e]:{width:t.width,isHidden:t.isHidden,mode:t.mode,order:t.order}})},onDoubleClickGraphRow:(e,t,o)=>{t!==st.refZone&&p?.(o,!0)},onDoubleClickGraphRef:(e,t,o,n)=>{t.length>0&&u?.(t[0],n)},onGraphColumnsReOrdered:e=>{const t={};for(const[o,n]of Object.entries(e))t[o]={...n};d?.(t)},onGraphMouseLeave:mt.current?e=>{mt.current?.unselect(void 0,!0)}:void 0,onGraphRowHovered:mt.current?(e,t,o)=>{t!==st.refZone&&null!=mt.current&&mt.current?.select(o.date,!0)}:void 0,onSettingsClick:e=>{const t=e.nativeEvent,o=new MouseEvent("contextmenu",{bubbles:!0,clientX:t.clientX,clientY:t.clientY});t.target?.dispatchEvent(o),t.stopImmediatePropagation()},onSelectGraphRows:e=>{const t=e[0],o=null!=t?`${t.sha}|${t.date}`:void 0;r.activeRow=o,ve(o),we(t?.date),T?.(e)},onToggleRefsVisibilityClick:(e,t,o)=>{w?.(t,o)},onEmailsMissingAvatarUrls:e=>{g?.(e)},onRefsMissingMetadata:e=>{v?.(e)},onShowMoreCommits:()=>{He(!0),y?.()},onGraphVisibleRowsChanged:mt.current?(e,t)=>{xe({top:new Date(e.date).setHours(23,59,59,999),bottom:new Date(t.date).setHours(0,0,0,0)})}:void 0,platform:nd,refMetadataById:ae,rowsStats:U,rowsStatsLoading:te,shaLength:Se?.idLength,themeOpacityFactor:Le?.themeOpacityFactor,useAuthorInitialsForAvatars:!Se?.avatars,workDirStats:pt})):t().createElement("p",null,"No repository is selected")))}function id(e,t,o,n=!0){if(null==e.ids)return[0,void 0];const r=ld(o),c=r?.id;if(null==c)return[0,void 0];let d,h,u;const p=e.ids[c];if(null!=p&&(d=p.i,h=c,u=d),null==d){const t=null!=r?.date?r.date+(n?1:-1):void 0;if(null==t)return[0,void 0];let o,c,p,m;for([c,{date:p,i:o}]of Object.entries(e.ids))n?p<t&&(null==m||p>m)&&(h=c,m=p,u=o):p>t&&(null==m||p<=m)&&(h=c,m=p,u=o);d=null==u?e.count-1:u+(n?-1:1)}return d=sd(d,n,e,t),d===u?[d,h]:[d,void 0]}function sd(e,t,o,n){return t?e<o.count-1?e++:e=null!=n&&o?.paging?.hasMore?-1:0:e>0?e--:e=null!=n&&o?.paging?.hasMore?-1:o.count-1,e}function ad(e,t){const{ids:o}=e;for(const e in o)if(o[e].i===t)return e}function ld(e){if(null==e)return;const[t,o]=e.split("|");return{id:t,date:Number(o)}}function cd(e){let t,o;return null!=e.searchResults&&("error"in e.searchResults?o=e.searchResults:t=e.searchResults),{results:t,resultsError:o}}function dd(e){return new Date(e).setHours(0,0,0,0)}var hd=Object.defineProperty,ud=Object.getOwnPropertyDescriptor;const pd=new Map([["--vscode-gitlens-graphLane1Color","#15a0bf"],["--vscode-gitlens-graphLane2Color","#0669f7"],["--vscode-gitlens-graphLane3Color","#8e00c2"],["--vscode-gitlens-graphLane4Color","#c517b6"],["--vscode-gitlens-graphLane5Color","#d90171"],["--vscode-gitlens-graphLane6Color","#cd0101"],["--vscode-gitlens-graphLane7Color","#f25d2e"],["--vscode-gitlens-graphLane8Color","#f2ca33"],["--vscode-gitlens-graphLane9Color","#7bd938"],["--vscode-gitlens-graphLane10Color","#2ece9d"]]);class GraphApp extends App{constructor(){super("GraphApp")}onBind(){const e=super.onBind?.()??[];this.log("onBind()"),this.ensureTheming(this.state);const n=document.getElementById("root");return null!=n&&((0,o.render)(t().createElement(rd,{nonce:this.state.nonce,state:this.state,subscriber:e=>this.registerUpdateStateCallback(e),onColumnsChange:ye((e=>this.onColumnsChanged(e)),250),onDimMergeCommits:e=>this.onDimMergeCommits(e),onRefsVisibilityChange:(e,t)=>this.onRefsVisibilityChanged(e,t),onChooseRepository:ye((()=>this.onChooseRepository()),250),onDoubleClickRef:(e,t)=>this.onDoubleClickRef(e,t),onDoubleClickRow:(e,t)=>this.onDoubleClickRow(e,t),onMissingAvatars:(...e)=>this.onGetMissingAvatars(...e),onMissingRefsMetadata:(...e)=>this.onGetMissingRefsMetadata(...e),onMoreRows:(...e)=>this.onGetMoreRows(...e),onSearch:ye(((e,t)=>this.onSearch(e,t)),250),onSearchPromise:(...e)=>this.onSearchPromise(...e),onSearchOpenInView:(...e)=>this.onSearchOpenInView(...e),onSelectionChange:ye((e=>this.onSelectionChanged(e)),250),onEnsureRowPromise:this.onEnsureRowPromise.bind(this),onExcludeType:this.onExcludeType.bind(this),onIncludeOnlyRef:this.onIncludeOnlyRef.bind(this),onUpdateGraphConfiguration:this.onUpdateGraphConfiguration.bind(this)}),n),e.push({dispose:()=>(0,o.unmountComponentAtNode)(n)})),e}onMessageReceived(e){const t=ze();switch(e.method){case $.method:c($,e,((e,t)=>{this.setState({...this.state,...e.state},t)}));break;case ee.method:c(ee,e,((e,t)=>{this.state.lastFetched=e.lastFetched,this.setState(this.state,t)}));break;case G.method:c(G,e,((e,t)=>{this.state.avatars=e.avatars,this.setState(this.state,t)}));break;case U.method:c(U,e,(e=>{window.dispatchEvent(new CustomEvent(e.focused?"webview-focus":"webview-blur"))}));break;case j.method:c(j,e,((e,t)=>{this.state.windowFocused=e.focused,this.setState(this.state,t)}));break;case B.method:c(B,e,((e,t)=>{this.state.columns=e.columns,this.state.context={...this.state.context,header:e.context,settings:e.settingsContext},this.setState(this.state,t)}));break;case Z.method:c(Z,e,((e,t)=>{this.state.excludeRefs=e.excludeRefs,this.state.excludeTypes=e.excludeTypes,this.state.includeOnlyRefs=e.includeOnlyRefs,this.setState(this.state,t)}));break;case F.method:c(F,e,((e,t)=>{this.state.refsMetadata=e.metadata,this.setState(this.state,t)}));break;case q.method:c(q,e,((e,o)=>{let n;if(e.rows.length&&null!=e.paging?.startingCursor&&null!=this.state.rows){const o=this.state.rows,r=o[o.length-1]?.sha;let c=o.length;const d=e.rows.length;if(this.log(t,`paging in ${d} rows into existing ${c} rows at ${e.paging.startingCursor} (last existing row: ${r})`),n=[],n.length=c+d,e.paging.startingCursor!==r){this.log(t,`searching for ${e.paging.startingCursor} in existing rows`);let r,h=0;for(r of o)if(n[h++]=r,r.sha===e.paging.startingCursor){this.log(t,`found ${e.paging.startingCursor} in existing rows`),c=h,c!==o.length&&(n.length=c+d);break}}else for(let e=0;e<c;e++)n[e]=o[e];for(let t=0;t<d;t++)n[c+t]=e.rows[t]}else this.log(t,`setting to ${e.rows.length} rows`),n=0===e.rows.length?this.state.rows:e.rows;this.state.avatars=e.avatars,this.state.downstreams=e.downstreams,void 0!==e.refsMetadata&&(this.state.refsMetadata=e.refsMetadata),this.state.rows=n,this.state.paging=e.paging,null!=e.rowsStats&&(this.state.rowsStats={...this.state.rowsStats,...e.rowsStats}),this.state.rowsStatsLoading=e.rowsStatsLoading,null!=e.selectedRows&&(this.state.selectedRows=e.selectedRows),this.state.loading=!1,this.setState(this.state,o),function(e,t,o){null!=e&&(e.exitDetails=t,null!=o&&(e.exitFailed=o))}(t,` • rows=${this.state.rows?.length??0}`)}));break;case K.method:c(K,e,((e,t)=>{this.state.rowsStats={...this.state.rowsStats,...e.rowsStats},this.state.rowsStatsLoading=e.rowsStatsLoading,this.setState(this.state,t)}));break;case W.method:c(W,e,((e,t)=>{this.state.context={...this.state.context,settings:e.context},this.setState(this.state,t)}));break;case J.method:c(J,e,((e,t)=>{this.state.searchResults=e.results,null!=e.selectedRows&&(this.state.selectedRows=e.selectedRows),this.setState(this.state,t)}));break;case Y.method:c(Y,e,((e,t)=>{this.state.selectedRows=e.selection,this.setState(this.state,t)}));break;case P.method:c(P,e,((e,t)=>{this.state.config=e.config,this.setState(this.state,t)}));break;case z.method:c(z,e,((e,t)=>{this.state.subscription=e.subscription,this.state.allowed=e.allowed,this.setState(this.state,t)}));break;case X.method:c(X,e,((e,t)=>{this.state.workingTreeStats=e.stats,this.setState(this.state,t)}));break;default:super.onMessageReceived?.(e)}}onThemeUpdated(e){const t=document.documentElement.style;t.setProperty("--graph-theme-opacity-factor",e.isLightTheme?"0.5":"1"),t.setProperty("--color-graph-actionbar-background",e.isLightTheme?ne(e.colors.background,5):re(e.colors.background,5)),t.setProperty("--color-graph-background",e.isLightTheme?ne(e.colors.background,5):re(e.colors.background,5)),t.setProperty("--color-graph-background2",e.isLightTheme?ne(e.colors.background,10):re(e.colors.background,10));const o=le("--color-graph-text-selected-row",e.computedStyle);t.setProperty("--color-graph-text-dimmed-selected",ie(o,50)),t.setProperty("--color-graph-text-dimmed",ie(e.colors.foreground,20)),t.setProperty("--color-graph-text-normal",ie(e.colors.foreground,85)),t.setProperty("--color-graph-text-secondary",ie(e.colors.foreground,65)),t.setProperty("--color-graph-text-disabled",ie(e.colors.foreground,50));const n=de.from(e.colors.background),r=de.from(e.colors.foreground),c=n.getRelativeLuminance(),d=r.getRelativeLuminance(),h=e=>{let t,o;d>c?(o=d,t=c):(t=d,o=c);return e/1*(o-t)+t};let u=de.fromCssVariable("--vscode-scrollbarSlider-background",e.computedStyle);if(t.setProperty("--color-graph-minimap-visibleAreaBackground",u.luminance(h(e.isLightTheme?.6:.1)).toString()),!e.isLightTheme){u=de.fromCssVariable("--color-graph-scroll-marker-local-branches",e.computedStyle),t.setProperty("--color-graph-minimap-tip-branchBackground",u.luminance(h(.55)).toString()),u=de.fromCssVariable("--color-graph-scroll-marker-local-branches",e.computedStyle),t.setProperty("--color-graph-minimap-tip-branchBorder",u.luminance(h(.55)).toString()),u=de.fromCssVariable("--vscode-editor-foreground",e.computedStyle);const o=u.isLighter()?u.luminance(.01).toString():u.luminance(.99).toString();t.setProperty("--color-graph-minimap-tip-headForeground",o),t.setProperty("--color-graph-minimap-tip-upstreamForeground",o),t.setProperty("--color-graph-minimap-tip-highlightForeground",o),t.setProperty("--color-graph-minimap-tip-branchForeground",o)}const p=h(e.isLightTheme?.72:.064),m=h(e.isLightTheme?.64:.076),g=h(e.isLightTheme?.92:.02);u=de.fromCssVariable("--branch-status-ahead-foreground",e.computedStyle),t.setProperty("--branch-status-ahead-background",u.luminance(p).toString()),t.setProperty("--branch-status-ahead-hover-background",u.luminance(m).toString()),t.setProperty("--branch-status-ahead-pill-background",u.luminance(g).toString()),u=de.fromCssVariable("--branch-status-behind-foreground",e.computedStyle),t.setProperty("--branch-status-behind-background",u.luminance(p).toString()),t.setProperty("--branch-status-behind-hover-background",u.luminance(m).toString()),t.setProperty("--branch-status-behind-pill-background",u.luminance(g).toString()),u=de.fromCssVariable("--branch-status-both-foreground",e.computedStyle),t.setProperty("--branch-status-both-background",u.luminance(p).toString()),t.setProperty("--branch-status-both-hover-background",u.luminance(m).toString()),t.setProperty("--branch-status-both-pill-background",u.luminance(g).toString()),e.isInitializing||(this.state.theming=void 0,this.setState(this.state,"didChangeTheme"))}setState(e,t){const o=this.ensureTheming(e);this.state=e,super.setState({timestamp:e.timestamp,selectedRepository:e.selectedRepository}),this.updateStateCallback?.(this.state,t,o)}ensureTheming(e){return null==e.theming&&(e.theming=this.getGraphTheming(),!0)}getGraphTheming(){const e=window.getComputedStyle(document.documentElement),t=le("--color-background",e),o={};let n,r=0;for(const[c,d]of pd){n=le(c,e)||d,o[`--column-${r}-color`]=n,o[`--graph-color-${r}`]=n;for(const e of[15,25,45,50])o[`--graph-color-${r}-bg${e}`]=se(t,n,e);for(const e of[10,50])o[`--graph-color-${r}-f${e}`]=ie(n,e);r++}const c=document.body.classList.contains("vscode-high-contrast");return{cssVariables:{"--app__bg0":t,"--panel__bg0":le("--color-graph-background",e),"--panel__bg1":le("--color-graph-background2",e),"--section-border":le("--color-graph-background2",e),"--selected-row":le("--color-graph-selected-row",e),"--selected-row-border":c?`1px solid ${le("--color-graph-contrast-border",e)}`:"none","--hover-row":le("--color-graph-hover-row",e),"--hover-row-border":c?`1px dashed ${le("--color-graph-contrast-border",e)}`:"none","--scrollable-scrollbar-thickness":le("--graph-column-scrollbar-thickness",e),"--scroll-thumb-bg":le("--vscode-scrollbarSlider-background",e),"--scroll-marker-head-color":le("--color-graph-scroll-marker-head",e),"--scroll-marker-upstream-color":le("--color-graph-scroll-marker-upstream",e),"--scroll-marker-highlights-color":le("--color-graph-scroll-marker-highlights",e),"--scroll-marker-local-branches-color":le("--color-graph-scroll-marker-local-branches",e),"--scroll-marker-remote-branches-color":le("--color-graph-scroll-marker-remote-branches",e),"--scroll-marker-stashes-color":le("--color-graph-scroll-marker-stashes",e),"--scroll-marker-tags-color":le("--color-graph-scroll-marker-tags",e),"--scroll-marker-selection-color":le("--color-graph-scroll-marker-selection",e),"--stats-added-color":le("--color-graph-stats-added",e),"--stats-deleted-color":le("--color-graph-stats-deleted",e),"--stats-files-color":le("--color-graph-stats-files",e),"--stats-bar-border-radius":le("--graph-stats-bar-border-radius",e),"--stats-bar-height":le("--graph-stats-bar-height",e),"--text-selected":le("--color-graph-text-selected",e),"--text-selected-row":le("--color-graph-text-selected-row",e),"--text-hovered":le("--color-graph-text-hovered",e),"--text-dimmed-selected":le("--color-graph-text-dimmed-selected",e),"--text-dimmed":le("--color-graph-text-dimmed",e),"--text-normal":le("--color-graph-text-normal",e),"--text-secondary":le("--color-graph-text-secondary",e),"--text-disabled":le("--color-graph-text-disabled",e),"--text-accent":le("--color-link-foreground",e),"--text-inverse":le("--vscode-input-background",e),"--text-bright":le("--vscode-input-background",e),...o},themeOpacityFactor:parseInt(le("--graph-theme-opacity-factor",e))||1}}onColumnsChanged(e){this.sendCommand(_,{config:e})}onRefsVisibilityChanged(e,t){this.sendCommand(T,{refs:e,visible:t})}onChooseRepository(){this.sendCommand(u,void 0)}onDimMergeCommits(e){this.sendCommand(p,{dim:e})}onDoubleClickRef(e,t){this.sendCommand(m,{type:"ref",ref:e,metadata:t})}onDoubleClickRow(e,t){this.sendCommand(m,{type:"row",row:{id:e.sha,type:e.type},preserveFocus:t})}onGetMissingAvatars(e){this.sendCommand(v,{emails:e})}onGetMissingRefsMetadata(e){this.sendCommand(y,{metadata:e})}onGetMoreRows(e){this.sendCommand(w,{id:e})}onSearch(e,t){null==e&&(this.state.searchResults=void 0),this.sendCommand(x,{search:e,limit:t?.limit})}async onSearchPromise(e,t){try{return await this.sendCommandWithCompletion(x,{search:e,limit:t?.limit,more:t?.more},J)}catch{return}}onSearchOpenInView(e){this.sendCommand(S,{search:e})}async onEnsureRowPromise(e,t){try{return await this.sendCommandWithCompletion(g,{id:e,select:t},Q)}catch{return}}onExcludeType(e,t){this.sendCommand(E,{key:e,value:t})}onIncludeOnlyRef(e){this.sendCommand(A,e?{}:{refs:[{id:"HEAD",type:"head",name:"HEAD"}]})}onUpdateGraphConfiguration(e){this.sendCommand(O,{changes:e})}onSelectionChanged(e){const t=e.filter((e=>null!=e)).map((e=>({id:e.sha,type:e.type})));this.sendCommand(N,{selection:t})}registerUpdateStateCallback(e){return this.updateStateCallback=e,()=>{this.updateStateCallback=void 0}}}((e,t,o,n)=>{for(var r,c=n>1?void 0:n?ud(t,o):t,d=e.length-1;d>=0;d--)(r=e[d])&&(c=(n?r(t,o,c):r(c))||c);n&&c&&hd(t,o,c)})([Ue({args:!1,singleLine:!0})],GraphApp.prototype,"setState",1),new GraphApp})();var c=r.q;export{c as GraphApp};
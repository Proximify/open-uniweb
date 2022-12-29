"use strict";(self.webpackChunkdeployer=self.webpackChunkdeployer||[]).push([[520],{7772:(t,e,r)=>{function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===n(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,{Ai:()=>u,NC:()=>a,V2:()=>c,jx:()=>s,s2:()=>v});var a=uniweb.getProfileServices().localize,u=(uniweb.getProfileServices().getProfiles,uniweb.getProfileServices().getProfile),c=uniweb.getProfileServices().getListProfileItems,f=function t(e,r){for(var n={},o=Object.keys(r),l=function(l){for(var a=o[l],u=r[a],c=u.type,f=u.attrs,s=u.multiple,v=void 0!==s&&s,p=u.parentType,y=void 0===p?"":p,d=0;d<e.length;d++){var b=e[d],m=null==b?void 0:b.type,g=null==b?void 0:b.attrs,h=(null==b?void 0:b.content)||[];if(m===c){if(g){var w=!0;for(var O in f)if(f[O]!==(null==g?void 0:g[O])){w=!1;break}if(!w)continue}var j=null;if(["heading"].includes(c))j=h.map((function(t){var e=t.text,r=t.marks,n=void 0===r?[]:r;if(!n.length)return e;var o=e;return n.forEach((function(t){var e=t.type;if("link"===e){var r=(null==t?void 0:t.attrs)||{},n=r.href,i=r.target;o='<a target="'.concat(i,'" href="').concat(n,'">').concat(o,"</a>")}else if("textStyle"===e){var l=((null==t?void 0:t.attrs)||{}).color;"string"==typeof l&&l&&(o='<span style="color: var(--'.concat(l,')"}>').concat(o,"</span>"))}else"bold"===e&&(o='<span style="font-weight: 700"}>'.concat(o,"</span>"))})),o})).join("");else if("ImageBlock"===c){var S=g.info,P=g.targetId,k=g.caption,x=void 0===k?"":k,E=g.direction,I=void 0===E?"center":E,A=S.contentType,T=S.viewType,D=S.contentId,L=S.identifier,B=S.version,C=S.filename;j={contentType:A,viewType:T,contentId:P||D,value:"".concat(B,"/").concat(L,"/").concat(C),alt:x,size:{center:"basic",wide:"lg",fill:"full"}[I]}}else if("Video"===c){var N=g.src,M=g.caption;j={src:N,caption:void 0===M?"":M}}if(j){if(!v){n[a]=j;break}null!=n&&n[a]||(n[a]=new Map),n[a].set(d,j)}}else if(m===y)"bulletList"===y&&function(){var e=h.map((function(t){return"listItem"===t.type?t.content:null})).filter(Boolean),r={type:c,attrs:f,multiple:v,parentType:y},o=e.map((function(e){var n=t(e,i({},a,r));if(Object.keys(n).length){if(Array.isArray(n[a])){var o,l,u,c=(null===(o=e.find((function(t){var e,r;return"paragraph"===t.type&&"text"===(null===(e=t.content)||void 0===e||null===(r=e[0])||void 0===r?void 0:r.type)})))||void 0===o||null===(l=o.content)||void 0===l||null===(u=l[0])||void 0===u?void 0:u.text)||"";n.label=c}return n}return null})).filter(Boolean);o.length&&(n[a]=o)}();else if("link"===c)for(var z=null,V=0;V<h.length;V++){for(var _=h[V],U=(null==_?void 0:_.marks)||[],Z=0;Z<U.length;Z++){var $=U[Z];if((null==$?void 0:$.type)===c){var q;z={href:null==$||null===(q=$.attrs)||void 0===q?void 0:q.href,label:(null==_?void 0:_.text)||""};break}}if(z){if(!v){n[a]=z;break}null!=n&&n[a]||(n[a]=new Map),n[a].set(d,z)}}}},a=0;a<o.length;a++)l(a);return n},s=function(t,e){var r=(null==t?void 0:t.content)||[],n=[],i=[];if(r.forEach((function(t){if("DividerBlock"===t.type){if(i.length){var r=f(o(i),e);Object.keys(r).length&&n.push(r)}i=[]}else i.push(t)})),i.length){var l=f(o(i),e);Object.keys(l).length&&n.push(l)}return n},v=function(t,e,r){var n=function(t){var e;return 0===t.indexOf("topic:")&&((null===(e=t.split(":"))||void 0===e?void 0:e[1])||!1)}(t);if(!n)return t;var o=function(t){var e={};return t.forEach((function(t){t.pages.forEach((function(t){var r=t.id,n=t.route;e[r]=n}))})),e}(e);return a((null==o?void 0:o[n])||t,"",r)}},3085:(t,e,r)=>{r.d(e,{Z:()=>s});var n=r(8966),o=r(8741);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}var l=["external","children","target","title","style","className","to","ariaLabel"];function a(){return a=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a.apply(this,arguments)}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==i(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===i(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t){var e,r,i,u=t.external,f=void 0!==u&&u,s=t.children,v=t.target,p=void 0===v?"_self":v,y=t.title,d=void 0===y?"":y,b=t.style,m=void 0===b?null:b,g=t.className,h=void 0===g?"":g,w=t.to,O=void 0===w?"":w,j=t.ariaLabel,S=void 0===j?"":j,P=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(t,l),k={className:h,style:m};S&&(k["aria-label"]=S),d&&(k.title=d);var x=O,E=null===(e=uniweb.config.data)||void 0===e||null===(r=e.domainsInfo)||void 0===r||null===(i=r.info)||void 0===i?void 0:i.base_route;if(x)if(0===x.indexOf("*"))x=x.substring(1);else if(E&&0===x.indexOf("/")&&!f){var I,A,T=null===(I=uniweb.config.data)||void 0===I||null===(A=I.domainsInfo)||void 0===A?void 0:A.appDomain;x="".concat(T).concat(x)}var D=x.includes("https://")||x.includes("http://");return f||D?(k=c(c({},k),{},{target:p,href:x}),n.createElement("a",k,s)):(k=c(c({},k),{},{target:p,to:x}),n.createElement(o.Link,a({},k,P),s))}},9261:(t,e,r)=>{r.d(e,{Sf:()=>i.S,iv:()=>o.css,tw:()=>u});var n=r(8220),o=r(5372),i=(r(918),r(9396)),l=r(3406),a=r(5256);window.twind||(n.setup({theme:{extend:{colors:a}},plugins:{aspect:l.D}}),window.twind=n);var u=n.tw;n.apply}}]);
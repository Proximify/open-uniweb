"use strict";(self.webpackChunkdeployer=self.webpackChunkdeployer||[]).push([[875],{7772:(t,e,n)=>{function r(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===l(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=n||uniweb.language(),o=uniweb.config.languages()[0];if("object"===l(t)&&!Array.isArray(t))return r?(null==t?void 0:t[i])||(null==t?void 0:t[o])||e:(null==t?void 0:t[i])||e;if("string"==typeof t)try{var a=JSON.parse(t);if("object"===l(a))return r?(null==a?void 0:a[i])||(null==a?void 0:a[o])||e:(null==a?void 0:a[i])||e}catch(e){return t}return e}n.d(e,{NC:()=>a,jx:()=>c,s2:()=>f});var u=function t(e,n){for(var r={},o=Object.keys(n),l=function(l){for(var a=o[l],u=n[a],c=u.type,f=u.attrs,v=u.multiple,s=void 0!==v&&v,d=u.parentType,p=void 0===d?"":d,y=0;y<e.length;y++){var m=e[y],b=null==m?void 0:m.type,g=null==m?void 0:m.attrs,h=(null==m?void 0:m.content)||[];if(b===c){if(g){var w=!0;for(var x in f)if(f[x]!==(null==g?void 0:g[x])){w=!1;break}if(!w)continue}var k=null;if(["heading"].includes(c))k=h.map((function(t){var e=t.text,n=t.marks,r=void 0===n?[]:n;if(!r.length)return e;var i=e;return r.forEach((function(t){var e=t.type;if("link"===e){var n=(null==t?void 0:t.attrs)||{},r=n.href,o=n.target;i='<a target="'.concat(o,'" href="').concat(r,'">').concat(i,"</a>")}else if("textStyle"===e){var l=((null==t?void 0:t.attrs)||{}).color;"string"==typeof l&&l&&(i='<span style="color: var(--'.concat(l,')"}>').concat(i,"</span>"))}else"bold"===e&&(i='<span style="font-weight: 700"}>'.concat(i,"</span>"))})),i})).join("");else if("ImageBlock"===c){var j=g.info,S=g.targetId,O=g.caption,A=void 0===O?"":O,I=g.direction,T=void 0===I?"center":I,E=j.contentType,z=j.viewType,B=j.contentId,C=j.identifier,N=j.version,P=j.filename;k={contentType:E,viewType:z,contentId:S||B,value:"".concat(N,"/").concat(C,"/").concat(P),alt:A,size:{center:"basic",wide:"lg",fill:"full"}[T]}}else if("Video"===c){var M=g.src,D=g.caption;k={src:M,caption:void 0===D?"":D}}if(k){if(!s){r[a]=k;break}null!=r&&r[a]||(r[a]=new Map),r[a].set(y,k)}}else if(b===p)"bulletList"===p&&function(){var e=h.map((function(t){return"listItem"===t.type?t.content:null})).filter(Boolean),n={type:c,attrs:f,multiple:s,parentType:p},o=e.map((function(e){var r=t(e,i({},a,n));if(Object.keys(r).length){if(Array.isArray(r[a])){var o,l,u,c=(null===(o=e.find((function(t){var e,n;return"paragraph"===t.type&&"text"===(null===(e=t.content)||void 0===e||null===(n=e[0])||void 0===n?void 0:n.type)})))||void 0===o||null===(l=o.content)||void 0===l||null===(u=l[0])||void 0===u?void 0:u.text)||"";r.label=c}return r}return null})).filter(Boolean);o.length&&(r[a]=o)}();else if("link"===c)for(var J=null,L=0;L<h.length;L++){for(var U=h[L],V=(null==U?void 0:U.marks)||[],Z=0;Z<V.length;Z++){var $=V[Z];if((null==$?void 0:$.type)===c){var q;J={href:null==$||null===(q=$.attrs)||void 0===q?void 0:q.href,label:(null==U?void 0:U.text)||""};break}}if(J){if(!s){r[a]=J;break}null!=r&&r[a]||(r[a]=new Map),r[a].set(y,J)}}}},a=0;a<o.length;a++)l(a);return r},c=function(t,e){var n=(null==t?void 0:t.content)||[],i=[],o=[];if(n.forEach((function(t){if("DividerBlock"===t.type){if(o.length){var n=u(r(o),e);Object.keys(n).length&&i.push(n)}o=[]}else o.push(t)})),o.length){var l=u(r(o),e);Object.keys(l).length&&i.push(l)}return i},f=function(t,e,n){var r=function(t){var e;return 0===t.indexOf("topic:")&&((null===(e=t.split(":"))||void 0===e?void 0:e[1])||!1)}(t);if(!r)return t;var i=function(t){var e={};return t.forEach((function(t){t.pages.forEach((function(t){var n=t.id,r=t.route;e[n]=r}))})),e}(e);return a((null==i?void 0:i[r])||t,"",n)}},5674:(t,e,n)=>{n.d(e,{Z:()=>a});var r,i=n(8966),o=n.n(i),l=n(9261);const a=function(t){var e,n,i=t.className,a=t.children,u=t.element,c=t.size,f=void 0===c?"md":c,v=t.style,s=void 0===v?{}:v,d=u||"section";return o().createElement(d,{className:(0,l.tw)(r||(e=["mx-auto "," px-4 sm:px-6 lg:px-8 ",""],n||(n=e.slice(0)),r=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))),{md:"2xl:max-w-[80rem] xl:max-w-[72rem] lg:max-w-[95%]",lg:"2xl:max-w-[100rem] xl:max-w-[80rem] lg:max-w-[95%]"}[f],i),style:s},a)}},9261:(t,e,n)=>{n.d(e,{iv:()=>i.css,tw:()=>a});var r=n(8220),i=n(5372),o=(n(918),n(9396),n(3406)),l=n(5256);window.twind||(r.setup({theme:{extend:{colors:l}},plugins:{aspect:o.D}}),window.twind=r);var a=r.tw;r.apply}}]);
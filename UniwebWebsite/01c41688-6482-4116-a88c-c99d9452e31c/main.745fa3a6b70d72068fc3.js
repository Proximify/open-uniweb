"use strict";(self.webpackChunkbuilder=self.webpackChunkbuilder||[]).push([[887],{5061:(e,t,r)=>{r.d(t,{Ai:()=>o,NC:()=>i,V2:()=>l,jx:()=>c,s2:()=>a});var n=uniweb.getServices(),i=(n.client,n.postClient,n.localize),o=(n.getProfiles,n.getProfile),l=n.getListProfileItems,a=n.findLink,c=n.queryFromContent;n.parseLinksInArticle,n.getFirstElementInMap},4542:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(8966),i=r(1014);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var l=["external","children","target","title","style","className","to","ariaLabel"];function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===o(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){var t,r,o,c=e.external,s=void 0!==c&&c,f=e.children,b=e.target,p=void 0===b?"_self":b,v=e.title,y=void 0===v?"":v,d=e.style,m=void 0===d?null:d,O=e.className,g=void 0===O?"":O,w=e.to,j=void 0===w?"":w,h=e.ariaLabel,P=void 0===h?"":h,S=function(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}(e,l),k={className:g,style:m};P&&(k["aria-label"]=P),y&&(k.title=y);var x=j,E=null===(t=uniweb.config.data)||void 0===t||null===(r=t.domainsInfo)||void 0===r||null===(o=r.info)||void 0===o?void 0:o.base_route;if(x)if(0===x.indexOf("*"))x=x.substring(1);else if(E&&0===x.indexOf("/")&&!s){var D,I,L=null===(D=uniweb.config.data)||void 0===D||null===(I=D.domainsInfo)||void 0===I?void 0:I.appDomain;x="".concat(L).concat(x)}var C=x.includes("https://")||x.includes("http://");return s||C?(k=u(u({},k),{},{target:p,href:x}),n.createElement("a",k,f)):(k=u(u({},k),{},{target:p,to:x}),n.createElement(i.Link,a({},k,S),f))}},8074:(e,t,r)=>{r.d(t,{Sf:()=>o.S,iv:()=>i.css,tw:()=>c});var n=r(8220),i=r(5372),o=(r(918),r(9396)),l=r(3406),a=r(5256);window.twind||(n.setup({theme:{extend:{colors:a}},plugins:{aspect:l.D}}),window.twind=n);var c=n.tw;n.apply}}]);
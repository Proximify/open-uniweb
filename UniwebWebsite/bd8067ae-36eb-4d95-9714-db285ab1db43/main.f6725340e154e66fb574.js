"use strict";(self.webpackChunkbuilder=self.webpackChunkbuilder||[]).push([[614],{474:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var n=r(8966),l=r.n(n);r(2794),r(1714),r(8074),r(5125),r(4772),r(6324);var i=r(5061);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,i,o,a=[],u=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);u=!0);}catch(e){c=!0,l=e}finally{try{if(!u&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(c)throw l}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function u(e){var t,r,a,u=e.image,c=e.alt,f=e.link,s=e.activeLang,m=(e.language,e.setLang,e.child_items),v=(e.activeRoute,e.targetRoute,e.documents,e.documentId,e.properties),d=e.content,p=(e.makeLink,o((0,n.useState)(null),2)),y=p[0],b=p[1],g=o((0,n.useState)(!1),2);g[0],g[1],(0,n.useRef)(null),(0,n.useEffect)((function(){if(d){var e=(0,i.jx)(d,{img:{type:"ImageBlock"},link:{type:"link"},links:{type:"link",parentType:"bulletList"}});b((null==e?void 0:e[0])||null)}}),[d]);var h=(null==y?void 0:y.links)||[],w=Array.from(m.values());return h.length?h.filter((function(e){return Array.isArray(e.links)})).map((function(e){return e.links.map((function(e){return e.links}))})):w.filter((function(e){var t;return null===(t=e.child_items)||void 0===t?void 0:t.size})).map((function(e){return Array.from(e.child_items.values())})),h.length?h.filter((function(e){return!Array.isArray(e.links)})).map((function(e){return e.links})):w.filter((function(e){var t;return!(null!==(t=e.child_items)&&void 0!==t&&t.size)})),v.sticky,v.bgColor,v.textColor,v.menuWidth,(null==y||null===(t=y.img)||void 0===t?void 0:t.value)||(0,i.NC)(u,"",s),(null==y||null===(r=y.img)||void 0===r?void 0:r.alt)||(0,i.NC)(c,"",s),(null==y||null===(a=y.link)||void 0===a?void 0:a.href)||(0,i.NC)(f,"",s,!0),l().createElement("p",null,"222")}r(4542),r(3157),r(2500)},3157:(e,t,r)=>{r.d(t,{Z:()=>c});var n,l=r(8966),i=r.n(l),o=r(8074),a=r(5061);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const c=(0,l.memo)((function(e){var t,r,l=e.contentType,c=void 0===l?"docufolio":l,f=e.viewType,s=void 0===f?"profile":f,m=e.contentId,v=e.value,d=e.alt,p=void 0===d?"":d,y=e.activeLang,b=e.className,g=void 0===b?(0,o.tw)(n||(t=["w-full h-full object-cover"],r||(r=t.slice(0)),n=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(r)}})))):b,h=e.filePreview,w=void 0!==h&&h,j="resources"===c?"equipment":c;if(!v)return null;var k,x,A,O=(x=v.split("/"),A=3,function(e){if(Array.isArray(e))return e}(x)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,i,o,a=[],u=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);u=!0);}catch(e){c=!0,l=e}finally{try{if(!u&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(c)throw l}}return a}}(x,A)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}(x,A)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),S=O[0],I=O[1],C=O[2],T=C.split(".").pop();k=w&&!["jpg","jpeg","png","webp","gif","svg"].includes(T)?uniweb.getProfileAssertUrl({finalType:j,viewType:s,contentId:m,identifier:"".concat(I,"_preview"),version:S,ext:"webp"}):uniweb.getProfileAssertUrl({finalType:j,viewType:s,contentId:m,identifier:I,version:S,ext:T});var N=(0,a.NC)(p,"",y)||C;return i().createElement("img",{src:k,className:g,alt:N})}))},2500:(e,t,r)=>{r.d(t,{Z:()=>c});var n,l,i=r(8966),o=r.n(i),a=r(8074);function u(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const c=function(e){var t=e.className,r=e.children,i=e.element,c=e.size,f=void 0===c?"md":c,s=e.style,m=void 0===s?{}:s,v=e.theme,d=e.withDefaultStyle,p=i||"section",y=void 0===d||d?(0,a.tw)(n||(n=u(["mx-auto "," px-4 sm:px-6 lg:px-8 ",""])),{md:"2xl:max-w-[80rem] xl:max-w-[72rem] lg:max-w-[95%]",lg:"2xl:max-w-[100rem] xl:max-w-[80rem] lg:max-w-[95%]"}[f],t)+" "+v:(0,a.tw)(l||(l=u(["",""])),t)+" "+v;return o().createElement(p,{className:y,style:m},r)}}}]);
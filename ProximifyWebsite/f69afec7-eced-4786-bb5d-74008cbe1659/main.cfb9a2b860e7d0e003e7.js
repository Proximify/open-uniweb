"use strict";(self.webpackChunkdeployer=self.webpackChunkdeployer||[]).push([[899],{3796:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var n=r(8966),l=r.n(n);function i(e){return e.image,e.alt,e.link,e.activeLang,e.language,e.setLang,e.child_items,e.activeRoute,e.targetRoute,e.documents,e.documentId,e.properties,e.content,e.makeLink,l().createElement("p",null,"fff prod")}r(3212),r(2471),r(9261),r(2030),r(6689),r(1458),r(7772),r(3085),r(8450),r(5674)},8450:(e,t,r)=>{r.d(t,{Z:()=>u});var n,l=r(8966),i=r.n(l),a=r(9261),o=r(7772);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const u=(0,l.memo)((function(e){var t,r,l=e.contentType,u=void 0===l?"docufolio":l,s=e.viewType,f=void 0===s?"profile":s,m=e.contentId,p=e.value,d=e.alt,v=void 0===d?"":d,y=e.activeLang,w=e.className,g=void 0===w?(0,a.tw)(n||(t=["w-full h-full object-cover"],r||(r=t.slice(0)),n=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(r)}})))):w,b=e.filePreview,x=void 0!==b&&b,h="resources"===u?"equipment":u;if(!p)return null;var j,O,A,k=(O=p.split("/"),A=3,function(e){if(Array.isArray(e))return e}(O)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,i,a,o=[],c=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(o.push(n.value),o.length!==t);c=!0);}catch(e){u=!0,l=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw l}}return o}}(O,A)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}(O,A)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),I=k[0],T=k[1],z=k[2],N=z.split(".").pop();j=x&&!["jpg","jpeg","png","webp","gif","svg"].includes(N)?uniweb.getProfileAssertUrl({finalType:h,viewType:f,contentId:m,identifier:"".concat(T,"_preview"),version:I,ext:"webp"}):uniweb.getProfileAssertUrl({finalType:h,viewType:f,contentId:m,identifier:T,version:I,ext:N});var P=(0,o.NC)(v,"",y)||z;return i().createElement("img",{src:j,className:g,alt:P})}))},5674:(e,t,r)=>{r.d(t,{Z:()=>o});var n,l=r(8966),i=r.n(l),a=r(9261);const o=function(e){var t,r,l=e.className,o=e.children,c=e.element,u=e.size,s=void 0===u?"md":u,f=e.style,m=void 0===f?{}:f,p=c||"section";return i().createElement(p,{className:(0,a.tw)(n||(t=["mx-auto "," px-4 sm:px-6 lg:px-8 ",""],r||(r=t.slice(0)),n=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(r)}}))),{md:"2xl:max-w-[80rem] xl:max-w-[72rem] lg:max-w-[95%]",lg:"2xl:max-w-[100rem] xl:max-w-[80rem] lg:max-w-[95%]"}[s],l),style:m},o)}}}]);
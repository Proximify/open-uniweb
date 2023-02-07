"use strict";(self.webpackChunkbuilder=self.webpackChunkbuilder||[]).push([[606],{606:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=n(966),a=n.n(r),l=n(995),o=n(678),i=n(357);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,i=[],c=!0,s=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=l.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(s)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e){var t,n,s=e.main,u=e.items,m=e.documentId,d=e.activeLang,f=e.theme,v=e.properties,p=s.header||{},h=p.title||"",y=p.subtitle||"",b=(null==p?void 0:p.alignment)||"left",g=c((0,i.Z)(),1)[0],E=(null==v?void 0:v.id)||"";(0,r.useEffect)((function(){g==="#".concat(E)&&document.querySelector("#".concat(E)).scrollIntoView()}),[g,E]);var x=u.map((function(e){var t=e.header,n=e.body,r=t.subtitle,a=t.description,l=(null==n?void 0:n.imgs)||[],o=null,i=null;return l.forEach((function(e){"small"===e.direction?o=e:i=e})),{title:r,description:a,logo:o,picture:i}})),w=c((0,r.useState)(0),2),N=w[0],j=w[1],S=x[N]||{};return a().createElement("section",{className:"py-20 sm:py-32 "+f,id:E},a().createElement(o.Z,{className:"flex ".concat("center"===b?"justify-center text-center":"left"===b?"justify-start text-left":"justify-end text-right")},a().createElement("div",{className:"mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl"},a().createElement("h2",{className:"text-3xl font-medium tracking-tight"},h),a().createElement("p",{className:"mt-2 text-lg"},y))),a().createElement(o.Z,{className:"mt-12 md:mt-20"},a().createElement("div",{className:"grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24"},a().createElement("div",{className:"relative z-10 order-last col-span-12 lg:col-span-6 space-y-6",role:"tablist","aria-orientation":"vertical"},x.map((function(e,t){var n=e.title,r=e.description,o=e.logo;return a().createElement("div",{key:t,onClick:function(){j(t)},className:"relative rounded-2xl transition-colors hover:bg-[color:var(--accent)]"},N===t?a().createElement("div",{className:"absolute inset-0 bg-[var(--secondary)]",style:{borderRadius:"2.85714% / 6.89655%",transform:"none",transformOrigin:"50% 50% 0px"}}):null,a().createElement("div",{className:"relative z-10 p-8"},a().createElement(l.Z,{contentId:m,value:null==o?void 0:o.value,alt:null==o?void 0:o.alt,activeLang:d,className:"w-8 h-8 object-cover "}),a().createElement("h3",{className:"mt-6 text-lg font-semibold"},a().createElement("button",{className:"text-left [&:not(:focus-visible)]:focus:outline-none",role:"tab",type:"button",tabIndex:"-1"},a().createElement("span",{className:"absolute inset-0 rounded-2xl"}),n)),a().createElement("p",{className:"mt-2 text-sm"},r)))}))),a().createElement("div",{className:"relative col-span-12 lg:col-span-6"},a().createElement("div",{className:"hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"},a().createElement("svg",{viewBox:"0 0 558 558",width:"558",height:"558",fill:"none","aria-hidden":"true",className:"animate-spin-slow"},a().createElement("defs",null,a().createElement("linearGradient",{id:":rd:",x1:"79",y1:"16",x2:"105",y2:"237",gradientUnits:"userSpaceOnUse"},a().createElement("stop",{stopColor:"#13B5C8"}),a().createElement("stop",{offset:"1",stopColor:"#13B5C8",stopOpacity:"0"}))),a().createElement("path",{opacity:".2",d:"M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z",stroke:"#13B5C8"}),a().createElement("path",{d:"M1 279C1 125.465 125.465 1 279 1",stroke:"url(#:rd:)",strokeLinecap:"round"}))),a().createElement("div",{className:"relative z-10 mx-auto w-full max-w-[386px] h-[520px]"},a().createElement(l.Z,{contentId:m,value:null==S||null===(t=S.picture)||void 0===t?void 0:t.value,alt:null==S||null===(n=S.picture)||void 0===n?void 0:n.alt,activeLang:d,className:"w-full h-full object-cover rounded-lg relative z-10"}))))))}},357:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(966),a=n.n(r);function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const o=function(){var e,t,n=(e=a().useState((function(){return window.location.hash})),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,i=[],c=!0,s=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=l.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(s)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=n[0],o=n[1],i=a().useCallback((function(){o(window.location.hash)}),[]);a().useEffect((function(){return window.addEventListener("hashchange",i),function(){window.removeEventListener("hashchange",i)}}),[]);var c=a().useCallback((function(e){e!==r&&(window.location.hash=e)}),[r]);return[r,c]}}}]);
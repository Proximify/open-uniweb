"use strict";(self.webpackChunkbuilder=self.webpackChunkbuilder||[]).push([[679],{679:(e,t,l)=>{l.r(t),l.d(t,{default:()=>L});var n,a,r,i,o,c,m,u,s,d,x,p,f,w,v,g,y,h,b=l(966),E=l.n(b),k=l(324),N=l(74),S=l(797);function j(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var l=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var n,a,r,i,o=[],c=!0,m=!1;try{if(r=(l=l.call(e)).next,0===t){if(Object(l)!==l)return;c=!1}else for(;!(c=(n=r.call(l)).done)&&(o.push(n.value),o.length!==t);c=!0);}catch(e){m=!0,a=e}finally{try{if(!c&&null!=l.return&&(i=l.return(),Object(i)!==i))return}finally{if(m)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?A(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,n=new Array(t);l<t;l++)n[l]=e[l];return n}const L=function(e){var t,l,A,L,z=e.title,O=e.description,C=e.image,_=e.alt,M=e.documentId,T=e.properties,D=e.activeLang,F=e.content,H=e.documents,P=e.makeLink,B=I((0,b.useState)(null),2),W=B[0],q=B[1];(0,b.useEffect)((function(){if(F){var e=(0,S.queryFromContent)(F,{title:{type:"heading",attrs:{level:1}},description:{type:"heading",attrs:{level:2},multiple:!0},img:{type:"ImageBlock",multiple:!0},video:{type:"Video"},links:{type:"link",multiple:!0}});q((null==e?void 0:e[0])||null)}}),[F]);var J=null!=W&&W.img?Array.from(W.img):[],U=null===(t=J[0])||void 0===t?void 0:t[1],V=null===(l=J[1])||void 0===l?void 0:l[1],$=T.textAlign,G=void 0===$?"center":$,K=T.textColor,Q=void 0===K?"":K,R=T.imagePosition,X=void 0===R?"center":R,Y=T.textShadowColor,Z=void 0===Y?"":Y,ee=(0,N.iv)({color:Q,textAlign:G}),te=(0,N.iv)({objectPosition:X,objectFit:"cover"}),le=(null==W?void 0:W.title)||(0,S.localize)(z,"",D),ne=(0,S.localize)(O,"",D)||"",ae=(null==U?void 0:U.value)||(0,S.localize)(C,"",D),re=(null==U?void 0:U.alt)||(0,S.localize)(_,"",D),ie={center:"basic",wide:"lg",fill:"full"}[null==U?void 0:U.direction]||"",oe=(null==W||null===(A=W.video)||void 0===A?void 0:A.src)||"",ce=(null==W||null===(L=W.video)||void 0===L?void 0:L.caption)||"",me=[];W&&null!=W&&W.links&&(me=Array.from(W.links).map((function(e){var t=I(e,2),l=t[0],n=t[1];return[l,{link:n.href,label:n.label}]})));var ue=[];W&&null!=W&&W.description&&(ue=Array.from(W.description));var se=(0,N.iv)({flex:"0 0 50%",maxWidth:"50%"});return E().createElement("div",{className:(0,N.tw)(n||(n=j(["relative"])))},E().createElement("section",{className:(0,N.tw)(a||(a=j([""," mb-6 md:mb-12"])),function(){switch(ie){case"lg":return"mx-auto 2xl:max-w-[116rem] xl:max-w-[90rem] lg:max-w-[95%] px-0 md:px-6 lg:px-8";case"full":return"w-full";default:return"mx-auto 2xl:max-w-[80rem] xl:max-w-[72rem] lg:max-w-[95%] px-0 md:px-6 lg:px-8"}}())},E().createElement("div",{className:(0,N.tw)(r||(r=j(["relative shadow-xl sm:overflow-hidden ",""])),"full"!==ie?"md:rounded-2xl":"")},E().createElement("figure",{className:(0,N.tw)(i||(i=j(["absolute inset-0"])))},ae?E().createElement(S.DocumentImage,{contentId:M,value:ae,className:(0,N.tw)(o||(o=j(["h-full w-full ",""])),te),alt:re,activeLang:D}):null,E().createElement("div",{className:(0,N.tw)(c||(c=j(["absolute inset-0"])))})),E().createElement("div",{className:(0,N.tw)(m||(m=j([""," ",""])),oe?"flex flex-col flex-col-reverse md:(flex-row space-x-12) lg:(space-x-16) xl:(space-x-20) justify-between items-center relative ".concat("right"===G?"flex-row-reverse":""," px-4 py-6 md:py-12 sm:(px-6) lg:(px-8 py-20) xl:py-24"):V?"flex flex-col items-".concat(G," relative px-0 pt-8 md:(px-6 pt-16) lg:(px-8 pt-20) space-y-8 md:space-y-12"):"flex justify-".concat(G," relative px-4 py-16 sm:(px-6 py-28) md:py-36 lg:(px-8 py-40) xl:py-44"),"full"===ie?"mx-auto lg:max-w-[95%] xl:max-w-[80rem] 2xl:max-w-[100rem]":"")},E().createElement("header",{className:(0,N.tw)(u||(u=j([""," px-4"])),oe?"max-w-[100%] sm:max-w-[90%] mt-6 lg:(max-w-[50%] mt-0) mx-auto":"max-w-[100%] md:max-w-[80%] lg:max-w-[70%]")},E().createElement("h2",{className:(0,N.tw)(s||(s=j(["mb-3 md:mb-5 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight ",""])),ee),dangerouslySetInnerHTML:{__html:le},style:{textShadow:Z?"".concat(Z," 1px 0 5px"):""}}),ne?E().createElement("p",{className:(0,N.tw)(d||(d=j(["font-medium text-lg xl:text-xl 2xl:text-2xl ",""])),ee),dangerouslySetInnerHTML:{__html:ne},style:{textShadow:Z?"".concat(Z," 1px 0 5px"):""}}):E().createElement("div",{className:(0,N.tw)(x||(x=j(["space-y-2"])))},ue.map((function(e,t){var l=I(e,2)[1];return E().createElement("p",{key:t,className:(0,N.tw)(p||(p=j(["font-medium text-lg xl:text-xl 2xl:text-2xl ",""])),ee),dangerouslySetInnerHTML:{__html:l},style:{textShadow:Z?"".concat(Z," 1px 0 5px"):""}})}))),me.length?E().createElement("div",{className:(0,N.tw)(f||(f=j(["flex justify-"," mt-8"])),G)},me.map((function(e,t){var l=I(e,2)[1],n=l.label,a=l.link,r=(0,S.localize)(a,"",D),i=r.includes("https:")||r.startsWith("mailto:"),o=i?r:P((0,S.findLink)(r,H,D));return E().createElement(S.SmartLink,{key:t,className:(0,N.tw)(w||(w=j(["inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"]))),to:o,external:i},E().createElement(k.ixJ,{className:(0,N.tw)(v||(v=j(["-ml-1 mr-2 h-5 w-5"]))),"aria-hidden":"true"}),(0,S.localize)(n,"",D))}))):null),oe?E().createElement("div",{className:(0,N.tw)(g||(g=j(["w-screen md:("," )"])),se)},E().createElement("iframe",{className:(0,N.tw)(y||(y=j(["w-full min-h-[420px] md:(mx-auto max-w-[800px] !max-h-screen min-h-[460px]) md:rounded-lg"]))),src:oe,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:ce})):null,V?E().createElement("figure",{className:(0,N.tw)(h||(h=j(["w-full md:(!shadow-xl rounded-t-md overflow-hidden)"])))},E().createElement(S.DocumentImage,{contentId:M,value:V.value,alt:V.alt,activeLang:D})):null))))}},74:(e,t,l)=>{l.d(t,{iv:()=>a.css,tw:()=>o});var n=l(220),a=l(372),r=(l(918),l(396),l(406)),i=l(256);window.twind||(n.setup({theme:{extend:{colors:i}},plugins:{aspect:r.D}}),window.twind=n);var o=n.tw;n.apply}}]);
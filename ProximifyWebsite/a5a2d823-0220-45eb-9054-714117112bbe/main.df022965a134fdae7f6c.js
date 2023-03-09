"use strict";(self.webpackChunkbuilder=self.webpackChunkbuilder||[]).push([[837],{2837:(e,t,l)=>{l.r(t),l.d(t,{default:()=>S});var r,n,i,a,o,c,u,m,s,d,f,v,p,y,b,w=l(8966),g=l.n(w),x=l(5061),h=l(4772),j=l(3157),N=l(4542),E=l(8074),k=l(2500);function A(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var l=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var r,n,i,a,o=[],c=!0,u=!1;try{if(i=(l=l.call(e)).next,0===t){if(Object(l)!==l)return;c=!1}else for(;!(c=(r=i.call(l)).done)&&(o.push(r.value),o.length!==t);c=!0);}catch(e){u=!0,n=e}finally{try{if(!c&&null!=l.return&&(a=l.return(),Object(a)!==a))return}finally{if(u)throw n}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return O(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?O(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,r=new Array(t);l<t;l++)r[l]=e[l];return r}const S=function(e){var t,l,O,S,I,T,_,L,z=e.title,P=e.description,M=e.child_items,H=e.image,Z=e.alt,U=e.documentId,W=e.properties,F=e.activeLang,$=e.makeLink,q=e.content,B=e.documents,D=C((0,w.useState)(null),2),V=D[0],G=D[1];(0,w.useEffect)((function(){if(q){var e=(0,x.jx)(q,{title:{type:"heading",attrs:{level:1}},subtitle:{type:"heading",attrs:{level:2}},description:{type:"heading",attrs:{level:3},multiple:!0},img:{type:"ImageBlock"},video:{type:"Video"},links:{type:"link",multiple:!0}});G((null==e?void 0:e[0])||null)}}),[q]);var J,K=W.imgPosition,Q=void 0===K?"":K,R=W.bgColor,X=void 0===R?"white":R,Y=W.fullWidth,ee=void 0!==Y&&Y,te=W.textColor,le=void 0===te?"var(--primary)":te,re=W.borderColor,ne=void 0===re?"var(--secondary)":re,ie=W.arrowColor,ae=void 0===ie?"var(--secondary)":ie,oe=W.linkColor,ce=void 0===oe?"var(--info)":oe,ue="",me="",se="pl-8 pr-12";se="left"===Q?"pl-12 pr-8":se,J="left"===Q?"flex-row-reverse":"flex-row",ee&&(me=(0,E.iv)({maxHeight:"250px"}),ue="md:(absolute ".concat("left"===Q?"left-0":"right-0"," max-h-screen) w-full h-full"));var de=(0,E.iv)({flex:"0 0 50%",maxWidth:"50%"}),fe=(0,E.tw)(r||(r=A(["block object-cover w-full h-full object-center"]))),ve=(0,E.iv)({borderLeft:"4px solid",borderColor:ne}),pe=(0,E.iv)({color:le}),ye=(0,E.iv)({color:ae}),be=Array.from(M),we=V&&null!=V&&V.title?V.title:(0,x.NC)(z,"",F),ge=V&&null!=V&&V.subtitle?V.subtitle:"",xe=(0,x.NC)(P,"",F),he=V&&null!=V&&null!==(t=V.img)&&void 0!==t&&t.alt?null==V||null===(l=V.img)||void 0===l?void 0:l.alt:(0,x.NC)(Z,"",F),je=V&&null!=V&&null!==(O=V.img)&&void 0!==O&&O.value?null==V||null===(S=V.img)||void 0===S?void 0:S.value:(0,x.NC)(H,"",F),Ne=V&&null!=V&&null!==(I=V.video)&&void 0!==I&&I.caption?null==V||null===(T=V.video)||void 0===T?void 0:T.caption:"",Ee=V&&null!=V&&null!==(_=V.video)&&void 0!==_&&_.src?null==V||null===(L=V.video)||void 0===L?void 0:L.src:"",ke=be;V&&null!=V&&V.links&&(ke=Array.from(V.links).map((function(e){var t=C(e,2),l=t[0],r=t[1];return[l,{link:r.href,label:r.label}]})));var Ae=[];return V&&null!=V&&V.description&&(Ae=Array.from(V.description)),g().createElement("div",{className:(0,E.tw)(n||(n=A(["relative"]))),style:{background:X}},g().createElement(k.Z,{className:(0,E.tw)(i||(i=A(["flex flex-col md:(",") !px-0 md:!px-8 mb-6 md:(mb-12)"])),J)},g().createElement("header",{className:(0,E.tw)(a||(a=A(["w-full order-last md:("," order-none)"])),de)},g().createElement("div",{className:(0,E.tw)(o||(o=A(["py-12 md:py-24 px-8 md:(",") ",""])),se,pe)},we?g().createElement("h2",{className:(0,E.tw)(c||(c=A(["pl-4 mb-2 md:mb-4 "," text-xl md:text-2xl lg:text-3xl font-bold capitalize ",""])),ve,pe),dangerouslySetInnerHTML:{__html:we}}):null,ge?g().createElement("h3",{className:(0,E.tw)(u||(u=A(["mb-2 md:mb-4 text-lg md:text-xl lg:text-2xl font-semibold ",""])),pe),dangerouslySetInnerHTML:{__html:ge}}):null,xe?g().createElement("p",{className:(0,E.tw)(m||(m=A(["mb-2 md:mb-4 text-base md:text-lg ",""])),pe),dangerouslySetInnerHTML:{__html:xe}}):g().createElement("div",{className:(0,E.tw)(s||(s=A(["space-y-2"])))},Ae.map((function(e,t){var l=C(e,2)[1];return g().createElement("p",{key:t,className:(0,E.tw)(d||(d=A(["text-base md:text-lg ",""])),pe),dangerouslySetInnerHTML:{__html:l}})}))),ke.length?ke.map((function(e,t){var l=C(e,2)[1],r=l.label,n=l.link,i=(0,x.NC)(n,"",F),a=i.includes("https:"),o=a?i:$((0,x.s2)(i,B,F));return g().createElement(N.Z,{key:t,className:(0,E.tw)(f||(f=A(["my-2 md:my-4 flex font-semibold items-center text-base md:text-lg hover:underline h-11"]))),to:o,external:a},g().createElement("span",{style:{color:ce}},(0,x.NC)(r,"",F)),g().createElement(h.WFu,{className:(0,E.tw)(v||(v=A(["ml-3 w-6 h-6 ",""])),ye)}))})):null)),je?g().createElement("figure",{className:(0,E.tw)(p||(p=A(["w-full "," md:("," !max-h-screen) ",""])),me,de,ue)},g().createElement(j.Z,{contentId:U,value:je,className:(0,E.tw)(y||(y=A(["",""])),fe),alt:he,activeLang:F})):null,Ee?g().createElement("iframe",{className:(0,E.tw)(b||(b=A(["w-full min-h-[420px] md:("," !max-h-screen) md:rounded-md"])),de),src:Ee,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:Ne}):null))}},3157:(e,t,l)=>{l.d(t,{Z:()=>u});var r,n=l(8966),i=l.n(n),a=l(8074),o=l(5061);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,r=new Array(t);l<t;l++)r[l]=e[l];return r}const u=(0,n.memo)((function(e){var t,l,n=e.contentType,u=void 0===n?"docufolio":n,m=e.viewType,s=void 0===m?"profile":m,d=e.contentId,f=e.value,v=e.alt,p=void 0===v?"":v,y=e.activeLang,b=e.className,w=void 0===b?(0,a.tw)(r||(t=["w-full h-full object-cover"],l||(l=t.slice(0)),r=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(l)}})))):b,g=e.filePreview,x=void 0!==g&&g,h="resources"===u?"equipment":u;if(!f)return null;var j,N,E,k=(N=f.split("/"),E=3,function(e){if(Array.isArray(e))return e}(N)||function(e,t){var l=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var r,n,i,a,o=[],c=!0,u=!1;try{if(i=(l=l.call(e)).next,0===t){if(Object(l)!==l)return;c=!1}else for(;!(c=(r=i.call(l)).done)&&(o.push(r.value),o.length!==t);c=!0);}catch(e){u=!0,n=e}finally{try{if(!c&&null!=l.return&&(a=l.return(),Object(a)!==a))return}finally{if(u)throw n}}return o}}(N,E)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?c(e,t):void 0}}(N,E)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),A=k[0],C=k[1],O=k[2],S=O.split(".").pop();j=x&&!["jpg","jpeg","png","webp","gif","svg"].includes(S)?uniweb.getProfileAssertUrl({finalType:h,viewType:s,contentId:d,identifier:"".concat(C,"_preview"),version:A,ext:"webp"}):uniweb.getProfileAssertUrl({finalType:h,viewType:s,contentId:d,identifier:C,version:A,ext:S});var I=(0,o.NC)(p,"",y)||O;return i().createElement("img",{src:j,className:w,alt:I})}))},2500:(e,t,l)=>{l.d(t,{Z:()=>u});var r,n,i=l(8966),a=l.n(i),o=l(8074);function c(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const u=function(e){var t=e.className,l=e.children,i=e.element,u=e.size,m=void 0===u?"md":u,s=e.style,d=void 0===s?{}:s,f=e.theme,v=e.withDefaultStyle,p=i||"section",y=void 0===v||v?(0,o.tw)(r||(r=c(["mx-auto "," px-4 sm:px-6 lg:px-8 ",""])),{md:"2xl:max-w-[80rem] xl:max-w-[72rem] lg:max-w-[95%]",lg:"2xl:max-w-[100rem] xl:max-w-[80rem] lg:max-w-[95%]"}[m],t)+" "+f:(0,o.tw)(n||(n=c(["",""])),t)+" "+f;return a().createElement(p,{className:y,style:d},l)}}}]);
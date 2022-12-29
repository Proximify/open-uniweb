"use strict";(self.webpackChunkbuilder=self.webpackChunkbuilder||[]).push([[837],{2837:(e,t,l)=>{l.r(t),l.d(t,{default:()=>S});var r,n,i,a,o,c,u,s,m,d,f,v,p,b,y,w=l(8966),g=l.n(w),x=l(5061),h=l(6689),j=l(3157),N=l(4542),E=l(8074),k=l(2500);function A(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var l=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var r,n,i,a,o=[],c=!0,u=!1;try{if(i=(l=l.call(e)).next,0===t){if(Object(l)!==l)return;c=!1}else for(;!(c=(r=i.call(l)).done)&&(o.push(r.value),o.length!==t);c=!0);}catch(e){u=!0,n=e}finally{try{if(!c&&null!=l.return&&(a=l.return(),Object(a)!==a))return}finally{if(u)throw n}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return I(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?I(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,r=new Array(t);l<t;l++)r[l]=e[l];return r}const S=function(e){var t,l,I,S,C,T,_,L,z=e.title,P=e.description,M=e.child_items,H=e.image,Z=e.alt,U=e.documentId,W=e.properties,B=e.activeLang,F=e.makeLink,$=e.content,q=e.documents,V=O((0,w.useState)(null),2),D=V[0],G=V[1];(0,w.useEffect)((function(){if($){var e=(0,x.jx)($,{title:{type:"heading",attrs:{level:1}},subtitle:{type:"heading",attrs:{level:2}},description:{type:"heading",attrs:{level:3},multiple:!0},img:{type:"ImageBlock"},video:{type:"Video"},links:{type:"link",multiple:!0}});G((null==e?void 0:e[0])||null)}}),[$]);var J,K=W.imgPosition,Q=void 0===K?"":K,R=W.bgColor,X=void 0===R?"white":R,Y=W.fullWidth,ee=void 0!==Y&&Y,te=W.textColor,le=void 0===te?"rgb(13,67,92)":te,re=W.borderColor,ne=void 0===re?"rgb(179,71,29)":re,ie="",ae="",oe="pl-8 pr-12";oe="left"===Q?"pl-12 pr-8":oe,J="left"===Q?"flex-row-reverse":"flex-row",ee&&(ae=(0,E.iv)({maxHeight:"250px"}),ie="md:(absolute ".concat("left"===Q?"left-0":"right-0"," max-h-screen) w-full h-full"));var ce=(0,E.iv)({flex:"0 0 50%",maxWidth:"50%"}),ue=(0,E.tw)(r||(r=A(["block object-cover w-full h-full object-center"]))),se=(0,E.iv)({borderLeft:"4px solid",borderColor:ne}),me=(0,E.iv)({color:le}),de=(0,E.iv)({color:ne}),fe=Array.from(M),ve=D&&null!=D&&D.title?D.title:(0,x.NC)(z,"",B),pe=D&&null!=D&&D.subtitle?D.subtitle:"",be=(0,x.NC)(P,"",B),ye=D&&null!=D&&null!==(t=D.img)&&void 0!==t&&t.alt?null==D||null===(l=D.img)||void 0===l?void 0:l.alt:(0,x.NC)(Z,"",B),we=D&&null!=D&&null!==(I=D.img)&&void 0!==I&&I.value?null==D||null===(S=D.img)||void 0===S?void 0:S.value:(0,x.NC)(H,"",B),ge=D&&null!=D&&null!==(C=D.video)&&void 0!==C&&C.caption?null==D||null===(T=D.video)||void 0===T?void 0:T.caption:"",xe=D&&null!=D&&null!==(_=D.video)&&void 0!==_&&_.src?null==D||null===(L=D.video)||void 0===L?void 0:L.src:"",he=fe;D&&null!=D&&D.links&&(he=Array.from(D.links).map((function(e){var t=O(e,2),l=t[0],r=t[1];return[l,{link:r.href,label:r.label}]})));var je=[];return D&&null!=D&&D.description&&(je=Array.from(D.description)),g().createElement("div",{className:(0,E.tw)(n||(n=A(["relative"]))),style:{background:X}},g().createElement(k.Z,{className:(0,E.tw)(i||(i=A(["flex flex-col md:(",") !px-0 md:!px-8 mb-6 md:(mb-12)"])),J)},g().createElement("header",{className:(0,E.tw)(a||(a=A(["w-full order-last md:("," order-none)"])),ce)},g().createElement("div",{className:(0,E.tw)(o||(o=A(["py-12 md:py-24 "," ",""])),oe,me)},ve?g().createElement("h2",{className:(0,E.tw)(c||(c=A(["pl-4 mb-4 "," text-xl sm:text-2xl md:text-3xl font-bold capitalize ",""])),se,me),dangerouslySetInnerHTML:{__html:ve}}):null,pe?g().createElement("h3",{className:(0,E.tw)(u||(u=A(["mb-4 text-base sm:text-lg md:text-xl font-semibold ",""])),me),dangerouslySetInnerHTML:{__html:pe}}):null,be?g().createElement("p",{className:(0,E.tw)(s||(s=A(["mb-4 text-sm sm:text-base md:text-lg ",""])),me),dangerouslySetInnerHTML:{__html:be}}):g().createElement("div",{className:(0,E.tw)(m||(m=A(["space-y-2"])))},je.map((function(e,t){var l=O(e,2)[1];return g().createElement("p",{key:t,className:(0,E.tw)(d||(d=A(["text-sm sm:text-base md:text-lg ",""])),me),dangerouslySetInnerHTML:{__html:l}})}))),he.length?he.map((function(e,t){var l=O(e,2)[1],r=l.label,n=l.link,i=(0,x.NC)(n,"",B),a=i.includes("https:"),o=a?i:F((0,x.s2)(i,q,B));return g().createElement(N.Z,{key:t,className:(0,E.tw)(f||(f=A(["my-4 flex font-semibold text-blue-600 items-center text-lg hover:underline h-11"]))),to:o,external:a},(0,x.NC)(r,"",B),g().createElement(h.WFu,{className:(0,E.tw)(v||(v=A([""," ml-3 w-6 h-6"])),de)}))})):null)),we?g().createElement("figure",{className:(0,E.tw)(p||(p=A(["w-full "," md:("," !max-h-screen) ",""])),ae,ce,ie)},g().createElement(j.Z,{contentId:U,value:we,className:(0,E.tw)(b||(b=A(["",""])),ue),alt:ye,activeLang:B})):null,xe?g().createElement("iframe",{className:(0,E.tw)(y||(y=A(["w-full min-h-[420px] md:("," !max-h-screen) md:rounded-md"])),ce),src:xe,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:ge}):null))}},3157:(e,t,l)=>{l.d(t,{Z:()=>u});var r,n=l(8966),i=l.n(n),a=l(8074),o=l(5061);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,r=new Array(t);l<t;l++)r[l]=e[l];return r}const u=(0,n.memo)((function(e){var t,l,n=e.contentType,u=void 0===n?"docufolio":n,s=e.viewType,m=void 0===s?"profile":s,d=e.contentId,f=e.value,v=e.alt,p=void 0===v?"":v,b=e.activeLang,y=e.className,w=void 0===y?(0,a.tw)(r||(t=["w-full h-full object-cover"],l||(l=t.slice(0)),r=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(l)}})))):y,g=e.filePreview,x=void 0!==g&&g,h="resources"===u?"equipment":u;if(!f)return null;var j,N,E,k=(N=f.split("/"),E=3,function(e){if(Array.isArray(e))return e}(N)||function(e,t){var l=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var r,n,i,a,o=[],c=!0,u=!1;try{if(i=(l=l.call(e)).next,0===t){if(Object(l)!==l)return;c=!1}else for(;!(c=(r=i.call(l)).done)&&(o.push(r.value),o.length!==t);c=!0);}catch(e){u=!0,n=e}finally{try{if(!c&&null!=l.return&&(a=l.return(),Object(a)!==a))return}finally{if(u)throw n}}return o}}(N,E)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?c(e,t):void 0}}(N,E)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),A=k[0],O=k[1],I=k[2],S=I.split(".").pop();j=x&&!["jpg","jpeg","png","webp","gif","svg"].includes(S)?uniweb.getProfileAssertUrl({finalType:h,viewType:m,contentId:d,identifier:"".concat(O,"_preview"),version:A,ext:"webp"}):uniweb.getProfileAssertUrl({finalType:h,viewType:m,contentId:d,identifier:O,version:A,ext:S});var C=(0,o.NC)(p,"",b)||I;return i().createElement("img",{src:j,className:w,alt:C})}))},2500:(e,t,l)=>{l.d(t,{Z:()=>o});var r,n=l(8966),i=l.n(n),a=l(8074);const o=function(e){var t,l,n=e.className,o=e.children,c=e.element,u=e.size,s=void 0===u?"md":u,m=e.style,d=void 0===m?{}:m,f=c||"section";return i().createElement(f,{className:(0,a.tw)(r||(t=["mx-auto "," px-4 sm:px-6 lg:px-8 ",""],l||(l=t.slice(0)),r=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(l)}}))),{md:"2xl:max-w-[80rem] xl:max-w-[72rem] lg:max-w-[95%]",lg:"2xl:max-w-[100rem] xl:max-w-[80rem] lg:max-w-[95%]"}[s],n),style:d},o)}}}]);
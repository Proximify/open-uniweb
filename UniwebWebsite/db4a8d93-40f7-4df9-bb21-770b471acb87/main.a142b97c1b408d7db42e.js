"use strict";(self.webpackChunkdeployer=self.webpackChunkdeployer||[]).push([[349],{5360:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Ne});var n,a,l,i,o,c,s,m,u,d=r(8966),f=r.n(d),v=r(3212),p=r(2471),y=r(9261);function g(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const w=function(e){var t=e.trigger,r=e.options,w=e.menuClassName,b=void 0===w?"":w,h=e.width,x=void 0===h?"64px":h,N=e.zIndex,E=void 0===N?"10":N,k=e.position,j=void 0===k?"top-full right-0 mt-2.5":k,C=e.triggerClassName,A=void 0===C?"":C,I=e.triggerStyle,O=void 0===I?{}:I;return f().createElement(v.J,{className:(0,y.tw)(n||(n=g(["relative"])))},(function(e){var n=e.open;return f().createElement(f().Fragment,null,f().createElement(v.J.Button,{className:(0,y.tw)(a||(a=g([""," ",""])),n?"text-gray-900 ring-2 ring-offset-0":"ring-0",A),style:O},t),f().createElement(p.u,{as:d.Fragment,show:n,enter:(0,y.tw)(l||(l=g(["transition ease-out duration-200"]))),enterFrom:(0,y.tw)(i||(i=g(["opacity-0 translate-y-1"]))),enterTo:(0,y.tw)(o||(o=g(["opacity-100 translate-y-0"]))),leave:(0,y.tw)(c||(c=g(["transition ease-in duration-150"]))),leaveFrom:(0,y.tw)(s||(s=g(["opacity-100 translate-y-0"]))),leaveTo:(0,y.tw)(m||(m=g(["opacity-0 translate-y-1"])))},f().createElement(v.J.Panel,{static:!0,className:(0,y.tw)(u||(u=g(["absolute "," w-[","] z-[","] "," bg-white rounded-md !shadow-xl ring-1 ring-black ring-opacity-10 divide-y divide-gray-200 overflow-hidden"])),j,x,E,b)},(function(e){var t=e.close;return r.map((function(e,r){return f().cloneElement(e,{key:r,onMouseDown:function(){t()}})}))}))))}))};var b,h,x,N,E,k,j,C,A,I,O,z,S,F,L,T,Z,P,_,D,M,R,U,W,B,J,q,V,$,Q,G,H,K,X,Y,ee,te,re,ne,ae,le,ie,oe,ce,se,me=r(2030),ue=r(6689),de=r(1458),fe=r(7772),ve=r(3085),pe=r(8450),ye=r(5674);function ge(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l,i,o=[],c=!0,s=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=l.call(r)).done)&&(o.push(n.value),o.length!==t);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return we(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?we(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function we(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function be(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var he=(0,d.lazy)((function(){return uniweb.getComponent("widgets","SiteSearch").catch((function(){return{default:function(){return null}}}))})),xe=function(e){var t=e.childItems,r=e.articleData,n=void 0===r?null:r,a=e.label,l=e.activeLang,i=e.documents,o=e.labelColor,c=e.menuWidth,s=(0,fe.NC)(a,"",l,!0),m=null;n&&(s=n.label,m=n.links);var u=m?m.map((function(e,t){var r=e.links,n=r.href,a=r.label;return f().createElement(ve.Z,{key:t,to:(0,fe.s2)(n,i,l),className:(0,y.tw)(b||(b=be(["block px-5 py-4 hover:bg-gray-50"])))},f().createElement("span",{className:(0,y.tw)(h||(h=be(["text-base font-medium text-gray-900 truncate block"])))},a))})):t.map((function(e,t){var r=ge(e,2)[1],n=r.label,a=r.link;return r.image,r.alt,f().createElement(ve.Z,{key:t,to:(0,fe.s2)((0,fe.NC)(a,"",l,!0),i,l),className:(0,y.tw)(x||(x=be(["px-5 py-4 hover:bg-gray-50"])))},f().createElement("p",{className:(0,y.tw)(N||(N=be(["text-base font-medium text-gray-900 truncate block"])))},(0,fe.NC)(n,"",l,!0)))}));return f().createElement(w,{trigger:f().createElement(f().Fragment,null,f().createElement("span",null,s),f().createElement(ue.kWQ,{className:(0,y.tw)(E||(E=be(["ml-2 h-5 w-5 hover:opacity-90"]))),style:{color:o||"var(--primary)"},"aria-hidden":"true"})),triggerClassName:"-ml-3 -mr-2 -my-1 pl-3 pr-2 py-1 group inline-flex items-center rounded-md text-base font-semibold hover:opacity-90 focus:outline-none",triggerStyle:{color:o||"var(--primary)","--tw-ring-color":o||"var(--primary)"},position:"top-full -left-[13px] mt-[14px]",width:c,zIndex:"10",options:u})};function Ne(e){var t,r,n,a=e.image,l=e.alt,i=e.link,o=e.activeLang,c=e.language,s=e.setLang,m=e.child_items,u=e.activeRoute,v=e.targetRoute,p=e.documents,g=e.documentId,w=e.properties,b=e.content,h=e.makeLink,x=ge((0,d.useState)(null),2),N=x[0],E=x[1],ue=ge((0,d.useState)(!1),2),we=ue[0],Ne=ue[1],Ee=(0,d.useRef)(null);(0,d.useEffect)((function(){if(b){var e=(0,fe.jx)(b,{img:{type:"ImageBlock"},link:{type:"link"},links:{type:"link",parentType:"bulletList"}});E((null==e?void 0:e[0])||null)}}),[b]);var ke=(null==N?void 0:N.links)||[],je=Array.from(m.values()),Ce=ke.length?ke.filter((function(e){return Array.isArray(e.links)})).map((function(e){return e.links.map((function(e){return e.links}))})):je.filter((function(e){var t;return null===(t=e.child_items)||void 0===t?void 0:t.size})).map((function(e){return Array.from(e.child_items.values())})),Ae=ke.length?ke.filter((function(e){return!Array.isArray(e.links)})).map((function(e){return e.links})):je.filter((function(e){var t;return!(null!==(t=e.child_items)&&void 0!==t&&t.size)})),Ie=w.sticky,Oe=void 0!==Ie&&Ie,ze=w.bgColor,Se=void 0===ze?"white":ze,Fe=w.textColor,Le=void 0===Fe?"#374151":Fe,Te=w.menuWidth,Ze=void 0===Te?"150px":Te,Pe=(null==N||null===(t=N.img)||void 0===t?void 0:t.value)||(0,fe.NC)(a,"",o),_e=(null==N||null===(r=N.img)||void 0===r?void 0:r.alt)||(0,fe.NC)(l,"",o),De=(null==N||null===(n=N.link)||void 0===n?void 0:n.href)||(0,fe.NC)(i,"",o,!0);return f().createElement(f().Fragment,null,f().createElement("div",{className:(0,y.tw)(k||(k=be(["",""])),Oe?"sticky top-0 z-10":""),style:{background:Se}},f().createElement(ye.Z,{className:(0,y.tw)(j||(j=be(["h-9 flex items-center justify-between my-3 md:my-6"]))),element:"nav",size:"lg"},f().createElement("div",{className:(0,y.tw)(C||(C=be(["flex items-center w-full"])))},f().createElement("div",{className:(0,y.tw)(A||(A=be(["flex items-center px-0"])))},f().createElement("div",{className:(0,y.tw)(I||(I=be(["flex-shrink-0"])))},f().createElement(ve.Z,{to:h("/"===De?"":De),className:(0,y.tw)(O||(O=be(["-m-1.5 p-1.5"])))},f().createElement("span",{className:(0,y.tw)(z||(z=be(["sr-only"])))},"Proximify"),f().createElement("div",{className:(0,y.tw)(S||(S=be(["h-9"])))},f().createElement(pe.Z,{contentId:g,value:Pe,className:(0,y.tw)(F||(F=be(["block object-cover w-full h-full object-top"]))),alt:_e,activeLang:o})))),f().createElement("div",{className:(0,y.tw)(L||(L=be(["hidden lg:ml-6 lg:block"])))},f().createElement("div",{className:(0,y.tw)(T||(T=be(["flex items-center space-x-4"])))},ke.length?ke.map((function(e,t){var r=e.links;if(Array.isArray(r))return f().createElement(xe,{key:t,articleData:e,labelColor:Le,activeLang:o,documents:p,documentId:g,menuWidth:Ze});var n=r.href,a=r.label;return f().createElement(ve.Z,{key:t,to:(0,fe.s2)((0,fe.NC)(n,"",o,!0),p,o),className:(0,y.tw)(Z||(Z=be(["text-base font-semibold hover:opacity-90 pr-0.5"]))),style:{color:Le||"var(--primary)"}},(0,fe.NC)(a,"",o,!0))})):je.map((function(e,t){var r=e.label,n=e.link,a=e.child_items;return a.size?f().createElement(xe,{key:t,label:r,childItems:Array.from(a),activeLang:o,documents:p,documentId:g}):f().createElement(ve.Z,{key:t,to:(0,fe.s2)((0,fe.NC)(n,"",o,!0),p,o),className:(0,y.tw)(P||(P=be(["text-base font-semibold hover:opacity-90 pr-0.5"]))),style:{color:Le||"var(--primary)"}},(0,fe.NC)(r,"",o,!0))}))))),f().createElement("div",{className:(0,y.tw)(_||(_=be(["flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end"])))},f().createElement("div",{className:(0,y.tw)(D||(D=be(["w-full max-w-lg lg:max-w-xs"])))},f().createElement("label",{htmlFor:"search",className:(0,y.tw)(M||(M=be(["sr-only"])))},"Search"),f().createElement("div",{className:(0,y.tw)(R||(R=be(["relative"])))},f().createElement(d.Suspense,{fallback:""},f().createElement(he,{activeLang:o,siteId:e.siteId,searchFile:e.searchFile,ga:e.ga,iconClassName:"cursor-pointer w-5 h-5 hover:opacity-90",iconStyle:{color:Le||"var(--primary)"}}))))),f().createElement("div",{className:(0,y.tw)(U||(U=be(["flex lg:hidden"])))},f().createElement("button",{className:(0,y.tw)(W||(W=be(["-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"]))),onClick:function(){return Ne(!0)}},f().createElement("span",{className:(0,y.tw)(B||(B=be(["sr-only"])))},"Open main menu"),f().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true",className:(0,y.tw)(J||(J=be(["h-6 w-6"])))},f().createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})))),f().createElement("div",{className:(0,y.tw)(q||(q=be(["hidden lg:ml-4 lg:block"])))},"bilingual"===c?f().createElement("a",{href:"#",onClick:function(e){e.preventDefault(),s("en"===o?"fr":"en",u,v)}},f().createElement("span",{className:(0,y.tw)(V||(V=be(["text-base font-semibold hover:opacity-90"]))),style:{color:Le||"var(--primary)"}},"en"===o?"FR":"EN")):null)))),f().createElement(me.V,{as:"div",open:we,onClose:Ne,initialFocus:Ee},f().createElement(me.V.Panel,{focus:"true",className:(0,y.tw)($||($=be(["fixed inset-0 z-10 overflow-y-auto bg-white px-4 sm:px-6 py-6 lg:hidden"])))},f().createElement("div",{className:"flex h-9 items-center justify-between"},f().createElement("div",{className:"flex"},f().createElement("a",{href:"",className:(0,y.tw)(Q||(Q=be(["-m-1.5 p-1.5"])))},f().createElement("span",{className:(0,y.tw)(G||(G=be(["sr-only"])))},"Uniweb"),f().createElement("div",{className:(0,y.tw)(H||(H=be(["h-9"])))},f().createElement(pe.Z,{contentId:g,value:Pe,className:(0,y.tw)(K||(K=be(["block object-cover w-full h-full object-top"]))),alt:_e,activeLang:o})))),f().createElement("div",{className:(0,y.tw)(X||(X=be(["flex items-center space-x-1.5 -mr-2.5"])))},f().createElement("a",{href:"#",onClick:function(e){e.preventDefault(),s("en"===o?"fr":"en",u,v)},className:(0,y.tw)(Y||(Y=be(["inline-flex items-center justify-center p-2.5 w-[44px] h-[44px] rounded-md text-base font-semibold leading-6 text-gray-500 hover:text-gray-700 hover:bg-gray-50"])))},f().createElement("span",null,"en"===o?"FR":"EN")),f().createElement("button",{ref:Ee,type:"button",className:(0,y.tw)(ee||(ee=be(["-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-gray-900"]))),onClick:function(){return Ne(!1)}},f().createElement("span",{className:(0,y.tw)(te||(te=be(["sr-only"])))},"Close menu"),f().createElement(de.lTq,{className:(0,y.tw)(re||(re=be(["h-6 w-6"]))),"aria-hidden":"true"})))),f().createElement("div",{className:(0,y.tw)(ne||(ne=be(["mt-6 flow-root"])))},f().createElement("div",{className:(0,y.tw)(ae||(ae=be(["-my-6 divide-y divide-gray-500 divide-opacity-20"])))},f().createElement("div",{className:(0,y.tw)(le||(le=be(["space-y-2 pt-6 pb-4"])))},Ce.map((function(e,t){return f().createElement(d.Fragment,{key:t},e.map((function(e,t){var r=e.label,n=e.href;return f().createElement(ve.Z,{key:t,to:(0,fe.s2)((0,fe.NC)(n,"",o,!0),p,o),className:(0,y.tw)(ie||(ie=be(["-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-700 hover:text-gray-900 hover:bg-gray-400 hover:bg-opacity-10 cursor-pointer"])))},(0,fe.NC)(r,"",o,!0))})))}))),f().createElement("div",{className:(0,y.tw)(oe||(oe=be(["py-6"])))},f().createElement("div",{className:(0,y.tw)(ce||(ce=be(["grid grid-cols-2 gap-y-4 gap-x-8"])))},Ae.map((function(e,t){var r=e.label,n=e.href;return f().createElement(ve.Z,{key:t,to:(0,fe.s2)((0,fe.NC)(n,"",o,!0),p,o),className:(0,y.tw)(se||(se=be(["text-base font-medium text-gray-900 hover:text-gray-700 cursor-pointer"])))},(0,fe.NC)(r,"",o,!0))})))))))))}},8450:(e,t,r)=>{r.d(t,{Z:()=>s});var n,a=r(8966),l=r.n(a),i=r(9261),o=r(7772);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const s=(0,a.memo)((function(e){var t,r,a=e.contentType,s=void 0===a?"docufolio":a,m=e.viewType,u=void 0===m?"profile":m,d=e.contentId,f=e.value,v=e.alt,p=void 0===v?"":v,y=e.activeLang,g=e.className,w=void 0===g?(0,i.tw)(n||(t=["w-full h-full object-cover"],r||(r=t.slice(0)),n=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(r)}})))):g,b=e.filePreview,h=void 0!==b&&b,x="resources"===s?"equipment":s;if(!f)return null;var N,E,k,j=(E=f.split("/"),k=3,function(e){if(Array.isArray(e))return e}(E)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l,i,o=[],c=!0,s=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=l.call(r)).done)&&(o.push(n.value),o.length!==t);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw a}}return o}}(E,k)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}(E,k)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),C=j[0],A=j[1],I=j[2],O=I.split(".").pop();N=h&&!["jpg","jpeg","png","webp","gif","svg"].includes(O)?uniweb.getProfileAssertUrl({finalType:x,viewType:u,contentId:d,identifier:"".concat(A,"_preview"),version:C,ext:"webp"}):uniweb.getProfileAssertUrl({finalType:x,viewType:u,contentId:d,identifier:A,version:C,ext:O});var z=(0,o.NC)(p,"",y)||I;return l().createElement("img",{src:N,className:w,alt:z})}))},5674:(e,t,r)=>{r.d(t,{Z:()=>o});var n,a=r(8966),l=r.n(a),i=r(9261);const o=function(e){var t,r,a=e.className,o=e.children,c=e.element,s=e.size,m=void 0===s?"md":s,u=e.style,d=void 0===u?{}:u,f=c||"section";return l().createElement(f,{className:(0,i.tw)(n||(t=["mx-auto "," px-4 sm:px-6 lg:px-8 ",""],r||(r=t.slice(0)),n=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(r)}}))),{md:"2xl:max-w-[80rem] xl:max-w-[72rem] lg:max-w-[95%]",lg:"2xl:max-w-[100rem] xl:max-w-[80rem] lg:max-w-[95%]"}[m],a),style:d},o)}}}]);
"use strict";(self.webpackChunkbuilder=self.webpackChunkbuilder||[]).push([[900],{3406:(e,t,r)=>{r.d(t,{D:()=>f});var a=r(8220),n=()=>({paddingBottom:"calc(var(--tw-aspect-h)/var(--tw-aspect-w)*100%)"}),l=(e,{theme:t,tag:r})=>"none"===e?a.apply`static pb-0 children:(static h-auto w-auto inset-auto)`:{"--tw-aspect-w":e.w&&"ratio"!==e.w&&t("aspectRatio",""+e.w,""+e.w),"--tw-aspect-h":e.h&&t("aspectRatio",""+e.h,""+e.h),_:e.h&&"ratio"!==e.w?r("aspect-ratio"):void 0,":global":{["."+r("aspect-ratio")]:a.apply`relative ${n} children:(absolute h-full w-full inset-0)`}},f=(e,t)=>{if(Array.isArray(e))switch(e[0]){case"w":return(0,a.directive)(l,{w:e[1]});case"h":return(0,a.directive)(l,{h:e[1]});case"none":return(0,a.directive)(l,e[0]);default:return 1===e.length&&(e=e[0].split("/")),(0,a.directive)(l,{w:e[0],h:e[1]})}if("none"===e)return(0,a.directive)(l,e);if("object"==typeof e)return(0,a.directive)(l,e);if(void 0!==t)return(0,a.directive)(l,{w:e,h:t});let[r,n]=e.split("/");return(0,a.directive)(l,{w:r,h:n})}},9396:(e,t,r)=>{r.d(t,{S:()=>l});var a=r(8220),n=(e,{theme:t})=>"none"===e?{WebkitLineClamp:"unset"}:{overflow:"hidden",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:`${t("lineClamp",e,e)}`},l=(e,t)=>Array.isArray(e)?n(e[0],t):(0,a.directive)(n,`${e}`)},6679:(e,t,r)=>{r.r(t),r.d(t,{default:()=>z});var a,n,l,f,i,c,o,d,s,u,m,p,b,v,y,x,w,h,g=r(8966),j=r.n(g),N=r(5061),A=r(3157),O=r(1458),k=r(4542),E=r(8074);function S(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,n,l,f,i=[],c=!0,o=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(a=l.call(r)).done)&&(i.push(a.value),i.length!==t);c=!0);}catch(e){o=!0,n=e}finally{try{if(!c&&null!=r.return&&(f=r.return(),Object(f)!==f))return}finally{if(o)throw n}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return I(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?I(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}const z=function(e){var t,r,I,z,L=e.title,P=e.description,T=e.image,$=e.alt,_=e.documentId,W=e.properties,B=e.activeLang,M=e.content,Z=e.documents,G=e.makeLink,U=C((0,g.useState)(null),2),H=U[0],R=U[1];(0,g.useEffect)((function(){if(M){var e=(0,N.jx)(M,{title:{type:"heading",attrs:{level:1}},description:{type:"heading",attrs:{level:2},multiple:!0},img:{type:"ImageBlock",multiple:!0},video:{type:"Video"},links:{type:"link",multiple:!0}});R((null==e?void 0:e[0])||null)}}),[M]);var F=null!=H&&H.img?Array.from(H.img):[],J=null===(t=F[0])||void 0===t?void 0:t[1],q=null===(r=F[1])||void 0===r?void 0:r[1],D=W.textAlign,V=void 0===D?"center":D,K=W.textColor,Q=void 0===K?"":K,X=W.imagePosition,Y=void 0===X?"center":X,ee=W.textShadowColor,te=void 0===ee?"":ee,re=(0,E.iv)({color:Q,textAlign:V}),ae=(0,E.iv)({objectPosition:Y,objectFit:"cover"}),ne=(null==H?void 0:H.title)||(0,N.NC)(L,"",B),le=(0,N.NC)(P,"",B)||"",fe=(null==J?void 0:J.value)||(0,N.NC)(T,"",B),ie=(null==J?void 0:J.alt)||(0,N.NC)($,"",B),ce=(null==J?void 0:J.size)||"",oe=(null==H||null===(I=H.video)||void 0===I?void 0:I.src)||"",de=(null==H||null===(z=H.video)||void 0===z?void 0:z.caption)||"",se=[];H&&null!=H&&H.links&&(se=Array.from(H.links).map((function(e){var t=C(e,2),r=t[0],a=t[1];return[r,{link:a.href,label:a.label}]})));var ue=[];H&&null!=H&&H.description&&(ue=Array.from(H.description));var me=(0,E.iv)({flex:"0 0 50%",maxWidth:"50%"});return j().createElement("div",{className:(0,E.tw)(a||(a=S(["relative"])))},j().createElement("section",{className:(0,E.tw)(n||(n=S([""," mb-6 md:mb-12"])),function(){switch(ce){case"lg":return"mx-auto 2xl:max-w-[116rem] xl:max-w-[90rem] lg:max-w-[95%] px-0 md:px-6 lg:px-8";case"full":return"w-full";default:return"mx-auto 2xl:max-w-[80rem] xl:max-w-[72rem] lg:max-w-[95%] px-0 md:px-6 lg:px-8"}}())},j().createElement("div",{className:(0,E.tw)(l||(l=S(["relative shadow-xl sm:overflow-hidden ",""])),"full"!==ce?"md:rounded-2xl":"")},j().createElement("figure",{className:(0,E.tw)(f||(f=S(["absolute inset-0"])))},fe?j().createElement(A.Z,{contentId:_,value:fe,className:(0,E.tw)(i||(i=S(["h-full w-full ",""])),ae),alt:ie,activeLang:B}):null,j().createElement("div",{className:(0,E.tw)(c||(c=S(["absolute inset-0"])))})),j().createElement("div",{className:(0,E.tw)(o||(o=S([""," ",""])),oe?"flex flex-col flex-col-reverse md:(flex-row space-x-12) lg:(space-x-16) xl:(space-x-20) justify-between items-center relative ".concat("right"===V?"flex-row-reverse":""," px-4 py-6 md:py-12 sm:(px-6) lg:(px-8 py-20) xl:py-24"):q?"flex flex-col items-".concat(V," relative px-0 pt-8 md:(px-6 pt-16) lg:(px-8 pt-20) space-y-8 md:space-y-12"):"flex justify-".concat(V," relative px-4 py-16 sm:(px-6 py-28) md:py-36 lg:(px-8 py-40) xl:py-44"),"full"===ce?"mx-auto lg:max-w-[95%] xl:max-w-[80rem] 2xl:max-w-[100rem]":"")},j().createElement("header",{className:(0,E.tw)(d||(d=S([""," px-4"])),oe?"max-w-[100%] sm:max-w-[90%] mt-6 lg:(max-w-[50%] mt-0) mx-auto":"max-w-[100%] md:max-w-[70%]")},j().createElement("h2",{className:(0,E.tw)(s||(s=S(["mb-3 md:mb-5 text-lg sm:text-xl font-bold tracking-tight md:text-2xl xl:text-3xl 2xl:text-4xl ",""])),re),dangerouslySetInnerHTML:{__html:ne},style:{textShadow:te?"".concat(te," 1px 0 5px"):""}}),le?j().createElement("p",{className:(0,E.tw)(u||(u=S(["font-medium text-base sm:text-lg xl:text-xl 2xl:text-2xl ",""])),re),dangerouslySetInnerHTML:{__html:le},style:{textShadow:te?"".concat(te," 1px 0 5px"):""}}):j().createElement("div",{className:(0,E.tw)(m||(m=S(["space-y-2"])))},ue.map((function(e,t){var r=C(e,2)[1];return j().createElement("p",{key:t,className:(0,E.tw)(p||(p=S(["font-medium text-lg xl:text-xl 2xl:text-2xl ",""])),re),dangerouslySetInnerHTML:{__html:r},style:{textShadow:te?"".concat(te," 1px 0 5px"):""}})}))),se.length?j().createElement("div",{className:(0,E.tw)(b||(b=S(["flex justify-"," mt-8"])),V)},se.map((function(e,t){var r=C(e,2)[1],a=r.label,n=r.link,l=(0,N.NC)(n,"",B),f=l.includes("https:")||l.startsWith("mailto:"),i=f?l:G((0,N.s2)(l,Z,B));return j().createElement(k.Z,{key:t,className:(0,E.tw)(v||(v=S(["inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"]))),to:i,external:f},j().createElement(O.ixJ,{className:(0,E.tw)(y||(y=S(["-ml-1 mr-2 h-5 w-5"]))),"aria-hidden":"true"}),(0,N.NC)(a,"",B))}))):null),oe?j().createElement("div",{className:(0,E.tw)(x||(x=S(["w-screen md:("," )"])),me)},j().createElement("iframe",{className:(0,E.tw)(w||(w=S(["w-full min-h-[420px] md:(mx-auto max-w-[800px] !max-h-screen min-h-[460px]) md:rounded-lg"]))),src:oe,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:de})):null,q?j().createElement("figure",{className:(0,E.tw)(h||(h=S(["w-full md:(!shadow-xl rounded-t-md overflow-hidden)"])))},j().createElement(A.Z,{contentId:_,value:q.value,alt:q.alt,activeLang:B})):null))))}},3157:(e,t,r)=>{r.d(t,{Z:()=>o});var a,n=r(8966),l=r.n(n),f=r(8074),i=r(5061);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}const o=(0,n.memo)((function(e){var t,r,n=e.contentType,o=void 0===n?"docufolio":n,d=e.viewType,s=void 0===d?"profile":d,u=e.contentId,m=e.value,p=e.alt,b=void 0===p?"":p,v=e.activeLang,y=e.className,x=void 0===y?(0,f.tw)(a||(t=["w-full h-full object-cover"],r||(r=t.slice(0)),a=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(r)}})))):y,w=e.filePreview,h=void 0!==w&&w,g="resources"===o?"equipment":o;if(!m)return null;var j,N,A,O=(N=m.split("/"),A=3,function(e){if(Array.isArray(e))return e}(N)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,n,l,f,i=[],c=!0,o=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(a=l.call(r)).done)&&(i.push(a.value),i.length!==t);c=!0);}catch(e){o=!0,n=e}finally{try{if(!c&&null!=r.return&&(f=r.return(),Object(f)!==f))return}finally{if(o)throw n}}return i}}(N,A)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}(N,A)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),k=O[0],E=O[1],S=O[2],C=S.split(".").pop();j=h&&!["jpg","jpeg","png","webp","gif","svg"].includes(C)?uniweb.getProfileAssertUrl({finalType:g,viewType:s,contentId:u,identifier:"".concat(E,"_preview"),version:k,ext:"webp"}):uniweb.getProfileAssertUrl({finalType:g,viewType:s,contentId:u,identifier:E,version:k,ext:C});var I=(0,i.NC)(b,"",v)||S;return l().createElement("img",{src:j,className:x,alt:I})}))},2433:(e,t,r)=>{r.d(t,{w_:()=>o});var a=r(8966),n=r.n(a),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},f=n().createContext&&n().createContext(l),i=function(){return i=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},i.apply(this,arguments)};function c(e){return e&&e.map((function(e,t){return n().createElement(e.tag,i({key:t},e.attr),c(e.child))}))}function o(e){return function(t){return n().createElement(d,i({attr:i({},e.attr)},t),c(e.child))}}function d(e){var t=function(t){var r,a=e.attr,l=e.size,f=e.title,c=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r}(e,["attr","size","title"]),o=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n().createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,c,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),f&&n().createElement("title",null,f),e.children)};return void 0!==f?n().createElement(f.Consumer,null,(function(e){return t(e)})):t(l)}},5256:(e,t,r)=>{r.r(t),r.d(t,{amber:()=>h,black:()=>a,blue:()=>s,blueGray:()=>E,coolGray:()=>k,cyan:()=>m,emerald:()=>v,fuchsia:()=>i,gray:()=>O,green:()=>y,indigo:()=>d,lightBlue:()=>u,lime:()=>x,orange:()=>g,pink:()=>f,purple:()=>c,red:()=>j,rose:()=>l,sky:()=>p,teal:()=>b,trueGray:()=>A,violet:()=>o,warmGray:()=>N,white:()=>n,yellow:()=>w});var a="#000",n="#fff",l={50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},f={50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},i={50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},c={50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},o={50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},d={50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},s={50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},u={50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},m={50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},p={50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},b={50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},v={50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},y={50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},x={50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},w={50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},h={50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},g={50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},j={50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},N={50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},A={50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},O={50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},k={50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},E={50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"}},5372:(e,t,r)=>{r.r(t),r.d(t,{animation:()=>y,css:()=>p,keyframes:()=>v,screen:()=>w});var a=r(8220),n={};for(const e in a)["default","animation","css","keyframes","screen"].indexOf(e)<0&&(n[e]=()=>a[e]);r.d(t,n);var l=(e,t)=>!!~e.indexOf(t),f=(e,t="-")=>e.join(t),i=(e,t)=>{for(;"function"==typeof e;)e=e(t);return e},c=(e,t,r)=>t?Object.keys(t).reduce(((e,a)=>{const n=i(t[a],r);return((e,t)=>!l("@:&",e[0])&&(l("rg",(typeof t)[5])||Array.isArray(t)))(a,n)?e[(e=>e.replace(/[A-Z]/g,"-$&").toLowerCase())(a)]=n:e[a]="@"==a[0]&&l("figa",a[1])?(e[a]||[]).concat(n):c(e[a]||{},n,r),e}),e):e,o=("undefined"!=typeof CSS&&CSS.escape,/\s*(?:([\w-%@]+)\s*:?\s*([^{;]+?)\s*(?:;|$|})|([^;}{]*?)\s*{)|(})/gi),d=/\/\*[\s\S]*?\*\/|\s+|\n/gm,s=(e,t)=>e.reduceRight(((e,t)=>({[t]:e})),t),u=(e,t,r)=>{r&&e.push(s(t,r))},m=(e,t)=>((e,t)=>{const r=(e,a)=>Array.isArray(a)?a.reduce(r,e):c(e,i(a,t),t);return e.reduce(r,{})})(Array.isArray(e[0])&&Array.isArray(e[0].raw)?((e,t)=>{const r=[],n=[];let l,f;for(let m=0;m<e.length;m++){const p=e[m];if("string"==typeof p){for(;f=o.exec(p.replace(d," "));)if(f[0])if(f[4]&&(l=u(n,r,l),r.pop()),f[3])l=u(n,r,l),r.push(f[3]);else if(!f[4]){l||(l={});const r=f[2]&&/\S/.test(f[2])?f[2]:e[++m];r&&("@apply"==f[1]?c(l,i((0,a.apply)(r),t),t):l[f[1]]=r)}}else l=u(n,r,l),n.push(s(r,p))}return u(n,r,l),n})(((e,t,r)=>{let a=e[0];const n=[];for(let l=0;l<t.length;){const f=i(t[l],r);f&&"object"==typeof f?(n.push(a,f),a=e[++l]):a+=(f||"")+e[++l]}return n.push(a),n})(e[0],e.slice(1),t),t):e,t),p=(...e)=>(0,a.directive)(m,e),b=(e,t)=>{const r=m(e,t),n=(0,a.hash)(JSON.stringify(r));return t.tw((()=>({[`@keyframes ${n}`]:r}))),n},v=(...e)=>(0,a.directive)(b,e),y=(e,t)=>void 0===t?(...t)=>y(e,v(...t)):p({...e&&"object"==typeof e?e:{animation:e},animationName:"function"==typeof t?t:v(t)}),x=({size:e,rules:t},r)=>{const a=(n=r.theme("screens",e),Array.isArray(n)||(n=[n]),"@media "+f(n.map((e=>("string"==typeof e&&(e={min:e}),e.raw||f(Object.keys(e).map((t=>`(${t}-width:${e[t]})`))," and ")))),","));var n;return void 0===t?a:{[a]:"function"==typeof t?i(t,r):m([t],r)}},w=(e,t)=>(0,a.directive)(x,{size:e,rules:t})}}]);
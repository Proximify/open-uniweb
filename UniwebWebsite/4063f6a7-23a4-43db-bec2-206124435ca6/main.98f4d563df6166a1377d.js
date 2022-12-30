"use strict";(self.webpackChunkbuilder=self.webpackChunkbuilder||[]).push([[538],{3406:(e,t,r)=>{r.d(t,{D:()=>i});var n=r(8220),a=()=>({paddingBottom:"calc(var(--tw-aspect-h)/var(--tw-aspect-w)*100%)"}),f=(e,{theme:t,tag:r})=>"none"===e?n.apply`static pb-0 children:(static h-auto w-auto inset-auto)`:{"--tw-aspect-w":e.w&&"ratio"!==e.w&&t("aspectRatio",""+e.w,""+e.w),"--tw-aspect-h":e.h&&t("aspectRatio",""+e.h,""+e.h),_:e.h&&"ratio"!==e.w?r("aspect-ratio"):void 0,":global":{["."+r("aspect-ratio")]:n.apply`relative ${a} children:(absolute h-full w-full inset-0)`}},i=(e,t)=>{if(Array.isArray(e))switch(e[0]){case"w":return(0,n.directive)(f,{w:e[1]});case"h":return(0,n.directive)(f,{h:e[1]});case"none":return(0,n.directive)(f,e[0]);default:return 1===e.length&&(e=e[0].split("/")),(0,n.directive)(f,{w:e[0],h:e[1]})}if("none"===e)return(0,n.directive)(f,e);if("object"==typeof e)return(0,n.directive)(f,e);if(void 0!==t)return(0,n.directive)(f,{w:e,h:t});let[r,a]=e.split("/");return(0,n.directive)(f,{w:r,h:a})}},9396:(e,t,r)=>{r.d(t,{S:()=>f});var n=r(8220),a=(e,{theme:t})=>"none"===e?{WebkitLineClamp:"unset"}:{overflow:"hidden",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:`${t("lineClamp",e,e)}`},f=(e,t)=>Array.isArray(e)?a(e[0],t):(0,n.directive)(a,`${e}`)},2538:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var n,a,f,i,l,o,c,d,u=r(8966),s=r.n(u),b=r(5061),p=r(8074),v=r(2500);function m(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,f,i,l=[],o=!0,c=!1;try{if(f=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;o=!1}else for(;!(o=(n=f.call(r)).done)&&(l.push(n.value),l.length!==t);o=!0);}catch(e){c=!0,a=e}finally{try{if(!o&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const g=function(e){var t=e.title,r=e.description,h=e.properties,g=e.activeLang,w=e.content,x=y((0,u.useState)(null),2),S=x[0],A=x[1];(0,u.useEffect)((function(){if(w){var e=(0,b.jx)(w,{title:{type:"heading",attrs:{level:1}},subtitle:{type:"heading",attrs:{level:2}},description:{type:"heading",attrs:{level:3},multiple:!0}});A((null==e?void 0:e[0])||null)}}),[w]);var k=h.bgColor,j=void 0===k?"white":k,O=h.textColor,E=void 0===O?"":O,I=h.textAlign,C=void 0===I?"center":I,N=h.maxWidth,T=void 0===N?"":N,P=h.sectionHead,L=void 0!==P&&P,$=(0,p.iv)({color:E||"var(--primary)",textAlign:C}),z=(null==S?void 0:S.title)||(0,b.NC)(t,"",g),_=(null==S?void 0:S.subtitle)||"",M=(0,b.NC)(r,"",g),B=[];return S&&null!=S&&S.description&&(B=Array.from(S.description)),s().createElement("div",{className:(0,p.tw)(n||(n=m(["relative"]))),style:{background:j}},s().createElement(v.Z,{className:(0,p.tw)(a||(a=m(["w-full flex justify-"," "," "," ",""])),C,L?"mb-3 md:mb-6":"mb-6 md:mb-12","white"!==j?"mt-6 md:mt-12":"",T?"!max-w-[".concat(T,"]"):"")},s().createElement("article",{className:(0,p.tw)(f||(f=m(["space-y-2 md:space-y-5"])))},s().createElement("header",{className:(0,p.tw)(i||(i=m(["space-y-1 md:space-y-3"])))},z?s().createElement("h2",{className:(0,p.tw)(l||(l=m(["text-2xl md:text-3xl lg:text-4xl font-bold ",""])),$),dangerouslySetInnerHTML:{__html:z}}):null,_?s().createElement("h3",{className:(0,p.tw)(o||(o=m(["text-xl md:text-2xl lg:text-3xl font-semibold ",""])),$),dangerouslySetInnerHTML:{__html:_}}):null),M?s().createElement("p",{className:(0,p.tw)(c||(c=m(["text-base md:text-lg lg:text-xl font-medium ",""])),$),dangerouslySetInnerHTML:{__html:M}}):B.map((function(e,t){var r=y(e,2)[1];return s().createElement("p",{key:t,className:(0,p.tw)(d||(d=m(["text-base md:text-lg font-medium ",""])),$),dangerouslySetInnerHTML:{__html:r}})})))))}},5061:(e,t,r)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function a(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,"string");if("object"!==n(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===n(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{Ai:()=>o,NC:()=>l,V2:()=>c,jx:()=>u,s2:()=>s});var l=uniweb.getProfileServices().localize,o=(uniweb.getProfileServices().getProfiles,uniweb.getProfileServices().getProfile),c=uniweb.getProfileServices().getListProfileItems,d=function e(t,r){for(var n={},a=Object.keys(r),i=function(i){for(var l=a[i],o=r[l],c=o.type,d=o.attrs,u=o.multiple,s=void 0!==u&&u,b=o.parentType,p=void 0===b?"":b,v=0;v<t.length;v++){var m=t[v],y=null==m?void 0:m.type,h=null==m?void 0:m.attrs,g=(null==m?void 0:m.content)||[];if(y===c){if(h){var w=!0;for(var x in d)if(d[x]!==(null==h?void 0:h[x])){w=!1;break}if(!w)continue}var S=null;if(["heading"].includes(c))S=g.map((function(e){var t=e.text,r=e.marks,n=void 0===r?[]:r;if(!n.length)return t;var a=t;return n.forEach((function(e){var t=e.type;if("link"===t){var r=(null==e?void 0:e.attrs)||{},n=r.href,f=r.target;a='<a target="'.concat(f,'" href="').concat(n,'">').concat(a,"</a>")}else if("textStyle"===t){var i=((null==e?void 0:e.attrs)||{}).color;"string"==typeof i&&i&&(a='<span style="color: var(--'.concat(i,')"}>').concat(a,"</span>"))}else"bold"===t&&(a='<span style="font-weight: 700"}>'.concat(a,"</span>"))})),a})).join("");else if("ImageBlock"===c){var A=h.info,k=h.targetId,j=h.caption,O=void 0===j?"":j,E=h.direction,I=void 0===E?"center":E,C=A.contentType,N=A.viewType,T=A.contentId,P=A.identifier,L=A.version,$=A.filename;S={contentType:C,viewType:N,contentId:k||T,value:"".concat(L,"/").concat(P,"/").concat($),alt:O,size:{center:"basic",wide:"lg",fill:"full"}[I]}}else if("Video"===c){var z=h.src,_=h.caption;S={src:z,caption:void 0===_?"":_}}if(S){if(!s){n[l]=S;break}null!=n&&n[l]||(n[l]=new Map),n[l].set(v,S)}}else if(y===p)"bulletList"===p&&function(){var t=g.map((function(e){return"listItem"===e.type?e.content:null})).filter(Boolean),r={type:c,attrs:d,multiple:s,parentType:p},a=t.map((function(t){var n=e(t,f({},l,r));if(Object.keys(n).length){if(Array.isArray(n[l])){var a,i,o,c=(null===(a=t.find((function(e){var t,r;return"paragraph"===e.type&&"text"===(null===(t=e.content)||void 0===t||null===(r=t[0])||void 0===r?void 0:r.type)})))||void 0===a||null===(i=a.content)||void 0===i||null===(o=i[0])||void 0===o?void 0:o.text)||"";n.label=c}return n}return null})).filter(Boolean);a.length&&(n[l]=a)}();else if("link"===c)for(var M=null,B=0;B<g.length;B++){for(var H=g[B],G=(null==H?void 0:H.marks)||[],W=0;W<G.length;W++){var D=G[W];if((null==D?void 0:D.type)===c){var R;M={href:null==D||null===(R=D.attrs)||void 0===R?void 0:R.href,label:(null==H?void 0:H.text)||""};break}}if(M){if(!s){n[l]=M;break}null!=n&&n[l]||(n[l]=new Map),n[l].set(v,M)}}}},l=0;l<a.length;l++)i(l);return n},u=function(e,t){var r=(null==e?void 0:e.content)||[],n=[],f=[];if(r.forEach((function(e){if("DividerBlock"===e.type){if(f.length){var r=d(a(f),t);Object.keys(r).length&&n.push(r)}f=[]}else f.push(e)})),f.length){var i=d(a(f),t);Object.keys(i).length&&n.push(i)}return n},s=function(e,t,r){var n=function(e){var t;return 0===e.indexOf("topic:")&&((null===(t=e.split(":"))||void 0===t?void 0:t[1])||!1)}(e);if(!n)return e;var a=function(e){var t={};return e.forEach((function(e){e.pages.forEach((function(e){var r=e.id,n=e.route;t[r]=n}))})),t}(t);return l((null==a?void 0:a[n])||e,"",r)}},2500:(e,t,r)=>{r.d(t,{Z:()=>l});var n,a=r(8966),f=r.n(a),i=r(8074);const l=function(e){var t,r,a=e.className,l=e.children,o=e.element,c=e.size,d=void 0===c?"md":c,u=e.style,s=void 0===u?{}:u,b=o||"section";return f().createElement(b,{className:(0,i.tw)(n||(t=["mx-auto "," px-4 sm:px-6 lg:px-8 ",""],r||(r=t.slice(0)),n=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(r)}}))),{md:"2xl:max-w-[80rem] xl:max-w-[72rem] lg:max-w-[95%]",lg:"2xl:max-w-[100rem] xl:max-w-[80rem] lg:max-w-[95%]"}[d],a),style:s},l)}},8074:(e,t,r)=>{r.d(t,{Sf:()=>f.S,iv:()=>a.css,tw:()=>o});var n=r(8220),a=r(5372),f=(r(918),r(9396)),i=r(3406),l=r(5256);window.twind||(n.setup({theme:{extend:{colors:l}},plugins:{aspect:i.D}}),window.twind=n);var o=n.tw;n.apply},5256:(e,t,r)=>{r.r(t),r.d(t,{amber:()=>w,black:()=>n,blue:()=>u,blueGray:()=>E,coolGray:()=>O,cyan:()=>b,emerald:()=>m,fuchsia:()=>l,gray:()=>j,green:()=>y,indigo:()=>d,lightBlue:()=>s,lime:()=>h,orange:()=>x,pink:()=>i,purple:()=>o,red:()=>S,rose:()=>f,sky:()=>p,teal:()=>v,trueGray:()=>k,violet:()=>c,warmGray:()=>A,white:()=>a,yellow:()=>g});var n="#000",a="#fff",f={50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},i={50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},l={50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},o={50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},c={50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},d={50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},u={50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},s={50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},b={50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},p={50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},v={50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},m={50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},y={50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},h={50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},g={50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},w={50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},x={50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},S={50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},A={50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},k={50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},j={50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},O={50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},E={50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"}},5372:(e,t,r)=>{r.r(t),r.d(t,{animation:()=>y,css:()=>p,keyframes:()=>m,screen:()=>g});var n=r(8220),a={};for(const e in n)["default","animation","css","keyframes","screen"].indexOf(e)<0&&(a[e]=()=>n[e]);r.d(t,a);var f=(e,t)=>!!~e.indexOf(t),i=(e,t="-")=>e.join(t),l=(e,t)=>{for(;"function"==typeof e;)e=e(t);return e},o=(e,t,r)=>t?Object.keys(t).reduce(((e,n)=>{const a=l(t[n],r);return((e,t)=>!f("@:&",e[0])&&(f("rg",(typeof t)[5])||Array.isArray(t)))(n,a)?e[(e=>e.replace(/[A-Z]/g,"-$&").toLowerCase())(n)]=a:e[n]="@"==n[0]&&f("figa",n[1])?(e[n]||[]).concat(a):o(e[n]||{},a,r),e}),e):e,c=("undefined"!=typeof CSS&&CSS.escape,/\s*(?:([\w-%@]+)\s*:?\s*([^{;]+?)\s*(?:;|$|})|([^;}{]*?)\s*{)|(})/gi),d=/\/\*[\s\S]*?\*\/|\s+|\n/gm,u=(e,t)=>e.reduceRight(((e,t)=>({[t]:e})),t),s=(e,t,r)=>{r&&e.push(u(t,r))},b=(e,t)=>((e,t)=>{const r=(e,n)=>Array.isArray(n)?n.reduce(r,e):o(e,l(n,t),t);return e.reduce(r,{})})(Array.isArray(e[0])&&Array.isArray(e[0].raw)?((e,t)=>{const r=[],a=[];let f,i;for(let b=0;b<e.length;b++){const p=e[b];if("string"==typeof p){for(;i=c.exec(p.replace(d," "));)if(i[0])if(i[4]&&(f=s(a,r,f),r.pop()),i[3])f=s(a,r,f),r.push(i[3]);else if(!i[4]){f||(f={});const r=i[2]&&/\S/.test(i[2])?i[2]:e[++b];r&&("@apply"==i[1]?o(f,l((0,n.apply)(r),t),t):f[i[1]]=r)}}else f=s(a,r,f),a.push(u(r,p))}return s(a,r,f),a})(((e,t,r)=>{let n=e[0];const a=[];for(let f=0;f<t.length;){const i=l(t[f],r);i&&"object"==typeof i?(a.push(n,i),n=e[++f]):n+=(i||"")+e[++f]}return a.push(n),a})(e[0],e.slice(1),t),t):e,t),p=(...e)=>(0,n.directive)(b,e),v=(e,t)=>{const r=b(e,t),a=(0,n.hash)(JSON.stringify(r));return t.tw((()=>({[`@keyframes ${a}`]:r}))),a},m=(...e)=>(0,n.directive)(v,e),y=(e,t)=>void 0===t?(...t)=>y(e,m(...t)):p({...e&&"object"==typeof e?e:{animation:e},animationName:"function"==typeof t?t:m(t)}),h=({size:e,rules:t},r)=>{const n=(a=r.theme("screens",e),Array.isArray(a)||(a=[a]),"@media "+i(a.map((e=>("string"==typeof e&&(e={min:e}),e.raw||i(Object.keys(e).map((t=>`(${t}-width:${e[t]})`))," and ")))),","));var a;return void 0===t?n:{[n]:"function"==typeof t?l(t,r):b([t],r)}},g=(e,t)=>(0,n.directive)(h,{size:e,rules:t})}}]);
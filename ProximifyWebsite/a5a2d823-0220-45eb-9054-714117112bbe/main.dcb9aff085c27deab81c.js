"use strict";(self.webpackChunkbuilder=self.webpackChunkbuilder||[]).push([[104],{3406:(e,t,a)=>{a.d(t,{D:()=>i});var r=a(8220),f=()=>({paddingBottom:"calc(var(--tw-aspect-h)/var(--tw-aspect-w)*100%)"}),n=(e,{theme:t,tag:a})=>"none"===e?r.apply`static pb-0 children:(static h-auto w-auto inset-auto)`:{"--tw-aspect-w":e.w&&"ratio"!==e.w&&t("aspectRatio",""+e.w,""+e.w),"--tw-aspect-h":e.h&&t("aspectRatio",""+e.h,""+e.h),_:e.h&&"ratio"!==e.w?a("aspect-ratio"):void 0,":global":{["."+a("aspect-ratio")]:r.apply`relative ${f} children:(absolute h-full w-full inset-0)`}},i=(e,t)=>{if(Array.isArray(e))switch(e[0]){case"w":return(0,r.directive)(n,{w:e[1]});case"h":return(0,r.directive)(n,{h:e[1]});case"none":return(0,r.directive)(n,e[0]);default:return 1===e.length&&(e=e[0].split("/")),(0,r.directive)(n,{w:e[0],h:e[1]})}if("none"===e)return(0,r.directive)(n,e);if("object"==typeof e)return(0,r.directive)(n,e);if(void 0!==t)return(0,r.directive)(n,{w:e,h:t});let[a,f]=e.split("/");return(0,r.directive)(n,{w:a,h:f})}},9396:(e,t,a)=>{a.d(t,{S:()=>n});var r=a(8220),f=(e,{theme:t})=>"none"===e?{WebkitLineClamp:"unset"}:{overflow:"hidden",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:`${t("lineClamp",e,e)}`},n=(e,t)=>Array.isArray(e)?f(e[0],t):(0,r.directive)(f,`${e}`)},2931:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});var r,f,n,i,l,c,o,d,s,u,m=a(8966),b=a.n(m),p=a(5061),y=a(8074),v=a(2500),w=a(3157),h=a(4542);function g(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,f,n,i,l=[],c=!0,o=!1;try{if(n=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;c=!1}else for(;!(c=(r=n.call(a)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){o=!0,f=e}finally{try{if(!c&&null!=a.return&&(i=a.return(),Object(i)!==i))return}finally{if(o)throw f}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return k(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?k(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var A=function(e){var t,a,u,m,v=e.title,k=e.description,A=e.image,j=e.alt,S=e.articleData,N=e.textStyle,O=e.documentId,E=e.activeLang,I=e.makeLink,C=e.documents,L=S&&null!=S&&S.title?S.title:(0,p.NC)(v,"",E),T=S&&null!=S&&S.subtitle?S.subtitle:"",$=(0,p.NC)(k,"",E),_=S&&null!=S&&null!==(t=S.img)&&void 0!==t&&t.alt?null==S||null===(a=S.img)||void 0===a?void 0:a.alt:(0,p.NC)(j,"",E),z=S&&null!=S&&null!==(u=S.img)&&void 0!==u&&u.value?null==S||null===(m=S.img)||void 0===m?void 0:m.value:(0,p.NC)(A,"",E),M=[];S&&null!=S&&S.links&&(M=Array.from(S.links).map((function(e){var t=x(e,2),a=t[0],r=t[1];return[a,{link:r.href,label:r.label}]})));var P=[];return S&&null!=S&&S.description&&(P=Array.from(S.description)),b().createElement("div",{className:(0,y.tw)(r||(r=g(["space-y-4 w-[20rem] my-3 px-4 sm:px-6 lg:px-8"])))},b().createElement("div",{className:(0,y.tw)(f||(f=g(["w-full h-48 rounded-md overflow-hidden"])))},b().createElement(w.Z,{contentId:O,value:z,alt:_,activeLang:E})),b().createElement("div",{className:(0,y.tw)(n||(n=g(["w-full space-y-1 text-lg leading-6"])))},b().createElement("h3",{className:(0,y.tw)(i||(i=g(["font-medium ",""])),N),dangerouslySetInnerHTML:{__html:L}}),b().createElement("h4",{className:(0,y.tw)(l||(l=g(["",""])),N),dangerouslySetInnerHTML:{__html:T}})),b().createElement("div",{className:(0,y.tw)(c||(c=g(["w-full text-lg"])))},$?b().createElement("p",{className:(0,y.tw)(o||(o=g(["text-base ",""])),N),dangerouslySetInnerHTML:{__html:$}}):P.map((function(e,t){var a=x(e,2)[1];return b().createElement("p",{key:t,className:(0,y.tw)(d||(d=g(["text-base ",""])),N),dangerouslySetInnerHTML:{__html:a}})}))),b().createElement("div",null,M.map((function(e,t){var a=x(e,2)[1],r=a.label,f=a.link,n=(0,p.NC)(f,"",E),i=n.includes("https:")||n.startsWith("mailto:")||n.startsWith("tel:"),l=i?n:I((0,p.s2)(n,C,E));return b().createElement(h.Z,{key:t,className:(0,y.tw)(s||(s=g(["my-4 font-medium text-lg text-blue-600 hover:underline h-11"]))),to:l,external:i},(0,p.NC)(r,"",E))}))))};const j=function(e){var t=e.title,a=e.description,r=e.image,f=e.alt,n=e.documentId,i=e.properties,l=e.activeLang,c=e.content,o=e.documents,d=e.makeLink,s=x((0,m.useState)([]),2),w=s[0],h=s[1];(0,m.useEffect)((function(){if(c){var e=(0,p.jx)(c,{title:{type:"heading",attrs:{level:1}},subtitle:{type:"heading",attrs:{level:2}},description:{type:"heading",attrs:{level:3},multiple:!0},img:{type:"ImageBlock"},links:{type:"link",multiple:!0}});h(e)}}),[c]);var k=i.textColor,j=(0,y.iv)({color:k});return b().createElement(v.Z,{className:(0,y.tw)(u||(u=g(["flex flex-wrap justify-center !mt-0 !mb-6 !px-0 sm:!px-0 lg:!px-0"])))},w.length?w.map((function(e,t){return b().createElement(A,{key:t,articleData:e,documentId:n,activeLang:l,makeLink:d,documents:o,textStyle:j})})):b().createElement(A,{title:t,description:a,image:r,alt:f,documentId:n,activeLang:l,makeLink:d,documents:o,textStyle:j}))}},3157:(e,t,a)=>{a.d(t,{Z:()=>o});var r,f=a(8966),n=a.n(f),i=a(8074),l=a(5061);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}const o=(0,f.memo)((function(e){var t,a,f=e.contentType,o=void 0===f?"docufolio":f,d=e.viewType,s=void 0===d?"profile":d,u=e.contentId,m=e.value,b=e.alt,p=void 0===b?"":b,y=e.activeLang,v=e.className,w=void 0===v?(0,i.tw)(r||(t=["w-full h-full object-cover"],a||(a=t.slice(0)),r=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(a)}})))):v,h=e.filePreview,g=void 0!==h&&h,x="resources"===o?"equipment":o;if(!m)return null;var k,A,j,S=(A=m.split("/"),j=3,function(e){if(Array.isArray(e))return e}(A)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,f,n,i,l=[],c=!0,o=!1;try{if(n=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;c=!1}else for(;!(c=(r=n.call(a)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){o=!0,f=e}finally{try{if(!c&&null!=a.return&&(i=a.return(),Object(i)!==i))return}finally{if(o)throw f}}return l}}(A,j)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?c(e,t):void 0}}(A,j)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),N=S[0],O=S[1],E=S[2],I=E.split(".").pop();k=g&&!["jpg","jpeg","png","webp","gif","svg"].includes(I)?uniweb.getProfileAssertUrl({finalType:x,viewType:s,contentId:u,identifier:"".concat(O,"_preview"),version:N,ext:"webp"}):uniweb.getProfileAssertUrl({finalType:x,viewType:s,contentId:u,identifier:O,version:N,ext:I});var C=(0,l.NC)(p,"",y)||E;return n().createElement("img",{src:k,className:w,alt:C})}))},2500:(e,t,a)=>{a.d(t,{Z:()=>o});var r,f,n=a(8966),i=a.n(n),l=a(8074);function c(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const o=function(e){var t=e.className,a=e.children,n=e.element,o=e.size,d=void 0===o?"md":o,s=e.style,u=void 0===s?{}:s,m=e.theme,b=e.withDefaultStyle,p=n||"section",y=void 0===b||b?(0,l.tw)(r||(r=c(["mx-auto "," px-4 sm:px-6 lg:px-8 ",""])),{md:"2xl:max-w-[80rem] xl:max-w-[72rem] lg:max-w-[95%]",lg:"2xl:max-w-[100rem] xl:max-w-[80rem] lg:max-w-[95%]"}[d],t)+" "+m:(0,l.tw)(f||(f=c(["",""])),t)+" "+m;return i().createElement(p,{className:y,style:u},a)}},5256:(e,t,a)=>{a.r(t),a.d(t,{amber:()=>g,black:()=>r,blue:()=>s,blueGray:()=>O,coolGray:()=>N,cyan:()=>m,emerald:()=>y,fuchsia:()=>l,gray:()=>S,green:()=>v,indigo:()=>d,lightBlue:()=>u,lime:()=>w,orange:()=>x,pink:()=>i,purple:()=>c,red:()=>k,rose:()=>n,sky:()=>b,teal:()=>p,trueGray:()=>j,violet:()=>o,warmGray:()=>A,white:()=>f,yellow:()=>h});var r="#000",f="#fff",n={50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},i={50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},l={50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},c={50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},o={50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},d={50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},s={50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},u={50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},m={50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},b={50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},p={50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},y={50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},v={50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},w={50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},h={50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},g={50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},x={50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},k={50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},A={50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},j={50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},S={50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},N={50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},O={50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"}},5372:(e,t,a)=>{a.r(t),a.d(t,{animation:()=>v,css:()=>b,keyframes:()=>y,screen:()=>h});var r=a(8220),f={};for(const e in r)["default","animation","css","keyframes","screen"].indexOf(e)<0&&(f[e]=()=>r[e]);a.d(t,f);var n=(e,t)=>!!~e.indexOf(t),i=(e,t="-")=>e.join(t),l=(e,t)=>{for(;"function"==typeof e;)e=e(t);return e},c=(e,t,a)=>t?Object.keys(t).reduce(((e,r)=>{const f=l(t[r],a);return((e,t)=>!n("@:&",e[0])&&(n("rg",(typeof t)[5])||Array.isArray(t)))(r,f)?e[(e=>e.replace(/[A-Z]/g,"-$&").toLowerCase())(r)]=f:e[r]="@"==r[0]&&n("figa",r[1])?(e[r]||[]).concat(f):c(e[r]||{},f,a),e}),e):e,o=("undefined"!=typeof CSS&&CSS.escape,/\s*(?:([\w-%@]+)\s*:?\s*([^{;]+?)\s*(?:;|$|})|([^;}{]*?)\s*{)|(})/gi),d=/\/\*[\s\S]*?\*\/|\s+|\n/gm,s=(e,t)=>e.reduceRight(((e,t)=>({[t]:e})),t),u=(e,t,a)=>{a&&e.push(s(t,a))},m=(e,t)=>((e,t)=>{const a=(e,r)=>Array.isArray(r)?r.reduce(a,e):c(e,l(r,t),t);return e.reduce(a,{})})(Array.isArray(e[0])&&Array.isArray(e[0].raw)?((e,t)=>{const a=[],f=[];let n,i;for(let m=0;m<e.length;m++){const b=e[m];if("string"==typeof b){for(;i=o.exec(b.replace(d," "));)if(i[0])if(i[4]&&(n=u(f,a,n),a.pop()),i[3])n=u(f,a,n),a.push(i[3]);else if(!i[4]){n||(n={});const a=i[2]&&/\S/.test(i[2])?i[2]:e[++m];a&&("@apply"==i[1]?c(n,l((0,r.apply)(a),t),t):n[i[1]]=a)}}else n=u(f,a,n),f.push(s(a,b))}return u(f,a,n),f})(((e,t,a)=>{let r=e[0];const f=[];for(let n=0;n<t.length;){const i=l(t[n],a);i&&"object"==typeof i?(f.push(r,i),r=e[++n]):r+=(i||"")+e[++n]}return f.push(r),f})(e[0],e.slice(1),t),t):e,t),b=(...e)=>(0,r.directive)(m,e),p=(e,t)=>{const a=m(e,t),f=(0,r.hash)(JSON.stringify(a));return t.tw((()=>({[`@keyframes ${f}`]:a}))),f},y=(...e)=>(0,r.directive)(p,e),v=(e,t)=>void 0===t?(...t)=>v(e,y(...t)):b({...e&&"object"==typeof e?e:{animation:e},animationName:"function"==typeof t?t:y(t)}),w=({size:e,rules:t},a)=>{const r=(f=a.theme("screens",e),Array.isArray(f)||(f=[f]),"@media "+i(f.map((e=>("string"==typeof e&&(e={min:e}),e.raw||i(Object.keys(e).map((t=>`(${t}-width:${e[t]})`))," and ")))),","));var f;return void 0===t?r:{[r]:"function"==typeof t?l(t,a):m([t],a)}},h=(e,t)=>(0,r.directive)(w,{size:e,rules:t})}}]);
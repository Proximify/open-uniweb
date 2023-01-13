"use strict";(self.webpackChunkbuilder=self.webpackChunkbuilder||[]).push([[538],{3406:(e,t,a)=>{a.d(t,{D:()=>c});var f=a(8220),r=()=>({paddingBottom:"calc(var(--tw-aspect-h)/var(--tw-aspect-w)*100%)"}),n=(e,{theme:t,tag:a})=>"none"===e?f.apply`static pb-0 children:(static h-auto w-auto inset-auto)`:{"--tw-aspect-w":e.w&&"ratio"!==e.w&&t("aspectRatio",""+e.w,""+e.w),"--tw-aspect-h":e.h&&t("aspectRatio",""+e.h,""+e.h),_:e.h&&"ratio"!==e.w?a("aspect-ratio"):void 0,":global":{["."+a("aspect-ratio")]:f.apply`relative ${r} children:(absolute h-full w-full inset-0)`}},c=(e,t)=>{if(Array.isArray(e))switch(e[0]){case"w":return(0,f.directive)(n,{w:e[1]});case"h":return(0,f.directive)(n,{h:e[1]});case"none":return(0,f.directive)(n,e[0]);default:return 1===e.length&&(e=e[0].split("/")),(0,f.directive)(n,{w:e[0],h:e[1]})}if("none"===e)return(0,f.directive)(n,e);if("object"==typeof e)return(0,f.directive)(n,e);if(void 0!==t)return(0,f.directive)(n,{w:e,h:t});let[a,r]=e.split("/");return(0,f.directive)(n,{w:a,h:r})}},9396:(e,t,a)=>{a.d(t,{S:()=>n});var f=a(8220),r=(e,{theme:t})=>"none"===e?{WebkitLineClamp:"unset"}:{overflow:"hidden",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:`${t("lineClamp",e,e)}`},n=(e,t)=>Array.isArray(e)?r(e[0],t):(0,f.directive)(r,`${e}`)},2538:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var f,r,n,c,i,l,d,s,o=a(8966),u=a.n(o),b=a(5061),m=a(8074),p=a(2500);function y(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var f,r,n,c,i=[],l=!0,d=!1;try{if(n=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;l=!1}else for(;!(l=(f=n.call(a)).done)&&(i.push(f.value),i.length!==t);l=!0);}catch(e){d=!0,r=e}finally{try{if(!l&&null!=a.return&&(c=a.return(),Object(c)!==c))return}finally{if(d)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return w(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?w(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,f=new Array(t);a<t;a++)f[a]=e[a];return f}const h=function(e){var t=e.title,a=e.description,w=e.properties,h=e.activeLang,g=e.content,x=v((0,o.useState)(null),2),A=x[0],S=x[1];(0,o.useEffect)((function(){if(g){var e=(0,b.jx)(g,{title:{type:"heading",attrs:{level:1}},subtitle:{type:"heading",attrs:{level:2}},description:{type:"heading",attrs:{level:3},multiple:!0}});S((null==e?void 0:e[0])||null)}}),[g]);var j=w.bgColor,k=void 0===j?"white":j,C=w.textColor,O=void 0===C?"":C,N=w.textAlign,E=void 0===N?"center":N,L=w.maxWidth,I=void 0===L?"":L,$=w.sectionHead,_=void 0!==$&&$,z=(0,m.iv)({color:O||"var(--primary)",textAlign:E}),H=(null==A?void 0:A.title)||(0,b.NC)(t,"",h),M=(null==A?void 0:A.subtitle)||"",P=(0,b.NC)(a,"",h),T=[];return A&&null!=A&&A.description&&(T=Array.from(A.description)),u().createElement("div",{className:(0,m.tw)(f||(f=y(["relative"]))),style:{background:k}},u().createElement(p.Z,{className:(0,m.tw)(r||(r=y(["w-full flex justify-"," "," "," ",""])),E,_?"mb-3 md:mb-6":"mb-6 md:mb-12","white"!==k?"mt-6 md:mt-12":"",I?"!max-w-[".concat(I,"]"):"")},u().createElement("article",{className:(0,m.tw)(n||(n=y(["space-y-2 md:space-y-5"])))},u().createElement("header",{className:(0,m.tw)(c||(c=y(["space-y-1 md:space-y-3"])))},H?u().createElement("h2",{className:(0,m.tw)(i||(i=y(["text-2xl md:text-3xl lg:text-4xl font-bold ",""])),z),dangerouslySetInnerHTML:{__html:H}}):null,M?u().createElement("h3",{className:(0,m.tw)(l||(l=y(["text-xl md:text-2xl lg:text-3xl font-semibold ",""])),z),dangerouslySetInnerHTML:{__html:M}}):null),P?u().createElement("p",{className:(0,m.tw)(d||(d=y(["text-base md:text-lg lg:text-xl font-medium ",""])),z),dangerouslySetInnerHTML:{__html:P}}):T.map((function(e,t){var a=v(e,2)[1];return u().createElement("p",{key:t,className:(0,m.tw)(s||(s=y(["text-base md:text-lg font-medium ",""])),z),dangerouslySetInnerHTML:{__html:a}})})))))}},5061:(e,t,a)=>{a.d(t,{Ai:()=>n,NC:()=>r,V2:()=>c,jx:()=>l,s2:()=>i});var f=uniweb.getServices(),r=(f.client,f.postClient,f.localize),n=(f.getProfiles,f.getProfile),c=f.getListProfileItems,i=f.findLink,l=f.queryFromContent;f.parseLinksInArticle},2500:(e,t,a)=>{a.d(t,{Z:()=>i});var f,r=a(8966),n=a.n(r),c=a(8074);const i=function(e){var t,a,r=e.className,i=e.children,l=e.element,d=e.size,s=void 0===d?"md":d,o=e.style,u=void 0===o?{}:o,b=l||"section";return n().createElement(b,{className:(0,c.tw)(f||(t=["mx-auto "," px-4 sm:px-6 lg:px-8 ",""],a||(a=t.slice(0)),f=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(a)}}))),{md:"2xl:max-w-[80rem] xl:max-w-[72rem] lg:max-w-[95%]",lg:"2xl:max-w-[100rem] xl:max-w-[80rem] lg:max-w-[95%]"}[s],r),style:u},i)}},8074:(e,t,a)=>{a.d(t,{Sf:()=>n.S,iv:()=>r.css,tw:()=>l});var f=a(8220),r=a(5372),n=(a(918),a(9396)),c=a(3406),i=a(5256);window.twind||(f.setup({theme:{extend:{colors:i}},plugins:{aspect:c.D}}),window.twind=f);var l=f.tw;f.apply},5256:(e,t,a)=>{a.r(t),a.d(t,{amber:()=>g,black:()=>f,blue:()=>o,blueGray:()=>O,coolGray:()=>C,cyan:()=>b,emerald:()=>y,fuchsia:()=>i,gray:()=>k,green:()=>v,indigo:()=>s,lightBlue:()=>u,lime:()=>w,orange:()=>x,pink:()=>c,purple:()=>l,red:()=>A,rose:()=>n,sky:()=>m,teal:()=>p,trueGray:()=>j,violet:()=>d,warmGray:()=>S,white:()=>r,yellow:()=>h});var f="#000",r="#fff",n={50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},c={50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},i={50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},l={50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},d={50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},s={50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},o={50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},u={50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},b={50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},m={50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},p={50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},y={50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},v={50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},w={50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},h={50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},g={50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},x={50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},A={50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},S={50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},j={50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},k={50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},C={50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},O={50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"}},5372:(e,t,a)=>{a.r(t),a.d(t,{animation:()=>v,css:()=>m,keyframes:()=>y,screen:()=>h});var f=a(8220),r={};for(const e in f)["default","animation","css","keyframes","screen"].indexOf(e)<0&&(r[e]=()=>f[e]);a.d(t,r);var n=(e,t)=>!!~e.indexOf(t),c=(e,t="-")=>e.join(t),i=(e,t)=>{for(;"function"==typeof e;)e=e(t);return e},l=(e,t,a)=>t?Object.keys(t).reduce(((e,f)=>{const r=i(t[f],a);return((e,t)=>!n("@:&",e[0])&&(n("rg",(typeof t)[5])||Array.isArray(t)))(f,r)?e[(e=>e.replace(/[A-Z]/g,"-$&").toLowerCase())(f)]=r:e[f]="@"==f[0]&&n("figa",f[1])?(e[f]||[]).concat(r):l(e[f]||{},r,a),e}),e):e,d=("undefined"!=typeof CSS&&CSS.escape,/\s*(?:([\w-%@]+)\s*:?\s*([^{;]+?)\s*(?:;|$|})|([^;}{]*?)\s*{)|(})/gi),s=/\/\*[\s\S]*?\*\/|\s+|\n/gm,o=(e,t)=>e.reduceRight(((e,t)=>({[t]:e})),t),u=(e,t,a)=>{a&&e.push(o(t,a))},b=(e,t)=>((e,t)=>{const a=(e,f)=>Array.isArray(f)?f.reduce(a,e):l(e,i(f,t),t);return e.reduce(a,{})})(Array.isArray(e[0])&&Array.isArray(e[0].raw)?((e,t)=>{const a=[],r=[];let n,c;for(let b=0;b<e.length;b++){const m=e[b];if("string"==typeof m){for(;c=d.exec(m.replace(s," "));)if(c[0])if(c[4]&&(n=u(r,a,n),a.pop()),c[3])n=u(r,a,n),a.push(c[3]);else if(!c[4]){n||(n={});const a=c[2]&&/\S/.test(c[2])?c[2]:e[++b];a&&("@apply"==c[1]?l(n,i((0,f.apply)(a),t),t):n[c[1]]=a)}}else n=u(r,a,n),r.push(o(a,m))}return u(r,a,n),r})(((e,t,a)=>{let f=e[0];const r=[];for(let n=0;n<t.length;){const c=i(t[n],a);c&&"object"==typeof c?(r.push(f,c),f=e[++n]):f+=(c||"")+e[++n]}return r.push(f),r})(e[0],e.slice(1),t),t):e,t),m=(...e)=>(0,f.directive)(b,e),p=(e,t)=>{const a=b(e,t),r=(0,f.hash)(JSON.stringify(a));return t.tw((()=>({[`@keyframes ${r}`]:a}))),r},y=(...e)=>(0,f.directive)(p,e),v=(e,t)=>void 0===t?(...t)=>v(e,y(...t)):m({...e&&"object"==typeof e?e:{animation:e},animationName:"function"==typeof t?t:y(t)}),w=({size:e,rules:t},a)=>{const f=(r=a.theme("screens",e),Array.isArray(r)||(r=[r]),"@media "+c(r.map((e=>("string"==typeof e&&(e={min:e}),e.raw||c(Object.keys(e).map((t=>`(${t}-width:${e[t]})`))," and ")))),","));var r;return void 0===t?f:{[f]:"function"==typeof t?i(t,a):b([t],a)}},h=(e,t)=>(0,f.directive)(w,{size:e,rules:t})}}]);
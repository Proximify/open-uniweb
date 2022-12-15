"use strict";(self.webpackChunkbuilder=self.webpackChunkbuilder||[]).push([[94],{3406:(e,t,f)=>{f.d(t,{D:()=>n});var a=f(8220),r=()=>({paddingBottom:"calc(var(--tw-aspect-h)/var(--tw-aspect-w)*100%)"}),c=(e,{theme:t,tag:f})=>"none"===e?a.apply`static pb-0 children:(static h-auto w-auto inset-auto)`:{"--tw-aspect-w":e.w&&"ratio"!==e.w&&t("aspectRatio",""+e.w,""+e.w),"--tw-aspect-h":e.h&&t("aspectRatio",""+e.h,""+e.h),_:e.h&&"ratio"!==e.w?f("aspect-ratio"):void 0,":global":{["."+f("aspect-ratio")]:a.apply`relative ${r} children:(absolute h-full w-full inset-0)`}},n=(e,t)=>{if(Array.isArray(e))switch(e[0]){case"w":return(0,a.directive)(c,{w:e[1]});case"h":return(0,a.directive)(c,{h:e[1]});case"none":return(0,a.directive)(c,e[0]);default:return 1===e.length&&(e=e[0].split("/")),(0,a.directive)(c,{w:e[0],h:e[1]})}if("none"===e)return(0,a.directive)(c,e);if("object"==typeof e)return(0,a.directive)(c,e);if(void 0!==t)return(0,a.directive)(c,{w:e,h:t});let[f,r]=e.split("/");return(0,a.directive)(c,{w:f,h:r})}},9396:(e,t,f)=>{f(8220)},2538:(e,t,f)=>{f.r(t),f.d(t,{default:()=>w});var a,r,c,n,i,d,l,o,s=f(8966),u=f.n(s),b=f(5061),p=f(8074),m=f(2500);function y(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var f=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=f){var a,r,c,n,i=[],d=!0,l=!1;try{if(c=(f=f.call(e)).next,0===t){if(Object(f)!==f)return;d=!1}else for(;!(d=(a=c.call(f)).done)&&(i.push(a.value),i.length!==t);d=!0);}catch(e){l=!0,r=e}finally{try{if(!d&&null!=f.return&&(n=f.return(),Object(n)!==n))return}finally{if(l)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var f=Object.prototype.toString.call(e).slice(8,-1);return"Object"===f&&e.constructor&&(f=e.constructor.name),"Map"===f||"Set"===f?Array.from(e):"Arguments"===f||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f)?v(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var f=0,a=new Array(t);f<t;f++)a[f]=e[f];return a}const w=function(e){var t=e.title,f=e.description,v=e.properties,w=e.activeLang,g=e.content,A=h((0,s.useState)(null),2),x=A[0],S=A[1];(0,s.useEffect)((function(){if(g){var e=(0,b.jx)(g,{title:{type:"heading",attrs:{level:1}},subtitle:{type:"heading",attrs:{level:2}},description:{type:"heading",attrs:{level:3},multiple:!0}});S((null==e?void 0:e[0])||null)}}),[g]);var j=v.bgColor,k=void 0===j?"white":j,N=v.textColor,O=void 0===N?"":N,C=v.textAlign,E=void 0===C?"center":C,_=v.maxWidth,I=void 0===_?"":_,$=v.sectionHead,L=void 0!==$&&$,H=(0,p.iv)({color:O||"var(--primary)",textAlign:E}),M=(null==x?void 0:x.title)||(0,b.NC)(t,"",w),T=(null==x?void 0:x.subtitle)||"",z=(0,b.NC)(f,"",w),G=[];return x&&null!=x&&x.description&&(G=Array.from(x.description)),u().createElement("div",{className:(0,p.tw)(a||(a=y(["relative"]))),style:{background:k}},u().createElement(m.Z,{className:(0,p.tw)(r||(r=y(["w-full flex justify-"," "," "," ",""])),E,L?"mb-3 md:mb-6":"mb-6 md:mb-12","white"!==k?"mt-6 md:mt-12":"",I?"!max-w-[".concat(I,"]"):"")},u().createElement("article",{className:(0,p.tw)(c||(c=y(["space-y-5"])))},u().createElement("header",{className:(0,p.tw)(n||(n=y(["space-y-3"])))},M?u().createElement("h2",{className:(0,p.tw)(i||(i=y(["text-2xl md:text-4xl font-bold ",""])),H),dangerouslySetInnerHTML:{__html:M}}):null,T?u().createElement("h3",{className:(0,p.tw)(d||(d=y(["text-xl md:text-3xl font-semibold ",""])),H),dangerouslySetInnerHTML:{__html:T}}):null),z?u().createElement("p",{className:(0,p.tw)(l||(l=y(["text-lg font-medium ",""])),H),dangerouslySetInnerHTML:{__html:z}}):G.map((function(e,t){var f=h(e,2)[1];return u().createElement("p",{key:t,className:(0,p.tw)(o||(o=y(["text-lg font-medium ",""])),H),dangerouslySetInnerHTML:{__html:f}})})))))}},5256:(e,t,f)=>{f.r(t),f.d(t,{amber:()=>g,black:()=>a,blue:()=>s,blueGray:()=>O,coolGray:()=>N,cyan:()=>b,emerald:()=>y,fuchsia:()=>i,gray:()=>k,green:()=>h,indigo:()=>o,lightBlue:()=>u,lime:()=>v,orange:()=>A,pink:()=>n,purple:()=>d,red:()=>x,rose:()=>c,sky:()=>p,teal:()=>m,trueGray:()=>j,violet:()=>l,warmGray:()=>S,white:()=>r,yellow:()=>w});var a="#000",r="#fff",c={50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},n={50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},i={50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},d={50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},l={50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},o={50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},s={50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},u={50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},b={50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},p={50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},m={50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},y={50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},h={50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},v={50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},w={50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},g={50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},A={50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},x={50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},S={50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},j={50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},k={50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},N={50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},O={50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"}},5372:(e,t,f)=>{f.r(t),f.d(t,{animation:()=>h,css:()=>p,keyframes:()=>y,screen:()=>w});var a=f(8220),r={};for(const e in a)["default","animation","css","keyframes","screen"].indexOf(e)<0&&(r[e]=()=>a[e]);f.d(t,r);var c=(e,t)=>!!~e.indexOf(t),n=(e,t="-")=>e.join(t),i=(e,t)=>{for(;"function"==typeof e;)e=e(t);return e},d=(e,t,f)=>t?Object.keys(t).reduce(((e,a)=>{const r=i(t[a],f);return((e,t)=>!c("@:&",e[0])&&(c("rg",(typeof t)[5])||Array.isArray(t)))(a,r)?e[(e=>e.replace(/[A-Z]/g,"-$&").toLowerCase())(a)]=r:e[a]="@"==a[0]&&c("figa",a[1])?(e[a]||[]).concat(r):d(e[a]||{},r,f),e}),e):e,l=("undefined"!=typeof CSS&&CSS.escape,/\s*(?:([\w-%@]+)\s*:?\s*([^{;]+?)\s*(?:;|$|})|([^;}{]*?)\s*{)|(})/gi),o=/\/\*[\s\S]*?\*\/|\s+|\n/gm,s=(e,t)=>e.reduceRight(((e,t)=>({[t]:e})),t),u=(e,t,f)=>{f&&e.push(s(t,f))},b=(e,t)=>((e,t)=>{const f=(e,a)=>Array.isArray(a)?a.reduce(f,e):d(e,i(a,t),t);return e.reduce(f,{})})(Array.isArray(e[0])&&Array.isArray(e[0].raw)?((e,t)=>{const f=[],r=[];let c,n;for(let b=0;b<e.length;b++){const p=e[b];if("string"==typeof p){for(;n=l.exec(p.replace(o," "));)if(n[0])if(n[4]&&(c=u(r,f,c),f.pop()),n[3])c=u(r,f,c),f.push(n[3]);else if(!n[4]){c||(c={});const f=n[2]&&/\S/.test(n[2])?n[2]:e[++b];f&&("@apply"==n[1]?d(c,i((0,a.apply)(f),t),t):c[n[1]]=f)}}else c=u(r,f,c),r.push(s(f,p))}return u(r,f,c),r})(((e,t,f)=>{let a=e[0];const r=[];for(let c=0;c<t.length;){const n=i(t[c],f);n&&"object"==typeof n?(r.push(a,n),a=e[++c]):a+=(n||"")+e[++c]}return r.push(a),r})(e[0],e.slice(1),t),t):e,t),p=(...e)=>(0,a.directive)(b,e),m=(e,t)=>{const f=b(e,t),r=(0,a.hash)(JSON.stringify(f));return t.tw((()=>({[`@keyframes ${r}`]:f}))),r},y=(...e)=>(0,a.directive)(m,e),h=(e,t)=>void 0===t?(...t)=>h(e,y(...t)):p({...e&&"object"==typeof e?e:{animation:e},animationName:"function"==typeof t?t:y(t)}),v=({size:e,rules:t},f)=>{const a=(r=f.theme("screens",e),Array.isArray(r)||(r=[r]),"@media "+n(r.map((e=>("string"==typeof e&&(e={min:e}),e.raw||n(Object.keys(e).map((t=>`(${t}-width:${e[t]})`))," and ")))),","));var r;return void 0===t?a:{[a]:"function"==typeof t?i(t,f):b([t],f)}},w=(e,t)=>(0,a.directive)(v,{size:e,rules:t})}}]);
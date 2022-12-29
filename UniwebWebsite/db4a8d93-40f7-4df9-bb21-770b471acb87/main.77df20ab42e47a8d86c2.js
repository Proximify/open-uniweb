"use strict";(self.webpackChunkdeployer=self.webpackChunkdeployer||[]).push([[521],{3406:(e,t,a)=>{a.d(t,{D:()=>l});var r=a(8220),f=()=>({paddingBottom:"calc(var(--tw-aspect-h)/var(--tw-aspect-w)*100%)"}),n=(e,{theme:t,tag:a})=>"none"===e?r.apply`static pb-0 children:(static h-auto w-auto inset-auto)`:{"--tw-aspect-w":e.w&&"ratio"!==e.w&&t("aspectRatio",""+e.w,""+e.w),"--tw-aspect-h":e.h&&t("aspectRatio",""+e.h,""+e.h),_:e.h&&"ratio"!==e.w?a("aspect-ratio"):void 0,":global":{["."+a("aspect-ratio")]:r.apply`relative ${f} children:(absolute h-full w-full inset-0)`}},l=(e,t)=>{if(Array.isArray(e))switch(e[0]){case"w":return(0,r.directive)(n,{w:e[1]});case"h":return(0,r.directive)(n,{h:e[1]});case"none":return(0,r.directive)(n,e[0]);default:return 1===e.length&&(e=e[0].split("/")),(0,r.directive)(n,{w:e[0],h:e[1]})}if("none"===e)return(0,r.directive)(n,e);if("object"==typeof e)return(0,r.directive)(n,e);if(void 0!==t)return(0,r.directive)(n,{w:e,h:t});let[a,f]=e.split("/");return(0,r.directive)(n,{w:a,h:f})}},9396:(e,t,a)=>{a.d(t,{S:()=>n});var r=a(8220),f=(e,{theme:t})=>"none"===e?{WebkitLineClamp:"unset"}:{overflow:"hidden",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:`${t("lineClamp",e,e)}`},n=(e,t)=>Array.isArray(e)?f(e[0],t):(0,r.directive)(f,`${e}`)},2394:(e,t,a)=>{a.r(t),a.d(t,{default:()=>z});var r,f,n,l,i,c,o,s,d,u,m,b,p,v,y,h,w,g=a(8966),x=a.n(g),k=a(9261),N=a(5674),A=a(8450),j=a(7772),E=a(3085);function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,f,n,l,i=[],c=!0,o=!1;try{if(n=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;c=!1}else for(;!(c=(r=n.call(a)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){o=!0,f=e}finally{try{if(!c&&null!=a.return&&(l=a.return(),Object(l)!==l))return}finally{if(o)throw f}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return O(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?O(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function S(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var I=function(e){var t=e.childItems,a=e.articleData,i=void 0===a?null:a,c=e.label,o=e.activeLang,s=e.documents,d=e.colWidth,u=(0,j.NC)(c,"",o,!0),m=null;return i&&(u=i.label,m=i.links),x().createElement("div",{style:{width:d},className:(0,k.tw)(r||(r=S(["flex-1"])))},x().createElement("p",{className:(0,k.tw)(f||(f=S(["text-xl font-medium pb-1"]))),style:{color:"var(--primary)"}},u),m?m.map((function(e,t){var a=e.links,r=a.href,f=a.label,l=r.includes("https:")||r.startsWith("mailto:")||r.startsWith("tel:");return x().createElement("div",{key:t},x().createElement(E.Z,{to:(0,j.s2)(r,s,o),external:l},x().createElement("span",{className:(0,k.tw)(n||(n=S(["text-base font-medium text-[rgb(29,161,242)] hover:text-[#007bff]"])))},f)))})):t.map((function(e,t){var a=C(e,2)[1],r=a.label,f=a.link,n=(0,j.NC)(f,"",o,!0),i=n.includes("https:")||n.startsWith("mailto:")||n.startsWith("tel:");return x().createElement("div",{key:t},x().createElement(E.Z,{to:(0,j.s2)(n,s,o),external:i},x().createElement("span",{className:(0,k.tw)(l||(l=S(["text-base font-medium text-[rgb(29,161,242)] hover:text-[#007bff]"])))},(0,j.NC)(r,"",o,!0))))})))};const z=function(e){var t,a,r,f=e.description,n=e.link,l=e.child_items,O=e.image,z=e.alt,L=e.documentId,Z=e.properties,$=e.activeLang,T=e.content,W=e.documents,P=e.makeLink,B=C((0,g.useState)(null),2),G=B[0],U=B[1];(0,g.useEffect)((function(){if(T){var e=(0,j.jx)(T,{img:{type:"ImageBlock"},description:{type:"heading",attrs:{level:1}},link:{type:"link"},links:{type:"link",parentType:"bulletList"}});U((null==e?void 0:e[0])||null)}}),[T]);var _=Array.from(l.values()),D="".concat(1/_.length*100,"%"),R=Z.minHeight,H=void 0===R?"150px":R,M=Z.bgColor,q=void 0===M?"white":M,J=(null==G||null===(t=G.img)||void 0===t?void 0:t.value)||(0,j.NC)(O,"",$),F=(null==G||null===(a=G.img)||void 0===a?void 0:a.alt)||(0,j.NC)(z,"",$),K=(null==G?void 0:G.description)||(0,j.NC)(f,"",$),Q=(null==G||null===(r=G.link)||void 0===r?void 0:r.href)||(0,j.NC)(n,"",$,!0),V=(null==G?void 0:G.links)||[];return x().createElement("div",{className:(0,k.tw)(i||(i=S(["bg-blue-900"]))),style:{minHeight:H,background:q}},x().createElement(N.Z,{className:(0,k.tw)(c||(c=S(["flex justify-between mt-5 mb-7"]))),size:"lg"},x().createElement("div",{className:(0,k.tw)(o||(o=S(["md:max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] flex-1"])))},x().createElement(E.Z,{to:P("/"===Q?"":Q),className:(0,k.tw)(s||(s=S(["inline-block ml-2 py-3"])))},x().createElement("span",{className:(0,k.tw)(d||(d=S(["sr-only"])))},"Proximify"),x().createElement("div",{className:(0,k.tw)(u||(u=S(["h-16"])))},x().createElement(A.Z,{contentId:L,value:J,className:(0,k.tw)(m||(m=S(["block object-contain w-full h-full"]))),alt:F,activeLang:$}))),x().createElement("p",{className:(0,k.tw)(b||(b=S(["text-gray-500 text-sm"])))},K)),x().createElement("div",{className:(0,k.tw)(p||(p=S(["flex flex-1"])))},V.length?V.map((function(e,t){var a=e.links;if(Array.isArray(a))return x().createElement(I,{key:t,articleData:e,activeLang:$,documents:W,documentId:L});var r=a.href,f=a.label;return x().createElement("div",{key:t,className:(0,k.tw)(v||(v=S(["flex-1"])))},x().createElement(E.Z,{key:t,to:(0,j.s2)((0,j.NC)(r,"",$,!0),W,$),className:(0,k.tw)(y||(y=S(["text-lg font-medium text-white hover:text-blue-500"])))},(0,j.NC)(f,"",$,!0)))})):_.map((function(e,t){var a=e.label,r=e.link,f=e.child_items;return f.size?x().createElement(I,{key:t,label:(0,j.NC)(a,"",$,!0),childItems:Array.from(f),activeLang:$,documents:W,documentId:L,colWidth:D}):x().createElement("div",{key:t,className:(0,k.tw)(h||(h=S(["flex-1"])))},x().createElement(E.Z,{to:(0,j.s2)((0,j.NC)(r,"",$,!0),W,$),className:(0,k.tw)(w||(w=S(["text-lg font-medium text-white hover:text-blue-500"]))),style:{width:D}},x().createElement("span",null,(0,j.NC)(a,"",$,!0))))})))))}},8450:(e,t,a)=>{a.d(t,{Z:()=>o});var r,f=a(8966),n=a.n(f),l=a(9261),i=a(7772);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}const o=(0,f.memo)((function(e){var t,a,f=e.contentType,o=void 0===f?"docufolio":f,s=e.viewType,d=void 0===s?"profile":s,u=e.contentId,m=e.value,b=e.alt,p=void 0===b?"":b,v=e.activeLang,y=e.className,h=void 0===y?(0,l.tw)(r||(t=["w-full h-full object-cover"],a||(a=t.slice(0)),r=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(a)}})))):y,w=e.filePreview,g=void 0!==w&&w,x="resources"===o?"equipment":o;if(!m)return null;var k,N,A,j=(N=m.split("/"),A=3,function(e){if(Array.isArray(e))return e}(N)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,f,n,l,i=[],c=!0,o=!1;try{if(n=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;c=!1}else for(;!(c=(r=n.call(a)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){o=!0,f=e}finally{try{if(!c&&null!=a.return&&(l=a.return(),Object(l)!==l))return}finally{if(o)throw f}}return i}}(N,A)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?c(e,t):void 0}}(N,A)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),E=j[0],C=j[1],O=j[2],S=O.split(".").pop();k=g&&!["jpg","jpeg","png","webp","gif","svg"].includes(S)?uniweb.getProfileAssertUrl({finalType:x,viewType:d,contentId:u,identifier:"".concat(C,"_preview"),version:E,ext:"webp"}):uniweb.getProfileAssertUrl({finalType:x,viewType:d,contentId:u,identifier:C,version:E,ext:S});var I=(0,i.NC)(p,"",v)||O;return n().createElement("img",{src:k,className:h,alt:I})}))},5674:(e,t,a)=>{a.d(t,{Z:()=>i});var r,f=a(8966),n=a.n(f),l=a(9261);const i=function(e){var t,a,f=e.className,i=e.children,c=e.element,o=e.size,s=void 0===o?"md":o,d=e.style,u=void 0===d?{}:d,m=c||"section";return n().createElement(m,{className:(0,l.tw)(r||(t=["mx-auto "," px-4 sm:px-6 lg:px-8 ",""],a||(a=t.slice(0)),r=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(a)}}))),{md:"2xl:max-w-[80rem] xl:max-w-[72rem] lg:max-w-[95%]",lg:"2xl:max-w-[100rem] xl:max-w-[80rem] lg:max-w-[95%]"}[s],f),style:u},i)}},5256:(e,t,a)=>{a.r(t),a.d(t,{amber:()=>g,black:()=>r,blue:()=>d,blueGray:()=>C,coolGray:()=>E,cyan:()=>m,emerald:()=>v,fuchsia:()=>i,gray:()=>j,green:()=>y,indigo:()=>s,lightBlue:()=>u,lime:()=>h,orange:()=>x,pink:()=>l,purple:()=>c,red:()=>k,rose:()=>n,sky:()=>b,teal:()=>p,trueGray:()=>A,violet:()=>o,warmGray:()=>N,white:()=>f,yellow:()=>w});var r="#000",f="#fff",n={50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},l={50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},i={50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},c={50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},o={50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},s={50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},d={50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},u={50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},m={50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},b={50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},p={50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},v={50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},y={50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},h={50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},w={50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},g={50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},x={50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},k={50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},N={50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},A={50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},j={50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},E={50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},C={50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"}},5372:(e,t,a)=>{a.r(t),a.d(t,{animation:()=>y,css:()=>b,keyframes:()=>v,screen:()=>w});var r=a(8220),f={};for(const e in r)["default","animation","css","keyframes","screen"].indexOf(e)<0&&(f[e]=()=>r[e]);a.d(t,f);var n=(e,t)=>!!~e.indexOf(t),l=(e,t="-")=>e.join(t),i=(e,t)=>{for(;"function"==typeof e;)e=e(t);return e},c=(e,t,a)=>t?Object.keys(t).reduce(((e,r)=>{const f=i(t[r],a);return((e,t)=>!n("@:&",e[0])&&(n("rg",(typeof t)[5])||Array.isArray(t)))(r,f)?e[(e=>e.replace(/[A-Z]/g,"-$&").toLowerCase())(r)]=f:e[r]="@"==r[0]&&n("figa",r[1])?(e[r]||[]).concat(f):c(e[r]||{},f,a),e}),e):e,o=("undefined"!=typeof CSS&&CSS.escape,/\s*(?:([\w-%@]+)\s*:?\s*([^{;]+?)\s*(?:;|$|})|([^;}{]*?)\s*{)|(})/gi),s=/\/\*[\s\S]*?\*\/|\s+|\n/gm,d=(e,t)=>e.reduceRight(((e,t)=>({[t]:e})),t),u=(e,t,a)=>{a&&e.push(d(t,a))},m=(e,t)=>((e,t)=>{const a=(e,r)=>Array.isArray(r)?r.reduce(a,e):c(e,i(r,t),t);return e.reduce(a,{})})(Array.isArray(e[0])&&Array.isArray(e[0].raw)?((e,t)=>{const a=[],f=[];let n,l;for(let m=0;m<e.length;m++){const b=e[m];if("string"==typeof b){for(;l=o.exec(b.replace(s," "));)if(l[0])if(l[4]&&(n=u(f,a,n),a.pop()),l[3])n=u(f,a,n),a.push(l[3]);else if(!l[4]){n||(n={});const a=l[2]&&/\S/.test(l[2])?l[2]:e[++m];a&&("@apply"==l[1]?c(n,i((0,r.apply)(a),t),t):n[l[1]]=a)}}else n=u(f,a,n),f.push(d(a,b))}return u(f,a,n),f})(((e,t,a)=>{let r=e[0];const f=[];for(let n=0;n<t.length;){const l=i(t[n],a);l&&"object"==typeof l?(f.push(r,l),r=e[++n]):r+=(l||"")+e[++n]}return f.push(r),f})(e[0],e.slice(1),t),t):e,t),b=(...e)=>(0,r.directive)(m,e),p=(e,t)=>{const a=m(e,t),f=(0,r.hash)(JSON.stringify(a));return t.tw((()=>({[`@keyframes ${f}`]:a}))),f},v=(...e)=>(0,r.directive)(p,e),y=(e,t)=>void 0===t?(...t)=>y(e,v(...t)):b({...e&&"object"==typeof e?e:{animation:e},animationName:"function"==typeof t?t:v(t)}),h=({size:e,rules:t},a)=>{const r=(f=a.theme("screens",e),Array.isArray(f)||(f=[f]),"@media "+l(f.map((e=>("string"==typeof e&&(e={min:e}),e.raw||l(Object.keys(e).map((t=>`(${t}-width:${e[t]})`))," and ")))),","));var f;return void 0===t?r:{[r]:"function"==typeof t?i(t,a):m([t],a)}},w=(e,t)=>(0,r.directive)(h,{size:e,rules:t})}}]);
"use strict";(self.webpackChunkdeployer=self.webpackChunkdeployer||[]).push([[946],{3406:(e,t,a)=>{a.d(t,{D:()=>l});var r=a(8220),f=()=>({paddingBottom:"calc(var(--tw-aspect-h)/var(--tw-aspect-w)*100%)"}),i=(e,{theme:t,tag:a})=>"none"===e?r.apply`static pb-0 children:(static h-auto w-auto inset-auto)`:{"--tw-aspect-w":e.w&&"ratio"!==e.w&&t("aspectRatio",""+e.w,""+e.w),"--tw-aspect-h":e.h&&t("aspectRatio",""+e.h,""+e.h),_:e.h&&"ratio"!==e.w?a("aspect-ratio"):void 0,":global":{["."+a("aspect-ratio")]:r.apply`relative ${f} children:(absolute h-full w-full inset-0)`}},l=(e,t)=>{if(Array.isArray(e))switch(e[0]){case"w":return(0,r.directive)(i,{w:e[1]});case"h":return(0,r.directive)(i,{h:e[1]});case"none":return(0,r.directive)(i,e[0]);default:return 1===e.length&&(e=e[0].split("/")),(0,r.directive)(i,{w:e[0],h:e[1]})}if("none"===e)return(0,r.directive)(i,e);if("object"==typeof e)return(0,r.directive)(i,e);if(void 0!==t)return(0,r.directive)(i,{w:e,h:t});let[a,f]=e.split("/");return(0,r.directive)(i,{w:a,h:f})}},9396:(e,t,a)=>{a(8220)},3528:(e,t,a)=>{a.r(t),a.d(t,{default:()=>L});var r,f,i,l,n,c,d,s,o,m,u,b,h,p,v,y,w=a(8966),g=a.n(w),x=a(7772),k=a(9261),N=a(5674),S=a(8450),j=a(3085);function A(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,f,i,l,n=[],c=!0,d=!1;try{if(i=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;c=!1}else for(;!(c=(r=i.call(a)).done)&&(n.push(r.value),n.length!==t);c=!0);}catch(e){d=!0,f=e}finally{try{if(!c&&null!=a.return&&(l=a.return(),Object(l)!==l))return}finally{if(d)throw f}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return C(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?C(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var I=function(e){var t,a,v=e.title,y=e.description,w=e.image,N=e.alt,C=e.articleData,I=e.textStyle,L=e.imageStyle,O=e.documentId,H=e.activeLang,W=e.makeLink,_=e.documents,P=e.itemClickable,Z=e.cardWidth,z=e.cardHeight,T=e.showBorder,$=void 0===T||T,B=e.filePreview,M=e.imageHeight,G=(null==C?void 0:C.title)||(0,x.NC)(v,"",H),D=(null==C?void 0:C.subtitle)||"",R=(0,x.NC)(y,"",H),U=(null==C||null===(t=C.img)||void 0===t?void 0:t.alt)||(0,x.NC)(N,"",H),F=(null==C||null===(a=C.img)||void 0===a?void 0:a.value)||(0,x.NC)(w,"",H),J=[];C&&null!=C&&C.links&&(J=Array.from(C.links).map((function(e){var t=E(e,2),a=t[0],r=t[1];return[a,{link:r.href,label:r.label}]})));var q=[];C&&null!=C&&C.description&&(q=Array.from(C.description));var K="div",Q={};if(!(G||D||R||q.length)){var V=Z||"192px",X=z||"";if(P&&J.length){var Y=J[0][1].link,ee=(0,x.NC)(Y,"",H),te=ee.includes("https:")||ee.startsWith("mailto:")||ee.startsWith("tel:"),ae=te?ee:W((0,x.s2)(ee,_,H));K=j.Z,Q={className:(0,k.tw)(r||(r=A(["w-[","] h-48 p-6 m-2 rounded-xl !shadow-md hover:!shadow-lg bg-white"])),V),style:{height:X},to:ae,external:te}}else Q={className:(0,k.tw)(f||(f=A(["w-[","] h-48 p-6 m-2 bg-white"])),V),style:{height:X}};return g().createElement(K,Q,g().createElement(S.Z,{contentId:O,value:F,alt:U,activeLang:H,className:(0,k.tw)(i||(i=A(["w-full h-full object-contain"])))}))}var re=Z||"20rem",fe=z||"";if(P){var ie=(0,k.tw)(l||(l=A(["space-y-2 mx-5 mb-7 w-[","] my-3 rounded-xl "," border-transparent !shadow-md hover:!shadow-xl hover:border-gray-300 overflow-hidden bg-white"])),re,$?"border":"");if(J.length){var le=J[0][1].link,ne=(0,x.NC)(le,"",H),ce=ne.includes("https:")||ne.startsWith("mailto:")||ne.startsWith("tel:"),de=ce?ne:W((0,x.s2)(ne,_,H));K=j.Z,Q={className:ie,style:{height:fe},to:de,external:ce}}else if(B){var se=E(F.split("/"),2),oe=se[0],me=se[1],ue=uniweb.getProfileAssertUrl({finalType:"docufolio",viewType:"profile",contentId:O,identifier:"".concat(me,"_preview"),version:oe,ext:"webp"});K=j.Z,Q={className:ie,style:{height:fe},to:ue,external:!0,target:"_blank"}}}else Q={className:(0,k.tw)(n||(n=A(["space-y-2 mx-5 mb-7 w-[","] my-3 px-4 sm:px-6 lg:px-8 bg-white"])),re),style:{height:fe}};var be=M||"210px";return g().createElement(K,Q,g().createElement("div",{className:(0,k.tw)(c||(c=A(["w-full"]))),style:{height:be}},g().createElement(S.Z,{contentId:O,value:F,alt:U,activeLang:H,filePreview:B,className:(0,k.tw)(d||(d=A(["w-full h-full ",""])),L)})),g().createElement("header",{className:(0,k.tw)(s||(s=A(["flex flex-col flex-col-reverse w-full !mt-3 ",""])),P?"px-4":"")},g().createElement("h2",{className:(0,k.tw)(o||(o=A(["font-medium text-2xl leading-6 my-2 ",""])),I),dangerouslySetInnerHTML:{__html:G}}),g().createElement("h3",{className:(0,k.tw)(m||(m=A(["text-sm uppercase ",""])),I),dangerouslySetInnerHTML:{__html:D}})),g().createElement("div",{className:(0,k.tw)(u||(u=A(["w-full ",""])),P?"px-4 pb-4":"")},R?g().createElement("p",{className:(0,k.tw)(b||(b=A(["text-base ",""])),I),dangerouslySetInnerHTML:{__html:R}}):q.map((function(e,t){var a=E(e,2)[1];return g().createElement("p",{key:t,className:(0,k.tw)(h||(h=A(["text-base ",""])),I),dangerouslySetInnerHTML:{__html:a}})}))),P?null:g().createElement("div",null,J.map((function(e,t){var a=e.label,r=e.link,f=(0,x.NC)(r,"",H),i=f.includes("https:")||f.startsWith("mailto:")||f.startsWith("tel:"),l=i?f:W((0,x.s2)(f,_,H));return g().createElement(j.Z,{key:t,className:(0,k.tw)(p||(p=A(["my-4 font-medium text-lg text-blue-600 hover:underline h-11"]))),to:l,external:i},(0,x.NC)(a,"",H))}))))};const L=function(e){var t=e.title,a=e.description,r=e.image,f=e.alt,i=e.documentId,l=e.properties,n=e.activeLang,c=e.content,d=e.documents,s=e.makeLink,o=E((0,w.useState)([]),2),m=o[0],u=o[1];(0,w.useEffect)((function(){if(c){var e=(0,x.jx)(c,{title:{type:"heading",attrs:{level:1}},subtitle:{type:"heading",attrs:{level:2}},description:{type:"heading",attrs:{level:3},multiple:!0},img:{type:"ImageBlock"},links:{type:"link",multiple:!0}});u(e)}}),[c]);var b=l.itemClickable,h=void 0!==b&&b,p=l.maxWidth,S=void 0===p?"":p,j=l.cardWidth,C=void 0===j?"":j,L=l.cardHeight,O=void 0===L?"":L,H=l.bgColor,W=void 0===H?"white":H,_=l.textColor,P=l.filePreview,Z=void 0!==P&&P,z=l.imagePosition,T=void 0===z?"center":z,$=l.imageHeight,B=void 0===$?"":$,M=l.margin,G=void 0===M?"":M,D=(0,k.iv)({color:_}),R=(0,k.iv)({objectPosition:T,objectFit:"cover"});return g().createElement("div",{className:(0,k.tw)(v||(v=A(["",""])),G),style:{background:W}},g().createElement("p",null,"Text for test"),g().createElement(N.Z,{className:(0,k.tw)(y||(y=A(["flex flex-wrap justify-center !mt-0 !px-0 sm:!px-0 lg:!px-0 mb-6 md:mb-12"]))),style:{maxWidth:S},size:"lg"},m.length?m.map((function(e,t){return g().createElement(I,{key:t,articleData:e,documentId:i,activeLang:n,makeLink:s,documents:d,itemClickable:h,cardWidth:C,cardHeight:O,imageHeight:B,showBorder:"white"===W,textStyle:D,imageStyle:R,filePreview:Z})})):g().createElement(I,{title:t,description:a,image:r,alt:f,documentId:i,activeLang:n,makeLink:s,documents:d,itemClickable:h,cardWidth:C,cardHeight:O,imageHeight:B,showBorder:"white"===W,textStyle:D,imageStyle:R,filePreview:Z})))}},5674:(e,t,a)=>{a.d(t,{Z:()=>n});var r,f=a(8966),i=a.n(f),l=a(9261);const n=function(e){var t,a,f=e.className,n=e.children,c=e.element,d=e.size,s=void 0===d?"md":d,o=e.style,m=void 0===o?{}:o,u=c||"section";return i().createElement(u,{className:(0,l.tw)(r||(t=["mx-auto "," px-4 sm:px-6 lg:px-8 ",""],a||(a=t.slice(0)),r=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(a)}}))),{md:"2xl:max-w-[80rem] xl:max-w-[72rem] lg:max-w-[95%]",lg:"2xl:max-w-[100rem] xl:max-w-[80rem] lg:max-w-[95%]"}[s],f),style:m},n)}},5256:(e,t,a)=>{a.r(t),a.d(t,{amber:()=>g,black:()=>r,blue:()=>o,blueGray:()=>E,coolGray:()=>A,cyan:()=>u,emerald:()=>p,fuchsia:()=>n,gray:()=>j,green:()=>v,indigo:()=>s,lightBlue:()=>m,lime:()=>y,orange:()=>x,pink:()=>l,purple:()=>c,red:()=>k,rose:()=>i,sky:()=>b,teal:()=>h,trueGray:()=>S,violet:()=>d,warmGray:()=>N,white:()=>f,yellow:()=>w});var r="#000",f="#fff",i={50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},l={50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},n={50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},c={50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},d={50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},s={50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},o={50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},m={50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},u={50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},b={50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},h={50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},p={50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},v={50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},y={50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},w={50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},g={50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},x={50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},k={50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},N={50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},S={50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},j={50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},A={50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},E={50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"}},5372:(e,t,a)=>{a.r(t),a.d(t,{animation:()=>v,css:()=>b,keyframes:()=>p,screen:()=>w});var r=a(8220),f={};for(const e in r)["default","animation","css","keyframes","screen"].indexOf(e)<0&&(f[e]=()=>r[e]);a.d(t,f);var i=(e,t)=>!!~e.indexOf(t),l=(e,t="-")=>e.join(t),n=(e,t)=>{for(;"function"==typeof e;)e=e(t);return e},c=(e,t,a)=>t?Object.keys(t).reduce(((e,r)=>{const f=n(t[r],a);return((e,t)=>!i("@:&",e[0])&&(i("rg",(typeof t)[5])||Array.isArray(t)))(r,f)?e[(e=>e.replace(/[A-Z]/g,"-$&").toLowerCase())(r)]=f:e[r]="@"==r[0]&&i("figa",r[1])?(e[r]||[]).concat(f):c(e[r]||{},f,a),e}),e):e,d=("undefined"!=typeof CSS&&CSS.escape,/\s*(?:([\w-%@]+)\s*:?\s*([^{;]+?)\s*(?:;|$|})|([^;}{]*?)\s*{)|(})/gi),s=/\/\*[\s\S]*?\*\/|\s+|\n/gm,o=(e,t)=>e.reduceRight(((e,t)=>({[t]:e})),t),m=(e,t,a)=>{a&&e.push(o(t,a))},u=(e,t)=>((e,t)=>{const a=(e,r)=>Array.isArray(r)?r.reduce(a,e):c(e,n(r,t),t);return e.reduce(a,{})})(Array.isArray(e[0])&&Array.isArray(e[0].raw)?((e,t)=>{const a=[],f=[];let i,l;for(let u=0;u<e.length;u++){const b=e[u];if("string"==typeof b){for(;l=d.exec(b.replace(s," "));)if(l[0])if(l[4]&&(i=m(f,a,i),a.pop()),l[3])i=m(f,a,i),a.push(l[3]);else if(!l[4]){i||(i={});const a=l[2]&&/\S/.test(l[2])?l[2]:e[++u];a&&("@apply"==l[1]?c(i,n((0,r.apply)(a),t),t):i[l[1]]=a)}}else i=m(f,a,i),f.push(o(a,b))}return m(f,a,i),f})(((e,t,a)=>{let r=e[0];const f=[];for(let i=0;i<t.length;){const l=n(t[i],a);l&&"object"==typeof l?(f.push(r,l),r=e[++i]):r+=(l||"")+e[++i]}return f.push(r),f})(e[0],e.slice(1),t),t):e,t),b=(...e)=>(0,r.directive)(u,e),h=(e,t)=>{const a=u(e,t),f=(0,r.hash)(JSON.stringify(a));return t.tw((()=>({[`@keyframes ${f}`]:a}))),f},p=(...e)=>(0,r.directive)(h,e),v=(e,t)=>void 0===t?(...t)=>v(e,p(...t)):b({...e&&"object"==typeof e?e:{animation:e},animationName:"function"==typeof t?t:p(t)}),y=({size:e,rules:t},a)=>{const r=(f=a.theme("screens",e),Array.isArray(f)||(f=[f]),"@media "+l(f.map((e=>("string"==typeof e&&(e={min:e}),e.raw||l(Object.keys(e).map((t=>`(${t}-width:${e[t]})`))," and ")))),","));var f;return void 0===t?r:{[r]:"function"==typeof t?n(t,a):u([t],a)}},w=(e,t)=>(0,r.directive)(y,{size:e,rules:t})}}]);
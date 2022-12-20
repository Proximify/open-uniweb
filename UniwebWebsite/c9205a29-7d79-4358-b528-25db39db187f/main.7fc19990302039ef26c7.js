"use strict";(self.webpackChunkdeployer=self.webpackChunkdeployer||[]).push([[60],{3406:(e,t,r)=>{r.d(t,{D:()=>i});var n=r(8220),a=()=>({paddingBottom:"calc(var(--tw-aspect-h)/var(--tw-aspect-w)*100%)"}),f=(e,{theme:t,tag:r})=>"none"===e?n.apply`static pb-0 children:(static h-auto w-auto inset-auto)`:{"--tw-aspect-w":e.w&&"ratio"!==e.w&&t("aspectRatio",""+e.w,""+e.w),"--tw-aspect-h":e.h&&t("aspectRatio",""+e.h,""+e.h),_:e.h&&"ratio"!==e.w?r("aspect-ratio"):void 0,":global":{["."+r("aspect-ratio")]:n.apply`relative ${a} children:(absolute h-full w-full inset-0)`}},i=(e,t)=>{if(Array.isArray(e))switch(e[0]){case"w":return(0,n.directive)(f,{w:e[1]});case"h":return(0,n.directive)(f,{h:e[1]});case"none":return(0,n.directive)(f,e[0]);default:return 1===e.length&&(e=e[0].split("/")),(0,n.directive)(f,{w:e[0],h:e[1]})}if("none"===e)return(0,n.directive)(f,e);if("object"==typeof e)return(0,n.directive)(f,e);if(void 0!==t)return(0,n.directive)(f,{w:e,h:t});let[r,a]=e.split("/");return(0,n.directive)(f,{w:r,h:a})}},9396:(e,t,r)=>{r(8220)},2060:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var n,a,f,i,l,o,c,d,u=r(8966),s=r.n(u),v=r(7772),p=r(9261),b=r(5674);function y(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,f,i,l=[],o=!0,c=!1;try{if(f=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;o=!1}else for(;!(o=(n=f.call(r)).done)&&(l.push(n.value),l.length!==t);o=!0);}catch(e){c=!0,a=e}finally{try{if(!o&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const g=function(e){var t=e.title,r=e.description,h=e.properties,g=e.activeLang,w=e.content,x=m((0,u.useState)(null),2),j=x[0],A=x[1];(0,u.useEffect)((function(){if(w){var e=(0,v.jx)(w,{title:{type:"heading",attrs:{level:1}},subtitle:{type:"heading",attrs:{level:2}},description:{type:"heading",attrs:{level:3},multiple:!0}});A((null==e?void 0:e[0])||null)}}),[w]);var S=h.bgColor,k=void 0===S?"white":S,O=h.textColor,E=void 0===O?"":O,N=h.textAlign,I=void 0===N?"center":N,T=h.maxWidth,C=void 0===T?"":T,_=h.sectionHead,z=void 0!==_&&_,M=(0,p.iv)({color:E||"var(--primary)",textAlign:I}),$=(null==j?void 0:j.title)||(0,v.NC)(t,"",g),L=(null==j?void 0:j.subtitle)||"",B=(0,v.NC)(r,"",g),H=[];return j&&null!=j&&j.description&&(H=Array.from(j.description)),s().createElement("div",{className:(0,p.tw)(n||(n=y(["relative"]))),style:{background:k}},s().createElement(b.Z,{className:(0,p.tw)(a||(a=y(["w-full flex justify-"," "," "," ",""])),I,z?"mb-3 md:mb-6":"mb-6 md:mb-12","white"!==k?"mt-6 md:mt-12":"",C?"!max-w-[".concat(C,"]"):"")},s().createElement("article",{className:(0,p.tw)(f||(f=y(["space-y-5"])))},s().createElement("header",{className:(0,p.tw)(i||(i=y(["space-y-3"])))},$?s().createElement("h2",{className:(0,p.tw)(l||(l=y(["text-2xl md:text-4xl font-bold ",""])),M),dangerouslySetInnerHTML:{__html:$}}):null,L?s().createElement("h3",{className:(0,p.tw)(o||(o=y(["text-xl md:text-3xl font-semibold ",""])),M),dangerouslySetInnerHTML:{__html:L}}):null),B?s().createElement("p",{className:(0,p.tw)(c||(c=y(["text-lg font-medium ",""])),M),dangerouslySetInnerHTML:{__html:B}}):H.map((function(e,t){var r=m(e,2)[1];return s().createElement("p",{key:t,className:(0,p.tw)(d||(d=y(["text-lg font-medium ",""])),M),dangerouslySetInnerHTML:{__html:r}})})))))}},7772:(e,t,r)=>{function n(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==i(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===i(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=r||uniweb.language(),f=uniweb.config.languages()[0];if("object"===i(e)&&!Array.isArray(e))return n?(null==e?void 0:e[a])||(null==e?void 0:e[f])||t:(null==e?void 0:e[a])||t;if("string"==typeof e)try{var l=JSON.parse(e);if("object"===i(l))return n?(null==l?void 0:l[a])||(null==l?void 0:l[f])||t:(null==l?void 0:l[a])||t}catch(t){return e}return t}r.d(t,{NC:()=>l,jx:()=>c,s2:()=>d});var o=function e(t,r){for(var n={},f=Object.keys(r),i=function(i){for(var l=f[i],o=r[l],c=o.type,d=o.attrs,u=o.multiple,s=void 0!==u&&u,v=o.parentType,p=void 0===v?"":v,b=0;b<t.length;b++){var y=t[b],m=null==y?void 0:y.type,h=null==y?void 0:y.attrs,g=(null==y?void 0:y.content)||[];if(m===c){if(h){var w=!0;for(var x in d)if(d[x]!==(null==h?void 0:h[x])){w=!1;break}if(!w)continue}var j=null;if(["heading"].includes(c))j=g.map((function(e){var t=e.text,r=e.marks,n=void 0===r?[]:r;if(!n.length)return t;var a=t;return n.forEach((function(e){var t=e.type;if("link"===t){var r=(null==e?void 0:e.attrs)||{},n=r.href,f=r.target;a='<a target="'.concat(f,'" href="').concat(n,'">').concat(a,"</a>")}else if("textStyle"===t){var i=((null==e?void 0:e.attrs)||{}).color;"string"==typeof i&&i&&(a='<span style="color: var(--'.concat(i,')"}>').concat(a,"</span>"))}else"bold"===t&&(a='<span style="font-weight: 700"}>'.concat(a,"</span>"))})),a})).join("");else if("ImageBlock"===c){var A=h.info,S=h.targetId,k=h.caption,O=void 0===k?"":k,E=h.direction,N=void 0===E?"center":E,I=A.contentType,T=A.viewType,C=A.contentId,_=A.identifier,z=A.version,M=A.filename;j={contentType:I,viewType:T,contentId:S||C,value:"".concat(z,"/").concat(_,"/").concat(M),alt:O,size:{center:"basic",wide:"lg",fill:"full"}[N]}}else if("Video"===c){var $=h.src,L=h.caption;j={src:$,caption:void 0===L?"":L}}if(j){if(!s){n[l]=j;break}null!=n&&n[l]||(n[l]=new Map),n[l].set(b,j)}}else if(m===p)"bulletList"===p&&function(){var t=g.map((function(e){return"listItem"===e.type?e.content:null})).filter(Boolean),r={type:c,attrs:d,multiple:s,parentType:p},f=t.map((function(t){var n=e(t,a({},l,r));if(Object.keys(n).length){if(Array.isArray(n[l])){var f,i,o,c=(null===(f=t.find((function(e){var t,r;return"paragraph"===e.type&&"text"===(null===(t=e.content)||void 0===t||null===(r=t[0])||void 0===r?void 0:r.type)})))||void 0===f||null===(i=f.content)||void 0===i||null===(o=i[0])||void 0===o?void 0:o.text)||"";n.label=c}return n}return null})).filter(Boolean);f.length&&(n[l]=f)}();else if("link"===c)for(var B=null,H=0;H<g.length;H++){for(var P=g[H],G=(null==P?void 0:P.marks)||[],D=0;D<G.length;D++){var R=G[D];if((null==R?void 0:R.type)===c){var Z;B={href:null==R||null===(Z=R.attrs)||void 0===Z?void 0:Z.href,label:(null==P?void 0:P.text)||""};break}}if(B){if(!s){n[l]=B;break}null!=n&&n[l]||(n[l]=new Map),n[l].set(b,B)}}}},l=0;l<f.length;l++)i(l);return n},c=function(e,t){var r=(null==e?void 0:e.content)||[],a=[],f=[];if(r.forEach((function(e){if("DividerBlock"===e.type){if(f.length){var r=o(n(f),t);Object.keys(r).length&&a.push(r)}f=[]}else f.push(e)})),f.length){var i=o(n(f),t);Object.keys(i).length&&a.push(i)}return a},d=function(e,t,r){var n=function(e){var t;return 0===e.indexOf("topic:")&&((null===(t=e.split(":"))||void 0===t?void 0:t[1])||!1)}(e);if(!n)return e;var a=function(e){var t={};return e.forEach((function(e){e.pages.forEach((function(e){var r=e.id,n=e.route;t[r]=n}))})),t}(t);return l((null==a?void 0:a[n])||e,"",r)}},5674:(e,t,r)=>{r.d(t,{Z:()=>l});var n,a=r(8966),f=r.n(a),i=r(9261);const l=function(e){var t,r,a=e.className,l=e.children,o=e.element,c=e.size,d=void 0===c?"md":c,u=e.style,s=void 0===u?{}:u,v=o||"section";return f().createElement(v,{className:(0,i.tw)(n||(t=["mx-auto "," px-4 sm:px-6 lg:px-8 ",""],r||(r=t.slice(0)),n=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(r)}}))),{md:"2xl:max-w-[80rem] xl:max-w-[72rem] lg:max-w-[95%]",lg:"2xl:max-w-[100rem] xl:max-w-[80rem] lg:max-w-[95%]"}[d],a),style:s},l)}},9261:(e,t,r)=>{r.d(t,{iv:()=>a.css,tw:()=>l});var n=r(8220),a=r(5372),f=(r(918),r(9396),r(3406)),i=r(5256);window.twind||(n.setup({theme:{extend:{colors:i}},plugins:{aspect:f.D}}),window.twind=n);var l=n.tw;n.apply},5256:(e,t,r)=>{r.r(t),r.d(t,{amber:()=>w,black:()=>n,blue:()=>u,blueGray:()=>E,coolGray:()=>O,cyan:()=>v,emerald:()=>y,fuchsia:()=>l,gray:()=>k,green:()=>m,indigo:()=>d,lightBlue:()=>s,lime:()=>h,orange:()=>x,pink:()=>i,purple:()=>o,red:()=>j,rose:()=>f,sky:()=>p,teal:()=>b,trueGray:()=>S,violet:()=>c,warmGray:()=>A,white:()=>a,yellow:()=>g});var n="#000",a="#fff",f={50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},i={50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},l={50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},o={50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},c={50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},d={50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},u={50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},s={50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},v={50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},p={50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},b={50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},y={50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},m={50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},h={50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},g={50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},w={50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},x={50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},j={50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},A={50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},S={50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},k={50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},O={50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},E={50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"}},5372:(e,t,r)=>{r.r(t),r.d(t,{animation:()=>m,css:()=>p,keyframes:()=>y,screen:()=>g});var n=r(8220),a={};for(const e in n)["default","animation","css","keyframes","screen"].indexOf(e)<0&&(a[e]=()=>n[e]);r.d(t,a);var f=(e,t)=>!!~e.indexOf(t),i=(e,t="-")=>e.join(t),l=(e,t)=>{for(;"function"==typeof e;)e=e(t);return e},o=(e,t,r)=>t?Object.keys(t).reduce(((e,n)=>{const a=l(t[n],r);return((e,t)=>!f("@:&",e[0])&&(f("rg",(typeof t)[5])||Array.isArray(t)))(n,a)?e[(e=>e.replace(/[A-Z]/g,"-$&").toLowerCase())(n)]=a:e[n]="@"==n[0]&&f("figa",n[1])?(e[n]||[]).concat(a):o(e[n]||{},a,r),e}),e):e,c=("undefined"!=typeof CSS&&CSS.escape,/\s*(?:([\w-%@]+)\s*:?\s*([^{;]+?)\s*(?:;|$|})|([^;}{]*?)\s*{)|(})/gi),d=/\/\*[\s\S]*?\*\/|\s+|\n/gm,u=(e,t)=>e.reduceRight(((e,t)=>({[t]:e})),t),s=(e,t,r)=>{r&&e.push(u(t,r))},v=(e,t)=>((e,t)=>{const r=(e,n)=>Array.isArray(n)?n.reduce(r,e):o(e,l(n,t),t);return e.reduce(r,{})})(Array.isArray(e[0])&&Array.isArray(e[0].raw)?((e,t)=>{const r=[],a=[];let f,i;for(let v=0;v<e.length;v++){const p=e[v];if("string"==typeof p){for(;i=c.exec(p.replace(d," "));)if(i[0])if(i[4]&&(f=s(a,r,f),r.pop()),i[3])f=s(a,r,f),r.push(i[3]);else if(!i[4]){f||(f={});const r=i[2]&&/\S/.test(i[2])?i[2]:e[++v];r&&("@apply"==i[1]?o(f,l((0,n.apply)(r),t),t):f[i[1]]=r)}}else f=s(a,r,f),a.push(u(r,p))}return s(a,r,f),a})(((e,t,r)=>{let n=e[0];const a=[];for(let f=0;f<t.length;){const i=l(t[f],r);i&&"object"==typeof i?(a.push(n,i),n=e[++f]):n+=(i||"")+e[++f]}return a.push(n),a})(e[0],e.slice(1),t),t):e,t),p=(...e)=>(0,n.directive)(v,e),b=(e,t)=>{const r=v(e,t),a=(0,n.hash)(JSON.stringify(r));return t.tw((()=>({[`@keyframes ${a}`]:r}))),a},y=(...e)=>(0,n.directive)(b,e),m=(e,t)=>void 0===t?(...t)=>m(e,y(...t)):p({...e&&"object"==typeof e?e:{animation:e},animationName:"function"==typeof t?t:y(t)}),h=({size:e,rules:t},r)=>{const n=(a=r.theme("screens",e),Array.isArray(a)||(a=[a]),"@media "+i(a.map((e=>("string"==typeof e&&(e={min:e}),e.raw||i(Object.keys(e).map((t=>`(${t}-width:${e[t]})`))," and ")))),","));var a;return void 0===t?n:{[n]:"function"==typeof t?l(t,r):v([t],r)}},g=(e,t)=>(0,n.directive)(h,{size:e,rules:t})}}]);
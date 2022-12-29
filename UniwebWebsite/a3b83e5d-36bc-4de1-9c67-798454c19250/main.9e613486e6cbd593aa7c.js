"use strict";(self.webpackChunkbuilder=self.webpackChunkbuilder||[]).push([[193],{1193:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Je});var n=r(8966),a=r.n(n),o=r(8074),l=r(6688),i=r.n(l),c=r(2960),u=r.n(c),s=(0,n.lazy)((function(){return uniweb.getComponent("profileComponents","ProfileImage").catch((function(){return{default:function(){return null}}}))}));const f=function(e){return a().createElement(n.Suspense,{fallback:"loading..."},a().createElement(s,e))};var m,d,y,p,b,v,h,g,w,x,O,S,j,E=r(5061),I=r(6689);function A(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function N(e,t){if(e){if("string"==typeof e)return k(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?k(e,t):void 0}}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function P(e){var t,r,l=e.mode,i=void 0===l?"static":l,c=e.sticky,u=void 0!==c&&c,s=e.searchText,f=e.setSearchText,P=(e.useSWR,e.year),T=e.setYear,C=e.activeLang,D=e.blogs,L=(t=(0,n.useState)(s),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,l,i=[],c=!0,u=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(u)throw a}}return i}}(t,r)||N(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),M=L[0],_=L[1];(0,n.useEffect)((function(){_(s)}),[s]);var z=function(e){return function(e){if(Array.isArray(e))return k(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||N(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(new Set(D.map((function(e){return(null==e?void 0:e.date).split("-")[0]})))).sort().reverse(),R=(0,o.iv)({"&::-webkit-scrollbar":{display:"none"},"scrollbar-width":"none","-ms-overflow-style":"none"}),W=e.sidebarStyle?(0,o.tw)(m||(m=A(["",""])),e.sidebarStyle):(0,o.tw)(d||(d=A(["flex flex-col"]))),F=u?"md:(sticky top-0) h-full":"static"===i?"h-full md:(sticky top-3 self-start h-auto)":"h-full";return a().createElement("div",{className:(0,o.tw)(y||(y=A(["hidden md:flex flex-shrink-0 w-60 md:w-64 lg:w-56 xl:w-60 justify-end ",""])),F)},a().createElement("div",{className:(0,o.tw)(p||(p=A(["pt-5 pb-6  h-auto ",""])),"static"===i?"static":"fixed"),style:{width:"inherit",paddingLeft:"1px",paddingRight:"1px"}},a().createElement("div",{className:(0,o.tw)(b||(b=A([""," ",""])),W,R),style:{maxHeight:"100%"}},a().createElement("div",{className:(0,o.tw)(v||(v=A(["w-full mb-3 flex relative group"])))},a().createElement("input",{placeholder:(0,E.NC)({en:"Search by title",fr:"Recherche par titre"},"",C),className:(0,o.tw)(h||(h=A(["w-full border border-gray-300 rounded-md py-1.5 px-2.5 text-gray-500 !shadow-sm focus:text-gray-900 hover:text-gray-500 focus:!shadow-lg hover:!shadow-md pr-[54px] focus:(ring-2 ring-blue-400 border-transparent) outline-none"]))),value:M,onChange:function(e){_(e.target.value||"")},onBlur:function(){f(M)},onKeyDown:function(e){"Enter"===e.key&&f(M)}}),a().createElement(I.apv,{className:(0,o.tw)(g||(g=A([""," absolute right-8 top-[9px] w-5 h-5 cursor-pointer text-gray-300 hover:text-gray-500"])),M?"visible":"invisible"),onClick:function(){f("")}}),a().createElement(I.G4C,{className:(0,o.tw)(w||(w=A(["absolute right-1.5 top-[9px] w-5 h-5 text-gray-300 group-hover:text-gray-500"])))})),a().createElement("div",{className:(0,o.tw)(x||(x=A(["w-full mb-3 flex flex-col mt-2"])))},z?a().createElement(a().Fragment,null,a().createElement("div",{className:(0,o.tw)(O||(O=A(["py-3.5 pl-1.5"])))},a().createElement("h2",{className:(0,o.tw)(S||(S=A(["font-bold text-gray-600 uppercase"])))},(0,E.NC)({en:"Published Date",fr:"Date de publication"},"",C))),z.map((function(e){var t=P===e;return a().createElement("div",{key:e,tabIndex:0,className:(0,o.tw)(j||(j=A(["flex cursor-pointer mb-1 text-gray-600 pl-5 items-center h-8 hover:bg-gray-100 ",""])),t?"!bg-blue-200":""),onClick:function(){T(t?"":e)}},e)}))):null))))}var T,C,D,L,M,_,z,R,W,F=r(4542);function U(e){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U(e)}function $(){return $=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},$.apply(this,arguments)}function B(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function H(e){return function(e){if(Array.isArray(e))return V(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||K(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(Object(r),!0).forEach((function(t){Y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Y(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==U(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==U(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===U(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function G(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,l,i=[],c=!0,u=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(u)throw a}}return i}}(e,t)||K(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(e,t){if(e){if("string"==typeof e)return V(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?V(e,t):void 0}}function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var q=function(e){var t=e.useSWR,r=e.makeLink,a=e.activeLang,l=e.blogs,c=G((0,n.useState)({page:1,search:"",hasMore:!0,year:""}),2),s=c[0],m=c[1],d=G((0,n.useState)([]),2),y=d[0],p=d[1],b=G((0,n.useState)(!1),2),v=b[0],h=b[1];(0,n.useEffect)((function(){var e=!0;return setTimeout((function(){e&&window.dispatchEvent(new CustomEvent("scroll"))}),50),function(){return e=!1}}),[]),(0,n.useEffect)((function(){p([]),m({search:"",page:1,hasMore:!0,year:""})}),[a,l]);var g=(0,n.useCallback)((function(){var e=s.page,t=s.hasMore;if(!v&&t){h(!0);var r=l.filter((function(e){var t,r=e.date,n=e.title,a=e.caption;return!(s.year&&!r.includes(s.year)||s.search&&!"".concat(n," ").concat(a).toLowerCase().includes(null===(t=s.search)||void 0===t?void 0:t.toLocaleLowerCase()))})),n=5*(e-1),a=n+5,o=a<r.length,i=o?e+1:e;m(Z(Z({},s),{},{page:i,hasMore:o})),p([].concat(H(y),H(r.slice(n,a)))),h(!1)}}),[v,y,s.page,s.search,s.year,l]),w=n.createElement("div",{key:"loader",className:(0,o.tw)(T||(T=B(["ml-8"])))},n.createElement(u(),{css:"display:block;margin:auto",color:"#444",size:"40px"})),x=n.createElement(i(),{loadMore:g,hasMore:s.hasMore,loader:w,className:(0,o.tw)(C||(C=B(["flex-grow"]))),threshold:300},n.createElement("ul",{key:"blogs",className:(0,o.tw)(D||(D=B(["flex flex-col space-y-6 lg:(space-y-10 py-12 border-l pl-12)"])))},y.length?y.map((function(e,t){var a=e.id,l=e.banner,i=e.title,c=e.caption,u=e.handle;return n.createElement("li",{key:t},n.createElement(F.Z,{to:r(u||a),className:(0,o.tw)(L||(L=B(["cursor-pointer h-40 overflow-hidden rounded-md flex space-x-0 lg:space-x-6 border max-w-4xl relative !shadow hover:!shadow-lg"])))},n.createElement("div",{className:(0,o.tw)(M||(M=B(["w-40 h-40 flex-shrink-0 overflow-hidden hidden lg:block"])))},n.createElement(f,{contentType:"articles",contentId:a,version:l})),n.createElement("div",{className:(0,o.tw)(_||(_=B(["flex flex-col space-y-4 pl-4 pr-8 py-6"])))},n.createElement("h2",{className:(0,o.tw)(z||(z=B(["font-bold text-lg ",""])),(0,o.Sf)(2))},i),n.createElement("p",{className:(0,o.tw)(R||(R=B(["text-base "," text-gray-600"])),(0,o.Sf)(2))},c))))})):null));return n.createElement(n.Fragment,null,n.createElement("div",{className:(0,o.tw)(W||(W=B(["w-full flex px-6 py-8 mb-8 mx-auto flex-1 lg:(max-w-6xl px-8 py-12 space-x-10)"])))},n.createElement(P,{useSWR:t,searchText:s.search,setSearchText:function(e){p([]),m({page:1,hasMore:!0,search:e,year:""})},year:s.year,setYear:function(e){p([]),m({page:1,hasMore:!0,search:"",year:e})},blogs:l,activeLang:a}),x))};function Q(e){var t=e.blogs;return n.createElement(q,$({},e,{blogs:t}))}var X,ee,te,re,ne,ae,oe,le,ie,ce,ue=r(8636);function se(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function fe(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var me={en:"Latest blogs",fr:"Les derniers blogs"},de={en:"Relative blogs",fr:"Blogs relatifs"};function ye(e){var t=e.parsedDS,r=e.makeLink,a=e.blogs,l=e.currentArticleId,i=e.activeLang,c=(0,ue.useLocation)().pathname,u=(0,o.iv)({height:"120px"}),s=[],m=a.find((function(e){return e.contentId===l}));s=null!=m&&m.tag?function(e,t,r){return e.filter((function(e){return e.contentId!==t&&e.tag===r})).sort((function(e,t){var r=null==e?void 0:e.date,n=null==t?void 0:t.date;return new Date(n)-new Date(r)})).slice(0,3)}(a,l,m.tag):function(e,t){return e.filter((function(e){return e.contentId!==t})).sort((function(e,t){var r=null==e?void 0:e.date,n=null==t?void 0:t.date;return new Date(n)-new Date(r)})).slice(0,3)}(a,l);var d=c.split("/");d.pop();var y=s.map((function(e){var a,l=e.id,i=e.banner,c=e.title,s=e.date,m=e.handle,y=[].concat((a=d,function(e){if(Array.isArray(e))return fe(e)}(a)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(a)||function(e,t){if(e){if("string"==typeof e)return fe(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?fe(e,t):void 0}}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),[m||l]).join("/");return n.createElement(F.Z,{to:r(y,t),key:l,className:(0,o.tw)(X||(X=se(["w-full lg:(w-1/3) h-48"])))},n.createElement("div",{className:(0,o.tw)(ee||(ee=se(["flex flex-col !shadow group rounded bg-white overflow-hidden h-full !hover:shadow-md"])))},n.createElement("div",{className:(0,o.tw)(te||(te=se(["w-full ",""])),u)},n.createElement(f,{contentType:"articles",contentId:l,version:i,type:"banner"})),n.createElement("div",{className:(0,o.tw)(re||(re=se(["flex items-start justify-between px-2 py-2"])))},n.createElement("div",{className:(0,o.tw)(ne||(ne=se(["flex flex-col space-y-1"])))},n.createElement("div",{className:(0,o.tw)(ae||(ae=se(["flex items-center"])))},n.createElement("div",{className:(0,o.tw)(oe||(oe=se([""," text-sm text-gray-600 group-hover:text-gray-700 font-medium"])),(0,o.Sf)(2))},c)),n.createElement("div",{className:(0,o.tw)(le||(le=se(["text-xs text-gray-400 group-hover:text-gray-500"])))},s)))))}));return n.createElement(n.Fragment,null,n.createElement("h2",{className:(0,o.tw)(ie||(ie=se(["font-bold text-2xl mb-4"])))},null!=m&&m.tag?(0,E.NC)(de,"",i):(0,E.NC)(me,"",i)),n.createElement("div",{className:(0,o.tw)(ce||(ce=se(["w-full flex items-center space-y-4 flex-col md:(flex-row space-y-0 space-x-4)"])))},y))}var pe=r(1339),be=["_banner","_avatar"];function ve(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,l,i=[],c=!0,u=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(u)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return he(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?he(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function he(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ge(e){return ge="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ge(e)}function we(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var xe,Oe,Se,je,Ee,Ie,Ae,Ne,ke=r.n(pe)().create({headers:{Accept:"*/*","Content-Type":"application/json"},data:{}}),Pe=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",l=getProfileTypes(e,t);return ke.get("profiles.php",{params:{action:"getProfiles",contentType:e,viewType:t,filter:r,orderBy:a,profileLang:o}}).then((function(r){return r.data.map((function(r){var a=r.contentId,o=r.head,i=r.ownerId,c=o?JSON.parse(o):{},u=c._banner,s=void 0===u?"":u,f=c._avatar,m=void 0===f?"":f,d=we(c,be),y={contentId:a,ownerId:i};if(n)if("members"===e&&"profile"===t)y.title="".concat(d.first_name," ").concat(d.last_name),y.subtitle="".concat(d.position_title[1],", ").concat(d.academic_unit[1]);else{var p=null==l?void 0:l.titleFieldName,b=null==l?void 0:l.captionFieldName,v=d[p],h=d[b];v=Array.isArray(v)?v[1]:v,"object"===ge(h=Array.isArray(h)?h[1]:h)&&(h=[p]in h?h[p]:Object.values(h)[0]),y.title=v,y.subtitle=h}return Object.entries(d).forEach((function(e){var t=ve(e,2),r=t[0],n=t[1];Array.isArray(n)?"string"==typeof n[1]?y[r]=n[1]:ge(n[1]):y[r]=n})),l.hasBanner&&(y.banner=s),l.hasAvatar&&(y.avatar=m),y}))}))};function Te(e){return null}function Ce(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function De(e){var t=e.useSWR,r=e.articleId,a=t("/getHead/articles/".concat(r),(function(){return Pe("articles","profile",{contentId:r},!0).then((function(e){return e[0]}))})),l=null==a?void 0:a.data,i=(null==l?void 0:l.ownerId)||"",c=t(i?"/getHead/members/".concat(i):null,(function(){return Pe("members","profile",{contentId:parseInt(i)},!0).then((function(e){return e[0]}))})).data;if(!c||!l)return null;var u=c.title,s=c.avatar,m=void 0!==s&&s,d=l.date,y=n.createElement(n.Fragment,null,n.createElement(F.Z,{profile:{contentType:"members",contentId:i}},n.createElement("div",{className:(0,o.tw)(xe||(xe=Ce(["w-10 h-10 md:(w-12 h-12) rounded-full mr-4"])))},n.createElement(f,{contentType:"members",contentId:i,version:m,type:"avatar",rounded:!0}))),n.createElement("div",{className:(0,o.tw)(Oe||(Oe=Ce(["flex flex-col"])))},n.createElement("h2",{className:(0,o.tw)(Se||(Se=Ce(["text-base self-stretch items-center flex text-gray-800"])))},u),n.createElement("p",{className:(0,o.tw)(je||(je=Ce(["text-gray-400 text-sm"])))},d))),p=(0,o.iv)({maxWidth:"740px"});return n.createElement("div",{className:(0,o.tw)(Ee||(Ee=Ce(["w-full flex items-center "," mx-auto mt-12 px-4 md:(px-0)"])),p)},y,n.createElement(Te,null))}function Le(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function Me(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,l,i=[],c=!0,u=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(u)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return _e(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_e(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _e(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r(7783);var ze=(0,n.lazy)((function(){return uniweb.getComponent("components","ArticleEditor").catch((function(){return{default:function(){return null}}}))}));function Re(e){var t,r,l,i=e.dataSource,c=void 0===i?{}:i,u=e.useDS,s=e.makeLink,f=e.activeLang,m=e.blogs,d=u(c),y=(0,ue.useParams)().contentId,p=(0,o.iv)({maxWidth:"740px"}),b=Me((0,n.useState)(null),2),v=b[0],h=b[1];(0,n.useEffect)((function(){var e=!0;return y&&(window.scrollTo({top:0}),(0,E.Ai)("articles",y,{skip:["article_information"]},!1,"profile","complete").then((function(t){if(e){var r=t.filter((function(e){return"article_body"===e.name||"article_assets"===e.name})),n=Me(r,2),a=n[0],o=n[1],l=a.section_id,i=a.fields,c=a.value,u=Object.keys(i)[0],s=0,f="";if(c.length){var m,d,p,b=c[0];s=b.itemId,f="string"==typeof(null==b||null===(m=b.content)||void 0===m?void 0:m.value)?JSON.parse(null==b||null===(d=b.content)||void 0===d?void 0:d.value):null==b||null===(p=b.content)||void 0===p?void 0:p.value}var v=o.section_id,g=o.fields,w=Object.keys(g)[0];h({sectionId:l,fieldId:u,itemId:s,initData:f,currentData:f,assetsInfo:{sectionId:v,fieldId:w,viewType:"profile",contentType:"articles",contentId:y}})}}))),function(){e=!1}}),[y]);var g=null!=v&&v.initData?null!==(t=null===(r=v.initData)||void 0===r?void 0:r[f])&&void 0!==t?t:Object.values(v.initData)[0]:null;return a().createElement(a().Fragment,null,a().createElement(De,{articleId:y,useSWR:e.useSWR}),a().createElement("div",{className:(0,o.tw)(Ie||(Ie=Le(["bg-white w-screen min-h-screen relative flex justify-end"])))},a().createElement("div",{className:(0,o.tw)(Ae||(Ae=Le(["mx-auto pt-8 pb-20 left-0 top-0 static w-screen"])))},v?a().createElement(n.Suspense,{fallback:""},a().createElement(ze,{assetsInfo:null==v?void 0:v.assetsInfo,value:g,editable:!1})):null)),a().createElement("div",{className:(0,o.tw)(Ne||(Ne=Le(["mb-12 w-full px-6 py-8 border-t mx-auto lg:(px-0 py-12) ",""])),p)},a().createElement(ye,{parsedDS:d,makeLink:s,blogs:m,currentArticleId:null==v||null===(l=v.assetsInfo)||void 0===l?void 0:l.contentId,activeLang:f})))}function We(e){return We="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},We(e)}function Fe(){return Fe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Fe.apply(this,arguments)}function Ue(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $e(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ue(Object(r),!0).forEach((function(t){Be(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ue(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Be(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==We(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==We(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===We(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function He(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Je(e){var t,r,a=e.dataSource,o=void 0===a?{}:a,l=e.useDS,i=e.activeRoute,c=l(o),u=null==c?void 0:c.id,s=(t=n.useState([]),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,l,i=[],c=!0,u=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(u)throw a}}return i}}(t,r)||function(e,t){if(e){if("string"==typeof e)return He(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?He(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),f=s[0],m=s[1];return n.useEffect((function(){u&&(0,E.V2)(u).then((function(e){m(e.map((function(e){var t=e.head,r=e.contentId,n=JSON.parse(t);return $e($e($e({},e),n),{},{banner:null==n?void 0:n._banner,id:r})})))}))}),[u]),f.length?n.createElement(ue.Routes,null,n.createElement(ue.Route,{path:"".concat(i,"/:contentId"),element:n.createElement(Re,Fe({},e,{blogs:f}))}),n.createElement(ue.Route,{path:i,element:n.createElement(Q,Fe({},e,{blogs:f}))})):null}}}]);
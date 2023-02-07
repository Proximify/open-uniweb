"use strict";(self.webpackChunkbuilder=self.webpackChunkbuilder||[]).push([[501],{710:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ot});var r=n(966),a=n.n(r),l=n(260),o=n(204),i=n(220),c=n(372),u=(n(918),n(396),n(406)),s=n(256);window.twind||(i.setup({theme:{extend:{colors:s}},plugins:{aspect:u.D}}),window.twind=i);var f=i.tw,m=i.apply,d=n(772),p=n(607),g=(0,r.lazy)((function(){return uniweb.getComponent("profileComponents","ProfileImage").catch((function(){return{default:function(){return null}}}))}));const y=function(e){return a().createElement(r.Suspense,{fallback:"loading..."},a().createElement(g,e))};var v,b,h,w,E,O,j,x,S,N,k,C,P=uniweb.getServices(),I=(P.client,P.postClient,P.localize),L=(P.getProfiles,P.getProfile,P.getListProfileItems);function _(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}P.findLink,P.queryFromContent,P.parseLinksInArticle,P.getFirstElementInMap;var z,A,T,F,D=function(e){if(e){var t=new Date(e);return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(t)}return null},M={"project/profile":{section:"research_places",field:"address",titleField:"project_name",getCardMarkup:{side:function(e){var t=e.start_date,n=e.end_date;return t||n?a().createElement("p",{className:f(v||(v=_(["text-sm text-gray-500 mt-1"])))},D(t)," - ",D(n)):null},main:function(e){var t=e.start_date,n=e.end_date,r=e.description,l=e.activeLang;return a().createElement(a().Fragment,null,t||n?a().createElement("p",{className:f(b||(b=_(["text-sm text-gray-500 mt-1"])))},D(t)," -"," ",D(n)):null,r?a().createElement("div",{dangerouslySetInnerHTML:{__html:I(r,"",l)},className:f(h||(h=_(["text-sm mt-2"])))}):null)}}},"groups/profile":{section:"research_places",field:"address",titleField:"group_name",getCardMarkup:{side:function(e){var t=e.start_date,n=e.end_date;return t||n?a().createElement("p",{className:f(w||(w=_(["text-sm text-gray-500 mt-1"])))},D(t)," - ",D(n)):null},main:function(e){var t=e.start_date,n=e.end_date,r=e.description,l=e.activeLang;return a().createElement(a().Fragment,null,t||n?a().createElement("p",{className:f(E||(E=_(["text-sm text-gray-500 mt-1"])))},D(t)," -"," ",D(n)):null,r?a().createElement("div",{dangerouslySetInnerHTML:{__html:I(r,"",l)},className:f(O||(O=_(["text-sm mt-2"])))}):null)}}},"units/profile":{section:"research_places",field:"address",titleField:"name",getCardMarkup:{side:function(e){var t=e.start_date,n=e.end_date;return t||n?a().createElement("p",{className:f(j||(j=_(["text-sm text-gray-500 mt-1"])))},D(t)," - ",D(n)):null},main:function(e){var t=e.start_date,n=e.end_date,r=e.description,l=e.activeLang;return a().createElement(a().Fragment,null,t||n?a().createElement("p",{className:f(x||(x=_(["text-sm text-gray-500 mt-1"])))},D(t)," -"," ",D(n)):null,r?a().createElement("div",{dangerouslySetInnerHTML:{__html:I(r,"",l)},className:f(S||(S=_(["text-sm mt-2"])))}):null)}}},"equipment/profile":{section:"locations",field:"address",titleField:"equipment_name",getCardMarkup:{side:function(){return null},main:function(){return null}}},"members/profile":{section:"research_places",field:"address",titleField:"first_name",getCardMarkup:{side:function(e){var t=e.start_date,n=e.end_date;return t||n?a().createElement("p",{className:f(N||(N=_(["text-sm text-gray-500 mt-1"])))},D(t)," - ",D(n)):null},main:function(e){var t=e.start_date,n=e.end_date,r=e.description,l=e.activeLang;return a().createElement(a().Fragment,null,t||n?a().createElement("p",{className:f(k||(k=_(["text-sm text-gray-500 mt-1"])))},D(t)," -"," ",D(n)):null,r?a().createElement("div",{dangerouslySetInnerHTML:{__html:I(r,"",l)},className:f(C||(C=_(["text-sm mt-2"])))}):null)}}}},R=function(e,t,n){t=function(e){if("string"!=typeof e)return e;var t=[];return e.split(".").forEach((function(e){e.split(/\[([^}]+)\]/g).forEach((function(e){e.length>0&&t.push(e)}))})),t}(t);for(var r=e,a=0;a<t.length;a++){if(!r[t[a]])return n;r=r[t[a]]}return r};function U(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n="equipment"===e?"resources":e,r=(null==M?void 0:M[n])||{};return t?R(r,t):r}function H(e){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(e)}var q=["profileType","contentId","head","activeLang","onClick","padding","mode"];function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){W(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function W(e,t,n){return(t=J(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function G(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function J(e){var t=function(e,t){if("object"!==H(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==H(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===H(t)?t:String(t)}function $(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function X(e){var t=e.profileType,n=e.contentId,r=e.head,l=e.activeLang,o=e.onClick,i=e.padding,c=void 0===i?"p-3":i,u=e.mode,s=$(e,q),m=U(t,"getCardMarkup.".concat(u)),d=U(t),p=d.section,g=d.field,v=r[d.titleField],b=r._banner,h=void 0===b?"":b,w=s[p]||{},E=w[g],O=$(w,[g].map(J));return a().createElement("div",{className:f(z||(z=G(["w-full flex "," space-x-3 cursor-pointer hover:bg-gray-50"])),c),onMouseDown:o},a().createElement("div",{className:f(A||(A=G(["w-16 h-16 p-1 flex-shrink-0 overflow-hidden"])))},a().createElement(y,{contentType:"project",contentId:n,version:h,type:"banner"})),a().createElement("div",{style:{width:"calc(100% - 76px)"}},a().createElement("p",{className:f(T||(T=G(["text-base font-medium text-gray-900 truncate"]))),title:v},v),a().createElement("p",{className:f(F||(F=G(["text-gray-700 text-sm mt-2"])))},E.formatted_address),m(Q(Q({},O),{},{activeLang:l}))))}var K,V,Y,Z,ee,te,ne,re,ae,le,oe,ie,ce,ue,se,fe,me,de,pe,ge,ye,ve,be,he=n(138),we=n.n(he);function Ee(){return Ee=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ee.apply(this,arguments)}function Oe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,i=[],c=!0,u=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=l.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return je(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?je(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function je(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function xe(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var Se=function(e){var t=e.contentRenderer,n=e.profile,o=e.tab,i=(0,l.useLocation)().search.split("&").filter((function(e){return!e.startsWith("tab=")})).join("&"),c=n.contentId;return a().createElement(r.Suspense,{fallback:a().createElement("div",{className:f(K||(K=xe(["w-full h-full flex items-center justify-center"])))},a().createElement(we(),{css:"display:block;",color:"#333",size:"20px"}))},a().createElement("div",{className:f(V||(V=xe(["w-full h-full divide-y divide-gray-300"])))},a().createElement(t,{contentId:c,tab:o||"about",sectionProps:{width:"100%",rounded:!1,noBorder:!0,paddingTop:"4",paddingBottom:"4",paddingLeft:"4",paddingRight:"4",headerMarginBottom:"3"},tabToPrefix:"".concat(i,"&tab="),contentRenderSettings:{containerSize:"sm",getAddressToUrl:function(e){var t=e.lat,n=e.lng,r=e.contentId;return"?lat=".concat(t,"&lng=").concat(n,"&zoom=16&detail=").concat(r)}}})))},Ne=function(e){var t=e.profiles,n=e.activeLang,o=e.profileType,i=e.profileId,c=U(o),u=c.section,s=c.field,m=c.titleField,g=Oe((0,r.useState)(""),2),y=g[0],v=g[1],b=Oe((0,r.useState)(!0),2),h=b[0],w=b[1],E=Oe((0,r.useState)(!1),2),O=E[0],j=E[1],x=Oe((0,r.useState)(!1),2),S=x[0],N=x[1],k=(0,l.useNavigate)(),C=(0,l.useLocation)().search.split("&"),P=[].concat.apply([],Object.values(t));(0,r.useEffect)((function(){if(i){var e=P.find((function(e){return e.contentId===i}));e&&v(e.head[m])}}),[t,i]);var I=y?P.filter((function(e){return e.head[m].toLowerCase().includes(y.toLowerCase())})):[],L=function(e){var t,n,r=null==e||null===(t=e[u])||void 0===t?void 0:t[s],a=(null==r||null===(n=r.geometry)||void 0===n?void 0:n.location)||{},l=a.lat,o=a.lng;l&&o&&(w(!1),v(e.head[m]),k("?lat=".concat(l,"&lng=").concat(o,"&zoom=16&detail=").concat(e.contentId)))};return a().createElement("div",{className:f(Y||(Y=xe(["p-3 w-full"])))},a().createElement("div",{className:f(Z||(Z=xe(["relative flex justify-between pl-4 pr-1.5 py-2 w-full border border-gray-300 bg-white group "," !shadow-lg"])),h&&S&&I.length?"rounded-t-lg":"rounded-lg")},a().createElement("input",{placeholder:"Search profile name",className:f(ee||(ee=xe(["flex-1 focus:outline-none text-gray-900"]))),value:y,onChange:function(e){j(!1),v(e.target.value)},onFocus:function(){w(!0),N(!0)},onBlur:function(){N(!1)}}),y&&!i?a().createElement("button",{className:f(te||(te=xe(["absolute right-12 top-2.5 h-6 w-6 group-hover:visible invisible text-gray-400 hover:text-gray-700 focus:outline-none"]))),onClick:function(){v("")}},a().createElement(p.QAE,{className:f(ne||(ne=xe(["w-full h-full"])))})):null,a().createElement("button",{className:f(re||(re=xe(["w-7 h-7 p-1 text-gray-500 ml-2 mr-1"])))},a().createElement(d.G4C,{className:f(ae||(ae=xe(["h-full w-full"])))})),i?a().createElement("button",{className:f(le||(le=xe(["w-9 h-7 border-l ml-1 p-1 pl-2 text-gray-500 focus:outline-none"]))),onClick:function(){v("");var e=C.filter((function(e){return!e.startsWith("detail=")})).join("&");k(e)}},a().createElement(d.apv,{className:f(oe||(oe=xe(["h-full w-full"])))})):null),h?a().createElement(a().Fragment,null,S&&I.length?a().createElement("div",{className:f(ie||(ie=xe(["border border-gray-300 rounded-b-lg bg-white mt-px !shadow-md divide-y overflow-hidden overflow-y-auto overscroll-contain"]))),style:{maxHeight:"min(50vh, 400px)"}},I.map((function(e,t){return a().createElement(X,Ee({key:t},e,{activeLang:n,onClick:function(){return L(e)},profileType:o,mode:"side"}))}))):null,I.length?null:a().createElement("div",{className:f(ce||(ce=xe(["border border-gray-300 rounded-lg bg-white mt-1 !shadow-md overflow-hidden"])))},a().createElement("div",{className:f(ue||(ue=xe(["flex items-center justify-center space-x-2 py-2 px-2 group hover:bg-gray-50 cursor-pointer ",""])),O?"border-b":""),onClick:function(){j(!O)}},a().createElement("p",{className:f(se||(se=xe(["text-sm text-gray-500 group-hover:text-gray-700"])))},O?"Hide all profiles":"Show all profiles"),O?a().createElement(d.ALZ,{className:f(fe||(fe=xe(["w-5 h-5 text-gray-500 group-hover:text-gray-700"])))}):a().createElement(d.kWQ,{className:f(me||(me=xe(["w-5 h-5 text-gray-500 group-hover:text-gray-700"])))})),O?a().createElement("div",{className:f(de||(de=xe(["divide-y overflow-hidden overflow-y-auto overscroll-contain"]))),style:{maxHeight:"min(70vh, 600px)"}},P.map((function(e,t){return a().createElement(X,Ee({key:t},e,{activeLang:n,onClick:function(){return L(e)},profileType:o,mode:"side"}))}))):null)):null)};function ke(e){var t=e.profiles,n=e.profileType,l=e.profileId,o=e.activeLang,i=e.tab,c=Oe((0,r.useState)(!0),2),u=c[0],s=c[1],m=Oe((0,r.useState)(null),2),p=m[0],g=m[1],y=[].concat.apply([],Object.values(t)).find((function(e){return e.contentId===l}));return(0,r.useEffect)((function(){null!=y&&y.contentId&&s(!0)}),[null==y?void 0:y.contentId]),(0,r.useEffect)((function(){g((0,r.lazy)((function(){return uniweb.getProfileRenderer(n).catch((function(){return{default:function(){return null}}}))})))}),[n]),a().createElement(a().Fragment,null,a().createElement("div",{className:f(pe||(pe=xe(["absolute top-0 left-0 z-10 ",""])),u?"w-96":"hidden")},a().createElement(Ne,{profiles:t,activeLang:o,profileType:n,profileId:l})),y?a().createElement("div",{className:f(ge||(ge=xe(["absolute top-0 left-0  "," h-full bg-white overflow-hidden overflow-y-scroll overscroll-none"])),u?"w-96":"w-0"),style:{zIndex:9}},a().createElement(Se,{contentRenderer:p,profile:y,tab:i})):null,y?a().createElement("button",{className:f(ye||(ye=xe(["absolute ","  z-10 h-12 w-5 border border-l-0 rounded-r-xl bg-gray-50 focus:outline-none hover:bg-white"])),u?"left-96":"left-0 !shadow-md"),style:{top:"calc(50% - 10px)"},onClick:function(){s(!u)}},u?a().createElement(d.PSe,{className:f(ve||(ve=xe(["w-4 h-4 text-gray-500 hover:text-gray-700"])))}):a().createElement(d.yoF,{className:f(be||(be=xe(["w-4 h-4 text-gray-500 hover:text-gray-700"])))})):null)}function Ce(e){return Ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ce(e)}var Pe=["head"];function Ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ie(Object(n),!0).forEach((function(t){_e(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ie(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _e(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==Ce(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==Ce(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===Ce(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ze(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,i=[],c=!0,u=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=l.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Ae(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ae(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Te,Fe,De,Me,Re=function(e,t){var n=U(t),r=n.section,a=n.field;return L(e,"",_e({},t,{section:r})).then((function(e){console.log(e);var t={};return e.forEach((function(e){var n=function(e,t,n){var r=e.head,a=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,Pe),l=e[t],o=[];return l&&Object.keys(l).length&&Object.entries(l).forEach((function(e){var l,i,c=ze(e,2),u=c[0],s=c[1],f=(null===(l=s[n])||void 0===l||null===(i=l.geometry)||void 0===i?void 0:i.location)||{},m=f.lat,d=f.lng;m&&d&&o.push(["".concat(m,"_").concat(d),Le(Le({},a),{},_e({head:JSON.parse(r)},t,Le(Le({},s),{},{itemId:u})))])})),o.length?o:null}(e,r,a);n&&n.forEach((function(e){var n=ze(e,2),r=n[0],a=n[1];t[r]?t[r].push(a):t[r]=[a]}))})),t}))},Ue=n(798);function He(){return He=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},He.apply(this,arguments)}function qe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,i=[],c=!0,u=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=l.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Be(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Be(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Be(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Qe(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var We,Ge,Je,$e,Xe,Ke=(0,c.css)(Te||(Te=Qe(["\n    ",";\n\n    iframe ~ div {\n        border: 0px !important;\n    }\n\n    div[class^='gm-style-iw'] + button {\n        ","\n    }\n\n    .gm-fullscreen-control {\n        display: none;\n    }\n\n    .gm-iv-container {\n        margin-top: 75px !important;\n    }\n\n    .gm-iv-address {\n        margin-top: 75px !important;\n    }\n\n    .gm-iv-address-link {\n        margin-top: 66px !important;\n    }\n\n    .gm-iv-marker {\n        margin-top: 66px !important;\n    }\n"])),m("w-full h-full absolute top-0 left-0"),m("focus:outline-none")),Ve=(0,c.css)(Fe||(Fe=Qe(["\n    max-height: 260px;\n    ","\n\n    & > div:not(:first-child) {\n        margin-top: 8px;\n        padding-top: 15px;\n    }\n"])),m("divide-y")),Ye=function(e){var t=e.position,n=e.clusterer,r=e.profile,l=e.onClick,o=e.onDblClick,i=1===r.length?void 0:{text:r.length.toString()};return a().createElement(Ue.Jx,{position:t,clusterer:n,label:i,animation:google.maps.Animation.DROP,onClick:function(){return l(t.lat,t.lng)},onDblClick:function(){return o(t.lat,t.lng)}})},Ze=function(e){var t=e.profileType,n=e.profiles,r=e.targetGeo,o=e.onClose,i=e.activeLang,c=e.zoom,u=e.lat,s=e.lng,m=e.tab,d=(0,l.useNavigate)(),p=qe(r.split("_"),2),g=p[0],y=p[1];return n[r]?a().createElement(Ue.nx,{options:{maxWidth:400,minWidth:300,pixelOffset:new window.google.maps.Size(0,-43)},position:{lat:Number(g),lng:Number(y)},onCloseClick:o},a().createElement("div",{className:f(De||(De=Qe(["",""])),Ve)},n[r].map((function(e,n){return a().createElement(X,He({key:n},e,{activeLang:i,onClick:function(){return t=e,void d("?lat=".concat(u,"&lng=").concat(s,"&zoom=").concat(c,"&detail=").concat(t.contentId).concat(m?"&tab=".concat(m):""));var t},padding:"p-1",profileType:t,mode:"main"}))})))):null};function et(e){var t=e.profileType,n=e.profiles,o=e.lat,i=void 0===o?"":o,c=e.lng,u=void 0===c?"":c,s=e.zoom,m=e.activeLang,d=e.profileId,p=e.setIsLoading,g=e.tab,y=void 0===g?null:g,v=(0,l.useNavigate)(),b=qe((0,r.useState)(null),2),h=b[0],w=b[1],E=qe((0,r.useState)({lat:49.9393854,lng:-119.3969514}),2),O=E[0],j=E[1],x=qe((0,r.useState)(""),2),S=x[0],N=x[1],k=(0,Ue.Ji)({googleMapsApiKey:"AIzaSyAeR961Exdeo6aJPQvtHPQBUqPGDPVaAFM",language:"en"}),C=k.isLoaded;k.loadError,(0,r.useEffect)((function(){i&&u&&(O.lat!=i||O.lng!=u)&&j({lat:Number(i),lng:Number(u)})}),[O,i,u]);var P=(0,r.useCallback)((function(e){p&&p(!1),w(e)}),[]),I=(0,r.useCallback)((function(){w(null)}),[]),L=(0,r.useCallback)((function(){if(h){var e=h.center.lat(),t=h.center.lng(),n=d?"&detail=".concat(d):"",r=y?"&tab=".concat(y):"";v("?lat=".concat(e,"&lng=").concat(t,"&zoom=").concat(h.zoom).concat(n).concat(r))}}),[h,d,y]),_=(0,r.useCallback)((function(e,t){N("".concat(e,"_").concat(t))}),[O,h]),z=(0,r.useCallback)((function(e,t){N("".concat(e,"_").concat(t));var n=d?"&detail=".concat(d):"",r=y?"&tab=".concat(y):"";v("?lat=".concat(e,"&lng=").concat(t,"&zoom=").concat(h.zoom+2).concat(n).concat(r))}),[O,h,d,y]),A=(0,r.useCallback)((function(){N("")}),[]);return C?a().createElement(Ue.b6,{mapContainerClassName:f(Me||(Me=Qe(["",""])),Ke),onLoad:P,onUnmount:I,onDragEnd:L,center:O,options:{mapTypeControl:!1,fullScreenControl:!1},zoom:Number(s)>0?Number(s):4},a().createElement(Ue.XL,{averageCenter:!0},(function(e){return Object.entries(n).map((function(t,n){var l=qe(t,2),o=l[0],i=l[1],c=qe(o.split("_"),2),u=c[0],s=c[1],f={lat:Number(u),lng:Number(s)};return a().createElement(r.Fragment,{key:n},a().createElement(Ye,{position:f,clusterer:e,profile:i,onClick:_,onDblClick:z}))}))})),h?a().createElement(Ze,{profileType:t,profiles:n,targetGeo:S,onClose:A,activeLang:m,zoom:h.zoom,lat:h.center.lat(),lng:h.center.lng(),tab:y}):null):null}function tt(){return tt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},tt.apply(this,arguments)}function nt(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function rt(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,i=[],c=!0,u=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=l.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return at(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?at(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function at(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var lt=function(e){var t=e.contentType,n=e.viewType,i=e.dataSource,c=void 0===i?{}:i,u=e.useDS,s=e.activeLang,m="".concat(t,"/").concat(n),d=u(c),p=new URLSearchParams((0,l.useLocation)().search),g=rt((0,r.useState)({}),2),y=g[0],v=g[1],b=rt((0,r.useState)(!1),2),h=b[0],w=b[1],E=rt((0,r.useState)(!0),2),O=E[0],j=E[1],x=null==d?void 0:d.id,S=p.get("lat"),N=p.get("lng"),k=p.get("zoom"),C=p.get("detail"),P=p.get("tab"),I=window.frameElement,L=!1;return I&&I.hasAttribute("allowfullscreen")&&"false"!==I.getAttribute("allowfullscreen")&&(L=!0),(0,r.useEffect)((function(){var e=function(e){var t,n;null!==(t=window.parent)&&void 0!==t&&null!==(n=t.document)&&void 0!==n&&n.fullscreenElement?w(!0):w(!1)};return I&&I.addEventListener("fullscreenchange",e),function(){I&&I.removeEventListener("fullscreenchange",e)}}),[]),(0,r.useEffect)((function(){Re(x,m).then((function(e){v(e),console.log(e)}))}),[x,m]),a().createElement("div",{className:f(We||(We=nt(["w-screen h-screen relative"])))},O?a().createElement("div",{className:f(Ge||(Ge=nt(["w-full h-full bg-white flex items-center justify-center"]))),style:{zIndex:1}},a().createElement(we(),{css:"display:block;",color:"#333",size:"25px"})):null,a().createElement(ke,{profiles:y,profileType:m,profileId:C,tab:P}),a().createElement(et,{profileType:m,profiles:y,lat:S,lng:N,zoom:k,profileId:C,tab:P,activeLang:s,setIsLoading:j}),L?a().createElement("button",{className:f(Je||(Je=nt(["absolute right-2 bg-gray-200 rounded-md top-2 w-8 h-8 p-1"]))),onClick:function(){var e,t;null!==(e=window.parent)&&void 0!==e&&null!==(t=e.document)&&void 0!==t&&t.fullscreenElement?window.parent.document.exitFullscreen():I.requestFullscreen().catch((function(e){alert("Error attempting to enable fullscreen mode: ".concat(e.message," (").concat(e.name,")"))}))}},h?a().createElement(o.X3m,{className:f($e||($e=nt(["w-full h-full text-gray-600 hover:text-white"])))}):a().createElement(o.YBQ,{className:f(Xe||(Xe=nt(["w-full h-full text-gray-600 hover:text-white"])))})):null)};function ot(e){return a().createElement(l.Routes,null,a().createElement(l.Route,{index:!0,element:a().createElement(lt,tt({},e,{contentType:"equipment",viewType:"profile"}))}))}}}]);
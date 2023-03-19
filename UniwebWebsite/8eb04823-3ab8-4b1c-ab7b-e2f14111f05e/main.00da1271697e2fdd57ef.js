"use strict";(self.webpackChunkbuilder=self.webpackChunkbuilder||[]).push([[236],{236:(e,t,n)=>{n.d(t,{V:()=>Le});var r=n(966);function o(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,o),r}var l,i=((l=i||{})[l.None=0]="None",l[l.RenderStrategy=1]="RenderStrategy",l[l.Static=2]="Static",l),u=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(u||{});function a({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:l,visible:i=!0,name:u}){let a=c(t,e);if(i)return s(a,n,r,u);let d=null!=l?l:0;if(2&d){let{static:e=!1,...t}=a;if(e)return s(t,n,r,u)}if(1&d){let{unmount:e=!0,...t}=a;return o(e?0:1,{0:()=>null,1:()=>s({...t,hidden:!0,style:{display:"none"}},n,r,u)})}return s(a,n,r,u)}function s(e,t={},n,o){let{as:l=n,children:i,refName:u="ref",...a}=p(e,["unmount","static"]),s=void 0!==e.ref?{[u]:e.ref}:{},d="function"==typeof i?i(t):i;a.className&&"function"==typeof a.className&&(a.className=a.className(t));let m={};if(t){let e=!1,n=[];for(let[r,o]of Object.entries(t))"boolean"==typeof o&&(e=!0),!0===o&&n.push(r);e&&(m["data-headlessui-state"]=n.join(" "))}if(l===r.Fragment&&Object.keys(f(a)).length>0){if(!(0,r.isValidElement)(d)||Array.isArray(d)&&d.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${o} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(a).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));return(0,r.cloneElement)(d,Object.assign({},c(d.props,f(p(a,["ref"]))),m,s,function(...e){return{ref:e.every((e=>null==e))?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(d.ref,s.ref)))}return(0,r.createElement)(l,Object.assign({},p(a,["ref"]),l!==r.Fragment&&s,l!==r.Fragment&&m),d)}function c(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map((e=>[e,void 0]))));for(let e in n)Object.assign(t,{[e](t,...r){let o=n[e];for(let e of o){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;e(t,...r)}}});return t}function d(e){var t;return Object.assign((0,r.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function f(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function p(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}const m="undefined"==typeof window||"undefined"==typeof document;let v=m?r.useEffect:r.useLayoutEffect;function h(e){let t=(0,r.useRef)(e);return v((()=>{t.current=e}),[e]),t}let g=function(e){let t=h(e);return r.useCallback(((...e)=>t.current(...e)),[t])},w=Symbol();function E(e,t=!0){return Object.assign(e,{[w]:t})}function b(...e){let t=(0,r.useRef)(e);(0,r.useEffect)((()=>{t.current=e}),[e]);let n=g((e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)}));return e.every((e=>null==e||(null==e?void 0:e[w])))?void 0:n}var y,P=((y=P||{}).Space=" ",y.Enter="Enter",y.Escape="Escape",y.Backspace="Backspace",y.Delete="Delete",y.ArrowLeft="ArrowLeft",y.ArrowUp="ArrowUp",y.ArrowRight="ArrowRight",y.ArrowDown="ArrowDown",y.Home="Home",y.End="End",y.PageUp="PageUp",y.PageDown="PageDown",y.Tab="Tab",y);let F={serverHandoffComplete:!1};function T(){let[e,t]=(0,r.useState)(F.serverHandoffComplete);return(0,r.useEffect)((()=>{!0!==e&&t(!0)}),[e]),(0,r.useEffect)((()=>{!1===F.serverHandoffComplete&&(F.serverHandoffComplete=!0)}),[]),e}var A;let D=0;function S(){return++D}let C=null!=(A=r.useId)?A:function(){let e=T(),[t,n]=r.useState(e?S:null);return v((()=>{null===t&&n(S())}),[t]),null!=t?""+t:void 0};var O=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(O||{});let R=d((function(e,t){let{features:n=1,...r}=e;return a({ourProps:{ref:t,"aria-hidden":2==(2&n)||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...4==(4&n)&&2!=(2&n)&&{display:"none"}}},theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})}));function k(e){return m?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let x=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((e=>`${e}:not([tabindex='-1'])`)).join(",");var L,N=((L=N||{})[L.First=1]="First",L[L.Previous=2]="Previous",L[L.Next=4]="Next",L[L.Last=8]="Last",L[L.WrapAround=16]="WrapAround",L[L.NoScroll=32]="NoScroll",L),M=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(M||{}),j=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(j||{});var H=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(H||{});function I(e){null==e||e.focus({preventScroll:!0})}let $=["textarea","input"].join(",");function B(e,t,n=!0,r=null){let o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,l=Array.isArray(e)?n?function(e,t=(e=>e)){return e.slice().sort(((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let l=r.compareDocumentPosition(o);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0}))}(e):e:function(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(x))}(e);r=null!=r?r:o.activeElement;let i,u=(()=>{if(5&t)return 1;if(10&t)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),a=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,l.indexOf(r))-1;if(4&t)return Math.max(0,l.indexOf(r))+1;if(8&t)return l.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=32&t?{preventScroll:!0}:{},c=0,d=l.length;do{if(c>=d||c+d<=0)return 0;let e=a+c;if(16&t)e=(e+d)%d;else{if(e<0)return 3;if(e>=d)return 1}i=l[e],null==i||i.focus(s),c+=u}while(i!==o.activeElement);return 6&t&&function(e){var t,n;return null!=(n=null==(t=null==e?void 0:e.matches)?void 0:t.call(e,$))&&n}(i)&&i.select(),i.hasAttribute("tabindex")||i.setAttribute("tabindex","0"),2}var q=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(q||{});function U(){let e=(0,r.useRef)(0);return function(e,t,n){let o=h(t);(0,r.useEffect)((()=>{function t(e){o.current(e)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)}),[e,n])}("keydown",(t=>{"Tab"===t.key&&(e.current=t.shiftKey?1:0)}),!0),e}function W(){let e=(0,r.useRef)(!1);return v((()=>(e.current=!0,()=>{e.current=!1})),[]),e}function Y(...e){return(0,r.useMemo)((()=>k(...e)),[...e])}function V(e,t,n,o){let l=h(n);(0,r.useEffect)((()=>{function n(e){l.current(e)}return(e=null!=e?e:window).addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}),[e,t,o])}function _(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch((e=>setTimeout((()=>{throw e}))))}function G(e,t){let n=(0,r.useRef)([]),o=g(e);(0,r.useEffect)((()=>{let e=[...n.current];for(let[r,l]of t.entries())if(n.current[r]!==l){let r=o(t,e);return n.current=t,r}}),[o,...t])}var z=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(z||{});let K=Object.assign(d((function(e,t){let n=(0,r.useRef)(null),l=b(n,t),{initialFocus:i,containers:u,features:s=30,...c}=e;T()||(s=1);let d=Y(n);!function({ownerDocument:e},t){let n=(0,r.useRef)(null);V(null==e?void 0:e.defaultView,"focusout",(e=>{!t||n.current||(n.current=e.target)}),!0),G((()=>{t||((null==e?void 0:e.activeElement)===(null==e?void 0:e.body)&&I(n.current),n.current=null)}),[t]);let o=(0,r.useRef)(!1);(0,r.useEffect)((()=>(o.current=!1,()=>{o.current=!0,_((()=>{!o.current||(I(n.current),n.current=null)}))})),[])}({ownerDocument:d},Boolean(16&s));let f=function({ownerDocument:e,container:t,initialFocus:n},o){let l=(0,r.useRef)(null),i=W();return G((()=>{if(!o)return;let r=t.current;!r||_((()=>{if(!i.current)return;let t=null==e?void 0:e.activeElement;if(null!=n&&n.current){if((null==n?void 0:n.current)===t)return void(l.current=t)}else if(r.contains(t))return void(l.current=t);null!=n&&n.current?I(n.current):B(r,N.First)===M.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),l.current=null==e?void 0:e.activeElement}))}),[o]),l}({ownerDocument:d,container:n,initialFocus:i},Boolean(2&s));!function({ownerDocument:e,container:t,containers:n,previousActiveElement:r},o){let l=W();V(null==e?void 0:e.defaultView,"focus",(e=>{if(!o||!l.current)return;let i=new Set(null==n?void 0:n.current);i.add(t);let u=r.current;if(!u)return;let a=e.target;a&&a instanceof HTMLElement?function(e,t){var n;for(let r of e)if(null!=(n=r.current)&&n.contains(t))return!0;return!1}(i,a)?(r.current=a,I(a)):(e.preventDefault(),e.stopPropagation(),I(u)):I(r.current)}),!0)}({ownerDocument:d,container:n,containers:u,previousActiveElement:f},Boolean(8&s));let p=U(),m=g((()=>{let e=n.current;!e||o(p.current,{[q.Forwards]:()=>B(e,N.First),[q.Backwards]:()=>B(e,N.Last)})})),v={ref:l};return r.createElement(r.Fragment,null,Boolean(4&s)&&r.createElement(R,{as:"button",type:"button",onFocus:m,features:O.Focusable}),a({ourProps:v,theirProps:c,defaultTag:"div",name:"FocusTrap"}),Boolean(4&s)&&r.createElement(R,{as:"button",type:"button",onFocus:m,features:O.Focusable}))})),{features:z}),Q=new Set,J=new Map;function X(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function Z(e){let t=J.get(e);!t||(null===t["aria-hidden"]?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}var ee=n(290);let te=(0,r.createContext)(!1);function ne(){return(0,r.useContext)(te)}function re(e){return r.createElement(te.Provider,{value:e.force},e.children)}let oe=r.Fragment,le=d((function(e,t){let n=e,o=(0,r.useRef)(null),l=b(E((e=>{o.current=e})),t),i=Y(o),u=function(e){let t=ne(),n=(0,r.useContext)(ue),o=Y(e),[l,i]=(0,r.useState)((()=>{if(!t&&null!==n||m)return null;let e=null==o?void 0:o.getElementById("headlessui-portal-root");if(e)return e;if(null===o)return null;let r=o.createElement("div");return r.setAttribute("id","headlessui-portal-root"),o.body.appendChild(r)}));return(0,r.useEffect)((()=>{null!==l&&(null!=o&&o.body.contains(l)||null==o||o.body.appendChild(l))}),[l,o]),(0,r.useEffect)((()=>{t||null!==n&&i(n.current)}),[n,i,t]),l}(o),[s]=(0,r.useState)((()=>{var e;return m?null:null!=(e=null==i?void 0:i.createElement("div"))?e:null})),c=T(),d=(0,r.useRef)(!1);return v((()=>{if(d.current=!1,u&&s)return u.contains(s)||(s.setAttribute("data-headlessui-portal",""),u.appendChild(s)),()=>{d.current=!0,_((()=>{var e;!d.current||!u||!s||(u.removeChild(s),u.childNodes.length<=0&&(null==(e=u.parentElement)||e.removeChild(u)))}))}}),[u,s]),c&&u&&s?(0,ee.createPortal)(a({ourProps:{ref:l},theirProps:n,defaultTag:oe,name:"Portal"}),s):null})),ie=r.Fragment,ue=(0,r.createContext)(null),ae=d((function(e,t){let{target:n,...o}=e,l={ref:b(t)};return r.createElement(ue.Provider,{value:n},a({ourProps:l,theirProps:o,defaultTag:ie,name:"Popover.Group"}))})),se=Object.assign(le,{Group:ae}),ce=(0,r.createContext)(null);function de(){let e=(0,r.useContext)(ce);if(null===e){let e=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,de),e}return e}let fe=d((function(e,t){let n=C(),{id:r=`headlessui-description-${n}`,...o}=e,l=de(),i=b(t);return v((()=>l.register(r)),[r,l.register]),a({ourProps:{ref:i,...l.props,id:r},theirProps:o,slot:l.slot||{},defaultTag:"p",name:l.name||"Description"})})),pe=(0,r.createContext)(null);pe.displayName="OpenClosedContext";var me=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(me||{});function ve(){return(0,r.useContext)(pe)}let he=(0,r.createContext)((()=>{}));he.displayName="StackContext";var ge=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(ge||{});function we({children:e,onUpdate:t,type:n,element:o,enabled:l}){let i=(0,r.useContext)(he),u=g(((...e)=>{null==t||t(...e),i(...e)}));return v((()=>{let e=void 0===l||!0===l;return e&&u(0,n,o),()=>{e&&u(1,n,o)}}),[u,n,o,l]),r.createElement(he.Provider,{value:u},e)}function Ee(e,t,n){let o=h(t);(0,r.useEffect)((()=>{function t(e){o.current(e)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)}),[e,n])}var be,ye=((be=ye||{})[be.Open=0]="Open",be[be.Closed=1]="Closed",be),Pe=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(Pe||{});let Fe={0:(e,t)=>e.titleId===t.id?e:{...e,titleId:t.id}},Te=(0,r.createContext)(null);function Ae(e){let t=(0,r.useContext)(Te);if(null===t){let t=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,Ae),t}return t}function De(e,t){return o(t.type,Fe,e,t)}Te.displayName="DialogContext";let Se=i.RenderStrategy|i.Static,Ce=d((function(e,t){let n=C(),{id:l=`headlessui-dialog-${n}`,open:i,onClose:u,initialFocus:s,__demoMode:c=!1,...d}=e,[f,p]=(0,r.useState)(0),m=ve();void 0===i&&null!==m&&(i=o(m,{[me.Open]:!0,[me.Closed]:!1}));let h=(0,r.useRef)(new Set),w=(0,r.useRef)(null),E=b(w,t),y=(0,r.useRef)(null),F=Y(w),A=e.hasOwnProperty("open")||null!==m,D=e.hasOwnProperty("onClose");if(!A&&!D)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!A)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!D)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!=typeof i)throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${i}`);if("function"!=typeof u)throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${u}`);let S=i?0:1,[L,N]=(0,r.useReducer)(De,{titleId:null,descriptionId:null,panelRef:(0,r.createRef)()}),M=g((()=>u(!1))),j=g((e=>N({type:0,id:e}))),I=!!T()&&!c&&0===S,$=f>1,B=null!==(0,r.useContext)(Te),q=$?"parent":"leaf";(function(e,t=!0){v((()=>{if(!t||!e.current)return;let n=e.current,r=k(n);if(r){Q.add(n);for(let e of J.keys())e.contains(n)&&(Z(e),J.delete(e));return r.querySelectorAll("body > *").forEach((e=>{if(e instanceof HTMLElement){for(let t of Q)if(e.contains(t))return;1===Q.size&&(J.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),X(e))}})),()=>{if(Q.delete(n),Q.size>0)r.querySelectorAll("body > *").forEach((e=>{if(e instanceof HTMLElement&&!J.has(e)){for(let t of Q)if(e.contains(t))return;J.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),X(e)}}));else for(let e of J.keys())Z(e),J.delete(e)}}}),[t])})(w,!!$&&I),function(e,t,n=!0){let l=(0,r.useRef)(!1);function i(n,r){if(!l.current||n.defaultPrevented)return;let i=function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e),u=r(n);if(null!==u&&u.getRootNode().contains(u)){for(let e of i){if(null===e)continue;let t=e instanceof HTMLElement?e:e.current;if(null!=t&&t.contains(u)||n.composed&&n.composedPath().includes(t))return}return!function(e,t=0){var n;return e!==(null==(n=k(e))?void 0:n.body)&&o(t,{0:()=>e.matches(x),1(){let t=e;for(;null!==t;){if(t.matches(x))return!0;t=t.parentElement}return!1}})}(u,H.Loose)&&-1!==u.tabIndex&&n.preventDefault(),t(n,u)}}(0,r.useEffect)((()=>{requestAnimationFrame((()=>{l.current=n}))}),[n]);let u=(0,r.useRef)(null);Ee("mousedown",(e=>{var t,n;l.current&&(u.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)}),!0),Ee("click",(e=>{!u.current||(i(e,(()=>u.current)),u.current=null)}),!0),Ee("blur",(e=>i(e,(()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null))),!0)}((()=>{var e,t;return[...Array.from(null!=(e=null==F?void 0:F.querySelectorAll("body > *, [data-headlessui-portal]"))?e:[]).filter((e=>!(!(e instanceof HTMLElement)||e.contains(y.current)||L.panelRef.current&&e.contains(L.panelRef.current)))),null!=(t=L.panelRef.current)?t:w.current]}),M,I&&!$),V(null==F?void 0:F.defaultView,"keydown",(e=>{e.defaultPrevented||e.key===P.Escape&&0===S&&($||(e.preventDefault(),e.stopPropagation(),M()))})),function(e,t){(0,r.useEffect)((()=>{var n;if(!t||!e)return;let r=function(){let e=[],t=[],n={enqueue(e){t.push(e)},addEventListener:(e,t,r,o)=>(e.addEventListener(t,r,o),n.add((()=>e.removeEventListener(t,r,o)))),requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return n.add((()=>cancelAnimationFrame(t)))},nextFrame:(...e)=>n.requestAnimationFrame((()=>n.requestAnimationFrame(...e))),setTimeout(...e){let t=setTimeout(...e);return n.add((()=>clearTimeout(t)))},microTask(...e){let t={current:!0};return _((()=>{t.current&&e[0]()})),n.add((()=>{t.current=!1}))},add:t=>(e.push(t),()=>{let n=e.indexOf(t);if(n>=0){let[t]=e.splice(n,1);t()}}),dispose(){for(let t of e.splice(0))t()},async workQueue(){for(let e of t.splice(0))await e()}};return n}();function o(e,t,n){let o=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),r.add((()=>{Object.assign(e.style,{[t]:o})}))}let l=e.documentElement,i=(null!=(n=e.defaultView)?n:window).innerWidth-l.clientWidth;if(o(l,"overflow","hidden"),i>0&&o(l,"paddingRight",i-(l.clientWidth-l.offsetWidth)+"px"),/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0){let e=window.pageYOffset;o(l,"position","fixed"),o(l,"marginTop",`-${e}px`),o(l,"width","100%"),r.add((()=>window.scrollTo(0,e)))}return r.dispose}),[e,t])}(F,0===S&&!B),(0,r.useEffect)((()=>{if(0!==S||!w.current)return;let e=new IntersectionObserver((e=>{for(let t of e)0===t.boundingClientRect.x&&0===t.boundingClientRect.y&&0===t.boundingClientRect.width&&0===t.boundingClientRect.height&&M()}));return e.observe(w.current),()=>e.disconnect()}),[S,w,M]);let[U,W]=function(){let[e,t]=(0,r.useState)([]);return[e.length>0?e.join(" "):void 0,(0,r.useMemo)((()=>function(e){let n=g((e=>(t((t=>[...t,e])),()=>t((t=>{let n=t.slice(),r=n.indexOf(e);return-1!==r&&n.splice(r,1),n}))))),o=(0,r.useMemo)((()=>({register:n,slot:e.slot,name:e.name,props:e.props})),[n,e.slot,e.name,e.props]);return r.createElement(ce.Provider,{value:o},e.children)}),[t])]}(),G=(0,r.useMemo)((()=>[{dialogState:S,close:M,setTitleId:j},L]),[S,L,M,j]),z=(0,r.useMemo)((()=>({open:0===S})),[S]),ee={ref:E,id:l,role:"dialog","aria-modal":0===S||void 0,"aria-labelledby":L.titleId,"aria-describedby":U};return r.createElement(we,{type:"Dialog",enabled:0===S,element:w,onUpdate:g(((e,t,n)=>{"Dialog"===t&&o(e,{[ge.Add](){h.current.add(n),p((e=>e+1))},[ge.Remove](){h.current.add(n),p((e=>e-1))}})}))},r.createElement(re,{force:!0},r.createElement(se,null,r.createElement(Te.Provider,{value:G},r.createElement(se.Group,{target:w},r.createElement(re,{force:!1},r.createElement(W,{slot:z,name:"Dialog.Description"},r.createElement(K,{initialFocus:s,containers:h,features:I?o(q,{parent:K.features.RestoreFocus,leaf:K.features.All&~K.features.FocusLock}):K.features.None},a({ourProps:ee,theirProps:d,slot:z,defaultTag:"div",features:Se,visible:0===S,name:"Dialog"})))))))),r.createElement(R,{features:O.Hidden,ref:y}))})),Oe=d((function(e,t){let n=C(),{id:o=`headlessui-dialog-overlay-${n}`,...l}=e,[{dialogState:i,close:u}]=Ae("Dialog.Overlay");return a({ourProps:{ref:b(t),id:o,"aria-hidden":!0,onClick:g((e=>{if(e.target===e.currentTarget){if(function(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=""===(null==t?void 0:t.getAttribute("disabled"));return(!r||!function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),u()}}))},theirProps:l,slot:(0,r.useMemo)((()=>({open:0===i})),[i]),defaultTag:"div",name:"Dialog.Overlay"})})),Re=d((function(e,t){let n=C(),{id:o=`headlessui-dialog-backdrop-${n}`,...l}=e,[{dialogState:i},u]=Ae("Dialog.Backdrop"),s=b(t);(0,r.useEffect)((()=>{if(null===u.panelRef.current)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")}),[u.panelRef]);let c=(0,r.useMemo)((()=>({open:0===i})),[i]);return r.createElement(re,{force:!0},r.createElement(se,null,a({ourProps:{ref:s,id:o,"aria-hidden":!0},theirProps:l,slot:c,defaultTag:"div",name:"Dialog.Backdrop"})))})),ke=d((function(e,t){let n=C(),{id:o=`headlessui-dialog-panel-${n}`,...l}=e,[{dialogState:i},u]=Ae("Dialog.Panel"),s=b(t,u.panelRef),c=(0,r.useMemo)((()=>({open:0===i})),[i]);return a({ourProps:{ref:s,id:o,onClick:g((e=>{e.stopPropagation()}))},theirProps:l,slot:c,defaultTag:"div",name:"Dialog.Panel"})})),xe=d((function(e,t){let n=C(),{id:o=`headlessui-dialog-title-${n}`,...l}=e,[{dialogState:i,setTitleId:u}]=Ae("Dialog.Title"),s=b(t);(0,r.useEffect)((()=>(u(o),()=>u(null))),[o,u]);let c=(0,r.useMemo)((()=>({open:0===i})),[i]);return a({ourProps:{ref:s,id:o},theirProps:l,slot:c,defaultTag:"h2",name:"Dialog.Title"})})),Le=Object.assign(Ce,{Backdrop:Re,Panel:ke,Overlay:Oe,Title:xe,Description:fe})}}]);
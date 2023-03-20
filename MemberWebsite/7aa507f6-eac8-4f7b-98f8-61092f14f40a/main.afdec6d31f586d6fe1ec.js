"use strict";(self.webpackChunkbuilder=self.webpackChunkbuilder||[]).push([[964],{795:(e,t,n)=>{function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:()=>o});const o=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},938:(e,t,n)=>{n.d(t,{J:()=>re});var r,o=n(966),l=n(631),u=n(431),a=n(245),i=n(94),s=n(908),c=n(511);let d=null!=(r=o.useId)?r:function(){let e=(0,s.H)(),[t,n]=o.useState(e?()=>c.O.nextId():null);return(0,i.e)((()=>{null===t&&n(c.O.nextId())}),[t]),null!=t?""+t:void 0};var f,p=((f=p||{}).Space=" ",f.Enter="Enter",f.Escape="Escape",f.Backspace="Backspace",f.Delete="Delete",f.ArrowLeft="ArrowLeft",f.ArrowUp="ArrowUp",f.ArrowRight="ArrowRight",f.ArrowDown="ArrowDown",f.Home="Home",f.End="End",f.PageUp="PageUp",f.PageDown="PageDown",f.Tab="Tab",f);function v(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=""===(null==t?void 0:t.getAttribute("disabled"));return(!r||!function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}function m(e){return c.O.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let h=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((e=>`${e}:not([tabindex='-1'])`)).join(",");var b=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(b||{}),E=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(E||{}),g=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(g||{});function y(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(h)).sort(((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER))))}var P=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(P||{});function S(e,t=0){var n;return e!==(null==(n=m(e))?void 0:n.body)&&(0,l.E)(t,{0:()=>e.matches(h),1(){let t=e;for(;null!==t;){if(t.matches(h))return!0;t=t.parentElement}return!1}})}let w=["textarea","input"].join(",");function T(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){let l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,u=Array.isArray(e)?n?function(e,t=(e=>e)){return e.slice().sort(((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let l=r.compareDocumentPosition(o);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0}))}(e):e:y(e);o.length>0&&u.length>1&&(u=u.filter((e=>!o.includes(e)))),r=null!=r?r:l.activeElement;let a,i=(()=>{if(5&t)return 1;if(10&t)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,u.indexOf(r))-1;if(4&t)return Math.max(0,u.indexOf(r))+1;if(8&t)return u.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=32&t?{preventScroll:!0}:{},d=0,f=u.length;do{if(d>=f||d+f<=0)return 0;let e=s+d;if(16&t)e=(e+f)%f;else{if(e<0)return 3;if(e>=f)return 1}a=u[e],null==a||a.focus(c),d+=i}while(a!==l.activeElement);return 6&t&&function(e){var t,n;return null!=(n=null==(t=null==e?void 0:e.matches)?void 0:t.call(e,w))&&n}(a)&&a.select(),a.hasAttribute("tabindex")||a.setAttribute("tabindex","0"),2}var F=n(613);function O(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";return"string"==typeof n&&"button"===n.toLowerCase()?"button":void 0}var C=n(227);function x(e,t,n){let r=(0,C.E)(t);(0,o.useEffect)((()=>{function t(e){r.current(e)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)}),[e,n])}function N(e,t,n=!0){let r=(0,o.useRef)(!1);function l(n,o){if(!r.current||n.defaultPrevented)return;let l=function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e),u=o(n);if(null!==u&&u.getRootNode().contains(u)){for(let e of l){if(null===e)continue;let t=e instanceof HTMLElement?e:e.current;if(null!=t&&t.contains(u)||n.composed&&n.composedPath().includes(t))return}return!S(u,P.Loose)&&-1!==u.tabIndex&&n.preventDefault(),t(n,u)}}(0,o.useEffect)((()=>{requestAnimationFrame((()=>{r.current=n}))}),[n]);let u=(0,o.useRef)(null);x("mousedown",(e=>{var t,n;r.current&&(u.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)}),!0),x("click",(e=>{u.current&&(l(e,(()=>u.current)),u.current=null)}),!0),x("blur",(e=>l(e,(()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null))),!0)}function I(...e){return(0,o.useMemo)((()=>m(...e)),[...e])}var A,M=((A=M||{})[A.None=1]="None",A[A.Focusable=2]="Focusable",A[A.Hidden=4]="Hidden",A);let L=(0,u.yV)((function(e,t){let{features:n=1,...r}=e,o={ref:t,"aria-hidden":2==(2&n)||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...4==(4&n)&&2!=(2&n)&&{display:"none"}}};return(0,u.sY)({ourProps:o,theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})}));var k=n(360),R=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(R||{});function D(){let e=(0,o.useRef)(0);return function(e,t,n){let r=(0,C.E)(t);(0,o.useEffect)((()=>{function t(e){r.current(e)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)}),[e,n])}("keydown",(t=>{"Tab"===t.key&&(e.current=t.shiftKey?1:0)}),!0),e}var H,j,B=((j=B||{})[j.Open=0]="Open",j[j.Closed=1]="Closed",j),z=((H=z||{})[H.TogglePopover=0]="TogglePopover",H[H.ClosePopover=1]="ClosePopover",H[H.SetButton=2]="SetButton",H[H.SetButtonId=3]="SetButtonId",H[H.SetPanel=4]="SetPanel",H[H.SetPanelId=5]="SetPanelId",H);let Z={0:e=>({...e,popoverState:(0,l.E)(e.popoverState,{0:1,1:0})}),1:e=>1===e.popoverState?e:{...e,popoverState:1},2:(e,t)=>e.button===t.button?e:{...e,button:t.button},3:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},4:(e,t)=>e.panel===t.panel?e:{...e,panel:t.panel},5:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},$=(0,o.createContext)(null);function U(e){let t=(0,o.useContext)($);if(null===t){let t=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,U),t}return t}$.displayName="PopoverContext";let V=(0,o.createContext)(null);function G(e){let t=(0,o.useContext)(V);if(null===t){let t=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,G),t}return t}V.displayName="PopoverAPIContext";let Y=(0,o.createContext)(null);function q(){return(0,o.useContext)(Y)}Y.displayName="PopoverGroupContext";let _=(0,o.createContext)(null);function W(e,t){return(0,l.E)(t.type,Z,e,t)}_.displayName="PopoverPanelContext";let J=u.AN.RenderStrategy|u.AN.Static,K=u.AN.RenderStrategy|u.AN.Static,X=(0,u.yV)((function(e,t){var n;let r=(0,o.useRef)(null),i=(0,a.T)(t,(0,a.h)((e=>{r.current=e}))),s=(0,o.useRef)([]),c=(0,o.useReducer)(W,{popoverState:1,buttons:s,button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:(0,o.createRef)(),afterPanelSentinel:(0,o.createRef)()}),[{popoverState:d,button:f,buttonId:p,panel:v,panelId:m,beforePanelSentinel:h,afterPanelSentinel:b},E]=c,g=I(null!=(n=r.current)?n:f),w=(0,o.useMemo)((()=>{if(!f||!v)return!1;for(let e of document.querySelectorAll("body > *"))if(Number(null==e?void 0:e.contains(f))^Number(null==e?void 0:e.contains(v)))return!0;let e=y(),t=e.indexOf(f),n=(t+e.length-1)%e.length,r=(t+1)%e.length,o=e[n],l=e[r];return!v.contains(o)&&!v.contains(l)}),[f,v]),T=(0,C.E)(p),O=(0,C.E)(m),x=(0,o.useMemo)((()=>({buttonId:T,panelId:O,close:()=>E({type:1})})),[T,O,E]),A=q(),M=null==A?void 0:A.registerPopover,L=(0,k.z)((()=>{var e;return null!=(e=null==A?void 0:A.isFocusWithinPopoverGroup())?e:(null==g?void 0:g.activeElement)&&((null==f?void 0:f.contains(g.activeElement))||(null==v?void 0:v.contains(g.activeElement)))}));(0,o.useEffect)((()=>null==M?void 0:M(x)),[M,x]),function(e,t,n,r){let l=(0,C.E)(n);(0,o.useEffect)((()=>{function n(e){l.current(e)}return(e=null!=e?e:window).addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}),[e,t,r])}(null==g?void 0:g.defaultView,"focus",(e=>{var t,n,r,o;0===d&&(L()||f&&v&&e.target!==window&&(null!=(n=null==(t=h.current)?void 0:t.contains)&&n.call(t,e.target)||null!=(o=null==(r=b.current)?void 0:r.contains)&&o.call(r,e.target)||E({type:1})))}),!0),N([f,v],((e,t)=>{E({type:1}),S(t,P.Loose)||(e.preventDefault(),null==f||f.focus())}),0===d);let R=(0,k.z)((e=>{E({type:1});let t=e?e instanceof HTMLElement?e:"current"in e&&e.current instanceof HTMLElement?e.current:f:f;null==t||t.focus()})),D=(0,o.useMemo)((()=>({close:R,isPortalled:w})),[R,w]),H=(0,o.useMemo)((()=>({open:0===d,close:R})),[d,R]),j=e,B={ref:i};return o.createElement(_.Provider,{value:null},o.createElement($.Provider,{value:c},o.createElement(V.Provider,{value:D},o.createElement(F.up,{value:(0,l.E)(d,{0:F.ZM.Open,1:F.ZM.Closed})},(0,u.sY)({ourProps:B,theirProps:j,slot:H,defaultTag:"div",name:"Popover"})))))})),Q=(0,u.yV)((function(e,t){let n=d(),{id:r=`headlessui-popover-button-${n}`,...s}=e,[c,f]=U("Popover.Button"),{isPortalled:m}=G("Popover.Button"),h=(0,o.useRef)(null),g=`headlessui-focus-sentinel-${d()}`,P=q(),S=null==P?void 0:P.closeOthers,w=null!==(0,o.useContext)(_);(0,o.useEffect)((()=>{if(!w)return f({type:3,buttonId:r}),()=>{f({type:3,buttonId:null})}}),[w,r,f]);let[F]=(0,o.useState)((()=>Symbol())),C=(0,a.T)(h,t,w?null:e=>{if(e)c.buttons.current.push(F);else{let e=c.buttons.current.indexOf(F);-1!==e&&c.buttons.current.splice(e,1)}c.buttons.current.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),e&&f({type:2,button:e})}),x=(0,a.T)(h,t),N=I(h),A=(0,k.z)((e=>{var t,n,r;if(w){if(1===c.popoverState)return;switch(e.key){case p.Space:case p.Enter:e.preventDefault(),null==(n=(t=e.target).click)||n.call(t),f({type:1}),null==(r=c.button)||r.focus()}}else switch(e.key){case p.Space:case p.Enter:e.preventDefault(),e.stopPropagation(),1===c.popoverState&&(null==S||S(c.buttonId)),f({type:0});break;case p.Escape:if(0!==c.popoverState)return null==S?void 0:S(c.buttonId);if(!h.current||null!=N&&N.activeElement&&!h.current.contains(N.activeElement))return;e.preventDefault(),e.stopPropagation(),f({type:1})}})),H=(0,k.z)((e=>{w||e.key===p.Space&&e.preventDefault()})),j=(0,k.z)((t=>{var n,r;v(t.currentTarget)||e.disabled||(w?(f({type:1}),null==(n=c.button)||n.focus()):(t.preventDefault(),t.stopPropagation(),1===c.popoverState&&(null==S||S(c.buttonId)),f({type:0}),null==(r=c.button)||r.focus()))})),B=(0,k.z)((e=>{e.preventDefault(),e.stopPropagation()})),z=0===c.popoverState,Z=(0,o.useMemo)((()=>({open:z})),[z]),$=function(e,t){let[n,r]=(0,o.useState)((()=>O(e)));return(0,i.e)((()=>{r(O(e))}),[e.type,e.as]),(0,i.e)((()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")}),[n,t]),n}(e,h),V=w?{ref:x,type:$,onKeyDown:A,onClick:j}:{ref:C,id:c.buttonId,type:$,"aria-expanded":e.disabled?void 0:0===c.popoverState,"aria-controls":c.panel?c.panelId:void 0,onKeyDown:A,onKeyUp:H,onClick:j,onMouseDown:B},Y=D(),W=(0,k.z)((()=>{let e=c.panel;e&&(0,l.E)(Y.current,{[R.Forwards]:()=>T(e,b.First),[R.Backwards]:()=>T(e,b.Last)})===E.Error&&T(y().filter((e=>"true"!==e.dataset.headlessuiFocusGuard)),(0,l.E)(Y.current,{[R.Forwards]:b.Next,[R.Backwards]:b.Previous}),{relativeTo:c.button})}));return o.createElement(o.Fragment,null,(0,u.sY)({ourProps:V,theirProps:s,slot:Z,defaultTag:"button",name:"Popover.Button"}),z&&!w&&m&&o.createElement(L,{id:g,features:M.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:W}))})),ee=(0,u.yV)((function(e,t){let n=d(),{id:r=`headlessui-popover-overlay-${n}`,...l}=e,[{popoverState:i},s]=U("Popover.Overlay"),c=(0,a.T)(t),f=(0,F.oJ)(),p=null!==f?(f&F.ZM.Open)===F.ZM.Open:0===i,m=(0,k.z)((e=>{if(v(e.currentTarget))return e.preventDefault();s({type:1})})),h=(0,o.useMemo)((()=>({open:0===i})),[i]);return(0,u.sY)({ourProps:{ref:c,id:r,"aria-hidden":!0,onClick:m},theirProps:l,slot:h,defaultTag:"div",features:J,visible:p,name:"Popover.Overlay"})})),te=(0,u.yV)((function(e,t){let n=d(),{id:r=`headlessui-popover-panel-${n}`,focus:s=!1,...c}=e,[f,v]=U("Popover.Panel"),{close:m,isPortalled:h}=G("Popover.Panel"),g=`headlessui-focus-sentinel-before-${d()}`,P=`headlessui-focus-sentinel-after-${d()}`,S=(0,o.useRef)(null),w=(0,a.T)(S,t,(e=>{v({type:4,panel:e})})),O=I(S);(0,i.e)((()=>(v({type:5,panelId:r}),()=>{v({type:5,panelId:null})})),[r,v]);let C=(0,F.oJ)(),x=null!==C?(C&F.ZM.Open)===F.ZM.Open:0===f.popoverState,N=(0,k.z)((e=>{var t;if(e.key===p.Escape){if(0!==f.popoverState||!S.current||null!=O&&O.activeElement&&!S.current.contains(O.activeElement))return;e.preventDefault(),e.stopPropagation(),v({type:1}),null==(t=f.button)||t.focus()}}));(0,o.useEffect)((()=>{var t;e.static||1===f.popoverState&&(null==(t=e.unmount)||t)&&v({type:4,panel:null})}),[f.popoverState,e.unmount,e.static,v]),(0,o.useEffect)((()=>{if(!s||0!==f.popoverState||!S.current)return;let e=null==O?void 0:O.activeElement;S.current.contains(e)||T(S.current,b.First)}),[s,S,f.popoverState]);let A=(0,o.useMemo)((()=>({open:0===f.popoverState,close:m})),[f,m]),H={ref:w,id:r,onKeyDown:N,onBlur:s&&0===f.popoverState?e=>{var t,n,r,o,l;let u=e.relatedTarget;u&&S.current&&(null!=(t=S.current)&&t.contains(u)||(v({type:1}),(null!=(r=null==(n=f.beforePanelSentinel.current)?void 0:n.contains)&&r.call(n,u)||null!=(l=null==(o=f.afterPanelSentinel.current)?void 0:o.contains)&&l.call(o,u))&&u.focus({preventScroll:!0})))}:void 0,tabIndex:-1},j=D(),B=(0,k.z)((()=>{let e=S.current;e&&(0,l.E)(j.current,{[R.Forwards]:()=>{var t;T(e,b.First)===E.Error&&(null==(t=f.afterPanelSentinel.current)||t.focus())},[R.Backwards]:()=>{var e;null==(e=f.button)||e.focus({preventScroll:!0})}})})),z=(0,k.z)((()=>{let e=S.current;e&&(0,l.E)(j.current,{[R.Forwards]:()=>{var e;if(!f.button)return;let t=y(),n=t.indexOf(f.button),r=t.slice(0,n+1),o=[...t.slice(n+1),...r];for(let t of o.slice())if("true"===t.dataset.headlessuiFocusGuard||null!=(e=f.panel)&&e.contains(t)){let e=o.indexOf(t);-1!==e&&o.splice(e,1)}T(o,b.First,{sorted:!1})},[R.Backwards]:()=>{var t;T(e,b.Previous)===E.Error&&(null==(t=f.button)||t.focus())}})}));return o.createElement(_.Provider,{value:r},x&&h&&o.createElement(L,{id:g,ref:f.beforePanelSentinel,features:M.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:B}),(0,u.sY)({ourProps:H,theirProps:c,slot:A,defaultTag:"div",features:K,visible:x,name:"Popover.Panel"}),x&&h&&o.createElement(L,{id:P,ref:f.afterPanelSentinel,features:M.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:z}))})),ne=(0,u.yV)((function(e,t){let n=(0,o.useRef)(null),r=(0,a.T)(n,t),[l,i]=(0,o.useState)([]),s=(0,k.z)((e=>{i((t=>{let n=t.indexOf(e);if(-1!==n){let e=t.slice();return e.splice(n,1),e}return t}))})),c=(0,k.z)((e=>(i((t=>[...t,e])),()=>s(e)))),d=(0,k.z)((()=>{var e;let t=m(n);if(!t)return!1;let r=t.activeElement;return!(null==(e=n.current)||!e.contains(r))||l.some((e=>{var n,o;return(null==(n=t.getElementById(e.buttonId.current))?void 0:n.contains(r))||(null==(o=t.getElementById(e.panelId.current))?void 0:o.contains(r))}))})),f=(0,k.z)((e=>{for(let t of l)t.buttonId.current!==e&&t.close()})),p=(0,o.useMemo)((()=>({registerPopover:c,unregisterPopover:s,isFocusWithinPopoverGroup:d,closeOthers:f})),[c,s,d,f]),v=(0,o.useMemo)((()=>({})),[]),h=e,b={ref:r};return o.createElement(Y.Provider,{value:p},(0,u.sY)({ourProps:b,theirProps:h,slot:v,defaultTag:"div",name:"Popover.Group"}))})),re=Object.assign(X,{Button:Q,Overlay:ee,Panel:te,Group:ne})},822:(e,t,n)=>{n.d(t,{u:()=>k});var r=n(966),o=n(431),l=n(613),u=n(631),a=n(94);function i(){let e=(0,r.useRef)(!1);return(0,a.e)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}var s=n(227),c=n(908),d=n(245);function f(){let e=[],t={addEventListener:(e,n,r,o)=>(e.addEventListener(n,r,o),t.add((()=>e.removeEventListener(n,r,o)))),requestAnimationFrame(...e){let n=requestAnimationFrame(...e);return t.add((()=>cancelAnimationFrame(n)))},nextFrame:(...e)=>t.requestAnimationFrame((()=>t.requestAnimationFrame(...e))),setTimeout(...e){let n=setTimeout(...e);return t.add((()=>clearTimeout(n)))},microTask(...e){let n={current:!0};return function(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch((e=>setTimeout((()=>{throw e}))))}((()=>{n.current&&e[0]()})),t.add((()=>{n.current=!1}))},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add((()=>{Object.assign(e.style,{[t]:r})}))},group(e){let t=f();return e(t),this.add((()=>t.dispose()))},add:t=>(e.push(t),()=>{let n=e.indexOf(t);if(n>=0)for(let t of e.splice(n,1))t()}),dispose(){for(let t of e.splice(0))t()}};return t}function p(e,...t){e&&t.length>0&&e.classList.add(...t)}function v(e,...t){e&&t.length>0&&e.classList.remove(...t)}function m(){let[e]=(0,r.useState)(f);return(0,r.useEffect)((()=>()=>e.dispose()),[e]),e}function h({container:e,direction:t,classes:n,onStart:r,onStop:o}){let l=i(),c=m(),d=(0,s.E)(t);(0,a.e)((()=>{let t=f();c.add(t.dispose);let a=e.current;if(a&&"idle"!==d.current&&l.current)return t.dispose(),r.current(d.current),t.add(function(e,t,n,r){let o=n?"enter":"leave",l=f(),a=void 0!==r?function(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}(r):()=>{};"enter"===o&&(e.removeAttribute("hidden"),e.style.display="");let i=(0,u.E)(o,{enter:()=>t.enter,leave:()=>t.leave}),s=(0,u.E)(o,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),c=(0,u.E)(o,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return v(e,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),p(e,...i,...c),l.nextFrame((()=>{v(e,...c),p(e,...s),function(e,t){let n=f();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:o}=getComputedStyle(e),[l,u]=[r,o].map((e=>{let[t=0]=e.split(",").filter(Boolean).map((e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e))).sort(((e,t)=>t-e));return t})),a=l+u;if(0!==a){n.group((n=>{n.setTimeout((()=>{t(),n.dispose()}),a),n.addEventListener(e,"transitionrun",(e=>{e.target===e.currentTarget&&n.dispose()}))}));let r=n.addEventListener(e,"transitionend",(e=>{e.target===e.currentTarget&&(t(),r())}))}else t();n.add((()=>t())),n.dispose}(e,(()=>(v(e,...i),p(e,...t.entered),a())))})),l.dispose}(a,n.current,"enter"===d.current,(()=>{t.dispose(),o.current(d.current)}))),t.dispose}),[t])}var b=n(360),E=n(675),g=n(511);function y(e=""){return e.split(" ").filter((e=>e.trim().length>1))}let P=(0,r.createContext)(null);P.displayName="TransitionContext";var S,w=((S=w||{}).Visible="visible",S.Hidden="hidden",S);let T=(0,r.createContext)(null);function F(e){return"children"in e?F(e.children):e.current.filter((({el:e})=>null!==e.current)).filter((({state:e})=>"visible"===e)).length>0}function O(e,t){let n=(0,s.E)(e),l=(0,r.useRef)([]),a=i(),c=m(),d=(0,b.z)(((e,t=o.l4.Hidden)=>{let r=l.current.findIndex((({el:t})=>t===e));-1!==r&&((0,u.E)(t,{[o.l4.Unmount](){l.current.splice(r,1)},[o.l4.Hidden](){l.current[r].state="hidden"}}),c.microTask((()=>{var e;!F(l)&&a.current&&(null==(e=n.current)||e.call(n))})))})),f=(0,b.z)((e=>{let t=l.current.find((({el:t})=>t===e));return t?"visible"!==t.state&&(t.state="visible"):l.current.push({el:e,state:"visible"}),()=>d(e,o.l4.Unmount)})),p=(0,r.useRef)([]),v=(0,r.useRef)(Promise.resolve()),h=(0,r.useRef)({enter:[],leave:[],idle:[]}),E=(0,b.z)(((e,n,r)=>{p.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter((([t])=>t!==e))),null==t||t.chains.current[n].push([e,new Promise((e=>{p.current.push(e)}))]),null==t||t.chains.current[n].push([e,new Promise((e=>{Promise.all(h.current[n].map((([e,t])=>t))).then((()=>e()))}))]),"enter"===n?v.current=v.current.then((()=>null==t?void 0:t.wait.current)).then((()=>r(n))):r(n)})),g=(0,b.z)(((e,t,n)=>{Promise.all(h.current[t].splice(0).map((([e,t])=>t))).then((()=>{var e;null==(e=p.current.shift())||e()})).then((()=>n(t)))}));return(0,r.useMemo)((()=>({children:l,register:f,unregister:d,onStart:E,onStop:g,wait:v,chains:h})),[f,d,l,E,g,h,v])}function C(){}T.displayName="NestingContext";let x=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function N(e){var t;let n={};for(let r of x)n[r]=null!=(t=e[r])?t:C;return n}let I=o.AN.RenderStrategy,A=(0,o.yV)((function(e,t){let{show:n,appear:u=!1,unmount:i,...s}=e,f=(0,r.useRef)(null),p=(0,d.T)(f,t);(0,c.H)();let v=(0,l.oJ)();if(void 0===n&&null!==v&&(n=(v&l.ZM.Open)===l.ZM.Open),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[m,h]=(0,r.useState)(n?"visible":"hidden"),b=O((()=>{h("hidden")})),[E,g]=(0,r.useState)(!0),y=(0,r.useRef)([n]);(0,a.e)((()=>{!1!==E&&y.current[y.current.length-1]!==n&&(y.current.push(n),g(!1))}),[y,n]);let S=(0,r.useMemo)((()=>({show:n,appear:u,initial:E})),[n,u,E]);(0,r.useEffect)((()=>{if(n)h("visible");else if(F(b)){let e=f.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&h("hidden")}else h("hidden")}),[n,b]);let w={unmount:i};return r.createElement(T.Provider,{value:b},r.createElement(P.Provider,{value:S},(0,o.sY)({ourProps:{...w,as:r.Fragment,children:r.createElement(M,{ref:p,...w,...s})},theirProps:{},defaultTag:r.Fragment,features:I,visible:"visible"===m,name:"Transition"})))})),M=(0,o.yV)((function(e,t){let{beforeEnter:n,afterEnter:a,beforeLeave:i,afterLeave:f,enter:p,enterFrom:v,enterTo:m,entered:S,leave:w,leaveFrom:C,leaveTo:x,...A}=e,M=(0,r.useRef)(null),L=(0,d.T)(M,t),k=A.unmount?o.l4.Unmount:o.l4.Hidden,{show:R,appear:D,initial:H}=function(){let e=(0,r.useContext)(P);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[j,B]=(0,r.useState)(R?"visible":"hidden"),z=function(){let e=(0,r.useContext)(T);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:Z,unregister:$}=z,U=(0,r.useRef)(null);(0,r.useEffect)((()=>Z(M)),[Z,M]),(0,r.useEffect)((()=>{if(k===o.l4.Hidden&&M.current)return R&&"visible"!==j?void B("visible"):(0,u.E)(j,{hidden:()=>$(M),visible:()=>Z(M)})}),[j,M,Z,$,R,k]);let V=(0,s.E)({enter:y(p),enterFrom:y(v),enterTo:y(m),entered:y(S),leave:y(w),leaveFrom:y(C),leaveTo:y(x)}),G=function(e){let t=(0,r.useRef)(N(e));return(0,r.useEffect)((()=>{t.current=N(e)}),[e]),t}({beforeEnter:n,afterEnter:a,beforeLeave:i,afterLeave:f}),Y=(0,c.H)();(0,r.useEffect)((()=>{if(Y&&"visible"===j&&null===M.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[M,j,Y]);let q=H&&!D,_=!Y||q||U.current===R?"idle":R?"enter":"leave",W=function(e=0){let[t,n]=(0,r.useState)(e),o=(0,r.useCallback)((e=>n((t=>t|e))),[t]),l=(0,r.useCallback)((e=>Boolean(t&e)),[t]),u=(0,r.useCallback)((e=>n((t=>t&~e))),[n]),a=(0,r.useCallback)((e=>n((t=>t^e))),[n]);return{flags:t,addFlag:o,hasFlag:l,removeFlag:u,toggleFlag:a}}(0),J=(0,b.z)((e=>(0,u.E)(e,{enter:()=>{W.addFlag(l.ZM.Opening),G.current.beforeEnter()},leave:()=>{W.addFlag(l.ZM.Closing),G.current.beforeLeave()},idle:()=>{}}))),K=(0,b.z)((e=>(0,u.E)(e,{enter:()=>{W.removeFlag(l.ZM.Opening),G.current.afterEnter()},leave:()=>{W.removeFlag(l.ZM.Closing),G.current.afterLeave()},idle:()=>{}}))),X=O((()=>{B("hidden"),$(M)}),z);h({container:M,classes:V,direction:_,onStart:(0,s.E)((e=>{X.onStart(M,e,J)})),onStop:(0,s.E)((e=>{X.onStop(M,e,K),"leave"===e&&!F(X)&&(B("hidden"),$(M))}))}),(0,r.useEffect)((()=>{q&&(k===o.l4.Hidden?U.current=null:U.current=R)}),[R,q,j]);let Q=A,ee={ref:L};return D&&R&&g.O.isServer&&(Q={...Q,className:(0,E.A)(A.className,...V.current.enter,...V.current.enterFrom)}),r.createElement(T.Provider,{value:X},r.createElement(l.up,{value:(0,u.E)(j,{visible:l.ZM.Open,hidden:l.ZM.Closed})|W.flags},(0,o.sY)({ourProps:ee,theirProps:Q,defaultTag:"div",features:I,visible:"visible"===j,name:"Transition.Child"})))})),L=(0,o.yV)((function(e,t){let n=null!==(0,r.useContext)(P),o=null!==(0,l.oJ)();return r.createElement(r.Fragment,null,!n&&o?r.createElement(A,{ref:t,...e}):r.createElement(M,{ref:t,...e}))})),k=Object.assign(A,{Child:L,Root:A})},360:(e,t,n)=>{n.d(t,{z:()=>l});var r=n(966),o=n(227);let l=function(e){let t=(0,o.E)(e);return r.useCallback(((...e)=>t.current(...e)),[t])}},94:(e,t,n)=>{n.d(t,{e:()=>l});var r=n(966),o=n(511);let l=(e,t)=>{o.O.isServer?(0,r.useEffect)(e,t):(0,r.useLayoutEffect)(e,t)}},227:(e,t,n)=>{n.d(t,{E:()=>l});var r=n(966),o=n(94);function l(e){let t=(0,r.useRef)(e);return(0,o.e)((()=>{t.current=e}),[e]),t}},908:(e,t,n)=>{n.d(t,{H:()=>l});var r=n(966),o=n(511);function l(){let[e,t]=(0,r.useState)(o.O.isHandoffComplete);return e&&!1===o.O.isHandoffComplete&&t(!1),(0,r.useEffect)((()=>{!0!==e&&t(!0)}),[e]),(0,r.useEffect)((()=>o.O.handoff()),[]),e}},245:(e,t,n)=>{n.d(t,{T:()=>a,h:()=>u});var r=n(966),o=n(360);let l=Symbol();function u(e,t=!0){return Object.assign(e,{[l]:t})}function a(...e){let t=(0,r.useRef)(e);(0,r.useEffect)((()=>{t.current=e}),[e]);let n=(0,o.z)((e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)}));return e.every((e=>null==e||(null==e?void 0:e[l])))?void 0:n}},613:(e,t,n)=>{n.d(t,{ZM:()=>u,oJ:()=>a,up:()=>i});var r=n(966);let o=(0,r.createContext)(null);o.displayName="OpenClosedContext";var l,u=((l=u||{})[l.Open=1]="Open",l[l.Closed=2]="Closed",l[l.Closing=4]="Closing",l[l.Opening=8]="Opening",l);function a(){return(0,r.useContext)(o)}function i({value:e,children:t}){return r.createElement(o.Provider,{value:e},t)}},675:(e,t,n)=>{function r(...e){return e.filter(Boolean).join(" ")}n.d(t,{A:()=>r})},511:(e,t,n)=>{n.d(t,{O:()=>l});var r=Object.defineProperty,o=(e,t,n)=>(((e,t,n)=>{t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!=typeof t?t+"":t,n),n);let l=new class{constructor(){o(this,"current",this.detect()),o(this,"handoffState","pending"),o(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}},631:(e,t,n)=>{function r(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let o=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,r),o}n.d(t,{E:()=>r})},431:(e,t,n)=>{n.d(t,{AN:()=>i,l4:()=>s,sY:()=>c,yV:()=>p});var r,o,l=n(966),u=n(675),a=n(631),i=((o=i||{})[o.None=0]="None",o[o.RenderStrategy=1]="RenderStrategy",o[o.Static=2]="Static",o),s=((r=s||{})[r.Unmount=0]="Unmount",r[r.Hidden=1]="Hidden",r);function c({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:l=!0,name:u}){let i=f(t,e);if(l)return d(i,n,r,u);let s=null!=o?o:0;if(2&s){let{static:e=!1,...t}=i;if(e)return d(t,n,r,u)}if(1&s){let{unmount:e=!0,...t}=i;return(0,a.E)(e?0:1,{0:()=>null,1:()=>d({...t,hidden:!0,style:{display:"none"}},n,r,u)})}return d(i,n,r,u)}function d(e,t={},n,r){var o;let{as:a=n,children:i,refName:s="ref",...c}=m(e,["unmount","static"]),d=void 0!==e.ref?{[s]:e.ref}:{},p="function"==typeof i?i(t):i;"className"in c&&c.className&&"function"==typeof c.className&&(c.className=c.className(t));let h={};if(t){let e=!1,n=[];for(let[r,o]of Object.entries(t))"boolean"==typeof o&&(e=!0),!0===o&&n.push(r);e&&(h["data-headlessui-state"]=n.join(" "))}if(a===l.Fragment&&Object.keys(v(c)).length>0){if(!(0,l.isValidElement)(p)||Array.isArray(p)&&p.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(c).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));let e=(0,u.A)(null==(o=p.props)?void 0:o.className,c.className),t=e?{className:e}:{};return(0,l.cloneElement)(p,Object.assign({},f(p.props,v(m(c,["ref"]))),h,d,function(...e){return{ref:e.every((e=>null==e))?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(p.ref,d.ref),t))}return(0,l.createElement)(a,Object.assign({},m(c,["ref"]),a!==l.Fragment&&d,a!==l.Fragment&&h),p)}function f(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map((e=>[e,void 0]))));for(let e in n)Object.assign(t,{[e](t,...r){let o=n[e];for(let e of o){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;e(t,...r)}}});return t}function p(e){var t;return Object.assign((0,l.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function v(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function m(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}}}]);
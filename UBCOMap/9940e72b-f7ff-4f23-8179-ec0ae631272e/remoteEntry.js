var WebsiteRemote;(()=>{"use strict";var e,r,t,n,o,a,i,u,f,l,d,s,c,h,p={401:(e,r,t)=>{var n={"./widgets":()=>Promise.all([t.e(966),t.e(362)]).then((()=>()=>t(362)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>a})}},v={};function b(e){var r=v[e];if(void 0!==r)return r.exports;var t=v[e]={exports:{}};return p[e].call(t.exports,t,t.exports,b),t.exports}b.m=p,b.c=v,b.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return b.d(r,{a:r}),r},b.d=(e,r)=>{for(var t in r)b.o(r,t)&&!b.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((r,t)=>(b.f[t](e,r),r)),[])),b.u=e=>"main."+{98:"6cf1a84f635b6495c7d2",220:"b17f339292e9c76970ce",362:"72bb874eaee270ac4344",390:"4f64b4a50f48ec6dc913",413:"cbefb3e7370c0ada92b4",478:"d1bc17b2442b9068b28a",649:"61eb6354c2cb079c34af",721:"bbe0f3cf41d572ada9bf",874:"a24470478695eebc3d80",966:"0becac0071a9381e0243",985:"e51e0574d4adf96183ff"}[e]+".js",b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="builder:",b.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var i,u;if(void 0!==o)for(var f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var d=f[l];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+o){i=d;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,b.nc&&i.setAttribute("nonce",b.nc),i.setAttribute("data-webpack",r+o),i.src=t),e[t]=[n];var s=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},c=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),u&&document.head.appendChild(i)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{b.S={};var e={},r={};b.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];b.o(b.S,t)||(b.S[t]={});var a=b.S[t],i="builder",u=(e,r,t,n)=>{var o=a[e]=a[e]||{},u=o[r];(!u||!u.loaded&&(!n!=!u.eager?n:i>u.from))&&(o[r]={get:t,from:i,eager:!!n})},f=[];return"default"===t&&(u("@twind/react","0.0.4",(()=>Promise.all([b.e(966),b.e(220),b.e(478)]).then((()=>()=>b(478))))),u("react-dom","18.2.0",(()=>Promise.all([b.e(98),b.e(966)]).then((()=>()=>b(98))))),u("react-router-dom","6.4.5",(()=>Promise.all([b.e(390),b.e(966)]).then((()=>()=>b(390))))),u("react","18.2.0",(()=>b.e(721).then((()=>()=>b(721))))),u("twind","0.16.19",(()=>b.e(985).then((()=>()=>b(985)))))),e[t]=f.length?Promise.all(f).then((()=>e[t]=1)):1}}})(),b.p="https://proximify.github.io/open-uniweb/UBCOMap/9940e72b-f7ff-4f23-8179-ec0ae631272e/",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var i=r[n],u=(typeof i)[0];if(a!=u)return"o"==a&&"n"==u||"s"==u||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,t+="u"==(typeof(u=e[a]))[0]?"-":(n>0?".":"")+(n=2,u);return t}var i=[];for(a=1;a<e.length;a++){var u=e[a];i.push(0===u?"not("+f()+")":1===u?"("+f()+" || "+f()+")":2===u?i.pop()+" "+i.pop():o(u))}return f();function f(){return i.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var i=0,u=1,f=!0;;u++,i++){var l,d,s=u<e.length?(typeof e[u])[0]:"";if(i>=r.length||"o"==(d=(typeof(l=r[i]))[0]))return!f||("u"==s?u>n&&!o:""==s!=o);if("u"==d){if(!f||"u"!=s)return!1}else if(f)if(s==d)if(u<=n){if(l!=e[u])return!1}else{if(o?l>e[u]:l<e[u])return!1;l!=e[u]&&(f=!1)}else if("s"!=s&&"n"!=s){if(o||u<=n)return!1;f=!1,u--}else{if(u<=n||d<s!=o)return!1;f=!1}else"s"!=s&&"n"!=s&&(f=!1,u--)}}var c=[],h=c.pop.bind(c);for(i=1;i<e.length;i++){var p=e[i];c.push(1==p?h()|h():2==p?h()&h():p?a(p,r):!h())}return!!h()},i=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},u=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(n)+")",f=(e,r,t,n)=>{var o=i(e,t);return a(n,o)||"undefined"!=typeof console&&console.warn&&console.warn(u(e,t,o,n)),l(e[t][o])},l=e=>(e.loaded=1,e.get()),d=(e=>function(r,t,n,o){var a=b.I(r);return a&&a.then?a.then(e.bind(e,r,b.S[r],t,n,o)):e(0,b.S[r],t,n,o)})(((e,r,t,n,o)=>r&&b.o(r,t)?f(r,0,t,n):o())),s={},c={966:()=>d("default","react",[1,18,2,0],(()=>b.e(721).then((()=>()=>b(721))))),220:()=>d("default","twind",[2,0,16,17],(()=>b.e(985).then((()=>()=>b(985))))),14:()=>d("default","react-router-dom",[1,6,4,2],(()=>b.e(390).then((()=>()=>b(390))))),918:()=>d("default","@twind/react",[3,0,0,4],(()=>b.e(649).then((()=>()=>b(478))))),944:()=>d("default","react-dom",[1,18,2,0],(()=>b.e(98).then((()=>()=>b(98)))))},h={220:[220],874:[14,918,944],966:[966]},b.f.consumes=(e,r)=>{b.o(h,e)&&h[e].forEach((e=>{if(b.o(s,e))return r.push(s[e]);var t=r=>{s[e]=0,b.m[e]=t=>{delete b.c[e],t.exports=r()}},n=r=>{delete s[e],b.m[e]=t=>{throw delete b.c[e],r}};try{var o=c[e]();o.then?r.push(s[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},(()=>{var e={693:0};b.f.j=(r,t)=>{var n=b.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(220|966)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=b.p+b.u(r),i=new Error;b.l(a,(t=>{if(b.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,i,u]=t,f=0;if(a.some((r=>0!==e[r]))){for(n in i)b.o(i,n)&&(b.m[n]=i[n]);u&&u(b)}for(r&&r(t);f<a.length;f++)o=a[f],b.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkbuilder=self.webpackChunkbuilder||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var m=b(401);WebsiteRemote=m})();
var WebsiteRemote;(()=>{"use strict";var e,r,t,a,n,o,i,u,d,f,l,s,c,p,h={747:(e,r,t)=>{var a={"./widgets":()=>Promise.all([t.e(966),t.e(515)]).then((()=>()=>t(515)))},n=(e,r)=>(t.R=r,r=t.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var a="default",n=t.S[a];if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[a]=e,t.I(a,r)}};t.d(r,{get:()=>n,init:()=>o})}},v={};function b(e){var r=v[e];if(void 0!==r)return r.exports;var t=v[e]={id:e,exports:{}};return h[e](t,t.exports,b),t.exports}b.m=h,b.c=v,b.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return b.d(r,{a:r}),r},b.d=(e,r)=>{for(var t in r)b.o(r,t)&&!b.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((r,t)=>(b.f[t](e,r),r)),[])),b.u=e=>"main."+{63:"065a15a8e89268113beb",78:"afeea6d48da209930aac",345:"937c71c8c96f09e346d2",515:"85538863a4f6e2196a4d",643:"4a2d7d5c0ab6fdbc9831",689:"a09ed9813d533892ced4",721:"bbe0f3cf41d572ada9bf",780:"c3d4d4ebc8a1bb1e5f1f",797:"5f677905be4f4f8ba9d5",858:"ad5355486055f882be6a",964:"afdec6d31f586d6fe1ec",966:"0becac0071a9381e0243"}[e]+".js",b.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="builder:",b.l=(t,a,n,o)=>{if(e[t])e[t].push(a);else{var i,u;if(void 0!==n)for(var d=document.getElementsByTagName("script"),f=0;f<d.length;f++){var l=d[f];if(l.getAttribute("src")==t||l.getAttribute("data-webpack")==r+n){i=l;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,b.nc&&i.setAttribute("nonce",b.nc),i.setAttribute("data-webpack",r+n),i.src=t),e[t]=[a];var s=(r,a)=>{i.onerror=i.onload=null,clearTimeout(c);var n=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(a))),r)return r(a)},c=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),u&&document.head.appendChild(i)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{b.S={};var e={},r={};b.I=(t,a)=>{a||(a=[]);var n=r[t];if(n||(n=r[t]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[t])return e[t];b.o(b.S,t)||(b.S[t]={});var o=b.S[t],i="builder",u=(e,r,t,a)=>{var n=o[e]=o[e]||{},u=n[r];(!u||!u.loaded&&(!a!=!u.eager?a:i>u.from))&&(n[r]={get:t,from:i,eager:!!a})},d=[];return"default"===t&&(u("react-dom","18.2.0",(()=>Promise.all([b.e(780),b.e(966)]).then((()=>()=>b(780))))),u("react-router-dom","6.4.5",(()=>Promise.all([b.e(643),b.e(966)]).then((()=>()=>b(643))))),u("react","18.2.0",(()=>b.e(721).then((()=>()=>b(721)))))),e[t]=d.length?Promise.all(d).then((()=>e[t]=1)):1}}})(),b.p="https://uniweb-remote.pages.dev/MemberWebsite/8e08a0e7-c52e-4a30-bf1a-715a7d85ec65/",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=t[1]?r(t[1]):[];return t[2]&&(a.length++,a.push.apply(a,r(t[2]))),t[3]&&(a.push([]),a.push.apply(a,r(t[3]))),a},a=(e,r)=>{e=t(e),r=t(r);for(var a=0;;){if(a>=e.length)return a<r.length&&"u"!=(typeof r[a])[0];var n=e[a],o=(typeof n)[0];if(a>=r.length)return"u"==o;var i=r[a],u=(typeof i)[0];if(o!=u)return"o"==o&&"n"==u||"s"==u||"u"==o;if("o"!=o&&"u"!=o&&n!=i)return n<i;a++}},n=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var a=1,o=1;o<e.length;o++)a--,t+="u"==(typeof(u=e[o]))[0]?"-":(a>0?".":"")+(a=2,u);return t}var i=[];for(o=1;o<e.length;o++){var u=e[o];i.push(0===u?"not("+d()+")":1===u?"("+d()+" || "+d()+")":2===u?i.pop()+" "+i.pop():n(u))}return d();function d(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var a=e[0],n=a<0;n&&(a=-a-1);for(var i=0,u=1,d=!0;;u++,i++){var f,l,s=u<e.length?(typeof e[u])[0]:"";if(i>=r.length||"o"==(l=(typeof(f=r[i]))[0]))return!d||("u"==s?u>a&&!n:""==s!=n);if("u"==l){if(!d||"u"!=s)return!1}else if(d)if(s==l)if(u<=a){if(f!=e[u])return!1}else{if(n?f>e[u]:f<e[u])return!1;f!=e[u]&&(d=!1)}else if("s"!=s&&"n"!=s){if(n||u<=a)return!1;d=!1,u--}else{if(u<=a||l<s!=n)return!1;d=!1}else"s"!=s&&"n"!=s&&(d=!1,u--)}}var c=[],p=c.pop.bind(c);for(i=1;i<e.length;i++){var h=e[i];c.push(1==h?p()|p():2==h?p()&p():h?o(h,r):!p())}return!!p()},i=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&a(e,r)?r:e),0)},u=(e,r,t,a)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+n(a)+")",d=(e,r,t,a)=>{var n=i(e,t);return o(a,n)||"undefined"!=typeof console&&console.warn&&console.warn(u(e,t,n,a)),f(e[t][n])},f=e=>(e.loaded=1,e.get()),l=(e=>function(r,t,a,n){var o=b.I(r);return o&&o.then?o.then(e.bind(e,r,b.S[r],t,a,n)):e(0,b.S[r],t,a,n)})(((e,r,t,a,n)=>r&&b.o(r,t)?d(r,0,t,a):n())),s={},c={966:()=>l("default","react",[1,18,2,0],(()=>b.e(721).then((()=>()=>b(721))))),260:()=>l("default","react-router-dom",[1,6,4,2],(()=>b.e(643).then((()=>()=>b(643)))))},p={63:[260],966:[966]},b.f.consumes=(e,r)=>{b.o(p,e)&&p[e].forEach((e=>{if(b.o(s,e))return r.push(s[e]);var t=r=>{s[e]=0,b.m[e]=t=>{delete b.c[e],t.exports=r()}},a=r=>{delete s[e],b.m[e]=t=>{throw delete b.c[e],r}};try{var n=c[e]();n.then?r.push(s[e]=n.then(t).catch(a)):t(n)}catch(e){a(e)}}))},(()=>{var e={693:0};b.f.j=(r,t)=>{var a=b.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(966!=r){var n=new Promise(((t,n)=>a=e[r]=[t,n]));t.push(a[2]=n);var o=b.p+b.u(r),i=new Error;b.l(o,(t=>{if(b.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,a[1](i)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var a,n,[o,i,u]=t,d=0;if(o.some((r=>0!==e[r]))){for(a in i)b.o(i,a)&&(b.m[a]=i[a]);u&&u(b)}for(r&&r(t);d<o.length;d++)n=o[d],b.o(e,n)&&e[n]&&e[n][0](),e[n]=0},t=self.webpackChunkbuilder=self.webpackChunkbuilder||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),b.nc=void 0;var m=b(747);WebsiteRemote=m})();
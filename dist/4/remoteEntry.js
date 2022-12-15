var website_widget;(()=>{"use strict";var e,r,t,a,n,o,i,d,f,u,l,b,c,s,h={6755:(e,r,t)=>{var a={"./ProximifyWebsite":()=>Promise.all([t.e(966),t.e(960)]).then((()=>()=>t(1960))),"./UniwebWebsite":()=>Promise.all([t.e(966),t.e(827)]).then((()=>()=>t(7827)))},n=(e,r)=>(t.R=r,r=t.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var a="default",n=t.S[a];if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[a]=e,t.I(a,r)}};t.d(r,{get:()=>n,init:()=>o})}},p={};function v(e){var r=p[e];if(void 0!==r)return r.exports;var t=p[e]={exports:{}};return h[e](t,t.exports,v),t.exports}v.m=h,v.c=p,v.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return v.d(r,{a:r}),r},v.d=(e,r)=>{for(var t in r)v.o(r,t)&&!v.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},v.f={},v.e=e=>Promise.all(Object.keys(v.f).reduce(((r,t)=>(v.f[t](e,r),r)),[])),v.u=e=>"main."+{14:"5afbedd0b362fd3ab122",17:"5006f438d50c61606a95",94:"cafe3f0777e47fa25573",97:"3c9d16804c44c4b82cce",104:"29d2751d0fc9ba222889",220:"b17f339292e9c76970ce",223:"4a625e8634330303f502",441:"4c25da3f4cdf1101c3a3",462:"0bf08c27f0f9bb442c0b",478:"34729d0aec25a51834ce",502:"36aec40ab5533feea407",605:"8659597e1dd75a40ee27",606:"a86fe699995969ceb7f9",649:"8ec05fc1ca9ce63c4400",679:"f7ef0791a2317c0c968a",689:"4d71de1e776dd439c3b1",713:"db40ea07fc8d0d13dbc0",714:"22355b4c667a2afeb7b1",721:"3b9aa8f6cd588dc7b70b",741:"e9600da147b8d012644a",758:"9f57f8ebbd36b195e71f",825:"7671b40c66f0f760a626",826:"5767b323dbd0012d5de1",827:"702ea31231cc94416ff2",831:"06d8de3a25ae912829a6",896:"ea1740040a157f49bfcd",918:"a9f3b4c6f212e8a46de5",960:"7dcc4d1fc41d191189fc",966:"0becac0071a9381e0243",985:"c00e98761024e475e5a7"}[e]+".js",v.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="builder:",v.l=(t,a,n,o)=>{if(e[t])e[t].push(a);else{var i,d;if(void 0!==n)for(var f=document.getElementsByTagName("script"),u=0;u<f.length;u++){var l=f[u];if(l.getAttribute("src")==t||l.getAttribute("data-webpack")==r+n){i=l;break}}i||(d=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,v.nc&&i.setAttribute("nonce",v.nc),i.setAttribute("data-webpack",r+n),i.src=t),e[t]=[a];var b=(r,a)=>{i.onerror=i.onload=null,clearTimeout(c);var n=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(a))),r)return r(a)},c=setTimeout(b.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=b.bind(null,i.onerror),i.onload=b.bind(null,i.onload),d&&document.head.appendChild(i)}},v.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{v.S={};var e={},r={};v.I=(t,a)=>{a||(a=[]);var n=r[t];if(n||(n=r[t]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[t])return e[t];v.o(v.S,t)||(v.S[t]={});var o=v.S[t],i="builder",d=(e,r,t,a)=>{var n=o[e]=o[e]||{},d=n[r];(!d||!d.loaded&&(!a!=!d.eager?a:i>d.from))&&(n[r]={get:t,from:i,eager:!!a})},f=[];return"default"===t&&(d("@twind/react","0.0.4",(()=>Promise.all([v.e(220),v.e(966),v.e(478)]).then((()=>()=>v(9478))))),d("react-dom","18.2.0",(()=>Promise.all([v.e(462),v.e(966)]).then((()=>()=>v(4462))))),d("react-router-dom","6.4.5",(()=>Promise.all([v.e(825),v.e(966)]).then((()=>()=>v(5825))))),d("react","18.2.0",(()=>v.e(721).then((()=>()=>v(5721))))),d("twind","0.16.19",(()=>v.e(985).then((()=>()=>v(3985)))))),e[t]=f.length?Promise.all(f).then((()=>e[t]=1)):1}}})(),v.p="https://proximify.github.io/open-uniweb/dist/4/",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=t[1]?r(t[1]):[];return t[2]&&(a.length++,a.push.apply(a,r(t[2]))),t[3]&&(a.push([]),a.push.apply(a,r(t[3]))),a},a=(e,r)=>{e=t(e),r=t(r);for(var a=0;;){if(a>=e.length)return a<r.length&&"u"!=(typeof r[a])[0];var n=e[a],o=(typeof n)[0];if(a>=r.length)return"u"==o;var i=r[a],d=(typeof i)[0];if(o!=d)return"o"==o&&"n"==d||"s"==d||"u"==o;if("o"!=o&&"u"!=o&&n!=i)return n<i;a++}},n=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var a=1,o=1;o<e.length;o++)a--,t+="u"==(typeof(d=e[o]))[0]?"-":(a>0?".":"")+(a=2,d);return t}var i=[];for(o=1;o<e.length;o++){var d=e[o];i.push(0===d?"not("+f()+")":1===d?"("+f()+" || "+f()+")":2===d?i.pop()+" "+i.pop():n(d))}return f();function f(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var a=e[0],n=a<0;n&&(a=-a-1);for(var i=0,d=1,f=!0;;d++,i++){var u,l,b=d<e.length?(typeof e[d])[0]:"";if(i>=r.length||"o"==(l=(typeof(u=r[i]))[0]))return!f||("u"==b?d>a&&!n:""==b!=n);if("u"==l){if(!f||"u"!=b)return!1}else if(f)if(b==l)if(d<=a){if(u!=e[d])return!1}else{if(n?u>e[d]:u<e[d])return!1;u!=e[d]&&(f=!1)}else if("s"!=b&&"n"!=b){if(n||d<=a)return!1;f=!1,d--}else{if(d<=a||l<b!=n)return!1;f=!1}else"s"!=b&&"n"!=b&&(f=!1,d--)}}var c=[],s=c.pop.bind(c);for(i=1;i<e.length;i++){var h=e[i];c.push(1==h?s()|s():2==h?s()&s():h?o(h,r):!s())}return!!s()},i=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&a(e,r)?r:e),0)},d=(e,r,t,a)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+n(a)+")",f=(e,r,t,a)=>{var n=i(e,t);return o(a,n)||"undefined"!=typeof console&&console.warn&&console.warn(d(e,t,n,a)),u(e[t][n])},u=e=>(e.loaded=1,e.get()),l=(e=>function(r,t,a,n){var o=v.I(r);return o&&o.then?o.then(e.bind(e,r,v.S[r],t,a,n)):e(0,v.S[r],t,a,n)})(((e,r,t,a,n)=>r&&v.o(r,t)?f(r,0,t,a):n())),b={},c={8220:()=>l("default","twind",[2,0,16,17],(()=>v.e(985).then((()=>()=>v(3985))))),8966:()=>l("default","react",[1,18,2,0],(()=>v.e(721).then((()=>()=>v(5721))))),918:()=>l("default","@twind/react",[3,0,0,4],(()=>v.e(649).then((()=>()=>v(9478))))),8741:()=>l("default","react-router-dom",[1,6,4,2],(()=>v.e(825).then((()=>()=>v(5825))))),8826:()=>l("default","react-dom",[1,18,2,0],(()=>v.e(462).then((()=>()=>v(4462)))))},s={220:[8220],741:[8741],826:[8826],918:[918],966:[8966]},v.f.consumes=(e,r)=>{v.o(s,e)&&s[e].forEach((e=>{if(v.o(b,e))return r.push(b[e]);var t=r=>{b[e]=0,v.m[e]=t=>{delete v.c[e],t.exports=r()}},a=r=>{delete b[e],v.m[e]=t=>{throw delete v.c[e],r}};try{var n=c[e]();n.then?r.push(b[e]=n.then(t).catch(a)):t(n)}catch(e){a(e)}}))},(()=>{var e={107:0};v.f.j=(r,t)=>{var a=v.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^(220|741|826|918|966)$/.test(r))e[r]=0;else{var n=new Promise(((t,n)=>a=e[r]=[t,n]));t.push(a[2]=n);var o=v.p+v.u(r),i=new Error;v.l(o,(t=>{if(v.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,a[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var a,n,[o,i,d]=t,f=0;if(o.some((r=>0!==e[r]))){for(a in i)v.o(i,a)&&(v.m[a]=i[a]);d&&d(v)}for(r&&r(t);f<o.length;f++)n=o[f],v.o(e,n)&&e[n]&&e[n][0](),e[n]=0},t=self.webpackChunkbuilder=self.webpackChunkbuilder||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var m=v(6755);website_widget=m})();
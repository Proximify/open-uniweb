var ProximifyWebsite;(()=>{"use strict";var e,r,t,a,n,o,i,f,d,u,l,c,s,h,b={2220:(e,r,t)=>{var a={"./widgets":()=>Promise.all([t.e(966),t.e(960)]).then((()=>()=>t(1960)))},n=(e,r)=>(t.R=r,r=t.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var a="default",n=t.S[a];if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[a]=e,t.I(a,r)}};t.d(r,{get:()=>n,init:()=>o})}},p={};function v(e){var r=p[e];if(void 0!==r)return r.exports;var t=p[e]={exports:{}};return b[e].call(t.exports,t,t.exports,v),t.exports}v.m=b,v.c=p,v.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return v.d(r,{a:r}),r},v.d=(e,r)=>{for(var t in r)v.o(r,t)&&!v.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},v.f={},v.e=e=>Promise.all(Object.keys(v.f).reduce(((r,t)=>(v.f[t](e,r),r)),[])),v.u=e=>"main."+{60:"b8279e9361f11e0b0fc6",104:"88cc362d3795fd2061ac",193:"9e613486e6cbd593aa7c",220:"b17f339292e9c76970ce",230:"3682332a2cd01f25cf43",458:"2c8ebe2180ca3a4882f4",462:"0bf08c27f0f9bb442c0b",478:"34729d0aec25a51834ce",497:"b6266865f7d621c6107d",617:"641999082463cdf3a196",649:"8ec05fc1ca9ce63c4400",714:"f487d8a14efebbd300b8",721:"3b9aa8f6cd588dc7b70b",758:"9f57f8ebbd36b195e71f",817:"c55fe884441fce704b16",825:"7671b40c66f0f760a626",837:"b5aee53edc602d5eee72",862:"4e0fe604926f2cbe281f",887:"5cf7519b7c9257352b40",918:"a9f3b4c6f212e8a46de5",960:"1431ce9573a454dc37fc",966:"0becac0071a9381e0243",985:"c00e98761024e475e5a7"}[e]+".js",v.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="builder:",v.l=(t,a,n,o)=>{if(e[t])e[t].push(a);else{var i,f;if(void 0!==n)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var l=d[u];if(l.getAttribute("src")==t||l.getAttribute("data-webpack")==r+n){i=l;break}}i||(f=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,v.nc&&i.setAttribute("nonce",v.nc),i.setAttribute("data-webpack",r+n),i.src=t),e[t]=[a];var c=(r,a)=>{i.onerror=i.onload=null,clearTimeout(s);var n=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(a))),r)return r(a)},s=setTimeout(c.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=c.bind(null,i.onerror),i.onload=c.bind(null,i.onload),f&&document.head.appendChild(i)}},v.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{v.S={};var e={},r={};v.I=(t,a)=>{a||(a=[]);var n=r[t];if(n||(n=r[t]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[t])return e[t];v.o(v.S,t)||(v.S[t]={});var o=v.S[t],i="builder",f=(e,r,t,a)=>{var n=o[e]=o[e]||{},f=n[r];(!f||!f.loaded&&(!a!=!f.eager?a:i>f.from))&&(n[r]={get:t,from:i,eager:!!a})},d=[];return"default"===t&&(f("@twind/react","0.0.4",(()=>Promise.all([v.e(220),v.e(966),v.e(478)]).then((()=>()=>v(9478))))),f("react-dom","18.2.0",(()=>Promise.all([v.e(462),v.e(966)]).then((()=>()=>v(4462))))),f("react-router-dom","6.4.5",(()=>Promise.all([v.e(825),v.e(966)]).then((()=>()=>v(5825))))),f("react-router-dom","6.5.0",(()=>Promise.all([v.e(617),v.e(966)]).then((()=>()=>v(7617))))),f("react","18.2.0",(()=>v.e(721).then((()=>()=>v(5721))))),f("twind","0.16.19",(()=>v.e(985).then((()=>()=>v(3985)))))),e[t]=d.length?Promise.all(d).then((()=>e[t]=1)):1}}})(),v.p="https://proximify.github.io/open-uniweb/ProximifyWebsite/43fc59f5-f8ec-4955-aa11-a3eb1904f400/",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=t[1]?r(t[1]):[];return t[2]&&(a.length++,a.push.apply(a,r(t[2]))),t[3]&&(a.push([]),a.push.apply(a,r(t[3]))),a},a=(e,r)=>{e=t(e),r=t(r);for(var a=0;;){if(a>=e.length)return a<r.length&&"u"!=(typeof r[a])[0];var n=e[a],o=(typeof n)[0];if(a>=r.length)return"u"==o;var i=r[a],f=(typeof i)[0];if(o!=f)return"o"==o&&"n"==f||"s"==f||"u"==o;if("o"!=o&&"u"!=o&&n!=i)return n<i;a++}},n=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var a=1,o=1;o<e.length;o++)a--,t+="u"==(typeof(f=e[o]))[0]?"-":(a>0?".":"")+(a=2,f);return t}var i=[];for(o=1;o<e.length;o++){var f=e[o];i.push(0===f?"not("+d()+")":1===f?"("+d()+" || "+d()+")":2===f?i.pop()+" "+i.pop():n(f))}return d();function d(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var a=e[0],n=a<0;n&&(a=-a-1);for(var i=0,f=1,d=!0;;f++,i++){var u,l,c=f<e.length?(typeof e[f])[0]:"";if(i>=r.length||"o"==(l=(typeof(u=r[i]))[0]))return!d||("u"==c?f>a&&!n:""==c!=n);if("u"==l){if(!d||"u"!=c)return!1}else if(d)if(c==l)if(f<=a){if(u!=e[f])return!1}else{if(n?u>e[f]:u<e[f])return!1;u!=e[f]&&(d=!1)}else if("s"!=c&&"n"!=c){if(n||f<=a)return!1;d=!1,f--}else{if(f<=a||l<c!=n)return!1;d=!1}else"s"!=c&&"n"!=c&&(d=!1,f--)}}var s=[],h=s.pop.bind(s);for(i=1;i<e.length;i++){var b=e[i];s.push(1==b?h()|h():2==b?h()&h():b?o(b,r):!h())}return!!h()},i=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&a(e,r)?r:e),0)},f=(e,r,t,a)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+n(a)+")",d=(e,r,t,a)=>{var n=i(e,t);return o(a,n)||"undefined"!=typeof console&&console.warn&&console.warn(f(e,t,n,a)),u(e[t][n])},u=e=>(e.loaded=1,e.get()),l=(e=>function(r,t,a,n){var o=v.I(r);return o&&o.then?o.then(e.bind(e,r,v.S[r],t,a,n)):e(0,v.S[r],t,a,n)})(((e,r,t,a,n)=>r&&v.o(r,t)?d(r,0,t,a):n())),c={},s={8220:()=>l("default","twind",[2,0,16,17],(()=>v.e(985).then((()=>()=>v(3985))))),8966:()=>l("default","react",[1,18,2,0],(()=>v.e(721).then((()=>()=>v(5721))))),918:()=>l("default","@twind/react",[3,0,0,4],(()=>v.e(649).then((()=>()=>v(9478))))),8741:()=>l("default","react-router-dom",[1,6,4,2],(()=>v.e(825).then((()=>()=>v(5825))))),8826:()=>l("default","react-dom",[1,18,2,0],(()=>v.e(462).then((()=>()=>v(4462))))),8636:()=>l("default","react-router-dom",[1,6,4,2],(()=>v.e(617).then((()=>()=>v(7617)))))},h={60:[8826],193:[8636],220:[8220],887:[8741],918:[918],966:[8966]},v.f.consumes=(e,r)=>{v.o(h,e)&&h[e].forEach((e=>{if(v.o(c,e))return r.push(c[e]);var t=r=>{c[e]=0,v.m[e]=t=>{delete v.c[e],t.exports=r()}},a=r=>{delete c[e],v.m[e]=t=>{throw delete v.c[e],r}};try{var n=s[e]();n.then?r.push(c[e]=n.then(t).catch(a)):t(n)}catch(e){a(e)}}))},(()=>{var e={410:0};v.f.j=(r,t)=>{var a=v.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^(220|918|966)$/.test(r))e[r]=0;else{var n=new Promise(((t,n)=>a=e[r]=[t,n]));t.push(a[2]=n);var o=v.p+v.u(r),i=new Error;v.l(o,(t=>{if(v.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,a[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var a,n,[o,i,f]=t,d=0;if(o.some((r=>0!==e[r]))){for(a in i)v.o(i,a)&&(v.m[a]=i[a]);f&&f(v)}for(r&&r(t);d<o.length;d++)n=o[d],v.o(e,n)&&e[n]&&e[n][0](),e[n]=0},t=self.webpackChunkbuilder=self.webpackChunkbuilder||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var m=v(2220);ProximifyWebsite=m})();
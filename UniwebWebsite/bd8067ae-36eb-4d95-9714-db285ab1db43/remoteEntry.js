var WebsiteRemote;(()=>{"use strict";var e,r,t,a,n,o,i,d,f,u,l,c,s,b,h={6836:(e,r,t)=>{var a={"./widgets":()=>Promise.all([t.e(966),t.e(827)]).then((()=>()=>t(7827)))},n=(e,r)=>(t.R=r,r=t.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var a="default",n=t.S[a];if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[a]=e,t.I(a,r)}};t.d(r,{get:()=>n,init:()=>o})}},p={};function v(e){var r=p[e];if(void 0!==r)return r.exports;var t=p[e]={exports:{}};return h[e].call(t.exports,t,t.exports,v),t.exports}v.m=h,v.c=p,v.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return v.d(r,{a:r}),r},v.d=(e,r)=>{for(var t in r)v.o(r,t)&&!v.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},v.f={},v.e=e=>Promise.all(Object.keys(v.f).reduce(((r,t)=>(v.f[t](e,r),r)),[])),v.u=e=>"main."+{81:"a6345113b690c7a0cea0",193:"242180632c1a38060a9b",220:"b17f339292e9c76970ce",232:"28183aaf1a4fe881bfaf",324:"9c2994653105ab102b85",421:"30816f0674d077437a5c",478:"34729d0aec25a51834ce",538:"10fcc87f4073f06adc5b",574:"f309153a83f2c145fd0a",606:"d05e5c6e9c435ec1facd",614:"f6725340e154e66fb574",617:"641999082463cdf3a196",643:"30dfadf0691e09709a0c",649:"8ec05fc1ca9ce63c4400",681:"24a0e1abc9e7aa058615",713:"52f7ef69701e8d4d1a55",721:"3b9aa8f6cd588dc7b70b",780:"1cc04175a4690cda02ac",827:"450e85019aa245696c5a",887:"a0d72ca3563d2ebab69a",918:"a9f3b4c6f212e8a46de5",966:"0becac0071a9381e0243",985:"c00e98761024e475e5a7"}[e]+".js",v.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="builder:",v.l=(t,a,n,o)=>{if(e[t])e[t].push(a);else{var i,d;if(void 0!==n)for(var f=document.getElementsByTagName("script"),u=0;u<f.length;u++){var l=f[u];if(l.getAttribute("src")==t||l.getAttribute("data-webpack")==r+n){i=l;break}}i||(d=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,v.nc&&i.setAttribute("nonce",v.nc),i.setAttribute("data-webpack",r+n),i.src=t),e[t]=[a];var c=(r,a)=>{i.onerror=i.onload=null,clearTimeout(s);var n=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(a))),r)return r(a)},s=setTimeout(c.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=c.bind(null,i.onerror),i.onload=c.bind(null,i.onload),d&&document.head.appendChild(i)}},v.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{v.S={};var e={},r={};v.I=(t,a)=>{a||(a=[]);var n=r[t];if(n||(n=r[t]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[t])return e[t];v.o(v.S,t)||(v.S[t]={});var o=v.S[t],i="builder",d=(e,r,t,a)=>{var n=o[e]=o[e]||{},d=n[r];(!d||!d.loaded&&(!a!=!d.eager?a:i>d.from))&&(n[r]={get:t,from:i,eager:!!a})},f=[];return"default"===t&&(d("@twind/react","0.0.4",(()=>Promise.all([v.e(220),v.e(966),v.e(478)]).then((()=>()=>v(9478))))),d("react-dom","18.2.0",(()=>Promise.all([v.e(780),v.e(966)]).then((()=>()=>v(5780))))),d("react-router-dom","6.4.5",(()=>Promise.all([v.e(643),v.e(966)]).then((()=>()=>v(3643))))),d("react-router-dom","6.5.0",(()=>Promise.all([v.e(617),v.e(966)]).then((()=>()=>v(7617))))),d("react","18.2.0",(()=>v.e(721).then((()=>()=>v(5721))))),d("twind","0.16.19",(()=>v.e(985).then((()=>()=>v(3985)))))),e[t]=f.length?Promise.all(f).then((()=>e[t]=1)):1}}})(),v.p="https://proximify.github.io/open-uniweb/UniwebWebsite/bd8067ae-36eb-4d95-9714-db285ab1db43/",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=t[1]?r(t[1]):[];return t[2]&&(a.length++,a.push.apply(a,r(t[2]))),t[3]&&(a.push([]),a.push.apply(a,r(t[3]))),a},a=(e,r)=>{e=t(e),r=t(r);for(var a=0;;){if(a>=e.length)return a<r.length&&"u"!=(typeof r[a])[0];var n=e[a],o=(typeof n)[0];if(a>=r.length)return"u"==o;var i=r[a],d=(typeof i)[0];if(o!=d)return"o"==o&&"n"==d||"s"==d||"u"==o;if("o"!=o&&"u"!=o&&n!=i)return n<i;a++}},n=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var a=1,o=1;o<e.length;o++)a--,t+="u"==(typeof(d=e[o]))[0]?"-":(a>0?".":"")+(a=2,d);return t}var i=[];for(o=1;o<e.length;o++){var d=e[o];i.push(0===d?"not("+f()+")":1===d?"("+f()+" || "+f()+")":2===d?i.pop()+" "+i.pop():n(d))}return f();function f(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var a=e[0],n=a<0;n&&(a=-a-1);for(var i=0,d=1,f=!0;;d++,i++){var u,l,c=d<e.length?(typeof e[d])[0]:"";if(i>=r.length||"o"==(l=(typeof(u=r[i]))[0]))return!f||("u"==c?d>a&&!n:""==c!=n);if("u"==l){if(!f||"u"!=c)return!1}else if(f)if(c==l)if(d<=a){if(u!=e[d])return!1}else{if(n?u>e[d]:u<e[d])return!1;u!=e[d]&&(f=!1)}else if("s"!=c&&"n"!=c){if(n||d<=a)return!1;f=!1,d--}else{if(d<=a||l<c!=n)return!1;f=!1}else"s"!=c&&"n"!=c&&(f=!1,d--)}}var s=[],b=s.pop.bind(s);for(i=1;i<e.length;i++){var h=e[i];s.push(1==h?b()|b():2==h?b()&b():h?o(h,r):!b())}return!!b()},i=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&a(e,r)?r:e),0)},d=(e,r,t,a)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+n(a)+")",f=(e,r,t,a)=>{var n=i(e,t);return o(a,n)||"undefined"!=typeof console&&console.warn&&console.warn(d(e,t,n,a)),u(e[t][n])},u=e=>(e.loaded=1,e.get()),l=(e=>function(r,t,a,n){var o=v.I(r);return o&&o.then?o.then(e.bind(e,r,v.S[r],t,a,n)):e(0,v.S[r],t,a,n)})(((e,r,t,a,n)=>r&&v.o(r,t)?f(r,0,t,a):n())),c={},s={8220:()=>l("default","twind",[2,0,16,17],(()=>v.e(985).then((()=>()=>v(3985))))),8966:()=>l("default","react",[1,18,2,0],(()=>v.e(721).then((()=>()=>v(5721))))),918:()=>l("default","@twind/react",[3,0,0,4],(()=>v.e(649).then((()=>()=>v(9478))))),2260:()=>l("default","react-router-dom",[1,6,4,2],(()=>v.e(643).then((()=>()=>v(3643))))),5290:()=>l("default","react-dom",[1,18,2,0],(()=>v.e(780).then((()=>()=>v(5780))))),8636:()=>l("default","react-router-dom",[1,6,4,2],(()=>v.e(617).then((()=>()=>v(7617)))))},b={193:[8636],220:[8220],614:[5290],887:[2260],918:[918],966:[8966]},v.f.consumes=(e,r)=>{v.o(b,e)&&b[e].forEach((e=>{if(v.o(c,e))return r.push(c[e]);var t=r=>{c[e]=0,v.m[e]=t=>{delete v.c[e],t.exports=r()}},a=r=>{delete c[e],v.m[e]=t=>{throw delete v.c[e],r}};try{var n=s[e]();n.then?r.push(c[e]=n.then(t).catch(a)):t(n)}catch(e){a(e)}}))},(()=>{var e={693:0};v.f.j=(r,t)=>{var a=v.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^(220|918|966)$/.test(r))e[r]=0;else{var n=new Promise(((t,n)=>a=e[r]=[t,n]));t.push(a[2]=n);var o=v.p+v.u(r),i=new Error;v.l(o,(t=>{if(v.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,a[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var a,n,[o,i,d]=t,f=0;if(o.some((r=>0!==e[r]))){for(a in i)v.o(i,a)&&(v.m[a]=i[a]);d&&d(v)}for(r&&r(t);f<o.length;f++)n=o[f],v.o(e,n)&&e[n]&&e[n][0](),e[n]=0},t=self.webpackChunkbuilder=self.webpackChunkbuilder||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var m=v(6836);WebsiteRemote=m})();
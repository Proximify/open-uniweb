var WebsiteRemote;(()=>{"use strict";var e,r,t,a,n,o,i,d,u,f,l,c,s,p,h={851:(e,r,t)=>{var a={"./widgets":()=>Promise.all([t.e(966),t.e(418)]).then((()=>()=>t(418)))},n=(e,r)=>(t.R=r,r=t.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var a="default",n=t.S[a];if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[a]=e,t.I(a,r)}};t.d(r,{get:()=>n,init:()=>o})}},b={};function v(e){var r=b[e];if(void 0!==r)return r.exports;var t=b[e]={id:e,exports:{}};return h[e](t,t.exports,v),t.exports}v.m=h,v.c=b,v.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return v.d(r,{a:r}),r},v.d=(e,r)=>{for(var t in r)v.o(r,t)&&!v.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},v.f={},v.e=e=>Promise.all(Object.keys(v.f).reduce(((r,t)=>(v.f[t](e,r),r)),[])),v.u=e=>"main."+{81:"0600c2f582d38e1f11c7",220:"b17f339292e9c76970ce",235:"db635b20462cf495921d",260:"621081cb7412fc56ef4f",418:"f50d94750785d432db44",432:"6f50bf3a86389bb51509",478:"d1bc17b2442b9068b28a",605:"0aae8d2bb67b4c3641d0",606:"cec3b07d2d27359d33d9",643:"4a2d7d5c0ab6fdbc9831",649:"61eb6354c2cb079c34af",718:"8f0f45a541f6c86f55dc",721:"bbe0f3cf41d572ada9bf",756:"ec170e977e999ee53bc4",834:"c3620cac304e27cf9be9",867:"9b9072309ec4f6043899",966:"0becac0071a9381e0243",985:"e51e0574d4adf96183ff"}[e]+".js",v.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="builder:",v.l=(t,a,n,o)=>{if(e[t])e[t].push(a);else{var i,d;if(void 0!==n)for(var u=document.getElementsByTagName("script"),f=0;f<u.length;f++){var l=u[f];if(l.getAttribute("src")==t||l.getAttribute("data-webpack")==r+n){i=l;break}}i||(d=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,v.nc&&i.setAttribute("nonce",v.nc),i.setAttribute("data-webpack",r+n),i.src=t),e[t]=[a];var c=(r,a)=>{i.onerror=i.onload=null,clearTimeout(s);var n=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(a))),r)return r(a)},s=setTimeout(c.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=c.bind(null,i.onerror),i.onload=c.bind(null,i.onload),d&&document.head.appendChild(i)}},v.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{v.S={};var e={},r={};v.I=(t,a)=>{a||(a=[]);var n=r[t];if(n||(n=r[t]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[t])return e[t];v.o(v.S,t)||(v.S[t]={});var o=v.S[t],i="builder",d=(e,r,t,a)=>{var n=o[e]=o[e]||{},d=n[r];(!d||!d.loaded&&(!a!=!d.eager?a:i>d.from))&&(n[r]={get:t,from:i,eager:!!a})},u=[];return"default"===t&&(d("@twind/react","0.0.4",(()=>Promise.all([v.e(220),v.e(966),v.e(478)]).then((()=>()=>v(478))))),d("react-router-dom","6.4.5",(()=>Promise.all([v.e(643),v.e(966)]).then((()=>()=>v(643))))),d("react","18.2.0",(()=>v.e(721).then((()=>()=>v(721))))),d("twind","0.16.19",(()=>v.e(985).then((()=>()=>v(985)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),v.p="https://proximify.github.io/open-uniweb/MarketingWebsite/79bd8f84-b640-4335-b37c-e1a1d7d66bfa/",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=t[1]?r(t[1]):[];return t[2]&&(a.length++,a.push.apply(a,r(t[2]))),t[3]&&(a.push([]),a.push.apply(a,r(t[3]))),a},a=(e,r)=>{e=t(e),r=t(r);for(var a=0;;){if(a>=e.length)return a<r.length&&"u"!=(typeof r[a])[0];var n=e[a],o=(typeof n)[0];if(a>=r.length)return"u"==o;var i=r[a],d=(typeof i)[0];if(o!=d)return"o"==o&&"n"==d||"s"==d||"u"==o;if("o"!=o&&"u"!=o&&n!=i)return n<i;a++}},n=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var a=1,o=1;o<e.length;o++)a--,t+="u"==(typeof(d=e[o]))[0]?"-":(a>0?".":"")+(a=2,d);return t}var i=[];for(o=1;o<e.length;o++){var d=e[o];i.push(0===d?"not("+u()+")":1===d?"("+u()+" || "+u()+")":2===d?i.pop()+" "+i.pop():n(d))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var a=e[0],n=a<0;n&&(a=-a-1);for(var i=0,d=1,u=!0;;d++,i++){var f,l,c=d<e.length?(typeof e[d])[0]:"";if(i>=r.length||"o"==(l=(typeof(f=r[i]))[0]))return!u||("u"==c?d>a&&!n:""==c!=n);if("u"==l){if(!u||"u"!=c)return!1}else if(u)if(c==l)if(d<=a){if(f!=e[d])return!1}else{if(n?f>e[d]:f<e[d])return!1;f!=e[d]&&(u=!1)}else if("s"!=c&&"n"!=c){if(n||d<=a)return!1;u=!1,d--}else{if(d<=a||l<c!=n)return!1;u=!1}else"s"!=c&&"n"!=c&&(u=!1,d--)}}var s=[],p=s.pop.bind(s);for(i=1;i<e.length;i++){var h=e[i];s.push(1==h?p()|p():2==h?p()&p():h?o(h,r):!p())}return!!p()},i=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&a(e,r)?r:e),0)},d=(e,r,t,a)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+n(a)+")",u=(e,r,t,a)=>{var n=i(e,t);return o(a,n)||"undefined"!=typeof console&&console.warn&&console.warn(d(e,t,n,a)),f(e[t][n])},f=e=>(e.loaded=1,e.get()),l=(e=>function(r,t,a,n){var o=v.I(r);return o&&o.then?o.then(e.bind(e,r,v.S[r],t,a,n)):e(0,v.S[r],t,a,n)})(((e,r,t,a,n)=>r&&v.o(r,t)?u(r,0,t,a):n())),c={},s={220:()=>l("default","twind",[2,0,16,17],(()=>v.e(985).then((()=>()=>v(985))))),966:()=>l("default","react",[1,18,2,0],(()=>v.e(721).then((()=>()=>v(721))))),918:()=>l("default","@twind/react",[3,0,0,4],(()=>v.e(649).then((()=>()=>v(478))))),260:()=>l("default","react-router-dom",[1,6,4,2],(()=>v.e(643).then((()=>()=>v(643)))))},p={220:[220],260:[260],718:[918],966:[966]},v.f.consumes=(e,r)=>{v.o(p,e)&&p[e].forEach((e=>{if(v.o(c,e))return r.push(c[e]);var t=r=>{c[e]=0,v.m[e]=t=>{delete v.c[e],t.exports=r()}},a=r=>{delete c[e],v.m[e]=t=>{throw delete v.c[e],r}};try{var n=s[e]();n.then?r.push(c[e]=n.then(t).catch(a)):t(n)}catch(e){a(e)}}))},(()=>{var e={693:0};v.f.j=(r,t)=>{var a=v.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^(220|260|966)$/.test(r))e[r]=0;else{var n=new Promise(((t,n)=>a=e[r]=[t,n]));t.push(a[2]=n);var o=v.p+v.u(r),i=new Error;v.l(o,(t=>{if(v.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,a[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var a,n,[o,i,d]=t,u=0;if(o.some((r=>0!==e[r]))){for(a in i)v.o(i,a)&&(v.m[a]=i[a]);d&&d(v)}for(r&&r(t);u<o.length;u++)n=o[u],v.o(e,n)&&e[n]&&e[n][0](),e[n]=0},t=self.webpackChunkbuilder=self.webpackChunkbuilder||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),v.nc=void 0;var m=v(851);WebsiteRemote=m})();
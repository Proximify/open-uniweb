(()=>{var e,r,t,a,n,o,f,d,u,i,l,c,s,b,p={7629:(e,r,t)=>{Promise.all([t.e(966),t.e(960)]).then(t.bind(t,1960))}},h={};function v(e){var r=h[e];if(void 0!==r)return r.exports;var t=h[e]={exports:{}};return p[e].call(t.exports,t,t.exports,v),t.exports}v.m=p,v.c=h,v.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return v.d(r,{a:r}),r},v.d=(e,r)=>{for(var t in r)v.o(r,t)&&!v.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},v.f={},v.e=e=>Promise.all(Object.keys(v.f).reduce(((r,t)=>(v.f[t](e,r),r)),[])),v.u=e=>"main."+{60:"77730822015bd800c5fb",104:"88cc362d3795fd2061ac",193:"9e613486e6cbd593aa7c",220:"b17f339292e9c76970ce",230:"3682332a2cd01f25cf43",458:"2c8ebe2180ca3a4882f4",462:"0bf08c27f0f9bb442c0b",478:"34729d0aec25a51834ce",497:"b6266865f7d621c6107d",617:"641999082463cdf3a196",649:"8ec05fc1ca9ce63c4400",714:"c7998c06a91ad79d9d12",721:"3b9aa8f6cd588dc7b70b",758:"9f57f8ebbd36b195e71f",817:"c55fe884441fce704b16",825:"7671b40c66f0f760a626",837:"b5e8e3f3e1cf0a9db2b9",862:"fa59b14d31da2f1421d2",887:"5cf7519b7c9257352b40",918:"a9f3b4c6f212e8a46de5",960:"1431ce9573a454dc37fc",966:"0becac0071a9381e0243",985:"c00e98761024e475e5a7"}[e]+".js",v.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="builder:",v.l=(t,a,n,o)=>{if(e[t])e[t].push(a);else{var f,d;if(void 0!==n)for(var u=document.getElementsByTagName("script"),i=0;i<u.length;i++){var l=u[i];if(l.getAttribute("src")==t||l.getAttribute("data-webpack")==r+n){f=l;break}}f||(d=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,v.nc&&f.setAttribute("nonce",v.nc),f.setAttribute("data-webpack",r+n),f.src=t),e[t]=[a];var c=(r,a)=>{f.onerror=f.onload=null,clearTimeout(s);var n=e[t];if(delete e[t],f.parentNode&&f.parentNode.removeChild(f),n&&n.forEach((e=>e(a))),r)return r(a)},s=setTimeout(c.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=c.bind(null,f.onerror),f.onload=c.bind(null,f.onload),d&&document.head.appendChild(f)}},v.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{v.S={};var e={},r={};v.I=(t,a)=>{a||(a=[]);var n=r[t];if(n||(n=r[t]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[t])return e[t];v.o(v.S,t)||(v.S[t]={});var o=v.S[t],f="builder",d=(e,r,t,a)=>{var n=o[e]=o[e]||{},d=n[r];(!d||!d.loaded&&(!a!=!d.eager?a:f>d.from))&&(n[r]={get:t,from:f,eager:!!a})},u=[];return"default"===t&&(d("@twind/react","0.0.4",(()=>Promise.all([v.e(220),v.e(966),v.e(478)]).then((()=>()=>v(9478))))),d("react-dom","18.2.0",(()=>Promise.all([v.e(462),v.e(966)]).then((()=>()=>v(4462))))),d("react-router-dom","6.4.5",(()=>Promise.all([v.e(825),v.e(966)]).then((()=>()=>v(5825))))),d("react-router-dom","6.5.0",(()=>Promise.all([v.e(617),v.e(966)]).then((()=>()=>v(7617))))),d("react","18.2.0",(()=>v.e(721).then((()=>()=>v(5721))))),d("twind","0.16.19",(()=>v.e(985).then((()=>()=>v(3985)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),v.p="https://proximify.github.io/open-uniweb/ProximifyWebsite/4290fde0-0006-4110-a9fd-47c33db3397d/",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=t[1]?r(t[1]):[];return t[2]&&(a.length++,a.push.apply(a,r(t[2]))),t[3]&&(a.push([]),a.push.apply(a,r(t[3]))),a},a=(e,r)=>{e=t(e),r=t(r);for(var a=0;;){if(a>=e.length)return a<r.length&&"u"!=(typeof r[a])[0];var n=e[a],o=(typeof n)[0];if(a>=r.length)return"u"==o;var f=r[a],d=(typeof f)[0];if(o!=d)return"o"==o&&"n"==d||"s"==d||"u"==o;if("o"!=o&&"u"!=o&&n!=f)return n<f;a++}},n=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var a=1,o=1;o<e.length;o++)a--,t+="u"==(typeof(d=e[o]))[0]?"-":(a>0?".":"")+(a=2,d);return t}var f=[];for(o=1;o<e.length;o++){var d=e[o];f.push(0===d?"not("+u()+")":1===d?"("+u()+" || "+u()+")":2===d?f.pop()+" "+f.pop():n(d))}return u();function u(){return f.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var a=e[0],n=a<0;n&&(a=-a-1);for(var f=0,d=1,u=!0;;d++,f++){var i,l,c=d<e.length?(typeof e[d])[0]:"";if(f>=r.length||"o"==(l=(typeof(i=r[f]))[0]))return!u||("u"==c?d>a&&!n:""==c!=n);if("u"==l){if(!u||"u"!=c)return!1}else if(u)if(c==l)if(d<=a){if(i!=e[d])return!1}else{if(n?i>e[d]:i<e[d])return!1;i!=e[d]&&(u=!1)}else if("s"!=c&&"n"!=c){if(n||d<=a)return!1;u=!1,d--}else{if(d<=a||l<c!=n)return!1;u=!1}else"s"!=c&&"n"!=c&&(u=!1,d--)}}var s=[],b=s.pop.bind(s);for(f=1;f<e.length;f++){var p=e[f];s.push(1==p?b()|b():2==p?b()&b():p?o(p,r):!b())}return!!b()},f=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&a(e,r)?r:e),0)},d=(e,r,t,a)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+n(a)+")",u=(e,r,t,a)=>{var n=f(e,t);return o(a,n)||"undefined"!=typeof console&&console.warn&&console.warn(d(e,t,n,a)),i(e[t][n])},i=e=>(e.loaded=1,e.get()),l=(e=>function(r,t,a,n){var o=v.I(r);return o&&o.then?o.then(e.bind(e,r,v.S[r],t,a,n)):e(0,v.S[r],t,a,n)})(((e,r,t,a,n)=>r&&v.o(r,t)?u(r,0,t,a):n())),c={},s={8966:()=>l("default","react",[1,18,2,0],(()=>v.e(721).then((()=>()=>v(5721))))),8220:()=>l("default","twind",[2,0,16,17],(()=>v.e(985).then((()=>()=>v(3985))))),918:()=>l("default","@twind/react",[3,0,0,4],(()=>v.e(649).then((()=>()=>v(9478))))),8741:()=>l("default","react-router-dom",[1,6,4,2],(()=>v.e(825).then((()=>()=>v(5825))))),8826:()=>l("default","react-dom",[1,18,2,0],(()=>v.e(462).then((()=>()=>v(4462))))),8636:()=>l("default","react-router-dom",[1,6,4,2],(()=>v.e(617).then((()=>()=>v(7617)))))},b={60:[8826],193:[8636],220:[8220],887:[8741],918:[918],966:[8966]},v.f.consumes=(e,r)=>{v.o(b,e)&&b[e].forEach((e=>{if(v.o(c,e))return r.push(c[e]);var t=r=>{c[e]=0,v.m[e]=t=>{delete v.c[e],t.exports=r()}},a=r=>{delete c[e],v.m[e]=t=>{throw delete v.c[e],r}};try{var n=s[e]();n.then?r.push(c[e]=n.then(t).catch(a)):t(n)}catch(e){a(e)}}))},(()=>{var e={179:0};v.f.j=(r,t)=>{var a=v.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^(220|918|966)$/.test(r))e[r]=0;else{var n=new Promise(((t,n)=>a=e[r]=[t,n]));t.push(a[2]=n);var o=v.p+v.u(r),f=new Error;v.l(o,(t=>{if(v.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+r+" failed.\n("+n+": "+o+")",f.name="ChunkLoadError",f.type=n,f.request=o,a[1](f)}}),"chunk-"+r,r)}};var r=(r,t)=>{var a,n,[o,f,d]=t,u=0;if(o.some((r=>0!==e[r]))){for(a in f)v.o(f,a)&&(v.m[a]=f[a]);d&&d(v)}for(r&&r(t);u<o.length;u++)n=o[u],v.o(e,n)&&e[n]&&e[n][0](),e[n]=0},t=self.webpackChunkbuilder=self.webpackChunkbuilder||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),v(7629)})();
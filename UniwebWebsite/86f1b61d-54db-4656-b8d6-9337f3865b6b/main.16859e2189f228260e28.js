(()=>{var e,r,t,a,n,o,d,f,u,l,i,c,s,b,p={7629:(e,r,t)=>{Promise.all([t.e(966),t.e(827)]).then(t.bind(t,7827))}},h={};function v(e){var r=h[e];if(void 0!==r)return r.exports;var t=h[e]={exports:{}};return p[e].call(t.exports,t,t.exports,v),t.exports}v.m=p,v.c=h,v.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return v.d(r,{a:r}),r},v.d=(e,r)=>{for(var t in r)v.o(r,t)&&!v.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},v.f={},v.e=e=>Promise.all(Object.keys(v.f).reduce(((r,t)=>(v.f[t](e,r),r)),[])),v.u=e=>"main."+{81:"a6345113b690c7a0cea0",193:"242180632c1a38060a9b",220:"b17f339292e9c76970ce",232:"28183aaf1a4fe881bfaf",324:"9c2994653105ab102b85",421:"30816f0674d077437a5c",478:"34729d0aec25a51834ce",538:"10fcc87f4073f06adc5b",574:"f309153a83f2c145fd0a",606:"d05e5c6e9c435ec1facd",614:"e991668a57f263ba79a7",617:"641999082463cdf3a196",643:"30dfadf0691e09709a0c",649:"8ec05fc1ca9ce63c4400",681:"24a0e1abc9e7aa058615",713:"52f7ef69701e8d4d1a55",721:"3b9aa8f6cd588dc7b70b",780:"1cc04175a4690cda02ac",827:"450e85019aa245696c5a",887:"a0d72ca3563d2ebab69a",918:"a9f3b4c6f212e8a46de5",966:"0becac0071a9381e0243",985:"c00e98761024e475e5a7"}[e]+".js",v.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="builder:",v.l=(t,a,n,o)=>{if(e[t])e[t].push(a);else{var d,f;if(void 0!==n)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var i=u[l];if(i.getAttribute("src")==t||i.getAttribute("data-webpack")==r+n){d=i;break}}d||(f=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,v.nc&&d.setAttribute("nonce",v.nc),d.setAttribute("data-webpack",r+n),d.src=t),e[t]=[a];var c=(r,a)=>{d.onerror=d.onload=null,clearTimeout(s);var n=e[t];if(delete e[t],d.parentNode&&d.parentNode.removeChild(d),n&&n.forEach((e=>e(a))),r)return r(a)},s=setTimeout(c.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=c.bind(null,d.onerror),d.onload=c.bind(null,d.onload),f&&document.head.appendChild(d)}},v.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{v.S={};var e={},r={};v.I=(t,a)=>{a||(a=[]);var n=r[t];if(n||(n=r[t]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[t])return e[t];v.o(v.S,t)||(v.S[t]={});var o=v.S[t],d="builder",f=(e,r,t,a)=>{var n=o[e]=o[e]||{},f=n[r];(!f||!f.loaded&&(!a!=!f.eager?a:d>f.from))&&(n[r]={get:t,from:d,eager:!!a})},u=[];return"default"===t&&(f("@twind/react","0.0.4",(()=>Promise.all([v.e(220),v.e(966),v.e(478)]).then((()=>()=>v(9478))))),f("react-dom","18.2.0",(()=>Promise.all([v.e(780),v.e(966)]).then((()=>()=>v(5780))))),f("react-router-dom","6.4.5",(()=>Promise.all([v.e(643),v.e(966)]).then((()=>()=>v(3643))))),f("react-router-dom","6.5.0",(()=>Promise.all([v.e(617),v.e(966)]).then((()=>()=>v(7617))))),f("react","18.2.0",(()=>v.e(721).then((()=>()=>v(5721))))),f("twind","0.16.19",(()=>v.e(985).then((()=>()=>v(3985)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),v.p="https://uniweb-remote.pages.dev/UniwebWebsite/86f1b61d-54db-4656-b8d6-9337f3865b6b/",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=t[1]?r(t[1]):[];return t[2]&&(a.length++,a.push.apply(a,r(t[2]))),t[3]&&(a.push([]),a.push.apply(a,r(t[3]))),a},a=(e,r)=>{e=t(e),r=t(r);for(var a=0;;){if(a>=e.length)return a<r.length&&"u"!=(typeof r[a])[0];var n=e[a],o=(typeof n)[0];if(a>=r.length)return"u"==o;var d=r[a],f=(typeof d)[0];if(o!=f)return"o"==o&&"n"==f||"s"==f||"u"==o;if("o"!=o&&"u"!=o&&n!=d)return n<d;a++}},n=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var a=1,o=1;o<e.length;o++)a--,t+="u"==(typeof(f=e[o]))[0]?"-":(a>0?".":"")+(a=2,f);return t}var d=[];for(o=1;o<e.length;o++){var f=e[o];d.push(0===f?"not("+u()+")":1===f?"("+u()+" || "+u()+")":2===f?d.pop()+" "+d.pop():n(f))}return u();function u(){return d.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var a=e[0],n=a<0;n&&(a=-a-1);for(var d=0,f=1,u=!0;;f++,d++){var l,i,c=f<e.length?(typeof e[f])[0]:"";if(d>=r.length||"o"==(i=(typeof(l=r[d]))[0]))return!u||("u"==c?f>a&&!n:""==c!=n);if("u"==i){if(!u||"u"!=c)return!1}else if(u)if(c==i)if(f<=a){if(l!=e[f])return!1}else{if(n?l>e[f]:l<e[f])return!1;l!=e[f]&&(u=!1)}else if("s"!=c&&"n"!=c){if(n||f<=a)return!1;u=!1,f--}else{if(f<=a||i<c!=n)return!1;u=!1}else"s"!=c&&"n"!=c&&(u=!1,f--)}}var s=[],b=s.pop.bind(s);for(d=1;d<e.length;d++){var p=e[d];s.push(1==p?b()|b():2==p?b()&b():p?o(p,r):!b())}return!!b()},d=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&a(e,r)?r:e),0)},f=(e,r,t,a)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+n(a)+")",u=(e,r,t,a)=>{var n=d(e,t);return o(a,n)||"undefined"!=typeof console&&console.warn&&console.warn(f(e,t,n,a)),l(e[t][n])},l=e=>(e.loaded=1,e.get()),i=(e=>function(r,t,a,n){var o=v.I(r);return o&&o.then?o.then(e.bind(e,r,v.S[r],t,a,n)):e(0,v.S[r],t,a,n)})(((e,r,t,a,n)=>r&&v.o(r,t)?u(r,0,t,a):n())),c={},s={8966:()=>i("default","react",[1,18,2,0],(()=>v.e(721).then((()=>()=>v(5721))))),8220:()=>i("default","twind",[2,0,16,17],(()=>v.e(985).then((()=>()=>v(3985))))),918:()=>i("default","@twind/react",[3,0,0,4],(()=>v.e(649).then((()=>()=>v(9478))))),2260:()=>i("default","react-router-dom",[1,6,4,2],(()=>v.e(643).then((()=>()=>v(3643))))),5290:()=>i("default","react-dom",[1,18,2,0],(()=>v.e(780).then((()=>()=>v(5780))))),8636:()=>i("default","react-router-dom",[1,6,4,2],(()=>v.e(617).then((()=>()=>v(7617)))))},b={193:[8636],220:[8220],614:[5290],887:[2260],918:[918],966:[8966]},v.f.consumes=(e,r)=>{v.o(b,e)&&b[e].forEach((e=>{if(v.o(c,e))return r.push(c[e]);var t=r=>{c[e]=0,v.m[e]=t=>{delete v.c[e],t.exports=r()}},a=r=>{delete c[e],v.m[e]=t=>{throw delete v.c[e],r}};try{var n=s[e]();n.then?r.push(c[e]=n.then(t).catch(a)):t(n)}catch(e){a(e)}}))},(()=>{var e={179:0};v.f.j=(r,t)=>{var a=v.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^(220|918|966)$/.test(r))e[r]=0;else{var n=new Promise(((t,n)=>a=e[r]=[t,n]));t.push(a[2]=n);var o=v.p+v.u(r),d=new Error;v.l(o,(t=>{if(v.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+r+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,a[1](d)}}),"chunk-"+r,r)}};var r=(r,t)=>{var a,n,[o,d,f]=t,u=0;if(o.some((r=>0!==e[r]))){for(a in d)v.o(d,a)&&(v.m[a]=d[a]);f&&f(v)}for(r&&r(t);u<o.length;u++)n=o[u],v.o(e,n)&&e[n]&&e[n][0](),e[n]=0},t=self.webpackChunkbuilder=self.webpackChunkbuilder||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),v(7629)})();
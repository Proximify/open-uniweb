(()=>{var e,r,t,n,a,o,i,u,f,d,l,c,s,p,b={629:(e,r,t)=>{Promise.all([t.e(966),t.e(418)]).then(t.bind(t,418))}},h={};function v(e){var r=h[e];if(void 0!==r)return r.exports;var t=h[e]={id:e,exports:{}};return b[e](t,t.exports,v),t.exports}v.m=b,v.c=h,v.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return v.d(r,{a:r}),r},v.d=(e,r)=>{for(var t in r)v.o(r,t)&&!v.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},v.f={},v.e=e=>Promise.all(Object.keys(v.f).reduce(((r,t)=>(v.f[t](e,r),r)),[])),v.u=e=>"main."+{81:"0600c2f582d38e1f11c7",220:"b17f339292e9c76970ce",235:"db635b20462cf495921d",260:"621081cb7412fc56ef4f",418:"f50d94750785d432db44",432:"f03ca69cd4ee4e7546fc",478:"d1bc17b2442b9068b28a",605:"0aae8d2bb67b4c3641d0",606:"cec3b07d2d27359d33d9",643:"4a2d7d5c0ab6fdbc9831",649:"61eb6354c2cb079c34af",718:"8f0f45a541f6c86f55dc",721:"bbe0f3cf41d572ada9bf",756:"ec170e977e999ee53bc4",834:"c3620cac304e27cf9be9",867:"9b9072309ec4f6043899",966:"0becac0071a9381e0243",985:"e51e0574d4adf96183ff"}[e]+".js",v.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="builder:",v.l=(t,n,a,o)=>{if(e[t])e[t].push(n);else{var i,u;if(void 0!==a)for(var f=document.getElementsByTagName("script"),d=0;d<f.length;d++){var l=f[d];if(l.getAttribute("src")==t||l.getAttribute("data-webpack")==r+a){i=l;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,v.nc&&i.setAttribute("nonce",v.nc),i.setAttribute("data-webpack",r+a),i.src=t),e[t]=[n];var c=(r,n)=>{i.onerror=i.onload=null,clearTimeout(s);var a=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),r)return r(n)},s=setTimeout(c.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=c.bind(null,i.onerror),i.onload=c.bind(null,i.onload),u&&document.head.appendChild(i)}},v.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{v.S={};var e={},r={};v.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];v.o(v.S,t)||(v.S[t]={});var o=v.S[t],i="builder",u=(e,r,t,n)=>{var a=o[e]=o[e]||{},u=a[r];(!u||!u.loaded&&(!n!=!u.eager?n:i>u.from))&&(a[r]={get:t,from:i,eager:!!n})},f=[];return"default"===t&&(u("@twind/react","0.0.4",(()=>Promise.all([v.e(220),v.e(966),v.e(478)]).then((()=>()=>v(478))))),u("react-router-dom","6.4.5",(()=>Promise.all([v.e(643),v.e(966)]).then((()=>()=>v(643))))),u("react","18.2.0",(()=>v.e(721).then((()=>()=>v(721))))),u("twind","0.16.19",(()=>v.e(985).then((()=>()=>v(985)))))),e[t]=f.length?Promise.all(f).then((()=>e[t]=1)):1}}})(),v.p="https://proximify.github.io/open-uniweb/MarketingWebsite/89271235-e463-4e23-840a-eeffc3693b30/",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var a=e[n],o=(typeof a)[0];if(n>=r.length)return"u"==o;var i=r[n],u=(typeof i)[0];if(o!=u)return"o"==o&&"n"==u||"s"==u||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}},a=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,t+="u"==(typeof(u=e[o]))[0]?"-":(n>0?".":"")+(n=2,u);return t}var i=[];for(o=1;o<e.length;o++){var u=e[o];i.push(0===u?"not("+f()+")":1===u?"("+f()+" || "+f()+")":2===u?i.pop()+" "+i.pop():a(u))}return f();function f(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var n=e[0],a=n<0;a&&(n=-n-1);for(var i=0,u=1,f=!0;;u++,i++){var d,l,c=u<e.length?(typeof e[u])[0]:"";if(i>=r.length||"o"==(l=(typeof(d=r[i]))[0]))return!f||("u"==c?u>n&&!a:""==c!=a);if("u"==l){if(!f||"u"!=c)return!1}else if(f)if(c==l)if(u<=n){if(d!=e[u])return!1}else{if(a?d>e[u]:d<e[u])return!1;d!=e[u]&&(f=!1)}else if("s"!=c&&"n"!=c){if(a||u<=n)return!1;f=!1,u--}else{if(u<=n||l<c!=a)return!1;f=!1}else"s"!=c&&"n"!=c&&(f=!1,u--)}}var s=[],p=s.pop.bind(s);for(i=1;i<e.length;i++){var b=e[i];s.push(1==b?p()|p():2==b?p()&p():b?o(b,r):!p())}return!!p()},i=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},u=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+a(n)+")",f=(e,r,t,n)=>{var a=i(e,t);return o(n,a)||"undefined"!=typeof console&&console.warn&&console.warn(u(e,t,a,n)),d(e[t][a])},d=e=>(e.loaded=1,e.get()),l=(e=>function(r,t,n,a){var o=v.I(r);return o&&o.then?o.then(e.bind(e,r,v.S[r],t,n,a)):e(0,v.S[r],t,n,a)})(((e,r,t,n,a)=>r&&v.o(r,t)?f(r,0,t,n):a())),c={},s={966:()=>l("default","react",[1,18,2,0],(()=>v.e(721).then((()=>()=>v(721))))),220:()=>l("default","twind",[2,0,16,17],(()=>v.e(985).then((()=>()=>v(985))))),918:()=>l("default","@twind/react",[3,0,0,4],(()=>v.e(649).then((()=>()=>v(478))))),260:()=>l("default","react-router-dom",[1,6,4,2],(()=>v.e(643).then((()=>()=>v(643)))))},p={220:[220],260:[260],718:[918],966:[966]},v.f.consumes=(e,r)=>{v.o(p,e)&&p[e].forEach((e=>{if(v.o(c,e))return r.push(c[e]);var t=r=>{c[e]=0,v.m[e]=t=>{delete v.c[e],t.exports=r()}},n=r=>{delete c[e],v.m[e]=t=>{throw delete v.c[e],r}};try{var a=s[e]();a.then?r.push(c[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}))},(()=>{var e={179:0};v.f.j=(r,t)=>{var n=v.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(220|260|966)$/.test(r))e[r]=0;else{var a=new Promise(((t,a)=>n=e[r]=[t,a]));t.push(n[2]=a);var o=v.p+v.u(r),i=new Error;v.l(o,(t=>{if(v.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,a,[o,i,u]=t,f=0;if(o.some((r=>0!==e[r]))){for(n in i)v.o(i,n)&&(v.m[n]=i[n]);u&&u(v)}for(r&&r(t);f<o.length;f++)a=o[f],v.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=self.webpackChunkbuilder=self.webpackChunkbuilder||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),v.nc=void 0,v(629)})();
(()=>{var e,r,t,n,a,o,i,u,l,f,d,s,c,p,h={7629:(e,r,t)=>{Promise.all([t.e(114),t.e(966),t.e(677)]).then(t.bind(t,6258))}},v={};function b(e){var r=v[e];if(void 0!==r)return r.exports;var t=v[e]={id:e,loaded:!1,exports:{}};return h[e].call(t.exports,t,t.exports,b),t.loaded=!0,t.exports}b.m=h,b.c=v,b.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return b.d(r,{a:r}),r},b.d=(e,r)=>{for(var t in r)b.o(r,t)&&!b.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((r,t)=>(b.f[t](e,r),r)),[])),b.u=e=>"main."+{114:"b52b5e194ce2d1760879",157:"7de0c26766daabc64066",677:"cb9be2a30704b89fb429",721:"3b9aa8f6cd588dc7b70b",965:"eb40b85492ac489ecb55",966:"0becac0071a9381e0243"}[e]+".js",b.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="builder:",b.l=(t,n,a,o)=>{if(e[t])e[t].push(n);else{var i,u;if(void 0!==a)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var d=l[f];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+a){i=d;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,b.nc&&i.setAttribute("nonce",b.nc),i.setAttribute("data-webpack",r+a),i.src=t),e[t]=[n];var s=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var a=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),r)return r(n)},c=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),u&&document.head.appendChild(i)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{b.S={};var e={},r={};b.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];b.o(b.S,t)||(b.S[t]={});var o=b.S[t],i="builder",u=(e,r,t,n)=>{var a=o[e]=o[e]||{},u=a[r];(!u||!u.loaded&&(!n!=!u.eager?n:i>u.from))&&(a[r]={get:t,from:i,eager:!!n})},l=[];return"default"===t&&(u("react-dom","18.2.0",(()=>Promise.all([b.e(965),b.e(966)]).then((()=>()=>b(4965))))),u("react","18.2.0",(()=>b.e(157).then((()=>()=>b(8157))))),u("react","18.2.0",(()=>b.e(721).then((()=>()=>b(5721)))))),e[t]=l.length?Promise.all(l).then((()=>e[t]=1)):1}}})(),b.p="https://proximify.github.io/open-uniweb/TBS/0a0f030e-b85a-4171-8dee-aea099f5e544/",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var a=e[n],o=(typeof a)[0];if(n>=r.length)return"u"==o;var i=r[n],u=(typeof i)[0];if(o!=u)return"o"==o&&"n"==u||"s"==u||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}},a=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,t+="u"==(typeof(u=e[o]))[0]?"-":(n>0?".":"")+(n=2,u);return t}var i=[];for(o=1;o<e.length;o++){var u=e[o];i.push(0===u?"not("+l()+")":1===u?"("+l()+" || "+l()+")":2===u?i.pop()+" "+i.pop():a(u))}return l();function l(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var n=e[0],a=n<0;a&&(n=-n-1);for(var i=0,u=1,l=!0;;u++,i++){var f,d,s=u<e.length?(typeof e[u])[0]:"";if(i>=r.length||"o"==(d=(typeof(f=r[i]))[0]))return!l||("u"==s?u>n&&!a:""==s!=a);if("u"==d){if(!l||"u"!=s)return!1}else if(l)if(s==d)if(u<=n){if(f!=e[u])return!1}else{if(a?f>e[u]:f<e[u])return!1;f!=e[u]&&(l=!1)}else if("s"!=s&&"n"!=s){if(a||u<=n)return!1;l=!1,u--}else{if(u<=n||d<s!=a)return!1;l=!1}else"s"!=s&&"n"!=s&&(l=!1,u--)}}var c=[],p=c.pop.bind(c);for(i=1;i<e.length;i++){var h=e[i];c.push(1==h?p()|p():2==h?p()&p():h?o(h,r):!p())}return!!p()},i=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},u=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+a(n)+")",l=(e,r,t,n)=>{var a=i(e,t);return o(n,a)||"undefined"!=typeof console&&console.warn&&console.warn(u(e,t,a,n)),f(e[t][a])},f=e=>(e.loaded=1,e.get()),d=(e=>function(r,t,n,a){var o=b.I(r);return o&&o.then?o.then(e.bind(e,r,b.S[r],t,n,a)):e(0,b.S[r],t,n,a)})(((e,r,t,n,a)=>r&&b.o(r,t)?l(r,0,t,n):a())),s={},c={8966:()=>d("default","react",[1,18,2,0],(()=>b.e(721).then((()=>()=>b(5721))))),1281:()=>d("default","react-dom",[1,18,2,0],(()=>b.e(965).then((()=>()=>b(4965))))),3733:()=>d("default","react",[1,18,2,0],(()=>b.e(157).then((()=>()=>b(8157)))))},p={677:[1281,3733],966:[8966]},b.f.consumes=(e,r)=>{b.o(p,e)&&p[e].forEach((e=>{if(b.o(s,e))return r.push(s[e]);var t=r=>{s[e]=0,b.m[e]=t=>{delete b.c[e],t.exports=r()}},n=r=>{delete s[e],b.m[e]=t=>{throw delete b.c[e],r}};try{var a=c[e]();a.then?r.push(s[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}))},(()=>{var e={179:0};b.f.j=(r,t)=>{var n=b.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(966!=r){var a=new Promise(((t,a)=>n=e[r]=[t,a]));t.push(n[2]=a);var o=b.p+b.u(r),i=new Error;b.l(o,(t=>{if(b.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var n,a,[o,i,u]=t,l=0;if(o.some((r=>0!==e[r]))){for(n in i)b.o(i,n)&&(b.m[n]=i[n]);u&&u(b)}for(r&&r(t);l<o.length;l++)a=o[l],b.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=self.webpackChunkbuilder=self.webpackChunkbuilder||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),b.nc=void 0,b(7629)})();
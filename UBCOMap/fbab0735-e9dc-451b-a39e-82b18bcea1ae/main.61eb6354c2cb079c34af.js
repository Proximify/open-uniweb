"use strict";(self.webpackChunkbuilder=self.webpackChunkbuilder||[]).push([[649],{478:(e,t,r)=>{r.r(t),r.d(t,{styled:()=>s});var n=r(966),i=r(408),a=r(285),o={};for(const e in a)["default","styled"].indexOf(e)<0&&(o[e]=()=>a[e]);function s(e="div",{shouldForwardProp:t=i.Z,...r}={}){let o="function"==typeof this?this:a.tw,s=(0,a.style)(r),l=e=>t(e,i.Z),c=e=>Object.keys(e).filter(l).reduce(((t,r)=>("class"!=r&&(t[r]=e[r]),t)),{}),d=(0,n.forwardRef)((({as:t=e,...r},i)=>(0,n.createElement)(t,{..."string"==typeof t?c(r):r,ref:i,className:o(s("string"==typeof t?{...r,as:t}:r))})));return Object.defineProperties(d,Object.getOwnPropertyDescriptors(s))}r.d(t,o)},285:(e,t,r)=>{r.r(t),r.d(t,{style:()=>u});var n=r(220),i=r(372),a={};for(const e in i)["default","style"].indexOf(e)<0&&(a[e]=()=>i[e]);r.d(t,a);var o=(e,t)=>!!~e.indexOf(t),s=(e,t)=>{for(;"function"==typeof e;)e=e(t);return e},l=(e,t,r)=>t?Object.keys(t).reduce(((e,n)=>{const i=s(t[n],r);return((e,t)=>!o("@:&",e[0])&&(o("rg",(typeof t)[5])||Array.isArray(t)))(n,i)?e[(e=>e.replace(/[A-Z]/g,"-$&").toLowerCase())(n)]=i:e[n]="@"==n[0]&&o("figa",n[1])?(e[n]||[]).concat(i):l(e[n]||{},i,r),e}),e):e,c=("undefined"!=typeof CSS&&CSS.escape,(e,t)=>e.reduce(((e,r)=>("string"==typeof r&&(r=(0,n.apply)(r)),"function"==typeof r?l(e,s(r,t),t):r?l(e,r,t):e)),{})),d=(e,t)=>({["@"==e[0]?e:`@screen ${e}`]:"string"==typeof t?(0,n.apply)(t):t}),p=(e={},t)=>{const{base:r,variants:i={},defaults:a,matches:o=[]}=e,s=(0,n.hash)(JSON.stringify([null==t?void 0:t.className,r,i,a,o])),l=(t?t.className+" ":"")+s,p=(t||"")+"."+s;return Object.defineProperties((e=>{const{tw:s,css:p,class:u,className:f,...h}={...a,...e},g=[t&&t(h),{_:l+(f?" "+f:"")+(u?" "+u:"")},r];return Object.keys(i).forEach((e=>{const t=i[e],r=h[e];r===Object(r)?Object.keys(r).forEach((e=>{const n=t[r[e]];g.push("initial"==e?n:d(e,n))})):g.push(t[r])})),o.forEach((e=>{const t=g.push(e.use)-1;Object.keys(e).every((r=>{const n=h[r],i=String(e[r]);return n===Object(n)?(Object.keys(n).forEach((e=>{"initial"!=e&&i==String(n[e])&&g.push(d(e,g[t]))})),!0):"use"==r||i==String(n)}))||(g.length=t)})),g.push((0,n.apply)(s),p),(0,n.directive)(c,g)}),{toString:{value:()=>p},className:{value:l},selector:{value:p}})},u=(e,t)=>"function"==typeof e?p(t,e):p(e)},408:(e,t,r)=>{r.d(t,{Z:()=>i});var n=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;const i=function(e){var t=Object.create(null);return function(e){return void 0===t[e]&&(t[e]=(r=e,n.test(r)||111===r.charCodeAt(0)&&110===r.charCodeAt(1)&&r.charCodeAt(2)<91)),t[e];var r}}()}}]);
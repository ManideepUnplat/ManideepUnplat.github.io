(()=>{"use strict";var e,r,t,n,o,a,s={805:(e,r,t)=>{Promise.all([t.e("vendors-node_modules_foundation-base_icon_dist_index_modern_js-node_modules_foundation-base_t-015a5d"),t.e("webpack_sharing_consume_default_react_react"),t.e("Bootstrap_tsx-node_modules_office-js_sync_recursive")]).then(t.bind(t,913))}},i={};function d(e){var r=i[e];if(void 0!==r)return r.exports;var t=i[e]={exports:{}};return s[e].call(t.exports,t,t.exports,d),t.exports}d.m=s,d.c=i,d.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return d.d(r,{a:r}),r},d.d=(e,r)=>{for(var t in r)d.o(r,t)&&!d.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((r,t)=>(d.f[t](e,r),r)),[])),d.u=e=>({"vendors-node_modules_foundation-base_icon_dist_index_modern_js-node_modules_foundation-base_t-015a5d":"bd4c4f838cf242c27bb4",webpack_sharing_consume_default_react_react:"35a15349d4398ec7ae04","Bootstrap_tsx-node_modules_office-js_sync_recursive":"5e63ed38ac09c9e5acdc","vendors-node_modules_react-dom_index_js":"8af0ff9aa96e7c75a61d",node_modules_react_index_js:"6b6d62082162a2cc24b5"}[e]+".tde.js"),d.miniCssF=e=>"70d632d1447df0653041.tde.css",d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="tde:",d.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var s,i;if(void 0!==o)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var c=u[l];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==r+o){s=c;break}}s||(i=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,d.nc&&s.setAttribute("nonce",d.nc),s.setAttribute("data-webpack",r+o),s.src=t),e[t]=[n];var f=(r,n)=>{s.onerror=s.onload=null,clearTimeout(p);var o=e[t];if(delete e[t],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(n))),r)return r(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),i&&document.head.appendChild(s)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t={},n={},d.f.remotes=(e,r)=>{d.o(t,e)&&t[e].forEach((e=>{var t=d.R;t||(t=[]);var o=n[e];if(!(t.indexOf(o)>=0)){if(t.push(o),o.p)return r.push(o.p);var a=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+o[1]+'" from '+o[2]),d.m[e]=()=>{throw r},o.p=0},s=(e,t,n,s,i,d)=>{try{var u=e(t,n);if(!u||!u.then)return i(u,s,d);var l=u.then((e=>i(e,s)),a);if(!d)return l;r.push(o.p=l)}catch(e){a(e)}},i=(e,r,n)=>s(r.get,o[1],t,0,u,n),u=r=>{o.p=1,d.m[e]=e=>{e.exports=r()}};s(d,o[2],0,0,((e,r,t)=>e?s(d.I,o[0],0,e,i,t):a()),1)}}))},(()=>{d.S={};var e={},r={};d.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];d.o(d.S,t)||(d.S[t]={});var a=d.S[t],s=(e,r,t,n)=>{var o=a[e]=a[e]||{},s=o[r];(!s||!s.loaded&&(!n!=!s.eager?n:"tde">s.from))&&(o[r]={get:t,from:"tde",eager:!!n})},i=[];if("default"===t)s("react-dom","16.14.0",(()=>Promise.all([d.e("vendors-node_modules_react-dom_index_js"),d.e("webpack_sharing_consume_default_react_react")]).then((()=>()=>d(935))))),s("react","16.14.0",(()=>d.e("node_modules_react_index_js").then((()=>()=>d(294)))));return i.length?e[t]=Promise.all(i).then((()=>e[t]=1)):e[t]=1}}})(),(()=>{var e;d.g.importScripts&&(e=d.g.location+"");var r=d.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),d.p=e})(),(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=(r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=r[n],a=(typeof o)[0];if(n>=t.length)return"u"==a;var s=t[n],i=(typeof s)[0];if(a!=i)return"o"==a&&"n"==i||"s"==i||"u"==a;if("o"!=a&&"u"!=a&&o!=s)return o<s;n++}},t=e=>{var r=e[0],n="";if(1===e.length)return"*";if(r+.5){n+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var o=1,a=1;a<e.length;a++)o--,n+="u"==(typeof(i=e[a]))[0]?"-":(o>0?".":"")+(o=2,i);return n}var s=[];for(a=1;a<e.length;a++){var i=e[a];s.push(0===i?"not("+d()+")":1===i?"("+d()+" || "+d()+")":2===i?s.pop()+" "+s.pop():t(i))}return d();function d(){return s.pop().replace(/^\((.+)\)$/,"$1")}},n=(r,t)=>{if(0 in r){t=e(t);var o=r[0],a=o<0;a&&(o=-o-1);for(var s=0,i=1,d=!0;;i++,s++){var u,l,c=i<r.length?(typeof r[i])[0]:"";if(s>=t.length||"o"==(l=(typeof(u=t[s]))[0]))return!d||("u"==c?i>o&&!a:""==c!=a);if("u"==l){if(!d||"u"!=c)return!1}else if(d)if(c==l)if(i<=o){if(u!=r[i])return!1}else{if(a?u>r[i]:u<r[i])return!1;u!=r[i]&&(d=!1)}else if("s"!=c&&"n"!=c){if(a||i<=o)return!1;d=!1,i--}else{if(i<=o||l<c!=a)return!1;d=!1}else"s"!=c&&"n"!=c&&(d=!1,i--)}}var f=[],p=f.pop.bind(f);for(s=1;s<r.length;s++){var _=r[s];f.push(1==_?p()|p():2==_?p()&p():_?n(_,t):!p())}return!!p()},o=(e,t)=>{var n=e[t];return Object.keys(n).reduce(((e,t)=>!e||!n[e].loaded&&r(e,t)?t:e),0)},a=(e,r,n,o)=>"Unsatisfied version "+n+" from "+(n&&e[r][n].from)+" of shared singleton module "+r+" (required "+t(o)+")",s=(e,r,t,s)=>{var d=o(e,t);return n(s,d)||"undefined"!=typeof console&&console.warn&&console.warn(a(e,t,d,s)),i(e[t][d])},i=e=>(e.loaded=1,e.get()),u=e=>function(r,t,n,o){var a=d.I(r);return a&&a.then?a.then(e.bind(e,r,d.S[r],t,n,o)):e(r,d.S[r],t,n,o)},l=u(((e,r,t,n,o)=>r&&d.o(r,t)?s(r,0,t,n):o())),c={},f={771:()=>l("default","react",[1,"latest"],(()=>d.e("node_modules_react_index_js").then((()=>()=>d(294))))),62:()=>l("default","react-dom",[1,"latest"],(()=>d.e("vendors-node_modules_react-dom_index_js").then((()=>()=>d(935)))))},p={webpack_sharing_consume_default_react_react:[771],"Bootstrap_tsx-node_modules_office-js_sync_recursive":[62]};d.f.consumes=(e,r)=>{d.o(p,e)&&p[e].forEach((e=>{if(d.o(c,e))return r.push(c[e]);var t=r=>{c[e]=0,d.m[e]=t=>{delete d.c[e],t.exports=r()}},n=r=>{delete c[e],d.m[e]=t=>{throw delete d.c[e],r}};try{var o=f[e]();o.then?r.push(c[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))}})(),o=e=>new Promise(((r,t)=>{var n=d.miniCssF(e),o=d.p+n;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var o=(s=t[n]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(o===e||o===r))return s}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var s;if((o=(s=a[n]).getAttribute("data-href"))===e||o===r)return s}})(n,o))return r();((e,r,t,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=a=>{if(o.onerror=o.onload=null,"load"===a.type)t();else{var s=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||r,d=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=s,d.request=i,o.parentNode.removeChild(o),n(d)}},o.href=r;var a=document.querySelector("#root");a.parentNode.insertBefore(o,a.nextSibling)})(e,o,r,t)})),a={index:0},d.f.miniCss=(e,r)=>{a[e]?r.push(a[e]):0!==a[e]&&{"Bootstrap_tsx-node_modules_office-js_sync_recursive":1}[e]&&r.push(a[e]=o(e).then((()=>{a[e]=0}),(r=>{throw delete a[e],r})))},(()=>{var e={index:0};d.f.j=(r,t)=>{var n=d.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if("webpack_sharing_consume_default_react_react"!=r){var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=d.p+d.u(r),s=new Error;d.l(a,(t=>{if(d.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,n[1](s)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var n,o,[a,s,i]=t,u=0;if(a.some((r=>0!==e[r]))){for(n in s)d.o(s,n)&&(d.m[n]=s[n]);if(i)i(d)}for(r&&r(t);u<a.length;u++)o=a[u],d.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunktde=self.webpackChunktde||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),d.nc=void 0;d(805)})();
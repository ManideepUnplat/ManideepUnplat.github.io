(()=>{"use strict";var e,t,r,o,n,i,a={},s={};function d(e){var t=s[e];if(void 0!==t)return t.exports;var r=s[e]={exports:{}};return a[e].call(r.exports,r,r.exports,d),r.exports}d.m=a,d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"==typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"==typeof r.then)return r}var n=Object.create(null);d.r(n);var i={};e=e||[null,t({}),t([]),t(t)];for(var a=2&o&&r;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((e=>i[e]=()=>r[e]));return i.default=()=>r,d.d(n,i),n},d.d=(e,t)=>{for(var r in t)d.o(t,r)&&!d.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((t,r)=>(d.f[r](e,t),t)),[])),d.u=e=>({"vendors-node_modules_foundation-base_icon_dist_index_modern_js-node_modules_foundation-base_t-015a5d":"a3adde37122519286ef0","Bootstrap_tsx-node_modules_office-js_sync_recursive":"bae8298d52f81fb5202d"}[e]+".tde.js"),d.miniCssF=e=>"957819f28a8e82bdf686.tde.css",d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},o="tde:",d.l=(e,t,n,i)=>{if(r[e])r[e].push(t);else{var a,s;if(void 0!==n)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var c=l[u];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")==o+n){a=c;break}}a||(s=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,d.nc&&a.setAttribute("nonce",d.nc),a.setAttribute("data-webpack",o+n),a.src=e),r[e]=[t];var f=(t,o)=>{a.onerror=a.onload=null,clearTimeout(p);var n=r[e];if(delete r[e],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((e=>e(o))),t)return t(o)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),s&&document.head.appendChild(a)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;d.g.importScripts&&(e=d.g.location+"");var t=d.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),d.p=e})(),n=e=>new Promise(((t,r)=>{var o=d.miniCssF(e),n=d.p+o;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=(a=r[o]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(n===e||n===t))return a}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){var a;if((n=(a=i[o]).getAttribute("data-href"))===e||n===t)return a}})(o,n))return t();((e,t,r,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=i=>{if(n.onerror=n.onload=null,"load"===i.type)r();else{var a=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=a,d.request=s,n.parentNode.removeChild(n),o(d)}},n.href=t;var i=document.querySelector("#root");i.parentNode.insertBefore(n,i.nextSibling)})(e,n,t,r)})),i={index:0},d.f.miniCss=(e,t)=>{i[e]?t.push(i[e]):0!==i[e]&&{"Bootstrap_tsx-node_modules_office-js_sync_recursive":1}[e]&&t.push(i[e]=n(e).then((()=>{i[e]=0}),(t=>{throw delete i[e],t})))},(()=>{var e={index:0};d.f.j=(t,r)=>{var o=d.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var n=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=n);var i=d.p+d.u(t),a=new Error;d.l(i,(r=>{if(d.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",a.name="ChunkLoadError",a.type=n,a.request=i,o[1](a)}}),"chunk-"+t,t)}};var t=(t,r)=>{var o,n,[i,a,s]=r,l=0;if(i.some((t=>0!==e[t]))){for(o in a)d.o(a,o)&&(d.m[o]=a[o]);if(s)s(d)}for(t&&t(r);l<i.length;l++)n=i[l],d.o(e,n)&&e[n]&&e[n][0](),e[n]=0},r=self.webpackChunktde=self.webpackChunktde||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),d.nc=void 0,Promise.all([d.e("vendors-node_modules_foundation-base_icon_dist_index_modern_js-node_modules_foundation-base_t-015a5d"),d.e("Bootstrap_tsx-node_modules_office-js_sync_recursive")]).then(d.bind(d,641))})();
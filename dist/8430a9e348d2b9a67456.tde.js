(()=>{"use strict";var e,t,r,o,n,a,i={},s={};function d(e){var t=s[e];if(void 0!==t)return t.exports;var r=s[e]={exports:{}};return i[e].call(r.exports,r,r.exports,d),r.exports}d.m=i,d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"==typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"==typeof r.then)return r}var n=Object.create(null);d.r(n);var a={};e=e||[null,t({}),t([]),t(t)];for(var i=2&o&&r;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((e=>a[e]=()=>r[e]));return a.default=()=>r,d.d(n,a),n},d.d=(e,t)=>{for(var r in t)d.o(t,r)&&!d.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((t,r)=>(d.f[r](e,t),t)),[])),d.u=e=>({"vendors-node_modules_foundation-base_icon_dist_index_modern_js-node_modules_foundation-base_t-015a5d":"a3adde37122519286ef0","Bootstrap_tsx-node_modules_office-js_sync_recursive":"d8e51a956209929a3f42"}[e]+".tde.js"),d.miniCssF=e=>"a02616e37b87a34de7ae.tde.css",d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},o="tde:",d.l=(e,t,n,a)=>{if(r[e])r[e].push(t);else{var i,s;if(void 0!==n)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var c=l[u];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")==o+n){i=c;break}}i||(s=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.setAttribute("data-webpack",o+n),i.src=e),r[e]=[t];var f=(t,o)=>{i.onerror=i.onload=null,clearTimeout(p);var n=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(o))),t)return t(o)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),s&&document.head.appendChild(i)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;d.g.importScripts&&(e=d.g.location+"");var t=d.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),d.p=e})(),n=e=>new Promise(((t,r)=>{var o=d.miniCssF(e),n=d.p+o;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=(i=r[o]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(n===e||n===t))return i}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){var i;if((n=(i=a[o]).getAttribute("data-href"))===e||n===t)return i}})(o,n))return t();((e,t,r,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=a=>{if(n.onerror=n.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=i,d.request=s,n.parentNode.removeChild(n),o(d)}},n.href=t;var a=document.querySelector("#root");a.parentNode.insertBefore(n,a.nextSibling)})(e,n,t,r)})),a={index:0},d.f.miniCss=(e,t)=>{a[e]?t.push(a[e]):0!==a[e]&&{"Bootstrap_tsx-node_modules_office-js_sync_recursive":1}[e]&&t.push(a[e]=n(e).then((()=>{a[e]=0}),(t=>{throw delete a[e],t})))},(()=>{var e={index:0};d.f.j=(t,r)=>{var o=d.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var n=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=n);var a=d.p+d.u(t),i=new Error;d.l(a,(r=>{if(d.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,o[1](i)}}),"chunk-"+t,t)}};var t=(t,r)=>{var o,n,[a,i,s]=r,l=0;if(a.some((t=>0!==e[t]))){for(o in i)d.o(i,o)&&(d.m[o]=i[o]);if(s)s(d)}for(t&&t(r);l<a.length;l++)n=a[l],d.o(e,n)&&e[n]&&e[n][0](),e[n]=0},r=self.webpackChunktde=self.webpackChunktde||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),d.nc=void 0,Promise.all([d.e("vendors-node_modules_foundation-base_icon_dist_index_modern_js-node_modules_foundation-base_t-015a5d"),d.e("Bootstrap_tsx-node_modules_office-js_sync_recursive")]).then(d.bind(d,989))})();
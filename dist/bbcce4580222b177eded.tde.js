/*! For license information please see bbcce4580222b177eded.tde.js.LICENSE.txt */
(self.webpackChunktde=self.webpackChunktde||[]).push([["Bootstrap_tsx-node_modules_office-js_sync_recursive"],{913:(e,t,r)=>{"use strict";r.r(t);var n=r(294),o=r(935),a=r(22),c=r(788),l=r(151),i=r(857),s=r(168),u=(r(500),"TODO/GET_PROJECTS"),f="TODO/POST_PROJECTS";function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==m(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===m(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const h={todo:(0,s.Lq)({},(function(e){e.addCase(u,(function(e,t){return t.payload.data?d(d({},e),{},{todos:t.payload.data}):d(d({},e),{},{error:t.payload.message})})),e.addCase(f,(function(e,t){return t.payload.data?d({},e):d(d({},e),{},{error:t.payload.message})}))}))};function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==v(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===v(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var w=(0,i.UY)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},h)),C=(0,s.xC)({reducer:w,middleware:function(e){return e({serializableCheck:!1})}}),g=r(372),E=r(484),N=r.n(E),O=r(741);function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,c,l=[],i=!0,s=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{if(!i&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(s)throw o}}return l}}(e,t)||L(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e){return function(e){if(Array.isArray(e))return M(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||L(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){if(e){if("string"==typeof e)return M(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?M(e,t):void 0}}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var P=function(e){var t=N()(e.selectedDate),r=e.startDate.daysInMonth(),o=e.startDate,a=e.startDate.add(r-1,"day");return n.createElement("div",{className:"grid grid-cols-7 justify-items-center"},n.createElement("div",{className:"h-6 w-6 text-[#5655C6] font-bold flex justify-center items-center"},"S"),n.createElement("div",{className:"h-6 w-6 text-[#5655C6] font-bold flex justify-center items-center"},"M"),n.createElement("div",{className:"h-6 w-6 text-[#5655C6] font-bold flex justify-center items-center"},"T"),n.createElement("div",{className:"h-6 w-6 text-[#5655C6] font-bold flex justify-center items-center"},"W"),n.createElement("div",{className:"h-6 w-6 text-[#5655C6] font-bold flex justify-center items-center"},"T"),n.createElement("div",{className:"h-6 w-6 text-[#5655C6] font-bold flex justify-center items-center"},"F"),n.createElement("div",{className:"h-6 w-6 text-[#5655C6] font-bold flex justify-center items-center"},"S"),S(Array(o.day()).keys()).reverse().map((function(e){return n.createElement("button",{className:"h-6 w-6 text-neutral-300 pointer-events-none"},o.subtract(e+1,"day").date())})),S(Array(r).keys()).map((function(r){return n.createElement("button",{className:"h-6 w-6 rounded-full text-[#5655C6] ".concat(o.add(r,"day").format("DD-MM-YY")===t.format("DD-MM-YY")?"bg-[#5655C6] text-white":"hover:bg-[#5655C626]"),onClick:function(){return e.onClick(o.add(r,"day").toISOString())}},r+1)})),S(Array(6-a.day()).keys()).map((function(e){return n.createElement("button",{className:"h-6 w-6 text-neutral-300 pointer-events-none"},a.add(e+1,"day").date())})))};const k=function(e){var t=j((0,n.useState)(N()(e.selectedDate).date(1)),2),r=t[0],o=t[1];return n.createElement("div",{className:"text-sm p-3 w-[220px] bg-white flex flex-col gap-3 rounded-lg shadow-[0_6px_12px_rgba(0,0,0,0.25)]"},n.createElement("div",{className:"flex justify-between items-center"},n.createElement("h2",{className:"ml-3 font-bold text-[#5655C5]"},r.format("MMMM YYYY")),n.createElement("div",{className:"flex gap-2"},n.createElement("button",{className:"p-3 transition-all cursor-pointer rounded-full flex items-center justify-center rotate-90 hover:border-[#5655C6] hover:bg-[#5655C626]",onClick:function(){return o(r.subtract(1,"month"))}},n.createElement(O.Z,{width:"12px",height:"12px",graphics:"caretDown",color:"#5655C6"})),n.createElement("button",{className:"p-3 transition-all cursor-pointer rounded-full flex items-center justify-center -rotate-90 hover:border-[#5655C6] hover:bg-[#5655C626]",onClick:function(){return o(r.add(1,"month"))}},n.createElement(O.Z,{width:"12px",height:"12px",graphics:"caretDown",color:"#5655C6"})))),n.createElement(P,{selectedDate:e.selectedDate,startDate:r,onClick:e.onClick}))};const A=function(e){return n.createElement("svg",{className:e.className,width:"18",height:"20",viewBox:"0 0 18 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M9 12C8.71667 12 8.47933 11.904 8.288 11.712C8.096 11.5207 8 11.2833 8 11C8 10.7167 8.096 10.479 8.288 10.287C8.47933 10.0957 8.71667 10 9 10C9.28333 10 9.521 10.0957 9.713 10.287C9.90433 10.479 10 10.7167 10 11C10 11.2833 9.90433 11.5207 9.713 11.712C9.521 11.904 9.28333 12 9 12ZM5 12C4.71667 12 4.479 11.904 4.287 11.712C4.09567 11.5207 4 11.2833 4 11C4 10.7167 4.09567 10.479 4.287 10.287C4.479 10.0957 4.71667 10 5 10C5.28333 10 5.521 10.0957 5.713 10.287C5.90433 10.479 6 10.7167 6 11C6 11.2833 5.90433 11.5207 5.713 11.712C5.521 11.904 5.28333 12 5 12ZM13 12C12.7167 12 12.4793 11.904 12.288 11.712C12.096 11.5207 12 11.2833 12 11C12 10.7167 12.096 10.479 12.288 10.287C12.4793 10.0957 12.7167 10 13 10C13.2833 10 13.5207 10.0957 13.712 10.287C13.904 10.479 14 10.7167 14 11C14 11.2833 13.904 11.5207 13.712 11.712C13.5207 11.904 13.2833 12 13 12ZM9 16C8.71667 16 8.47933 15.904 8.288 15.712C8.096 15.5207 8 15.2833 8 15C8 14.7167 8.096 14.4793 8.288 14.288C8.47933 14.096 8.71667 14 9 14C9.28333 14 9.521 14.096 9.713 14.288C9.90433 14.4793 10 14.7167 10 15C10 15.2833 9.90433 15.5207 9.713 15.712C9.521 15.904 9.28333 16 9 16ZM5 16C4.71667 16 4.479 15.904 4.287 15.712C4.09567 15.5207 4 15.2833 4 15C4 14.7167 4.09567 14.4793 4.287 14.288C4.479 14.096 4.71667 14 5 14C5.28333 14 5.521 14.096 5.713 14.288C5.90433 14.4793 6 14.7167 6 15C6 15.2833 5.90433 15.5207 5.713 15.712C5.521 15.904 5.28333 16 5 16ZM13 16C12.7167 16 12.4793 15.904 12.288 15.712C12.096 15.5207 12 15.2833 12 15C12 14.7167 12.096 14.4793 12.288 14.288C12.4793 14.096 12.7167 14 13 14C13.2833 14 13.5207 14.096 13.712 14.288C13.904 14.4793 14 14.7167 14 15C14 15.2833 13.904 15.5207 13.712 15.712C13.5207 15.904 13.2833 16 13 16ZM2 20C1.45 20 0.979 19.8043 0.587 19.413C0.195667 19.021 0 18.55 0 18V4C0 3.45 0.195667 2.97933 0.587 2.588C0.979 2.196 1.45 2 2 2H3V0H5V2H13V0H15V2H16C16.55 2 17.021 2.196 17.413 2.588C17.8043 2.97933 18 3.45 18 4V18C18 18.55 17.8043 19.021 17.413 19.413C17.021 19.8043 16.55 20 16 20H2ZM2 18H16V8H2V18Z",fill:"#7B7D85"}))};const F=function(e){var t,r={size:{sm:"px-6 py-1 text-xs",md:"px-8 py-2 text-sm",lg:"px-10 py-3 text-md",xl:"px-12 py-4 text-lg"},button:"font-semibold transition border border-[#5655c6] ".concat(e.isRounded?"rounded-full":"rounded-lg"," ").concat(e.isPrimary?"bg-[#5655c6] text-white hover:text-[#5655C6] hover:bg-[#E6E6f7]":"bg-white text-[#5655c6] hover:bg-[#E6E6f7]"," active:bg-transparent active:text-[#5655C6]")};return n.createElement("button",{className:"".concat(r.size[e.size]," ").concat(r.button," ").concat(null===(t=e.twAddonStyles)||void 0===t?void 0:t.button),type:"button",onClick:e.onClick},e.label)};var T=g.v9,D="token",H=function(){return e=D,(t=localStorage.getItem(e))?JSON.parse(t):null;var e,t};function Z(e){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z(e)}function V(){V=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function i(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(e){i=function(e,t,r){return e[t]=r}}function s(e,t,r,o){var a=t&&t.prototype instanceof m?t:m,c=Object.create(a.prototype),l=new O(o||[]);return n(c,"_invoke",{value:C(e,r,l)}),c}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var f={};function m(){}function p(){}function d(){}var y={};i(y,a,(function(){return this}));var h=Object.getPrototypeOf,v=h&&h(h(j([])));v&&v!==t&&r.call(v,a)&&(y=v);var x=d.prototype=m.prototype=Object.create(y);function b(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function o(n,a,c,l){var i=u(e[n],e,a);if("throw"!==i.type){var s=i.arg,f=s.value;return f&&"object"==Z(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){o("next",e,c,l)}),(function(e){o("throw",e,c,l)})):t.resolve(f).then((function(e){s.value=e,c(s)}),(function(e){return o("throw",e,c,l)}))}l(i.arg)}var a;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){o(e,r,t,n)}))}return a=a?a.then(n,n):n()}})}function C(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return S()}for(r.method=o,r.arg=a;;){var c=r.delegate;if(c){var l=g(c,r);if(l){if(l===f)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var i=u(e,t,r);if("normal"===i.type){if(n=r.done?"completed":"suspendedYield",i.arg===f)continue;return{value:i.arg,done:r.done}}"throw"===i.type&&(n="completed",r.method="throw",r.arg=i.arg)}}}function g(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,g(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=u(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,f;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function j(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=d,n(x,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=i(d,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,i(e,l,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},b(w.prototype),i(w.prototype,c,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var c=new w(s(t,r,n,o),a);return e.isGeneratorFunction(r)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},b(x),i(x,l,"Generator"),i(x,a,(function(){return this})),i(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return c.type="throw",c.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),i=r.call(a,"finallyLoc");if(l&&i){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var c=a?a.completion:{};return c.type=e,c.arg=t,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){Y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Y(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==Z(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==Z(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===Z(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function G(e,t,r,n,o,a,c){try{var l=e[a](c),i=l.value}catch(e){return void r(e)}l.done?t(i):Promise.resolve(i).then(n,o)}function R(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function c(e){G(a,n,o,c,l,"next",e)}function l(e){G(a,n,o,c,l,"throw",e)}c(void 0)}))}}const z=function(e,t,r){var n=e.url,o=e.method,a=e.body,c=e.actionType,l=e.additionalHeaders;return function(){var e=R(V().mark((function e(i){var s,u,f,m,p,d;return V().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=H(),u=null==s?void 0:s.accessToken,f=_({Accept:"application/json","Content-Type":"application/json"},l),u&&(f=_(_({},f),{},{"x-jwt":u})),m=function(e){i({type:c,payload:e}),t&&t(e)},p=function(e){i({type:c,payload:e}),r&&r(e)},d=function(){var e=R(V().mark((function e(){var t,r,c,l;return V().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(n,{method:o,body:a,headers:_({},f)});case 3:return t=e.sent,r=t.status,e.next=7,t.json();case 7:return c=e.sent,r&&r>399?p(c):m(c),e.abrupt("return",t);case 12:e.prev=12,e.t0=e.catch(0),l={error:{statusCode:"FETCH_FAILED",message:"".concat(e.t0)}},p(l);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),e.t0=c,e.next=10,d();case 10:return e.t1=e.sent,e.abrupt("return",{type:e.t0,payload:e.t1});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};var U="https://calpal.xyz/todo";function B(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,c,l=[],i=!0,s=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{if(!i&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(s)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return J(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return J(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const $=function(){var e,t=(0,g.I0)(),r=T((function(e){return e.todo})),o=B((0,n.useState)((new Date).toISOString()),2),a=o[0],c=o[1],l=B((0,n.useState)("select"),2),i=l[0],s=l[1],m=B((0,n.useState)("select"),2),p=m[0],d=m[1],y=B((0,n.useState)(""),2),h=y[0],v=y[1],x=B((0,n.useState)(!1),2),b=x[0],w=x[1];function C(){var e,r,n,o;"select"!=i&&"select"!=p&&""!=h&&t((e={userId:H().userId,todoTitle:h,projectId:i,priority:p,dueDate:a.split("T")[0]+" "+a.split("T")[1]},r=function(){c((new Date).toISOString()),s(""),d(""),v("")},o={url:"".concat(U,"/todos/add-todo"),method:"POST",body:JSON.stringify(e),actionType:f},z(o,r,n)))}return(0,n.useEffect)((function(){var e,r,n,o;t((e=H().userId,o={url:"".concat(U,"/project/get-all-projects/").concat(e),method:"GET",actionType:u},z(o,r,n)))}),[]),n.createElement("div",{className:"text-[#000000]"},n.createElement("p",{className:"block font-bold mt-6 text-md"},"ADD TO TODO"),n.createElement("div",{className:"border border-[black]"}),n.createElement("p",{className:"py-1 font-bold py-3 text-xs"},"Task Name"),n.createElement("input",{onChange:function(e){return v(e.target.value)},value:h,className:"text-xs w-full focus:outline-none",placeholder:"Your NYT Summary for the day"}),n.createElement("div",{className:"border"}),n.createElement("div",{className:"flex py-5 items-center justify-between"},n.createElement("p",{className:"text-xs"},"Due date"),n.createElement("div",{className:"relative"},n.createElement("div",{onClick:function(){return w(!b)},className:"w-[220px] border rounded p-2 flex flex-grow justify-end"},n.createElement(A,null)),b&&n.createElement("div",{className:"absolute"},n.createElement(k,{selectedDate:a,onClick:function(e){return c(e)}})))),n.createElement("div",{className:"flex justify-between"},n.createElement("div",null,n.createElement("p",{className:"py-1 text-xs"},"Project"),n.createElement("select",{value:i,className:"w-[130px] border text-xs",name:"project",id:"project",onChange:function(e){return s(e.target.value)}},n.createElement("option",{value:"select"},"Select"),null==r||null===(e=r.todos)||void 0===e?void 0:e.map((function(e,t){return n.createElement("option",{value:e.projectId,key:t},e.projectTitle)})))),n.createElement("div",null,n.createElement("p",{className:"py-1 text-xs"},"Priority"),n.createElement("select",{value:p,className:"w-[130px] border text-xs",name:"priority",id:"priority",onChange:function(e){return d(e.target.value)}},n.createElement("option",{value:"select"},"Select"),n.createElement("option",{value:"high"},"High"),n.createElement("option",{value:"medium"},"Medium"),n.createElement("option",{value:"low"},"Low")))),n.createElement("div",{className:"flex items-center justify-center mt-8"},n.createElement(F,{onClick:function(){return C()},twAddonStyles:{button:"mx-auto"},isPrimary:!0,label:"Add Task",size:"sm"})))};r(49);function W(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,c,l=[],i=!0,s=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{if(!i&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(s)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return q(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return q(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const K=function(){var e=W((0,n.useState)(""),2),t=(e[0],e[1],W((0,n.useState)(0),2)),r=t[0],o=t[1];return(0,n.useEffect)((function(){Office.onReady((function(e){e.host===Office.HostType.Outlook&&setInterval((function(){Office.context.mailbox.item&&Office.context.mailbox.item.body.getAsync("text",(function(e){""==e.value.trim().split(/\s+/)[0]?o(0):o(e.value.trim().split(/\s+/).length)}))}),500)}))}),[]),n.createElement("div",{className:"mt-12"},n.createElement("p",{className:"text-md font-bold"},"CURRENT EMAIL"),n.createElement("div",{className:"flex py-2 border-t-2 border-[black] font-bold"},n.createElement("p",{className:"w-[155px]"}),n.createElement("p",{className:"w-[48px]"}),n.createElement("p",{className:"w-[48px] text-center text-[#CFCFCF] text-xs"},"Average"),n.createElement("p",{className:"w-[48px] text-center text-[#CFCFCF] text-xs"},"Peers")),n.createElement("div",{className:"flex py-2"},n.createElement("p",{className:"w-[155px] font-bold text-xs"},"Current time writing email:"),n.createElement("p",{className:"w-[48px] font-bold text-center text-xs"},"3 min"),n.createElement("p",{className:"w-[48px] text-center text-[#CFCFCF] text-xs"},"6 min"),n.createElement("p",{className:"w-[48px] text-center text-[#CFCFCF] text-xs"},"6 min")),n.createElement("div",{className:"flex py-2"},n.createElement("p",{className:"w-[155px] font-bold text-xs"},"Email word count:"),n.createElement("p",{className:"w-[48px] font-bold text-center text-xs"},r),n.createElement("p",{className:"w-[48px] text-center text-[#CFCFCF] text-xs"},"280"),n.createElement("p",{className:"w-[48px] text-center text-[#CFCFCF] text-xs"},"280")))};const Q=function(){return n.createElement("div",{className:"mt-12"},n.createElement("p",{className:"text-md font-bold"},"EMAIL ANALYTICS"),n.createElement("div",{className:"flex py-2 border-t-2 border-[black] font-bold"},n.createElement("p",{className:"w-[208px]"}),n.createElement("p",{className:"w-[48px] text-center text-xs"},"Average"),n.createElement("p",{className:"w-[48px] text-center text-[#CFCFCF] text-xs"},"Peers")),n.createElement("div",{className:"flex py-2"},n.createElement("p",{className:"w-[208px] font-bold text-xs"},"Emails written per day:"),n.createElement("p",{className:"w-[48px] text-center text-xs"},"10"),n.createElement("p",{className:"w-[48px] text-center text-[#CFCFCF] text-xs"},"10")),n.createElement("div",{className:"flex py-2"},n.createElement("p",{className:"w-[208px] font-bold text-xs"},"Time spent writing per email:"),n.createElement("p",{className:"w-[48px] text-center text-xs"},"6 mins"),n.createElement("p",{className:"w-[48px] text-center text-[#CFCFCF] text-xs"},"6 mins")),n.createElement("div",{className:"flex py-2"},n.createElement("p",{className:"w-[208px] font-bold text-xs"},"Total time spent writing email per day:"),n.createElement("p",{className:"w-[48px] text-center text-xs"},"280"),n.createElement("p",{className:"w-[48px] text-center text-[#CFCFCF] text-xs"},"280")))};const X=function(){return n.createElement("div",null,n.createElement("div",{className:"bg-[#5655C6] py-6 pl-6 sticky top-0 z-50 flex justify-between items-center"},n.createElement("p",{className:"font-bold text-white text-md"},"TIME.DEV for Outlook"),n.createElement("div",{className:"p-3 cursor-pointer"},n.createElement("svg",{width:"28",height:"18",viewBox:"0 0 28 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M0.5 0H27.5V3H0.5V0ZM0.5 7.5H27.5V10.5H0.5V7.5ZM0.5 15H27.5V18H0.5V15Z",fill:"white"})))))};const ee=function(e){return n.createElement("svg",{className:e.className,width:"50",height:"50",viewBox:"0 0 52 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M47 0.333344H5C2.43334 0.333344 0.333336 2.43334 0.333336 5.00001V35.3333C0.333336 37.9 2.43334 40 5 40H47C49.5667 40 51.6667 37.9 51.6667 35.3333V5.00001C51.6667 2.43334 49.5667 0.333344 47 0.333344ZM14.3333 19V23.6667H9.66667V19H14.3333ZM9.66667 14.3333V9.66668H14.3333V14.3333H9.66667ZM23.6667 19V23.6667H19V19H23.6667ZM19 14.3333V9.66668H23.6667V14.3333H19ZM35.3333 28.3333V30.6667H16.6667V28.3333H35.3333ZM33 19V23.6667H28.3333V19H33ZM28.3333 14.3333V9.66668H33V14.3333H28.3333ZM37.6667 23.6667V19H42.3333V23.6667H37.6667ZM42.3333 14.3333H37.6667V9.66668H42.3333V14.3333Z",fill:"#5655C6"}))};const te=function(){return n.createElement("svg",{width:"50",height:"50",viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M10.5 16C4.7295 16 0 20.715 0 26.47C0 28.7 0.712 30.7725 1.9175 32.476L9.219 45.098C10.2415 46.434 10.9215 46.1805 11.772 45.028L19.825 31.323C19.9875 31.028 20.115 30.715 20.2265 30.395C20.7375 29.1495 21.0003 27.8162 21 26.47C21 20.715 16.272 16 10.5 16ZM10.5 20.906C13.608 20.906 16.08 23.3715 16.08 26.4705C16.08 29.5695 13.608 32.034 10.5 32.034C7.3925 32.034 4.92 29.569 4.92 26.4705C4.92 23.3715 7.3925 20.906 10.5 20.906Z",fill:"#5655C6"}),n.createElement("path",{d:"M43.875 0C40.509 0 37.75 2.7505 37.75 6.108C37.75 7.4085 38.165 8.6175 38.8685 9.611L43.128 16.974C43.7245 17.753 44.121 17.605 44.617 16.933L49.3145 8.938C49.4095 8.7665 49.484 8.584 49.5485 8.397C49.8467 7.67071 50.0001 6.89313 50 6.108C50 2.75 47.242 0 43.875 0ZM43.875 2.862C45.688 2.862 47.13 4.3 47.13 6.108C47.13 7.9155 45.688 9.353 43.875 9.353C42.0625 9.353 40.62 7.9155 40.62 6.108C40.62 4.3 42.0625 2.862 43.875 2.862Z",fill:"#5655C6"}),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M44.1045 18.706C42.981 18.731 41.8545 18.7785 40.726 18.862L40.9 21.628C41.984 21.5495 43.0699 21.499 44.1565 21.4765L44.1045 18.706ZM38.117 19.116C36.382 19.3315 34.632 19.6385 32.902 20.132L33.5535 22.8125C35.1255 22.3645 36.7545 22.075 38.409 21.8695L38.117 19.116ZM30.3115 21.06C29.7931 21.2888 29.2913 21.5533 28.8095 21.8515L28.8075 21.854L28.8045 21.855C28.117 22.288 27.3925 22.8375 26.801 23.636C26.3725 24.2145 26.022 24.946 25.94 25.811L28.4875 26.0935C28.5065 25.8905 28.6105 25.6225 28.7975 25.3705H28.7985V25.3695C29.1 24.9615 29.552 24.591 30.0895 24.252L30.0915 24.251C30.4746 24.0145 30.8736 23.8047 31.2855 23.623L30.3115 21.06ZM29 27.3275L27.3485 29.445C27.74 29.803 28.1505 30.078 28.547 30.308L28.552 30.3105L28.557 30.3135C29.873 31.062 31.23 31.4845 32.488 31.8855L33.211 29.2265C31.9535 28.8255 30.768 28.4385 29.752 27.8615C29.461 27.6925 29.206 27.516 29 27.3275ZM35.6675 29.9745L34.9615 32.638L35.2955 32.742L35.7055 32.873C37.0625 33.3145 38.3625 33.786 39.5245 34.4385L40.7035 31.9785C39.2985 31.189 37.84 30.673 36.4345 30.216L36.4305 30.215L36.0095 30.0805L35.6675 29.9745ZM43.101 33.8245L41.2895 35.7845C41.7175 36.248 42.038 36.8055 42.194 37.3815L42.195 37.3845L42.196 37.389C42.382 38.0615 42.3825 38.8525 42.237 39.6515L44.749 40.1875C44.954 39.0595 44.987 37.821 44.65 36.5985C44.3565 35.5175 43.7965 34.5785 43.101 33.8245ZM41.36 41.3215C41.0832 41.6139 40.7773 41.8772 40.447 42.1075H40.446C39.546 42.7405 38.502 43.2175 37.393 43.6275L38.22 46.2495C39.433 45.801 40.6785 45.251 41.8425 44.432L41.8455 44.4295L41.847 44.4285C42.325 44.0938 42.7672 43.7106 43.1665 43.285L41.36 41.3215ZM35.04 44.366C33.4335 44.798 31.7915 45.127 30.1295 45.406L30.5215 48.1455C32.232 47.858 33.9495 47.5145 35.6565 47.0555L35.04 44.366ZM27.629 45.784C25.956 46.0125 24.274 46.199 22.587 46.358L22.808 49.119C24.521 48.958 26.237 48.7685 27.9505 48.534L27.629 45.784ZM20.0515 46.5755C18.361 46.7095 16.6665 46.8185 14.9705 46.9105L15.0985 49.6785C16.811 49.586 18.525 49.4755 20.2385 49.3395L20.0515 46.5755ZM12.422 47.0355C11.4055 47.083 10.3865 47.122 9.365 47.158L9.449 49.9285C10.4769 49.8932 11.5046 49.8522 12.532 49.8055L12.422 47.0355Z",fill:"#5655C6"}),n.createElement("line",{x1:"18.5008",y1:"14.5855",x2:"35.5008",y2:"8.58552",stroke:"#5655C6",strokeWidth:"3"}))};const re=function(){return n.createElement("div",{className:"mt-12"},n.createElement("p",{className:"font-bold text-md"},"PERFORMANCE TOOLS"),n.createElement("div",{className:"flex py-2 border-t-2 border-[black] font-bold"},n.createElement("p",{className:"w-[208px]"}),n.createElement("p",{className:"w-[48px] text-center text-xs"},"You"),n.createElement("p",{className:"w-[48px] text-center text-[#CFCFCF] text-xs"},"Peers")),n.createElement("div",{className:"flex py-2"},n.createElement("p",{className:"w-[208px] font-bold text-xs"},"Average email typing speed:"),n.createElement("p",{className:"w-[48px] text-center text-xs"},"65 wpm"),n.createElement("p",{className:"w-[48px] text-center text-[#CFCFCF] text-xs"},"65 wpm")),n.createElement("div",{className:"flex justify-center items-center my-8"},n.createElement("div",{className:"flex flex-col items-center justify-center w-[200px]",onClick:function(){return window.location.href="https://timedotdevdevelopmentstudent.web.app/widgets/typing-tiger/practice"}},n.createElement(ee,null),n.createElement("p",{className:"font-bold text-xs"},"Practice typing")),n.createElement("div",{className:"flex flex-col items-center justify-center w-[200px]",onClick:function(){return window.location.href="https://timedotdevdevelopmentstudent.web.app/widgets/shortcut-shark/practice"}},n.createElement(te,null),n.createElement("p",{className:"font-bold text-xs"},"Practice Email Shortcuts"))))};const ne=function(){return n.createElement("div",{className:"w-[305px] border-r-2"},n.createElement(X,null),n.createElement("div",{className:"p-3"},n.createElement($,null),n.createElement(K,null),n.createElement(Q,null),n.createElement(re,null)))};function oe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,c,l=[],i=!0,s=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{if(!i&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(s)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ae(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ae(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const ce=function(e){var t=oe((0,n.useState)(l._),2),r=t[0];t[1];return r?n.createElement(a.VK,null,n.createElement(g.zt,{store:C},n.createElement(c.f6,{theme:r},n.createElement(ne,null)))):null};o.render(n.createElement(n.StrictMode,null,n.createElement(ce,null)),document.getElementById("root"))},486:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=486,e.exports=t}}]);
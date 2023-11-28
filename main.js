(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([t.id,"p, img, body{\n    margin: 0px;\n    padding: 0px;\n}\n\n.wrapper{\n    height: 100vh;\n    width: clamp( 300px, 100vw, 800px);  \n    display: grid;\n    grid-template-columns: 1fr;\n    grid-auto-rows: auto;\n    justify-content: center;   \n    align-content: start;\n    margin: 0px auto;\n    border-left: solid lightgrey 1px;\n    border-right: solid lightgray 1px;\n    position: relative;\n}\n\n.wrapper > *{\n    margin: 0px auto;\n    padding: 3px 10px;\n    box-sizing: border-box;\n}\n\nheader{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    border-bottom: solid lightgrey 1px;\n    padding: 5px 20px;\n}\n\n#tempUnit{\n    display: none;\n}\n\n#tempUnit+div{\n    border: 0px solid black;\n    background-color: rgb(48, 95, 112);\n    height: 40px;\n    width: 40px;\n    border-radius: 50%;\n    display: grid;\n    place-content: center;    \n}\n\n#tempUnit+div>label{\n    color: white;\n    font-weight: bolder;\n    letter-spacing: 2px;\n}\n\n.submit{\n    border-radius: 5px;\n}\n\n.mainContent{\n    width: 100%;\n}\n\n.forecastRow{\n    width: 100%;\n    display: flex;\n    box-sizing: border-box;\n    border-bottom: 1px solid lightgray;\n    border-top: 1px solid lightgray;\n    scale: 60%;\n    padding: 10px 0px;\n}\n\n.forecastRow > .container {\n    display: grid;\n    justify-items: center;\n    padding: 0px 20px;\n    flex: 1 1 0;\n}\n\n.forecastRow > .container:not(.container:first-child, .container:last-child){\n    border-left: 1px solid lightgray;\n    border-right: 1px solid lightgray;\n}\n\n.forecastRow>.container>p:first-child{\n    font-weight: bolder;\n}\n\n.forecastRow>.container > p:first-child::first-letter{\n    text-transform: uppercase;\n}\n\n\n.iconAndCond{\n    display:grid;\n    justify-items: center;\n}\n\n.forecastRow .iconAndCond > img{\n    margin-top:-8px;\n    margin-bottom: -15px;\n}\n\n.iconAndCond > p{\n    font-style: italic;\n}\n\n.current{\n    margin-top: 20px;\n    display: grid;\n}\n\n.locationP{\n    font-size: 40px;\n    font-weight: bold;\n}\n\n.timeP{\n    font-size: 16px;\n}\n\n.tempStuff{\n    display: flex;\n    justify-content: center;\n    margin:20px;\n    gap:10px;\n}\n\n.tempStuff>p{\n    font-size: 75px;\n}\n\n.current .iconAndCond{\n    margin-top: 5px;\n}\n\n.current .iconAndCond>img{\n    margin-bottom: -25px;\n}\n\n.current>img{\n    margin:20px auto;\n}\n\nfooter{\n    position: absolute;\n    bottom:0px;\n    display: flex;\n    justify-content: space-between;\n    min-width: 100%;\n    font-size: 8px;\n    border-top: solid gray 1px;\n}",""]);const s=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var u=this[s][0];null!=u&&(i[u]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},i=[],s=0;s<t.length;s++){var u=t[s],c=r.base?u[0]+r.base:u[0],d=o[c]||0,l="".concat(c," ").concat(d);o[c]=d+1;var m=n(l),h={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==m)e[m].references++,e[m].updater(h);else{var f=a(h,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var s=n(o[i]);e[s].references--}for(var u=r(t,a),c=0;c<o.length;c++){var d=n(o[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=u}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),r=n(795),a=n.n(r),o=n(569),i=n.n(o),s=n(565),u=n.n(s),c=n(216),d=n.n(c),l=n(589),m=n.n(l),h=n(426),f={};f.styleTagTransform=m(),f.setAttributes=u(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=d(),e()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;var p={};function g(){return p}function v(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function y(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function b(t){y(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===w(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function C(t){y(1,arguments);var e=b(t);return e.setHours(0,0,0,0),e}function x(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function T(t,e){return y(2,arguments),function(t,e){y(2,arguments);var n=b(t).getTime(),r=x(e);return new Date(n+r)}(t,-x(e))}function M(t){y(1,arguments);var e=b(t),n=e.getUTCDay(),r=(n<1?7:0)+n-1;return e.setUTCDate(e.getUTCDate()-r),e.setUTCHours(0,0,0,0),e}function D(t){y(1,arguments);var e=b(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=M(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=M(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function S(t,e){var n,r,a,o,i,s,u,c;y(1,arguments);var d=g(),l=x(null!==(n=null!==(r=null!==(a=null!==(o=null==e?void 0:e.weekStartsOn)&&void 0!==o?o:null==e||null===(i=e.locale)||void 0===i||null===(s=i.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==a?a:d.weekStartsOn)&&void 0!==r?r:null===(u=d.locale)||void 0===u||null===(c=u.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==n?n:0);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var m=b(t),h=m.getUTCDay(),f=(h<l?7:0)+h-l;return m.setUTCDate(m.getUTCDate()-f),m.setUTCHours(0,0,0,0),m}function k(t,e){var n,r,a,o,i,s,u,c;y(1,arguments);var d=b(t),l=d.getUTCFullYear(),m=g(),h=x(null!==(n=null!==(r=null!==(a=null!==(o=null==e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null==e||null===(i=e.locale)||void 0===i||null===(s=i.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==a?a:m.firstWeekContainsDate)&&void 0!==r?r:null===(u=m.locale)||void 0===u||null===(c=u.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==n?n:1);if(!(h>=1&&h<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var f=new Date(0);f.setUTCFullYear(l+1,0,h),f.setUTCHours(0,0,0,0);var p=S(f,e),v=new Date(0);v.setUTCFullYear(l,0,h),v.setUTCHours(0,0,0,0);var w=S(v,e);return d.getTime()>=p.getTime()?l+1:d.getTime()>=w.getTime()?l:l-1}function U(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const P=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return U("yy"===e?r%100:r,e.length)},E=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):U(n+1,2)},W=function(t,e){return U(t.getUTCDate(),e.length)},q=function(t,e){return U(t.getUTCHours()%12||12,e.length)},O=function(t,e){return U(t.getUTCHours(),e.length)},Y=function(t,e){return U(t.getUTCMinutes(),e.length)},_=function(t,e){return U(t.getUTCSeconds(),e.length)},j=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return U(Math.floor(r*Math.pow(10,n-3)),e.length)};var N={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return P(t,e)},Y:function(t,e,n,r){var a=k(t,r),o=a>0?a:1-a;return"YY"===e?U(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):U(o,e.length)},R:function(t,e){return U(D(t),e.length)},u:function(t,e){return U(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return U(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return U(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return E(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return U(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=function(t,e){y(1,arguments);var n=b(t),r=S(n,e).getTime()-function(t,e){var n,r,a,o,i,s,u,c;y(1,arguments);var d=g(),l=x(null!==(n=null!==(r=null!==(a=null!==(o=null==e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null==e||null===(i=e.locale)||void 0===i||null===(s=i.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==a?a:d.firstWeekContainsDate)&&void 0!==r?r:null===(u=d.locale)||void 0===u||null===(c=u.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==n?n:1),m=k(t,e),h=new Date(0);return h.setUTCFullYear(m,0,l),h.setUTCHours(0,0,0,0),S(h,e)}(n,e).getTime();return Math.round(r/6048e5)+1}(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):U(a,e.length)},I:function(t,e,n){var r=function(t){y(1,arguments);var e=b(t),n=M(e).getTime()-function(t){y(1,arguments);var e=D(t),n=new Date(0);return n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0),M(n)}(e).getTime();return Math.round(n/6048e5)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):U(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):W(t,e)},D:function(t,e,n){var r=function(t){y(1,arguments);var e=b(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=n-e.getTime();return Math.floor(r/864e5)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):U(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return U(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return U(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return U(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return q(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):O(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):U(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):U(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):Y(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):_(t,e)},S:function(t,e){return j(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return F(a);case"XXXX":case"XX":return A(a);default:return A(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return F(a);case"xxxx":case"xx":return A(a);default:return A(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+L(a,":");default:return"GMT"+A(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+L(a,":");default:return"GMT"+A(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return U(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return U((r._originalDate||t).getTime(),e.length)}};function L(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+U(o,2)}function F(t,e){return t%60==0?(t>0?"-":"+")+U(Math.abs(t)/60,2):A(t,e)}function A(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+U(Math.floor(a/60),2)+n+U(a%60,2)}const R=N;var z=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},H=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}};const Q={p:H,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return z(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",z(a,e)).replace("{{time}}",H(o,e))}};var I=["D","DD"],G=["YY","YYYY"];function X(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var B={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function $(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const J={date:$({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:$({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:$({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var K={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function Z(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=t.formattingValues[o]||t.formattingValues[a]}else{var i=t.defaultWidth,s=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[s]||t.values[i]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const V={ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:Z({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:Z({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:Z({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:Z({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:Z({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function tt(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,s=o[0],u=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(u)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(s))return n}(u):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(s))return n}(u);return i=t.valueCallback?t.valueCallback(c):c,{value:i=n.valueCallback?n.valueCallback(i):i,rest:e.slice(s.length)}}}var et,nt={ordinalNumber:(et={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(et.matchPattern);if(!n)return null;var r=n[0],a=t.match(et.parsePattern);if(!a)return null;var o=et.valueCallback?et.valueCallback(a[0]):a[0];return{value:o=e.valueCallback?e.valueCallback(o):o,rest:t.slice(r.length)}}),era:tt({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:tt({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:tt({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:tt({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:tt({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};const rt={code:"en-US",formatDistance:function(t,e,n){var r,a=B[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:J,formatRelative:function(t,e,n,r){return K[t]},localize:V,match:nt,options:{weekStartsOn:0,firstWeekContainsDate:1}};var at=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ot=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,it=/^'([^]*?)'?$/,st=/''/g,ut=/[a-zA-Z]/;function ct(t,e,n){var r,a,o,i,s,u,c,d,l,m,h,f,p,C,M,D,S,k;y(2,arguments);var U=String(e),P=g(),E=null!==(r=null!==(a=null==n?void 0:n.locale)&&void 0!==a?a:P.locale)&&void 0!==r?r:rt,W=x(null!==(o=null!==(i=null!==(s=null!==(u=null==n?void 0:n.firstWeekContainsDate)&&void 0!==u?u:null==n||null===(c=n.locale)||void 0===c||null===(d=c.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==s?s:P.firstWeekContainsDate)&&void 0!==i?i:null===(l=P.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==o?o:1);if(!(W>=1&&W<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var q=x(null!==(h=null!==(f=null!==(p=null!==(C=null==n?void 0:n.weekStartsOn)&&void 0!==C?C:null==n||null===(M=n.locale)||void 0===M||null===(D=M.options)||void 0===D?void 0:D.weekStartsOn)&&void 0!==p?p:P.weekStartsOn)&&void 0!==f?f:null===(S=P.locale)||void 0===S||null===(k=S.options)||void 0===k?void 0:k.weekStartsOn)&&void 0!==h?h:0);if(!(q>=0&&q<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!E.localize)throw new RangeError("locale must contain localize property");if(!E.formatLong)throw new RangeError("locale must contain formatLong property");var O=b(t);if(!function(t){if(y(1,arguments),!function(t){return y(1,arguments),t instanceof Date||"object"===w(t)&&"[object Date]"===Object.prototype.toString.call(t)}(t)&&"number"!=typeof t)return!1;var e=b(t);return!isNaN(Number(e))}(O))throw new RangeError("Invalid time value");var Y=T(O,v(O)),_={firstWeekContainsDate:W,weekStartsOn:q,locale:E,_originalDate:O};return U.match(ot).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,Q[e])(t,E.formatLong):t})).join("").match(at).map((function(r){if("''"===r)return"'";var a,o,i=r[0];if("'"===i)return(o=(a=r).match(it))?o[1].replace(st,"'"):a;var s,u=R[i];if(u)return null!=n&&n.useAdditionalWeekYearTokens||(s=r,-1===G.indexOf(s))||X(r,e,String(t)),null!=n&&n.useAdditionalDayOfYearTokens||!function(t){return-1!==I.indexOf(t)}(r)||X(r,e,String(t)),u(Y,r,E.localize,_);if(i.match(ut))throw new RangeError("Format string contains an unescaped latin alphabet character `"+i+"`");return r})).join("")}const dt=document.querySelector(".forecastRow");class lt{constructor(t,e,n,r,a,o,i){this._condition=t,this._icon=e,this._time=n,this._day=this.formattedTime(n),this._maxTempC=r,this._minTempC=a,this._maxTempF=o,this._minTempF=i}get day(){return this._day}formattedTime=t=>{const e=new Date;return function(t,e,n){var r,a,o,i,s,u,c,d,l,m;y(2,arguments);var h=b(t),f=b(e),p=g(),w=null!==(r=null!==(a=null==n?void 0:n.locale)&&void 0!==a?a:p.locale)&&void 0!==r?r:rt,M=x(null!==(o=null!==(i=null!==(s=null!==(u=null==n?void 0:n.weekStartsOn)&&void 0!==u?u:null==n||null===(c=n.locale)||void 0===c||null===(d=c.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==s?s:p.weekStartsOn)&&void 0!==i?i:null===(l=p.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.weekStartsOn)&&void 0!==o?o:0);if(!w.localize)throw new RangeError("locale must contain localize property");if(!w.formatLong)throw new RangeError("locale must contain formatLong property");if(!w.formatRelative)throw new RangeError("locale must contain formatRelative property");var D,S=function(t,e){y(2,arguments);var n=C(t),r=C(e),a=n.getTime()-v(n),o=r.getTime()-v(r);return Math.round((a-o)/864e5)}(h,f);if(isNaN(S))throw new RangeError("Invalid time value");D=S<-6?"other":S<-1?"lastWeek":S<0?"yesterday":S<1?"today":S<2?"tomorrow":S<7?"nextWeek":"other";var k=T(h,v(h)),U=T(f,v(f));return ct(h,w.formatRelative(D,k,U,{locale:w,weekStartsOn:M}),{locale:w,weekStartsOn:M})}(new Date(t+"T00:00"),e).split(" ").shift()};appendThis=()=>{const t=document.createElement("div");t.classList.add("container",this.day);const e=document.createElement("p");e.textContent=this.day;const n=document.createElement("p");n.classList.add("temp");const r=document.querySelector("#tempUnit");let a;const o=this._maxTempC+"° / "+this._minTempC+"°",i=this._maxTempF+"° / "+this._minTempF+"°";a=!0===r.checked?o:i,n.textContent=a,n.setAttribute("tempC",`${o}`),n.setAttribute("tempF",`${i}`);const s=document.createElement("p");s.textContent=this._condition;const u=new Image;u.src=this._icon,t.appendChild(e),t.appendChild(n);const c=document.createElement("div");c.classList.add("iconAndCond"),c.appendChild(u),c.appendChild(s),t.appendChild(c),dt.appendChild(t)}}const mt=document.querySelector(".mainContent");class ht{constructor(t,e,n,r,a,o,i){this._tempC=t,this._tempF=e,this._condition=n,this._icon=r,this._gifUrl=a,this._time=o,this._location=i}formatTime=()=>ct(new Date(this._time),"iii, MMM dd h:mm aaaa");appendThis=()=>{const t=document.createElement("div");t.classList.add("container","current");const e=document.createElement("p");e.classList.add("locationP"),e.textContent=this._location;const n=document.createElement("p");n.classList.add("timeP"),n.textContent=this.formatTime();const r=document.createElement("p");r.classList.add("temp");const a=document.querySelector("#tempUnit");let o;const i=this._tempC+"°C",s=this._tempF+"°F";o=!0===a.checked?i:s,r.textContent=o,r.setAttribute("tempC",`${i}`),r.setAttribute("tempF",`${s}`);const u=document.createElement("p");u.textContent=this._condition;const c=new Image;c.src=this._icon;const d=new Image;d.src=this._gifUrl;const l=document.createElement("div");l.classList.add("infoRow"),l.appendChild(e),l.appendChild(n);const m=document.createElement("div");m.classList.add("tempStuff");const h=document.createElement("div");h.classList.add("iconAndCond"),h.appendChild(c),h.appendChild(u),m.appendChild(h),m.appendChild(r),l.appendChild(m),t.appendChild(l),t.appendChild(d),mt.appendChild(t)}}const ft=document.querySelector("#form"),pt=document.querySelector("#location"),gt=document.querySelector(".forecastRow"),vt=document.querySelector(".mainContent"),wt=document.querySelector("footer");async function yt(t){const e=Date.now(),n=await(async t=>{await t;try{const e=Date.now(),n=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=07c5f71571d64307b4f53832231511&q=${t}&days=3`,{mode:"cors"}),r=(Date.now()-e)/1e3,a=await n.json();if("error"in a)throw new Error(a.error.message);return[a,r]}catch(e){let n;n="auto:ip"===t?"Weather Data":t,alert(`${n} could not be found. Try again`),console.log(e.message);const r=Date.now(),a=await fetch("http://api.weatherapi.com/v1/forecast.json?key=07c5f71571d64307b4f53832231511&q=auto:ip&days=3",{mode:"cors"}),o=(Date.now()-r)/1e3;return[await a.json(),o]}})(t),r=n[0],a=n[1],o=r.current.condition.text;let i;i="Partly cloudy"===o?"Cloudy":o;const s=await(async t=>{try{const e=Date.now(),n=await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=sgI2KzxUU6QYL5ljJmdc4LK8DoDWvqs9&s=${t}`,{mode:"cors"}),r=(Date.now()-e)/1e3,a=await n.json();if("error"in a)throw new Error(a.error.message);return[a,r]}catch(t){console.log(t);const e=Date.now(),n=await fetch("https://api.giphy.com/v1/gifs/translate?api_key=sgI2KzxUU6QYL5ljJmdc4LK8DoDWvqs9&s=puppies",{mode:"cors"}),r=(Date.now()-e)/1e3;return[await n.json(),r]}})(i),u=s[0],c=s[1],d=u.data.images.original.url;r.forecast.forecastday.forEach((t=>{const e=t.date,{condition:{text:n,icon:r},maxtemp_c:a,mintemp_c:o,maxtemp_f:i,mintemp_f:s}=t.day;new lt(n,r,e,a,o,i,s).appendThis()})),(async(t,e,n)=>{const{temp_c:r,temp_f:a,condition:{text:o,icon:i},last_updated:s}=t;new ht(r,a,o,i,n,s,e).appendThis()})(r.current,r.location.name,d),function(t){for(const[e,n]of Object.entries(t)){const t=document.createElement("p");t.textContent=`${e}: ${n}s`,wt.appendChild(t)}}({weatherApi:a,giphyApi:c,Total:(Date.now()-e)/1e3})}yt("auto:ip"),ft.addEventListener("submit",(async t=>{t.preventDefault(),vt.replaceChildren(),gt.replaceChildren(),wt.replaceChildren(),yt(pt.value),ft.reset()}));const bt=document.querySelector("#tempUnit"),Ct=document.querySelector("#tempUnit+div>label"),xt=t=>{document.querySelectorAll(".container").forEach((e=>{const n=e.querySelector(".temp"),r=n.getAttribute(`${t}`);n.textContent=r}))};bt.addEventListener("change",(t=>{!0===bt.checked?(Ct.textContent="°C",xt("tempC")):!1===bt.checked&&(Ct.textContent="°F",xt("tempF"))}))})()})();
(function(t){function e(e){for(var r,a,i=e[0],u=e[1],l=e[2],f=0,d=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);s&&s(e);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(c.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},c=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var s=u;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},5408:function(t,e,n){"use strict";n("a629")},"96c4":function(t,e,n){"use strict";n("b1dd")},a629:function(t,e,n){},b1dd:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);var r=n("7a23"),o=Object(r["d"])("br",null,null,-1);function c(t,e,n,c,a,i){var u=Object(r["k"])("Tools");return Object(r["h"])(),Object(r["c"])(r["a"],null,[Object(r["d"])("canvas",{style:{cursor:"pointer"},ref:"cvs",width:"900",height:"450",class:"my-canvas",onMousedown:e[0]||(e[0]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.handleMouseDown&&t.handleMouseDown.apply(t,e)}),onMouseup:e[1]||(e[1]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.handleMouseUp&&t.handleMouseUp.apply(t,e)})},null,544),o,Object(r["e"])(u,{handleClear:t.handleClear},null,8,["handleClear"])],64)}function a(t,e,n,o,c,a){return Object(r["h"])(),Object(r["c"])("div",null,[Object(r["d"])("div",null,[Object(r["d"])("button",{onClick:e[0]||(e[0]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.clear&&t.clear.apply(t,e)})},"Clear")])])}var i=Object(r["f"])({props:["handleAddPoint","handleClear"],setup:function(t){var e=function(){t.handleClear()};return{clear:e}}}),u=(n("96c4"),n("6b0d")),l=n.n(u);const s=l()(i,[["render",a],["__scopeId","data-v-885e90fa"]]);var f=s,d=function(t,e,n){return{x:(1-n)*t.x+n*e.x,y:(1-n)*t.y+n*e.y}},h=function(){function t(t){this._ctx=t}return Object.defineProperty(t.prototype,"ctx",{get:function(){return this._ctx},set:function(t){this._ctx=t},enumerable:!1,configurable:!0}),t.prototype.clear=function(){this._ctx&&this._ctx.clearRect(0,0,this._ctx.canvas.width,this._ctx.canvas.height)},t.prototype.drawRect=function(t,e,n,r){this._ctx&&this._ctx.strokeRect(t,e,n,r)},t.prototype.drawPoint=function(t,e){var n=t.x,r=t.y;this._ctx&&(this._ctx.moveTo(n,r),this._ctx.arc(n,r,5,0,2*Math.PI),this._ctx.fillStyle=e||"#666",this._ctx.fill())},t.prototype.drawPaths=function(t,e){var n=this;this._ctx&&(this._ctx.lineWidth=2,this._ctx.strokeStyle=e||"red",this._ctx.beginPath(),t.forEach((function(t,e){var r,o,c=t.x,a=t.y;0===e?null===(r=n._ctx)||void 0===r||r.moveTo(c,a):null===(o=n._ctx)||void 0===o||o.lineTo(c,a)})),this._ctx.stroke())},t.prototype.drawBezier=function(t,e){var n=this;if(this._ctx&&!(t.length<=2)){var r=void 0,o=0,c=.001,a=[],i=function(t){if(t.length<2)return a.push(t[0]),n.drawPoint(t[0],"#458fff"),void n.drawPaths(a);n.drawPaths(t,"green");for(var r=[],c=0;c<t.length-1;c++)r.push(d(t[c],t[c+1],e+o));i(r)};r&&clearInterval(r),r=setInterval((function(){o+=c,window.requestAnimationFrame((function(){n.clear(),i(t)})),o>=1&&r&&clearInterval(r)}),1)}},t}(),p=h,v=Object(r["f"])({name:"App",components:{Tools:f},setup:function(){var t,e,n=Object(r["j"])(),o=Object(r["j"])(!1),c=Object(r["i"])(new p(null!==(e=null===(t=n.value)||void 0===t?void 0:t.getContext("2d"))&&void 0!==e?e:void 0)),a=Object(r["j"])([]),i=function(t){o.value=!0,a.value.push({x:t.offsetX,y:t.offsetY}),c.drawPoint({x:t.offsetX,y:t.offsetY})},u=function(){a.value=[],c.clear()};return Object(r["g"])((function(){n.value&&(c.ctx=n.value.getContext("2d"))})),{cvs:n,points:a,drawHelper:c,handleMouseDown:i,handleClear:u}},watch:{points:{handler:function(t){t.length>0&&this.drawHelper.drawBezier(t,0)},deep:!0}}});n("5408");const b=l()(v,[["render",c]]);var x=b;Object(r["b"])(x).mount("#app")}});
//# sourceMappingURL=app.722f3add.js.map
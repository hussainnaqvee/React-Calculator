(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(3),l=n.n(r),u=(n(14),n(15),n(4)),o=n(1),i=function(e){var t=e.value,n=e.isVisible,a=e.setVisiblity,r=t.map(function(e,t){return"---Cal-".concat(t+1,"---\nExp: ").concat(e.exp,"\nResult: ").concat(e.res,"\n")});return c.a.createElement("div",{className:n?"cal-log":"cal-log cal-log-show"},c.a.createElement("input",{type:"button",className:"clear-btn",value:"X",onClick:function(){return a(!0)}}),c.a.createElement("textarea",{className:"log",value:r}))},s=function(e){return(e=e.split("+")).reduce(function(e,t){return parseFloat(e)+parseFloat(t)},0)},p=function(e){return(e=e.split("-")).reduce(function(e,t){return parseFloat(e)-parseFloat(t)},0)},m=function(e){return e=e.split("/"),parseFloat(e[0])/parseFloat(e[1])},f=function(e){return e=e.split("*"),parseFloat(e[0])*parseFloat(e[1])},d=function(e){return e=e.split("%"),parseFloat(e[0])%parseFloat(e[1])},v=function(e){return function(e){return console.log(e),e.includes("[")?(e=(e=(e=e.replace("[","")).replace("]","")).split(",")).reduce(function(e,t){return parseFloat(e)+parseFloat(t)},0):e.includes("+")?s(e):e.includes("-")?p(e):e.includes("*")?f(e):e.includes("/")?m(e):e.includes("%")?d(e):void 0}(e)},b=function(){var e=Object(a.useState)(!0),t=Object(o.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(""),s=Object(o.a)(l,2),p=s[0],m=s[1],f=function(e){m(p+e)},d=Object(a.useState)([]),b=Object(o.a)(d,2),E=b[0],F=b[1],g=function(e){var t={exp:e,res:v(e)};m(t.res),function(e){F([e].concat(Object(u.a)(E)))}(t)};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:n?"calculator":"calculator-hide"},c.a.createElement("div",{className:"text-area"},c.a.createElement("input",{type:"text",className:"input-field",value:p,onKeyUp:function(e){isNaN(e.key)?alert("Invalid character: ".concat(e.key,"\nFor Arthimatic Operations use Buttons")):f(e.key)}}),c.a.createElement("input",{type:"button",className:"clear-btn",value:"C",onClick:function(){return m("")}}),c.a.createElement("input",{type:"button",className:"clear-btn add-log",value:"M",onClick:function(){return r(!1)}})),[["7","8","9","+"],["4","5","6","-"],["1","2","3","*"],["0",".",",","/"],["[","]","=","%"]].map(function(e,t){return c.a.createElement("div",{className:"btn-row",key:t},e.map(function(e,t){return c.a.createElement("input",{type:"button",value:e,onClick:function(e){return"="!==e.target.value?f(e.target.value):g(p)},key:t})}))})),c.a.createElement(i,{value:E,isVisible:n,setVisiblity:r}))};var E=function(){return c.a.createElement("div",{className:"App container"},c.a.createElement(b,null))},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then(function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;n(e),a(e),c(e),r(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null))),F()},5:function(e,t,n){e.exports=n(16)}},[[5,1,2]]]);
//# sourceMappingURL=main.6714ca15.chunk.js.map
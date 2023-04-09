(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{922:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return r(5174)}])},5174:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var l=r(5893),n=r(9783),a=r(1163),o=r(7294),i=r(6398);function s(){let[e,t]=(0,o.useState)(),[r,s]=(0,o.useState)(),u=(0,a.useRouter)(),[d,f]=(0,o.useState)({name:"",mobile:"",email:"",premises:"",street:"",area:"",landmark:"",city:"",state:"",pin:"",password:"",confirm_password:""}),{isLoading:c,signup:p,loginError:m,currentUser:h,signupWithGoogle:b}=(0,n.E)(),y=e=>{f(t=>({...t,[e.target.name]:e.target.value}))},g=e=>{if(e.preventDefault(),d.mobile.length>10||d.mobile.length<10){s("Mobile should be of 10 digits");return}if(d.password!==d.confirm_password){t("passwords are not matching");return}p(d)},x=e=>{e.preventDefault(),b()};if(!h)return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("form",{onSubmit:g,className:" w-96 mx-auto ",children:[(0,l.jsx)("p",{children:"Register here"}),(0,l.jsxs)("div",{className:"w-full",children:[(0,l.jsx)("p",{className:"text-xs font-bold text-gray-700 ",children:"Name"}),(0,l.jsx)("input",{type:"text",className:"px-2 py-2 text-sm font-medium rounded-lg w-full border border-themel1",name:"name",onChange:e=>y(e),value:d.name,required:!0})]}),(0,l.jsxs)("div",{className:"w-full mt-2",children:[(0,l.jsx)("p",{className:"text-xs font-bold text-gray-700 ",children:"Email"}),(0,l.jsx)("input",{type:"email",className:"px-2 py-2 text-sm font-medium rounded-lg w-full border border-themel1",name:"email",onChange:e=>y(e),value:d.email,required:!0})]}),(0,l.jsxs)("div",{className:"w-full mt-2",children:[(0,l.jsx)("p",{className:"text-xs font-bold text-gray-700 ",children:"Mobile Number"}),(0,l.jsx)("input",{type:"number",className:"px-2 py-2 text-sm font-medium rounded-lg w-full border border-themel1",name:"mobile",onChange:e=>y(e),value:d.mobile,required:!0})]}),(0,l.jsxs)("div",{className:"w-full mt-2",children:[(0,l.jsx)("p",{className:"text-xs font-bold text-gray-700 ",children:"House/Flat number and Premises Name"}),(0,l.jsx)("input",{type:"text",className:"px-2 py-2 text-sm font-medium rounded-lg w-full border border-themel1",name:"premises",onChange:e=>y(e),value:d.premises,required:!0})]}),(0,l.jsxs)("div",{className:"w-full mt-2",children:[(0,l.jsx)("p",{className:"text-xs font-bold text-gray-700 ",children:"Street Name"}),(0,l.jsx)("input",{type:"text",className:"px-2 py-2 text-sm font-medium rounded-lg w-full border border-themel1",name:"street",onChange:e=>y(e),value:d.street,required:!0})]}),(0,l.jsxs)("div",{className:"w-full mt-2",children:[(0,l.jsx)("p",{className:"text-xs font-bold text-gray-700 ",children:"Area Name"}),(0,l.jsx)("input",{type:"text",className:"px-2 py-2 text-sm font-medium rounded-lg w-full border border-themel1",name:"area",onChange:e=>y(e),value:d.area,required:!0})]}),(0,l.jsxs)("div",{className:"w-full mt-2",children:[(0,l.jsx)("p",{className:"text-xs font-bold text-gray-700 ",children:"Land Mark"}),(0,l.jsx)("input",{type:"text",className:"px-2 py-2 text-sm font-medium rounded-lg w-full border border-themel1",name:"landmark",onChange:e=>y(e),value:d.landmark,required:!0})]}),(0,l.jsxs)("div",{className:"w-full mt-2",children:[(0,l.jsx)("p",{className:"text-xs font-bold text-gray-700 ",children:"City Name"}),(0,l.jsx)("input",{type:"text",className:"px-2 py-2 text-sm font-medium rounded-lg w-full border border-themel1",name:"city",onChange:e=>y(e),value:d.city,required:!0})]}),(0,l.jsxs)("div",{className:"w-full mt-2",children:[(0,l.jsx)("p",{className:"text-xs font-bold text-gray-700 ",children:"State Name"}),(0,l.jsx)("input",{type:"text",className:"px-2 py-2 text-sm font-medium rounded-lg w-full border border-themel1",name:"state",onChange:e=>y(e),value:d.state,required:!0})]}),(0,l.jsxs)("div",{className:"w-full mt-2",children:[(0,l.jsx)("p",{className:"text-xs font-bold text-gray-700 ",children:"PIN"}),(0,l.jsx)("input",{type:"number",className:"px-2 py-2 text-sm font-medium rounded-lg w-full border border-themel1",name:"pin",onChange:e=>y(e),value:d.pin,required:!0})]}),(0,l.jsxs)("div",{className:"w-full mt-4",children:[(0,l.jsx)("p",{className:"text-xs font-bold text-gray-700 ",children:"Password"}),(0,l.jsx)("input",{type:"password",className:"px-2 py-2 text-sm font-medium rounded-lg w-full border border-themel1",name:"password",onChange:e=>y(e),required:!0})]}),(0,l.jsxs)("div",{className:"w-full mt-2",children:[(0,l.jsx)("p",{className:"text-xs font-bold text-gray-700 ",children:"Confirm Password"}),(0,l.jsx)("input",{type:"password",className:"px-2 py-2 text-sm font-medium rounded-lg w-full border border-themel1",name:"confirm_password",onChange:e=>y(e),required:!0}),e&&(0,l.jsx)("p",{className:"py-2 text-xs font-bold text-red-500",children:e})]}),!c&&(0,l.jsx)("button",{type:"submit",className:" rounded-lg px-3 py-2 mt-3 bg-themed4 text-sm font-medium text-white",children:"Submit"}),c&&(0,l.jsx)("button",{className:" rounded-lg px-3 py-2 mt-3 bg-themed4 text-sm font-medium text-white",children:"Signing you up ...."}),m&&(0,l.jsx)("p",{className:"py-2 text-xs font-bold text-red-500",children:m}),(0,l.jsx)(i.VL,{onClick:x,className:"my-2"})]})});u.push({pathname:"/"})}function u(){return(0,l.jsx)("div",{className:"w-full mt-24 py-5",children:(0,l.jsx)(s,{})})}},2703:function(e,t,r){"use strict";var l=r(414);function n(){}function a(){}a.resetWarningCache=n,e.exports=function(){function e(e,t,r,n,a,o){if(o!==l){var i=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:n};return r.PropTypes=r,r}},5697:function(e,t,r){e.exports=r(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},8246:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==u(e)&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=l?Object.getOwnPropertyDescriptor(e,n):null;a&&(a.get||a.set)?Object.defineProperty(r,n,a):r[n]=e[n]}return r.default=e,t&&t.set(e,r),r}(r(7294)),a=(l=r(5697))&&l.__esModule?l:{default:l},o=r(4292),i=r(5004);function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e}).apply(this,arguments)}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,l)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function p(e,t){for(var r=0;r<t.length;r++){var l=t[r];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function m(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(a,e);var t,r,l=function(){var e,t,r=h(a);if(function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var l=h(this).constructor;t=Reflect.construct(r,arguments,l)}else t=r.apply(this,arguments);return(e=t)&&("object"===u(e)||"function"==typeof e)?e:m(this)};function a(){var e;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,a);for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return y(m(e=l.call.apply(l,[this].concat(r))),"state",{hovered:!1}),y(m(e),"getStyle",function(t){var r="dark"===e.props.type?i.darkStyle:i.lightStyle;return e.state.hovered?c({},r,{},i.hoverStyle,{},t):e.props.disabled?c({},r,{},i.disabledStyle,{},t):c({},r,{},t)}),y(m(e),"mouseOver",function(){e.props.disabled||e.setState({hovered:!0})}),y(m(e),"mouseOut",function(){e.props.disabled||e.setState({hovered:!1})}),y(m(e),"click",function(t){e.props.disabled||e.props.onClick(t)}),e}return t=[{key:"render",value:function(){var e=this.props,t=e.label,r=e.style,l=function(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,["label","style"]);return n.default.createElement("div",d({},l,{role:"button",onClick:this.click,style:this.getStyle(r),onMouseOver:this.mouseOver,onMouseOut:this.mouseOut}),n.default.createElement(o.GoogleIcon,this.props),n.default.createElement("span",null,t))}}],p(a.prototype,t),r&&p(a,r),a}(n.PureComponent);t.default=g,y(g,"propTypes",{label:a.default.string,disabled:a.default.bool,tabIndex:a.default.number,onClick:a.default.func,type:a.default.oneOf(["light","dark"]),style:a.default.object}),y(g,"defaultProps",{label:"Sign in with Google",disabled:!1,type:"dark",tabIndex:0,onClick:function(){}})},4292:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleIcon=void 0;var l=o(r(7294)),n=o(r(5697)),a=r(5004);function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,l)}return r}var s=l.default.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"46px",height:"46px",viewBox:"0 0 46 46",style:a.svgStyle},l.default.createElement("defs",null,l.default.createElement("filter",{x:"-50%",y:"-50%",width:"200%",height:"200%",filterUnits:"objectBoundingBox",id:"filter-1"},l.default.createElement("feOffset",{dx:"0",dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}),l.default.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}),l.default.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168 0",in:"shadowBlurOuter1",type:"matrix",result:"shadowMatrixOuter1"}),l.default.createElement("feOffset",{dx:"0",dy:"0",in:"SourceAlpha",result:"shadowOffsetOuter2"}),l.default.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"shadowOffsetOuter2",result:"shadowBlurOuter2"}),l.default.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.084 0",in:"shadowBlurOuter2",type:"matrix",result:"shadowMatrixOuter2"}),l.default.createElement("feMerge",null,l.default.createElement("feMergeNode",{in:"shadowMatrixOuter1"}),l.default.createElement("feMergeNode",{in:"shadowMatrixOuter2"}),l.default.createElement("feMergeNode",{in:"SourceGraphic"}))),l.default.createElement("rect",{id:"path-2",x:"0",y:"0",width:"40",height:"40",rx:"2"}),l.default.createElement("rect",{id:"path-3",x:"5",y:"5",width:"38",height:"38",rx:"1"})),l.default.createElement("g",{id:"Google-Button",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},l.default.createElement("g",{id:"9-PATCH",transform:"translate(-608.000000, -219.000000)"}),l.default.createElement("g",{id:"btn_google_dark_normal",transform:"translate(-1.000000, -1.000000)"},l.default.createElement("g",{id:"button",transform:"translate(4.000000, 4.000000)",filter:"url(#filter-1)"},l.default.createElement("g",{id:"button-bg"},l.default.createElement("use",{fill:"#4285F4",fillRule:"evenodd"}),l.default.createElement("use",{fill:"none"}),l.default.createElement("use",{fill:"none"}),l.default.createElement("use",{fill:"none"}))),l.default.createElement("g",{id:"button-bg-copy"},l.default.createElement("use",{fill:"#FFFFFF",fillRule:"evenodd"}),l.default.createElement("use",{fill:"none"}),l.default.createElement("use",{fill:"none"}),l.default.createElement("use",{fill:"none"})),l.default.createElement("g",{id:"logo_googleg_48dp",transform:"translate(15.000000, 15.000000)"},l.default.createElement("path",{d:"M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z",id:"Shape",fill:"#4285F4"}),l.default.createElement("path",{d:"M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z",id:"Shape",fill:"#34A853"}),l.default.createElement("path",{d:"M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z",id:"Shape",fill:"#FBBC05"}),l.default.createElement("path",{d:"M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z",id:"Shape",fill:"#EA4335"}),l.default.createElement("path",{d:"M0,0 L18,0 L18,18 L0,18 L0,0 Z",id:"Shape"})),l.default.createElement("g",{id:"handles_square"})))),u=l.default.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"46px",height:"46px",viewBox:"0 0 46 46",style:a.svgStyle},l.default.createElement("defs",null,l.default.createElement("filter",{x:"-50%",y:"-50%",width:"200%",height:"200%",filterUnits:"objectBoundingBox",id:"filter-1"},l.default.createElement("feOffset",{dx:"0",dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}),l.default.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}),l.default.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168 0",in:"shadowBlurOuter1",type:"matrix",result:"shadowMatrixOuter1"}),l.default.createElement("feOffset",{dx:"0",dy:"0",in:"SourceAlpha",result:"shadowOffsetOuter2"}),l.default.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"shadowOffsetOuter2",result:"shadowBlurOuter2"}),l.default.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.084 0",in:"shadowBlurOuter2",type:"matrix",result:"shadowMatrixOuter2"}),l.default.createElement("feMerge",null,l.default.createElement("feMergeNode",{in:"shadowMatrixOuter1"}),l.default.createElement("feMergeNode",{in:"shadowMatrixOuter2"}),l.default.createElement("feMergeNode",{in:"SourceGraphic"}))),l.default.createElement("rect",{id:"path-2",x:"0",y:"0",width:"40",height:"40",rx:"2"})),l.default.createElement("g",{id:"Google-Button",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},l.default.createElement("g",{id:"9-PATCH",transform:"translate(-608.000000, -160.000000)"}),l.default.createElement("g",{id:"btn_google_light_normal",transform:"translate(-1.000000, -1.000000)"},l.default.createElement("g",{id:"button",transform:"translate(4.000000, 4.000000)",filter:"url(#filter-1)"},l.default.createElement("g",{id:"button-bg"},l.default.createElement("use",{fill:"#FFFFFF",fillRule:"evenodd"}),l.default.createElement("use",{fill:"none"}),l.default.createElement("use",{fill:"none"}),l.default.createElement("use",{fill:"none"}))),l.default.createElement("g",{id:"logo_googleg_48dp",transform:"translate(15.000000, 15.000000)"},l.default.createElement("path",{d:"M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z",id:"Shape",fill:"#4285F4"}),l.default.createElement("path",{d:"M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z",id:"Shape",fill:"#34A853"}),l.default.createElement("path",{d:"M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z",id:"Shape",fill:"#FBBC05"}),l.default.createElement("path",{d:"M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z",id:"Shape",fill:"#EA4335"}),l.default.createElement("path",{d:"M0,0 L18,0 L18,18 L0,18 L0,0 Z",id:"Shape"})),l.default.createElement("g",{id:"handles_square"})))),d=l.default.createElement("svg",{width:"46px",height:"46px",viewBox:"0 0 46 46",version:"1.1",xmlns:"http://www.w3.org/2000/svg",style:a.svgStyle},l.default.createElement("defs",null,l.default.createElement("rect",{id:"path-1",x:"0",y:"0",width:"40",height:"40",rx:"2"})),l.default.createElement("g",{id:"Google-Button",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},l.default.createElement("g",{id:"9-PATCH",transform:"translate(-788.000000, -219.000000)"}),l.default.createElement("g",{id:"btn_google_dark_disabled",transform:"translate(-1.000000, -1.000000)"},l.default.createElement("g",{id:"button",transform:"translate(4.000000, 4.000000)"},l.default.createElement("g",{id:"button-bg"},l.default.createElement("use",{fillOpacity:"0.08",fill:"#000000",fillRule:"evenodd"}),l.default.createElement("use",{fill:"none"}),l.default.createElement("use",{fill:"none"}),l.default.createElement("use",{fill:"none"}))),l.default.createElement("path",{d:"M24.001,25.71 L24.001,22.362 L32.425,22.362 C32.551,22.929 32.65,23.46 32.65,24.207 C32.65,29.346 29.203,33 24.01,33 C19.042,33 15.01,28.968 15.01,24 C15.01,19.032 19.042,15 24.01,15 C26.44,15 28.474,15.891 30.031,17.349 L27.475,19.833 C26.827,19.221 25.693,18.501 24.01,18.501 C21.031,18.501 18.601,20.976 18.601,24.009 C18.601,27.042 21.031,29.517 24.01,29.517 C27.457,29.517 28.726,27.132 28.96,25.719 L24.001,25.719 L24.001,25.71 Z",id:"Shape-Copy",fillOpacity:"0.4",fill:"#000000"}),l.default.createElement("g",{id:"handles_square"})))),f=function(e){var t=e.disabled,r=e.type;return l.default.createElement("div",{style:t?function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){var l,n;l=e,n=r[t],t in l?Object.defineProperty(l,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):l[t]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},a.iconStyle,{},a.disabledIconStyle):a.iconStyle},t?d:"dark"===r?s:u)};t.GoogleIcon=f,f.propTypes={disabled:n.default.bool,type:n.default.oneOf(["light","dark"])},f.defaultProps={type:"dark"}},6398:function(e,t,r){"use strict";Object.defineProperty(t,"VL",{enumerable:!0,get:function(){return n.default}});var l,n=(l=r(8246))&&l.__esModule?l:{default:l}},5004:function(e,t){"use strict";function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,l)}return r}function l(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach(function(t){var r,n;r=e,n=l[t],t in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))})}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.disabledIconStyle=t.disabledStyle=t.hoverStyle=t.svgStyle=t.iconStyle=t.lightStyle=t.darkStyle=void 0;var n={height:"50px",width:"240px",border:"none",textAlign:"center",verticalAlign:"center",boxShadow:"0 2px 4px 0 rgba(0,0,0,.25)",fontSize:"16px",lineHeight:"48px",display:"block",borderRadius:"1px",transition:"background-color .218s, border-color .218s, box-shadow .218s",fontFamily:"Roboto,arial,sans-serif",cursor:"pointer",userSelect:"none"},a=l({backgroundColor:"#4285f4",color:"#fff"},n);t.darkStyle=a;var o=l({backgroundColor:"#fff",color:"rgba(0,0,0,.54)"},n);t.lightStyle=o,t.iconStyle={width:"48px",height:"48px",textAlign:"center",verticalAlign:"center",display:"block",marginTop:"1px",marginLeft:"1px",float:"left",backgroundColor:"#fff",borderRadius:"1px",whiteSpace:"nowrap"},t.svgStyle={width:"48px",height:"48px",display:"block"},t.hoverStyle={boxShadow:"0 0 3px 3px rgba(66,133,244,.3)",transition:"background-color .218s, border-color .218s, box-shadow .218s"},t.disabledStyle={backgroundColor:"rgba(37, 5, 5, .08)",color:"rgba(0, 0, 0, .40)",cursor:"not-allowed"},t.disabledIconStyle={backgroundColor:"transparent"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=922)}),_N_E=e.O()}]);
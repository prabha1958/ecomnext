"use strict";
(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 2098:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ allmenclothes),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3267);
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(680);
/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5091);
/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5711);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1791);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Computer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6639);
/* harmony import */ var _components_Mobile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5362);
/* harmony import */ var _components_Menclothe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(487);
/* harmony import */ var _components_Womenclothe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(685);
/* harmony import */ var _components_Saree__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(345);
/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6939);
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9744);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_client__WEBPACK_IMPORTED_MODULE_1__, _sanity_client__WEBPACK_IMPORTED_MODULE_2__, next_sanity__WEBPACK_IMPORTED_MODULE_3__, _portabletext_react__WEBPACK_IMPORTED_MODULE_4__, _components_Computer__WEBPACK_IMPORTED_MODULE_7__, _components_Mobile__WEBPACK_IMPORTED_MODULE_8__, _components_Menclothe__WEBPACK_IMPORTED_MODULE_9__, _components_Womenclothe__WEBPACK_IMPORTED_MODULE_10__, _components_Saree__WEBPACK_IMPORTED_MODULE_11__, _components_Search__WEBPACK_IMPORTED_MODULE_13__]);
([_lib_client__WEBPACK_IMPORTED_MODULE_1__, _sanity_client__WEBPACK_IMPORTED_MODULE_2__, next_sanity__WEBPACK_IMPORTED_MODULE_3__, _portabletext_react__WEBPACK_IMPORTED_MODULE_4__, _components_Computer__WEBPACK_IMPORTED_MODULE_7__, _components_Mobile__WEBPACK_IMPORTED_MODULE_8__, _components_Menclothe__WEBPACK_IMPORTED_MODULE_9__, _components_Womenclothe__WEBPACK_IMPORTED_MODULE_10__, _components_Saree__WEBPACK_IMPORTED_MODULE_11__, _components_Search__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















function allmenclothes({ menclothes  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full py-4",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "max-w-7xl mx-auto ",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-full flex items-center justify-center mt-16 mb-3 px-7 py-1 bg-gray-200",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-sm font-bold text-themed4",
                        children: "All Mens Clothes"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-4 gap-2 ",
                    children: menclothes && menclothes.map((menclothe)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Menclothe__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            menclothe: menclothe
                        }))
                })
            ]
        })
    });
}
const query2 = next_sanity__WEBPACK_IMPORTED_MODULE_3__.groq`*[_type == 'mensclothe' ] | order(_udatedAt, desc)[0..5]`;
async function getStaticProps() {
    const menclothes = await _lib_client__WEBPACK_IMPORTED_MODULE_1__/* .client.fetch */ .L.fetch(query2);
    return {
        props: {
            menclothes
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1791:
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ 9027:
/***/ ((module) => {

module.exports = require("@tippy.js/react");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5711:
/***/ ((module) => {

module.exports = import("@portabletext/react");;

/***/ }),

/***/ 680:
/***/ ((module) => {

module.exports = import("@sanity/client");;

/***/ }),

/***/ 3745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 401:
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ 1492:
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ }),

/***/ 3392:
/***/ ((module) => {

module.exports = import("firebase/storage");;

/***/ }),

/***/ 5091:
/***/ ((module) => {

module.exports = import("next-sanity");;

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,675,664,296,233,783,353,844,186,894,639,491,685,362,913,487], () => (__webpack_exec__(2098)));
module.exports = __webpack_exports__;

})();
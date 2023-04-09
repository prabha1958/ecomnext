"use strict";
(() => {
var exports = {};
exports.id = 417;
exports.ids = [417];
exports.modules = {

/***/ 1583:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SearchProducts)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1791);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3267);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1492);
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2296);
/* harmony import */ var _Rate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(661);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_client__WEBPACK_IMPORTED_MODULE_4__, firebase_firestore__WEBPACK_IMPORTED_MODULE_6__, _firebase_config__WEBPACK_IMPORTED_MODULE_7__]);
([_lib_client__WEBPACK_IMPORTED_MODULE_4__, firebase_firestore__WEBPACK_IMPORTED_MODULE_6__, _firebase_config__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default()(_lib_client__WEBPACK_IMPORTED_MODULE_4__/* .client */ .L);
function SearchProducts({ data  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const [rate, setRate] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)();
    const handleClick = ()=>{
        router.push({
            pathname: "/product",
            query: {
                pid: data._id,
                slug: data.slug.current,
                ptype: data._type
            }
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_7__.db, "ratings"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.where)("pid", "==", data.slug.current));
        const res = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.onSnapshot)(q, (snapshot)=>{
            let result = [];
            snapshot.docs.forEach((doc)=>{
                result.push(doc.data().rate);
                let sum = 0;
                for(let i = 0; i < result.length; i++){
                    sum += result[i];
                }
                let ar = sum / result.length;
                setRate(ar);
            });
        });
    }, [
        data.slug.current
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            onClick: handleClick,
            className: " w-full flex  items-center justify-between gap-3 hover:bg-slate-200 cursor-pointer ",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    className: " object-fill  w-44 h-36",
                    src: builder.image(data.image[0]).width(250).height(170).url(),
                    width: 250,
                    height: 170,
                    alt: data.name
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: " w-96 h-40  text-left",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-sm my-3 px-2  font-medium text-gray-800",
                            children: data.name
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Rate__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            rate: rate
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "text-xs font-bold text-gray-900 ",
                            children: [
                                "₹ ",
                                data.saleprice,
                                " ",
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "text-xs font-thin text-gray-600 line-through",
                                    children: [
                                        "mrp :₹ ",
                                        data.mrp
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "text-xs font-bold text-gray-400",
                            children: [
                                "( ₹",
                                data.mrp - data.saleprice,
                                " off )"
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1078:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SearchSummary)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5091);
/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3267);
/* harmony import */ var _SearchProducts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1583);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity__WEBPACK_IMPORTED_MODULE_2__, _lib_client__WEBPACK_IMPORTED_MODULE_3__, _SearchProducts__WEBPACK_IMPORTED_MODULE_4__]);
([next_sanity__WEBPACK_IMPORTED_MODULE_2__, _lib_client__WEBPACK_IMPORTED_MODULE_3__, _SearchProducts__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function SearchSummary({ searchstr  }) {
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function go() {
            const query = next_sanity__WEBPACK_IMPORTED_MODULE_2__.groq`*[tags match '${searchstr}*']`;
            const result = await _lib_client__WEBPACK_IMPORTED_MODULE_3__/* .client.fetch */ .L.fetch(query);
            setData(result);
        }
        go();
    }, [
        searchstr
    ]);
    console.log(data);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full ",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "max-w-7xl mx-auto  ",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: " mt-4 flex flex-col items-start justify-center ",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full flex items-center justify-center mt-16 px-7 py-6 bg-gray-200",
                        children: [
                            data && !data.length == "" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-sm font-bold  text-themed4",
                                children: [
                                    "search results for ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-sm font-bold text-themeblue",
                                        children: searchstr
                                    }),
                                    " and beyond"
                                ]
                            }),
                            data && data.length == "" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-sm font-bold  text-themered",
                                children: [
                                    "no results for search string ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-sm font-bold text-themed4",
                                        children: searchstr
                                    }),
                                    " "
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: " my-8 flex flex-col items-start space-y-3 px-3",
                        children: data && data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SearchProducts__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                data: item
                            }))
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2382:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ searchresult)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_SearchSummary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1078);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_SearchSummary__WEBPACK_IMPORTED_MODULE_2__]);
_components_SearchSummary__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function searchresult() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { searchvalue  } = router.query;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: searchvalue && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SearchSummary__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            searchstr: searchvalue
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8130:
/***/ ((module) => {

module.exports = require("@material-ui/core");

/***/ }),

/***/ 1791:
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

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

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,675,296,233], () => (__webpack_exec__(2382)));
module.exports = __webpack_exports__;

})();
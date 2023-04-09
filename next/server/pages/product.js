"use strict";
(() => {
var exports = {};
exports.id = 345;
exports.ids = [345];
exports.modules = {

/***/ 8649:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProductShow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1791);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5711);
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(680);
/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3267);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5091);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _OtherRelated__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6353);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_portabletext_react__WEBPACK_IMPORTED_MODULE_3__, _sanity_client__WEBPACK_IMPORTED_MODULE_4__, _lib_client__WEBPACK_IMPORTED_MODULE_5__, next_sanity__WEBPACK_IMPORTED_MODULE_7__, _OtherRelated__WEBPACK_IMPORTED_MODULE_10__]);
([_portabletext_react__WEBPACK_IMPORTED_MODULE_3__, _sanity_client__WEBPACK_IMPORTED_MODULE_4__, _lib_client__WEBPACK_IMPORTED_MODULE_5__, next_sanity__WEBPACK_IMPORTED_MODULE_7__, _OtherRelated__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function ProductShow({ mobile , type  }) {
    const builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default()(_lib_client__WEBPACK_IMPORTED_MODULE_5__/* .client */ .L);
    const [selIndex, setSelIndex] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0);
    const discount = (mobile[0].mrp - mobile[0].saleprice) / mobile[0].mrp * 100;
    const [allmobiles, setAllmobiles] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();
    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(mobile[0].category);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        async function go() {
            const query = next_sanity__WEBPACK_IMPORTED_MODULE_7__.groq`*[_type == '${type}']`;
            const result = await _lib_client__WEBPACK_IMPORTED_MODULE_5__/* .client.fetch */ .L.fetch(query);
            setAllmobiles(result);
        }
        go();
    }, []);
    const other = (allmobiles || []).filter((item)=>item.slug.current !== mobile[0].slug.current);
    const handleClick = (id, type)=>{
        router.push({
            pathname: "/product",
            query: {
                pid: id,
                ptype: type
            }
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full mt-20 ",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full text-center py-3",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-xl font-bold text-themed4",
                    children: mobile[0].name
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "max-w-7xl mx-auto flex flex-col md:flex-row itmes-center justify-center px-2 mt-8 mb-8 ",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex-1 flex gap-3  items-center justify-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "grid grid-cols-1 gap-2 ",
                                children: mobile[0].image && mobile[0].image.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        className: index == selIndex ? "border-2 border-themered" : "border border-themed3",
                                        style: {
                                            "cursor": "pointer"
                                        },
                                        src: builder.image(item).width(70).height(90).url(),
                                        width: 70,
                                        height: 90,
                                        alt: mobile[0].name,
                                        onClick: ()=>setSelIndex(index)
                                    }))
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: " flex items-center justify-center  ",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    className: "",
                                    src: builder.image(mobile[0].image[selIndex]).width(450).height(450).url(),
                                    width: 450,
                                    height: 450,
                                    alt: mobile[0].name
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex-1 flex flex-col px-6 mt-10 md:mt-0 ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-2xl font-extrabold text-themed4",
                                children: mobile[0].shortdesc
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-sm font-medium text-gray-500",
                                children: mobile[0].fulldesc[0]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col mt-8 items-start space-y-2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "px-4 py-1 bg-themered rounded-lg text-white text-xl",
                                        children: [
                                            Math.trunc(discount),
                                            " % off"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "text-2xl font-bold text-gray-900 ",
                                        children: [
                                            "₹ ",
                                            mobile[0].saleprice,
                                            " ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "text-xs font-thin text-gray-600 line-through",
                                                children: [
                                                    "mrp :₹ ",
                                                    mobile[0].mrp
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "text-xs font-bold text-gray-400",
                                        children: [
                                            "( ₹",
                                            mobile[0].mrp - mobile[0].saleprice,
                                            " off )"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: " flex items-start mt-8 justify-sgart gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "text-md rounded-lg font-thin bg-themered text-themel4 px-4 py-2",
                                        children: "By Now"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "text-md rounded-lg font-thin bg-themeblue text-themel4 px-4 py-2 ",
                                        children: "Add to cart"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex items-start mt-8 justify-sgart",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-xl font-bold text-themed4",
                                    children: "About the product"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: " flex flex-col items-start mt-8 justify-sgart gap-2",
                                children: mobile[0].fulldesc && mobile[0].fulldesc.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "text-sm font-semibold text-gray-600",
                                        children: [
                                            index + 1,
                                            ". ",
                                            item
                                        ]
                                    }, index))
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "max-w-7xl mx-auto my-8 ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                        className: "w-full h-1 bg-themed4 "
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full text-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-xl font-bold text-themed4 my-5",
                                children: "Other related products"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full flex flex-col md:flex-row items-center justify-center gap-2 overflow-x-scroll",
                                children: other && other.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        onClick: ()=>handleClick(item._id, item._type),
                                        className: "cursor-pointer",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_OtherRelated__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                            other: item
                                        })
                                    }))
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8066:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProductSingle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3267);
/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5091);
/* harmony import */ var _ProductShow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8649);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_client__WEBPACK_IMPORTED_MODULE_2__, next_sanity__WEBPACK_IMPORTED_MODULE_3__, _ProductShow__WEBPACK_IMPORTED_MODULE_4__]);
([_lib_client__WEBPACK_IMPORTED_MODULE_2__, next_sanity__WEBPACK_IMPORTED_MODULE_3__, _ProductShow__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function ProductSingle({ pid , ptype , slug  }) {
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function go() {
            const query = next_sanity__WEBPACK_IMPORTED_MODULE_3__.groq`*[_id == '${pid}']`;
            const result = await _lib_client__WEBPACK_IMPORTED_MODULE_2__/* .client.fetch */ .L.fetch(query);
            setData(result);
        }
        go();
    }, [
        pid
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: data && data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProductShow__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                mobile: data,
                type: ptype
            }))
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7074:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ product)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ProductSingle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8066);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ProductSingle__WEBPACK_IMPORTED_MODULE_1__]);
_components_ProductSingle__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function product() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { pid , ptype , slug  } = router.query;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: pid && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ProductSingle__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            pid: pid,
            ptype: ptype,
            slug: slug
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,675,664,296,233,353], () => (__webpack_exec__(7074)));
module.exports = __webpack_exports__;

})();
"use strict";
(() => {
var exports = {};
exports.id = 308;
exports.ids = [308];
exports.modules = {

/***/ 3526:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ WomenclotheSingle)
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
/* harmony import */ var _hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9783);
/* harmony import */ var _Review__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2844);
/* harmony import */ var _StarRating__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5013);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1492);
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2296);
/* harmony import */ var _Rate__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(661);
/* harmony import */ var _OtherRelated__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6353);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_portabletext_react__WEBPACK_IMPORTED_MODULE_3__, _sanity_client__WEBPACK_IMPORTED_MODULE_4__, _lib_client__WEBPACK_IMPORTED_MODULE_5__, next_sanity__WEBPACK_IMPORTED_MODULE_7__, _hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_9__, _Review__WEBPACK_IMPORTED_MODULE_10__, _StarRating__WEBPACK_IMPORTED_MODULE_11__, firebase_firestore__WEBPACK_IMPORTED_MODULE_12__, _firebase_config__WEBPACK_IMPORTED_MODULE_13__, _OtherRelated__WEBPACK_IMPORTED_MODULE_15__]);
([_portabletext_react__WEBPACK_IMPORTED_MODULE_3__, _sanity_client__WEBPACK_IMPORTED_MODULE_4__, _lib_client__WEBPACK_IMPORTED_MODULE_5__, next_sanity__WEBPACK_IMPORTED_MODULE_7__, _hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_9__, _Review__WEBPACK_IMPORTED_MODULE_10__, _StarRating__WEBPACK_IMPORTED_MODULE_11__, firebase_firestore__WEBPACK_IMPORTED_MODULE_12__, _firebase_config__WEBPACK_IMPORTED_MODULE_13__, _OtherRelated__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















function WomenclotheSingle({ womenclothe  }) {
    const builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default()(_lib_client__WEBPACK_IMPORTED_MODULE_5__/* .client */ .L);
    const [selIndex, setSelIndex] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0);
    const [allwoman, setAllwoman] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();
    const { currentUser  } = (0,_hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_9__/* .useAuthContext */ .E)();
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const [userrate, setUserrate] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();
    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(womenclothe.category);
    const discount = (womenclothe.mrp - womenclothe.saleprice) / womenclothe.mrp * 100;
    const [rate, setRate] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();
    const [reviews, setReviews] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();
    const [userreview, setUserreview] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        async function go() {
            const query = next_sanity__WEBPACK_IMPORTED_MODULE_7__.groq`*[_type == 'womensclothe' && category == '${code}']`;
            const result = await _lib_client__WEBPACK_IMPORTED_MODULE_5__/* .client.fetch */ .L.fetch(query);
            setAllwoman(result);
        }
        go();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        async function go() {
            if (currentUser) {
                const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_12__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_12__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_13__.db, "ratings"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_12__.where)("userid", "==", currentUser.uid), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_12__.where)("pid", "==", womenclothe.slug.current));
                const res = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_12__.onSnapshot)(q, (snapshot)=>{
                    snapshot.docs.forEach((doc)=>{
                        setUserrate(doc.data().rate);
                    });
                });
            }
        }
        go();
    }, [
        womenclothe.slug.current
    ]);
    const handleClose = ()=>{
        setOpen(false);
    };
    const other = (allwoman || []).filter((item)=>item.slug.current !== womenclothe.slug.current);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        async function go() {
            const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_12__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_12__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_13__.db, "ratings"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_12__.where)("pid", "==", womenclothe.slug.current));
            const res = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_12__.onSnapshot)(q, (snapshot)=>{
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
        }
        go();
    }, [
        womenclothe.slug.current
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        if (currentUser) {
            async function go() {
                const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_12__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_12__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_13__.db, "reviews"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_12__.where)("pid", "==", womenclothe._id));
                const res = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_12__.onSnapshot)(q, (snapshot)=>{
                    let result = [];
                    snapshot.docs.forEach((doc)=>{
                        result.push(doc.data().rev);
                    });
                    let urev = result.filter((item)=>item.userid == currentUser.id);
                    setUserreview(urev);
                    setReviews(result);
                });
            }
            go();
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full mt-12 ",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full text-center py-3",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-xl font-bold text-themed4",
                    children: womenclothe.name
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "max-w-7xl mx-auto flex flex-col md:flex-row itmes-center justify-center px-2 mb-8 mt-8 ",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex-1 flex gap-3  items-center justify-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "grid grid-cols-1 gap-2 ",
                                children: womenclothe.image && womenclothe.image.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        className: index == selIndex ? "border-2 border-themered" : "border border-themed3",
                                        style: {
                                            "cursor": "pointer"
                                        },
                                        src: builder.image(item).width(70).height(90).url(),
                                        width: 70,
                                        height: 90,
                                        alt: womenclothe.name,
                                        onClick: ()=>setSelIndex(index)
                                    }))
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: " flex items-center justify-center  ",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    className: "object-cover",
                                    src: builder.image(womenclothe.image[selIndex]).width(450).height(500).url(),
                                    width: 450,
                                    height: 500,
                                    alt: womenclothe.name
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex-1 flex flex-col px-6 mt-10 md:mt-0 items-start ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-2xl font-extrabold text-themed4",
                                children: womenclothe.shortdesc
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Rate__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                rate: rate
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-sm font-medium text-gray-500",
                                children: womenclothe.fulldesc[0]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col mt-8 items-start space-y-2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "px-4 py-1 bg-themered rounded-lg text-white text-xl",
                                        children: [
                                            Math.trunc(discount),
                                            " %  off"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "text-2xl font-bold text-gray-900 ",
                                        children: [
                                            "₹ ",
                                            womenclothe.saleprice,
                                            " ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "text-xs font-thin text-gray-600 line-through",
                                                children: [
                                                    "mrp :₹ ",
                                                    womenclothe.mrp
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "text-xs font-bold text-gray-400",
                                        children: [
                                            "( ₹",
                                            womenclothe.mrp - womenclothe.saleprice,
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
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col mt-8 items-start space-y-2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-sm font-light text-gray-800",
                                                children: "Color:"
                                            }),
                                            "\xa0",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-sm text-bold text-gray-600",
                                                children: womenclothe.color
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-sm font-light text-gray-800",
                                                children: "Size:"
                                            }),
                                            "\xa0",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-sm text-bold text-gray-600",
                                                children: womenclothe.size
                                            })
                                        ]
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
                                children: womenclothe.fulldesc && womenclothe.fulldesc.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
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
                                className: "w-full flex flex-col md:flex-row items-center justify-center gap-2",
                                children: other && other.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                        href: `/womenclothe/${item.slug.current}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_OtherRelated__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                            other: item
                                        })
                                    }))
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " max-w-7xl mx-auto  my-2 flex items-start px-2",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "max-w-4xl py-2",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center justify-center gap-4 mb-5",
                            children: [
                                currentUser && !userreview && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-xl font-bold text-themed4 ",
                                            children: "Reviews"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mt-2 text-left",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    onClick: ()=>setOpen(true),
                                                    className: "text-sm font-medium text-themed4 cursor-pointer",
                                                    children: "Rate and review this product"
                                                }),
                                                open && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Review__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                    handleClose: handleClose,
                                                    pid: womenclothe._id,
                                                    name: currentUser.displayName
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                reviews && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                            ]
                        }),
                        currentUser && !userrate && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StarRating__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            pid: womenclothe.slug.current
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center justify-center gap-2",
                            children: [
                                currentUser && userrate && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "your rating is"
                                }),
                                userrate && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Rate__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                    rate: userrate
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4609:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ womenclothe),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(680);
/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5091);
/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3267);
/* harmony import */ var _components_WomenclotheSingle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3526);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sanity_client__WEBPACK_IMPORTED_MODULE_1__, next_sanity__WEBPACK_IMPORTED_MODULE_2__, _lib_client__WEBPACK_IMPORTED_MODULE_3__, _components_WomenclotheSingle__WEBPACK_IMPORTED_MODULE_4__]);
([_sanity_client__WEBPACK_IMPORTED_MODULE_1__, next_sanity__WEBPACK_IMPORTED_MODULE_2__, _lib_client__WEBPACK_IMPORTED_MODULE_3__, _components_WomenclotheSingle__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function womenclothe({ womenclothe  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_WomenclotheSingle__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            womenclothe: womenclothe
        })
    });
}
const query = next_sanity__WEBPACK_IMPORTED_MODULE_2__.groq`*[_type == "womensclothe" && slug.current == $slug][0]`;
const getStaticPaths = async ()=>{
    const paths = await _lib_client__WEBPACK_IMPORTED_MODULE_3__/* .client.fetch */ .L.fetch(next_sanity__WEBPACK_IMPORTED_MODULE_2__.groq`*[_type == "womensclothe" && defined(slug.current)][]{
        "params": { "slug": slug.current }
      }`);
    return {
        paths,
        fallback: true
    };
};
const getStaticProps = async ({ params  })=>{
    const queryParams = {
        slug: params?.slug ?? ``
    };
    const womenclothe = await _lib_client__WEBPACK_IMPORTED_MODULE_3__/* .client.fetch */ .L.fetch(query, queryParams);
    return {
        props: {
            womenclothe
        }
    };
};

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,675,664,296,233,783,353,844], () => (__webpack_exec__(4609)));
module.exports = __webpack_exports__;

})();
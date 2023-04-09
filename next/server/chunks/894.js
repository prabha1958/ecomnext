"use strict";
exports.id = 894;
exports.ids = [894];
exports.modules = {

/***/ 9894:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MobileSingle)
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
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1492);
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2296);
/* harmony import */ var _Rate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(661);
/* harmony import */ var _Review__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2844);
/* harmony import */ var _StarRating__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5013);
/* harmony import */ var _hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9783);
/* harmony import */ var _OtherRelated__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6353);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_portabletext_react__WEBPACK_IMPORTED_MODULE_3__, _sanity_client__WEBPACK_IMPORTED_MODULE_4__, _lib_client__WEBPACK_IMPORTED_MODULE_5__, next_sanity__WEBPACK_IMPORTED_MODULE_7__, firebase_firestore__WEBPACK_IMPORTED_MODULE_9__, _firebase_config__WEBPACK_IMPORTED_MODULE_10__, _Review__WEBPACK_IMPORTED_MODULE_12__, _StarRating__WEBPACK_IMPORTED_MODULE_13__, _hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_14__, _OtherRelated__WEBPACK_IMPORTED_MODULE_15__]);
([_portabletext_react__WEBPACK_IMPORTED_MODULE_3__, _sanity_client__WEBPACK_IMPORTED_MODULE_4__, _lib_client__WEBPACK_IMPORTED_MODULE_5__, next_sanity__WEBPACK_IMPORTED_MODULE_7__, firebase_firestore__WEBPACK_IMPORTED_MODULE_9__, _firebase_config__WEBPACK_IMPORTED_MODULE_10__, _Review__WEBPACK_IMPORTED_MODULE_12__, _StarRating__WEBPACK_IMPORTED_MODULE_13__, _hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_14__, _OtherRelated__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















function MobileSingle({ mobile  }) {
    const builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default()(_lib_client__WEBPACK_IMPORTED_MODULE_5__/* .client */ .L);
    const [selIndex, setSelIndex] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0);
    const discount = (mobile.mrp - mobile.saleprice) / mobile.mrp * 100;
    const [allmobiles, setAllmobiles] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();
    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(mobile.category);
    const { currentUser , getrate  } = (0,_hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_14__/* .useAuthContext */ .E)();
    const [userrate, setUserrate] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const [rate, setRate] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        async function go() {
            const query = next_sanity__WEBPACK_IMPORTED_MODULE_7__.groq`*[_type == 'mobile']`;
            const result = await _lib_client__WEBPACK_IMPORTED_MODULE_5__/* .client.fetch */ .L.fetch(query);
            setAllmobiles(result);
        }
        go();
    }, []);
    const other = (allmobiles || []).filter((item)=>item.slug.current !== mobile.slug.current);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        async function go() {
            if (currentUser) {
                const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_10__.db, "ratings"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.where)("userid", "==", currentUser.uid), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.where)("pid", "==", mobile.slug.current));
                const res = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.onSnapshot)(q, (snapshot)=>{
                    snapshot.docs.forEach((doc)=>{
                        setUserrate(doc.data().rate);
                    });
                });
            }
        }
        go();
    }, [
        mobile.slug.current
    ]);
    const handleClose = ()=>{
        setOpen(false);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_10__.db, "ratings"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.where)("pid", "==", mobile.slug.current));
        const res = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.onSnapshot)(q, (snapshot)=>{
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
        mobile.slug.current
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full mt-12 ",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full text-center py-3",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-xl font-bold text-themed4",
                    children: mobile.name
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
                                children: mobile.image && mobile.image.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        className: index == selIndex ? "border-2 border-themered" : "border border-themed3",
                                        style: {
                                            "cursor": "pointer"
                                        },
                                        src: builder.image(item).width(70).height(90).url(),
                                        width: 70,
                                        height: 90,
                                        alt: mobile.name,
                                        onClick: ()=>setSelIndex(index)
                                    }))
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: " flex items-center justify-center  ",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    className: "object-cover",
                                    src: builder.image(mobile.image[selIndex]).width(450).height(500).url(),
                                    width: 450,
                                    height: 500,
                                    alt: mobile.name
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex-1 flex flex-col px-6 mt-10 md:mt-0 items-start ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-2xl font-extrabold text-themed4",
                                children: mobile.shortdesc
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Rate__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                rate: rate
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-sm font-medium text-gray-500",
                                children: mobile.fulldesc[0]
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
                                            mobile.saleprice,
                                            " ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "text-xs font-thin text-gray-600 line-through",
                                                children: [
                                                    "mrp :₹ ",
                                                    mobile.mrp
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "text-xs font-bold text-gray-400",
                                        children: [
                                            "( ₹",
                                            mobile.mrp - mobile.saleprice,
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
                                children: mobile.fulldesc && mobile.fulldesc.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
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
                                        href: `/mobile/${item.slug.current}`,
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
                        currentUser && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center justify-center gap-4 mb-5",
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
                                        open && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Review__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            handleClose: handleClose,
                                            pid: mobile._id
                                        })
                                    ]
                                })
                            ]
                        }),
                        currentUser && !userrate && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StarRating__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            pid: mobile.slug.current
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center justify-center gap-2",
                            children: [
                                currentUser && userrate && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "your rating is"
                                }),
                                userrate && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Rate__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
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

/***/ })

};
;
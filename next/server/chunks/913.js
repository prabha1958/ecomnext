"use strict";
exports.id = 913;
exports.ids = [913];
exports.modules = {

/***/ 345:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Saree)
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1492);
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2296);
/* harmony import */ var _Rate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(661);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_portabletext_react__WEBPACK_IMPORTED_MODULE_3__, _sanity_client__WEBPACK_IMPORTED_MODULE_4__, _lib_client__WEBPACK_IMPORTED_MODULE_5__, firebase_firestore__WEBPACK_IMPORTED_MODULE_8__, _firebase_config__WEBPACK_IMPORTED_MODULE_9__]);
([_portabletext_react__WEBPACK_IMPORTED_MODULE_3__, _sanity_client__WEBPACK_IMPORTED_MODULE_4__, _lib_client__WEBPACK_IMPORTED_MODULE_5__, firebase_firestore__WEBPACK_IMPORTED_MODULE_8__, _firebase_config__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default()(_lib_client__WEBPACK_IMPORTED_MODULE_5__/* .client */ .L);
function Saree({ saree  }) {
    const [rate, setRate] = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(()=>{
        const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_9__.db, "ratings"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.where)("pid", "==", saree.slug.current));
        const res = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.onSnapshot)(q, (snapshot)=>{
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
        saree.slug.current
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
            href: `/sarees/${saree.slug.current}`,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: " max-w-sm mx-autorounded-lg flex flex-col items-center space-y-1",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        className: " object-fill",
                        src: builder.image(saree.image[0]).width(300).height(300).url(),
                        width: 300,
                        height: 300,
                        alt: saree.name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-sm my-3 px-2  font-medium text-gray-800",
                        children: saree.name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Rate__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        rate: rate
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "text-xs font-bold text-gray-900 ",
                        children: [
                            "₹ ",
                            saree.saleprice,
                            " ",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "text-xs font-thin text-gray-600 line-through",
                                children: [
                                    "mrp :₹ ",
                                    saree.mrp
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "text-xs font-bold text-gray-400",
                        children: [
                            "( ₹",
                            saree.mrp - saree.saleprice,
                            " off )"
                        ]
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
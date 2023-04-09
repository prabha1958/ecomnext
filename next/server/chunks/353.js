"use strict";
exports.id = 353;
exports.ids = [353];
exports.modules = {

/***/ 6353:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ OtherRelated)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3267);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1791);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1492);
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2296);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Rate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(661);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_client__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_5__, _firebase_config__WEBPACK_IMPORTED_MODULE_6__]);
([_lib_client__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_5__, _firebase_config__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function OtherRelated({ other  }) {
    const builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default()(_lib_client__WEBPACK_IMPORTED_MODULE_2__/* .client */ .L);
    const [rate, setRate] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_6__.db, "ratings"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.where)("pid", "==", other.slug.current));
        const res = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.onSnapshot)(q, (snapshot)=>{
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
        other.slug.current
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "max-w-xl flex flex-col items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                className: " object-cover",
                src: builder.image(other.image[0]).width(200).height(250).url(),
                width: 200,
                height: 150,
                alt: other.name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: " w-48 text-sm font-bold text-themed4 ",
                children: other.name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Rate__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                rate: rate
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-sm font-light text-gray-800",
                        children: "Color:"
                    }),
                    "\xa0",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-sm text-bold text-gray-600",
                        children: other.color
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
                        children: other.size
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
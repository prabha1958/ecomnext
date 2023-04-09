exports.id = 844;
exports.ids = [844];
exports.modules = {

/***/ 2844:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Review)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9783);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Rate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(661);
/* harmony import */ var _StarRating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5013);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_1__, _StarRating__WEBPACK_IMPORTED_MODULE_4__]);
([_hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_1__, _StarRating__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function Review({ handleClose , pid , name  }) {
    const [review, setReview] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const { currentUser , updatereview , isLoading , success  } = (0,_hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_1__/* .useAuthContext */ .E)();
    const [inputError, setInputError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!review) {
            setInputError("you have to write something");
            return;
        }
        updatereview(pid, currentUser.uid, currentUser.displayName, review);
    };
    if (!success) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center bg-themed3 opacity-95 ",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full md:w-2/3 bg-white px-3 py-2 opacity-100 rounded-lg mx-2 ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full text-right",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            onClick: handleClose,
                            className: "text-sm font-bold text-themed4 cursor-pointer",
                            children: "close"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col items-center space-y-2 ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-xl font-bold text-themed3",
                                children: "Rate this product"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                onSubmit: handleSubmit,
                                className: "w-full",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-full ",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Write your review of the product"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                placeholder: "write something ",
                                                className: " w-full h-24 py-2 px-3 text-sm font-medium rounded border border-gray-300",
                                                onChange: (e)=>setReview(e.target.value),
                                                value: review,
                                                required: true
                                            }),
                                            inputError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-xs text-red-500 font-bold",
                                                children: inputError
                                            })
                                        ]
                                    }),
                                    !isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: handleSubmit,
                                        type: "submit",
                                        className: "px-3 py-2 bg-themed4 text-xs font-thin text-white rounded-md ",
                                        children: "Submit"
                                    }),
                                    isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "submit",
                                        className: "px-3 py-2 bg-themed4 text-xs font-thin text-white rounded-md ",
                                        children: "Please wait..."
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        });
    } else {
        handleClose();
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5013:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ StarRating)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tippy_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9027);
/* harmony import */ var _tippy_js_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tippy_js_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8933);
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4823);
/* harmony import */ var _hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9783);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_6__]);
_hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function StarRating({ pid  }) {
    const [currentValue, setCurrentValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [hoverValue, setHoverValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
    const { rate , isLoading , loginError , currentUser  } = (0,_hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_6__/* .useAuthContext */ .E)();
    const stars = Array(5).fill(0);
    const handleClick = (value)=>{
        setCurrentValue(value);
        rate(pid, currentUser.uid, value);
    };
    const handleMouseOver = (value)=>{
        setHoverValue(value);
    };
    const handleMouseLeave = ()=>{
        setHoverValue(undefined);
    };
    const colors = {
        orange: "#E5AE1C",
        gray: "#E9E9E8"
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col items-start justify-start cursor-pointer gap-1",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "Give Your rating"
            }),
            !isLoading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center gap-1",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaStar, {
                        size: 25,
                        color: hoverValue > 0 || currentValue > 0 ? colors.orange : colors.gray,
                        onClick: ()=>handleClick(1),
                        onMouseOver: ()=>handleMouseOver(1),
                        onMouseLeave: handleMouseLeave
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaStar, {
                        size: 25,
                        color: hoverValue > 1 || currentValue > 1 ? colors.orange : colors.gray,
                        onClick: ()=>handleClick(2),
                        onMouseOver: ()=>handleMouseOver(2),
                        onMouseLeave: handleMouseLeave
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaStar, {
                        size: 25,
                        color: hoverValue > 2 || currentValue > 2 ? colors.orange : colors.gray,
                        onClick: ()=>handleClick(3),
                        onMouseOver: ()=>handleMouseOver(3),
                        onMouseLeave: handleMouseLeave
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaStar, {
                        size: 25,
                        color: hoverValue > 3 || currentValue > 3 ? colors.orange : colors.gray,
                        onClick: ()=>handleClick(4),
                        onMouseOver: ()=>handleMouseOver(4),
                        onMouseLeave: handleMouseLeave
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaStar, {
                        size: 25,
                        color: hoverValue > 4 || currentValue > 4 ? colors.orange : colors.gray,
                        onClick: ()=>handleClick(5),
                        onMouseOver: ()=>handleMouseOver(5),
                        onMouseLeave: handleMouseLeave
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: " ml-2 p-1 rounded-full font-bold bg-themed4 text-sm text-white",
                        children: hoverValue
                    })
                ]
            }),
            isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-xs font-bold text-red-500",
                children: "Please wait ..."
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Tooltip({ message  }) {
    return /*#__PURE__*/ _jsx("div", {
        className: "text-xs font-thin text-themed3 bg-themel3 p-1 rounded-lg",
        children: message
    });
}


/***/ }),

/***/ 8933:
/***/ (() => {



/***/ })

};
;
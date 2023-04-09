"use strict";
(() => {
var exports = {};
exports.id = 495;
exports.ids = [495];
exports.modules = {

/***/ 7953:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Register)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9783);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_google_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7486);
/* harmony import */ var react_google_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_google_button__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_1__]);
_hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function Register() {
    const [inputError, setInputError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const [mobileError, setMobileError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [inputs, setInputs] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
        name: "",
        mobile: "",
        email: "",
        premises: "",
        street: "",
        area: "",
        landmark: "",
        city: "",
        state: "",
        pin: "",
        password: "",
        confirm_password: ""
    });
    const { isLoading , signup , loginError , currentUser , signupWithGoogle  } = (0,_hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_1__/* .useAuthContext */ .E)();
    const handleChange = (e)=>{
        setInputs((prev)=>({
                ...prev,
                [e.target.name]: e.target.value
            }));
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (inputs.mobile.length > 10 || inputs.mobile.length < 10) {
            setMobileError("Mobile should be of 10 digits");
            return;
        }
        if (inputs.password !== inputs.confirm_password) {
            setInputError("passwords are not matching");
            return;
        }
        signup(inputs);
    };
    const handleClick = (e)=>{
        e.preventDefault();
        signupWithGoogle();
    };
    if (!currentUser) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit,
                className: " w-96 mx-auto ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Register here"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-xs font-bold text-gray-700 ",
                                children: "Name"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                className: "px-2 py-2 text-sm font-medium rounded-lg w-full border border-themel1",
                                name: "name",
                                onChange: (e)=>handleChange(e),
                                value: inputs.name,
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full mt-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-xs font-bold text-gray-700 ",
                                children: "Email"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "email",
                                className: "px-2 py-2 text-sm font-medium rounded-lg w-full border border-themel1",
                                name: "email",
                                onChange: (e)=>handleChange(e),
                                value: inputs.email,
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full mt-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-xs font-bold text-gray-700 ",
                                children: "Mobile Number"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "number",
                                className: "px-2 py-2 text-sm font-medium rounded-lg w-full border border-themel1",
                                name: "mobile",
                                onChange: (e)=>handleChange(e),
                                value: inputs.mobile,
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full mt-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-xs font-bold text-gray-700 ",
                                children: "House/Flat number and Premises Name"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                className: "px-2 py-2 text-sm font-medium rounded-lg w-full border border-themel1",
                                name: "premises",
                                onChange: (e)=>handleChange(e),
                                value: inputs.premises,
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full mt-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-xs font-bold text-gray-700 ",
                                children: "Street Name"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                className: "px-2 py-2 text-sm font-medium rounded-lg w-full border border-themel1",
                                name: "street",
                                onChange: (e)=>handleChange(e),
                                value: inputs.street,
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full mt-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-xs font-bold text-gray-700 ",
                                children: "Area Name"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                className: "px-2 py-2 text-sm font-medium rounded-lg w-full border border-themel1",
                                name: "area",
                                onChange: (e)=>handleChange(e),
                                value: inputs.area,
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full mt-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-xs font-bold text-gray-700 ",
                                children: "Land Mark"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                className: "px-2 py-2 text-sm font-medium rounded-lg w-full border border-themel1",
                                name: "landmark",
                                onChange: (e)=>handleChange(e),
                                value: inputs.landmark,
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full mt-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-xs font-bold text-gray-700 ",
                                children: "City Name"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                className: "px-2 py-2 text-sm font-medium rounded-lg w-full border border-themel1",
                                name: "city",
                                onChange: (e)=>handleChange(e),
                                value: inputs.city,
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full mt-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-xs font-bold text-gray-700 ",
                                children: "State Name"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                className: "px-2 py-2 text-sm font-medium rounded-lg w-full border border-themel1",
                                name: "state",
                                onChange: (e)=>handleChange(e),
                                value: inputs.state,
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full mt-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-xs font-bold text-gray-700 ",
                                children: "PIN"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "number",
                                className: "px-2 py-2 text-sm font-medium rounded-lg w-full border border-themel1",
                                name: "pin",
                                onChange: (e)=>handleChange(e),
                                value: inputs.pin,
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full mt-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-xs font-bold text-gray-700 ",
                                children: "Password"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "password",
                                className: "px-2 py-2 text-sm font-medium rounded-lg w-full border border-themel1",
                                name: "password",
                                onChange: (e)=>handleChange(e),
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full mt-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-xs font-bold text-gray-700 ",
                                children: "Confirm Password"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "password",
                                className: "px-2 py-2 text-sm font-medium rounded-lg w-full border border-themel1",
                                name: "confirm_password",
                                onChange: (e)=>handleChange(e),
                                required: true
                            }),
                            inputError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "py-2 text-xs font-bold text-red-500",
                                children: inputError
                            })
                        ]
                    }),
                    !isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: " rounded-lg px-3 py-2 mt-3 bg-themed4 text-sm font-medium text-white",
                        children: "Submit"
                    }),
                    isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: " rounded-lg px-3 py-2 mt-3 bg-themed4 text-sm font-medium text-white",
                        children: "Signing you up ...."
                    }),
                    loginError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "py-2 text-xs font-bold text-red-500",
                        children: loginError
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_google_button__WEBPACK_IMPORTED_MODULE_4__.GoogleButton, {
                        onClick: handleClick,
                        className: "my-2"
                    })
                ]
            })
        });
    } else {
        router.push({
            pathname: "/"
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7360:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ register)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7953);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Register__WEBPACK_IMPORTED_MODULE_1__]);
_components_Register__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function register() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full mt-24 py-5",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Register__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 7486:
/***/ ((module) => {

module.exports = require("react-google-button");

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
var __webpack_exports__ = __webpack_require__.X(0, [296,783], () => (__webpack_exec__(7360)));
module.exports = __webpack_exports__;

})();
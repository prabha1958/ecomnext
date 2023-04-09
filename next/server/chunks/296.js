"use strict";
exports.id = 296;
exports.ids = [296];
exports.modules = {

/***/ 2296:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ auth),
/* harmony export */   "db": () => (/* binding */ db)
/* harmony export */ });
/* unused harmony export storage */
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(401);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3392);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_storage__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_storage__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Import the functions you need from the SDKs you need




// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-_y4uAnE50r5bbnvuMk51RMRCtuXXEZE",
    authDomain: "ecomnext-fcb05.firebaseapp.com",
    projectId: "ecomnext-fcb05",
    storageBucket: "ecomnext-fcb05.appspot.com",
    messagingSenderId: "42861101678",
    appId: "1:42861101678:web:8e81ec0bf67797a136dc7f"
};
// Initialize Firebase
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);
const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)();
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
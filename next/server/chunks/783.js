"use strict";
exports.id = 783;
exports.ids = [783];
exports.modules = {

/***/ 8506:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HD": () => (/* binding */ AuthContextProvider),
/* harmony export */   "Vo": () => (/* binding */ AuthContext)
/* harmony export */ });
/* unused harmony export authReducer */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(401);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1492);
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2296);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, _firebase_config__WEBPACK_IMPORTED_MODULE_4__, uuid__WEBPACK_IMPORTED_MODULE_5__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, _firebase_config__WEBPACK_IMPORTED_MODULE_4__, uuid__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const authReducer = (state, action)=>{
    switch(action.type){
        case "SIGNUP":
            return {
                ...state,
                currentUser: action.payload
            };
        case "LOGIN":
            return {
                ...state,
                currentUser: action.payload
            };
        case "LOGOUT":
            return {
                ...state,
                currentUser: action.payload
            };
        case "ONCHANGE":
            return {
                ...state,
                currentUser: action.payload
            };
        default:
            return {
                ...state
            };
    }
};
const initialState = {
    currentUser: null,
    isAuthReady: false
};
const AuthContextProvider = ({ children  })=>{
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [loginError, setLoginError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [userrate, setUserrate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(authReducer, {
        currentUser: null,
        isAuthReady: false
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const unsub = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__/* .auth */ .I, (user)=>{
            if (user) {
                (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.db, "users", user.uid)).then((doc)=>{
                    dispatch({
                        type: "ONCHANGE",
                        payload: {
                            uid: user.uid,
                            displayName: doc.data().displayName,
                            email: doc.data().email,
                            mobile: doc.data().mobile,
                            premises: doc.data().premises,
                            street: doc.data().street,
                            area: doc.data().area,
                            landmark: doc.data().landmark,
                            city: doc.data().city,
                            state: doc.data().state,
                            pin: doc.data().pin
                        }
                    });
                });
            }
        });
        return ()=>{
            unsub();
        };
    }, []);
    const signup = async (inputs)=>{
        setIsLoading(true);
        try {
            const res = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.createUserWithEmailAndPassword)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__/* .auth */ .I, inputs.email, inputs.password).then((res)=>{
                (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.updateProfile)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__/* .auth.currentUser */ .I.currentUser, {
                    displayName: inputs.name,
                    email: inputs.email
                });
                (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.db, "users", res.user.uid), {
                    displayName: inputs.name,
                    email: inputs.name,
                    mobile: inputs.mobile,
                    premises: inputs.premises,
                    street: inputs.street,
                    area: inputs.area,
                    landmark: inputs.landmark,
                    city: inputs.city,
                    state: inputs.state,
                    pin: inputs.pin
                });
                dispatch({
                    type: "SIGNUP",
                    payload: {
                        uid: res.user.uid,
                        displayName: inputs.name,
                        email: inputs.email,
                        mobile: inputs.mobile,
                        premises: inputs.premises,
                        street: inputs.street,
                        area: inputs.area,
                        landmark: inputs.landmark,
                        city: inputs.city,
                        state: inputs.state,
                        pin: inputs.pin
                    }
                });
            });
            setIsLoading(false);
        } catch (errors) {
            setIsLoading(true);
            setLoginError(errors.message);
            setIsLoading(false);
        }
    };
    const login = async (email, password)=>{
        try {
            setIsLoading(true);
            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__/* .auth */ .I, email, password).then((usercred)=>{
                const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.db, "users", usercred.user.uid);
                (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)(docRef).then((doc)=>{
                    dispatch({
                        type: "LOGIN",
                        payload: {
                            uid: usercred.user.uid,
                            displayName: doc.data().displayName,
                            email: doc.data().email,
                            mobile: doc.data().mobile,
                            premises: doc.data().premises,
                            street: doc.data().street,
                            area: doc.data().area,
                            landmark: doc.data().landmark,
                            city: doc.data().city,
                            state: doc.data().state,
                            pin: doc.data().pin
                        }
                    });
                });
            });
            setIsLoading(false);
        } catch (error) {
            setIsLoading(true);
            setLoginError("invalid email or password ");
            setIsLoading(false);
        }
    };
    const logout = async (id)=>{
        setIsLoading(true);
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__/* .auth */ .I).then(()=>{
            dispatch({
                type: "LOGOUT",
                payload: null
            });
        });
        setIsLoading(false);
    };
    const signupWithGoogle = async ()=>{
        const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_2__.GoogleAuthProvider();
        try {
            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithPopup)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__/* .auth */ .I, provider).then((result)=>{
                const credential = firebase_auth__WEBPACK_IMPORTED_MODULE_2__.GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.db, "users", result.user.uid), {
                    displayName: result.user.displayName,
                    email: result.user.email
                });
                dispatch({
                    type: "SIGNUP",
                    payload: {
                        uid: result.user.uid,
                        displayName: result.user.displayName,
                        email: result.user.email
                    }
                });
                setSuccess(true);
            });
        } catch (error) {
            setLoginError(error.message);
        }
    };
    const updatereview = async (pid, userid, name, rev)=>{
        try {
            setIsLoading(true);
            const res = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.db, "reviews", (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)()), {
                pid,
                userid,
                name,
                rev,
                date: Date.now()
            });
            setSuccess(true);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(true);
            setLoginError(error.message);
            setIsLoading(false);
        }
    };
    const getrate = async (productid)=>{
        if (state.currentUser) {
            const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.db, "ratings"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)("userid", "==", state.currentUser.uid), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)("pid", "==", productid));
            const res = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.onSnapshot)(q, (snapshot)=>{
                snapshot.docs.forEach((doc)=>{
                    setUserrate(doc.data().rate);
                    console.log(doc.data().rate);
                });
            });
        }
    };
    const rate = async (pid, userid, rate)=>{
        console.log(userid);
        try {
            setIsLoading(true);
            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.db, "ratings", (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)()), {
                pid,
                userid,
                rate
            });
            setIsLoading(false);
        } catch (error) {
            setIsLoading(true);
            setLoginError(error.message);
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            isLoading,
            success,
            signup,
            loginError,
            ...state,
            logout,
            login,
            signupWithGoogle,
            updatereview,
            rate,
            getrate,
            userrate
        },
        children: children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9783:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ useAuthContext)
/* harmony export */ });
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8506);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_AuthContext__WEBPACK_IMPORTED_MODULE_0__]);
_context_AuthContext__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useAuthContext = ()=>{
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_0__/* .AuthContext */ .Vo);
    if (!context) {
        throw Error("useAutheCOtext must be inside an ContextProvider");
    }
    return context;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
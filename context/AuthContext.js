import { createContext, useEffect, useReducer, useState } from "react";
import { createUserWithEmailAndPassword,
  onAuthStateChanged, 
  signOut,
  updateProfile, 
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  } from "firebase/auth";
import { doc, setDoc, getDoc, deleteDoc, collection,query,where, getDocs, onSnapshot, Query  } from "firebase/firestore";
import { auth, storage, db } from "../firebase/config";
import { v4 as uuid } from "uuid";


export const AuthContext = createContext()
  
export const authReducer = (state,action)=>{
  switch (action.type) {
      case "SIGNUP":
          return {...state, currentUser:action.payload}
      case "LOGIN":
          return {...state, currentUser:action.payload}
      case "LOGOUT":
              return {...state, currentUser:action.payload}    
      case "ONCHANGE":
          return {...state, currentUser:action.payload}        
      default:
          return {...state}
  }
}

const initialState = {
  currentUser:null,
  isAuthReady:false
}



  


export const AuthContextProvider =({children})=>{
    const [isLoading,setIsLoading] = useState(false)
    const [success,setSuccess] = useState()
    const [loginError,setLoginError] = useState()
    const [userrate,setUserrate] = useState(null)
    const [state,dispatch] = useReducer(authReducer, {
      currentUser:null,
      isAuthReady:false
    })
    const [notification,_setNotification]= useState('')

    const setNotification = (message)=>{
      _setNotification(message)
      setTimeout(()=>{
        _setNotification('')
      },5000)
    }


    useEffect(() => {
      const unsub = onAuthStateChanged(auth, (user) => {
          if(user){
              getDoc(doc(db,"users",user.uid)).then((doc)=>{
                  dispatch({type:"ONCHANGE",payload:{
                      uid:user.uid,
                      displayName:doc.data().displayName,
                      email:doc.data().email,
                      mobile:doc.data().mobile,
                      premises:doc.data().premises,
                      street:doc.data().street,
                      area:doc.data().area,
                      landmark:doc.data().landmark,
                      city:doc.data().city,
                      state:doc.data().state,
                      pin:doc.data().pin
                  }})
                 
              })
          }
        
       
      });
    
      return () => {
        unsub();
      };
    }, []);

    const signup = async (inputs)=>{
      setIsLoading(true)
       try{
          const res = await createUserWithEmailAndPassword(auth,inputs.email,inputs.password)
          .then((res)=>{
             updateProfile(auth.currentUser,{
              displayName:inputs.name,
              email:inputs.email 
             })

             setDoc(doc(db,"users",res.user.uid),{
               displayName:inputs.name,
               email:inputs.email,
               mobile:inputs.mobile,
               
             })

             setDoc(doc(db,"addresses",uuid()),{
              userid:res.user.uid,
              premises:inputs.premises,
              street:inputs.street,
              area:inputs.area,
              landmark:inputs.landmark,
              city:inputs.city,
              state:inputs.state,
              pin:inputs.pin,
              default:true
             })

             dispatch({type:"SIGNUP", payload:{
              uid:res.user.uid,
              displayName:inputs.name,
              email:inputs.email,
              mobile:inputs.mobile,
              premises:inputs.premises,
              street:inputs.street,
              area:inputs.area,
              landmark:inputs.landmark,
              city:inputs.city,
              state:inputs.state,
              pin:inputs.pin
             
            }})

          
          })
           setIsLoading(false)
       }catch(errors){
          setIsLoading(true)
          setLoginError(errors.message)
          setIsLoading(false)
       }
     }

     const login = async (email,password)=>{
      try{
        setIsLoading(true)
       await  signInWithEmailAndPassword(auth,email,password)
       .then((usercred)=>{
       
        const docRef = doc(db,"users", usercred.user.uid)
        
        getDoc(docRef).then((doc)=>{
           dispatch({type:"LOGIN", payload:{
            uid:usercred.user.uid,
            displayName:doc.data().displayName,
            email:doc.data().email,
            mobile:doc.data().mobile,
            premises:doc.data().premises,
            street:doc.data().street,
            area:doc.data().area,
            landmark:doc.data().landmark,
            city:doc.data().city,
            state:doc.data().state,
            pin:doc.data().pin
            
           }})
        })

           
       })
       setIsLoading(false)
    }catch(error){
        setIsLoading(true)
        setLoginError("invalid email or password ")
        setIsLoading(false)
    }
   }

    const logout = async (id)=>{
     
      setIsLoading(true)
     
         signOut(auth).then(()=>{
          dispatch({type:"LOGOUT", payload:null})
         
       })

      setIsLoading(false) 
       }


       const signupWithGoogle = async ()=>{
        const provider = new GoogleAuthProvider()

        try{
          await signInWithPopup(auth,provider)
          .then((result)=>{

           const credential = GoogleAuthProvider.credentialFromResult(result);
           const token = credential.accessToken;
           // The signed-in user info.
           setDoc(doc(db,"users",result.user.uid),{
               displayName:result.user.displayName,
               email:result.user.email,
              
              })    

        
             dispatch({type:"SIGNUP", payload:{
               uid:result.user.uid,
               displayName:result.user.displayName,
               email:result.user.email,
              
             }})

          
           setSuccess(true)
              
          })
        }catch(error){
          setLoginError(error.message)
        }

        
   }


   const updatereview = async (pid,userid,name,rev)=>{
      
    try{
      setIsLoading(true)
      
      const res = await setDoc(doc(db,"reviews",uuid()),{
         pid,
         userid,
         name,
         rev,
         date:Date.now()
      }) 

      setSuccess(true)
      setIsLoading(false)
      
 
    }catch(error){
       setIsLoading(true)
       setLoginError(error.message)
       setIsLoading(false)
    }
        
   }


   const rate = async (pid,userid,rate)=>{
    
      try{
        setIsLoading(true)
          await setDoc(doc(db,"ratings",uuid()),{
           pid,
           userid,
           rate
          })
          setIsLoading(false)
      }catch(error){
        setIsLoading(true)
        setLoginError(error.message)
        setIsLoading(false)
      }
   }


   const getcart = (userid)=>{
    const q = query(collection(db,"cart"),where("userid","==",userid))
    const res =  onSnapshot(q,(snapshot)=>{
        let result = []
         snapshot.docs.forEach((doc)=>{
             result.push(doc.data())
            
         })
       
        return { result}
         
    })
   }
          const address = async (inputs,userid)=>{
             try{
              setIsLoading(true)

              await setDoc(doc(db,"addresses",uuid()),{
                userid,
                premises:inputs.premises,
                street:inputs.street,
                area:inputs.area,
                landmark:inputs.landmark,
                city:inputs.city,
                state:inputs.state,
                pin:inputs.pin,
                default:false
              })

              .then(()=>{
                 setSuccess(true)
              })

              setIsLoading(false)
             }catch(error){
              setIsLoading(true)
              setLoginError(error.message)
              setIsLoading(false)
             }
          }
 
    return (
        <AuthContext.Provider value={{
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
          userrate,
          getcart,
          address,
          notification,
          setNotification
         
        
        }}  >
          {children}
        </AuthContext.Provider>
    )
}




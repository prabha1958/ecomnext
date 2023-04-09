import { useAuthContext } from "@/hooks/useAuthContext"
import { useRouter } from "next/router"
import { useState } from "react"
import {GoogleButton} from "react-google-button"


export default function Register() {
  const [inputError,setInputError] = useState()
  const [mobileError,setMobileError] = useState()
  const router = useRouter()
  

   const [inputs,setInputs] = useState({
    name:"",
    mobile:"",
    email:"",
    premises:"",
    street:"",
    area:"",
    landmark:"",
    city:"",
    state:"",
    pin:"",
    password:"",
    confirm_password:""

   })
  
   const {isLoading,signup,loginError,currentUser,signupWithGoogle} = useAuthContext() 

   const handleChange = (e)=>{
      setInputs(prev=>({...prev,[e.target.name]:e.target.value}))

   }



   const handleSubmit = (e)=>{
    e.preventDefault()
    if(inputs.mobile.length >10 || inputs.mobile.length <10 ){
         setMobileError("Mobile should be of 10 digits")
         return
    }
     if(inputs.password !== inputs.confirm_password){
        setInputError("passwords are not matching")
        return
     }

    signup(inputs)
    
  }

  const handleClick = (e)=>{
    e.preventDefault()
    signupWithGoogle()
}
 

if(!currentUser){

  return (
          <>
            
            <form onSubmit={handleSubmit} className=" w-96 mx-auto ">
            <p>Register here</p>
                <div className="w-full">
                    <p className="text-xs font-bold text-gray-700 ">Name</p>
                    <input 
                     type="text"
                     className="px-2 py-2 text-sm font-medium rounded-lg w-full border border-themel1"
                     name="name"
                     onChange={(e)=>handleChange(e)}
                     value={inputs.name}
                     required
                     />
                </div>
                <div className="w-full mt-2">
                    <p className="text-xs font-bold text-gray-700 ">Email</p>
                    <input 
                     type="email"
                     className="px-2 py-2 text-sm font-medium rounded-lg w-full border border-themel1"
                     name="email"
                     onChange={(e)=>handleChange(e)}
                     value={inputs.email}
                     required
                     />
                </div>
               
                <div className="w-full mt-2">
                    <p className="text-xs font-bold text-gray-700 ">Mobile Number</p>
                    <input 
                     type="number"
                     className="px-2 py-2 text-sm font-medium rounded-lg w-full border border-themel1"
                     name="mobile"
                     onChange={(e)=>handleChange(e)}
                     value={inputs.mobile}
                     required
                     />
                </div>
                
                <div className="w-full mt-2">
                    <p className="text-xs font-bold text-gray-700 ">House/Flat number and Premises Name</p>
                    <input 
                     type="text"
                     className="px-2 py-2 text-sm font-medium rounded-lg w-full border border-themel1"
                     name="premises"
                     onChange={(e)=>handleChange(e)}
                     value={inputs.premises}
                     required
                     />
                </div>
                <div className="w-full mt-2">
                    <p className="text-xs font-bold text-gray-700 ">Street Name</p>
                    <input 
                     type="text"
                     className="px-2 py-2 text-sm font-medium rounded-lg w-full border border-themel1"
                     name="street"
                     onChange={(e)=>handleChange(e)}
                     value={inputs.street}
                     required
                     />
                </div>
                <div className="w-full mt-2">
                    <p className="text-xs font-bold text-gray-700 ">Area Name</p>
                    <input 
                     type="text"
                     className="px-2 py-2 text-sm font-medium rounded-lg w-full border border-themel1"
                     name="area"
                     onChange={(e)=>handleChange(e)}
                     value={inputs.area}
                     required
                     />
                </div>
                <div className="w-full mt-2">
                    <p className="text-xs font-bold text-gray-700 ">Land Mark</p>
                    <input 
                     type="text"
                     className="px-2 py-2 text-sm font-medium rounded-lg w-full border border-themel1"
                     name="landmark"
                     onChange={(e)=>handleChange(e)}
                     value={inputs.landmark}
                     required
                     />
                </div>
                <div className="w-full mt-2">
                    <p className="text-xs font-bold text-gray-700 ">City Name</p>
                    <input 
                     type="text"
                     className="px-2 py-2 text-sm font-medium rounded-lg w-full border border-themel1"
                     name="city"
                     onChange={(e)=>handleChange(e)}
                     value={inputs.city}
                     required
                     />
                </div>
                <div className="w-full mt-2">
                    <p className="text-xs font-bold text-gray-700 ">State Name</p>
                    <input 
                     type="text"
                     className="px-2 py-2 text-sm font-medium rounded-lg w-full border border-themel1"
                     name="state"
                     onChange={(e)=>handleChange(e)}
                     value={inputs.state}
                     required
                     />
                </div>
                <div className="w-full mt-2">
                    <p className="text-xs font-bold text-gray-700 ">PIN</p>
                    <input 
                     type="number"
                     className="px-2 py-2 text-sm font-medium rounded-lg w-full border border-themel1"
                     name="pin"
                     onChange={(e)=>handleChange(e)}
                     value={inputs.pin}
                     required
                     />
                </div>
                <div className="w-full mt-4">
                    <p className="text-xs font-bold text-gray-700 ">Password</p>
                    <input 
                     type="password"
                     className="px-2 py-2 text-sm font-medium rounded-lg w-full border border-themel1"
                     name="password"
                     onChange={(e)=>handleChange(e)}
                     required
                     />
                </div>
                <div className="w-full mt-2">
                    <p className="text-xs font-bold text-gray-700 ">Confirm Password</p>
                    <input 
                     type="password"
                     className="px-2 py-2 text-sm font-medium rounded-lg w-full border border-themel1"
                     name="confirm_password"
                     onChange={(e)=>handleChange(e)}
                     required
                     />
                     {inputError && <p className="py-2 text-xs font-bold text-red-500">{inputError}</p>}
                </div>
                {!isLoading && <button type="submit" className=" rounded-lg px-3 py-2 mt-3 bg-themed4 text-sm font-medium text-white">Submit</button>}
                {isLoading && <button  className=" rounded-lg px-3 py-2 mt-3 bg-themed4 text-sm font-medium text-white">Signing you up ....</button>}
                {loginError && <p className="py-2 text-xs font-bold text-red-500">{loginError}</p>}
                <GoogleButton onClick={handleClick} className="my-2" />
            </form>
            </>
  )}else{
    router.push({pathname:"/"})
  }
}

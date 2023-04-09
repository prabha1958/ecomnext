import { useAuthContext } from "@/hooks/useAuthContext"
import { useRouter } from "next/router"
import { useState } from "react"


export default function AddAddress({setOpen}) {
    const {isLoading, loginError, success,address, currentUser} = useAuthContext()
    const router = useRouter()
   const [inputs,setInputs]=useState({
    premises:"",
    street:"",
    area:"",
    landmark:"",
    city:"",
    state:"",
    pin:"",
   })


   const handleChange = (e)=>{
    setInputs(prev=>({...prev,[e.target.name]:e.target.value}))

     }

     const handleSubmit = async (e)=>{
         e.preventDefault()
         await address(inputs, currentUser.uid)
        .then(()=>{
            setOpen(false)
        })
     }



  return (
    <>
            
    <form onSubmit={handleSubmit} className=" w-96 mx-auto ">
    <p>Add Your Shipping Address</p>
       
        
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
       
        {!isLoading && <button type="submit" className=" rounded-lg px-3 py-2 mt-3 bg-themed4 text-sm font-medium text-white">Add Address</button>}
        {isLoading && <button  className=" rounded-lg px-3 py-2 mt-3 bg-themed4 text-sm font-medium text-white">Adding address ....</button>}
        {loginError && <p className="py-2 text-xs font-bold text-red-500">{loginError}</p>}
       
    </form>
    </>
  )
}

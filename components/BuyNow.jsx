import { useAuthContext } from "@/hooks/useAuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import AddAddress from "./AddAddress";
import { collection,query,where, onSnapshot,getDocs  } from "firebase/firestore";
import {  db } from "../firebase/config";
import Address from "./Address";
import MoreAddress from "./MoreAddress";
import CartItem from "./CartItem";
import axios from "axios";
import OrderPay from "./OrderPay";
import { groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { client } from "@/lib/client";
import BuyNowPay from "./BuyNowPay";


export default function BuyNow({handleClose, cartitem, setOpenModal}) {
    const {currentUser, setNotification} = useAuthContext()
    const [address,setAddress] = useState([])
    const [defaultAddress,setDefaultAddress] = useState()
    const [selAddress,setSelAddress] = useState([])
    const [open,setOpen] = useState(false)
    const [response,setResponse] = useState()
    const [modalOpen,setModalOpen] = useState(false)
    const [isLoading,setIsLoading] = useState(false)
    const [photo,setPhoto] = useState([])
    const builder = imageUrlBuilder(client);
  
   

    useEffect(()=>{
        async function go(){
            const q = query(collection(db,"addresses"),where("userid","==",currentUser.uid))
             const res =  onSnapshot(q,(snapshot)=>{
                 let result = []
                 
                  snapshot.docs.forEach((doc)=>{
                      result.push({...doc.data(),id:doc.id})
                    
                  })
                  const defadd = result.filter(item=>item.default == true)
                 
                  setAddress(result)
                  setSelAddress(defadd)
                
             })
        }
        go()
    },[currentUser])

      
    useEffect(()=>{
        async function go(){
          const query = groq`*[_id == '${cartitem._id}']{image}`

          const result = await client.fetch(query)
           setPhoto(result)
        }
        go()
    },[cartitem])

    const inputs = [
        userid=>currentUser.uid,
        uername=>currentUser.displayName,
        email=>currentUser.email,
        mobile=>currentUser.mobile,
        amount=>cartitem.saleprice
]

   

     const orderCreate = async (inputs)=>{
         setIsLoading(true)
        if(selAddress.length == 0){
             setNotification("select your default shipping address")
             setIsLoading(false)
             return
        }
       
        const result =  await axios.post("/api/buynoworder",{
         
            userid:currentUser.uid,
            username:currentUser.displayName,
            email:currentUser.email,
            mobile:currentUser.mobile,
            amount:cartitem.price,
            cartitem,
            address:selAddress,
        })

          if(result){
            setResponse(result.data.res)
            setModalOpen(true)
             setIsLoading(false)
          }
     }

return (
    <>
    <div className="fixed top-0 bottom-0 left-0 right-0 opacity-95 flex items-center justify-center   md:items-end md:justify-end  bg-slate-200 lg:py-5 px-0 lg:px-3  overflow-y-auto " >
   
      <div className="w-full mx-auto my-auto lg:w-2/3 opacity-100 lg:py-10 px-5 lg:px-10 mb-20  ">  
         <div className="mt-28">
          <div className="w-full text-right  px-4 ">
                   <p onClick={()=>setOpenModal(false)} className="cursor-pointer">Close</p> 
          </div>  
          <div className="w-full text-center my-4 px-4 ">
                   <p className="text-2xl font-bold text-themed4">CHECKOUT </p> 
          </div>  
           <div  className="w-full flex flex-col md:flex-row items-center justify-center gap-3 mx-6">
               <div className=" flex flex-col items-start  space-y-2 ">
                    <p className="text-sm font-bold text-themed4">Your details</p>
                   <div className=" w-96 mb-2 flex items-center gap-2 mt-5">
                       <p className="font-bold text-xs text-themed4">Name</p>
                       <p className="text-sm font-extrabold text-themed3">{currentUser.displayName}</p>
                   </div>
                   <div className=" w-96 mb-2 flex items-center gap-2">
                       <p className="font-bold text-xs text-themed4">email</p>
                       <p className="text-sm font-extrabold text-themed3">{currentUser.email}</p>
                   </div>
                   <div>
                      <p>Shipping address selected</p>
                      {selAddress && selAddress.length>0 && (
                        <>
                         <p className="text-xs font-bold text-themeblue ">{selAddress[0].premises}</p>
                         <p className="text-xs font-bold text-themeblue ">{selAddress[0].area}</p>
                         <p className="text-xs font-bold text-themeblue ">{selAddress[0].street}</p>
                         <p className="text-xs font-bold text-themeblue ">{selAddress[0].landmark}</p>
                         <p className="text-xs font-bold text-themeblue ">{selAddress[0].city}</p>
                         <p className="text-xs font-bold text-themeblue ">{selAddress[0].state}</p>
                         <p className="text-xs font-bold text-themeblue ">{selAddress[0].pin}</p>
                        </>
                      )}
                   </div>
                   <div className=" w-full mb-2 flex flex-col  items-center justify-center gap-2 mx-3">
                       <p>Select your shipping address</p>
                       {!address && <AddAddress userid={currentUser.uid}/>}
                       {address && address.map((item, index)=>(
                        <div onClick={()=>setSelAddress(item)} className="flex items-center justify-center gap-2">
                             <Address key={index} address={item}   />
                        </div>
                          
                       ))}
                       
                       </div>
                       <p onClick={()=>setOpen(true)} className="text-xs font-bold text-themeblue cursor-pointer">add addresses</p>
               </div>
               <div className="flex flex-col space-y-2 px-5 overflow-y-auto">
                         <p>Item under purchase</p>
               <div className="w-96 flex items-center justify-evenly gap-4">
                       
                          {photo.length>0 && photo.map((item,index)=>(
                                <Image  src={builder.image(item.image[index]).width(40).height(60).url()} 
                                width={40}
                                height={60}
                                className=" w-8 h-10 object-cover hidden md:block"
                                alt="product name"
                                />
                            ))} 
                        <p className="text-sm font-bold text-themed3">{cartitem.name}</p>     
                        <p className="text-sm font-bold text-gray-600">{cartitem.saleprice}</p>    
                                                
                </div>
                <p>Amount to be pad: <span>{cartitem.saleprice}</span></p>  
                  <p>Pay with</p>
                  {!isLoading && <img onClick={orderCreate}  src="/razorpay.png" className=" w-1/3 rounded-lg cursor-pointer"/>}
                  {isLoading && 
                  (
                    <div className="relative">
                  <img   src="/razorpay.png" className=" w-1/3 rounded-lg opacity-60"/>
                     <p className="absolute top-2 left-3 text-sm font-bold text-white">Please wait</p>
                    </div>
                  )
                  }
               </div>
              
           </div>    
           </div>
       {open && <MoreAddress  setOpen={setOpen}/>}
       {modalOpen && <BuyNowPay data={response} setModalOpen={setModalOpen} setOpen={setOpen} />}
        </div>
    </div>
  
    </>
  )
}

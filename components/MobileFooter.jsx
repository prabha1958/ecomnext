import { useAuthContext } from "@/hooks/useAuthContext"

import { useEffect, useState } from "react"
import Cart from "./Cart"
import Message from "./Message"
import MobileMenu from "./MobileMenu"
import { collection,query,where, onSnapshot,doc, setDoc,getDocs,deleteDoc  } from "firebase/firestore";
import {  db } from "../firebase/config";



export default function MobileFooter() {
 
    const [menuOpen,setMenuOpen] = useState(false)
    const {currentUser, logout, notification} = useAuthContext()
    const [cartitems,setCartitems] = useState([])
    const [cartOpen,setCartOpen] = useState(false)
    
   const handleClose = ()=>{
    setMenuOpen(false)
   }
   useEffect(()=>{
    if(currentUser){  
     async function go(){
        const q = query(collection(db,"cart"),where("userid","==",currentUser.uid))
        const res =  onSnapshot(q,(snapshot)=>{
            let result = []
             snapshot.docs.forEach((doc)=>{
                 result.push({...doc.data(), id:doc.id})
                
             })
           
             setCartitems(result)
             
        })
     }
     go()
    }
   },[currentUser])

   const cartClose = ()=>{
    setCartOpen(false)
   }

   const deleteItem = async (id)=>{
       
    await deleteDoc(doc(db,"cart", id))
}




  return (
    <>
    <div className="fixed">
    <div className="fixed w-full bottom-0 py-4 md:py-2 bg-themed2 z-50 flex items-center justify-between md:hidden">

           {menuOpen && (
            <MobileMenu handleClose={handleClose} />
         )}




          {!menuOpen && (
           <div onClick={()=> setMenuOpen(!menuOpen)} class="mx-2 space-y-1 md:hidden cursor-pointer z-20">
           <div className="w-6 h-0.5 bg-white"></div>
           <div className="w-6 h-0.5 bg-white"></div>
           <div className="w-6 h-0.5 bg-white"></div>
         </div>
        )}

        {menuOpen && (
           <div onClick={()=> setMenuOpen(!menuOpen)} class="ml-2 md:hidden cursor-pointer z-20">
           <div className=" text-xs font-bold text-white">close</div>
         
           
         </div>
        )}

                  <div onClick={()=>setCartOpen(true)} className="relative block cursor-pointer">
                     <img src="/cart.png" className=" w-8 h-6 mx-2" />
                     {cartitems.length>0 && <p className="absolute p-0.5 rounded-full bg-red-600 text-xs font-bold text-themel4 left-4 -top-2">{cartitems.length}</p>}
                   </div>
       
      </div>
    </div>
    {cartOpen && <Cart cartitems={cartitems} cartClose={cartClose} deleteItem={deleteItem}/>}
      {notification && <Message notification={notification} />}
    </> 
  )
}

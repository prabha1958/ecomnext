import { useEffect, useState } from "react"
import Search from "./Search"
import Link from "next/link";
import { useAuthContext } from "@/hooks/useAuthContext";
import { collection,query,where, onSnapshot,doc, setDoc,getDocs,deleteDoc  } from "firebase/firestore";
import {  db } from "../firebase/config";
import Cart from "./Cart";
import Message from "./Message";



export default function Navbar() {
    const [menuOpen,setMenuOpen] = useState()
    const {currentUser, logout, notification} = useAuthContext()
    const [cartitems,setCartitems] = useState([])
    const [cartOpen,setCartOpen] = useState(false)
   


 
    const handleClick =(e)=>{
        e.preventDefault()
        logout()
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
    <div className="fixed w-full top-0 py-6 md:py-2 bg-themed3 z-50">
       
        <div className="max-w-7xl mx-auto px-5 py-2 flex items-center justify-between relative ">
      
         
         <Link href="/"><img src="/logo.png" className="w-1/18 h-9 hidden md:block cursor-pointer  " /></Link>
         <Search />
        
          <div className="hidden md:block">
            <div className=" flex items-center justify-around gap-2 ">
              {!currentUser && 
                 (
                  <>
                    <Link href="/login"><p className="text-md font-thin text-themel4 cursor-pointer">Login</p></Link>
                    <Link href="/register"><p className="text-md font-thin text-themel4 cursor-pointer">Register</p></Link>
                  </>
                 )
              }
              {currentUser && (
                <>
                   <div onClick={()=>setCartOpen(true)} className="relative block cursor-pointer">
                     <img src="/cart.png"  className=" w-8 h-6 mx-2" />
                     {cartitems.length>0 && <p className="absolute p-0.5 rounded-full bg-red-600 text-xs font-bold text-themel4 left-4 -top-2">{cartitems.length}</p>}
                   </div>
                    
                  <p className="text-md font-thin text-themel4 cursor-pointer">{currentUser.displayName}</p>
                  <button onClick={handleClick} className="text-md px-2 py-1 bg-themed4 font-thin text-themel4 cursor-pointer">Logout</button>
                 

                </>
              )}
               
            </div>
          </div>
        
         </div>

         {menuOpen && (
             <div id="menu" className=" flex flex-col items-center justify-center space-y-4 bg-themed3 min-h-max absolute left-0 top-0 w-full p-10  rounded-b-3xl  text-themel4  text-center ">
                <Link href="/"><img src="/logo.png" className="w-1/18 h-9" /></Link>
                 <Link href="/login"><p className="text-md font-thin text-themel4 cursor-pointer">Login</p></Link>
                <Link href="/register"><p className="text-md font-thin text-themel4 cursor-pointer">Register</p></Link>
             </div>
         )}

       
      
    </div>
      {cartOpen && <Cart cartitems={cartitems} cartClose={cartClose} deleteItem={deleteItem}/>}
      {notification && <Message notification={notification} />}
    </>
  )
}


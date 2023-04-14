
import { useAuthContext } from '@/hooks/useAuthContext'
import Link from 'next/link'
import React from 'react'

export default function Account({setAccountOpen}) {
    const {currentUser,logout} = useAuthContext()


    const handleClick =(e)=>{
        e.preventDefault()
        logout()
    }

    
  return (
    <div className='fixed  top-0 left-0 bottom-0 right-0 bg-themed3 flex items-center justify-center'>
           <div className='flex flex-col items-center px-2 space-y-2'>
            <div className='w-full text-right'>
               <p onClick={()=>setAccountOpen(false)} className='text-xs font-bold text-themel4'>close</p>
            </div>
           
              <Link href="/"><img onClick={()=>setAccountOpen(false)} src="/logo.png" className=" w-16 h-12 cursor-pointer  " /></Link> 
         
                {currentUser ?
                  <>
                      <p className="text-md font-thin text-themel4 cursor-pointer">{currentUser.displayName}</p>
                      <button onClick={handleClick} className="text-md px-2 py-1 font-thin text-themel4 cursor-pointer">Logout</button>
                      <Link href="/orders"><p className="text-md font-thin text-themel4 cursor-pointer">Orders</p></Link>
                      

                  </>
                  :
                  <>
                    <Link href="/login"><p onClick={()=>setAccountOpen(false)} className="text-md font-thin text-themel4 cursor-pointer">Login</p></Link>
                    <Link href="/register"><p onClick={()=>setAccountOpen(false)} className="text-md font-thin text-themel4 cursor-pointer">Register</p></Link>
                  </>
                }
           </div>
    </div>
  )
}

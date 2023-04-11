import { useAuthContext } from '@/hooks/useAuthContext'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function Ordersuccessbuynow({data, setSuccess}) {
   const {currentUser} = useAuthContext()
   const router = useRouter()
  return (
    <div className='fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center bg-themed2 opacity-95'>
        <div className='w-2/3 flex flex-col space-y-2 mx-auto bg-white p-4 rounded-lg '>
             <div className='w-full m-2 bg-green-100 rounded-lg flex flex-col items-center space-y-2'>
                     <p className='text-3xl font-bold text-green-800 '>Thanks for the purchase</p>
                     <p>The item </p>
                     <div className="w-full before:flex flex-col items-start">
                        <p className='text-sm font-bold text-themeblue'>{data.cartitems.name}</p>
                     will be delivered to 
                     
                     <p>{currentUser.displayName}</p> 
                     <p>{data.address.premises}</p>
                     <p>{data.address.area}</p>
                     <p>{data.address.street}</p>
                     <p>{data.address.city}</p>
                     <p>{data.address.state}</p>
                     <p>{data.address.pin}</p>
                     </div>
                    
                    <div className='w-full text-center'>
                         <Link href="/"><button onClick={()=>window.location.reload()}  className="px-3 py-2 bg-green-600 text-white font-bold">CONTINUE SHOPPING</button></Link>
                    </div>

             </div>
        </div>
        </div>
  )
}

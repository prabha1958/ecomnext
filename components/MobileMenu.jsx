
import Link from 'next/link'
import React from 'react'

export default function MobileMenu({handleClose}) {
    
  return (
    <div className='fixed  top-0 left-0 bottom-0 right-0 bg-themed3 flex items-center justify-center'>
           <div className='flex flex-col items-center px-2 space-y-2'>
           
              <Link href="/"><img onClick={handleClose} src="/logo.png" className=" w-16 h-12 cursor-pointer  " /></Link> 
         
              
                <p className='text-xl text-themel4 font-bold'>Browse products</p>
                <div className='flex flex-col items-start space-y-1'>
                <Link href="/allcomputers"><p onClick={handleClose} className='text-sm font-bold text-themel4'>Computers</p></Link>  
                   <Link href="/allmobiles"><p onClick={handleClose} className='text-sm font-bold text-themel4'>Mobiles</p></Link>  
                   <Link href="/allmenclothe"><p onClick={handleClose} className='text-sm font-bold text-themel4'>Mens Clothes</p></Link>  
                   <Link href="/allwomenclothe"><p onClick={handleClose} className='text-sm font-bold text-themel4'>Women Clothes</p></Link>  
                   <Link href="/allsarees"><p onClick={handleClose} className='text-sm font-bold text-themel4'>Sarees</p></Link>   
                </div>
           </div>
    </div>
  )
}

import { useAuthContext } from '@/hooks/useAuthContext'
import React, { useState } from 'react'
import Rate from './Rate'
import StarRating from './StarRating'

export default function Review({handleClose,pid,name}) {
    const [review,setReview] = useState()
    const {currentUser,updatereview, isLoading,success} = useAuthContext()
    const [inputError,setInputError] = useState('')

   

   const handleSubmit = (e)=>{
       e.preventDefault()
      if(!review){
        setInputError('you have to write something')
        return

      }
        
      updatereview(pid,currentUser.uid,currentUser.displayName,review)
   }


  
if(!success){
  return (
    <div className='fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center bg-themed3 opacity-95 '>
          <div className='w-full md:w-2/3 bg-white px-3 py-2 opacity-100 rounded-lg mx-2 '>
                <div className='w-full text-right'>
                     <p onClick={handleClose} className='text-sm font-bold text-themed4 cursor-pointer'>close</p>
                </div>
              <div className='flex flex-col items-center space-y-2 '>
                  <p className='text-xl font-bold text-themed3'>Rate this product</p>
               
                
                 <form onSubmit={handleSubmit} className='w-full'>
                    <div className='w-full '>
                        <p>Write your review of the product</p>
                        <textarea 
                           placeholder="write something "
                           className=' w-full h-24 py-2 px-3 text-sm font-medium rounded border border-gray-300' 
                           onChange={(e) => setReview(e.target.value)}
                           value={review} 
                           required
                        >

                        </textarea>
                       {inputError && <p className='text-xs text-red-500 font-bold'>{inputError}</p>}
                    </div>
                    {!isLoading && <button onClick={handleSubmit} type="submit" className='px-3 py-2 bg-themed4 text-xs font-thin text-white rounded-md '>Submit</button>}
                    {isLoading && <button type="submit" className='px-3 py-2 bg-themed4 text-xs font-thin text-white rounded-md '>Please wait...</button>}
                 </form>
              </div>     
          </div>
    </div>
  )}else{
    
  }
}

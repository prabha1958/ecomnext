import React from 'react'

export default function Message({notification}) {
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 flex items-center'>
         <div className='px-4 py-3 bg-orange-200 text-orange-900 text-sm font-bold'>
             {notification}
         </div>
    </div>
  )
}

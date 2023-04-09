import Computer from '@/components/Computer'
import Mobile from '@/components/Mobile'
import { client } from '@/lib/client'
import { groq } from 'next-sanity'
import React from 'react'

export default function allmobiles({mobile}) {
  
  return (
    <div className="max-w-7xl mx-auto mb-28 ">
         <div className="w-full flex items-center justify-center mt-16 px-7 py-1 bg-gray-200">
            <p className="text-sm font-bold text-themed4">All Mibiles</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-2 ">
                
         {mobile && mobile.map((item, index)=>(
                 <Mobile key={index} mobile={item} />
                ))}
    
         </div>
    </div>
  )
}


const query = groq`*[_type == 'mobile']| order(_udatedAt, desc)`

export  async function getStaticProps(){
    const mobile = await client.fetch(query)

    return {
        props:{
            mobile
        }
    }
}


import Saree from '@/components/Saree'
import { client } from '@/lib/client'
import { groq } from 'next-sanity'
import React from 'react'

export default function allsarees({saree}) {

  return (
    <div className="max-w-7xl mx-auto mb-28 ">
         <div className="w-full flex items-center justify-center mt-16 px-7 py-1 bg-gray-200">
            <p className="text-sm font-bold text-themed4">All womenclothes</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-2 ">
                
         {saree && saree.map((item, index)=>(
                 <Saree key={index} saree={item} />
                ))}
    
         </div>
    </div>
  )
}


const query = groq`*[_type == 'saree'] | order(_udatedAt, desc)`

export  async function getStaticProps(){
    const saree = await client.fetch(query)

    return {
        props:{
           saree
        }
    }
}
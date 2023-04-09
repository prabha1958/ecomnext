
import Womenclothe from '@/components/Womenclothe'
import { client } from '@/lib/client'
import { groq } from 'next-sanity'
import React from 'react'

export default function allwomenclothe({womenclothe}) {

  return (
    <div className="max-w-7xl mx-auto mb-28 ">
         <div className="w-full flex items-center justify-center mt-16 px-7 py-1 bg-gray-200">
            <p className="text-sm font-bold text-themed4">All womenclothes</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-2 ">
                
         {womenclothe && womenclothe.map((item, index)=>(
                 <Womenclothe key={index} womenclothe={item} />
                ))}
    
         </div>
    </div>
  )
}


const query = groq`*[_type == 'womensclothe'] | order(_udatedAt, desc)`

export  async function getStaticProps(){
    const womenclothe = await client.fetch(query)

    return {
        props:{
           womenclothe
        }
    }
}

import { client } from "@/lib/client"
import  { SanityDocument } from "@sanity/client"
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import Computer from "@/components/Computer";
import Mobile from "@/components/Mobile";
import Menclothe from "@/components/Menclothe";
import Womenclothe from "@/components/Womenclothe";
import Saree from "@/components/Saree";
import Head from "@/components/Head";
import Search from "@/components/Search";
import Link from "next/link";

export default function allmenclothes({ menclothes}) {
 
  return (
   <div className="w-full py-4"> 
  
    <div className="max-w-7xl mx-auto mb-28 ">
    <div className="w-full flex items-center justify-center mt-16 mb-3 px-7 py-1 bg-gray-200">
            <p className="text-sm font-bold text-themed4">All Mens Clothes</p>
         </div>
       <div className="grid grid-cols-1 md:grid-cols-4 gap-2 "> 
        
          {menclothes && menclothes.map((menclothe)=>(
                <Menclothe menclothe={menclothe} />
            ))}
       </div>
      
    </div>
  </div>  
  )

 
}



const query2 = groq`*[_type == 'mensclothe' ] | order(_udatedAt, desc)[0..5]`


export async function getStaticProps(){
 
  const menclothes = await client.fetch(query2)
 
 
return {
 props:{
  
   menclothes
  
  
 }
}


}



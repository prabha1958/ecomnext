

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
import { client } from "../lib/client";



export default function Home({products,mobiles, menclothes, womenclothes, sarees, search}) {
  
 
  return (
   <div className="w-full py-4"> 

   <Head />
    <div className="max-w-7xl mx-auto mb-28 px-3 ">
    <div className="w-full flex items-center justify-between my-5 px-7 py-1 bg-gray-200">
        <p className="text-sm font-bold text-themed4">Computers</p>
        <Link href="/allcomputers"><p className="text-sm font-bold text-themed4">See all computers</p></Link>
    </div>
   
       <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-2 ">
       
          {products && products.map((product)=>(
              <Computer product={product} />
          ))}
       
       </div>
       <div className="w-full flex items-center justify-between my-5 px-7 py-1 bg-gray-200">
          <p className="text-sm font-bold text-themed4">Mobiles</p>
          <Link href="/allmobiles"><p className="text-sm font-bold text-themed4">See all mobiles</p></Link>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-4 gap-2 "> 
        
          {mobiles && mobiles.map((mobile)=>(
                <Mobile mobile={mobile} />
            ))}
       </div>
       <div className="w-full flex items-center justify-between my-5 px-7 py-1 bg-gray-200">
          <p className="text-sm font-bold text-themed4">Mens Clothes</p>
          <Link href="/allmenclothes"><p className="text-sm font-bold text-themed4">See all Mens Clothes</p></Link>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-4 gap-2 "> 
        
          {menclothes && menclothes.map((menclothe)=>(
                <Menclothe menclothe={menclothe} />
            ))}
       </div>
       <div className="w-full flex items-center justify-between my-5 px-7 py-1 bg-gray-200">
          <p className="text-sm font-bold text-themed4">Womens Clothes</p>
          <Link href="/allwomenclothe"><p className="text-sm font-bold text-themed4">See all Womens Clothes</p></Link>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-4 gap-2 "> 
        
          {womenclothes && womenclothes.map((womenclothe)=>(
                <Womenclothe womenclothe={womenclothe}  />
            ))}
       </div>
       <div className="w-full flex items-center justify-between my-5 px-7 py-1 bg-gray-200">
          <p className="text-sm font-bold text-themed4">Sarees</p>
          <Link href="/allsarees"><p className="text-sm font-bold text-themed4">See all sarees</p></Link>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-4 gap-2 px-2 "> 
        
          {sarees && sarees.map((saree)=>(
                <Saree saree={saree} />
            ))}
       </div>
      
    </div>
  </div>  
  )

 
}


const query = groq`*[_type == 'computer'] | order(_udatedAt, desc)[0..3]`
const query1 = groq`*[_type == 'mobile' && subcategory == 'device'] | order(_udatedAt, desc)[0..3]`
const query2 = groq`*[_type == 'mensclothe' ] | order(_udatedAt, desc)[0..3]`
const query3 = groq`*[_type == 'womensclothe' ] | order(_udatedAt, desc)[0..3]`
const query4 = groq`*[_type == 'saree' ] | order(_udatedAt, desc)[0..3]`
const query5 = groq`*[]`

export async function getStaticProps(){
  const products = await client.fetch(query)
  const mobiles = await client.fetch(query1)
  const menclothes = await client.fetch(query2)
  const womenclothes = await client.fetch(query3)
  const sarees = await client.fetch(query4)
  const search = await client.fetch(query5)
 
return {
 props:{
   products,
   mobiles,
   menclothes,
   womenclothes,
   sarees,
   search
  
 }
}


}



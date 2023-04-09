import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import { SanityDocument } from "@sanity/client";
import { client } from "@/lib/client";
import Head from "next/head";
import Link from "next/link";
import { collection,query,where, onSnapshot  } from "firebase/firestore";
import {  db } from "../firebase/config";
import Rate from "./Rate";
import { useEffect, useState } from "react";


const builder = imageUrlBuilder(client);

export default function Menclothe({menclothe}) {
  const [rate,setRate] = useState()

  useEffect(()=>{
     async function go(){
       
    const q = query(collection(db,"ratings"), where("pid","==", menclothe.slug.current))
    const res =  onSnapshot(q,(snapshot)=>{
       let result =[]
      snapshot.docs.forEach((doc)=>{
          result.push(doc.data().rate)
          let sum = 0
          for (let i = 0; i < result.length; i++) {
            sum += result[i]
          }
         
           let ar = sum/result.length
        
           setRate(ar)
          
              })
          })
     }
     go()
   },[menclothe.slug.current])

  

  return (
    <>
  <Link href={`/menclothe/${menclothe.slug.current}`}>
    <div className=" max-w-sm mx-autorounded-lg flex flex-col items-center space-y-1">
        <Image 
           className=" object-fill"
           src={builder.image(menclothe.image[0]).width(300).height(300).url()}
           width={300}
           height={300}
           alt={menclothe.name}
        />
        <p className="text-sm my-3 px-2  font-medium text-gray-800">{menclothe.name}</p>
        <Rate rate={rate} />
        <p className="text-xs font-bold text-gray-900 ">&#8377; {menclothe.saleprice} <span className="text-xs font-thin text-gray-600 line-through">mrp :&#8377; {menclothe.mrp}</span></p>
         <p className="text-xs font-bold text-gray-400">&#40; &#8377;{menclothe.mrp - menclothe.saleprice} off &#41;</p>
    </div>
    </Link>
    </>
  )
}


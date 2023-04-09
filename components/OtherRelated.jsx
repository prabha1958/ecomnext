import Link from "next/link";
import { client } from "@/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { collection,query,where, onSnapshot  } from "firebase/firestore";
import {  db } from "../firebase/config";
import { useEffect, useState } from "react";
import Rate from "./Rate";



export default function OtherRelated({other}) {
    const builder = imageUrlBuilder(client);
    const [rate,setRate] = useState()


    useEffect(()=>{
        const q = query(collection(db,"ratings"), where("pid","==", other.slug.current))
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
       },[other.slug.current])



  return (
   
                     <div className="max-w-xl flex flex-col items-center">
                         <Image 
                            className=" object-cover"
                            src={builder.image(other.image[0]).width(200).height(250).url()}
                            width={200}
                            height={150}
                            alt={other.name}
                        />
                        <p className=" w-48 text-sm font-bold text-themed4 ">{other.name}</p>
                        <Rate rate={rate} />
                        <p><span className="text-sm font-light text-gray-800">Color:</span>&nbsp;<span className="text-sm text-bold text-gray-600">{other.color}</span></p>
                         <p><span className="text-sm font-light text-gray-800">Size:</span>&nbsp;<span className="text-sm text-bold text-gray-600">{other.size}</span></p>
                     </div>
                
  )
}

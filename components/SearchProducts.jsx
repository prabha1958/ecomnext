
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/lib/client";
import { useRouter } from "next/router";
import {  collection,query,where, onSnapshot  } from "firebase/firestore";
import {  db } from "../firebase/config";
import Rate from "./Rate";
import { useEffect, useState } from "react";

const builder = imageUrlBuilder(client);
export default function SearchProducts({data}) {
    const router = useRouter()
    const [rate,setRate] = useState()

    const handleClick = ()=>{
          router.push({
            pathname:"/product",
            query: {
                pid:data._id,
                slug:data.slug.current,
                ptype:data._type
            }
          })
    }
console.log(data)

    useEffect(()=>{
      const q = query(collection(db,"ratings"), where("pid","==", data.slug.current))
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
     },[data.slug.current])





  return (
    <>

    <div onClick={handleClick} className=" w-full flex  items-center justify-between gap-3 hover:bg-slate-200 cursor-pointer ">
        <Image 
           className=" object-fill  w-44 h-36"
           src={builder.image(data.image[0]).width(250).height(170).url()}
           width={250}
           height={170}
           alt={data.name}
        />
       <div className=" w-96 h-40  text-left">
      
            <p className="text-sm my-3 px-2  font-medium text-gray-800">{data.name}</p>
            <Rate rate={rate} />
            <p className="text-xs font-bold text-gray-900 ">&#8377; {data.saleprice} <span className="text-xs font-thin text-gray-600 line-through">mrp :&#8377; {data.mrp}</span></p>
            <p className="text-xs font-bold text-gray-400">&#40; &#8377;{data.mrp - data.saleprice} off &#41;</p>
        </div>
        
        
    </div>
  
    </>
  )
}

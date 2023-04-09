import { client } from "@/lib/client";
import { useEffect, useState } from "react";
import { groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

export default function CartItem({cartitems, sno, deleteItem}) {
    const [photo,setPhoto] = useState([])
    const builder = imageUrlBuilder(client);
   
    
    useEffect(()=>{
        async function go(){
          const query = groq`*[_id == '${cartitems.pid}']{image}`
          const result = await client.fetch(query)
           setPhoto(result)
        }
        go()
    },[cartitems])


   
  return (
    
    <>    
    <div className="w-96 flex items-center justify-evenly gap-4">
           <p>{sno}</p>
          {photo.length>0 && photo.map((item,index)=>(
                                <Image  src={builder.image(item.image[0]).width(40).height(60).url()} 
                                width={40}
                                height={60}
                                className=" w-8 h-10 object-cover hidden md:block"
                                alt="product name"
                                />
                            ))}  
          <p className="text-sm font-bold text-themed3">{cartitems.pname}</p>     
          <p className="text-sm font-bold text-gray-600">{cartitems.price}</p>    
                                       
    </div>
    <div className="w-full text-center">
      <p onClick={()=>deleteItem(cartitems.id)} className="font-bold text-xs text-themeblue cursor-pointer ">delete</p>
    </div>
    
    </> 

  )
}

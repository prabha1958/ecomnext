import { SanityDocument } from "@sanity/client";
import { groq } from "next-sanity";
import { client } from "@/lib/client"
import ComputerSingle from "@/components/ComputerSingle";
import MobileSingle from "@/components/MobileSingle";
import { useEffect, useState } from "react";
import search from "../public/search.png"
import { useRouter } from "next/router";






export default function Search() {
   const [search,setSearch] = useState([])
   const [searchvalue,setSearchValue] = useState([])
   const [searchTips, setSearchTips] = useState([])
   const router = useRouter()
    
     
     const handleSearch = async ()=>{
      
        setSearchTips('')
      router.push({
         pathname:"/searchresult",
         query: {searchvalue}
      })  
           
     }
      const handleKey = async ()=>{
    
        const query = groq`*['${searchvalue}' in tags]{"stags":name, "slug":slug}`
        const result = await client.fetch(query)
          let abc = []
        
          result.map((item)=>{
            abc.push(item)
           
            setSearchTips(abc)
          })
         
      }

    
        

  return (
   
      <div className="w-80 ml-6 md:ml-44 lg:ml-96 flex items-center justify-center absolute top-0 md:top-2 ">
        <div className=" w-80 md:w-96 ">
          <div className="w-full flex items-center justify-center">
             <input  onKeyDown={()=>handleKey()} onChange={(e)=>setSearchValue(e.target.value)} placeholder="search here for anything"  className=" w-3/4 md:w-full px-3 rounded-l-lg py-2  bg-themel4 text-xs font-bold text-themed4 text-center" />
               <div onClick={handleSearch}  className=" w-8 h-8 bg-themed1 flex items-center justify-center"><img src={"/search.png"}  className=" w-5 h-5 cursor-pointer" /></div>
          
          </div>
           
            
          <>
              <div className="flex flex-col space-y-2 items-center  bg-white rounded-b-xl px-3" >
              {searchTips && searchvalue && searchTips.map((item,index)=>(
                 <p onClick={handleSearch}  key={index} className="text-xs font-bold text-themed4 cursor-pointer  " >{item.stags}</p>
                 )) }
              </div>
               
               </>
            
        </div>
        
      </div>
   
  )
}



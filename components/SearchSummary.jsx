import  { useEffect, useState } from 'react'
import { groq } from "next-sanity";
import { client } from "@/lib/client"
import SearchProducts from './SearchProducts';

export default function SearchSummary({searchstr}) {
      
     const [data,setData] = useState()

     useEffect(()=>{
        async function go(){
           const query = groq`*[tags match '${searchstr}*']`
           const result = await client.fetch(query)
           setData(result)
        }
        go()
     },[searchstr])
    
  return (
    <div className="w-full "> 
      <div className="max-w-7xl mx-auto mb-28  ">
        
         <div className=' mt-4 flex flex-col items-start justify-center '>
         <div className="w-full flex items-center justify-center mt-16 px-7 py-6 bg-gray-200">
            {data && !data.length == '' && <p className="text-sm font-bold  text-themed4">search results for <span className='text-sm font-bold text-themeblue'>{searchstr}</span> and beyond</p>}
            {data && data.length == '' && <p className="text-sm font-bold  text-themered">no results for search string <span className='text-sm font-bold text-themed4'>{searchstr}</span> </p>}
          
         </div>
         <div className=' my-8 flex flex-col items-start space-y-3 px-3'>
         {data && data.map((item)=>(    
                <SearchProducts  data={item}/>   
                
            ))}
         </div>
          
           
         </div>
      </div>
    </div>    
  )
}

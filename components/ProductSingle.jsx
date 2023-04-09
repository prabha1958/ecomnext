import { useEffect, useState } from "react"
import { client } from "@/lib/client";
import { groq } from "next-sanity";
import ProductShow from "./ProductShow";


export default function ProductSingle({pid,ptype,slug}) {
     const [data,setData] = useState()
    useEffect(()=>{
        async function go(){
          const query = groq`*[_id == '${pid}']`
          const result = await client.fetch(query)
            setData(result)
        }
        go()
    },[pid])

  return (
    <div >
       {data && data.map((item)=>(
           <ProductShow mobile={data} type={ptype} />
       ))}
    </div>
  )
}

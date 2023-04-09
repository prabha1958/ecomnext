
import { useEffect, useState } from "react";
import { collection,query,where, getDocs  } from "firebase/firestore";
import {  db } from "../firebase/config";

export default function Ratex({pid,userid}) {
    const [rate,setRate] = useState()

    

     useEffect(()=>{
        async function go(){
            const q = query(collection(db,"ratings"), where("pid","==", pid), where("userid","==",userid))
           const  res = await getDocs(q)
            res.forEach((doc)=>{
                setRate(doc.data().rate)
                console.log(doc.data().rate)
            })
        }
        go()
    },[])
   
   const  rate1 = rate/5*100
  return (
    <div className="flex items-center justify-center gap-3">
      {rate1>0 &&  
         (
          <>
         <div className="flex items-center h-5 w-24 bg-gray-300">
            <div className=" flex items-center bg-themeorange h-5" style={{width:rate1}}>
                <img src="/star.png" className="w-5 h-5" />
                <img src="/star.png" className="w-5 h-5"/>
                <img src="/star.png" className="w-5 h-5" />
                <img src="/star.png"  className="w-5 h-5"/>
                <img src="/star.png" className="w-5 h-5" />
            </div>
         
         </div>
         <div className="text-xs font-bold">{Math.round(rate*10)/10}</div>
         </>
     ) 
       }

       {!rate1 >0 &&  <p className="text-xs font-bold bg-gray-300 px-2 py-1">no rating</p>}

        
          
    </div>
  )
}

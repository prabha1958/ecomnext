import { useAuthContext } from "@/hooks/useAuthContext"
import { useEffect } from "react"
import { collection, getDocs,doc,onSnapshot, query, where, Timestamp} from "firebase/firestore"
import { db } from "@/firebase/config"
import { useState } from "react"
import moment from "moment"


export default function orders() {
    const {currentUser} = useAuthContext()
    const [orders,setOrders] = useState([])
    const timestamp = new Timestamp()


    useEffect(()=>{
        if(currentUser){  
         async function go(){
            const q = query(collection(db,"orders"),where("userid","==",currentUser.uid))
            const res =  onSnapshot(q,(snapshot)=>{
                let result = []
                 snapshot.docs.forEach((doc)=>{
                     result.push(doc.data())
                     setOrders(result)
                 })
               
               
                 
            })
         }
         go()
        }
       },[currentUser])

  return (
    <div className="w-full flex items-center justify-center">
          <div  className=" w-4/6 mx-auto flex flex-col mt-20 mb-10 items-center justify-center">
                <p className="text-2xl font-bold text-themed4">Orders</p>
             <div className="flex flex-col items-center mt-5 boder-b-1 border-themed1">
             {orders && orders.map((item,index)=>(
                <>
                    <div key={index} className="flex  items-center gap-4 justify-start">
                        <p>{index+1}</p>
                        <div className="felx flex-col items-center">
                            <div className=" w-96flex items-start justify-between gap-2">
                                <p><span className="text-xs font-bold text-gray-600" >OrderID:</span>&nbsp;&nbsp;<span className="text-sm font-bold text-themed4">{item.orderid}</span></p>
                                <p><span className="text-xs font-bold text-gray-600">PaymentID:</span>&nbsp;&nbsp;<span className="text-sm font-bold text-themed4">{item.paymentid}</span></p>
                                <p><span className="text-xs font-bold text-gray-600">Date of Order:</span>&nbsp;&nbsp;<span className="text-sm font-bold text-themed4">{moment(item.paymentdate).format('DD-MM-YYYY')}</span></p>

                           </div>
                           <div className=" w-96 flex flex-col items-center gap-6 justify-start">
                             {item.items.map((doc,index)=>(
                                <div key={index} className="flex items-start justify-start gap-3">
                                     <p className="text-xs font-medium text-gray-800">{doc.pname}</p>
                                     <p className="text-sm font-bold text-gray-600">{doc.price}</p>
                                </div>
                             ))}
                                  
                            </div>
                              
                         </div>
                        
                         
                    </div>
                    <p><span>Total amount paid:</span>&nbsp;<span className="text-xl font-extrabold text-themed4">{item.amount}</span></p>
                    <hr class="w-full h-1  bg-themed2 border-0 rounded" />
                    </>
                 ))} 
             </div>

          </div>
    </div>
  )
}

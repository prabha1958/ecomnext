import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function ordersuccess() {
     const router = useRouter()
     const [orderid,setOrderId] = useState(router.query.orderid)
     
    useEffect(()=>{
        function go(){
            console.log(orderid)
        }
        go()
    },[])
    
  return (
    <div>
        YOUR ORDER HAS BEEN PAID SUCCESSFULLY
    </div>
  )
}

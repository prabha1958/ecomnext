import { useAuthContext } from "@/hooks/useAuthContext"
import { useEffect } from "react"
import { collection, getDocs,doc,onSnapshot, query, where} from "firebase/firestore"
import { db } from "@/firebase/config"
import { useState } from "react"


export default function Orders() {
    const {currentUser} = useAuthContext()
    const [orders,setOrders] = useState([])
 

  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 flex items-center justify-center">
          <div  className=" max-w-4xl mx-auto flex items-center justify-center">
                ORDERS
          </div>
    </div>
  )
}

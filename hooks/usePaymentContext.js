
import { PaymentContext } from "@/context/PaymentContext"
import { useContext } from "react"


export const usePaymentContext = () => {
    const context = useContext(PaymentContext)
       if (!context){
        throw Error('useAutheCOtext must be inside an ContextProvider')
       }
    return context
}
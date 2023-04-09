import { createContext } from "react";




export const PaymentContext = createContext()


export const PaymentContextProvider = ({children})=>{
  
    

        

    return (
        <PaymentContext.Provider value={{

        }}  >
            {children}
        </PaymentContext.Provider>
    )

}



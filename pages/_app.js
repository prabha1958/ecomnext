import Footer from '@/components/Footer'
import Head from '@/components/Head'
import Message from '@/components/Message'
import MobileFooter from '@/components/MobileFooter'
import Navbar from '@/components/Navbar'
import { AuthContextProvider } from '@/context/AuthContext'
import { PaymentContextProvider } from '@/context/PaymentContext'

import '@/styles/globals.css'




export default function App({ Component, pageProps }) {

  
  return (
    <>
    <PaymentContextProvider>
    <AuthContextProvider>
    <Navbar/>
   
    <Component {...pageProps} />
    <Footer />
    <MobileFooter />
    </AuthContextProvider>
    </PaymentContextProvider>
  </>
  )
}






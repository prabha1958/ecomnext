import { useAuthContext } from "@/hooks/useAuthContext";
import axios from "axios";
import { useState } from "react";
import { doc, setDoc,  deleteDoc  } from "firebase/firestore";
import { db } from "../firebase/config";
import { useRouter } from "next/router";
import Ordersuccess from "./Ordersuccess";
import Ordersuccessbuynow from "./OrderSuccessbuynow";
import moment from "moment";

export default function BuyNowPay({data, setModalOpen,setOpen}) {
    const [paymentDetails,setPaymentDetails] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const {currentUser} = useAuthContext()
    const [success,setSuccess] = useState(false)
    const router = useRouter()
   
    const handleClick = (e)=>{
        e.preventDefault()
    

        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onerror = () => {
          alert('Razorpay SDK failed to load. Are you online?');
        };
        script.onload = async () => {
          try {
            setIsLoading(true);
          
            const options = {
              key: data.razorpayId,
              amount: data.amount.toString(),
              currency: data.currency,
              name: data.name,
              description: data.description,
              order_id: data.orderId,
              handler: async function (response) {
                const result = await axios.post('/api/buynowpayment', {
                  userid: currentUser.uid,
                  amount: data.amount,
                  rzp_paymentid: response.razorpay_payment_id,
                  rzp_orderid: response.razorpay_order_id,
                  rzp_signature: response.razorpay_signature,
                });
               if(result.data.payment){
                  setDoc(doc(db,"orders",response.razorpay_order_id),{
                    userid:currentUser.uid,
                    orderid:response.razorpay_order_id,
                    paymentid:response.razorpay_payment_id,
                    amount:data.amount/100,
                    items:[data.cartitems],
                    paymentdate:Date.now(),
                    shipping:data.address,
                    dispatched:"",
                    delivered:""
                  })

                  await axios.post("https://api.csimarital.in/api/sendmail",{
                    email:currentUser.email,
                    name:currentUser.displayName,
                    orderid:response.razorpay_order_id,
                    paymentid:response.razorpay_payment_id,
                    items:data.cartitems,
                    address:data.address,
                    date:moment(Date.now()).format('DD-MM-YYYY'),
                    total:data.amount/100
               })
               

                 setSuccess(true)
                 setIsLoading(false);
                 
               }
              },
              prefill: {
              
                email: data.email,
                contact:data.mobile,
              },
              notes: {
                address: {
                    premises:data.address.premises,
                    area:data.address.area,
                    city:data.address.area,
                },
              },
              theme: {
                color: '#786818',
              },
            };
           
           
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
          } catch (err) {
            setIsLoading(true)
            alert(err);
            setIsLoading(false);
          }
        };
        document.body.appendChild(script);
       
    }
    

if(!success){
  return (
    <div className='fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center bg-themed2 opacity-95'>
        <div className='max-w-3xl flex flex-col space-y-2 mx-auto bg-white p-4 rounded-lg '>
            <div className='w-full text-right'>
               <p onClick={()=>setModalOpen(false)} className='text-xs font-bold text-gray-700 cursor-pointer '>close</p>
            </div>
            <div className=' w-80 flex-col flex items-center justify-center' >
               <p className='text-xl font-semibold text-themed4' >Pay your Order</p>
               <p><span className='text-xs font-bold text-gray-700'>OrderId:</span>&nbsp;&nbsp;<span className='text-sm font-semibod text-themed4'>{data.orderId}</span></p>
               <p><span className='text-xs font-bold text-gray-700'>Total Amount:</span>&nbsp;&nbsp;<span className='text-xl font-semibod text-themed4'>{data.amount/100}</span></p>
               <p><span className='text-xs font-bold text-gray-700'>Payment for:</span>&nbsp;&nbsp; {data.cartitems.pname}</p>
               
            </div> 
            {!isLoading && <button  onClick={handleClick} className='px-3 py-2 bg-green-500 rounded-md text-white font-bold'>PAY</button>}
              {isLoading && (
                <div className="fixed top-0 bottom-0 right-0 left-0 flex items-center justify-center bg-themed2 opacity-75">
                    <img src="/logo.png" alt="please wait" className=" w-20 h-16 animate-pulse" />
               </div>
              )}
        </div>
        
    </div>
  )}else{
    return <Ordersuccessbuynow data={data} setSuccess={setSuccess}  />
  }
}

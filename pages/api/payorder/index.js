

const Razorpay = require("razorpay")
const shortid = require("shortid")



export default  async function  handler(req,res) {
  
      
    const razorpay = new Razorpay({
        key_id:process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        key_secret:process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET
    })
    
    if(req.method === 'POST'){
   
        const receipt = shortid.generate()
        const options = {
            receipt:receipt,
            amount:req.body.amount*100,
            currency:"INR",
            
        }

         const porder = await razorpay.orders.create(options)
        
         const response = {
            orderId:porder.id,
            razorpayId:process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
            amount:porder.amount,
            currency:'INR',
            name:req.body.username,
            email:req.body.email,
            mobile:req.body.mobile,
            address:{
                premises:req.body.address[0].premises,
                area:req.body.address[0].area,
                street:req.body.address[0].street,
                landmark:req.body.address[0].landmark,
                city:req.body.address[0].city,
                state:req.body.address[0].state,
                pin:req.body.address[0].pin 
            },
            cartitems:req.body.cartitems,
            description:"payment for cart items"
         }

         console.log(response.address)

        res.status(200).json({res:response})
        
    }
   
} 
const Razorpay = require("razorpay")

export default  async function  handler(req,res) {
   if(req.method === 'POST'){
    let body=req.body.rzp_orderid + "|" + req.body.rzp_paymentid;
    var crypto = require("crypto");
    var expectedSignature = crypto.createHmac('sha256', process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET)
                                  .update(body.toString())
                                  .digest('hex');
                                  console.log("sig received " ,req.body.rzp_signature);
   
    var response = "false"

    expectedSignature === req.body.rzp_signature? response = true: response = false

    res.status(200).json({payment:response})

   }


    
}

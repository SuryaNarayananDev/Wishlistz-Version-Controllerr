const Razorpay = require('razorpay');

apiKey=process.env.PAYMENT_ID
apiSecret=process.env.PAYMENT_KEY

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


  module.exports=razorpay;
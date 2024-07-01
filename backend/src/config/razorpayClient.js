const Razorpay = require('razorpay');

apiKey="rzp_test_59ag2n5Dh3DE6X"
apiSecret="nHtTuM48gtXRSq9UqSwE5Ju2"

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


  module.exports=razorpay;
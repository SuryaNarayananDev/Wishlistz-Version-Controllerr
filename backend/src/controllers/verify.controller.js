
const reviewService = require('../services/review.service.js');
const userService = require("../services/user.service.js")
const verifyService = require("../services/verify.service.js")

const verifyUserEmailbyOtp = async (req, res) => {
  const{email,otp}=req.body;
  try{
    const user = await userService.getUserByEmail(email)
      if (!user) {
        return res.status(404).json({ message: 'User not found With Email ', email});
      }
      const verify = await verifyService.verifyUserEmailbyOtp(user.email,otp)
      if (verify) {
      return res.status(200).send("otp",verify);
      }
      return res.status(400).json({ message: 'Invalid OTP' });
  }
  catch(error){

  }

};


const GenerateOtpForEmail = async (req, res) => {
  try{
      const { email } = req.body;
      const user = await userService.getUserByEmail(email)

      if (!user) {
        return res.status(404).json({ message: 'User not found ! in generate otp ', user});
      }else{
        const updatedotp= await verifyService.GenerateOtpService(email)
        return res.status(200).json({ message:"user generate succesfull" },updatedotp);
      }

  }
  catch(error){
      
  }

};

module.exports = {verifyUserEmailbyOtp,GenerateOtpForEmail}

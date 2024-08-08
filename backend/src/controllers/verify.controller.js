
const reviewService = require('../services/review.service.js');
const userService = require("../services/user.service.js")
const verifyService = require("../services/verify.service.js")
const jwtProvider=require("../config/jwtProvider.js")
const jwt = require("jsonwebtoken");

const verifyUserEmailbyOtp = async (req, res) => {
  try{
    const{email,otp}=req.body;
    console.log("@ the verify controller ",email,otp);
    // const user = await userService.getUserByEmail(email)
    // console.log("@ user otp in db",user.otp);
      
    // if (!user) {
    //     return res.status(404).json({ message: 'User not found With Email ', email});
    //   }
      
      if(otp===otp)
        {
          const verify = await verifyService.verifyUserEmailbyOtp(email,otp)
          return res.status(202).json({message:"Verified Otp is True", status:true,verify});
        }else{
          return res.status(404).json({ message: 'OTP is Not Match !',status:true});
        }
      
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
        return res.status(200).json({ message:"user generate succesfull",status:true },updatedotp);
      }

  }
  catch(error){
      
      res.status(500).json({ message: "Failed To Verify.", error: error.message });
  }

};

const resetPassController = async (req,res)=>{
try {
  const {email,otp,pass1,pass2}=req.body
  const user=await userService.getUserByEmail(email)
  if(!user){
    return res.status(404).json({ message: 'User not found With Email ', email});
  }
  const verify=await verifyService.passwordResetService(email,otp,pass1,pass2)
  const jwt=jwtProvider.generateToken(user._id);
  console.log(verify,"data at verify controll reset passsword");
  return res.status(200).send({jwt,message:"login success"});

} catch (error) {
  return "error - verify resetpass controller"
}
}



module.exports = {verifyUserEmailbyOtp,GenerateOtpForEmail,resetPassController}

const otpModel = require("../models/otp.model")
const UserModel = require("../models/user.model")
const userservice = require("./user.service")
const emailService = require("../config/gmail")


const verifyUserEmailbyOtp = async (email, otp) => {
  const user=await userservice.getUserByEmail(email)
  if (!user) {
    return false
  }else{
    if (user.otp===otp) {
      const update = await UserModel.updateOne({ _id: user._id }, { $set: { Verifyemail: true } });
      const setotp = await UserModel.updateOne({ _id: user._id }, { $set: { otp: "null_otp" } });
      await update.save()
      await setotp.save();
      await user.save()
      return true
    }else{
      return false
    }
  }
}

const GenerateOtpService = async (email) => {
  console.log("reached at verify service");

  const otp = Math.floor(1000 + Math.random() * 9000);
  const user = await userservice.getUserByEmail(email)
  if (!user) {
    console.log("user not found in verify ser");

    return "return user not found in verify ser"
  }
  else {
    const FinOtp = otp.toString();
    const useremailcontent={
      emailto:user.email,
      emailsub:"Verification Code From Wishlistz",
      emailcontent:`<p>Hello ${user.firstName},</p>
      <p>You have requested an OTP for ${user.email}'s account verification.</p>
      <p>Your OTP is: <strong>${otp}</strong></p>
      <p>This code is valid for <strong>10 minutes</strong>. Please enter it promptly to continue.</p>
      <p>If you did not initiate this request, please disregard this email.</p>
      <p>Thank you for choosing . Don't Share Your OTP to Anyone</p>
      <p>Sincerely,</p>
      <p><strong>Wishlistz</strong></p>`
    }
    emailService.sendEmail(useremailcontent)
    const setotp = await UserModel.updateOne({ _id: user._id }, { $set: { otp: FinOtp } });
    await user.save()
    return await setotp.save();
  }
}

module.exports = { verifyUserEmailbyOtp, GenerateOtpService };
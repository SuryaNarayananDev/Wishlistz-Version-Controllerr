const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required:true,
    default:"CUSTOMER"
  },
  Verifyemail:{
    type:Boolean,
    default:false
  },
  ph:{
    type:String,
    required:true
  },
  mobile: {
    type: String,
  },
  otp:{
    type:String,
    default:"null_otp"
  }, 
  addresses: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "addresses",
    },
  ], 
  paymentInformation: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "payment_information",
    },
  ],
  ratings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ratings",
    },
  ], 
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "reviews",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model("users", userSchema);

module.exports = User;

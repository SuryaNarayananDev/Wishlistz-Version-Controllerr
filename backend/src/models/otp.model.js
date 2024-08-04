const mongoose = require('mongoose');
const { Schema } = mongoose;

const otpSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  otp: {
    type: Number,
    required: true,

  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Otp = mongoose.model('otp', otpSchema);

module.exports = Otp;

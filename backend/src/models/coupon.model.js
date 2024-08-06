const mongoose = require('mongoose');
const { Schema } = mongoose;

const couponSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  couponcode: {
    type:String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  expiresAt: {
    type:Number,
  }
});

const Coupon = mongoose.model('couponcode', couponSchema);

module.exports = Coupon;

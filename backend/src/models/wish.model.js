

const mongoose = require('mongoose');

const wishSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  wishItems: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'wishItems',
    required: true,
  }],
  totalPrice: {
    type: Number,
    required: true,
    default:0
  },
  totalItem: {
    type: Number,
    required: true,
    default:0
  },
  totalDiscountedPrice: {
    type: Number,
    required: true,
    default:0
  },
  discounte: {
    type: Number,
    required: true,
    default:0
  },
});

const Wish = mongoose.model('wishes', wishSchema);

module.exports = Wish;


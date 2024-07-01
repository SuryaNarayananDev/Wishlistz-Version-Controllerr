const mongoose = require('mongoose');

const wishItemSchema = new mongoose.Schema({
  wish: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'wish',
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'products',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  price: {
    type: Number,
    required: true,
  },
  discountedPrice: {
    type: Number,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
});

const WishItem = mongoose.model('wishItems', wishItemSchema);

module.exports = WishItem;

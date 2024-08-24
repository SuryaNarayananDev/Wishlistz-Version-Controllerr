// productModel.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  price: {
    type: Number,
    // required: true,
  },
  discountedPrice: {
    type: Number,
  },
  discountPersent: {
    type: Number,
  },
  quantity: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
  },
  color: {
    type: String,
  },
  colortag: {
    type: String,
    required:true
  },
  gender: {
    type: String,
    required:true
  },
  sizes: [{
    name:{type:String},
    quantity:{type:Number}
  }], 
  highlight:[{
    name:{type:String},
    hlp:{type:String}
  }],
  imageUrl: {
    type: String,
  },
  subImageUrl: [{
    name:{type:String},
    src:{type:String}
  }],
  ratings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ratings',
    },
  ], 
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'reviews',
    },
  ], 
  numRatings: {
    type: Number,
    default: 0,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'categories',
  }, 
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model('products', productSchema);

module.exports = Product;

const Review = require("../models/review.model.js");
const Order=require("../models/order.model.js")
const productService=require("../services/product.service.js")

async function createReview(reqData, user) {
  // console.log("req data ",reqData)
  const product = await productService.findProductById(reqData.productId);

  if(!product){
    throw new Error("product not found with id ", reqData.productId)
  }
  
  const review = new Review({
    user: user._id,
    product: product._id,
    rating:reqData.rating,
    review: reqData.review,
    createdAt: new Date(),
  });
  const update = await Order.updateOne({ user: user._id }, { $set: { rated: true } });
  await product.save();
  return await review.save();
}

async function getAllReview(productId) {
  const product = await productService.findProductById(productId);

  if(!product){
    throw new Error("product not found with id ", productId)
  }
  
  const reviews = await Review.find({ product: productId }).populate("user");
  
  return reviews
}


module.exports = {
  createReview,
  getAllReview,
};

const Rating = require("../models/rating.model.js");
const productService=require("../services/product.service.js")


async function createRating(req,user) {

  
  const rating = new Rating({
    product: req.productId,
    user: user._id,
    rating: req.rating,
    createdAt: new Date(),
  });
  console.log("created rating");
  
  return await rating.save();
}

async function getProductsRating(productId) {
  return await Rating.find({ product: productId });
}



module.exports = {
  createRating,
  getProductsRating,
};

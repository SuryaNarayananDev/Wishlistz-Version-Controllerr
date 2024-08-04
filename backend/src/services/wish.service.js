const Wish = require("../models/wish.model.js")
const WishItem = require("../models/wishItem.model.js");
const Product = require("../models/product.model.js");
const User = require("../models/user.model.js");


// Create a new cart for a user
async function createWish(user) {
  const wish = new Wish({ user });
  const createdWish = await wish.save();
  return createdWish;
}

// Find a user's cart and update cart details
async function findUserWish(userId) {
  let wish =await Wish.findOne({ user: userId })
  
  let wishItems=await WishItem.find({wish:wish._id}).populate("product")

  wish.wishItems=wishItems
  

  let totalPrice = 0;
  let totalDiscountedPrice = 0;
  let totalItem = 0;

  for (const wishItem of wish.wishItems) {
    totalPrice += wishItem.price;
    totalDiscountedPrice += wishItem.discountedPrice;
    totalItem += wishItem.quantity;
  }

  wish.totalPrice = totalPrice;
  wish.totalItem = totalItem;
  wish.totalDiscountedPrice = totalDiscountedPrice;
  wish.discounte = totalPrice - totalDiscountedPrice;

  // const updatedCart = await cart.save();
  return wish;
}


// Add an item to the user's cart
async function addWishItem(userId, req) {
 
  const wish = await Wish.findOne({ user: userId });
  const product = await Product.findById(req.productId);
  const isPresent = await WishItem.findOne({ wish: wish._id, product: product._id, userId });
  console.log("service of wish 909090909" );

  if (!isPresent) {
    const wishItem = new WishItem({
      product: product._id,
      wish: wish._id,
      quantity: 1,
      userId,
      price: product.discountedPrice,
      discountedPrice:product.discountedPrice
    });

   

    const createdWishItem = await wishItem.save();
    wish.wishItems.push(createdWishItem);
    await wish.save();
  }

  return 'Item added to wish';
}

module.exports = { createWish, findUserWish, addWishItem };

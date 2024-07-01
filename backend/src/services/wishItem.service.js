const WishItem = require("../models/wishItem.model.js")
const userService=require("./user.service.js");


// Create a new cart item
async function createWishItem(cartItemData) {
  const wishItem = new WishItem(cartItemData);
  wishItem.quantity = 1;
  wishItem.price = wishItem.product.price * wishItem.quantity;
  wishItem.discountedPrice = wishItem.product.discountedPrice * cartItem.quantity;

  const createdWishItem = await wishItem.save();
  return createdWishItem;
}

// Check if a cart item already exists in the user's cart
async function isWishItemExist(wish, product, size, userId) {
  const wishItem = await WishItem.findOne({ wish, product, size, userId });
  return wishItem;
}

// Remove a cart item
async function removeWishItem(userId, wishItemId) {
  // console.log(`userId - ${userId}, cartItemId - ${cartItemId}`);
  
  const wishItem = await findWishItemById(wishItemId);
  const user = await userService.findUserById(wishItem.userId);
  const reqUser = await userService.findUserById(userId);

  if (user.id === reqUser.id) {
    await WishItem.findByIdAndDelete(wishItem.id);
  } else {
    throw new UserException("You can't remove another user's item from wish");
  }
}

// Find a cart item by its ID
async function findWishItemById(wishItemId) {
  const wishItem = await WishItem.findById(wishItemId).populate("product");;
  if (wishItem) {
    return wishItem;
  } else {
    throw new WishItemException(`CartItem not found with id: ${wishItemId}`);
  }
}

module.exports = {
  createWishItem,
  isWishItemExist,
  removeWishItem,
  findWishItemById,
};

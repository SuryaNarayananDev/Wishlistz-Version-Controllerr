const Cart = require("../models/cart.model.js");
const CartItem = require("../models/cartItem.model.js");
const Product = require("../models/product.model.js");
const User = require("../models/user.model.js");


// Create a new cart for a user
async function createCart(user) {
  const cart = new Cart({ user });
  const createdCart = await cart.save();
  return createdCart;
}

// Find a user's cart and update cart details
async function findUserCart(userId) {
  let cart =await Cart.findOne({ user: userId })
  
  let cartItems=await CartItem.find({cart:cart._id}).populate("product")

  cart.cartItems=cartItems
  

  let totalPrice = 0;
  let totalDiscountedPrice = 0;
  let totalItem = 0;
  let totalweight= 0;
  let deliverycost = 0
  for (const cartItem of cart.cartItems) {
    totalPrice += cartItem.price;
    totalDiscountedPrice += cartItem.discountedPrice;
    totalItem += cartItem.quantity;
    totalweight += cartItem.weight;
  }
  if(totalDiscountedPrice>1499)
  {
    cart.totalDeliverycharge=0
  }
  else{
    if (totalweight<501) {
      deliverycost=45
    }else if (totalweight<1001) {
      deliverycost=65
    }else if (totalweight<2001) {
      deliverycost=120
    }else if (totalweight<3001) {
      deliverycost=150
    }else{
      deliverycost=220
    }
  }
  cart.totalDeliverycharge = deliverycost
  cart.totalPrice = totalPrice;
  cart.totalItem = totalItem;
  cart.totalDiscountedPrice = totalDiscountedPrice + deliverycost;
  cart.discounte = totalPrice - totalDiscountedPrice;

  // const updatedCart = await cart.save();
  return cart;
}

// remove all Item in cart

// Add an item to the user's cart
async function addCartItem(userId, req) {
 
  const cart = await Cart.findOne({ user: userId });
  const product = await Product.findById(req.productId);

  const isPresent = await CartItem.findOne({ cart: cart._id, product: product._id, userId });
  

  if (!isPresent) {
    const cartItem = new CartItem({
      product: product._id,
      cart: cart._id,
      quantity: 1,
      userId,
      price: product.price,
      size: req.size,
      weight:product.weight,
      discountedPrice:product.discountedPrice
    });

   

    const createdCartItem = await cartItem.save();
    cart.cartItems.push(createdCartItem);
    await cart.save();
  }

  return 'Item added to cart';
}

module.exports = { createCart, findUserCart, addCartItem };

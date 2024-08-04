const express=require("express");
const router=express.Router();

const wishService=require("../services/wish.service");



const findUserWish = async (req, res) => {
    try {
      const user = req.user;
      const wish = await wishService.findUserWish(user.id);
      res.status(200).json(wish);
    } catch (error) {
      // Handle error here and send appropriate response
      res.status(500).json({ message: "Failed to get user wish.", error: error.message });
    }
}
  

  const addItemToWish = async (req, res) => {

    try {
      
      const user = req.user;
      await wishService.addWishItem(user._id.toString(), req.body);
     
      res.status(202).json({message:"Item Added To Wish Successfully", status:true});
    } catch (error) {
      // Handle error here and send appropriate response
      res.status(500).json({ message: "Failed to add item to cart.", error: error.message });
    }
  }
  

  module.exports={findUserWish,addItemToWish};
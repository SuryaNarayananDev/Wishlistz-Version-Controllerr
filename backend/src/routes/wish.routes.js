const express=require("express");
const authenticate = require("../middleware/authenticat.js");
const router=express.Router();
const wishController=require("../controllers/wish.controller.js")

// GET: /api/cart
router.get("/", authenticate, wishController.findUserWish);

// PUT: /api/cart/add
router.put("/add", authenticate, wishController.addItemToWish);


module.exports=router;  
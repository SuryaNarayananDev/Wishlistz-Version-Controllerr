const express=require("express");
const authenticate = require("../middleware/authenticat.js");
const router=express.Router();

const wishItemController=require("../controllers/wishItem.controller.js");

router.delete("/:id",authenticate,wishItemController.removeWishItem);

router.get("/:id",authenticate,wishItemController.WishItemExitInUser);
module.exports=router;
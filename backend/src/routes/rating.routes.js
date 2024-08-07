const express = require("express");
const authenticate = require("../middleware/authenticat.js");
const router = express.Router();
const ratingController = require("../controllers/rating.controller.js");

router.post("/createrating",authenticate,ratingController.createRating);
router.put("/product/:productId",authenticate,ratingController.getProductsRating);


module.exports=router;
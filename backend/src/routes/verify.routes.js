const express = require("express");
const authenticate = require("../middleware/authenticat.js");
const router = express.Router();
const verifyController = require("../controllers/verify.controller.js");

router.post("/email",authenticate,verifyController.verifyUserEmailbyOtp);
router.post("/otp",authenticate,verifyController.GenerateOtpForEmail);

module.exports=router;
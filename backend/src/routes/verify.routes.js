const express = require("express");
const authenticate = require("../middleware/authenticat.js");
const router = express.Router();
const verifyController = require("../controllers/verify.controller.js");

router.post("/email",authenticate,verifyController.verifyUserEmailbyOtp);
router.post("/otp",verifyController.GenerateOtpForEmail);
router.post("/resetpass",verifyController.resetPassController)

module.exports=router;
import express from "express";
const router = express.Router();

import {
  getProfile,
  register,
  verifyEmail,
  resendOtp,
  login,
  updateProfile,
  changePassword,
} from "../controllers/users.js";
import { verifyToken } from "../middlewares/auth.js";
import checkBannedUser from "../middlewares/checkBanned.js";
import { checkRequestBody } from "../middlewares/validateRequest.js";

router.get("/me", verifyToken, getProfile);
router.post("/register", checkRequestBody, register);
router.post("/verify-email", checkRequestBody, verifyEmail);
router.post("/resend-otp", checkRequestBody, resendOtp);
router.post("/login", checkRequestBody, login);
router.put("/", verifyToken, checkBannedUser, checkRequestBody, updateProfile);
router.put(
  "/change-password",
  verifyToken,
  checkBannedUser,
  checkRequestBody,
  changePassword
);

export default router;

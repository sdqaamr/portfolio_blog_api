import express from "express";
const router = express.Router();

import {
  getProfile,
  signupUser,
  verifyEmail,
  resendOtp,
  loginUser,
  updateProfile,
  changePassword,
} from "../controllers/users.js";
import { verifyToken } from "../middlewares/auth.js";
import checkBannedUser from "../middlewares/checkBanned.js";

router.get("/me", verifyToken, checkBannedUser, getProfile);
router.post("/register", signupUser);
router.post("/verify-email", verifyEmail);
router.post("/resend-otp", resendOtp);
router.post("/login", loginUser);
router.put("/", verifyToken, checkBannedUser, updateProfile);
router.put("/change-password", verifyToken, checkBannedUser, changePassword);

export default router;

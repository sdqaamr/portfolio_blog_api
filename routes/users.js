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
  toggleUserStatus ,
} from "../controllers/users.js";
import verifyToken from "../middlewares/auth.js";
import checkBannedUser from "../middlewares/checkBanned.js";
import { checkRequestBody } from "../middlewares/validateRequest.js";
import validateId from "../middlewares/validateId.js";
import roleBasedAccess from "../middlewares/roleBasedAccess.js";

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
router.patch(
  "/:id/toggle",
  (req, res, next) => {
    req.resourceType = "Users";
    next();
  },
  verifyToken,
  validateId,
  // authorizeRoles("admin"), // Only admins can toggle
  roleBasedAccess,
  toggleUserStatus
);

export default router;

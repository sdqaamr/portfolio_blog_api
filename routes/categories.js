import express from "express";
const router = express.Router();

import {
  getCategories,
  createCategory,
  deleteCategory,
} from "../controllers/categories.js";
import validateId from "../middlewares/validateId.js";
import { verifyToken, authorizeRoles } from "../middlewares/auth.js";
import checkBannedUser from "../middlewares/checkBanned.js";
import { roleBasedAccess, adminOnly } from "../middlewares/roleBasedAccess.js";
import { checkRequestBody } from "../middlewares/validateRequest.js";

router.get("/", verifyToken, getCategories);

router.post(
  "/",
  verifyToken,
  checkBannedUser,
  adminOnly,
  checkRequestBody,
  createCategory
);

router.delete(
  "/:id",
  (req, res, next) => {
    req.resourceType = "Category";
    next();
  },
  verifyToken,
  checkBannedUser,
  validateId,
  roleBasedAccess,
  deleteCategory
);

export default router;

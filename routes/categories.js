import express from "express";
const router = express.Router();

import {
  fetchCategories,
  createCategory,
  deleteCategory,
} from "../controllers/categories.js";
import validateId from "../middlewares/validateId.js";
import { verifyToken } from "../middlewares/auth.js";
import checkBannedUser from "../middlewares/checkBanned.js";

router.get("/", fetchCategories);
router.post("/", verifyToken, checkBannedUser, createCategory);
router.delete("/:id", verifyToken, checkBannedUser, validateId, deleteCategory);

export default router;

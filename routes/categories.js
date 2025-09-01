import express from "express";
import {
  fetchCategories,
  createCategory,
  deleteCategory,
} from "../controllers/categories.js";
import validateId from "../middlewares/validateId.js";
import { verifyToken } from "../middlewares/auth.js";
const router = express.Router();

router.get("/", fetchCategories);
router.post("/", verifyToken, createCategory);
router.delete("/:id", verifyToken, validateId, deleteCategory);

export default router;

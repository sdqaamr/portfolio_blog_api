import express from "express";
import { getArticle, createArticle, updateArticle, deleteArticle } from "../controllers/articles.js";
import validateId from "../middlewares/validateId.js";
import { verifyToken } from "../middlewares/auth.js";
const router = express.Router();

router.get("/:id", validateId, getArticle);
router.post("/", verifyToken, createArticle);
router.put("/:id", verifyToken, validateId, updateArticle);
router.delete("/:id", verifyToken, validateId, deleteArticle);

export default router;

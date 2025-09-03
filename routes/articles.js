import express from "express";
const router = express.Router();

import {
  getArticle,
  createArticle,
  updateArticle,
  toggleArticlePublish,
  deleteArticle,
} from "../controllers/articles.js";
import validateId from "../middlewares/validateId.js";
import { verifyToken } from "../middlewares/auth.js";
import checkBannedUser from "../middlewares/checkBanned.js";

router.get("/:id", validateId, getArticle);
router.post("/", verifyToken, checkBannedUser, createArticle);
router.put("/:id", verifyToken, checkBannedUser, validateId, updateArticle);
router.patch(
  "/:id/toggle",
  verifyToken,
  checkBannedUser,
  validateId,
  toggleArticlePublish
);
router.delete("/:id", verifyToken, checkBannedUser, validateId, deleteArticle);

export default router;

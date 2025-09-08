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
import roleBasedAccess from "../middlewares/roleBasedAccess.js";

router.get("/:id", validateId, getArticle);
router.post("/", verifyToken, checkBannedUser, createArticle);

router.put(
  "/:id",
  (req, res, next) => {
    req.resourceType = "Article";
    next();
  },
  verifyToken,
  checkBannedUser,
  validateId,
  roleBasedAccess,
  updateArticle
);
router.patch(
  "/:id/toggle",
  verifyToken,
  checkBannedUser,
  validateId,
  toggleArticlePublish
);

router.delete(
  "/:id",
  (req, res, next) => {
    req.resourceType = "Article";
    next();
  },
  verifyToken,
  checkBannedUser,
  validateId,
  roleBasedAccess,
  deleteArticle
);

export default router;

import express from "express";
const router = express.Router();

import {
  getArticle,
  createArticle,
  updateArticle,
  updateArticleThumbnail,
  toggleArticlePublish,
  deleteArticle,
} from "../controllers/articles.js";
import validateId from "../middlewares/validateId.js";
import { verifyToken } from "../middlewares/auth.js";
import checkBannedUser from "../middlewares/checkBanned.js";
import roleBasedAccess from "../middlewares/roleBasedAccess.js";
import upload from "../middlewares/upload.js";
import { uploadToCloudinary } from "../middlewares/cloudinary.js";

router.get("/:id", validateId, getArticle);
router.post(
  "/",
  verifyToken,
  checkBannedUser,
  upload.single("thumbnail"),
  uploadToCloudinary,
  createArticle
);

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
  upload.single("thumbnail"),
  uploadToCloudinary,
  updateArticle
);

router.patch(
  "/:id/thumbnail",
  (req, res, next) => {
    req.resourceType = "Article";
    next();
  },
  verifyToken,
  checkBannedUser,
  validateId,
  roleBasedAccess,
  upload.single("thumbnail"),
  uploadToCloudinary,
  updateArticleThumbnail
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

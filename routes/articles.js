import express from "express";
const router = express.Router();

import {
  getArticles,
  getArticle,
  createArticle,
  updateArticle,
  updateArticleThumbnail,
  toggleArticlePublish,
  deleteArticle,
} from "../controllers/articles.js";
import validateId from "../middlewares/validateId.js";
import { verifyToken, authorizeRoles } from "../middlewares/auth.js";
import checkBannedUser from "../middlewares/checkBanned.js";
import { roleBasedAccess } from "../middlewares/roleBasedAccess.js";
import upload from "../middlewares/upload.js";
import { uploadToCloudinary } from "../middlewares/cloudinary.js";
import { checkRequestBody } from "../middlewares/validateRequest.js";

router.get("/", getArticles);

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
  checkRequestBody,
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
  (req, res, next) => {
    req.resourceType = "Article";
    next();
  },
  verifyToken,
  checkBannedUser,
  validateId,
  roleBasedAccess,
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

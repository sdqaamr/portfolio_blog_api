import express from "express";
const router = express.Router();

import { fetchTags, createTag, deleteTag } from "../controllers/tags.js";
import validateId from "../middlewares/validateId.js";
import { verifyToken } from "../middlewares/auth.js";
import checkBannedUser from "../middlewares/checkBanned.js";
import roleBasedAccess from "../middlewares/roleBasedAccess.js";

router.get("/", fetchTags);
router.post("/", verifyToken, checkBannedUser, createTag);

router.delete(
  "/:id",
  (req, res, next) => {
    req.resourceType = "Tag";
    next();
  },
  verifyToken,
  checkBannedUser,
  validateId,
  roleBasedAccess,
  deleteTag
);

export default router;

import express from "express";
const router = express.Router();

import { getTags, createTag, deleteTag } from "../controllers/tags.js";
import validateId from "../middlewares/validateId.js";
import verifyToken from "../middlewares/auth.js";
import checkBannedUser from "../middlewares/checkBanned.js";
import roleBasedAccess from "../middlewares/roleBasedAccess.js";
import { checkRequestBody } from "../middlewares/validateRequest.js";

router.get("/", getTags);

router.post("/", verifyToken, checkBannedUser, checkRequestBody, createTag);

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

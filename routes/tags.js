import express from "express";
import { fetchTags, createTag, deleteTag } from "../controllers/tags.js";
import validateId from "../middlewares/validateId.js";
import { verifyToken } from "../middlewares/auth.js";
const router = express.Router();

router.get("/", fetchTags);
router.post("/", verifyToken, createTag);
router.delete("/:id", verifyToken, validateId, deleteTag);

export default router;

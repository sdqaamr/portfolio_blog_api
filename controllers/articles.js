import Article from "../models/articles.js";
import mongoose from "mongoose";
import { deleteFromCloudinary } from "../middlewares/cloudinary.js";

let getArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const article = await Article.findById(id)
      .select([
        "title",
        "slug",
        "content",
        "tags",
        "categories",
        "createdBy",
        "published",
        "createdAt",
        "updatedAt",
      ])
      .populate("categories", ["name"])
      .populate("tags", ["name"])
      .populate("createdBy", ["fullName"]);
    if (!article) {
      return res.status(404).json({
        success: false,
        message: "Article not found",
        data: null,
        error: null, //execution is successfull
      });
    }
    res.status(200).json({
      success: true,
      message: "Article fetched successfully",
      data: article,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      data: null,
      error: error.message,
    });
  }
};

const createArticle = async (req, res) => {
  try {
    let { title, slug, content, categories, tags } = req.body;
    const validationErrors = [];
    if (!title) {
      validationErrors.push("Title is required");
    }
    if (!slug) {
      validationErrors.push("Slug is required");
    }
    if (!content) {
      validationErrors.push("Content is required");
    }
    if (!categories || categories.length === 0) {
      validationErrors.push("At least one category is required");
    }
    if (!tags || tags.length === 0) {
      validationErrors.push("At least one tag is required");
    }

    const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

    categories = JSON.parse(categories);
    tags = JSON.parse(tags);

    categories.forEach((id) => {
      if (!isValidObjectId(id)) {
        validationErrors.push(`Invalid category ID: ${id}`);
      }
    });
    tags.forEach((id) => {
      if (!isValidObjectId(id)) {
        validationErrors.push(`Invalid tag ID: ${id}`);
      }
    });

    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Validation errors",
        data: null,
        error: validationErrors,
      });
    }
    const user = req.user;
    const thumbnail = req.cloudinaryFile || null;

    const article = new Article({
      title,
      slug,
      content,
      categories,
      tags,
      thumbnail,
      createdBy: user.id,
    });
    await article.save();
    await article.populate("categories", ["name"]);
    await article.populate("tags", ["name"]);
    await article.populate("createdBy", ["fullName"]);
    res.status(201).json({
      success: true,
      message: "Article created successfully",
      data: article,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
      error: error.message,
    });
  }
};

let updateArticle = async (req, res) => {
  try {
    const articleId = req.params.id; // comes from URL /articles/:id
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({
        success: false,
        message: "No fields provided to update",
        data: null,
        error: null,
      });
    }
    const forbiddenFields = ["createdBy", "createdAt", "updatedAt"];
    forbiddenFields.forEach((field) => {
      if (field in req.body) {
        delete req.body[field];
      }
    });
    const article = await Article.findByIdAndUpdate(articleId, req.body, {
      new: true,
      runValidators: true,
    })
      .populate("categories", ["name"])
      .populate("tags", ["name"])
      .populate("createdBy", ["fullName"]);
    if (!article) {
      return res.status(404).json({
        success: false,
        message: "Article not found",
        data: null,
        error: null,
      });
    }
    res.status(200).json({
      success: true,
      message: "Article updated successfully",
      data: article,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
      error: error.message,
    });
  }
};

// PATCH /articles/:id/thumbnail
const updateArticleThumbnail = async (req, res) => {
  try {
    const { id } = req.params;
    const action = req.body?.action || "update";

    const article = await Article.findById(id)
      .populate("categories", ["name"])
      .populate("tags", ["name"])
      .populate("createdBy", ["fullName"]);

    if (!article) {
      return res.status(404).json({
        success: false,
        message: "Article not found",
        data: null,
        error: null,
      });
    }
    // Add / Update thumbnail
    if (req.cloudinaryFile) {
      // delete old if exists
      if (article.thumbnail?.publicId) {
        await deleteFromCloudinary(article.thumbnail.publicId);
      }
      article.thumbnail = req.cloudinaryFile;
      await article.save();
      return res.status(200).json({
        success: true,
        message: article.thumbnail
          ? "Thumbnail updated successfully"
          : "Thumbnail added successfully",
        data: article,
        error: null,
      });
    }
    return res.status(400).json({
      success: false,
      message: "No thumbnail file provided",
      data: null,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
      error: error.message,
    });
  }
};

// Toggle Publish / Unpublish
const toggleArticlePublish = async (req, res) => {
  try {
    const { id } = req.params;
    const article = await Article.findById(id)
      .populate("categories", ["name"])
      .populate("tags", ["name"])
      .populate("createdBy", ["fullName"]);

    if (!article) {
      return res.status(404).json({
        success: false,
        message: "Article not found",
        data: null,
        error: null,
      });
    }

    article.published = !article.published;
    await article.save();

    res.status(200).json({
      success: true,
      message: `Article ${
        article.published ? "published" : "unpublished"
      } successfully`,
      data: article,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
      error: error.message,
    });
  }
};

const deleteArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const article = await Article.deleteOne({ _id: id, createdBy: userId });
    if (article.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Article not found or not owned by user",
        data: null,
        error: null,
      });
    }
    res.status(200).json({
      success: true,
      message: "Article deleted successfully",
      data: article,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
      error: error.message,
    });
  }
};

export {
  getArticle,
  createArticle,
  updateArticle,
  updateArticleThumbnail,
  toggleArticlePublish,
  deleteArticle,
};

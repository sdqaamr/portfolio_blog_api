import Article from "../models/articles.js";
import Category from "../models/categories.js";
import mongoose from "mongoose";
import { deleteFromCloudinary } from "../middlewares/cloudinary.js";

const getArticles = async (req, res, next) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.max(1, parseInt(req.query.limit) || 5);
    const skip = (page - 1) * limit;

    const [total, articles] = await Promise.all([
      Article.countDocuments(),
      Article.find()
        .skip(skip)
        .limit(limit)
        .select([
          "title",
          "content",
          "tags",
          "categories",
          "thumbnail",
          "createdBy",
          "published",
          "createdAt",
          "updatedAt",
        ])
        .populate("categories", ["name"])
        .populate("tags", ["name"])
        .populate("createdBy", ["fullName"]),
    ]);

    res.status(200).json({
      success: true,
      message: "Articles fetched successfully",
      data: articles,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
      error: null,
    });
  } catch (error) {
    next(error);
  }
};

const getArticle = async (req, res, next) => {
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
        error: ["No article exists with the given ID"],
      });
    }
    res.status(200).json({
      success: true,
      message: "Article fetched successfully",
      data: article,
      error: null,
    });
  } catch (error) {
    next(error);
  }
};

const createArticle = async (req, res, next) => {
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
    // Validate categories exist
    const foundCategories = await Category.find({ _id: { $in: categories } });
    if (foundCategories.length !== categories.length) {
      validationErrors.push("One or more category IDs do not exist");
    }

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
    next(error);
  }
};

const updateArticle = async (req, res, next) => {
  try {
    const articleId = req.params.id; // comes from URL /articles/:id

    const forbiddenFields = [
      "createdBy",
      "createdAt",
      "updatedAt",
      "thumbnail",
    ];
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
        error: ["No article exists with the given ID"],
      });
    }
    res.status(200).json({
      success: true,
      message: "Article updated successfully",
      data: article,
      error: null,
    });
  } catch (error) {
    next(error);
  }
};

// PATCH /articles/:id/thumbnail
const updateArticleThumbnail = async (req, res, next) => {
  try {
    const { id } = req.params;
    const action = req.body?.action || "update";

    const article = await Article.findById(id)
      .select([
        "thumbnail",
        "updatedAt",
        "title",
        "content",
        "tags",
        "categories",
        "createdBy",
        "published",
      ])
      .populate("categories", ["name"])
      .populate("tags", ["name"])
      .populate("createdBy", ["fullName"]);

    if (!article) {
      return res.status(404).json({
        success: false,
        message: "Article not found",
        data: null,
        error: ["No article exists with the given ID"],
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
      error: ["Thumbnail image is required"],
    });
  } catch (error) {
    next(error);
  }
};

// Toggle Publish / Unpublish
const toggleArticlePublish = async (req, res, next) => {
  try {
    const { id } = req.params;
    const article = await Article.findById(id)
      .select([
        "title",
        "content",
        "published",
        "tags",
        "categories",
        "createdBy",
        "thumbnail",
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
        error: ["No article exists with the given ID"],
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
    next(error);
  }
};

const deleteArticle = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const article = await Article.deleteOne({ _id: id });
    if (article.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Article not found or not owned by user",
        data: null,
        error: ["Article resource is unavailable"],
      });
    }
    res.status(200).json({
      success: true,
      message: "Article deleted successfully",
      data: article,
      error: null,
    });
  } catch (error) {
    next(error);
  }
};

export {
  getArticles,
  getArticle,
  createArticle,
  updateArticle,
  updateArticleThumbnail,
  toggleArticlePublish,
  deleteArticle,
};

import Category from "../models/categories.js";

const fetchCategories = async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.max(1, parseInt(req.query.limit) || 5);
    const skip = (page - 1) * limit;

    const [total, categories] = await Promise.all([
      Category.countDocuments(),
      Category.find()
        .skip(skip)
        .limit(limit)
        .populate("createdBy", ["fullName"]),
    ]);

    res.status(200).json({
      success: true,
      message: "Categories fetched successfully",
      data: categories,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
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

const createCategory = async (req, res) => {
  try {
    const { name = "", slug = "" } = req.body;
    const validationErrors = [];
    if (!name) {
      validationErrors.push("Category name is required");
    }
    if (!slug) {
      validationErrors.push("Slug is required");
    }
     // 🔍 Uniqueness checks
    if (await Category.findOne({ name })) {
      validationErrors.push("Category name already exists");
    }
    if (await Category.findOne({ slug })) {
      validationErrors.push("Slug already exists");
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
    const category = new Category({ name, slug, createdBy: user.id });
    await category.save();
    await category.populate("createdBy", ["fullName"]);
    res.status(201).json({
      success: true,
      message: "Category added successfully",
      data: category,
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

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const category = await Category.deleteOne({ _id: id, createdBy: userId });
    if (category.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Category not found or not owned by user",
        data: null,
        error: null,
      });
    }
    res.status(200).json({
      success: true,
      message: "Category deleted successfully",
      data: category,
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

export { fetchCategories, createCategory, deleteCategory };

import Tag from "../models/tags.js";

const getTags = async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.max(1, parseInt(req.query.limit) || 5);
    const skip = (page - 1) * limit;

    const [total, tags] = await Promise.all([
      Tag.countDocuments(),
      Tag.find()
        .skip(skip)
        .limit(limit)
        .populate("articles", ["title"])
        .populate("createdBy", ["fullName"]),
    ]);

    res.status(200).json({
      success: true,
      message: "Tags fetched successfully",
      data: tags,
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

const createTag = async (req, res) => {
  try {
    const { name, slug } = req.body;
    const validationErrors = [];
    if (!name) {
      validationErrors.push("Tag name is required");
    }
    if (!slug) {
      validationErrors.push("Slug is required");
    }
    // 🔍 Uniqueness checks
    if (await Tag.findOne({ name })) {
      validationErrors.push("Tag already exists");
    }
    if (await Tag.findOne({ slug })) {
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
    const tag = new Tag({ name, slug, createdBy: user.id });
    await tag.save();
    await tag.populate("createdBy", ["fullName"]);
    res.status(201).json({
      success: true,
      message: "Tag added successfully",
      data: tag,
      error: null,
    });
  } catch (error) {
    next(error);
  }
};

const deleteTag = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const tag = await Tag.deleteOne({ _id: id });
    if (tag.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Tag not found or not owned by user",
        data: null,
        error: ["Article resource is unavailable"],
      });
    }
    res.status(200).json({
      success: true,
      message: "Tag deleted successfully",
      data: tag,
      error: null,
    });
  } catch (error) {
    next(error);
  }
};

export { getTags, createTag, deleteTag };

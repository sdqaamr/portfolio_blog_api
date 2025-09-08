import Article from "../models/articles.js";
import Category from "../models/categories.js";
import Tag from "../models/tags.js";

/**
 * Middleware to check if user is admin or owner of the resource
 * Allows admin to update/delete any resource
 * Allows normal user to update/delete only their own resources
 * Usage: Pass model name as req.resourceType (e.g. 'Article', 'Category', 'Tag')
 *        and resource id as req.params.id
 */
const roleBasedAccess = async (req, res, next) => {
  const user = req.user;
  const resourceType = req.resourceType;
  const resourceId = req.params.id;

  // Map resourceType to model
  const models = {
    Article,
    Category,
    Tag,
  };
  const Model = models[resourceType];
  if (!Model) {
    return res.status(400).json({
      success: false,
      message: "Invalid resource type",
      data: null,
      error: null,
    });
  }

  // Admin can access any resource
  if (user.role === "admin") {
    return next();
  }

  // For normal users, check ownership
  try {
    const resource = await Model.findById(resourceId);
    if (!resource) {
      return res.status(404).json({
        success: false,
        message: `${resourceType} not found`,
        data: null,
        error: null,
      });
    }
    // Ownership check: resource.createdBy === user.id
    if (resource.createdBy?.toString() !== user.id) {
      return res.status(403).json({
        success: false,
        message: `Access denied: not owner of this ${resourceType}`,
        data: null,
        error: null,
      });
    }
    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
      error: error.message,
    });
  }
};

export default roleBasedAccess;

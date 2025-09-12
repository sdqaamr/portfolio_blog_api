import Users from "../models/users.js";
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
    Users,
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
      error: [`Resource type '${resourceType}' is not supported`],
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
        error: [`No ${resourceType} exists with the given ID`],
      });
    }
    // Ownership check: resource.createdBy === user.id
    if (resource.createdBy?.toString() !== user.id) {
      return res.status(403).json({
        success: false,
        message: `Access denied: not owner of this ${resourceType}`,
        data: null,
        error: [`User ${user.id} does not own this ${resourceType}`],
      });
    }
    next();
  } catch (error) {
    next(error);
  }
};

export default roleBasedAccess;

// const adminOnly = (req, res, next) => {
//   if (req.user.role !== "admin") {
//     return res.status(403).json({
//       success: false,
//       message: "Access denied: Admins only",
//       data: null,
//       error: ["You are not authorized to perform this action"],
//     });
//   }
//   next();
// };
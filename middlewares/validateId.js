import mongoose from "mongoose";

const validateId = (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid ID format",
      data: null,
      error: null,
    });
  }
  next();
};

export default validateId;

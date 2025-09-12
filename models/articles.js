import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    slug: {
      type: String,
      trim: true,
    },
    content: {
      type: String,
      trim: true,
    },
    tags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag",
      },
    ],
    categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
      },
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    published: {
      type: Boolean,
      default: false,
    },
    thumbnail: {
      url: {
        type: String,
        default: null,
      },
      publicId: { type: String },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Article", articleSchema);

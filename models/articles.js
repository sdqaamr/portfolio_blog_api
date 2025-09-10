import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    slug: {
      type: String,
    },
    content: {
      type: String,
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
    },
    published: {
      type: Boolean,
      default: false,
    },
    thumbnail: {
      url: { type: String },
      publicId: { type: String },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Article", articleSchema);

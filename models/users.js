import mongoose from "mongoose";
import Tag from "./tags.js";

const usersSchema = mongoose.Schema(
  {
    fullName: String,
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: function (v) {
          return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email!`,
      },
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    otp: {
      type: Number,
      default: null,
    },
    otpExpiresAt: {
      type: Date,
      default: null,
    },
    password: String,
    profilePicture: {
      type: String,
      default: "default.png",
    },
    phone: String,
    city: String,
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    status: {
      type: String,
      enum: ["active", "inactive", "banned"],
      default: "inactive",
    },
    categoriesCreated: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
      },
    ],
    articlesCreated: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Article",
      },
    ],
    tagsCreated: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag",
      },
    ],
  },
  { timestamps: true }
);

const Users = new mongoose.model("Users", usersSchema);

export default Users;

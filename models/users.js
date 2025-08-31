import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
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
    type: String,
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["active", "inactive", "banned"],
    default: "inactive",
  },
});

const Users = new mongoose.model("Users", usersSchema);

export default Users;

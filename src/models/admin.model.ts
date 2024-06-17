import mongoose from "mongoose";

const adminUserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["superAdmin", "admin"],
    },
  },
  {
    timestamps: true,
  }
);
const adminUser = mongoose.model("admins", adminUserSchema);
export default adminUser;

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { v2 as cloudinary } from "cloudinary";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const uploadToCloudinary = async (req, res, next) => {
  try {
    if (!req.file) {
      return next(); // no file provided
    }

    // ✅ Ensure uploads directory exists
    const uploadsDir = path.join(__dirname, "../uploads");
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const tempFilePath = path.join(
      __dirname,
      "../uploads/",
      req.file.originalname
    );
    fs.writeFileSync(tempFilePath, req.file.buffer);

    const result = await cloudinary.uploader.upload(tempFilePath, {
      resource_type: "auto",
    });

    // ✅ Save both URL and public_id
    req.cloudinaryFile = {
      url: result.secure_url,
      publicId: result.public_id,
    };

    fs.unlinkSync(tempFilePath);
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Image upload failed",
      error: error.message,
    });
  }
};

export const deleteFromCloudinary = async (publicId) => {
  try {
    if (publicId) {
      await cloudinary.uploader.destroy(publicId);
    }
  } catch (error) {
    console.error("Cloudinary delete error:", error.message);
  }
};

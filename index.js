import express from "express";
import morgan from "morgan";
import userRoutes from "./routes/users.js";
import categoryRoutes from "./routes/categories.js";
import articleRoutes from "./routes/articles.js";
import tagRoutes from "./routes/tags.js";
import { apiRateLimit } from "./middlewares/api-limit.js";
import dbConnect from "./config/database.js";
import cors from "cors";
import dotenv from "dotenv";

const corsOptions = {
  origin: process.env.appUrl,
  optionsSuccessStatus: 200,
};

import { v2 as cloudinary } from "cloudinary";

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors(corsOptions));
dotenv.config();

// Connect to Database
dbConnect();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Users
app.use("/api/auth/", apiRateLimit, userRoutes);

// Categories
app.use("/api/categories", apiRateLimit, categoryRoutes);

// Articles
app.use("/api/articles", apiRateLimit, articleRoutes);

// Tags
app.use("/api/tags", apiRateLimit, tagRoutes);

// Handle 404 for undefined routes
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "The requested endpoint does not exist",
    data: null,
    error: "Route not found",
  });
});

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";
app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

import express from "express";
import morgan from "morgan";
import userRoutes from "./routes/users.js";
import categoryRoutes from "./routes/categories.js";
import { apiRateLimit } from "./middlewares/api-limit.js";
import dbConnect from "./config/database.js";
import cors from "cors";
import dotenv from "dotenv";

const corsOptions = {
  origin: process.env.appUrl,
  optionsSuccessStatus: 200,
};

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors(corsOptions));
dotenv.config();

// Connect to Database
dbConnect();

// Users
app.use("/api/auth/", apiRateLimit, userRoutes);

// Categories
app.use("/api/categories", apiRateLimit, categoryRoutes);

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

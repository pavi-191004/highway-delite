import express from "express";
import cors from "cors";
import "express-async-errors";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./config/db.js";
import experienceRoutes from "./routes/experienceRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import promoRoutes from "./routes/promoRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Allow both local and Vercel frontend origins
app.use(cors({
  origin: [
    "http://localhost:3000", // for local testing
    "https://highway-delite-j5u7.vercel.app" // for deployed frontend
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(express.json());

// ✅ Register API routes
app.use("/experiences", experienceRoutes);
app.use("/bookings", bookingRoutes);
app.use("/promo", promoRoutes);

// ✅ Error handler middleware
app.use(errorHandler);

// ✅ Start server
const start = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}`);
  });
};

start();

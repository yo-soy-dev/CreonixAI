// server/server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { sql } from "./config/db.js";
import { clerkMiddleware, requireAuth } from "@clerk/express";
import aiRouter from "./routes/aiRoutes.js";
import connectCloudinary from './config/cloudinary.js';
import userRouter from "./routes/userRoutes.js";


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());
connectCloudinary();

app.get("/", (req, res) => {
  res.send("🚀 Server is running...");
});

app.use(requireAuth());


app.use('/api/ai', aiRouter)
app.use('/api/user', userRouter)

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

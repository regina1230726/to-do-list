import express from "express";
import mongoose from "mongoose";
import taskRoutes from "./routes/TaskRoute";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

// ---------- Middlewares ----------
app.use(cors());
app.use(express.json());

// ---------- Routes ----------
app.use("/api/tasks", taskRoutes);

// ---------- Health check ----------
app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

// ---------- MongoDB ----------
const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  throw new Error("MONGO_URI not defined");
}

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err);

  res.status(400).json({
    error: err.message || "Erro inesperado"
  });
});


export default app;

import express from "express";
import { connectDB } from "./src/database/db.ts";
import { userRouter } from "./src/routes/user.router.ts";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use("/user", userRouter);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();

import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const db_connection_string: string = process.env.MONGO_URI || "";

export const connectDB = async () => {
  try {
    await mongoose.connect(db_connection_string);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1);
  }
};

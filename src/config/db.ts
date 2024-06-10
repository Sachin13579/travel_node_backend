import mongoose from "mongoose";
import { config } from "./config";

const connectDb = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("DB connected successfully!");
    });
    mongoose.connection.on("error", (err) => {
      console.log("Unable to connect.", err);
      process.exit(1);
    });
    await mongoose.connect(config.DB_STRING);
  } catch (error) {
    console.log("Failed to connect with databse.", error);
    process.exit(1);
  }
};
export default connectDb;

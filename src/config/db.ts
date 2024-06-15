import mongoose from "mongoose";
import { config } from "./config";

let isConnected = false;

const connectDb = async () => {
  try {
    if (isConnected) {
      return;
    }
    mongoose.connection.on("connected", () => {
      console.log("DB connected successfully!");
    });
    mongoose.connection.on("error", (err) => {
      console.log("Unable to connect with Db.", err);
      process.exit(1);
    });
    await mongoose.connect(config.DB_STRING);
    isConnected = true;
  } catch (error) {
    console.log("Failed to connect with database.", error);
    process.exit(1);
  }
};
export default connectDb;

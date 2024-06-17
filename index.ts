import app from "./src/app";
import { config } from "./src/config/config";
import connectDb from "./src/config/db";
import * as models from "./src/models/index";

declare const Models: typeof models;
const startServer = async () => {
  const port = config.PORT || 8888;
  // (global as any).Models = models;
  // console.log(models);
  // (global as NodeJS.Global & { Models: typeof models }).Models = models;
  await connectDb();
  app.listen(port, () => {
    console.log(`Starting server at : ${port}`);
  });
};

startServer();

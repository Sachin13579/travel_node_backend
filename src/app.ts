import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import createHttpError, { HttpError } from "http-errors";
import { errorHandler } from "./middleware/globalErrorHandler";

const app = express();

app.use(morgan("dev"));

app.get("/api/healthCheck", (req, res) => {
  const err = createHttpError(404, "some error");
  throw err;
  res.json({
    status: true,
    message: "Server is healthy and running.",
  });
});
app.use(errorHandler);

export default app;

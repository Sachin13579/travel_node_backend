import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import createHttpError from "http-errors";
import { gLobalErrorHandler } from "./middleware/globalErrorHandler";

const app = express();

app.use(morgan("dev"));

app.get(
  "/api/healthCheck",
  (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({
        status: true,
        message: "Server is healthy and running.",
      });
    } catch (error) {
      return next(createHttpError(404, "some error"));
    }
  }
);
app.use(gLobalErrorHandler);

export default app;

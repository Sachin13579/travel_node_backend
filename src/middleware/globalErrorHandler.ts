import { Response, Request, NextFunction } from "express";
import { HttpError } from "http-errors";
import { config } from "../config/config";

export const gLobalErrorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;

  return res.status(statusCode).json({
    message: err.message,
    errStack:
      config.NODE_ENV === "development"
        ? err.stack
        : "Only available in development",
  });
};

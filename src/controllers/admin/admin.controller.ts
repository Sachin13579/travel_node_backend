import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import constantMessages from "../../utils/messageConstants";
import adminServiceFuncs from "../../serviceLayer/adminLayer/admin.service";

/**
 * Register admin
 * @param req
 * @param res
 */

const registerAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const serviceResponse = await adminServiceFuncs.registerAdmin(req.body);

    if (serviceResponse.status === false) {
      return next(createHttpError(serviceResponse.statusCode, serviceResponse));
    }

    return res.status(serviceResponse.statusCode).json({
      status: serviceResponse.status,
      message: serviceResponse.message,
    });
  } catch (error: any) {
    return next(createHttpError(404, error.message));
  }
};

const adminControllerFuncs = {
  registerAdmin,
};
export default adminControllerFuncs;

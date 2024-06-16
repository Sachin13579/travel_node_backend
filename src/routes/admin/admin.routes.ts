import express from "express";
import adminControllerFuncs from "../../controllers/admin/admin.controller";

const adminRouter = express.Router();

adminRouter.route("/register").post(adminControllerFuncs.registerAdmin);

export default adminRouter;

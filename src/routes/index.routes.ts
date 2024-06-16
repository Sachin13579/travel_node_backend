import adminRouter from "./admin/admin.routes";
import express from "express";

const indexRouter = express.Router();

indexRouter.use("/admins", adminRouter);

export default indexRouter;

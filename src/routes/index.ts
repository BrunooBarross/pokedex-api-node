import { Router } from "express";
import userRouter from "./userRouter.js";
import teamRouter from "./teamRouter.js";

const router = Router();

router.use(userRouter);
router.use(teamRouter);

export default router;
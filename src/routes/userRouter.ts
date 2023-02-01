import { Router } from "express";
import { userSignUp } from "../controllers/userController.js";
import { validateDataSignUp, verifyEmailConflict } from "../middlewares/userMiddleware.js";

const userRouter = Router();

userRouter.post("/signup", validateDataSignUp, verifyEmailConflict, userSignUp);

export default userRouter;
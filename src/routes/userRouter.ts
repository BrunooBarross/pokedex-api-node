import { Router } from "express";
import { userSignUp, signIn } from "../controllers/userController.js";
import { validateDataSignUp, verifyEmailConflict, validateDataSignIn } from "../middlewares/userMiddleware.js";

const userRouter = Router();

userRouter.post("/signup", validateDataSignUp, verifyEmailConflict, userSignUp);
userRouter.post("/signin", validateDataSignIn, signIn);

export default userRouter;
import { Router } from "express";
import { createTeam } from "../controllers/teamController.js";
import { validateToken } from "../middlewares/authMiddleware.js"
import { validateDataTeam } from "../middlewares/teamMiddleware.js";

const teamRouter = Router();

teamRouter.post("/team/create", validateToken, validateDataTeam, createTeam);

export default teamRouter;
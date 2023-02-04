import { Router } from "express";
import { createTeam, listTeams, deleteTeam } from "../controllers/teamController.js";
import { validateToken } from "../middlewares/authMiddleware.js"
import { validateDataTeam } from "../middlewares/teamMiddleware.js";

const teamRouter = Router();

teamRouter.post("/team/create", validateToken, validateDataTeam, createTeam);
teamRouter.get("/team", validateToken, listTeams);
teamRouter.delete("/team/:teamId", validateToken, deleteTeam);

export default teamRouter;
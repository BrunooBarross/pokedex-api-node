import { Router } from "express";
import { createTeam, listTeams, deleteTeam, insertPokemonTeam } from "../controllers/teamController.js";
import { validateToken } from "../middlewares/authMiddleware.js"
import { validateDataTeam, validateBodyPokeTeam } from "../middlewares/teamMiddleware.js";

const teamRouter = Router();

teamRouter.post("/team/create", validateToken, validateDataTeam, createTeam);
teamRouter.get("/team", validateToken, listTeams);
teamRouter.delete("/team/:teamId", validateToken, deleteTeam);
teamRouter.post("/team/insert/pokemon", validateBodyPokeTeam, validateToken, insertPokemonTeam);

export default teamRouter;
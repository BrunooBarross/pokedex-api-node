import { Request, Response } from "express";
import * as teamService from "../services/teamService.js";

export async function createTeam(req: Request, res: Response) {
    const { titleTeam } = req.body;
    const userId = res.locals.userId;
    const result = await teamService.createTeam(userId, titleTeam);
    res.status(201).send(result);
}

export async function listTeams(req: Request, res: Response) {
    const userId = res.locals.userId;
    const result = await teamService.getTeams(userId);
    res.status(200).send(result);
}

export async function deleteTeam(req: Request, res: Response) {
    const teamId = req.params.teamId;
    const userId = res.locals.userId;
    await teamService.deleteTeam(userId, teamId);
    res.sendStatus(200);
}

export async function insertPokemonTeam(req: Request, res: Response) {
    let data = req.body;
    await teamService.insertPokemon(data);
    res.sendStatus(201);
}
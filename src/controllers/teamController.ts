import { Request, Response } from "express";
import * as teamService from "../services/teamService.js"

export async function createTeam(req: Request, res: Response){
    const { titleTeam } = req.body;
    const userId = res.locals.userId;
    const result = await teamService.createTeam(userId, titleTeam);
    res.status(201).send(result);
}

export async function listTeams(req: Request, res: Response){
    const userId = res.locals.userId;
    const result = await teamService.getTeams(userId);
    res.status(200).send(result);
}

import { NextFunction, Request, Response } from "express";
import { pokemonTeamSchema, teamSchemaCreate } from "../schemas/teamSchema.js";

export function validateDataTeam(req: Request, res: Response, next: NextFunction) {
    const { error } = teamSchemaCreate.validate(req.body);

    if (error) {
        throw { type: "unprocessable_entity", message: error.details[0].message }
    }

    next();
}

export function validateBodyPokeTeam(req: Request, res: Response, next: NextFunction) {
    const { error } = pokemonTeamSchema.validate(req.body);

    if (error) {
        throw { type: "unprocessable_entity", message: error.details[0].message }
    }

    next();
}

import { NextFunction, Request, Response } from "express";
import { teamSchemaCreate } from "../schemas/teamSchema.js";

export function validateDataTeam(req: Request, res: Response, next: NextFunction) {
    const { error } = teamSchemaCreate.validate(req.body);

    if (error) {
        throw { type: "unprocessable_entity", message: error.details[0].message }
    }

    next();
}
import { NextFunction, Request, Response } from "express";
import { userSchemaSignUp } from "../schemas/userSchema.js";
import * as userRepository from "../repositories/userRepository.js"

export function validateDataSignUp(req: Request, res: Response, next: NextFunction) {
    const { error } = userSchemaSignUp.validate(req.body);

    if (error) {
        throw { type: "unprocessable_entity", message: error.details[0].message }
    }

    next();
}

export async function verifyEmailConflict(req: Request, res: Response, next: NextFunction) {
    const { email } = req.body
    const existUser = await userRepository.findByEmail(email);

    if (existUser) {
        throw { type: "conflict", message: `email ${email} is already in use` }
    }

    next();
}
import { Request, Response } from "express";
import * as userService from "../services/userService.js"

export async function userSignUp(req: Request, res: Response) {
    const data = req.body;
    await userService.createUser(data);
    return res.sendStatus(201);
}
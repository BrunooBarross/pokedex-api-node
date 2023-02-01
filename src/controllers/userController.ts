import { Request, Response } from "express";
import * as userService from "../services/userService.js"

export async function userSignUp(req: Request, res: Response) {
    const data = req.body;
    await userService.createUser(data);
    return res.sendStatus(201);
}

export async function signIn(req: Request, res: Response){
    const data = req.body;
    const userData = await userService.signin(data);
    res.status(200).send(userData)
}
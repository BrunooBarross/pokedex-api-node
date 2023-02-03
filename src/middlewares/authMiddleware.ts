import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import * as userRepository from "../repositories/userRepository.js"


export async function validateToken(req: Request, res: Response, next: NextFunction){
    const authorization = req.headers.authorization;
    const token = authorization?.replace("Bearer ", "");

    if (!token) {
        throw { type: "unauthorized", message: "it is necessary to send a token"}
    }
    const secretKey = process.env.JWT_SECRET;
    const user: any = jwt.verify(token, secretKey);
    
    const findUser = await userRepository.findById(user.userId);
    
    if (!findUser) {
        throw { type: "unauthorized", message: "there is no user registered with this token"}
    }
    res.locals.userId = user.userId;
    next();
}
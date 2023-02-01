import { NextFunction, Request, Response } from "express";

export default function handleError(error: any, req: Request, res: Response, next: NextFunction) {
    if (error.type === "unauthorized") return res.status(401).send(error.message);
    if (error.type === "not_Found") return res.status(404).send(error.message);
    if (error.type === "conflict") return res.status(409).send(error.message);
    if (error.type === "Expectation failed") return res.status(417).send(error.message);
    if (error.type === "unprocessable_entity") return res.status(422).send(error.message);
    console.log(error)
    return res.status(500).send(error);
}
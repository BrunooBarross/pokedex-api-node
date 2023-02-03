import joi from "joi";
import { UserInsertData } from "../repositories/userRepository";

const userSchemaSignUp = joi.object<UserInsertData>({
    email: joi.string().email().required(),
    password: joi.string().min(4).required(),
    imageUrl: joi.string().pattern(/(http(s?):\/\/.*\.(?:png|jpg|jpeg))/).required()
});

const userSchemaSignIn = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(4).required()
});

export { userSchemaSignUp, userSchemaSignIn }
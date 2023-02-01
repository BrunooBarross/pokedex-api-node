import { UserInsertData } from "../repositories/userRepository.js";
import * as userRepository from "../repositories/userRepository.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function createUser(userData: UserInsertData) {
    userData.password = encryptedPassword(userData.password);
    await userRepository.saveUser(userData);
}

function encryptedPassword(password: string) {
    return bcrypt.hashSync(password, 10);
}

export async function signin(userData: UserInsertData) {
    const user = await getUser(userData.email);
    comparePassword(userData.password, user.password);
    const data = { userId: user.id };
    const config = { expiresIn: 60 * 60 * 72 };
    const token = jwt.sign(data, process.env.JWT_SECRET, config);
    delete user.id;
    return { token: token, ...user };
}

async function getUser(email: string) {
    const user = await userRepository.findByEmail(email);
    if (!user) {
        throw { type: "not_Found", message: `email ${email} not found` }
    }
    return user;
}

function comparePassword(password: string, encryptedPassword: string) {
    if (!bcrypt.compareSync(password, encryptedPassword)) {
        throw { type: "unauthorized", message: "incorrect password" }
    }
}
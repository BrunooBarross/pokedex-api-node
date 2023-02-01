import { UserInsertData } from "../repositories/userRepository.js";
import * as userRepository from "../repositories/userRepository.js"
import bcrypt from "bcrypt";

export async function createUser(userData: UserInsertData) {
    userData.password = encryptedPassword(userData.password);
    await userRepository.saveUser(userData);
}

function encryptedPassword(password: string) {
    return bcrypt.hashSync(password, 10);
}
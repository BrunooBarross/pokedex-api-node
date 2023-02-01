import prisma from "../db.js";
import { Users } from "@prisma/client";

export type UserInsertData = Omit<Users, "id">;

export async function saveUser(userData: UserInsertData) {
    await prisma.users.create({
        data: {
            ...userData
        }
    });
};

export async function findByEmail(email: string) {
    const result = await prisma.users.findUnique({
        where: {
            email: email
        }
    });

    return result;
}
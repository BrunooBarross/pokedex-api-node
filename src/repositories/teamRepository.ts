import { Teams} from "@prisma/client";
import prisma from "../db.js";

export type TeamData = Omit<Teams, "id">;

export async function findTitle(titleTeam: string) {
    return prisma.teams.findFirst({
        where: {
            titleTeam 
        }
    });
};

export async function createTeam(userId: number, titleTeam: string){
    return await prisma.teams.create({
        data: {
            titleTeam,
            userId
        }
    });
};
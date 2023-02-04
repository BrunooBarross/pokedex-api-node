import { Teams } from "@prisma/client";
import prisma from "../db.js";

export type TeamData = Omit<Teams, "id">;

export async function findTitle(userId: number, titleTeam: string) {
    return prisma.teams.findFirst({
        where: {
            userId,
            titleTeam
        }
    });
};

export async function createTeam(userId: number, titleTeam: string) {
    return await prisma.teams.create({
        data: {
            titleTeam,
            userId
        }
    });
};

export async function getTeams(userId: number) {
    return await prisma.teams.findMany({
        orderBy: {
            id: 'desc'
        },
        where: {
            userId
        },
        include: {
            Pokemons: true,
        }
    });
}

export async function findFirstTeam(userId: number, teamId: number) {
    return await prisma.teams.findFirst({
        where: {
            id: teamId,
            userId
        }
    });
}

export async function deleteTeam(teamId: number) {
    await prisma.pokemons.deleteMany({
        where: {
            teamId
        }
    });
    return await prisma.teams.delete({
        where: {
            id: teamId
        }
    });
}
import { Teams, Pokemons } from "@prisma/client";
import prisma from "../db.js";

export type TeamData = Omit<Teams, "id">;
export type TeamPokemonData = Omit<Pokemons, "id">

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

export async function findManyPokemons(teamId: number) {
    return await prisma.pokemons.findMany({
        where: {
            teamId
        }
    });
}

export async function insertPokemonInTeam(data: TeamPokemonData) {
    return await prisma.pokemons.create({
        data: {
            ...data
        }
    });
}
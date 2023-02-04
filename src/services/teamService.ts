import * as teamRepository from "../repositories/teamRepository.js"

export async function createTeam(userId: number, title: string) {
    title = title[0].toUpperCase() + title.substring(1);
    await checkHasTitle(userId, title);
    const res = await teamRepository.createTeam(userId, title);
    delete res.userId;
    return res;
}

async function checkHasTitle(userId: number, title: string) {
    const result = await teamRepository.findTitle(userId, title);
    if (result) {
        throw { type: "conflict", message: `you already have a team with the title ${title}` };
    }
}

export async function getTeams(userId: number) {
    return teamRepository.getTeams(userId);
}
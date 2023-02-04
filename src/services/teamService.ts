import * as teamRepository from "../repositories/teamRepository.js"

export async function createTeam(userId: number, title: string) {
    title = title[0].toUpperCase() + title.substring(1);
    await checkHasTitle(title);
    const res = await teamRepository.createTeam(userId, title);
    delete res.userId;
    return res;
}

async function checkHasTitle(title: string) {
    const result = await teamRepository.findTitle(title);
    if (result) {
        throw { type: "conflict", message: `you already have a team with the title ${title}` };
    }
}

export async function getTeams(userId: number) {
    return teamRepository.getTeams(userId);
}
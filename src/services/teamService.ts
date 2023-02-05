import * as teamRepository from "../repositories/teamRepository.js"
import { TeamPokemonData } from "../repositories/teamRepository"

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

export async function deleteTeam(userId: number, teamId: string) {
    if (!parseInt(teamId)) {
        throw { type: "unprocessable_entity", message: `The id must be a number` };
    }
    await checkTeamExists(userId, teamId);
    await teamRepository.deleteTeam(parseInt(teamId));
}

async function checkTeamExists(userId: number, teamId: string) {
    const result = await teamRepository.findFirstTeam(userId, parseInt(teamId));

    if (!result) {
        throw { type: "not_Found", message: `Team not found` };
    }
}

export async function insertPokemon(data: TeamPokemonData) {
    data.species = data.species.toLowerCase();
    await checkQuantityPokeTeam(data.teamId, data.species);
    await teamRepository.insertPokemonInTeam(data);
}

async function checkQuantityPokeTeam(teamId:  number, species: string){
    const result = await teamRepository.findManyPokemons(teamId);
    if(result.length === 6){
        throw { type: "unauthorized", message: `Max 6 pokemons per team` };
    }

    if(result.length > 0){
        for(let i = 0; i < result.length; i++){
            if (result[i].species == species){
                throw { type: "conflict", message: `It is not possible to have the same species on the same team.` };
            }
        }
    }
};

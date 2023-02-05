import joi from "joi";
import { TeamData, TeamPokemonData } from "../repositories/teamRepository";

const teamSchemaCreate = joi.object<TeamData>({
    titleTeam: joi.string().min(4).max(20).required(),

});

const pokemonTeamSchema = joi.object<TeamPokemonData>({
    pokemonId: joi.number().required(),
    teamId: joi.number().required(),
    species: joi.string().required()
});


export { teamSchemaCreate, pokemonTeamSchema }
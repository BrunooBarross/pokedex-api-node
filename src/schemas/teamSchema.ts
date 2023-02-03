import joi from "joi";
import { TeamData } from "../repositories/teamRepository";

const teamSchemaCreate = joi.object<TeamData>({
    titleTeam: joi.string().min(4).max(20).required(),

});


export { teamSchemaCreate }
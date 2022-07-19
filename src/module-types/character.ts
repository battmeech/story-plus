import { ModuleSkillScores } from "./skill";

export type ModuleCharacter = {
  name: string;
};

export type ModulePlayerCharacter = ModuleCharacter & {
  skillScores: ModuleSkillScores;
};

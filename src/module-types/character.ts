import { ModuleSkillScore } from "./skill";

export type ModuleCharacter = {
  name: string;
};

export type ModulePlayerCharacter = ModuleCharacter & {
  skillScores: Record<string, ModuleSkillScore>;
};

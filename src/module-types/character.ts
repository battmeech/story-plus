export type ModuleSkillScore = {
  value: number;
  experience?: number;
};

export type ModuleCharacter = {
  name: string;
};

export type ModulePlayerCharacter = ModuleCharacter & {
  skillScores: Record<string, ModuleSkillScore>;
};

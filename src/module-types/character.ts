export type ModuleSkillScore = { value: number };

export type ModuleCharacter = {
  name: string;
};

export type ModulePlayerCharacter = ModuleCharacter & {
  skillScores: Record<string, ModuleSkillScore>;
};

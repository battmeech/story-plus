export type ModuleSkillReward = {
  amountGained?: number;
};

export type ModuleSkillRewards = Record<string, ModuleSkillReward>;

export type ModulePlayerOutcome = {
  skills?: ModuleSkillRewards;
};

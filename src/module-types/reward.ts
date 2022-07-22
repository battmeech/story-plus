export type ModuleSkillReward = {
  amountGained: number;
};

export type ModuleSkillRewards = Record<string, ModuleSkillReward>;

export type ModuleReward = {
  skills?: ModuleSkillRewards;
};

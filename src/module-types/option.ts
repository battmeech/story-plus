import { ModuleSkillScores } from "./skill";
import { ModuleOutcome } from "./outcome";

export type ModuleOnSelection = {
  displayText?: string;
  onSuccess: ModuleOutcome;
};

export type ModuleOption = {
  displayText: string;
  onSelection: ModuleOnSelection;
  skillRequirements?: ModuleSkillScores;
};

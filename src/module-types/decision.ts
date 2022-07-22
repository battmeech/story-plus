import { ModuleScene, SceneType } from "./scene";
import { ModuleOutcome } from "./outcome";

export type ModuleOnSelection = {
  displayText?: string;
  onSuccess: ModuleOutcome;
};

export type ModuleOption = {
  displayText: string;
  onSelection: ModuleOnSelection;
  skillRequirements?: Record<string, number>;
};

export type ModuleDecision = ModuleScene & {
  type: SceneType.DECISION;
  options: Record<string, ModuleOption>;
};

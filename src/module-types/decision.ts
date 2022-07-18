import { ModuleOption } from "./option";
import { ModuleScene, SceneType } from "./scene";

export type ModuleDecision = ModuleScene & {
  type: SceneType.DECISION;
  options: Record<string, ModuleOption>;
};

import { ModuleScene, SceneType } from "./scene";
import { ModuleOutcome } from "./outcome";

export type ModuleDescription = ModuleScene & {
  type: SceneType.DESCRIPTION;
  onNext: ModuleOutcome;
};

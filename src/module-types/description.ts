import { ModuleScene, SceneType } from "./scene";
import { ModuleOnOutcome } from "./option";

export type ModuleDescription = ModuleScene & {
  type: SceneType.DESCRIPTION;
  onNext: ModuleOnOutcome;
};

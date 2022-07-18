export enum SceneType {
  DECISION = "DECISION",
  DESCRIPTION = "DESCRIPTION",
}

export type ModuleScene = {
  type: SceneType;
  displayText: string;
};

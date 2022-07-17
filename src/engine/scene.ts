export enum SceneType {
  DECISION = "DECISION",
  DESCRIPTION = "DESCRIPTION",
}

export interface Scene {
  id: string;
  type: SceneType;
  displayText: string;
}

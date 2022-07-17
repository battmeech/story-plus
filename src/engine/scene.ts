export enum SceneType {
  LOCATION = "LOCATION",
  DESCRIPTION = "DESCRIPTION",
}

export interface Scene {
  id: string;
  type: SceneType;
  displayText: string;
}

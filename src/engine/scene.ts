export enum SceneType {
  LOCATION = "LOCATION",
}

export interface Scene {
  id: string;
  type: SceneType;
  displayText: string;
}

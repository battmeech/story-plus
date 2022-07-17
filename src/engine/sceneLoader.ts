import { Scene, SceneType } from "./scene";
import { Location } from "./location";

export const sceneLoader = <T>(id: string, input: any): Scene => {
  switch (input.type as SceneType) {
    case SceneType.LOCATION:
      return new Location(id, input);
    default:
      throw Error(`Scene "${id}" is not valid. Please provide a scene type.`);
  }
};

import { Scene, SceneType } from "./scene";
import { Location } from "./location";
import { Description } from "./description";

export const sceneLoader = (id: string, input: any): Scene => {
  switch (input.type as SceneType) {
    case SceneType.LOCATION:
      return new Location(id, input);
    case SceneType.DESCRIPTION:
      return new Description(id, input);
    default:
      throw Error(`Scene "${id}" is not valid. Please provide a scene type.`);
  }
};

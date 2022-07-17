import { Scene } from "./scene";
import { LocationInput } from "./location";
import { Option } from "./option";
import { sceneLoader } from "./sceneLoader";

export type GameInput = {
  scenes: Record<string, LocationInput>;
};

export class Game {
  scenes: Record<string, Scene>;

  constructor({ scenes }: GameInput) {
    this.scenes = {};

    this.scenes = Object.keys(scenes).reduce((previousValue, currentValue) => {
      return {
        ...previousValue,
        [currentValue]: sceneLoader(currentValue, scenes[currentValue]),
      };
    }, {} as Record<string, Scene>);
  }
}

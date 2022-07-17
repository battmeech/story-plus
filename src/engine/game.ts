import { Scene } from "./scene";
import { DecisionInput } from "./decision";
import { sceneLoader } from "./sceneLoader";

export type GameInput = {
  initialScene: string;
  scenes: Record<string, DecisionInput>;
};

export type GameOptions = {
  onSceneChange?: (newGameState: Game) => void;
};

export class Game {
  activeScene: Scene;
  scenes: Record<string, Scene>;

  onSceneChange?: (newGameState: Game) => void;
  changeActiveScene = (sceneId: string) => {
    this.activeScene = this.scenes[sceneId];
    if (this.onSceneChange) {
      this.onSceneChange(this);
    }
  };

  constructor(
    { initialScene, scenes }: GameInput,
    { onSceneChange }: GameOptions
  ) {
    this.scenes = Object.keys(scenes).reduce((previousValue, currentValue) => {
      return {
        ...previousValue,
        [currentValue]: sceneLoader(currentValue, scenes[currentValue]),
      };
    }, {} as Record<string, Scene>);
    this.activeScene = this.scenes[initialScene];
    this.onSceneChange = onSceneChange;
  }
}

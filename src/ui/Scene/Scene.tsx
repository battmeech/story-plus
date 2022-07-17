import { FC } from "react";
import { SceneType, Scene as EngineScene } from "../../engine/scene";
import { Decision as EngineLocation } from "../../engine/decision";
import { Decision } from "./Decision";
import { OnOutcome } from "../../engine/option";

type SceneProps = {
  scene: EngineScene;
  onSelection: (selection: OnOutcome) => void;
};

export const Scene: FC<SceneProps> = ({ scene, onSelection }) => {
  switch (scene.type) {
    case SceneType.DECISION:
      return (
        <Decision
          decision={scene as EngineLocation}
          onSelection={onSelection}
        />
      );
    case SceneType.DESCRIPTION:
      return <div>description</div>;
  }
};

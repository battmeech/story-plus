import { FC } from "react";
import { SceneType, Scene as EngineScene } from "../../engine/scene";
import { Decision as EngineLocation } from "../../engine/decision";
import { Description as EngineDescription } from "../../engine/description";
import { Decision } from "./Decision";
import { OnOutcome } from "../../engine/option";
import { Description } from "./Description";

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
      return (
        <Description
          description={scene as EngineDescription}
          onSelection={onSelection}
        />
      );
  }
};

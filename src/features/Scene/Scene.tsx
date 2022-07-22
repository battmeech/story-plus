import { FC } from "react";
import { Decision } from "./Decision";
import { Description } from "./Description";
import { ModuleScene, SceneType } from "../../module-types/scene";
import { ModuleDecision } from "../../module-types/decision";
import { ModuleDescription } from "../../module-types/description";
import { ModuleOutcome } from "../../module-types/outcome";

type SceneProps = {
  scene: ModuleScene;
  onSelection: (selection: ModuleOutcome) => void;
};

export const Scene: FC<SceneProps> = ({ scene, onSelection }) => {
  switch (scene.type) {
    case SceneType.DECISION:
      return (
        <Decision
          decision={scene as ModuleDecision}
          onSelection={onSelection}
        />
      );
    case SceneType.DESCRIPTION:
      return (
        <Description
          description={scene as ModuleDescription}
          onSelection={onSelection}
        />
      );
  }
};

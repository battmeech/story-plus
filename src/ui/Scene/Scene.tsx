import { FC } from "react";
import { SceneType, Scene as EngineScene } from "../../engine/scene";
import { Location as EngineLocation } from "../../engine/location";
import { Location } from "../Scene/Location";
import { OnOutcome } from "../../engine/option";

type SceneProps = {
  scene: EngineScene;
  onSelection: (selection: OnOutcome) => void;
};

export const Scene: FC<SceneProps> = ({ scene, onSelection }) => {
  switch (scene.type) {
    case SceneType.LOCATION:
      return (
        <Location
          location={scene as EngineLocation}
          onSelection={onSelection}
        />
      );
  }
};

import { Game as EngineGame } from "../../engine/game";
import { FC } from "react";
import { SceneType } from "../../engine/scene";
import { Location as EngineLocation } from "../../engine/location";
import { Location } from "../Scene/Location";

type LocationProps = {
  game: EngineGame;
};

export const Game: FC<LocationProps> = ({ game }) => {
  switch (game.activeScene.type) {
    case SceneType.LOCATION:
      return (
        <Location
          location={game.activeScene as EngineLocation}
          onSelection={game.changeActiveScene}
        />
      );
  }
};

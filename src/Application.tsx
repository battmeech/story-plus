import React from "react";
import { Game } from "./game/Game";
import { useApplication } from "./ducks/store";
import { ApplicationScreen } from "./ducks/application";
import { FileLoader } from "./game/FileLoader";

export const Application = () => {
  const { screen } = useApplication();

  switch (screen) {
    case ApplicationScreen.GAME:
      return <Game />;
    case ApplicationScreen.LOAD_GAME:
      return <FileLoader />;
  }
};

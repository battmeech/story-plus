import React, { useState } from "react";
import "./App.css";
import { Game } from "./Game/Game";
import gameData from "../test-data/game-with-description-and-decision.json";
import { Game as EngineGame } from "../engine/game";

export const App = () => {
  const onSceneChange = (newGameState: EngineGame) => {
    setGame((current) => {
      return {
        ...current,
        activeScene: newGameState.activeScene,
      };
    });
  };

  const initialGameState = new EngineGame(gameData, { onSceneChange });

  const [game, setGame] = useState(initialGameState);

  return (
    <div className="App">
      <header className="App-header">
        <Game game={game} />
      </header>
    </div>
  );
};

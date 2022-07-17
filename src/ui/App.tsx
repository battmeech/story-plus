import React, { useState } from "react";
import "./App.css";
import { Game } from "./Game/Game";
import gameData from "../test-data/game-with-three-scenes.json";
import { Game as EngineGame } from "../engine/game";

function App() {
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
}

export default App;

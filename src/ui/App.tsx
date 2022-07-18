import React, { useState } from "react";
import "./App.css";
import { Game } from "./Game/Game";
import {
  Game as EngineGame,
  GameInput as EngineGameInput,
} from "../engine/game";
import { FileLoader } from "./FileLoader/FileLoader";

export const App = () => {
  const onSceneChange = (newGameState: EngineGame) => {
    setGame({ ...newGameState });
  };

  const onGameLoad = (gameInput: EngineGameInput) => {
    const loadedGame = new EngineGame(gameInput, {
      onSceneChange,
    });
    setGame(loadedGame);
  };

  const [game, setGame] = useState<EngineGame>();

  return (
    <div className="App">
      <header className="App-header">
        {game ? (
          <Game game={game} />
        ) : (
          <>
            <p>Select your game file</p>
            <FileLoader onFileLoaded={onGameLoad} />
          </>
        )}
      </header>
    </div>
  );
};

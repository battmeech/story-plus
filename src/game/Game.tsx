import React from "react";
import { gameStateActions } from "../ducks/game";
import { useGameState } from "../ducks/store";
import { useDispatch } from "react-redux";
import { Scene } from "./Scene/Scene";
import { Outcome } from "./Scene/Outcome";
import { ModuleOutcome } from "../module-types/outcome";

export const Game = () => {
  const { activeScene, showOutcome, lastOutcome } = useGameState();
  const dispatch = useDispatch();

  const onSelection = (onOutcome: ModuleOutcome) => {
    dispatch(gameStateActions.decisionOutcome(onOutcome));
  };

  if (showOutcome) return <Outcome outcome={lastOutcome} />;
  else return <Scene scene={activeScene} onSelection={onSelection} />;
};

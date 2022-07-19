import React, { useState } from "react";
import { gameStateActions } from "../../ducks/game";
import { ModuleOnOutcome } from "../../module-types/option";
import { useGameState } from "../../ducks/store";
import { useDispatch } from "react-redux";
import { Scene } from "../Scene/Scene";

export const Game = () => {
  const { activeScene, currentOutcome } = useGameState();
  const dispatch = useDispatch();

  const onSelection = (onOutcome: ModuleOnOutcome) => {
    if (onOutcome.displayText) {
      dispatch(gameStateActions.setCurrentOutcome(onOutcome));
    } else {
      dispatch(gameStateActions.changeActiveScene(onOutcome.goToReference));
    }
  };

  const onNext = (onOutcome: ModuleOnOutcome) => {
    dispatch(gameStateActions.changeActiveScene(onOutcome.goToReference));
  };

  return (
    <>
      {currentOutcome ? (
        <>
          <p>{currentOutcome.displayText}</p>
          <button onClick={() => onNext(currentOutcome)}>Next</button>
        </>
      ) : (
        <Scene scene={activeScene} onSelection={onSelection} />
      )}
    </>
  );
};

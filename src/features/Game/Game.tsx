import React from "react";
import { gameStateActions } from "../../ducks/game";
import { ModuleOnOutcome } from "../../module-types/option";
import { useGameState } from "../../ducks/store";
import { useDispatch } from "react-redux";
import { Scene } from "../Scene/Scene";
import { applicationActions, ApplicationScreen } from "../../ducks/application";

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
      <button
        onClick={() =>
          dispatch(applicationActions.setScreen(ApplicationScreen.LOAD_GAME))
        }
      >
        Reload game file
      </button>
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

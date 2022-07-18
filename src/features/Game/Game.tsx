import React, { useState } from "react";
import { gameStateActions } from "../../ducks/game";
import { ModuleOnOutcome } from "../../module-types/option";
import { useGameState } from "../../ducks/store";
import { useDispatch } from "react-redux";
import { Scene } from "../Scene/Scene";

export const Game = () => {
  const [outcome, setOutcome] = useState<ModuleOnOutcome>();
  const { activeScene } = useGameState();
  const dispatch = useDispatch();

  const onSelection = (onOutcome: ModuleOnOutcome) => {
    if (onOutcome.displayText) {
      setOutcome(onOutcome);
    } else {
      dispatch(gameStateActions.changeActiveScene(onOutcome.goToReference));
    }
  };

  const onNext = (onOutcome: ModuleOnOutcome) => {
    dispatch(gameStateActions.changeActiveScene(onOutcome.goToReference));
    setOutcome(undefined);
  };

  return (
    <>
      {outcome ? (
        <>
          <p>{outcome.displayText}</p>
          <button onClick={() => onNext(outcome)}>Next</button>
        </>
      ) : (
        <Scene scene={activeScene!} onSelection={onSelection} />
      )}
    </>
  );
};

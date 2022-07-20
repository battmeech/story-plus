import React from "react";
import { gameStateActions } from "../../ducks/game";
import { ModuleOnOutcome } from "../../module-types/option";
import { useGameState } from "../../ducks/store";
import { useDispatch } from "react-redux";
import { Scene } from "../Scene/Scene";

export const Game = () => {
  const { activeScene, showOutcome, lastOutcome } = useGameState();
  const dispatch = useDispatch();

  const onSelection = (onOutcome: ModuleOnOutcome) => {
    dispatch(gameStateActions.decisionOutcome(onOutcome));
  };

  return (
    <>
      {showOutcome ? (
        <>
          <p>{lastOutcome.displayText}</p>
          <button
            onClick={() => dispatch(gameStateActions.outcomeAcknowledged())}
          >
            Next
          </button>
        </>
      ) : (
        <Scene scene={activeScene} onSelection={onSelection} />
      )}
    </>
  );
};

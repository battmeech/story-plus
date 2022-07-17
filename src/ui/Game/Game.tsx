import { Game as EngineGame } from "../../engine/game";
import { FC, useState } from "react";
import { OnOutcome } from "../../engine/option";
import { Scene } from "../Scene/Scene";

type LocationProps = {
  game: EngineGame;
};

export const Game: FC<LocationProps> = ({ game }) => {
  const [outcome, setOutcome] = useState<OnOutcome>();

  const onSelection = (onOutcome: OnOutcome) => {
    if (onOutcome.displayText) {
      setOutcome(onOutcome);
    } else {
      game.changeActiveScene(onOutcome.goToReference);
    }
  };

  const onNext = (onOutcome: OnOutcome) => {
    game.changeActiveScene(onOutcome.goToReference);
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
        <Scene scene={game.activeScene} onSelection={onSelection} />
      )}
    </>
  );
};

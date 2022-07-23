import { gameStateActions } from "../../ducks/game";
import { useDispatch } from "react-redux";
import { ModuleOutcome } from "../../module-types/outcome";
import { FC } from "react";
import { Markup } from "../../components/Markup";

export type OutcomeProps = {
  outcome: ModuleOutcome;
};

export const Outcome: FC<OutcomeProps> = ({ outcome }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Markup html={outcome.displayText || ""} />
      <button onClick={() => dispatch(gameStateActions.outcomeAcknowledged())}>
        Next
      </button>
    </>
  );
};

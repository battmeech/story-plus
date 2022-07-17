import { Decision as EngineLocation } from "../../engine/decision";
import { FC } from "react";
import { OnOutcome } from "../../engine/option";

type DecisionProps = {
  decision: EngineLocation;
  onSelection: (selection: OnOutcome) => void;
};

export const Decision: FC<DecisionProps> = ({
  decision,
  onSelection: _onSelection,
}) => {
  const options = Object.keys(decision.options).map((option) => ({
    optionId: option,
    displayText: decision.options[option].displayText,
    onSelection: decision.options[option].onSelection,
  }));

  return (
    <div>
      <p>{decision.displayText}</p>

      {options.map(({ optionId, displayText, onSelection }) => (
        <div key={optionId}>
          <button onClick={() => _onSelection(onSelection.onSuccess)}>
            {displayText}
          </button>
        </div>
      ))}
    </div>
  );
};

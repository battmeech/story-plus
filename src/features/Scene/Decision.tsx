import { FC } from "react";
import { ModuleDecision } from "../../module-types/decision";
import { ModuleOnOutcome } from "../../module-types/option";

type DecisionProps = {
  decision: ModuleDecision;
  onSelection: (selection: ModuleOnOutcome) => void;
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

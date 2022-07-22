import { FC } from "react";
import { ModuleDecision } from "../../module-types/decision";
import { useGameState } from "../../ducks/store";
import { ModuleOutcome } from "../../module-types/outcome";

type DecisionProps = {
  decision: ModuleDecision;
  onSelection: (selection: ModuleOutcome) => void;
};

export const Decision: FC<DecisionProps> = ({
  decision,
  onSelection: _onSelection,
}) => {
  const { playerCharacter } = useGameState();

  const options = Object.keys(decision.options)
    .map((option) => ({
      optionId: option,
      displayText: decision.options[option].displayText,
      onSelection: decision.options[option].onSelection,
      skillRequirements: decision.options[option].skillRequirements,
    }))
    .filter(({ skillRequirements }) => {
      if (!skillRequirements) return true;

      const playerMeetsRequirements = Object.keys(skillRequirements).every(
        (it) => skillRequirements[it] <= playerCharacter.skillScores[it].value
      );

      return playerMeetsRequirements;
    });

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

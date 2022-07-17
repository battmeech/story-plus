import { Description as EngineDescription } from "../../engine/description";
import { FC } from "react";
import { OnOutcome } from "../../engine/option";

type DescriptionProps = {
  description: EngineDescription;
  onSelection: (selection: OnOutcome) => void;
};

export const Description: FC<DescriptionProps> = ({
  description,
  onSelection: _onSelection,
}) => {
  return (
    <div>
      <p>{description.displayText}</p>

      <button onClick={() => _onSelection(description.onNext)}>Next</button>
    </div>
  );
};

import { FC } from "react";
import { ModuleDescription } from "../../module-types/description";
import { ModuleOnOutcome } from "../../module-types/option";

type DescriptionProps = {
  description: ModuleDescription;
  onSelection: (selection: ModuleOnOutcome) => void;
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

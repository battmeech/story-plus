import { FC } from "react";
import { ModuleDescription } from "../../module-types/description";
import { ModuleOutcome } from "../../module-types/outcome";
import { Markup } from "../../components/Markup";

type DescriptionProps = {
  description: ModuleDescription;
  onSelection: (selection: ModuleOutcome) => void;
};

export const Description: FC<DescriptionProps> = ({
  description,
  onSelection: _onSelection,
}) => {
  return (
    <div>
      <Markup html={description.displayText} />
      <button onClick={() => _onSelection(description.onNext)}>Next</button>
    </div>
  );
};

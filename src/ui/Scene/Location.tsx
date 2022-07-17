import { Location as EngineLocation } from "../../engine/location";
import { FC } from "react";
import { OnOutcome } from "../../engine/option";

type LocationProps = {
  location: EngineLocation;
  onSelection: (selection: OnOutcome) => void;
};

export const Location: FC<LocationProps> = ({
  location,
  onSelection: _onSelection,
}) => {
  const options = Object.keys(location.options).map((option) => ({
    optionId: option,
    displayText: location.options[option].displayText,
    onSelection: location.options[option].onSelection,
  }));

  return (
    <div>
      <p>{location.displayText}</p>

      {options.map(({ displayText, onSelection }) => (
        <div>
          <button onClick={() => _onSelection(onSelection.onSuccess)}>
            {displayText}
          </button>
        </div>
      ))}
    </div>
  );
};

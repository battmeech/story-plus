import { Location as EngineLocation } from "../../engine/location";
import { FC } from "react";

type LocationProps = {
  location: EngineLocation;
  onSelection: (nextSceneId: string) => void;
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

      {options.map(({ optionId, displayText, onSelection }) => (
        <div>
          <p>
            {optionId}. {displayText}
          </p>
          <button
            onClick={() => _onSelection(onSelection.onSuccess.goToReference)}
          >
            Do this
          </button>
        </div>
      ))}
    </div>
  );
};

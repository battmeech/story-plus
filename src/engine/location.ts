import { Scene, SceneType } from "./scene";
import { Option, OptionInput } from "./option";

export type LocationInput = {
  displayText: string;
  options: Record<string, OptionInput>;
};

export class Location implements Scene {
  id: string;
  type = SceneType.LOCATION;
  displayText: string;
  options: Record<string, Option>;

  constructor(id: string, { displayText, options }: LocationInput) {
    this.id = id;
    this.displayText = displayText;
    this.options = Object.keys(options).reduce(
      (previousValue, currentValue) => {
        return {
          ...previousValue,
          [currentValue]: new Option(currentValue, options[currentValue]),
        };
      },
      {} as Record<string, Option>
    );
  }
}

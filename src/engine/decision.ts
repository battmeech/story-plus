import { Scene, SceneType } from "./scene";
import { Option, OptionInput } from "./option";

export type DecisionInput = {
  displayText: string;
  options: Record<string, OptionInput>;
};

export class Decision implements Scene {
  id: string;
  type = SceneType.DECISION;
  displayText: string;
  options: Record<string, Option>;

  constructor(id: string, { displayText, options }: DecisionInput) {
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

import { Scene, SceneType } from "./scene";
import { Option, OptionInput } from "./option";

export type DescriptionInput = {
  displayText: string;
  goToReference: string;
};

export class Description implements Scene {
  id: string;
  type = SceneType.DESCRIPTION;
  displayText: string;
  goToReference: string;

  constructor(id: string, { displayText, goToReference }: DescriptionInput) {
    this.id = id;
    this.displayText = displayText;
    this.goToReference = goToReference;
  }
}

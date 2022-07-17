import { Scene, SceneType } from "./scene";
import { OnOutcome } from "./option";

export type DescriptionInput = {
  displayText: string;
  onNext: OnOutcome;
};

export class Description implements Scene {
  id: string;
  type = SceneType.DESCRIPTION;
  displayText: string;
  onNext: OnOutcome;

  constructor(id: string, { displayText, onNext }: DescriptionInput) {
    this.id = id;
    this.displayText = displayText;
    this.onNext = onNext;
  }
}

export type OnOutcome = {
  displayText?: string;
  goToReference: string;
};

export type OnSelection = {
  displayText?: string;
  onSuccess: OnOutcome;
};

export type OptionInput = {
  displayText: string;
  onSelection: OnSelection;
};

export class Option {
  id: string;
  displayText: string;
  onSelection: OnSelection;

  constructor(id: string, { displayText, onSelection }: OptionInput) {
    this.id = id;
    this.displayText = displayText;
    this.onSelection = onSelection;
  }
}

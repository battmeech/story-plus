export type ModuleOnOutcome = {
  displayText?: string;
  goToReference: string;
};

export type ModuleOnSelection = {
  displayText?: string;
  onSuccess: ModuleOnOutcome;
};

export type ModuleOption = {
  displayText: string;
  onSelection: ModuleOnSelection;
  skillRequirements?: Record<string, number>;
};

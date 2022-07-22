import { ModulePlayerOutcome } from "./player-outcome";

export type ModuleOutcome = {
  displayText?: string;
  goToReference: string;
  playerOutcome?: ModulePlayerOutcome;
};

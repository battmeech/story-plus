import { ModulePlayerOutcome } from "./reward";

export type ModuleOutcome = {
  displayText?: string;
  goToReference: string;
  playerOutcome?: ModulePlayerOutcome;
};

import { ModuleReward } from "./reward";

export type ModuleOutcome = {
  displayText?: string;
  goToReference: string;
  reward?: ModuleReward;
};

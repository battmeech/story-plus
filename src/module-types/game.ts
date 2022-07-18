import { ModuleDecision } from "./decision";
import { ModuleDescription } from "./description";

export type ModuleGame = {
  initialScene: string;
  scenes: Record<string, ModuleDescription | ModuleDecision>;
};

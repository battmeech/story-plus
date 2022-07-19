import { ModuleDecision } from "./decision";
import { ModuleDescription } from "./description";
import { ModulePlayerCharacter } from "./character";

export type ModuleGame = {
  initialScene: string;
  scenes: Record<string, ModuleDescription | ModuleDecision>;
  playerCharacter: ModulePlayerCharacter;
};

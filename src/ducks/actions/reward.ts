import { GameState } from "../game";
import { ModulePlayerOutcome } from "../../module-types/reward";

export const processRewards = (
  state: GameState,
  playerOutcome: ModulePlayerOutcome | undefined
) => {
  if (!playerOutcome) return;
  if (playerOutcome.skills) {
    for (const skill of Object.keys(playerOutcome.skills)) {
      state.playerCharacter.skillScores[skill] +=
        playerOutcome.skills[skill].amountGained;
    }
  }
};

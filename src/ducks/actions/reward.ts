import { GameState } from "../game";
import { ModulePlayerOutcome } from "../../module-types/player-outcome";

export const processRewards = (
  state: GameState,
  playerOutcome: ModulePlayerOutcome | undefined
) => {
  if (!playerOutcome) return;
  if (playerOutcome.skills) {
    for (const skill of Object.keys(playerOutcome.skills)) {
      state.playerCharacter.skillScores[skill].value +=
        playerOutcome.skills[skill].amountGained || 0;
    }
  }
};

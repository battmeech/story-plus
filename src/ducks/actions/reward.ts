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

    for (const skill of Object.keys(playerOutcome.skills)) {
      const experience =
        (state.playerCharacter.skillScores[skill].experience || 0) +
        (playerOutcome.skills[skill].experienceGained || 0);

      if (experience < 10) {
        state.playerCharacter.skillScores[skill].experience = experience;
      } else {
        state.playerCharacter.skillScores[skill].value++;
        state.playerCharacter.skillScores[skill].experience = experience - 10;
      }
    }
  }
};

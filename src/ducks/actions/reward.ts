import { GameState } from "../game";
import { ModuleReward } from "../../module-types/reward";

export const processRewards = (
  state: GameState,
  reward: ModuleReward | undefined
) => {
  if (!reward) return;
  if (reward.skills) {
    for (const skill of Object.keys(reward.skills)) {
      state.playerCharacter.skillScores[skill] +=
        reward.skills[skill].amountGained;
    }
  }
};

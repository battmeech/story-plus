import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModuleGame } from "../module-types/game";
import { ModuleScene, SceneType } from "../module-types/scene";
import { ModulePlayerCharacter } from "../module-types/character";
import { ModuleOutcome } from "../module-types/outcome";
import { processRewards } from "./actions/reward";

export type GameState = {
  activeScene: ModuleScene;
  lastOutcome: ModuleOutcome;
  scenes: Record<string, ModuleScene>;
  playerCharacter: ModulePlayerCharacter;
  showOutcome: boolean;
};

const initialState: GameState = {
  scenes: {},
  activeScene: {
    type: SceneType.DESCRIPTION,
    displayText: "This scene should never be seen",
  },
  lastOutcome: {
    goToReference: "",
  },
  showOutcome: false,
  playerCharacter: { name: "", skillScores: {} },
};

const gameStateSlice = createSlice({
  name: "game-state",
  initialState: initialState as GameState,
  reducers: {
    gameLoaded(state, action: PayloadAction<ModuleGame>) {
      state.scenes = action.payload.scenes;
      state.activeScene = action.payload.scenes[action.payload.initialScene];
      state.playerCharacter = action.payload.playerCharacter;
    },
    decisionOutcome(state, action: PayloadAction<ModuleOutcome>) {
      state.lastOutcome = action.payload;
      state.activeScene = state.activeScene =
        state.scenes[action.payload.goToReference];

      processRewards(state, action.payload.reward);

      if (action.payload.displayText) state.showOutcome = true;
    },
    outcomeAcknowledged(state) {
      state.showOutcome = false;
    },
    sceneChanged(state, action: PayloadAction<string>) {
      state.activeScene = state.scenes[action.payload];
      state.showOutcome = false;
    },
    skillScoreIncreased(
      state,
      {
        payload: { skill, amountGained },
      }: PayloadAction<{ skill: string; amountGained: number }>
    ) {
      state.playerCharacter.skillScores[skill] += amountGained;
    },
  },
});

export const gameStateActions = gameStateSlice.actions;
export const gameStateReducer = gameStateSlice.reducer;

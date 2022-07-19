import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModuleGame } from "../module-types/game";
import { ModuleScene, SceneType } from "../module-types/scene";
import { ModuleOnOutcome } from "../module-types/option";
import { ModulePlayerCharacter } from "../module-types/character";

export type GameState = {
  activeScene: ModuleScene;
  currentOutcome?: ModuleOnOutcome;
  scenes: Record<string, ModuleScene>;
  playerCharacter: ModulePlayerCharacter;
};

const initialState: GameState = {
  scenes: {},
  activeScene: {
    type: SceneType.DESCRIPTION,
    displayText: "This scene should never be seen",
  },
  playerCharacter: { name: "", skillScores: {} },
};

const gameStateSlice = createSlice({
  name: "game-state",
  initialState: initialState as GameState,
  reducers: {
    load(state, action: PayloadAction<ModuleGame>) {
      state.scenes = action.payload.scenes;
      state.activeScene = action.payload.scenes[action.payload.initialScene];
      state.playerCharacter = action.payload.playerCharacter;
    },
    changeActiveScene(state, action: PayloadAction<string>) {
      state.activeScene = state.scenes[action.payload];
      state.currentOutcome = undefined;
    },
    setCurrentOutcome(state, action: PayloadAction<ModuleOnOutcome>) {
      state.currentOutcome = action.payload;
    },
    increaseSkillScore(
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

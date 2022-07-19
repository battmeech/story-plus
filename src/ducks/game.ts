import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModuleGame } from "../module-types/game";
import { ModuleScene, SceneType } from "../module-types/scene";
import { ModuleOnOutcome } from "../module-types/option";

export type GameState = {
  activeScene: ModuleScene;
  currentOutcome?: ModuleOnOutcome;
  scenes: Record<string, ModuleScene>;
};

const initialState: GameState = {
  scenes: {},
  activeScene: {
    type: SceneType.DESCRIPTION,
    displayText: "This scene should never be seen",
  },
};

const gameStateSlice = createSlice({
  name: "game-state",
  initialState: initialState as GameState,
  reducers: {
    load(state, action: PayloadAction<ModuleGame>) {
      state.scenes = action.payload.scenes;
      state.activeScene = action.payload.scenes[action.payload.initialScene];
    },
    changeActiveScene(state, action: PayloadAction<string>) {
      state.activeScene = state.scenes[action.payload];
      state.currentOutcome = undefined;
    },
    setCurrentOutcome(state, action: PayloadAction<ModuleOnOutcome>) {
      state.currentOutcome = action.payload;
    },
  },
});

export const gameStateActions = gameStateSlice.actions;
export const gameStateReducer = gameStateSlice.reducer;

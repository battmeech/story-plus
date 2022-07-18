import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModuleGame } from "../module-types/game";
import { ModuleScene, SceneType } from "../module-types/scene";

export type GameState = {
  game: ModuleGame;
  activeScene: ModuleScene;
};

const initialState: GameState = {
  game: { scenes: {}, initialScene: "initialScene" },
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
      state.game = action.payload;
      state.activeScene = action.payload.scenes[action.payload.initialScene];
    },
    changeActiveScene(state, action: PayloadAction<string>) {
      state.activeScene = state.game.scenes[action.payload];
    },
  },
});

export const gameStateActions = gameStateSlice.actions;
export const gameStateReducer = gameStateSlice.reducer;

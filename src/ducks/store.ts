import { configureStore } from "@reduxjs/toolkit";
import { Application, applicationReducer } from "./application";
import { useSelector } from "react-redux";
import { GameState, gameStateReducer } from "./game";

export const store = configureStore({
  reducer: {
    application: applicationReducer,
    gameState: gameStateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;

export const useApplication = (): Application =>
  useSelector<RootState, Application>((state) => state.application);

export const useGameState = (): GameState =>
  useSelector<RootState, GameState>((state) => state.gameState);

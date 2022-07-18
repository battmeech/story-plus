import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum ApplicationScreen {
  LOAD_GAME,
  GAME,
}

export type Application = {
  screen: ApplicationScreen;
};

const initialState: Application = {
  screen: ApplicationScreen.LOAD_GAME,
};

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    setScreen(state, action: PayloadAction<ApplicationScreen>) {
      state.screen = action.payload;
    },
  },
});

export const applicationActions = applicationSlice.actions;
export const applicationReducer = applicationSlice.reducer;

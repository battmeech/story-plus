import { Provider } from "react-redux";
import { store } from "../ducks/store";
import { Application } from "../features/Application/Application";
import { gameStateActions } from "../ducks/game";
import gameData from "../../test-data/minimal-working-game.json";
import { ModuleGame } from "../module-types/game";
import { applicationActions, ApplicationScreen } from "../ducks/application";
import { act, render, screen } from "@testing-library/react";

describe("Application Behaviour", () => {
  describe("File loading screen", () => {
    beforeEach(() => {
      store.dispatch(
        applicationActions.screenChanged(ApplicationScreen.LOAD_GAME)
      );
    });

    it("shows the file loader when set to that screen", () => {
      render(
        <Provider store={store}>
          <Application />
        </Provider>
      );

      expect(
        screen.getByText("Choose the module you would like to play")
      ).toBeInTheDocument();
    });
  });

  describe("Game screen", () => {
    beforeEach(() => {
      store.dispatch(gameStateActions.gameLoaded(gameData as ModuleGame));
      store.dispatch(applicationActions.screenChanged(ApplicationScreen.GAME));
    });

    it("displays the initial scene when loading up a game", () => {
      render(
        <Provider store={store}>
          <Application />
        </Provider>
      );

      expect(screen.getByText("Sample description scene")).toBeInTheDocument();
    });

    it("displays scene two when clicking next", async () => {
      render(
        <Provider store={store}>
          <Application />
        </Provider>
      );

      await act(() => {
        screen.getByText("Next").click();
      });

      expect(screen.getByText("Sample decision scene")).toBeInTheDocument();
    });
  });
});

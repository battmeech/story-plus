import { Provider } from "react-redux";
import { store } from "../ducks/store";
import { Application } from "../features/Application/Application";
import { gameStateActions } from "../ducks/game";
import gameData from "../../test-data/game-with-description-and-decision.json";
import { ModuleGame } from "../module-types/game";
import { applicationActions, ApplicationScreen } from "../ducks/application";
import { act, render, screen } from "@testing-library/react";

describe("Scenario Tests", () => {
  describe("File loading screen", () => {
    beforeEach(() => {
      store.dispatch(applicationActions.setScreen(ApplicationScreen.LOAD_GAME));
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
      store.dispatch(gameStateActions.load(gameData as ModuleGame));
      store.dispatch(applicationActions.setScreen(ApplicationScreen.GAME));
    });

    it("loads the store into the correct state on loading module", () => {
      const { gameState } = store.getState();

      expect(gameState.activeScene.displayText).toEqual(
        "Hello there, this is a description scene. It contains no options for the player."
      );
      expect(gameState.playerCharacter.name).toEqual("Link");
    });

    it("loads the initial scene when loading up a game", () => {
      render(
        <Provider store={store}>
          <Application />
        </Provider>
      );

      expect(
        screen.getByText(
          "Hello there, this is a description scene. It contains no options for the player."
        )
      ).toBeInTheDocument();
    });

    it("goes to the next scene when clicking next", async () => {
      render(
        <Provider store={store}>
          <Application />
        </Provider>
      );

      await act(() => {
        screen.getByText("Next").click();
      });

      expect(
        screen.getByText(
          "This is a decision, it provides players with a choice of multiple things they can do in a given scenario."
        )
      ).toBeInTheDocument();
    });
  });
});

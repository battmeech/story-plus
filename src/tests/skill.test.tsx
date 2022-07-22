import { Provider } from "react-redux";
import { store } from "../ducks/store";
import { Application } from "../features/Application/Application";
import { gameStateActions } from "../ducks/game";
import gameData from "../../test-data/skill-scene.json";
import { ModuleGame } from "../module-types/game";
import { applicationActions, ApplicationScreen } from "../ducks/application";
import { act, render, screen } from "@testing-library/react";

describe("Skill based options", () => {
  beforeEach(() => {
    store.dispatch(gameStateActions.gameLoaded(gameData as ModuleGame));
    store.dispatch(applicationActions.screenChanged(ApplicationScreen.GAME));
  });

  it("displays only the visible button when a characters skill is not high enough", () => {
    render(
      <Provider store={store}>
        <Application />
      </Provider>
    );

    expect(screen.getByText("visible")).toBeInTheDocument();
    expect(screen.queryByText("skill test")).not.toBeInTheDocument();
  });

  it("displays the skill test button if the character has a high enough skill level", () => {
    store.dispatch(
      gameStateActions.skillScoreIncreased({ skill: "CHA", amountGained: 1000 })
    );

    render(
      <Provider store={store}>
        <Application />
      </Provider>
    );

    expect(screen.getByText("visible")).toBeInTheDocument();
    expect(screen.getByText("skill test")).toBeInTheDocument();
  });
});

describe("Skill rewards", () => {
  beforeEach(() => {
    store.dispatch(gameStateActions.gameLoaded(gameData as ModuleGame));
    store.dispatch(applicationActions.screenChanged(ApplicationScreen.GAME));
    store.dispatch(gameStateActions.sceneChanged("skill-increase"));
  });

  it("increases the players score when they go through a skill increase", async () => {
    render(
      <Provider store={store}>
        <Application />
      </Provider>
    );

    const currentScore =
      store.getState().gameState.playerCharacter.skillScores["WIS"];

    await act(() => {
      screen.getByText("Next").click();
    });

    const newScore =
      store.getState().gameState.playerCharacter.skillScores["WIS"];

    expect(currentScore).toEqual(15);
    expect(newScore).toEqual(17);
  });
});

import { Provider } from "react-redux";
import { store } from "../ducks/store";
import { Application } from "../Application";
import { gameStateActions } from "../ducks/game";
import gameData from "../../test-data/skill-scene.json";
import { ModuleGame } from "../module-types/game";
import { applicationActions, ApplicationScreen } from "../ducks/application";
import { act, render, screen } from "@testing-library/react";

describe("Skills", () => {
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
        gameStateActions.skillScoreIncreased({
          skill: "CHA",
          amountGained: 1000,
        })
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

      expect(currentScore.value).toEqual(15);
      expect(newScore.value).toEqual(17);
    });
  });

  describe("Experience rewards", () => {
    beforeEach(() => {
      store.dispatch(gameStateActions.gameLoaded(gameData as ModuleGame));
      store.dispatch(applicationActions.screenChanged(ApplicationScreen.GAME));
      store.dispatch(gameStateActions.sceneChanged("experience-increase"));
    });

    it("grants the player experience when the scene rewards it", async () => {
      render(
        <Provider store={store}>
          <Application />
        </Provider>
      );

      const currentExperience =
        store.getState().gameState.playerCharacter.skillScores["WIS"]
          .experience;

      await act(() => {
        screen.getByText("Next").click();
      });

      const newExperience =
        store.getState().gameState.playerCharacter.skillScores["WIS"]
          .experience;

      expect(currentExperience).toEqual(undefined);
      expect(newExperience).toEqual(7);
    });

    it("getting 10 experience grants the player a skill increase", async () => {
      render(
        <Provider store={store}>
          <Application />
        </Provider>
      );

      const currentScore =
        store.getState().gameState.playerCharacter.skillScores["WIS"].value;

      await act(() => {
        screen.getByText("Next").click();
        screen.getByText("Next").click();
      });

      const newScore =
        store.getState().gameState.playerCharacter.skillScores["WIS"].value;

      expect(currentScore).toEqual(15);
      expect(newScore).toEqual(16);
    });

    it("experience overflows into the next level after a skill up", async () => {
      render(
        <Provider store={store}>
          <Application />
        </Provider>
      );

      const currentSkill =
        store.getState().gameState.playerCharacter.skillScores["WIS"];

      await act(() => {
        screen.getByText("Next").click();
        screen.getByText("Next").click();
      });

      const newSkill =
        store.getState().gameState.playerCharacter.skillScores["WIS"];

      expect(currentSkill.value).toEqual(15);
      expect(newSkill.value).toEqual(16);
      expect(currentSkill.experience).toEqual(undefined);
      expect(newSkill.experience).toEqual(4);
    });
  });
});

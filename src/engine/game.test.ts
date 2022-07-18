import { Game } from "./game";
import gameWithTwoScenes from "../../test-data/game-with-two-scenes.json";

describe("Game", () => {
  it("can load a game with two scenes", () => {
    const game = new Game(gameWithTwoScenes, {});

    expect(game.activeScene.id).toEqual(gameWithTwoScenes.initialScene);
    expect(game.scenes["scene-one"].id).toStrictEqual("scene-one");
    expect(game.scenes["scene-two"].id).toStrictEqual("scene-two");
  });

  it("calling change active scene updates the active scene", () => {
    const game = new Game(gameWithTwoScenes, {});

    expect(game.activeScene.id).toEqual(gameWithTwoScenes.initialScene);
    game.changeActiveScene("scene-two");
    expect(game.activeScene.id).toEqual("scene-two");
  });
});

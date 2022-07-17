import { Game } from "./game";
import gameWithTwoScenes from "../../test-data/game-with-two-scenes.json";

describe("Game", () => {
  it("can load a game with two scenes", () => {
    const game = new Game(gameWithTwoScenes);

    expect(game.scenes["scene-one"].id).toStrictEqual("scene-one");
    expect(game.scenes["scene-two"].id).toStrictEqual("scene-two");
  });
});

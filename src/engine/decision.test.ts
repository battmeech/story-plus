import { Decision } from "./decision";
import decisionData from "../test-data/decision.json";
import { SceneType } from "./scene";

describe("Decision", () => {
  it("can successfully load a decision", () => {
    const location = new Decision("test-decision", decisionData);

    expect(location.id).toEqual("test-decision");
    expect(location.type).toEqual(SceneType.DECISION);
    expect(location.displayText).toEqual(decisionData.displayText);
    expect(location.options["1"].displayText).toEqual(
      decisionData.options["1"].displayText
    );
    expect(location.options["2"].displayText).toEqual(
      decisionData.options["2"].displayText
    );
  });
});

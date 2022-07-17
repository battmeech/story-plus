import descriptionData from "../test-data/description.json";
import { Description } from "./description";
import { SceneType } from "./scene";

describe("Description", () => {
  it("loads a description", () => {
    const description = new Description("description-id", descriptionData);

    expect(description.type).toEqual(SceneType.DESCRIPTION);
    expect(description.displayText).toEqual(descriptionData.displayText);
    expect(description.onNext.goToReference).toEqual(
      descriptionData.onNext.goToReference
    );
  });
});

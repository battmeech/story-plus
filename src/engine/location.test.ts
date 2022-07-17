import { Location } from "./location";
import locationData from "../../test-data/location.json";
import { SceneType } from "./scene";

describe("Location", () => {
  it("can successfully load a location", () => {
    const location = new Location("test-location", locationData);

    expect(location.id).toEqual("test-location");
    expect(location.type).toEqual(SceneType.LOCATION);
    expect(location.displayText).toEqual(locationData.displayText);
    expect(location.options["1"].displayText).toEqual(
      locationData.options["1"].displayText
    );
    expect(location.options["2"].displayText).toEqual(
      locationData.options["2"].displayText
    );
  });
});

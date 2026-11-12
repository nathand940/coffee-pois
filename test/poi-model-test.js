import { expect } from "chai";
import { poiModel } from "../src/models/poi-model.js";

describe("POI Model", () => {

  it("should add a POI", () => {

    const poi = {
      id: "1",
      name: "Coffee House",
      description: "Speciality coffee",
      category: "Cafe",
      lat: 52.2,
      lng: -7.1,
    };

    poiModel.addPoi(poi);

    const pois = poiModel.getAllPois();

    expect(pois.length).to.be.greaterThan(0);

  });

});
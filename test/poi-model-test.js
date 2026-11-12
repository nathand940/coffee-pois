import { expect } from "chai";
import { poiModel } from "../src/models/poi-model.js";

describe("POI Model Tests", function () {

  const poi = {
    id: "test-poi",
    name: "Coffee House",
    description: "Speciality Coffee",
    category: "Cafe",
    lat: 52.25,
    lng: -7.12,
  };

  it("should add a POI", function () {

    poiModel.addPoi(poi);

    const pois = poiModel.getAllPois();

    expect(pois.length).to.be.greaterThan(0);
  });

  it("should find a POI by id", function () {

    const foundPoi = poiModel.getPoiById("test-poi");

    expect(foundPoi).to.not.equal(undefined);
    expect(foundPoi.name).to.equal("Coffee House");
  });

  it("should update a POI", function () {

    poiModel.updatePoi("test-poi", {
      name: "Updated Coffee House",
    });

    const updatedPoi = poiModel.getPoiById("test-poi");

    expect(updatedPoi.name).to.equal(
      "Updated Coffee House"
    );
  });

  it("should delete a POI", function () {

    poiModel.deletePoi("test-poi");

    const poi = poiModel.getPoiById("test-poi");

    expect(poi).to.equal(undefined);
  });

});
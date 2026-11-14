import { expect } from "chai";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { connectMongo } from "../src/models/db.js";
import { poiModel } from "../src/models/poi-model.js";

describe("POI Model Tests", function () {

  let testPoiId;

  const poi = {
    name: "Coffee House",
    description: "Speciality Coffee",
    category: "Cafe",
    lat: 52.25,
    lng: -7.12,
  };

  before(async function () {
    dotenv.config();
    await connectMongo();
  });

  after(async function () {
    if (testPoiId) {
      await poiModel.deletePoi(testPoiId);
    }

    await mongoose.disconnect();
  });

  it("should add a POI", async function () {
    const createdPoi = await poiModel.addPoi(poi);
    testPoiId = createdPoi._id.toString();

    const pois = await poiModel.getAllPois();

    expect(
      pois.some((item) => item._id.toString() === testPoiId)
    ).to.equal(true);
  });

  it("should find a POI by id", async function () {
    const foundPoi = await poiModel.getPoiById(testPoiId);

    expect(foundPoi).to.not.equal(null);
    expect(foundPoi.name).to.equal("Coffee House");
  });

  it("should update a POI", async function () {
    await poiModel.updatePoi(testPoiId, {
      name: "Updated Coffee House",
    });

    const updatedPoi = await poiModel.getPoiById(testPoiId);

    expect(updatedPoi.name).to.equal(
      "Updated Coffee House"
    );
  });

  it("should delete a POI", async function () {
    await poiModel.deletePoi(testPoiId);

    const deletedPoi = await poiModel.getPoiById(testPoiId);
    testPoiId = null;

    expect(deletedPoi).to.equal(null);
  });

});
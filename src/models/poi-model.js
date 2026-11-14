import { Poi } from "./poi.js";

export const poiModel = {
  async getAllPois() {
    return Poi.find().lean();
  },

  async addPoi(poi) {
    return Poi.create(poi);
  },

  async getPoiById(id) {
    return Poi.findById(id).lean();
  },

  async deletePoi(id) {
    return Poi.findByIdAndDelete(id);
  },

  async updatePoi(id, updatedFields) {
    return Poi.findByIdAndUpdate(id, updatedFields, {
      returnDocument: "after",
      runValidators: true,
    }).lean();
  },
};
export const poiModel = {
  pois: [],

  addPoi(poi) {
    this.pois.push(poi);
  },

  getAllPois() {
    return this.pois;
  }
};

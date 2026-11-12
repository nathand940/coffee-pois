import { jsonStore } from "../utils/json-store.js";

const poisFile = "src/data/pois.json";

export const poiModel = {

  getAllPois() {
    return jsonStore.read(poisFile);
  },

  addPoi(poi) {

    const pois = jsonStore.read(poisFile);

    pois.push(poi);

    jsonStore.write(poisFile, pois);
  },

  getPoiById(id) {

    const pois = jsonStore.read(poisFile);

    return pois.find(
      (p) => p.id === id
    );
  },

  deletePoi(id) {

    let pois = jsonStore.read(poisFile);

    pois = pois.filter(
      (p) => p.id !== id
    );

    jsonStore.write(poisFile, pois);
  },

  updatePoi(id, updatedFields) {

    const pois = jsonStore.read(poisFile);

    const poi = pois.find(
      (p) => p.id === id
    );

    if (poi) {
      Object.assign(poi, updatedFields);
    }

    jsonStore.write(poisFile, pois);
  }

};
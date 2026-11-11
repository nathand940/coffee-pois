import { poiModel } from "../models/poi-model.js";

export const apiRoutes = [

  // GET all POIs
  {
    method: "GET",
    path: "/api/pois",
    handler: (request, h) => {
      const pois = poiModel.getAllPois();
      return h.response(pois).code(200);
    },
  },

  // POST a new POI
  {
    method: "POST",
    path: "/api/pois",
    handler: (request, h) => {
      const { name } = request.payload;

      const newPoi = { name };
      poiModel.addPoi(newPoi);

      return h.response(newPoi).code(201);
    },
  },

];

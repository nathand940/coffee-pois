import { poiModel } from "../models/poi-model.js";

export const apiRoutes = [

  // GET all POIs
  {
    method: "GET",
    path: "/api/pois",
    options: { auth: { mode: "required" } },
    handler: async (request, h) => {
      const pois = await poiModel.getAllPois();
      return h.response(pois).code(200);
    },
  },

  // POST a new POI
  {
    method: "POST",
    path: "/api/pois",
    options: { auth: { mode: "required" } },
    handler: async (request, h) => {
      const { name } = request.payload;

      const newPoi = { name };
      const createdPoi = await poiModel.addPoi(newPoi);

      return h.response(createdPoi).code(201);
    },
  },

];

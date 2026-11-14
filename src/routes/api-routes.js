import Joi from "@hapi/joi";
import { poiModel } from "../models/poi-model.js";

export const apiRoutes = [

  // GET all POIs
  {
    method: "GET",
    path: "/api/pois",
    options: 
    { auth: { mode: "required" },
      description: "Get all POIs",
      notes: "Returns all coffee shops",
      tags: ["api"],
    },  

    handler: async (request, h) => {
      const pois = await poiModel.getAllPois();
      return h.response(pois).code(200);
    },
  },

  // POST a new POI
  {
    method: "POST",
    path: "/api/pois",

    options: {
      description: "Create POI",
      notes: "Creates a new coffee shop",
      tags: ["api"],

      /*validate: {
        payload: Joi.object({
          name: Joi.string().required(),
          description: Joi.string().required(),
          category: Joi.string().required(),
          lat: Joi.number().required(),
          lng: Joi.number().required(),
        }),
      },*/
    },

    handler: async (request, h) => {
      const poi = await poiModel.addPoi(
        request.payload
      );

      return poi;
    },
  },
]

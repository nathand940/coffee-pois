import { poiModel } from "../models/poi-model.js";

export const poiRoutes = [
  {
    method: "GET",
    path: "/add-poi",
    handler: (request, h) => {
      return h.view("add-poi", { title: "Add Coffee Shop" });
    },
  },

  {
    method: "POST",
    path: "/add-poi",
    handler: (request, h) => {
      const { name } = request.payload;

      const newPoi = { name };

      poiModel.addPoi(newPoi);

      console.log("POI added:", newPoi);

      return h.redirect("/");
    },
  },
];

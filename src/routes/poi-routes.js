import { poiModel } from "../models/poi-model.js";

export const poiRoutes = [
  {
    method: "GET",
    path: "/add-poi",
    options: { auth: { mode: "required" } },
    handler: (request, h) => {
      return h.view("add-poi", { title: "Add Coffee Shop" });
    },
  },

  {
    method: "POST",
    path: "/add-poi",
    options: { auth: { mode: "required" } },
    handler: (request, h) => {
      const { name, description, category, lat, lng } = request.payload;

      const newPoi = {
        id: Date.now().toString(),
        name,
        description,
        category,
        lat: Number(lat),
        lng: Number(lng),
      };

     poiModel.addPoi(newPoi);

      console.log("POI added:", newPoi);

      return h.redirect("/");
    },
  },


  {
    method: "GET",
    path: "/poi/{id}/edit",
    options: { auth: { mode: "required" } },
    handler: (request, h) => {
      const poi = poiModel.getPoiById(request.params.id);
      return h.view("edit-poi", { poi });
    },
  },

  {
    method: "POST",
    path: "/poi/{id}/edit",
    options: { auth: { mode: "required" } },
    handler: (request, h) => {
      const { name, description, category, lat, lng } = request.payload;

      poiModel.updatePoi(request.params.id, {
        name,
        description,
        category,
        lat: Number(lat),
        lng: Number(lng),
      });

      return h.redirect("/");
    },
  },

  {
    method: "GET",
    path: "/poi/{id}/delete",
    options: { auth: { mode: "required" } },
    handler: (request, h) => {
      poiModel.deletePoi(request.params.id);
      return h.redirect("/");
    },
  },

];

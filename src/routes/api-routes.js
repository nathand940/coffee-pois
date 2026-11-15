import { poiModel } from "../models/poi-model.js";
import Jwt from "jsonwebtoken";
import { userModel } from "../models/user-model.js";

export const apiRoutes = [

  // GET all POIs
  {
    method: "GET",
    path: "/api/pois",
    options: {
      auth: "jwt",
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
      auth: "jwt",
      description: "Create POI",
      notes: "Creates a new coffee shop",
      tags: ["api"],
    },

    handler: async (request, h) => {
      const poi = await poiModel.addPoi(
        request.payload
      );

      return poi;
    },
  },

  {
    method: "POST",
    path: "/api/users/authenticate",

    options: {
      auth: false,
      tags: ["api"],
      description: "Authenticate User",
    },

    handler: async (request, h) => {

      if (!request.payload) {
        return h.response({
          message: "Email and password required",
        }).code(400);
      }

      const { email, password } =
        request.payload;

      const user =
        await userModel.authenticate(
          email,
          password
        );

      if (!user) {
        return h.response({
          message: "Invalid credentials",
        }).code(401);
      }

      const token = Jwt.sign(
        {
          email: user.email,
        },
        process.env.JWT_SECRET,
        {
          algorithm: "HS256",
        }
      );

      return {
        token,
      };
    },
  },
];

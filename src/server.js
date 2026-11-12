import Hapi from "@hapi/hapi";
import Vision from "@hapi/vision";
import Inert from "@hapi/inert";
import Cookie from "@hapi/cookie";
import Handlebars from "handlebars";

import { accountsRoutes } from "./routes/accounts-routes.js";
import { poiModel } from "./models/poi-model.js";
import { poiRoutes } from "./routes/poi-routes.js";
import { apiRoutes } from "./routes/api-routes.js";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function init() {
  const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: "0.0.0.0",
  });

  // Register plugins
  await server.register(Vision);
  await server.register(Inert);
  await server.register(Cookie);

  //Cookie Auth Strategy
  server.auth.strategy("session", "cookie", {
    cookie: {
      name: "placemark-session",
      password: "supersecretpassworddontuseinproduction",
      isSecure: false, // true on HTTPS
    },
    redirectTo: "/login",
  });

  server.auth.default("session"); 

  // Configure Handlebars
  server.views({
    engines: {
      hbs: Handlebars,
    },
    relativeTo: __dirname,
    path: "./views/pages",
    layoutPath: "./views/layouts",
    layout: "main",
    partialsPath: "./views/partials",
  });

  // Register signup/login routes + add poi
  server.route(accountsRoutes);
  server.route(poiRoutes);
  server.route(apiRoutes);



 server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
      const pois = poiModel.getAllPois();
      return h.view("dashboard", { title: "Placemark Coffee", pois });
    },
  });

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
}

init();

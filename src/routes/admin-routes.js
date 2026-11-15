import { userModel } from "../models/user-model.js";
import { poiModel } from "../models/poi-model.js";

export const adminRoutes = [

  {
  method: "GET",
  path: "/admin",
  options: { auth: { mode: "required" } },

  
    handler: async (request, h) => {

    const currentUser = request.auth.credentials;

      if (currentUser.role !== "admin") {
       return h.redirect("/");
      }
 
      const users = await userModel.getAllUsers();
      const pois = await poiModel.getAllPois();

      const totalUsers = users.length;

      const adminUsers = users.filter(
        (user) => user.role === "admin"
      ).length;

      const totalPois = pois.length;

      const categories = [
        ...new Set(
        pois.map((poi) => poi.category)
        ),
     ];

     const totalCategories =
       categories.length;

      return h.view("admin-dashboard", {
        title: "Admin Dashboard",

        users,

        totalUsers,
        adminUsers,
        totalPois,
        totalCategories,
      });
    }, 
  },

  {
    method: "GET",
    path: "/admin/delete-user/{_id}",
    options: { auth: { mode: "required" } },

   handler: async (request, h) => {

    await userModel.deleteUser(
      request.params._id
    );

    return h.redirect("/admin");
  },
 },

];
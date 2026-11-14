import { userModel } from "../models/user-model.js";

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

      console.log(users);

      return h.view("admin-dashboard", {
        title: "Admin Dashboard",
        users,
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
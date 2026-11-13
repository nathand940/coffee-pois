import { userModel } from "../models/user-model.js";

export const adminRoutes = [

  {
  method: "GET",
  path: "/admin",
  options: { auth: { mode: "required" } },

  handler: (request, h) => {

    console.log("Admin route hit");
    console.log(request.auth.credentials);

    const currentUser = request.auth.credentials;

    if (currentUser.role !== "admin") {
      return h.redirect("/");
    }

    const users = userModel.getAllUsers();

    return h.view("admin-dashboard", {
      title: "Admin Dashboard",
      users,
    });
  },
},

  {
    method: "GET",
    path: "/admin/delete-user/{id}",
    options: { auth: { mode: "required" } },

    handler: (request, h) => {

      userModel.deleteUser(
        request.params.id
      );

      return h.redirect("/admin");
    },
  },

];
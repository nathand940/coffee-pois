import { userModel } from "../models/user-model.js";

export const accountsController = {

  showSettings: (request, h) => {
    const userId = request.auth.credentials.id;
    const user = userModel.getUserByEmail(userId);

    return h.view("settings", {
      title: "User Settings",
      user,
    });
  },

  updateSettings: (request, h) => {
    const userId = request.auth.credentials.id;
    const user = userModel.getUserByEmail(userId);

    const { firstName, lastName, email } = request.payload;

    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;

    return h.redirect("/settings");
  },
};

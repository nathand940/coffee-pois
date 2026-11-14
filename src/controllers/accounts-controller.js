import { userModel } from "../models/user-model.js";

export const accountsController = {

  showSettings: async (request, h) => {

    const userId = request.auth.credentials.email;

    const user = await userModel.getUserByEmail(userId);

    return h.view("settings", {
      title: "User Settings",
      user,
    });
},

  updateSettings: async (request, h) => {

    const currentEmail =
      request.auth.credentials.email;

    const { name, email } =
      request.payload;

    await userModel.updateUser(
      currentEmail,
      {
        name,
        email,
      }
    );

    return h.redirect("/settings");
  },
};

import { userModel } from "../models/user-model.js";
import { accountsController } from "../controllers/accounts-controller.js";

export const accountsRoutes = [
  {
    method: "GET",
    path: "/signup",
    options: { auth: false },
    handler: async (request, h) => {
      return h.view("signup", { title: "Sign Up" });
    },
  },

  {
    method: "POST",
    path: "/signup",
    options: { auth: false },
    handler: async (request, h) => {
      const { name, email, password } = request.payload;

      // Create a user object
      const newUser = {
        name,
        email,
        password, // Password is hashed inside userModel.addUser()
      };

      // Save to in-memory model
      await userModel.addUser(newUser);

      console.log("User added:", newUser);

      return h.redirect("/login");
    },
  },


  {
    method: "GET",
    path: "/login",
    options: { auth: false },
    handler: async (request, h) => {
      return h.view("login", { title: "Login" });
    },
  },

  {
    method: "POST",
    path: "/login",
    options: { auth: false },
    handler: async (request, h) => {
      const user = await userModel.authenticate(
        request.payload.email, 
        request.payload.password
    );

      if (!user) {
        return h.view("login", { error: "Invalid email or password" });
      }

      console.log("Login successful:", user);

      // Store user ID in session cookie
      request.cookieAuth.set({ id: user.email });

      return h.redirect("/");

    },
  },

  {
    method: "GET",
    path: "/logout",
    handler: async (request, h) => {
      request.cookieAuth.clear();
      return h.redirect("/");
    },
  },

  {
    method: "GET",
    path: "/settings",
    options: { auth: { mode: "required" } },
    handler: async (request, h) => {
      return accountsController.showSettings(request, h);
    },
  },

  {
    method: "POST",
    path: "/settings",
    options: { auth: { mode: "required" } },
    handler: async (request, h) => {
      return accountsController.updateSettings(request, h);
    },
  },

];

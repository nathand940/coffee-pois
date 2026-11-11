import { userModel } from "../models/user-model.js";


export const accountsRoutes = [
  {
    method: "GET",
    path: "/signup",
    handler: (request, h) => {
      return h.view("signup", { title: "Sign Up" });
    },
  },

  {
    method: "POST",
    path: "/signup",
    handler: (request, h) => {
      const { name, email, password } = request.payload;

      // Create a user object
      const newUser = {
        name,
        email,
        password,   // Level 1: store plain text (we fix this in Level 2)
      };

      // Save to in-memory model
      userModel.addUser(newUser);

      console.log("User added:", newUser);

      return h.redirect("/login");
    },
  },


  {
    method: "GET",
    path: "/login",
    handler: (request, h) => {
      return h.view("login", { title: "Login" });
    },
  },

  {
    method: "POST",
    path: "/login",
    handler: (request, h) => {
      const { email, password } = request.payload;

      const user = userModel.getUserByEmail(email);

      if (!user) {
        console.log("Login failed: user not found");
        return h.redirect("/login");
      }

      if (user.password !== password) {
        console.log("Login failed: wrong password");
        return h.redirect("/login");
      }

      console.log("Login successful:", user);

      return h.redirect("/");
    },
  },

];

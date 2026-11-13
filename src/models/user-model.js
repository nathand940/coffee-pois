import bcrypt from "bcrypt";
import { jsonStore } from "../utils/json-store.js";

const usersFile = "src/data/users.json";

export const userModel = {

  getAllUsers() {
    return jsonStore.read(usersFile);
  },

  async addUser(user) {

    const users = jsonStore.read(usersFile);

    const hashedPassword = await bcrypt.hash(
      user.password,
      10
    );

    const newUser = {
      id: Date.now().toString(),
      name: user.name,
      email: user.email,
      password: hashedPassword,
      role: "user",
    };

    users.push(newUser);

    jsonStore.write(usersFile, users);

    return newUser;
  },

  async authenticate(email, password) {

    const users = jsonStore.read(usersFile);

    const user = users.find(
      (u) => u.email === email
    );

    if (!user) return null;

    const match = await bcrypt.compare(
      password,
      user.password
    );

    return match ? user : null;
  },

  getUserByEmail(email) {
    const users = jsonStore.read(usersFile);

    return users.find(
      (u) => u.email === email
    );
  },

  deleteUser(id) {

    let users = jsonStore.read(usersFile);

    users = users.filter(
      (user) => user.id !== id
    );

    jsonStore.write(usersFile, users);
  },

getAllUsers() {
  return jsonStore.read(usersFile);
},

};

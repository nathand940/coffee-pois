import bcrypt from "bcrypt";
import { User } from "./user.js";



export const userModel = {

 async getAllUsers() {
    return await User.find().lean();
  },

  async addUser(user) {

    const hashedPassword = await bcrypt.hash(
      user.password,
      10
    );

    const newUser = {
      name: user.name,
      email: user.email,
      password: hashedPassword,
      role: "user",
    };

    await User.create(newUser);

    return newUser;
  },

  async authenticate(email, password) {

    const user = await User.findOne({
      email,
    });

    if (!user) return null;

    const match = await bcrypt.compare(
      password,
      user.password
    );

    return match ? user : null;
  },

  async getUserByEmail(email) {
    return await User.findOne({ email }).lean();
  },

  async deleteUser(id) {
    await User.findByIdAndDelete(id);
  },

  async updateUser(email, updatedFields) {

    await User.findOneAndUpdate(
      { email },
      updatedFields
    );
  },
};

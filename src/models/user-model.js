export const userModel = {
  users: [],

  addUser(user) {
    this.users.push(user);
  },

  getUserByEmail(email) {
    return this.users.find((user) => user.email === email);
  },

  getAllUsers() {
    return this.users;
  }
};

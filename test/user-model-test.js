import { expect } from "chai";
import { userModel } from "../src/models/user-model.js";

describe("User Model", () => {

  it("should add a user", async () => {

    const user = await userModel.addUser({
      name: "Nathan",
      email: "test@example.com",
      password: "password123",
    });

    expect(user.email).to.equal(
      "test@example.com"
    );

  });

  it("should find a user by email", () => {

    const user = userModel.getUserByEmail(
      "test@example.com"
    );

    expect(user.email).to.equal(
      "test@example.com"
    );

  });

});
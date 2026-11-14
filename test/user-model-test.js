import { expect } from "chai";
import dotenv from "dotenv";

import { connectMongo } from "../src/models/db.js";
import { userModel } from "../src/models/user-model.js";

dotenv.config();

describe("User Model Tests", function () {

  before(async function () {
    await connectMongo();
  });

  it("should add a user", async function () {

    const user = await userModel.addUser({
      name: "Test User",
      email: "test@test.com",
      password: "password123",
    });

    expect(user.email).to.equal(
      "test@test.com"
    );
  });

  it("should find a user by email", async function () {

    const user =
      await userModel.getUserByEmail(
        "test@test.com"
      );

    expect(user).to.not.equal(null);
    expect(user.email).to.equal(
      "test@test.com"
    );
  });

  it("should authenticate a valid user", async function () {

    const user = await userModel.authenticate(
      "test@test.com",
      "password123"
    );

    expect(user).to.not.equal(null);
  });

});
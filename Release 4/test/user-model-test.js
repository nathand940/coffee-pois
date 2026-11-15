import { expect } from "chai";
import dotenv from "dotenv";

import { connectMongo } from "../src/models/db.js";
import { userModel } from "../src/models/user-model.js";

dotenv.config();

describe("User Model Tests", function () {

  let testEmail;

  before(async function () {
    await connectMongo();

    testEmail = `test${Date.now()}@test.com`;
  });

  it("should add a user", async function () {

    const user = await userModel.addUser({
      name: "Test User",
      email: testEmail,
      password: "password123",
    });

    expect(user.email).to.equal(testEmail);
  });

  it("should find a user by email", async function () {

    const user =
      await userModel.getUserByEmail(testEmail);

    expect(user).to.not.equal(null);
    expect(user.email).to.equal(testEmail);
  });

  it("should authenticate a valid user", async function () {

    const user =
      await userModel.authenticate(
        testEmail,
        "password123"
      );

    expect(user).to.not.equal(null);
  });

});
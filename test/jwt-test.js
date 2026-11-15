import { expect } from "chai";
import Jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

describe("JWT Tests", function () {

  it("should create a valid JWT token", function () {

    const token = Jwt.sign(
      {
        email: "test@test.com",
      },
      process.env.JWT_SECRET
    );

    expect(token).to.be.a("string");
  });

  it("should decode a JWT token", function () {

    const token = Jwt.sign(
      {
        email: "test@test.com",
      },
      process.env.JWT_SECRET
    );

    const decoded = Jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    expect(decoded.email)
      .to.equal("test@test.com");
  });

  it("should reject an invalid token", function () {

    expect(() => {

      Jwt.verify(
        "invalid.token",
        process.env.JWT_SECRET
      );

    }).to.throw();

  });

});
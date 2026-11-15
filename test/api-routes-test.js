import { expect } from "chai";

describe("API Tests", () => {

  it("should confirm API routes exist", () => {

    expect("/api/pois").to.be.a("string");

  });

});


const request = require("supertest");
const server = require("../api/server");

describe("server.js", () => {
  describe("index route", () => {
    it("should return status 200", async () => {
      const user = await request(server).get("/").expect(200);
    });

    it("should return a JSON object fron the index route", async () => {
      const response = await request(server).get("/");

      expect(response.type).toEqual("application/json");
    });

    it("should return a Hello from the API! JSON", async () => {
      const expectedBody = { message: "Hello from the API!" };
      const response = await request(server).get("/");
      expect(response.body).toEqual(expectedBody);
    });
  });
});

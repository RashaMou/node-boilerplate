const request = require("supertest");
const server = require("../api/server");

const db = require("../config/db_config");

beforeAll(async () => {
  await db("users").insert([
    { email: "rasha@fastmail.com" },
    { email: "hi@rasha.dev" },
    { email: "rasha@rasha.dev" },
  ]);
});

afterAll(async () => {
  await db.raw(`TRUNCATE TABLE users RESTART IDENTITY CASCADE`);
});

describe("users endpoints", () => {
  describe("GET /", () => {
    it("should return 200", async () => {
      const response = await request(server).get("/api/users").expect(200);
    });
    it("should be an object/array", async () => {
      const response = await request(server).get("/api/users").expect(200);
      expect(typeof response.body).toBe("object");
    });
    it("should return a length of 3", async () => {
      const response = await request(server).get("/api/users").expect(200);
      expect(response.body.length).toBe(3);
    });
  });
  describe("GET /:id", () => {
    it("should return 200", async () => {
      const response = await request(server).get("/api/users/1").expect(200);
    });
    it("should be an object/array", async () => {
      const response = await request(server).get("/api/users/1").expect(200);
      expect(typeof response.body).toBe("object");
    });
    it("should return the right user", async () => {
      const expected = { id: 1, name: "Roenz" };
      const response = await request(server).get("/api/users/1").expect(200);
      expect(response.body[0].email).toBe(expected.email);
    });
  });
  describe("POST /", () => {
    it("adds a user into db", async () => {
      const user = { email: "test@test.com" };
      const posting = await request(server)
        .post("/api/users/")
        .send(user)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(201);

      expect(posting.body).toEqual([4]);
    });
    it("its the right user", async () => {
      const getUser = await request(server).get("/api/users/4");
      expect(getUser.body[0].email).toEqual("test@test.com");
    });
  });

  describe("PUT /", () => {
    it("changes email of user", async () => {
      const user = { email: "updatedTest@test.com" };
      const updating = await request(server)
        .put("/api/users/4")
        .send(user)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);

      const getUser = await request(server).get("/api/users/4");
      console.log(getUser.body);
    });
    it("its the right user", async () => {
      const getUser = await request(server).get("/api/users/4");
      expect(getUser.body[0].email).toEqual("updatedTest@test.com");
    });
  });

  describe("DELETE /", () => {
    it("should return 204", async () => {
      const deleting = await request(server).delete("/api/users/4").expect(204);
    });
    it("should have a length of 3", async () => {
      const getUsers = await request(server).get("/api/users/");
      expect(getUsers.body.length).toEqual(3);
    });
  });
});

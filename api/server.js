const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();
const restricted = require("../middleware/restricted");
const authRouter = require("../api/auth/auth-router");
const usersRouter = require("../api/users/users-router");

server.use(helmet());
server.use(cors());
server.use("/login", authRouter);
server.use("/users", usersRouter);

server.get("/", (req, res) => {
  res.send("Hello from the API");
});

module.exports = server;

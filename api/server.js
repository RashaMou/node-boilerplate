const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();
const restricted = require("../middleware/restricted");
const authRouter = require("../api/auth/auth-router");
const usersRouter = require("../api/users/users-router");

// Middleware
server.use(helmet());
server.use(cors());

// Serving static files from "public" folder
app.use(express.static("public"));

//Routers
server.use("/login", authRouter);
server.use("/users", usersRouter);

// Routes
server.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from the API!" });
});

module.exports = server;

require("dotenv").config();

const knex = require("knex");

const knexfile = require("../knexfile.js");

const environment = process.env.ENVIRONMENT || "development";

module.exports = knex(knexfile[environment]);

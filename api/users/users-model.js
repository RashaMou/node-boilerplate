const db = require("../../database/db_config");

// GET ALL USERS
const findUsers = () => {
  return db("users");
};

// GET USER BY ID
const findById = (id) => {
  return db("users").where("id", id);
};

// UPDATE USER
const updateUser = (id, post) => {
  return db("users").where("id", id).update(post);
};

// DELETE USER
const deleteUser = (id) => {
  return db("users").where("id", id).del();
};

module.exports = {
  findUsers,
  findById,
  updateUser,
  deleteUser,
};

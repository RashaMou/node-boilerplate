const db = require("../../config/db_config");

// GET ALL USERS
const findUsers = () => {
  return db("users");
};

// FIND USER BY ID
const findById = (id) => {
  return db("users").where("id", id);
};

// FIND BY {PARAM}
function findBy(filter) {
  return db("users").where(filter);
}

// ADD USER
const addUser = async (user) => {
  const [id] = await db("users").insert(user, "id");
  return findById(id);
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
  findBy,
  addUser,
  updateUser,
  deleteUser,
};

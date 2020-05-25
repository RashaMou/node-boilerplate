const router = require("express").Router();
const Users = require("./users-model");

// GET ALL USERS
router.get("/", async (req, res) => {
  let allUsers = await Users.findUsers();
  try {
    if (allUsers) {
      res.status(200).json(allUsers);
    } else {
      res.status(404).json("No users found");
    }
  } catch (error) {
    res.status(500).json({error: "Error retrieving users"});
  }
});

// GET USER BY ID
router.get("/:id", async (req, res) => {
  let user = await Users.findById(req.params.id);
  try {
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json("No user with that id found");
    }
  } catch (error) {
    res.status(500).json({error: "Error retrieving user"});
  }
});

// UPDATE USER
router.put("/:id", async (req, res) => {
  const userId = req.params.id;
  const userChanges = req.body;
  try {
    const updatedUser = await Users.updateUser(userId, userChanges);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({error: "Error updating user"});
  }
});

// DELETE USER
router.delete("/:id", (req, res) => {
    const userId = req.params.id
    try {
        const deleting = await Users.deleteUser(userId)
        res.status(204).json(deleting)
    } catch (error) {
        res.status(500).json({ error: "Error deleting user" });
    }
})

module.exports = router;

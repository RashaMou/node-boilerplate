const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Users = require("../users/users-model");
const signToken = require("../../helpers/signToken");
const validateRegistration = require("../../middleware/registration-validation");

// REGISTER USER
router.post("/register", validateRegistration, async (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;
  const token = signToken(user);
  let newUser = await Users.addUser(user);
  try {
    if (newUser) {
      res.status(201).json({
        token: token,
        id: newUser.id,
        email: newUser.email,
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Error registering user" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let user = Users.findBy({ email }).first();
  try {
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = signToken(user);
      res.status(200).json({
        token,
        user_id: user.id,
        message: `Welcome ${user.email}!`,
      });
    } else {
      res.status(401).json("Invalid credentials");
    }
  } catch (error) {
    res.status(500).json({ error: "Error loggin in" });
  }
});

module.exports = router;

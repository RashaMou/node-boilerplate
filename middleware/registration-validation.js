const Auth = require("../api/users/users-model");

module.exports = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json("Please provide an email and a password");
  } else {
    Auth.findBy({ username })
      .first()
      .then((user) => {
        if (user) {
          res
            .status(400)
            .json("That username already exists. Please try another");
        } else {
          Auth.findBy({ email })
            .first()
            .then((user) => {
              if (user) {
                res.status(400).json("That email already exists. Please login");
              } else {
                next();
              }
            })
            .catch((error) => {
              res.status(500).json("Error registering user");
            });
        }
      })
      .catch((error) => {
        res.status(500).json("Error registering user");
      });
  }
};

var jwt = require("jsonwebtoken");

const token = (user) => jwt.sign(
  {
    name: user.fullName,
    email: user.email,
  },
  "fdsafsdgvsdv",
  { expiresIn: "1h" }
);

module.exports = token
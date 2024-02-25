require("dotenv").config();
const jwt = require("jsonwebtoken");

const user = {
  id: 5,
  role: "normal",
};

function generateToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "5m" });
}

const token = generateToken(user);
// console.log(token);

module.exports = generateToken;

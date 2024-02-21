const bcrypt = require("bcrypt");
const saltRounds = 10;
const plainPassword = "hellothisistest";

bcrypt.hash(plainPassword, saltRounds, function (err, hash) {
  console.log(hash);
});

const express = require("express");

require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
// const dbConnection = require("./db/conn.db");

// //Connect to DB
// const dbConnInstance = new dbConnection();

app.use(express.json());

//route for user
const userRoutes = require("./routes/user.route");
app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

const express = require("express");
const cors = require("cors");
const usersDb = require("./users-db");

const app = express();

app.use(express.json()); // this middleware is used to parse JSON requests and responses
app.use(cors()); // this middleware is used to allow cross origin requests

app.get("/users", (req, res) => {
  console.log("request received");

  const users = usersDb.list();

  res.json({ users });
});

module.exports = app;

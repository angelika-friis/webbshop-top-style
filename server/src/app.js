const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connectToMongo, getDb } = require("./db/mongo");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  const db = getDb();
  res.send("API is running");
});

module.exports = (async () => {
  await connectToMongo();
  return app;
})();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser"); 
const { connectToDB } = require("./db/mongo");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes")

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

module.exports = (async () => {
  await connectToDB();
  return app;
})();
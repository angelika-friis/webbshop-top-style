const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { connectToDB } = require("./db/mongo");

const routes = {
  auth: require("./routes/authRoutes"),
  user: require("./routes/userRoutes"),
  products: require("./routes/productRoutes"),
  orders: require("./routes/orderRoutes"),
  cart: require("./routes/cartRoutes"),
};

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

Object.entries(routes).forEach(([path, router]) => {
  app.use(`/api/${path}`, router);
});

module.exports = (async () => {
  await connectToDB();
  return app;
})();
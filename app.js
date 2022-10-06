const express = require("express");
const cors = require("cors");

// Controllers
const { globalErrorHandler } = require("./controllers/error.controller");

const { usersRouter } = require("./routes/users.routes");
const { productsRouter } = require("./routes/products.routes");
const { cartRouter } = require("./routes/cart.routes");

const app = express();

app.use(cors());

app.use(express.json());

// Endpoints
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/products", productsRouter);
app.use("/api/v1/cart", cartRouter);

app.use(globalErrorHandler);

app.all("*", (req, res) => {
  res.status(404).json({
    status: "error",
    message: `${req.method} ${req.url} does not exists in our server`,
  });
});

module.exports = { app };

const express = require("express");

// Controllers
const {
  getUserCart,
  addProductToCart,
  updateProductInCart,
  purchaseCart,
  removeProductFromCart,
} = require("../controllers/orders.controller");

// Middlewares
const { protectSession } = require("../middlewares/auth.middlewares");

const cartRouter = express.Router();

cartRouter.use(protectSession);

cartRouter.get("/", getUserCart);

cartRouter.post("/add-product", addProductToCart);

cartRouter.patch("/update-cart", updateProductInCart);

cartRouter.post("/purchase", purchaseCart);

cartRouter.delete("/:productId", removeProductFromCart);

module.exports = { cartRouter };

const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      size: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, default: 1 }
    }
  ],
  totalPrice: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Cart", cartSchema);
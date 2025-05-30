const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      size: { type: String, required: true },
      quantity: { type: Number, default: 1 },
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", orderSchema);
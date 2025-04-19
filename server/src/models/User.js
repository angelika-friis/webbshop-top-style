const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cart: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    size: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, default: 1, min: 1 },
    addedAt: { type: Date, default: Date.now }
  }],
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
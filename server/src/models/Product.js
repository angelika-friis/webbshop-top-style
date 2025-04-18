const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    color: { type: String, required: true, default: 'white' },
    material: { type: String, required: true, default: '100% cotton' },
    availableSizes: { type: Array, required: true },
    prize: { type: Number, required: true, default: '499' }
});

module.exports = mongoose.model('Product', ProductSchema);
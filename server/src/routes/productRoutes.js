const express = require('express');
const router = express.Router();
const { createProduct, searchProducts, getAllProducts } = require('../controllers/productController');

router.post('/', createProduct);
router.get('/', getAllProducts);
router.post('/search', searchProducts);

module.exports = router;
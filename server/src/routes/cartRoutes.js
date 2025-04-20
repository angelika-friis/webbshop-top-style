const express = require('express');
const router = express.Router();
const { getCart, addProductToCart, removeProductFromCart } = require('../controllers/cartController');
const auth = require('../middleware/authMiddleware');

router.get('/', auth, getCart);
router.post('/', auth, addProductToCart);
router.delete('/:id', auth, removeProductFromCart);

module.exports = router;
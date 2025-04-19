const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { getAllOrders, getOrder, getUsersOrders, createOrder } = require('../controllers/orderController');

router.get('/', getAllOrders);
router.get('/:id', getOrder);
router.get('/mine', auth, getUsersOrders);
router.post('/', auth, createOrder);

module.exports = router;
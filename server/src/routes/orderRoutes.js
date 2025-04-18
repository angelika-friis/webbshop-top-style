const express = require('express');
const router = express.Router();
const { getAllOrders, getOrder, getUsersOrders, createOrder } = require('../controllers/orderController');

router.get('/', getAllOrders);
router.get('/:id', getOrder);
router.get('/mine', getUsersOrders);
router.post('/', createOrder);

module.exports = router;
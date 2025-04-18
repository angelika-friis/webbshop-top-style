const Order = require('../models/Order');

const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};

const getOrder = async (req, res) => {
    const { order_id } = req.params;
    try {
        const order = await Order.findById(order_id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(order);
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server error')
    }
}

const getUsersOrders = async (req, res) => {
    const { user_id } = req.params;
    try {
        await Order.find({ user: user_id }).populate('products.productId');
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
}

const createOrder = async (req, res) => {
    try {
        const newOrder = new Order({
            user: req.user.id,
            products: req.body.products,
        });
        const order = await newOrder.save();
        res.status(201).json(order);
    } catch {
        console.error(error.message);
        res.status(500).send('Server error');
    }
}

module.exports = { getAllOrders, getOrder, getUsersOrders, createOrder };
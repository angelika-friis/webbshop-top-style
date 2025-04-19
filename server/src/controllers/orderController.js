const Order = require('../models/Order');
const Cart = require('../models/Cart');
const User = require('../models/User');

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
    const { orderId } = req.params;
    try {
        const order = await Order.findById(orderId);
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
    const userId = req.user.id;
    try {
        await Order.find({ user: userId }).populate('products.productId');
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
}

const createOrder = async (req, res) => {
    const userId = req.user.id;
    try {
        const user = await User.findById(req.user.id).populate('cart.productId');
        const cart = user.cart;

        if (!cart || cart.length === 0) {
            return res.status(400).json({ message: 'Cart is empty' });
        }

        const totalPrice = cart.reduce((sum, item) => {
            return sum + item.productId.price * item.quantity;
        }, 0);

        const newOrder = new Order({
            user: userId,
            products: cart.map(item => ({
                product: item.productId._id,
                size: item.size,
                quantity: item.quantity
            })),
            totalPrice
        });
        const order = await newOrder.save();
        cart.products = [];
        await cart.save();
        res.status(201).json(order);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
}

module.exports = { getAllOrders, getOrder, getUsersOrders, createOrder };
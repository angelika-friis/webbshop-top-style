const User = require('../models/User');
const Product = require('../models/Product');
const mongoose = require('mongoose');

const getCart = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate('cart.productId');
        if (!user) return res.status(404).json({ message: 'User not found' });

        const cartTotal = user.cart.reduce((sum, item) => (
            sum + (item.price * item.quantity)
        ), 0);

        res.status(200).json({ cart: user.cart, cartTotal });
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server error')
    }
}

const addProductToCart = async (req, res) => {
    const userId = req.user.id;
    const { productId, size, quantity = 1 } = req.body;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
        return res.status(400).json({ message: 'Invalid product ID format' });
    }

    if (quantity < 1) {
        return res.status(400).json({ message: 'Quantity must be at least 1' });
    }

    try {
        const [user, product] = await Promise.all([
            User.findById(userId),
            Product.findById(productId)
        ]);

        if (!user) return res.status(404).json({ message: 'User not found' });
        if (!product) return res.status(404).json({ message: 'Product not found' });

        const existingItem = user.cart.findIndex(
            item => item.productId.toString() === productId && item.size === size
        );

        if (existingItem > 0) {
            user.cart[existingItem].quantity += quantity;
        } else {
            user.cart.push({
                productId,
                size,
                price: product.price,
                quantity
            });
        }

        const cartTotal = user.cart.reduce((sum, item) => (
            sum + (item.price * item.quantity)
        ), 0);

        await user.save();

        res.status(200).json({
            message: 'Product added to cart',
            cart: user.cart,
            cartTotal
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};

const removeProductFromCart = async (req, res) => {
    const userId = req.user.id;
    const id = req.params.id;
    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: 'User not found' });

        user.cart = user.cart.filter(item => item._id.toString() !== id);
        await user.save();

        const cartTotal = user.cart.reduce((sum, item) => (
            sum + (item.price * item.quantity)
        ), 0);

        res.status(200).json({ message: 'Product removed from cart', cart: user.cart, cartTotal });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};

module.exports = { getCart, addProductToCart, removeProductFromCart };
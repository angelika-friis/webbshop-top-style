const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};

const createProduct = async (req, res) => {
    try {
        const { productName, material, availableSizes, price, color } = req.body;

        const product = new Product({
            productName,
            material,
            availableSizes,
            price,
            color
        });

        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};

const searchProducts = async (req, res) => {
    try {
        const { productName, color } = req.query;

        let filter = {};
        if (productName) {
            filter.productName = { $regex: productName, $options: 'i' };
        }
        if (color) {
            filter.color = { $regex: color, $options: 'i' };
        }

        const products = await Product.find(filter);

        res.status(200).json(products);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};

module.exports = { getAllProducts, createProduct, searchProducts };
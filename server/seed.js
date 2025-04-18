const mongoose = require('mongoose');
const Product = require('./src/models/Product');

mongoose.connect('mongodb://localhost:27017/test')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting MongoDB:', err);
  });

const products = [
  {
    productName: "The Essential T-Shirt",
    color: "white",
    material: "100% cotton",
    availableSizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    prize: 399
  },
  {
    productName: "Linen pants",
    color: "beige",
    material: "100% linen",
    availableSizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    prize: 599
  },
  {
    productName: "Linen vest",
    color: "beige",
    material: "100% linen",
    availableSizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    prize: 449
  },
  {
    productName: "Linen suit jacket",
    color: "beige",
    material: "100% linen",
    availableSizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    prize: 749
  },
  {
    productName: "Tank Top",
    color: "navy",
    material: "95% cotton, 5% elastane",
    availableSizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    prize: 299
  }, 
  {
    productName: "The Little Black Dress",
    color: "black",
    material: "100% cotton",
    availableSizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    prize: 449
  }
];

const seedProducts = async () => {
  try {
    await Product.deleteMany({});
    console.log('Deleted old products');

    await Product.insertMany(products);
    console.log('Added mock-products');

    mongoose.connection.close();
  } catch (err) {
    console.error('Error:', err);
  }
};

seedProducts();

const express = require('express'); // Import Express
const router = express.Router(); // Initialize the router
const { Product } = require('../models'); // Import the Product model

// Internal API: Create a Product
router.post('/', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// External API: Create a Product
router.post('/external', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({
            id: product.id,
            name: product.name,
            price: product.price,
            stock: product.stock,
            description: product.description,
        });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get All Products
router.get('/', async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// Get Product by ID
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id); // Use findByPk to fetch by ID
        if (!product) {
            return res.status(404).json({ error: 'Product not found' }); // Return 404 if not found
        }
        res.status(200).json(product); // Return the product data
    } catch (err) {
        res.status(500).json({ error: err.message }); // Handle errors
    }
});
// Update Product by ID
router.put('/:id', async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id); // Find the product by ID
        if (!product) {
            return res.status(404).json({ error: 'Product not found' }); // Return 404 if not found
        }

        // Update the product with the request body data
        await product.update(req.body);

        res.status(200).json(product); // Return the updated product
    } catch (err) {
        res.status(400).json({ error: err.message }); // Handle errors
    }
});
// Delete Product by ID
router.delete('/:id', async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id); // Find the product by ID
        if (!product) {
            return res.status(404).json({ error: 'Product not found' }); // Return 404 if not found
        }

        await product.destroy(); // Delete the product
        res.status(200).json({ message: 'Product deleted successfully' }); // Return confirmation message
    } catch (err) {
        res.status(500).json({ error: err.message }); // Handle errors
    }
});

module.exports = router;

const express = require('express'); // Import Express
const router = express.Router(); // Initialize the router
const { SalesOrder } = require('../models'); // Import the SalesOrder model

// Get Sales Order by ID
router.get('/:id', async (req, res) => {
    try {
        const salesOrder = await SalesOrder.findByPk(req.params.id);
        if (!salesOrder) {
            return res.status(404).json({ error: 'Sales Order not found' });
        }
        res.status(200).json(salesOrder);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// Get All Sales Orders
router.get('/', async (req, res) => {
    try {
        const salesOrders = await SalesOrder.findAll();
        res.status(200).json(salesOrders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// Other routes (if not already present)

// Create Sales Order
router.post('/', async (req, res) => {
    try {
        const salesOrder = await SalesOrder.create(req.body);
        res.status(201).json(salesOrder);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Update Sales Order
router.put('/:id', async (req, res) => {
    try {
        const salesOrder = await SalesOrder.findByPk(req.params.id);
        if (!salesOrder) {
            return res.status(404).json({ error: 'Sales Order not found' });
        }
        await salesOrder.update(req.body);
        res.status(200).json(salesOrder);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete Sales Order by ID
router.delete('/:id', async (req, res) => {
    try {
        const salesOrder = await SalesOrder.findByPk(req.params.id); // Find the sales order by ID
        if (!salesOrder) {
            return res.status(404).json({ error: 'Sales Order not found' }); // Return 404 if not found
        }

        await salesOrder.destroy(); // Delete the sales order
        res.status(200).json({ message: 'Sales Order deleted successfully' }); // Return confirmation message
    } catch (err) {
        res.status(500).json({ error: err.message }); // Handle errors
    }
});

module.exports = router; // Export the router

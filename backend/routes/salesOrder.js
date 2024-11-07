const express = require('express'); // Import Express
const router = express.Router(); // Initialize the router
const salesOrderController = require('../controllers/salesOrderController');

router.get('/', salesOrderController.getSalesOrders);
router.get('/:id', salesOrderController.getSalesOrder);
router.post('/', salesOrderController.createSalesOrder);
router.put('/:id', salesOrderController.updateSalesOrder);
router.delete('/:id', salesOrderController.deleteSalesOrder);
router.put('/:id/attachProducts', salesOrderController.attachProductsToSalesOrder);

module.exports = router;

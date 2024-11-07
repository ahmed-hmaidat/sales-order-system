const asyncHandler = require("express-async-handler");
const service = require("../services/salesOrderService");
const requestHandler = require('../middleware/requestHandler');

exports.getSalesOrders = requestHandler(async (req, res, next) => {
    const result = await service.getAllSalesOrders();
    res.status(200).json(result);
});

exports.getSalesOrder = asyncHandler(async (req, res, next) => {
    const salesOrder = await service.getSalesOrderById(req.params.id);
    if (!salesOrder) {
        return res.status(404).json({ error: 'Sales Order not found' });
    }
    res.status(200).json(salesOrder);
});

exports.createSalesOrder = requestHandler(async (req, res, next) => {
    const salesOrder = await service.createSalesOrder(req.body);
    res.status(200).json(salesOrder);
});

exports.deleteSalesOrder = asyncHandler(async (req, res, next) => {
    const salesOrder = await service.deleteSalesOrder(req.params.id);
    if (!salesOrder) {
        return res.status(404).json({ error: 'Sales Order not found' });
    }
    res.status(200).json({ message: 'Sales Order deleted successfully' });
});

exports.updateSalesOrder = asyncHandler(async (req, res, next) => {
    const { id, ...updatedData } = req.body;
    const salesOrder = await service.updateSalesOrder(req.params.id, updatedData);
    if (!salesOrder) {
        return res.status(404).json({ error: 'Sales Order not found' });
    }
    res.status(200).json(salesOrder);
});

exports.attachProductsToSalesOrder = requestHandler(async (req, res, next) => {
    const { products } = req.body;
    const { id } = req.params;
    const result = await service.attachProductsToSalesOrder(id, products);
    if (!result) {
        return res.status(404).json({ error: 'Sales Order or Products not found' });
    }
    res.status(200).json({ message: 'Products attached successfully' });
});
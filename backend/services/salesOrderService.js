const { SalesOrder } = require('../models');

const createSalesOrder = async (salesOrderData) => {
    return await SalesOrder.create(salesOrderData);
};

const getAllSalesOrders = async () => {
    return await SalesOrder.findAll();
};

const getSalesOrderById = async (id) => {
    return await SalesOrder.findByPk(id);
};

const updateSalesOrder = async (id, salesOrderData) => {
    const salesOrder = await SalesOrder.findByPk(id);
    if (!salesOrder) return null;
    return await salesOrder.update(salesOrderData);
};

const deleteSalesOrder = async (id) => {
    const salesOrder = await SalesOrder.findByPk(id);
    if (!salesOrder) return false;
    await salesOrder.destroy();
    return true;
};

module.exports = {
    createSalesOrder, getAllSalesOrders, getSalesOrderById, updateSalesOrder, deleteSalesOrder,
};
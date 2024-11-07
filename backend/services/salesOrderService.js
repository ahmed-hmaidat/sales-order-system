const { SalesOrder, SalesOrderProducts, Product } = require('../models');

const createSalesOrder = async (salesOrderData) => {
    return SalesOrder.create(salesOrderData);
};
const getAllSalesOrders = async () => {
    return await SalesOrder.findAll({
        include: {
            model: Product,
            through: SalesOrderProducts,
            attributes: ['id', 'name', 'price', 'description', 'stock'],
        }
    });
};

const getSalesOrderById = async (id) => {
    return await SalesOrder.findByPk(id, { include: Product });
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

const attachProductsToSalesOrder = async (salesOrderId, products) => {
    const salesOrder = await SalesOrder.findByPk(salesOrderId);
    if (!salesOrder) return null;

    const productIds = products.map(p => p.ProductId);
    const foundProducts = await Product.findAll({ where: { id: productIds } });
    if (foundProducts.length !== productIds.length) return null;

    const salesOrderProducts = products.map(p => ({
        SalesOrderId: salesOrderId,
        ProductId: p.ProductId,
        quantity: p.quantity,
    }));

    await SalesOrderProducts.bulkCreate(salesOrderProducts);
    return true;
};

module.exports = {
    createSalesOrder,
    getAllSalesOrders,
    getSalesOrderById,
    updateSalesOrder,
    deleteSalesOrder,
    attachProductsToSalesOrder
};
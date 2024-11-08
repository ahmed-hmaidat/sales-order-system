const { Product, SalesOrder, SalesOrderProducts } = require('../models');

const createProduct = async (productData) => {
    return Product.create(productData);
};

const getAllProducts = async (whereQuery, orderQuery, limitQuery, offsetQuery) => {
    return await Product.findAll({
        where: whereQuery,
        order: orderQuery,
        limit: limitQuery,
        offset: offsetQuery,
        logging: console.log,
    });
};

const getProductById = async (id) => {
    return await Product.findByPk(id);
};

const updateProduct = async (id, productData) => {
    const product = await Product.findByPk(id);
    if (!product) return null;
    return await product.update(productData);
};

const deleteProduct = async (id) => {
    const product = await Product.findByPk(id);
    if (!product) return false;
    await product.destroy();
    return true;
};

module.exports = {
    createProduct, getAllProducts, getProductById, updateProduct, deleteProduct,
};

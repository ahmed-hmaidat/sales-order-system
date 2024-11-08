const asyncHandler = require("express-async-handler");
const service = require("../services/productService");
const requestHandler = require('../middleware/requestHandler');
const searchBuilder = require("sequelize-search-query-builder");
const { SalesOrder } = require("../models");

exports.getProducts = requestHandler(async (req, res, next) => {
    const search = new searchBuilder(SalesOrder, req.query);
    const whereQuery = search.getWhereQuery();
    const orderQuery = search.getOrderQuery();
    const limitQuery = search.getLimitQuery();
    const offsetQuery = search.getOffsetQuery();

    const result = await service.getAllProducts(whereQuery, orderQuery, limitQuery, offsetQuery);
    res.status(200).json(result);
});

exports.getProduct = asyncHandler(async (req, res, next) => {
    const product = await service.getProductById(req.params.id);
    if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
});

exports.createProduct = requestHandler(async (req, res, next) => {
    const product = await service.createProduct(req.body);
    res.status(200).json(product);
});

exports.createProductExternal = requestHandler(async (req, res, next) => {
    const product = await service.createProduct(req.body);
    res.status(201).json({
        id: product.id,
        name: product.name,
        price: product.price,
        stock: product.stock,
        description: product.description,
    });
});

exports.deleteProduct = asyncHandler(async (req, res, next) => {
    const product = await service.deleteProduct(req.params.id);
    if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
});

exports.updateProduct = asyncHandler(async (req, res, next) => {
    const { id, ...updatedData } = req.body;
    const product = await service.updateProduct(req.params.id, updatedData);
    if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
});
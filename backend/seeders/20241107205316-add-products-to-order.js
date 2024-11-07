'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        // Fetch the sales order and product IDs to use in the join table
        const salesOrders = await queryInterface.sequelize.query(
            'SELECT id FROM "SalesOrders";'
        );
        const products = await queryInterface.sequelize.query(
            'SELECT id FROM "Products";'
        );

        const salesOrderRows = salesOrders[0];
        const productRows = products[0];

        await queryInterface.bulkInsert('SalesOrderProducts', [
            {
                SalesOrderId: salesOrderRows[0].id,
                ProductId: productRows[0].id,
                quantity: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                SalesOrderId: salesOrderRows[0].id,
                ProductId: productRows[1].id,
                quantity: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('SalesOrderProducts', null, {});
    },
};

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Products', [
            {
                name: 'Product 1',
                price: 100.0,
                description: 'A great product',
                stock: 50,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Product 2',
                price: 200.0,
                description: 'Another great product',
                stock: 20,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Products', null, {});
    },
};

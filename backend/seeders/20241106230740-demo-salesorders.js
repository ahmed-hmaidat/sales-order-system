module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('SalesOrders', [
            {
                name: 'Order 1',
                email: 'customer1@example.com',
                mobileNumber: '1234567890',
                status: 'Pending',
                orderDate: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('SalesOrders', null, {});
    },
};

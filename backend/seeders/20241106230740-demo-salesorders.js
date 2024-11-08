module.exports = {
    up: async (queryInterface) => {
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
            {
                name: 'Order 2',
                email: 'customer2@example.com',
                mobileNumber: '0987654321',
                status: 'Shipped',
                orderDate: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Order 3',
                email: 'customer3@example.com',
                mobileNumber: '1122334455',
                status: 'Delivered',
                orderDate: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Order 4',
                email: 'customer4@example.com',
                mobileNumber: '5566778899',
                status: 'Cancelled',
                orderDate: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Order 5',
                email: 'customer5@example.com',
                mobileNumber: '6677889900',
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

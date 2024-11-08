module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Products', [
            {
                name: 'Apple iPhone 13',
                price: 799.0,
                description: 'Latest model of Apple iPhone',
                stock: 25,
                image: 'assets/images/product-item1.jpg',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Samsung Galaxy S21',
                price: 699.0,
                description: 'Latest model of Samsung Galaxy',
                stock: 30,
                image: 'assets/images/product-item1.jpg',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Sony WH-1000XM4',
                price: 349.0,
                description: 'Noise-cancelling wireless headphones',
                stock: 50,
                image: 'assets/images/product-item1.jpg',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Dell XPS 13',
                price: 999.0,
                description: 'High-performance laptop',
                stock: 15,
                image: 'assets/images/product-item1.jpg',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Apple Watch Series 7',
                price: 399.0,
                description: 'Latest model of Apple Watch',
                stock: 40,
                image: 'assets/images/product-item1.jpg',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Products', null, {});
    },
};

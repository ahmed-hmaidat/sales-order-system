module.exports = (sequelize, DataTypes) => {
    const SalesOrder = sequelize.define('SalesOrder', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mobileNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        orderDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    });

    SalesOrder.associate = (models) => {
        SalesOrder.belongsToMany(models.Product, { through: 'SalesOrderProducts' });
    };

    return SalesOrder;
};
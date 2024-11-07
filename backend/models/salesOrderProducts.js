module.exports = (sequelize, DataTypes) => {
    return sequelize.define('SalesOrderProducts', {
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });
};
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('SalesOrder', {
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
};

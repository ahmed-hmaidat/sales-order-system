module.exports = {
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME + "_dev",
        host: process.env.DB_HOST || "127.0.0.1",
        dialect: process.env.DB_DIALECT
    },
    test: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME + "_test",
        host: process.env.DB_HOST || "127.0.0.1",
        dialect: process.env.DB_DIALECT
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME + "_prod",
        host: process.env.DB_HOST || "127.0.0.1",
        dialect: process.env.DB_DIALECT
    }
};
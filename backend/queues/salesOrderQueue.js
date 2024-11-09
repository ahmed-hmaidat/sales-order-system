const { Queue } = require('bullmq');
const IORedis = require("ioredis");

const connection = new IORedis({
    host: process.env.REDIS_HOST || '127.0.0.1',
    port: process.env.REDIS_PORT || 6379,
    maxRetriesPerRequest: null,
    enableReadyCheck: false,
});

const salesOrderQueue = new Queue('salesOrderQueue', { connection });
module.exports = salesOrderQueue;
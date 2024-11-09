const { Worker } = require("bullmq");
const IORedis = require("ioredis");
const axios = require('axios');

const connection = new IORedis({
    host: process.env.REDIS_HOST || '127.0.0.1',
    port: process.env.REDIS_PORT || 6379,
    maxRetriesPerRequest: null,
    enableReadyCheck: false,
});

const worker = new Worker(
    'salesOrderQueue',
    async (job) => {
        if (job.name === 'createSalesOrder') {
            const { salesOrder } = job.data;
            console.log(`Processing sales order: ${salesOrder.id}`);
            console.log(`Notifying external API...`);
            try {
                const response = await axios.post(
                    'https://eoqef8de0zxqnpm.m.pipedream.net',
                    salesOrder,
                    {
                        headers: {
                            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9`
                        }
                    }
                );
                console.log(`Order sent successfully: ${JSON.stringify(response.data)}`);
            } catch (err) {
                console.error(`Failed to send order: ${err.message}`);
                throw err;
            }
        } else {
            console.log('Unknown job type');
        }

        return { success: true };
    },
    { connection }
);

// Event listeners for debugging and logging
worker.on('completed', (job) => {
    console.log(`Job ${job.id} completed successfully.`);
});

worker.on('failed', (job, err) => {
    console.error(`Job ${job.id} failed with error:`, err);
});

// Catch and handle any uncaught errors
worker.on('error', (err) => {
    console.error('Worker encountered an error:', err);
});

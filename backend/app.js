const express = require('express');
const cors = require('./middleware/cors');
const bodyParser = require('body-parser');
const { createBullBoard } = require('@bull-board/api');
const { ExpressAdapter } = require('@bull-board/express');
const { BullMQAdapter } = require('@bull-board/api/bullMQAdapter');
const loadRoutes = require('./routes');
const salesOrderQueue = require('./queues/salesOrderQueue');
const app = express();

// Use CORS middleware
app.use(cors);

// Middleware
app.use(bodyParser.json());

// Dynamically load routes
loadRoutes(app);

// Bull Board for monitoring queues
const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/admin/queues');

createBullBoard({
    queues: [new BullMQAdapter(salesOrderQueue),], serverAdapter,
});

// Add Bull Board routes
app.use('/admin/queues', serverAdapter.getRouter());

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Bull Board available at http://localhost:${PORT}/admin/queues`);
});

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
const productRoutes = require('./routes/productRoutes');
const salesOrderRoutes = require('./routes/salesOrderRoutes');

app.use('/api/products', productRoutes);
app.use('/api/sales-orders', salesOrderRoutes);

// Test Route
app.get('/', (req, res) => {
    res.send('Sales Order API is running!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

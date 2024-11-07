const express = require('express');
const bodyParser = require('body-parser');
const loadRoutes = require('./routes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Dynamically load routes
loadRoutes(app);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

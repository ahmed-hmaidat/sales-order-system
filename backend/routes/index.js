const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const pluralize = require('pluralize');


module.exports = (app) => {
    console.log('Loading routes...');
    const routesDir = path.join(__dirname); // Path to the routes directory

    fs.readdirSync(routesDir).forEach((file) => {
        if (file === 'index.js') return; // Skip the index.js itself

        const routePath = path.join(routesDir, file);
        const route = require(routePath);

        // Register the route, using the file name as the route name, kebab cased and pluralized
        const routeName = pluralize(_.kebabCase(file.replace('.js', '')));
        console.log(`Registering route: /api/${routeName}`);
        app.use(`/api/${routeName}`, route);
    });

    // Test Route
    app.get('/', (req, res) => {
        res.send('Sales Order API is running!');
    });
};

const cors = require('cors');

const corsOptions = {
    origin: '*',
    methods: '*',
    allowedHeaders: '*',
    exposedHeaders: ['Content-Length', 'X-Custom-Header'],
    optionsSuccessStatus: 204,
    preflightContinue: true,
};

const corsMiddleware = cors(corsOptions);

module.exports = corsMiddleware;

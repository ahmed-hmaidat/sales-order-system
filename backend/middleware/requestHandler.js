const asyncHandler = require('express-async-handler');

const requestHandler = (serviceMethod) => {
    return asyncHandler(async (req, res, next) => {
        try {
            await serviceMethod(req, res, next);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });
};

module.exports = requestHandler;
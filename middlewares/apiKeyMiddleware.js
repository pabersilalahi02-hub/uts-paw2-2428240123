const apiKeyMiddleware = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    const validApiKey = process.env.API_KEY || 'RAHASIA123';

    if (!apiKey || apiKey !== validApiKey) {
        return res.status(401).json({
            status: 'fail',
            message: 'API Key tidak valid atau tidak disertakan'
        });
    }

    next();
};

module.exports = apiKeyMiddleware;
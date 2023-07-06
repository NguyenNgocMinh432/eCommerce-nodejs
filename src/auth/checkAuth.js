'use strict';
const HEADERS= {
    API_KEY = 'x-api-key',
    AUTHORIZATION = 'authorization',
}
const apiKey = (req, res, next) => {
    try {
        const key = req.headers[HEADERS.API_KEY]?.toString();
        if (!key) {
            return res.status(403).json({
                message:"Forbidden"
            })
        }
        const objectKey = await
    } catch (err) {

    }
}
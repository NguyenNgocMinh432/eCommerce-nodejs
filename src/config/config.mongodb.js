//level 0

const dev = {
    app: {
        port: process.env.PORT
    },
    db: {
        host: process.env.DEV_DB_HOST,
        port: process.env.DEV_DB_POST,
        name: process.env.DEV_DB_NAME
    }
}
// level 1
const pro = {
    DB: {
        port: process.env.PORT
    },
    db: {
        host: process.env.PRO_DB_HOST,
        port: process.env.PRO_DB_POST,
        name: process.env.PRO_DB_NAME
    }
}
const config = { dev, pro }
const env = process.env.NODE_ENV || 'dev'
module.exports = config[env];



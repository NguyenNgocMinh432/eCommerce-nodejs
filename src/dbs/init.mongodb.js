const { default: mongoose } = require("mongoose");

const connectString = `mongodb+srv://dbUser:${process.env.PASSWORD_DATABASE}@cluster0.9yismow.mongodb.net/?retryWrites=true&w=majority`

//dev
if (1 === 1) {
    mongoose.set('debug', true);
    mongoose.set('debug', { color: true});
}

class Database {
    constructor() {
        this.connect()
    }

    connect(type="mongodb") {
        if (1 === 1) {
            mongoose.set('debug', true);
            mongoose.set('debug', {color: true});
        }
        mongoose.connect( connectString, {maxPoolSize:50} )
        .then(_ => console.log(`connect database successfully`))
        .catch(err => console.log(`connect db ${err.message}`));
    }

    static getInstance() {
        if ( !Database.instance ) {
            Database.instance = new Database();
        }

        return Database.instance;
    }
}

const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb
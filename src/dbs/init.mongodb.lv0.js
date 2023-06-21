const { default: mongoose } = require("mongoose");

const connectString = `mongodb+srv://dbUser:${process.env.PASSWORD_DATABASE}@cluster0.9yismow.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect( connectString )
.then(_ => console.log(`connect database successfully`))
.catch(err => console.log(`connect db ${err.message}`));
//dev
if (1 === 0) {
    mongoose.set('debug', true);
    mongoose.set('debug', { color: true});
}

module.exports = mongoose
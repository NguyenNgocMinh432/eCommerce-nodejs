const app = require("./src/app");
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const server = app.listen(PORT, () => {
    console.log(`connecting to server successfully`);
});

process.on("SIGINT", () => {
    server.close(() => console.log("exit server"))
})
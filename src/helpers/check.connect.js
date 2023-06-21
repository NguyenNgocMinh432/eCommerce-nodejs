const mongoose = require('mongoose')
const countConnect = () => {
    const numConnections = mongoose.connections.length
    console.log(`numConnections: ${numConnections}`);
}

// check overload
const _SECOND = 5000;
const os = require('os');
const process = require('process');
// const checkOverload = () => {
//     setInterval(() => {
//         const numConnections = mongoose.connections.length
//         const numCores = os.cpus().length;
//         const memoryUsage = process.memoryUsage().rss;

//         console.log(`Active connections: ${numConnections}`);
//         console.log(`Memory usage: ${memoryUsage /1024 /1024} MB`);

//         const maxConnections = numCores * 5;
//         if (numConnections > maxConnections) {
//             console.log(`connections overload detected!!!`);
//         }
//     }, _SECOND)
// }

module.exports = {
    countConnect,
    // checkOverload
}
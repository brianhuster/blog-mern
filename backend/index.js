require('dotenv').config();
const http = require('http');
const app = require('./app');

const { PORT } = require("./config/keys.js");

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

process.on('SIGINT', () => process.exit(0));
process.once('SIGUSR2', function() {
    process.kill(process.pid, 'SIGUSR2');
});

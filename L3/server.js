const log = require('./Log');
const http = require('http');
const hostName = '127.0.0.1';
const port = 3000;

const eventLog = log.eventLog;

const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end(req.url);
eventLog.emit('request', req.url);
});

server.listen(port, hostName, () => {
console.log('Server running');
});
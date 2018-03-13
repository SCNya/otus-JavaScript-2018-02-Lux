const EventEmitter = require('events');

class EventLog extends EventEmitter { }

const eventLog = new EventLog();

eventLog.on('request', (args) => {
    console.log('Request with ' + args);
});

module.exports = eventLog;
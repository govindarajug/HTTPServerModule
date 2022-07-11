const { startServer } = require('./src/server/server.js');
const { createRouter } = require('./src/server/router.js');
const { logReq } = require('./src/handlers/logReq.js');
const { notFoundHandler } = require('./src/handlers/notFoundHandler.js');
const { parseParams } = require('./src/handlers/parseParams.js');

module.exports = { startServer, createRouter, handlers: [logReq, notFoundHandler, parseParams] };

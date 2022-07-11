const http = require('http');

const startServer = (port, handler) => {
  const httpServer = http.createServer(handler);

  httpServer.listen(port, () => {
    console.log(`Started listening on ${port}`);
  });
};

module.exports = { startServer };

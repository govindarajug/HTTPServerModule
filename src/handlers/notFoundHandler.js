const notFoundHandler = (request, response) => {
  response.setHeader('content-Type', 'text/plain');
  response.statusCode = 404;
  response.end('Error page not found');
  return;
};

module.exports = { notFoundHandler };

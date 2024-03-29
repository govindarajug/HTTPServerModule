const parseUrl = (request, response) => {
  request.url = new URL(`http://${request.headers.host}${request.url}`);
};

const router = (handlers) => {
  return (request, response) => {
    parseUrl(request, response);
    console.log(request.method, request.url.pathname);
    for (const handler of handlers) {
      if (handler(request, response)) {
        return true;
      }
    }
    return false;
  };
};

module.exports = { router };

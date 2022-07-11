const parseUrl = (req, res) => {
  req.url = new URL(`http://${req.headers.host}${req.url}`);
};

const parseBodyParams = (req, res, next) => {
  let data = '';
  req.on('data', (chunk) => data += chunk);
  req.on('end', () => {
    req.bodyParams = new URLSearchParams(data);
    next();
  });
};

const parseParams = (req, res, next) => {
  parseUrl(req, res);
  if (req.method === 'POST') {
    parseBodyParams(req, res, next);
    return;
  }
  next();
};

module.exports = { parseParams };

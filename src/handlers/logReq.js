const logReq = (req, res, next) => {
  console.log(req.method, req.url.pathname);
  next();
};

module.exports = { logReq };

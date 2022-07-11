const createNext = (handlers) => {
  let index = -1;
  const next = (req, res) => {
    index++;
    const currentHandler = handlers[index];
    if (currentHandler) {
      currentHandler(req, res, () => next(req, res));
    }
  };
  return next;
};

const createRouter = (handlers) => {
  return (req, res) => {
    const next = createNext(handlers);
    next(req, res);
  };
};

module.exports = { createRouter };

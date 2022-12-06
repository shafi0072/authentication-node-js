const errorHandler = (err, req, res, next) => {
  if (req.headerSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
};
module.exports = errorHandler;

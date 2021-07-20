const errorHandlerMiddleware = function (err, req, res, next) {
  const errorStatus = err.httpCode || 500;
  res.status(errorStatus).json({ message: err.message });
};
module.exports = errorHandlerMiddleware;

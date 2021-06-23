// @desc      Logs request to console
const logger = (req, res, next) => {
  `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`;
};

module.exports = logger;

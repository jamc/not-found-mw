module.exports = function notFoundMW(req, res) {
  var notFoundResponse = {
    status  : 'Not Found',
    message : 'The requested endpoint does not exist'
  };
  res.status(404);
  return res.json(notFoundResponse);
};
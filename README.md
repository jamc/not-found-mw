# Not Found Middleware

A not found middleware for express.

## Usage

```javascript
var express = require('express');
var app = express();
var notFoundMW = require('not-found-mw');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use(notFoundMW);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
```
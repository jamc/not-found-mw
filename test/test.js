var should      = require('chai').should();
var sinon       = require('sinon');
var sandbox     = sinon.sandbox.create();

var notFoundMW  = require('../index');

describe('Not Found Middleware', function() {

  afterEach(function() {
    sandbox.restore();
  });

  it('returns a 404 message when called', function () {
    var expectedResponse = {
      status  : 'Not Found',
      message : 'The requested endpoint does not exist'
    };
    var res = {
      status: sandbox.stub(),
      json  : sandbox.stub()
    };
    notFoundMW(null, res);
    res.status.calledWith(404).should.be.true;
    res.json.calledWith(expectedResponse).should.be.true;
  });
});
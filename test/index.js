var ZSchema   = require('z-schema');
var expect    = require('chai').expect;
var schema    = require('../schema.json');
var validator = new ZSchema();

describe('schema.json', function() {
  it('is a valid schema', function () {
    expect(validator.validateSchema(schema)).to.equal(true);
  });
});

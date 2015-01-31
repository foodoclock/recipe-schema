var ZSchema   = require('z-schema');
var expect    = require('chai').expect;
var schema    = require('../schema.json');
var validator = new ZSchema({
  strictMode: true,
  ignoreUnresolvableReferences: true
});

describe('schema.json', function () {
  before(function () {
    validator.validateSchema(schema);
  })

  it('is a valid schema', function () {
    var errors = validator.getLastErrors();
    // TODO there must be a better of doing this. Custom matcher?
    if (errors) {
      console.error(errors);
    }
    expect(errors).to.empty();
  });
});

var ZSchema   = require('z-schema');
var fs        = require('fs');
var schema    = JSON.parse(fs.readFileSync( 'schema.json'), 'utf8');
var validator = new ZSchema();

module.exports = {
  validate: function (json, callback) {
    validator.validate(json, schema, callback);
  }
};

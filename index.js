var ZSchema   = require('z-schema');
var fs        = require('fs');
var path      = require('path');
var schema    = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'schema.json'), 'utf8'));
var validator = new ZSchema({
  strictMode: true,
  ignoreUnresolvableReferences: true
});

module.exports = {
  validate: function (json, callback) {
    validator.validate(json, schema, callback);
  },
  schema: schema
};


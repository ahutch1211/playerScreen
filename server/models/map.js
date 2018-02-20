var restful = require('node-restful');

var schema = new restful.mongoose.Schema({
  background: Document,
  showGrid: Boolean
});

module.exports = restful.model('Map', schema);

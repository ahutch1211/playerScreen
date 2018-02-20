var restful = require('node-restful');

var schema = new restful.mongoose.Schema({
  name: String,
  race: String,
  class: String,
  level: Number,
  position: Object,
  permission: Number
});

module.exports = restful.model('Character', schema);

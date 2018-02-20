var restful = require('node-restful');

var schema = new restful.mongoose.Schema({
  name: String,
  color: String,
  race: String,
  class: String,
  level: Number,
  subClass: [
    {
      class: String,
      level: Number
    }
  ],
  currency: {
    coins: Number,
    gems: Number,
    rare: Number
  },
  meta: {
    permission: Number,
    position: Object
  }
});

module.exports = restful.model('Character', schema);

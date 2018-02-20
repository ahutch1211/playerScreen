var restful = require('node-restful');

var schema = new restful.mongoose.Schema({
  positions: [
    {
      name: String,
      color: String,
      health: Object,
      maxHealth: Number,
      position: Object
    }
  ]
});

module.exports = restful.model('Team', schema);

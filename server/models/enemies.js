var restful = require('node-restful');

var schema = new restful.mongoose.Schema({
  list: [
    {
      name: String,
      health: {
        current: Number,
        temp: Number,
        max: Number
      },
      position: Object,
      size: Number
    }
  ]
});

module.exports = restful.model('Enemies', schema);

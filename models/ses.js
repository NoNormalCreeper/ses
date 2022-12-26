const mongoose = require('mongoose');
const schema = mongoose.schema;

const ses = new schema({
  name: { type: String, required: true },
  completed: Boolean,
  total: Number,
  qgroup: [{
    start: { type: Number, required: true },
    end: { type: Number, required: true },
    type: { type: Number, required: true },
    answer: schema.Types.Mixed
  }],
  stats: schema.Types.Mixed
})

module.exports = mongoose.model('ses', ses);
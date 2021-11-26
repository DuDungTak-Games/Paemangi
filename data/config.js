var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/paemangidb');

const FooSchema = new mongoose.Schema({
    name: String,
    saveDate: {
      type: Date,
      default: Date.now,
    },
  });

module.exports = mongoose.model("Foos", FooSchema);
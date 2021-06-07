const mongoose = require("mongoose");
const validator = require("validator");


const schema = new mongoose.Schema({
  Username: {
    type: String,
    trim: true,
  },
  Password: {
    type: String,
    trim: true,
  }
});

const model = mongoose.model("userAuth", schema);

module.exports = model;
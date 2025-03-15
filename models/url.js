
const mongoose = require ('mongoose');
const urlSchema = new mongoose.Schema({
  shortId: {
    type: String,
    require: true,
  },
  // original URL
  redirectURL: {
    type: String,
    require: true,
  },
  visitHistory: [{
    timestamp: {type: Number}
  }],
}, {timestamps: true});

const urlModel = new mongoose.model("URLShortener", urlSchema);
module.exports = urlModel;


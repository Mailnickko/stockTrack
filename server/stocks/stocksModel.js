var mongoose = require('mongoose');

var StockSchema = new mongoose.Schema({
  symbol: String,
  name: String,
  open: Number,
  high: Number,
  low: Number,
  lastPrice: Number,
  shares: {
    type: Number, default: 1
  }
})

StockSchema.methods.buyMoreShares = function() {
  this.shares++;
  this.save();
}

StockSchema.methods.removeShares = function() {
  this.shares--;
  this.save();
}

module.exports = mongoose.model('Stock', StockSchema);
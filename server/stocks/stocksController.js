var Stock = require('./stocksModel.js');
var Q = require('q');

//promisify methods

module.exports = (function() {
  return {


    getStocks: function(req, res) {
      Stock.find({}, function(err, results) {
        if (err) {
          console.log('Err in stocks controller');
          res.json(err);
        } else {
          res.json(results);
        }
      })
    },

    addStocks: function(req, res) {
      Stock.findOne({
        symbol: req.body.symbol
      }, function(err, stock) {
        if (stock) {
          stock.buyMoreShares();
        } else {
          var newStock = new Stock({
            symbol: req.body.symbol,
            name: req.body.name,
            open: req.body.open,
            high: req.body.high,
            low: req.body.low,
            lastPrice: req.body.lastPrice,
            shares: req.body.shares
          });
          newStock.save(function(err) {
            if (err) {
              console.log('Error in addStocks');
              res.json(err);
            } else {
              console.log('Stock saved!');
            }
          })
        }
      })
    }
  }
})();
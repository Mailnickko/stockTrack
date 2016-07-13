var Stock = require('./stocksModel.js');
var Q = require('q');

//promisify methods
var findStocks = Q.nbind(Stock.find, Stock);
var findStock = Q.nbind(Stock.findOne, Stock);
module.exports = (function() {
  return {


    getStocks: function(req, res, next) {
      findStocks({})
        .then(function(stocks) {
          res.json(stocks);
        })
        .catch(function(err) {
          next(new Error('No Stocks Here'))
        })
    },

    addStocks: function(req, res, next) {
      Stock.findOne({
        symbol: req.body.symbol
      }, function(err, stock) {
        if (stock) {
          stock.buyMoreShares();
          res.send('done');
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
              res.send('save completed');
            }
          })
        }
      })
    },

    removeShare: function(req, res, next) {

      findStock({_id: req.params.id})
        .then(function(stock) {
          stock.removeShares();
          res.json('shares updated');
          console.log('Share Removed')
        })
        .catch(function(err) {
          next(new Error('No shares'))
        })
    },

    removeStock: function(req, res) {
      Stock.remove({
        _id: req.params.id
      }, function(err, stock) {
          if (err) {
            res.json(err)
          } else {
            res.send('DELETED STOCK')
          }
      })
    }
  }
})();
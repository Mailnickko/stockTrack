var stocksController = require('../stocks/stocksController');

module.exports = function(app, express) {
  app.get('/stocks', stocksController.getStocks);

  app.post('/stocks', stocksController.addStocks);
}
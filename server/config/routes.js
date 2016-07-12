var stocksController = require('../stocks/stocksController');

module.exports = function(app, express) {
  app.get('/stocks', stocksController.getStocks);

  app.post('/stocks', stocksController.addStocks);

  app.put('/removeShare/:id', stocksController.removeShare);

  app.delete('/removeStock/:id', stocksController.removeStock);
}
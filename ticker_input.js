var stocks = new Stocks('L0DDAMG0NGJFSJEY');

var options = {
  symbol: 'AAPL',
  interval: 'weekly',
  amount: 52
};

var result = await stocks.timeSeries(options);
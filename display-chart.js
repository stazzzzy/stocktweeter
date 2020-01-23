let req_url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SPY&interval=5min&apikey=L0DDAMG0NGJFSJEY';
$.getJSON(req_url, function(data){
  var price = data['Time Series (Daily)'];
  var size = Object.keys(price).length;
  console.log(price);
  var price_list = [];
  for(var key in price) {
    let p = key.toString();
  	let pi = price[key]['4. close'];
  	price_list.push({"time": key.toString().split(" ")[0],"value" : pi});
  	}
  	console.log(price_list);
  	areaSeries.setData(price_list);
  	areaSeries.applyOptions({
      priceScale: {
        scaleMargins: {
          top: 0.6,
          bottom: 0.05,
  	    	}
      }
  	});
  chart.timeScale().fitContent();
});
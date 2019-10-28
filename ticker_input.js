function getticker(string){
$.getJSON('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AMD&interval=5min&apikey=L0DDAMG0NGJFSJEY', function(data) { 
			console.log(string);
			var text = `Ticker: ${data['Meta Data']["2. Symbol"]}<br>
						T-Zone: ${data['Meta Data']["6. Time Zone"]}`
			
			$(".info").html(text);
		});
	}
	
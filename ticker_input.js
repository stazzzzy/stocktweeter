function getticker(string){
	// Build URL for request to the API
	let req = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + string.toUpperCase() + '&interval=5min&apikey=L0DDAMG0NGJFSJEY';
	// JQuery function to retrieve the JSON from Alpha Vantage
	$.getJSON(req, function(data) {
			console.log(string);
			var text = `Ticker: ${data['Meta Data']["2. Symbol"]}<br>
						Timezone: ${data['Meta Data']["5. Time Zone"]}`
			console.log(data);			
			$("#info").html(text); // Append JSON text to site HTML

			set_chart_data(req);
		});
	}

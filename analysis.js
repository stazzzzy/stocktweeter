function a(time_series, threshold) { // Threshhold should be a float (i.e. .05 = 5%) time_series is an array of key value pairs
	var flagged = []; 				 // Array of times that will have a trump tweet linked to them
	for (var key in time_series) {
		let cur = time_series[key]["value"];
		let next = time_series[key+1]["value"];
	}
}
	
let tweets = "tweets.json";

console.log(tweets[0].text);

$.getJSON("tweets.json", function(data) {
			console.log(data);

		});
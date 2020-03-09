// Analysis. 
// Takes the tweets creation date as the KEY to access the stock prices
// Take the date that the Trump Tweet was created and the date that comes after
// probably in a loop to continuously go back in time to do all of his tweets
	// Trump Tweets at 2/26/2020, so looking for KEY = 2020-02-26
	// Current = time_series[KEY]["value"] and store the value
	// Next_day = time_series[KEY+1]["value"] and store that value
// Perform percent difference to calculate the change in price from current to next_day. 
	// DecimalChange = (Next - Current) / Current
//Then compare to threshold value. 
	// if(DecimalChange >= threshold)
	//   add marker on chart with embedded tweet
//TEST CASE:
test_trump_tweet_dates = ['2020-03-02', '2020-03-03', '2020-03-04', '2020-03-05'];
function test_case(time_series, threshold){
	for(key in time_series){ 									// for each day in time_series,
		for(i = 0; i<test_trump_tweet_dates; i++){				// we have to check if Trump tweeted on that day
			if(test_trump_tweet_dates[i] === key){				// if the trump_tweet[i] == key (key = date from time series)
				let current = time_series[key]["value"];		// current is set to the value("price") from time_series
				let next_day = time_series[key+1]["value"];		// then we have to move to the next day in the time series
			}
			console.log(current);
			console.log(next_day);
		}
		DecimalChange = (next_day - current) / current;
		if(DecimalChange >= threshold){
			console.log('add marker');
			// add marker to the chart at current key/value pair.
		}
	}
}
// GET TEST ABOVE working FIRST
// function a(time_series, threshold) { // Threshhold should be a float (i.e. .05 = 5%) | time_series is an array of key value pairs
// 	var flagged = []; 				 // Array of times that will have a trump tweet linked to them
// 	for (var key in time_series) {
// 		let cur = time_series[key]["value"];
// 		let next = time_series[key+1]["value"];
// 	}
// }
	
// let tweets = "tweets.json";

// console.log(tweets[0].text);

// $.getJSON("tweets.json", function(data) {
// 			console.log(data);

// 		});
// Analysis. 
// Takes the tweets creation date as the KEY to access the stock prices
// Take the date that the Trump Tweet was created and the date that comes after
// probably in a loop to continuously go back in time to do all of his tweets
	// Trump Tweets at 2/26/2020, so KEY = 2/26/2020
	// Current = time_series[KEY]["value"] and store the value
	// Next_day = time_series[KEY]["value"] and store that value
// Perform percent difference to calculate the change in price from current to next_day. 
	// DecimalChange = (Next - Current) / Current
//Then compare to threshold value. 
	// if(DecimalChange >= threshold)
	//   add marker on chart with embedded tweet


function a(time_series, threshold) { // Threshhold should be a float (i.e. .05 = 5%) time_series is an array of key value pairs
	var flagged = []; 				 // Array of times that will have a trump tweet linked to them
	
	$.getJSON("https://firebasestorage.googleapis.com/v0/b/tweetdata-f8f42.appspot.com/o/tweets.json?alt=media&token=e2ce4a33-6996-4c54-84bb-1b6737b8b2f6", function(data) {
			console.log("Test here");
			console.log(data[0].created_at);
			for(let i = 0; i<data.length; i++){
				let current_datetime = new Date(data[i].created_at); // Collect date (string) from Firebase, convert to Javascript Date format
				//console.log(current_datetime);
				let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate()// format the date to be YYYY/MM/DD
				//console.log(formatted_date)

				flagged.push(formatted_date); // NOT SURE IF THIS WORKS
			}
		});

	for (var key in time_series) {
		let cur = time_series[key];
		let next = time_series[key+1];
	}
}
	
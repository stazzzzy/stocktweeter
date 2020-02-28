var ctx = document.getElementById('myChart').getContext('2d');
var pointBackgroundColor = [],
	pointBorderColor = [];
var chart = new Chart(ctx, {
    // The type of chart we want to create, obviously
    type: 'line',
    // The data for our dataset (We only have one here)
    data: {
        labels: '',
        datasets: [{
            backgroundColor: 'rgb(0, 172, 237, 0.3)',
            borderColor: 'rgb(0, 172, 237)',
            data: '',
			pointBackgroundColor: pointBackgroundColor,
			pointBorderColor: pointBorderColor
        }]
    },
	
    // Configuration options go here
    options: {
		scales: {
			xAxes:[{
				type: 'time',
				time: {
					unit: 'month' //show months
				},
				ticks:{
					display: true, //tick above the month
					autoSkip: true, //makes sure that not every month is showing
					maxTicksLimit: 20
				}
			}]
		},
		legend: {
            display: false
        },
		tooltipTemplate: "<%= value %>",

		showTooltips: true,

		onAnimationComplete: function() {
		this.showTooltip(this.datasets[0].points, true);
		},
		tooltipEvents: []
	}
});

function addData(chart, label, data) { //this function pushes data to the actual chart, we also need one to remove data
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => { 
        dataset.data.push(data);			//push data to array
		pointBackgroundColor.push('transparent');
		pointBorderColor.push('black');
	});
    chart.update();
}

function removeData(chart) {
    chart.data.datasets.forEach((dataset) => {
		let size = dataset.data.length;
		for(var i = 0; i<size; i++) {
			dataset.data.pop();
			chart.data.labels.pop();
			pointBackgroundColor.pop();
			pointBorderColor.pop();
		}
    });
    chart.update();
}

function set_chart_data(req_url) {
	$.getJSON(req_url, function(data){ 				// Retrieve JSON data from the specified ticker
		var price = data['Time Series (Daily)'];	// Price is all the pricepoints for their given date and time
		console.log(price);							// 
		var price_list = [];						// We need to get all the "close" prices, so we will create a new list and append here
		removeData(chart);
		for(var key in price) {						// Here, key is essentially the date/time in the list of all the dates and their respective prices
			
			let pi = price[key]['4. close'];											// pi is our close price
			price_list.push({"time": key.toString().split(" ")[0],"value" : pi});		// Putting formatted key value pairs into the list
																						// Format can be read by our chart
			addData(chart,key.toString().split(" ")[0],pi); // we do not even need the key value pairs anymore
		}																				
		console.log(price_list);
	});
}

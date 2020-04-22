var ctx = document.getElementById('myChart').getContext('2d');
var pointBackgroundColor = [],
	pointStyle = [],
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
			pointBorderColor: pointBorderColor,
			pointStyle: pointStyle
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
		tooltips: {
			enabled: true,
			filter: function(tooltipItem, data) { //Filter tooltips, if point is a donald trump head (IMG), do not show pre-built tooltip
				var point = data.datasets[0].pointStyle[tooltipItem.index];
				if(point.tagName == "IMG") {
					return false
				}
				else{
					return true
				}
			},
			custom: function(tooltip) {
				var tooltipEl = document.getElementById('chartjs-tooltip');
				if (!tooltipEl) {
                    tooltipEl = document.createElement('div');
                    tooltipEl.id = 'chartjs-tooltip';
                    tooltipEl.innerHTML = '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Great news! American families will now be able to buy safer, more affordable, and environmentally friendly cars with our new SAFE VEHICLES RULE. Get rid of those old, unsafe clunkers. Build better and safer American cars and create American jobs. Buy American!</p>&mdash; Donald J. Trump (@realDonaldTrump) <a href="https://twitter.com/realDonaldTrump/status/1245076016965566464?ref_src=twsrc%5Etfw">March 31, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> ';
                    twttr.widgets.load() //Initialize twitter widget to style correctly
					document.body.appendChild(tooltipEl);
                }
				
				
				tooltipEl.classList.remove('above', 'below', 'no-transform'); //Change position of tweet so it does not run off screen
				if (tooltip.yAlign) {
					tooltipEl.classList.add(tooltip.yAlign);
				} else {
					tooltipEl.classList.add('no-transform');
				}
				
				
				
				if (tooltip.opacity === 0) {
                    tooltipEl.style.opacity = 0;
                    return;
                }
				
				var position = this._chart.canvas.getBoundingClientRect();
				tooltipEl.style.opacity = 1;
                tooltipEl.style.position = 'absolute';
                tooltipEl.style.left = position.left + window.pageXOffset + tooltip.caretX + 'px';
                tooltipEl.style.top = position.top + window.pageYOffset + tooltip.caretY + 'px';
				tooltipEl.style.padding = tooltip.yPadding + 'px ' + tooltip.xPadding + 'px';
                tooltipEl.style.pointerEvents = 'none';
			}
				
				
			
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
		pointStyle.push('cross');
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
			pointStyle.pop();
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

		if(price_list[0] > 200){
			threshold = 0.03;
		}
		else if (price_list[0] > 100) {
			threshold = 0.05;
		} else {
			threshold = 0.075;
		}

		a(price_list, threshold);
	});
}

function addTrump(index){
	image = new Image();
	image.src = 'head.png';
	image.setAttribute('width','30px');
	image.setAttribute('height','30px');
	pointStyle[index] = image;
	//pointBorderColor[20] = "red";
	//pointBackgroundColor[20] = "red";
	chart.update();
}

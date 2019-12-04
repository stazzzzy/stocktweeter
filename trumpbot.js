//Node.js is used to run this code. First a node is created with packages to use JS and JSON.
//TwitterOAuth is a library that is useful when using twitter api with js
// package.json and package-lock.json are from the node i created for this

console.log('The bot is starting'); //just some output to see that the code has begun

var Twit = require('twit'); // twit is from TwitterOAuth, it begins the requests from twitter api using the keys below

var config = require('./config');
var T = new Twit(config);


//Parameters for the get request from twitter api
var params = {
  screen_name: 'realDonaldTrump',  //  the @ screen name of the user timeline you wish to get
  count: 100, // gets 100 most recent tweets, including retweets despite them being turned off in the output
  exclude_replies: true, //doesn't show replies
  include_rts: false // doesn't show retweets in data, but it still counts towards the limit
}

//Twit get request using the twitter api call for statuses from the user timeline. Given parameters defined above
//and returns with gotData which is a function that returns error messages, the data and response
T.get('statuses/user_timeline', params, gotData);

function gotData(err, data, response) {
  console.log(data); // this outputs the twitter JSON data collected from the twitter timeline
  var tweets = data; // this creates a variable that stores all of the data for a tweet from the timeline
  for (var i=0; i<tweets.length;i++){ // the for loop cycles through all of the tweets that are collected from the timeline
    // the console outputs the text from the tweet, the tweet's creation date and the tweet's ID
    console.log(tweets[i].text + '---' + tweets[i].created_at + '---' + tweets[i].id);
  }
}

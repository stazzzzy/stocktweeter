<?php
// keys and tokens
$consumer_key:'SHl26na5bOXi5ezojsMnmY5d2';
$consumer_secret:'gQfWRJ5JpBfp7VBWE53MBEL6hUFAIuIUVuKmqjvg4rWxFtnTiW';
$access_token:'785901517-fgDYo5u4iYbaUZWFdgiuiQe8Xg9vesE3KLy9jfhM';
$access_token_secret:'KEPLfajhjzmhcJQ131zw3VBa3lfAZoK8J7OhJZIweb2Nq';

// include twitter authenticator library
require "twitteroauth/autoload.php";
use Abraham\TwitterOAuth\TwitterOAuth;

//Connect to API
$connection = new TwitterOAuth($consumer_secret, $consumer_secret, $access_token, $access_token_secret);
$content = $connection->get("account/verify_credentials");

//Get tweets
$statuses = $connection->get("statusts/home_timeline",["count" => 25, "exclude_replies" => true]);

print_r($statuses);

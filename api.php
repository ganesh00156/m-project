<?php

header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: X-Requested-With");

$url = 'https://api.spacexdata.com/v3/rockets';

// Make the API request
$response = file_get_contents($url);

// Log the response
error_log($response);

// Return the response as JSON
header('Content-Type: application/json');
echo $response;
?>

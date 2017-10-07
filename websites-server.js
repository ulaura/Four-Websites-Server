//bring in http and fs node packages
var http = require("http");
var fs = require("fs");

//assign a port
var PORT = 8080;

var server = http.createServer(handleRequest);

// Start our server
server.listen(PORT, function() {
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:" + PORT);
});


function handleRequest(req, res) {


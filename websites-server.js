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

//var thisPage = "";

function handleRequest(req, res) {
  // Capture the url the request is made to
  var path = req.url;

  // Depending on the URL, display a different HTML file.
  switch (path) {

    case "/":
      return displayRoot(req, res);

    case "/favoritefood":
      return displayFavoriteFood(req, res);

    case "/favoritemovies":
    	return displayFavoriteMovies(req, res);

    case "/favoritecss":
    	return displayFavoriteCSS(req, res);

    default:
      return display404(req, res);
  }
}



function displayRoot(req, res) {
  	fs.readFile(__dirname + "/index.html", function(err, data) {
    	res.writeHead(200, { "Content-Type": "text/html" });
    	res.end(data);
  	});

};

function displayFavoriteFood (req, res) {
  	fs.readFile(__dirname + "/favoritefood.html", function(err, data) {
    	res.writeHead(200, { "Content-Type": "text/html" });
    	res.end(data);
  	});

};


function displayFavoriteMovies (req, res) {
  	fs.readFile(__dirname + "/favoritemovies.html", function(err, data) {
    	res.writeHead(200, { "Content-Type": "text/html" });
    	res.end(data);
  	});

};

function displayFavoriteCSS (req, res) {
  	fs.readFile(__dirname + "/favoritecss.html", function(err, data) {
    	res.writeHead(200, { "Content-Type": "text/html" });
    	res.end(data);
  	});

};

function display404 (req, res) {
  var myHTML =  "<html>" +
    "<body><h1>404 Not Found </h1>" +
    "<p>The page you were looking for can not be found</p>" +
    "</body></html>";

  res.writeHead(404, { "Content-Type": "text/html" });
  res.end(myHTML);
};


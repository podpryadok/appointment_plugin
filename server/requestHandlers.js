var querystring = require("querystring");
var fs = require("fs")

function start(response, postData) {
  console.log("Request handler 'start' was called.");

  fs.readFile('./index.html', function (err, html){
      if(err){
          throw err;
      }
  

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(html);
    response.end();
  })
}

function open(response, postData) {
  console.log("Request handler 'open' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("You've open page");
  response.end();
}

exports.start = start;
exports.open = open;
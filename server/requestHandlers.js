var querystring = require("querystring");
var fs = require("fs");
var db = require("./DBselects");

function start(response, postData) {
  console.log("Request handler 'start' was called.");

  fs.readFile('/Users/Игорь/Documents/project/appointment_plugin/index.html', function (err, html){
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

async function GetID(){
  console.log("Request handler 'GetID' was called.");
  response.writeHead(200);
  response.getID(db.getID());
  response.end();
}

exports.start = start;
exports.open = open;
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var dataBase = require("./connectDB");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/open"] = requestHandlers.open;

server.start(router.route, handle);
dataBase.connecting();
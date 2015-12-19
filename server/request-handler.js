var url = require('url');
var app = require('./app.js')

exports.requestHandler = function(request, response, body) {
  var sender = function(statusCode, data) {
    response.writeHead(statusCode, headers);
    response.end(JSON.stringify(data));
  };

  var headers = {
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
    "access-control-allow-headers": "content-type, accept, X-Parse-REST-API-Key, X-Parse-Application-Id",
    "access-control-max-age": 10, // Seconds.
    "Content-Type": "application/json"
  };

  statusHandler();
  var statusHandler = function() {
    if (request.url.slice(0, 8) === '/classes') {
      actions[request.method]();
    } else {
      sender(404, null);
    }
  };

  var actions = {
    'POST': function() {
      var str = '';
      request.on('data', function(chunk) {
        str += chunk;
      });
      request.on('end', function() {
       messages.results.push(JSON.parse(str));
       sender(201, messages);
      });
    },
    'GET': function() {
      sender(200, messages);
    },
    'OPTIONS': function() {
       sender(200, messages);
    }
  };





};

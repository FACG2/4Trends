var contentTypes = {
  css: 'text/css',
  html: 'text/html',
  js: 'application/javascript',
  ico: 'image/x-icon',
  jpg: 'image/jpg'
};

var fs = require("fs");
var queryString = require('querystring');
var logic = require('./logic');


function homehandler(req, res) {
  fs.readFile(__dirname + "/../public/index.html", function(err, data) {
    if (err) {
      res.writeHead(500, {
        'Content-Type': 'text/html'
      });
      res.end('<h1>Internal Server Error</h1>');
    } else {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.end(data);
    }
  });
}

// function clickhandler(req, res) {
//
//
// }
//
// function() {
//
//   // for css
// }

function notFoundhandler(req, res) {
  res.writeHead(404, {
    'Content-Type': 'text/html'
  });
  res.end('<h1>Not found</h1>');
}

module.exports = {
  homehandler: homehandler,
//  clickhandler: clickhandler,l
  notFoundhandler: notFoundhandler
}

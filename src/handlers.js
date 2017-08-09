var fs = require('fs')
var getData = require('./apiReq.js')
var qs = require('querystring')

var ContentTypes = {
    css: 'text/css',
    js: 'application/javascript',
    ico: 'image/x-icon',
}

function handleHomeRoute(req, res) {
    fs.readFile(__dirname + '/../public/index.html', function(err, data) {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' })
            res.end('<h1>Internel Server Error</h1>')
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' })
          res.end(data)
        }
    })
}

function handlePublic(req, res) {

    var url = req.url
    var parts = url.split('.')  // this line return 'main', 'css' and 'index', 'js'
    var fileExtension = parts[parts.length - 1]  //this line return only 'css' and 'js'

    fs.readFile(__dirname + '/..' + url, function(err, data) {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' })
            res.end('<h1>Internel Server Error</h1>')
        } else {
            res.writeHead(200, { 'Content-Type': ContentTypes[fileExtension] })
            res.end(data)
        }
    })
}
function handleSearch(req, res) {
  var url = req.url
  var parts = url.split('?');
  var obj = qs.parse(parts[1]);
  getData(obj.c, function(data) {
      res.end(JSON.stringify(data))
  })
}
function handleNotFound(req, res) {
    res.writeHead(404, { 'Content-Type': 'text/html' })
    res.end('<h1>Not Found</h1>')
}

module.exports = {
    handleHomeRoute: handleHomeRoute,
    handlePublic: handlePublic,
    handleNotFound: handleNotFound,
    handleSearch: handleSearch,
}

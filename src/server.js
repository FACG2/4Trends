var http = require('http')
var router = require('./router.js')

const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 5000

var server = http.createServer(router).listen(port)

console.log('server running on: http://' + host + ':' + port)

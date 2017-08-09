var http = require('http');
var router = require('./router.js');

var server = http.createServer(router);


server.listen(process.env.PORT || 4000, function() {
  console.log("your server work port 4000 ");
});

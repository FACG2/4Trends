var handlers = require('./handlers.js');

function router(req, res) {
  var url = req.url;
  // home page >> show html page
  if (url === '/') {
    handlers.homehandler(req, res);
    // when uesr click on button >> show output
  } else if (url.startsWith('/click')) {
    handlers.clickhandler(req, res);

  }
  // any thing ^_^ , i think we dont need to use it
  else {
    handlers.notFoundhandler(req, res);
  }


}
module.exports = router;

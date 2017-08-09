var request = require('request');
var googletrendsurl = 'http://hawttrends.appspot.com/api/terms/';
var output =
  request(googletrendsurl, function(err, respones, body) {
    if (!err && respones.statusCode === 200) {
      console.log('body:', JSON.parse(body))
    } else {
      console.log(error);
    }

  });



exports.output = output;

//
// // output == reslut.

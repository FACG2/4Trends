"use strict"

var request = require('request');
var url = 'http://hawttrends.appspot.com/api/terms/';

function getData(country, cb) {
    request(url, function(error, response, body) {
        var data = JSON.parse(body)

        if (!data[parseInt(country)]) {
            cb(data);
        } else {
            var filterdData = data[parseInt(country)].splice(10, 10);
            cb(filterdData)

        }
    })

}
module.exports = getData
"use strict"

var request = require('request');
var url = 'http://hawttrends.appspot.com/api/terms/';
function getData(country,cb){
	request(url , function(error,response,body){

			var data = JSON.parse(body)
			cb(data[parseInt(country)])
	})

}
module.exports = getData

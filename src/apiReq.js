"use strict"
var request = require('request')
var url = 'http://hawttrends.appspot.com/api/terms/'

function getData(country,cb) {
		request(url, function(error, response, body){
			if(!error && response.statusCode === 200){
				var data = JSON.parse(body)
				cb(null,data[country])
					} else{
						cb(new Error(error))
			}
		})
	}

module.exports = getData

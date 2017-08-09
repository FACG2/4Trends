const test = require('tape');
const shot = require('shot');
const router = require('../router');
const apiReq = require('../apiReq');
var apigoogletrends =  'http://hawttrends.appspot.com/api/terms/';
test('Home route returns a status code of 200', (t) => {
  shot.inject(router, {
    method: 'get',
    url: '/'
  }, (res) => {
    t.equal(res.statusCode, 200, 'Should respond with status code of 200');
    t.end();
  })
})

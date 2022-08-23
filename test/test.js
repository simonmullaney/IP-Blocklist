const request = require('request')
const assert = require('chai').assert;
const ipAddr = ['127.0.0.1', '185.220.100.255', '127.0.0.3','127.0.0.4','127.0.0.5','127.0.0.6','127.0.0.7','127.0.0.8','185.220.100.255','127.0.0.10'];


describe('Running IP Blocklist test scripts', function() {
  this.timeout(155000);
  describe('IP Blocklist endpoint', () => {
    for (let i=0; i<10; i++) {
      it('It should test the endpoint with multiple IP addresses', () => {
      let ip = ipAddr[i];
      // console.log(ip);
      return testIpBlocklist(ip).then((response) => {
            response = JSON.parse(response);
            console.log(response);
            assert.equal(response.response, 200);
          }).catch((error) => {
            throw new Error(error.message);
          });
      });
    }
  });
});

function testIpBlocklist(ip){
  return new Promise(function (resolve, reject) {
    request.get({
    url: 'http://localhost:3000/api/blacklist/'+ip,
    }, function(error, response, body){
      resolve(body)
    });
  });
}

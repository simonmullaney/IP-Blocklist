const request = require('request')
const assert = require('chai').assert;
const ipAddr = ['127.0.0.1', '127.0.0.1','127.0.0.1','127.0.0.1','127.0.0.1','127.0.0.1','185.220.100.255', '127.0.0.3','144.172.73.16','185.129.62.62','89.234.157.254','95.214.24.192','171.25.193.78','144.172.73.66','179.60.147.161','103.251.167.21','192.42.116.16','64.113.32.29','45.139.122.241','162.247.74.202','80.82.77.33','127.0.0.4','127.0.0.5','127.0.0.6','127.0.0.7','127.0.0.8','185.220.100.255','127.0.0.10'];


describe('Running IP Blocklist test scripts', function() {
  this.timeout(155000);
  describe('IP Blocklist endpoint', () => {
    for (let i=0; i<ipAddr.length; i++) {
      it('It should test the endpoint with multiple IP addresses', () => {
      let ip = ipAddr[i];
      return testIpBlocklist(ip).then((response) => {
            response = JSON.parse(response);
            console.log("\nTesting IP: ",ip);
            console.log("Response:",response);
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

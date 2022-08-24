var schedule = require('node-schedule');
const request = require('request')
const ObjectsToCsv = require('objects-to-csv');

console.log("Background process is running...");

let times = [
  {hour: 7, minute: 50}
];
times.forEach(function(time) {
  var j = schedule.scheduleJob(time, function() {
    console.log('This job was supposed to run at ' + time.hour + ':' + time.minute + ', but actually ran at ' + new Date());
    retrieveMaliciousIp()
  });
})

function retrieveMaliciousIp(){
    console.log("Retrieving Malicious Ip's from: https://raw.githubusercontent.com/stamparm/ipsum/master/ipsum.txt");
    return new Promise(function (resolve, reject) {
      request.get({
      url: 'https://raw.githubusercontent.com/stamparm/ipsum/master/ipsum.txt',
      }, function(error, response, body){
        var responseArray = body.toString().split('\n').map(function(ln){
            return ln.split('\t');
        });
        var objects=[];
        for(ipAddress of responseArray){
          if (ipAddress[0]!==undefined && ipAddress[0].toString()!=='#') {
            ipAddress.pop();
            ipAddress=ipAddress[0];
            objects.push({ipAddress});
          }
        }
        writeToCSV(objects);
      });
    });
}

async function writeToCSV(csvData){
  console.log("Writing data to CSV...");
  (async () => {
  const csv = new ObjectsToCsv(csvData);
  await csv.toDisk('./data/MaliciousIp.csv');
  })();
}

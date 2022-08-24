var fs = require('fs');

exports.checkBlacklist = async(request, response, next) => {
  try {
    let ip = request.params.ip.toString();
    let blacklist = await readBlacklistFile();
    console.log("Checking if IP: ",ip,"is in blacklist...");
    if (blacklist.includes(ip)){
      return response.status(200).json({
        'data': true,
        'message': '**** CAUTION IP is included on blacklist ****',
        'status': 'Success',
        'response': 200
      });
    } else {
      return response.status(200).json({
        'data': false,
        'message': 'IP is not included on blacklist.',
        'status': 'Success',
        'response': 200
      });
    }
  } catch (error) {
    console.error(`Failed to evaluate transaction: ${error}`);
    return response.status(500).json({
      'data': [],
      'message': error,
      'status': 'fail',
      'response': 500
    });
  }
}

async function readBlacklistFile(){
  return fs.readFileSync('./data/MaliciousIp.csv')
    .toString()
    .split('\n')
    .map(e => e.trim())
}

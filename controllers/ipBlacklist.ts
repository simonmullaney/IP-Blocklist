
exports.checkBlacklist = async(request, response, next) => {
  try {
    let ip = request.params.ip.toString();
    let blacklist = ["127.0.0.1","127.0.0.2","127.0.0.3","127.0.0.4"]
    console.log("Checking if IP: ",ip,"is in blacklist...");
    if (blacklist.includes(ip)){
      return response.status(200).json({
        'data': true,
        'message': 'IP is included on blacklist.',
        'status': 'Success',
        'response': 200
      });
    } else {
      console.log("NOT Present");
      console.log(blacklist[ip]);
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

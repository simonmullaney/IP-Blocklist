
exports.checkBlacklist = async(request, response, next) => {
  try {


    return response.status(200).json({
      'data': {},
      'message': 'Success',
      'status': 'success',
      'response': 200
    });
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

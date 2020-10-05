const validateShift = require('./validation/validateShift');
const validateFile = require('./validation/validateFile');
const validateAction = require('./validation/validateAction');

function validate(shift, input, output, action, terminator) {
  let error = false;
  validateShift(shift, error, terminator);
  validateFile(input, output, error, terminator);
  validateAction(action, error, terminator);
}

module.exports = validate;

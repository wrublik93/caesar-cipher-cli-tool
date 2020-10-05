const checkFile = require('./checkExistFile');

const validateFile = (input, output, error, terminator) => {
  if (input && !checkFile(input, 'input')) {
    error = true;
  }

  if (output && !checkFile(output, 'output')) {
    error = true;
  }

  if (error) {
    terminator();
  }
}

module.exports = validateFile;

const checkExistFile = require('./checkExistFile');

function validate(shift, input, output, action, terminator) {
  let error = false;

  if (shift === undefined) {
    console.error('Oops... Option "shift" is required option! Please, try again!');
    error = true;
  }

  if (!Number.isInteger(+shift)) {
    console.error('Oops... Option "shift" must be integer! Please, try again!');
    error = true;
  }

  if (input && !checkExistFile(input, 'input')) {
    error = true;
  }

  if (output && !checkExistFile(output, 'output')) {
    error = true;
  }

  if (error) {
    terminator();
  }


}

module.exports = validate;

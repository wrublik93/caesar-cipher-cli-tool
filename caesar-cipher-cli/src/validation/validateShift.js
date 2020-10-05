const validateShift = (shift, error, terminator) => {
  if (shift === undefined) {
    error = true;
    console.error('Oops... Option "shift" is required option! Please, try again!');
  }

  if (!Number.isInteger(+shift)) {
    error = true;
    console.error('Oops... Option "shift" must be integer! Please, try again!');
  }

  if (error) {
    terminator();
  }
}

module.exports = validateShift;

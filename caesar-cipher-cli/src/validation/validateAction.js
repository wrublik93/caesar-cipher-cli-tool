const  validateAction = (action, error, terminator) => {
  if (action === undefined) {
    error = true;
    console.error('Oops... Option "action" is required option! Please, try again!');
  }

  if (action !== 'encode' && action !== 'decode') {
    error = true;
    console.error('Oops... Option "action" must be only two type: "encode" or "decode"! Please, try again!');
  }

  if (error) {
    terminator();
  }
}

module.exports = validateAction;

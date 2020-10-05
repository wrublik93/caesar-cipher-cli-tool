const {
  CHAR_CODE_LOWERCASE_MIN,
  CHAR_CODE_LOWERCASE_MAX,
  CHAR_CODE_UPPERCASE_MIN,
  CHAR_CODE_UPPERCASE_MAX,
  ENGLISH_ALPHABET,
} = require('./constants');

const uppercaseLetters = char => char >= CHAR_CODE_UPPERCASE_MIN && char <=CHAR_CODE_UPPERCASE_MAX;
const lowercaseLetters = char => char >= CHAR_CODE_LOWERCASE_MIN && char <= CHAR_CODE_LOWERCASE_MAX;
const validCipherLetters = char =>  char.match(/[A-Za-z]/);

const cipher = (input, shift) => {
  let output = '';

  if (shift < 0) {
    shift = shift % ENGLISH_ALPHABET + ENGLISH_ALPHABET;
  }

  input.split('').forEach((char) => {
    if (validCipherLetters(char)) {
      const code = char.charCodeAt(0);
      let coded;
      const uppercaseShift = code - CHAR_CODE_UPPERCASE_MIN + shift;
      const lowercaseShift = code - CHAR_CODE_LOWERCASE_MIN + shift;

      if (uppercaseLetters(code)) {
        coded = (uppercaseShift % ENGLISH_ALPHABET) + CHAR_CODE_UPPERCASE_MIN;
      } else if (lowercaseLetters(code)) {
        coded = (lowercaseShift % ENGLISH_ALPHABET) + CHAR_CODE_LOWERCASE_MIN;
      }

      output += String.fromCharCode(coded);
    } else {
      output += char;
    }
  });

  return output;

}

module.exports = cipher;

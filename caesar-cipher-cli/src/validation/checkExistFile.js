const fs = require('fs');

const checkExistFile = (fileName, fileType) => {
  if (fileType !== 'input' && fileType !== 'output') {
    return false;
  }

  if (fs.existsSync(fileName)) {
    try {
      fs.accessSync(fileName, fileType === 'input'
      ? fs.constants.W_OK : fs.constants.R_OK);
    } catch (err) {
      console.error(`Oops... You cannot access ${fileType} file "${fileName}"! Please, try again!`);
      return false;
    }
  } else {
    console.error(`Oops... Your ${fileType} file "${fileName}" doesn't found! Please, try again!`);
    return false;
  }

  return true;
}

module.exports = checkExistFile;

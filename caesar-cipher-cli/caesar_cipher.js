const program = require('commander');
const { pipeline } = require('stream');
const fs = require('fs');
const validate = require('./src/validate');
const Transformer = require('./src/transformer');

program
  .storeOptionsAsProperties(false)
  .option('-s --shift <shift>', 'option (required): shift (only integer shift value)')
  .option('-i --input <file>', 'option (not required): input file (if none - STDIN)')
  .option('-o --output <file>', 'option (not required): output file (if none - STDOUT)')
  .option('-a --action <action>', 'option (required): action ONLY encode/decode')
  .parse(process.argv)

const { shift, input, output, action } = program.opts();
validate(shift, input, output, action, () => process.exit(1));

pipeline(
  input ? fs.createReadStream(input) : process.stdin,
  new Transformer(action, shift),
  output ? fs.createWriteStream(output, { flags: 'a' }) : process.stdout,
  (error) => {
    if (error) {
      console.error('Oops... Pipeline :)', error);
      process.exit(1);
    }
  }
)

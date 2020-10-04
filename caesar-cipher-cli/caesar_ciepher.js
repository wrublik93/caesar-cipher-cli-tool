const program = require('commander');
const { pipeline } = require('stream');
const fs = require('fs');
const validate = require('./src/validate');
const Transformer = require('./src/transformer');

program
  .storeOptionsAsProperties(false)
  .option('-s --shift <shift>', 'option: shift')
  .option('-i --input <file>', 'option: input file')
  .option('-o --output <file>', 'option: output file')
  .option('-a --action <action>', 'option: action encode/decode')
  .parse(process.argv)

const { shift, input, output, action } = program.opts();
validate(shift, input, output, action, () => process.exit(1));

pipeline(
  input ? fs.createReadStream(input) : process.stdin,
  output ? fs.createWriteStream(output, { flags: 'a' }) : process.stdout,
  new Transformer(action, shift),
  (error) => {
    if (error) {
      console.error('Error pipeline!', error);
      process.exit(1);
    }
  }
)

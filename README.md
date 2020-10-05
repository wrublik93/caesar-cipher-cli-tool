# Task 1. Caesar cipher CLI tool

**Implement CLI tool that will encode and decode a text by [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)**.  
**Task link: [Task 1. Caesar cipher CLI tool](https://github.com/rolling-scopes-school/nodejs-course-template/blob/master/TASKS.md#task-1-caesar-cipher-cli-tool)**.

## How to start?
1. Clone or download this repository
2. Open application folder
3. Run `npm install` or `npm i` to download packages
4. Your application ready to work

## How usage?
1. Open application folder
2. Write the command `node caesar-cipher-cli/caesar_cipher [options]` or `node caesar-cipher-cli/caesar_cipher.js [options]`, where `[options]`:  

| Option \(short\) | Option \(full\) | Description                              | Required |
|------------------|-----------------|------------------------------------------|----------|
| \-s              | \-\-short       | only integer shift value                 | yes      |
| \-i              | \-\-input       | input file option \(if none \- STDIN\)   | no       |
| \-o              | \-\-output      | output file option \(if none \- STDOUT\) | no       |
| \-a              | \-\-action      | actions: encode / decode                 | yes      |
| \-h              | \-\-help        | display help                             | no       |  

## Examples  
If you use default input and output files and you stay in the root folder application:  
1. `node caesar-cipher-cli/caesar_cipher.js -s 1 -a encode` or `node caesar-cipher-cli/caesar_cipher.js --shift 1 --action encode` - encode (used stdin and stdout)
2. `node caesar-cipher-cli/caesar_cipher -s 1 -a encode` or `node caesar-cipher-cli/caesar_cipher --shift 1 --action encode` - encode (used stdin and stdout)  
3. `node caesar-cipher-cli/caesar_cipher.js -s 1 -a decode` or `node caesar-cipher-cli/caesar_cipher.js --shift 1 --action decode` - decode (used stdin and stdout) 
4. `node caesar-cipher-cli/caesar_cipher -s 1 -a decode` or `node caesar-cipher-cli/caesar_cipher --shift 1 --action decode` - decode (used stdin and stdout)  
5. `node caesar-cipher-cli/caesar_cipher.js -s 1 -a encode -i "./caesar-cipher-cli/input.txt"` or `node caesar-cipher-cli/caesar_cipher.js --shift 1 --action encode --input "./caesar-cipher-cli/input.txt"` - encode (used input.txt and stdout)  
6. `node caesar-cipher-cli/caesar_cipher -s 1 -a encode -i "./caesar-cipher-cli/input.txt"` or `node caesar-cipher-cli/caesar_cipher --shift 1 --action encode --input "./caesar-cipher-cli/input.txt"` - encode (used input.txt and stdout)  
7. `node caesar-cipher-cli/caesar_cipher.js -s 1 -a decode --input "./caesar-cipher-cli/input.txt"` or `node caesar-cipher-cli/caesar_cipher.js --shift 1 --action decode --input "./caesar-cipher-cli/input.txt"` - decode (used input.txt and stdout)  
8. `node caesar-cipher-cli/caesar_cipher -s 1 -a decode --input "./caesar-cipher-cli/input.txt"` or `node caesar-cipher-cli/caesar_cipher --shift 1 --action decode --input "./caesar-cipher-cli/input.txt"` - decode (used input.txt and stdout)  
9. `node caesar-cipher-cli/caesar_cipher.js -s 1 -a encode -i "./caesar-cipher-cli/input.txt" -o "./caesar-cipher-cli/output.txt"` or `node caesar-cipher-cli/caesar_cipher.js --shift 1 --action encode --input "./caesar-cipher-cli/input.txt" --output "./caesar-cipher-cli/output.txt"` - encode (used input.txt and output.txt)  
10. `node caesar-cipher-cli/caesar_cipher -s 1 -a encode -i "./caesar-cipher-cli/input.txt" -o "./caesar-cipher-cli/output.txt"` or `node caesar-cipher-cli/caesar_cipher --shift 1 --action encode --input "./caesar-cipher-cli/input.txt" --output "./caesar-cipher-cli/output.txt"` - encode (used input.txt and output.txt)  
11. `node caesar-cipher-cli/caesar_cipher.js -s 1 -a decode -i "./caesar-cipher-cli/input.txt" -o "./caesar-cipher-cli/output.txt"` or `node caesar-cipher-cli/caesar_cipher.js --shift 1 --action decode --input "./caesar-cipher-cli/input.txt" --output "./caesar-cipher-cli/output.txt"` - decode (used input.txt and output.txt)  
12. `node caesar-cipher-cli/caesar_cipher -s 1 -a decode -i "./caesar-cipher-cli/input.txt" -o "./caesar-cipher-cli/output.txt"` or `node caesar-cipher-cli/caesar_cipher --shift 1 --action decode --input "./caesar-cipher-cli/input.txt" --output "./caesar-cipher-cli/output.txt"` - decode (used input.txt and output.txt)  

## Cross-check  
Каждый пункт **10 баллов**, частичная реализация пункта **5 баллов**.  
Каждый коммит после дедлайна (за исключением коммитов в README.md) **минус 10 баллов**  

- [x] в корне репозитория создана папка с произвольным названием (например caesar-cipher-cli, task1 и т.п.), в которой расположены файлы с кодом программы  
- [x] в README.md должно быть описано, как можно запустить программу из командной строки, описаны аргументы, которые можно передать приложению
3. если переданы все аргументы, приложение читает из файла и записывает в файл зашифрованный/расшифрованный текст, при этом предыдущие записи не удаляются
4. если не переданы обязательные аргументы, приложение передает соответствующее сообщение в process.stderr и прoцесс завершается с кодом, отличным от 0
5. если переданы аргументы с путями к файлам, но файлы отсутствуют (или к ним невозможен доступ), приложение передает соответствующее сообщение в process.stderr и прoцесс завершается с кодом, отличным от 0
6. если не передан аргумент с путем до файла на чтение, то чтение осуществляется из process.stdin
7. если не передан аргумент с путем до файла на запись, то вывод осуществляется в process.stdout
8. шифруются/дешифруются только латинские буквы, регистр сохраняется, остальные символы не изменяются
9. если текст вводится из консоли, то программа не должна завершаться после выполнения шифровки/дешифровки введенного текста, т.е. должна быть возможность ввести еще текст
10. кодовая база не находится в одном файле, а разделена на файлы в соответствии с выполняемыми задачами (например - функция, преобразующая строку, в отдельном файле, код, создающий transform стрим, в отдельном файле, функция для парсинга и валидации аргументов в отдельном файле и т.п.)


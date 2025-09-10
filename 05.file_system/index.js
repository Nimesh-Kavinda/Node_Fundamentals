const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname, 'data');

if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log('Data folder created.');
}

const filePath = path.join(dataFolder, 'example.txt');
// synchonous write
fs.writeFileSync(filePath, 'Hello, this is a sample text file.');
console.log('File written synchronously.');
// Read file synchronously
const readContentFromFile = fs.readFileSync(filePath, 'utf-8');
console.log('File content read synchronously:', readContentFromFile);
// Append to file synchronously
fs.appendFileSync(filePath, '\nAppended text synchronously.');
console.log('File content appended synchronously.');

// Asynchronous operations

const asyncFilePath = path.join(dataFolder, 'asyncExample.txt');

fs.writeFile(asyncFilePath, 'This is an asynchronously written file.', (err) => {
    if (err) throw err;
    console.log('File written asynchronously.');
});

fs.readFile(asyncFilePath, 'utf-8', (err, data) => {
    if (err) throw err;
    console.log('File content read asynchronously:', data);
});

fs.appendFile(asyncFilePath, '\nanother line appended asynchronously.', (err) => {
    if (err) throw err;
    console.log('File content appended asynchronously.');

    fs.readFile(asyncFilePath, 'utf-8', (err, data) => {
        if (err) throw err;
        console.log('Updated file content read asynchronously:', data);
    });
});
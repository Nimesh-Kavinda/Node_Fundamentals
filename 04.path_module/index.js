const path = require('path');

// Directory name

console.log('Directory name:', path.dirname(__filename));

console.log('File name:', path.basename(__filename));

console.log('File extension:', path.extname(__filename));

const joinPath = path.join(__dirname, 'test', 'hello.html');

console.log('Join path:', joinPath);

const normalizePath = path.normalize('///test//hello.html'); // mnormalize this will correct the path

console.log('Normalize path:', normalizePath);
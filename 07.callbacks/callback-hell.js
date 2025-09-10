const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    
    const modifyFileDate = data.toUpperCase();

    fs.writeFile('output.txt', modifyFileDate, (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('File written successfully');

        fs.readFile('output.txt', 'utf8', (err, newData) => {
            if (err) {
                console.error('Error reading new file:', err);
                return;
            }
            console.log('Contents of the new file:', newData);
        });

    });

});

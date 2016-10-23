const fs = require('fs');
const path = require('path');
const indexFile = 'index.txt';

module.exports = function(dir, cb) {
    fs.readdir(dir, (err, files) => {
        const fileToWrite = path.join(dir, indexFile);
        const dataToWrite = files
            .filter(f => !== indexFile)
            .join('\n');
        fs.writeFile(fileToWrite, dataToWrite, (err) => {
            if(err) {
                return cb(err);
            }
            cb();
        });
    });
}
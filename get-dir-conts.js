const fs = require('fs');
const path = require('path');

module.exports = function getAllFileContents(dir, cb) {
    fs.readdir(dir, (err, files) => {
        if (err) {
            return cb(err);
        }

        const results = [];

        const goodFiles = files.filter(f => f !== 'index.txt');
        goodFiles.forEach( /*(*/ f /*, index)*/ => {
            const filePath = path.join(dir, f);
            fs.readFile(filePath, 'utf-8', (err, content) => {
                if(err) return cb(done);
                
                const newLength = results.push(content);

                if(newLength >= goodFiles.length) {
                    cb(null, results);
                }
            });
        });
    });
}
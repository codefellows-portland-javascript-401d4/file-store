const fs = require('fs');
const path = require('path');

module.exports = function getAllFileContents(dir, cb) {
    fs.readdir(dir, (err, files) => {
        if (err) {
            return cb(err);
        }

        // stores the results
        const results = [];

        // const goodFiles = files.filter(f => f !== 'data/');
        // goodFiles.forEach( /*(*/ f /*, index)*/ => {
            files.forEach( /*(*/ f /*, index)*/ => {
            const filePath = path.join(dir, f);
            fs.readFile(filePath, 'utf-8', (err, content) => {
                if(err) {
                     return cb(err);
                }
                
                const newLength = results.push(content);

                // if(newLength >= goodFiles.length) {
                    if(newLength >= files.length) {
                        var sortedResults = results.sort();
                        cb(null, sortedResults);
                }
            });
        });
    });
}
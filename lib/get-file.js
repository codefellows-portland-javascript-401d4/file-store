var fs = require('fs');


function getFile(file, cb) {
    fs.readFile(file, 'utf-8', (err, data) => {
        if (err) return err;
        return JSON.parse(data);
    });
    cb();
}

module.exports = getFile;
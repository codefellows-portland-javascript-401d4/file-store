var fs = require('fs');
const dir = 'data/';

function write (data, cb) {
    fs.writeFile( dir + data.team-name +'.json', JSON.stringify(data), 'utf8', (err) => {
        if(err) {
            return cb(err);
        }
        cb(null, data);
    });
}

module.exports = write;
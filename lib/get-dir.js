var fs = require('fs');

function getDir(path, cb) {
    fs.readdir(path, (err, files) => {
        files.map(f => {
            fs.readFile(path + f, 'utf-8', (err, data) => {
                return JSON.parse(data)               
            })
        })
    }); 
    cb();   
 }
module.exports = getDir;
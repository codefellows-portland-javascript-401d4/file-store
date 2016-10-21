var fs = require('fs');
var path = require('path');
var index = 'index.txt';

function indexDir(dir, cb) {
    

    fs.readdir(dir, 'utf8', function (err, files) {
        if (err) return cb(err);
        var file = path.join(dir, index);
        var data = files.filter(f => {if(f !== index){return f;}}).join('\n');

        fs.writeFile(file, data, err => {
            if (err) {return cb(err);}
            cb();
        });
    });
    
}

module.exports = indexDir;

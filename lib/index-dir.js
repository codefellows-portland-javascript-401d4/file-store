var fs = require('fs');
var path = require('path');
var fs = require('fs');
var index = 'index.txt';
// var dirPath = 'tree-dir/'

function indexDir(dir, cb) {
    

    fs.readdir(dir, 'utf8', function (err, files) {
        if (err) return cb(err);
        var file = path.join(dir, index);
        var data = files.filter(f => {if(f !== index){return f}}).join('\n');

        fs.writeFile(file, data, err => {
            if (err) {return cb(err)}
            cb();
        })
    })
    
}

// indexDir(path, console.log('Done!'));

module.exports = indexDir;
// module.exports.sayHi = sayHi;
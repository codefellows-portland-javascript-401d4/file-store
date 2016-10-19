var fs = require('fs');
var path = require('path');
var fs = require('fs');

function indexDir(path, cb) {
    console.log(path);
    cb();
}

module.exports = indexDir;
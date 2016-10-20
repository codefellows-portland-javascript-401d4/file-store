var fs = require('fs');
var path = require('path');

module.exports = function createFile(dir, obj, cb) {
  fs.mkdir(dir, (err) => {
    if (err) return cb(err);
    var fileToWrite = JSON.stringify(obj);
    var fileName = obj.name + '.json';
    fs.writeFile(path.join(dir,fileName), fileToWrite, (err) => {
       if (err) return cb(err);
    cb();
     });
  });
};
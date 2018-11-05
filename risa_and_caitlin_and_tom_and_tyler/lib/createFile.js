const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');

module.exports = function createFile(dir, obj, cb) {
  mkdirp(dir, (err) => {
    if (err) return cb(err);
    var fileToWrite = JSON.stringify(obj);
    var fileName = obj.id + '.json';
    fs.writeFile(path.join(dir,fileName), fileToWrite, (err) => {
      if (err) return cb(err);
      console.log('File name: ', fileName);
      cb();
    });
  });
};
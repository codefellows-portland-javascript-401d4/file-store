var fs = require('fs');
var path = require('path');
var readContents = require('./readContents');

module.exports = function readContents(dir, cb) {
  var fileArray = [];
  fs.readdir(dir, (err, files) => {
    const results = [];
    fileArray.push(files);
    if (err) return cb(err);
    files.forEach(file => {
      var filePath = path.join(dir, file);
      fs.readFile(filePath, 'utf-8', (err, content) => {
        if (err) return cb(done);
        results.push(content);
        if (files.length === results.length) {
          console.log('rezultz', results);
          results.sort();
          cb(null, results);
        };
      });
    });
  });
};
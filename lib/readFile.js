const fs = require('fs');
const path = require('path');
const readContents = require('./readContents');

module.exports = function readFile(dir, cb) {
  var fileArray = [];
  fs.readdir(dir, (err, files) => {
    const results = [];
    fileArray.push(files);
    if (err) return cb(err);
    console.log('filez',fileArray);
    cb(null, fileArray);
  });
};

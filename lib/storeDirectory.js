var mkdirp = require('mkdirp');
var rimraf = require('rimraf');
var storeDir = {};

storeDir.makeDir = function(cb) {
  mkdirp('./store', function(err) {
    if(err) return console.log(err);
    else console.log('we made a folder');
    cb();
  });
};


storeDir.deleteDir = function(cb) {
  rimraf('./store', function (err) {
    if (err) return console.log(err);
    else console.log('We deleted a folder!');
    cb();
  });
};

module.exports = storeDir;
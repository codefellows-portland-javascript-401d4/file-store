const fs = require('fs');
const path = require('path');
const filestore = {};

filestore.dir = undefined;

filestore.setDir = function(dirname) {
  filestore.dir = dirname;
};

filestore.store = function(id, obj, cb) {
  let file = path.join(filestore.dir, id + '.json');
  console.log('Storing to file: ' + file);
  fs.writeFile(file, JSON.stringify(obj), function(err) {
    if (err) {
      throw(err);
    }
    else {
      cb(null, id);    
    }
  });
};

filestore.get = function(id, cb) {
  fs.readFile(path.join(filestore.dir, id + '.json'), function(err, data) {
    if (err) return cb(err);
    let obj = JSON.parse(data);
    return cb(null, obj);
  });
};

filestore.getCollection = function(idArr, callback) {
  //iterate through idArr and call filestore.get against each val
  let retArr = [];
  idArr.forEach(function(val, idx, arr) {
    filestore.get(val, function(err, obj) {
      if(err) {
        callback(err);
      }
      retArr[idx] = obj;
      if(arr.length === retArr.length && !retArr.some(function(item) {
        typeof(item) === 'undefined' || item == null || item == '';
      })) {
        console.log(retArr);
        callback(null, retArr);
      }
    });
  });
};

module.exports = filestore;
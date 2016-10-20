const fs = require('fs');
const path = require('path');
const filestore = {};
const myDir = '../data'; 

filestore.dir = '~';

filestore.setDir = function(dirname) {
  filestore.dir = dirname;
};

filestore.store = function(id, obj) {
  fs.writeFileSync(path.join(myDir, id + '.json'), JSON.stringify(obj));
  return id;
};

filestore.get = function(id) {
  let jsonStr = fs.readFileSync(path.join(myDir, id + '.json'));
  return JSON.parse(jsonStr);
};

filestore.getAll = function() {

};

module.exports = filestore;
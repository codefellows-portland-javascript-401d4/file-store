const fs = require('fs');
const path = require('path');
const filestore = {};
const myDir = '../data'; 

filestore.store = function(obj) {
  let fileName = obj.title.replace(/\s+/g, '_');
  fs.writeFileSync(path.join(myDir, fileName + '.json'), JSON.stringify(obj));
  return fileName; // TODO: return id
};

filestore.get = function(id) {
  let jsonStr = fs.readFileSync(path.join(myDir, id + '.json'));
  return JSON.parse(jsonStr);
};

module.exports = filestore;
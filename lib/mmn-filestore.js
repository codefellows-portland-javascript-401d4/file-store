const fs = require('fs');
const path = require('path');
const filestore = {};
const myDir = '../data'; 

filestore.store = function(obj) {
  fs.writeFileSync(path.join(myDir, 'test.json'), JSON.stringify(obj));
  return 'test'; // TODO: return id
};

filestore.get = function(id) {
  let jsonStr = fs.readFileSync(path.join(myDir, id + '.json'));
  return JSON.parse(jsonStr);
};

module.exports = filestore;
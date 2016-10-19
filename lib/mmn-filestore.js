const fs = require('fs');
const filestore = {};

filestore.store = function(obj) {
  fs.writeFileSync('test.json', JSON.stringify(obj));
  return 'test'; // TODO: return id
};

filestore.get = function(id) {
  let jsonStr = fs.readFileSync(id + '.json');
  return JSON.parse(jsonStr);
};

module.exports = filestore;
const fs = require('fs');
const path = require('path');

module.exports = function readFile(dir, cb) {
  fs.readdir(dir, (err, files) => {
    if (err) return cb(err);
    const results = [];
    files.forEach(f => {
      const filePath = path.join(dir, f);
      fs.readFile(filePath, 'utf-8', (err, content) => {
        if (err) return cb(done);
        results.push(content);
        cb(null, results);
      });
    });
  })
};
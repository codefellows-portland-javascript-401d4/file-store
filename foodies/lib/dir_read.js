const fs = require('fs');
const path = require('path');

// const dir = '../data/';

//retrieves stored .json files and sorts; based on get-dir-contents.js lecture example
function getData(dir, callback) {

  fs.readdir(dir, (err, files) => {
    if (err) return callback(err);

    const results = [];

    //uggh, regex
    files.forEach( /*(*/ f /*, index)*/ => {
      const filePath = path.join(dir, f);
      fs.readFile(filePath, 'utf-8', (err, content) => {
        if (err) return callback(err);

        //this provides an endpoint for the process by comparing lengths of stored data via retrieved data
        const newLength = results.push(content);

        if(newLength >= files.length) {
          console.log('Unsorted ' + results);
          var sortResults = results.sort();
          console.log('Sorted ' + sortResults);
          callback(null, sortResults);
        }
      });
    });


  });
}

module.exports = getData;

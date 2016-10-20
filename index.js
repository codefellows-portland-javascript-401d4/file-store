const fs = require('fs');
const path = require('path');


function store(data, identifier, cb) {
  var filename, filepath;

  switch (typeof data) {
    case 'number':
      filename = data.toString() + '.json';
      filepath = path.join('data', filename);
      break;
    case 'string':
      if (data.length > 255) {
        data = data.slice(0,50);    // arbitrary slicing
      }
      filename = data.replace(/ /g,'_') + '.json';
      filepath = path.join('data', filename);
      break;
    case 'object':
      for (var key in data) {
        if (key == 0) {   // I'm an array! non strict, because the loop coerces numbers into strings
          filename = data[0].toString() + '.json';
          filepath = path.join('data', filename);
          break;
        } else if (data[identifier] && typeof data[identifier] != 'function') {    // If the identifier is in the object
          filename = data[identifier].toString().replace(/ /g, '_') + '.json';
          filepath = path.join('data', filename);
          break;
        } else {    // The identifier isn't valid, throw an error
          cb('Error, unknown identifier or value is a function. Please select another identifier.');
          break;
        }
      }
      break;
  } // end switch

  var stringData = JSON.stringify(data);
  console.log(stringData);

  fs.writeFile(filepath, stringData, function(err){
    if (err) {
      console.log('you got a write error: ', err);
      cb(err);
    } else {
      cb();
    }
  });
}

function get(filename, cb) {

  fs.readFile(filename, 'utf8', function (err, filedata) {
    if (err) {    // if you get an error, pass it to the callback to handle
      console.log('you got a read error: ', err);
      cb(err)
    } else {    // pass the data back to whoever asked for it
      var jsondata = JSON.parse(filedata);
      cb(jsondata);
    }
  });
}

function getAll(dir, cb) {

  fs.readdir(dir, function (err, files) {
    if (err) {    // if you get an error, pass it to the callback to handle
      console.log('you got a real directory error: ', err);
      cb(err)
    } else {    // pass the data back to whoever asked for it
      cb(files);
    }
  });
}

// function callback(response) {
//   console.log('callback passed: ', response);
// }
// store({'a':12,'b':234},'a', callback);

module.exports.store = store;
module.exports.get = get;
module.exports.getAll = getAll;

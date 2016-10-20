const fs = require('fs');
const path = require('path');


function store(data, cb) {

  var stringData = JSON.stringify(data);
  var filename = data.City.replace(/ /g,'_') + '.json';
  var filepath = path.join('data', filename);
  fs.writeFile(filepath, stringData, function(err){
    if (err) {
      console.log('you got an error: ', err);
      cb(err);
    } else {
      console.log('index.js has no errors!');
      cb();
    }
  });
}

function getAll(dir, cb) {

  fs.readdir(dir, function (err, files) {
    if (err) {    // if you get an error, pass it to the callback to handle
      cb(err)
    } else {    // pass the data back to whoever asked for it
      console.log(files);
      cb(files);
    }
  });
}

function get(dir, cb) {

  fs.readdir(dir, function (err, files) {
    if (err) {    // if you get an error, pass it to the callback to handle
      cb(err)
    } else {    // pass the data back to whoever asked for it
      console.log(files);
      cb(files);
    }
  });
}

function ohhai() {
  console.log('im a callback');
}
//
// var city = {'City':'New York','State':'NY','Median_1_BR_price':'$3,370','Median_2_BR_price':'$4,820'};
// store(city, ohhai);

// getAll('/data', ohhai);

module.exports.store = store;
module.exports.getAll = getAll;
module.exports.get = get;
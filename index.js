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

function get(filename, cb) {

  fs.readFile(filename, 'utf8', function (err, filedata) {
    if (err) {    // if you get an error, pass it to the callback to handle
      cb(err)
    } else {    // pass the data back to whoever asked for it
      var jsondata = JSON.parse(filedata);
      cb(filedata);
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

function ohhai(results) {
  console.log('callback called with: ', results);
}
//
// var city = {'City':'New York','State':'NY','Median_1_BR_price':'$3,370','Median_2_BR_price':'$4,820'};
// store(city, ohhai);

get('data/Boston.txt', ohhai);

module.exports.store = store;
module.exports.get = get;
module.exports.getAll = getAll;

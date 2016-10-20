const fs = require('fs');
const path = require('path');
var get = {};

//this function will find the data in the elements folder, un-jsonify the data, and group it into an object
get.findFile = function(name){
  var path = '../data/elements/' + name + '.json';
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) throw err;
    obj = JSON.parse(data);
    console.log(obj);
  });
};

get.findAllFiles = function(name){
  var path = '../data/' + name;
  fs.readdir(path, 'utf-8', function(err, filenames) {
    if (err) {
      onError(err);
      return;
    }
    console.log(filenames);
  });
};

get.findFile('Hydrogen');
get.findAllFiles('elements');

module.exports=get;

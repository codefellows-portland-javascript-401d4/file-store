const fs = require('fs');
var get = {};
get.sortedReturnedArray = [];

//this function will find an individual file in the elements folder
get.findFile = function(name){
  var path = '../data/elements/' + name + '.json';
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) throw err;
    var obj = JSON.parse(data);
    return obj;
  });
};

//this function will find multiple files in the elements folder
get.findMultipleFiles = function(nameArray, cb){
  console.log(nameArray);
  var elementsArr =[];
  nameArray.forEach(function(elementName) {
    var path = './data/elements/' + elementName + '.json';
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) throw err;
      elementsArr.push(JSON.parse(data));
      if (elementsArr.length === nameArray.length){
        var sortedElements = elementsArr.sort(function(a,b){
          return a.number - b.number;
        });
        cb(sortedElements);
        return sortedElements;
      }
    });
  });
};


//this function finds all the files in the elements folder
get.findAllFiles = function(name){
  var path = '../data/' + name;
  fs.readdir(path, 'utf-8', function(err, filenames) {
    if (err) {
      console.log(err);
      return filenames;
    }
    return;
  });
};

//this function will find the data in the elements folder by filename, un-jsonify the data, and group it into an object
get.mergeAllFiles = function(directoryName, cb){
  var arr = [];
  var path = './data/' + directoryName;
  fs.readdir(path, 'utf-8', function(err, filenames) {
    if (err) {
      console.log(err);
      return;
    }

    filenames.forEach(function(fileName){
      var filePath = './data/'+ directoryName +'/'+ fileName;
      fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) throw err;
        arr.push(JSON.parse(data));
        if (arr.length === filenames.length) {
          var sortedArr = arr.sort (function(a,b) {
            return a.number - b.number;
          });
          cb(sortedArr);
        }
      });
    });
  });
};

module.exports = get;
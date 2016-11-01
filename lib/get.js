const fs = require('fs');
var get = {};

//this function will find multiple files in the elements folder
get.findFiles = function(nameArray, cb){
  var elementsArr =[];
  nameArray.forEach(function(elementName)
    {
    var path = './data/elements/' + elementName + '.json';
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) throw err;
      elementsArr.push(JSON.parse(data));
      if (elementsArr.length === nameArray.length)
        {
        var sortedElements = elementsArr.sort(function(a,b){
          return a.number - b.number;
        });
        console.log(sortedElements);
        cb(sortedElements);
        // return sortedElements;
      }
    });
    
  });
};
//this function finds all the files in the elements folder
get.findAllFiles = function(directoryName, cb){
  var path = './data/' + directoryName;
  fs.readdir(path, 'utf-8', function(err, filenames) {
    if (err) {
      console.log(err);
    }
    console.log(filenames);
    cb(filenames);
  });
};
//this function will find the data in the elements folder by filename, un-jsonify the data, and group it into an object
get.mergeAllFiles = function(directory, cb){
  var arr = [];
  var path = './data/' + directory;
  fs.readdir(path, 'utf-8', function(err, filenames) {
    if (err) {
      console.log('error is ', err);
    }
    filenames.forEach(function(fileName){
      var filePath = './data/'+ directory +'/'+ fileName;
      fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) throw err;
        arr.push(JSON.parse(data));
        if (arr.length === filenames.length) {
          sortedArr = arr.sort (function(a,b){
            return a.number - b.number;
          });
          console.log(sortedArr);
          cb(sortedArr); 
        } 
      });
    });
  });
};
module.exports=get;

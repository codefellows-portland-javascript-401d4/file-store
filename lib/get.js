const fs = require('fs');
var get = {};
// this function will find an individual file in the elements folder
get.findFile = function(elementName){
  var path = './data/elements/' + elementName + '.json';
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(JSON.parse(data));
    return JSON.parse(data);
  });
};
//this function will find multiple files in the elements folder
get.findMultipleFiles = function(nameArray, cb){
  console.log(nameArray);
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
        return sortedElements;
      }
    });
    
  });
};
//this function finds all the files in the elements folder
get.findAllFiles = function(name){
  var path = './data/' + name;
  fs.readdir(path, 'utf-8', function(err, filenames) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(filenames);
    return filenames;
  });
};
//this function will find the data in the elements folder by filename, un-jsonify the data, and group it into an object
get.mergeAllFiles = function(directory, cb){
  var arr = [];
  var path = './data/' + directory;
  fs.readdir(path, 'utf-8', function(err, filenames) {
    if (err) {
      console.log('error is ', err);
      return;
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

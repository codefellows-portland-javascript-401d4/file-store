const fs = require('fs');
const rimraf = require('rimraf');

const scrap ={};
//deletes a directory
scrap.scrapFiles = function(directoryName, cb){
  var arr = (__dirname).split('/');
  arr.pop();
  var directoryPath = arr.join('/');
  directoryPath += '/data/' + directoryName;
  console.log('path is ', directoryPath);
  rimraf( directoryPath, function(){
    console.log('Directory '+ directoryName + ' deleted.');
    cb();
  });
};

// scrap.scrapTest = function(directoryName, cb){
//   var arr = (__dirname).split('/');
//   arr.pop();
//   var directoryPath = arr.join('/');
//   directoryPath += '/data/' + directoryName;
//   console.log('path is ', directoryPath);
//   rimraf( directoryPath, function(){});
//   console.log('Directory '+ directoryPath + ' deleted.');
//   cb();
// };

module.exports=scrap;
const fs = require('fs');
const rimraf = require('rimraf');

const scrap ={};
//deletes a directory
scrap.scrapFiles = function(directoryName, cb){
  var arr = (__dirname).split('/');
  arr.pop();
  var directoryPath = arr.join('/');
  directoryPath += '/data/' + directoryName;
  rimraf( directoryPath, function(){
    cb();
  });
};

module.exports=scrap;
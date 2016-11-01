const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
var store = {};
//this function will create a directory, take in an object or array, and save each object as json within as a file.
store.saveFile = function(obj, name, cb) {
  var dir = (__dirname).slice(0, -4) + '/data/' + name;
  
  //mkelement directory
  mkdirp(dir, function (err) {
    if (err) console.error(err);
  });
  //iterate over array(object) use its name property as the filename and json-ify its contents.
  obj.forEach(function(x) {
    var fileName = x.name + '.json';
    var fileData = JSON.stringify(x);
    // use path to put an index.txt file in the dir
    const createFilePath = path.join(dir, fileName);
    //save each object to disk as a separate file    
    fs.writeFile(createFilePath, fileData, (err) => {
      if (err) console.log(err);
    });
  });
  cb();
};
module.exports=store;












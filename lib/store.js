const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
var store = {};

//this function will create a directory, take in an object or array, and save each object as json within as a file.
store.saveFile = function(obj, name) {
  var dir = (__dirname).slice(0, -4) + '/data/' + name;
  
  //mkelement directory
  mkdirp(dir, function (err) {
    if (err) console.error(err);
    else console.log('pow!');
  });

  //iterate over array(object)
  obj.forEach(function(x) {
    var fileName = x.name + '.json';
    var fileData = JSON.stringify(x);
    console.log(fileName);
    console.log(fileData);

    // use path to put an index.txt file in the dir
    const createFilePath = path.join(dir, fileName);
    console.log(createFilePath);

    
    //json serialization to data?
    // const dataToWrite = files
    //         .filter(f => f !== indexFile)
    //         .join('\n');

    //save each object to disk as a separate file    
    fs.writeFile(createFilePath, fileData, (err) => {
      if (err) throw err; //cb(err);
      console.log('gassy day!!!!!!');
      //cb();
    });
  });
};

module.exports=store;











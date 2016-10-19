const mkdirp = require('mkdirp');
var store ={};
//this function will create a directory, take in an object or array, and save each object as json within as a file.
store.saveFile = function(obj, name)
{
  var dir = '../data/'+name;
  console.log(dir);
  mkdirp(dir, function (err) {
    if (err) console.error(err);
    else console.log('pow!');
  });
};
module.exports=store;











const fs = require('fs');
const path = require('path');


function store(data, cb) {

  var stringData = JSON.stringify(data);
  var filename = data.City.replace(/ /g,'_') + '.json';
  var filepath = path.join('data', filename);
  fs.writeFile(filepath, stringData, function(err){
    if (err) {
      console.log('you got a write error: ', err);
      cb(err);
    } else {
      cb();
    }
  });
}

function get(filename, cb) {

  fs.readFile(filename, 'utf8', function (err, filedata) {
    if (err) {    // if you get an error, pass it to the callback to handle
      console.log('you got a read error: ', err);
      cb(err)
    } else {    // pass the data back to whoever asked for it
      var jsondata = JSON.parse(filedata);
      cb(jsondata);
    }
  });
}

function getAll(dir, cb) {

  fs.readdir(dir, function (err, files) {
    if (err) {    // if you get an error, pass it to the callback to handle
      console.log('you got a real directory error: ', err);
      cb(err)
    } else {    // pass the data back to whoever asked for it
      cb(files);
    }
  });
}



module.exports.store = store;
module.exports.get = get;
module.exports.getAll = getAll;

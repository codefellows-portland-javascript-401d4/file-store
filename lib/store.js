var fs = require('fs');
var path = require('path');
var catPath = '../cats';

function storeObject(object, dirpath, cb) {
    var jSonObject = JSON.stringify(object);
    var id = object.id;
    fs.readdir(dirpath, (err, files) => {
        if (err) return;
        var files = files.map(function(files){
            return files.split('.')[0];
        });
        if (files.indexOf(id) !== -1) {
            console.log('this object exists already and has an id of ' + object.id);
            cb();
            return 'this object exists already and has an id of ' + object.id;
        } else {
            var fileToWrite = path.join(dirpath, '/', id + '.json');
            console.log(fileToWrite);
            fs.writeFile(fileToWrite, jSonObject, (err) => {
                if (cb) cb();
            });
        };
    });
};

function retrieveObject(object) {
    fs.readFile('../cats/foo','utf-8', (err, data) =>{
        if (err) return;
        var data = data;
        console.log(data);
    });
};

module.exports = {
    store: storeObject,
    retrieve: retrieveObject
};
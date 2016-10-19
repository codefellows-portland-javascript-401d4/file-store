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

function retrieveObject(id, dirpath, cb) {
    console.log('the initial directory is ', dirpath);
    fs.readdir(dirpath, (err, files) => {
        if (err) return cb(err);
        var rawFiles = files;
        var fileNames = files.map(function(files) {
            return files.split('.')[0];
        });
        if (fileNames.indexOf(id) === -1) {
            cb('file does not exist in folder');
        } else {
            var fileToRead = dirpath + '/' + id + '.json';
            console.log('the file to read is ', fileToRead);
            fs.readFile(fileToRead, 'utf-8', (err, data) => {
                console.log('this should be the error ', err);
                if (err) return cb(err);
                console.log('this is data ', data);
                var jSonData = JSON.parse(data);
                cb();
            });
        };
    });
};

module.exports = {
    store: storeObject,
    retrieve: retrieveObject
};
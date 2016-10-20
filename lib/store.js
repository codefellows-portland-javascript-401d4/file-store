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
            cb('this object exists already and has an id of ' + object.id, id);
        } else {
            var fileToWrite = path.join(dirpath, '/', id + '.json');
            fs.writeFile(fileToWrite, jSonObject, (err) => {
                if (err) cb(err);
                cb(null, id);
            });
        };
    });
};

function retrieveObject(id, dirpath, cb) {
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
            fs.readFile(fileToRead, 'utf-8', (err, data) => {
                if (err) return cb(err);
                var jSonData = JSON.parse(data);
                cb(null, jSonData, rawFiles);
            });
        };
    });
};

module.exports = {
    store: storeObject,
    retrieve: retrieveObject
};
var fs = require('fs');
var path = require('path');
var catPath = '../cats';

function storeObject(object, dirpath, cb) {
    var jSonObject = JSON.stringify(object);
    var id = object.id;
    fs.readdir(dirpath, 'utf-8', (err, files) => {
        if (err) return cb(err);
        // console.log('read dir got', files);
        var fileNames = files.map(function(filesObjects){
            return filesObjects.split('.')[0];
        });
        // console.log('what\'s in the dir?', files);
        if (fileNames.indexOf(id) !== -1) {
            cb('this object exists already and has an id of ' + object.id, id, fileNames);
        } else {
            var fileToWrite = path.join(dirpath, '/', id + '.json');
            fs.writeFile(fileToWrite, jSonObject, (err) => {
                if (err) cb(err);
                cb(null, id, fileNames);
            });
        };
    });
};

function retrieveObject(id, dirpath, cb) {
    fs.readdir(dirpath, (err, files) => {
        if (err) return cb(err);
        var rawFiles = files;
        var fileNames = files.map(function(filesObject) {
            return filesObject.split('.')[0];
        });
        // console.log('the fileNames is', fileNames);
        // retrieve all resources
        if (fileNames.indexOf(id) === -1) {
            cb('file does not exist in folder');
        } else {
            var fileToRead = dirpath + '/' + id + '.json';
            fs.readFile(fileToRead, 'utf-8', (err, data) => {
                if (err) return cb(err);
                var jSonData = JSON.parse(data);
                var allResourcesArray = [];
                rawFiles.forEach(function(resource) {
                    fs.readFile(dirpath + '/' + resource, 'utf-8', (err, newdata) => {
                        allResourcesArray.push(JSON.parse(newdata));
                        if (allResourcesArray.length === rawFiles.length) {
                            allResourcesArray = allResourcesArray.sort(function(first, second) {
                                if (first.id < second.id) {
                                    return first;
                                } else {
                                    return second;
                                };
                            });
                            cb(err, jSonData, allResourcesArray);
                        };
                    });
                });
            });
        };
    });
};

module.exports = {
    store: storeObject,
    retrieve: retrieveObject
};
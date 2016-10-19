var fs = require('fs');
var catPath = '../cats';

function storeObject(animalPath) {
    fs.readdir(animalPath, function(err, files){
        if (err) return;
        var files = files;
    });
};

function retrieveObject(object) {
    
};

module.exports = {
    store: storeObject,
    retrieve: retrieveObject
};
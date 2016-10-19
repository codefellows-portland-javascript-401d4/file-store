var fs = require('fs');
var catPath = '../cats';

function storeObject(catPath) {
    fs.readdir(catPath, (err, files) => {
        if (err) return;
        var files = files;
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
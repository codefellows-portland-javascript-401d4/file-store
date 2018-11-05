
const mkdir = require('mkdirp');
const fs = require('fs');
const location = './data/';

const mainCharacter = {};

// store data in a file, return an id for later retrieval
mainCharacter.storeMC = function(data, callback) {
    // make a directory called data to store the file in
    mkdir(location, function(err) {
        if (err) throw err;
        // grab a name to use to identify the file/data/id
        let theFileId = '', theFullFileName = '';
        if (data.name) {
            theFileId = data.name.toLowerCase().replace(' ','_');
        }
        theFullFileName = location + theFileId + '.json';
        // stringify the data
        const dataFile = JSON.stringify(data);
        // store the file 
        fs.writeFile(theFullFileName, dataFile, (err) => {
            if (err) throw err;
            // console.log(fileName);
            callback(null, theFileId);
        });
    });
};

// retrieve a file using a supplied id
mainCharacter.getMC = function(data, callback) {
    // use the supplied name to identify the file
    const theFullFileName = location + data + '.json';
    // store the file 
    fs.readFile(theFullFileName, (err, data) => {
        if (err) throw err;
        var results = JSON.parse(data);
        callback(null, results);
    });
};

//retrieve the stored filenames and sort alphabetically
mainCharacter.getAllSortedMC = function(callback) {
    fs.readdir(location, (err, files) => {
        if (err) throw(err);
        const results = []; 
        // we need to wait here for all files to be there.
        var newFileNames = files.map((file) => {
            return file.split('.')[0];
        });

        // now get each object out of storage and return it.
        newFileNames.forEach((file) => {
            mainCharacter.getMC(file, (err, data) => {
                if (err) throw (err);
                results.push(data);
                if (results.length >= newFileNames.length){
                    results.sort((a,b) => {
                        if (a.name < b.name) return -1;
                        if (a.name > b.name) return 1;
                        return 0;
                    });
                    callback(null, results);
                }
            });
        });
    });
};

module.exports = mainCharacter;

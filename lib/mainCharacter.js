
const mkdir = require('mkdirp');
const fs = require('fs');
const location = './data/';

const mainCharacter = {};

// store data in a file, return an id for later retrieval
mainCharacter.storeMC = function(data, callback) {
    // make a directory called data to store the file in
    mkdir(location, function(err) {
        if (err) console.log(err);
    })
    // grab a name to use to identify the file/data/id
    var theFileId = '', theFullFileName = '';
    if (data.name) {
        theFileId = data.name.toLowerCase().replace(' ','_');
    };
    theFullFileName = location + theFileId + '.json';
    // stringify the data
    const dataFile = JSON.stringify(data);
    // store the file 
    fs.writeFile(theFullFileName, dataFile, (err) => {
        if (err) throw err;
        // console.log(fileName);
        callback(null, theFileId);
    })
}

// retrieve a file using a supplied id
mainCharacter.getMC = function(data, callback) {
    // use the supplied name to identify the file
    theFullFileName = location + data + '.json';
    // store the file 
    fs.readFile(theFullFileName, (err, data) => {
        if (err) throw err;
        var results = JSON.parse(data);
        callback(null, results);
    })
};

//retrieve the store and sort alphabetically
mainCharacter.getAllSortedMC = function(data, callback) {

}

module.exports = mainCharacter;

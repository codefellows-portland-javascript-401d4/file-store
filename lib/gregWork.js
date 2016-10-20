var fs = require('fs');
const path = require('path');

const testData1 = {
  team: 'Athletics',
  city: 'Oakland',  
  league: 'American'
};

const testData2 = {
  team: 'Cubs',
  city: 'Chicago',  
  league: 'National'
};

const testData3 = {
  team: 'White Sox',
  city: 'Chicago',  
  league: 'American'
};

const dir = 'data/';

function write (data, callback) {

  fs.writeFile( dir + data.team +'.json', JSON.stringify( data ), 'utf8', (err) => {
    if (err) return callback(err);
    console.log(data);
    callback(null, data);
  });
}
 
function read (data, callback) {

  fs.readFile(dir + data.team + '.json', 'utf8', function(err, data){
    if (err) return callback(err);
    console.log(data);
    callback(null, data);
  });
}

function getAllFileContents (dir, callback) {
    
  fs.readdir(dir, (err, files) => {
    if (err) return callback(err);

    const results = [];
        
        // files is an array of file names within the dir
        // don't include "index.txt"
    const goodFiles = files.filter(f => f !== 'index.txt');
    goodFiles.forEach( /*(*/ f /*, index)*/ => {
            // get full path
        const filePath = path.join(dir, f);
            //read this file:
        fs.readFile(filePath, 'utf-8', (err, content) => {
            if (err) return callback(done);

            const newLength = results.push(content);

            if(newLength >= goodFiles.length) {
                callback(null, results);
              }
          });
      });
        
  });
}



write(testData2, function (){console.log('write ended');});
read(testData2, function (){console.log('read ended');});
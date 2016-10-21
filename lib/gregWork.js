var fs = require('fs');
const path = require('path');

const testData1 = {
  team: 'Pirates',
  city: 'Pittsburgh',
  league: 'National'
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


// function readDir (path, callback) {

//   fs.readdir(path, function(err, items) {
//     for (var i=0; i<items.length; i++) {
//       var file = path + '/' + items[i];

//       console.log('Start: ' + file);
//       fs.stat(file, function(f) {
//         return function(err, stats) {
//         console.log(f);
//         console.log(stats['size']);
//       };
//       }(file));
//     }
//   });
// }

function getData(dir, callback) {


  fs.readdir(dir, (err, files) => {
    if (err) return callback(err);

    const results = [];

    files.forEach( /*(*/ f /*, index)*/ => {
					// get full path
      const filePath = path.join(dir, f);
					//read this file:
      fs.readFile(filePath, 'utf-8', (err, content) => {
        if (err) return callback(done);

        //this provides an endpoint for the process by comparing lengths of stored data via retrieved data
				const newLength = results.push(content);

        if(newLength >= files.length) {
					console.log(results);
					sortResults = results.sort();
					console.log(sortResults);
					callback(null, results);
      }
      });
    });


  });
}




write(testData1, function (){console.log('write data ended');});
read(testData1, function (){console.log('read data ended');});
// readDir (dir, function (){console.log('read directory ended');});
getData (dir, function (){console.log('read directory ended');});

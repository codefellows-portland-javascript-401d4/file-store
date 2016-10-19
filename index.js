fs = require('fs');


function writeToFile(filename, data) {

  fs.writeFile(filename, data, function(err){
    if (err) {
      console.log('you got an error: ', err);
    } else {
      console.log('no errors!');
    }
  });
}

writeToFile('test.txt', 'hello world!');
const fs = require('fs');
const path = require('path');


function writeToFile(data, cb) {

  var stringData = JSON.stringify(data);
  var filename = data.City.replace(/ /g,'_') + '.txt';
  var filepath = path.join('data', filename);
  fs.writeFile(filepath, stringData, function(err){
    if (err) {
      console.log('you got an error: ', err);
      cb(err);
    } else {
      console.log('index.js has no errors!');
      cb();
    }
  });
}

// function ohhai() {
//   console.log('im a callback');
// }
//
// var city = {'City':'New York','State':'NY','Median_1_BR_price':'$3,370','Median_2_BR_price':'$4,820'};
// writeToFile(city, ohhai);

module.exports = writeToFile;
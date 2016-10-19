fs = require('fs');


function writeToFile(data) {

  var stringData = JSON.stringify(data);
  var filename = data.City.replace(/ /g,'_') + '.txt';
  fs.writeFile(filename, stringData, function(err){
    if (err) {
      console.log('you got an error: ', err);
    } else {
      console.log('no errors!');
    }
  });
}


var city = {'City':'New York','State':'NY','Median_1_BR_price':'$3,370','Median_2_BR_price':'$4,820'};
writeToFile(city);
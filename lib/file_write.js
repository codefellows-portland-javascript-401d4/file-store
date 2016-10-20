var fs = require('fs');


const testData2 = {
  team: 'Cubs',
  city: 'Chicago',
  league: 'National'
};

const dir = '../data/';

function write (data, callback) {

  fs.writeFile( dir + data.team +'.json', JSON.stringify( data ), 'utf8', (err) => {
    if (err) return callback(err);
    console.log(data);
    callback(null, data);
  });
}

module.exports = write;

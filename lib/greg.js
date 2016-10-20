var fs = require('fs');

module.exports = function greg(data, callback) {

  fs.exists('data/testData.json', (exists) => {
    if (exists) {
      console.log('Already stored!');
    } else {
      fs.writeFile( 'data/testData.json', JSON.stringify( data ), 'utf8', (err, data) => {
        if (err) throw err;
        callback(null, data);
      });
    }
  });
    
}; 
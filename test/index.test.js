const assert = require('assert');
const fs = require('fs');
const path = require('path');
const writeToFile = require('../index');


describe('index', function() {

  beforeEach(function() {
    var filepath = path.join('data', '');
    // remove the directory, because node can't delete files itself without a helper
    fs.rmdir(filepath, function() {
      // make the directory again, so the files can go somewhere
      fs.mkdir(filepath, function() {
        console.log('i removed and added the same dir!');
      })
    });
  });

  it('should name a file with the passed objs city property', function(done) {

    const testObj = {'City': 'Portland', 'Data': 'Hello World'};
    const callback = function() {
      const dir = 'data';  // this is the test data folder

      fs.readdir(dir, function (err, files) {
        if (err) {    // if you get an error, pass it to the callback to handle
          done(err)
        } else {
          assert.deepEqual(files, ['Portland.txt']);
          done();
        }
      })
    };
    writeToFile(testObj, callback);
  });

  it('should fill a file with a string of the passed obj', function(done) {

    const testObj = {'City': 'Berkeley', 'Data': 'Hello World'};
    const callback = function() {
      const filepath = 'data/Berkeley.txt';  // this is the test data folder

      fs.readFile(filepath, function (err, data) {
        if (err) {    // if you get an error, pass it to the callback to handle
          done(err);
        } else {
          assert.equal(data, "{'City': 'Berkeley', 'Data': 'Hello World'}");
          done();
        }
      })
    };
    writeToFile(testObj, callback);
  })


}); // close describe
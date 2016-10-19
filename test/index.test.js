const assert = require('assert');
const fs = require('fs');
const writeToFile = require('../index');


describe('index', function() {

  beforeEach(function() {
    var path = 'data';
    // remove the directory, because node can't delete files itself without a helper
    fs.rmdir(path, function() {
      // make the directory again, so the files can go somewhere
      fs.mkdir(path, function() {
        console.log('i removed and added the same dir!');
      })
    });
  });


  it('should name a file with the passed objs city property', function(done) {

    const testObj = {'City': 'Portland', 'Data': 'Hello World'};

    const callback = function() {
      const dir = 'data';  // this is the test data folder

      fs.readdir(dir, function (err, files) {
        if (err) {
          done(err)
        }  // if you get an error, pass it to the callback to handle
        else {
          assert.deepEqual(files, ['Portland.txt']);
          done();
        }
      })
    };
    writeToFile(testObj, callback);
  })
});
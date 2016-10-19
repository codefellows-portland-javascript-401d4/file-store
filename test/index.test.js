const assert = require('assert');
const fs = require('fs');
const writeToFile = require('../index');


describe('index', function() {

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
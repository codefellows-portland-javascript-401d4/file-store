const assert = require('assert');
const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
const writeToFile = require('../index');


describe('index', function() {

  beforeEach(function(done) {
    rimraf('data/', function(err) {
        if (err) {
          console.log('error deleting folder: ', err);
          done(err)
        } else {
          fs.mkdir('data', function (err) {
            if (err) {
              console.log('error making folder: ', err);
              done(err)
            } else {
              done();
            }
          });   // close fs.mkdir
        }
      });   // close rimraf
  });   // close beforeEach

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

      fs.readFile(filepath, 'utf8', function (err, data) {
        if (err) {    // if you get an error, pass it to the callback to handle
          done(err);
        } else {
          assert.equal(data, '{"City":"Berkeley","Data":"Hello World"}');
          done();
        }
      })
    };
    writeToFile(testObj, callback);
  })


}); // close describe
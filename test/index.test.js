const assert = require('assert');
const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
const objectStore = require('../index');


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
          assert.deepEqual(files, ['Portland.json']);
          done();
        }
      })
    };

    objectStore.store(testObj, 'City', callback);
  });

  it('should fill a file with a string of the passed obj', function(done) {
    const testObj = {'City': 'Berkeley', 'Data': 'Hello World'};

    const callback = function() {
      const filepath = 'data/Berkeley.json';  // this is the test data folder
      fs.readFile(filepath, 'utf8', function (err, data) {
        if (err) {    // if you get an error, pass it to the callback to handle
          done(err);
        } else {
          assert.equal(data, '{"City":"Berkeley","Data":"Hello World"}');
          done();
        }
      })
    };

    objectStore.store(testObj, 'City', callback);
  });

  it('should retrieve a file by name and return the contents', function(done) {
    const newyork = {"City":"New York","State":"NY","Median_1_BR_price":"$3,370","Median_2_BR_price":"$4,820"};
    const sf = {"City":"San Francisco","State":"CA","Median_1_BR_price":"$3,500","Median_2_BR_price":"$4,770"};
    const boston = {"City":"Boston","State":"MA","Median_1_BR_price":"$2,800","Median_2_BR_price":"$3,200"};

    const callback = function() {
      const filepath = 'data/Boston.json';  // this is the test file
      fs.readFile(filepath, 'utf8', function (err, data) {
        if (err) {    // if you get an error, pass it to the callback to handle
          done(err);
        } else {
          assert.deepEqual(data, '{"City":"Boston","State":"MA","Median_1_BR_price":"$2,800","Median_2_BR_price":"$3,200"}');
          done();
        }
      })
    };

    objectStore.store(newyork, 'City', function() {
      objectStore.store(sf, 'City', function () {
        objectStore.store(boston, 'City', function () {
          objectStore.get('data/Boston.json', callback)
        });
      });
    });
  });

  it('should read files out of a directory as an array', function(done) {
    const newyork = {"City":"New York","State":"NY","Median_1_BR_price":"$3,370","Median_2_BR_price":"$4,820"};
    const sf = {"City":"San Francisco","State":"CA","Median_1_BR_price":"$3,500","Median_2_BR_price":"$4,770"};
    const boston = {"City":"Boston","State":"MA","Median_1_BR_price":"$2,800","Median_2_BR_price":"$3,200"};

    const callback = function(myFiles) {
      const filepath = 'data';
      fs.readdir(filepath, 'utf8', function (err, data) {
        if (err) {    // if you get an error, pass it to the callback to handle
          done(err);
        } else {
          assert.deepEqual(data, myFiles);
          done();
        }
      })
    };

    objectStore.store(newyork, 'City', function(){
      objectStore.store(sf, 'City', function(){
        objectStore.store(boston, 'City', function(){
          objectStore.getAll('data', callback)
        });
      });
    });
  });

}); // close describe
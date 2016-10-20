const store = require('../lib/store');
const get = require('../lib/get');
const fs = require('fs');
const assert = require('assert');
const rimraf = require('rimraf');

const elements = [
  {
    name: 'hydrogen',
    number: 1,
    mass: 1,
    symbol: 'H'
  },
  {
    name: 'helium',
    number: 2,
    mass: 4,
    symbol: 'He'
  },
  {
    name: 'lithium',
    number: 3,
    mass: 7,
    symbol: 'Li'
  },
  {
    name: 'Beryllium',
    number: 4,
    mass: 9,
    symbol: 'Be'
  },
  {
    name: 'Boron',
    number: 5,
    mass: 11,
  }
];

describe('in the file method', function() {
  before(function(done) {
    rimraf('./data/elements', done);
    console.log('rimraffed');
  });

  it('the directory was added', function(done) {
    store.saveFile(elements, 'elements', (err) => {
      if (err) return done(err);
      console.log(fs.existsSync('./data/elements'));
      assert.ok(fs.existsSync('./data/elements'));
      //assert.ok(false);
      done();
    });
  });

  it('merged array same as original array', function(done){
    function secondTest(arr) {
      console.log('test 2 running');
      assert.deepEqual(elements, arr);
      done();
    }
    get.mergeAllFiles('elements', secondTest);  
  });

  it('creates JSON files for only the specified elements', function(done){
    function thirdTest(arr) {
      console.log('test 3 running');
      assert.deepEqual([{name: 'helium', number: 2, mass: 4, symbol: 'He'}, {name: 'Beryllium', number: 4, mass: 9,symbol: 'Be'}], arr);
      done();
    }

    get.findMultipleFiles(['beryllium', 'helium'], thirdTest);  
  });

  it('creates a JSON file for a single specified element', function(done){
    function fourthTest(arr) {
      console.log('test 4 running');
      assert.deepEqual([{name: 'Beryllium', number: 4, mass: 9,symbol: 'Be'}], arr);
      done();
    }

    get.findMultipleFiles(['beryllium'], fourthTest);  
  });

});
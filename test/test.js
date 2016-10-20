const store = require('../lib/store.js');
const assert = require('assert');
const fs = require('fs');
const get = require('../lib/get.js');
const rimraf = require('rimraf');

const elements = [
  {
    name: "hydrogen",
    number: 1,
    mass: 1,
    symbol: "H"
  },
  {
    name: "helium",
    number: 2,
    mass: 4,
    symbol: "He"
  },
  {
    name: "lithium",
    number: 3,
    mass: 7,
    symbol: "Li"
  },
  {
    name: "beryllium",
    number: 4,
    mass: 9,
    symbol: "Be"
  },
  {
    name: "boron",
    number: 5,
    mass: 11,
    symbol: "B"
  }
];

describe('File Store System', function() {

  before(function(done) {
    rimraf('../data/elements', done);
    console.log('Rimraffed!');
  });


  it('elements folder exists', function(done) {
    // test function
    function directoryTest(err) {
      if (err) return done(err);
      assert.ok(fs.existsSync('../data/elements'));
      done();
    };
    // run save elements with test function
    store.saveFile(elements, 'elements', directoryTest);
  });

  it('creates JSON files in the directory whose contents are equal to the original content when parsed', function(done){
    function secondTest(arr) {
      console.log('test 2 running');
      assert.deepEqual(elements, arr);
      done();
    };  
    get.mergeAllFiles('elements', secondTest);  
  });

  it('returns requested files', function(done){
    //test function
    function reqEleTest(arr) {
      assert.deepEqual(arr, [{ name: "helium",number: 2,mass: 4,symbol: "He"}, { name: "lithium",number: 3,mass: 7,symbol: "Li"}, { name: "beryllium", number: 4, mass: 9, symbol: "Be"}]);
      done();
    };
    get.findMultipleFiles(['beryllium', 'lithium', 'helium'], reqEleTest);
  });

  it('creates a JSON file for a single specified element', function(done){
    function fourthTest(arr) {
      console.log('test 4 running');
      assert.deepEqual([{name: "beryllium", number: 4, mass: 9,symbol: "Be"}], arr);
      done();
    };  
    get.findMultipleFiles(['beryllium'], fourthTest);  
  });


});





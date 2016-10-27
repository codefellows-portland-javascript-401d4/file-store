const store = require('../lib/store');
const get = require('../lib/get');
const assert = require('assert');
const fs = require('fs');
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
    name: "Beryllium",
    number: 4,
    mass: 9,
    symbol: "Be"
  },
  {
    name: "Boron",
    number: 5,
    mass: 11,
    symbol: "B"
  }
];
describe('adding and removing files', function(){
  before(function(done){
    rimraf((__dirname).slice(0,-5) + '/data/elements', done);
    console.log('deleted');
  });
 
  it('creates a new directory', function(done){
    function test() {
      console.log('test 1 running');
      console.log('here is the directory', (__dirname).slice(0,-5) + '/data/elements');
      assert.ok(fs.existsSync((__dirname).slice(0,-5) + '/data/elements','../data/elements'));
      done();
    };
    store.saveFile(elements, 'elements', test);
  });
    
  it('creates JSON files in the directory whose contents are equal to the original content when parsed', function(done){
    function secondTest(arr) {
      console.log('test 2 running');
      assert.deepEqual(elements, arr);
      done();
    };  
    get.mergeAllFiles('elements', secondTest);  
  });

  it('creates JSON files for only the specified elements', function(done){
    function thirdTest(arr) {
      console.log('test 3 running');
      assert.deepEqual([{name: "helium", number: 2, mass: 4, symbol: "He"}, {name: "Beryllium", number: 4, mass: 9,symbol: "Be"}], arr);
      done();
    };  
    get.findFiles(['beryllium', 'helium'], thirdTest);  
  });
  it('creates a JSON file for a single specified element', function(done){
    function fourthTest(arr) {
      console.log('test 4 running');
      assert.deepEqual([{name: "Beryllium", number: 4, mass: 9,symbol: "Be"}], arr);
      done();
    };  
    get.findFiles(['beryllium'], fourthTest);  
  });
  it('finds all files in the elements directory', function(done){
    function thirdTest(arr) {
      console.log('test 5 running');
      assert.deepEqual(elements, arr);
      done();
    };  
    get.findFiles(elements, fifthTest);  
  });
});





const store = require('../lib/store');
const get = require('../lib/get');
const scrap = require('../lib/scrap');
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
describe('adding and removing files', function(){
 
  before(function(done){
    scrap.scrapFiles('elements', done);
  });
 
  it('creates a new directory', function(done){
    function test() {
      console.log('test 1 running');
      console.log('here is the directory', (__dirname).slice(0,-5) + '/data/elements');
      assert.ok(fs.existsSync((__dirname).slice(0,-5) + '/data/elements'));
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

  it('finds JSON files for only the specified elements', function(done){
    function thirdTest(arr) {
      console.log('test 3 running');
      assert.deepEqual([{name: "helium", number: 2, mass: 4, symbol: "He"}, {name: "beryllium", number: 4, mass: 9,symbol: "Be"}], arr);
      done();
    };  
    get.findFiles(['beryllium', 'helium'], thirdTest);  
  });
  it('finds a JSON file for a single specified element', function(done){
    function fourthTest(arr) {
      console.log('test 4 running');
      assert.deepEqual([{name: "beryllium", number: 4, mass: 9,symbol: "Be"}], arr);
      done();
    };  
    get.findFiles(['beryllium'], fourthTest);  
  });
  it('finds all files in the elements directory', function(done){
    function fifthTest(filenames) {
      assert.deepEqual([ 'beryllium.json','boron.json','helium.json','hydrogen.json','lithium.json' ], filenames);
      done();
    };  
    get.findAllFiles('elements', fifthTest);  
  });

  it('deletes the elements directory when done', function(done){
    function sixthTest(){
      console.log('test 6 running');
      var arr = (__dirname).split('/');
      arr.pop();
      var directoryPath = arr.join('/');
      directoryPath += '/data/elements/boron.json';
      console.log('sixth directory is', directoryPath);
      fs.readFile(directoryPath, (err, data) => {
        console.log(err);
        if (err) {
          assert.equal(5, 5);
          done();
        }
        else{
          assert.equal(5, 0);
          done();
        }
      });
    };  
    scrap.scrapFiles('elements', sixthTest);
  });


});





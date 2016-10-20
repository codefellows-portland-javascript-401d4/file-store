const store = require('../lib/store.js');
const assert = require('assert');
const fs = require('fs');
const get = require('../lib/get.js');

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

// describe('file system', function() {


//   it('elements folder exists', function(done){
//     function JSONtest(err) {
//       if (err) return done(err);
//       console.log('Stinky Farts!');
//       done();
//     };
//     get.mergeAllFiles('elements', callback);
//   });


//   it('creates correct number of files', function(){

//   });

// });

function testCallback() {
  console.log('Test callback!');
};
function callMergeAll(){
  get.mergeAllFiles('elements', testCallback);
};

store.saveFile(elements, 'elements', callMergeAll);





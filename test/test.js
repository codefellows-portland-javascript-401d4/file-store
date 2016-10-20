const store = require('../lib/store');
const assert = require('assert');
const fs = require('fs');

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

];

describe('file system', function() {


  it('elements folder exists', function(done){
    function JSONtest(err) {
      if (err) return done(err);
      console.log('Stinky Farts!');
      done();
    };
    get.mergeAllFiles('elements', callback);
  });


  it('creates correct number of files', function(){

  });

});





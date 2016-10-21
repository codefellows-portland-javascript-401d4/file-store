var assert = require('chai').assert;
var createFile = require('../lib/createFile');
var readFile = require('../lib/readFile');
var readContents = require('../lib/readContents');
var fs = require('fs');
var mkdirp = require('mkdirp');
var rimraf = require('rimraf');

var superpeople = [
  wonderwoman = {
    id: 'wonderwoman',
    race: 'Amazonian',
    superpower: 'superstrength'
  },

  ironman = {
    id: 'ironman',
    race: 'human',
    superpower: 'powersuit'
  },

  superman = {
    id: 'superman',
    race: 'Kryptonian',
    superpower: 'flight'
  }
]; 

describe('', function(){
  it('writes to file', function(done) {
    createFile('./superhero', superpeople[0], function() {
      fs.readFile('./superhero/wonderwoman.json','utf-8', function(err, data) {
        if (err) throw err;
        console.log(data);
        assert.deepEqual(data,JSON.stringify(wonderwoman));
        done();
      });
    });
  });

  it('writes multiple files', function(done) {
    createFile('./superhero', superpeople[1], function() {
      fs.readFile('./superhero/ironman.json','utf-8', function(err, data) {
        if (err) throw err;
        console.log(data);
        assert.deepEqual(data,JSON.stringify(ironman));
        done();
      });
    });
  });
  
  
  it('read file results', done => {
    readFile('./superhero', function(err, fileArray) {
      assert.deepEqual(fileArray, [ [ 'ironman.json', 'wonderwoman.json' ] ] );
      done();
    });
  });

  it('read content results', done => {
    readContents('./superhero', function(err, results) {
      assert.deepEqual(results,['{"id":"ironman","race":"human","superpower":"powersuit"}', '{"id":"wonderwoman","race":"Amazonian","superpower":"superstrength"}' ]);
      done();
    });
  });


  after(function(done) {
    rimraf('./superhero', function() {
      console.log('err');
      done();
    });
  });
});
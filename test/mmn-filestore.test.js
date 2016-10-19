const assert = require('chai').assert;
const filestore = require('../lib/mmn-filestore.js');
const fs = require('fs');
const rimraf = require('rimraf');
const mkdirp = require('mkdirp');

const song = { title: 'Clocks', artist: 'Coldplay', genre: 'alternative' };
const song2 = { title: 'Tom\'s Diner', artist: 'Suzanne Vega', genre: 'alternative' };
let id = '';

describe('stores and retrieves an object', function() {


  before(function() {
    rimraf.sync('../data');
    mkdirp.sync('../data');
  });

  it('returns an id when obj is stored', function() {
    // Given an object, store the object in a file and return an id
    id = filestore.store(song);
    assert.isDefined(id);
  });

  it('JSON string matches contents of file', function() {
    // Figure out what obj's JSON string looks like, read the file,
    // and compare the file's content's to the JSON string
    let expected = JSON.stringify(song);
    let actual = fs.readFileSync(id + '.json'); // read file contents
    assert.equal(actual, expected);
  });

  it('retrieves an object from file given an id', function() {
    let test_id = 'test';
    let obj = filestore.get(test_id);
    let expected = fs.readFileSync(test_id + '.json');
    assert.deepEqual(JSON.parse(expected), obj);
  });
});

describe('stores and retrieves multiple objects', function() {
  
  before(function() {
    rimraf.sync('../data');
    mkdirp.sync('../data');
  });

  it('stores two objects with unique ids', function() {

    let id1 = filestore.store(song);
    let id2 = filestore.store(song2);
    assert.notEqual(id1, id2);
  });
});
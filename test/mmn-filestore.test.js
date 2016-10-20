const assert = require('chai').assert;
const filestore = require('../lib/mmn-filestore.js');
const path = require('path');
const fs = require('fs');
const rimraf = require('rimraf');
const mkdirp = require('mkdirp');

const myDir = '../data'; 

const song = { title: 'Clocks', artist: 'Coldplay', genre: 'alternative' };
const song2 = { title: 'Tom\'s Diner', artist: 'Suzanne Vega', genre: 'alternative' };
// const song3 = { title: 'Midnight At The Oasis', artist: 'Maria Muldaur', genre: 'classic rock' };
// const song4 = { title: 'Texas Flood', artist: 'Stevie Ray Vaughan', genre: 'blues' };
// const song5 = { title: 'Du Hast', artist: 'Rammstein', genre: 'metal' };
let id = '';
let id1 = 'firstSong';
let id2 = 'secondSong';

describe('stores and retrieves an object', function() {


  before(function() {
    rimraf.sync('../data');
    mkdirp.sync('../data');
  });

  it('returns an id when obj is stored', function() {
    // Given an object, store the object in a file and return an id
    id = filestore.store(id1, song);
    assert.equal(id, id1);
  });

  it('JSON string matches contents of file', function() {
    // Figure out what obj's JSON string looks like, read the file,
    // and compare the file's content's to the JSON string
    let expected = JSON.stringify(song);
    let actual = fs.readFileSync(path.join(myDir, id1 + '.json')); // read file contents
    assert.equal(actual, expected);
  });

  it('retrieves an object from file given an id', function() {
    let test_id = id;
    let obj = filestore.get(test_id);
    let expected = fs.readFileSync(path.join(myDir, test_id + '.json'));
    assert.deepEqual(JSON.parse(expected), obj);
  });
});

describe('stores and retrieves multiple objects', function() {
  
  before(function() {
    rimraf.sync('../data');
    mkdirp.sync('../data');
  });

  it('stores two objects with unique ids', function() {
    id1 = filestore.store(id1, song);
    id2 = filestore.store(id2, song2);
    assert.notEqual(id1, id2);
  });

  it('stores and retrieves an ordered array of objects', function() {

  });
});
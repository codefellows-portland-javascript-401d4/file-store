const assert = require('chai').assert;
const filestore = require('../lib/mmn-filestore.js');
const path = require('path');
const fs = require('fs');
const rimraf = require('rimraf');
const mkdirp = require('mkdirp');

// const myDir = path.resolve(path.dirname(__dirname), '../data');
const myDir = path.resolve(__dirname, '../data');

const song1 = { title: 'Clocks', artist: 'Coldplay', genre: 'alternative' };
const song2 = { title: 'Tom\'s Diner', artist: 'Suzanne Vega', genre: 'alternative' };
// const song3 = { title: 'Midnight At The Oasis', artist: 'Maria Muldaur', genre: 'classic rock' };
// const song4 = { title: 'Texas Flood', artist: 'Stevie Ray Vaughan', genre: 'blues' };
// const song5 = { title: 'Du Hast', artist: 'Rammstein', genre: 'metal' };

let id1 = 'firstSong';
let id2 = 'secondSong';
// let id3 = 'thirdSong';
// let id4 = 'fourthSong';
// let id5 = 'fifthSong';

describe('stores and retrieves an object', function() {

  before(function() {
    rimraf.sync(myDir);
    mkdirp.sync(myDir);
    filestore.setDir(myDir);
  });

  it('returns an id when obj is stored', function(done) {
    // Given an object, store the object in a file and return an id
    filestore.store(id1, song1, function(err, rtn_id) {
      if (err) {
        done(err);
      }
      else {
        assert.equal(rtn_id, id1);
        done();
      }
    });
  });

  it('JSON string matches contents of file', function() {
    // Figure out what obj's JSON string looks like, read the file,
    // and compare the file's content's to the JSON string
    // Since we're using readFileSync for this test, we don't need the 'done' callback
    let expected = JSON.stringify(song1);
    let actual = fs.readFileSync(path.join(myDir, id1 + '.json')); // read file contents
    assert.equal(actual, expected);
  });

  it('retrieves an object from file given an id', function(done) {
    let expected = fs.readFileSync(path.join(myDir, id1 + '.json'));
    filestore.get(id1, function(err, obj) {
      if (err) return done(err);
      assert.deepEqual(JSON.parse(expected), obj);
      done();
    });
  });
});

describe('stores and retrieves multiple objects', function() {
  
  before(function() {
    rimraf.sync(myDir);
    mkdirp.sync(myDir);
    filestore.setDir(myDir);
  });

  it('stores two objects with unique ids', function(done) {

    filestore.store(id1, song1, function(err, rtnId1) {
      if (err) return done(err);
      filestore.store(id2, song2, function(err, rtnId2) {
        assert.notEqual(rtnId1, rtnId2);
        done(err);
      });
    });
  });

  it('retrieves two objects stored above', function(done) {
    filestore.get(id1, function(err, obj1) {
      if (err) return done(err);
      filestore.get(id2, function(err, obj2) {
        assert.deepEqual(obj1, song1);
        assert.deepEqual(obj2, song2);
        done();
      });
    });
  });

  it('stores and retrieves an ordered array of objects', function() {
    assert.fail(null, null, 'Test not implemented yet.');
  });

});

describe('retrieves an array of objects in specified order given an array of ids', function() {

});
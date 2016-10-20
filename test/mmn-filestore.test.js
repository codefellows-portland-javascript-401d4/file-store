const assert = require('chai').assert;
const filestore = require('../lib/mmn-filestore.js');
const path = require('path');
const fs = require('fs');
const rimraf = require('rimraf');
const mkdirp = require('mkdirp');

// const myDir = path.resolve(path.dirname(__dirname), '../data');
const myDir = path.resolve(__dirname, '../data');

const songs = [
  { title: 'Clocks', artist: 'Coldplay', genre: 'alternative' },
  { title: 'Tom\'s Diner', artist: 'Suzanne Vega', genre: 'alternative' },
  { title: 'Midnight At The Oasis', artist: 'Maria Muldaur', genre: 'classic rock' },
  { title: 'Texas Flood', artist: 'Stevie Ray Vaughan', genre: 'blues' },
  { title: 'Du Hast', artist: 'Rammstein', genre: 'metal' }
];

const ids = [
  'firstSong',
  'secondSong',
  'thirdSong',
  'fourthSong',
  'fifthSong'
];

describe('stores and retrieves an object', function() {

  before(function() {
    rimraf.sync(myDir);
    mkdirp.sync(myDir);
    filestore.setDir(myDir);
  });

  it('returns an id when obj is stored', function(done) {
    // Given an object, store the object in a file and return an id
    filestore.store(ids[0], songs[0], function(err, rtn_id) {
      if (err) {
        done(err);
      }
      else {
        assert.equal(rtn_id, ids[0]);
        done();
      }
    });
  });

  it('JSON string matches contents of file', function() {
    // Figure out what obj's JSON string looks like, read the file,
    // and compare the file's content's to the JSON string
    // Since we're using readFileSync for this test, we don't need the 'done' callback
    let expected = JSON.stringify(songs[0]);
    let actual = fs.readFileSync(path.join(myDir, ids[0] + '.json')); // read file contents
    assert.equal(actual, expected);
  });

  it('retrieves an object from file given an id', function(done) {
    let expected = fs.readFileSync(path.join(myDir, ids[0] + '.json'));
    filestore.get(ids[0], function(err, obj) {
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

    filestore.store(ids[0], songs[0], function(err, rtnId1) {
      if (err) return done(err);
      filestore.store(ids[1], songs[1], function(err, rtnId2) {
        assert.notEqual(rtnId1, rtnId2);
        done(err);
      });
    });
  });

  it('retrieves two objects stored above', function(done) {
    filestore.get(ids[0], function(err, obj1) {
      if (err) return done(err);
      filestore.get(ids[1], function(err, obj2) {
        assert.deepEqual(obj1, songs[0]);
        assert.deepEqual(obj2, songs[1]);
        done();
      });
    });
  });
});

describe('array retrieval', function() {

  before(function(done) {
    rimraf.sync(myDir);
    mkdirp.sync(myDir);
    filestore.setDir(myDir);
    // Store 5 objects - call store 5 times with id1, song1... id2, song2...
    let rtn_ids = [];
    ids.forEach(function(val, index) {
      filestore.store(val, songs[index], function(err, rtn_id) {
        if (err) return done(err);
        rtn_ids.push(rtn_id);
        if (rtn_ids.length === ids.length) done();
      });
    });
  });
  
  it('retrieves an array of objects in specified order given an array of ids', function(done) {
    // Make an array of ids (simulate Dave)
    const req_arr = [ ids[0], ids[4], ids[2] ];
    // Call our getCollection method with array of ids
    // Once we have all objects, compare each object with corresponding test object
    filestore.getCollection(req_arr, function(err, rtn_arr) {
      if (err) return done(err);
      assert.deepEqual(rtn_arr[0], songs[0]);
      assert.deepEqual(rtn_arr[1], songs[4]);
      assert.deepEqual(rtn_arr[2], songs[2]);
      done();
    });
  });

});
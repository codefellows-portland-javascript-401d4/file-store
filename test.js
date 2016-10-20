var assert = require('chai').assert;
var fs = require('fs');
var store = require('./lib/store');
var rimraf = require('rimraf');

// test case cat removal
rimraf('./cats/felix.json', function(err){
    console.log(err);
});

describe('store', () => {
    it('just checks whether we can call the api', done => {
        fs.readdir('./cats', (err, files) => { console.log(files);
            done();
        });
    });
    it('makes sure that storeObject is able to filter correctly', done => {
        store.store({id: 'foo'}, './cats', done);
    });
    it('puts in a new object', done => {
        store.store({id: 'felix'}, './cats', function(err, data){
            assert.equal(data, 'felix');
            done()
        });
    });
    it('retrieves object by id', done => {
        store.retrieve('felix', './cats', done);
    });
    it('Deep comparison of objects')
});


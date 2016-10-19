var assert = require('chai').assert;
var fs = require('fs');
var store = require('./lib/store');
var rimraf = require('rimraf');

describe('store', () => {
    it('just checks whether we can call the api', done => {
        fs.readdir('./cats', (err, files) => { console.log(files);
            done();
        });
    });
    // it('gets the foo', done => {
    //     fs.readFile('./cats/foo.json', 'utf-8', (err, data) => { console.log(data);
    //         done();
    //     });
    // });
    it('makes sure that storeObject is able to filter correctly', done => {
        store.store({id: 'foo'}, './cats', done);
    });
    it('puts in a new object', done => {
        store.store({id: 'felix'}, './cats', done);
    });
});

// test case cat removal
rimraf('./cats/felix.json', function(err){
    console.log(err);
});

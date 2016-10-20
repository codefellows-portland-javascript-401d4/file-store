var assert = require('chai').assert;
var fs = require('fs');
var store = require('./lib/store');
var rimraf = require('rimraf');

describe('store', () => {    
    before(function(done) {
        fs.readdir('./cats', 'utf-8', function(err, files) {
            if (err) done(err);
            if (files.length < 1) done();
            else {
                files.forEach(function(filename) {
                    rimraf('./cats/' + filename, function(err){
                        console.log(err);
                    });
                });
                done();
            };
        });
    });
    it('just checks whether we can call the api', done => {
        fs.readdir('./cats', 'utf-8', (err, files) => { 
            if (err) done(err);
            else done();
        });
    });
    // it('makes sure that storeObject is able to filter correctly', done => {
    //     store.store({id: 'foo'}, './cats', done);
    // });
    // it('puts in a new object', done => {
    //     store.store({id: 'felix'}, './cats', function(err, data){
    //         assert.equal(data, 'felix');
    //         done()
    //     });
    // });
    // it('retrieves object by id', done => {
    //     store.retrieve('felix', './cats', done);
    // });
    // it('Deep comparison of objects');
});


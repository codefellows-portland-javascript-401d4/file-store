var assert = require('chai').assert;
var fs = require('fs');
var store = require('./lib/store');
var rimraf = require('rimraf');

var felix = {
    id: 'felix',
    age: 19,
    color: 'black and white'
};

var nyan = {
    id: 'nyan',
    age: 5,
    color: 'gray and poptart'
};

var tardar = {
    id: 'tardar',
    age: 6,
    color: 'white and gray'
};

var catArray = [felix, nyan, tardar];
var catNameArray = ['felix', 'nyan', 'tardar'];

describe('store', done => {    
    before(done => {
        fs.readdir('./cats', 'utf-8', function(err, files) {
            if (err) done(err);
            if (files.length < 1) done();
            else {
                files.forEach(function(filename) {
                    rimraf('./cats/' + filename, function(err){
                        //console.log(err);
                    });
                });
                done();
            };
        });
    });

    after(done => {
        fs.readdir('./cats', 'utf-8', function(err, files) {
            if (err) done(err);
            if (files.length < 1) done();
            else {
                files.forEach(function(filename) {
                    rimraf('./cats/' + filename, function(err){
                        //console.log(err);
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

    it('puts in a new object', done => {
        store.store(felix, './cats', function(err, data){
            assert.equal(felix.id, 'felix');
            done();
        });
    });

    it('checks that felix is already inside the lib', done => {
        store.store(felix, './cats', function(err, id, array) {
            assert.equal(err, 'this object exists already and has an id of felix');
            done();
        });
    });

    it('Deep comparison of objects', done => {
        store.retrieve('felix', './cats', function(err, data, array) {
            assert.deepEqual(data, felix);
            done();
        });
    });

    it('cleans out directory before doing large scale test', done => {
        fs.readdir('./cats', 'utf-8', function(err, files) {
            if (err) done(err);
            if (files.length < 1) done();
            else {
                files.forEach(function(filename) {
                    rimraf('./cats/' + filename, function(err){
                        //console.log(err);
                    });
                });
                done();
            };
        });
    });
});

describe('check that all files were properly stored', done => {
    before( done => {
        for (let i = 0; i < catArray.length; i++) {
            store.store(catArray[i], './cats', (err, id, array) => {
                //console.log(array);
            });
        };
        done();
    });

    it('checks that we didn\'t store a duplicate file and array returned is correct for all files properly stored', done => {
        store.store(nyan, './cats', (err, id, array) => {
            assert.equal(err, 'this object exists already and has an id of nyan');
            assert.deepEqual(array, catNameArray);
            done();  
        });
    });

    it('checks to make sure that retrieve gives us a sorted array of all resources if you retrieve any ID', done => {
        store.retrieve('tardar', './cats', (err, data, array) => {
            assert.deepEqual(data, tardar);
            assert.deepEqual(array, catArray);
            done();
        });
    });
});
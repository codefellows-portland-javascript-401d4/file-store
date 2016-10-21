var getDir = require('../lib/get-dir');
var assert = require('assert');
var fs = require('fs');
var rimraf = require('rimraf');
var mkdirp = require('mkdirp');

describe('get-dir', function() {
    var trees = [{name: 'oak', deciduous: false, age: 150},
                 {name: 'pine', deciduous: false, age: 20},
                 {name: 'maple', deciduous: true, age: 50}];
    var dirPath = './tree-dir/';

    before(function(done){
        rimraf(dirPath, () => {
            mkdirp(dirPath, () => {
                trees.forEach(f => {
                    fs.writeFileSync(dirPath + f.name +'.txt', JSON.stringify(f));
                });
                done();
            });
        });
    });

    after((done) => {rimraf(dirPath, done);});

    it('gets all file contents', function(done) {
        assert.deepEqual(getDir(dirPath, done), trees);
        done(); 
    });

    it('returns an array', done => {
        assert.deepEqual(Array.isArray(getDir(dirPath, done)), true);
        done();
    });
});
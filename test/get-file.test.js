var getFile = require('../lib/get-file');
var assert = require('assert');
var fs = require('fs');
var mkdirp = require('mkdirp');
var rimraf = require('rimraf');


describe('get-file', function() {
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

    it('gets a file from the directory', done => {
        assert.deepEqual(getFile(dirPath + 'oak.txt', done), trees[0]);
        done();
    });
});
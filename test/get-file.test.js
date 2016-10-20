var getFile = require('../lib/get-file');
var assert = require('assert');
var fs = require('fs');


describe('get-file', function(done) {
     var trees = [{name: "oak", deciduous: false, age: 150},
                 {name: "pine", deciduous: false, age: 20},
                 {name: "maple", deciduous: true, age: 50}]
    var dirPath = 'tree-dir/';

    it('gets a file from the directory', done => {
        assert.deepEqual(getFile(dirPath + 'oak.txt', done), trees[0]);
        done();
    })
})